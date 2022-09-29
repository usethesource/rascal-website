---
title: Field
keywords:
  - "."

---

#### Synopsis

Assign to a field of a tuple, relation or datatype.

#### Description

The value `V` of _Assignable_ is determined and should be of a type that has a field _Name_.
The value of that field is replaced in _V_ by the value of _Exp_ resulting in a new value _V_' that is assigned to _Assignable_.

#### Examples


```rascal-shell 
rascal>data FREQ = wf(str word, int freq);
ok
rascal>W = wf("rascal", 1000);
FREQ: wf("rascal",1000)
rascal>W.freq = 100000;
FREQ: wf("rascal",100000)
```

