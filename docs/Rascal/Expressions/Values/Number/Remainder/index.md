---
title: Number Remainder
keywords:
  - "%"

---

#### Synopsis

Remainder of two integer values.

#### Syntax

`Exp₁ % Exp₂`

#### Types


| `Exp₁`  |  `Exp₂` | `Exp₁ % Exp₂`  |
| --- | --- | --- |
| `int`      |  `int`     | `int`                |


#### Description

Yields the remainder when dividing the of _Exp_₁ by the value of _Exp_₂.

#### Examples


```rascal-shell 
rascal>12 % 5
int: 2
rascal>12 % 6
int: 0
```

#### Pitfalls

Remainder is only defined on integers:

```rascal-shell ,error
rascal>13.5 % 6
|prompt:///|(7,1,<1,7>,<1,8>): remainder not supported on real and int
Advice: |http://tutor.rascal-mpl.org/Errors/Static/UnsupportedOperation/UnsupportedOperation.html|
ok
```


