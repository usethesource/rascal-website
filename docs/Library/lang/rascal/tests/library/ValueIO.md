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

```rascal
list[&T]

```

## alias Y {#lang-rascal-tests-library-ValueIO-Y}

```rascal
int

```

## function binaryWriteRead {#lang-rascal-tests-library-ValueIO-binaryWriteRead}

```rascal
bool  binaryWriteRead(type[&T] _, value exp)

```

## function binBool {#lang-rascal-tests-library-ValueIO-binBool}

```rascal
test bool binBool()

```

## function binInt {#lang-rascal-tests-library-ValueIO-binInt}

```rascal
test bool binInt()

```

## function binReal {#lang-rascal-tests-library-ValueIO-binReal}

```rascal
test bool binReal()

```

## function binStr1 {#lang-rascal-tests-library-ValueIO-binStr1}

```rascal
test bool binStr1()

```

## function binStr2 {#lang-rascal-tests-library-ValueIO-binStr2}

```rascal
test bool binStr2()

```

## function binLoc {#lang-rascal-tests-library-ValueIO-binLoc}

```rascal
test bool binLoc()

```

## function binList {#lang-rascal-tests-library-ValueIO-binList}

```rascal
test bool binList()

```

## function binSet {#lang-rascal-tests-library-ValueIO-binSet}

```rascal
test bool binSet()

```

## function binMap {#lang-rascal-tests-library-ValueIO-binMap}

```rascal
test bool binMap()

```

## function binTuple {#lang-rascal-tests-library-ValueIO-binTuple}

```rascal
test bool binTuple()

```

## function binAdt {#lang-rascal-tests-library-ValueIO-binAdt}

```rascal
test bool binAdt()

```

## function binParametrizedAdt1 {#lang-rascal-tests-library-ValueIO-binParametrizedAdt1}

```rascal
test bool binParametrizedAdt1()

```

## function binParametrizedAdt2 {#lang-rascal-tests-library-ValueIO-binParametrizedAdt2}

```rascal
test bool binParametrizedAdt2()

```

## function binParamAliasListInt {#lang-rascal-tests-library-ValueIO-binParamAliasListInt}

```rascal
test bool binParamAliasListInt()

```

## function binParamAliasInt {#lang-rascal-tests-library-ValueIO-binParamAliasInt}

```rascal
test bool binParamAliasInt()

```

## function textWriteRead {#lang-rascal-tests-library-ValueIO-textWriteRead}

```rascal
bool textWriteRead(type[&T] g, value exp)

```

## function textParametrizedAdt1 {#lang-rascal-tests-library-ValueIO-textParametrizedAdt1}

```rascal
test bool textParametrizedAdt1()

```

## function textParametrizedAdt2 {#lang-rascal-tests-library-ValueIO-textParametrizedAdt2}

```rascal
test bool textParametrizedAdt2()

```

## function textParametrizedAdt3 {#lang-rascal-tests-library-ValueIO-textParametrizedAdt3}

```rascal
test bool textParametrizedAdt3()

```

## function textBool {#lang-rascal-tests-library-ValueIO-textBool}

```rascal
test bool textBool()

```

## function textInt {#lang-rascal-tests-library-ValueIO-textInt}

```rascal
test bool textInt()

```

## function textReal {#lang-rascal-tests-library-ValueIO-textReal}

```rascal
test bool textReal()

```

## function textStr1 {#lang-rascal-tests-library-ValueIO-textStr1}

```rascal
test bool textStr1()

```

## function textStr2 {#lang-rascal-tests-library-ValueIO-textStr2}

```rascal
test bool textStr2()

```

## function textLoc {#lang-rascal-tests-library-ValueIO-textLoc}

```rascal
test bool textLoc()

```

## function textList {#lang-rascal-tests-library-ValueIO-textList}

```rascal
test bool textList()

```

## function textSet {#lang-rascal-tests-library-ValueIO-textSet}

```rascal
test bool textSet()

```

## function textMap {#lang-rascal-tests-library-ValueIO-textMap}

```rascal
test bool textMap()

```

## function textTuple {#lang-rascal-tests-library-ValueIO-textTuple}

```rascal
test bool textTuple()

```

## function textAdt {#lang-rascal-tests-library-ValueIO-textAdt}

```rascal
test bool textAdt()

```

## function valueText {#lang-rascal-tests-library-ValueIO-valueText}

```rascal
test bool valueText(value v)

```

## function nodeText {#lang-rascal-tests-library-ValueIO-nodeText}

```rascal
test bool nodeText(node v)

```

## function strText {#lang-rascal-tests-library-ValueIO-strText}

```rascal
test bool strText(str v)

```

## function mapText {#lang-rascal-tests-library-ValueIO-mapText}

```rascal
test bool mapText(map[value, value] v)

```

## function setText {#lang-rascal-tests-library-ValueIO-setText}

```rascal
test bool setText(set[value] v)

```

## function listText {#lang-rascal-tests-library-ValueIO-listText}

```rascal
test bool listText(list[value] v)

```

## function tupleText {#lang-rascal-tests-library-ValueIO-tupleText}

```rascal
test bool tupleText(tuple[value,value,value] v)

```

## function numText {#lang-rascal-tests-library-ValueIO-numText}

```rascal
test bool numText(num v)

```

## function valueBinary {#lang-rascal-tests-library-ValueIO-valueBinary}

```rascal
test bool valueBinary(value v)

```

## function nodeBinary {#lang-rascal-tests-library-ValueIO-nodeBinary}

```rascal
test bool nodeBinary(node v)

```

## function strBinary {#lang-rascal-tests-library-ValueIO-strBinary}

```rascal
test bool strBinary(str v)

```

## function mapBinary {#lang-rascal-tests-library-ValueIO-mapBinary}

```rascal
test bool mapBinary(map[value, value] v)

```

## function setBinary {#lang-rascal-tests-library-ValueIO-setBinary}

```rascal
test bool setBinary(set[value] v)

```

## function listBinary {#lang-rascal-tests-library-ValueIO-listBinary}

```rascal
test bool listBinary(list[value] v)

```

## function tupleBinary {#lang-rascal-tests-library-ValueIO-tupleBinary}

```rascal
test bool tupleBinary(tuple[value,value,value] v)

```

## function numBinary {#lang-rascal-tests-library-ValueIO-numBinary}

```rascal
test bool numBinary(num v)

```

## function disablingCompressionWorks {#lang-rascal-tests-library-ValueIO-disablingCompressionWorks}

```rascal
test bool disablingCompressionWorks(value v)

```

## data NestedValue {#lang-rascal-tests-library-ValueIO-NestedValue}

```rascal
data NestedValue  
     = inAList(list[value] lvs)
     | inASet(set[value] svs)
     | inItself(NestedValue nv)
     ;
```

## function disablingCompressionWorksWithSharedValues {#lang-rascal-tests-library-ValueIO-disablingCompressionWorksWithSharedValues}

```rascal
test bool disablingCompressionWorksWithSharedValues(set[NestedValue] a, set[NestedValue] b, NestedValue c, value d)

```

## function writingParseTreeWorks {#lang-rascal-tests-library-ValueIO-writingParseTreeWorks}

```rascal
test bool writingParseTreeWorks()

```

## function writingParseTreeWorksWithoutCompression {#lang-rascal-tests-library-ValueIO-writingParseTreeWorksWithoutCompression}

```rascal
test bool writingParseTreeWorksWithoutCompression()

```

## alias XX {#lang-rascal-tests-library-ValueIO-XX}

```rascal
loc

```

## data ExtraAliases {#lang-rascal-tests-library-ValueIO-ExtraAliases}

```rascal
data ExtraAliases  
     = al0(int x)
     | al1(rel[XX, str, ExtraAliases] dt)
     ;
```

## function aliasesNested {#lang-rascal-tests-library-ValueIO-aliasesNested}

```rascal
test bool aliasesNested(ExtraAliases e)

```

## function binaryWriteRead {#lang-rascal-tests-library-ValueIO-binaryWriteRead}

```rascal
bool  binaryWriteRead(type[&T] typ)

```

## function reifyBool {#lang-rascal-tests-library-ValueIO-reifyBool}

```rascal
test bool reifyBool()

```

## function reifyStr {#lang-rascal-tests-library-ValueIO-reifyStr}

```rascal
test bool reifyStr()

```

## function reifyInt {#lang-rascal-tests-library-ValueIO-reifyInt}

```rascal
test bool reifyInt()

```

## function reifyReal {#lang-rascal-tests-library-ValueIO-reifyReal}

```rascal
test bool reifyReal()

```

## function reifyRat {#lang-rascal-tests-library-ValueIO-reifyRat}

```rascal
test bool reifyRat()

```

## function reifyNum {#lang-rascal-tests-library-ValueIO-reifyNum}

```rascal
test bool reifyNum()

```

## function reifyNode {#lang-rascal-tests-library-ValueIO-reifyNode}

```rascal
test bool reifyNode()

```

## function reifyVoid {#lang-rascal-tests-library-ValueIO-reifyVoid}

```rascal
test bool reifyVoid()

```

## function reifyValue {#lang-rascal-tests-library-ValueIO-reifyValue}

```rascal
test bool reifyValue()

```

## function reifyList {#lang-rascal-tests-library-ValueIO-reifyList}

```rascal
test bool reifyList()

```

## function reifySet {#lang-rascal-tests-library-ValueIO-reifySet}

```rascal
test bool reifySet()

```

## function reifyLrel1 {#lang-rascal-tests-library-ValueIO-reifyLrel1}

```rascal
test bool reifyLrel1()

```

## function reifyLrel2 {#lang-rascal-tests-library-ValueIO-reifyLrel2}

```rascal
test bool reifyLrel2()

```

## function reifyRel1 {#lang-rascal-tests-library-ValueIO-reifyRel1}

```rascal
test bool reifyRel1()

```

## function reifyRel2 {#lang-rascal-tests-library-ValueIO-reifyRel2}

```rascal
test bool reifyRel2()

```

## function reifyMap1 {#lang-rascal-tests-library-ValueIO-reifyMap1}

```rascal
test bool reifyMap1()

```

## function reifyMap2 {#lang-rascal-tests-library-ValueIO-reifyMap2}

```rascal
test bool reifyMap2()

```

## function reifyFun1 {#lang-rascal-tests-library-ValueIO-reifyFun1}

```rascal
test bool reifyFun1()

```

## function reifyFun2 {#lang-rascal-tests-library-ValueIO-reifyFun2}

```rascal
test bool reifyFun2()

```

## function reifyPar1 {#lang-rascal-tests-library-ValueIO-reifyPar1}

```rascal
test bool reifyPar1()

```

## function reifyPar2 {#lang-rascal-tests-library-ValueIO-reifyPar2}

```rascal
test bool reifyPar2()

```

## alias A[&T] {#lang-rascal-tests-library-ValueIO-A[&T]}

```rascal
list[&T]

```

## alias B[&T] {#lang-rascal-tests-library-ValueIO-B[&T]}

```rascal
list[A[&T]]

```

## function reifyAlias1 {#lang-rascal-tests-library-ValueIO-reifyAlias1}

```rascal
test bool reifyAlias1()

```

## function reifyAlias2 {#lang-rascal-tests-library-ValueIO-reifyAlias2}

```rascal
test bool reifyAlias2()

```

