---
title: Boolean Equivalence
keywords:
  - "<==>"

---

#### Synopsis

The _equivalence_ operator on Boolean values.

#### Syntax

`Exp<sub>1</sub> <==> Exp<sub>2</sub>`

#### Types

//

| `Exp<sub>1</sub>` | `Exp<sub>2</sub>`  | `Exp<sub>1</sub> <==> Exp<sub>2</sub>`  |
| --- | --- | --- |
| `bool`       | `bool`         | `bool`  |


#### Description

The _equivalence_ operator on Boolean values defined as follows:

| `Exp<sub>1</sub>` | `Exp<sub>2</sub>`  | `Exp<sub>1</sub> <==> Exp<sub>2</sub>`  |
| --- | --- | --- |
| `true`       | `true`         | `true`  |
| `true`       | `false`         | `false`  |
| `false`       | `true`         | `false`  |
| `false`       | `false`         | `true`  |


Boolean operators have _short circuit_ semantics:  only those operands are evaluated that are needed to compute the result. However, in the case of the `<==>` operator both operands have to be evaluated to determine the result.

Note that the `<==>` operator backtracks over its arguments until it finds an evaluation that is `true`, unless there is none. Variable bindings that are the effect of matching  operators in its arguments are not visible outside the scope of the `<==>`.

#### Examples


```rascal-shell
rascal>import IO;
ok
rascal>false <==> false;
bool: true
rascal>false <==> true;
bool: false
```

NOTE: We should add a more meaningful example of backtracking over <==> than this old one:
(i <- [1,2]) <==> (j <- [1,2,3]);
for ((i <- [1,2]) <==> (j <- [1,2,3]))
  println("true!");
(i <- [1,2] && (i % 2 == 0)) <==> (j <- [1,2,3] && (j % 3 == 0))
for ((i <- [1,2] && (i % 2 == 0)) <==> (j <- [1,2,3] && (j % 3 == 0))) 
  println("true!");


