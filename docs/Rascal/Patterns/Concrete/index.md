---
title: Concrete Patterns
keywords:
  - "("
  - ")"
  - "`"
  - "<"
  - ">"

---

#### Synopsis

Concrete patterns.

#### Syntax

```rascal
Concrete pattern with expected symbol type: (_Symbol_) ` Token₁ Token₂ ... Tokenₙ `
```
```rascal
Typed variable inside a concrete pattern: <_Type_ _Var_>
```

#### Description

A concrete pattern is a pattern for matching a [parse tree](../../../Library/ParseTree.md). The notation of a concrete pattern is the *object language* itself, the language that the parse tree describes. 
In other words, you can use a code example to match parsed code using a concrete pattern. These concrete code examples can contain [Variable](../../../Rascal/Patterns/Variable/index.md)s like the other [Patterns](../../../Rascal/Patterns/index.md).

The mechanism of concete patterns gives a good notation for matching complex structures such as a [parse tree](../../../Library/ParseTree.md), and it works in a simple manner:
   
   * the input code is parsed using a parser generated from a [Syntax Definition](../../../Rascal/Declarations/SyntaxDefinition/index.md); this generates parse trees.
   * the pattern example code is parsed using the *same* parser; this generates parse trees with [Variable](../../../Rascal/Patterns/Variable/index.md)s.
   * the parse tree with the [Variable](../../../Rascal/Patterns/Variable/index.md)s is matches against the parse tree of the input code, similarly to the way [Node](../../../Rascal/Patterns/Node/index.md) work.     
 
So, you could say that [Concrete](../../../Rascal/Patterns/Concrete/index.md) are a short notation for otherwise highly complex [Node](../../../Rascal/Patterns/Node/index.md) on [parse tree](../../../Library/ParseTree.md).  Note that the [VariableDeclaration](../../../Rascal/Patterns/VariableDeclaration/index.md)s in a concrete pattern can
only occur in the pattern at the location where the code for a full non-terminal of the [Syntax Definition](../../../Rascal/Declarations/SyntaxDefinition/index.md) would be. The structure of a concrete pattern follows the structure of the 
grammar in the [syntax definition](../../../Rascal/Declarations/SyntaxDefinition/index.md) and the types of the [Variable](../../../Rascal/Patterns/Variable/index.md)s are the syntax non-terminals of the [Syntax Definition](../../../Rascal/Declarations/SyntaxDefinition/index.md).  

Inside concrete syntax patterns, layout is ignored while pattern matching. So parse trees which have different whitespace and comments but are otherwise the same will match anyway.

#### Examples

Examples (in a context where an appropriate concrete syntax has been defined):

*  Quoted syntax pattern with two pattern variable declarations:

```rascal-shell 
rascal>import ParseTree;
ok
rascal>syntax Id = [a-z]+;
ok
rascal>syntax Num = [0-9]+;
ok
rascal>syntax Exp = left Exp "*" Exp > Exp "+" Exp |  Id | Num;
ok
rascal>layout WS = [\ \n\r\t]*;
ok
rascal>visit (parse(#Exp, "x + x")) {
>>>>>>>   case (Exp) `<Id a> + <Id b>` => (Exp) `2 * <Id a>` when a == b
>>>>>>>}
Exp: (Exp) `x + x`
```
Some observations about this example:

** Notice how the non-terminals `Exp` and `Id` from the [Syntax Definition](../../../Rascal/Declarations/SyntaxDefinition/index.md) become types for the pattern.

** When this example pattern actually matches the variable `a` is bound and can be used again like any other [Variable](../../../Rascal/Patterns/Variable/index.md). 


A full example of concrete patterns can be found in [WithLayout](../../../Recipes/Languages/Exp/Concrete/WithLayout/index.md).

