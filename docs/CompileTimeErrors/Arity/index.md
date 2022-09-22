---
title: Arity
---

#### Synopsis

The number of arguments of an operator differ from what is required.

#### Description

Various operators like [composition](../../Rascal/Expressions/Values/Relation/Composition), 
[transitive closure](../../Rascal/Expressions/Values/Relation/TransitiveClosure) and 
[reflexive transitive closure](../../Rascal/Expressions/Values/Relation/ReflexiveTransitiveClosure) 
expect binary relations or tuples as arguments.

#### Examples

This composition is correct:

```rascal-shell
rascal>{<1,10>, <2,20>} o {<10,100>, <20, 200>};
rel[int,int]: {
  <1,100>,
  <2,200>
}
```
This is not, since the first argument has arity 3:

```rascal-shell
rascal>{<1,5,10>, <2,6,20>} o {<10,100>, <20, 200>};
ok
```

These transitive closures are correct:

```rascal-shell
rascal>{<1,2>, <2,3>,<4,5>}+
rel[int,int]: {
  <2,3>,
  <4,5>,
  <1,3>,
  <1,2>
}
rascal>{<1,2>, <2,3>,<4,5>}*
rel[int,int]: {
  <5,5>,
  <3,3>,
  <1,1>,
  <1,3>,
  <1,2>,
  <2,3>,
  <2,2>,
  <4,5>,
  <4,4>
}
```
But these are incorrect:

```rascal-shell
rascal>{<1,2,3>, <2,3,4>,<4,5,6>}+
ok
rascal>{<1,2,3>, <2,3,4>,<4,5,6>}*
|prompt:///|(23,1,<1,23>,<1,24>): Expected arity : 2, unequal to 3
Advice: |http://tutor.rascal-mpl.org/Errors/Static/Arity/Arity.html|
ok
```

