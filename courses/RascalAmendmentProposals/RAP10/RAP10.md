---
title: RAP 10 - Concurrent Source Location Access
sidebar_position: 10
---

| RAP | 10 |
| :---- | :---- |
| Title | Concurrent Source Location Access |
| Author | Jurgen Vinju, Davy Landman  |
| Status | Draft |
| Type | Rascal Language |

## Abstract

Rascal can be executed in JVM threads and also we plan to add concurrency features to Rascal itself ((RAP8)). This puts a lot more pressure on our IO mechanism than before, leading to races on disk and on other external resources identified by values of type `loc`.

We propose to extend the URIResolverRegistry (which is Rascal’s generic resource access mechanism) with a cross-cutting “locking” feature that is safe (up to *unpredicted* aliasing of location URIs). 

A second part of the proposal is to expose this locking feature on the language level in Rascal using a structured programming concept.

## Motivation

* Many use cases of Rascal involve file IO  
  * Often in a dynamic context where multiple file processors read and write concurrently, such as the an LSP server.  
  * More and more in a concurrent and even parallel context, where multi-core architectures are used to speed up larger computations  
* File IO is hazardous in a concurrent context, due to race conditions  
* So, we need some form of locking mechanism on file IO.  
* The `loc` data-type and its uniform functionality across all kinds of external resources provides an ideal opportunity to solve locking in a uniform and safe manner.
* We have more an more Rascal programs runnihg concurrently in Java Threads or separate JVM processes.

## Specification

* Understanding what locking means for parts of files identified by offset/length, line/column indexing is **not in scope** of this proposal:  
  * For now we assume the entire location is locked even if only a part of the file is specified  
  * A whole pandora’s box of **aliasing** opens when considering offsets and lengths, and simply tracking this may provide already a lot of overhead. Let’s leave this for now.  
* File locking semantics is implemented on “physical” source locations, not logical ones:  
  * `file`, `project`, `http`, `cwd`, `home`, etc are physical locations on which locking can be applied directly  
  * `java+method`, is a logical source location. If file locking is applied to it, it will first be resolved to a physical location.   
  * This avoids aliasing which would break the locking semantics (i.e. locking a physical location while somebody else accesses the same resource using a logical location, or vice versa)  
* Physical source locations also may have aliases, and **file locking will not be safe** in the presence of such aliases:  
  * Consider `|home:///.bashrc|` and `|file:///Users/jurgenv/.bashrc|`, 	  
  * Consider `|project://rascal/src|` and `|file:///Users/jurgenv/Workspace/rascal/src|`
  * The proposed locking **may break on this** simply because the URIs are used to identify a file and not the “actual” file. That’s due to the whole design of abstracting from actual resource implementations via the URI schemes.  
  * To remedy this issue URI scheme implementations which “know” they are aliases (such as tmp, home and cwd, possibly “project”) **should resolve the problem internally** (see below)  
  * The designer of a scheme must realize if the URI they use are indeed “Unique Resource Identifiers” and if not they should consider all alternative names a resource might have, and make sure to lock those as well.   
    1. **TODO**: this aliasing problem generates a lot of complexity. Alias graphs can be insidiously complex and lead to unexpected deadlocks. Below more consideration for this problem, but for now it is not completely clear how to deal with this issue safely.   
* To implement locking across different file systems we propose an extensible mechanism, with a core locking feature and a plugin mechanism for additional effects:  
  * URIResolverRegistry will offer   
    1. `boolean lock(Object owner, ISourceLocation l)` and   
    2. `void unlock(Object owner, ISourceLocation l)`  
  * “Owner” identifies a computation “somehow”, i.e. via the identifier of a Thread or a ThreadPool computation name.   
    1. The owner object is assumed to have a correct and complete implementation of the `equals` and `hashCode` methods which follow the JVM equals/hashCode contract.  
  * ISourceLocationLockProvider is a new (optional) interface to be implemented by classes which also implement ISourceLocationInputResolver or ISourceLocationOutputProvider (or both):  
    1. lock(Object owner, ISourceLocation l)  
    2. unlock(Object owner, ISourceLocation l)  
  * When `lock` is called on URIResolverRegistry,  
    1. Logical locations will be resolved to physical locations first  
    2.  the registry will add the location to a global registry   
       * the registry itself is a singleton already  
       * It will do this in a thread-safe way (via a lock-free data-structure)  
       * The computation which is locking is identified somehow (see below “repeated locks”), for example using the Thread identity? DAVY? How to do this?  
    3. All other read and write operations will guard for the lock by using the location as a semaphore.   
    4. If a resource is a directory/folder, then it will guard all recursive children as well.  
    5. After the global semaphore, and if an ISourceLocationLockProvider exists for the scheme in question, the `lock` method of this interface is also called  
       * For example, in the Eclipse context the `project` scheme will start locking files in the Eclipse way, such that other processes in Eclipse which do not use the URIResolverRegistry, will also not race.  
       * Aliased locations the scheme knows of will be locked as well by the ISourceLocationLockProvider  
       * URIResolverRegistry will guard for **infinite aliasing loops**  
         * **TODO: how?**  
       * **TODO: complex scenarios involving aliasing can introduce deadlocks here because the locking of aliases is now implemented as a side-effect, and so it does not have a specified ordering among aliases. This can trigger (rare and hard-to-diagnose) deadlocks by out-of-order parallel locking. How to resolve this problem?**   
         * Add `getAliases` to ISourceLocationLockProvider?   
         * This could add the locations to the list to be locked and included in alphabetical order  
         * Still this can be messed up by subsequent calls to lock with different locs aliasing the same files in complex ways  
         * Maybe lock should receive a list of files, for which first all aliases are resolved, and then ordered alphabetically?  
  * When `unlock` is called on URIResolverRegistry:  
    1. Logical locations will be resolved to physical locations first  
    2. If an ISourceLocationProvider exists for the scheme in question the `unlock` method for this interface is invoked to retract external lock mechanisms  
       * Aliased locks should also be unlocked  
       * **TODO: deadlock alert (see above)**  
    3. The registry will remove the location from the global lock registry in a thread-safe manner  
         
  * Repeated locks: Locking an already locked file is allowed, also via recursive directory locks (outside in)  
    1. The computation which has the lock can lock again with no effect  
    2. Computations can only unlock locations they have locked, otherwise an exception is thrown.  
    3. If a nested location is locked because a parent location is already locked, the nested location is registered separately and must also be unlocked separately.  
    4. If an exact location is locked twice, the lock method will return `false` because the lock is ignored. This is to help terminate **infinite alias loops**.  
  * The **file** scheme and all of its derived schemes uses the JVM file lock mechanism:  
    1. This provides protection from different JVM processes fighting for the same file  
    2. It’s not good enough for concurrent threads inside a single JVM, but this is covered by the URIResolverRegistry   
  * The file scheme has many derivatives, namely `cwd`, `home`, `tmp`, etc.   
    1. Their ISourceLocationLockProviders can resolve the aliasing issue by locking the absolute file resource they are aliasing.  
    2. We might change these to logical file locations, but that results in less portable code. For example, `|home:///|` would work on any machine after deployment, while if we always rewrite it to a `file` location the code using such as location would not be portable anymore to another machine. Same for `cwd` and `project` and `tmp`. It would defeat the purpose of these schemes, which is to provide transparent portable URIs for common locations on user machines. The aliasing issue *must* be resolved however, for these schemes to continue to be be useful.   
  * To access the locking feature from Rascal, we will not expose the lock and unlock functions, but provide a structured programming concept:  
    1. Because locking always requires balanced lock/unlock  and Rascal should be a “safe” language to program in.  
    2. Because locking interacts heavily with control flow jumps (break, continue, throw, return) it requires language-level integration.  
       * The alternative would be programmers have to write a lot of try-finally blocks and introduce variables to manage the state.   
    3. syntax Statement \= sync: Label label "sync" "(" {Expression ","}+ locks ")" Statement body  
    4. Static semantics: the locks are all expressions of type `loc`  
    5. Dynamic semantics:  
       * The loc(k)s will be ordered alphabetically first into a list  
       * Then URIResolverRegistry.lock will be called on each lock from left to right in the list  
       * Then the `block` is executed  
       * Then URIResolverRegistry.unlock will be called on each lock from right to left in the list  
    6. The **return** and **throw** statements  break out of the sync block and they **always unlock the resources** as if the block was fully completed.  
    7. If **break** and **continue**  jump out of a sync block (i.e. when sync is nested in a loop) then they also always unlock the resources as if the block was fully completed.   
    8. **Special convenience syntax for locking on file collections**:  
       * sync(\*setOfLocs, myFileLoc, \*listOfLocs)  
       * The \* splices sets and lists of locations into the argument list for sync resulting in the elements of \[\*setOfLocs, myFileLoc, \*listOfLocs\].  
       * After this the sync semantics is unchanged  
       * The syntax is *very* necessary:  
         * To avoid having to write a recursive function for every unbounded set of files to loc  
         * This recursive function would be **brittle** due to having to be careful in ordering the files consistently, even when the set of files is not exactly the same as another part of the program which is locking an extended subset of the same files.   
         * The spliced list is ordered consistently using a full and stable ordering mechanism to avoid all kinds of hideous implicit deadlocks.  
         * **Note that** locking lists of locs interacts with the URI **aliasing** issues, since different elements of the list might point to the same location, possibly via indirect aliasing paths.  
    9. **Special convenience syntax for reading and writing locs**:  
       * `loc ()` will return a `str` with the contents of the file  
         * Example: str x \= `|home:///.bashrc|();`  
       * `loc (str x, bool append=false)` will write a `str` to the file (replacing it, or appending to it)  
         * Example: `|home:///.bashrc|(“\#\! /bin/bash”);`  
       * Motivation: if `**sync**` is builtin, and does not require importing an IO library, it would be inconsistent to have to import a module to read/write from/to source locations.   
       * See also ((RAP2)) which avoids importing `util::ValueUI` and `ParseTree` by making types simulate parsing functions using the CallOrTree syntax.  
       * The CallOrTree semantics would be overloaded with one more feature, letting a location “act” as a read/write function.  
         * However, locations are **not** suddenly or accidentally also sub-typed of functions\!   
         * This is \_only\_ about overloading CallOrTree, unambiguously  
         * CallOrTree is already overloaded for locations with the offset-length and line/column notation, so no big deal here.   
* Dealing with global variables and closures, the other sources of “side-effect” in Rascal can be taken care of by extending the `sync` statement a bit:  
  * `syntax Statement \= sync: Label label "sync" Statement body;`  
  * Semantics: `sync` without any location parameter synchronizes on the module instance which contains the sync block.  
  * This can be used in function bodies which use global variables to make these thread safe, as well as closures.  
  * Perhaps this should be a separate RAP, since other mechanisms could also be used to fix races on captured variables and globals, and there might be no need to add a feature for that in the language. Locations however are out of control of the language implementation and must be protected via a locking mechanism.


## Examples

## Backwards Compatibility

## Implementation

## References

* 
