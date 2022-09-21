---
title: Algebraic Data Type
keywords:
  - data

---


#### Synopsis

Define a user-defined type (Algebraic Data Type).

#### Syntax

#### Types

#### Function

#### Description

In ordinary programming languages record types or classes exist to introduce a new type name for a collection of related, 
named, values and to provide access to the elements of such a collection through their name. 

In Rascal, algebraic data types provide this facility. They have to be declared, and
then values can be declared using calls to the declared constructor functions,
see [Constructor](/docs//Rascal/Expressions/Values/Constructor).

#### Examples

The following data declaration defines the datatype `Bool` that contains various constants (`tt()` and `ff()`
and constructor functions `conj` and `disj`.

```rascal-shell
rascal>data Bool = tt() | ff() | conj(Bool L, Bool R)  | disj(Bool L, Bool R);
ok
```
terms of type `Bool` can be constructed using the defined constructors:

```rascal-shell
rascal>conj(tt(),ff());
Bool: conj(
  tt(),
  ff())
```

#### Benefits


