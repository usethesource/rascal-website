---
title: Map Comprehension
keywords:
  - "("
  - "|"
  - ")"

---

#### Synopsis

A map comprehension generates a map value.

#### Syntax

`( Exp<sub>1</sub> : Exp<sub>2</sub> | Gen<sub>1</sub>, Gen<sub>2</sub>, ... )`

#### Types


| `Exp<sub>1</sub>` | `Exp<sub>2</sub>` | `( Exp<sub>1</sub> : Exp<sub>2</sub> \| Gen<sub>1</sub>, Gen<sub>2</sub>, ... )`  |
| --- | --- | --- | --- |
| `T<sub>1</sub>`   | `T<sub>2</sub>`   | `map[T<sub>1</sub>, T<sub>2</sub>]`                               |


#### Function

#### Description

A map comprehension consists of a number of two contributing expressions _Exp_<sub>1</sub> (for key values), 
and _Exp_<sub>2</sub> (the values associated with those key values) and a number of
generators _Gen_<sub>1</sub>, _Gen_<sub>2</sub>, _Gen_<sub>3</sub>, ... that are evaluated as described in [Comprehensions](/docs//Rascal/Expressions/Comprehensions).

#### Examples


```rascal-shell
```
Introduce a map of `fruits`:

```rascal-shell
rascal>fruits = ("pear" : 1, "apple" : 3, "banana" : 0, "berry" : 25, "orange": 35);
map[str, int]: ("banana":0,"pear":1,"orange":35,"berry":25,"apple":3)
rascal>import String;
ok
```
Use a map comprehension to filter fruits with a name of at most 5 characters:

```rascal-shell
rascal>(fruit : fruits[fruit] | fruit <- fruits, size(fruit) <= 5);
map[str, int]: ("pear":1,"berry":25,"apple":3)
```
Use a map comprehension to filter fruits with an associated value larger than 10:

```rascal-shell
rascal>(fruit : fruits[fruit] | fruit <- fruits, fruits[fruit] > 10);
map[str, int]: ("orange":35,"berry":25)
```

#### Benefits


