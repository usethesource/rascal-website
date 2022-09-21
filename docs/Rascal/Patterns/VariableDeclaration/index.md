---
title: Variable Declaration Pattern
---

#### Synopsis

Variable declaration in abstract pattern.

#### Syntax

#### Types

#### Function

#### Description

A variable declaration
```rascal
_Type_ _Var_
```
can be used as abstract pattern.
A variable declaration introduces a new variable _Var_ that matches any value of the given type _Type_.
That value is assigned to _Var_ when the whole match succeeds.

The scope of this variable is the outermost expression in which the pattern occurs
or the enclosing [If](/docs/Rascal/Statements/If), [While](/docs/Rascal/Statements/While), or [Do](/docs/Rascal/Statements/Do) if the pattern occurs in the test expression of those statements.

#### Examples

Let's first perform a match that succeeds:

```rascal-shell
rascal>str S := "abc";
bool: true
```
and now we attempt to inspect the value of `S`:

```rascal-shell
rascal>S;
|prompt:///|(0,1,<1,0>,<1,1>): Undeclared variable: S
Advice: |http://tutor.rascal-mpl.org/Errors/Static/UndeclaredVariable/UndeclaredVariable.html|
ok
```

As mentioned above: `S` is only bound in the scope of the match expression!
Let's explore how bindings work in an if statement:

```rascal-shell
rascal>import IO;
ok
rascal>if(str S := "abc")
>>>>>>>   println("Match succeeds, S == \"<S>\"");
   println("Match succeeds, S == \"<S>\"");
Match succeeds, S == "abc"
ok
```

#### Benefits


