---
title: MissingReturn
---

#### Synopsis

A return statement is missing from a function body.

#### Description

Functions return some value (except functions that have return type `void`).
This error is generated when a function body does not return a value.

Remedies:

*  Add a [Rascal:Return] statement to the function body.
*  Rewrite the function so that the function body becomes a single expression and you can use the abbreviated function format, see [Function](../../Rascal/Declarations/Function/index.md)

#### Examples

Here is an incorrect definition of function `triple`:

```rascal-shell ,error
rascal>int triple(int x) {
>>>>>>>   x * 3;
>>>>>>>}
int (int): function(|prompt:///|(0,31,<1,0>,<3,1>))
rascal>triple(5)
|prompt:///|(0,31,<1,0>,<3,1>): Missing return statement
Advice: |http://tutor.rascal-mpl.org/Errors/Static/MissingReturn/MissingReturn.html|
ok
```
It should look like this:

```rascal-shell 
rascal>int triple(int x) {
>>>>>>>   return x * 3;
>>>>>>>}
int (int): function(|prompt:///|(0,38,<1,0>,<3,1>))
rascal>triple(5)
int: 15
```
This is another solution using the abbreviated function format:

```rascal-shell 
rascal>int triple(int x) = x * 3;
int (int): function(|prompt:///|(0,26,<1,0>,<1,26>))
rascal>triple(5)
int: 15
```


