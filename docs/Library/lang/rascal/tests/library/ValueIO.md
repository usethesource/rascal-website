---
title: "module lang::rascal::tests::library::ValueIO"
---

#### Usage

`import lang::rascal::tests::library::ValueIO;`

## data Bool {#lang-rascal-tests-library-ValueIO-Bool}

```rascal
data Bool (str def = "2") 
     = btrue()
     | bfalse(bool falsity = true)
     | band(Bool left, Bool right)
     | bor(Bool left, Bool right)
     ;
```

## data C {#lang-rascal-tests-library-ValueIO-C}

```rascal
data C  
     = c(Maybe[int] i)
     ;
```

## data Maybe {#lang-rascal-tests-library-ValueIO-Maybe}

```rascal
data Maybe[&T]  
     = none()
     | some(&T t)
     ;
```

## alias X[&T] {#lang-rascal-tests-library-ValueIO-X[&T]}

* `list[&T]`

## alias Y {#lang-rascal-tests-library-ValueIO-Y}

* `int`

## function binaryWriteRead {#lang-rascal-tests-library-ValueIO-binaryWriteRead}

* ``bool  binaryWriteRead(type[&T] _, value exp)``

## function binBool {#lang-rascal-tests-library-ValueIO-binBool}

* ``test bool binBool()``

## function binInt {#lang-rascal-tests-library-ValueIO-binInt}

* ``test bool binInt()``

## function binReal {#lang-rascal-tests-library-ValueIO-binReal}

* ``test bool binReal()``

## function binStr1 {#lang-rascal-tests-library-ValueIO-binStr1}

* ``test bool binStr1()``

## function binStr2 {#lang-rascal-tests-library-ValueIO-binStr2}

* ``test bool binStr2()``

## function binLoc {#lang-rascal-tests-library-ValueIO-binLoc}

* ``test bool binLoc()``

## function binList {#lang-rascal-tests-library-ValueIO-binList}

* ``test bool binList()``

## function binSet {#lang-rascal-tests-library-ValueIO-binSet}

* ``test bool binSet()``

## function binMap {#lang-rascal-tests-library-ValueIO-binMap}

* ``test bool binMap()``

## function binTuple {#lang-rascal-tests-library-ValueIO-binTuple}

* ``test bool binTuple()``

## function binAdt {#lang-rascal-tests-library-ValueIO-binAdt}

* ``test bool binAdt()``

## function binParametrizedAdt1 {#lang-rascal-tests-library-ValueIO-binParametrizedAdt1}

* ``test bool binParametrizedAdt1()``

## function binParametrizedAdt2 {#lang-rascal-tests-library-ValueIO-binParametrizedAdt2}

* ``test bool binParametrizedAdt2()``

## function binParamAliasListInt {#lang-rascal-tests-library-ValueIO-binParamAliasListInt}

* ``test bool binParamAliasListInt()``

## function binParamAliasInt {#lang-rascal-tests-library-ValueIO-binParamAliasInt}

* ``test bool binParamAliasInt()``

## function textWriteRead {#lang-rascal-tests-library-ValueIO-textWriteRead}

* ``bool textWriteRead(type[&T] g, value exp)``

## function textParametrizedAdt1 {#lang-rascal-tests-library-ValueIO-textParametrizedAdt1}

* ``test bool textParametrizedAdt1()``

## function textParametrizedAdt2 {#lang-rascal-tests-library-ValueIO-textParametrizedAdt2}

* ``test bool textParametrizedAdt2()``

## function textParametrizedAdt3 {#lang-rascal-tests-library-ValueIO-textParametrizedAdt3}

* ``test bool textParametrizedAdt3()``

## function textBool {#lang-rascal-tests-library-ValueIO-textBool}

* ``test bool textBool()``

## function textInt {#lang-rascal-tests-library-ValueIO-textInt}

* ``test bool textInt()``

## function textReal {#lang-rascal-tests-library-ValueIO-textReal}

* ``test bool textReal()``

## function textStr1 {#lang-rascal-tests-library-ValueIO-textStr1}

* ``test bool textStr1()``

## function textStr2 {#lang-rascal-tests-library-ValueIO-textStr2}

* ``test bool textStr2()``

## function textLoc {#lang-rascal-tests-library-ValueIO-textLoc}

* ``test bool textLoc()``

## function textList {#lang-rascal-tests-library-ValueIO-textList}

* ``test bool textList()``

## function textSet {#lang-rascal-tests-library-ValueIO-textSet}

* ``test bool textSet()``

## function textMap {#lang-rascal-tests-library-ValueIO-textMap}

* ``test bool textMap()``

## function textTuple {#lang-rascal-tests-library-ValueIO-textTuple}

* ``test bool textTuple()``

## function textAdt {#lang-rascal-tests-library-ValueIO-textAdt}

* ``test bool textAdt()``

## function valueText {#lang-rascal-tests-library-ValueIO-valueText}

* ``test bool valueText(value v)``

## function nodeText {#lang-rascal-tests-library-ValueIO-nodeText}

* ``test bool nodeText(node v)``

## function strText {#lang-rascal-tests-library-ValueIO-strText}

* ``test bool strText(str v)``

## function mapText {#lang-rascal-tests-library-ValueIO-mapText}

* ``test bool mapText(map[value, value] v)``

## function setText {#lang-rascal-tests-library-ValueIO-setText}

* ``test bool setText(set[value] v)``

## function listText {#lang-rascal-tests-library-ValueIO-listText}

* ``test bool listText(list[value] v)``

## function tupleText {#lang-rascal-tests-library-ValueIO-tupleText}

* ``test bool tupleText(tuple[value,value,value] v)``

## function numText {#lang-rascal-tests-library-ValueIO-numText}

* ``test bool numText(num v)``

## function valueBinary {#lang-rascal-tests-library-ValueIO-valueBinary}

* ``test bool valueBinary(value v)``

## function nodeBinary {#lang-rascal-tests-library-ValueIO-nodeBinary}

* ``test bool nodeBinary(node v)``

## function strBinary {#lang-rascal-tests-library-ValueIO-strBinary}

* ``test bool strBinary(str v)``

## function mapBinary {#lang-rascal-tests-library-ValueIO-mapBinary}

* ``test bool mapBinary(map[value, value] v)``

## function setBinary {#lang-rascal-tests-library-ValueIO-setBinary}

* ``test bool setBinary(set[value] v)``

## function listBinary {#lang-rascal-tests-library-ValueIO-listBinary}

* ``test bool listBinary(list[value] v)``

## function tupleBinary {#lang-rascal-tests-library-ValueIO-tupleBinary}

* ``test bool tupleBinary(tuple[value,value,value] v)``

## function numBinary {#lang-rascal-tests-library-ValueIO-numBinary}

* ``test bool numBinary(num v)``

## function disablingCompressionWorks {#lang-rascal-tests-library-ValueIO-disablingCompressionWorks}

* ``test bool disablingCompressionWorks(value v)``

## data NestedValue {#lang-rascal-tests-library-ValueIO-NestedValue}

```rascal
data NestedValue  
     = inAList(list[value] lvs)
     | inASet(set[value] svs)
     | inItself(NestedValue nv)
     ;
```

## function disablingCompressionWorksWithSharedValues {#lang-rascal-tests-library-ValueIO-disablingCompressionWorksWithSharedValues}

* ``test bool disablingCompressionWorksWithSharedValues(set[NestedValue] a, set[NestedValue] b, NestedValue c, value d)``

## function writingParseTreeWorks {#lang-rascal-tests-library-ValueIO-writingParseTreeWorks}

* ``test bool writingParseTreeWorks()``

## function writingParseTreeWorksWithoutCompression {#lang-rascal-tests-library-ValueIO-writingParseTreeWorksWithoutCompression}

* ``test bool writingParseTreeWorksWithoutCompression()``

## alias XX {#lang-rascal-tests-library-ValueIO-XX}

* `loc`

## data ExtraAliases {#lang-rascal-tests-library-ValueIO-ExtraAliases}

```rascal
data ExtraAliases  
     = al0(int x)
     | al1(rel[XX, str, ExtraAliases] dt)
     ;
```

## function aliasesNested {#lang-rascal-tests-library-ValueIO-aliasesNested}

* ``test bool aliasesNested(ExtraAliases e)``

## function binaryWriteRead {#lang-rascal-tests-library-ValueIO-binaryWriteRead}

* ``bool  binaryWriteRead(type[&T] typ)``

## function reifyBool {#lang-rascal-tests-library-ValueIO-reifyBool}

* ``test bool reifyBool()``

## function reifyStr {#lang-rascal-tests-library-ValueIO-reifyStr}

* ``test bool reifyStr()``

## function reifyInt {#lang-rascal-tests-library-ValueIO-reifyInt}

* ``test bool reifyInt()``

## function reifyReal {#lang-rascal-tests-library-ValueIO-reifyReal}

* ``test bool reifyReal()``

## function reifyRat {#lang-rascal-tests-library-ValueIO-reifyRat}

* ``test bool reifyRat()``

## function reifyNum {#lang-rascal-tests-library-ValueIO-reifyNum}

* ``test bool reifyNum()``

## function reifyNode {#lang-rascal-tests-library-ValueIO-reifyNode}

* ``test bool reifyNode()``

## function reifyVoid {#lang-rascal-tests-library-ValueIO-reifyVoid}

* ``test bool reifyVoid()``

## function reifyValue {#lang-rascal-tests-library-ValueIO-reifyValue}

* ``test bool reifyValue()``

## function reifyList {#lang-rascal-tests-library-ValueIO-reifyList}

* ``test bool reifyList()``

## function reifySet {#lang-rascal-tests-library-ValueIO-reifySet}

* ``test bool reifySet()``

## function reifyLrel1 {#lang-rascal-tests-library-ValueIO-reifyLrel1}

* ``test bool reifyLrel1()``

## function reifyLrel2 {#lang-rascal-tests-library-ValueIO-reifyLrel2}

* ``test bool reifyLrel2()``

## function reifyRel1 {#lang-rascal-tests-library-ValueIO-reifyRel1}

* ``test bool reifyRel1()``

## function reifyRel2 {#lang-rascal-tests-library-ValueIO-reifyRel2}

* ``test bool reifyRel2()``

## function reifyMap1 {#lang-rascal-tests-library-ValueIO-reifyMap1}

* ``test bool reifyMap1()``

## function reifyMap2 {#lang-rascal-tests-library-ValueIO-reifyMap2}

* ``test bool reifyMap2()``

## function reifyFun1 {#lang-rascal-tests-library-ValueIO-reifyFun1}

* ``test bool reifyFun1()``

## function reifyFun2 {#lang-rascal-tests-library-ValueIO-reifyFun2}

* ``test bool reifyFun2()``

## function reifyPar1 {#lang-rascal-tests-library-ValueIO-reifyPar1}

* ``test bool reifyPar1()``

## function reifyPar2 {#lang-rascal-tests-library-ValueIO-reifyPar2}

* ``test bool reifyPar2()``

## alias A[&T] {#lang-rascal-tests-library-ValueIO-A[&T]}

* `list[&T]`

## alias B[&T] {#lang-rascal-tests-library-ValueIO-B[&T]}

* `list[A[&T]]`

## function reifyAlias1 {#lang-rascal-tests-library-ValueIO-reifyAlias1}

* ``test bool reifyAlias1()``

## function reifyAlias2 {#lang-rascal-tests-library-ValueIO-reifyAlias2}

* ``test bool reifyAlias2()``

