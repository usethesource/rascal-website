---
title: "module demo::lang::turing::l2::desugar::Desugar"
---

#### Usage

`import demo::lang::turing::l2::desugar::Desugar;`


## function expandLoops {#demo-lang-turing-l2-desugar-Desugar-expandLoops}

```rascal
Program expandLoops(Program p)

```

## function renameLabels {#demo-lang-turing-l2-desugar-Desugar-renameLabels}

```rascal
list[Statement] renameLabels(int n, list[Statement] ss)

```

## function labelsToLineNumbers {#demo-lang-turing-l2-desugar-Desugar-labelsToLineNumbers}

```rascal
Program labelsToLineNumbers(Program p)

```

## function labelToLineNo {#demo-lang-turing-l2-desugar-Desugar-labelToLineNo}

```rascal
Statement labelToLineNo(Statement: jumpAlwaysLabel(n), map[str,int] ren)

Statement labelToLineNo(Statement: jumpSetLabel(n), map[str,int] ren)

Statement labelToLineNo(Statement: jumpUnsetLabel(n), map[str,int] ren)

default Statement labelToLineNo(Statement x, map[str,int] ren)

```

