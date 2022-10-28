---
title: Design and Implementation of Domain Specific Languages
authors: [tvdstorm,jurgenv]
---

One of the goals of Rascal is to allow the design and implementation of [Domain-Specific Languages](https://en.wikipedia.org/wiki/Domain-specific_language). 

In this usecase description we give a flavor of how you can use Rascal to:
1. define the syntax of a DSL;
2. create a simple semantic check;
3. how to compile the DSL to Java;
4. instantiate a VScode extension or Eclipse Plugin for the DSL.

The following example shows how to define a simple DSL for "state machines". It includes a parser, a check for unreachable states and a compiler to Java code. 

### Syntax definitions and parsing

The grammar of the DSL is defined using Rascal's grammar formalism which is fully integrated into the language.Shown below is the syntax definition of a simple state machine language, inspired by  Martin Fowler's example language for [gothic security](http://www.informit.com/articles/article.aspx?p=1592379).

```rascal
module Syntax

extend lang::std::Layout;
extend lang::std::Id;

start syntax Machine = machine: State+ states;         ❶  
syntax State = state: "state" Id name Trans* out;      ❶  
syntax Trans = trans: Id event ":" Id to;              ❷  
```


* ❶  A state machine consists of a number of named state declarations
* ❷  each state contains transitions to other states (identified by name) when a certain event happens. 

The grammar reuses identifier syntax and whitespace convention from the standard library, see [Layout](../../../Library/lang/std/Layout.md) and [Id](../../../Library/lang/std/Id.md). Each non-terminal defines a *type* and a *parser*. Parse trees are typed values like any other value in Rascal. Let's use a parser to parse this example state machine:

```
state Init
    buttonOn : Started

state Started
    buttonPauze: Paused
    buttonPrint: Printing

state Printing
    printingDone: Started

state Failed
    buttonReset: Init
```



```rascal-shell ,continue
rascal>import ParseTree;
ok
rascal>start[Machine] myStartMachine = parse(#start[Machine], |tmp:///example.sm|);
start[Machine]: (start[Machine]) `state Init
   buttonOn : Started

state Started
   buttonPauze: Paused
   buttonPrint: Printing

state Printing
   printingDone: Started

state Failed
   buttonReset: Init
    `
rascal>Machine myMachine = myStartMachine.top; // drop the whitespace before and after the machine
Machine: (Machine) `state Init
   buttonOn : Started

state Started
   buttonPauze: Paused
   buttonPrint: Printing

state Printing
   printingDone: Started

state Failed
   buttonReset: Init`
```

#### Functions that analyze parse trees

So now the DSL code has been transformed to a tree to type `Machine`. As a result, you can write functions that process such trees. 
An example function, would be a semantic check on state machines, such as finding all unreachable states: 

```rascal
module Analyze

import Syntax;

set[str] unreachable(Machine m) {
  r = { <"<q1>","<q2>"> | (State)`state <Id q1> <Trans* ts>` <- m.states, 
				  (Trans)`<Id _>: <Id q2>` <- ts }+;
  qs = [ "<q.name>" | q <- m.states ];
  return { q | q <- qs, q notin r[qs[0]] } - qs[0];
}
```


To check for unreachable states, we first create a binary relation between states using a comprehension. 
This comprehension uses *concrete syntax* matching to find a state's transitions. 
* The pattern between backticks is written in the object language, which in this case is the statemachine language defined in the grammar above. 
* The variables `q1` and `ts` in between `<` and `>` are bound for each state that is found in the machine `m`. 
* `"<q1>"` means the parse tree q1 is reduced to the literal string that it parsed (interpolated into an empty string)
* A similar pattern is used to find the target state `q2` is found in each transition in `ts`.
* The post-fix `+` then computes the transitive closure of the relation. 

The relation `r` is based on the transitions in a state machine. 
This means that it does not include declared (final) states which have no outgoing transitions.
We collect the names of all defined states in `qs` , again using a comprehension. 

The initial state is (conventionally) defined to be the state that is declared first. 
An unreachable state is then defined as a state that is not in the right image of the initial state in the transitive closure of the transition relation. 
This is exactly what is described by the last comprehension! 
The notation `r[x]`, where `r` is a relation  is short hand for `{ y | <x, y> <- r }`.

Let's take her for a spin:

```rascal-shell ,continue
rascal>unreachableIds = unreachable(myMachine);
set[str]: {"Failed"}
```

#### Generating source code

There are various ways of compiling a DSL to target code in Rascal. The easiest and most direct way is using Rascal's string templates to generate code in a general purpose language. The following snippet shows the generation of a Java while loop to execute a state machine.

```rascal
module Compile

import Syntax;

str compile(Machine m) =
  "while (true) {
  '  event = input.next();
  '  switch (current) { 
  '    <for (q <- m.states) {>
  '    case \"<q.name>\":
  '      <for (t <- q.out) {>
  '      if (event.equals(\"<t.event>\"))
  '        current = \"<t.to>\";
  '      <}>
  '      break;
  '    <}>
  '  }
  '}"; 
```


String templates allow arbitrary Rascal values and control-flow constructs to be interpolated in string literals. Note how this code does not use concrete matching, but instead uses the labels defined in the grammar (i.e., `states`, `out`, `event`, and `to`).

Let's have a look at the output of `compile`:

```rascal-shell ,continue
rascal>import IO;
ok
rascal>println(compile(myMachine))
while (true) {
  event = input.next();
  switch (current) { 
  
    case "Init":
      
      if (event.equals("buttonOn"))
        current = "Started";
      
      break;
    
    case "Started":
      
      if (event.equals("buttonPauze"))
        current = "Paused";
      
      if (event.equals("buttonPrint"))
        current = "Printing";
      
      break;
    
    case "Printing":
      
      if (event.equals("printingDone"))
        current = "Started";
      
      break;
    
    case "Failed":
      
      if (event.equals("buttonReset"))
        current = "Init";
      
      break;
    
  }
}
ok
```

And that's it! A complete DSL in 36 lines of code. Of course, the parser and the `unreachable` and `compile` functions can be connected to the IDE. This provides custom syntax highlighting, error-marking and automatic building in state machine editors.

#### Constructing an IDE 

* For Eclipse Rascal offers plugin generation via the `util::IDE` module. You can register the language and the respective analysis, compilation and visualization functions with a single function call. The standard library module `util::IDEServices` allows for calling into features of the IDE (such as starting an editor or applying a refactoring).
* For VScode an interface with similar features and abstraction level is offered in `util::LanguageServer`, but geared towards the _Language Service Protocol_.

