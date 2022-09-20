---
title: "demo::lang::logic::ast::Booleans"
---

#### Usage

`import demo::lang::logic::ast::Booleans;`


## data Formula {#demo-lang-logic-ast-Booleans-Formula}

```rascal
data Formula  
     = \true()
     | \false()
     | \not(Formula arg)
     | \and(Formula lhs, Formula rhs)
     | \and(set[Formula] args)
     | \or(Formula lhs, Formula rhs)
     | \or(set[Formula] args)
     | \if(Formula lhs, Formula rhs)
     | \fi(Formula lhs, Formula rhs)
     | \iff(Formula lhs, Formula rhs)
     ;
```

## function or {#demo-lang-logic-ast-Booleans-or}

* ``Formula or({Formula x})``

## function and {#demo-lang-logic-ast-Booleans-and}

* ``Formula and({Formula x})``
* ``Formula and(Formula a, Formula b)``

## function or {#demo-lang-logic-ast-Booleans-or}

* ``Formula or(Formula a, Formula b)``

## function and {#demo-lang-logic-ast-Booleans-and}

* ``Formula and({*Formula a, and(set[Formula] b)})``

## function or {#demo-lang-logic-ast-Booleans-or}

* ``Formula or({*Formula a, or(set[Formula] b)})``

## function simplify {#demo-lang-logic-ast-Booleans-simplify}

* ``Formula simplify(or({\true(), *Formula _}))``
* ``Formula simplify(and({\false(), *Formula _}))``
* ``Formula simplify(not(not(Formula g)))``
* ``Formula simplify(not(\true()))``
* ``Formula simplify(not(\false()))``
* ``Formula simplify(\if(Formula l, Formula r))``
* ``Formula simplify(\fi(Formula l, Formula r))``
* ``Formula simplify(\iff(Formula l, Formula r))``
* ``Formula simplify(and({Formula g,\not(g),*Formula r}))``
* ``default Formula simplify(Formula f)``

