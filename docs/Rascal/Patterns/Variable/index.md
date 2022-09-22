---
title: Variable Pattern
---

#### Synopsis

Variable in abstract pattern.

#### Syntax

_Var_

#### Description

A variable pattern can act in two roles:

* If _Var_ has already a defined value then it matches with that value.

*  If _Var_ has not been defined before (or it has been declared but not initialized) then it matches any value. 
    That value is assigned to _Var_. The scope of this variable is the outermost expression in which the pattern occurs
or the enclosing [./If](../../../Rascal/Statements/If), [While](../../../Rascal/Statements/While), or [Do](../../../Rascal/Statements/Do) if the pattern occurs in the test expression of those statements.

#### Examples

Initialize variable `N`

```rascal-shell
rascal>N = 10;
int: 10
```
and use `N` in a pattern; its value is used as value to match with:

```rascal-shell
rascal>N := 10;
bool: true
rascal>N := 20;
bool: false
```
Use a non-existing variable in a pattern, it is bound when the match succeeds:

```rascal-shell
rascal>import IO;
ok
rascal>if(M := 10)
>>>>>>>   println("Match succeeded, M == <M>");
   println("Match succeeded, M == <M>");
Match succeeded, M == 10
ok
```


