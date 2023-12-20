---
title: NonWellformedType
---

#### Synopsis

A type in a declaration is not wellformed.

#### Syntax

#### Types

#### Function
       
#### Usage

#### Description

Types should respect some structural rules and this error signals a violation of these rules.
Examples of violations are:

*  a non-parametric type has parameters.
*  a parametric type has an incorrect number of parameters.

Remedy: correct the type.

#### Examples

```rascal-shell,error
bool[int] x;
list[int,str] l;
map[str, int, int]  m;
set[int,str] s;
```

* `bool` does not have type parameters
* `list` only has one element type. Perhaps you needed a `lrel[int, str]`?
* `map` has the key and the value type parameters, but not more
* `set` has only one element type. Perhaps you needed a `rel[int, str]`?
#### Benefits

#### Pitfalls

