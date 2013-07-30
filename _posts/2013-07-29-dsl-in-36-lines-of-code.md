---
published: true
title: A DSL in 36 lines of code
author: Tijs van der Storm
authorlink: "http://www.cwi.nl/~storm"
layout: post
---



The following example shows how to define a simple DSL for state machines. It includes a parser, a check for unreachable states and a compiler to Java code. 

The grammar of the DSL is defined using Rascal's grammar formalism which is fully integrated in the language.

<pre class="rascal"><code><span class="Keyword">module</span> Syntax

<span class="Keyword">extend</span> lang::std::Layout;
<span class="Keyword">extend</span> lang::std::Id;

<span class="Keyword">start</span> <span class="Keyword">syntax</span> Machine = machine: State+ states;
<span class="Keyword">syntax</span> State = <span class="Comment">@Foldable</span> state: <span class="Constant">"state"</span> Id name Trans* out;
<span class="Keyword">syntax</span> Trans = trans: Id event <span class="Constant">":"</span> Id to;</code></pre>

This grammar reuses identifier syntax and whitespace convention from the standard library. Each non-terminal defines a *type*. Parse trees are typed values like any other value in Rascal.

To check for unreachable states, we first create a binary relation between states. The first comprehension uses *concrete syntax* matching to find a state's transitions. The post-fix `+` computes the transitive closure of the relation. Then  we return all states are not reachable from the initial state.

<pre class="rascal"><code><span class="Keyword">module</span> Analyze

<span class="Keyword">import</span> Syntax;

<span class="Keyword">set</span>[Id] unreachable(Machine m) {
  r = { &lt;q1,q2&gt; | (State)`<span class="Keyword">state</span> <span class="MetaVariable">&lt;Id q1&gt;</span> <span class="MetaVariable">&lt;Trans* ts&gt;</span>` &lt;- m.states, 
				  (Trans)`<span class="MetaVariable">&lt;Id _&gt;</span>: <span class="MetaVariable">&lt;Id q2&gt;</span>` &lt;- ts }+;
  qs = [ q.name | /State q := m ];
  <span class="Keyword">return</span> { q | q &lt;- qs, q <span class="Keyword">notin</span> r[qs[<span class="Keyword">0</span>]] };
}</code></pre>

There are various ways of compiling a DSL to target code in Rascal. The simplest is using string templates and generate code in a general purpose language. The following snippet shows the generation of a Java while loop to execute a state machine.

<pre class="rascal"><code><span class="Keyword">module</span> Compile

<span class="Keyword">import</span> Syntax;

<span class="Keyword">str</span> compile(Machine m) =
  <span class="Constant">"while (true) {
  '  event = input.next();
  '  switch (current) { 
  '    &lt;</span><span class="Keyword">for</span> (q &lt;- m.states) {<span class="Constant">&gt;
  '    case \"&lt;</span>q.name<span class="Constant">&gt;\":
  '      &lt;</span><span class="Keyword">for</span> (t &lt;- q.out) {<span class="Constant">&gt;
  '      if (event.equals(\"&lt;</span>t.event<span class="Constant">&gt;\"))
  '        current = \"&lt;</span>t.to<span class="Constant">&gt;\";
  '      &lt;</span>}<span class="Constant">&gt;
  '      break;
  '    &lt;</span>}<span class="Constant">&gt;
  '  }
  '}"</span>; </code></pre>

String templates allow arbitrary Rascal values and control-flow constructs to be interpolated in string literals. Note how this code does not use concrete matching, but instead uses the labels defined in the grammar (i.e., `states`, `out`, `event`, and `to`).

And that's it! A complete DSL in 36 lines of code. Of course, the parser and the `unreachable` and `compile` functions can be connected to the IDE. This provides custom syntax highlighting, error-marking and automatic building in state machine editors.