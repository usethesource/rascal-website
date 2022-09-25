---
title: Ambiguity
---

#### Synopsis

Ambiguity found in parsed text. 

#### Description

Rascal supports general context-free grammars and also provides
various mechanisms to disambiguate them.

This exception is thrown when, given a grammar and a sentence,
an ambiguity is found while parsing the sentence according to that grammar.

#### Examples

First declare a very simple expression language that should
recognize expressions like `a`, `a+a`, `a+(a+a)`:

```rascal-shell 
rascal>syntax A = "a";
ok
rascal>syntax E = A | "(" E ")" | E "+" E;
ok
```
Next, import the ParseTree module that provides a `parse` function that we will use:

```rascal-shell ,continue
rascal>import ParseTree;
ok
```
Entering a first expression goes well, except that the parser generator already predicts future ambiguity. So it prints a warning.

```rascal-shell -error,continue
rascal>parse(#E, "a+a");
E: (E) `a+a`
```

The following example triggers the predicted ambiguity indeed:


```rascal-shell ,continue,errors
rascal>parse(#E, "a+a+a");
|TODO:///|: Ambiguity(
  |unknown:///|(0,5,<1,0>,<1,5>),
  "E",
  "a+a+a")
ok
```
The conclusion is that there are two parses here: `a+(a+a)` and `(a+a)+a`, 
because we did forget to define the associativity of the `+` operator.

Let's fix this:


```rascal-shell ,errors
rascal>syntax A = "a";
ok
rascal>syntax E = A | "(" E ")" | left E "+" E;
ok
rascal>import ParseTree;
ok
rascal>parse(#E, "a+a+a");
E: (E) `a+a+a`
```

However, one can also deal with ambiguity differently. For example we could have the parser build a tree
for all ambiguous interpretations and inspect the resulting data-structure:


```rascal-shell ,errors
rascal>syntax A = "a";
ok
rascal>syntax E = A | "(" E ")" | left E "+" E | left E "*" E;
ok
rascal>import ParseTree;
ok
rascal>t = parse(#E, "a+a*a", allowAmbiguity=true);
E: (E) `a+a*a`
```
Is the forest indeed ambiguous?
```rascal-shell
rascal>/amb(_) := t
bool: true
```
How many alternatives?
```rascal-shell
rascal>import Set;
ok
rascal>import IO;
ok
rascal>/amb(a) := t ? size(a) : 0; 
int: 2
```
Which rules are at the top of the alternatives?
```rascal-shell
rascal>if (/amb({a1, a2}) := t) 
>>>>>>>  println("alternative 1: <a1.prod>
>>>>>>>          'alternative 2: <a2.prod>");
          'alternative 2: <a2.prod>");
alternative 1: prod(sort("E"),[sort("E"),layouts("$default$"),lit("+"),layouts("$default$"),sort("E")],{assoc(left())})
alternative 2: prod(sort("E"),[sort("E"),layouts("$default$"),lit("*"),layouts("$default$"),sort("E")],{assoc(left())})
ok
```

Or, one could catch the ambiguity and report it like a [ParseError](../../../RunTimeErrors/RuntimeExceptions/ParseError/):


```rascal-shell ,continue
rascal>import IO;
ok
rascal>try 
>>>>>>>  parse(#E, "a+a*a");
>>>>>>>catch Ambiguity(loc l, str s, _): 
>>>>>>>  println("the input is ambiguous for <s> on line <l.begin.line>");
  println("the input is ambiguous for <s> on line <l.begin.line>");
the input is ambiguous for E on line 1
ok
```

Here are some pointers for further disambiguation help:

* [Syntax Definitions](../../../Rascal/Declarations/SyntaxDefinition/).
* [Disambiguation features](../../../Rascal/Declarations/SyntaxDefinition/Disambiguation/).

