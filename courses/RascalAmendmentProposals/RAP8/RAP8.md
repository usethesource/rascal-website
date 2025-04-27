---
title: RAP 8 -  Simple and Almost Safe Concurrency for Rascal
---

| RAP | 8 |
| :---- | :---- |
| Title | Simple and Almost Safe Concurrency for Rascal |
| Author | Jurgen Vinju, and …  |
| Status | Draft |
| Type | Rascal Language |

## Abstract

Since Rascal has (mostly) immutable data and it’s on the JVM it is basically ready to benefit from multicore architectures using the JVMs multithreading and concurrency features.

The proposal is to introduce a single structured “for-loop-like” programming construct, called \`**fork**\` which extends the closure feature of Rascal: by allowing its blocks to run concurrently, sharing read-access to local variable state and write access to an (ordered) result list. 

The \`fork\` statement ends when all of its concurrent loop blocks have ended (if it returns results) and it then returns a list of values in the order of spawning each block. If no results are computed, the fork statement ends after spawning all of its computations directly.

As file locations, the \`loc\` type, in Rascal is highly prominent and these “point” to external file locations and other resources outside of the JVM, the concurrency feature also requires us to think about resource locking. This can be implemented and designed orthogonally, see RAP 10\. 

## Motivation

* Rascal cannot utilize multithreading yet while there is ample opportunity for it  
  * Map-reduce over files of a project for example  
* We want something which is “safe” to fit the Rascal design:  
  * No null pointers or uninitialized values or computations which return null  
  * No concepts of \`threads\` or \`processes\`, just concurrently running functions finishing sooner because they may run in parallel  
  * Seamless integration of exceptions  
    * No garbled stack traces  
    * No leakage of JVM thread semantics into stacktraces  
* The goal is \_not\_ to invent a generic safe concurrent programming model, the goal is \_only\_ to allow Rascal code to run concurrently without stepping out of the language.  
  * A generic safe concurrent programming model would not fit and would interact with way to many design elements;  
  * We don’t need a generic concurrent programming model to satisfy the need for using parallelism in Rascal.

## Specification

* syntax Statement \= fork: Label label "fork" "(" {Expression ","}+ generators ")" Statement body   
* Generators have the same semantics as in if-statements and for-loops, including filtering, backtracking, etc. There are no exceptions to this rule.  
* The existing \`append\` statement interacts with \`fork\` just like in \`for\` loops  
  * However, it adds not to the end but insert the value in order of creation of the running block (so the order of the generators\!)  
  * \`append\` stores the result of a computation at a position in the result list which corresponds to the order in which that code was spawned by the fork loop.  
  * The length of the returned list is always less than or equal to  the number of spawned computations by  the \`fork\` loop. If some closure stopped via the \`break\` and \`continue\` statements, then certain results may be missing.  
  * The static type of the fork result is “list-of” the least upper bound of all static types of the append expressions in the fork block, i.e. \`list\[value\]\`.  
* The body of the fork statement is interpreted similar to a closure:  
  * The body is the body of a closure with formal parameters all variables captured by the body.  
    * All variables captured by the fork scope are **captured by-value**  
    * This includes lexically nested closures using variables from outer scopes\!  
  * The closure returns the values provided by \`append\` statements  
  * The closure returns \`void\` on \`break\` and \`continue\` statements  
  * Due to the **immutability of the captured values, no locking is required**, and this is where Rascal benefits from immutability in the presence of concurrency.  
* Run-time semantics of fork:  
  * First all closures are created by executing through the generators, each closure has a “spawning-index” which indicates their order of occurrence in the \`fork-loop\`  
  * Then the closures are registered and executed with a (global)  thread-pool which is configured automatically by inspecting JVM configuration parameters (i.e. one fewer threads than available cores)  
  * The \`append Exp\` statement translates to \`return Exp;\` in the closure  
  * Blocking semantics of \`fork\`:  
    * The fork loop blocks until all closures have finished executing if the body contains an \`append\` statement  
    * The fork loop also block if the block does not contain an \`append\` statement. This is to guarantee that any nested IO has finished when we exit the fork block.  
  * \`break;\` and \`continue;\` terminate a closure without returning a value. They both translate to \`return;\` in the closure and have no different semantics. Care has to be taken with the labels, since local for loops and while loops also interpret \`break\` and \`continue\`.  
  * The return values of the closures are collected in an array at their spawning-index, every closure \_must\_ return a value.  
    * The spawning index is a unique reference into the array, which is why writing into the array it is **lock-free.**  
    * The \`fork\` loop returns a \`list\` which contains the array of results in the order of the spawning-index  
    * The static type of the result is “list-of” the least upper bound of all static types of the append expressions in the fork block.  
  * If an exception is thrown by at least one of the closures:  
    * It is s re-thrown by the \`fork\` loop;  
      * But not before the other closures are signaled to cancel.   
      * Their results are lost.   
      * Cancellation of running processes  is guaranteed on loop iteration positions and function calls (i.e. recursion).   
    * The stack trace shows the failed closure on top of the path leading to the fork loop.  
    * Only the first exception is reported. If other threads throw exceptions just before they could be canceled, their stacktraces are lost.  
  * Notes on safety:  
    * The above design guarantees safety against races and deadlocks (up to a point) due to the absence of variable reference capturing;  
      * The only “accidental” way for the concurrent blocks to write back to shared data is via the result array which has no aliases per position  
      * Each loop iteration has access to the same shared but immutable data, this is cheap since only references to shared data need to be passed. (Shallow) cloning is never even necessary to share data safely.  
      * Deadlocks and races are not possible for code which does not pass closure values to the body of fork loops.  
    * Deadlocks and races are indeed pretty hard to construct, but still possible:  
      * The fork would need to share references to previously constructed variable-reference capturing closures, or share file locks.  
      * To make this sane and usable, at least all such captured variables should be declared \`volatile\` in the generated code. However, this may be overkill.  
      * Open question: do we need to provide locking mechanisms for reference captured variables on the language level?   
        * Hopefully not, since it is only required by corner cases due to the above design. Almost never will writable references be captured by concurrent blocks of code.  
        * Perhaps these corner cases can be detected statically, but that is doubtful since closures can hide as generic \`value\`-typed values anywhere on the stack or on the heap.  
* Notes on fairness:  
  * Siblings of fork loops are not required to be fairly treated, i.e. no preemptive scheduling is required;  
  * Nested fork-loops require some degree of fairness, i.e. an outer fork must block and release its thread when they’re waiting on an inner block (possibly executing on another thread) to finalize.  
    * It’s important when implementing the interaction with the thread pool, when waiting for the results of all forked blocks the waiting thread should yield its thread to the thread pool such that the things it depends on can terminate.  
* Note on efficiency:  
  * Nested forks may lead to a lot of intermediate list construction. This is very similar to the nested/recursive construction of long strings via templates. It could be smart to implement lazy and balanced concatenation for lists for this, like we did for strings.   
    * Java streams do this as well, but not balanced.

## Examples

// parallel analysis of all files in a project  
facts \= **fork** (/**loc** f \<- crawl(myProject)) {  
  **append** analyze(f);  
}  
    
// map-reduce over a tree  
**int** sum(**int** i) \= i;  
**int** sum(**node** n) {  
  result \= **fork**(child \<- node) { // map  
    **append** sum(child);     
  }  
  **return** (0 | **it** \+ i | i \<- result); // reduce  
}

## Backwards Compatibility

* This is a new feature with a new syntax, so no old code uses it  
* Retaining the semantics of exceptions is important for language design consistency, and for debugging parallel programs as well. 

## Implementation

* The cancellation policy on exceptions is the hardest part to implement, it may interact with the \_monitor feature\_ of Rascal, which also has a cancellation feature.  
  * Cancellation is implemented via throwing InterruptedException if a thread is signaled  
* Compiling the block part of a fork to a value-capturing closure is “easy”  
* The thread-pool semantics should be based on java.concurrency standard library primitives, including:  
  * the handling of exceptions  
  * the spawning of jobs   
  * the collection of job results  
  * \`fork\` loops may be nested, via function calls or directly, implying:  
    * The thread-pool semantics should be thread-safe itself  
    * A global thread-pool or a local thread-pool per fork?  
      * Thread pools are heavy objects  
      * Fork loops should be cheap and not spawn threads all the time  
      * Nested fork loops should share cores efficiently and not fight for resources  
    * It looks like investing in an intricate but thread-safe global thread pool for fork loops is best  
* All captured variable references in all closures should become \`volatile\`??  
  * In case we use closures which capture the same reference from different parallel computations.  
  * Still not sure about this; we also just might let this go wrong. Sharing captured variables between parallel fork jobs is simply not a good idea anyway.  
* No additional features to the static checker seem necessary, however:  
  * That assumption requires wiring the by-value passing semantics on the outside of the blocks, and renaming all the variables used inside, or simulating local function definition semantics with shadowing formal parameters.   
  * The goal would be to compile closures defined \_inside\_ the fork loop without changing the compiler for the closure functionality.

## References

* https://stackoverflow.com/questions/106591/do-you-ever-use-the-volatile-keyword-in-java
