---
title: Parse Action
---

#### Synopsis

Actions are functions that are called when parse trees are constructed (right after parsing).

#### Syntax

#### Types

#### Function

#### Description

A so-called ((Action)) is a normal rascal ((Function Declarations)) of type `&T<:Tree (&T<:Tree)`. So an action takes a parse tree of a certain non-terminal, and returns another one of the same non-terminal (or the same). 

An action is passed to the parsing algorithm via the ((ParseTree::parse)) function's `actions` parameter, and when the parser is ready, it applies the action function in a bottom-up manner throughout the parse graph while it is being converted to a ((ParseTree::Tree)). 
* When the parameter of one of the functions matches the tree that is currently build, then the function is applied and the return value replaces the currently constructed tree. 
* A parameter may also match an entire ambiguity cluster, and replace it by one of the alternatives, a smaller cluster or an empty cluster.
* A parameter may also match _all_ parse trees by operating on the ((ParseTree::Tree)) level. This can be used to implement disambiguation strategies based on production ((Tag))s (such as weights or preferences).
* When an action matches and returns, no other actions are applied to the given tree node.
* When an action throws an exception, a parse error results with the location of the currently processed tree. This is a fast way to implement fast semantic errors at parse time. However, it is not good for usability since partially correct parse trees can still be used for syntactics and semantic IDE features. Throwing an error makes that impossible. 
* When an action uses ((Statements-Filter)), the current tree and all its parents up to the first `Tree::amb` ambiguity cluster are removed. When the bottom-up algorithm arrives back at the cluster and only one element prevails, this element replaces the entire cluster. When zero elements prevail, a parse error is produced with source location of the location and length of the cluster. Using ((Statements-Filter)) is an effective way of implementing semantics directed disambiguation.
* When an action uses ((Statements-Fail)), the current function backtracks to the next available matching action function.
* When no action function matches (anymore), the parser simply returns the ((ParseTree::Tree)) in question.

:::info
Older versions of Rascal would pass in action functions automatically from the module declaration scope of the ((Syntax Definition)) in question. This was changed in favor of portability of the `parse` functionality between the interpreted and the compiled versions of Rascal
:::

Actions allow for very efficient application of context information to filter ambiguity in context-free grammars. Because they are applied during the converion of a possible large but shared/memoized tree representation, they may quickly turn a cubic forest to a linear tree. 

However, if the actions do use side-effects, such as assigning into global variables or variables captured by a closure, then you must set the `hasSideEffects` boolean parameter to `true`. Otherwise the memoization algorithm will share tree output without seeing that the context may have changed. Consider an action that builds up a symbol table for type declarations, this may filter the identifier expression `MyType` in one location but not filter it at another location (after a shadowing declaration) later in the input text. If `hasSideEffects` is set to `false`, the action runner assume that equal input values, imply equal return values.


#### Examples

Actions can be used as a ((Disambiguation)) method, using the `filter` statement, as in:

```rascal-commands
import IO;

lexical Id = [a-z]+ \ "type";

layout Whitespace = [\ \t\n]*;

start syntax Program = Stat+;

syntax Stat
    = "type" Id ";"
    | Type Id ";"
    | Exp ";"
    ;

syntax Type
    = Id
    | Id "*"
    ;

syntax Exp
    = Id
    | left Exp "*" Exp
    ;

start[Program] program(str input) {
  // we always start with an empty symbol table
  set[str] symbolTable = {};

  // here we collect type declarations
  Stat declareType(s:(Stat) `type <Id id>;`) {
    println("declared <id>");
    symbolTable += {"<id>"};
    return s;
  }

  // here we remove type names used as expressions
  Exp filterExp(e:(Exp) `<Id id>`) {
    if ("<id>" in symbolTable) {
        println("filtering <id> because it was declared as a type.");
        filter;
    }
    else {
        return e;
    }
  }

  return parse(#start[Program], input, |demo:///|, filters={declareType, filterExp}, hasSideEffects=true);
}
```

```rascal-shell,continue,errors
example = "a * a;";
p = program(example);
example = "type a;
          'a * a;
          ";
p = program(example);
```

#### Benefits

* Actions can involve _any_ kind of context information to filter or normalize parse trees, even global variables. Closures can also be used to capture context information that can be used to filter parse forests.
* Actions are run post-parse algorithm and are thus predictable in their semantics. It is a simple bottom-up application of functions on every node.
* Actions are efficiënt, because their effect is memoized by default on the worst-case cubic internal representation of the parse forest. 
 
#### Pitfalls

* Actions can filter the very last tree from a forest, leaving an empty forest. This is represented as a ParseError.
* In previous versions, actions were executed automatically by taking all overloaded functions from the declaring module of a ((SyntaxDefinition)). This feature has dissappeared and was replaced by an extra keyword parameter to the ((ParseTree::parse)) function.
* Closures and global variables that capture variables which are then used to filter are side-effects, which can be hard to understand and hard to debug. It's better to write purely functional actions if that's possible. 
