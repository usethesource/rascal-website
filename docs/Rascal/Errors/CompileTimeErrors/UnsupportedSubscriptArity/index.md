---
title: UnsupportedSubscriptArity
---

#### Synopsis

Wrong number of subscripts is used. 

#### Description

Subscription is available for values of various types including: 
[string](../../../../Rascal/Expressions/Values/String/Subscription/index.md), 
[node](../../../../Rascal/Expressions/Values/Node/Subscription/index.md),
[list](../../../../Rascal/Expressions/Values/List/Subscription/index.md), 
[map](../../../../Rascal/Expressions/Values/Map/Subscription/index.md), 
[tuple](../../../../Rascal/Expressions/Values/Tuple/Subscription/index.md) and 
[relation](../../../../Rascal/Expressions/Values/Relation/Subscription/index.md).
This error is generated when subscription is applied to a value that does support subscription but not the number
of indices that are used.

Remedies: correct the number of indices used in the subscription.

#### Examples


```rascal-shell ,error
rascal>[1,2,3][2,1];
|prompt:///|(10,1,<1,10>,<1,11>): Unsupported subscript arity of 2 on type list[int]
Advice: |http://tutor.rascal-mpl.org/Errors/Static/UnsupportedSubscriptArity/UnsupportedSubscriptArity.html|
ok
rascal>("a":1, "b":2, "c":3)["c", "d"];
|prompt:///|(27,3,<1,27>,<1,30>): Unsupported subscript arity of 2 on type map[str, int]
Advice: |http://tutor.rascal-mpl.org/Errors/Static/UnsupportedSubscriptArity/UnsupportedSubscriptArity.html|
ok
rascal><1, 2, 3>[5,6];
|prompt:///|(12,1,<1,12>,<1,13>): Unsupported subscript arity of 2 on type tuple[int,int,int]
Advice: |http://tutor.rascal-mpl.org/Errors/Static/UnsupportedSubscriptArity/UnsupportedSubscriptArity.html|
ok
```


