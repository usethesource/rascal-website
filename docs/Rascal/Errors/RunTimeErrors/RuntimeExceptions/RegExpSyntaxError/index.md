---
title: RegExp Syntax Error
---

#### Synopsis

Syntax error in regular expression at run time

#### Types

`data RuntimeException = RegExpSyntaxError(str message);`
       
#### Usage

`import Exception;` (only needed when `RegExpSyntaxError` is used in `catch`)

#### Description

At the moment, the parsing and compilation of regular expression is done at run time.
This exception is thrown when a syntactically incorrect regular expression is used.

#### Examples

The following regular expression `/+/` is incorrect (maybe `/a+/` was meant?):

```rascal-shell ,error
rascal>/+/ := "aaaa";
|prompt:///|(7,6,<1,7>,<1,13>): Syntax error: Dangling meta character '+' near index 0
+
^
Advice: |http://tutor.rascal-mpl.org/Errors/Static/SyntaxError/SyntaxError.html|
ok
```

