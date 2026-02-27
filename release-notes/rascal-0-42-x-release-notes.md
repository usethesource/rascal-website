---
authors: [thartman]
title: "Rascal 0.42.x release notes"
sidebar_position: 86
---

In this post we report on the Rascal release 0.42.x

## Release 0.42.0 - March, 2026

Welcome to Rascal 0.42.0! <!-- This release comes with great improvements in usability (parse error recovery, loading speed)
and enormous progress with type-checking and compilation. Numerous additions to the standard library and a _big change_ in the Java language support setup... -->
These release notes are organized by major topics and there is a list of smaller improvements at the end, including a list of linked closed issues and the merged pull requests.

Many, if not most, of the improvements to the Rascal project were both funded and executed by Swat.engineering BV. Thanks!

:::info
All Eclipse functionality, including the `rascal-eclipse` plugin and the Eclipse IDE Metatooling Platform (IMP a.k.a. `impulse`), was _archived_ last year, after having been deprecated for a long time.
Everybody is expected to use Rascal now using the VS Code extension, or using the commandline REPL, or from their own LSP clients. With this move to VS Code the `Figure` library (embedded in `rascal-eclipse`)
is no longer available, until we create a replacement. The pre-existing releases of `rascal-eclipse` and `impulse` will _not_ remain available forever on `usethesource.io`,
for the sake of security and simplicity.
:::

### Fast and Consistent Configuration via Maven's `pom.xml`

> *warning* The way Rascal is configured is gradually migrating from using `RASCAL.MF` to using `pom.xml`. Dependencies (Java, Rascal or otherwise) already come from a `pom.xml` file's `<dependencies>` list. Every project should have one, with at least a dependency on the Rascal project itself.

* `Require-Libraries` in `RASCAL.MF` is no longer in use. You will be warned by the IDE about this.
* The interpreter is now also configured by `pom.xml`, just like the compiler. `Sources` still come from `RASCAL.MF` for the interpreter, but not for the checker and the compiler. For now you have to keep `RASCAL.MF` and `pom.xml` in line w.r.t. the configuration of the local source folders.
* `pom.xml` parsing is done locally and quickly, and so is configuring variables and resolving and downloading dependencies.
* The version of the bootstrap jar is now an explicit parameter in `pom.xml`, and it is downloaded automatically when required. This is only relevant for developers working on the Rascal project itself.
* Locations of library dependencies are always normalized to `mvn://` or `jar+file://` such that file access inside a library is always done in the same way and very few clients have to distinguish different cases of `loc` schemes. Normalization
to the `mvn://` scheme also enables debug-stepping through library code with the Rascal debugger.
* The old `lib://` scheme has completely disappeared, in favor of `mvn://` which is more precise due to the additional version number and group id.
* The computations that configure the interpreter and the compiler, by constructing a PathConfig, were re-implemented and rationalized.

### REPL/Console improvements

* The REPL consistently prints what its configuration is (versions, source path, classpath, runtime environment, standard library).
* The REPL was re-implemented from jline2 to **jline3**; with important usability enhancements among which _multiline editing_.
* The textual progress bar and printing to stderr was improved radically (sometimes prints were lost), also due to the upgrade to jline3.
* The REPL starts _much_ faster, due to a re-implementation of the Maven features for acquiring the exact locations of dependencies.
* Module reloading is faster and more accurate on macOS due to the new File Watches (see below).
* Automatically reloading a module is always announced via an info message.
* Automatic reloading now works for (extended) modules with errors.
* Loading of modules in cycles has been improved so no definitions or messages from imported are lost anymore.
* The `:set` options grammar was extended with optional `;`'s and also further implemented.
* All other `:` commands are now implemented. See `:help` for instructions.
* You can now `:undeclare` functions and variables without having to restart the REPL, for example.
* All `:` commands accept accidentally typed `;` semicolons at the end.
* An empty line no longer "cancels" a command, so multiline pasted code work better. Instead CTRL+C or simply `;` + ENTER will get you restarted.
* Commandline parsing via keyword parameters of `main` was extended and stabilized. Use `--help` of `-help` on a main
with example keyword parameters to get an idea: `void main(int age=0, str name="")`. Execute by `java -cp rascal.jar org.rascalmpl.shell.RascalShell my::mod::Name --help`. You can also create your own Java class and extend `AbstractCommandlineTool` to call their `main`, given the top module name and a source path. There are some bells and whistles for `PathConfig pcfg` parameters; namely all the individual fields of `PathConfig` will be added to the commandline parameters, and `--project <loc>` is used to call `util::Reflective::getProjectPathConfig` automagically when a `PathConfig` parameter is present.

### File watching

The file watching feature, both the Java and the Rascal API, were re-implemented from scratch based on
Swat.engineering's [Java Watch](https://github.com/SWAT-engineering/java-watch). This comes with several enhancements but also
serious bug fixes. The stability and efficiency was improved with respect to recursive file watching and deletion and creation
of (recursive) folders under watch. Most importantly file watching now also works effectively on **Mac OSX**, which it didn't before.

The file watching API is important for reloading Rascal modules on the REPL when necessary, but also file-based language
processors (for DLSs) which can do incremental and/or modular analysis or code generation benefit from this feature. See the
`IO` module for more information.

### Merging the Maven Plugin, Tutor, Checker and the Compiler into the Main Rascal Project

Previously the checker and the compiler resided in the `rascal-core` project because they were experimental. Also
the `rascal-tutor` project was separate for faster release cycles in its second experimental phase.
We moved on and merged them all back into the `main` development branch of the [rascal](https://github.com/usethesource/rascal)
project. This improves cohesion and lowers coupling, but most importantly it cuts the bootstrapping release cycles
between four projects: `rascal`, `rascal-tutor`, `rascal-maven-plugin` and `rascal-core`. `rascal-tutor` and `rascal-core` have
been _archived_ on GitHub and usethesource.io.

All progress in the checker and the compiler is now directly available in the Rascal project. We made sure to
clone the entire commit history of `rascal-core` into the `rascal` project, for search and attribution purposes.

Also all complex behaviors in `rascal-maven-plugin` have been moved to command-line tools in the `rascal` project,
including parallel type checking. The maven plugin project is now only a shell which calls the command-line tools from the
released jar. Instead of the Rascal version which is configured by the `rascal-maven-plugin` it will use
the version of Rascal described in the `pom.xml` of the _client_ project. The plugin also prints warnings and
errors if the versions are out-of-date or inconsistent. This is yet another cyclic bootstrap dependency
removed, since now we don't need a release of `rascal-maven-plugin` to use a new version of `rascal`.

### Merging debugger and other LSP core features into the main Rascal project

To increase cohesion and lower coupling between the `rascal` project and the `rascal-lsp` project
core features of rascal-lsp are being moved into the rascal project. This is ongoing. One of the goals
is to be able to run any rascal version with the VS Code extension, depending on a project's dependency
on Rascal rather than the extension's dependency on rascal.
This will also facilitate new LSP client (other editors than VS Code) to connect to Rascal's LSP,
including the advanced terminal support and loading LSP extensions for DSLs.
Also it lowers our maintenance costs and increases the speed of our release cycles.

* The Debug Adapter Protocol (DAP) implementation (an extension to the Language Service Protocol) was moved to the Rascal project.
* Several core infrastructure features of the Language Service Protocol server for Rascal (and DSLs written in Rascal) moved along with it.
For example: mapping UTF16 characters (LSP editors) to UTF32 (Rascal parsers) and back.
* the REPL extensions in VS Code (such as automatic reloading of modules) got moved to the generic rascal REPL.

### Debugger improvements

* Show all variables with subtype of `Tree` as trees in variables view.
* Show symbol constructor argument names in variables view.
* Fix issues with keyword parameter value computation.
* Refactored and fixed the computation of debug step scopes.
* Changed the behavior of step-over for block statements to step over the condition, into the body.
* Breakpoint suspension is now global, which means that step-over will not skip breakpoints deeper in statements anymore.

### Type checker improvements

* Static analysis of several Rascal constructs was improved, especially when types or functions
are merged due to the `extend` feature: constructors, globals, type parameters of functions, field selection.
* Subtype and lub were improved for corner cases with higher-order functions.
* Several checker issues caused by colliding extended modules were resolved.
* The checker now has an **incremental** mode which is much faster in an IDE context.
* Type inference was strengthened by inheriting more information from the context.
* The checker already worked module-by-module, but now each module is represented by
an _abstract interface_ consisting only of logical fully qualified names of declared items (also represented by `loc`). This
enables "binary backward compatibility" where an existing binary (.tpl and/or .class file) from a library
can still be linked and loaded with newer client code, and even newer binary libraries can be linked and loaded with older
client binaries as long as the aforementioned interface hasn't changed too much. We are documenting when and how interfaces
change, and what kind of action is required from a client depending on the kind of changes to a library.
* The checker analyzes whether a binary library is (still) compatible and produces diagnostic information if not.
* The whole checker is now tested incrementally on a selected set of external Rascal libraries and programs, and the Rascal project itself, for regressions.
* Character classes are now fully supported, in line with the semantics of the interpreter where `char(10)` has the dynamic type `[\n]`. The checker now assumes any `char(_)` term has type `![] + [\0]`. Subtyping for character classes is subclassing, `lub` is class union and `glb` is class intersection.
* Any type like `tuple[int, void]` is considered equivalent to `void` in _all circumstances_ (also as return types). Since tuple instances with void fields do not exist, any such type is "void" of values. The canonical type that represents the empty set of values is `void`. The same holds for function type parameters: `int (void, int)` is equivalent to `void` for the same reason. Functions with `void` parameters do not exist in Rascal, hence such type terms are canonically reduced to `void`. This reduction to one simple case is essential for downstream analyses --- for example, the static checking of assignments and return values (where `void` is treated exceptionally). Another example is the semantics of dynamic dispatch where a `void` return type produced by the dynamic instantiation of type variables will lead to overload application failure (`CallFailed`) and/or backtracking.
* The implementation of the extend feature as well as the related overloading resolution were overhauled completely.
* Fixed propagation of outdated information for downstream extended modules.

### Tutor improvements

* For disambiguation purposes the package URLs have changed on the generated websites: For example: `https://www.rascal-mpl.org/docs/Packages/Clair/` is now `https://www.rascal-mpl.org/docs/Packages/org.rascalmpl.clair`.
* Tutor indexing and compilation was made (more) incremental per Markdown file, documentation folder and Rascal module. If modules
are removed from a project or renamed, the incrementally constructed index in `target/classes/docs/index.value` is _not_
automatically invalidated. Only removing that file (`mvn clean`) will uncover all possible linking errors introduced
by the removal/renaming. Otherwise only modules which have been edited will be re-documented. Old errors in unchanged
modules are always reported again with each incremental run.
* Added progress bar for loading indices and compiling Markdown code.
* Added optional author lists to a package's presentation.
* Better error handling around the screenshot feature.
* Added a call-out feature.
* Added `rascal-declaration` blocks, which show as simple highlighted top-level declarations in the documentation, but are
declared in the currently running REPL as a side-effect for later use.
* Show issue tracker location on the main page.
* Modules called `demo*` (case insensitive) or modules nested under packages called `demo` are presented differently than normal modules. Their tests are always shown fully and the bodies of all functions are expanded fully in the documentation.
* If a code block expects errors but no errors are reported, this is now flagged as an error.
* Added citations and funding to the main page of a package (not optional).
* Added github links to sources where possible.
* Ambiguous link errors now propose a minimal amount of _exact_ and _shortest_ solutions for choosing one of the current alternatives.

### Standard Library Maintenance

* `lang::java::{m3,flow,syntax,tests}::*` were all moved to the [java-air](https://www.rascal-mpl.org/Packages/org.rascalmpl.java-air) project. This also removes the `pom.xml` dependencies on the Eclipse JDT and OW2 ASM libraries. All functionality was ported as-is to the other project. Module and package
names have remained the same and so have internal Java-based mapping code classes and packages.
   * Now you have to add a dependency in your `pom.xml` file on `java-air` (see above).
   * `java-air` is expected to release more often in one year, namely adding support for JLS >14 versions.
   * Please report Java analysis issues with the `java-air` project from now on, where appropriate.
   * All existing issues have been moved to the new repository on GitHub.
* `analysis::text::search::*` was extracted into a separate library: [rascal-lucene](https://github.com/usethesource/rascal-lucene). This lucene-based two-way integration with Rascal offers _very fast_ (approximate or exact) text indexing and search facilities. It integrates with Rascal's grammars and parsing features and functions, to create syntax-directed and semantics-directed indexing features for programming languages, domain-specific languages as well as their comments and documentation. It was separated to allow for independent evolution as well as to reduce the binary deployment footprint and (transitive) dependency list of the core Rascal project. Example application areas include IDEs with documentation search features, feature location applications, requirements engineering, software maintenance and evolution --- all applications where quick access to _relevant_ documents or code is essential.
* `lang::xml::IO` was extended with a _streaming_ API for XML nodes in very large but repetitive documents. See the `streamXML` function.
* `Type` was cleaned up radically. The cloned implementations of subtype, lub, glb, intersects now directly call their native Java implementations via "unreification". The resulting Types of lub and glb are then "reified" as values again and returned to the caller. Extensive specification-based tests were added to document the formal properties of the type system (it's a _finite lattice_.)
`lrel` and `rel` were completely removed from the `Symbol` representation, as these are always normalized to `list[tuple[...]]` and `set[tuple[...]]`. `bag` was also removed because we never implemented it.
* The `PathConfig` type was cleaned up and factored into its own module `util::PathConfig`. It will serve as the common intermediate representation between configuration code (Maven, VS Code, Eclipse) and file-based language processors. `PathConfig` now also has a `messages` field where errors and warnings detected during configuration steps can be communicated to the user.
* `Box2Text` was optimized, including more fixes to making arrays (tables) more robust. Empty H, V, HV and HOV boxes are now always removed before outlining, to avoid spurious spacing.
* `analysis::diff::edits::HifiTreeDiff` and `analysis::diff::edits::HifiLayoutDiff` were added. The first computes `TextEdit` by looking at the differences between an original tree and a rewritten tree. The algorithm tries
to maintain as much accidental whitespace, indentation and comments from the original as possible. The second does the same where the rewritten tree is a _formatted_ version of the original. A minimum set of whitespace
edits are computed such that the formatting is executed as defined, while it also tries to recover comments as much as possible from the original. Both algorithms are keystones of source-to-source transformation pipelines
for syntax- and semantics-directed features in IDEs.
* `HiFiLayoutDiff` can map all case-insensitive literals to all lowercase, all UPPERCASE, Capitalized or as originally printed, or as formatted by `toBox` (five modes).
* `toBox` no longer implements comment preservation (badly) because this is now covered by `HiFiLayoutDiff` (excellently).
* Added `ParseTree::reposition` function which has all the bells and whistles to add and remove `src` annotations on `Tree` nodes. Can be used to decrease the memory footprint of full parse trees without removing syntactic information,
but also to add position information where it previously wasn't for more accurate analyses.
* `IO` now has full `stat` capabilities, also on the Java API side in `URIResolverRegistry`.
* Renamed `DocumentEdit` to `FileSystemChange`, and also factored the concept into its own module. documented it and renamed some functions for the sake of consistency; top-level function names have been kept with `@deprecated` tags. Also `DocumentEdit` was aliased to the new name `FileSystemChange` for backward compatibility in Rascal code (this does not help for Java code).
* `Message` now has a default way of printing messages, `writeMessages`, and a default way of reporting messages in `main` functions, featuring the correct return value (`0` for no errors, non-`0` for errors), and the interpretation of `errorsAsWarnings` and `warningsAsErrors`.
* `Message` has `causes` now, where additional information about how an error or warning came to be can be linked. These are unfoldable in the diagnostics view of your IDE, and they are printed with each error on the console.
* In `IDEServices`, `Message` has `fixes` now where you can register `CodeAction` (quick fixes) for the error that was introduced.
These fixes are picked up by the LSP server and integrated into VS Code's Diagnostics view. They are ignored when printing
a `Message` to the console.
* `IO::watch` now uses the constructors from `analysis::diff::edits::FileSystemChange` to report updates to files.
* `String::indent` was added; which exposes the internal lazy and linear implementation of string indentation. Very fast.
* `lang::rascal::vis::ImportGraph` contains an experimental visualization of the import and extend graph. It reads the information from the files directly.
* `IO` adds base32 support
* The documentation of the standard library was improved in dozens of modules; typos, old explanations, forgotten features.
* `IO` adds "capabilities" support (which are not permissions), telling you based on a location's scheme and file
whether you can read, write, load classes, etc. from this location or not.
* The use of production `@category` tags for syntax highlighting (see `ParseTree`) were made consistent with the token categories
for the Language Service Protocol and VS Code, all over the standard library.
* The new module `lang::java::Compiler` contains access to the OpenJDK Java compiler from Rascal, fully supporting any `loc`-based
file system for sources, targets and libraries, configurable using `util::PathConfig`. This is useful for DSL compilers
that generate Java code as an intermediate language. Use an in-memory file system (`memory://my-file-system/`), for example,
for very fast compilation times and easy clean-up, under-the-hood.
* The new module `lang::java::Runner` makes it possible to execute any `main` method in any compiled JVM class, as well as
running the test methods of any `JUnit` class. The classpath is configured as a `list[loc]`. In particular working with `mvn://` locations is effective (fast) this way.
* `util::Monitor::job` now throws a useful exception rather than `CallFailed` if the function or closure that is passed accidentally returns `void` (which is _not_ allowed).
* A number of features were added to `lang::json::IO` which also impact `Content` servers and `util::WebServer` positively and `util::LanguageServer`. We can now print certain `data` types to string, just-in-time before serializing to JSON, and also parse that data back when it comes back from a web client (for example). Also it's possible to make all constructors explicit or just their data types as the first field of an object: `{ _type="Expression" }`. This comes in handy sometimes on the TypeScript or JavaScript side of things. On the way back, these fields are used for validation purposes.
* Parse error reporting in `lang::json::IO` was radically improved, and origin locations along with them (they use the same internal administration of parsing positions).
* `lang::json::IO` now supports mapping `null` to Rascal and back in different ways: it writes nothing at all (not even the key) for absent keyword parameters, and for `Maybe[void]::nothing()` it writes `null`. On the way back `null` becomes `Maybe[void]::nothing()` if a `Maybe[&T]` was expected, and keyword parameters are not bound if the value with a key was `null`. Also `null` elements in arrays are skipped. So if `null`s are expected in the input, use `Maybe[&T]` or keyword fields with defaults to model those on the Rascal side.
* `lang::json::IO` squeezes arbitrary precision `real`'s into JSON's floats. Integers are kept as-is, because JSON supports
any integer and does not have overflow. Of course on the client side you will still have to deal with overflow when the number
is bound to a field or variable.
* `lang::json::IO`'s eight year old deprecated functions have finally been removed completely.
* `Content` server now serves long (HTML or JSON) strings using the internal concat/indent stream. This halves the memory
consumption for large files, and still uses the fast internal streaming `Reader` on the implementations of `IString`. Also
large files can now already be received and consumed by the client, in parallel, while the Rascal server is still sending. This has a positive effect on response times on the client side for web applications on the REPL with `Content`, using `util::Webserver` and the Language Service Protocol with `util::LanguageServer`.

### Other Rascal Interpreter changes

* Throwing and catching `StackOverflow` and `OutOfMemory` is possible again, due to not triggering `OutOfMemory` or `StackOverflow` during the handling of these exceptions.
* Rascal IO exceptions have been improved to include much more information, to clarify what caused them to be thrown.
* The `visit` statement now _always_ memoizes `amb` clusters; this brings down the worst-case complexity of a visit with nested ambiguity to polynomial numbers (instead of the previous exponential amounts of nested combinations).
* Duplicate overloads, present due to the exact same functions being extended from different directions in the extend graph, were eliminated. This greatly affects the efficiency of functions with only a few overloads, when the high count was caused by "diamond-shaped" extend graphs. Otherwise it doesn't do much for efficiency.

### Merged Pull Requests since version 0.41.2

The following list gives access to detailed progress and discussions regarding this progress. If you are interested in
contributing to Rascal then we'd use the "pull request" model together like this:

* [#2573](https://github.com/usethesource/rascal/pull/2573) - Limit suspension to a single thread
* [#2578](https://github.com/usethesource/rascal/pull/2578) - Glitch in checker pointer out by @mahills
* [#2523](https://github.com/usethesource/rascal/pull/2523) - Evaluation DAP
* [#2587](https://github.com/usethesource/rascal/pull/2587) - Allow using negative index in nested list assignment
* [#2588](https://github.com/usethesource/rascal/pull/2588) - Slicing out of bound modification
* [#2576](https://github.com/usethesource/rascal/pull/2576) - Conditional breakpoint
* [#2586](https://github.com/usethesource/rascal/pull/2586) - Disable source for REPL DAP stack frame
* [#2590](https://github.com/usethesource/rascal/pull/2590) - Fixes issue [#2575](https://github.com/usethesource/rascal/issues/2575) by implementing shadowing correctly for local function variables
* [#2594](https://github.com/usethesource/rascal/pull/2594) - Write VS Code settings when generating a new project
* [#2593](https://github.com/usethesource/rascal/pull/2593) - Depend on vallang with fix for sublist equality
* [#2592](https://github.com/usethesource/rascal/pull/2592) - Fixes [#2554](https://github.com/usethesource/rascal/issues/2554); degenerate case of a cyclic import with an extended cyclic type dependency
* [#2595](https://github.com/usethesource/rascal/pull/2595) - Fix REPL interaction problems around non-existent modules
* [#2543](https://github.com/usethesource/rascal/pull/2543) - Rascal exception breakpoint
* [#2599](https://github.com/usethesource/rascal/pull/2599) - No longer wrapping complex types in an auxiliary JSON object
* [#2602](https://github.com/usethesource/rascal/pull/2602) - This fixes [#2598](https://github.com/usethesource/rascal/issues/2598) if followed by an update of rascal-maven-plugin
* [#2607](https://github.com/usethesource/rascal/pull/2607) - Using vallang-1.0.1-RC1 and capsule-0.7.2 to solve [#2606](https://github.com/usethesource/rascal/issues/2606)
* [#2603](https://github.com/usethesource/rascal/pull/2603) - added includeLibraries option which simply copies the contents of the docs folder from all library dependencies
* [#2609](https://github.com/usethesource/rascal/pull/2609) - added backward compatibility mode if the new relocatedClasses parameter is missing
* [#2585](https://github.com/usethesource/rascal/pull/2585) - Native logical locs
* [#2608](https://github.com/usethesource/rascal/pull/2608) - Update Rascal Maven to 0.30.6
* [#2611](https://github.com/usethesource/rascal/pull/2611) - Do not show 'unresolved dependency' errors that have been resolved in the workspace
* [#2596](https://github.com/usethesource/rascal/pull/2596) - Support import command inside debug console
* [#2613](https://github.com/usethesource/rascal/pull/2613) - Fix how module names are printed in jobStep
* [#2617](https://github.com/usethesource/rascal/pull/2617) - Fix static warnings in standard library
* [#2619](https://github.com/usethesource/rascal/pull/2619) - Fixed type-incorrect Gson configuration methods
* [#2615](https://github.com/usethesource/rascal/pull/2615) - Add support for sibling projects in the maven resolver
* [#2620](https://github.com/usethesource/rascal/pull/2620) - Fix/packager
* [#2625](https://github.com/usethesource/rascal/pull/2625) - Fixed illegal call
* [#2626](https://github.com/usethesource/rascal/pull/2626) - Added (temporary) extra safeguard against physical locations (due to erroneous packager)
* [#2627](https://github.com/usethesource/rascal/pull/2627) - Another safety measure
* [#2616](https://github.com/usethesource/rascal/pull/2616) - Remove obsolete functions
* [#2629](https://github.com/usethesource/rascal/pull/2629) - Fix packager test
* [#2582](https://github.com/usethesource/rascal/pull/2582) - Debugger restart frame
* [#2628](https://github.com/usethesource/rascal/pull/2628) - Improving copy performance since the packager depends on it now
* [#2630](https://github.com/usethesource/rascal/pull/2630) - Fix rascal summary
* [#2634](https://github.com/usethesource/rascal/pull/2634) - Added new usedef tests (including unicity of defs)
* [#2635](https://github.com/usethesource/rascal/pull/2635) - Added missing import of lang::rascalcore::check::LogicalLocations
* [#2640](https://github.com/usethesource/rascal/pull/2640) - Clean-up of jsonrpc test output
* [#2638](https://github.com/usethesource/rascal/pull/2638) - Fixing issue [#2633](https://github.com/usethesource/rascal/issues/2633), buffer overflow during gson parsing throws off origin tracker
* [#2646](https://github.com/usethesource/rascal/pull/2646) - Made messages related to ignore more precise
* [#2647](https://github.com/usethesource/rascal/pull/2647) - Fix doc tags, spelling errors and types in library documentation
* [#2639](https://github.com/usethesource/rascal/pull/2639) - Fix Prelude documentation
* [#2653](https://github.com/usethesource/rascal/pull/2653) - Fix/better handling of ignore
* [#2636](https://github.com/usethesource/rascal/pull/2636) - Fix errors in integration tests 2
* [#2648](https://github.com/usethesource/rascal/pull/2648) - Fix/check ignored test
* [#2652](https://github.com/usethesource/rascal/pull/2652) - New test scenarios for handling TPLs with outdated version number
* [#2644](https://github.com/usethesource/rascal/pull/2644) - OS independent logical locs
* [#2655](https://github.com/usethesource/rascal/pull/2655) - Fix/two-issues-in-integration-tests
* [#2656](https://github.com/usethesource/rascal/pull/2656) - Removed two unused files that cause type errors
* [#2657](https://github.com/usethesource/rascal/pull/2657) - Fix module reloading
* [#2658](https://github.com/usethesource/rascal/pull/2658) - Fixed small errors found during integration testing
* [#2643](https://github.com/usethesource/rascal/pull/2643) - Fixing Json character offsets via wrapping the underlying character buffer"
* [#2660](https://github.com/usethesource/rascal/pull/2660) - Fix module reload in the presence of file delete or rename
* [#2661](https://github.com/usethesource/rascal/pull/2661) - Fix/ignored-tests
* [#2663](https://github.com/usethesource/rascal/pull/2663) - Removed no longer relevant files
* [#2664](https://github.com/usethesource/rascal/pull/2664) - Replaced Ignore -> IgnoreCompiler
* [#2665](https://github.com/usethesource/rascal/pull/2665) - Fix/effect-ignore-in-tests
* [#2662](https://github.com/usethesource/rascal/pull/2662) - Fix/packager-without-guard-rails
* [#2666](https://github.com/usethesource/rascal/pull/2666) - Improved message for outdated TPL and removed possibly confusing println
* [#2672](https://github.com/usethesource/rascal/pull/2672) - Fix Maven not resolving parent dependencies
* [#2680](https://github.com/usethesource/rascal/pull/2680) - fix/issue [#2679](https://github.com/usethesource/rascal/issues/2679)
* [#2677](https://github.com/usethesource/rascal/pull/2677) - Avoid the "Cannot add grammar ..." message
* [#2667](https://github.com/usethesource/rascal/pull/2667) - Upgraded to typepal 0.16.6-RC1 and fixes for useViaType
* [#2681](https://github.com/usethesource/rascal/pull/2681) - Fix/persisting-type-errors
* [#2682](https://github.com/usethesource/rascal/pull/2682) - renamed cause keyword parameter to "reason" to comply with the interal definition in RuntimeExceptionFactory
* [#2685](https://github.com/usethesource/rascal/pull/2685) - work on [#2683](https://github.com/usethesource/rascal/issues/2683)
* [vallang #334](https://github.com/usethesource/vallang/pull/334) - IList.sublist equality was broken for sublists of the same main list but not at the same position
* [vallang #335](https://github.com/usethesource/vallang/pull/335) - Attempt to fix issue #308
* [vallang #330](https://github.com/usethesource/vallang/pull/330) - Bump the checker-framework group with 2 updates
* [vallang #332](https://github.com/usethesource/vallang/pull/332) - Bump the gh-actions group across 1 directory with 3 updates
* [vallang #336](https://github.com/usethesource/vallang/pull/336) - Bump the upstream-libs group with 3 updates
* [vallang #337](https://github.com/usethesource/vallang/pull/337) - Bump the maven-plugins group across 1 directory with 3 updates

### Fixed issues since version 0.41.2

The following list of bugs, enhancements and other issues were registered with the rascal and vallang projects and solved in the time
frame since version 0.41.2. Some older issues were also fixed. Most issues however, were detected while alpha and
beta testing new features.

* [#2570](https://github.com/usethesource/rascal/issues/2570) - Unexcepted debugger state with dynamic web provider
* [#2370](https://github.com/usethesource/rascal/issues/2370) - List slicing with negative end index behaves unexpectedly
* [#2575](https://github.com/usethesource/rascal/issues/2575) - Shadowing of higher-order function names is incorrect
* [#2554](https://github.com/usethesource/rascal/issues/2554) - Interpreter falsely reports "Undeclared type" during import
* [#2598](https://github.com/usethesource/rascal/issues/2598) - Mvn package (enabled by default) breaks tpls in the target folder when they're also used by the IDE
* [#2605](https://github.com/usethesource/rascal/issues/2605) - Grammar railroad diagram
* [#2606](https://github.com/usethesource/rascal/issues/2606) - Failing test for set difference
* [#2600](https://github.com/usethesource/rascal/issues/2600) - Undefined name `title` in `lang::rascal::tutor::Compiler`
* [#2604](https://github.com/usethesource/rascal/issues/2604) - Pathconfig should cleanup messages about missing dependencies it resolved via workspace
* [#2610](https://github.com/usethesource/rascal/issues/2610) - `AssertionFailed("moduleId2moduleName: |std:///Map.rsc|")` when testing bleeding edge checker on flybytes project
* [#2614](https://github.com/usethesource/rascal/issues/2614) - Exec doesn't work correctly in case of multi-module projects
* [#2632](https://github.com/usethesource/rascal/issues/2632) - TModels contain extra use/defs for fields
* [#2633](https://github.com/usethesource/rascal/issues/2633) - parseJSON with originTracking enabled creates broken offset/length information if the input exceeds 1024 characters
* [#2642](https://github.com/usethesource/rascal/issues/2642) - make the "ignored test" error range smaller
* [#2654](https://github.com/usethesource/rascal/issues/2654) - Broken module reloading
* [#2597](https://github.com/usethesource/rascal/issues/2597) - Rename `cause` field in JSONIOTst.
* [#2671](https://github.com/usethesource/rascal/issues/2671) - "Module not found" error minor usability issues
* [#2670](https://github.com/usethesource/rascal/issues/2670) - compiler crashes with internal errors on modules that have a wrong name
* [#2668](https://github.com/usethesource/rascal/issues/2668) - `Declared dependency does not exist` on existing dependency while resolving path config
* [#2679](https://github.com/usethesource/rascal/issues/2679) - reloading a removed module leads to an interpreter crash (NPE)
* [#2674](https://github.com/usethesource/rascal/issues/2674) - internal error "cannot add grammar to tmodel" leaks to user
* [#2669](https://github.com/usethesource/rascal/issues/2669) - Unexpected `Undefined variable` error on scoped tuple deconstruction
* [#2675](https://github.com/usethesource/rascal/issues/2675) - Type errors persist in TModel after fixing errors
* [#2683](https://github.com/usethesource/rascal/issues/2683) - Error on automatic reloading of extended module in REPL
* [vallang #286](https://github.com/usethesource/vallang/issues/286) - Type.compareTo is broken
* [vallang #333](https://github.com/usethesource/vallang/issues/333) - Equality Issue with Lists
* [vallang #308](https://github.com/usethesource/vallang/issues/308) - Failing test for set difference
