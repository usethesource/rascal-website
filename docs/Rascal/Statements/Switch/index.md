---
title: Switch
keywords:
  - switch
  - case
  - default

---

#### Synopsis

The switch statement is a control flow statement
where the next block is selected by pattern matching
against a number of `case` patterns. 

#### Syntax

```rascal
switch ( _Exp_ ) {
case _PatternWithAction<sub>1</sub>_;
case _PatternWithAction<sub>2</sub>_;
...
default: ...
}
```

#### Description

A switch statement is similar to a switch statement in C or Java.
The value of the expression _Exp_ is the subject term that will be matched by the successive 
[Pattern With Action](../../../Rascal/Expressions/Visit/PatternWithAction)s in the switch statement. The switch statement provides only matching at the top level of 
the subject term and does not traverse it. The type of the pattern in each case must be identical to the type of 
the subject term (or be a supertype of it). If no case matches, the switch acts as a dummy statement.
There is no fall through from one case to the next.

#### Examples

Suppose we want to naively analyze a sentence and print the topic it is about:

```rascal-shell
rascal>import IO;
ok
rascal>S = "Princess Leila sipped from her rum punch";
str: "Princess Leila sipped from her rum punch"
rascal>switch(S){
>>>>>>>  case /Leila/: println("The topic is Star Wars");
>>>>>>>  case /rum/:   println("The topic is Drunken man");
>>>>>>>  case /punch/: println("The topic is Kick Boxing");
>>>>>>>}
}
The topic is Star Wars
ok
```
From the printed message you can infer that the cases are tried in the order in which they occur.

#### Pitfalls

The switch statement does not yet return a value, this will be changed.


