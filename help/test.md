---
---
<pre class="rascal"><code><span class="Comment">@bootstrapParser</span>
<span class="Comment">@doc{
Synopsis: Mutant Generator for Rascal modules

Description:  This module contains tools to automatically generate broken mutations from a working 
  Rascal module. The use case is to test how good the tests are for such a module. The tests
  should be able to find the bugs we introduce using the mutators.
  
Examples

&lt;listing&gt;
import lang::rascal::mutation::ModuleMutator;
mutate(|project://rascal/src/org/rascalmpl/library/lang/rascal/format/Grammar.rsc|, mutations=5)
&lt;/listing&gt;  
}</span>
<span class="Keyword">module</span> lang::rascal::mutation::ModuleMutator

<span class="Keyword">import</span> lang::rascal::\syntax::Rascal;
<span class="Keyword">import</span> List;
<span class="Keyword">import</span> util::Math;
<span class="Keyword">import</span> ParseTree;
<span class="Keyword">import</span> IO;
<span class="Keyword">import</span> String;

<span class="Keyword">list</span>[<span class="Keyword">str</span>] mutate(<span class="Keyword">loc</span> input, <span class="Keyword">int</span> mutations = 5, <span class="Keyword">real</span> chance = 0.1, <span class="Keyword">str</span> folder=<span class="Constant">"mutants"</span>, <span class="Keyword">str</span> prefix=<span class="Constant">""</span>) {
  m = parse(#<span class="Keyword">start</span>[Module], input).top;
  <span class="Keyword">list</span>[<span class="Keyword">str</span>] modList = [];
  <span class="Keyword">str</span> muModName;
  <span class="Keyword">for</span> (new &lt;- mutate(m, mutations=mutations, chance=chance, prefix=prefix, parentMod=folder)) {
    muModName = <span class="Constant">"&lt;</span>getModuleName(new)<span class="Constant">&gt;.rsc"</span>;
    writeFile(input.parent + folder + muModName, <span class="Constant">"&lt;</span>new<span class="Constant">&gt;"</span>);
    modList += muModName;
  }
  <span class="Keyword">return</span> modList;
}

<span class="Keyword">list</span>[Module] mutate(Module input, <span class="Keyword">int</span> mutations = 5, <span class="Keyword">real</span> chance = 0.1, <span class="Keyword">str</span> prefix=<span class="Constant">""</span>, <span class="Keyword">str</span> parentMod=<span class="Constant">""</span>) {
  <span class="Keyword">list</span>[Module] ret = [];
  
  <span class="Keyword">for</span>(opId &lt;- muOpers) {
    ret = ret + make(input, opId, chance=chance, prefix=prefix,parentMod=parentMod);
    <span class="Keyword">if</span> (size(ret) &gt;= mutations) <span class="Keyword">break</span>;
  }
  <span class="Keyword">return</span> ret;
}

<span class="Keyword">private</span> <span class="Keyword">list</span>[<span class="Keyword">int</span>] muOpers = [<span class="Keyword">0</span>..6];

<span class="Keyword">tuple</span>[<span class="Keyword">bool</span>,PatternWithAction] muOperPatt(<span class="Keyword">0</span>, (PatternWithAction) `<span class="MetaVariable">&lt;Pattern p&gt;</span> =&gt; <span class="MetaVariable">&lt;Replacement _&gt;</span>`) = &lt;<span class="Keyword">true</span>,
(PatternWithAction) `<span class="MetaVariable">&lt;Pattern p&gt;</span> : <span class="Keyword">throw</span> <span class="Constant">"mutant! OP0: Remove pattern rewrite."</span>;`&gt;
<span class="Keyword">when</span> !(p <span class="Keyword">is</span> concrete);

<span class="Keyword">tuple</span>[<span class="Keyword">bool</span>,PatternWithAction] muOperPatt(1, (PatternWithAction) `<span class="MetaVariable">&lt;Pattern p&gt;</span> : <span class="MetaVariable">&lt;Statement _&gt;</span>`) = &lt;<span class="Keyword">true</span>,
(PatternWithAction) `<span class="MetaVariable">&lt;Pattern p&gt;</span> : <span class="Keyword">throw</span> <span class="Constant">"mutant! OP1: Remove pattern with action."</span>;`&gt;
<span class="Keyword">when</span> !(p <span class="Keyword">is</span> concrete);

<span class="Keyword">default</span> <span class="Keyword">tuple</span>[<span class="Keyword">bool</span>,PatternWithAction] muOperPatt(<span class="Keyword">int</span> opId, PatternWithAction pa) = &lt;<span class="Keyword">false</span>,pa&gt;;

<span class="Keyword">tuple</span>[<span class="Keyword">bool</span>,Statement] muOperStm(2, (Statement) `<span class="Keyword">if</span> (<span class="MetaVariable">&lt;{Expression <span class="Constant">","</span>}+ cond&gt;</span>) <span class="MetaVariable">&lt;Statement s&gt;</span>`) = &lt;<span class="Keyword">true</span>,
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

<span class="Keyword">default</span> <span class="Keyword">tuple</span>[<span class="Keyword">bool</span>,Statement] muOperStm(<span class="Keyword">int</span> opId, Statement stm) = &lt;<span class="Keyword">false</span>,stm&gt;;
        
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
  
<span class="Keyword">list</span>[Module] make(Module input, <span class="Keyword">int</span> opId, <span class="Keyword">real</span> chance = 0.1, <span class="Keyword">str</span> prefix=<span class="Constant">""</span>, <span class="Keyword">str</span> parentMod=<span class="Constant">""</span>) {
  <span class="Keyword">list</span>[Module] lMMod = [];
  
  <span class="Keyword">if</span> (opId &gt; muOpers[<span class="Keyword">-</span>1]) <span class="Keyword">throw</span> <span class="Constant">"make: Invalid mutation operator!"</span>;
  
  lMMod = mutationOp(opId,input);
  
  <span class="Keyword">if</span> (size(lMMod) == <span class="Keyword">0</span>) <span class="Keyword">return</span> [];
  
  <span class="Keyword">int</span> bIndex = opId * 1000;
  lMMod = [rename(bIndex+mIdx, prefix, parentMod, lMMod[mIdx]) | mIdx &lt;- [<span class="Keyword">0</span>..size(lMMod)]];
  <span class="Keyword">return</span> lMMod;
}
 
Module rename(<span class="Keyword">int</span> c, <span class="Keyword">str</span> prefix, <span class="Constant">""</span>, (Module) `<span class="MetaVariable">&lt;Tags t&gt;</span> <span class="Keyword">module</span> <span class="MetaVariable">&lt;{Name <span class="Constant">"::"</span>}+ p&gt;</span> :: <span class="MetaVariable">&lt;Name last&gt;</span> <span class="MetaVariable">&lt;Import* i&gt;</span> <span class="MetaVariable">&lt;Body b&gt;</span>`) =
(Module) `<span class="MetaVariable">&lt;Tags t&gt;</span> 
<span class="Keyword">module</span> <span class="MetaVariable">&lt;{Name <span class="Constant">"::"</span>}+ p&gt;</span>::<span class="MetaVariable">&lt;Name newName&gt;</span>

<span class="MetaVariable">&lt;Import* i&gt;</span>

<span class="MetaVariable">&lt;Body b&gt;</span>`
   <span class="Keyword">when</span> Name newName := [Name] <span class="Constant">"&lt;</span>prefix<span class="Constant">&gt;&lt;</span>last<span class="Constant">&gt;&lt;</span>c<span class="Constant">&gt;"</span>;
   
Module rename(<span class="Keyword">int</span> c, <span class="Keyword">str</span> prefix, <span class="Keyword">str</span> parentMod, (Module) `<span class="MetaVariable">&lt;Tags t&gt;</span> <span class="Keyword">module</span> <span class="MetaVariable">&lt;{Name <span class="Constant">"::"</span>}+ p&gt;</span> :: <span class="MetaVariable">&lt;Name last&gt;</span> <span class="MetaVariable">&lt;Import* i&gt;</span> <span class="MetaVariable">&lt;Body b&gt;</span>`) =
   (Module) `<span class="MetaVariable">&lt;Tags t&gt;</span> 
<span class="Keyword">module</span> <span class="MetaVariable">&lt;{Name <span class="Constant">"::"</span>}+ p&gt;</span>::<span class="MetaVariable">&lt;Name f&gt;</span>::<span class="MetaVariable">&lt;Name newName&gt;</span> 

<span class="MetaVariable">&lt;Import* i&gt;</span>

<span class="MetaVariable">&lt;Body b&gt;</span>`
   <span class="Keyword">when</span> Name newName := [Name] <span class="Constant">"&lt;</span>prefix<span class="Constant">&gt;&lt;</span>last<span class="Constant">&gt;&lt;</span>c<span class="Constant">&gt;"</span> &amp;&amp; Name f := [Name] <span class="Constant">"&lt;</span>parentMod<span class="Constant">&gt;"</span>;

Module rename(<span class="Keyword">int</span> c, <span class="Keyword">str</span> prefix, <span class="Constant">""</span>, (Module) `<span class="MetaVariable">&lt;Tags t&gt;</span> <span class="Keyword">module</span> <span class="MetaVariable">&lt;Name last&gt;</span> <span class="MetaVariable">&lt;Import* i&gt;</span> <span class="MetaVariable">&lt;Body b&gt;</span>`) = 
   (Module) `<span class="MetaVariable">&lt;Tags t&gt;</span> 
<span class="Keyword">module</span> <span class="MetaVariable">&lt;Name newName&gt;</span>

<span class="MetaVariable">&lt;Import* i&gt;</span>

<span class="MetaVariable">&lt;Body b&gt;</span>`
   <span class="Keyword">when</span> Name newName := [Name] <span class="Constant">"&lt;</span>prefix<span class="Constant">&gt;&lt;</span>last<span class="Constant">&gt;&lt;</span>c<span class="Constant">&gt;"</span>;

Module rename(<span class="Keyword">int</span> c, <span class="Keyword">str</span> prefix, <span class="Keyword">str</span> parentMod, (Module) `<span class="MetaVariable">&lt;Tags t&gt;</span> <span class="Keyword">module</span> <span class="MetaVariable">&lt;Name last&gt;</span> <span class="MetaVariable">&lt;Import* i&gt;</span> <span class="MetaVariable">&lt;Body b&gt;</span>`) = 
   (Module) `<span class="MetaVariable">&lt;Tags t&gt;</span>
<span class="Keyword">module</span> <span class="MetaVariable">&lt;Name f&gt;</span>::<span class="MetaVariable">&lt;Name newName&gt;</span>

<span class="MetaVariable">&lt;Import* i&gt;</span>

<span class="MetaVariable">&lt;Body b&gt;</span>`
   <span class="Keyword">when</span> Name newName := [Name] <span class="Constant">"&lt;</span>prefix<span class="Constant">&gt;&lt;</span>last<span class="Constant">&gt;&lt;</span>c<span class="Constant">&gt;"</span> &amp;&amp; Name f := [Name] <span class="Constant">"&lt;</span>parentMod<span class="Constant">&gt;"</span>;
   
<span class="Keyword">default</span> <span class="Keyword">str</span> rename(Module x) { <span class="Keyword">throw</span> <span class="Constant">"can not rename name of &lt;</span>x.header<span class="Constant">&gt;"</span>; } 
  
<span class="Keyword">str</span> getModuleName((Module) `<span class="MetaVariable">&lt;Tags _&gt;</span> <span class="Keyword">module</span> <span class="MetaVariable">&lt;{Name <span class="Constant">"::"</span>}+ _&gt;</span> :: <span class="MetaVariable">&lt;Name last&gt;</span> <span class="MetaVariable">&lt;Import* _&gt;</span> <span class="MetaVariable">&lt;Body _&gt;</span>`) = <span class="Constant">"&lt;</span>last<span class="Constant">&gt;"</span>;
<span class="Keyword">str</span> getModuleName((Module) `<span class="MetaVariable">&lt;Tags _&gt;</span> <span class="Keyword">module</span> <span class="MetaVariable">&lt;Name last&gt;</span> <span class="MetaVariable">&lt;Import* _&gt;</span> <span class="MetaVariable">&lt;Body _&gt;</span>`) = <span class="Constant">"&lt;</span>last<span class="Constant">&gt;"</span>; 
<span class="Keyword">default</span> <span class="Keyword">str</span> getModuleName(Module x) { <span class="Keyword">throw</span> <span class="Constant">"can not find name of &lt;</span>x.header<span class="Constant">&gt;"</span>; }

<span class="Keyword">test</span> <span class="Keyword">bool</span> renameTest1() = rename(20, <span class="Constant">""</span>, <span class="Constant">""</span>, (Module) `<span class="Keyword">module</span> a::b::X`) == (Module) `<span class="Keyword">module</span> a::b::X20`;
<span class="Keyword">test</span> <span class="Keyword">bool</span> renameTest2() = rename(20, <span class="Constant">""</span>, <span class="Constant">""</span>, (Module) `<span class="Keyword">module</span> X`) == (Module) `<span class="Keyword">module</span> X20`;

<span class="Keyword">test</span> <span class="Keyword">bool</span> renameTest3() = rename(20, <span class="Constant">""</span>, <span class="Constant">"mutants"</span>, (Module) `<span class="Keyword">module</span> a::b::X`) == (Module) `<span class="Keyword">module</span> a::b::mutants::X20`;
<span class="Keyword">test</span> <span class="Keyword">bool</span> renameTest4() = rename(20, <span class="Constant">""</span>, <span class="Constant">"mutants"</span>, (Module) `<span class="Keyword">module</span> X`) == (Module) `<span class="Keyword">module</span> mutants::X20`;</code></pre>
