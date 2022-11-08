---
title: "module lang::rascal::tests::functionality::KeywordParameter"
---

#### Usage

`import lang::rascal::tests::functionality::KeywordParameter;`


## function f {#lang-rascal-tests-functionality-KeywordParameter-f}

```rascal
str f(int i, str k = "empty", int j = 0)

```

## function keywordParam10 {#lang-rascal-tests-functionality-KeywordParameter-keywordParam10}

```rascal
test bool keywordParam10()

```

## function keywordParam11 {#lang-rascal-tests-functionality-KeywordParameter-keywordParam11}

```rascal
test bool keywordParam11()

```

## function keywordParam12 {#lang-rascal-tests-functionality-KeywordParameter-keywordParam12}

```rascal
test bool keywordParam12()

```

## function keywordParam13 {#lang-rascal-tests-functionality-KeywordParameter-keywordParam13}

```rascal
test bool keywordParam13()

```

## function keywordParam2 {#lang-rascal-tests-functionality-KeywordParameter-keywordParam2}

```rascal
test bool keywordParam2()

```

## function keywordParam3 {#lang-rascal-tests-functionality-KeywordParameter-keywordParam3}

```rascal
test bool keywordParam3()

```

## function f4 {#lang-rascal-tests-functionality-KeywordParameter-f4}

```rascal
int f4(int _, int delta = 0)

```

## function g4 {#lang-rascal-tests-functionality-KeywordParameter-g4}

```rascal
int g4()

```

## function h4 {#lang-rascal-tests-functionality-KeywordParameter-h4}

```rascal
int h4(int delta = 1)

```

## function keywordParam4 {#lang-rascal-tests-functionality-KeywordParameter-keywordParam4}

```rascal
test bool keywordParam4()

```

## data Point {#lang-rascal-tests-functionality-KeywordParameter-Point}

```rascal
data Point  
     = point(int i, str color = "red")
     ;
```

## function f5 {#lang-rascal-tests-functionality-KeywordParameter-f5}

```rascal
tuple[Point,Point] f5(int i, str color = "green", bool print = false)

```

## function keywordParam5 {#lang-rascal-tests-functionality-KeywordParameter-keywordParam5}

```rascal
test bool keywordParam5()

```

## data Figure {#lang-rascal-tests-functionality-KeywordParameter-Figure}

```rascal
data Figure (str fillColor = "white") 
     = emptyFigure()
     ;
```

## function keywordParam6 {#lang-rascal-tests-functionality-KeywordParameter-keywordParam6}

```rascal
test bool keywordParam6()

```

## function f7 {#lang-rascal-tests-functionality-KeywordParameter-f7}

```rascal
str f7(int i, int j, str k = "<i>, <j>")

```

## function keywordParam71 {#lang-rascal-tests-functionality-KeywordParameter-keywordParam71}

```rascal
test bool keywordParam71()

```

## function keywordParam72 {#lang-rascal-tests-functionality-KeywordParameter-keywordParam72}

```rascal
test bool keywordParam72()

```

## function keywordParam73 {#lang-rascal-tests-functionality-KeywordParameter-keywordParam73}

```rascal
test bool keywordParam73()

```

## function f8 {#lang-rascal-tests-functionality-KeywordParameter-f8}

```rascal
int f8(int i, int delta = 100 + i)

```

## function g8 {#lang-rascal-tests-functionality-KeywordParameter-g8}

```rascal
int g8()

```

## function h8 {#lang-rascal-tests-functionality-KeywordParameter-h8}

```rascal
int h8(int step, int delta = 1 + step)

```

## function keywordParam81 {#lang-rascal-tests-functionality-KeywordParameter-keywordParam81}

```rascal
test bool keywordParam81()

```

## function keywordParam82 {#lang-rascal-tests-functionality-KeywordParameter-keywordParam82}

```rascal
test bool keywordParam82()

```

## data F9 {#lang-rascal-tests-functionality-KeywordParameter-F9}

```rascal
data F9  
     = f9(int i, int delta = 100)
     ;
```

## function keywordParam9 {#lang-rascal-tests-functionality-KeywordParameter-keywordParam9}

```rascal
test bool keywordParam9()

```

## data F10 {#lang-rascal-tests-functionality-KeywordParameter-F10}

```rascal
data F10  
     = f10(int i, int delta = 100)
     ;
```

## function keywordParam91 {#lang-rascal-tests-functionality-KeywordParameter-keywordParam91}

```rascal
test bool keywordParam91()

```

## function keywordParam92 {#lang-rascal-tests-functionality-KeywordParameter-keywordParam92}

```rascal
test bool keywordParam92()

```

## function keywordParam93 {#lang-rascal-tests-functionality-KeywordParameter-keywordParam93}

```rascal
test bool keywordParam93()

```

## function keywordParam101 {#lang-rascal-tests-functionality-KeywordParameter-keywordParam101}

```rascal
test bool keywordParam101()

```

## function keywordParam102 {#lang-rascal-tests-functionality-KeywordParameter-keywordParam102}

```rascal
test bool keywordParam102()

```

## function keywordParam103 {#lang-rascal-tests-functionality-KeywordParameter-keywordParam103}

```rascal
test bool keywordParam103()

```

## function keywordParam104 {#lang-rascal-tests-functionality-KeywordParameter-keywordParam104}

```rascal
test bool keywordParam104()

```

## function keywordParam105 {#lang-rascal-tests-functionality-KeywordParameter-keywordParam105}

```rascal
test bool keywordParam105()

```

## function keywordParam106 {#lang-rascal-tests-functionality-KeywordParameter-keywordParam106}

```rascal
test bool keywordParam106()

```

## function keywordParam107 {#lang-rascal-tests-functionality-KeywordParameter-keywordParam107}

```rascal
test bool keywordParam107()

```

## function keywordParam108 {#lang-rascal-tests-functionality-KeywordParameter-keywordParam108}

```rascal
test bool keywordParam108()

```

## data X {#lang-rascal-tests-functionality-KeywordParameter-X}

```rascal
data X (int y = 1) 
     = xx(int z = 0)
     ;
```

## data X {#lang-rascal-tests-functionality-KeywordParameter-X}

```rascal
data X (int yy = 2) 
     = xx(int u)
     ;
```

## data X {#lang-rascal-tests-functionality-KeywordParameter-X}

```rascal
data X (int yyy = 3)
```

## function sharedKWParams1 {#lang-rascal-tests-functionality-KeywordParameter-sharedKWParams1}

```rascal
test bool sharedKWParams1()

```

## function sharedKWParams2 {#lang-rascal-tests-functionality-KeywordParameter-sharedKWParams2}

```rascal
test bool sharedKWParams2()

```

## function sharedKWParams3 {#lang-rascal-tests-functionality-KeywordParameter-sharedKWParams3}

```rascal
test bool sharedKWParams3()

```

## data F11 {#lang-rascal-tests-functionality-KeywordParameter-F11}

```rascal
data F11 (int y = 1) 
     = d11(int n, real r = 1.5)
     | d11(str s, bool b = true)
     | d11(int n, str s)
     ;
```

## function has1 {#lang-rascal-tests-functionality-KeywordParameter-has1}

```rascal
test bool has1()

```

## function has2 {#lang-rascal-tests-functionality-KeywordParameter-has2}

```rascal
test bool has2()

```

## function has3 {#lang-rascal-tests-functionality-KeywordParameter-has3}

```rascal
test bool has3()

```

## function has4 {#lang-rascal-tests-functionality-KeywordParameter-has4}

```rascal
test bool has4()

```

## function has5 {#lang-rascal-tests-functionality-KeywordParameter-has5}

```rascal
test bool has5()

```

## function has6 {#lang-rascal-tests-functionality-KeywordParameter-has6}

```rascal
test bool has6()

```

## function has7 {#lang-rascal-tests-functionality-KeywordParameter-has7}

```rascal
test bool has7()

```

## function has8 {#lang-rascal-tests-functionality-KeywordParameter-has8}

```rascal
test bool has8()

```

## function has9 {#lang-rascal-tests-functionality-KeywordParameter-has9}

```rascal
test bool has9()

```

## function has10 {#lang-rascal-tests-functionality-KeywordParameter-has10}

```rascal
test bool has10()

```

## function has11 {#lang-rascal-tests-functionality-KeywordParameter-has11}

```rascal
test bool has11()

```

## function has12 {#lang-rascal-tests-functionality-KeywordParameter-has12}

```rascal
test bool has12()

```

## function has13 {#lang-rascal-tests-functionality-KeywordParameter-has13}

```rascal
test bool has13()

```

## function has14 {#lang-rascal-tests-functionality-KeywordParameter-has14}

```rascal
test bool has14()

```

## function has15 {#lang-rascal-tests-functionality-KeywordParameter-has15}

```rascal
test bool has15()

```

## function f13 {#lang-rascal-tests-functionality-KeywordParameter-f13}

```rascal
int f13(int n, str s = "")

int f13(int n, str s = "")

```

## function when1 {#lang-rascal-tests-functionality-KeywordParameter-when1}

```rascal
test bool when1()

```

## function when2 {#lang-rascal-tests-functionality-KeywordParameter-when2}

```rascal
test bool when2()

```

## data E {#lang-rascal-tests-functionality-KeywordParameter-E}

```rascal
data E[&T]  
     = e(&T t, int j = 0)
     ;
```

## function parametrizedDataTypeWithKwParam {#lang-rascal-tests-functionality-KeywordParameter-parametrizedDataTypeWithKwParam}

```rascal
test bool parametrizedDataTypeWithKwParam()

```

