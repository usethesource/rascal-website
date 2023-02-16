---
title: Parse Action
---

#### Synopsis

Actions are functions that are called when parse trees are constructed (right after parsing).

#### Syntax

#### Types

#### Function

#### Description

A so-called ((Action)) is a normal rascal ((Function Declarations)) that overloads a ((SyntaxDefinition)). 
A ((Syntax Definition)), very similar to ((Algebraic Data Type)) definitions, defines a constructor for a parse tree node. 
This constructor is the default function, and when it is overloaded by a non-default function this overloaded function will be tried first. 
You can overload any labeled ((Syntax Definition)) using the name of an alternative.

For example:
```rascal
syntax A = a: B  C;

public A a(B b, C c) {
  return f(b, c);
}
```
In this example ((Action)) function the a is replaced by whatever A the `f` function returns. 

((Action))s are executed every time a parse tree is constructed:

*  Right after parsing.
*  On the way back from a visit statement.
*  When a ((Concrete Syntax)) expression is executed.
*  When ((Parse Trees)) are constructed "manually".

#### Examples

Actions can be used as a ((Disambiguation)) method, using the `filter` statement, as in:
```rascal-commands
syntax E = id: Id i;
set[Id] types = {};

public E id(Id i) {
  if (i in types) 
    filter; // remove this parse tree and all its parents up to the first amb node
  else 
    fail; // just build the parse tree "E = id: Id i", by defaulting to the constructor
} 
```

#### Benefits

* Actions can involve _any_ kind of context information to filter or normalize parse trees, even global variables. Closures can also be used to capture context information that can be used to filter parse forests.
* Actions are run post-parse algorithm and are thus predictable in their semantics. It is a simple bottom-up application of functions on every node.
* Actions are efficiënt, because their effect is memoized by default on the worst-case cubic internal representation of the parse forest. 
 
#### Pitfalls

* Actions can filter the very last tree from a forest, leaving an empty forest. This is represented as a ParseError.
* In previous versions, actions were executed automatically by taking all overloaded functions from the declaring module of a ((SyntaxDefinition)). This feature has dissappeared and was replaced by an extra keyword parameter to the ((ParseTree::parse)) function.
* Closures and global variables that capture variables which are then used to filter are side-effects, which can be hard to understand and hard to debug. It's better to write purely functional actions if that's possible. 
