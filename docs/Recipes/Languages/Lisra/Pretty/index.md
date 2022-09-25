---
title: Pretty
---

#### Synopsis

A Lisp pretty printer.

#### Description

The purpose of a pretty printer is to convert an internal structure to text.
We define here the simplest possible solution:


```rascal 
module demo::lang::Lisra::Pretty

import demo::lang::Lisra::Runtime;

str pretty(Integer(n))  = "<n>";
str pretty(Atom(name))  = name;
str pretty(List(list[Lval] elms)) = "( <for(Lval e <- elms){><pretty(e)> <}>)";
str pretty(Closure(fn)) = "Closure(<fn>)";
test bool pretty2() = pretty(Atom("abc")) == "abc";
test bool pretty3() = pretty(List([])) == "( )";
test bool pretty4() = pretty(List([Integer(123)])) == "( 123 )";
test bool pretty5() = pretty(List([Integer(123), Atom("abc")])) == "( 123 abc )";

```

                
Compare the definition of `pretty` with that of `parse`:
```rascal
Lval parse(str txt);
str pretty(Lval x);
```

For a well-designed pair of `parse`/`pretty` functions, the latter is the inverse of the former.
In other words, for every `L` the following should hold:
```rascal
parse(pretty(L)) == L
```

#### Examples


```rascal-shell 
rascal>import demo::lang::Lisra::Runtime;
ok
rascal>import demo::lang::Lisra::Pretty;
ok
rascal>pretty(Integer(42));
str: "42"
rascal>pretty(Atom("x"));
str: "x"
rascal>L = List([Atom("+"), Integer(5), Integer(7)]);
Lval: List([
    Atom("+"),
    Integer(5),
    Integer(7)
  ])
rascal>pretty(L);
str: "( + 5 7 )"
```
Now let's explore whether `pretty` is indeed the inverse of `parse`:

```rascal-shell ,continue
rascal>import demo::lang::Lisra::Parse;
ok
rascal>parse(pretty(L)) == L;
bool: true
```


