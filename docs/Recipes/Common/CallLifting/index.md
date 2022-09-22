---
title: Call Lifting
---

#### Synopsis

Lift procedure calls to component calls.

#### Description

A frequently occurring problem is that we know the call relation of a system but that we want to understand it at the component level rather than at the procedure level. If it is known to which component each procedure belongs, it is possible to lift the call relation to the component level. Actual lifting amounts to translating each call between procedures by a call between components. 

#### Examples

Consider the following figure:


![](/assets/Recipes/Common/CallLifting/parts.png)


(a) Shows the calls between procedures;
(b) shows how procedures are part of a system component.
(c) shows how the call relation given in (a) can be lifted to the component level.

The situation can be characterized by:

*  A call relation between procedures
*  A partOf relation between procedures and components


The problem is now to lift the call relation using the information in the partOf relation.
In other words: a call between two procedures will be lifted to
a call between the components to which each procedure belongs.

Here is a solution:

```rascal

//START
// tag::module[]
module demo::common::Lift



alias proc = str;
alias comp = str;

rel[comp,comp] lift(rel[proc,proc] aCalls, rel[proc,comp] aPartOf){
	return { <C1, C2> | <proc P1, proc P2> <- aCalls, 
	                    <comp C1, comp C2> <- aPartOf[P1] * aPartOf[P2] };
}

// Test set-up

rel[proc,proc] Calls = {<"main", "a">, <"main", "b">, <"a", "b">, <"a", "c">, <"a", "d">, 
                        <"b", "d">};        

rel[proc, comp] PartOf = {<"main", "Appl">, <"a", "Appl">, <"b", "DB">, 
                          <"c", "Lib">, <"d", "Lib">};

rel[comp,comp] ComponentCalls = lift(Calls, PartOf);

```

And we can use it as follows:


```rascal-shell
rascal>import demo::common::Lift;
ok
```
Encode the call relation and partOf relation:

```rascal-shell
rascal>calls = {<"main", "a">, <"main", "b">, <"a", "b">, <"a", "c">, <"a", "d">, <"b", "d">};        
rel[str,str]: {
  <"b","d">,
  <"a","b">,
  <"a","c">,
  <"a","d">,
  <"main","a">,
  <"main","b">
}
rascal>partOf = {<"main", "Appl">, <"a", "Appl">, <"b", "DB">, <"c", "Lib">, <"d", "Lib">};
rel[str,str]: {
  <"a","Appl">,
  <"b","DB">,
  <"c","Lib">,
  <"d","Lib">,
  <"main","Appl">
}
```
and do the lifting:

```rascal-shell
rascal>lift(calls, partOf);
rel[str,str]: {
  <"DB","Lib">,
  <"Appl","Lib">,
  <"Appl","Appl">,
  <"Appl","DB">
}
```
Please verify that this corresponds exactly to (c) in the figure above.

```rascal-shell
```


