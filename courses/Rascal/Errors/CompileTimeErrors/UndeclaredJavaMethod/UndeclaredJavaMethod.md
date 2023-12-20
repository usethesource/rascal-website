---
title: UndeclaredJavaMethod
---

#### Synopsis

Attempt to call a non-existing Java method.

#### Syntax

#### Types

#### Function
       
#### Usage

#### Description

Rascal functions can be implemented in Java. This is the case for many functions in the standard library.
This requires these elements:

*  An abstract Rascal function declaration (= a function header without a body).
*  The keyword `java` should be part of the function header.
*  The function declaration is annotated (uing `javaClass`) with the name of the Java class that implements this function.


This error is generated when a method with the same name as the Rascal function
cannot be found in the mentioned Java class. Most likely, this is a missing or misspelled function/method name.

Remedy: see ((GettingHelp)).  If you are an expert developer and have implemented your own extension in Java, please check your own extension code first.

#### Examples

This is how the `size` function on lists is declared in the Rascal library:
```rascal-shell
@javaClass{org.rascalmpl.library.Prelude}
public java int size(list[&T] lst);
```
This is the result of misspelling the function name (`siz` instead of `size`):
```rascal-shell,error
@javaClass{org.rascalmpl.library.Prelude}
public java int siz(list[&T] lst);
```
#### Benefits

#### Pitfalls

