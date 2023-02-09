---
title: Slicing
---

We demonstrate a relational definition of program slicing 
based on the definitions given in :

> D. Jackson & E.J. Rollins,
> A new model of program dependences for reverse engineering,
> Proceedings of the 2nd ACM SIGSOFT symposium on Foundations of software engineering
> Pages: 2 - 10, 1994

```rascal-prepare
import Relation;
import analysis::graphs::Graph;
alias Stat = int;
alias Var  = str;
alias Def  = tuple[Stat, Var];
alias Use  = tuple[Stat, Var];
rel[Stat, Def] definition(rel[Stat, Var] defs) = {<s, <s, v>> | <Stat s, Var v> <- defs};
rel[Stat, Def] use(rel[Stat, Var] uses) = {<s, <s, v>> | <Stat s, Var v> <- uses};
rel[Stat, Def] kill(rel[Stat, Var] defs) { 
	return {<s1, <s2, v>> | <Stat s1, Var v> <- defs, <Stat s2, v> <- defs, s1 != s2};
}
rel[Stat, Def] reachingDefinitions(rel[Stat, Var] defs, rel[Stat, Stat] pred) {
	set[Stat] statement = carrier(pred);
	rel[Stat, Def] def  = definition(defs);
	rel[Stat, Def] kill = kill(defs);
	rel[Stat, Def] \in = {};
	rel[Stat, Def] out = def;
	solve (\in, out) {
       \in =  {<s, d> | int s <- statement, Stat p <- predecessors(pred, s), Def d <- out[p]};
       out = {<s, d> | int s <- statement, Def d <- def[s] + (\in[s] - kill[s])};
	};
	return \in;
}
rel[&T, set[&T]] dominators(rel[&T,&T] pred, &T root) {
	set[&T] vertices = carrier(pred);
	return  { <v, (vertices - {v, root}) - reachX(pred, {root}, {v})> |  &T v <- vertices};
}
```

We need the analyses of ((ReachingDefs)) and ((Dominators)) to compute `backwardSlice`:
```rascal-commands,continue
set[Use] BackwardSlice(
	set[Stat] controlstatement, 
	rel[Stat, Stat] pred,
	rel[Stat, Var] uses,
	rel[Stat, Var] defs,	
	Use criterion) {

	rel[Stat, Def] reach = reachingDefinitions(defs, pred);

	// Compute the relation between each use and corresponding definitions: ud
	rel[Use, Def] useDef = 
 	 {<<s1, v>, <s2, v>> | <Stat s1, Var v> <- uses, <Stat s2, v> <- reach[s1]};

	// Internal dependencies per statement
	rel[Def, Use] defUsePerStat 
        = {<<s, v1>, <s, v2>> | <Stat s, Var v1> <- defs, <s, Var v2> <- uses}
        + {<<s, v>, <s, "EXEC">> | <Stat s, Var v> <- defs}
        + {<<s, "TEST">, <s,v>> | Stat s <- controlstatement, <s, Var v> <- domainR(uses, {s})};

	// Control dependence: control-dependence
	rel[Stat, set[Stat]] controldominator = domainR(dominators(pred, 1), controlstatement);

	rel[Def, Use] controlDependence  =
	   {<<s2, "EXEC">, <s1,"TEST">> | <Stat s1, set[Stat] s2s> <- controldominator, Stat s2 <- s2s};

	// Control and data dependence: use-control-def
	rel[Use, Def] useControlDef = useDef + controlDependence;
	rel[Use, Use] useUse = (useControlDef o defUsePerStat)*;

	return useUse[criterion];
}
```

This is an example from Frank Tip's slicing survey:
```pseudo
1: read(n)
2: i := 1
3: sum := 0
4: product := 1
5: while i<= n do
   begin
6:	sum := sum + i
7:	product := product * i;
8:	i := i + 1
   end
     9: write(sum)
10: write(product)
```

In our simplified internal program model this looks like the follow relations:
```rascal-shell,continue
PRED = {<1,2>, <2,3>, <3,4>, <4,5>, <5,6>, <5,9>, <6,7>, <7,8>,<8,5>, <8,9>, <9,10>};
DEFS = {<1, "n">, <2, "i">, <3, "sum">, <4,"product">, <6, "sum">, <7, "product">, <8, "i">};
USES = {<5, "i">, <5, "n">, <6, "sum">, <6,"i">, <7, "product">, <7, "i">, <8, "i">, <9, "sum">, <10, "product">};
CONTROLSTATEMENT = { 5 };
```

Now we can try this out:
```rascal-shell,continue
Example1 = BackwardSlice(CONTROLSTATEMENT, PRED, USES, DEFS, <9, "sum">);
assert Example1 == { <1, "EXEC">, <2, "EXEC">,  <3, "EXEC">, <5, "i">, <5, "n">,  <6, "sum">, <6, "i">, <6, "EXEC">, <8, "i">, <8, "EXEC">, <9, "sum"> };
Example2 = BackwardSlice(CONTROLSTATEMENT, PRED, USES, DEFS,<10, "product">);
assert Example2 == { <1, "EXEC">,  <2, "EXEC">, <4, "EXEC">, <5, "i">, <5, "n">, <7, "i">, <7, "product">, <7, "EXEC">, <8, "i">, <8, "EXEC">, <10,  "product">  };
```
