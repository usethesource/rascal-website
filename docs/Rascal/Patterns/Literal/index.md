---
title: Literal Pattern
---

#### Synopsis

Literal in abstract pattern.

#### Syntax

#### Types

#### Function

#### Description

A literal of one of the basic types [Boolean](/docs/Rascal/Expressions/Values/Boolean), [Integer](/docs/Rascal/Expressions/Values/Integer), [Real](/docs/Rascal/Expressions/Values/Real), [Number](/docs/Rascal/Expressions/Values/Number), [String](/docs/Rascal/Expressions/Values/String), [Location](/docs/Rascal/Expressions/Values/Location), or [Date time](/docs/Rascal/Expressions/Values/DateTime)
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

```rascal-shell
rascal>123 := "abc";
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


#### Benefits


