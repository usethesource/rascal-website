---
title: "module demo::common::CountConstructors"
---

#### Usage

`import demo::common::CountConstructors;`


## data ColoredTree {#demo-common-CountConstructors-ColoredTree}

```rascal
data ColoredTree  
     = leaf(int N)
     | red(ColoredTree left, ColoredTree right)
     | black(ColoredTree left, ColoredTree right)
     ;
```

## data Suite {#demo-common-CountConstructors-Suite}

```rascal
data Suite  
     = hearts()
     | diamonds()
     | clubs()
     | spades()
     ;
```

## data Card {#demo-common-CountConstructors-Card}

```rascal
data Card  
     = two(Suite s)
     | three(Suite s)
     | four(Suite s)
     | five(Suite s)
     | six(Suite s)
     | seven(Suite s)
     | eight(Suite s)
     | nine(Suite s)
     | ten(Suite s)
     | jack(Suite s)
     | queen(Suite s)
     | king(Suite s)
     | ace(Suite s)
     ;
```

## data Hand {#demo-common-CountConstructors-Hand}

```rascal
data Hand  
     = hand(list[Card] cards)
     ;
```

## function count {#demo-common-CountConstructors-count}

* ``map[str,int] count(node N)``

## function countRelevant {#demo-common-CountConstructors-countRelevant}

* ``map[str,int] countRelevant(node N, set[str] relevant)``

## function tstCount {#demo-common-CountConstructors-tstCount}

* ``test bool tstCount()``

## function tstCountRelevant {#demo-common-CountConstructors-tstCountRelevant}

* ``test bool tstCountRelevant()``

