---
title: "module lang::sdf2::util::SDF2Grammar"
---

#### Usage

`import lang::sdf2::util::SDF2Grammar;`


## function label {#lang-sdf2-util-SDF2Grammar-label}

```rascal
Symbol label(str s, conditional(Symbol t, set[Condition] cs))

```

## function conditional {#lang-sdf2-util-SDF2Grammar-conditional}

```rascal
Symbol conditional(conditional(Symbol s, set[Condition] c1), set[Condition] c2)

```

## function sdf2grammar {#lang-sdf2-util-SDF2Grammar-sdf2grammar}

```rascal
GrammarDefinition sdf2grammar(loc input)

GrammarDefinition sdf2grammar(str main, loc input)

GrammarDefinition sdf2grammar(loc input)

GrammarDefinition sdf2grammar(SDF def)

```

## function injectStarts {#lang-sdf2-util-SDF2Grammar-injectStarts}

```rascal
Grammar::Grammar injectStarts(Grammar::Grammar g)

```

## function sdf2grammar {#lang-sdf2-util-SDF2Grammar-sdf2grammar}

```rascal
GrammarDefinition sdf2grammar(str main, SDF def)

```

## function split {#lang-sdf2-util-SDF2Grammar-split}

```rascal
GrammarDefinition split(GrammarDefinition def)

```

## function removeDirectProductionCycle {#lang-sdf2-util-SDF2Grammar-removeDirectProductionCycle}

```rascal
GrammarDefinition removeDirectProductionCycle(GrammarDefinition def)

```

## function isProductionCycle {#lang-sdf2-util-SDF2Grammar-isProductionCycle}

```rascal
bool isProductionCycle(\prod(_, [sing], _), Production b)

default bool isProductionCycle(Production a, Production b)

```

## function addLexicalChaining {#lang-sdf2-util-SDF2Grammar-addLexicalChaining}

```rascal
GrammarDefinition addLexicalChaining(GrammarDefinition def)

```

## function striprec {#lang-sdf2-util-SDF2Grammar-striprec}

```rascal
Symbol striprec(Symbol s)

```

## function strip {#lang-sdf2-util-SDF2Grammar-strip}

```rascal
Symbol strip(label(str _, Symbol s))

Symbol strip(conditional(Symbol s, set[Condition] _))

default Symbol strip(Symbol s)

```

## function split {#lang-sdf2-util-SDF2Grammar-split}

```rascal
Grammar::Grammar split(Grammar::Grammar g)

```

## data Production {#lang-sdf2-util-SDF2Grammar-Production}

```rascal
data Production  
     = temp()
     ;
```

## function isNotEmpty {#lang-sdf2-util-SDF2Grammar-isNotEmpty}

```rascal
bool isNotEmpty(Production p)

```

## function removeEmptyProductions {#lang-sdf2-util-SDF2Grammar-removeEmptyProductions}

```rascal
Grammar::Grammar removeEmptyProductions(Grammar::Grammar g)

```

## function keep {#lang-sdf2-util-SDF2Grammar-keep}

```rascal
Production keep(Production source, Symbol s)

```

## function getModule {#lang-sdf2-util-SDF2Grammar-getModule}

```rascal
GrammarModule getModule(Module m)

```

## function moduleName {#lang-sdf2-util-SDF2Grammar-moduleName}

```rascal
str moduleName(/<pre:.*>\/<post:.*>/)

str moduleName(/languages::<rest:.*>/)

default str moduleName(str i)

```

## function getImports {#lang-sdf2-util-SDF2Grammar-getImports}

```rascal
set[str] getImports(Module m)

```

## function applyConditions {#lang-sdf2-util-SDF2Grammar-applyConditions}

```rascal
GrammarDefinition applyConditions(GrammarDefinition d,  map[Symbol from,Symbol to] conds)

```

## function illegalPriorities {#lang-sdf2-util-SDF2Grammar-illegalPriorities}

```rascal
Grammar::Grammar illegalPriorities(Grammar::Grammar g)

```

## function dup {#lang-sdf2-util-SDF2Grammar-dup}

```rascal
&T dup(&T g)

```

## function test1 {#lang-sdf2-util-SDF2Grammar-test1}

```rascal
test bool test1()

```

## function test2 {#lang-sdf2-util-SDF2Grammar-test2}

```rascal
test bool test2()

```

## function test3 {#lang-sdf2-util-SDF2Grammar-test3}

```rascal
test bool test3()

```

## function getProductions {#lang-sdf2-util-SDF2Grammar-getProductions}

```rascal
set[Production] getProductions(Module \mod)

set[Production] getProductions(SDF sd)

```

## function test4 {#lang-sdf2-util-SDF2Grammar-test4}

```rascal
test bool test4()

```

## function test5 {#lang-sdf2-util-SDF2Grammar-test5}

```rascal
test bool test5()

```

## function test6 {#lang-sdf2-util-SDF2Grammar-test6}

```rascal
test bool test6()

```

## function test7 {#lang-sdf2-util-SDF2Grammar-test7}

```rascal
test bool test7()

```

## function test9 {#lang-sdf2-util-SDF2Grammar-test9}

```rascal
test bool test9()

```

## function test9_2 {#lang-sdf2-util-SDF2Grammar-test9_2}

```rascal
test bool test9_2()

```

## function getProductions {#lang-sdf2-util-SDF2Grammar-getProductions}

```rascal
set[Production] getProductions(Prod* prods, bool isLex)

```

## function fixParameters {#lang-sdf2-util-SDF2Grammar-fixParameters}

```rascal
set[Production] fixParameters(set[Production] input)

```

## function labelName {#lang-sdf2-util-SDF2Grammar-labelName}

```rascal
str labelName("")

default str labelName(str s)

```

## function getProduction {#lang-sdf2-util-SDF2Grammar-getProduction}

```rascal
set[Production] getProduction(Prod P, bool isLex)

```

## function test10 {#lang-sdf2-util-SDF2Grammar-test10}

```rascal
test bool test10()

```

## function test11 {#lang-sdf2-util-SDF2Grammar-test11}

```rascal
test bool test11()

```

## function test12 {#lang-sdf2-util-SDF2Grammar-test12}

```rascal
test bool test12()

```

## function test13 {#lang-sdf2-util-SDF2Grammar-test13}

```rascal
test bool test13()

```

## function test14 {#lang-sdf2-util-SDF2Grammar-test14}

```rascal
test bool test14()

```

## function getConditions {#lang-sdf2-util-SDF2Grammar-getConditions}

```rascal
set[Symbol] getConditions(SDF m)

```

## function getRestrictions {#lang-sdf2-util-SDF2Grammar-getRestrictions}

```rascal
set[Symbol] getRestrictions(Restriction* restrictions, bool isLex)

```

## function getRestriction {#lang-sdf2-util-SDF2Grammar-getRestriction}

```rascal
set[Symbol] getRestriction(Restriction restriction, bool isLex)

```

## function test18 {#lang-sdf2-util-SDF2Grammar-test18}

```rascal
test bool test18()

```

## function test19 {#lang-sdf2-util-SDF2Grammar-test19}

```rascal
test bool test19()

```

## function getLookaheads {#lang-sdf2-util-SDF2Grammar-getLookaheads}

```rascal
set[Symbol] getLookaheads(Lookaheads ls)

```

## function test21 {#lang-sdf2-util-SDF2Grammar-test21}

```rascal
test bool test21()

```

## function test22 {#lang-sdf2-util-SDF2Grammar-test22}

```rascal
test bool test22()

```

## function test23 {#lang-sdf2-util-SDF2Grammar-test23}

```rascal
test bool test23()

```

## function getPriorities {#lang-sdf2-util-SDF2Grammar-getPriorities}

```rascal
set[Production] getPriorities({Priority ","}* priorities, bool isLex)

```

## function getPriority {#lang-sdf2-util-SDF2Grammar-getPriority}

```rascal
Production getPriority(Group group, bool isLex)

```

## function test24 {#lang-sdf2-util-SDF2Grammar-test24}

```rascal
test bool test24()

```

## function test25 {#lang-sdf2-util-SDF2Grammar-test25}

```rascal
test bool test25()

```

## function test26 {#lang-sdf2-util-SDF2Grammar-test26}

```rascal
test bool test26()

```

## function test27 {#lang-sdf2-util-SDF2Grammar-test27}

```rascal
test bool test27()

```

## function test28 {#lang-sdf2-util-SDF2Grammar-test28}

```rascal
test bool test28()

```

## function test29 {#lang-sdf2-util-SDF2Grammar-test29}

```rascal
test bool test29()

```

## function getPriority {#lang-sdf2-util-SDF2Grammar-getPriority}

```rascal
Production getPriority(Priority p, bool isLex)

```

## function test30 {#lang-sdf2-util-SDF2Grammar-test30}

```rascal
test bool test30()

```

## function test31 {#lang-sdf2-util-SDF2Grammar-test31}

```rascal
test bool test31()

```

## function test32 {#lang-sdf2-util-SDF2Grammar-test32}

```rascal
test bool test32()

```

## function test33 {#lang-sdf2-util-SDF2Grammar-test33}

```rascal
test bool test33()

```

## function test34 {#lang-sdf2-util-SDF2Grammar-test34}

```rascal
test bool test34()

```

## function test35 {#lang-sdf2-util-SDF2Grammar-test35}

```rascal
test bool test35()

```

## function definedSymbol {#lang-sdf2-util-SDF2Grammar-definedSymbol}

```rascal
Symbol definedSymbol((&T <: Tree) v, bool isLex)

```

## function getStartSymbols {#lang-sdf2-util-SDF2Grammar-getStartSymbols}

```rascal
set[Symbol] getStartSymbols(Module \mod)

```

## function test36 {#lang-sdf2-util-SDF2Grammar-test36}

```rascal
test bool test36()

```

## function test37 {#lang-sdf2-util-SDF2Grammar-test37}

```rascal
test bool test37()

```

## function test38 {#lang-sdf2-util-SDF2Grammar-test38}

```rascal
test bool test38()

```

## function getSymbols {#lang-sdf2-util-SDF2Grammar-getSymbols}

```rascal
list[Symbol] getSymbols((Syms) `<Sym* ss>`, bool isLex)

```

## function test39 {#lang-sdf2-util-SDF2Grammar-test39}

```rascal
test bool test39()

```

## function getSymbol {#lang-sdf2-util-SDF2Grammar-getSymbol}

```rascal
Symbol getSymbol(Sym sym, bool isLex)

```

## function alt {#lang-sdf2-util-SDF2Grammar-alt}

```rascal
Symbol alt({alt(set[Symbol] ss), *Symbol rest})

```

## function test40 {#lang-sdf2-util-SDF2Grammar-test40}

```rascal
test bool test40()

```

## function test41 {#lang-sdf2-util-SDF2Grammar-test41}

```rascal
test bool test41()

```

## function test42 {#lang-sdf2-util-SDF2Grammar-test42}

```rascal
test bool test42()

```

## function test43 {#lang-sdf2-util-SDF2Grammar-test43}

```rascal
test bool test43()

```

## function test44 {#lang-sdf2-util-SDF2Grammar-test44}

```rascal
test bool test44()

```

## function test45 {#lang-sdf2-util-SDF2Grammar-test45}

```rascal
test bool test45()

```

## function test46 {#lang-sdf2-util-SDF2Grammar-test46}

```rascal
test bool test46()

```

## function test47 {#lang-sdf2-util-SDF2Grammar-test47}

```rascal
test bool test47()

```

## function test48 {#lang-sdf2-util-SDF2Grammar-test48}

```rascal
test bool test48()

```

## function test49 {#lang-sdf2-util-SDF2Grammar-test49}

```rascal
test bool test49()

```

## function test50 {#lang-sdf2-util-SDF2Grammar-test50}

```rascal
test bool test50()

```

## function test51 {#lang-sdf2-util-SDF2Grammar-test51}

```rascal
test bool test51()

```

## function test52 {#lang-sdf2-util-SDF2Grammar-test52}

```rascal
test bool test52()

```

## function test53 {#lang-sdf2-util-SDF2Grammar-test53}

```rascal
test bool test53()

```

## function test54 {#lang-sdf2-util-SDF2Grammar-test54}

```rascal
test bool test54()

```

## function test55 {#lang-sdf2-util-SDF2Grammar-test55}

```rascal
test bool test55()

```

## function test56 {#lang-sdf2-util-SDF2Grammar-test56}

```rascal
test bool test56()

```

## function test57 {#lang-sdf2-util-SDF2Grammar-test57}

```rascal
test bool test57()

```

## function test58 {#lang-sdf2-util-SDF2Grammar-test58}

```rascal
test bool test58()

```

## function test59 {#lang-sdf2-util-SDF2Grammar-test59}

```rascal
test bool test59()

```

## function test60 {#lang-sdf2-util-SDF2Grammar-test60}

```rascal
test bool test60()

```

## function test61 {#lang-sdf2-util-SDF2Grammar-test61}

```rascal
test bool test61()

```

## function test62 {#lang-sdf2-util-SDF2Grammar-test62}

```rascal
test bool test62()

```

## function test63 {#lang-sdf2-util-SDF2Grammar-test63}

```rascal
test bool test63()

```

## function test64 {#lang-sdf2-util-SDF2Grammar-test64}

```rascal
test bool test64()

```

## function test65 {#lang-sdf2-util-SDF2Grammar-test65}

```rascal
test bool test65()

```

## function unescape {#lang-sdf2-util-SDF2Grammar-unescape}

```rascal
str unescape(Sym s)

str unescape(StrCon s)

str unescape(SingleQuotedStrCon s)

```

## function testUn1 {#lang-sdf2-util-SDF2Grammar-testUn1}

```rascal
test bool testUn1()

```

## function testUn2 {#lang-sdf2-util-SDF2Grammar-testUn2}

```rascal
test bool testUn2()

```

## function testUn3 {#lang-sdf2-util-SDF2Grammar-testUn3}

```rascal
test bool testUn3()

```

## function testUn4 {#lang-sdf2-util-SDF2Grammar-testUn4}

```rascal
test bool testUn4()

```

## function testUn5 {#lang-sdf2-util-SDF2Grammar-testUn5}

```rascal
test bool testUn5()

```

## function testUn6 {#lang-sdf2-util-SDF2Grammar-testUn6}

```rascal
test bool testUn6()

```

## function testUn7 {#lang-sdf2-util-SDF2Grammar-testUn7}

```rascal
test bool testUn7()

```

## function testUn8 {#lang-sdf2-util-SDF2Grammar-testUn8}

```rascal
test bool testUn8()

```

## function testUn9 {#lang-sdf2-util-SDF2Grammar-testUn9}

```rascal
test bool testUn9()

```

## function unescapeStr {#lang-sdf2-util-SDF2Grammar-unescapeStr}

```rascal
str unescapeStr(str chars)

```

## function un20 {#lang-sdf2-util-SDF2Grammar-un20}

```rascal
test bool un20()

```

## function un21 {#lang-sdf2-util-SDF2Grammar-un21}

```rascal
test bool un21()

```

## function un22 {#lang-sdf2-util-SDF2Grammar-un22}

```rascal
test bool un22()

```

## function un23 {#lang-sdf2-util-SDF2Grammar-un23}

```rascal
test bool un23()

```

## function un24 {#lang-sdf2-util-SDF2Grammar-un24}

```rascal
test bool un24()

```

## function un25 {#lang-sdf2-util-SDF2Grammar-un25}

```rascal
test bool un25()

```

## function un26 {#lang-sdf2-util-SDF2Grammar-un26}

```rascal
test bool un26()

```

## function un27 {#lang-sdf2-util-SDF2Grammar-un27}

```rascal
test bool un27()

```

## function un28 {#lang-sdf2-util-SDF2Grammar-un28}

```rascal
test bool un28()

```

## function getCharClass {#lang-sdf2-util-SDF2Grammar-getCharClass}

```rascal
Symbol getCharClass(Class cc)

```

## function testCC1 {#lang-sdf2-util-SDF2Grammar-testCC1}

```rascal
test bool testCC1()

```

## function testCC2 {#lang-sdf2-util-SDF2Grammar-testCC2}

```rascal
test bool testCC2()

```

## function testCC3 {#lang-sdf2-util-SDF2Grammar-testCC3}

```rascal
test bool testCC3()

```

## function testCC4 {#lang-sdf2-util-SDF2Grammar-testCC4}

```rascal
test bool testCC4()

```

## function testCC5 {#lang-sdf2-util-SDF2Grammar-testCC5}

```rascal
test bool testCC5()

```

## function testCC6 {#lang-sdf2-util-SDF2Grammar-testCC6}

```rascal
test bool testCC6()

```

## function testCC7 {#lang-sdf2-util-SDF2Grammar-testCC7}

```rascal
test bool testCC7()

```

## function testCC8 {#lang-sdf2-util-SDF2Grammar-testCC8}

```rascal
test bool testCC8()

```

## function testCC9 {#lang-sdf2-util-SDF2Grammar-testCC9}

```rascal
test bool testCC9()

```

## function testCC10 {#lang-sdf2-util-SDF2Grammar-testCC10}

```rascal
test bool testCC10()

```

## function testCC11 {#lang-sdf2-util-SDF2Grammar-testCC11}

```rascal
test bool testCC11()

```

## function testCC12 {#lang-sdf2-util-SDF2Grammar-testCC12}

```rascal
test bool testCC12()

```

## function testCC13 {#lang-sdf2-util-SDF2Grammar-testCC13}

```rascal
test bool testCC13()

```

## function getCharRange {#lang-sdf2-util-SDF2Grammar-getCharRange}

```rascal
CharRange getCharRange(Range r)

```

## function testCR1 {#lang-sdf2-util-SDF2Grammar-testCR1}

```rascal
test bool testCR1()

```

## function testCR2 {#lang-sdf2-util-SDF2Grammar-testCR2}

```rascal
test bool testCR2()

```

## function testCR3 {#lang-sdf2-util-SDF2Grammar-testCR3}

```rascal
test bool testCR3()

```

## function testCR4 {#lang-sdf2-util-SDF2Grammar-testCR4}

```rascal
test bool testCR4()

```

## function getCharacter {#lang-sdf2-util-SDF2Grammar-getCharacter}

```rascal
int getCharacter(Character c)

```

## function getAttributes {#lang-sdf2-util-SDF2Grammar-getAttributes}

```rascal
set[Attr] getAttributes(Attrs as)

```

## function testAs {#lang-sdf2-util-SDF2Grammar-testAs}

```rascal
test bool testAs()

```

## function getAttribute {#lang-sdf2-util-SDF2Grammar-getAttribute}

```rascal
set[Attr] getAttribute(Attribute m)

```

## function testAs2 {#lang-sdf2-util-SDF2Grammar-testAs2}

```rascal
test bool testAs2()

```

## function getAssociativity {#lang-sdf2-util-SDF2Grammar-getAssociativity}

```rascal
Associativity getAssociativity(Assoc as)

```

## function testAssoc {#lang-sdf2-util-SDF2Grammar-testAssoc}

```rascal
test bool testAssoc()

```

## function separgs2symbols {#lang-sdf2-util-SDF2Grammar-separgs2symbols}

```rascal
list[Symbol] separgs2symbols({Sym ","}+ args, bool isLex)

```

