
From ["A DSL in 36 lines of code"](/dsl-in-36-lines-of-code/)

A grammar in Rascal:

<pre class="rascal"><code><span class="Keyword">module</span> Syntax

<span class="Keyword">extend</span> lang::std::Layout;
<span class="Keyword">extend</span> lang::std::Id;

<span class="Keyword">start</span> <span class="Keyword">syntax</span> Machine = machine: State+ states;
<span class="Keyword">syntax</span> State = <span class="Comment">@Foldable</span> state: <span class="Constant">"state"</span> Id name Trans* out;
<span class="Keyword">syntax</span> Trans = trans: Id event <span class="Constant">":"</span> Id to;</code></pre>


A fact extractor and checker in Rascal, using concrete syntax:

<pre class="rascal"><code><span class="Keyword">module</span> Analyze

<span class="Keyword">import</span> Syntax;

<span class="Keyword">set</span>[Id] unreachable(Machine m) {
  r = { &lt;q1,q2&gt; | (State)`<span class="Keyword">state</span> <span class="MetaVariable">&lt;Id q1&gt;</span> <span class="MetaVariable">&lt;Trans* ts&gt;</span>` &lt;- m.states, 
				  (Trans)`<span class="MetaVariable">&lt;Id _&gt;</span>: <span class="MetaVariable">&lt;Id q2&gt;</span>` &lt;- ts }+;
  qs = [ q.name | /State q := m ];
  <span class="Keyword">return</span> { q | q &lt;- qs, q <span class="Keyword">notin</span> r[qs[<span class="Keyword">0</span>]] };
}</code></pre>

A code generator:

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
