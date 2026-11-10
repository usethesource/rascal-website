---
title: Tutor Mojo
keywords:
    - "rascal:tutor"
    - documentation
    - rascaldoc
    - tutor
    - docusaurus
    - markdown
---

#### Synopsis

Compiles [tutor]((course:Tutor)) markdown files in a specific folder hierarchy, and Rascal modules from source folders to a comprehensive collection of documentation files in markdown format.

#### Description

Just run `mvn compile` or `mvn rascal:tutor` to compile the documentation 
in the current project. The resulting documentation in docusaurus Markdown format is packaged in the
jar file under `/docs/Packages/<groupId>.<artefactId>/` for later processing in a website or an IDE. This includes:
* one folder for every course sourced in `<srcs>`, recursively every concept file leads to a new folder and a new index file.
* one folder for every module folder in `<srcs>`, recursively every module becomes one markdown file and every folder becomes a nested folder. See ((DocumentingCode)) for more information.
* [screenshots](Tutor:Markup-Screenshots) made by the tutor pages are saved in the target folder

When embedded executable code in .rsc modules or .md concept files fails unexpectedly, the `mvn rascal:tutor` build fails with an error message. The same holds for missing or ambiguous links.

[Linking](Tutor:Markup-Links) concepts is possible between concepts and modules within the same project, _and_ between any project that links to a concept in a depending project (see `<dependencies>` in the pom.xml.

The tutor may have its own configuration in an `<execution>` block. This is used to add course material next to the module API, or to remove the module API from the documentation entirely. For example:

```
<execution>
    <id>default-cli</id>
    <phase>compile</phase>
    <goals>
        <goal>tutor</goal>
    </goals>
    <configuration>
        <bin>${project.build.outputDirectory}</bin>
        <sources>|http://github.com/myOrg/myProject/blob/main|</sources>
        <issues>|http://github.com/myOrg/myProject/issues|</issues>
        <srcs>
            <src>${project.basedir}/src</src>
            <src>${project.basedir}/doc/Motivation</src>
            <src>${project.basedir}/doc/References</src>
        </srcs>
    </configuration>
</execution>
```

See ((course:Tutor)) for more information on how annotated Rascal modules and
concept files in markdown format are used to compile documentation.

This is the complete list of tutor parameters and their defaults:

| parameter | example/default | note |
| --- | --- | --- |
| bin | `./target/classes/` | target folder where `docs` will reside |
| srcs | `<src>./src/main/rascal</src>` | list of local source folders for Rascal modules and concept files |
| ignores | `<ignore>./src/main/rascal/prelude</ignore>` | will not generate any documentation reachable from this folder |
| sources | `http://github.com/usethesource/${project.name}/blob/main` | website of the project's home. |
| issues | `http://github.com/usethesource/${project.name}/issues` | website of the project's issue tracker. |
| license | ./LICENSE.md | local file that contains the (open-source) license. |
| citation | ./CITATION.MD | local file that explains how to cite this project. |
| funding | ./FUNDING.MD | local file that documents the money sources. |
| authors | ./AUTHORS.MD | local file that explains authorship of the code in this project. |
| version | `${project.version}` | the current version of this project. |
| releaseNotes | ./RELEASE-NOTES.md | the release notes in inverse chronological order. |
| isPackageCourse | true | stores output in `/docs/Packages/<groupId>.<artefactId>`, or in `/docs/<CourseName>` when `false`. |
| includeLibraries | false | when true copies the libraries we depend on from `Library.jar!/docs/*` to `/docs/*`
| errorsAsWarnings | false | when true will not fail the build even if errors are present |
| warningsAsErrors | false | when true will fail the build even if only warnings are reported |

Note that issues, license, citation, funding, authors and releaseNotes files must exist or else the build will fail.

### Benefits

* Using the tutor it is easy to create beautiful documentation that integrates seemlessly into http://www.rascalmpl.org
* Writing  ((CodeExamples)) is a way to write documented tests. At compile-time all examples are tested for unexpected failures.
* The tutor compiler is incremental. Repeated `mvn rascal:tutor` will only re-index and re-compile changed files.
* The tutor compiler generates errors with accurate file names and line numbers, for easy fixing.
* Every library package is always documented online with the relevant documentation on licenses, authors, funding, citation, API and
specific user documentation.

### Pitfalls

* By default the tutor generates markdown in `/Packages/<groupId>.<artefactId>` and all links are relative to these subfolder.
* The incremental compiler never removes information from the index. So after `mvn clean` new broken links can be found.
* There is no IDE integration for tutor compilation yet.
* Pitfalls: the first time it can take some effort to collect all the relevant information on license, authors, funding, citation, etc.