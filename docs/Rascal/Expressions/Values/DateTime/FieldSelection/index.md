---
title: DateTime Field Selection
keywords:
  - "."

---

#### Synopsis

Select a field from a datetime value.

#### Syntax

`Exp . Name`

#### Types

//

| `Exp`      | `Name` | `Exp . Name`  |
| --- | --- | --- |
| `datetime`   |          | depends on field  |


#### Description

Field selection applies to `datetime` values. 
_Name_ should be one of the supported fields listed in [DateTime](../../../../../Rascal/Expressions/Values/DateTime/index.md) and returns the value of that field. 
Name stands for itself and is not evaluated.


