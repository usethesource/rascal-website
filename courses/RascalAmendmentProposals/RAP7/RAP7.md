---
title: RAP 7 - Final Pattern Variables
sidebar_position: 7
---

| RAP | 7 |
| :---- | :---- |
| Title | Final Pattern Variables |
| Author | Jurgen Vinju |
| Status | Draft |
| Type | Rascal Language |

## Abstract

The proposal is to disallow assignments (`=`) into all pattern variables, including those of function parameters and the left-hand side of generators (all pattern variables). This effectively makes all those names `final` in Java jargon.

## Motivation

The basic motivation is to simplify the programming and analysis of Rascal programs, prepare for more use of closures when/if we add parallelism, and fix new issues newbies have with closures.

1. Rascal functions are supposed to define actual “functions”, mathematically.   
   1. A function is an injective relation between its input parameter values and its output value.   
   2. By assigning into the formal parameters of functions, this functional relation is ill-defined during the execution of a function (dependent on control flow and path)  
   3. Equational reasoning (i.e. when thinking about the correctness of a recursive function) is very hard if the parameters change value.  
2. Closures capture variable references now, also of loop variables and function parameters, which generates newbie questions but also confounds advanced readers of Rascal (including its designers).   
   1. By making pattern variables immutable, closures must capture the value of these variables instead of the references;  
   2. Local and global variables will model only mutable state in Rascal.  
   3. Programmers will not accidentally be able to capture state anymore, but they will be able to do it on purpose.  
   4. If/when adding concurrency to Rascal, both the equational reasoning argument and the capturing references argument become much more pressing:  
      1. Accidentally capturing state will lead to either more implicit locking, or more implicit races (depending on the concurrency design)  
      2. Functional parameter passing and return are fundamental to the map/reduce paradigm, as long as parameters are immutable this makes a lot more sense.

## Specification

* The static checker should disallow `x = exp;` for all `x` introduced as pattern variables; this is the core of the proposal and the rest follows.  
* Closures should capture all pattern variables by-value (*or else we would not be able to satisfy the constraint that they are final*)

For example:

	int f(int j) {  
    	   j = 0; // error\! Can not assign to pattern variable j

         for (k <- [0..9]) {  
           k *= 2; // error Can not assign to pattern variable k  
           println(k);  
         }  
      }

     // prints 0123456789 (and not 999999999 anymore\!):  
     void testClosureNoState() {  
	  x = for (int j <- [0..10]) {  
         append () { return j; };  
       }  
       for (f <- x) {  
         print(f());   
       }  
     }

     // prints 999999999:  
     void testClosureWithState() {  
       int state = \-1;  
       x = for (int j <- [0..10]) {  
         state = j; // no error, this is a local variable  
         append () { return state; };  
       }  
       for (f <- x) {  
         print(f());   
       }  
     }

     // prints 123456789:  
     void testClosureWithScopedState() {  
       x = for (int j <- [0..10]) {  
         int state = j; // no error, this is a local variable  
         append () { return state; }; // `state` is new every loop  
       }  
       for (f <- x) {  
         print(f());   
       }  
     }

## Backwards Compatibility

* This change is \_**not\_ backwards compatible**  
  * New static errors will appear where assignment are made into pattern variables  
  * The run-time semantics of closures will silently change from “999999999” to “123456789”, which might break code using the Figure library (for example)  
    * It’s possible to (temporarily) add warnings to closures which capture references to pattern variables, to make this visible.  
    * It’s highly likely that the “99999999” behavior was a bug anyway...  
    * A better proposal is to provide a tool (menu option) to highlight all these occurrences to the user once and allow them to rewrite if necessary.  
      * Because capturing values will be the default for loops and interactions with salix and the figure library;  
      * Warnings by the type checker would be mostly false positives;

## Implementation

* Distinguish pattern variable role from normal local and global variable role in type checker (is already the case)  
* Add rule to disallow assignments into pattern variables  
* Do not lift pattern variables to references anymore (currently all variables which are captured are lifted). This is a filter to be added to that part of the compiler.

## References

* [https://stackoverflow.com/questions/21340116/onmousedown-pointers-inside-a-loop-in-rascal/21386790?r=SearchResults\&s=1|25.3812\#21386790](https://stackoverflow.com/questions/21340116/onmousedown-pointers-inside-a-loop-in-rascal/21386790?r=SearchResults&s=1|25.3812#21386790)  
* [https://stackoverflow.com/questions/41070422/figure-doesnt-show-correct-string-on-event/41110035?r=SearchResults\&s=4|24.2505\#41110035](https://stackoverflow.com/questions/41070422/figure-doesnt-show-correct-string-on-event/41110035?r=SearchResults&s=4|24.2505#41110035)  
* [https://stackoverflow.com/questions/54278043/box-callback-functions-returning-the-same-string-in-rascal/54278923?r=SearchResults\&s=6|21.5850\#54278923](https://stackoverflow.com/questions/54278043/box-callback-functions-returning-the-same-string-in-rascal/54278923?r=SearchResults&s=6|21.5850#54278923)  
* [https://github.com/heathermiller/spores](https://github.com/heathermiller/spores)  
* [http://blog.sethladd.com/2012/01/for-loops-in-dart-or-fresh-bindings-for.html](http://blog.sethladd.com/2012/01/for-loops-in-dart-or-fresh-bindings-for.html)  

