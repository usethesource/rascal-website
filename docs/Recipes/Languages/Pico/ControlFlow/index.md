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

public data CFNode // <1>
    = entry(loc location)
    | exit()
    | choice(loc location, EXP exp)
    | statement(loc location, STATEMENT stat)
    ;

alias CFGraph = tuple[set[CFNode] entry, Graph[CFNode] graph, set[CFNode] exit]; // <2>

CFGraph cflowStat(s:asgStat(PicoId Id, EXP Exp)) { // <3>
   S = statement(s@location, s);
   return <{S}, {}, {S}>;
}

CFGraph cflowStat(ifElseStat(EXP Exp,                  // <4>
                              list[STATEMENT] Stats1,
                              list[STATEMENT] Stats2)){
   CF1 = cflowStats(Stats1); 
   CF2 = cflowStats(Stats2); 
   E = {choice(Exp@location, Exp)}; 
   return < E, (E * CF1.entry) + (E * CF2.entry) + CF1.graph + CF2.graph, CF1.exit + CF2.exit >;
}

CFGraph cflowStat(whileStat(EXP Exp, list[STATEMENT] Stats)) { // <5>
   CF = cflowStats(Stats); 
   E = {choice(Exp@location, Exp)}; 
   return < E, (E * CF.entry) + CF.graph + (CF.exit * E), E >;
}

CFGraph cflowStats(list[STATEMENT] Stats){ // <6>
  if(size(Stats) == 1) {
     return cflowStat(Stats[0]);
  }
  
  CF1 = cflowStat(Stats[0]);
  CF2 = cflowStats(tail(Stats));
  
  return < CF1.entry, CF1.graph + CF2.graph + (CF1.exit * CF2.entry), CF2.exit >;
}

CFGraph cflowProgram(PROGRAM P:program(list[DECL] _, list[STATEMENT] Series)){ // <7>
   CF = cflowStats(Series);
   Entry = entry(P@location);
   Exit  = exit();
   
   return <{Entry}, ({Entry} * CF.entry) + CF.graph + (CF.exit * {Exit}), {Exit}>;
}

public CFGraph cflowProgram(str txt) = cflowProgram(load(txt)); // <8>

```

Notes:

<1> First we define a data type `CFNODE` that represents the various elements of a control flow graph:
    *  `entry`: the entry point of the program.
    *  `exit` the exit point of the program.
    *  `choice`: a decision point in the control flow.
    *  `statement`: a statement in the control flow.

<2> Next we define `CFGRAPH` , an alias for a tuple consisting of the following three elements:
    *  `entry`: the set of entry nodes of the graph.
    *  `graph`: the actual graph of `CFNODE`s.
    *  `exit`: the set of exit nodes.

   The computation of the control flow graph is defined by the functions 
  `cflowStat`, `cflowStats`, `cflowDecls` and `cflowProgram`.

<3> The control flow of an assignment statement is computed by wrapping
    the assignment statement as a `CFNODE` and return a `CFGRAPH` with the assignment
    statement as entry and exit node, and no internal connections.

<4> The control flow of an if-then-else statement is computed as follows:
    *  First the control flows of the then part and the else part are computed,
        yielding `CF1` and `CF2`.
    *  Next a set `E` is created that consist of a the test of the if-then-else statement
        wrapped as choice node.
    *  Finally, a `CFGRAPH` is returned consisting of the followng three elements:
        ***  The entry point set `E`.
        ***  A graph consisting of the connections between the entry point and both
             branches (`E * CF1.entry + E * CF2.entry`) and the internal graphs of both branches
             (`CF1.graph + CF2.graph`).
        ***  The union of exit nodes of both branches (`CF1.exit + CF2.exit`).

<5> The control flow of  while-statement is computed in a similar fashion,
    except that the exit of the loop body has to be connected with the entry
    of the while loop.

<6> The control flow graph for a series of statements is obtained by connecting
    the exits and entries of consecutive statements.

<7> The control flow graph of a complete program is obtained by
    creating an entry and an exit node and connecting them to the graph of
    the statements of the program.

<8> Shows the steps from text to control flow graph.

We can now create a CFG for a small Pico program:

```rascal-shell 
rascal>import demo::lang::Pico::ControlFlow;
ok
rascal>cflowProgram("begin declare n : natural, s : string; n := 10; s := \"a\"; while n do s := s + \"a\"; n := n - 1 od end");
tuple[set[CFNode] entry,Graph[CFNode] graph,set[CFNode] exit]: <{entry(|unknown:///|(0,100,<1,0>,<1,100>))},{
  <statement(
    |unknown:///|(48,8,<1,48>,<1,56>),
    asgStat(
      "s",
      strCon(
        "\"a\"",
        location=|unknown:///|(53,3,<1,53>,<1,56>),
        comments=()),
      location=|unknown:///|(48,8,<1,48>,<1,56>),
      comments=())),choice(
    |unknown:///|(64,1,<1,64>,<1,65>),
    id(
      "n",
      location=|unknown:///|(64,1,<1,64>,<1,65>),
      comments=()))>,
  <statement(
    |unknown:///|(69,12,<1,69>,<1,81>),
    asgStat(
      "s",
      add(
        id(
          "s",
          location=|unknown:///|(74,1,<1,74>,<1,75>),
          comments=()),
        strCon(
          "\"a\"",
          location=|unknown:///|(78,3,<1,78>,<1,81>),
          comments=()),
        location=|unknown:///|(74,7,<1,74>,<1,81>),
        comments=()),
      location=|unknown:///|(69,12,<1,69>,<1,81>),
      comments=())),statement(
    |unknown:///|(83,10,<1,83>,<1,93>),
    asgStat(
      "n",
      sub(
        id(
          "n",
          location=|unknown:///|(88,1,<1,88>,<1,89>),
          comments=()),
        natCon(
          1,
          location=|unknown:///|(92,1,<1,92>,<1,93>),
          comments=()),
        location=|unknown:///|(88,5,<1,88>,<1,93>),
        comments=()),
      location=|unknown:///|(83,10,<1,83>,<1,93>),
      comments=()))>,
  <statement(
    |unknown:///|(39,7,<1,39>,<1,46>),
    asgStat(
      "n",
      natCon(
        10,
        location=|unknown:///|(44,2,<1,44>,<1,46>),
        comments=()),
      location=|unknown:///|(39,7,<1,39>,<1,46>),
      comments=())),statement(
    |unknown:///|(48,8,<1,48>,<1,56>),
    asgStat(
      "s",
      strCon(
        "\"a\"",
        location=|unknown:///|(53,3,<1,53>,<1,56>),
        comments=()),
      location=|unknown:///|(48,8,<1,48>,<1,56>),
      comments=()))>,
  <statement(
    |unknown:///|(83,10,<1,83>,<1,93>),
    asgStat(
      "n",
      sub(
        id(
          "n",
          location=|unknown:///|(88,1,<1,88>,<1,89>),
          comments=()),
        natCon(
          1,
          location=|unknown:///|(92,1,<1,92>,<1,93>),
          comments=()),
        location=|unknown:///|(88,5,<1,88>,<1,93>),
        comments=()),
      location=|unknown:///|(83,10,<1,83>,<1,93>),
      comments=())),choice(
    |unknown:///|(64,1,<1,64>,<1,65>),
    id(
      "n",
      location=|unknown:///|(64,1,<1,64>,<1,65>),
      comments=()))>,
  <entry(|unknown:///|(0,100,<1,0>,<1,100>)),statement(
    |unknown:///|(39,7,<1,39>,<1,46>),
    asgStat(
      "n",
      natCon(
        10,
        location=|unknown:///|(44,2,<1,44>,<1,46>),
        comments=()),
      location=|unknown:///|(39,7,<1,39>,<1,46>),
      comments=()))>,
  <choice(
    |unknown:///|(64,1,<1,64>,<1,65>),
    id(
      "n",
      location=|unknown:///|(64,1,<1,64>,<1,65>),
      comments=())),exit()>,
  <choice(
    |unknown:///|(64,1,<1,64>,<1,65>),
    id(
      "n",
      location=|unknown:///|(64,1,<1,64>,<1,65>),
      comments=())),statement(
    |unknown:///|(69,12,<1,69>,<1,81>),
    asgStat(
      "s",
      add(
        id(
          "s",
          location=|unknown:///|(74,1,<1,74>,<1,75>),
          comments=()),
        strCon(
          "\"a\"",
          location=|unknown:///|(78,3,<1,78>,<1,81>),
          comments=()),
        location=|unknown:///|(74,7,<1,74>,<1,81>),
        comments=()),
      location=|unknown:///|(69,12,<1,69>,<1,81>),
      comments=()))>
},{exit()}>
```

Is the above not very motivating to move on to [Visualize](../../../../Recipes/Languages/Pico/Visualize)?

