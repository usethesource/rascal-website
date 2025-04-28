---
title: RAP 1 - Deployment of Rascal Packages
sidebar_position: 1
---

| RAP | 1 |
| :---- | :---- |
| Title | Deployment of Rascal Packages |
| Author | Paul Klint, Jurgen Vinju |
| Status | Draft |
| Type | Rascal Infrastructure |

## Abstract

Rascal needs a mechanism to work with third-party Rascal packages (which may be standalone Rascal programs or Rascal libraries). This document describes the required structure of such packages, the required meta-data, and the standard way in which they are made available in a given Rascal installation.

## Specification

A *Rascal Package* is a self-contained entity that contains compiled Rascal code that can be distributed and used. Optionally it may also contain source code and documentation.

A *Rascal Package Server* is a server that allows uploading, searching and downloading of Rascal Packages. There can be more than one server, but the list of servers has to be known at the moment of package installation. Initially, we provide a server at [r2d2.usethesource.io](http://r2d2.usethesource.io).Note that “r2d2” stands for “rascal release delivery and deployment”.

A *Rascal Installation*  is a computer with a file system containing all installed *Rascal Packages* which can depend on each other and on which *Rascal Source Projects* can depend.

A *Rascal Source Project* is a directory folder structure with the source code of a Rascal based project and enough metadata to be able to compile and run this source code on the developer's machine.

The life cycle of a Rascal Package consists of the following phases:

* \[**Build**\]: Convert a *Rascal Source Project* to a deployable *Rascal Package*  
* \[**Local Installation**\]: Installing a local \[**Build**\] of a *Rascal Package* into the local *Rascal Installation*  
* \[**Deployment**\]: The *Rascal Package* is uploaded to a (public) *Rascal Package Server*.  
* \[**Discovery**\]: The name and the keywords defined in the *Rascal Package* make it findable.  
* \[**Installation**\]: Once found, the *Rascal Package* can be installed in a *Rascal Installation*  
* \[**Local Installation\]:** Installs a *Rascal Source Project* directly as a *Rascal Package* in the local *Rascal Installation,* i.e. without first deploying it. This is for simulating and testing release, and for being able to work on collections of dependent packages without having to release them officially all the time.  
* \[**Configuration\]:** Once installed a Rascal Package optionally needs to be configured with knowledge about the system it is installed in. An example configuration for a “gitar” package (git analysis in Rascal) would be the absolute location of the git binary tool. Configuration is a way to deal with non-Rascal, non-Java dependencies, but it can also be used to set preferences or tweak run-time parameters of a Rascal package.  
* \[**Use**\]: From then on, the *Rascal Package* can be used as if it is an integral part of Rascal.  
* \[**Update**\]: update to a newer version (is a nice-to-have combination of steps from \[**Discovery**\], \[**Installation**\] and \[**Use**\] for a new version of an already installed package)  
* \[**Uninstall**\]: remove Rascal Package from the current Rascal installation  
* \[**Deprecate**\]: mark the Rascal Package as “obsolete” on the *Package Server*

### Rascal Source Project Layout

This is what Rascal source projects look like. The structure is standardized such that it is easy to package the required compiled information into a *Rascal Package* jar file later.

* Have the structure as described below.  
* Have a name that starts with a lowercase letter, say mylib.

The following directory structure is required:

| MyLib/src/mylib | All Rascal source files (possibly organized in a hierarchy) that form the library. This is optional, programs can also be deployed without source code |
| :---- | :---- |
| MyLib/META-INF | Directory with meta-data |
| MANIFEST.MF | Java-related (we depend on Maven for java dependencies) |
| RASCAL.MF | Rascal-related |
| MyLib/courses | Sources of courses and documentation |
| README.md | Brief README for the program |
| LICENSE | LICENSE file for the program |
| bin | A folder for compiled binaries  |
| bin/\* | The compiled Rascal files are right there at the root |
| bin/courses | The compiled courses files are nested in \`courses\` |

### Rascal Package Layout

A Rascal Package is a jar file, with the following internal structure, with a name \<name\>-\<version\>.jar. The package layout reflects the layout of a *Rascal Source Project*, except that it contains binaries at the root to make them as quickly accessible as possible, and of course the source code is optionally there.

The following directory structure is required inside of the jar file:

| src | Optional folder containing all Rascal files |
| :---- | :---- |
| courses | Optional folder containing compiled course material |
| META-INF | Directory with metadata |
| MANIFEST.MF | Java related metadata file |
| RASCAL.MF | Rascal-related metadata file |
| README.md | Brief README for the program |
| LICENSE | LICENSE file for the program |
| .\* | All compiled binary files are nested here right at the root |
| CITATION | Optional example of how to cite this software release, i.e. a DOI or a simple ACM-style citation example to the paper which belongs to this software, or the software itself as published on Zenodo or Arxiv  |

### RASCAL.MF File

The RASCAL.MF contains the following attributes that are relevant for program deployment:

* Name: The name of this program  
* Version: The version of this program.  
* Synopsis: A brief description what the package does.  
* Web: An optional URL to point to the website of the project (perhaps the github home page)  
* Authors: The authors of the package.  
* Maintainers: The current maintainers of the package.  
* Dependencies: A list of other Packages this program depends upon together with their required version number.  
* Java-Dependencies: TBD  
* Keywords: A list of keywords that can be used to discover this program.  
* Sources: points to which nested folder contain root source folders, “src” by default  
* Include-Source: boolean to indicate whether source code is to be included in the Package  
* Configuration: TBD, place to declare \[**Configuration**\] values, e.g. loc pathToGit=|file:///usr/bin/git|, str heap-size \= “1G”

### Building and Deploying of a Package File

Each library will be deployed as a single jar and adding a library to a given Rascal installation starts with this jar.

* \[**Build**\] A shell command to wrap the current working project into a deployable jar file.  
  1. Compiles all Rascal files in the project  
  2. Compiles all documentation in the project  
  3. **TBD**: what about Java class files?  
  4. Copies the bin files to the target jar in the right place  
  5. If source is distributed, URI locations pointing to the source code are adapted in the binaries to point to the jar (for the debugger)  
  6. RASCAL.MF from the source project is adapted to reflect the content of the jar  
  7. When the jar is finished a checksum is computed and stored next to the jar


* \[**Deployment**\] The packaged jar will be uploaded to a Rascal Package Server, e.g. r2d2.rascal-mpl.org/\<name\>-\<version\>.jar. This is simply a http file server. It could also be our Nexus (which is indeed a file server), but we should not force people to use nexus as their file servers. Http should be the only requirement. Next to the jar should be a checksum file with the same name, i.e. \<name\>-\<version\>.sha1, and a synopsis (description) file, i.e. \<name\>-\<version\>.descr which could be the first sentence of the README.md or something like that (see \[**Discovery**\])  
* \[**Discovery**\] The Rascal shell provides a means to query the currently available libraries on a given server, i.e. by default r2d2.usethesource.io. It should also be possible to query the list of currently installed Rascal packages. E.g. “pkg find \[string\]” will find all packages matching the optional string name on the server or list them all, and “pkg list \[string\]” does the same for the local packages. The discover and list comments also present the single line synopsis next to the name and all available version numbers for the package. Discover will also label already installed packages by a (\*) or something to make sure the user can see what already is there and what is available for download.  
* \[**Installation**\] The Rascal shell offers an “install” command to download a library and install it in a local machine repository, i.e. \/.r2d2/myLibrary-1.0.0.jar. There is also a staging directory to make sure installation is an atomic operation, i.e. \~/.r2d2/staging.  “pkg install \<name\> \[version\]” will go through the following steps:  
  1. Clear the staging directory (for possible left-overs from a failed previous install)  
  2. Push this package name and server on the installation stack file in the staging directory file “TODO”.  
  3. Download a package from the **server**, put it in the staging directory.  
  4. Download the checksum file.  
  5. Compute the checksum independently.  
  6. Check the checksum, and bail out if it is broken.  
  7. Check for \<name\>-\<version\>.deprecated file on the server. If deprecated show the contents on the file and warn the user. Ask if this can be ignored, if \[yes\] continue, if \[no\] bail out (default is “no”)  
  8. Download the LICENSE file from the library and put it in the staging directory  
  9. Extract the Dependencies from the RASCAL.MF file of the project  
  10. For each of the Dependencies:  
      * Check if already installed.  
      * Check if part of the current TODO stack, if yes bail out due to cyclic dependency.  
      * If not, go to step ‘a’ for the current package and finish the process recursively  
  11. When the current package and all of its dependencies are downloaded as above:  
      * Collect the LICENSE files and ask the user to agree with them  
      * If \[no\] on one of the licenses, bail out.  
      * Check for LICENSE compatibility?   
      * If \[yes\] move all packages from staging directory to local repository directory.  
      * Unpack all jars in directories \<name\>-\<version\>; this will make nested jars more easily available on the java run-time classpath and loading modules is a lot faster from a file system than out of a jar.  
  12. If one of the dependencies bailed out due to checksum failure or failure to agree with the license, or failure to ignore deprecation, then report the reason for the abortion and clear all files in the staging directory.  
* \[**Local Installation**\] a variant of the above, where a *Rascal Source Project* is packaged and deployed directly in the local *Rascal Installation*.  
  1. In this way larger projects can be split into reusable packages without having to publicly release ongoing work  
  2. In this way we simulate the use of a deployed package as faithfully as possible on the developers machine  
* \[**Configuration**\] triggered after \[**Installation**\] but also re-configuration is possible after installation.   
  1. The shell provides a way to trigger a number of configuration questions (e.g. as defined in RASCAL.MF (TDB), e.g. “pkg config \<name\>”  
  2. The result of configuration is stored in a file \~/.r2d2/\<name\>-\<version\>.config  
  3. A Rascal standard library module provides access to the values in the config file  
* \[**Dependency**\] by editing RASCAL.MF (or via a shell command to add it to the RASCAL.MF? “pkg add \<name\> \<version\>”?), the name of a library is added to a project at Used-Libraries. This dependency declaration contains a version number optionally. If this is not the case, then the latest version (semantic versioning) is always added to the search path.  
  1. This effectively adds the contents of jars to the libraryPath of the project in the order of occurrence in Used-Libraries.   
  2. The process of adding to the libraryPath should check existence of the library and bail out with an error message if it is not there anymore (see \[**Uninstall**\]), or propose to “pkg install” it again automatically?  
* \[**Use**\] the programmer imports modules from the libraries on the library path as if they were part of the current project.   
  1. When the shell starts or when a dependency is added, the documentation of each library is also added to the help index.  
  2. When the shell starts or when a dependency is added (see \[**Dependency**\]), the libraryPath of the shell is extended to make the library indeed importable. If the dependency does not exist in the local Rascal installation, then an error message should be reported  
* \[**Uninstall**\] a “pkg uninstall \<name\> \[version\] \[“rec”\]” removes a package and its dependencies unless used by another package from the local repository.  
  1. This can generate dangling references in source projects (see \[**Dependency**\])  
  2. This should fail if any of the installed packages in the local repository still depends on the package, unless they are on the list of currently being removed as well.  
  3. The process should mimic the inverse of the \[**Install**\] process and be made atomic as a whole, i.e not take place at all if any of the packages can not be uninstalled.  
  4. The process should also remove local \[**Configuration**\] files (if successful)  
* \[**Deprecate**\] Label an already deployed (versioned) package as “obsolete” or “deprecated”, with a reason (security issue, bug, license issue, not maintained anymore, superseded by another project, etc)  
  1. The file will not be removed from the server but...  
  2. An additional file will be uploaded \<name\>-\<version\>.deprecated, which contains the reason for the deprecation.  
  3. The \[**Install**\] comment will check for the deprecated file and show its contents, then ask if the user wants to force the installation or bail out.

## Motivation

* It is necessary for Rascal developers and users to deploy their Rascal code as library for others to use in other Rascal and Java projects. This proposal tries to solve this problem.  
* Rascal projects, especially library projects, need dependency on Java libraries. Currently we solve this by including binary jars and this situation needs resolution and can be done in the same proposal

## Rationale

## Backwards Compatibility

This is a new feature.

## Reference implementation

TBD

* Can these features be build on top of an existing build and deployment system which is easy and ubiquitous enough (e.g. reuse mvn?), or should we simply make the download features from scratch? It’s not that much work to upload or download a jar..

### References

[https://www.haskell.org/cabal/proposal/index.html](https://www.haskell.org/cabal/proposal/index.html)

[https://www.python.org/dev/peps/](https://www.python.org/dev/peps/)

[https://medium.com/@sdboyer/so-you-want-to-write-a-package-manager-4ae9c17d9527\#.gxzx0aqv0](https://medium.com/@sdboyer/so-you-want-to-write-a-package-manager-4ae9c17d9527#.gxzx0aqv0)

[http://yt-project.org/](http://yt-project.org/)

[^1]:  RAP is at the moment following Pyhton’s PEP ([https://www.python.org/dev/peps/](https://www.python.org/dev/peps/)). We need to look at other projects to see what is best. See for instance,  [http://yt-project.org/](http://yt-project.org/) 
