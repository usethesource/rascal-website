---
title: If
keywords:
  - if
  - else

---

#### Synopsis

Conditional statement.

#### Syntax

*  `if ( Exp ) Statement;`
*  `if ( Exp ) Statement<sub>1</sub> else Statement<sub>2</sub>;`

#### Types

| `Exp` | `if ( Exp ) Statement;`  |
| --- | --- |
| `bool`  |  `void`                      |



| `Exp` | `Statement<sub>1</sub>` | `Statement<sub>2</sub>` | `if ( Exp ) Statement<sub>1</sub> else Statement<sub>2</sub>;`  |
| --- | --- | --- | --- |
| `bool`  |  T<sub>1</sub>        | T<sub>2</sub>         | `lub(T<sub>1</sub>, T<sub>2</sub>)`                               |


#### Function

#### Description

The test _Exp_ is evaluated and its outcome determines the statement to be executed: 
_Statement_<sub>1</sub> if _Exp_ yields `true` and _Statement_<sub>2</sub> otherwise. 
The value of an if-then statement is equal to _Statement_ when its test is true. Otherwise it is void.
The value of an if-then-else statement is the value of the statement that was executed.

#### Examples


```rascal-shell
rascal>if( 3 > 2 ) 30; else 40;
int: 30
rascal>x = if( 3 > 2 ) 30; else 40;
int: 30
rascal>if( 3 > 2 ) 30;
int: 30
```
An if-then statement yields `void`  when its test is false
(demonstrated by the __ok__ that is printed by the Rascal system):

```rascal-shell
rascal>if( 2 > 3 ) 30;
ok
```

#### Benefits


