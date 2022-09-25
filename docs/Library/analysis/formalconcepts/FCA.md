---
title: "module analysis::formalconcepts::FCA"
---

#### Usage

`import analysis::formalconcepts::FCA;`


#### Synopsis

Library for Formal Concept Analysis

#### Description

Formal Concept Analysis is a somewhat ubiquitous tool in software analysis projects. 
It can be used to find latent groups of objects that share the same attributes in a dataset. 
Typically, we apply `FCA` to a relation `rel[&O objects, &A attributes]`, which represents
extracted source code artifacts and their attributes.


## alias FormalContext[&Object, &Attribute] {#analysis-formalconcepts-FCA-FormalContext[&Object, &Attribute]}

* `rel[&Object, &Attribute]`

## alias Concept[&Object, &Attribute] {#analysis-formalconcepts-FCA-Concept[&Object, &Attribute]}

* `tuple[set[&Object] objects, set[&Attribute] attributes]`

## alias ConceptLattice[&Object, &Attribute] {#analysis-formalconcepts-FCA-ConceptLattice[&Object, &Attribute]}

* `rel[Concept[&Object, &Attribute], Concept[&Object, &Attribute]]`

## alias Object2Attributes[&Object, &Attribute] {#analysis-formalconcepts-FCA-Object2Attributes[&Object, &Attribute]}

* `map[&Object, set[&Attribute]]`

## alias Attribute2Objects[&Attribute, &Object] {#analysis-formalconcepts-FCA-Attribute2Objects[&Attribute, &Object]}

* `map[&Attribute, set[&Object]]`

## function fca {#analysis-formalconcepts-FCA-fca}

* ``ConceptLattice[&Object, &Attribute] fca (FormalContext[&Object, &Attribute] fc)``


#### Synopsis

Computes Concept Lattice given the Object Attribute Relation.

## function toDot {#analysis-formalconcepts-FCA-toDot}

* ``DotGraph toDot(ConceptLattice[&Object, &Attribute] cl)``
* ``DotGraph toDot(ConceptLattice[&Object, &Attribute] cl, bool lab)``


#### Synopsis

Computes Dot Graph from Concept Lattice.

## function toDotline {#analysis-formalconcepts-FCA-toDotline}

* ``Dotline toDotline(ConceptLattice[&Object, &Attribute] cl)``

## function toOutline {#analysis-formalconcepts-FCA-toOutline}

* ``Outline toOutline(ConceptLattice[&Object, &Attribute] cl)``

## function toFormalContext {#analysis-formalconcepts-FCA-toFormalContext}

* ``FormalContext[&Object, &Attribute] toFormalContext(Object2Attributes[&Object, &Attribute] objects)``
* ``FormalContext[&Object, &Attribute] toFormalContext(Attribute2Objects[&Object, &Attribute] attributes)``

## function intersection {#analysis-formalconcepts-FCA-intersection}

* ``set[&T] intersection(set[set[&T]] st)``

## function union {#analysis-formalconcepts-FCA-union}

* ``set[&T] union(set[set[&T]] st)``

## function isSubset {#analysis-formalconcepts-FCA-isSubset}

* ``bool isSubset(set[set[&T]] candidate, set[&T] s )``

## function sigma {#analysis-formalconcepts-FCA-sigma}

* ``set[&Attribute] sigma(FormalContext[&Object, &Attribute] fc, set[&Object] objects)``

## function tau {#analysis-formalconcepts-FCA-tau}

* ``set[&Object] tau(FormalContext[&Object, &Attribute] fc, set[&Attributes] attributes)``

## function maxincl {#analysis-formalconcepts-FCA-maxincl}

* ``set[set[&T]] maxincl(set[set[&T]] c)``

## function createAttributeLattice {#analysis-formalconcepts-FCA-createAttributeLattice}

* ``rel[set[&Attribute], set[&Attribute]] createAttributeLattice(FormalContext[&Object, &Attribute] fc)``

## function makeNodes {#analysis-formalconcepts-FCA-makeNodes}

* ``map[Concept[&Object, &Attribute], int] makeNodes(ConceptLattice[&Object, &Attribute] q)``

## function newAdded1 {#analysis-formalconcepts-FCA-newAdded1}

* ``set[&Attribute] newAdded1(ConceptLattice[&Object, &Attribute] q,  Concept[&Object, &Attribute] c)``

## function newAdded0 {#analysis-formalconcepts-FCA-newAdded0}

* ``set[Concept[&Object, &Attribute]] newAdded0(ConceptLattice[&Object, &Attribute] q, Concept[&Object, &Attribute] c)``

## function compose {#analysis-formalconcepts-FCA-compose}

* ``Stm compose(Concept[&Object, &Attribute] c, map[Concept[&Object, &Attribute], int] z, bool lab)``

## function toDotString {#analysis-formalconcepts-FCA-toDotString}

* ``str toDotString(ConceptLattice[&Object, &Attribute]  q)``


#### Synopsis

Write relation in `.dot` format.

