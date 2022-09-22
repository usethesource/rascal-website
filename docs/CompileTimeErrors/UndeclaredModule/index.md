---
title: UndeclaredModule
---

#### Synopsis

Reference to a non-existing module.

#### Description

This can, for example, occur in a qualified name.

Remedies:

*  Check that the offending module name is spelled correctly.
*  Create a module of that name.

#### Examples

Referring to the non-existing module `M` gives errors:

```rascal-shell
rascal>M::x = 3;
ok
rascal>M::f(3);
|prompt:///|(0,4,<1,0>,<1,4>): Undeclared module: M
Advice: |http://tutor.rascal-mpl.org/Errors/Static/UndeclaredModule/UndeclaredModule.html|
ok
```


