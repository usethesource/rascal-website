---
title: Tuple Pattern
keywords:
  - "<"
  - ">"

---

#### Synopsis

Tuple in abstract pattern.

#### Description

A tuple pattern matches a tuple value, provided that _Pat_<sub>1</sub>, _Pat_<sub>2</sub>, ..., _Pat_~n~  match the elements of that tuple in order.

#### Examples


```rascal-shell
rascal>import IO;
ok
rascal>if(<A, B, C> := <13, false, "abc">)
>>>>>>>   println("A = <A>, B = <B>, C = <C>");
   println("A = <A>, B = <B>, C = <C>");
A = 13, B = false, C = abc
ok
```


