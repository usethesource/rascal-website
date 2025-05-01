---
title: RAP 6 - improved import/extend semantics
sidebar_position: 6
---

| RAP | 6 |
| :---- | :---- |
| Title | improved import/extend semantics  |
| Author | Jurgen Vinju |
| Status | Draft |
| Type | Rascal Language |

### Issue

We have received reports, and encountered ourselves, some baffling emergent behavior of the current semantics of `import` and `extend` module semantics in Rascal. We see unexpected and complex behaviors, often after long debugging sessions, where the implementation is not wrong per se, but just very hard to get. Ergo, we have to do something about the design of these two language features. It’s not comprehensible now.

### Analysis

First the current relevant features of import and extend are listed:

* `import X;` makes the declared items (variables, functions, data-types and syntax-definitions) of the imported module “X” visible in the importing module.  
* An “imported” module is a singleton instance, with its own module state with respect to its global variables  
  * If more than one importer modules A and B import the same imported module X, they share the same view on the state of the imported module X.  
* `import X;` does not make the declared items of modules it imports itself visible to the importing module. Import is not transitive.   
  * This is like Java import also works and what our (beginner) audience expects   
  * It helps to keep namespaces clean  
  * It is therefore necessary for information hiding and reuse   
  * An exception is made for non-terminals and data-types, their names are propagated  
* When an importing module declares a function or a data-type of the same name which already exists in the imported module something interesting happens:  
  * The data/syntax-type is not shadowed but merged  
  * A function is not shadowed but it’s alternatives are added to an overloaded function (however, not \_recursively\_ to other alternatives in more deeply imported modules)  
  * This behavior stems from a time when “extend” did not exist yet in Rascal. It’s a backward compatibility issue. When “extend” did not exist yet, this was the only reason why data-types, syntax definitions could be (marginally) modularly extensible. The “extend” feature was added later because this is not enough, in combination with extensible overloaded functions.  
  * When we added extensible overloaded recursive functions over the extensible data-types it became also urgent to add “extend”.

* `extend X`; like `import` also makes the declared items (variables, functions, data-types and syntax-definitions) of the imported module “X” visible in the importing module.  
* An “extended” module is not an instance and it does not have state.  
  * Instead of making reference to an external module instance, all its declarations are cloned into the local scope of the extending module  
  * This also goes for global variables. Each extended global has its own instance in the extending module.  
* “Extend X” makes all the declared items of modules it imports itself visible to the importing module. “Extend” is transitive.  
  * Even the  “import” declarations of the extended module are cloned  
  * As are the “extend” declarations.  
  * And all private parts of the module as well.  
* When an importing module declares a function or a data-type of the same name which already exists in the extened module something useful happens:  
  * The data/syntax-type is merged, as if the declarations were next to each other in the same module  
  * A function’s alternatives are added to the overloaded function of the extending module   
  * By effectively merging the declarations of data-types and syntax-definitions and functions into the same extending module, both recursive functions and recursive data and syntax types are now openly extensible  
  * Recursive calls in extended modules now resolve to the bigger overloaded function rather than to the overloaded function as it was in the original scope.


> **Observation 1:** by not shadowing names declared by imported modules, “import” merges definitions almost like “extend” does, but not completely transitively and recursively. The **semi-merge** surely generates hard-to-predict run-time behavior (why did this function not match?)


* Never static errors are produced that this semi-merging is going on

> **Observation 2:** open extensibility is for data-types (languages) and recursive functions that operate on these data-types is a distinguishing Rascal feature with a strong language-oriented flavor. It is an important (yet advanced) language feature. “Extend” does not have any information hiding feature, which is necessary for the “openness” it requires.

> **Observation 3:** “import” is useful for libraries of non-extensible functions and specifically for information hiding. We can not do without “import” either: larger Rascal programs would become nearly impossible to write and maintain (remember ASF+SDF which only had “extend” semantics for its “import” declarations).

> **Observation 4:** the feature interactions between import and extend are currently "gruesome"; unpredictable, with complex consequences, and no method of debugging. 

* With globals involved, it becomes unclear what instance we are talking about  
* With function merging involved it becomes unclear which overloaded alternatives are active at which level in the import/extend hierarchy

### Solution proposal

We propose to remove as much functionality overlap and interactions between **import** and **extend** as possible by removing the historical features of import which belong to extend, in order to:

* Avoid complex feature interactions  
* Produce more static and early warnings to the programmer

Unfortunately, this proposal can not be backward compatible to previous Rascal versions. *It breaks the semantics of existing imports.*

The concrete proposal is to:

* remove all the function, data-type and syntax definition **merging effects** from “import”;  
* **do not  propagate** syntax and data-type names over transitive imports any more;  
* let local names in **the importing module shadow** equal names from the imported modules.  
  * Imported but shadowed names will still be accessible via qualified module names  
  * Imported not shadowed names will be accessible as before

Positive consequences:

* Users who need to program extensible languages will be forced to use “extend” inside their language implementations to fix the new static errors they would get if they use “import”;  
* User who need to simply use a library or a final language implementation, without having to extend it, will be better off using “import” for its information hiding features.  
  * A warning for an unnecessary “extend”, i.e. one where no function or type is effectively merged would give feedback to avoid using extend over import.   
  * They can use their own function names without having to “know” all the names in the modules they are importing.  
* The current type-checkers have to jump through hoops to implement the current import semantics which merges definitions instead of shadowing; they will become simpler in that regard.

By affecting this change, the type checker will start producing more warnings and errors automatically. For example:

```rascal
module A;  
import basic/Identifiers;

module B;  
import A;

syntax Exp \= Id; // error undeclared non-terminal Id (before it would get the Id from basic/Identifiers via the transitive import of A).
```

and:

```rascal
module A

data X \= x(); 

int f(x()) \= 0;

module B;  
import A;

// X shadows the X from module A:  
data X \= y(X x); // possible warning: X is not productive, there is no base case

int f(y(x())) \= 1 // undeclared constructor x on local type `X`
```

Negative consequences:

* This will break existing Rascal programs, but when it breaks most of the time a static error will pop up.  
  * Imports will have to be changed to extends to fix the issues by the users of Rascal  
* New static checks have to be designed and implemented, with good error messages to:  
  * Suggest using import over extend (when nothing needs merging)  
  * Suggest using extend over import (when definitions become incomplete due to shadowing)  
    * Such as non-productive non-terminals  
    * And such as overloaded functions which miss cases  
  * Suggest qualified names when a function is shadowed but reachable from an import.

