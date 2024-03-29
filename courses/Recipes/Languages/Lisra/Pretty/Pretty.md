---
title: Pretty
---

#### Synopsis

A Lisp pretty printer.

#### Syntax

#### Types

#### Function
       
#### Usage

#### Description

The purpose of a pretty printer is to convert an internal structure to text.
We define here the simplest possible solution:

```rascal-include
demo::lang::Lisra::Pretty
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
import demo::lang::Lisra::Runtime;
import demo::lang::Lisra::Pretty;
pretty(Integer(42));
pretty(Atom("x"));
L = List([Atom("+"), Integer(5), Integer(7)]);
pretty(L);
```
Now let's explore whether `pretty` is indeed the inverse of `parse`:
```rascal-shell,continue
import demo::lang::Lisra::Parse;
parse(pretty(L)) == L;
```

#### Benefits

#### Pitfalls

