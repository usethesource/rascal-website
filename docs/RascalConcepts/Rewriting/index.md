---
title: Rewriting
sidebar_position: 11
---

#### Synopsis

Rewriting using pattern-directed invocation

#### Description

A rewrite rule is a recipe on how to simplify values. 
Remember: (_a_ + _b_)^2^ = _a_^2^ + 2 _ab_ + _b_^2^? 
A rewrite rule has a pattern as left-hand side -- here: (_a_ + _b_)^2^ -- and a replacement as 
right-hand side -- here: _a_^2^ + 2 _ab_ + _b_^2^. 
Given a value and a set of rewrite rules the patterns are tried on every subpart of the value and replacements are made if a match is successful. This is repeated as long as some pattern matches.

Rascal has ancestors, notably [ASF+SDF](http://www.meta-environment.org/), where rewriting was the most important computation mechanism.
In Rascal, rewriting can be achieved using pattern-directed invocation, 
see [Function Declaration](../../Rascal/Declarations/Function/index.md), 
possibly combined with a [Visit](../../Rascal/Expressions/Visit/index.md) statement.

#### Examples

In a package for symbolic differentiation it is desirable to keep expressions in simplified form in order 
to avoid intermediate results like `add(product(con(1), x), mul(con(0), y))` that can be simplified to `x`. 
The following definitions achieve this:
```rascal
Exp simp(add(con(n), con(m))) = con(n + m);       ❶  
Exp simp(mul(con(n), con(m))) = con(n * m);

Exp simp(mul(con(1), Exp e))  = e;
Exp simp(mul(Exp e, con(1)))  = e;
Exp simp(mul(con(0), Exp e))  = con(0);
Exp simp(mul(Exp e, con(0)))  = con(0);

Exp simp(add(con(0), Exp e))  = e;
Exp simp(add(Exp e, con(0)))  = e;

default Exp simp(Exp e)       = e;                 ❷  

Exp simplify(Exp e){                               ❸  
  return bottom-up visit(e){
           case Exp e1 => simp(e1)
         }
}
```

* ❶  Definitions of the function `simp` are given with different patterns as formal arguments.
    Each definition is responsible for one particular simplification 
    (here is where the similarity with rewrite rules surfaces).

* ❷  A default for `simp` is given: if no other definition applies, the default one is used.

* ❸  The actual `simplify` function: it performs a bottom up visit of the expression, replacing each subexpression by
a simplified version.

See [Derivative](../../Recipes/Common/Derivative/index.md) for a full explanation of this example.


