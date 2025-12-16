---
authors: [jvinju]
title: "Rascal 0.41.x release notes"
sidebar_position: 87
---

In this post we report on the Rascal release 0.41.x

## Release 0.41.0, 0.41.1 & 0.41.2 - December, 2025

Welcome to Rascal 0.41.2! This release comes with great improvements in usability (parse error recovery, loading speed)
and enormous progress with type-checking and compilation. Numerous additions to the standard library and a _big change_ in the Java language support setup...
These release notes are organized by major topics and there is a list of smaller improvements at the end, including a list of linked closed issues and the merged pull requests.

Many, if not most, of the improvements to the Rascal project were both funded and executed by Swat.engineering BV. Thanks!

:::info
All Eclipse functionality, including the `rascal-eclipse` plugin and the Eclipse IDE Metatooling Platform (IMP a.k.a. `impulse`), was _archived_ this year, after having been deprecated for a long time.
Everybody is expected to use Rascal now using the VScode extension, or using the commandline REPL, or from their own LSP clients. With this move to VScode the `Figure` library (embedded in `rascal-eclipse`)
is no longer available, until we create a replacement. The pre-existing releases of `rascal-eclipse` and `impulse` will _not_ remain available forever on `usethesource.io`,
for the sake of security and simplicity.
:::

### Analyzing Java code

For many users the extraction of [java-air](https://github.com/usethesource/java-air/) as a separate project from `rascal` will be the biggest change. This allows
us to do faster maintenance cycles on both projects and it more than halved the size of the binary distribution of the core Rascal features.

**Students following courses on Software Evolution**, or Software Maintenance/Software quality at different schools and universities: your course and lab notes may not
include this new information, but this is relevant for you if you want to use the newest Rascal VScode extension for your lab exercises!

To regain access to all the beloved features for the Java language related to parsing, abstract syntax trees, and semantic models like `M3`, please add this to your `pom.xml` dependencies:

```xml
<dependency>
    <groupId>org.rascalmpl</groupId>
    <artifactId>java-air</artifactId>
    <version>1.0.0</version>
</dependency>
```

Nothing else has changed w.r.t. Java analysis. The same module names, functions as always are present in `lang::java::*` as ever. `java-air` currently supports language features up to **JLS-14** and is still based on Eclipse's Java Development Toolkit.

If you are interested in bringing `java-air` up to JLS-17, 19, 21, 23, ...; This is an example of something where we welcome help from the community. Please have a look at https://github.com/usethesource/java-air/.

:::info
For students close to a deadline: VS Code allows you to downgrade your extension, so you can always go back to a version of the VS Code extension with an older release of rascal packaged.

- find the extension in the extensions bar
- click on the cogwheel in the corner
- clock "Install Specific Version..."

:::

### Parser improvements (the Error Recovery Mode)

The generated parsers now support an "error recovery" mode. In this mode the parser is **robust** against errors in the _input_. This is extremely useful for interactive editing situations, where sometimes a file is under development and we still want syntax-directed and semantics-directed features. Examples of downstream features that can work well with a recovered parse:

* highlighting,
* autocompletion,
* type-checking,
* reference resolving, etc.

The recovering parser, when it gets stuck, will detect what it is currently trying to recognize (say a `Statement`), skip a few characters and accept a "half-skipped, half-recognized" version of the
`Statement` and then continue parsing with the rest of the file. The resulting parse tree may contain several of those sub-trees which are "half recognized" (in case of multiple errors, or if the recovery failed immediately again).

The recovered parse trees have two new types of `Production`: `skipped` and `error`, where the last contains the original `Production` that was aborted, and the position "dot" were that happened.
The `skipped` production is there to create a type-correct representation of all the characters in the file, including the skipped characters and in the right order. Note that all characters of the input are _always_ represented in the parse tree, with or without errors. Also it is expected that recovered tree will contain many _ambiguity clusters_. These clusters correspond to every way that the parser was trying to recognize the input at the time it got stuck. To handle these ambiguities and other aspects of error trees, the module `util::ParseErrorRecovery` contains handy generic utilities to make downstream consumers of error trees more robust. This module includes the `disambiguateParseErrors` _heuristics_, which is most effective. Different downstream analyses are sensitive to different way of resolving ambiguity in error trees, but most of the time the `disambiguateParseErrors` heuristic is quite fine.

Namely, downstream analyses like syntax highlighting and type checking can simply _ignore_ the error trees, and then they will be reasonably robust against parse errors too.
To make this work Rascal features such as "pattern matching" and "field selection" were extended, making it easy for Rascal programmers to ignore the error trees and focus on the correct trees only. Examples of such features:
* A pattern match on a partially recognized syntactic construct always _fails_, such that the error case is always an orthogonal extra case, or the `default` is executed.
* If accidentally an error tree does lead to a new run-time exception, then this exception is always wrapped by `ParseErrorRecovery` to indicate that this was the reason. This happens for example if you ask for a field that was part of the skipped characters: NoSuchField is then wrapped by `ParseErrorRecovery` automatically. Programmers can use `try-catch` as high-up in their algorithms as necessary to recover from such problems.

Parse error recovery required significant new extensions to the parsing algorithm, as well as introducing new downstream analyses
of ambiguous parse forests caused by recovering from different parallel stacks. These features were very well tested on Rascal, Java and C grammars. Nevertheless it can be considered "beta" since not that many users (a few dozen) have tested it out. We hope you will enjoy it! In particular the robustness of syntax highlighting and the possibility of providing semantic feedback on a partially parsed file for your users are interesting.

Other improvements to the parsers:
* Two bugs related to nullables inside regular expressions were solved
* The `@<column>` constraint in grammar rules was fixed.

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

* The REPL consistently prints what its configuration is (versions, source path, classpath, runtime environment, standard library)
* The REPL was re-implemented from jline2 to **jline3**; with important usability enhancements among which _multiline editing_
* The textual progress bar and printing to stderr was improved radically (sometimes prints were lost), also due to the upgrade to jline3
* The REPL starts _much_ faster, due to a re-implementation of the Maven features for acquiring the exact locations of dependencies.
* Module reloading is faster and more accurate on macOS due to the new File Watches (see below)
* The `:set` options grammar was extended with optional `;`'s and also further implemented
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
This will also facilitate new LSP client (other editors than VScode) to connect to Rascal's LSP,
including the advanced terminal support and loading LSP extensions for DSLs.
Also it lowers our maintenance costs and increases the speed of our release cycles.

* The Debug Adapter Protocol (DAP) implementation (an extension to the Language Service Protocol) was moved to the Rascal project.
* Several core infrastructure features of the Language Service Protocol server for Rascal (and DSLs written in Rascal) moved along with it.
For example: mapping UTF16 characters (LSP editors) to UTF32 (Rascal parsers) and back.
* the REPL extensions in VS Code (such as automatic reloading of modules) got moved to the generic rascal REPL.

### Debugger improvements

* Show symbol constructor argument names in variables view.
* Fix issues with keyword parameter value computation.

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
* Improved detection of import/extend cycles.
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
* The `visit` statement now _always_ memoizes `amb` clusters; this brings down the worst-case complexity of a visit with nested ambiguity to polynomial numbers (instead of the previous exponential amounts of nested combinations).
* Duplicate overloads, present due to the exact same functions being extended from different directions in the extend graph, were eliminated. This greatly affects the efficiency of functions with only a few overloads, when the high count was caused by "diamond-shaped" extend graphs. Otherwise it doesn't do much for efficiency.

### Merged Pull Requests since version 0.40.0

The following list gives access to detailed progress and discussions regarding this progress. If you are interested in
contributing to Rascal then we'd use the "pull request" model together like this:

* [#2080](https://github.com/usethesource/rascal/pull/2080) - Fix excessive whitespace issue in `newRascalProject`
* [#2082](https://github.com/usethesource/rascal/pull/2082) - Add method `getTagValue` that generalizes `getCategory`
* [#2010](https://github.com/usethesource/rascal/pull/2010) - Fixing issue #2009
* [#2002](https://github.com/usethesource/rascal/pull/2002) - rewrote squeeze in Rascal with reified classes
* [#1921](https://github.com/usethesource/rascal/pull/1921) - This fixes problem #1920 with a failure to throw a StackOverflow exception in case of a real stack overflow in Java code.
* [#1862](https://github.com/usethesource/rascal/pull/1862) - added optional storage of constructor names and datatype names while serializing to JSON. Wired this through the different webservers as well
* [#1661](https://github.com/usethesource/rascal/pull/1661) - Rework maven code for faster calculation of path config
* [#2088](https://github.com/usethesource/rascal/pull/2088) - Fixed the maven-shade-plugin configuration
* [#2095](https://github.com/usethesource/rascal/pull/2095) - Removed redundant character creation caching
* [#2090](https://github.com/usethesource/rascal/pull/2090) - Fix location in bootstrap code
* [#2091](https://github.com/usethesource/rascal/pull/2091) - Add categories to Rascal grammar - Regenerate parser and AST
* [#2094](https://github.com/usethesource/rascal/pull/2094) - Add bin folders of dependencies to the classpath when they're open in the workspace
* [#2083](https://github.com/usethesource/rascal/pull/2083) - Add/update categories to Rascal grammar
* [#2096](https://github.com/usethesource/rascal/pull/2096) - Fixed bug where cycles where always considered unequal
* [#2075](https://github.com/usethesource/rascal/pull/2075) - Feat/remove auto disambiguation
* [#2084](https://github.com/usethesource/rascal/pull/2084) - Fixed the case where one of the alternative of an ambiguity is an emp…
* [#2102](https://github.com/usethesource/rascal/pull/2102) - Replaced `==` with `equals` on two String objects
* [#1978](https://github.com/usethesource/rascal/pull/1978) - json lazy parser unparser and support for reading NULL values.
* [#2101](https://github.com/usethesource/rascal/pull/2101) - Fixed logic around fallback resolver in URIResolverRegistry
* [#2110](https://github.com/usethesource/rascal/pull/2110) - Updated dependencies
* [#2111](https://github.com/usethesource/rascal/pull/2111) - Added profile to pom for creation of unshaded Rascal jar
* [#2113](https://github.com/usethesource/rascal/pull/2113) - Add non-throwing variant of createFromURI.
* [#2104](https://github.com/usethesource/rascal/pull/2104) - Upgrading JSON IO tests to the new API, and removing the deprecated API
* [#2115](https://github.com/usethesource/rascal/pull/2115) - shade and rewrite codehaus and maven dependencies
* [#2116](https://github.com/usethesource/rascal/pull/2116) - Improved testing of JSON IO, especially in de code that handles null objects"
* [#2117](https://github.com/usethesource/rascal/pull/2117) - Measure CPU & memory usage during the build actions
* [#2063](https://github.com/usethesource/rascal/pull/2063) - Migrate to jline3
* [#2128](https://github.com/usethesource/rascal/pull/2128) - Fix assigning to list element at negative index.
* [#2127](https://github.com/usethesource/rascal/pull/2127) - Fix type mismatch error messages on lists
* [#2134](https://github.com/usethesource/rascal/pull/2134) - set the tuple syntax to a plus list again, with corresponding changes in calls to getters
* [#2135](https://github.com/usethesource/rascal/pull/2135) - Added missing translation of \f and \b
* [#2108](https://github.com/usethesource/rascal/pull/2108) - Recovery/recover all productions
* [#1994](https://github.com/usethesource/rascal/pull/1994) - Add debugging hint to repl help
* [#2100](https://github.com/usethesource/rascal/pull/2100) - Link based parse memoization
* [#2001](https://github.com/usethesource/rascal/pull/2001) - Merges tutor code back into the rascal project
* [#2112](https://github.com/usethesource/rascal/pull/2112) - Always load Rascal modules and Java classes of `std` from the current `rascal` (v2)
* [#2103](https://github.com/usethesource/rascal/pull/2103) - Always load Rascal modules and Java classes of `std` from the current `rascal`
* [#2136](https://github.com/usethesource/rascal/pull/2136) - Safe memoization during parse graph flattening
* [#2146](https://github.com/usethesource/rascal/pull/2146) - Recovery/cleanup
* [#2038](https://github.com/usethesource/rascal/pull/2038) - Error recovery
* [#2068](https://github.com/usethesource/rascal/pull/2068) - Added support for following prefix-shared productions when determining end matcher
* [#1969](https://github.com/usethesource/rascal/pull/1969) - Replace lib:/// scheme by mvn:/// and file:/// and jar+file:/// everywhere
* [#2159](https://github.com/usethesource/rascal/pull/2159) - issue 2149 mvn scheme
* [#2155](https://github.com/usethesource/rascal/pull/2155) - Merge rascal-core and all its history back into rascal
* [#2163](https://github.com/usethesource/rascal/pull/2163) - Added an overload for Maven::runCommand
* [#2175](https://github.com/usethesource/rascal/pull/2175) - Move Java support to java-air
* [#2170](https://github.com/usethesource/rascal/pull/2170) - Made `disambiguateParseErrors` a parameterized function
* [#2169](https://github.com/usethesource/rascal/pull/2169) - Fix rascal-core using outdated fields & fix source path calculation for compiler mode
* [#2178](https://github.com/usethesource/rascal/pull/2178) - We allow updating the standard library, as long as it is only in rascal code
* [#2180](https://github.com/usethesource/rascal/pull/2180) - Fix tab completion crash
* [#2164](https://github.com/usethesource/rascal/pull/2164) - added a main with parameters for the commandline interface between the rascal-maven-plugin and the checker
* [#2073](https://github.com/usethesource/rascal/pull/2073) - feat/error recovery robust field projection
* [#2074](https://github.com/usethesource/rascal/pull/2074) - added a function that can filter error trees which are in optional positions in a grammar (list elements and optionals)
* [#2184](https://github.com/usethesource/rascal/pull/2184) - Native pom parsing/checksum
* [#2192](https://github.com/usethesource/rascal/pull/2192) - Retrieve local repo from system property or settings.xml when available
* [#2190](https://github.com/usethesource/rascal/pull/2190) - rascal java compilation api
* [#2194](https://github.com/usethesource/rascal/pull/2194) - cleaning up the use of a commandline classpath
* [#2195](https://github.com/usethesource/rascal/pull/2195) - moved generic class loader implementation from the memory scheme to the fallback scenario of URIResolverRegistry.getClassLoader(). Now _any_ loc that points to a folder can be used to load classes from. It is still better to implement IClassloaderLocationResolver if you are able to use a URLClassLoader of another kind of indexed/caches ClassLoader implementation like OSGI bundles.
* [#2196](https://github.com/usethesource/rascal/pull/2196) - Using a temp file in the same directory as the target
* [#2144](https://github.com/usethesource/rascal/pull/2144) - Restored tutor prompt by emulating the old prompt interface
* [#2197](https://github.com/usethesource/rascal/pull/2197) - Implemented system scope resolving
* [#2198](https://github.com/usethesource/rascal/pull/2198) - Updated code that expected legacy grammar categories
* [#2181](https://github.com/usethesource/rascal/pull/2181) - Use maven-model to parse the pom.xml and calculate paths
* [#2141](https://github.com/usethesource/rascal/pull/2141) - started to add a simple prompt similator, that focuses on simple continuations
* [#2201](https://github.com/usethesource/rascal/pull/2201) - Fixed category of ConcreteHole production and regenerated Rascal parser
* [#2199](https://github.com/usethesource/rascal/pull/2199) - Consistently use new production categories in standard library
* [#2203](https://github.com/usethesource/rascal/pull/2203) - Removed OS specific paths from Location.rsc
* [#2200](https://github.com/usethesource/rascal/pull/2200) - Mirror support
* [#2205](https://github.com/usethesource/rascal/pull/2205) - Reduce loc conversions in type checker
* [#2211](https://github.com/usethesource/rascal/pull/2211) - IO capabilities provide information about the file IO features implemented for a specific scheme
* [#2207](https://github.com/usethesource/rascal/pull/2207) - Implemented basic proxy support for natively parsed poms
* [#2208](https://github.com/usethesource/rascal/pull/2208) - bootstrap using previously released commandline interfaces
* [#2212](https://github.com/usethesource/rascal/pull/2212) - Fixed edge cases in jar and memory resolvers by rewriting it.
* [#2224](https://github.com/usethesource/rascal/pull/2224) - Switched from long to BigInteger for keeping track of node counts.
* [#2226](https://github.com/usethesource/rascal/pull/2226) - feat/bootstrap using main functions
* [#2221](https://github.com/usethesource/rascal/pull/2221) - Refactored error recovery tests so Rascal and Pico syntax are no longer visible in the same module
* [#2225](https://github.com/usethesource/rascal/pull/2225) - [DO NOT MERGE] Debugging janky buildjet arm runner
* [#2234](https://github.com/usethesource/rascal/pull/2234) - Make sure the junit runner locks the evaluator
* [#2232](https://github.com/usethesource/rascal/pull/2232) - Fix cleared typestore losing constructors
* [#2227](https://github.com/usethesource/rascal/pull/2227) - Support parse error at end-of-line in the repl
* [#2228](https://github.com/usethesource/rascal/pull/2228) - [DO NOT MERGE] Trying to see if we can reproduce the windows crash
* [#2238](https://github.com/usethesource/rascal/pull/2238) - Removed unused import that caused Rascal and Pico syntax to be visible in the same module
* [#2219](https://github.com/usethesource/rascal/pull/2219) - tutor compiler packager back on
* [#2239](https://github.com/usethesource/rascal/pull/2239) - factored commandline parser for use in compiled context
* [#2249](https://github.com/usethesource/rascal/pull/2249) - Imported non-compiler changes from compiled-parser-generator
* [#2247](https://github.com/usethesource/rascal/pull/2247) - Support module reloading in the rascal repl (ported from the VS Code repl implementation)
* [#2254](https://github.com/usethesource/rascal/pull/2254) - Backport fix for keyword param default computation
* [#2252](https://github.com/usethesource/rascal/pull/2252) - Throw exception when needle cannot be found in haystack.
* [#2245](https://github.com/usethesource/rascal/pull/2245) - Ambiguity pruning
* [#2269](https://github.com/usethesource/rascal/pull/2269) - Rewrote ParserTest to work with junit runner
* [#2266](https://github.com/usethesource/rascal/pull/2266) - updates due to changed API of randomTypes in vallang
* [#2265](https://github.com/usethesource/rascal/pull/2265) - PathConfig-based construction of Evaluators
* [#2268](https://github.com/usethesource/rascal/pull/2268) - Improving error recovery performance by limiting recovery attempts
* [#2271](https://github.com/usethesource/rascal/pull/2271) - clean factor path config
* [#2255](https://github.com/usethesource/rascal/pull/2255) - Fixing issue #2147, spurious matches with visit and deep match
* [#2262](https://github.com/usethesource/rascal/pull/2262) - getting package names right after major changes in the maven-plugin
* [#2214](https://github.com/usethesource/rascal/pull/2214) - issue 2213
* [#2274](https://github.com/usethesource/rascal/pull/2274) - Fixed Evaluator creation for Rascal itself
* [#2278](https://github.com/usethesource/rascal/pull/2278) - fixes #2277 by adding a third option for finding the typepal.jar: from the pom.xml dependencies
* [#2280](https://github.com/usethesource/rascal/pull/2280) - reuse the already-extracted pom dependencies instead of parsing again
* [#2282](https://github.com/usethesource/rascal/pull/2282) - Fixes #2281
* [#2284](https://github.com/usethesource/rascal/pull/2284) - compiled test setup takes care of project:// and target:// logical resolvers for the current project
* [#2285](https://github.com/usethesource/rascal/pull/2285) - Improve handling of project/target schemes
* [#2291](https://github.com/usethesource/rascal/pull/2291) - parallel compiler main
* [#2248](https://github.com/usethesource/rascal/pull/2248) - Migrate parts of LSPTeminalREPL to the rascal project
* [#2292](https://github.com/usethesource/rascal/pull/2292) - Reporting the Rascal version on the RASCAL.MF file instead of the root directory of the project
* [#2293](https://github.com/usethesource/rascal/pull/2293) - Removed spurious PathConfig messages about missing folders
* [#2295](https://github.com/usethesource/rascal/pull/2295) - Registering diagnostics if the provided monitor is actually IDEServices
* [#2294](https://github.com/usethesource/rascal/pull/2294) - Rascal-lsp is automatically added to PathConfigs if it is present on the classpath
* [#2298](https://github.com/usethesource/rascal/pull/2298) - fixed all warnings in interpreter-code. compiler code left alone because on the compiled-generator branch these things have been fixed
* [#2289](https://github.com/usethesource/rascal/pull/2289) - replaced all "public final" builtin methods by "protected final" builtin methods
* [#2288](https://github.com/usethesource/rascal/pull/2288) - Using builtin Pattern.quote for literal string escaping in regex's is more complete than the hndwritten version
* [#1914](https://github.com/usethesource/rascal/pull/1914) - added implementation of negative number matching.
* [#2300](https://github.com/usethesource/rascal/pull/2300) - Type checker: take care of case that generatedResources is not set
* [#2246](https://github.com/usethesource/rascal/pull/2246) - Tests for error tree semantics in Rascal
* [#2302](https://github.com/usethesource/rascal/pull/2302) - Removed artificial limit on recovery nodes in queue
* [#2303](https://github.com/usethesource/rascal/pull/2303) - Also set project resolver when creating a location-based evaluator
* [#2307](https://github.com/usethesource/rascal/pull/2307) - fixed quotation error in docs of ParseErrorRecovery and optimized getErrorText
* [#2308](https://github.com/usethesource/rascal/pull/2308) - added documented but missing rename function to Prelude::IO
* [#2309](https://github.com/usethesource/rascal/pull/2309) - Implemented low-hanging fruit from error tree support
* [#2313](https://github.com/usethesource/rascal/pull/2313) - Fix rascal lsp hard coded path config
* [#2317](https://github.com/usethesource/rascal/pull/2317) - Improved watch support: fix timing issue in tests on macOS
* [#2316](https://github.com/usethesource/rascal/pull/2316) - Memoization of amb nodes in visit
* [#2310](https://github.com/usethesource/rascal/pull/2310) - Deep match amb child memoization
* [#2287](https://github.com/usethesource/rascal/pull/2287) - public interface for module loading
* [#2319](https://github.com/usethesource/rascal/pull/2319) - Revert "public interface for module loading"
* [#2320](https://github.com/usethesource/rascal/pull/2320) - easier tutor link disambiguation
* [#2318](https://github.com/usethesource/rascal/pull/2318) - Fix no summary for module inside JAR
* [#2267](https://github.com/usethesource/rascal/pull/2267) - Adds nullable sequence and alternative support
* [#2304](https://github.com/usethesource/rascal/pull/2304) - Rascal support for working with error trees
* [#2305](https://github.com/usethesource/rascal/pull/2305) - Properly implement the watch feature
* [#2325](https://github.com/usethesource/rascal/pull/2325) - Do not swallow messages when type-check aborts early.
* [#2323](https://github.com/usethesource/rascal/pull/2323) - this adresses issue #2322 and #2279
* [#2311](https://github.com/usethesource/rascal/pull/2311) - finished the implementation of ShellCommands, upto printing the history and deleting ADTs
* [#2327](https://github.com/usethesource/rascal/pull/2327) - Add writability & readability
* [#2328](https://github.com/usethesource/rascal/pull/2328) - Fix the repl not closing due to a bug in java-watch that would have a threadpool of non-daemon threads that couldn't be shutdown
* [#2339](https://github.com/usethesource/rascal/pull/2339) - fixes #2336
* [#2332](https://github.com/usethesource/rascal/pull/2332) - Fixes debug generated parser persisting
* [#2337](https://github.com/usethesource/rascal/pull/2337) - Recursively check for import errors in JUnit tests.
* [#2338](https://github.com/usethesource/rascal/pull/2338) - Solving various incremental code generation issues
* [#2270](https://github.com/usethesource/rascal/pull/2270) - new reusable functions for using PathConfig
* [#2331](https://github.com/usethesource/rascal/pull/2331) - Prevent sharing of separators to prevent cycle detection issues
* [#2329](https://github.com/usethesource/rascal/pull/2329) - Migrate debug adapter protocol from rascal-lsp to rascal
* [#2344](https://github.com/usethesource/rascal/pull/2344) - Print test results to stdout when all succeeded
* [#2031](https://github.com/usethesource/rascal/pull/2031) - two HiFi tree diff algorithms for after source-to-source transformations (quick-fix, refactoring, formatting) in the IDE
* [#2347](https://github.com/usethesource/rascal/pull/2347) - Trying to disable bracket paste
* [#2348](https://github.com/usethesource/rascal/pull/2348) - Using newest java-watch version
* [#2349](https://github.com/usethesource/rascal/pull/2349) - added missing labels to :set option grammar, regenerated parser and AST classes, and adapted the dynamic implementation classes accordingly
* [#2351](https://github.com/usethesource/rascal/pull/2351) - Fixed issue where the fallback resolver would be skipped if a nested scheme was not registered
* [#2312](https://github.com/usethesource/rascal/pull/2312) - diamond clashes tests
* [#2355](https://github.com/usethesource/rascal/pull/2355) - added the location of the AST where the illegally used field is on, for easier debugging of the interpreter or Rascal code that triggers this
* [#2352](https://github.com/usethesource/rascal/pull/2352) - Relativize now returns the literal input location instead of a normalized location
* [#2326](https://github.com/usethesource/rascal/pull/2326) - Implemented support for Maven version ranges
* [#2357](https://github.com/usethesource/rascal/pull/2357) - Version range warning
* [#2366](https://github.com/usethesource/rascal/pull/2366) - Support more kinds of watches
* [#2354](https://github.com/usethesource/rascal/pull/2354) - minor fixes for formatters
* [#2365](https://github.com/usethesource/rascal/pull/2365) - major cleanup of the Type module, also links subtype, glb, lub and intersects from the Type class implementation
* [#2358](https://github.com/usethesource/rascal/pull/2358) - Maven simple resolver inheritance
* [#2367](https://github.com/usethesource/rascal/pull/2367) - Watches for nonexistent locations are no longer registered
* [#2353](https://github.com/usethesource/rascal/pull/2353) - Implemented "isDefined" (tree.field?) for non-error trees.
* [#2369](https://github.com/usethesource/rascal/pull/2369) - Implement transitive exclusions for maven
* [#2372](https://github.com/usethesource/rascal/pull/2372) - Remove log4j calls from Rascal code after the DAP migration
* [#2371](https://github.com/usethesource/rascal/pull/2371) - Switched from depth-first to breadth-first dependency resolving algorithm
* [#2378](https://github.com/usethesource/rascal/pull/2378) - Improved isWatchable check during REPL initialization.
* [#2376](https://github.com/usethesource/rascal/pull/2376) - Added Rascal classpath test and fixed issues found by the test
* [#1659](https://github.com/usethesource/rascal/pull/1659) - Added tests around IO::watch and IO::unwatch
* [#2381](https://github.com/usethesource/rascal/pull/2381) - Update rascal-maven-plugin to RC29.
* [#2374](https://github.com/usethesource/rascal/pull/2374) - add causes to messages
* [#2206](https://github.com/usethesource/rascal/pull/2206) - Compiled parser generator
* [#2382](https://github.com/usethesource/rascal/pull/2382) - Streaming IO for XML tags
* [#2385](https://github.com/usethesource/rascal/pull/2385) - made transparent, when bootstrapping, which rascal runtime is used and which standard library by printing their absolute path locations
* [#2386](https://github.com/usethesource/rascal/pull/2386) - added resolveModuleOnCurrentInterpreterSearchPath to util::Reflective. Only for debugging purposes
* [#2384](https://github.com/usethesource/rascal/pull/2384) - Include the original error location as a "parseTree" annotation on the error tree
* [#2391](https://github.com/usethesource/rascal/pull/2391) - Fix DAP locations
* [#2350](https://github.com/usethesource/rascal/pull/2350) - fix duplicated overloads caused by cloneInto of the same function via complex extend/import graphs
* [#2395](https://github.com/usethesource/rascal/pull/2395) - Fix pathconfig parsing
* [#2396](https://github.com/usethesource/rascal/pull/2396) - Reducing path config messages for compiler mode
* [#2398](https://github.com/usethesource/rascal/pull/2398) - Always print messages to console, not to the monitor
* [#2403](https://github.com/usethesource/rascal/pull/2403) - Switching to a dedicated mirror of uts, that skips cloudflare
* [#2402](https://github.com/usethesource/rascal/pull/2402) - Fix typo in error message
* [#2404](https://github.com/usethesource/rascal/pull/2404) - Improved test such that they do not have to download 60mb and respect settings.xml
* [#2401](https://github.com/usethesource/rascal/pull/2401) - Port ColumnMaps changes from rascal-lsp to rascal
* [#2409](https://github.com/usethesource/rascal/pull/2409) - Removed "watch" functionality of old compiler version
* [#2406](https://github.com/usethesource/rascal/pull/2406) - Removing extend cycle
* [#2393](https://github.com/usethesource/rascal/pull/2393) - Switching to release of rascal that includes the new typechecker changes
* [#2411](https://github.com/usethesource/rascal/pull/2411) - Fixed type error
* [#2518](https://github.com/usethesource/rascal/pull/2518) - fixes #2513 by splitting name tags between vars and funcs
* [#2517](https://github.com/usethesource/rascal/pull/2517) - Remove warnings and infos from packaged TPLs
* [#2520](https://github.com/usethesource/rascal/pull/2520) - Implemented streaming base64 translation functions
* [#2524](https://github.com/usethesource/rascal/pull/2524) - Use latest vallang (RC20)
* [#2507](https://github.com/usethesource/rascal/pull/2507) - Remote IDE services
* [#2511](https://github.com/usethesource/rascal/pull/2511) - fixes another cause of #2497
* [#2526](https://github.com/usethesource/rascal/pull/2526) - Always print a message if we automatically reload a module
* [#2527](https://github.com/usethesource/rascal/pull/2527) - Remote IDEServices - small updates
* [#2530](https://github.com/usethesource/rascal/pull/2530) - added missing conversion of list[loc] to OS paths separated by File.pathSeparator
* [#2531](https://github.com/usethesource/rascal/pull/2531) - Using latest version of typepal
* [#2532](https://github.com/usethesource/rascal/pull/2532) - refactored the implementation of the right debug step scopes to the interpreter design pattern and added some more special cases
* [#2539](https://github.com/usethesource/rascal/pull/2539) - Fixed minor type isues
* [#2521](https://github.com/usethesource/rascal/pull/2521) - Remove unused reflect tag on JDBC
* [#2529](https://github.com/usethesource/rascal/pull/2529) - Change the behaviour of Step Over for For/While/Switch/Visit
* [#2528](https://github.com/usethesource/rascal/pull/2528) - Fix/Allow all tree-like variable to be displayed as tree in debugger
* [#2516](https://github.com/usethesource/rascal/pull/2516) - Show more details in case of an IO exception
* [#2505](https://github.com/usethesource/rascal/pull/2505) - Make sure we never share lists and properly clear a root environment cache on reset
* [#2502](https://github.com/usethesource/rascal/pull/2502) - fixed problem in extending common keyword parameter defaults; they would overwrite each other if for the same type but from a different module
* [#2486](https://github.com/usethesource/rascal/pull/2486) - Replaced problematic location
* [#2483](https://github.com/usethesource/rascal/pull/2483) - Fix/avoid-module-loc-conflicts
* [#2473](https://github.com/usethesource/rascal/pull/2473) - fix/save-tpl-on-error
* [#2460](https://github.com/usethesource/rascal/pull/2460) - Fixed check for "normal" (non-error) ambiguities after error recovery
* [#2444](https://github.com/usethesource/rascal/pull/2444) - Improve ux of parse trees in Variables view during debugging
* [#2446](https://github.com/usethesource/rascal/pull/2446) - Ignore breakpoints in removed modules
* [#2438](https://github.com/usethesource/rascal/pull/2438) - Streaming issue in webserver and repl content server
* [#2427](https://github.com/usethesource/rascal/pull/2427) - Lowered validation level as we only construct the classpath and are not building
* [#2422](https://github.com/usethesource/rascal/pull/2422) - Handle IO and parse errors in module with breakpoint
* [#2416](https://github.com/usethesource/rascal/pull/2416) - Fix issue where a varargs match throws an ArrayIndexOutOfBounds exception
* [#2405](https://github.com/usethesource/rascal/pull/2405) - Gradually improving the reporting of incompatible binary libraries
* [#2550](https://github.com/usethesource/rascal/pull/2550) - Fix missing port registering for debugger
* [#2392](https://github.com/usethesource/rascal/pull/2392) - improving handling of extend cycles and reloading (extended) modules with (temporary) errors
* [#2542](https://github.com/usethesource/rascal/pull/2542) - Always test that the current typechecker can type check the standard library of Rascal
* [#2555](https://github.com/usethesource/rascal/pull/2555) - Use daemon threads to prevent blocking shutdown
* [#2552](https://github.com/usethesource/rascal/pull/2552) - Add the callerEnvironment as Scope in default parameter computation
* [#2560](https://github.com/usethesource/rascal/pull/2560) - Fix broken links caused by removing features only used in rascal-website
* [#2561](https://github.com/usethesource/rascal/pull/2561) - Fix dozens of doc compilation errors due to persistent module load errors
* [#2564](https://github.com/usethesource/rascal/pull/2564) - Better change detection for extend
* [#2566](https://github.com/usethesource/rascal/pull/2566) - Missing `ModuleStatus` propagation
* [#2565](https://github.com/usethesource/rascal/pull/2565) - Fix various errors in integration tests
* [#2557](https://github.com/usethesource/rascal/pull/2557) - Added missing verbose flag to prevent Maven plugin from crashing if it is set
* [#2540](https://github.com/usethesource/rascal/pull/2540) - Add symbol constructor args name on tree view
* [#2559](https://github.com/usethesource/rascal/pull/2559) - Classloader concurrency
* [#2567](https://github.com/usethesource/rascal/pull/2567) - Removed cycle reported in [#2563](https://github.com/usethesource/rascal/issues/2563)
* [#2568](https://github.com/usethesource/rascal/pull/2568) - Fixed various type errors
* [#2571](https://github.com/usethesource/rascal/pull/2571) - Make breakpoint suspension global
* [vallang #287](https://github.com/usethesource/vallang/pull/287) - fix issue #286 with tests
* [vallang #288](https://github.com/usethesource/vallang/pull/288) - Increase performance of IString Readers for the `read(CharBuffer)` overload
* [vallang #289](https://github.com/usethesource/vallang/pull/289) - Added support for writing formfeed and backspace escaped characters
* [vallang #301](https://github.com/usethesource/vallang/pull/301) - Support map field names in binary reader
* [vallang #302](https://github.com/usethesource/vallang/pull/302) - removed implicit changes to RandomTypeConfig during the recursive random type generator.
* [vallang #303](https://github.com/usethesource/vallang/pull/303) - randomValue now also takes a RandomTypesConfig such that we can prevent, for example, the generation of random ADTs in a TypeStore
* [vallang #304](https://github.com/usethesource/vallang/pull/304) - workaround or fix for the npe during Rascal testing
* [vallang #310](https://github.com/usethesource/vallang/pull/310) - add inferred return type to IWithKeywordParameters::getParameter to avoid a lot of casting in client code. This should be source-backward compatible, not binary though

### Fixed issues since version 0.40.0

The following list of bugs, enhancements and other issues were registered with the rascal and vallang projects and solved in the time
frame since version 0.40.0. Some older issues were also fixed as you can see. Most issues however, were detected while alpha and
beta testing new features.

* [vallang #286](https://github.com/usethesource/vallang/issues/286) - Type.compareTo is broken
* [#2079](https://github.com/usethesource/rascal/issues/2079) - `RASCAL.MF` generated by `newRascalProject` triggers an error in VS Code
* [#2072](https://github.com/usethesource/rascal/issues/2072) - Generalize `getCategory` in `ProductionAdapter` to get any tag value
* [#2009](https://github.com/usethesource/rascal/issues/2009) - char-class type reificiation does something wrong for high surrogate/low surrogate pairs
* [#1920](https://github.com/usethesource/rascal/issues/1920) - Stackoverflow in RascalMPL while running the test framework
* [#1853](https://github.com/usethesource/rascal/issues/1853) - TPL files are never binary compatible due to references based on exact source locations
* [#1821](https://github.com/usethesource/rascal/issues/1821) - Backward compatibility issues after releasing new standard library .tpl files
* [#2098](https://github.com/usethesource/rascal/issues/2098) - Json random test failed
* [#1979](https://github.com/usethesource/rascal/issues/1979) - Default keyword fields will sometimes throw NPEs when the default value is the name of an (overloaded) function instead of a lambda.
* [#1987](https://github.com/usethesource/rascal/issues/1987) - `parseJSON` does not support `null` in JSON
* [#2119](https://github.com/usethesource/rascal/issues/2119) - Empty Rascal files exposes internal error
* [#2118](https://github.com/usethesource/rascal/issues/2118) - If a rsc file changes while the checker is running it's changes are not detected properly
* [#2123](https://github.com/usethesource/rascal/issues/2123) - Assigning to element at index -1 of non-empty list raises `IndexOutOfBounds`
* [#2126](https://github.com/usethesource/rascal/issues/2126) - Incorrect type in unsupported operation error message
* [#2133](https://github.com/usethesource/rascal/issues/2133) - Plus list variable not accepted in Star list position in concrete syntax
* [#2129](https://github.com/usethesource/rascal/issues/2129) - readTextValueString does not support formed (\f).
* [#2138](https://github.com/usethesource/rascal/issues/2138) - ArrayIndexOutOfBoundsException in TerminalProgressBarMonitor for large single line output
* [#2140](https://github.com/usethesource/rascal/issues/2140) - on adopt-tutor-code branch the repl is  not working yet.
* [#2139](https://github.com/usethesource/rascal/issues/2139) - Sort of 30 element set gives array bounds error
* [#2142](https://github.com/usethesource/rascal/issues/2142) - Terminal progress bar: minutes part doesn't "overflow" to 0 after 59
* [#2143](https://github.com/usethesource/rascal/issues/2143) - RascalJunitTestRunner does not have access to scheme resolvers anymore
* [#2148](https://github.com/usethesource/rascal/issues/2148) - Typechecking modules with circular import graph give "code clone" errors
* [#2152](https://github.com/usethesource/rascal/issues/2152) - Unused import not always reported in a cyclic import
* [#1916](https://github.com/usethesource/rascal/issues/1916) - New `mvn` scheme to replace `lib` scheme.
* [#2149](https://github.com/usethesource/rascal/issues/2149) - Fix some inconsistancies with the maven scheme
* [#2160](https://github.com/usethesource/rascal/issues/2160) - PathConfig calculation should download dependencies defined in the pom.xml
* [#2162](https://github.com/usethesource/rascal/issues/2162) - `disambiguateErrors` should be a parametric function
* [#1665](https://github.com/usethesource/rascal/issues/1665) - New tutor compiler contains static warnings and errors reported by Rascal compiler
* [#1564](https://github.com/usethesource/rascal/issues/1564) - Apply new rascal logo
* [#1539](https://github.com/usethesource/rascal/issues/1539) - util::IDEservices cannot link to BasicIDEServices
* [#1566](https://github.com/usethesource/rascal/issues/1566) - rascal-eclipse: EclipseIDEServices should add meaningful implementations for new methods in IDEServices
* [#1592](https://github.com/usethesource/rascal/issues/1592) - rascal-eclipse released with too specific dependency on tm.terminal
* [#1703](https://github.com/usethesource/rascal/issues/1703) - OldBinaryFileRemover is broken in rascal-eclipse due to nested rascal folder in bin/target for .tpl files
* [#1735](https://github.com/usethesource/rascal/issues/1735) - [RELEASE] rascal-eclipse version 0.28.1
* [#1625](https://github.com/usethesource/rascal/issues/1625) - rascal-eclipse cancel button does not work on incremental compilation process anymore
* [#1745](https://github.com/usethesource/rascal/issues/1745) - Update release template with details on how to actually release the eclipse plugin.
* [#1158](https://github.com/usethesource/rascal/issues/1158) - Built-in eclipse documentation errors in snippet codes
* [#1258](https://github.com/usethesource/rascal/issues/1258) - tm.terminal support does not handle ANSI codes correctly anymore in latest eclipse?
* [#1217](https://github.com/usethesource/rascal/issues/1217) - SWT exception "Graphic is disposed" when running AlleAlle in Windows
* [#1305](https://github.com/usethesource/rascal/issues/1305) - [vis] mouseOver and onMouseDown used together leads to a stack overflow
* [#1322](https://github.com/usethesource/rascal/issues/1322) - concept files in rascal project contain references to rascal-eclipse modules
* [#1365](https://github.com/usethesource/rascal/issues/1365) - REPL: :help list of commands is incomplete
* [#1330](https://github.com/usethesource/rascal/issues/1330) - File outside Eclipse workspace opened by URI are read-only
* [#1421](https://github.com/usethesource/rascal/issues/1421) - Disable syntax coloring in REPL inside Eclipse on OSX
* [#1418](https://github.com/usethesource/rascal/issues/1418) - :edit command does not work in Eclipse
* [#853](https://github.com/usethesource/rascal/issues/853) - Move current visualisation library into rascal-eclipse
* [#724](https://github.com/usethesource/rascal/issues/724) - Rascal GUI behaves not correctly
* [#1060](https://github.com/usethesource/rascal/issues/1060) - Visualization: Function `left()` resolves to 'wrong' function
* [#653](https://github.com/usethesource/rascal/issues/653) - Checking out this repository into Eclipse workspace breaks Rascal
* [#652](https://github.com/usethesource/rascal/issues/652) - Link to rascal tutor webpage for UndeclaredJavaMethod error is dead
* [#412](https://github.com/usethesource/rascal/issues/412) - Cursor disappears when error in computeFigure
* [#443](https://github.com/usethesource/rascal/issues/443) - Graphic is disposed error after first user event in figure
* [#521](https://github.com/usethesource/rascal/issues/521) - Folded doc annotations may be impossible to expand in plugin
* [#157](https://github.com/usethesource/rascal/issues/157) - Nodes appear misaligned with edges when using computeFigure and graph
* [#82](https://github.com/usethesource/rascal/issues/82) - Graph with hint spring draws outside of window
* [#684](https://github.com/usethesource/rascal/issues/684) - Simple figure example with interaction in tutor does not work
* [#729](https://github.com/usethesource/rascal/issues/729) - MouseOver on nested Treemaps do not work correctly
* [#422](https://github.com/usethesource/rascal/issues/422) - scaleSlider with pack
* [#732](https://github.com/usethesource/rascal/issues/732) - Colorscale causes division by zero
* [#730](https://github.com/usethesource/rascal/issues/730) - (Nested) Figures not properly clipped when space is constrained.
* [#929](https://github.com/usethesource/rascal/issues/929) - pack in computeFigure does not re-evaluate?
* [#1019](https://github.com/usethesource/rascal/issues/1019) - Unknown TEMP in tetris example
* [#1061](https://github.com/usethesource/rascal/issues/1061) - Buttons with callback functions resolve in NullPointer exceptions when calling the callback
* [#1928](https://github.com/usethesource/rascal/issues/1928) - Introduce a fixed set of syntax highlighting categories to replace the old string based categories in parse trees
* [#2173](https://github.com/usethesource/rascal/issues/2173) - Call failed for job monitor
* [#2179](https://github.com/usethesource/rascal/issues/2179) - Tab completion crashes in repl when module does not exist
* [#2174](https://github.com/usethesource/rascal/issues/2174) - NPE on auto-complete, possibly something to do with escaped keywords
* [#980](https://github.com/usethesource/rascal/issues/980) - GC overhead limit exceeded
* [#845](https://github.com/usethesource/rascal/issues/845) - Insufficient diagnostics for syntax errors
* [#923](https://github.com/usethesource/rascal/issues/923) - Store REPL history more frequently
* [#2191](https://github.com/usethesource/rascal/issues/2191) - Holes in concrete syntax have wrong category
* [#2202](https://github.com/usethesource/rascal/issues/2202) - Performance degradation due to grammars in `Location`
* [#2210](https://github.com/usethesource/rascal/issues/2210) - `lastModified` throws exception in directories for both jar and memory scheme
* [#2218](https://github.com/usethesource/rascal/issues/2218) - running tutor on rascal project fails due to issue in commandline handler
* [#2233](https://github.com/usethesource/rascal/issues/2233) - Parallel junit runner manages to trigger some kind of race
* [#2182](https://github.com/usethesource/rascal/issues/2182) - Two newlines in RascalShell give unnecessary error
* [#2183](https://github.com/usethesource/rascal/issues/2183) - Erroneous input causes unexpected exception in the REPL
* [#2236](https://github.com/usethesource/rascal/issues/2236) - bootstrap tpl generation of rascal project somehow uses library location from the bootstrap jar
* [#2240](https://github.com/usethesource/rascal/issues/2240) - `StringIndexOutOfBoundsException` in `TerminalProgressBarMonitor`
* [#2215](https://github.com/usethesource/rascal/issues/2215) - EmptyStack exception during test, but only on Windows (on the bootstrap branch)
* [#121](https://github.com/usethesource/rascal/issues/121) - Function call does not respect non-linear bounded type parameters
* [#134](https://github.com/usethesource/rascal/issues/134) - Off by one error in IDE annotator
* [#215](https://github.com/usethesource/rascal/issues/215) - uninstantiated type parameters when bound is not repeated
* [#49](https://github.com/usethesource/rascal/issues/49) - ambiguity in expression
* [#100](https://github.com/usethesource/rascal/issues/100) - Categorized lexical breaks grammar
* [#196](https://github.com/usethesource/rascal/issues/196) - InvocationTargetException thrown in specific case
* [#164](https://github.com/usethesource/rascal/issues/164) - Ambiguity with generators and column projections
* [#228](https://github.com/usethesource/rascal/issues/228) - String interpolation ambiguity
* [#595](https://github.com/usethesource/rascal/issues/595) - Allow empy block statements or improve error reporting
* [#337](https://github.com/usethesource/rascal/issues/337) - Potential ambiguity in case of variable-becomes patterns in ifDefinedOtherwise expressions
* [#360](https://github.com/usethesource/rascal/issues/360) - `"abc" + i` is Ambiguous ??
* [#682](https://github.com/usethesource/rascal/issues/682) - negative patterns are ambiguous
* [#818](https://github.com/usethesource/rascal/issues/818) - Ambiguity with indexing a relation
* [#774](https://github.com/usethesource/rascal/issues/774) - Ambiguous Rascal code when writing a match on map element
* [#841](https://github.com/usethesource/rascal/issues/841) - Ambiguous Rascal code
* [#1000](https://github.com/usethesource/rascal/issues/1000) - `-1 * -2` ambiguity
* [#998](https://github.com/usethesource/rascal/issues/998) - Pattern match error results in disproportional error message
* [#1016](https://github.com/usethesource/rascal/issues/1016) - Exception when ";" used  evaluating the cartesian product of variables of type set.
* [#1002](https://github.com/usethesource/rascal/issues/1002) - `#A("a")` is ambiguous
* [#1150](https://github.com/usethesource/rascal/issues/1150) - ambiguous statement
* [#1162](https://github.com/usethesource/rascal/issues/1162) - statically detected ambiguities in Rascal grammar rules for Sym and Pattern
* [#1381](https://github.com/usethesource/rascal/issues/1381) - Ambiguous code
* [#1230](https://github.com/usethesource/rascal/issues/1230) - ambiguous character class types
* [#1250](https://github.com/usethesource/rascal/issues/1250) - Inline retrieval of an element of a singleton list of strings or lists is ambiguous
* [#1461](https://github.com/usethesource/rascal/issues/1461) - ambiguous syntax rule `syntax A = left (A "+" A);`
* [#1527](https://github.com/usethesource/rascal/issues/1527) - Ambiguous code
* [#1413](https://github.com/usethesource/rascal/issues/1413) - Ambiguous code: deep match with `loc` literal
* [#1783](https://github.com/usethesource/rascal/issues/1783) - Unexplained ambiguity in string interpolation as a first declaration in a functiojn
* [#1532](https://github.com/usethesource/rascal/issues/1532) - ambiguous code ` l <- m.methodOverrides<to,from>[hashCodeMethod]`
* [#1849](https://github.com/usethesource/rascal/issues/1849) - Closely related ambiguities around character class combinators
* [#1997](https://github.com/usethesource/rascal/issues/1997) - Ambiguity errors for productions annotated with a tag
* [#2029](https://github.com/usethesource/rascal/issues/2029) - Ambiguity with regular expressions and comments
* [#1911](https://github.com/usethesource/rascal/issues/1911) - Negative numbers after ? seem to be ambiguous
* [#2125](https://github.com/usethesource/rascal/issues/2125) - Ambiguity when combining tuple projection and `when` clause
* [#2085](https://github.com/usethesource/rascal/issues/2085) - Type reification code does not support character class combinators such as `||` union
* [#2122](https://github.com/usethesource/rascal/issues/2122) - Ambiguity when combining tuple projection and string interpolation
* [#2132](https://github.com/usethesource/rascal/issues/2132) - Bug with Rascal Comment
* [#2168](https://github.com/usethesource/rascal/issues/2168) - Rascal ambiguity: `s.a ? t.a = 1;`
* [#43](https://github.com/usethesource/rascal/issues/43) - subtract of set from list works??
* [#260](https://github.com/usethesource/rascal/issues/260) - Failed tests return useless error messages
* [#363](https://github.com/usethesource/rascal/issues/363) - "Link with editor" button doesn't work with Rascal Navigator
* [#387](https://github.com/usethesource/rascal/issues/387) - += has a bug (seems to think receiver is not a container when it is)
* [#415](https://github.com/usethesource/rascal/issues/415) - Equality between different numeric types
* [#2231](https://github.com/usethesource/rascal/issues/2231) - typeOf gives incorrect type for concrete list
* [#2256](https://github.com/usethesource/rascal/issues/2256) - Deprecation warning reported on unexpected constructor
* [#2244](https://github.com/usethesource/rascal/issues/2244) - Reduce two identical versions of JavaCompilerException to one.
* [#2277](https://github.com/usethesource/rascal/issues/2277) - Loading the compiler in the current rascal project does not work anymore
* [#2281](https://github.com/usethesource/rascal/issues/2281) - NPE in `shell.CommandlineParser::printMainHelpMessage`
* [#912](https://github.com/usethesource/rascal/issues/912) - undocumented delete method on maps
* [#2273](https://github.com/usethesource/rascal/issues/2273) - project:// and target:// schemes not present anymore on the commandline
* [#2167](https://github.com/usethesource/rascal/issues/2167) - Typechecker crashes on destructuring bind
* [#2092](https://github.com/usethesource/rascal/issues/2092) - Type checker doesn't warn about "shadowing" nonterminal type
* [#2166](https://github.com/usethesource/rascal/issues/2166) - Typechecker crasht op destructuring bind of parse tree
* [#1996](https://github.com/usethesource/rascal/issues/1996) - Type checker infers `value` for known-type tuple wildcards in iterator
* [#2161](https://github.com/usethesource/rascal/issues/2161) - Typechecker crashes when importing a module annotated with `@ignoreCompiler{}`
* [#2150](https://github.com/usethesource/rascal/issues/2150) - Typecheck error only when typechecking importing module
* [#2130](https://github.com/usethesource/rascal/issues/2130) - Type checker and interpreter do not agree on `@expected` values
* [#2105](https://github.com/usethesource/rascal/issues/2105) - False positive "nullary function should not be overloaded" for functions that accept tuple patterns
* [#2070](https://github.com/usethesource/rascal/issues/2070) - False deprecation warning for overloaded constructor
* [#2290](https://github.com/usethesource/rascal/issues/2290) - New REPL does not start if the project is not in a pom.xml/RASCAL.MF folder
* [#1822](https://github.com/usethesource/rascal/issues/1822) - Extend `ISourceLocationWatcher::watch` to allow for recursive watches
* [#2324](https://github.com/usethesource/rascal/issues/2324) - Type checker swallows some messages
* [#2261](https://github.com/usethesource/rascal/issues/2261) - Latest tutor prints very funny package names instead of clean names
* [#2258](https://github.com/usethesource/rascal/issues/2258) - new repl prompt should not fail on an empty cancellation line
* [#2237](https://github.com/usethesource/rascal/issues/2237) - Using test files from the released jar is brittle and can stop a bootstrap
* [#2322](https://github.com/usethesource/rascal/issues/2322) - Message printer should not print 0000:0000 locations and long file locations with useless schemes are printed
* [#2279](https://github.com/usethesource/rascal/issues/2279) - Standardize info messages when opening the REPL
* [#2260](https://github.com/usethesource/rascal/issues/2260) - Continuation prompt shown while parse error is not at the end of line
* [#2223](https://github.com/usethesource/rascal/issues/2223) - TutorCommandExecutor crashed on empty lines
* [#2222](https://github.com/usethesource/rascal/issues/2222) - TutorCommandExecutor repl simulator breaks on broken line
* [#2220](https://github.com/usethesource/rascal/issues/2220) - tutor does not use progress bar yet while generated markdown code
* [#2213](https://github.com/usethesource/rascal/issues/2213) - context-free sequence containing a nullable fails on empty
* [#2076](https://github.com/usethesource/rascal/issues/2076) - need `memo` strategy modifier for `visit` to avoid exponential running times.
* [#1961](https://github.com/usethesource/rascal/issues/1961) - RascalLibraryURIResolver prints on System.err and System.out, asyncronously due to lazy class loading and lazy static initializers. This is what breaks assumptions inside the Evaluator (where System.err and System.out have been wrapped).
* [#1959](https://github.com/usethesource/rascal/issues/1959) - Progress bar running in rascal-maven-plugin often leaves cursor hidden after `mvn` terminates.
* [#1923](https://github.com/usethesource/rascal/issues/1923) - Add basic support for renaming refactoring
* [#2120](https://github.com/usethesource/rascal/issues/2120) - Typechecker does not throw error on constructor without arguments
* [#2131](https://github.com/usethesource/rascal/issues/2131) - Typechecker does not allow assigning a public variable of a different module
* [#2330](https://github.com/usethesource/rascal/issues/2330) - Dynamic type of function composition with type parameters unconstrained
* [#2335](https://github.com/usethesource/rascal/issues/2335) - Type-checker does not extend `import` statements (anymore) in extending module
* [#2336](https://github.com/usethesource/rascal/issues/2336) - `Box2Text` formatting of `I` behaves unexpectedly
* [#2251](https://github.com/usethesource/rascal/issues/2251) - JUnit test runner succeeds when importing test module fails
* [#2154](https://github.com/usethesource/rascal/issues/2154) - Confusing test result colors in REPL
* [#2259](https://github.com/usethesource/rascal/issues/2259) - new repl prompt can not handle multiline paste
* [#2257](https://github.com/usethesource/rascal/issues/2257) - Maven dependency extractor does not support version ranges
* [#2361](https://github.com/usethesource/rascal/issues/2361) - Type::glb bug for function types
* [#2343](https://github.com/usethesource/rascal/issues/2343) - AST syntax for `:set` notation not in line with concrete syntax of `:set` notation?
* [#2375](https://github.com/usethesource/rascal/issues/2375) - Watcher complains on normal `java -jar rascal.jar ` run
* [#2362](https://github.com/usethesource/rascal/issues/2362) - Add "related information" to Message datatype
* [#2380](https://github.com/usethesource/rascal/issues/2380) - Rascal Maven compilation does not fail on typecheck errors
* [#2345](https://github.com/usethesource/rascal/issues/2345) - "recovered parse error location" error does not describe the parse error location
* [#2340](https://github.com/usethesource/rascal/issues/2340) - Cleanup dead code in ParseTree.rsc
* [#2383](https://github.com/usethesource/rascal/issues/2383) - Shell does not print assertion failed messages
* [#2334](https://github.com/usethesource/rascal/issues/2334) - False positive of "Nullary function could not be overloaded" after unidentified types for parameters
* [#2377](https://github.com/usethesource/rascal/issues/2377) - DAP reports wrong line numbers & columns
* [#2389](https://github.com/usethesource/rascal/issues/2389) - RascalMonitor.warning is not printed most of the times
* [#2363](https://github.com/usethesource/rascal/issues/2363) - Regression: implode test fail
* [#2387](https://github.com/usethesource/rascal/issues/2387) - Extend cycle detector of interpreter skips root module
* [#2390](https://github.com/usethesource/rascal/issues/2390) - When module loading fails due to a cyclic extend, the current module is not cleaned up and left as a "zombie"
* [#2388](https://github.com/usethesource/rascal/issues/2388) - Extend cycle detection can be spoofed by confusing imports halfway
* [#2407](https://github.com/usethesource/rascal/issues/2407) - Fix import/extend cycle in checker that triggers undefined interpreter behavior
* [#2394](https://github.com/usethesource/rascal/issues/2394) - Remove messages during tpl packaging
* [#2513](https://github.com/usethesource/rascal/issues/2513) - 'Undeclared variable' error on use of declared constructor
* [#2515](https://github.com/usethesource/rascal/issues/2515) - Translate java IO exceptions to better rascal IO exceptions
* [#2497](https://github.com/usethesource/rascal/issues/2497) - Name in default expression not found although it is defined
* [#2481](https://github.com/usethesource/rascal/issues/2481) - `MalFormedURI` exception when backslashes occur in qualified module names (RC70)
* [#2482](https://github.com/usethesource/rascal/issues/2482) - Spurious "Conflicting module locations found" error (RC72)
* [#2462](https://github.com/usethesource/rascal/issues/2462) - Self import error from std lib
* [#2464](https://github.com/usethesource/rascal/issues/2464) - TPL not written when module has static errors
* [#2466](https://github.com/usethesource/rascal/issues/2466) - Imprecise error message "module name is ambiguous"
* [#2465](https://github.com/usethesource/rascal/issues/2465) - mvn, jar and zip schemes do not fully load module texts anymore if called from rascal-lsp
* [#2461](https://github.com/usethesource/rascal/issues/2461) - REPL: Strange characters when pressing backspace
* [#2459](https://github.com/usethesource/rascal/issues/2459) - NPE in error recovery disambiguation
* [#2443](https://github.com/usethesource/rascal/issues/2443) - Debug variable hover how shows appl/prod tree instead of more readable yield `(Statement) if (bla) ...`
* [#2445](https://github.com/usethesource/rascal/issues/2445) - Warnings after turning on debug mode
* [#2438](https://github.com/usethesource/rascal/issues/2437) - String streamer in webserver and REPLcontentServer fail on large output
* [#2420](https://github.com/usethesource/rascal/issues/2420) - Unexpected errors/warning when starting a Rascal console
* [#2421](https://github.com/usethesource/rascal/issues/2421) - Turning on debug mode causes stack dump, but debugger stays working
* [#2415](https://github.com/usethesource/rascal/issues/2415) - Interpreter crashes when calling a varargs functions with too few arguments
* [#2379](https://github.com/usethesource/rascal/issues/2379) - `ArrayIndexOutOfBoundException` from `vallang` at constructor pattern match
* [#2397](https://github.com/usethesource/rascal/issues/2397) - Importing a typepal module makes the type checker bail out silently
* [#2562](https://github.com/usethesource/rascal/issues/2562) - Unexpected "Remove code clone" error
* [#2563](https://github.com/usethesource/rascal/issues/2563) - ATypeTest creates a cycle that breaks all following tests
* [#2519](https://github.com/usethesource/rascal/issues/2519) - [documentation error] declarations != relations
