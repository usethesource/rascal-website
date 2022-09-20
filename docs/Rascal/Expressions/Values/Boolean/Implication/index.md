---
title: Boolean Implication
keywords:
  - "==>"

---

#### Synopsis

The _implication_ operator on Boolean values.

#### Syntax

`Exp<sub>1</sub> ==> Exp<sub>2</sub>`

#### Types

//

| `Exp<sub>1</sub>` | `Exp<sub>2</sub>`  | `Exp<sub>1</sub> ==> Exp<sub>2</sub>`  |
| --- | --- | --- |
| `bool`       | `bool`         | `bool`  |


#### Function

#### Description

The _implication_ operator on Boolean values defined as follows:

| `Exp<sub>1</sub>` | `Exp<sub>2</sub>`  | `Exp<sub>1</sub> ==> Exp<sub>2</sub>`  |
| --- | --- | --- |
| `true`       | `true`         | `true`  |
| `true`       | `false`         | `false`  |
| `false`       | `true`         | `true`  |
| `false`       | `false`         | `true`  |


Boolean operators have _short circuit_ semantics:  only those operands are evaluated that are needed to compute the result. In the case of the `==>` operator, the result is `true` if `Exp<sub>1</sub>` evaluates to `false`, otherwise `Exp<sub>2</sub>` is evaluated to determine the result.

#### Examples


```rascal-shell
rascal>false ==> true;
bool: true
```


#### Benefits


