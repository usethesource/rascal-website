---
title: "module demo::vis::StaticSite"
---

#### Usage

`import demo::vis::StaticSite;`

#### Synopsis

Demonstrates HTML generation and viewing in Rascal

#### Description


In the current module we have a function `table` which transforms
any binary relation into an HTML table:


```rascal 

module demo::vis::StaticSite

import lang::html::IO;


HTMLElement table(rel[&T, &U] r)
    = table([
        tr([
            td([text("<a>")]),
            td([text("<b>")])
        ])
    | <a, b> <- r    
    ]);

```

When we try this out on the commandline, the REPL will pop-up
a browser window such that we can visualize the result:


```rascal-shell 
rascal>import demo::vis::StaticSite;
ok
rascal>import lang::html::IO;
ok
rascal>characters = {"Sneezy", "Sleepy", "Dopey", "Doc", "Happy", "Bashful", "Grumpy"};
set[str]: {"Happy","Sleepy","Bashful","Grumpy","Doc","Dopey","Sneezy"}
rascal>serve(table(characters * characters));
```
![image](/assets/Library/demo/vis/StaticSite_screenshot_22.png)
```rascal-shell
```

To get this effect we used the following library modules:
* [AST](../../../Library/lang/html/AST.md) contains the HTML abstract syntax tree definition
* [IO](../../../Library/lang/html/IO.md) knows how to pretty-print HTML
* [Content](../../../Library/Content.md) provides access to the builtin application server of the Rascal REPL


## function table {#demo-vis-StaticSite-table}

* ``HTMLElement table(rel[&T, &U] r)``

#### Synopsis

Translates a binary relation to an HTML table element

