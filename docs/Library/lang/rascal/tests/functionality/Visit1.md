---
title: "module lang::rascal::tests::functionality::Visit1"
---

#### Usage

`import lang::rascal::tests::functionality::Visit1;`


## function visit1a {#lang-rascal-tests-functionality-Visit1-visit1a}

```rascal
test bool visit1a()

```

## function visit1b {#lang-rascal-tests-functionality-Visit1-visit1b}

```rascal
test bool visit1b()

```

## function visit2a {#lang-rascal-tests-functionality-Visit1-visit2a}

```rascal
test bool visit2a()

```

## function visit2b {#lang-rascal-tests-functionality-Visit1-visit2b}

```rascal
test bool visit2b()

```

## function visit3a {#lang-rascal-tests-functionality-Visit1-visit3a}

```rascal
test bool visit3a()

```

## function visit3b {#lang-rascal-tests-functionality-Visit1-visit3b}

```rascal
test bool visit3b()

```

## function visit4a {#lang-rascal-tests-functionality-Visit1-visit4a}

```rascal
test bool visit4a()

```

## function visit4b {#lang-rascal-tests-functionality-Visit1-visit4b}

```rascal
test bool visit4b()

```

## function visit5 {#lang-rascal-tests-functionality-Visit1-visit5}

```rascal
test bool visit5()

```

## function visit6 {#lang-rascal-tests-functionality-Visit1-visit6}

```rascal
test bool visit6()

```

## function visit3 {#lang-rascal-tests-functionality-Visit1-visit3}

```rascal
test bool visit3()

```

## function visit7 {#lang-rascal-tests-functionality-Visit1-visit7}

```rascal
test bool visit7()

```

## function visit8 {#lang-rascal-tests-functionality-Visit1-visit8}

```rascal
test bool visit8()

```

## function visit9 {#lang-rascal-tests-functionality-Visit1-visit9}

```rascal
test bool visit9()

```

## function visit10 {#lang-rascal-tests-functionality-Visit1-visit10}

```rascal
test bool visit10()

```

## function visit11 {#lang-rascal-tests-functionality-Visit1-visit11}

```rascal
test bool visit11()

```

## data ABCD {#lang-rascal-tests-functionality-Visit1-ABCD}

```rascal
data ABCD  
     = a(int x, int y)
     | b(int x, int y)
     | c(int x, int y)
     | d(int x, int y)
     ;
```

## function visit12 {#lang-rascal-tests-functionality-Visit1-visit12}

```rascal
test bool visit12()

```

## function visit13 {#lang-rascal-tests-functionality-Visit1-visit13}

```rascal
test bool visit13()

```

## function visit14 {#lang-rascal-tests-functionality-Visit1-visit14}

```rascal
test bool visit14()

```

## function visit15 {#lang-rascal-tests-functionality-Visit1-visit15}

```rascal
test bool visit15()

```

## function visit16a {#lang-rascal-tests-functionality-Visit1-visit16a}

```rascal
test bool visit16a()

```

## function visit16b {#lang-rascal-tests-functionality-Visit1-visit16b}

```rascal
test bool visit16b()

```

## function visit17a {#lang-rascal-tests-functionality-Visit1-visit17a}

```rascal
test bool visit17a()

```

## function visit17b {#lang-rascal-tests-functionality-Visit1-visit17b}

```rascal
test bool visit17b()

```

## function visit18 {#lang-rascal-tests-functionality-Visit1-visit18}

```rascal
test bool visit18()

```

## data LIST {#lang-rascal-tests-functionality-Visit1-LIST}

```rascal
data LIST  
     = lst(list[int] elems)
     ;
```

## function visit19 {#lang-rascal-tests-functionality-Visit1-visit19}

```rascal
test bool visit19()

```

## function visit20 {#lang-rascal-tests-functionality-Visit1-visit20}

```rascal
test bool visit20()

```

## data X {#lang-rascal-tests-functionality-Visit1-X}

```rascal
data X  
     = weird1(list[void] x)
     ;
```

## function visit21 {#lang-rascal-tests-functionality-Visit1-visit21}

```rascal
test bool visit21()

```

## data Y {#lang-rascal-tests-functionality-Visit1-Y}

```rascal
data Y  
     = weird2(list[int] y)
     ;
```

## function visit22 {#lang-rascal-tests-functionality-Visit1-visit22}

```rascal
test bool visit22()

```

## data Z {#lang-rascal-tests-functionality-Visit1-Z}

```rascal
data Z  
     = z(int n)
     ;
```

## function visit23 {#lang-rascal-tests-functionality-Visit1-visit23}

```rascal
test bool visit23()

```

## function visit24 {#lang-rascal-tests-functionality-Visit1-visit24}

```rascal
test bool visit24()

```

## function visit27 {#lang-rascal-tests-functionality-Visit1-visit27}

```rascal
test bool visit27()

```

## function visit28 {#lang-rascal-tests-functionality-Visit1-visit28}

```rascal
test bool visit28()

```

## data NODE1 {#lang-rascal-tests-functionality-Visit1-NODE1}

```rascal
data NODE1  
     = f(value V)
     | f(value V1, value V2)
     | f(value V1, value V2, value V3)
     | g(value V1, value V2)
     | h(value V1, value V2)
     | h(value V1, value V2, value V3)
     ;
```

## data T {#lang-rascal-tests-functionality-Visit1-T}

```rascal
data T  
     = knot(int i, T l, T r)
     | tip(int i)
     ;
```

## data NODE10 {#lang-rascal-tests-functionality-Visit1-NODE10}

```rascal
data NODE10  
     = f1(int I)
     | g1(list[NODE10] L)
     | h1(NODE10 N1, NODE10 N2)
     ;
```

## function cnt {#lang-rascal-tests-functionality-Visit1-cnt}

```rascal
int cnt(NODE1 t)

```

## function walk {#lang-rascal-tests-functionality-Visit1-walk}

```rascal
NODE1 walk(NODE1 t)

```

## function drepl {#lang-rascal-tests-functionality-Visit1-drepl}

```rascal
NODE1 drepl(NODE1 T)

```

## function frepa {#lang-rascal-tests-functionality-Visit1-frepa}

```rascal
NODE1 frepa(NODE1 T)

```

## function frepb {#lang-rascal-tests-functionality-Visit1-frepb}

```rascal
NODE1 frepb(NODE1 T)

```

## function frepG2H3a {#lang-rascal-tests-functionality-Visit1-frepG2H3a}

```rascal
NODE1 frepG2H3a(NODE1 T)

```

## function frepG2H3b {#lang-rascal-tests-functionality-Visit1-frepG2H3b}

```rascal
NODE1 frepG2H3b(NODE1 T)

```

## function inc {#lang-rascal-tests-functionality-Visit1-inc}

```rascal
NODE1 inc(NODE1 T)

```

## function inc_and_count {#lang-rascal-tests-functionality-Visit1-inc_and_count}

```rascal
tuple[int, NODE1] inc_and_count(NODE1 T, int D)

```

## function srepl {#lang-rascal-tests-functionality-Visit1-srepl}

```rascal
NODE1 srepl(NODE1 T)

```

## function order {#lang-rascal-tests-functionality-Visit1-order}

```rascal
list[int] order(NODE10 T)

```

## function Cnt1 {#lang-rascal-tests-functionality-Visit1-Cnt1}

```rascal
test bool Cnt1()

```

## function Cnt2 {#lang-rascal-tests-functionality-Visit1-Cnt2}

```rascal
test bool Cnt2()

```

## function Cnt3 {#lang-rascal-tests-functionality-Visit1-Cnt3}

```rascal
test bool Cnt3()

```

## function Cnt4 {#lang-rascal-tests-functionality-Visit1-Cnt4}

```rascal
test bool Cnt4()

```

## function Cnt5 {#lang-rascal-tests-functionality-Visit1-Cnt5}

```rascal
test bool Cnt5()

```

## function Cnt6 {#lang-rascal-tests-functionality-Visit1-Cnt6}

```rascal
test bool Cnt6()

```

## function Cnt7 {#lang-rascal-tests-functionality-Visit1-Cnt7}

```rascal
test bool Cnt7()

```

## function Cnt8 {#lang-rascal-tests-functionality-Visit1-Cnt8}

```rascal
test bool Cnt8()

```

## function When1 {#lang-rascal-tests-functionality-Visit1-When1}

```rascal
test bool When1()

```

## function When2 {#lang-rascal-tests-functionality-Visit1-When2}

```rascal
test bool When2()

```

## function When3 {#lang-rascal-tests-functionality-Visit1-When3}

```rascal
test bool When3()

```

## function When4 {#lang-rascal-tests-functionality-Visit1-When4}

```rascal
test bool When4()

```

## function NewTreeVisibleBottomUp {#lang-rascal-tests-functionality-Visit1-NewTreeVisibleBottomUp}

```rascal
test bool NewTreeVisibleBottomUp()

```

## function Drepl1 {#lang-rascal-tests-functionality-Visit1-Drepl1}

```rascal
test bool Drepl1()

```

## function Drepl2 {#lang-rascal-tests-functionality-Visit1-Drepl2}

```rascal
test bool Drepl2()

```

## function Drepl3 {#lang-rascal-tests-functionality-Visit1-Drepl3}

```rascal
test bool Drepl3()

```

## function FrepA1 {#lang-rascal-tests-functionality-Visit1-FrepA1}

```rascal
test bool FrepA1()

```

## function FrepA2 {#lang-rascal-tests-functionality-Visit1-FrepA2}

```rascal
test bool FrepA2()

```

## function FrepA3 {#lang-rascal-tests-functionality-Visit1-FrepA3}

```rascal
test bool FrepA3()

```

## function FrepA4 {#lang-rascal-tests-functionality-Visit1-FrepA4}

```rascal
test bool FrepA4()

```

## function FrepA5 {#lang-rascal-tests-functionality-Visit1-FrepA5}

```rascal
test bool FrepA5()

```

## function FrepA6 {#lang-rascal-tests-functionality-Visit1-FrepA6}

```rascal
test bool FrepA6()

```

## function FrepA7 {#lang-rascal-tests-functionality-Visit1-FrepA7}

```rascal
test bool FrepA7()

```

## function FrepA8 {#lang-rascal-tests-functionality-Visit1-FrepA8}

```rascal
test bool FrepA8()

```

## function FrepB1 {#lang-rascal-tests-functionality-Visit1-FrepB1}

```rascal
test bool FrepB1()

```

## function FrepB2 {#lang-rascal-tests-functionality-Visit1-FrepB2}

```rascal
test bool FrepB2()

```

## function FrepB3 {#lang-rascal-tests-functionality-Visit1-FrepB3}

```rascal
test bool FrepB3()

```

## function FrepB4 {#lang-rascal-tests-functionality-Visit1-FrepB4}

```rascal
test bool FrepB4()

```

## function FrepB5 {#lang-rascal-tests-functionality-Visit1-FrepB5}

```rascal
test bool FrepB5()

```

## function FrepB6 {#lang-rascal-tests-functionality-Visit1-FrepB6}

```rascal
test bool FrepB6()

```

## function FrepB7 {#lang-rascal-tests-functionality-Visit1-FrepB7}

```rascal
test bool FrepB7()

```

## function FrepB8 {#lang-rascal-tests-functionality-Visit1-FrepB8}

```rascal
test bool FrepB8()

```

## function FrepG2H3a1 {#lang-rascal-tests-functionality-Visit1-FrepG2H3a1}

```rascal
test bool FrepG2H3a1()

```

## function FrepG2H3a2 {#lang-rascal-tests-functionality-Visit1-FrepG2H3a2}

```rascal
test bool FrepG2H3a2()

```

## function FrepG2H3a3 {#lang-rascal-tests-functionality-Visit1-FrepG2H3a3}

```rascal
test bool FrepG2H3a3()

```

## function FrepG2H3a4 {#lang-rascal-tests-functionality-Visit1-FrepG2H3a4}

```rascal
test bool FrepG2H3a4()

```

## function FrepG2H3a5 {#lang-rascal-tests-functionality-Visit1-FrepG2H3a5}

```rascal
test bool FrepG2H3a5()

```

## function FrepG2H3a6 {#lang-rascal-tests-functionality-Visit1-FrepG2H3a6}

```rascal
test bool FrepG2H3a6()

```

## function FrepG2H3a7 {#lang-rascal-tests-functionality-Visit1-FrepG2H3a7}

```rascal
test bool FrepG2H3a7()

```

## function FrepG2H3a8 {#lang-rascal-tests-functionality-Visit1-FrepG2H3a8}

```rascal
test bool FrepG2H3a8()

```

## function FrepG2H3b1 {#lang-rascal-tests-functionality-Visit1-FrepG2H3b1}

```rascal
test bool FrepG2H3b1()

```

## function FrepG2H3b2 {#lang-rascal-tests-functionality-Visit1-FrepG2H3b2}

```rascal
test bool FrepG2H3b2()

```

## function FrepG2H3b3 {#lang-rascal-tests-functionality-Visit1-FrepG2H3b3}

```rascal
test bool FrepG2H3b3()

```

## function FrepG2H3b4 {#lang-rascal-tests-functionality-Visit1-FrepG2H3b4}

```rascal
test bool FrepG2H3b4()

```

## function FrepG2H3b5 {#lang-rascal-tests-functionality-Visit1-FrepG2H3b5}

```rascal
test bool FrepG2H3b5()

```

## function FrepG2H3b6 {#lang-rascal-tests-functionality-Visit1-FrepG2H3b6}

```rascal
test bool FrepG2H3b6()

```

## function FrepG2H3b7 {#lang-rascal-tests-functionality-Visit1-FrepG2H3b7}

```rascal
test bool FrepG2H3b7()

```

## function FrepG2H3b8 {#lang-rascal-tests-functionality-Visit1-FrepG2H3b8}

```rascal
test bool FrepG2H3b8()

```

## function Inc1 {#lang-rascal-tests-functionality-Visit1-Inc1}

```rascal
test bool Inc1()

```

## function Inc2 {#lang-rascal-tests-functionality-Visit1-Inc2}

```rascal
test bool Inc2()

```

## function Inc3 {#lang-rascal-tests-functionality-Visit1-Inc3}

```rascal
test bool Inc3()

```

## function Inc4 {#lang-rascal-tests-functionality-Visit1-Inc4}

```rascal
test bool Inc4()

```

## function Inc5 {#lang-rascal-tests-functionality-Visit1-Inc5}

```rascal
test bool Inc5()

```

## function Inc6 {#lang-rascal-tests-functionality-Visit1-Inc6}

```rascal
test bool Inc6()

```

## function Inc7 {#lang-rascal-tests-functionality-Visit1-Inc7}

```rascal
test bool Inc7()

```

## function Inc8 {#lang-rascal-tests-functionality-Visit1-Inc8}

```rascal
test bool Inc8()

```

## function IncAndCount1 {#lang-rascal-tests-functionality-Visit1-IncAndCount1}

```rascal
test bool IncAndCount1()

```

## function IncAndCount2 {#lang-rascal-tests-functionality-Visit1-IncAndCount2}

```rascal
test bool IncAndCount2()

```

## function IncAndCount3 {#lang-rascal-tests-functionality-Visit1-IncAndCount3}

```rascal
test bool IncAndCount3()

```

## function IncAndCount4 {#lang-rascal-tests-functionality-Visit1-IncAndCount4}

```rascal
test bool IncAndCount4()

```

## function IncAndCount5 {#lang-rascal-tests-functionality-Visit1-IncAndCount5}

```rascal
test bool IncAndCount5()

```

## function IncAndCount6 {#lang-rascal-tests-functionality-Visit1-IncAndCount6}

```rascal
test bool IncAndCount6()

```

## function IncAndCount7 {#lang-rascal-tests-functionality-Visit1-IncAndCount7}

```rascal
test bool IncAndCount7()

```

## function IncAndCount8 {#lang-rascal-tests-functionality-Visit1-IncAndCount8}

```rascal
test bool IncAndCount8()

```

## function srepl1 {#lang-rascal-tests-functionality-Visit1-srepl1}

```rascal
test bool srepl1()

```

## function srepl2 {#lang-rascal-tests-functionality-Visit1-srepl2}

```rascal
test bool srepl2()

```

## function srepl3 {#lang-rascal-tests-functionality-Visit1-srepl3}

```rascal
test bool srepl3()

```

## function srepl4 {#lang-rascal-tests-functionality-Visit1-srepl4}

```rascal
test bool srepl4()

```

## function order1 {#lang-rascal-tests-functionality-Visit1-order1}

```rascal
test bool order1()

```

## function order2 {#lang-rascal-tests-functionality-Visit1-order2}

```rascal
test bool order2()

```

## function order3 {#lang-rascal-tests-functionality-Visit1-order3}

```rascal
test bool order3()

```

## function order4 {#lang-rascal-tests-functionality-Visit1-order4}

```rascal
test bool order4()

```

## data NODE {#lang-rascal-tests-functionality-Visit1-NODE}

```rascal
data NODE  
     = nd(NODE left, NODE right)
     | leaf(int n)
     ;
```

## function visitWithAnno1 {#lang-rascal-tests-functionality-Visit1-visitWithAnno1}

```rascal
test bool visitWithAnno1()

```

## function visitWithAnno2 {#lang-rascal-tests-functionality-Visit1-visitWithAnno2}

```rascal
test bool visitWithAnno2()

```

## function visitWithAnno3 {#lang-rascal-tests-functionality-Visit1-visitWithAnno3}

```rascal
test bool visitWithAnno3()

```

## function visitWithAnno4 {#lang-rascal-tests-functionality-Visit1-visitWithAnno4}

```rascal
test bool visitWithAnno4()

```

## function visitWithAnno5 {#lang-rascal-tests-functionality-Visit1-visitWithAnno5}

```rascal
test bool visitWithAnno5()

```

## function delAnnotationsRec1 {#lang-rascal-tests-functionality-Visit1-delAnnotationsRec1}

```rascal
&T delAnnotationsRec1(&T v)

```

## function delAnnotationsRec2 {#lang-rascal-tests-functionality-Visit1-delAnnotationsRec2}

```rascal
&T delAnnotationsRec2(&T v)

```

## function visitWithAnno6 {#lang-rascal-tests-functionality-Visit1-visitWithAnno6}

```rascal
test bool visitWithAnno6()

```

## function visitWithAnno7 {#lang-rascal-tests-functionality-Visit1-visitWithAnno7}

```rascal
test bool visitWithAnno7()

```

## function StringVisit1a1 {#lang-rascal-tests-functionality-Visit1-StringVisit1a1}

```rascal
test bool StringVisit1a1()

```

## function StringVisit1a2 {#lang-rascal-tests-functionality-Visit1-StringVisit1a2}

```rascal
test bool StringVisit1a2()

```

## function StringVisit1a3 {#lang-rascal-tests-functionality-Visit1-StringVisit1a3}

```rascal
test bool StringVisit1a3()

```

## function StringVisit1a4 {#lang-rascal-tests-functionality-Visit1-StringVisit1a4}

```rascal
test bool StringVisit1a4()

```

## function StringVisit1a5 {#lang-rascal-tests-functionality-Visit1-StringVisit1a5}

```rascal
test bool StringVisit1a5()

```

## function StringVisit1b1 {#lang-rascal-tests-functionality-Visit1-StringVisit1b1}

```rascal
test bool StringVisit1b1()

```

## function StringVisit1b2 {#lang-rascal-tests-functionality-Visit1-StringVisit1b2}

```rascal
test bool StringVisit1b2()

```

## function StringVisit1b3 {#lang-rascal-tests-functionality-Visit1-StringVisit1b3}

```rascal
test bool StringVisit1b3()

```

## function StringVisit1b4 {#lang-rascal-tests-functionality-Visit1-StringVisit1b4}

```rascal
test bool StringVisit1b4()

```

## function StringVisit1b5 {#lang-rascal-tests-functionality-Visit1-StringVisit1b5}

```rascal
test bool StringVisit1b5()

```

## function StringVisit2a1 {#lang-rascal-tests-functionality-Visit1-StringVisit2a1}

```rascal
test bool StringVisit2a1()

```

## function StringVisit2a2 {#lang-rascal-tests-functionality-Visit1-StringVisit2a2}

```rascal
test bool StringVisit2a2()

```

## function StringVisit2a3 {#lang-rascal-tests-functionality-Visit1-StringVisit2a3}

```rascal
test bool StringVisit2a3()

```

## function StringVisit2a4 {#lang-rascal-tests-functionality-Visit1-StringVisit2a4}

```rascal
test bool StringVisit2a4()

```

## function StringVisit2a5 {#lang-rascal-tests-functionality-Visit1-StringVisit2a5}

```rascal
test bool StringVisit2a5()

```

## function StringVisit3a1 {#lang-rascal-tests-functionality-Visit1-StringVisit3a1}

```rascal
test bool StringVisit3a1()

```

## function StringVisit3a2 {#lang-rascal-tests-functionality-Visit1-StringVisit3a2}

```rascal
test bool StringVisit3a2()

```

## function StringVisit3a3 {#lang-rascal-tests-functionality-Visit1-StringVisit3a3}

```rascal
test bool StringVisit3a3()

```

## function StringVisit3a4 {#lang-rascal-tests-functionality-Visit1-StringVisit3a4}

```rascal
test bool StringVisit3a4()

```

## function StringVisit3a5 {#lang-rascal-tests-functionality-Visit1-StringVisit3a5}

```rascal
test bool StringVisit3a5()

```

## function StringVisit4a1 {#lang-rascal-tests-functionality-Visit1-StringVisit4a1}

```rascal
test bool StringVisit4a1()

```

## function StringVisit4a2 {#lang-rascal-tests-functionality-Visit1-StringVisit4a2}

```rascal
test bool StringVisit4a2()

```

## function StringVisit4a3 {#lang-rascal-tests-functionality-Visit1-StringVisit4a3}

```rascal
test bool StringVisit4a3()

```

## function StringVisit4a4 {#lang-rascal-tests-functionality-Visit1-StringVisit4a4}

```rascal
test bool StringVisit4a4()

```

## function StringVisit4a5 {#lang-rascal-tests-functionality-Visit1-StringVisit4a5}

```rascal
test bool StringVisit4a5()

```

## function cntAB {#lang-rascal-tests-functionality-Visit1-cntAB}

```rascal
tuple[int,int] cntAB(str s)

```

## function StringVisit51 {#lang-rascal-tests-functionality-Visit1-StringVisit51}

```rascal
test bool StringVisit51()

```

## function StringVisit52 {#lang-rascal-tests-functionality-Visit1-StringVisit52}

```rascal
test bool StringVisit52()

```

## function StringVisit53 {#lang-rascal-tests-functionality-Visit1-StringVisit53}

```rascal
test bool StringVisit53()

```

## function StringVisit54 {#lang-rascal-tests-functionality-Visit1-StringVisit54}

```rascal
test bool StringVisit54()

```

## function StringVisit55 {#lang-rascal-tests-functionality-Visit1-StringVisit55}

```rascal
test bool StringVisit55()

```

## function StringVisit56 {#lang-rascal-tests-functionality-Visit1-StringVisit56}

```rascal
test bool StringVisit56()

```

## function StringVisit57 {#lang-rascal-tests-functionality-Visit1-StringVisit57}

```rascal
test bool StringVisit57()

```

## function TDCntAB {#lang-rascal-tests-functionality-Visit1-TDCntAB}

```rascal
tuple[int,int] TDCntAB(str s)

```

## function StringVisit61 {#lang-rascal-tests-functionality-Visit1-StringVisit61}

```rascal
test bool StringVisit61()

```

## function StringVisit62 {#lang-rascal-tests-functionality-Visit1-StringVisit62}

```rascal
test bool StringVisit62()

```

## function StringVisit63 {#lang-rascal-tests-functionality-Visit1-StringVisit63}

```rascal
test bool StringVisit63()

```

## function StringVisit64 {#lang-rascal-tests-functionality-Visit1-StringVisit64}

```rascal
test bool StringVisit64()

```

## function StringVisit65 {#lang-rascal-tests-functionality-Visit1-StringVisit65}

```rascal
test bool StringVisit65()

```

## function StringVisit66 {#lang-rascal-tests-functionality-Visit1-StringVisit66}

```rascal
test bool StringVisit66()

```

## function StringVisit67 {#lang-rascal-tests-functionality-Visit1-StringVisit67}

```rascal
test bool StringVisit67()

```

## function deescape {#lang-rascal-tests-functionality-Visit1-deescape}

```rascal
str deescape(str s)

```

## function StringVisit71 {#lang-rascal-tests-functionality-Visit1-StringVisit71}

```rascal
test bool StringVisit71()

```

## function StringVisit72 {#lang-rascal-tests-functionality-Visit1-StringVisit72}

```rascal
test bool StringVisit72()

```

## function StringVisit73 {#lang-rascal-tests-functionality-Visit1-StringVisit73}

```rascal
test bool StringVisit73()

```

## function StringVisit74 {#lang-rascal-tests-functionality-Visit1-StringVisit74}

```rascal
test bool StringVisit74()

```

## function StringVisit75 {#lang-rascal-tests-functionality-Visit1-StringVisit75}

```rascal
test bool StringVisit75()

```

## function StringVisit76 {#lang-rascal-tests-functionality-Visit1-StringVisit76}

```rascal
test bool StringVisit76()

```

## data RECT {#lang-rascal-tests-functionality-Visit1-RECT}

```rascal
data RECT  
     = rect(int w, int h, str color = "white")
     ;
```

## function KeywordVisit1 {#lang-rascal-tests-functionality-Visit1-KeywordVisit1}

```rascal
test bool KeywordVisit1()

```

## function KeywordVisit2 {#lang-rascal-tests-functionality-Visit1-KeywordVisit2}

```rascal
test bool KeywordVisit2()

```

## function nestedEmptyStringVisit1 {#lang-rascal-tests-functionality-Visit1-nestedEmptyStringVisit1}

```rascal
test bool nestedEmptyStringVisit1()

```

## function nestedEmptyStringVisit2 {#lang-rascal-tests-functionality-Visit1-nestedEmptyStringVisit2}

```rascal
test bool nestedEmptyStringVisit2()

```

