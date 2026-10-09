---
authors: [sungshik]
title: "Rascal 0.43.x release notes"
sidebar_position: 87
---

In this post we report on the Rascal release 0.43.x

## Release 0.43.0 - October, 2026

Welcome to Rascal 0.43.0! The major changes of this release are the removal of annotations and the removal of the `std` scheme. Additionally, this release includes several bugfixes and improvements to usability, performance, and stability.

These release notes are organized by major topics, and there is a list of merged pull requests and closed issues at the end.

Many, if not most, of the improvements to the Rascal project were both funded and executed by [Swat.engineering BV](https://www.swat.engineering). Thanks!

:::info
The Java-air project was extracted from the Rascal standard library in version 0.41.x already. Please add a dependency to [java-air](https://www.rascal-mpl.org/docs/Packages/org.rascalmpl.java-air/) if you want to keep using this functionality.
:::

### Language improvements

* The `std` scheme to refer to locations in the standard library has been sunsetted. See the separate [blog post](???) for details. ([#2828](https://github.com/usethesource/rascal/pull/2828), [#2847](https://github.com/usethesource/rascal/pull/2847))
* The scheme and authority of locations are now case-insensitive (normalized to lowercase), as required by the [URI RFC](https://datatracker.ietf.org/doc/html/rfc3986). This fixes a few subtle issues when locations were used in combination with some form of RPC (HTTP/JSON/LSP) or case-sensitive file system. ([#2845](https://github.com/usethesource/rascal/pull/2845), [#2857](https://github.com/usethesource/rascal/pull/2857), [#2851](https://github.com/usethesource/rascal/pull/2851), [#2860](https://github.com/usethesource/rascal/pull/2860), [#2862](https://github.com/usethesource/rascal/pull/2862))
* Parsers (including concrete syntax pattern matchers) can now be run directly for symbols with regular operators, including `*`, `+`, and `?`, without the need to introduce dummy symbols in the grammar. ([#2809](https://github.com/usethesource/rascal/pull/2809))
* Annotations have been removed. A Quick Fix is available in VS Code to automatically migrate all Rascal code with annotations to equivalent code without them. ([#1974](https://github.com/usethesource/rascal/pull/1974), [#2793](https://github.com/usethesource/rascal/pull/2793))
* The Rascal language now depends on version 1.1.x of Vallang.

:::info
The removal of the `std` scheme, the removal of annotation support, and the case-insensitivity of scheme/authority are low-impact breaking changes. Migration tools and Quick Fixes in the VS Code extension are provided to streamline the few code changes that might be needed.
:::

### Maven and evaluator improvements

* Rascal tests can now be executed using Maven, without the need to write separate Java classes with the `JUnitTestRunner` annotation. Test output is reported in language-independent CTRF JSON format. ([#2755](https://github.com/usethesource/rascal/pull/2755), [#2840](https://github.com/usethesource/rascal/pull/2840))
* The internals have been updated toward improvements in the VS Code extension to better respect pom.xml. See the separate [blog post](???) for details. ([#2641](https://github.com/usethesource/rascal/pull/2641), [#2794](https://github.com/usethesource/rascal/pull/2794), [#2792](https://github.com/usethesource/rascal/pull/2792), \[#2976], [#2804](https://github.com/usethesource/rascal/pull/2804), [#2901](https://github.com/usethesource/rascal/pull/2901))
* Several other small issues have been fixed/improved. ([#2843](https://github.com/usethesource/rascal/pull/2843), [#2877](https://github.com/usethesource/rascal/pull/2877), [#2854](https://github.com/usethesource/rascal/pull/2854), [#2913](https://github.com/usethesource/rascal/pull/2913))

### Typechecker improvements

* The calculation of use-defs is made more precise. As a result, for instance, Go To Definition for recursive function calls now works as expected in VS Code. ([#2770](https://github.com/usethesource/rascal/pull/2770), [#2801](https://github.com/usethesource/rascal/pull/2801), [#2865](https://github.com/usethesource/rascal/pull/2865))
* The registration of dependencies of calcs/reqs is made more precise. As a result, a few cases when the typechecker accidentally reported type errors no longer exist. ([#2762](https://github.com/usethesource/rascal/pull/2762))
* The performance of whole-project typechecking has been improved. Depending on the size and number of type errors/warnings of the project, the typechecking time can be reduced by 10%-40%. ([#2849](https://github.com/usethesource/rascal/pull/2849))
* Several other small issues have been fixed/improved. ([#2776](https://github.com/usethesource/rascal/pull/2776), [#2772](https://github.com/usethesource/rascal/pull/2772), [#2781](https://github.com/usethesource/rascal/pull/2781), [#2785](https://github.com/usethesource/rascal/pull/2785), [#2786](https://github.com/usethesource/rascal/pull/2786), [#2798](https://github.com/usethesource/rascal/pull/2798), [#2799](https://github.com/usethesource/rascal/pull/2799), [#2800](https://github.com/usethesource/rascal/pull/2800), [#2864](https://github.com/usethesource/rascal/pull/2864), [#2896](https://github.com/usethesource/rascal/pull/2896))
* The Rascal typechecker now depends on version 0.17.x of Typepal.

### Standard library improvements

* Formatting: A new formatter for Rascal code has been added in module `lang::rascal::format::Rascal`. As part of this, the existing box-based formatting framework has been extended with several functions and stability improvements. Furthermore, there are new utility functions to generate and debug box-based formatting pipelines in module `util::Formatters`, as demonstrated in module `lang::pico::format::Formatting`. ([#2738](https://github.com/usethesource/rascal/pull/2738), [#2872](https://github.com/usethesource/rascal/pull/2872))
* XML parsing: Support for case-sensitive parsing of tags and attributes has been added. ([#2888](https://github.com/usethesource/rascal/pull/2888))
* Graph visualization: Support for tooltips/hover styles and edge weights has been improved. ([#2769](https://github.com/usethesource/rascal/pull/2769))
* Reflective: Support to generate a new Rascal project folder and pom.xml has been improved. ([#2891](https://github.com/usethesource/rascal/pull/2891), [#2893](https://github.com/usethesource/rascal/pull/2893))
* Several other small issues have been fixed/improved. ([#2815](https://github.com/usethesource/rascal/pull/2815), [#2831](https://github.com/usethesource/rascal/pull/2831), [#2876](https://github.com/usethesource/rascal/pull/2876), [#2892](https://github.com/usethesource/rascal/pull/2892))

### Merged Pull Requests since version 0.42.2

The following list gives access to detailed progress and discussions regarding this progress. If you are interested in
contributing to Rascal then we'd use the "pull request" model together like this:

* [#2768](https://github.com/usethesource/rascal/pull/2768) - Properly cancel the rpc futures as to stop the client\&server in the json-rpc tests
* [#2738](https://github.com/usethesource/rascal/pull/2738) - #2346 redone: a formatter for Rascal itself, plus the necessary improvements and stabilization in the Box formatter framework code.
* [#2770](https://github.com/usethesource/rascal/pull/2770) - Define names uniformly
* [#1974](https://github.com/usethesource/rascal/pull/1974) - Prepares the removal of the final annotation (Tree@\loc), including its definition and all of its uses.
* [#2769](https://github.com/usethesource/rascal/pull/2769) - Maintenance and fixes and additions on vis::Graphs and its users
* [#2762](https://github.com/usethesource/rascal/pull/2762) - Added visualization of calculator/requirement dependencies and added dependencies
* [#2726](https://github.com/usethesource/rascal/pull/2726) - Run the compiler test in parallel
* [#2776](https://github.com/usethesource/rascal/pull/2776) - Fix/overloaded field in field selection
* [#2772](https://github.com/usethesource/rascal/pull/2772) - fix/remove-anno-code-from-compiler
* [#2781](https://github.com/usethesource/rascal/pull/2781) - Fix/wrong module name
* [#2785](https://github.com/usethesource/rascal/pull/2785) - Enforce that first argument of ModuleMessages is a logical loc
* [#2641](https://github.com/usethesource/rascal/pull/2641) - Unify VFS interfaces
* [#2786](https://github.com/usethesource/rascal/pull/2786) - Minor changes to reduce number of messages
* [#2787](https://github.com/usethesource/rascal/pull/2787) - Updating dependencies to may 2026 released versions
* [#2794](https://github.com/usethesource/rascal/pull/2794) - Remote IDEServices: use parameter classes instead of positional parameters
* [#2792](https://github.com/usethesource/rascal/pull/2792) - Implemented capabilities API on VFS
* [#2796](https://github.com/usethesource/rascal/pull/2796) - Added helper function on capability and aligned resolveLocation name
* [#2793](https://github.com/usethesource/rascal/pull/2793) - Preparing anno to kw param quickfix for inclusion in VScode
* [#2798](https://github.com/usethesource/rascal/pull/2798) - The key in ModuleMessages is now always a physical location
* [#2799](https://github.com/usethesource/rascal/pull/2799) - Fixed incorrect rewriting of m_imports\[imp]?
* [#2801](https://github.com/usethesource/rascal/pull/2801) - More precise use-defs
* [#2800](https://github.com/usethesource/rascal/pull/2800) - Improved hovers over syntax definition elements
* [#2804](https://github.com/usethesource/rascal/pull/2804) - Only return external output resolver if the input resolver also goes to the external
* [#2815](https://github.com/usethesource/rascal/pull/2815) - parseModuleWithSpaces now translates Java ParseError to Rascal ParseError instead of a generic Rascal Java exception
* [#2805](https://github.com/usethesource/rascal/pull/2805) - Make sure unknown URIs quickly throw an error instead of first going towards the remote registry
* [#2755](https://github.com/usethesource/rascal/pull/2755) - A cli rascal test runner for use from the maven plugin.
* [#2836](https://github.com/usethesource/rascal/pull/2836) - pre-checking was not happening due to a confusion between list\[loc] and list\[str]
* [#2837](https://github.com/usethesource/rascal/pull/2837) - disabled interpreter and vallang assertions while testing compiler
* [#2831](https://github.com/usethesource/rascal/pull/2831) - Fix broken path config constructor
* [#2840](https://github.com/usethesource/rascal/pull/2840) - replaced surefire reports by language independent ctrf reports
* [#2841](https://github.com/usethesource/rascal/pull/2841) - Fill the cache on the first run of mvn, such that later jobs won't have cache misses
* [#2846](https://github.com/usethesource/rascal/pull/2846) - Update to typepal-0.17.0
* [#2843](https://github.com/usethesource/rascal/pull/2843) - Cleaned up some issues in the maven code
* [#2845](https://github.com/usethesource/rascal/pull/2845) - In case of an case sensitive file system, probe for other cases in the maven resolver
* [#2852](https://github.com/usethesource/rascal/pull/2852) - Add loading tests to JUnit suite.
* [#2857](https://github.com/usethesource/rascal/pull/2857) - normalize in the right places
* [#2847](https://github.com/usethesource/rascal/pull/2847) - Extract path config-based classpath computation
* [#2851](https://github.com/usethesource/rascal/pull/2851) - Made sure project names from authorities where compared ignoring case
* [#2860](https://github.com/usethesource/rascal/pull/2860) - Using latest vallang that normalizes scheme and authorities
* [#2862](https://github.com/usethesource/rascal/pull/2862) - Check if the translated path is still correct, and clear the entry in case it failed
* [#2863](https://github.com/usethesource/rascal/pull/2863) - Reapply "Merge branch 'main' into fix/logicallocs-in-compiler"
* [#2849](https://github.com/usethesource/rascal/pull/2849) - Performance improvements typechecker
* [#2865](https://github.com/usethesource/rascal/pull/2865) - Fix the implications of precise usedefs on the compiler
* [#2864](https://github.com/usethesource/rascal/pull/2864) - Added missing "aempty" in various places
* [#2809](https://github.com/usethesource/rascal/pull/2809) - Ability to run parsers for symbols like A\*, A+, {A ","}+ and A? without introducing a dummy non-terminal
* [#2870](https://github.com/usethesource/rascal/pull/2870) - Fix normalized hash test in case of collisions.
* [#2872](https://github.com/usethesource/rascal/pull/2872) - added "formatter" to all functions that produce text edits directly
* [#2828](https://github.com/usethesource/rascal/pull/2828) - Remove std scheme
* [#2876](https://github.com/usethesource/rascal/pull/2876) - Fixed file+jar literal
* [#2877](https://github.com/usethesource/rascal/pull/2877) - Setting property during initialization of RascalShell to prevent log4j from complaining about a missing logging provider
* [#2854](https://github.com/usethesource/rascal/pull/2854) - Use project root from path config
* [#2887](https://github.com/usethesource/rascal/pull/2887) - fixes #2885 by introducing missing definitions in the abstract grammars. This must be reviewed by @tvdstorm
* [#2888](https://github.com/usethesource/rascal/pull/2888) - XML tags and attributes should be parsed case-sensitively
* [#2892](https://github.com/usethesource/rascal/pull/2892) - Signal a missing Rascal dependency during PathConfig calculation
* [#2891](https://github.com/usethesource/rascal/pull/2891) - Improve util::reflective::pomXml
* [#2893](https://github.com/usethesource/rascal/pull/2893) - Small tweaks to the pom.xml generation code
* [#2896](https://github.com/usethesource/rascal/pull/2896) - Undefined keyword parameters: changed causes to fixes and added quick fixes
* [#2909](https://github.com/usethesource/rascal/pull/2909) - if it is not a package the tutor should not use getRascalVersion because it does not work from the target folder. Instead it uses the explicit version parameter from the pom
* [#2911](https://github.com/usethesource/rascal/pull/2911) - Using latest vallang
* [#2901](https://github.com/usethesource/rascal/pull/2901) - Distinguish between cases "resolver doesn't exist" and "resolver does exist, but fails" when resolving logical locations
* [#2914](https://github.com/usethesource/rascal/pull/2914) - Disabling a test that doesn't work
* [#2913](https://github.com/usethesource/rascal/pull/2913) - Use unaliased static type in assignable statement
* [#vallang-350](https://github.com/usethesource/vallang/pull/350) - Implement proper scheme and authority normalisation
* [#vallang-354](https://github.com/usethesource/vallang/pull/354) - Fix alias type intersection checks
* [#vallang-293](https://github.com/usethesource/vallang/pull/293) - removed unused imports and added more specific overrides of the IListWriter.unique() and ISetWriter.unique() methods to avoid weird casts in client code
* [#vallang-355](https://github.com/usethesource/vallang/pull/355) - Remove wrong circular definition exception when using alias twice in constructor
* [#vallang-356](https://github.com/usethesource/vallang/pull/356) - KeyForBottom Manual Annotation (certainly chercker-framework issue)
* [#vallang-359](https://github.com/usethesource/vallang/pull/359) - Fix nested parameterized ADT parsing in StandardTextReader
* [#vallang-360](https://github.com/usethesource/vallang/pull/360) - Add test and fix for Validation and Arity in ValueIO parsing.
* [#vallang-361](https://github.com/usethesource/vallang/pull/361) - Fix Merge Regression

### Fixed issues since version 0.42.2

The following list of bugs, enhancements and other issues were registered with the rascal and vallang projects and solved in the time
frame since version 0.42.2. Some older issues were also fixed. Most issues however, were detected while alpha and
beta testing new features.

* [#2775](https://github.com/usethesource/rascal/issues/2775) - Fix field selection on an overloaded type
* [#2728](https://github.com/usethesource/rascal/issues/2728) - Typecheck fails on specific uri paths
* [#1555](https://github.com/usethesource/rascal/issues/1555) - Next round of type-checker errors in the standard library
* [#1794](https://github.com/usethesource/rascal/issues/1794) - de-debug rascal type-checker
* [#2410](https://github.com/usethesource/rascal/issues/2410) - Sort "please recheck module" warnings under the modules that have to be re-checked
* [#2715](https://github.com/usethesource/rascal/issues/2715) - unexpected feedback from type-checker about unbound variables in return type of ParseTree::parsers
* [#2773](https://github.com/usethesource/rascal/issues/2773) - Module with bad module name makes checker crash
* [#2767](https://github.com/usethesource/rascal/issues/2767) - Mixed physical/logical locations in type checker messages
* [#2424](https://github.com/usethesource/rascal/issues/2424) - Type checker: false positives for binary incompatibility when using Windows-built Rascal jars
* [#2701](https://github.com/usethesource/rascal/issues/2701) - Adapt VS Code & rascal lsp to be able to start a repl a rascal version thats not the one shipped with VS Code
* [#2449](https://github.com/usethesource/rascal/issues/2449) - Syntax list type hover prints normalized separated list instead of user-level original syntax list
* [#2176](https://github.com/usethesource/rascal/issues/2176) - no definition relation for recursive symbols
* [#2811](https://github.com/usethesource/rascal/issues/2811) - Remove large files from history to reduce repo size
* [#1915](https://github.com/usethesource/rascal/issues/1915) - "Except" does not work correctly with shared prefixes in nonterminals, leading to ambiguity
* [#2819](https://github.com/usethesource/rascal/issues/2819) - During calculation of path config, do not generate std:// entries
* [#2821](https://github.com/usethesource/rascal/issues/2821) - Do not use std:// for setting up search path in evaluator
* [#2820](https://github.com/usethesource/rascal/issues/2820) - Rewrite library locations to mvn:// in packager
* [#2825](https://github.com/usethesource/rascal/issues/2825) - Replace all occurrences of std:// in Rascal with appropriate locations
* [#2822](https://github.com/usethesource/rascal/issues/2822) - Replace std:// resolver with one that throws errors/reports file does not exist
* [#2834](https://github.com/usethesource/rascal/issues/2834) - Several issues with subtype and or transitiveReduction visible in documentation for subtype
* [#2835](https://github.com/usethesource/rascal/issues/2835) - type string inlining does not canonicalize relations, list relations and prints the wrong type name for reified types
* [#2830](https://github.com/usethesource/rascal/issues/2830) - Test debugger
* [#2856](https://github.com/usethesource/rascal/issues/2856) - Invalidate Maven casing cache
* [#2842](https://github.com/usethesource/rascal/issues/2842) - Source Locations do not normalize scheme & authority, this causes subtle issues
* [#2871](https://github.com/usethesource/rascal/issues/2871) - rascal-lsp path config gets two extra dependencies
* [#2436](https://github.com/usethesource/rascal/issues/2436) - standalone jar complains about missing logging provider
* [#2878](https://github.com/usethesource/rascal/issues/2878) - IllegalMonitorStateException in DebugHandler.suspended() crashes the debuggee non-deterministically on breakpoint/exception suspend
* [#2696](https://github.com/usethesource/rascal/issues/2696) - Go-to-definition not working in recursive function definitions
* [#2399](https://github.com/usethesource/rascal/issues/2399) - Standard library is on the interpreter search path twice
* [#2879](https://github.com/usethesource/rascal/issues/2879) - checkFile (IDE incremental check) crashes with NoBinding() on a function with many overloaded zero-arg-constructor-pattern clauses; same code compiles fine via plain mvn compile
* [#1777](https://github.com/usethesource/rascal/issues/1777) - lib scheme needs version numbers to resolve to unique locations.
* [#2885](https://github.com/usethesource/rascal/issues/2885) - lang::rascal::syntax::tests::ImplodeTests fail on main; apparantly not executed with mvn test
* [#2880](https://github.com/usethesource/rascal/issues/2880) - newRascalProject does not generate the execution to run the compiler/checker on the project's source code
* [#2881](https://github.com/usethesource/rascal/issues/2881) - newRascalPom generates dependency to old rascal-maven-plugin instead of latest.
* [#2817](https://github.com/usethesource/rascal/issues/2817) - Remove the std scheme
* [#465](https://github.com/usethesource/rascal/issues/465) - TC does not allow the same constructor name in syntax rule and data declaration
* [#2816](https://github.com/usethesource/rascal/issues/2816) - Error message in typechecker lists available keyword parameters as cause, but should be a fix?
* [#2027](https://github.com/usethesource/rascal/issues/2027) - ANSI codes printed after exit and prompt is off.
* [#2904](https://github.com/usethesource/rascal/issues/2904) - Local nested pattern variable does not shadow global function definition
* [#1100](https://github.com/usethesource/rascal/issues/1100) - Imploding with overloaded AST constructor functions does not work
* [#vallang-349](https://github.com/usethesource/vallang/issues/349) - Source Locations do not normalize scheme & authority, this causes subtle issues
