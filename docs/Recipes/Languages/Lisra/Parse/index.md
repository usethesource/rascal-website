---
title: Parse
---

#### Synopsis

Parsing a Lisp expression.

#### Description

Given the Lisp [Syntax](../../../../Recipes/Languages/Lisra/Syntax/index.md), we can now apply it to parse textual Lisp expressions
and convert them to the runtime representation `Lval`.


```rascal 
module demo::lang::Lisra::Parse

import Prelude;
import demo::lang::Lisra::Syntax;
import demo::lang::Lisra::Runtime;

Lval parse(str txt) = build(parse(#LispExp, txt));      ❶  


Lval build((LispExp)`<IntegerLiteral il>`) = Integer(toInt("<il>"));           ❷  
Lval build((LispExp)`<AtomExp at>`)        = Atom("<at>");                     ❸  
Lval build((LispExp)`( <LispExp* lst> )`)  = List([build(l) | l <- lst]);
test bool build2() = build((LispExp) `abc`) == Atom("abc");
test bool build3() = build((LispExp) `(abc 42)`) == List([Atom("abc"), Integer(42)]);

test bool parse1() = parse("123") == Integer(123);
test bool parse2() = parse("abc") == Atom("abc");
test bool parse3() = parse("()") == List([]);
test bool parse4() = parse("(123)") == List([Integer(123)]);
test bool parse5() = parse("(123 abc)") == List([Integer(123), Atom("abc")]);

```

                
* ❶  First we define the actual `parse` function: it takes a string as argument and returns an `Lval`.
   It proceeds in two steps:
   **  First the text is parsed using `parse(#LispExp, txt)`. The result is parse tree.
   **  Next, the auxiliary function `build` is used to transform the parse tree to an `Lval`.

* ❷  Function `build` is defined in cases, to handle the various parse tree forms.
    Fortunately, we do not have to spell out the details of the parse tree, but we can use concrete
    patterns instead (see [concrete patterns](../../../../Rascal/Patterns/Concrete/index.md), below).
 
   The right-hand sides deserve some attention. Here the argument `il` is a _parse tree_ (!!) that represents an integer literal.
   We first convert it to a string using string interpolation (`"<il>"`) and then convert it to an integer.

* ❸  The text of the atom is reconstructed in a similar fashion.

* ❹  The concrete list elements in `lst` are converted one-by-one using build and are then used to
    create a new `List` value.

#### Concrete Patterns

****
We use concrete patterns in these definitions. For instance, the argument pattern 
```rascal
(LispExp)`<IntegerLiteral il>`
```
says:

*  Match something of type `LispExp`.
*  It should be an `IntegerLiteral` and bind it to a variable `il`.

More precisely, the text between backquotes should be a string that can be parsed according to the non-terminal
that precedes it (`LispExp` in this example). This is illustrated by the list case where the parentheses appear in the concrete pattern:
```rascal
(LispExp)`( <LispExp* lst> )`
```
****

#### Examples


```rascal-shell 
rascal>import demo::lang::Lisra::Parse;
ok
rascal>import demo::lang::Lisra::Runtime;
ok
rascal>parse("1");
Lval: Integer(1)
rascal>parse("x");
Lval: Atom("x")
rascal>parse("(+ 5 7)");
Lval: List([
    Atom("+"),
    Integer(5),
    Integer(7)
  ])
```


