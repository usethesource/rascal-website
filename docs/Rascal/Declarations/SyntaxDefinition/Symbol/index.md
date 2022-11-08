---
title: Symbol
keywords:
  - "\\\""
  - "'"
  - "["
  - "]"
  - "!"
  - "-"
  - "||"
  - "&&"
  - "("
  - ")"
  - "?"
  - "+"
  - "*"
  - "{"
  - "}"
  - "|"
  - "()"
  - "^"
  - "@"
  - ">>"
  - "!>>"
  - "<<"
  - "!<<"
---

#### Synopsis

The symbols that can occur in a syntax definition.

#### Syntax

Nonterminal symbols are identifier names that _start with an uppercase letter_.


| Symbol                      | Description |
| --- | --- |
| `Symbol fieldName`      | Any symbol can be labeled with a field name that _starts with a lowercase letter_ |



The following literal symbols and character classes are defined:



| Symbol                        | Description |
| --- | --- |
|`"stringliteral"`            | Literal string |
|`'stringliteral'`            | Case-insensitive literal string |
|`[range₁ range₂ ... ]` | Character class |




The following operations on character classes can be composed arbitrarily:


| Class                        | Description  |
| --- | --- |
|`!Class`                    | Complement of `Class` with respect to the UTF8 universe of characters |
| `Class₁ - Class₂`    | Difference of character classes `Class₁` and `Class₂`              |
| `Class₁ \|\| Class₂` | Union of character classes `Class₁` and `Class₂`                   |
| `Class₁ && Class₂`   | Intersection of character classes `Class₁` and `Class₂`            |
| `(Class)`                  | Brackets for defining application order of class operators               |




The following regular expressions can be constructed over [Symbol](../../../../Rascal/Declarations/SyntaxDefinition/Symbol/index.md)s:


| Symbol                                 | Description                                                          |
| --- | --- |
| `Symbol?`                            | Optional _Symbol_                                                    |
| `Symbol+`                            | Non-empty list of _Symbol_s                                          |
| `Symbol*`                            | Possibly empty list of _Symbol_s.                                    |
| `{Symbol₁ Symbol₂}+`           | Non-empty list of _Symbol₁_ separated by _Symbol₂_                 |
| `{Symbol₁ Symbol₂}*`           | Possibly empty list of _Symbol₁_ separated by _Symbol₂_.           |
| `(Symbol₁ Symbol₂ ... )`       | Embedded sequence of symbols                                         |
| `(Symbol₁ \| Symbol₂ \| ... )` | Embedded choice of alternative symbols                               |
| `()`                                   | The anonymous non-terminal for the language with the empty string   |




Inline conditions ([Disambiguation](../../../../Rascal/Declarations/SyntaxDefinition/Disambiguation/index.md)s) can be added to symbols to constrain their acceptability:


| Disambiguation                             | Description                                                 |
| --- | --- |
| `Symbol _`                 | _Symbol_ ends at end of line or end of file                     |
| `^Symbol`                  | _Symbol_ starts at begin of line                                |
| `Symbol @ ColumnIndex`   | _Symbol_ starts at certain column index.                        |
| `Symbol₁ >> Symbol₂`   | _Symbol₁_ must be (directly) followed by _Symbol₂_            |
| `Symbol₁ !>> Symbol₂`  | _Symbol₁_ must _not_ be (directly) followed by _Symbol₂_      |
| `Symbol₁ << Symbol₂`   | _Symbol₂_ must be (directly) preceded by _Symbol₁_            |
| `Symbol₁ !<< Symbol₂`  | _Symbol₂_ must _not_ be (directly) preceded by _Symbol₁_      |
| `Symbol₁ \ Symbol₂`   | _Symbol₁_ must not be in the language defined by _Symbol₂_    |




Symbols can be composed arbitrarily.

#### Types

Every non-terminal symbol is a type.

#### Description

The basic symbols are the non-terminal name and the labeled non-terminal name. 
These refer to the names defined by [Syntax Definition](../../../../Rascal/Declarations/SyntaxDefinition/index.md). 
You can use any defined non-terminal name in any other definition (lexical in syntax, syntax in lexical, etc). 

Then we have literals and character classes to define the _terminals_ of a grammar. 
When you use a literal such as `"begin"`, Rascal will produce a definition for it down to the character level before generating a parser: `syntax "begin" = [b][e][g][i][n];`. This effect will be visible in the [Parse Trees](../../../../Rascal/Declarations/SyntaxDefinition/ParseTrees/index.md) produced by the parser. For case insensitive literals you will see a similar effect; the use of `'begin'` produces `syntax 'begin' = [bB][eE][gG][iI][nN]`.

Character classes have the same escaping conventions as characters in a [String](../../../../Rascal/Expressions/Values/String/index.md) literal, but spaces and newlines are meaningless and have to be escaped and the `[` and `]` brackets as well as the dash `-` need escaping. For example, one writes `[\[ \] \ \n\-]` for a class that includes the open and close square brackets and a space, a newline and a dash. Character classes support ranges as in `[a-zA-Z0-9]`. Please note about character classes that:

*  the operations on character classes are executed before parser generation time. You will not find explicit representation of these operations in [parse tree](../../../../Library/ParseTree.md), but rather their net effect as resulting character classes. 
*  Character classes are also ordered by Rascal and overlapping ranges are merged before parsers are generated. Equality between character classes is checked after this canonicalization.
*  Although all [./Symbol](../../../../Rascal/Declarations/SyntaxDefinition/Symbol/index.md)s are type constructors, the character class operators are not allowed in types.


The other symbols either _generate_ for you parts of the construction of a grammar, or they _constrain_ the rules of the grammar to generate a smaller set of trees as [Disambiguation](../../../../Rascal/Declarations/SyntaxDefinition/Disambiguation/index.md)s.

The _generative symbols_ are referred to as the _regular symbols_. These are like named non-terminals, except that they are defined implicitly and interpreted by the parser generator to produce a parser that can recognize a symbol optionally, iteratively, alternatively, sequentially, etc. You also need to know this about the regular symbols:

*  In [Parse Trees](../../../../Rascal/Declarations/SyntaxDefinition/ParseTrees/index.md) you will find special nodes for the regular expression symbols that hide _how_ these were recognized. 
*  [Patterns](../../../../Rascal/Patterns/index.md) using [./Concrete Syntax](../../../../Rascal/Expressions/ConcreteSyntax/index.md) have special semantics for the regular symbols (list matching, separator handling, ignoring layout, etc.).
*  Regular symbols are not allowed in _keyword_ [Syntax Definition](../../../../Rascal/Declarations/SyntaxDefinition/index.md)s
*  Depending on their occurrence in a _lexical_, _syntax_ or _layout_ [Syntax Definition](../../../../Rascal/Declarations/SyntaxDefinition/index.md) 
   the semantics of regular symbols changes. In the _syntax_ context, layout non-terminals will be woven 
   into the regular symbol, but not in the _lexical_ and _layout_ contexts. 
   For example, a `Symbol\*` in a syntax definition such as `syntax X = A*;` will be processed to `syntax X = `{A Layout}*`. Similarly, `syntax X = {A B}+;` will be processed to `syntax X = {A (Layout B Layout)}+;`. 


The _constraint_ symbols are specially there to deal with the fact that Rascal does not generate a scanner. There are no a priori disambiguation rules such as prefer keywords or longest match. Instead, you should use the constraint symbols to define the effect of keyword reservation and longest match. 

*  It is important to note that these constraints work on a character-by-character level in the input stream. So, a follow constraint such as `A >> [a-z]` means that the character immediately following a recognized A must be in the range `[a-z]`.
*  Read more on the constraint symbols via [Disambiguation](../../../../Rascal/Declarations/SyntaxDefinition/Disambiguation/index.md)s.

#### Examples


A character class that defines all alphanumeric characters:
```rascal
lexical AlphaNumeric = [a-zA-Z0-9];
```
A character class that defines anything except quotes:
```rascal
lexical AnythingExceptQuote = ![\"];
```
An identifier class with longest match (can not be followed immediately by [a-z]):
```rascal
lexical Id = [a-z]+ !>> [a-z];
```
An identifier class with longest match and first match (can not be preceded or followed by [a-z]):

```rascal-shell ,continue
rascal>lexical Id = [a-z] !<< [a-z]+ !>> [a-z];
ok
```
An identifier class with some reserved keywords and longest match:
```rascal
lexical Id = [a-z]+ !>> [a-z] \ "if" \ "else" \ "fi";
```
An optional else branch coded using sequence and optional symbols:
```rascal
syntax Statement = "if" Expression "then" Statement ("else" Statement)? "fi";
```
A block of statements separated by semicolons:
```rascal
syntax Statement = "{" {Statement ";"}* "}";
```
A declaration with an embedded list of alternative modifiers and a list of typed parameters:
```rascal
syntax Declaration = ("public" | "private" | "static" | "final")* Type Id "(" {(Type Id) ","}* ")" Statement;
```

#### Benefits

*  The symbol language is very expressive and can lead to short definitions of complex syntactic constructs.
*  There is no built-in longest match for iterators, which makes syntax definitions open to languages that do not have longest match.
*  There is no built-in keyword preference or reservation, which makes syntax definitions open to language composition and legacy languages.

#### Pitfalls

*  By nesting too many symbols definitions can be become hard to understand. 
*  By nesting too many symbols pattern matching and term construction becomes more complex. Extra non-terminals and rules with meaningful names can make a language specification more manageable. 
*  The lack of automatic longest match and prefer keyword heuristics (you have to define it yourself), sometimes leads to unexpected ambiguity. See [Disambiguation](../../../../Rascal/Declarations/SyntaxDefinition/Disambiguation/index.md).


