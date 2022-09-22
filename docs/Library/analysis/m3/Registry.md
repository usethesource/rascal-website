---
title: "module analysis::m3::Registry"
---

#### Usage

`import analysis::m3::Registry;`


#### Synopsis

in memory database for [analysis/m3/Core] models for resolving hyperlinks

#### Description

The functions in this file are used to register m3 models in a global in-memory database. When a source location is clicked this database is used used to resolve logical source locations, such as `|java+class:///java/lang/Object|` to physical source locations such as `|file:///usr/lib/blabla.java|`.


## function registerProject {#analysis-m3-Registry-registerProject}

* ``void registerProject(loc project, M3 model)``


#### Synopsis

Register an M3 model for a certain project name.

#### Description

The effect of registering a project is that the m3 URI resolver knows how to find the physical source location
for qualified names.

Note that [register project](../../../Library/analysis/m3/Registry#analysis::m3::Registry-registerProject) will be called usually as a side-effect of a function that extracts a model for
a specific language.  

#### Benefits

*  this enables qualified names as [Location](../../../Rascal/Expressions/Values/Location)s to be hyperlinks in the IDE

#### Pitfalls

*  the registry is a global store that will retain links to M3 models even when they are not in use anymore. The 
programmer should take care to call [unregister project](../../../Library/analysis/m3/Registry#analysis::m3::Registry-unregisterProject) to prevent memory leakage.

## function unregisterProject {#analysis-m3-Registry-unregisterProject}

* ``void unregisterProject(loc project, M3 model)``

 
#### Synopsis

unregister an M3 model for a certain project name.

#### Description

The effect of unregistering a project is that all references will be
removed from the registry, clearing memory.

#### Benefits

*  this cleans up the memory used by the registry

#### Pitfalls

*  if a different model is used for unregistering than for registering,
   there could be a memory leak of remaining schemes and their respective locations.

## function unregisterProjectSchemes {#analysis-m3-Registry-unregisterProjectSchemes}

* ``void unregisterProjectSchemes(loc project, set[str] schemes)``

  
#### Synopsis

unregister an M3 model for a set of given schemes

#### Description

The effect of unregistering a project is that all references will be
removed from the registry, clearing memory.

#### Benefits

* This cleans up the memory used by the registry, and by giving all possible
   schemes for a certain language the chance is high there are not dangling
   entries afterwards.

#### Pitfalls

*  If more schemes were registered than are unregistered here, there is a
   memory leak.

