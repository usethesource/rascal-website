---
title: Multiple
keywords:
  - "<"
  - ">"
  - "="

---

#### Synopsis

Assign to multiple assignables.

#### Description

First the value _Exp_ is determined and should be a tuple of the form `< V₁, V₂, ..., Vₙ >`.
Next the assignments `Assignableᵢ = Vᵢ` are performed for 1 \<= i \<= n.

#### Examples


```rascal-shell 
rascal><A, B, C> = <"abc", 2.5, [1,2,3]>;
tuple[str,real,list[int]]: <"abc",2.5,[1,2,3]>
rascal>A;
str: "abc"
rascal>B;
real: 2.5
rascal>C;
list[int]: [1,2,3]
```


