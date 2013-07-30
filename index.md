---
layout: front
title: Home
published: true
---

## The one-stop shop for metaprogramming

<p class="lead"> 
Rascal integrates all technological aspects for the creation of meta programs
into a single language.  Use it for any kind of metaprogramming task: to
construct parsers for programming languages, to analyze and transform source
code, or to define new DSLs with full IDE support.
</p>

<p class="lead"> 
Rascal is a programming language; such that meta programs
can be created by, understood by, and debugged by <strong>programmers</strong>.
</p>

<p class="lead"> 
Rascal primitives include immutable data, context-free grammars and algebraic data-types, relations, relational calculus operators,
advanced patterns matching, generic type-safe traversal, comprehensions, concrete syntax for objects,lexically scoped backtracking,
string templates for code generation. Still it feels like a normal programming language.
</p>

<p class="lead"> 
Rascal has libraries for integrating language front-ends, for reusing analysis
algorithms (such as SMT solvers), and for getting typed meta-data out of
version management systems, for interactive visualization, etc.  
</p>

### Code snippets

<div class="tabbable"> 
  <ul class="nav nav-tabs">
    <li class="active"><a href="#DSLs" data-toggle="tab">DSLs</a></li>
    <li><a href="#Analysis" data-toggle="tab">Analysis</a></li>
    <li><a href="#Transformations" data-toggle="tab">Transformations</a></li>
  </ul>
  <div class="tab-content">
    <div class="tab-pane active" id="DSLs">
		<p>
		From <a href="/dsl-in-36-lines-of-code/">A DSL in 36 lines of code</a>:
		</p>

		<p>A grammar in Rascal:</p>

		<pre class="rascal"><code><span class="Keyword">module</span> Syntax

		<span class="Keyword">extend</span> lang::std::Layout;
		<span class="Keyword">extend</span> lang::std::Id;

		<span class="Keyword">start</span> <span class="Keyword">syntax</span> Machine = machine: State+ states;
		<span class="Keyword">syntax</span> State = <span class="Comment">@Foldable</span> state: <span class="Constant">"state"</span> Id name Trans* out;
		<span class="Keyword">syntax</span> Trans = trans: Id event <span class="Constant">":"</span> Id to;</code></pre>


		<p>A fact extractor and checker in Rascal, using concrete syntax:</p>

		<pre class="rascal"><code><span class="Keyword">module</span> Analyze

		<span class="Keyword">import</span> Syntax;

		<span class="Keyword">set</span>[Id] unreachable(Machine m) {
		  r = { &lt;q1,q2&gt; | (State)`<span class="Keyword">state</span> <span class="MetaVariable">&lt;Id q1&gt;</span> <span class="MetaVariable">&lt;Trans* ts&gt;</span>` &lt;- m.states, 
						  (Trans)`<span class="MetaVariable">&lt;Id _&gt;</span>: <span class="MetaVariable">&lt;Id q2&gt;</span>` &lt;- ts }+;
		  qs = [ q.name | /State q := m ];
		  <span class="Keyword">return</span> { q | q &lt;- qs, q <span class="Keyword">notin</span> r[qs[<span class="Keyword">0</span>]] };
		}</code></pre>

		<p>A code generator:</p>

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
    </div>
    <div class="tab-pane" id="tab2">
      <p>Howdy, I'm in Section 2.</p>
    </div>
  </div>
</div>

