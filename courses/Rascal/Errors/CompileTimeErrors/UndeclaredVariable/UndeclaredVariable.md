---
title: UndeclaredVariable
---

#### Synopsis

Rascal can not find the definition of the name (identifier) used in an ((Expressions)) or ((Patterns)).
#### Syntax

#### Types

#### Function
       
#### Usage

#### Description

A variable can only be used when it has been declared and initialized.
This error is generated when this is not the case. 

The error message is a bit of a *misnomer*, because it is produced when _any identifier_
can not be found. That could be a name of a ((Function)), of a [Constructors]((AlgebraicDataType)), or a [Pattern Variable]((Patterns-Variable)), or a global ((Declarations-Variable))
or a local ((Declarations-Variable)) which can not be found in the current scope. 

You can help Rascal find the name by:
* Adding a new declaration of a ((Function)), [Constructors]((AlgebraicDataType)), a ((Declarations-Variable)) or a [Pattern Variable]((Patterns-Variable)) that has the given name.
* ((Import)) or ((Extend)) a module that contains a definition of the given name.
* Using a different name, or correcting a spelling error, such that Rascal can find the name in the current scope, or an imported or extended scope.

#### Examples

Here is an example where an undeclared variables occurs in list splicing:
```rascal-shell,error
[1, *x, 3]
```

The remedy is here:
```rascal-shell
x = [5];
[1, *x, 3]
```

#### Benefits

* Knowing this error statically means this can never happen at run-time if you do not get the error.
* Variable references are never `null` in Rascal. In fact `null` is not a concept in Rascal at all.

#### Pitfalls

* Not only hard-to-find variable names produce `UndeclaredVariable`, also missing ((Function))s and [Constructors]((AlgebraicDataType)) do.
