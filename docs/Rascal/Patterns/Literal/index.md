---
title: Literal Pattern
---

#### Synopsis

Literal in abstract pattern.

#### Syntax

```rascal
"string"
123
1.0
|http://www.rascal-mpl.org|
```

#### Description

A literal of one of the basic types [Boolean](../../../Rascal/Expressions/Values/Boolean/index.md), [Integer](../../../Rascal/Expressions/Values/Integer/index.md), [Real](../../../Rascal/Expressions/Values/Real/index.md), [Number](../../../Rascal/Expressions/Values/Number/index.md), [String](../../../Rascal/Expressions/Values/String/index.md), [Location](../../../Rascal/Expressions/Values/Location/index.md), or [DateTime](../../../Rascal/Expressions/Values/DateTime/index.md)
can be used as abstract pattern.
A literal pattern matches with a value that is identical to the literal.

#### Examples

A literal pattern matches with a value that is equal to it:

```rascal-shell 
rascal>123 := 123
bool: true
rascal>"abc" := "abc"
bool: true
```
A literal pattern does not match with a value that is not equal to it:

```rascal-shell 
rascal>123 := 456
bool: false
rascal>"abc" := "def"
bool: false
```
If the type of the literal pattern is *incomparable* to the subject's type, a static type error is produced
to announce that the match is guaranteed to fail:

```rascal-shell ,error
rascal>123 := "abc";
|prompt:///|(7,5,<1,7>,<1,12>): Expected int, but got str
Advice: |http://tutor.rascal-mpl.org/Errors/Static/UnexpectedType/UnexpectedType.html|
ok
```
However, a literal pattern can be used to filter among other values:

```rascal-shell 
rascal>value x = "abc";
value: "abc"
rascal>123 := x;
bool: false
rascal>x = 123;
value: 123
rascal>123 := x;
bool: true
```



