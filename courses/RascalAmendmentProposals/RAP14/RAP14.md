---
title: RAP 14 - Module Compatibility
sidebar_position: 14
---

| RAP | 14 |
| :---- | :---- |
| Title | Module Compatibility |
| Author | Jurgen Vinju, Paul Klint, Tijs van der Storm, Davy Landman |
| Status | Draft |
| Type | Rascal Language, Static & Dynamic Type System, Runtime System  |

## Abstract

The question this RAP answers is this: given two modules; L and C, where L is a “library module” and C is a “client” module that imports or extends L, **which changes in L do not break C**? 

In other words, under which circumstances is L’ (the next version of L) backwards compatible with L for *any* C’ that depends on L where C’ is equal to C only that it is configured now to depend on L’?

## Motivation

Backwards compatibility is important:

* It prevents big-bang releases of an entire ecosystem. If a low utility project is updated with new features we need the old features to keep working for a while. Case in point is the Rascal standard library, which currently breaks everything (and always).  
* It enables bootstrapping (it is a hard precondition), otherwise newer versions of the compiler could not ever run on older versions of the run-time.  
* It allows clients to release their updates on their own time schedule. Otherwise every library would force their clients to update immediately, or become useless to their own clients.

The urgency of this RAP is that:

* We diagnosed that the current binary forms of TPL files are not  backward compatible (yet). This will be fixed, and to provide the framework for testing these fixes, this document describes the semantics of backwards compatibility. The current document does not describe the current situation with the .TPL files but rather the envisioned situation of a correctly working Rascal compiler.  
* The code generator part of the compiler is not in use yet; hence solidifying this part of the semantics is a good idea now.  
* The number of Rascal library projects is currently exploding due to the integration with maven.  
* Binary compatibility is a strong enabler for (faster) incremental compilation. It means that modules that are imported or extended can be recompiled, while their clients in binary form can remain the same. The new functionality will be merged at **link-time**, in our case by the JVM class loader mechanism and the Rascal module loader on top of that.  
  * Detecting binary incompatibility correctly is thus required for correct incremental compilation. The “damage” of an update can be limited to the client libraries that are impacted by a non-backward compatible change.  
  * There is also another “link-time” moment, when binary tpls are loaded while compiling sources of the depending project. This is also a moment where incompatibilities can be detected.   
* Binary compatibility is particularly important in the *package ecosystem,* when in a dependency graph multiple versions of the same package appear. With binary compatibility, the run-time configuration can choose their latest versions as long as they are all binary compatible. Inversely, we can not force a clients “C” to re-compile a library L1 that they use because L1 accidentally uses L2’ which is only source compatible. 

## Specification

This specification is inspired by the [Java Language Specification](https://docs.oracle.com/javase/specs/jls/se7/html/jls-13.html). Since the back-end of Rascal is generated Java code, we will inherit compatibility aspects from that. 

* Since we generate a **very specific kind of Java**, backward incompatibilities can both be **extra** (on top of what is incompatible with Java) and **less** (some Java  incompatibilities are unreachable from Rascal).   
* In other words, we have to define Rascal module compatibility from scratch; the JVM semantics will come into play only on the implementation level of these concepts.

**Definitions**  
	

* **Breaking module changes:** For a module to “break” means that clients do not compile anymore without errors, or throws exceptions during linking or loading.   
  * Semantics may change, for example new exceptions may be thrown at run-time, but we still accept the change as non-breaking.  
  * The “breaking” is an aspect of the *external interface of a module*. It should still work well enough to be called and interacted with, following the interfaces of the previous version.   
  * No more demands are made on non-breaking module updates.   
* A **source module** M is represented by the Rascal source code of a module in a **.rsc file**  
* A **binary module** M is represented by these files:  
  * A **.tpl file** in a target folder or jar file  
  * A **.class file** in a target folder or jar file  
  * A **.constants** file in a target folder or jarfile  
  * It is assumed that Rascal guarantees these 3 files to always be in-sync.  
* One binary module is always generated from one source module  
* A library module L’ is either **import-compatible** or **extend-compatible** (or both) with its previous version L.   
  * Import-compatibility implies that all client modules C that *import* L do not break with L’.   
  * Extend compatibility implies that all client modules C that *extend* L do not break   
  * The concepts are different because `extend` looks inside almost every aspect of a library module, while import is (more of) a black box reuse mechanism. Also extend is transitive and import is not, which is reflected in the semantics of compatibility below.  
* A library module L’ is **source-compatible** or **binary compatible** (or both) with its previous version L:  
  * A client module C does not have to be re-compiled to work with L’ if L’ is binary-compatible  
  * Every client module C has (only) to be recompiled (against the binary module) L’, without any changes to the source module C,  for L’ to be source-compatible with any C.  
* x-Incompatibility is the logical inverse of x-compatibility, with x from {import, extend, source, binary}  
* In the cartesian product *{source,binary} x {import, extend}* are four semantically relevant compatibility situations.   
  * It is good to remember that an library writer can not decide whether the client will extend or import their module,   
  * and vice versa, a client writer can not decide whether the next version of the library they use is binary or source compatible.  
* **Formal compatibility** versus **actual compatibility**  
  * **Formal x-compatibility** of L/L’ reasons about all the possible (hypothetical) clients C that would upgrade to L’  
  * **Actual x-compatibility** of L/L’ reasons about the actual real uses of L in all existing real-world clients of L that would upgrade to L’  
  * The current document is exclusively about **formal x-compatibility\!**  
* The link between compatibility and **semantic versioning** is that incompatible projects must update their major versions, and 0.x projects their minor versions *always* when they have incompatible modules.   
  * This will allow checkers to warn early for breaking combinations of packages and their versions.  
  * This will allow the run-time system to assume the latest minor/patch version within each major version to always be compatible with each other and load these in case of conflicts in the search path.

**Implications**

Given the syntax and semantics of Rascal, here we list concrete changes to library modules that would imply source or binary incompatibility. 

* Source-incompatibility always implies binary incompatibility for Rascal.  
* L and L’ are always assumed to be 100% statically correct when reading what comes after. All situations in which L or L’ are not statically correct are filtered by the static checker and thus mute any discussion on compatibility. Correctness means that info and warning messages are allowed but not errors.  
* L is extend-x-incompatible if one of its own imports is import-x-incompatible or extend-x-incompatible;   
  * hence extend-x-incompatibility is transitive over the inverse extend relation.  
* L is extend-x-incompatible (at least) if L is import-x-incompatible.  
* L is import-x-incompatible if:  
  * At least one alternative of an overloaded function is removed.[^1] Removing alternatives breaks the dispatch function inside the client module C for the overloaded functions. After RAP 6 this would only happen in modules that *extend* the broken module.  
  * At least one alternative of an overloaded function is added..[^2] Adding alternatives breaks the dispatch function inside the client module C for the overloaded functions. After RAP 6 this would only happen in modules that *extend* the broken module.  
  * An alternative constructor of an ADT is removed (adding is fine)  
  * An alias definition is removed (adding is fine)  
  * A public global variable is removed (adding is fine)  
  * A java function changed; it’s @javaClass tag points to another JVM class  
  * A rascal function is changed to a java function with a @javaClass tag.  
  * A positional parameter is added to or removed from a function  
  * A keyword parameter is removed from a function (adding is ok)  
  * A positional field is added or removed from a constructor  
  * A keyword field is removed from a constructor, but only if a common keyword field with the same name does not still exist  
  * A common keyword field is removed from a data declaration. (adding is ok)  
  * Renaming keyword parameters or positional a parameters in functions, constructors and syntax definitions (since they are part of the API of their respective type/function)  
  * Module name changes  
  * Fully qualified module name changes.  
* L is additionally extend-x-incompatible (not simply due to import-x-incompatible or incompatibility of imported or extended modules) if:  
  * An alternative (or more) is added to an overloaded function via  
    * A normal addition typed into the current module  
    * Extending a new module that has the same (overloaded) function as in the current module, or another extended module  
    * Importing a new module (as above).. *Note that this behavior would change if we apply the simplifications or RAP 6*  
  * An alternative (or more) are removed from an overloaded function via:

    

    * Having been removed from an extended module, or not extending said module anymore.  
    * Having been removed from an imported module, or not importing said module anymore (see also RAP 6\)  
* Conversely, this is a list of changes that should be import-compatible and extend-compatible:  
  * Adding non-functional tags to functions (like @synopsis)   
  * Changes to private functions are always import-compatible, but not extend-compatible  
  * Changing the values of non-functional tags (like [Design Sketch for Nescio](https://docs.google.com/document/u/0/d/1p931tsUqSMZAvh77Vx_FXQCaVP_rjXu4nak6_zJPVwQ/edit)  
  * Changing the order of declarations in a module (functions, data, syntax, aliases, imports, extends)  
  * Adding new declarations  
    * functions (with new names or different arities; this excludes overloading changes from above),   
    * data-types,   
    * constructors,   
    * aliases  
    * tags  
    * syntax definitions  
    * Imports (unless overloads are affected, see also RAP 6\)  
    * Extends (unless overloads are affected)  
  * Changing the bodies (expressions and statements) of functions  
    * From statements to expression or back  
    * Throwing exceptions or not  
    * Adding or removing comments  
    * Changing algorithms  
  * Changing the order of keyword fields of constructors, unless there is a data-dependency from one field to another. The fields must depend on earlier (left) fields (they do due to the above 100% correctness guarantee of L’).  
  * Changing the order of keyword parameters of functions, unless there is a data-dependency from one parameter to another. The parameters must depend on earlier (left) parameters (they do due to the above 100% correctness guarantee of L’).  
  * Changing the source file location on disk, as long as it remains the same relative to the `srcs` path in pathConfig.  
* X-binary-incompatibilities that are not x-source-incompatibilities (x is import or extend):  
  * *This is when simple recompilation fixes the problem without changing client source code*  
  * When one of the double (or more) declarations of a keyword field with *different* *defaults* are removed but at least one remains unchanged ??? TODO  
  * When extended modules change (transitively) in a x-x-incompatible way, but the module itself needs no changes.  
  * When imported modules change in an x-x-incompatible way, but the module itself needs to changes (see also RAP 6\)  
* Incompatibility aggregation:  
  * A project P’ is x-incompatible with its previous version P when at least one of its modules L’ in P’ is x-incompatible with the corresponding L in P.  
  * If P’ is extend-incompatible but import-compatible, this is a valuable distinction to communicate since most libraries are used via import and not extend.  
    * After RAP6 this will happen much more often.

    

    

## Implementation

## Alternative solutions

## References

[^1]:  Note that RAP 6, when implemented, would remove this incompatibility. It would become extend-incompatible with alternative removal only.

[^2]:  Note that RAP 6, when implemented, would remove this incompatibility. It would become extend-incompatible with alternative addition only.
