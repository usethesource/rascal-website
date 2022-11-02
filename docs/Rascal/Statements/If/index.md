---
title: If
keywords:
  - if
  - else

---

#### Synopsis

Conditional statement.

#### Syntax

```rascal
if (Exp)
  Statement

if (Exp) {
  Statements
}

if (Exp) 
  Statement₁ 
else 
  Statement₂

if (Exp) {
  Statements₁
}
else {
  Statements₂
}
```

#### Types

| `Exp` | `if ( Exp ) Statement;`  |
| --- | --- |
| `bool`  |  `void`                      |



| `Exp` | `Statement₁` | `Statement₂` | `if ( Exp ) Statement₁ else Statement₂;`  |
| --- | --- | --- | --- |
| `bool`  |  T₁        | T₂         | `lub(T₁, T₂)`                               |


#### Description

The test _Exp_ is evaluated and its outcome determines the statement to be executed: 
_Statement_₁ if _Exp_ yields `true` and _Statement_₂ otherwise. 
The value of an if-then statement is equal to _Statement_ when its test is true. Otherwise it is void.
The value of an if-then-else statement is the value of the statement that was executed.

#### Examples


```rascal-shell 
rascal>if (3 > 2) {
>>>>>>>  30; 
>>>>>>>} else {
>>>>>>>  40;
>>>>>>>}
int: 30
rascal>x = if (3 > 2) {
>>>>>>>  30; 
>>>>>>>} else {
>>>>>>>  40;
>>>>>>>}
int: 30
rascal>if (3 > 2) 
>>>>>>>  30;
int: 30
```
An if-then statement yields `void`  when its test is false
(demonstrated by the __ok__ that is printed by the Rascal system):

```rascal-shell ,continue
rascal>if( 2 > 3 ) 
>>>>>>>  30;
ok
```

Here we use [Fail](../../../Rascal/Statements/Fail/index.md) to backtrack over the possible matches of the `if`:

```rascal-shell 
rascal>import IO;
ok
rascal>Label: if ([*_, 1, *_] := [1,2,1]) {
>>>>>>>  println("yep"); 
>>>>>>>  fail Label;
>>>>>>>}
yep
yep
ok
```

#### Benefits

* backtracking is a powerful and easy way to search for solutions
* nested if-then-else's are often not necessary with the `,` notation

#### Pitfalls

* backtracking does not _undo_ side-effects like `println`

