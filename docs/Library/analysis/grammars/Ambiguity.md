---
title: "module analysis::grammars::Ambiguity"
---

#### Usage

`import analysis::grammars::Ambiguity;`


## function diagnose {#analysis-grammars-Ambiguity-diagnose}

```rascal
list[Message] diagnose(Tree t)

list[Message] diagnose(str amb)

```

## function findCauses {#analysis-grammars-Ambiguity-findCauses}

```rascal
list[Message] findCauses(Tree a)

list[Message] findCauses(Tree x, Tree y)

```

## function verticalCauses {#analysis-grammars-Ambiguity-verticalCauses}

```rascal
list[Message] verticalCauses(Tree x, Tree y, set[Production] pX, set[Production] pY)

```

## function exceptAdvise {#analysis-grammars-Ambiguity-exceptAdvise}

```rascal
list[Message] exceptAdvise(Tree x, set[Production] _, set[Production] pY)

```

## function deeperCauses {#analysis-grammars-Ambiguity-deeperCauses}

```rascal
list[Message] deeperCauses(Tree x, Tree y, set[Production] pX, set[Production] pY)

```

## function yield {#analysis-grammars-Ambiguity-yield}

```rascal
list[int] yield(Tree x)

```

## function reorderingCauses {#analysis-grammars-Ambiguity-reorderingCauses}

```rascal
list[Message] reorderingCauses(Tree x, Tree y)

```

## function priorityCauses {#analysis-grammars-Ambiguity-priorityCauses}

```rascal
list[Message] priorityCauses(Tree x, Tree y)

```

## function danglingCauses {#analysis-grammars-Ambiguity-danglingCauses}

```rascal
list[Message] danglingCauses(Tree x, Tree y)

```

## function danglingFollowSolutions {#analysis-grammars-Ambiguity-danglingFollowSolutions}

```rascal
list[Message] danglingFollowSolutions(Tree x, Tree y)

```

## function danglingOffsideSolutions {#analysis-grammars-Ambiguity-danglingOffsideSolutions}

```rascal
list[Message] danglingOffsideSolutions(Tree x, Tree y)

```

## function associativityCauses {#analysis-grammars-Ambiguity-associativityCauses}

```rascal
list[Message] associativityCauses(Tree x, Tree y)

```

