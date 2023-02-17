---
title: Follow Declaration
keywords:
  - ">>"
  - "!>>"
  - follow
  - longest match
  - first match
  - maximal munch
  - shift before reduce
  - dangling else
---

#### Synopsis

A conditional ((Symbol)), constraining the characters that can immediately follow a symbol in the input source text.

#### Syntax

*  `Symbol >> constraint` 
*  `Symbol !>> constraint`

where a _constraint_ is any character class, a literal or a keyword non-terminal ((SyntaxDefinition-Symbol)).

#### Types

#### Function

#### Description

Using `!>>`, the parser will not accept the _Symbol_ if it is immediately followed by the _terminal_ in the input string. If the end of the symbol coincides with end-of-file, the constraint will always succeed and the symbol is accepted.

#### Examples

First match is often important in the context of nullables (such as empty lists). Consider the following:

```rascal-commands
syntax Program = "{" "statement"* "}";
layout Spaces = [\ ]*;
```

Even an input with a single space is ambiguous, because it can go either before or after the empty lists of `statement`:

```rascal-shell,continue,errors
import ParseTree;
parse(#Program, "{ }");
```

To fix this we add a follow restriction that will not accept an empty `Spaces` if we have a space to the right of it, and so it must "eat" the space:
```rascal-commands
syntax Program = "{" "statement"* "}";
layout Spaces = [\ ]* !>> [\ ];
```

```rascal-shell,continue
import ParseTree;
parse(#Program, "{ }");
```

Another example is typical for optional whitespace:
```rascal-shell,continue
lexical Id = [a-z]+;
syntax Program = Id+;
layout Spaces = [\ ]*;
```

Here we see that even two a's could be one or two elements. One longer Id `ab` or two shorter `a` and `b`
```rascal-shell,continue,errors
import ParseTree;
parse(#Program, "ab");
```

We solve this by declaring longest match for `Id`:
```rascal-shell,continue
lexical Id = [a-z]+ !>> [a-z];
syntax Program = Id+;
layout Spaces = [\ ]*;
```

And the ambiguity is gone:
```rascal-shell,continue
import ParseTree;
parse(#Program, "ab");
```

#### Benefits

* Longest and first match are not implicit heuristics but declarative disambiguation filters

#### Pitfalls

* Follow restrictions can filter all of the trees and leave you with a parse error
* Follow restictions bring us outside of the realm of context-free grammars, so when constructing new parse tree values by visiting and substitution (rewriting) it is possible to construct trees that are not strictly in the language. The type system of Rascal only covers non-terminal substitutability and not the additional constraints of the disambiguation filters. 

