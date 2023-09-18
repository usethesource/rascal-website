---
title: Locations
---

#### Synopsis

((Values-Location)) are a central mechanism in Rascal for referring to (parts of) files and for referring to language constructs that have "qualified names". 

#### Description

Apart from the syntax of locations and the operations defined on them in ((Location)) and ((IO)) this documents an overview of all provided URI schemes and their syntax and semantics.

These are all schemes that map to locations of files in physical or logical file systems:

| scheme   | description |
| -------- | ------- |
| `file:///<path>` | an absolute file-system path. Separators always like so: `/` |
| `cwd:///<path>` | file-system path relative to the current working directory of the JVM running Rascal |
| `tmp:///<path>` | file-system path relative to where this OS/JVM thinks the temp folder is |
| `home:///<path>` | file-system path relative to where the current user's home directory is |
| `std:///<path>` | opaque virtual file system that points to the root of the (deployed) Rascal standard library |
| `memory://<filesystem-name>/<path>` | fast in-memory file system that is transient between runs of the JVM. Guarantees `lastModified` is incremented after every write |
| `jar+<scheme>://<authority>/<jar-path>!/<in-jar-path>` | file-system for what is inside a jar file |
| `zip+<scheme>://<authority>/<zip-path>!/<in-zip-path>` | file-system for what is insied a zip file |
| `project://<project-name>/<path>` | opaque file-system that is relative to the root a an IDE project in the current workspace of an IDE. The project must be "open" and active for this to work. |
| `target://<project-name>/<path>` | opaque file-system that is relative to the (binary) target compilation folder of a project that is active and open in the workspace of the current IDE |
| `lib://<lib-project-name>/<path>` | opaque file-system that points to the deployed code of a Rascal library. The library must have a RASCAL.MF file with the right `Project-Name` in it. The scheme may wrap/hide a target folder or a deployed jar file, depending on the situation in the IDE. Opened and active projects are resolved to their target folders while projects we depend on in `pom.xml` that are not opened typically resolve to their installed jar files in the users `.m2` folder |
| `https://<host>/<path>?<query>#fragment` | Simply a page on a website. | 
| `http://<host>/<path>?<query>#fragment` | Simply a page on a website. | 
| `system:///<path>` | this is the root of the JVM class and resource path for the current JVM |
| `bundle://<bundle-name>/<path>` | this is an opaque file system into an OSGI bundle (which must be loaded and initialized). Works only in Eclipse. It defers to `bundleresource://` after the bundle instance id has been resolved. |
| `plugin//<plugin-name>/<path>` | this is an opaque file system into an Eclipse plugin (which must be loaded and initialized). Works only in Eclipse. It defers to `bundle://` after the bundle name is associated with the plugin name. |
| `bundleresource://<bundle-id>/<path>` | this is an opaque file system into an (unzipped) resource partition of an OSGI bundle (whichmust be loaded and initialized). Works only in Eclipse |

For all of these schemes it is natural to use offset/length and start/end line/column information as described [here]((Values-Location)).

To get access to a file in your current project you can use `project://<your-project>`, however it will only work while in development mode in your IDE. For a more robust reference to a local file, also after deployment, use ((IO::findResources))

Next to the above file-systems we also map the "mangled" or "qualified" naming schemes of programming languages and domains-specific languages to locations. These exact references can then be used instead of file locations to analyze source code and to generate (interactive) visualizations.

The general scheme is this: `<language-name>+<concept-name>://<name-resolution-authority>/<qualified>/<name>`:
* language-name would be `java`, `php` ,`cpp`, etc.
* concept-name would be `class`, `method`, `interface`, `parameter`, `variable`, `trait`
* resolution-authority defines what the scope of name resolution is. It can be empty if you are doing an open-world analysis, or it could be the name of the top project you are currently analyzing. That project defines the search path for all of the other names and library projects used.
* qualified-name is typically represented by the names of nested scopes in the programming languages. Sometimes explicit names are generated for implicit concepts (such as anonymous classes and lambdas).

In the [M3]((analysis::m3::Core)) model, qualified names are mapped to their declaration locations in the `.declarations` table. This table is also used by ((analysis::m3::Registry)) to provide interactive resolution. This is how Rascal jumps to the source code of a qualified name location when it is clicked.

The other direction in [M3]((analysis::m3::Core)) core is the `.uses` table. This maps the places where a declaration
is used to their qualified name. By composing `.uses` with `.declaration` you get a reference resolver.

It is also common to annotate Parse Trees and Abstract Syntax Trees with qualified names after name and type resolution. You can use a [keyword field]((AlgebraicDataType)) of an algebraic data-type. It is typically called `decl` as in `data Expression | variable(str identifier, loc decl = |unknown:///|)` and the last part of the qualified name in `decl` would be equal to the `identifier`: `java+variable:///org/myorg/MainClass/main/myVar`.

