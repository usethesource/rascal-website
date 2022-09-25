---
title: IllegalQualifiedDeclaration
---

#### Synopsis

Qualified names cannot be declared.

#### Description

When the same name is declared in different modules, a qualified name can be used to refer to a specific version of that name.
This error is generated when a qualified name is used in a declaration.

Remedy: remove the qualification.

#### Examples

Using a qualified name gives an error:

```rascal-shell ,error
rascal>data M::D = d();
|prompt:///|(5,4,<1,5>,<1,9>): Declaration of qualified names is not allowed
Advice: |http://tutor.rascal-mpl.org/Errors/Static/IllegalQualifiedDeclaration/IllegalQualifiedDeclaration.html|
ok
```
Without the qualification, this is correct:

```rascal-shell ,continue,error
rascal>data D = d();
ok
```


