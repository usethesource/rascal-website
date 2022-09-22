---
title: Tuple Subscription
keywords:
  - "["
  - "]"

---

#### Synopsis

Retrieve a tuple field by its index position.

#### Syntax

`Exp<sub>1</sub> [ Exp<sub>2</sub> ]`

#### Description

Subscription retrieves the tuple element with index _Exp_<sub>2</sub> from the tuple value of _Exp_<sub>1</sub>.

#### Examples

Introduce a tuple, assign it to T and retrieve the element with index 0:

```rascal-shell
rascal>T = <"mon", 1>;
tuple[str,int]: <"mon",1>
rascal>T[0];
str: "mon"
```


