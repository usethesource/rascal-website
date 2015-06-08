---
layout: default
title: Test
published: true
---
<pre class="rascal"><code><span class="Keyword">tuple</span>[<span class="Keyword">bool</span>,Statement] muOperStm(2, (Statement) `<span class="Keyword">if</span> (<span class="MetaVariable">&lt;{Expression <span class="Constant">","</span>}+ cond&gt;</span>) <span class="MetaVariable">&lt;Statement s&gt;</span>`) = &lt;<span class="Keyword">true</span>,
(Statement) `<span class="Keyword">if</span> (<span class="MetaVariable">&lt;{Expression <span class="Constant">","</span>}+ cond&gt;</span>) 
  <span class="Keyword">throw</span> <span class="Constant">"mutant! OP2: Remove if conditionals. Case 1."</span>;`&gt;
<span class="Keyword">when</span> !(cond <span class="Keyword">is</span> concrete);

<span class="Keyword">tuple</span>[<span class="Keyword">bool</span>,Statement] muOperStm(3, (Statement) `<span class="Keyword">if</span> (<span class="MetaVariable">&lt;{Expression <span class="Constant">","</span>}+ cond&gt;</span>) <span class="MetaVariable">&lt;Statement s&gt;</span> <span class="Keyword">else</span> <span class="MetaVariable">&lt;Statement t&gt;</span>`) = &lt;<span class="Keyword">true</span>,
(Statement) `<span class="Keyword">if</span> (<span class="MetaVariable">&lt;{Expression <span class="Constant">","</span>}+ cond&gt;</span>) <span class="Keyword">throw</span> <span class="Constant">"mutant! OP3: Remove if conditionals. Case 2."</span>; <span class="Keyword">else</span> <span class="MetaVariable">&lt;Statement t&gt;</span>` &gt;
<span class="Keyword">when</span> !(cond <span class="Keyword">is</span> concrete);

<span class="Keyword">tuple</span>[<span class="Keyword">bool</span>,Statement] muOperStm(4, (Statement) `<span class="Keyword">if</span> (<span class="MetaVariable">&lt;{Expression <span class="Constant">","</span>}+ cond&gt;</span>) <span class="MetaVariable">&lt;Statement s&gt;</span> <span class="Keyword">else</span> <span class="MetaVariable">&lt;Statement t&gt;</span>`) = &lt;<span class="Keyword">true</span>,
(Statement) `<span class="Keyword">if</span> (<span class="MetaVariable">&lt;{Expression <span class="Constant">","</span>}+ cond&gt;</span>) <span class="MetaVariable">&lt;Statement s&gt;</span> <span class="Keyword">else</span> <span class="Keyword">throw</span> <span class="Constant">"mutant! OP4: Remove if conditionals. Case 3."</span>;` &gt;
<span class="Keyword">when</span> !(cond <span class="Keyword">is</span> concrete);

<span class="Keyword">tuple</span>[<span class="Keyword">bool</span>,Statement] muOperStm(5, (Statement) `<span class="Keyword">while</span> (<span class="MetaVariable">&lt;{Expression <span class="Constant">","</span>}+ cond&gt;</span>) <span class="MetaVariable">&lt;Statement s&gt;</span>`) = &lt;<span class="Keyword">true</span>,
(Statement) `<span class="Keyword">while</span> (<span class="MetaVariable">&lt;{Expression <span class="Constant">","</span>}+ cond&gt;</span>) <span class="Keyword">throw</span> <span class="Constant">"mutant! OP5: Remove while conditionals."</span>;` &gt;
<span class="Keyword">when</span> !(cond <span class="Keyword">is</span> concrete);

<span class="Keyword">tuple</span>[<span class="Keyword">bool</span>,Statement] muOperStm(6, (Statement) `<span class="Keyword">for</span> (<span class="MetaVariable">&lt;{Expression <span class="Constant">","</span>}+ cond&gt;</span>) <span class="MetaVariable">&lt;Statement s&gt;</span>`) = &lt;<span class="Keyword">true</span>,
(Statement) `<span class="Keyword">for</span> (<span class="MetaVariable">&lt;{Expression <span class="Constant">","</span>}+ cond&gt;</span>) <span class="Keyword">throw</span> <span class="Constant">"mutant! OP6: Remove for conditionals."</span>;` &gt;
<span class="Keyword">when</span> !(cond <span class="Keyword">is</span> concrete);
</code></pre>

<br><br>

<pre class="rascal"><code>
<span class="Keyword">list</span>[Module] mutationOp(<span class="Keyword">int</span> opId, Module input) {
  <span class="Keyword">if</span> (opId &gt; muOpers[<span class="Keyword">-</span>1]) <span class="Keyword">throw</span> <span class="Constant">"mutationOp: Invalid mutation operator!"</span>;
  
  <span class="Keyword">list</span>[Module] lMMod = [];
  
  Module m;
  <span class="Keyword">bool</span> runOp = <span class="Keyword">false</span>;
  <span class="Keyword">int</span> curMuOperPoint;
  <span class="Keyword">int</span> curMuOper = 1;
  
  <span class="Keyword">while</span> (!runOp) {
    runOp = <span class="Keyword">true</span>;
    curMuOperPoint = <span class="Keyword">0</span>;
    
    m = <span class="Keyword">top-down</span> <span class="Keyword">visit</span>(input) {
      <span class="Comment">// do not mutate inside test definitions:</span>
       <span class="Keyword">case</span> FunctionDeclaration d =&gt; d 
         <span class="Keyword">when</span> runOp, \test() &lt;- d.signature.modifiers.modifiers
         
       <span class="Keyword">case</span> PatternWithAction pa: {
         <span class="Keyword">if</span> (runOp) {
           <span class="Keyword">tuple</span>[<span class="Keyword">bool</span> r,PatternWithAction s] ret = muOperPatt(opId, pa);
           <span class="Keyword">if</span> (ret.r) {
             curMuOperPoint += 1;
             <span class="Keyword">if</span> (curMuOper == curMuOperPoint) {
               runOp = <span class="Keyword">false</span>;
               <span class="Keyword">insert</span> ret.s;
             }
           }
         }
       }
       
       <span class="Keyword">case</span> Statement stm: {
         <span class="Keyword">if</span> (!(stm <span class="Keyword">is</span> \visit) &amp;&amp; runOp) {
           <span class="Keyword">tuple</span>[<span class="Keyword">bool</span> r, Statement s] ret = muOperStm(opId, stm);
           <span class="Keyword">if</span> (ret.r) {
             curMuOperPoint += 1;
             
             <span class="Keyword">if</span> (curMuOper == curMuOperPoint) {
               runOp = <span class="Keyword">false</span>;
               <span class="Keyword">insert</span> ret.s;
             }
           }
         }
       }
    };
    
    <span class="Keyword">if</span> (!runOp) lMMod += m;
    
    curMuOper += 1;
  }
  <span class="Keyword">return</span> lMMod;
}
  </code></pre>
