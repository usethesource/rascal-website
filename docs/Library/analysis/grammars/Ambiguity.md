---
title: "analysis::grammars::Ambiguity"
---

#### Usage

`import analysis::grammars::Ambiguity;`


## function diagnose {#analysis-grammars-Ambiguity-diagnose}

* ``list[Message] diagnose(Tree t)``
* ``list[Message] diagnose(str amb)``

## function findCauses {#analysis-grammars-Ambiguity-findCauses}

* ``list[Message] findCauses(Tree a)``
* ``list[Message] findCauses(Tree x, Tree y)``

## function verticalCauses {#analysis-grammars-Ambiguity-verticalCauses}

* ``list[Message] verticalCauses(Tree x, Tree y, set[Production] pX, set[Production] pY)``

## function exceptAdvise {#analysis-grammars-Ambiguity-exceptAdvise}

* ``list[Message] exceptAdvise(Tree x, set[Production] _, set[Production] pY)``

## function deeperCauses {#analysis-grammars-Ambiguity-deeperCauses}

* ``list[Message] deeperCauses(Tree x, Tree y, set[Production] pX, set[Production] pY)``

## function yield {#analysis-grammars-Ambiguity-yield}

* ``list[int] yield(Tree x)``

## function reorderingCauses {#analysis-grammars-Ambiguity-reorderingCauses}

* ``list[Message] reorderingCauses(Tree x, Tree y)``

## function priorityCauses {#analysis-grammars-Ambiguity-priorityCauses}

* ``list[Message] priorityCauses(Tree x, Tree y)``

## function danglingCauses {#analysis-grammars-Ambiguity-danglingCauses}

* ``list[Message] danglingCauses(Tree x, Tree y)``

## function danglingFollowSolutions {#analysis-grammars-Ambiguity-danglingFollowSolutions}

* ``list[Message] danglingFollowSolutions(Tree x, Tree y)``

## function danglingOffsideSolutions {#analysis-grammars-Ambiguity-danglingOffsideSolutions}

* ``list[Message] danglingOffsideSolutions(Tree x, Tree y)``

## function associativityCauses {#analysis-grammars-Ambiguity-associativityCauses}

* ``list[Message] associativityCauses(Tree x, Tree y)``

