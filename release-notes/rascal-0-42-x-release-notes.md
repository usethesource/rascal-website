---
authors: [thartman,jurgenvinju]
title: "Rascal 0.42.x release notes"
sidebar_position: 86
---

In this post we report on the Rascal release 0.42.x

## Release 0.42.0 - March, 2026

Welcome to Rascal 0.42.0! This release fixes many important issues. It is characterized best by an enormous improvement in start-up speed and
a lot of usability improvements for the debugger.

These release notes are organized by major topics and there is a list of smaller improvements at the end, including a list of linked closed issues and the merged pull requests.

Many, if not most, of the improvements to the Rascal project were both funded and executed by Swat.engineering BV. Thanks! Also 
thanks to Jean-Baptiste Boderlein for the many improvements to the Rascal debugger.

:::warning
The new checker will re-calculate and replace all intermediate `.tpl` files in your target folder which have been produced earlier with an older version. So, the first
check after upgrading to 0.42.x will not be incremental.
Also, for library dependencies and inter-project dependencies it is important you upgrade to rascal **0.42.x** all _at the same time_. A clean error message
will be produced if you forget, or definitions will simply not be found because their fully qualified names in the TPL file interfaces have changed in different ways. 
:::

:::info
All Eclipse functionality, including the `rascal-eclipse` plugin and the Eclipse IDE Metatooling Platform (IMP a.k.a. `impulse`), was _archived_ last year, after having been deprecated for a long time. Everybody is expected to use Rascal now using the VS Code extension, or using the commandline REPL, or from their own LSP clients. With this move to VS Code the `Figure` library (embedded in `rascal-eclipse`) is no longer available, until we create a replacement. The pre-existing releases of `rascal-eclipse` and `impulse` will _not_ remain available forever on `usethesource.io`, for the sake of security and simplicity.
:::

:::info
The Java-air project was extracted from the Rascal standard library in version 0.41.x already. Please add a dependency to [java-air](https://www.rascal-mpl.org/docs/Packages/org.rascalmpl.java-air/) if you want to keep using this functionality. 
:::

:::info
The 0.42.x series is the **last** release in which the `@deprecated` API of [util::LanguageServer](https://www.rascal-mpl.org/docs/Packages/org.rascalmpl.rascal-lsp/Library/util/LanguageServer/) will be available (corresponds to [rascal-lsp](https://www.rascal-mpl.org/docs/Packages/org.rascalmpl.rascal-lsp) 2.11.x).  Please migrate to the new language service function signatures a.s.a.p. It's quite easy.
:::

### Fast and Consistent Configuration via Maven's `pom.xml`

> *warning* The way Rascal is configured is gradually migrating from using `RASCAL.MF` to using `pom.xml`. Dependencies (Java, Rascal or otherwise) already come from a `pom.xml` file's `<dependencies>` list. Every project should have one, with at least a dependency on the Rascal project itself. Only the project name and the source folders for the interpreter still come from `RASCAL.MF`.

* `mvn package` conflicted with compilation from the IDE (i.e. by saving a changed module), leading to confusing errors when alternating between the two. The package phase now uses a dedicated directory to rewrite locations in the JAR, preventing these issues.
* Maven now properly resolves sibling project dependencies in multi-module projects.

### REPL/Console improvements

* Reloading modules that were removed since importing (for example when switching branches) crashed the REPL, but is now handled gracefully.
* Reloading of modules that were `extend`ed on the REPL did not work. Typing `extend MyModule;` on the REPL now leads to a warning and the semantics of `import MyModule;`.
* Imports of missing modules are now cleared.
* NullPointerExceptions due to reloading modules which have been renamed or deleted in the mean time now leads to proper unloading of the old module.
* Errors detected while importing (missing module file for example) are now linked to the import statement's location, rather than the missing module location.

### Debugger improvements

* Breakpoint suspension is now limited to a single thread, instead of all threads.
* Values of variables can now be changed while debugging.
* The debugging console now has autocomplete.
* The debugging console now supports importing modules.
* Conditional breakpoint support.
* Some bug fixes where confusing, non-existent locations were shown.
* There is now a fixed "Rascal exceptions" breakpoint. When enabled, the debugger is paused on exceptions.
* Frame restart support.

### Type checker improvements

* Warnings for unused imports/extends have been improved.
* TypePal and the Rascal type-checker switched (_internally_) from exact file locations for definition/declaration identifiers to abstract logical locations (a.k.a. fully qualified names). Since fully qualified names are more stable under minor changes of the file, intermediate results (TPL files) are more often compatible to their previous versions which helps in modular and incremental type-checking and compilation. It also improves library encapsulation and co-evolution of library dependencies. This is all internal and does not change the way the checker works for you. It did help to fix a number of pressing issues with incremental re-checking and library dependency upgrade scenarios.
* The computation of the hashes of logical locations has been changed to normalize and sanitize inputs before hashing. This fixes issues when mixing TPLs from different OSes, but as a consequence, many hashes of libraries changed. Projects should therefore update to the most recently released version of libraries.
* Project path configurations would sometimes contain "Unresolved dependency" errors for local projects that could (and would) be resolved in the workspace. If these project are indeed resolved, these errors are now not shown anymore.
* Improved the representation of module names in the progress bar while typechecking.
* Messages related to ignored declarations now use more precise locations.
* Changes to `@ignore`, `@ignoreCompiler` and `@ignoreInterpreter`; `@ignoreCompiler` is now the only way to omit a module when type-checking.
* Clean up error messages that would sometimes persist, despite having been fixed.

### Tutor improvements

* Added `includeLibraries` option, which copies the contents of the docs folder from all library dependencies. This is to simplify the website configuration.

### Standard Library Maintenance

* When creating a new Rascal project using `util::Reflective::newRascalProject`, some useful VS Code settings are now added to the project by default.
* When serializing as JSON, complex values are not wrapped with auxiliary JSON objects anymore.
* Parsing JSON to an ADT using `parseJSON` would crash with "length should be positive" error in case the input length exceeded 1024 characters. Also JSON origin tracking could not be turned off even with `originTracking=false`. Both issues have been fixed, and origin tracking as well as accurate error messages have been improved to cover more corner cases. In the next release unicode support will be added to the accurate origin tracking code.
* Fixed many type errors, that would sometimes propagate to modules importing the standard library as well.
* Improve the performance of `copy` when the source and destination location have the same scheme, for `memory` and `file` schemes.
* Deprecated some definitions in `util::ShellExec` that were intended to be deprecated already: `createProcess`, `exec` and `execWithCode` variants that accept a `str` as the first argument - use a `loc` instead.
* Fixes to the documentation (spelling, missing synopsis, mistakes) in many places.

### Other Rascal Interpreter changes

* Nested list assignment also works with negative indices.
* List slicing now works a bit differently; it supports negative and out-of-bound indices. In some cases, where negative slice indices are used, the result might change.
* Fixes for shadowing local function definitions with function arguments.
* Sub-list equality checking did always not work correctly for sub-lists of the same list, which has now been fixed.
* Fixes for rare missing definitions from cyclic imports.
* Colliding hashes of tuple values caused subtle equality/difference/lookup issues, which have been fixed downstream in the [vallang](https://github.com/usethesource/vallang) and [capsule](https://github.com/usethesource/vallang) dependencies.

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
