---
title: "module vis::Basic"
---

#### Usage

`import vis::Basic;`

#### Synopsis

Uses static HTML to visualize arbitrary Rascal values

#### Description


This modules provides a simple mapping from hierarchical (nested)
Rascal values to HTML markup. The goal of the mapping is to provide
a more visible and searchable representation of Rascal values than
the standard textual expression format.

This module is quite new and may undergo some tweaks in the coming time.


## function showValue {#vis-Basic-showValue}

* ``Content showValue(value v)``

## function valueServer {#vis-Basic-valueServer}

* ``Response (Request) valueServer(value v)``

## function toHTML {#vis-Basic-toHTML}

* ``HTMLElement toHTML(num i)``
* ``HTMLElement toHTML(str s)``
* ``HTMLElement toHTML(loc l)``
* ``HTMLElement toHTML(list[value] l)``
* ``default HTMLElement toHTML(set[value] l)``
* ``HTMLElement toHTML(rel[value,value] r)``
* ``HTMLElement toHTML(rel[value,value,value] r)``
* ``HTMLElement toHTML(rel[value,value,value,value] r)``
* ``HTMLElement toHTML(map[value,value] m)``
* ``HTMLElement toHTML(t:<value a, value bb>)``
* ``HTMLElement toHTML(t:<value a, value bb, value c>)``
* ``HTMLElement toHTML(t:<value a, value bb, value c, value d>)``
* ``HTMLElement toHTML(Tree t:appl(Production p, list[Tree] args))``
* ``HTMLElement toHTML(Tree t:amb(set[Tree] alts))``
* ``HTMLElement toHTML(char(int c))``
* ``HTMLElement toHTML(node n)``
* ``default HTMLElement toHTML(value x:!set[value] _)``

## function sampled {#vis-Basic-sampled}

* ``str sampled(set[value] s, int count)``

## function sample {#vis-Basic-sample}

* ``set[&T] sample(set[&T] corpus, int count)``

## function sampled {#vis-Basic-sampled}

* ``str sampled(list[value] s, int count)``

## function sample {#vis-Basic-sample}

* ``list[&T] sample(list[&T] corpus, int count)``

## function sampled {#vis-Basic-sampled}

* ``str sampled(map[value,value] s, int count)``

## function sample {#vis-Basic-sample}

* ``map[&T,&U] sample(map[&T,&U] corpus, int count)``

