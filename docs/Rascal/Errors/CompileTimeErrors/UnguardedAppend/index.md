---
title: UnguardedAppend
---

#### Synopsis

Append statement occurs outside a for/while statement.

#### Description

The [append](../../../../Rascal/Statements/Append/index.md) statement can be used inside a loop statement.
This error is generated when append occurs outside a loop.

Remedy: use List concatenation to append an element to a list outside a loop.

#### Examples

This is the typical use of `append`:

```rascal-shell 
rascal>for(int i <- [1..5]) append i*i;
list[int]: [1,4,9,16]
```
Using append outside a loop gives an error:

```rascal-shell ,error
rascal>append 3;
|prompt:///|(0,9,<1,0>,<1,9>): append statement without enclosing loop
Advice: |http://tutor.rascal-mpl.org/Errors/Static/UnguardedAppend/UnguardedAppend.html|
ok
```



