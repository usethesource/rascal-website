---
title: "lang::sdf2::util::SDF2Grammar"
---

#### Usage

`import lang::sdf2::util::SDF2Grammar;`


## function label {#lang-sdf2-util-SDF2Grammar-label}

* ``Symbol label(str s, conditional(Symbol t, set[Condition] cs))``

## function conditional {#lang-sdf2-util-SDF2Grammar-conditional}

* ``Symbol conditional(conditional(Symbol s, set[Condition] c1), set[Condition] c2)``

## function sdf2grammar {#lang-sdf2-util-SDF2Grammar-sdf2grammar}

* ``GrammarDefinition sdf2grammar(loc input)``
* ``GrammarDefinition sdf2grammar(str main, loc input)``
* ``GrammarDefinition sdf2grammar(loc input)``
* ``GrammarDefinition sdf2grammar(SDF def)``

## function injectStarts {#lang-sdf2-util-SDF2Grammar-injectStarts}

* ``Grammar::Grammar injectStarts(Grammar::Grammar g)``

## function sdf2grammar {#lang-sdf2-util-SDF2Grammar-sdf2grammar}

* ``GrammarDefinition sdf2grammar(str main, SDF def)``

## function split {#lang-sdf2-util-SDF2Grammar-split}

* ``GrammarDefinition split(GrammarDefinition def)``

## function removeDirectProductionCycle {#lang-sdf2-util-SDF2Grammar-removeDirectProductionCycle}

* ``GrammarDefinition removeDirectProductionCycle(GrammarDefinition def)``

## function isProductionCycle {#lang-sdf2-util-SDF2Grammar-isProductionCycle}

* ``bool isProductionCycle(\prod(_, [sing], _), Production b)``
* ``default bool isProductionCycle(Production a, Production b)``

## function addLexicalChaining {#lang-sdf2-util-SDF2Grammar-addLexicalChaining}

* ``GrammarDefinition addLexicalChaining(GrammarDefinition def)``

## function striprec {#lang-sdf2-util-SDF2Grammar-striprec}

* ``Symbol striprec(Symbol s)``

## function strip {#lang-sdf2-util-SDF2Grammar-strip}

* ``Symbol strip(label(str _, Symbol s))``
* ``Symbol strip(conditional(Symbol s, set[Condition] _))``
* ``default Symbol strip(Symbol s)``

## function split {#lang-sdf2-util-SDF2Grammar-split}

* ``Grammar::Grammar split(Grammar::Grammar g)``

## data Production {#lang-sdf2-util-SDF2Grammar-Production}

```rascal
data Production  
     = temp()
     ;
```

## function isNotEmpty {#lang-sdf2-util-SDF2Grammar-isNotEmpty}

* ``bool isNotEmpty(Production p)``

## function removeEmptyProductions {#lang-sdf2-util-SDF2Grammar-removeEmptyProductions}

* ``Grammar::Grammar removeEmptyProductions(Grammar::Grammar g)``

## function keep {#lang-sdf2-util-SDF2Grammar-keep}

* ``Production keep(Production source, Symbol s)``

## function getModule {#lang-sdf2-util-SDF2Grammar-getModule}

* ``GrammarModule getModule(Module m)``

## function moduleName {#lang-sdf2-util-SDF2Grammar-moduleName}

* ``str moduleName(/<pre:.*>\/<post:.*>/)``
* ``str moduleName(/languages::<rest:.*>/)``
* ``default str moduleName(str i)``

## function getImports {#lang-sdf2-util-SDF2Grammar-getImports}

* ``set[str] getImports(Module m)``

## function applyConditions {#lang-sdf2-util-SDF2Grammar-applyConditions}

* ``GrammarDefinition applyConditions(GrammarDefinition d,  map[Symbol from,Symbol to] conds)``

## function illegalPriorities {#lang-sdf2-util-SDF2Grammar-illegalPriorities}

* ``Grammar::Grammar illegalPriorities(Grammar::Grammar g)``

## function dup {#lang-sdf2-util-SDF2Grammar-dup}

* ``&T dup(&T g)``

## function test1 {#lang-sdf2-util-SDF2Grammar-test1}

* ``test bool test1()``

## function test2 {#lang-sdf2-util-SDF2Grammar-test2}

* ``test bool test2()``

## function test3 {#lang-sdf2-util-SDF2Grammar-test3}

* ``test bool test3()``

## function getProductions {#lang-sdf2-util-SDF2Grammar-getProductions}

* ``set[Production] getProductions(Module \mod)``
* ``set[Production] getProductions(SDF sd)``

## function test4 {#lang-sdf2-util-SDF2Grammar-test4}

* ``test bool test4()``

## function test5 {#lang-sdf2-util-SDF2Grammar-test5}

* ``test bool test5()``

## function test6 {#lang-sdf2-util-SDF2Grammar-test6}

* ``test bool test6()``

## function test7 {#lang-sdf2-util-SDF2Grammar-test7}

* ``test bool test7()``

## function test9 {#lang-sdf2-util-SDF2Grammar-test9}

* ``test bool test9()``

## function test9_2 {#lang-sdf2-util-SDF2Grammar-test9_2}

* ``test bool test9_2()``

## function getProductions {#lang-sdf2-util-SDF2Grammar-getProductions}

* ``set[Production] getProductions(Prod* prods, bool isLex)``

## function fixParameters {#lang-sdf2-util-SDF2Grammar-fixParameters}

* ``set[Production] fixParameters(set[Production] input)``

## function labelName {#lang-sdf2-util-SDF2Grammar-labelName}

* ``str labelName("")``
* ``default str labelName(str s)``

## function getProduction {#lang-sdf2-util-SDF2Grammar-getProduction}

* ``set[Production] getProduction(Prod P, bool isLex)``

## function test10 {#lang-sdf2-util-SDF2Grammar-test10}

* ``test bool test10()``

## function test11 {#lang-sdf2-util-SDF2Grammar-test11}

* ``test bool test11()``

## function test12 {#lang-sdf2-util-SDF2Grammar-test12}

* ``test bool test12()``

## function test13 {#lang-sdf2-util-SDF2Grammar-test13}

* ``test bool test13()``

## function test14 {#lang-sdf2-util-SDF2Grammar-test14}

* ``test bool test14()``

## function getConditions {#lang-sdf2-util-SDF2Grammar-getConditions}

* ``set[Symbol] getConditions(SDF m)``

## function getRestrictions {#lang-sdf2-util-SDF2Grammar-getRestrictions}

* ``set[Symbol] getRestrictions(Restriction* restrictions, bool isLex)``

## function getRestriction {#lang-sdf2-util-SDF2Grammar-getRestriction}

* ``set[Symbol] getRestriction(Restriction restriction, bool isLex)``

## function test18 {#lang-sdf2-util-SDF2Grammar-test18}

* ``test bool test18()``

## function test19 {#lang-sdf2-util-SDF2Grammar-test19}

* ``test bool test19()``

## function getLookaheads {#lang-sdf2-util-SDF2Grammar-getLookaheads}

* ``set[Symbol] getLookaheads(Lookaheads ls)``

## function test21 {#lang-sdf2-util-SDF2Grammar-test21}

* ``test bool test21()``

## function test22 {#lang-sdf2-util-SDF2Grammar-test22}

* ``test bool test22()``

## function test23 {#lang-sdf2-util-SDF2Grammar-test23}

* ``test bool test23()``

## function getPriorities {#lang-sdf2-util-SDF2Grammar-getPriorities}

* ``set[Production] getPriorities({Priority ","}* priorities, bool isLex)``

## function getPriority {#lang-sdf2-util-SDF2Grammar-getPriority}

* ``Production getPriority(Group group, bool isLex)``

## function test24 {#lang-sdf2-util-SDF2Grammar-test24}

* ``test bool test24()``

## function test25 {#lang-sdf2-util-SDF2Grammar-test25}

* ``test bool test25()``

## function test26 {#lang-sdf2-util-SDF2Grammar-test26}

* ``test bool test26()``

## function test27 {#lang-sdf2-util-SDF2Grammar-test27}

* ``test bool test27()``

## function test28 {#lang-sdf2-util-SDF2Grammar-test28}

* ``test bool test28()``

## function test29 {#lang-sdf2-util-SDF2Grammar-test29}

* ``test bool test29()``

## function getPriority {#lang-sdf2-util-SDF2Grammar-getPriority}

* ``Production getPriority(Priority p, bool isLex)``

## function test30 {#lang-sdf2-util-SDF2Grammar-test30}

* ``test bool test30()``

## function test31 {#lang-sdf2-util-SDF2Grammar-test31}

* ``test bool test31()``

## function test32 {#lang-sdf2-util-SDF2Grammar-test32}

* ``test bool test32()``

## function test33 {#lang-sdf2-util-SDF2Grammar-test33}

* ``test bool test33()``

## function test34 {#lang-sdf2-util-SDF2Grammar-test34}

* ``test bool test34()``

## function test35 {#lang-sdf2-util-SDF2Grammar-test35}

* ``test bool test35()``

## function definedSymbol {#lang-sdf2-util-SDF2Grammar-definedSymbol}

* ``Symbol definedSymbol((&T <: Tree) v, bool isLex)``

## function getStartSymbols {#lang-sdf2-util-SDF2Grammar-getStartSymbols}

* ``set[Symbol] getStartSymbols(Module \mod)``

## function test36 {#lang-sdf2-util-SDF2Grammar-test36}

* ``test bool test36()``

## function test37 {#lang-sdf2-util-SDF2Grammar-test37}

* ``test bool test37()``

## function test38 {#lang-sdf2-util-SDF2Grammar-test38}

* ``test bool test38()``

## function getSymbols {#lang-sdf2-util-SDF2Grammar-getSymbols}

* ``list[Symbol] getSymbols((Syms) `<Sym* ss>`, bool isLex)``

## function test39 {#lang-sdf2-util-SDF2Grammar-test39}

* ``test bool test39()``

## function getSymbol {#lang-sdf2-util-SDF2Grammar-getSymbol}

* ``Symbol getSymbol(Sym sym, bool isLex)``

## function alt {#lang-sdf2-util-SDF2Grammar-alt}

* ``Symbol alt({alt(set[Symbol] ss), *Symbol rest})``

## function test40 {#lang-sdf2-util-SDF2Grammar-test40}

* ``test bool test40()``

## function test41 {#lang-sdf2-util-SDF2Grammar-test41}

* ``test bool test41()``

## function test42 {#lang-sdf2-util-SDF2Grammar-test42}

* ``test bool test42()``

## function test43 {#lang-sdf2-util-SDF2Grammar-test43}

* ``test bool test43()``

## function test44 {#lang-sdf2-util-SDF2Grammar-test44}

* ``test bool test44()``

## function test45 {#lang-sdf2-util-SDF2Grammar-test45}

* ``test bool test45()``

## function test46 {#lang-sdf2-util-SDF2Grammar-test46}

* ``test bool test46()``

## function test47 {#lang-sdf2-util-SDF2Grammar-test47}

* ``test bool test47()``

## function test48 {#lang-sdf2-util-SDF2Grammar-test48}

* ``test bool test48()``

## function test49 {#lang-sdf2-util-SDF2Grammar-test49}

* ``test bool test49()``

## function test50 {#lang-sdf2-util-SDF2Grammar-test50}

* ``test bool test50()``

## function test51 {#lang-sdf2-util-SDF2Grammar-test51}

* ``test bool test51()``

## function test52 {#lang-sdf2-util-SDF2Grammar-test52}

* ``test bool test52()``

## function test53 {#lang-sdf2-util-SDF2Grammar-test53}

* ``test bool test53()``

## function test54 {#lang-sdf2-util-SDF2Grammar-test54}

* ``test bool test54()``

## function test55 {#lang-sdf2-util-SDF2Grammar-test55}

* ``test bool test55()``

## function test56 {#lang-sdf2-util-SDF2Grammar-test56}

* ``test bool test56()``

## function test57 {#lang-sdf2-util-SDF2Grammar-test57}

* ``test bool test57()``

## function test58 {#lang-sdf2-util-SDF2Grammar-test58}

* ``test bool test58()``

## function test59 {#lang-sdf2-util-SDF2Grammar-test59}

* ``test bool test59()``

## function test60 {#lang-sdf2-util-SDF2Grammar-test60}

* ``test bool test60()``

## function test61 {#lang-sdf2-util-SDF2Grammar-test61}

* ``test bool test61()``

## function test62 {#lang-sdf2-util-SDF2Grammar-test62}

* ``test bool test62()``

## function test63 {#lang-sdf2-util-SDF2Grammar-test63}

* ``test bool test63()``

## function test64 {#lang-sdf2-util-SDF2Grammar-test64}

* ``test bool test64()``

## function test65 {#lang-sdf2-util-SDF2Grammar-test65}

* ``test bool test65()``

## function unescape {#lang-sdf2-util-SDF2Grammar-unescape}

* ``str unescape(Sym s)``
* ``str unescape(StrCon s)``
* ``str unescape(SingleQuotedStrCon s)``

## function testUn1 {#lang-sdf2-util-SDF2Grammar-testUn1}

* ``test bool testUn1()``

## function testUn2 {#lang-sdf2-util-SDF2Grammar-testUn2}

* ``test bool testUn2()``

## function testUn3 {#lang-sdf2-util-SDF2Grammar-testUn3}

* ``test bool testUn3()``

## function testUn4 {#lang-sdf2-util-SDF2Grammar-testUn4}

* ``test bool testUn4()``

## function testUn5 {#lang-sdf2-util-SDF2Grammar-testUn5}

* ``test bool testUn5()``

## function testUn6 {#lang-sdf2-util-SDF2Grammar-testUn6}

* ``test bool testUn6()``

## function testUn7 {#lang-sdf2-util-SDF2Grammar-testUn7}

* ``test bool testUn7()``

## function testUn8 {#lang-sdf2-util-SDF2Grammar-testUn8}

* ``test bool testUn8()``

## function testUn9 {#lang-sdf2-util-SDF2Grammar-testUn9}

* ``test bool testUn9()``

## function unescapeStr {#lang-sdf2-util-SDF2Grammar-unescapeStr}

* ``str unescapeStr(str chars)``

## function un20 {#lang-sdf2-util-SDF2Grammar-un20}

* ``test bool un20()``

## function un21 {#lang-sdf2-util-SDF2Grammar-un21}

* ``test bool un21()``

## function un22 {#lang-sdf2-util-SDF2Grammar-un22}

* ``test bool un22()``

## function un23 {#lang-sdf2-util-SDF2Grammar-un23}

* ``test bool un23()``

## function un24 {#lang-sdf2-util-SDF2Grammar-un24}

* ``test bool un24()``

## function un25 {#lang-sdf2-util-SDF2Grammar-un25}

* ``test bool un25()``

## function un26 {#lang-sdf2-util-SDF2Grammar-un26}

* ``test bool un26()``

## function un27 {#lang-sdf2-util-SDF2Grammar-un27}

* ``test bool un27()``

## function un28 {#lang-sdf2-util-SDF2Grammar-un28}

* ``test bool un28()``

## function getCharClass {#lang-sdf2-util-SDF2Grammar-getCharClass}

* ``Symbol getCharClass(Class cc)``

## function testCC1 {#lang-sdf2-util-SDF2Grammar-testCC1}

* ``test bool testCC1()``

## function testCC2 {#lang-sdf2-util-SDF2Grammar-testCC2}

* ``test bool testCC2()``

## function testCC3 {#lang-sdf2-util-SDF2Grammar-testCC3}

* ``test bool testCC3()``

## function testCC4 {#lang-sdf2-util-SDF2Grammar-testCC4}

* ``test bool testCC4()``

## function testCC5 {#lang-sdf2-util-SDF2Grammar-testCC5}

* ``test bool testCC5()``

## function testCC6 {#lang-sdf2-util-SDF2Grammar-testCC6}

* ``test bool testCC6()``

## function testCC7 {#lang-sdf2-util-SDF2Grammar-testCC7}

* ``test bool testCC7()``

## function testCC8 {#lang-sdf2-util-SDF2Grammar-testCC8}

* ``test bool testCC8()``

## function testCC9 {#lang-sdf2-util-SDF2Grammar-testCC9}

* ``test bool testCC9()``

## function testCC10 {#lang-sdf2-util-SDF2Grammar-testCC10}

* ``test bool testCC10()``

## function testCC11 {#lang-sdf2-util-SDF2Grammar-testCC11}

* ``test bool testCC11()``

## function testCC12 {#lang-sdf2-util-SDF2Grammar-testCC12}

* ``test bool testCC12()``

## function testCC13 {#lang-sdf2-util-SDF2Grammar-testCC13}

* ``test bool testCC13()``

## function getCharRange {#lang-sdf2-util-SDF2Grammar-getCharRange}

* ``CharRange getCharRange(Range r)``

## function testCR1 {#lang-sdf2-util-SDF2Grammar-testCR1}

* ``test bool testCR1()``

## function testCR2 {#lang-sdf2-util-SDF2Grammar-testCR2}

* ``test bool testCR2()``

## function testCR3 {#lang-sdf2-util-SDF2Grammar-testCR3}

* ``test bool testCR3()``

## function testCR4 {#lang-sdf2-util-SDF2Grammar-testCR4}

* ``test bool testCR4()``

## function getCharacter {#lang-sdf2-util-SDF2Grammar-getCharacter}

* ``int getCharacter(Character c)``

## function getAttributes {#lang-sdf2-util-SDF2Grammar-getAttributes}

* ``set[Attr] getAttributes(Attrs as)``

## function testAs {#lang-sdf2-util-SDF2Grammar-testAs}

* ``test bool testAs()``

## function getAttribute {#lang-sdf2-util-SDF2Grammar-getAttribute}

* ``set[Attr] getAttribute(Attribute m)``

## function testAs2 {#lang-sdf2-util-SDF2Grammar-testAs2}

* ``test bool testAs2()``

## function getAssociativity {#lang-sdf2-util-SDF2Grammar-getAssociativity}

* ``Associativity getAssociativity(Assoc as)``

## function testAssoc {#lang-sdf2-util-SDF2Grammar-testAssoc}

* ``test bool testAssoc()``

## function separgs2symbols {#lang-sdf2-util-SDF2Grammar-separgs2symbols}

* ``list[Symbol] separgs2symbols({Sym ","}+ args, bool isLex)``

