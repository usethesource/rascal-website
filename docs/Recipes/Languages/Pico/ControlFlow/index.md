---
title: ControlFlow
---

#### Synopsis

Compute the control flow graph for a Pico program.

#### Examples

A control flow graph shows how the entry and exit points of a program are connected with each other via all
decision points and statements in the program. Typically, an assignment statement is a single node in the graph
and an if-then-else statement creates a decision point (its test) that connects the then branch and the else branch.
The exits of each branch are connected to the exit of the if-then-else statement as a whole.

A control flow graph for Pico programs can be created as follows:

```rascal 
module demo::lang::Pico::ControlFlow

import analysis::graphs::Graph;
import demo::lang::Pico::Abstract;
import demo::lang::Pico::Load;
import List;

data CFNode 
    = entry(loc location)
    | exit()
    | choice(loc location, EXP exp)
    | statement(loc location, STATEMENT stat)
    ;

// highlight-next-line
alias CFGraph = tuple[set[CFNode] entry, Graph[CFNode] graph, set[CFNode] exit]; 

// highlight-next-line
CFGraph cflowStat(s:asgStat(PicoId Id, EXP Exp)) { 
   S = statement(s.src, s);
   return <{S}, {}, {S}>;
}

// highlight-next-line
CFGraph cflowStat(ifElseStat(EXP Exp,                  
                              list[STATEMENT] Stats1,
                              list[STATEMENT] Stats2)) {
   CF1 = cflowStats(Stats1); 
   CF2 = cflowStats(Stats2); 
   E = {choice(Exp.src, Exp)}; 
   return < E, (E * CF1.entry) + (E * CF2.entry) + CF1.graph + CF2.graph, CF1.exit + CF2.exit >;
}

// highlight-next-line
CFGraph cflowStat(whileStat(EXP Exp, list[STATEMENT] Stats)) { 
   CF = cflowStats(Stats); 
   E = {choice(Exp.src, Exp)}; 
   return < E, (E * CF.entry) + CF.graph + (CF.exit * E), E >;
}

// highlight-next-line
CFGraph cflowStats(list[STATEMENT] Stats) { 
  if(size(Stats) == 1) {
     return cflowStat(Stats[0]);
  }
  
  CF1 = cflowStat(Stats[0]);
  CF2 = cflowStats(tail(Stats));
  
  return < CF1.entry, CF1.graph + CF2.graph + (CF1.exit * CF2.entry), CF2.exit >;
}

// highlight-next-line
CFGraph cflowProgram(PROGRAM P:program(list[DECL] _, list[STATEMENT] Series)) { 
   CF = cflowStats(Series);
   Entry = entry(P.src);
   Exit  = exit();
   
   return <{Entry}, ({Entry} * CF.entry) + CF.graph + (CF.exit * {Exit}), {Exit}>;
}

// highlight-next-line
CFGraph cflowProgram(str txt) = cflowProgram(load(txt)); 

```

                
Notes:

* First we define a data type `CFNODE` that represents the various elements of a control flow graph:
    *  `entry`: the entry point of the program.
    *  `exit` the exit point of the program.
    *  `choice`: a decision point in the control flow.
    *  `statement`: a statement in the control flow.

* Next we define `CFGRAPH` , an alias for a tuple consisting of the following three elements:
    *  `entry`: the set of entry nodes of the graph.
    *  `graph`: the actual graph of `CFNODE`s.
    *  `exit`: the set of exit nodes.

   The computation of the control flow graph is defined by the functions 
  `cflowStat`, `cflowStats`, `cflowDecls` and `cflowProgram`.

* The control flow of an assignment statement is computed by wrapping
    the assignment statement as a `CFNODE` and return a `CFGRAPH` with the assignment
    statement as entry and exit node, and no internal connections.

* The control flow of an if-then-else statement is computed as follows:
    *  First the control flows of the then part and the else part are computed,
        yielding `CF1` and `CF2`.
    *  Next a set `E` is created that consist of a the test of the if-then-else statement
        wrapped as choice node.
    *  Finally, a `CFGRAPH` is returned consisting of the followng three elements:
        *  The entry point set `E`.
        *  A graph consisting of the connections between the entry point and both
             branches (`E * CF1.entry + E * CF2.entry`) and the internal graphs of both branches
             (`CF1.graph + CF2.graph`).
        *  The union of exit nodes of both branches (`CF1.exit + CF2.exit`).

* The control flow of  while-statement is computed in a similar fashion,
    except that the exit of the loop body has to be connected with the entry
    of the while loop.

* The control flow graph for a series of statements is obtained by connecting
    the exits and entries of consecutive statements.

* The control flow graph of a complete program is obtained by
    creating an entry and an exit node and connecting them to the graph of
    the statements of the program.

* Shows the steps from text to control flow graph.

We can now create a CFG for a small Pico program:

```rascal-shell 
rascal>import demo::lang::Pico::ControlFlow;
ok
rascal>cflowProgram("begin declare n : natural, s : string; n := 10; s := \"a\"; while n do s := s + \"a\"; n := n - 1 od end");
tuple[set[CFNode] entry,Graph[CFNode] graph,set[CFNode] exit]: <{entry(|unknown:///|(0,100,<1,0>,<1,100>))},{
  <statement(
    |unknown:///|(39,7,<1,39>,<1,46>),
    asgStat(
      "n",
      natCon(
        10,
        src=|unknown:///|(44,2,<1,44>,<1,46>),
        comments=()),
      src=|unknown:///|(39,7,<1,39>,<1,46>),
      comments=())),statement(
    |unknown:///|(48,8,<1,48>,<1,56>),
    asgStat(
      "s",
      strCon(
        "\"a\"",
        src=|unknown:///|(53,3,<1,53>,<1,56>),
        comments=()),
      src=|unknown:///|(48,8,<1,48>,<1,56>),
      comments=()))>,
  <statement(
    |unknown:///|(48,8,<1,48>,<1,56>),
    asgStat(
      "s",
      strCon(
        "\"a\"",
        src=|unknown:///|(53,3,<1,53>,<1,56>),
        comments=()),
      src=|unknown:///|(48,8,<1,48>,<1,56>),
      comments=())),choice(
    |unknown:///|(64,1,<1,64>,<1,65>),
    id(
      "n",
      src=|unknown:///|(64,1,<1,64>,<1,65>),
      comments=()))>,
  <statement(
    |unknown:///|(69,12,<1,69>,<1,81>),
    asgStat(
      "s",
      add(
        id(
          "s",
          src=|unknown:///|(74,1,<1,74>,<1,75>),
          comments=()),
        strCon(
          "\"a\"",
          src=|unknown:///|(78,3,<1,78>,<1,81>),
          comments=()),
        src=|unknown:///|(74,7,<1,74>,<1,81>),
        comments=()),
      src=|unknown:///|(69,12,<1,69>,<1,81>),
      comments=())),statement(
    |unknown:///|(83,10,<1,83>,<1,93>),
    asgStat(
      "n",
      sub(
        id(
          "n",
          src=|unknown:///|(88,1,<1,88>,<1,89>),
          comments=()),
        natCon(
          1,
          src=|unknown:///|(92,1,<1,92>,<1,93>),
          comments=()),
        src=|unknown:///|(88,5,<1,88>,<1,93>),
        comments=()),
      src=|unknown:///|(83,10,<1,83>,<1,93>),
      comments=()))>,
  <entry(|unknown:///|(0,100,<1,0>,<1,100>)),statement(
    |unknown:///|(39,7,<1,39>,<1,46>),
    asgStat(
      "n",
      natCon(
        10,
        src=|unknown:///|(44,2,<1,44>,<1,46>),
        comments=()),
      src=|unknown:///|(39,7,<1,39>,<1,46>),
      comments=()))>,
  <statement(
    |unknown:///|(83,10,<1,83>,<1,93>),
    asgStat(
      "n",
      sub(
        id(
          "n",
          src=|unknown:///|(88,1,<1,88>,<1,89>),
          comments=()),
        natCon(
          1,
          src=|unknown:///|(92,1,<1,92>,<1,93>),
          comments=()),
        src=|unknown:///|(88,5,<1,88>,<1,93>),
        comments=()),
      src=|unknown:///|(83,10,<1,83>,<1,93>),
      comments=())),choice(
    |unknown:///|(64,1,<1,64>,<1,65>),
    id(
      "n",
      src=|unknown:///|(64,1,<1,64>,<1,65>),
      comments=()))>,
  <choice(
    |unknown:///|(64,1,<1,64>,<1,65>),
    id(
      "n",
      src=|unknown:///|(64,1,<1,64>,<1,65>),
      comments=())),exit()>,
  <choice(
    |unknown:///|(64,1,<1,64>,<1,65>),
    id(
      "n",
      src=|unknown:///|(64,1,<1,64>,<1,65>),
      comments=())),statement(
    |unknown:///|(69,12,<1,69>,<1,81>),
    asgStat(
      "s",
      add(
        id(
          "s",
          src=|unknown:///|(74,1,<1,74>,<1,75>),
          comments=()),
        strCon(
          "\"a\"",
          src=|unknown:///|(78,3,<1,78>,<1,81>),
          comments=()),
        src=|unknown:///|(74,7,<1,74>,<1,81>),
        comments=()),
      src=|unknown:///|(69,12,<1,69>,<1,81>),
      comments=()))>
},{exit()}>
```

