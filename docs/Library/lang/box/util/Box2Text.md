---
title: "module lang::box::util::Box2Text"
---

#### Usage

`import lang::box::util::Box2Text;`


This is an implementation of "From Box to Tex:An algebraic approach to the construction of documentation tools" by Mark van den Brand and Eelco Visser (June 30, 1994)

The main function `format` maps a box tree (which describes 2-dimensional layout constraints for a linear text) to a string
which satisfies these constraints.


## alias options {#lang-box-util-Box2Text-options}

```rascal
map [str, int]

```

## function fprint {#lang-box-util-Box2Text-fprint}

```rascal
void fprint(Box b)

```

Print boxes

## function fprintln {#lang-box-util-Box2Text-fprintln}

```rascal
void fprintln(Box b)

```

Print boxes followed by newline

## function format {#lang-box-util-Box2Text-format}

```rascal
str format(Box b)

```

Converts boxes into a string

## function box2latex {#lang-box-util-Box2Text-box2latex}

```rascal
text box2latex(Box b)

```

Converts boxes into latex

## function box2html {#lang-box-util-Box2Text-box2html}

```rascal
text box2html(Box b)

```

Converts boxes into html

## function box2text {#lang-box-util-Box2Text-box2text}

```rascal
text box2text(Box b)

```

Converts boxes into list of lines (ASCII)

## alias foptions {#lang-box-util-Box2Text-foptions}

```rascal
map[str, list[str]]

```

## function vv {#lang-box-util-Box2Text-vv}

```rascal
text vv(text a, text b)

```

## function blank {#lang-box-util-Box2Text-blank}

```rascal
str blank(str a)

```

## function wd {#lang-box-util-Box2Text-wd}

```rascal
text wd(text a)

```

## function width {#lang-box-util-Box2Text-width}

```rascal
int width(str s)

```

## function twidth {#lang-box-util-Box2Text-twidth}

```rascal
int twidth(text t)

```

## function hwidth {#lang-box-util-Box2Text-hwidth}

```rascal
int hwidth(text t)

```

## function bar {#lang-box-util-Box2Text-bar}

```rascal
text bar(str a, text b)

```

## function hskip {#lang-box-util-Box2Text-hskip}

```rascal
text hskip(int n)

```

## function vskip {#lang-box-util-Box2Text-vskip}

```rascal
text vskip(int n)

```

## function isBlank {#lang-box-util-Box2Text-isBlank}

```rascal
bool isBlank(str a)

```

## function prepend {#lang-box-util-Box2Text-prepend}

```rascal
text prepend(str a, text b)

```

## function hh {#lang-box-util-Box2Text-hh}

```rascal
text hh(text a, text b)

```

## function _hh {#lang-box-util-Box2Text-_hh}

```rascal
text _hh(text a, text b)

```

## function _vv {#lang-box-util-Box2Text-_vv}

```rascal
text _vv(text a, text b)

```

## function hh_ {#lang-box-util-Box2Text-hh_}

```rascal
text hh_(text a, text b)

```

## function vv_ {#lang-box-util-Box2Text-vv_}

```rascal
text vv_(text a, text b)

```

## function LL {#lang-box-util-Box2Text-LL}

```rascal
text LL(str s )

```

## function HH {#lang-box-util-Box2Text-HH}

```rascal
text HH(list[Box] b, Box _, options opts, int m)

```

## function VV {#lang-box-util-Box2Text-VV}

```rascal
text VV(list[Box] b, Box c, options opts, int m)

```

## function II {#lang-box-util-Box2Text-II}

```rascal
text II(list[Box] b, Box c, options opts, int m)

```

## function WDWD {#lang-box-util-Box2Text-WDWD}

```rascal
text WDWD(list[Box] b, Box c ,options opts, int m)

```

## function ifHOV {#lang-box-util-Box2Text-ifHOV}

```rascal
text ifHOV(text t, Box b,  Box c, options opts, int m)

```

## function HOVHOV {#lang-box-util-Box2Text-HOVHOV}

```rascal
text HOVHOV(list[Box] b, Box c, options opts, int m)

```

## function HVHV {#lang-box-util-Box2Text-HVHV}

```rascal
text HVHV(text T, int s, text a, Box A, list[Box] B, options opts, int m)

text HVHV(text T, int s, list[Box] b, options opts,  int m, Box c)

text HVHV(list[Box] b, Box _, options opts, int m)

```

## function font {#lang-box-util-Box2Text-font}

```rascal
text font(text t, str tg)

```

## function QQ {#lang-box-util-Box2Text-QQ}

```rascal
text QQ(Box b, Box c, options opts, foptions f, int m)

```

## function O {#lang-box-util-Box2Text-O}

```rascal
text O(Box b, Box c, options opts, int m)

```

## function boxSize {#lang-box-util-Box2Text-boxSize}

```rascal
Box boxSize(Box b, Box c, options opts, int m)

```

## function RR {#lang-box-util-Box2Text-RR}

```rascal
list[list[Box]] RR(list[Box] bl, Box c, options opts, int m)

```

## function getMaxWidth {#lang-box-util-Box2Text-getMaxWidth}

```rascal
int getMaxWidth(list[Box] b)

```

## function Awidth {#lang-box-util-Box2Text-Awidth}

```rascal
list[int] Awidth(list[list[Box]] a)

```

## function AA {#lang-box-util-Box2Text-AA}

```rascal
text AA(list[Box] bl, Box c ,options opts, foptions f, int m)

```

## function changeHV2H {#lang-box-util-Box2Text-changeHV2H}

```rascal
bool changeHV2H(list[Box] hv)

```

## function removeHV {#lang-box-util-Box2Text-removeHV}

```rascal
Box removeHV(Box b)

```

## function removeHOV {#lang-box-util-Box2Text-removeHOV}

```rascal
Box removeHOV(Box b)

```

## function box2data {#lang-box-util-Box2Text-box2data}

```rascal
text box2data(Box b)

```

## function convert2latex {#lang-box-util-Box2Text-convert2latex}

```rascal
str convert2latex(str s)

```

## function text2latex {#lang-box-util-Box2Text-text2latex}

```rascal
str text2latex(str t)

```

## function selectBeginTag {#lang-box-util-Box2Text-selectBeginTag}

```rascal
str selectBeginTag(str tg, str key)

```

## function selectEndTag {#lang-box-util-Box2Text-selectEndTag}

```rascal
str selectEndTag(str tg)

```

## function convert2html {#lang-box-util-Box2Text-convert2html}

```rascal
str convert2html(str s)

```

## function text2html {#lang-box-util-Box2Text-text2html}

```rascal
str text2html(str t)

```

## function text2txt {#lang-box-util-Box2Text-text2txt}

```rascal
str text2txt(str t)

```

## function text2latex {#lang-box-util-Box2Text-text2latex}

```rascal
text text2latex(text t)

```

## function text2html {#lang-box-util-Box2Text-text2html}

```rascal
text text2html(text t)

```

## function text2txt {#lang-box-util-Box2Text-text2txt}

```rascal
text text2txt(text t)

```

## function tst {#lang-box-util-Box2Text-tst}

```rascal
void tst()

```

## function baseName {#lang-box-util-Box2Text-baseName}

```rascal
str baseName(str input)

```

## function toExport {#lang-box-util-Box2Text-toExport}

```rascal
void toExport(loc src,loc dest, text r,str suffix)

```

## function main {#lang-box-util-Box2Text-main}

```rascal
void main(Box b)

```

