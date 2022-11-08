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

```rascal
rel[&Object, &Attribute]

```

## alias Concept[&Object, &Attribute] {#analysis-formalconcepts-FCA-Concept[&Object, &Attribute]}

```rascal
tuple[set[&Object] objects, set[&Attribute] attributes]

```

## alias ConceptLattice[&Object, &Attribute] {#analysis-formalconcepts-FCA-ConceptLattice[&Object, &Attribute]}

```rascal
rel[Concept[&Object, &Attribute], Concept[&Object, &Attribute]]

```

## alias Object2Attributes[&Object, &Attribute] {#analysis-formalconcepts-FCA-Object2Attributes[&Object, &Attribute]}

```rascal
map[&Object, set[&Attribute]]

```

## alias Attribute2Objects[&Attribute, &Object] {#analysis-formalconcepts-FCA-Attribute2Objects[&Attribute, &Object]}

```rascal
map[&Attribute, set[&Object]]

```

## function fca {#analysis-formalconcepts-FCA-fca}

```rascal
ConceptLattice[&Object, &Attribute] fca (FormalContext[&Object, &Attribute] fc)

```


#### Synopsis

Computes Concept Lattice given the Object Attribute Relation.

## function toDot {#analysis-formalconcepts-FCA-toDot}

```rascal
DotGraph toDot(ConceptLattice[&Object, &Attribute] cl)

DotGraph toDot(ConceptLattice[&Object, &Attribute] cl, bool lab)

```


#### Synopsis

Computes Dot Graph from Concept Lattice.

## function toDotline {#analysis-formalconcepts-FCA-toDotline}

```rascal
Dotline toDotline(ConceptLattice[&Object, &Attribute] cl)

```

## function toOutline {#analysis-formalconcepts-FCA-toOutline}

```rascal
Outline toOutline(ConceptLattice[&Object, &Attribute] cl)

```

## function toFormalContext {#analysis-formalconcepts-FCA-toFormalContext}

```rascal
FormalContext[&Object, &Attribute] toFormalContext(Object2Attributes[&Object, &Attribute] objects)

FormalContext[&Object, &Attribute] toFormalContext(Attribute2Objects[&Object, &Attribute] attributes)

```

## function intersection {#analysis-formalconcepts-FCA-intersection}

```rascal
set[&T] intersection(set[set[&T]] st)

```

## function union {#analysis-formalconcepts-FCA-union}

```rascal
set[&T] union(set[set[&T]] st)

```

## function isSubset {#analysis-formalconcepts-FCA-isSubset}

```rascal
bool isSubset(set[set[&T]] candidate, set[&T] s )

```

## function sigma {#analysis-formalconcepts-FCA-sigma}

```rascal
set[&Attribute] sigma(FormalContext[&Object, &Attribute] fc, set[&Object] objects)

```

## function tau {#analysis-formalconcepts-FCA-tau}

```rascal
set[&Object] tau(FormalContext[&Object, &Attribute] fc, set[&Attributes] attributes)

```

## function maxincl {#analysis-formalconcepts-FCA-maxincl}

```rascal
set[set[&T]] maxincl(set[set[&T]] c)

```

## function createAttributeLattice {#analysis-formalconcepts-FCA-createAttributeLattice}

```rascal
rel[set[&Attribute], set[&Attribute]] createAttributeLattice(FormalContext[&Object, &Attribute] fc)

```

## function makeNodes {#analysis-formalconcepts-FCA-makeNodes}

```rascal
map[Concept[&Object, &Attribute], int] makeNodes(ConceptLattice[&Object, &Attribute] q)

```

## function newAdded1 {#analysis-formalconcepts-FCA-newAdded1}

```rascal
set[&Attribute] newAdded1(ConceptLattice[&Object, &Attribute] q,  Concept[&Object, &Attribute] c)

```

## function newAdded0 {#analysis-formalconcepts-FCA-newAdded0}

```rascal
set[Concept[&Object, &Attribute]] newAdded0(ConceptLattice[&Object, &Attribute] q, Concept[&Object, &Attribute] c)

```

## function compose {#analysis-formalconcepts-FCA-compose}

```rascal
Stm compose(Concept[&Object, &Attribute] c, map[Concept[&Object, &Attribute], int] z, bool lab)

```

## function toDotString {#analysis-formalconcepts-FCA-toDotString}

```rascal
str toDotString(ConceptLattice[&Object, &Attribute]  q)

```


#### Synopsis

Write relation in `.dot` format.

