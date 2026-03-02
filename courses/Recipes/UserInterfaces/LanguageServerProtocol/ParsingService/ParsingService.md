---
title: Parsing Service
sidebar_position: 1
---

#### Synopsis

A parser is the first and foremost thing you need for constructing an LSP server/IDE.

#### Examples

Type in a ((((Rascal:SyntaxDefinition)))), also known as a context-free grammar, for your language.

Here is an example that defines a very small programming language called "Pico". We will use
this language throughout all recipes for the ((LanguageServerProtocol)).

```rascal-include
demo::lang::Pico::Syntax
```

It's important that you import the `ParseTree` module to be able to call the ((ParseTree-parse)) function:
```rascal-commands
import ParseTree;
```

and then you can write your own parser function that wraps the `#start[Program]` non-terminal:
```rascal-commands
import demo::lang::Pico::Syntax;
start[Program] parsePico(str contents, loc origin) 
    = parse(#start[Program], contents, origin);
```

The parse function must take a `start` non-terminal as parameter (so not just `#Program`), because otherwise
spaces, newlines and comments before and after the main `Program` content will lead to parse errors.

With the above function every parse error will lead to an error diagnostic in the editor, _and_ 
syntax highlighting only works if there is no parse error. To help your users a bit, you can 
activate parse error recovery:

```rascal-commands
import demo::lang::Pico::Syntax;
start[Program] parsePico(str contents, loc origin) 
    = parse(#start[Program], contents, origin, allowRecovery=true);
```
Now syntax highlighting will indicate which part of the file has been recognized and
which part of the file has not. The parse errors will still appear in the Diagnostics view.

It is always a good idea to test your parser in the terminal:
```rascal-shell
parsePico("begin a: natural; a := 42 end", |demo:///|)
```
And to find out what a parse error looks like:
```rascal-shell,errors
parsePico("begin a: natural; a := 4$2 end", |demo:///|)
```

Or you could write a test function for it, for future reference:
```rascal-commands
test bool testPicoParser() {
    return start[Program] _ := parsePico("begin a: natural; a := 42 end", |demo:///|);
}
test bool testErrorPicoParser() {
    try {
         parsePico("begin a: natural; a := 4$2 end", |demo:///|);
         return false;
    }
    catch ParseError(_):
        return true;
    }
}
```

In general a ((ParsingService)) is simply a function that satisfies the ((util::LanguageServer-Parser)) signature.

Now let's move on to [registering your language with the IDE]((RegisterYourLanguage)) and
run your own language server.



