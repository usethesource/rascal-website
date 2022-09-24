---
title: RedeclaredVariable
---

#### Synopsis

A variable with the same name has been declared in the same scope.

#### Description

Remedy: rename one of the variables.

#### Examples

```rascal-shell ,error
rascal>int n = 3;
int: 3
rascal>int n = 4;
|prompt:///|(4,5,<1,4>,<1,9>): Redeclared variable: n
Advice: |http://tutor.rascal-mpl.org/Errors/Static/RedeclaredVariable/RedeclaredVariable.html|
ok
```

