---
title: Boolean Negation
keywords:
  - "!"

---

#### Synopsis

The _not_ operator on Boolean values.

#### Syntax

`! Exp`

#### Types

//

| `Exp` | `! Exp`  |
| --- | --- |
| `bool`   | `bool`     |


#### Description

The _not_ operator on Boolean values defined as follows:

| `Exp`  | `! Exp`  |
| --- | --- |
| `true`   | `false`    |
| `false`  | `true`     |


#### Examples


```rascal-shell 
rascal>!true;
bool: false
```


