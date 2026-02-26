---
title: Node FieldSelection
keywords:
  - "."
  - getter
  - get

---

#### Synopsis

Select a field from a node by its field name.

#### Syntax

`Exp . Name`

#### Types


| `Exp`                                 | `Name` | `Exp . Name` |
| --- | --- | --- |
|`node` |  `L~i~` | `T~i~`         |


#### Function

#### Description

Field selection applies to nodes with keyword fields.
_Exp_ should evaluate to a node with keyword field _Name_. 
Then field selection returns the value of that field.
_Name_ stands for itself and is not evaluated.
The static type of `Exp.Name` is always `value`.

#### Examples

```rascal-shell
n = "myNode"(val="42", age=84);
n.val
n.age
```

When a field is not present, an exception is thrown:
```rascal-shell,errors
n = "myNode"(val="42", age=84);
n.height
```

#### Benefits

* untyped `node` values can be used to easily import external structured (e.g with fields) data sources without first having to validate them.
* ((FieldSelection)) also works for [Constructors]((Constructor-FieldSelection)), [Relations]((Relation-FieldSelection)) and [Tuples]((Tuple-FieldSelection)), and the builtin fields of ((Location)) and ((DateTime)). All with similar syntax and semantics. 
 
#### Pitfalls

* the static return type of any keyword field on `node` is always `value`. If you need more accurate types, consider defining an ((AlgebraicDatatype)) and add keyword parameters to ((Constructor))s.
