---
title: Boolean IfDefinedElse
keywords:
  - "?"

---

#### Synopsis

Test whether expression has a defined value, otherwise provide alternative.

#### Syntax

`Exp<sub>1</sub> ? Exp<sub>2</sub>`

#### Types

//

| `Exp<sub>1</sub>` | `Exp<sub>2</sub>` | `Exp<sub>1</sub> ? Exp<sub>2</sub>` |
| --- | --- | --- |
| `T<sub>1</sub>`   | `T<sub>2</sub>`   |  `T<sub>2</sub> <: T<sub>1</sub>`  |


#### Description

If no exception is generated during the evaluation of _Exp_<sub>1</sub>, the result of `Exp<sub>1</sub> ? Exp<sub>2</sub>` is the value of _Exp_<sub>1</sub>.
Otherwise, it is the value of _Exp_<sub>2</sub>.

Also see [Is defined](../../../../../Rascal/Expressions/Values/Boolean/IsDefined) and [Assignment](../../../../../Rascal/Statements/Assignment).

#### Examples

This test can, for instance, be used to handle the case that a certain key value is not in a map:

```rascal-shell
rascal>T = ("a" : 1, "b" : 2);
map[str, int]: ("a":1,"b":2)
```
Trying to access the key `"c"` will result in an error:

```rascal-shell
rascal>T["c"];
|prompt:///|(2,3,<1,2>,<1,5>): NoSuchKey("c")
	at $shell$(|prompt:///|(0,7,<1,0>,<1,7>))
ok
```
Using the `?` operator, we can write:

```rascal-shell
rascal>T["c"] ? 0;
int: 0
```
This is very useful, if we want to modify the associated value, but are not sure whether it exists:

```rascal-shell
rascal>T["c"] ? 0 += 1;
map[str, int]: ("a":1,"b":2,"c":1)
```
Another example using a list:

```rascal-shell
rascal>L = [10, 20, 30];
list[int]: [10,20,30]
rascal>L[4] ? 0;
int: 0
```
It is, however, not possible to assign to index positions outside the list.


