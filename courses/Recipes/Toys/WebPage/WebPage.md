---
title: WebPage
---

Rascal has a builtin notion of webserver and webclients. The clients are browsers that live in the IDE editor window,
or the default desktop browser. The servers are Rascal callback functions with the signature `Response (Request)`.

Say we like to visualize this simple table of pairs of characters:
```rascal-commands
characters = {"Sneezy", "Sleepy", "Dopey", "Doc", "Happy", "Bashful", "Grumpy"};
pairs = (characters * characters) - {<c,c> | c <- characters};
```

We can translate this information to the abstract syntax of an HTML table:
```rascal-commands,continue
import lang::html::IO;
import lang::html::AST;
import Content;

HTMLElement table(rel[&T, &U] r)
    = table([
        tr([
            td([text("<a>")]),
            td([text("<b>")])
        ])
    | <a, b> <- r    
    ]);
```

And then serve it as a page:
```rascal-shell,continue
serve(table(pairs));
```

Interactive web pages are also possible. Have a look in ((Library:module:Content)).

