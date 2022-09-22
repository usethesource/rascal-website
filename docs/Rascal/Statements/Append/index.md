---
title: Append
keywords:
  - append

---

#### Synopsis

Append an element to the list value produced by various loop statements.

#### Syntax

`append Exp`

#### Description

An append statement may only occur in the body of a [While](../../../Rascal/Statements/While), [Do](../../../Rascal/Statements/Do) or [For](../../../Rascal/Statements/For) statement. 
It appends the value of _Exp_ to the resulting list value of the loop construct in which it occurs.

#### Examples


```rascal-shell
rascal>for(int i <- [1..5]) append i*i;
list[int]: [1,4,9,16]
rascal>L = for(int i <- [1..5]) append i*i;
list[int]: [1,4,9,16]
```


