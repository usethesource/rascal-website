---
title: "module lang::rascal::tests::basic::Locations"
---

#### Usage

`import lang::rascal::tests::basic::Locations;`


## function singleChar {#lang-rascal-tests-basic-Locations-singleChar}

```rascal
int singleChar(str s)

```

## function makeValidSchemeChars {#lang-rascal-tests-basic-Locations-makeValidSchemeChars}

```rascal
list[int] makeValidSchemeChars()

```

## function createValidScheme {#lang-rascal-tests-basic-Locations-createValidScheme}

```rascal
str createValidScheme(str s)

```

## function noOpaqueURI2 {#lang-rascal-tests-basic-Locations-noOpaqueURI2}

```rascal
test bool noOpaqueURI2()

```

## function canChangeScheme1 {#lang-rascal-tests-basic-Locations-canChangeScheme1}

```rascal
test bool canChangeScheme1(loc l, str s)

```

## function canChangeScheme2 {#lang-rascal-tests-basic-Locations-canChangeScheme2}

```rascal
test bool canChangeScheme2(loc l, str s)

```

## function canChangeAuthority1 {#lang-rascal-tests-basic-Locations-canChangeAuthority1}

```rascal
test bool canChangeAuthority1(loc l, str s)

```

## function canChangeAuthority2 {#lang-rascal-tests-basic-Locations-canChangeAuthority2}

```rascal
test bool canChangeAuthority2(loc l, str s)

```

## function fixPath {#lang-rascal-tests-basic-Locations-fixPath}

```rascal
str fixPath(str s)

```

## function canChangePath1 {#lang-rascal-tests-basic-Locations-canChangePath1}

```rascal
test bool canChangePath1(loc l, str s)

```

## function canChangePath2 {#lang-rascal-tests-basic-Locations-canChangePath2}

```rascal
test bool canChangePath2(loc l, str s)

```

## function canChangeQuery1 {#lang-rascal-tests-basic-Locations-canChangeQuery1}

```rascal
test bool canChangeQuery1(loc l, str s)

```

## function canChangeQuery2 {#lang-rascal-tests-basic-Locations-canChangeQuery2}

```rascal
test bool canChangeQuery2(loc l, str s)

```

## function canChangeFragment1 {#lang-rascal-tests-basic-Locations-canChangeFragment1}

```rascal
test bool canChangeFragment1(loc l, str s)

```

## function canChangeFragment2 {#lang-rascal-tests-basic-Locations-canChangeFragment2}

```rascal
test bool canChangeFragment2(loc l, str s)

```

## function createValidHost {#lang-rascal-tests-basic-Locations-createValidHost}

```rascal
str createValidHost(str s)

```

## function canChangeHost1 {#lang-rascal-tests-basic-Locations-canChangeHost1}

```rascal
test bool canChangeHost1(loc l, str s)

```

## function canChangeHost2 {#lang-rascal-tests-basic-Locations-canChangeHost2}

```rascal
test bool canChangeHost2(loc l, str s)

```

## function canChangeUser1 {#lang-rascal-tests-basic-Locations-canChangeUser1}

```rascal
test bool canChangeUser1(loc l, str s)

```

## function canChangeUser2 {#lang-rascal-tests-basic-Locations-canChangeUser2}

```rascal
test bool canChangeUser2(loc l, str s)

```

## function validURIAuthority {#lang-rascal-tests-basic-Locations-validURIAuthority}

```rascal
test bool validURIAuthority(loc l, str s)

```

## function validURIPath {#lang-rascal-tests-basic-Locations-validURIPath}

```rascal
test bool validURIPath(loc l, str s)

```

## function validURIQuery {#lang-rascal-tests-basic-Locations-validURIQuery}

```rascal
test bool validURIQuery(loc l, str s)

```

## function validURIFragment {#lang-rascal-tests-basic-Locations-validURIFragment}

```rascal
test bool validURIFragment(loc l, str s)

```

## function fixPathAddition {#lang-rascal-tests-basic-Locations-fixPathAddition}

```rascal
str fixPathAddition(str s)

```

## function pathAdditions1 {#lang-rascal-tests-basic-Locations-pathAdditions1}

```rascal
test bool pathAdditions1(list[str] ss)

```

## function pathAdditions2 {#lang-rascal-tests-basic-Locations-pathAdditions2}

```rascal
test bool pathAdditions2(loc l, str s)

```

## function testParent {#lang-rascal-tests-basic-Locations-testParent}

```rascal
test bool testParent(loc l, str s)

```

## function testWindowsParent {#lang-rascal-tests-basic-Locations-testWindowsParent}

```rascal
test bool testWindowsParent(str s)

```

## function testFile {#lang-rascal-tests-basic-Locations-testFile}

```rascal
test bool testFile(loc l, str s)

```

## function supportSquareBraces {#lang-rascal-tests-basic-Locations-supportSquareBraces}

```rascal
test bool supportSquareBraces(loc l)

```

## function noFile {#lang-rascal-tests-basic-Locations-noFile}

```rascal
test bool noFile()

```

## function rootPath {#lang-rascal-tests-basic-Locations-rootPath}

```rascal
test bool rootPath()

```

## function rootPath3 {#lang-rascal-tests-basic-Locations-rootPath3}

```rascal
test bool rootPath3()

```

## function rootPath4 {#lang-rascal-tests-basic-Locations-rootPath4}

```rascal
test bool rootPath4()

```

## function top0 {#lang-rascal-tests-basic-Locations-top0}

```rascal
test bool top0(loc x)

```

## function top1 {#lang-rascal-tests-basic-Locations-top1}

```rascal
test bool top1(loc x)

```

## function top2 {#lang-rascal-tests-basic-Locations-top2}

```rascal
test bool top2(loc x)

```

## function splicePathEncoded {#lang-rascal-tests-basic-Locations-splicePathEncoded}

```rascal
test bool splicePathEncoded()

```

## function spliceArbPathEncoded {#lang-rascal-tests-basic-Locations-spliceArbPathEncoded}

```rascal
test bool spliceArbPathEncoded(str x)

```

## function enclosingTest1 {#lang-rascal-tests-basic-Locations-enclosingTest1}

```rascal
test bool enclosingTest1()

```

## function enclosingTest2 {#lang-rascal-tests-basic-Locations-enclosingTest2}

```rascal
test bool enclosingTest2()

```

## function enclosingTest3 {#lang-rascal-tests-basic-Locations-enclosingTest3}

```rascal
test bool enclosingTest3()

```

## function enclosingTest4 {#lang-rascal-tests-basic-Locations-enclosingTest4}

```rascal
test bool enclosingTest4()

```

## function enclosingTest5 {#lang-rascal-tests-basic-Locations-enclosingTest5}

```rascal
test bool enclosingTest5()

```

## function enclosingTest6 {#lang-rascal-tests-basic-Locations-enclosingTest6}

```rascal
test bool enclosingTest6()

```

## function enclosingTest7 {#lang-rascal-tests-basic-Locations-enclosingTest7}

```rascal
test bool enclosingTest7()

```

## function enclosingTest8 {#lang-rascal-tests-basic-Locations-enclosingTest8}

```rascal
test bool enclosingTest8()

```

## function enclosingTest9 {#lang-rascal-tests-basic-Locations-enclosingTest9}

```rascal
test bool enclosingTest9()

```

## function offSetLengthEnclosing {#lang-rascal-tests-basic-Locations-offSetLengthEnclosing}

```rascal
test bool offSetLengthEnclosing(int aOffset, int aLength, int bOffset, int bLength)

```

## function getLineAndColumn {#lang-rascal-tests-basic-Locations-getLineAndColumn}

```rascal
tuple[int line, int column] getLineAndColumn(int idx)

```

## function buildLoc {#lang-rascal-tests-basic-Locations-buildLoc}

```rascal
loc buildLoc(int f, int t, str base = "base.src")

```

## function restrict {#lang-rascal-tests-basic-Locations-restrict}

```rascal
int restrict(int i)

```

## function getLoc {#lang-rascal-tests-basic-Locations-getLoc}

```rascal
loc getLoc(int f, int t, str base = "base.src")

```

## function less1 {#lang-rascal-tests-basic-Locations-less1}

```rascal
test bool less1(int f1, int t1, int f2, int t2)

```

## function less2 {#lang-rascal-tests-basic-Locations-less2}

```rascal
test bool less2(int f, int t)

```

## function lessequal1 {#lang-rascal-tests-basic-Locations-lessequal1}

```rascal
test  bool lessequal1(int f1, int t1, int f2, int t2)

```

## function lessequal2 {#lang-rascal-tests-basic-Locations-lessequal2}

```rascal
test bool lessequal2(int f, int t)

```

## function greater1 {#lang-rascal-tests-basic-Locations-greater1}

```rascal
test  bool greater1(int f1, int t1, int f2, int t2)

```

## function greater2 {#lang-rascal-tests-basic-Locations-greater2}

```rascal
test bool greater2(int f, int t)

```

## function greaterequal1 {#lang-rascal-tests-basic-Locations-greaterequal1}

```rascal
test  bool greaterequal1(int f1, int t1, int f2, int t2)

```

## function greaterequal2 {#lang-rascal-tests-basic-Locations-greaterequal2}

```rascal
test bool greaterequal2(int f, int t)

```

## function equal1 {#lang-rascal-tests-basic-Locations-equal1}

```rascal
test bool equal1(int f, int t)

```

## function equal2 {#lang-rascal-tests-basic-Locations-equal2}

```rascal
test bool equal2(int f, int t)

```

## function getLocs {#lang-rascal-tests-basic-Locations-getLocs}

```rascal
list[loc] getLocs(int n)

```

## function locInSet {#lang-rascal-tests-basic-Locations-locInSet}

```rascal
test bool locInSet()

```

## function locInMap {#lang-rascal-tests-basic-Locations-locInMap}

```rascal
test bool locInMap()

```

## function locInRel {#lang-rascal-tests-basic-Locations-locInRel}

```rascal
test bool locInRel()

```

## function locInLRel {#lang-rascal-tests-basic-Locations-locInLRel}

```rascal
test bool locInLRel()

```

## function makeLocsWithGap {#lang-rascal-tests-basic-Locations-makeLocsWithGap}

```rascal
tuple[loc, loc] makeLocsWithGap(int gap)

```

## function report {#lang-rascal-tests-basic-Locations-report}

```rascal
bool report(loc l1, loc l2, bool expected)

```

## function isLexicallyLess1 {#lang-rascal-tests-basic-Locations-isLexicallyLess1}

```rascal
bool isLexicallyLess1(int f, int t)

bool isLexicallyLess1(int _)

```

## function isSameFile1 {#lang-rascal-tests-basic-Locations-isSameFile1}

```rascal
test bool isSameFile1()

```

## function isSameFile2 {#lang-rascal-tests-basic-Locations-isSameFile2}

```rascal
test bool isSameFile2()

```

## function isSameFile3 {#lang-rascal-tests-basic-Locations-isSameFile3}

```rascal
test bool isSameFile3(loc l)

```

## function isSameFile4 {#lang-rascal-tests-basic-Locations-isSameFile4}

```rascal
test bool isSameFile4(loc l)

```

## function isSameFile5 {#lang-rascal-tests-basic-Locations-isSameFile5}

```rascal
test bool isSameFile5(loc l)

```

## function isContainedIn1 {#lang-rascal-tests-basic-Locations-isContainedIn1}

```rascal
test bool isContainedIn1(int f, int len)

```

## function isContainedIn2 {#lang-rascal-tests-basic-Locations-isContainedIn2}

```rascal
test bool isContainedIn2(int f, int len)

```

## function beginsBefore1 {#lang-rascal-tests-basic-Locations-beginsBefore1}

```rascal
test bool beginsBefore1(int _)

```

## function beginsBefore2 {#lang-rascal-tests-basic-Locations-beginsBefore2}

```rascal
test bool beginsBefore2(int _)

```

## function isBefore1 {#lang-rascal-tests-basic-Locations-isBefore1}

```rascal
test bool isBefore1(int _)

```

## function isBefore2 {#lang-rascal-tests-basic-Locations-isBefore2}

```rascal
test bool isBefore2(int _)

```

## function isImmediatelyBefore1 {#lang-rascal-tests-basic-Locations-isImmediatelyBefore1}

```rascal
test bool isImmediatelyBefore1(int _)

```

## function isImmediatelyBefore2 {#lang-rascal-tests-basic-Locations-isImmediatelyBefore2}

```rascal
test bool isImmediatelyBefore2(int _)

```

## function beginsAfter1 {#lang-rascal-tests-basic-Locations-beginsAfter1}

```rascal
test bool beginsAfter1(int _)

```

## function isAfter1 {#lang-rascal-tests-basic-Locations-isAfter1}

```rascal
test bool isAfter1(int _)

```

## function isImmediatelyAfter1 {#lang-rascal-tests-basic-Locations-isImmediatelyAfter1}

```rascal
test bool isImmediatelyAfter1(int _)

```

## function isOverlapping1 {#lang-rascal-tests-basic-Locations-isOverlapping1}

```rascal
test bool isOverlapping1(int _)

```

## function isOverlapping2 {#lang-rascal-tests-basic-Locations-isOverlapping2}

```rascal
test bool isOverlapping2(int _)

```

## function isCover1 {#lang-rascal-tests-basic-Locations-isCover1}

```rascal
test bool isCover1(int _)

```

## function isCover2 {#lang-rascal-tests-basic-Locations-isCover2}

```rascal
test bool isCover2(int _)

```

## function isCover3 {#lang-rascal-tests-basic-Locations-isCover3}

```rascal
test bool isCover3(int f, int t)

```

## function trailingSlashFile1 {#lang-rascal-tests-basic-Locations-trailingSlashFile1}

```rascal
test bool trailingSlashFile1()

```

## function trailingSlashFile2 {#lang-rascal-tests-basic-Locations-trailingSlashFile2}

```rascal
test bool trailingSlashFile2()

```

## function testRelativize {#lang-rascal-tests-basic-Locations-testRelativize}

```rascal
test bool testRelativize()

```

## function testFailedRelativize {#lang-rascal-tests-basic-Locations-testFailedRelativize}

```rascal
test bool testFailedRelativize()

```

## function trailingSlashRelativize1 {#lang-rascal-tests-basic-Locations-trailingSlashRelativize1}

```rascal
test bool trailingSlashRelativize1()

```

## function trailingSlashRelativize2 {#lang-rascal-tests-basic-Locations-trailingSlashRelativize2}

```rascal
test bool trailingSlashRelativize2()

```

## function extensionSetWithMoreDots1 {#lang-rascal-tests-basic-Locations-extensionSetWithMoreDots1}

```rascal
test bool extensionSetWithMoreDots1()

```

## function extensionSetWithMoreDots2 {#lang-rascal-tests-basic-Locations-extensionSetWithMoreDots2}

```rascal
test bool extensionSetWithMoreDots2()

```

## function extensionSetWithSlash {#lang-rascal-tests-basic-Locations-extensionSetWithSlash}

```rascal
test bool extensionSetWithSlash()

```

## function extensionSetWithSlashAndMoreDots {#lang-rascal-tests-basic-Locations-extensionSetWithSlashAndMoreDots}

```rascal
test bool extensionSetWithSlashAndMoreDots()

```

## function extensionGetWithMoreDot1 {#lang-rascal-tests-basic-Locations-extensionGetWithMoreDot1}

```rascal
test bool extensionGetWithMoreDot1()

```

## function extensionGetWithMoreDots2 {#lang-rascal-tests-basic-Locations-extensionGetWithMoreDots2}

```rascal
test bool extensionGetWithMoreDots2()

```

## function extensionGetWithSlash {#lang-rascal-tests-basic-Locations-extensionGetWithSlash}

```rascal
test bool extensionGetWithSlash()

```

## function extensionGetSimple {#lang-rascal-tests-basic-Locations-extensionGetSimple}

```rascal
test bool extensionGetSimple()

```

## function extensionGetRoot {#lang-rascal-tests-basic-Locations-extensionGetRoot}

```rascal
test bool extensionGetRoot()

```

## function extensionGetNoRoot {#lang-rascal-tests-basic-Locations-extensionGetNoRoot}

```rascal
test bool extensionGetNoRoot()

```

## function extensionNoPath {#lang-rascal-tests-basic-Locations-extensionNoPath}

```rascal
test bool extensionNoPath()

```

## function extensionSetRoot {#lang-rascal-tests-basic-Locations-extensionSetRoot}

```rascal
test bool extensionSetRoot()

```

## function extensionSetSimple {#lang-rascal-tests-basic-Locations-extensionSetSimple}

```rascal
test bool extensionSetSimple()

```

