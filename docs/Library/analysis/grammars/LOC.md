---
title: "module analysis::grammars::LOC"
---

#### Usage

`import analysis::grammars::LOC;`


## alias Stats {#analysis-grammars-LOC-Stats}

* `tuple[int total, map[loc file, int sloc] dist]`

## function slocStats {#analysis-grammars-LOC-slocStats}

* ``Stats slocStats(file(loc l), Stats stats)``
* ``Stats slocStats(directory(loc l, kids), Stats stats)``
* ``default Stats slocStats(FileSystem _, Stats stats)``

## data Output {#analysis-grammars-LOC-Output}

```rascal
data Output  
     = newline()
     | stuff()
     ;
```

## function countSLOC {#analysis-grammars-LOC-countSLOC}

* ``int countSLOC(Tree t)``

## function isLayout {#analysis-grammars-LOC-isLayout}

* ``bool isLayout(appl(prod(\layouts(_), _, _), _))``
* ``bool isLayout(amb({*_, appl(prod(\layouts(_), _, _), _)}))``
* ``default bool isLayout(Tree t)``

## function isComment {#analysis-grammars-LOC-isComment}

* ``bool isComment(appl(p:prod(_, _, {*_, \tag("category"("Comment"))}), _))``
* ``default bool isComment(Tree _)``

## function isLF {#analysis-grammars-LOC-isLF}

* ``bool isLF(int c)``

## function isVT {#analysis-grammars-LOC-isVT}

* ``bool isVT(int c)``

## function isFF {#analysis-grammars-LOC-isFF}

* ``bool isFF(int c)``

## function isCR {#analysis-grammars-LOC-isCR}

* ``bool isCR(int c)``

## function isNEL {#analysis-grammars-LOC-isNEL}

* ``bool isNEL(int c)``

## function isLS {#analysis-grammars-LOC-isLS}

* ``bool isLS(int c)``

## function isPS {#analysis-grammars-LOC-isPS}

* ``bool isPS(int c)``

## function isNewLineChar {#analysis-grammars-LOC-isNewLineChar}

* ``bool isNewLineChar(int c)``

