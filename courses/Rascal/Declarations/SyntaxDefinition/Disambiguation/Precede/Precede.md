---
title: Precede Declaration
keywords:
  - "<<"
  - "!<<"
  - prefer keywords
---

#### Synopsis

A conditional ((Symbol)), constraining the characters that can immediately precede a symbol in the input source text.

#### Syntax

*  `constraint << Symbol` 
*  `constraint !<< Symbol`


where a _constraint_ is any character class, a literal or a keyword non-terminal ((SyntaxDefinition-Symbol)).

#### Types

#### Function

#### Description

Using `!<<`, the parser will not accept the _Symbol_ if it is immediately preceded by the _terminal_ in the input string. If the start of the symbol coincides with start of the inout, the constraint will always succeed and the symbol is accepted.


#### Examples

Typically precede restrictions are used when keywords can become part of identifiers accidentally. 
For example:

```rascal-commands
lexical Id = [a-z]+ \ "let" !>> [a-z]; // <1>
syntax E
  = "let" Id // <2>
  | Id+      // <2>
  ;
layout Spaces = [\ ]*; // <3>
```

* <1> we already have keyword reservation via ((Reserve)) to make sure `let` does not become an identifier by itself
* <1> we also have a ((Follow)) restriction to make sure that identifiers like `ab` are not split into `a` and `b`
* <2> here we see that `leta` could be a single identifier, or `let` followed by `a` and neither the ((Follow)) nor the ((Reserve)) disambiguate this.

```rascal-shell,continue,errors
import ParseTree;
parse(#E, "leta");
```

The solution looks as follows:

```rascal-commands
lexical Id = "let" !<< [a-z]+ \ "let" !>> [a-z]; 
syntax E
  = "let" Id 
  | Id+      
  ;
layout Spaces = [\ ]*; 
```

Or, more generally, if there are more keywords in the language where this might happen:
```rascal-commands
lexical Id = [a-z] !<< [a-z]+ \ "let" !>> [a-z]; 
syntax E
  = "let" Id 
  | Id+      
  ;
layout Spaces = [\ ]*; 
```

The ambiguity is resolved:

```rascal-shell,continue
import ParseTree;
parse(#E, "leta");
```

#### Benefits

* Precede restrictions complement ((Follow)) restrictions such that you do not have to spread follow restrictions over the grammar; namely after every `"let"` you'd have to write: `"let" !>> [a-z]`
* All disambiguations regarding identifiers are focused on the rule for identifiers.
* Precede restrictions are a way to enfore non-empty layout in certain positions in the grammar without having to adapt the definition of `layout`.

#### Pitfalls

* Precede restrictions are powerful. They rigorously filter trees that do not satify their constraints, based on context-information. Therefore they might introduce parse errors in places where you do not expect them.
