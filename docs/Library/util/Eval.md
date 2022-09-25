---
title: "module util::Eval"
---

#### Usage

`import util::Eval;`


## data Result {#util-Eval-Result}

```rascal
data Result[&T]  
     = ok()
     | result(&T val)
     ;
```

## data Exception {#util-Eval-Exception}

```rascal
data Exception  
     = StaticError(str message, loc location)
     ;
```

## function eval {#util-Eval-eval}

* ``Result[&T] eval(type[&T] typ, str command) throws Timeout, StaticError, ParseError``
* ``Result[value] eval(str command)``
* ``Result[&T] eval(type[&T] typ, list[str] commands) throws Timeout, StaticError, ParseError``
* ``Result[value] eval(list[str] commands)``
* ``Result[&T] eval(type[&T] typ, str command, int duration) throws Timeout, StaticError, ParseError``
* ``Result[value] eval(str command, int duration)``
* ``Result[&T] eval(type[&T] typ, list[str] commands, int duration) throws Timeout, StaticError, ParseError``
* ``Result[value] eval(list[str] commands, int duration)``


#### Synopsis

Evaluate a (list of) Rascal commands and return the value of the last command.

#### Description

Evaluate a command or a list of commands and return the value of the last command that is executed.

Note that a command can be one of:

*  Statement
*  Declaration
*  Import
*  Extend
*  SyntaxDefinition
   

The notable exclusion are [Expressions](../../Rascal/Expressions/index.md). An Expression is not allowed as a command to the eval function. You can easily make
a Statement from an Expression by adding a semi-colon.
 
An optional `duration` argument may be present to limit the time
(in milliseconds) the execution may take. By default, the duration is set to 1000 ms.

#### Examples


```rascal-shell 
rascal>import util::Eval;
ok
rascal>eval("2 * 3;");
Result[value]: result(6)
rascal>eval(["X = 2 * 3;", "X + 5;"]);
Result[value]: result(11)
```

## function evalType {#util-Eval-evalType}

* ``str evalType(str command) throws Timeout, StaticError, ParseError``
* ``str evalType(list[str] commands) throws Timeout, StaticError, ParseError``
* ``str evalType(str command, int duration) throws Timeout, StaticError, ParseError``
* ``str evalType(list[str] commands, int duration) throws Timeout, StaticError, ParseError``


#### Synopsis

Evaluate a (list of) Rascal commands and return the type of the last command.

#### Description

Evaluate a command or a list of commands and return the type of the value of the last command that is executed.
An optional `duration` argument may be present to limit the time
(in milliseconds) the execution may take. By default, the duration is set to 1000 ms.

#### Examples


```rascal-shell 
rascal>import util::Eval;
ok
rascal>evalType("2 * 3;");
str: "int"
rascal>evalType("[1, 2, 3];");
str: "list[int]"
```

