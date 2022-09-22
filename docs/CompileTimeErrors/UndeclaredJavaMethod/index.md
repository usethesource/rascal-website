---
title: UndeclaredJavaMethod
---

#### Synopsis

Attempt to call a non-existing Java method.

#### Description

Rascal functions can be implemented in Java. This is the case for many functions in the standard library.
This requires these elements:

*  An abstract Rascal function declaration (= a function header without a body).
*  The keyword `java` should be part of the function header.
*  The function declaration is annotated (uing `javaClass`) with the name of the Java class that implements this function.


This error is generated when a method with the same name as the Rascal function
cannot be found in the mentioned Java class. Most likely, this is a missing or misspelled function/method name.

Remedy: Contact the Rascal developers:

*  Ask a question at [Rascal Ask site](http://ask.rascal-mpl.org/questions/).
*  Read the currently open issues at the Rascal's [issue tracker](https://github.com/cwi-swat/rascal/issues?state=open). If your problem has not yet been reported by someone else, please report it here.


If you are an expert developer and have implemented your own extension in Java, please check your own extension code first.


#### Examples

This is how the `size` function on lists is declared in the Rascal library:

```rascal-shell
rascal>@javaClass{org.rascalmpl.library.Prelude}
>>>>>>>public java int size(list[&T] lst);
int (list[&T]): function(|prompt:///|(0,77,<1,0>,<2,35>))
```
This is the result of misspelling the function name (`siz` instead of `size`):

```rascal-shell
rascal>@javaClass{org.rascalmpl.library.Prelude}
>>>>>>>public java int siz(list[&T] lst);
|prompt:///|(0,76,<1,0>,<2,34>): No such Java method: org.rascalmpl.library.Prelude.siz(io.usethesource.vallang.IList)
Advice: |http://tutor.rascal-mpl.org/Errors/Static/UndeclaredJavaMethod/UndeclaredJavaMethod.html|
ok
```
