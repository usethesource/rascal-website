---
title: Tuple Subscription
keywords:
  - "["
  - "]"

---

#### Synopsis

Retrieve a tuple field by its index position.

#### Syntax

`Exp₁ [ Exp₂ ]`

#### Description

Subscription retrieves the tuple element with index _Exp_₂ from the tuple value of _Exp_₁.

#### Examples

Introduce a tuple, assign it to T and retrieve the element with index 0:

```rascal-shell 
rascal>T = <"mon", 1>;
tuple[str,int]: <"mon",1>
rascal>T[0];
str: "mon"
```


