---
title: UnguardedReturn
---

#### Synopsis

A return statement occurs outside a function body.

#### Description

A [return](../../Rascal/Statements/Return/) statement is used to return a value from a function.
It is an error to use it outside a function body.

#### Examples


```rascal-shell 
rascal>int triple(int n) { return 3 * n; }
int (int): function(|prompt:///|(0,35,<1,0>,<1,35>))
rascal>triple(5);
int: 15
```
Using return outside a function body gives an error:

```rascal-shell ,error
rascal>return 3;
ok
```

