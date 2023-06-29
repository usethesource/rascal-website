---
title: Source Code Comments
---

Source code comments in Rascal come in three flavors:

* single line comments
```rascal
// this is a single line comment above a variable declaration
int age = 42;
```
* multi line comments
```rascal
/* you should really never
 * int age = 42;
 * comment out any code :-)
 */
int yearOfBirth = 1977;
```
* Tutor documentation tags to every declaration 
```rascal
@synopsis{Describes a concept in a single line.}
@description{
    Explains to everyone what the concept is and how to use it
}
@examples{
    Contain (executable) code examples
}
```

The tutor tags contain markdown with many different features that are described in the ((rascal\-tutor:Tutor)) documentation.
Rascal source code comments are otherwise completely ignored.
