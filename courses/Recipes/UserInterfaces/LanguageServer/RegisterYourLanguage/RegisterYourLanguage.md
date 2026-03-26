---
title: Register your language
sidebar_position: 2
---

#### Synopsis

Start a new VScode extension for your language

#### Description

We assume you have already written a ((ParsingService)) function. Now think of:
* a name for your language;
* a file extension for its files.

We recommend write a module that focuses on registering your language:

```rascal-module
module MyLanguageServer

import util::LanguageServer;     // <1>
import demo::lang::Pico::Syntax; // <2>

start[Program] myParsingService(str s, loc l) { // <3>
  return parse(#start[Program], s, l);
} 

// highlight-start
set[LanguageService] myLanguageServices() { // <4>
    parser(myParsingService);
}
// highlight-end

void main() { // <5>
    // highlight-next-line
    registerLanguage( // <6>
    // highlight-next-line
        language( // <7>
            pathConfig(), // <8>
            "Pico",       // <9>
            {"pico"},     // <10>
            "MyLanguageServer", // <11>
            "myLanguageServices"  // <12>
        )
)   ;
}
```

1. Load the LSP API we need later
2. Load the ((Rascal:SyntaxDefinition)) needed for our ((ParsingService))
3. Define a ((ParsingService)) (could also be already define in the imported module)
4. Collect all relevant language services. The function _must not have positional parameters_ and return a `set[LanguageService]`. You can keep adding new services here to the set, and keep the other code the same.
5. Having a `main` function is not obligatory, but when you deploy the extension later as an independent extension you will need it anyway.
6. The call to ((registerLanguage)) does the final job of extending the current IDE with your own extension. A whole new Rascal runtime environment will be started just for your extension. Modules will be loaded, and the services will be connected to LSP callbacks, etc.
7. The ((util::LanguageServer-language)) constructor provides five pieces of meta data:
8. ((util::PathConfig::pathConfig)) is used to configure the Rascal runtime environment for loading your services. This comes in handy when you have third-party dependencies.
9. This is the UI facing name of your language.
10. These are the file extensions that activate the current IDE extension.
11. This is the top module to import into the Rascal runtime environment for this extension.
12. This is the name of the function in the top module which provides a `set[LanguageService]` when called with no arguments.

Then you simply call `main()` and you can open an editor with the file extension `pico`.
The first time the parser will be generated and cached, and when it is finished ((SyntaxHighlighting)) will show you the success of the parse.

That's it!

Now you can continue, for example, with ((SyntaxHighlighting)) or ((HoverService)) as two of 
the ((LanguageServer)) features to try out.

#### Benefits

* repeated calls to ((registerLanguage)) re-initialize your language extension from scratch

#### Pitfalls

* language extensions are not refreshed automatically if you change their implementation. You have to keep calling ((registerLanguage)) for this
* (Accidental) console output, logging and unexpected error messages appear in VScode `OUTPUT` tabs, but these tabs are not automatically floating to the top. It's better to debug your services in the terminal.

