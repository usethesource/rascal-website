---
title: UseDef
---

#### Synopsis

Compute use-def information for the variables in a Pico program.

#### Examples

The _definitions_ of a variable are the source code locations where a variable gets a value.
The _uses_ of a variable are the location where the value of that variable is used.
Both concepts are relevant for program analysis and are defined here.

```rascal 
module demo::lang::Pico::UseDef

import demo::lang::Pico::Abstract;

set[Occurrence] usesExp(EXP e, STATEMENT s) =       ❶  
  u:id(PicoId Id1) := e ? {< u.src, Id1, s>}
                        : {< u.src, Id2, s> | /u:id(PicoId Id2) <- e };
     
set[Occurrence] usesStat(s:asgStat(PicoId Id, EXP e)) = usesExp(e, s);      ❷  

set[Occurrence] usesStat(s: ifElseStat(EXP e,
                              list[STATEMENT] s1,
                              list[STATEMENT] s2)) =
   usesExp(e, s) + usesStats(s1) + usesStats(s2);

set[Occurrence] usesStat(s: whileStat(EXP e,
                              list[STATEMENT] s1)) =
   usesExp(e, s) + usesStats(s1);

set[Occurrence] usesStats(list[STATEMENT] stats) =  
   {*usesStat(s) | s <- stats};

public set[Occurrence] uses(PROGRAM p) = usesStats(p.stats);      ❸  

public set[Occurrence] defs(PROGRAM p) =       ❹  
   { < stat.src, v, stat > | /stat:asgStat(PicoId v, EXP _) <- p.stats};

```

:::caution
There is a "TODO" in the documentation source:
	: should we not use locations more directly in our examples?
(((TODO: should we not use locations more directly in our examples?)))
:::

Recall that `Occurrence` was introduced in [Abstract](../../../../Recipes/Languages/Pico/Abstract/index.md); it is a parameterized container to associate program entities with their location.

* ❶  The function `usesExp` computes a set of occurrences (uses) of Pico identifiers in a given statement:
    * If the expression is itself an identifier, then a singleton set containing that identifier and the statement is returned.
    * If the expression is composite, all its containing identifiers are collected using a descendant (deep) match 
       (`/`, see [Descendant](../../../../Rascal/Patterns/Descendant/index.md) )   in `/u:id(PicoId Id) \<- e`. 
        Note that we use a labeled pattern `u:id(PicoId Id)`,
       so that we can access the whole expression that was matched and retrieve its 
       location information (`u@location`) when we are adding a <location, identifier> pair to the set of occurrences.
       
* ❷  `useStat` extracts uses from all statement variants.

* ❸  The function `uses` applies `usesStats` to the statement part of its program argument.

* ❹  The function `defs`  takes a Pico program as argument and returns a set of occurrences (definitions) of Pico identifiers.
    The definition consists of a single set comprehension with the following parts:

    *  ` ... \<- P. stats` enumerates all statements in the program.
    *  `/asgStat(PicoId Id, EXP Exp) \<- P.stats` uses again a descendant match to find all assignment statements.
    *  For each assignment statement a (location, identifier) pair is added to the result.


