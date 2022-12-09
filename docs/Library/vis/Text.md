---
title: "module vis::Text"
---

#### Usage

`import vis::Text;`

#### Synopsis


This module provides functions that map values to strings using ASCII Art pretty printing.

The words [ASCII Art](https://en.wikipedia.org/wiki/ASCII_art) refers to the technique of 
constructing images from text characters that are in the ASCII set. However, in this case
we may use any Unicode character for visual representation purposes.

#### Synopsis

Visualizing values using "ASCII art".

#### Examples



```rascal-shell 
rascal>syntax E = "e" | E "+" E;
ok
rascal>import IO;
ok
rascal>import vis::Text;
ok
rascal>ex = prettyTree([E] "e+e+e");
str: " ❖\n ├─ E = E  \"+\"  E \n │  ├─ E = \"e\" \n │  └─ E = E  \"+\"  E \n │     ├─ E = \"e\" \n │     └─ E = \"e\" \n └─ E = E  \"+\"  E \n    ├─ E = E  \"+\"  E \n    │  ├─ E = \"e\" \n    │  └─ E = \"e\" \n    └─ E = \"e\" \n"
rascal>println(ex);
 ❖
 ├─ E = E  "+"  E 
 │  ├─ E = "e" 
 │  └─ E = E  "+"  E 
 │     ├─ E = "e" 
 │     └─ E = "e" 
 └─ E = E  "+"  E 
    ├─ E = E  "+"  E 
    │  ├─ E = "e" 
    │  └─ E = "e" 
    └─ E = "e" 
ok
```


## function prettyTree {#vis-Text-prettyTree}

```rascal
str prettyTree(Tree t, bool src=false, bool characters=true, bool \layout=false, bool literals=\layout)

```

#### Synopsis

Pretty prints parse trees using ASCII art lines for edges.

## function prettyNode {#vis-Text-prettyNode}

```rascal
str prettyNode(node n, bool keywords=true)

```

#### Synopsis

Pretty prints nodes and ADTs using ASCII art for the edges.

## function ppvalue {#vis-Text-ppvalue}

```rascal
str ppvalue(value e, str(value) nodeLabel, lrel[str,value](value) edges)

```

## function ppvalue_ {#vis-Text-ppvalue_}

```rascal
str ppvalue_(value e, str(value) nodeLabel, lrel[str,value](value) edges, str indent = "")

```

