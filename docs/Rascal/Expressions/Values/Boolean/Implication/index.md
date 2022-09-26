---
title: Boolean Implication
keywords:
  - "==>"

---

#### Synopsis

The _implication_ operator on Boolean values.

#### Syntax

`Exp₁ ==> Exp₂`

#### Types

//

| `Exp₁` | `Exp₂`  | `Exp₁ ==> Exp₂`  |
| --- | --- | --- |
| `bool`       | `bool`         | `bool`  |


#### Description

The _implication_ operator on Boolean values defined as follows:

| `Exp₁` | `Exp₂`  | `Exp₁ ==> Exp₂`  |
| --- | --- | --- |
| `true`       | `true`         | `true`  |
| `true`       | `false`         | `false`  |
| `false`       | `true`         | `true`  |
| `false`       | `false`         | `true`  |


Boolean operators have _short circuit_ semantics:  only those operands are evaluated that are needed to compute the result. In the case of the `==>` operator, the result is `true` if `Exp₁` evaluates to `false`, otherwise `Exp₂` is evaluated to determine the result.

#### Examples


```rascal-shell 
rascal>false ==> true;
bool: true
```



