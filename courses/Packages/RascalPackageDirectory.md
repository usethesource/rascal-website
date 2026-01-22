---
title: What is the Rascal Package Directory?
keywords:
    - packages
    - libraries
    - archives
    - download
    - install
    - dependencies
---

The [Package Directory](docs/Packages) provides free access to and an overview of libraries, tools and frameworks written in Rascal (and other languages) which are:
* contributed by the community
* useful for the community
* excluding the core language implementation (interpreter, compiler, repl, IDE extensions)

Each package is encapsulated in a `jar` file, is deployed in the [UseTheSource Maven repository](https://releases.usethesource.io/). To use such a package, you can add the dependency to your pom file and the Maven repository as well:
```xml
<repositories>
   <repository>
       <id>usethesource</id>
       <url>https://releases.usethesource.io/maven/</url>
   </repository>
</repositories>
```

All packages always come with the following information, directly available under <http://www.rascalmpl.org/docs/Packages/>:
* License information.
* Funding information.
* Citation information.
* Release notes.
* Maven dependency example snippet.
* Rascal API documentation, generated from the annotated sources.
* Optional manual(s) generated using rascal-tutor.
* Optional author list (by default authors can be find via git and github.com meta-data).

The release and deployment mechanisms that are in place guarantee that:
* Each package' latest release version is documented here.
* Each package is tested before release.
* Each package documents the rascal version it dependend on at the time of release.

:::info
If a package was not released (yet) after a major or minor release of `rascal`, then it may still work with the newest release, but this is not guaranteed. Packages owners are reminded to upgrade and release by the UseTheSource community.
:::
