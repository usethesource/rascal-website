---
title: Package Directory
sidebar_position: 10
---

:::tip
If you would like to share your Rascal library or tool with the community, please [open a pull request](https://github.com/usethesource/rascal/pulls) to add your project to the pom.xml. Currently we require to make a "fork" to help
with authentication/authorization for publication on the Maven repository and jumping through minor hoops like running the automated tests and documentation generation. The community's values and guidelines can be found [here](https://www.usethesource.io/about).
:::

### What is the Rascal Package Directory?

The Package Directory provides an overview of libraries, tools and frameworks written in Rascal (and other languages) which are:
* contributed by the community
* useful for the community
* excluding the core language implementation (interpreter, compiler, repl, IDE extensions)

Each package is encapsulated in a `jar` file, is deployed in the UseTheSource Maven repository, and comes with:
* License information.
* Funding information.
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

The currently available packages are grouped in two categories: language support, and generic libraries.

### Language Support

| Language name | Package | Note |
| ------------- | ------- | ----- |
| C and C++     | [clair](/docs/Packages/Clair) | |
| Java          | [rascal](/docs/Rascal) | To be factored out of the standard library soon |
| PHP           | [php-analysis](/docs/Packages/PhpAnalysis) | |
| Python        | [python-air](/docs/Packages/PythonAir) | |
| JVM bytecode  | [flybytes](/docs/Packages/Flybytes) | Forward and Reverse | 

### Generic Libraries

| Library Name | Package | Note |
| ------------ | ------- | ----- |
| Dr Ambiguity | [drambiguity](/docs/Packages/DrAmbiguity) | Interactive UI based on Salix for detection, diagnostics and fixing of ambiguity context-free grammars. |
| Salix        | [salix-core](/docs/Packages/SalixCore) | User interface framework for Rascal |
| Salix Contrib | [salix-contrib](/docs/Packages/SalixContrib) | Useful extensions for Salix |
| Rascal GIT   | [rascal-git](/docs/Packages/RascalGit) | Accessing GIT from Rascal |
| Rascal LSP   | [rascal-lsp](/docs/Packages/RascalLsp) | LSP for Rascal and LSP generator for DSLs in Rascal |
| Typepal      | [typepal](/docs/Packages/Typepal) | Generic name and type analysis framework; to be factored in to the standard library soon |
| Rascal Tutor | [rascal-tutor](/docs/Packages/RascalTutor) | Rascal source code documenter and manual authoring tool; to be factored into the standard library soon | 
