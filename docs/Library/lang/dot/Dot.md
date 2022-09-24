---
title: "module lang::dot::Dot"
---

#### Usage

`import lang::dot::Dot;`

## alias Id {#lang-dot-Dot-Id}

* `str`

## data DotGraph {#lang-dot-Dot-DotGraph}

```rascal
data DotGraph  
     = graph(Id id, Stms stmts)
     | digraph(Id id, Stms stmts)
     ;
```

Abstract Data Type of Dot language

## alias Stms {#lang-dot-Dot-Stms}

* `list[Stm]`

## alias NodeId {#lang-dot-Dot-NodeId}

* `tuple[Id, PortId]`

## alias PortId {#lang-dot-Dot-PortId}

* `tuple[Id, CompassPt]`

## data CompassPt {#lang-dot-Dot-CompassPt}

```rascal
data CompassPt  
     = N()
     | NE()
     | E()
     | SE()
     | S()
     | SW()
     | W()
     | NW()
     | C()
     | _()
     ;
```

## data Stm {#lang-dot-Dot-Stm}

```rascal
data Stm  
     = N(Id id, Attrs attrs)
     | N(Id id)
     | N(NodeId nid, Attrs attrs)
     | N(NodeId nid)
     | E(Id from, Id to, Attrs attrs)
     | E(Id from, Id to)
     | E(NodeId nfrom, Id to, Attrs attrs)
     | E(NodeId nfrom, Id to)
     | E(Stm sfrom, Id to, Attrs attrs)
     | E(Stm sfrom, Id to)
     | E(Id from, NodeId nto, Attrs attrs)
     | E(Id from, NodeId nto)
     | E(NodeId nfrom, NodeId nto, Attrs attrs)
     | E(NodeId nfrom, NodeId nto)
     | E(Stm sfrom, NodeId nto, Attrs attrs)
     | E(Stm sfrom, NodeId nto)
     | E(Id from, Stm sto, Attrs attrs)
     | E(Id from, Stm sto)
     | E(NodeId nfrom, Stm sto, Attrs attrs)
     | E(NodeId nfrom, Stm sto)
     | E(Stm sfrom, Stm sto, Attrs attrs)
     | E(Stm sfrom, Stm sto)
     | S(Id id, Stms stms)
     | S(Stms stms)
     | A(Id prop, Id val)
     | GRAPH(Attrs attrs)
     | NODE(Attrs attrs)
     | EDGE(Attrs attrs)
     ;
```

## alias Attr {#lang-dot-Dot-Attr}

* `tuple[str prop,  Id val]`

## alias Attrs {#lang-dot-Dot-Attrs}

* `list[Attr]`

## alias Outline {#lang-dot-Dot-Outline}

* `map[int key, list[str] args]`

## alias Dotline {#lang-dot-Dot-Dotline}

* `tuple[DotGraph graph, Outline outline]`

## function export {#lang-dot-Dot-export}

* ``DotGraph export(DotGraph g)``
* ``Dotline export(Dotline g)``

Dummy function call needed to tag initialized global variables of type DotGraph.
It is possible to select that variable on the outline menu of the Rascal Editor.
An application is for example to display dotgraphs.

## function hasOutline {#lang-dot-Dot-hasOutline}

* ``bool hasOutline(Dotline _)``
* ``bool hasOutline(DotGraph _)``

## function setCurrentOutline {#lang-dot-Dot-setCurrentOutline}

* ``void setCurrentOutline(Dotline current)``

## function toString {#lang-dot-Dot-toString}

* ``str toString(digraph(Id id,Stms stms))``
* ``str toString(Dotline g)``

Translates DotGraph to String input for dot

## function getChildren {#lang-dot-Dot-getChildren}

* ``list[value] getChildren(value key)``

## function reLabel {#lang-dot-Dot-reLabel}

* ``str reLabel(str prop, str val)``

## function oAttrs {#lang-dot-Dot-oAttrs}

* ``str oAttrs(Attrs attrs)``

## function oCompassPt {#lang-dot-Dot-oCompassPt}

* ``str oCompassPt(N())``
* ``str oCompassPt(NE())``
* ``str oCompassPt(E())``
* ``str oCompassPt(SE())``
* ``str oCompassPt(S())``
* ``str oCompassPt(SW())``
* ``str oCompassPt(E())``
* ``str oCompassPt(NW())``
* ``default str oCompassPt(CompassPt _)``

## function oPortId {#lang-dot-Dot-oPortId}

* ``str oPortId(PortId id)``

## function oNodeId {#lang-dot-Dot-oNodeId}

* ``str oNodeId(NodeId id)``

## function oStms {#lang-dot-Dot-oStms}

* ``str oStms(Stms stms, str sep)``

## function oStm {#lang-dot-Dot-oStm}

* ``str oStm( N(Id id))``
* ``str oStm( N(Id id, Attrs attrs))``
* ``str oStm( E(Id from, Id to))``
* ``str oStm( E(Id from, Id to, Attrs attrs))``
* ``str oStm( E(NodeId from, Id to))``
* ``str oStm( E(Id from, Id to, Attrs attrs))``
* ``str oStm( E(Stm from, Id to))``
* ``str oStm( E(Stm from, Id to, Attrs attrs))``
* ``str oStm( E(Id from, NodeId to))``
* ``str oStm( E(Id from, NodeId to, Attrs attrs))``
* ``str oStm( E(NodeId from, NodeId to))``
* ``str oStm( E(Id from, NodeId to, Attrs attrs))``
* ``str oStm( E(Stm from, NodeId to))``
* ``str oStm( E(Stm from, NodeId to, Attrs attrs))``
* ``str oStm( E(Id from, Stm to))``
* ``str oStm( E(Id from, Stm to, Attrs attrs))``
* ``str oStm( E(NodeId from, Stm to))``
* ``str oStm( E(Id from, Stm to, Attrs attrs))``
* ``str oStm( E(Stm from, Stm to))``
* ``str oStm( E(Stm from, Stm to, Attrs attrs))``
* ``str oStm( S(Stms stms))``
* ``str oStm( S(Id id, Stms stms))``
* ``str oStm( A(Id prop, Id val))``
* ``str oStm( GRAPH(Attrs attrs))``
* ``str oStm( EDGE(Attrs attrs))``
* ``str oStm( NODE(Attrs attrs))``

