---
layout: "front"
title: "Home"
---

## Metaprogramming for the masses

<p class="lead"> 

Rascal conveniently integrates all technological aspects for the creation of
meta programs.  Use it for any kind of metaprogramming task: to _construct
parsers for programming languages_ by writing declarative, modular grammars, to
_analyze and transform source code_ using a metaprogramming language with
built-in support for relational modeling, generic traversal, querying, pattern
matching and code generation, or ---as a language workbench--- to define DSLs
with full IDE support.

Rascal is a programming language, not a specification language, such that Rascal
programs can be created by, understood by and debugged by _programmers_.
</p>


### A DSL in 36 lines of code

The following example shows how to define a simple DSL for state machines. It includes a parser, a check for unreachable states and a compiler to Java code. 

The grammar of the DSL is defined using Rascal's grammar formalism which is fully integrated in the language.

<img src="/assets/img/SyntaxSTM.png" alt="SyntaxSTM" style="width:450px; display: block; margin-left: auto; margin-right: auto;"/>

This grammar reuses identifier syntax and whitespace convention from the standard library. Each non-terminal defines a *type*. Parse trees are typed values like any other value in Rascal.

To check for unreachable states, we first create a binary relation between states. The first comprehension uses *concrete syntax* matching to find a state's transitions. The post-fix `+` computes the transitive closure of the relation. Then  we return all states are not reachable from the initial state.

<img src="/assets/img/AnalyzeSTM.png" alt="AnalyzeSTM" style="width:487px; display: block; margin-left: auto; margin-right: auto;"/>

There are various ways of compiling a DSL to target code in Rascal. The simplest is using string templates and generate code in a general purpose language. The following snippet shows the generation of a Java while loop to execute a state machine.

<img src="/assets/img/CompileSTM.png" alt="CompileSTM" style="width:325px; display: block; margin-left: auto; margin-right: auto;"/>


String templates allow arbitrary Rascal values and control-flow constructs to be interpolated in string literals. Note how this code does not use concrete matching, but instead uses the labels defined in the grammar (i.e., `states`, `out`, `event`, and `to`).

And that's it! A complete DSL in 36 lines of code. Of course, the parser and the `unreachable` and `compile` functions can be connected to the IDE. This provides custom syntax highlighting, error-marking and automatic building in state machine editors.





