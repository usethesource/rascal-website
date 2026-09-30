---
title: Syntax Role Modifiers
keywords:
  - data
  - syntax
  - layout
  - keyword
  - lexical

---

#### Synopsis

Syntax Role Modifiers select which syntactic namespace a data type falls into.

#### Syntax

Closed names of ((AlgebraicDataType)) and ((SyntaxDefinition))s:

* `data[<Name>]`
* `syntax[<Name>]`
* `lexical[<Name>]`
* `keyword[<Name>]`
* `layout[<Name>]`

Or their open variants:

* `data[&T]`
* `syntax[&T]`
* `lexical[&T]`
* `keyword[&T]`
* `layout[&T]`

#### Types

#### Function

#### Description

* Syntax role modifiers select which namespace a name comes from:
   * `data` for ((AlgebraicDataType))
   * `syntax` for context-free ((SyntaxDefinition))
   * `lexical` for lexical ((SyntaxDefinition))
   * `layout` for layout ((SyntaxDefinition))
   * `keyword` for keyword ((SyntaxDefinition))
* Parametrized (open) syntax role modifiers bind and instantiate the _name_ of syntax types
   * In a ((Rascal-Pattern)) `data[&T]` matches only with (((AlgebraicDataType))s and binds their name
   * In a return type of a ((Declarations-Function)) `syntax[&T]` instantiates a syntax type with the bound name


#### Examples

Name disambiguation is illustrated below:

```rascal-shell
data E = e();
syntax E = "e";
// now we use the ambiguous name `E` with a modifier to make sure we pick the right one:
data[E] example1 = e();
// even reified types can be specialized towards the indicated type name:
syntax[E] example2 = parse(#syntax[E], "e");
```

This illustrates __name preserving__ functions:
```rascal
data[&T] implode(syntax[&T] tree);
syntax[&T] explode(data[&T] ast);
```

#### Benefits

* syntax role modifiers allow users to disambiguate references to type names which are the same but come from a different declaration.
* syntax role modifiers allow users to specific "name preserving" transformations (i.e. from ((AlgebraicDataType)) to ((SyntaxDefinition)) and back)

#### Pitfalls

* Functions like `&T f(data[&T] _)` will trigger an error message because the role of the return type is unknown.
