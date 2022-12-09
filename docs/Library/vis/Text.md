---
title: "module vis::Text"
---

#### Usage

`import vis::Text;`

#### Synopsis

Visualizing values using "ASCII art".

#### Synopsis


This module provides functions that map values to strings using ASCII Art pretty printing.

The words [ASCII Art](https://en.wikipedia.org/wiki/ASCII_art) refers to the technique of 
constructing images from text characters that are in the ASCII set. However, in this case
we may use any Unicode character for visual representation purposes.

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


```rascal-shell 
rascal>import util::FileSystem;
ok
rascal>import vis::Text;
ok
rascal>import IO;
ok
rascal>ex = prettyNode(crawl(|std:///util|));
str: " directory\n ├─ |std:///util|\n └─ {…}\n    ├─ file\n    │  └─ |std:///util/Memo.rsc|\n    ├─ file\n    │  └─ |std:///util/RunTests$1.class|\n    ├─ file\n    │  └─ |std:///util/Monitor.class|\n    ├─ file\n    │  └─ |std:///util/Eval$Timer.class|\n    ├─ file\n    │  └─ |std:///util/Validator.rsc|\n    ├─ file\n    │  └─ |std:///util/FileSystem.rsc|\n    ├─ file\n    │  └─ |std:///util/Sampling.rsc|\n    ├─ file\n    │  └─ |std:///util/PathConfig$1.class|\n    ├─ file\n    │  └─ |std:///util/IDEServicesLibrary.class|\n    ├─ file\n    │  └─ |std:///util/Random.rsc|\n    ├─ file\n    │  └─ |std:///util/PathConfig$RascalConfigMode.class|\n    ├─ file\n    │  └─ |std:///util/Benchmark.rsc|\n    ├─ file\n    │  └─ |std:///util/Eval.rsc|\n    ├─ file\n    │  └─ |std:///util/PathConfig.class|\n    ├─ file\n    │  └─ |std:///util/Highlight.rsc|\n    ├─ file\n    │  └─ |std:///util/ObjectReader.class|\n    ├─ file\n    │  └─ |std:///util/SemVerLib.class|\n    ├─ file\n    │  └─ |std:///util/Benchmark.class|\n    ├─ file\n    │  └─ |std:///util/Eval$EvalTimer.class|\n    ├─ file\n    │  └─ |std:///util/REPL.rsc|\n    ├─ file\n    │  └─ |std:///util/SystemAPI.rsc|\n    ├─ file\n    │  └─ |std:///util/Eval.class|\n    ├─ file\n    │  └─ |std:///util/Test.rsc|\n    ├─ file\n    │  └─ |std:///util/TermREPL.class|\n    ├─ file\n    │  └─ |std:///util/PriorityQueue.rsc|\n    ├─ file\n    │  └─ |std:///util/Reflective.class|\n    ├─ file\n    │  └─ |std:///util/Webserver.class|\n    ├─ file\n    │  └─ |std:///util/RunTests.class|\n    ├─ file\n    │  └─ |std:///util/ToplevelType$1.class|\n    ├─ file\n    │  └─ |std:///util/IDEServices.rsc|\n    ├─ file\n    │  └─ |std:///util/Maybe.rsc|\n    ├─ file\n    │  └─ |std:///util/ToplevelType$2.class|\n    ├─ file\n    │  └─ |std:///util/TermREPL$TheREPL.class|\n    ├─ directory\n    │  ├─ |std:///util/tasks|\n    │  └─ {…}\n    │     ├─ file\n    │     │  └─ |std:///util/tasks/Manager.rsc|\n    │     ├─ file\n    │     │  └─ |std:///util/tasks/IValueWrapper.class|\n    │     ├─ file\n    │     │  └─ |std:///util/tasks/Manager$ProducerWrapper.class|\n    │     └─ file\n    │        └─ |std:///util/tasks/Manager.class|\n    ├─ file\n    │  └─ |std:///util/Progress.rsc|\n    ├─ file\n    │  └─ |std:///util/ShellExec$1.class|\n    ├─ file\n    │  └─ |std:///util/SemVer.rsc|\n    ├─ file\n    │  └─ |std:///util/Math.rsc|\n    ├─ file\n    │  └─ |std:///util/SystemAPI.class|\n    ├─ file\n    │  └─ |std:///util/ShellExec.rsc|\n    ├─ file\n    │  └─ |std:///util/ToplevelType.class|\n    ├─ file\n    │  └─ |std:///util/Webserver$2.class|\n    ├─ file\n    │  └─ |std:///util/UUID.rsc|\n    ├─ file\n    │  └─ |std:///util/Reflective.rsc|\n    ├─ file\n    │  └─ |std:///util/ShellExec.class|\n    ├─ file\n    │  └─ |std:///util/Webserver.rsc|\n    ├─ file\n    │  └─ |std:///util/Monitor.rsc|\n    ├─ file\n    │  └─ |std:///util/Math.class|\n    ├─ file\n    │  └─ |std:///util/Webserver$1.class|\n    └─ file\n       └─ |std:///util/SemVer.class|\n"
rascal>println(ex);
 directory
 ├─ |std:///util|
 └─ {…}
    ├─ file
    │  └─ |std:///util/Memo.rsc|
    ├─ file
    │  └─ |std:///util/RunTests$1.class|
    ├─ file
    │  └─ |std:///util/Monitor.class|
    ├─ file
    │  └─ |std:///util/Eval$Timer.class|
    ├─ file
    │  └─ |std:///util/Validator.rsc|
    ├─ file
    │  └─ |std:///util/FileSystem.rsc|
    ├─ file
    │  └─ |std:///util/Sampling.rsc|
    ├─ file
    │  └─ |std:///util/PathConfig$1.class|
    ├─ file
    │  └─ |std:///util/IDEServicesLibrary.class|
    ├─ file
    │  └─ |std:///util/Random.rsc|
    ├─ file
    │  └─ |std:///util/PathConfig$RascalConfigMode.class|
    ├─ file
    │  └─ |std:///util/Benchmark.rsc|
    ├─ file
    │  └─ |std:///util/Eval.rsc|
    ├─ file
    │  └─ |std:///util/PathConfig.class|
    ├─ file
    │  └─ |std:///util/Highlight.rsc|
    ├─ file
    │  └─ |std:///util/ObjectReader.class|
    ├─ file
    │  └─ |std:///util/SemVerLib.class|
    ├─ file
    │  └─ |std:///util/Benchmark.class|
    ├─ file
    │  └─ |std:///util/Eval$EvalTimer.class|
    ├─ file
    │  └─ |std:///util/REPL.rsc|
    ├─ file
    │  └─ |std:///util/SystemAPI.rsc|
    ├─ file
    │  └─ |std:///util/Eval.class|
    ├─ file
    │  └─ |std:///util/Test.rsc|
    ├─ file
    │  └─ |std:///util/TermREPL.class|
    ├─ file
    │  └─ |std:///util/PriorityQueue.rsc|
    ├─ file
    │  └─ |std:///util/Reflective.class|
    ├─ file
    │  └─ |std:///util/Webserver.class|
    ├─ file
    │  └─ |std:///util/RunTests.class|
    ├─ file
    │  └─ |std:///util/ToplevelType$1.class|
    ├─ file
    │  └─ |std:///util/IDEServices.rsc|
    ├─ file
    │  └─ |std:///util/Maybe.rsc|
    ├─ file
    │  └─ |std:///util/ToplevelType$2.class|
    ├─ file
    │  └─ |std:///util/TermREPL$TheREPL.class|
    ├─ directory
    │  ├─ |std:///util/tasks|
    │  └─ {…}
    │     ├─ file
    │     │  └─ |std:///util/tasks/Manager.rsc|
    │     ├─ file
    │     │  └─ |std:///util/tasks/IValueWrapper.class|
    │     ├─ file
    │     │  └─ |std:///util/tasks/Manager$ProducerWrapper.class|
    │     └─ file
    │        └─ |std:///util/tasks/Manager.class|
    ├─ file
    │  └─ |std:///util/Progress.rsc|
    ├─ file
    │  └─ |std:///util/ShellExec$1.class|
    ├─ file
    │  └─ |std:///util/SemVer.rsc|
    ├─ file
    │  └─ |std:///util/Math.rsc|
    ├─ file
    │  └─ |std:///util/SystemAPI.class|
    ├─ file
    │  └─ |std:///util/ShellExec.rsc|
    ├─ file
    │  └─ |std:///util/ToplevelType.class|
    ├─ file
    │  └─ |std:///util/Webserver$2.class|
    ├─ file
    │  └─ |std:///util/UUID.rsc|
    ├─ file
    │  └─ |std:///util/Reflective.rsc|
    ├─ file
    │  └─ |std:///util/ShellExec.class|
    ├─ file
    │  └─ |std:///util/Webserver.rsc|
    ├─ file
    │  └─ |std:///util/Monitor.rsc|
    ├─ file
    │  └─ |std:///util/Math.class|
    ├─ file
    │  └─ |std:///util/Webserver$1.class|
    └─ file
       └─ |std:///util/SemVer.class|
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

