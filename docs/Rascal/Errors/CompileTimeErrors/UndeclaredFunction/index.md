---
title: UndeclaredFunction
---

#### Synopsis

A function is called that has not been declared.

#### Description

All functions, constructors and variables have to be declared before they can be used.
This error is generated when this rule is violated.

Remedies for functions:

*  Declare the function.
*  Declare the function as constructor of an (existing or new) [Rascal:AlgebraicDataType].
*  Import a module that declares the function (Did you import all necessary library modules?)

Remedies for variables:

*  Declare the variable.

#### Examples

Calling the undeclared function `triple` gives an error:

```rascal-shell ,error
rascal>triple(5)
|prompt:///|(0,6,<1,0>,<1,6>): Undeclared variable: triple
Advice: |http://tutor.rascal-mpl.org/Errors/Static/UndeclaredVariable/UndeclaredVariable.html|
ok
```
We can remedy this by declaring the function:

```rascal-shell ,continue,error
rascal>int triple(int n) = 3 * n;
int (int): function(|prompt:///|(0,26,<1,0>,<1,26>))
rascal>triple(5)
int: 15
```

Calling the library function `size` gives an error if the proper library (in this case: `List`) is not imported

```rascal-shell ,error
rascal>size([20, 1, 77]);
|prompt:///|(0,4,<1,0>,<1,4>): Undeclared variable: size
Advice: |http://tutor.rascal-mpl.org/Errors/Static/UndeclaredVariable/UndeclaredVariable.html|
ok
```
The solution is:

```rascal-shell 
rascal>import List;
ok
rascal>size([20, 1, 77]);
int: 3
```
Another solution is to import the complete Rascal library at once:

```rascal-shell 
rascal>import Prelude;
ok
rascal>size([20, 1, 77]);
int: 3
```

Using an undeclared variable gives an error:

```rascal-shell ,error
rascal>n + 1;
|prompt:///|(0,1,<1,0>,<1,1>): Undeclared variable: n
Advice: |http://tutor.rascal-mpl.org/Errors/Static/UndeclaredVariable/UndeclaredVariable.html|
ok
```
A variable is introduced by just assigning to it (with or without its expected type):

```rascal-shell 
rascal>n = 3;
int: 3
rascal>n + 1;
int: 4
```
Or equivalenty (with an expected type):

```rascal-shell 
rascal>int n = 3;
int: 3
rascal>n + 1;
int: 4
```


