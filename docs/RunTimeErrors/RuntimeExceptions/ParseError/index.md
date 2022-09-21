---
title: Parse Error
---

#### Synopsis

Parse of a syntactically incorrect string.


#### Types

`data RuntimeException = ParseError(loc parseloc) | ParseError(loc parseloc, str nt, str s);`
       
#### Usage

`import Exception;` (only needed when `ParseError` is used in `catch`)


#### Description

This error is generated when during the execution of a Rascal program the
[parse](/docs/Library/ParseTree#ParseTree-parse) function is applied to a syntactically incorrect input sentence.

Remedies:

*  Correct the input sentence.
*  Adapt the grammar so that it accepts the input sentence.
*  Catch the ParseError yourself, see [try catch](/docs/Rascal/Statements/TryCatch).


#### Examples

Define the non-terminal `As` that accepts one or more letters `a`:

```rascal-shell
rascal>syntax As = "a"+;
ok
```
Then import `ParseTree` so that we can use the `parse` function:

```rascal-shell
rascal>import ParseTree;
ok
```
Now we can parse sentences consisting of letters `a`:

```rascal-shell
rascal>parse(#As, "aaaaaaaa");
As: (As) `aaaaaaaa`
```
But we get an error when parsing syntactically incorrect input  (i.e., that does not
consists of letters `a` only):

```rascal-shell
rascal>parse(#As, "aaaabaaa");
|TODO:///|: ParseError(|unknown:///|(4,1,<1,4>,<1,5>))
ok
```
We can also catch the ParseError but first import the Rascal modules `Exception` and `IO`:

```rascal-shell
rascal>import Exception;
ok
rascal>import IO;
ok
rascal>try 
>>>>>>>  parse(#As, "aaaabaaa"); 
>>>>>>>catch ParseError(e): 
>>>>>>>  println("Your input cannot be parsed: <e>");
  println("Your input cannot be parsed: <e>");
Your input cannot be parsed: |unknown:///|(4,1,<1,4>,<1,5>)
ok
```


#### Benefits


