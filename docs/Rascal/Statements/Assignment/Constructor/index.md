---
title: Constructor
keywords:
  - "="

---

#### Synopsis

Assign to constructor.

#### Description

First the value _Exp_ is determined and should be a data value of the form `_Name_(_V_~1~, _V_~2~, ..., _V_~n~). 
Next the assignments `Assignable~i~ = V~i~` are performed for 1 \<= i \<= n.

#### Examples


```rascal-shell 
rascal>data FREQ = wf(str word, int freq);
ok
rascal>W = wf("rascal", 1000);
FREQ: wf("rascal",1000)
rascal>wf(S, I) = W;
FREQ: wf("rascal",1000)
rascal>S;
str: "rascal"
rascal>I;
int: 1000
```


