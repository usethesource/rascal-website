---
title: Call Lifting
---

#### Synopsis

Lift procedure calls to component calls.

#### Syntax

#### Types

#### Function

#### Description

A frequently occurring problem is that we know the call relation of a system but that we want to understand it at the component level rather than at the procedure level. If it is known to which component each procedure belongs, it is possible to lift the call relation to the component level. Actual lifting amounts to translating each call between procedures by a call between components. 

#### Examples

Consider the following figure:

![]((parts.png))

(a) Shows the calls between procedures;
(b) shows how procedures are part of a system component.
(c) shows how the call relation given in (a) can be lifted to the component level.

The situation can be characterized by:

*  A `call` relation between procedures
*  A `partOf` relation between procedures and components

The problem is now to lift the call relation using the information in the partOf relation.
In other words: a call between two procedures will be lifted to
a call between the components to which each procedure belongs.

Here is a solution:
```rascal-commands
alias proc = loc;
alias comp = loc;

rel[comp,comp] lift(rel[proc,proc] aCalls, rel[proc,comp] aPartOf)
    = { <C1, C2> | <proc P1, proc P2> <- aCalls, 
	               <comp C1, comp C2> <- aPartOf[P1] * aPartOf[P2]};
```

```rascal-prepare,continue
calls = {<|proc:///main|, |proc:///a|>, <|proc:///main|, |proc:///b|>, <|proc:///a|, |proc:///b|>, <|proc:///a|, |proc:///c|>, <|proc:///a|, |proc:///d|>, <|proc:///b|, |proc:///d|>};        
partOf = {<|proc:///main|, |proc:///Appl|>, <|proc:///a|, |proc:///Appl|>, <|proc:///b|, |proc:///DB|>, <|proc:///c|, |proc:///Lib|>, <|proc:///d|, |proc:///Lib|>};

test bool tstLift() = 
    lift(calls, partOf) == { < |proc:///DB| , |proc:///Lib| > , < |proc:///Appl| , |proc:///Lib| > , 
                             < |proc:///Appl| , |proc:///DB| > , < |proc:///Appl| , |proc:///Appl| > };
// this is a hidden sanity check 
assert tstLift();
``

And we can use it as follows. First we create some example data:

```rascal-shell,continue
calls = {<|proc:///main|, |proc:///a|>, <|proc:///main|, |proc:///b|>, <|proc:///a|, |proc:///b|>, <|proc:///a|, |proc:///c|>, <|proc:///a|, |proc:///d|>, <|proc:///b|, |proc:///d|>};        
partOf = {<|proc:///main|, |proc:///Appl|>, <|proc:///a|, |proc:///Appl|>, <|proc:///b|, |proc:///DB|>, <|proc:///c|, |proc:///Lib|>, <|proc:///d|, |proc:///Lib|>};
```

and then we do the lifting:
```rascal-shell,continue
lifted=lift(calls, partOf);
```

Please verify that this corresponds exactly to (c) in the figure above.
```rascal-shell,continue
import vis::Graphs;
graph(calls);
graph(lifted);
```

#### Benefits

#### Pitfalls

