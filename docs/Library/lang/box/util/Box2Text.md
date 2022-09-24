---
title: "module lang::box::util::Box2Text"
---

#### Usage

`import lang::box::util::Box2Text;`

This is an implementation of "From Box to Tex:An algebraic approach to the construction of documentation tools" by Mark van den Brand and Eelco Visser (June 30, 1994)

The main function `format` maps a box tree (which describes 2-dimensional layout constraints for a linear text) to a string
which satisfies these constraints.

## alias options {#lang-box-util-Box2Text-options}

* `map [str, int]`

## function fprint {#lang-box-util-Box2Text-fprint}

* ``void fprint(Box b)``

Print boxes

## function fprintln {#lang-box-util-Box2Text-fprintln}

* ``void fprintln(Box b)``

Print boxes followed by newline

## function format {#lang-box-util-Box2Text-format}

* ``str format(Box b)``

Converts boxes into a string

## function box2latex {#lang-box-util-Box2Text-box2latex}

* ``text box2latex(Box b)``

Converts boxes into latex

## function box2html {#lang-box-util-Box2Text-box2html}

* ``text box2html(Box b)``

Converts boxes into html

## function box2text {#lang-box-util-Box2Text-box2text}

* ``text box2text(Box b)``

Converts boxes into list of lines (ASCII)

## alias foptions {#lang-box-util-Box2Text-foptions}

* `map[str, list[str]]`

## function vv {#lang-box-util-Box2Text-vv}

* ``text vv(text a, text b)``

## function blank {#lang-box-util-Box2Text-blank}

* ``str blank(str a)``

## function wd {#lang-box-util-Box2Text-wd}

* ``text wd(text a)``

## function width {#lang-box-util-Box2Text-width}

* ``int width(str s)``

## function twidth {#lang-box-util-Box2Text-twidth}

* ``int twidth(text t)``

## function hwidth {#lang-box-util-Box2Text-hwidth}

* ``int hwidth(text t)``

## function bar {#lang-box-util-Box2Text-bar}

* ``text bar(str a, text b)``

## function hskip {#lang-box-util-Box2Text-hskip}

* ``text hskip(int n)``

## function vskip {#lang-box-util-Box2Text-vskip}

* ``text vskip(int n)``

## function isBlank {#lang-box-util-Box2Text-isBlank}

* ``bool isBlank(str a)``

## function prepend {#lang-box-util-Box2Text-prepend}

* ``text prepend(str a, text b)``

## function hh {#lang-box-util-Box2Text-hh}

* ``text hh(text a, text b)``

## function _hh {#lang-box-util-Box2Text-_hh}

* ``text _hh(text a, text b)``

## function _vv {#lang-box-util-Box2Text-_vv}

* ``text _vv(text a, text b)``

## function hh_ {#lang-box-util-Box2Text-hh_}

* ``text hh_(text a, text b)``

## function vv_ {#lang-box-util-Box2Text-vv_}

* ``text vv_(text a, text b)``

## function LL {#lang-box-util-Box2Text-LL}

* ``text LL(str s )``

## function HH {#lang-box-util-Box2Text-HH}

* ``text HH(list[Box] b, Box _, options opts, int m)``

## function VV {#lang-box-util-Box2Text-VV}

* ``text VV(list[Box] b, Box c, options opts, int m)``

## function II {#lang-box-util-Box2Text-II}

* ``text II(list[Box] b, Box c, options opts, int m)``

## function WDWD {#lang-box-util-Box2Text-WDWD}

* ``text WDWD(list[Box] b, Box c ,options opts, int m)``

## function ifHOV {#lang-box-util-Box2Text-ifHOV}

* ``text ifHOV(text t, Box b,  Box c, options opts, int m)``

## function HOVHOV {#lang-box-util-Box2Text-HOVHOV}

* ``text HOVHOV(list[Box] b, Box c, options opts, int m)``

## function HVHV {#lang-box-util-Box2Text-HVHV}

* ``text HVHV(text T, int s, text a, Box A, list[Box] B, options opts, int m)``
* ``text HVHV(text T, int s, list[Box] b, options opts,  int m, Box c)``
* ``text HVHV(list[Box] b, Box _, options opts, int m)``

## function font {#lang-box-util-Box2Text-font}

* ``text font(text t, str tg)``

## function QQ {#lang-box-util-Box2Text-QQ}

* ``text QQ(Box b, Box c, options opts, foptions f, int m)``

## function O {#lang-box-util-Box2Text-O}

* ``text O(Box b, Box c, options opts, int m)``

## function boxSize {#lang-box-util-Box2Text-boxSize}

* ``Box boxSize(Box b, Box c, options opts, int m)``

## function RR {#lang-box-util-Box2Text-RR}

* ``list[list[Box]] RR(list[Box] bl, Box c, options opts, int m)``

## function getMaxWidth {#lang-box-util-Box2Text-getMaxWidth}

* ``int getMaxWidth(list[Box] b)``

## function Awidth {#lang-box-util-Box2Text-Awidth}

* ``list[int] Awidth(list[list[Box]] a)``

## function AA {#lang-box-util-Box2Text-AA}

* ``text AA(list[Box] bl, Box c ,options opts, foptions f, int m)``

## function changeHV2H {#lang-box-util-Box2Text-changeHV2H}

* ``bool changeHV2H(list[Box] hv)``

## function removeHV {#lang-box-util-Box2Text-removeHV}

* ``Box removeHV(Box b)``

## function removeHOV {#lang-box-util-Box2Text-removeHOV}

* ``Box removeHOV(Box b)``

## function box2data {#lang-box-util-Box2Text-box2data}

* ``text box2data(Box b)``

## function convert2latex {#lang-box-util-Box2Text-convert2latex}

* ``str convert2latex(str s)``

## function text2latex {#lang-box-util-Box2Text-text2latex}

* ``str text2latex(str t)``

## function selectBeginTag {#lang-box-util-Box2Text-selectBeginTag}

* ``str selectBeginTag(str tg, str key)``

## function selectEndTag {#lang-box-util-Box2Text-selectEndTag}

* ``str selectEndTag(str tg)``

## function convert2html {#lang-box-util-Box2Text-convert2html}

* ``str convert2html(str s)``

## function text2html {#lang-box-util-Box2Text-text2html}

* ``str text2html(str t)``

## function text2txt {#lang-box-util-Box2Text-text2txt}

* ``str text2txt(str t)``

## function text2latex {#lang-box-util-Box2Text-text2latex}

* ``text text2latex(text t)``

## function text2html {#lang-box-util-Box2Text-text2html}

* ``text text2html(text t)``

## function text2txt {#lang-box-util-Box2Text-text2txt}

* ``text text2txt(text t)``

## function tst {#lang-box-util-Box2Text-tst}

* ``void tst()``

## function baseName {#lang-box-util-Box2Text-baseName}

* ``str baseName(str input)``

## function toExport {#lang-box-util-Box2Text-toExport}

* ``void toExport(loc src,loc dest, text r,str suffix)``

## function main {#lang-box-util-Box2Text-main}

* ``void main(Box b)``

