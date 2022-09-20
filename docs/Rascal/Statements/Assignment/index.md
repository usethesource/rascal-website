---
title: Assignment
keywords:
  - "="
  - "+="
  - -=
  - "*="
  - "/="
  - "?="
  - "["
  - ".."
  - "]"
  - "."
  - "?"
  - "@"

---

#### Synopsis

Assign a value to a variable or more complex data structure.

#### Syntax

`Assignable AssignmentOp Exp`

where _AssignmentOp_ may be one of `=`, `+=`, `-=`, `*=`, `/=`, or `?=`.

An _Assignable_ is one of the following:

*   `Var`
*   `Assignable [ Exp ]`
*   `Assignable [ Exp .. Exp ]`
*   `Assignable [ Exp, Exp .. Exp ]`
*   `Assignable . Name` 
*   `< Assignable, Assignable, ..., Assignable >`
*   `Assignable ? Exp` 
*   `Assignable @ Name`
*   `Name ( Assignable, Assignable, ... )`

#### Types

#### Function

#### Description

The purpose of an assignment is to assign a new value to a simple variable or to an element of a more complex data structure. 

The standard assignment operator is `=`. 
The other assignment operators can be expressed as abbreviations for the standard assignment operator.

| Assignment Operator             | Equivalent to                           |
| --- | --- |
| `Assignable += Exp`         | `Assignable = Assignable + Exp`   |
| `Assignable -= Exp`         | `Assignable = Assignable - Exp`   |
| `Assignable *= Exp`         | `Assignable = Assignable * Exp`   |
| `Assignable /= Exp`         | `Assignable = Assignable / Exp`   |
| `Assignable &= Exp`         | `Assignable = Assignable & Exp`   |
| `Assignable ?= Exp`         | `Assignable = Assignable ? Exp`   |




An assignable is either a single variable, (the base variable), optionally followed by subscriptions, slices or field selections.
The assignment statement always results in assigning a completely new value to the base variable. 
We distinguish the following forms of assignment:
* ((Rascal:Statements/Assignment))
* ((Rascal:Statements/Assignment/Annotation))
* ((Rascal:Statements/Assignment/Constructor))
* ((Rascal:Statements/Assignment/Field))
* ((Rascal:Statements/Assignment/IsDefined))
* ((Rascal:Statements/Assignment/Multiple))
* ((Rascal:Statements/Assignment/Slice))
* ((Rascal:Statements/Assignment/Subscription))
* ((Rascal:Statements/Assignment/Variable))

#### Examples


#### Benefits


