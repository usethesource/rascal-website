---
authors: [sungshik]
title: "Rascal 0.43.x release notes"
sidebar_position: 86
---

In this post we report on the Rascal release 0.43.x

## Release 0.43.0 - October, 2026

Welcome to Rascal 0.43.0! This release introduces a major step forward in the way DSL projects can manage their Rascal version dependencies. Moving to a *POM-leading* approach, from this release onward, any evaluator that runs in the context of a DSL project (regardless of its origin, such as a command of the `rascal-maven-plugin` or a REPL opened by the VS Code extension) will use exactly the Rascal version that is specified in that project's pom.xml. This approach rules out many subtle version-related issues and improves overall stability. A side-effect of the POM-leading approach is that the `std` schema can no longer be used to refer to locations inside the standard library. This is another major change introduced in this release. Additionally, this release includes bugfixes and improvements to usability, performance, and stability.

Both the POM-leading approach and the removal of the `std` schema are explained in more detail in two separate blog posts:
  - ???
  - ???

These release notes are organized by major topics, and there is a list of merged pull requests and closed issues at the end.

Many, if not most, of the improvements to the Rascal project were both funded and executed by Swat.engineering BV. Thanks!

:::warning
The checker introduced in version 0.42.x will re-calculate and replace all intermediate `.tpl` files in your target folder which have been produced earlier with an older version. So, the first
check after upgrading to 0.42.x or above will not be incremental.
Also, for library dependencies and inter-project dependencies it is important you upgrade to rascal **0.43.x** all _at the same time_. A clean error message
will be produced if you forget, or definitions will simply not be found because their fully qualified names in the TPL file interfaces have changed in different ways. 
:::

:::info
The Java-air project was extracted from the Rascal standard library in version 0.41.x already. Please add a dependency to [java-air](https://www.rascal-mpl.org/docs/Packages/org.rascalmpl.java-air/) if you want to keep using this functionality. 
:::

:::info
As announced in the release notes of version 0.42.x, the `@deprecated` API of [util::LanguageServer](https://www.rascal-mpl.org/docs/Packages/org.rascalmpl.rascal-lsp/Library/util/LanguageServer/) has been removed in version 0.43.x.
:::

### Language improvements

* The `std` scheme to refer to locations in the standard library has been sunsetted. See the separate [blog post](???) for details. (#2828, #2847)
* The scheme and authority of locations are now case-insensitive (normalized to lowercase), as required by the [URI RFC](https://datatracker.ietf.org/doc/html/rfc3986). This fixes a few subtle issues when locations were used in combination with some form of RPC (HTTP/JSON/LSP) or case-sensitive file system. (#2845, #2857, #2851, #2860, #2862)
* Parsers (including concrete syntax pattern matchers) can now be run directly for symbols with regular operators, including `*`, `+`, and `?`, without the need to introduce dummy symbols in the grammar. (#2809)
* Annotations have been removed. A Quick Fix is available in VS Code to automatically migrate all Rascal code with annotations to equivalent code without them. (#1974, #2793)
* The Rascal language now depends on version 0.1.x of Vallang.

### Maven and evaluator improvements

* The version of Rascal used by an evaluator is now fully determined by the pom.xml of the project in which the evaluator is started (e.g., by executing `rascal:compile/tutor/console` using Maven or by opening a REPL in the VS Code extension). See the separate [blog post](???) for details. (#2641, #2794, #2792, #2976, #2804, #2901)
* Rascal tests can now be executed using Maven, without the need to write separate Java classes with the `JUnitTestRunner` annotation. Test output is reported in language-independent CTRF JSON format. (#2755, #2840)
* Several other small issues have been fixed/improved. (#2843, #2877, #2854, #2913)

### Typechecker improvements

* The calculation of use-defs is made more precise. As a result, for instance, Go To Definition for recursive function calls now works as expected in VS Code. (#2770, #2801, #2865)
* The registration of dependencies of calcs/reqs is made more precise. As a result, a few cases when the typechecker accidentally reported type errors no longer exist. (#2762)
* The performance of whole-project typechecking has been improved. Depending on the size and number of type errors/warnings of the project, the typechecking time can be reduced by 10%-40%. (#2849)
* Several other small issues have been fixed/improved. (#2776, #2772, #2781, #2785, #2786, #2798, #2799, #2800, #2864, #2896)
* The Rascal typechecker now depends on version 0.17.x of Typepal.

### Standard library improvements

* Formatting: A new formatter for Rascal code has been added in module `lang::rascal::format::Rascal`. As part of this, the existing box-based formatting framework has been extended with several functions and stability improvements. Furthermore, there are new utility functions to generate and debug box-based formatting pipelines in module `util::Formatters`, as demonstrated in module `lang::pico::format::Formatting`. (#2738, #2872)
* XML parsing: Support for case-sensitive parsing of tags and attributes has been added. (#2888)
* Graph visualization: Support for tooltips/hover styles and edge weights has been improved. (#2769)
* Reflective: Support to generate a new Rascal project folder and pom.xml has been improved. (#2891, #2893)
* Several other small issues have been fixed/improved. (#2815, #2831, #2876, #2892)

### Merged Pull Requests since version 0.42.2

The following list gives access to detailed progress and discussions regarding this progress. If you are interested in
contributing to Rascal then we'd use the "pull request" model together like this:

TODO

### Fixed issues since version 0.42.2

The following list of bugs, enhancements and other issues were registered with the rascal and vallang projects and solved in the time
frame since version 0.42.2. Some older issues were also fixed. Most issues however, were detected while alpha and
beta testing new features.

TODO