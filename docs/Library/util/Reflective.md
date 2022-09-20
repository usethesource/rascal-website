---
title: "util::Reflective"
---

#### Usage

`import util::Reflective;`


## function getLineSeparator {#util-Reflective-getLineSeparator}

* ``str getLineSeparator()``

Returns the system-dependent line separator string

## function evalCommands {#util-Reflective-evalCommands}

* ``lrel[str result, str out, str err] evalCommands(list[str] command, loc org)``

## function parseModule {#util-Reflective-parseModule}

* ``lang::rascal::\syntax::Rascal::Module parseModule(loc location)``

Just parse a module at a given location without any furter processing (i.e., fragment parsing) or side-effects (e.g. module loading) 

## function parseModuleWithSpaces {#util-Reflective-parseModuleWithSpaces}

* ``start[Module] parseModuleWithSpaces(loc location)``

Parse a module (including surounding spaces) at a given location without any furter processing (i.e., fragment parsing) or side-effects (e.g. module loading) 

## data RascalConfigMode {#util-Reflective-RascalConfigMode}

```rascal
data RascalConfigMode  
     = compiler()
     | interpreter()
     ;
```

## data PathConfig {#util-Reflective-PathConfig}

```rascal
data PathConfig  
     = pathConfig(list[loc] srcs = [|std:///|],        // List of directories to search for source files
               list[loc] courses = [|courses:///|], // List of locations to search for course source files
               loc bin = |home:///bin/|,            // Global directory for derived files outside projects
               list[loc] libs = [|lib://rascal/|],          // List of directories to search source for derived files
               list[loc] javaCompilerPath = [], // TODO: must generate the same defaults as in PathConfig 
               list[loc] classloaders = [|system:///|]      // TODO: must generate the same defaults as in PathConfig
              )
     ;
```

## data RascalManifest {#util-Reflective-RascalManifest}

```rascal
data RascalManifest  
     = rascalManifest(
      str \Project-Name = "Project",
      str \Main-Module = "Plugin",
      str \Main-Function = "main", 
      list[str] Source = ["src"],
      str Bin = "bin",
      list[str] \Required-Libraries = [],
      list[str] \Required-Dependencies = []
    )
     ;
```

## data JavaBundleManifest {#util-Reflective-JavaBundleManifest}

```rascal
data JavaBundleManifest  
     = javaManifest(
      str \Manifest-Version = "",
      str \Bundle-SymbolicName = "",
      str \Bundle-RequiredExecutionEnvironment = "JavaSE-1.8",
      list[str] \Require-Bundle = [],
      str \Bundle-Version = "0.0.0.qualifier",
      list[str] \Export-Package = [],
      str \Bundle-Vendor = "",
      str \Bundle-Name = "",
      list[str] \Bundle-ClassPath = [],
      list[str] \Import-Package = [] 
    )
     ;
```

## function metafile {#util-Reflective-metafile}

* ``loc metafile(loc l)``

## function applyManifests {#util-Reflective-applyManifests}

* ``PathConfig applyManifests(PathConfig cfg)``


  Converts a PathConfig and replaces all references to roots of projects or bundles
  by the folders which are nested under these roots as configured in their respective
  META-INF/RASCAL.MF files.

## function makeFileName {#util-Reflective-makeFileName}

* ``str makeFileName(str qualifiedModuleName, str extension = "rsc")``

## function getSearchPathLoc {#util-Reflective-getSearchPathLoc}

* ``loc getSearchPathLoc(str filePath, PathConfig pcfg)``

## function getModuleLocation {#util-Reflective-getModuleLocation}

* ``loc getModuleLocation(str qualifiedModuleName,  PathConfig pcfg, str extension = "rsc")``

## function splitFileExtension {#util-Reflective-splitFileExtension}

* ``tuple[str,str] splitFileExtension(str path)``

## function getModuleName {#util-Reflective-getModuleName}

* ``str getModuleName(loc moduleLoc,  PathConfig pcfg, set[str] extensions = {"tc", "tpl"})``

## function getDerivedReadLoc {#util-Reflective-getDerivedReadLoc}

* ``tuple[bool, loc] getDerivedReadLoc(str qualifiedModuleName, str extension, PathConfig pcfg, set[str] srcExtensions = {"rsc", "mu"}, str rootDir = "")``

   
#### Synopsis

Derive a location from a given module name for reading

#### Description

Given a module name, a file name extension, and a PathConfig,
a path name is constructed from the module name + extension.

If a file F with this path exists in one of the directories in the PathConfig,
then the pair <true, F> is returned. Otherwise <false, some error location> is returned.

For a source extension (typically "rsc" or "mu" but this can be configured) srcs is searched, otherwise binPath + libs.

#### Examples


```rascal-shell
rascal>import util::Reflective;
ok
rascal>getDerivedReadLoc("List", "rsc", pathConfig());
tuple[bool,loc]: <true,|std:///List.rsc|>
rascal>getDerivedReadLoc("experiments::Compiler::Compile", "rvm", pathConfig());
tuple[bool,loc]: <false,|error:///|>
rascal>getDerivedReadLoc("experiments::Compiler::muRascal2RVM::Library", "mu", pathConfig());
tuple[bool,loc]: <false,|error:///|>
```

#### Benefits

This function is useful for type checking and compilation tasks, when derived information related to source modules has to be read
from locations in different, configurable, directories.

## function getDerivedWriteLoc {#util-Reflective-getDerivedWriteLoc}

* ``loc getDerivedWriteLoc(str qualifiedModuleName, str extension, PathConfig pcfg, set[str] srcExtensions = {"rsc", "mu"}, str rootDir = "")``

   
#### Synopsis

Derive a location from a given module name for writing

#### Description

Given a module name, a file name extension, and a PathConfig,
a path name is constructed from the module name + extension.

For source modules, a writable location cannot be derived.
For other modules, a location for this path in bin will be returned.

#### Examples


```rascal-shell
rascal>import util::Reflective;
ok
rascal>getDerivedWriteLoc("List", "rvm", pathConfig());
loc: |home:///bin/List.rvm|
rascal>getDerivedWriteLoc("experiments::Compiler::Compile", "rvm", pathConfig());
loc: |home:///bin/experiments/Compiler/Compile.rvm|
```


```rascal-shell
rascal>getDerivedWriteLoc("experiments::Compiler::muRascal2RVM::Library", "rsc", pathConfig());
ok
```

#### Benefits

This function is useful for type checking and compilation tasks, when derived information related to source modules has to be written
to locations in separate, configurable, directories.

## function getProjectPathConfig {#util-Reflective-getProjectPathConfig}

* ``PathConfig getProjectPathConfig(loc projectRoot, RascalConfigMode mode = compiler())``

## function inCompiledMode {#util-Reflective-inCompiledMode}

* ``bool inCompiledMode()``

Is the current Rascal code executed by the compiler or the interpreter?

## function diff {#util-Reflective-diff}

* ``str diff(value old, value new)``

Give a textual diff between two values.

## function watch {#util-Reflective-watch}

* ``&T watch(type[&T] tp, &T val, str name)``
* ``&T watch(type[&T] tp, &T val, str name, value suffix)``

Watch value val: 
- running in interpreted mode: write val to a file, 
- running in compiled mode: compare val with previously written value

## function getFingerprint {#util-Reflective-getFingerprint}

* ``int getFingerprint(value val, bool concretePatterns)``
* ``int getFingerprint(value val, int arity, bool concretePatterns)``

Compute a fingerprint of a value for the benefit of the compiler and the compiler runtime

## function getFingerprintNode {#util-Reflective-getFingerprintNode}

* ``int getFingerprintNode(node nd)``

Compute a fingerprint of a complete node for the benefit of the compiler and the compiler runtime

## function throwNullPointerException {#util-Reflective-throwNullPointerException}

* ``void throwNullPointerException()``

Throw a raw Java NullPointerException, to help simulate an unexpected exception in test scenarios

## function getRascalReservedIdentifiers {#util-Reflective-getRascalReservedIdentifiers}

* ``set[str] getRascalReservedIdentifiers()``

Return a list of all Rascal reserved identifiers (a.k.a. keywords)

## function getRascalVersion {#util-Reflective-getRascalVersion}

* ``str getRascalVersion()``

## function newRascalProject {#util-Reflective-newRascalProject}

* ``void newRascalProject(loc folder, str name="my-project", str group="org.rascalmpl", str version="0.1.0-SNAPSHOT")``

Create a folder structure for an empty Rascal project with Maven support

## function pomFile {#util-Reflective-pomFile}

* ``loc pomFile(loc folder)``

## function emptyModule {#util-Reflective-emptyModule}

* ``str emptyModule()``

## function rascalMF {#util-Reflective-rascalMF}

* ``str rascalMF(str name)``

## function pomXml {#util-Reflective-pomXml}

* ``str pomXml(str name, str group, str version)``

