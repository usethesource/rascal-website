---
title: UndeclaredType
---

#### Synopsis

Use of a type that has not been declared.

#### Description

A type has to be declared before it can be used.
This error is generated when an undeclared type is used.

Remedies:

*  Rename the type name.
*  Declare the type.
*  Import a module that declares the type. (Did you import all library modules?)

#### Examples

Using the undeclared type `myint` gives an error:

```rascal-shell ,error
rascal>myint incr(myint n) = n + 1;
ok
```
The solkution is to first declares `myint` (here as an alias for `int`):

```rascal-shell ,error
rascal>alias myint = int;
ok
rascal>myint incr(myint n) = n + 1;
int (int): function(|prompt:///|(0,28,<1,0>,<1,28>))
rascal>incr(3);
int: 4
```

