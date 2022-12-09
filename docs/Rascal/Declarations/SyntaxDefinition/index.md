---
title: Syntax Definition
keywords:
  - start
  - lexical
  - layout
  - keyword
  - assoc
  - left
  - right
  - non-assoc
  - grammar
  - context-free grammar
  - scanner
  - regular expressions
sidebar_position: 7
---

#### Synopsis

Syntax Definitions allow the definition of parsers for programming languages, domain-specific languages and data formats.

#### Syntax

```rascal
start syntax Nonterminal = Alternatives;

lexical Nonterminal = Alternatives;

layout Nonterminal = Alternatives;

keyword Nonterminal = Alternatives;
```

where _Start_ is either `start` or nothing, and _Alternatives_ are one of:

```rascal
Tags           Symbols         
Tags left      Symbols               ❶  
Tags right     Symbols               ❶  
Tags non-assoc Symbols               ❶  
Tags left      Name : Symbols        ❷  
Tags right     Name : Symbols        ❷  
Tags non-assoc Name : Symbols        ❷  
left      ( Alternatives )           ❸  
right     ( Alternatives )           ❸  
non-assoc ( Alternatives )           ❸  

Alternatives₁ | Alternatives₂        ❹  

Alternatives₁ > Alternatives₂        ❺  
```

Here _Associativity_ is nothing, or one of `assoc`, `left`, `right` or `non-assoc`, and _Tags_ are a possibly empty list of [Tag](../../../Rascal/Declarations/Tag/index.md)s.

* ❶  for binary recursive expression operators, [./Associativity](../../../Rascal/Declarations/SyntaxDefinition/Disambiguation/Associativity/index.md) disambiguates and chooses binding to the `left`, `right`, or `non-assoc` (demanding brackets)
* ❷  a `Name` provides the algebraic constructor name for an abstract syntax definition derived from this grammar
* ❸  an [./Associativity](../../../Rascal/Declarations/SyntaxDefinition/Disambiguation/Associativity/index.md) group is not only a short-hand, but also derives the cross product associativity rule between all members of the group.
* ❹  this is the normal BNF-like rule alternative combinator
* ❺  this defines a transitively closed [Priority](../../../Rascal/Declarations/SyntaxDefinition/Disambiguation/Priority/index.md) relation for all left- or right-recursive binary or unary expression operators (see [Priority](../../../Rascal/Declarations/SyntaxDefinition/Disambiguation/Priority/index.md) )

#### Description

Rascal supports full context-free grammars for syntax definition. It generates scannerless parsers from these definitions. 
These parsers produce [Parse Trees](../../../Rascal/Declarations/SyntaxDefinition/ParseTrees/index.md) that can be further processed by Rascal using [./Concrete Syntax](../../../Rascal/Expressions/ConcreteSyntax/index.md) fragments
 in [Patterns](../../../Rascal/Patterns/index.md) and [Expressions](../../../Rascal/Expressions/index.md), or they can be _imploded_ to [./Algebraic Data Type](../../../Rascal/Declarations/AlgebraicDataType/index.md)s.

There are four kinds of non-terminals that can be defined with slightly different characteristics.

*  _Syntax_ non-terminals are general context-free non-terminals. This means that left-recursion, right-recursion, any of the regular expression [./Symbol](../../../Rascal/Declarations/SyntaxDefinition/Symbol/index.md)s and all kinds of [Disambiguation](../../../Rascal/Declarations/SyntaxDefinition/Disambiguation/index.md) can be used to define it.
   It is important to note that in between the _Symbols_ that define a syntax non-terminal the locally defined layout non-terminal will be interleaved. 
   For example, if you define `layout ML = [\ ]*;` and `syntax A = "a" "a"`, Rascal will modify the definition of A to `syntax A = "a" ML "a";` before generating a parser.

*  _Lexical_ non-terminals are very much like _syntax_ non-terminals. 
   However, the definition of a lexical is _not_ modified with interleaved layout non-terminals. 
   And, the structure of lexicals is not traversed by the [visit statement](../../../Rascal/Statements/Visit/index.md) and equality is checked between lexicals 
   by checking the characters (not its structure) for equality. 

*  _Layout_ non-terminals are just like _syntax_ non-terminals as well. However, they are used to preprocess all _syntax_ definitions in the same module scope (see above).

*  _Keyword_ non-terminals are _not_ like _syntax_ non-terminals. These only allow definition of enumeration of literal 
   symbols and single character classes. Keyword non-terminals play an important role in the semantics of [Disambiguation](../../../Rascal/Declarations/SyntaxDefinition/Disambiguation/index.md)
   where some disambiguation constructs require finite, non-empty enumeration of strings. 
   The prime example is the definition of reserved keywords.


Each alternative of a syntax definition is defined by a list of [./Symbol](../../../Rascal/Declarations/SyntaxDefinition/Symbol/index.md)s. Each of the [./Symbol](../../../Rascal/Declarations/SyntaxDefinition/Symbol/index.md)s can be labeled or not.
The alternative of a defined syntax type may be labeled or not as well. With the label, additional operations are activated on the corresponding parse trees:

*  The `is` operator is defined for labeled alternatives (see [Operators](../../../Rascal/Expressions/Operators/index.md)).
*  The `has` operator is defined for labeled [./Symbol](../../../Rascal/Declarations/SyntaxDefinition/Symbol/index.md)s in the right-hand side (see [Operators](../../../Rascal/Expressions/Operators/index.md)).
*  [Action](../../../Rascal/Declarations/SyntaxDefinition/Action/index.md) functions can be written to override the construction of a parse tree, using the label of an alternative as the function name
*  [implode](../../../Library/ParseTree.md#ParseTree-implode) uses labeled alternatives to map to an [./Algebraic Data Type](../../../Rascal/Declarations/AlgebraicDataType/index.md)


Alternatives can be combined in a single [Syntax Definition](../../../Rascal/Declarations/SyntaxDefinition/index.md) using the `|`, `>` and associativity combinators.
The latter two represent [Disambiguation](../../../Rascal/Declarations/SyntaxDefinition/Disambiguation/index.md) constructs that you should read more about. The `|` is a short-hand for not having to repeat `syntax A =` for every alternative of `A`.

Alternatives can be named or not. The names are essential only if:

*  you need to [implode](../../../Library/ParseTree.md#ParseTree-implode) [Parse Trees](../../../Rascal/Declarations/SyntaxDefinition/ParseTrees/index.md)
*  you need to use the `is` expression, as in `myStatement is ifThenElse` instead of using concrete pattern matching.
*  you want to write [Action](../../../Rascal/Declarations/SyntaxDefinition/Action/index.md)s that triggers on the construction of the alternative.


However, it is generally a good idea to name your rules even if you do not need them. 
Note that a name may be reused for different alternatives for a single non-terminal, 
provided that the lists of symbols for these "overloaded" alternatives use _different non-terminal symbols_. 
This implies that alternatives for lexicals generally do not use overloaded names because they are often 
defined only by regular expressions over terminal [Symbol](../../../Rascal/Declarations/SyntaxDefinition/Symbol/index.md)s (literals and character classes).

The _start_ modifier identifies the start of a grammar. 
The effect of a start modifier is that Rascal will generate an extra syntax definition before generating a parser
that allows layout to before and after the start non-terminal. 
For example:
```rascal
layout L = [\ ]*; start Program = Statement*;`
```
will produce `syntax start[Program] = L Program top L;`. 
Note that the `start[Program]` type is now available in your program, and [Parse Trees](../../../Rascal/Declarations/SyntaxDefinition/ParseTrees/index.md) assigned to variable of that 
type will allow access to the _top_ field.


#### Examples

The following example makes use of practically all of the [Syntax Definition](../../../Rascal/Declarations/SyntaxDefinition/index.md) features, except parse actions.
```rascal
// layout is lists of whitespace characters
layout MyLayout = [\t\n\ \r\f]*;

// identifiers are characters of lowercase alphabet letters, 
// not immediately preceded or followed by those (longest match)
// and not any of the reserved keywords
lexical Identifier = [a-z] !<< [a-z]+ !>> [a-z] \ MyKeywords;

// this defines the reserved keywords used in the definition of Identifier
keyword MyKeywords = "if" | "then" | "else" | "fi";

// here is a recursive definition of expressions 
// using priority and associativity groups.
syntax Expression 
  = id: Identifier id
  | null: "null"
  | left multi: Expression l "*" Expression r
  > left ( add: Expression l "+" Expression r
         | sub: Expression l "-" Expression r
         )
  | bracket "(" Expression ")"
  ;
```

#### Benefits

*  Modular and compositional.
*  No grammar normalization or grammar factoring necessary.
*  Generate a parser for any context-free grammar.
*  Generated parsers are really fast (for general parsers).
*  Powerful disambiguation constructs for common programming language disambiguation patterns.
*  Data-dependent (context-sensitive) disambiguation via arbitrary functions.
*  Embedding of concrete syntax fragments in Rascal programs
*  [Syntax Definition](../../../Rascal/Declarations/SyntaxDefinition/index.md)s follow the syntax and semantics of [./Algebraic Data Type](../../../Rascal/Declarations/AlgebraicDataType/index.md)s quite closely.

#### Pitfalls

*  Grammars may be ambiguous, so read about [Disambiguation](../../../Rascal/Declarations/SyntaxDefinition/Disambiguation/index.md), [Ambiguity Detection](../../../Rascal/Declarations/SyntaxDefinition/AmbiguityDetection/index.md) and [Ambiguity Diagnosis](../../../Rascal/Declarations/SyntaxDefinition/AmbiguityDiagnosis/index.md).
*  Static grammar checker is not implemented yet.


