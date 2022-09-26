---
title: Boolean Or
keywords:
  - "||"

---

#### Synopsis

The _or_ operator on Boolean values.

#### Syntax

`Exp₁ || Exp₂`

#### Types

//

| `Exp₁` | `Exp₂`  | `Exp₁ \|\| Exp₂`  |
| --- | --- | --- | --- | --- |
| `bool`    | `bool`     | `bool`                |


#### Description

The _or_ operator on Boolean values defined as follows:

| `Exp₁` | `Exp₂`  | `Exp₁ \|\| Exp₂`  |
| --- | --- | --- | --- | --- |
| `true`    | `true`     | `true`                |
| `true`    | `false`    | `true`                |
| `false`   | `true`     | `true`                |
| `false`   | `false`    | `false`               |


Boolean operators have _short circuit_ semantics:  only those operands are evaluated that are needed to compute the result. In the case of the `||` operator, the result is `true` if `Exp₁` evaluates to `true`, otherwise `Exp₂` is evaluated to determine the result.

Note that `||` will backtrack over its argument expressions until it can find an evaluation that is `true`, unless there is none.

Variable assignments as a result of matching or generator expressions under a `||` are visible outside the context of the operator, but only if the context is conditional, such as an if-then-else or a for loop. Note that it is statically required that both sides of an `||` introduce the same variable names of the same type.

#### Examples


```rascal-shell 
rascal>import IO;
ok
rascal>false || true;
bool: true
rascal>(i <- [1,2,3,4] && i % 2 == 0) || false
bool: true
rascal>for ((i <- [1,2,3,4] && i % 2 == 0) || false) 
>>>>>>>  println("true for <i>");
  println("true for <i>");
true for 2
true for 4
list[void]: []
```


