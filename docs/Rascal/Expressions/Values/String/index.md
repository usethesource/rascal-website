---
title: String
keywords:
  - "\\\""
  - "'"
  - "<"
  - ">"
  - "\\\\"
  - "\\\\n"
  - "\\\\t"
  - "\\\\r"
  - "\\\\b"
  - "\\\\f"
  - "\\\\u"
  - "\\\\U"
  - hexademical
  - escape
  - if
  - else
  - for
  - while
  - do

---

#### Synopsis

String values.

#### Syntax

`"StringChar~1~StringChar~2~..."`
where `_StringChar~i~_ may be one of the following:

*  __Ordinary character__: Any character except `<`, `>`, `"`, `'` or `\`.
*  __Escaped character__: Backslash `\` followed by any of  `<`, `>`, `"`, `'` or `\` represents the escaped character itself.
  Other escape sequences that are supported are:
**  `\n`: newline
**  `\t`: tab
**  `\r`: carriage return
**  `\b`: backspace
**  `\f`: vertical feed
**  `\u hexDigit~1~ hexDigit~2~ hexDigit~3~ hexDigit~4~` : hexadecimal escapes with four digit indexes into UNICODE.
**  `\U hexDigit~1~ hexDigit~2~ hexDigit~3~ hexDigit~4~ hexDigit~5~ hexDigit~6~` : hexadecimal escapes with six digit indexes into UNICODE.
**  `\ ahexDigit~1~ hexDigit~2~`:  hexadecimal escapes with 2 digit indexes into ASCII (0x0 ... 0x7F).

*  __String Interpolation__: 

| Form      | Description |
| --- | --- |
| `<Exp>` | Interpolate the value of the expression as a string |
| `<if(Exp){> ... StringChars ... <}>` | Conditional inclusion of _Text_, where _StringChars_ may use variables introduced in _Exp_ |
| `<if(Exp){> ... StringChars~1~ ... <} else {>  ... StringChars~2~ ... <}>` | Conditional inclusion of either _StringChars~1~_ or _StringChars~2~_ |
| `<for(Exp){>... StringChars ... <}>` | Iterative splicing of _StringChars_ into the result, where _StringChars_ may use variables introduced in _Exp_. |
| `<while(Exp){> ... StringChars ... <}>` | Iterative splicing of _StringChars_ into the result, where _StringChars_ may use variables introduced in _Exp_. |
| `<do {>... StringChars ... <} while (Exp)>` | Iterative splicing of _StringChars_ into the result, where _StringChars_ may use variables introduced in _Exp_. |

*  __Multiline__:

| Form | Description  |
| --- | --- |
| `StringChars~1~\n StringChars~2~ `   | Strings can be multi-line without an escape or continuation marker  |
| `StringChars~2~\n '  StringChars~2~` | A margin character `'` indicates where the next line starts  |

#### Types

`str`

#### Description

The string values are represented by the type `str` and consist of character 
sequences surrounded by double quotes, e.g., `"a"` or `"a\nlong\nstring"`.

_Multiline_: Strings may span more than one line. The margin character `'` indicates which part of a line will be ignored. This is useful for indenting a multi-line string with the source code that generates it.

_Interpolation_:  String literals support so-called _string interpolation_: 
inside string constants text between angle brackets (`<` and `>`) is first executed and then replaced by
 its string value.
Various statements (if, for, while, do) also return a value and can be used in this way.
In the interpolation variant of these statements the block or blocks that are part of the statement become arbitrary text 
(that may itself contain interpolations). 

_Auto-indent_: Expressions that get interpolated in a string will be auto-indented. This means that each line that results from the evaluation of the expression is prefixed with the indentation level of the position of the expression in the current string.

The following operators are defined for Strings:
* [Concatenation](../../../../Rascal/Expressions/Values/String/Concatenation)
* [Equal](../../../../Rascal/Expressions/Values/String/Equal)
* [GreaterThan](../../../../Rascal/Expressions/Values/String/GreaterThan)
* [GreaterThanOrEqual](../../../../Rascal/Expressions/Values/String/GreaterThanOrEqual)
* [LessThan](../../../../Rascal/Expressions/Values/String/LessThan)
* [LessThanOrEqual](../../../../Rascal/Expressions/Values/String/LessThanOrEqual)
* [NotEqual](../../../../Rascal/Expressions/Values/String/NotEqual)
* [Slice](../../../../Rascal/Expressions/Values/String/Slice)
* [Subscription](../../../../Rascal/Expressions/Values/String/Subscription)

There are also [library functions](../../../../Library/String.md/) available for Strings.

#### Examples

```rascal-shell 
rascal>N = 13;
int: 13
rascal>"The value of N is <N>";
str: "The value of N is 13"
rascal>"The value of N*N is <N*N>";
str: "The value of N*N is 169"
rascal>"The value is <(N < 10) ? 10 : N*N>";
str: "The value is 169"
```
As you can see the string value of variables and expressions is interpolated in the result as expected. 
<br />
Some examples of more advances string interpolation 

```rascal-shell ,continue
rascal>"N is <if(N < 10){> small <} else {> large <}>";
str: "N is  large "
rascal>"N is <if(N < 10){> small <} else {> large (<N>)<}>";
str: "N is  large (13)"
rascal>"before <for(x<-[1..5]){>a <x> b <}>after";
str: "before a 1 b a 2 b a 3 b a 4 b after"
```
multi-line string

```rascal-shell ,continue
rascal>import IO;
ok
rascal>println("hello
>>>>>>>this
>>>>>>>  is
>>>>>>>    new")
    new")
hello
this
  is
    new
ok
```
multi-line string with margin:

```rascal-shell ,continue
rascal>if (true)
>>>>>>>  println("this is
>>>>>>>          'what
>>>>>>>          '  margins
>>>>>>>          'are good for
>>>>>>>          ");
          ");
this is
what
  margins
are good for
          
ok
```
auto indent:

```rascal-shell ,continue
rascal>str genMethod(str n) = "int <n>() {
>>>>>>>                       '  return 0;
>>>>>>>                       '}";
str (str): function(|prompt:///|(0,99,<1,0>,<3,27>))
rascal>str genClass() = "class myClass {
>>>>>>>                 '  <genMethod("myMethod")>
>>>>>>>                 '}";
str (): function(|prompt:///|(0,99,<1,0>,<3,21>))
rascal>println(genClass());
println(genClass());
class myClass {
  int myMethod() {
    return 0;
  }
}
ok
```

#### Benefits

String interpolation enables very flexible template-based text generation as used in generators for
source code, markup and the like.

