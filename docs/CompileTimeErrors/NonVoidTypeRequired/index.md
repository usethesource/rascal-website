---
title: NonVoidTypeRequired
---

#### Synopsis

A type other than `void` is needed.

#### Syntax

#### Types

#### Function
       
#### Usage

#### Description

This error is generated when a value is needed, so an expression of any type but the `void` type.

The most prominent examples are splicing for 
[list](/docs/Rascal/Expressions/Values/List/Splice) and [set](/docs/Rascal/Expressions/Values/Set/Splice).

Remedy: replace the expression of type `void` by an expression that computes a value.

#### Examples

First define a dummy function that returns void:

```rascal-shell
rascal>void dummy() { return; }
void (): function(|prompt:///|(0,24,<1,0>,<1,24>))
rascal>[1, *dummy(), 2]
|prompt:///|(4,8,<1,4>,<1,12>): Non-void type required
Advice: |http://tutor.rascal-mpl.org/Errors/Static/NonVoidTypeRequired/NonVoidTypeRequired.html|
ok
rascal>{1, *dummy(), 2}
|prompt:///|(5,7,<1,5>,<1,12>): Non-void type required
Advice: |http://tutor.rascal-mpl.org/Errors/Static/NonVoidTypeRequired/NonVoidTypeRequired.html|
ok
```
A solution could be:


```rascal-shell
rascal>int dummy() { return 17; }
int (): function(|prompt:///|(0,26,<1,0>,<1,26>))
rascal>[1, *dummy(), 2]
list[int]: [1,17,2]
rascal>{1, *dummy(), 2}
set[int]: {1,2,17}
```

#### Benefits


