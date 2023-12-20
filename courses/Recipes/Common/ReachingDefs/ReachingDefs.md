---
title: Reaching Definitions
---

Reaching definitions and life variables are common analyses in compilers and static analysis tools. 
See: 
> A.V. Aho, R. Sethi, J.D. Ullman, Compilers, Prinicples, Techniques and Tools,
> Addison-Wesley, 1986, Section 10.5 Introduction to global data-flow analysis.

In this demo we select an extremely simple intermediate representation for programs
such that the algorithm can get all the focus. Statements are represented by 
integers (think the starting line of the statement in the source file), variables
are strings, definitions and uses are simply the name of the variable tupled with
the statement that the variable is defined or used in:

```rascal-commands
import Relation;
import analysis::graphs::Graph;

alias Stat = int;
alias Var = str;
alias Def  = tuple[Stat, Var];
alias Use = tuple[Stat, Var];
```

In an actual analysis we would use more complex representations, for example
qualified names as ((Values-Location)) and statements as ((Rascal:AlgebraicDataType)) syntax trees.

The following three helper functions represent queries on the intermediate representation that
the main algorithm requires:
```rascal-commands,continue
rel[Stat, Def] definition(rel[Stat, Var] defs)
	= {<s, <s, v>> | <Stat s, Var v> <- defs};

rel[Stat, Def] use(rel[Stat, Var] uses)
	= {<s, <s, v>> | <Stat s, Var v> <- uses};

rel[Stat, Def] kill(rel[Stat, Var] defs) { 
	return {<s1, <s2, v>> | <Stat s1, Var v> <- defs, <Stat s2, v> <- defs, s1 != s2};
}
```

The `reachingDefinitions` algorithm is almost straight out of the book:

```rascal-commands,continue
rel[Stat, Def] reachingDefinitions(rel[Stat, Var] defs, rel[Stat, Stat] pred) {
	set[Stat] statement = carrier(pred);
	rel[Stat, Def] def  = definition(defs);
	rel[Stat, Def] kill = kill(defs);

	// The set of mutually recursive dataflow equations that has to be solved:

	rel[Stat, Def] \in = {};
	rel[Stat, Def] out = def;
	
	solve (\in, out) {
       \in =  {<s, d> | int s <- statement, Stat p <- predecessors(pred, s), Def d <- out[p]};
       out = {<s, d> | int s <- statement, Def d <- def[s] + (\in[s] - kill[s])};
	};

	return \in;
}
```

Let's take this for a spin. In the ASU dragon book on page 626 we find the following example:
```rascal-shell,continue
PRED = { <1,2>, <2,3>, <3,4>, <4,5>, <5,6>, <5,7>, <6,7>, <7,4>};
DEFS = { <1, "i">, <2, "j">, <3, "a">, <4, "i">, <5, "j">, <6, "a">, <7, "i">};
// let's test the `kill` function:
assert kill(DEFS) ==  {<1, <4, "i">>, <1, <7, "i">>, <2, <5, "j">>, <3, <6, "a">>, 
                       <4, <1, "i">>, <4, <7, "i">>, <5, <2, "j">>, <6, <3, "a">>, 
                       <7, <1, "i">>, <7, <4, "i">>};
// and what we expect from `reachingDefinitions` according to the Dragon book:
RES = reachingDefinitions(DEFS, PRED);
assert RES == {<2, <1, "i">>, <3, <2, "j">>, <3, <1, "i">>, <4, <3, "a">>, 
               <4, <2, "j">>, <4, <1, "i">>, <4, <7, "i">>, <4, <5, "j">>, 
               <4, <6, "a">>, <5, <4, "i">>, <5, <3, "a">>, <5, <2, "j">>, 
               <5, <5, "j">>, <5, <6, "a">>, <6, <5, "j">>, <6, <4, "i">>, 
               <6, <3, "a">>, <6, <6, "a">>, <7, <5, "j">>, <7, <4, "i">>, 
               <7, <3, "a">>, <7, <6, "a">>};
```


Next up is `liveVariables` which resembles the same kind of fixed-point solution as `reachingDefinitions`,
because that is how it is defined in the book:

```rascal-commands,continue
rel[Stat, Def] liveVariables(rel[Stat, Var] defs, rel[Stat, Var] uses, rel[Stat, Stat] pred) {
	set[Stat] statement = carrier(pred);
	rel[Stat, Def] def  = definition(defs);
	rel[Stat, Def] use = use(uses);
	
    rel[Stat, Def] lin = {};
	rel[Stat, Def] lout = def;
 	
 	solve (lin, lout) {
		lin  =  {<s, d> | Stat s <- statement,  Def d <- use[s] + (lout[s] - (def[s]))};
		lout =  {<s, d> | Stat s <- statement,  Stat succ <- successors(pred, s), Def d <- lin[succ] };
	}
	return lin;
}
```

On page 619 is an extended example we can use to test `liveVariables`:
```ascii-art
	1: i := m-2				            i := m-2
        |
  2: j := n				                j := n
        |
  3: a := u1			             	a := u1
	      |					            do
	      V
	4: i :=i+1  <--------------			i := i+1
        |                      |
      5: j :=j-1               |			j := j-1
 	 /          \              |			if e1 then
	/            \             |			   a := u2
  V              V             |			else
  6: a := u2 ---> 7: i := u3 ---			   i := u3
						                while e2
```

We can represent this in our simplified intermediate representation like so:
```rascal-shell,continue
ROOT = 1;
PRED= { <1,2>, <2,3>, <3,4>, <4,5>, <5,6>,<5,7>,<6,7>,<7,4>};
DEFS= { <"i",1>,<"j",2>,<"a",3>,<"i",4>,<"j",5>,<"a",6>,<"i",7>}<1,0>;
USES= {<"m",1>,<"n",2>,<"u1",3>,<"i",4>,<"j",5>,<"u2",6>,<"u3",7>}<1,0>;
```
And now we can test if the implementation matches expectations for this example:

```rascal-shell,continue
assert liveVariables(DEFS, USES, PRED) ==
	 	      {<1, <6, "u2">>, <1, <7, "u3">>, <1, <5, "j">>, <1, <4, "i">>,
		       <1, <3, "u1">>, <1, <2, "n">>, <1, <1, "m">>, 
		       <2, <7, "u3">>, <2, <6, "u2">>, <2, <5, "j">>, <2, <4, "i">>, 
		       <2, <3, "u1">>, <2, <2, "n">>, 
		       <3, <7, "u3">>, <3, <6, "u2">>, <3, <5, "j">>, <3, <4, "i">>, 
		       <3, <3, "u1">>, 
		       <5, <4, "i">>, <5, <7, "u3">>, <5, <6, "u2">>, <5, <5, "j">>, 
		       <6, <5, "j">>, <6, <4, "i">>, <6, <7, "u3">>, <6, <6, "u2">>, 
		       <7, <6, "u2">>, <7, <5, "j">>, <7, <4, "i">>, <7, <7, "u3">>, 
		       <4, <7, "u3">>, <4, <6, "u2">>, <4, <5, "j">>, <4, <4, "i">>};
```
