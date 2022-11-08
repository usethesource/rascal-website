---
title: "module analysis::grammars::LOC"
---

#### Usage

`import analysis::grammars::LOC;`

#### Description


We use this definition to separate lines from: <http://en.wikipedia.org/wiki/Newline>:
 
* LF:    Line Feed, U+000A
* VT:    Vertical Tab, U+000B
* FF:    Form Feed, U+000C
* CR:    Carriage Return, U+000D
* CR+LF: CR (U+000D) followed by LF (U+000A)
* NEL:   Next Line, U+0085
* LS:    Line Separator, U+2028
* PS:    Paragraph Separator, U+2029


## alias Stats {#analysis-grammars-LOC-Stats}

```rascal
tuple[int total, map[loc file, int sloc] dist]

```

## function slocStats {#analysis-grammars-LOC-slocStats}

```rascal
Stats slocStats(file(loc l), Stats stats)

Stats slocStats(directory(loc l, kids), Stats stats)

default Stats slocStats(FileSystem _, Stats stats)

```

## data Output {#analysis-grammars-LOC-Output}

```rascal
data Output  
     = newline()
     | stuff()
     ;
```

## function countSLOC {#analysis-grammars-LOC-countSLOC}

```rascal
int countSLOC(Tree t)

```

## function isLayout {#analysis-grammars-LOC-isLayout}

```rascal
bool isLayout(appl(prod(\layouts(_), _, _), _))

bool isLayout(amb({*_, appl(prod(\layouts(_), _, _), _)}))

default bool isLayout(Tree t)

```

## function isComment {#analysis-grammars-LOC-isComment}

```rascal
bool isComment(appl(p:prod(_, _, {*_, \tag("category"("Comment"))}), _))

default bool isComment(Tree _)

```

## function isLF {#analysis-grammars-LOC-isLF}

```rascal
bool isLF(int c)

```

## function isVT {#analysis-grammars-LOC-isVT}

```rascal
bool isVT(int c)

```

## function isFF {#analysis-grammars-LOC-isFF}

```rascal
bool isFF(int c)

```

## function isCR {#analysis-grammars-LOC-isCR}

```rascal
bool isCR(int c)

```

## function isNEL {#analysis-grammars-LOC-isNEL}

```rascal
bool isNEL(int c)

```

## function isLS {#analysis-grammars-LOC-isLS}

```rascal
bool isLS(int c)

```

## function isPS {#analysis-grammars-LOC-isPS}

```rascal
bool isPS(int c)

```

## function isNewLineChar {#analysis-grammars-LOC-isNewLineChar}

```rascal
bool isNewLineChar(int c)

```

