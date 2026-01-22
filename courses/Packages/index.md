---
title: Package Directory
sidebar_position: 10
---

:::tip
You can ((AddYourProjectToThePackageDirectory)).
::

### The packages

### Language Support

| Language name | Package | Note |
| ------------- | ------- | ----- |
| C and C++     | [clair](/docs/Packages/org.rascalmpl.clair) | |
| Java          | [java-air](/docs/Packages/org.rascalmpl.java-air) | factored out of the standard library recently |
| PHP           | [php-analysis](/docs/Packages/PhpAnalysis) | |
| Python        | [python-air](/docs/Packages/PythonAir) | |
| JVM bytecode  | [flybytes](/docs/Packages/Flybytes) | Forward and Reverse | 

### Libraries

| Salix        | [salix-core](/docs/Packages/SalixCore) | User interface framework for Rascal |
| Salix Contrib | [salix-contrib](/docs/Packages/SalixContrib) | Useful extensions for Salix |
| Rascal GIT   | [rascal-git](/docs/Packages/RascalGit) | Accessing GIT from Rascal |
| Rascal LSP   | [rascal-lsp](/docs/Packages/RascalLsp) | LSP for Rascal and LSP generator for DSLs in Rascal |
| Typepal      | [typepal](/docs/Packages/Typepal) | Generic name and type analysis framework; to be factored in to the standard library soon |

### Tools

| Library Name | Package | Note |
| ------------ | ------- | ----- |
| Dr Ambiguity | [drambiguity](/docs/Packages/DrAmbiguity) | Interactive UI for detection, diagnostics and fixing of ambiguity context-free grammars. |

The currently available Rascal packages are grouped in two categories: language support and generic libraries.

### Language Support

| Language name | Package | Note |
| ------------- | ------- | ----- |
| C and C++     | [clair](/docs/Packages/org.rascalmpl.clair) | Based on Eclipse CDT |
| Java          | [java-air](/docs/Packages/org.rascalmpl.java-air) | Based on Eclipse JDT (used to be part of standard library) |
| JVM bytecode  | [flybytes](/docs/Packages/org.rascalmpl.flybytes) | Forward and Reverse |
| PHP           | php-analysis | Currently not building will be released as soon as possible |
| Python        | python-air | Currently not building will be released as soon as possible |

### Generic Libraries

| Library Name | Package | Note |
| ------------ | ------- | ----- |
| Dr Ambiguity | drambiguity | Interactive UI based on Salix for detection, diagnostics and fixing of ambiguity context-free grammars. Currently documentation is not building, will be released as soon as possible |
| Rascal Lucene | [rascal-lucene](/docs/Packages/org.rascalmpl.rascal-lucene/) | Two-way mapping between Rascal and the Apache Lucene search and indexing library |
| Salix        | [salix-core](/docs/Packages/org.rascalmpl.salix-core) | User interface framework for Rascal |
| Salix Contrib | [salix-contrib](/docs/Packages/org.rascalmpl.salix-contrib) | Useful extensions for Salix |
| Rascal GIT   | [rascal-git](/docs/Packages/edu.appstate.cs.rascal-git/) | Accessing GIT from Rascal |
| Rascal LSP   | [rascal-lsp](/docs/Packages/org.rascalmpl.rascal-lsp/) | LSP for Rascal and LSP generator for DSLs in Rascal |
| Typepal      | [typepal](/docs/Packages/org.rascalmpl.typepal/) | Generic name and type analysis framework |

### More info: what is the Rascal Package Directory?

The Package Directory provides an overview of libraries, tools and frameworks written in Rascal (and other languages) which are:
* contributed by the community
* useful for the community
* excluding the core language implementation (interpreter, compiler, repl, IDE extensions)

Each package is encapsulated in a `jar` file, is deployed in the UseTheSource Maven repository, and comes with:
* License information.
* Funding information.
* Citation information.
* Release notes.
* Maven dependency example.
* API documentation, generated from the sources.
* Optional manual(s) generated using rascal-tutor.

The release and deployment mechanisms that are in place guarantee that:
* Each package' latest release version is documented here.
* Each package is tested before release.
* Each package documents the rascal version it dependend on at the time of release.

:::info
If a package was not released (yet) after a major or minor release of `rascal`, then it may still work with the newest release, but this is not guaranteed. Packages owners are reminded to upgrade and release by the UseTheSource community.
:::
