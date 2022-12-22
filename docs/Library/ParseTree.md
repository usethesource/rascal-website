---
title: "module ParseTree"
---

#### Usage

`import ParseTree;`

#### Synopsis

Library functions for parse trees.

#### Description


A _concrete syntax tree_ or [parse tree](http://en.wikipedia.org/wiki/Parse_tree) is an ordered, rooted tree that 
represents the syntactic structure of a string according to some formal grammar. 

Most Rascal users will encounter parse trees in the form of concrete values.
Expert users may find the detailed description here useful when writing generic functions on parse trees. 

In Rascal parse trees, the interior nodes are labeled by rules of the grammar, 
while the leaf nodes are labeled by terminals (characters) of the grammar. 

`Tree` is the universal parse tree data type in Rascal and can be used to represent parse trees for any language.

*  `Tree` is a subtype of the type [node](../Rascal/Expressions/Values/Node/index.md).
*  All types (non-terminals) declared in [syntax definitions](../Rascal/Declarations/SyntaxDefinition/index.md) are sub-types of `Tree`.
*  All [concrete syntax expressions](../Rascal/Expressions/ConcreteSyntax/index.md) produce parse trees with a type corresponding to a non-terminal.
*  Trees can be annotated in various ways, see features for [IDE construction](../RascalConcepts/IDEConstruction/index.md).
   Most importantly the `\loc` annotation always points to the source location of any (sub) parse tree.

Parse trees are usually analyzed and constructed using [concrete syntax expressions](../Rascal/Expressions/ConcreteSyntax/index.md)
and [concrete syntax patterns](../Rascal/Patterns/Concrete/index.md).
 
_Advanced users_ may want to create tools that analyze any parse tree, regardless of the 
[syntax definition](../Rascal/Declarations/SyntaxDefinition/index.md) that generated it, you can manipulate them on the abstract level.

A parse tree is of type [Tree](../Library/ParseTree.md#ParseTree-Tree) using the auxiliary types 
[Production](../Library/ParseTree.md#ParseTree-Production), [Symbol](../Library/ParseTree.md#ParseTree-Symbol), [Condition](../Library/ParseTree.md#ParseTree-Condition),
[Attr](../Library/ParseTree.md#ParseTree-Attr), [Associativity](../Library/ParseTree.md#ParseTree-Associativity), [CharRange](../Library/ParseTree.md#ParseTree-CharRange).
Effectively, a parse tree is a nested tree structure of type `Tree`. 

*  Most internal nodes are applications (`appl`) of a `Production` to a list of children `Tree` nodes. 
   `Production` is the abstract representation of a rule in a
   [syntax definition](../Rascal/Declarations/SyntaxDefinition/index.md), 
   which consists of a definition of an alternative for a `Symbol` by a list of `Symbols`.
*  The leaves of a parse tree are always
characters (`char`), which have an integer index in the UTF8 table. 

*  Some internal nodes encode ambiguity (`amb`) by pointing to a set of 
alternative `Tree` nodes.

The `Production` and `Symbol` types are an abstract notation for rules in 
[syntax definitions](../Rascal/Declarations/SyntaxDefinition/index.md),
while the `Tree` type is the actual notation for parse trees. 

Parse trees are called parse forests when they contain `amb` nodes.

You can analyze and manipulate parse trees in three ways:

*  Directly on the `Tree` level, just like any other [algebraic data type](../Rascal/Declarations/AlgebraicDataType/index.md).
*  Using [concrete syntax expressions](../Rascal/Expressions/ConcreteSyntax/index.md)
and [concrete syntax patterns](../Rascal/Patterns/Concrete/index.md).
*  Using [actions](../Rascal/Declarations/SyntaxDefinition/Action/index.md).

The type of a parse tree is the symbol that it's production produces, i.e. `appl(prod(sort("A"),[],{}),[])` has type `A`. Ambiguity nodes 
Each such a non-terminal type has `Tree` as its immediate super-type.

#### Examples




```rascal-shell 
rascal>import ParseTree;
ok
rascal>syntax A = "a";
ok
```
will make the following succeed:
```rascal-shell
rascal>t = parse(#A,"a");
A: (A) `a`
rascal>t := appl(
>>>>>>>  prod(
>>>>>>>    sort("A"),
>>>>>>>    [lit("a")],
>>>>>>>    {}),
>>>>>>>  [appl(
>>>>>>>      prod(
>>>>>>>        lit("a"),
>>>>>>>        [\char-class([range(97,97)])],
>>>>>>>        {}),
>>>>>>>      [char(97)])]);
bool: true
```
You see that the defined non-terminal A ends up as the production for the outermost node. 
As the only child is the tree for recognizing the literal a, which is defined to be a single a from the character-class `[ a ]`.

When we use labels in the definitions, they also end up in the trees.
The following definition

```rascal-shell 
rascal>import ParseTree;
ok
rascal>lexical B= myB:"b";
ok
rascal>lexical C = myC:"c" B bLabel;
ok
```
Will make the following succeed:
```rascal-shell
rascal>t = parse(#C,"cb");
C: (C) `cb`
rascal>t := appl(
>>>>>>>  prod(
>>>>>>>    label(
>>>>>>>      "myC",
>>>>>>>      lex("C")),
>>>>>>>    [
>>>>>>>      lit("c"),
>>>>>>>      label(
>>>>>>>        "bLabel",
>>>>>>>        lex("B"))
>>>>>>>    ],
>>>>>>>    {}),
>>>>>>>  [appl(
>>>>>>>      prod(
>>>>>>>        lit("c"),
>>>>>>>        [\char-class([range(99,99)])],
>>>>>>>        {}),
>>>>>>>      [char(99)]),appl(
>>>>>>>      prod(
>>>>>>>        label(
>>>>>>>          "myB",
>>>>>>>          lex("B")),
>>>>>>>        [lit("b")],
>>>>>>>        {}),
>>>>>>>      [appl(
>>>>>>>          prod(
>>>>>>>            lit("b"),
>>>>>>>            [\char-class([range(98,98)])],
>>>>>>>            {}),
>>>>>>>          [char(98)])])]);
bool: true
```

Here you see that the alternative name is a label around the first argument of `prod` while argument labels become 
labels in the list of children of a `prod`.

#### Benefits


* Parse trees have all the necessary information in them for high-fidelity source code analysis and transformation
* Parse trees contain full definitions of the grammar rules that it applies
* Parse trees can always be "unparsed" to source text again

#### Pitfalls


* For historical reasons the name of the annotation is "loc" and this interferes with the Rascal keyword `loc`
for the type of [source locations](../Rascal/Expressions/Values/Location/index.md). Therefore the annotation name has to be escaped as `\loc` when it is declared or used.
* We are in transition from deprecating the annotation `@\loc` with the keyword field `.src=|unknown:///|`. Currently the
run-time already uses `.src` while the source code still uses `@\loc`.


## data Tree {#ParseTree-Tree}

```rascal
data Tree  
     = appl(Production prod, list[Tree] args)
     | cycle(Symbol symbol, int cycleLength)
     | amb(set[Tree] alternatives)
     | char(int character)
     ;
```


#### Synopsis

The Tree data type as produced by the parser.

#### Description

A `Tree` defines the trees normally found after parsing; additional constructors exist for execptional cases:

* ❶  Parse tree constructor when parse succeeded.
* ❷  Cyclic parsetree.
* ❸  Ambiguous subtree.
* ❹  A single character. 

## data Production {#ParseTree-Production}

```rascal
data Production  
     = prod(Symbol def, list[Symbol] symbols, set[Attr] attributes)
     | regular(Symbol def)
     ;
```


#### Synopsis

Production in ParseTrees 

#### Description

The type `Production` is introduced in [Type](../Library/Type.md), see [Production](../Library/Type.md#Type-Production). Here we extend it with the symbols
that can occur in a ParseTree. We also extend productions with basic combinators allowing to
construct ordered and un-ordered compositions, and associativity groups.

* ❶  A `prod` is a rule of a grammar, with a defined non-terminal, a list
    of terminal and/or non-terminal symbols and a possibly empty set of attributes.
  
* ❷  A `regular` is a regular expression, i.e. a repeated construct.

* ❸  `priority` means operator precedence, where the order of the list indicates the binding strength of each rule;
* ❹  `assoc`  means all alternatives are acceptable, but nested on the declared side;
* ❺  `reference` means a reference to another production rule which should be substituted there,
    for extending priority chains and such.

## data Production {#ParseTree-Production}

```rascal
data Production  
     = \priority(Symbol def, list[Production] choices)
     | \associativity(Symbol def, Associativity \assoc, set[Production] alternatives)
     | \reference(Symbol def, str cons)
     ;
```

## data Attr {#ParseTree-Attr}

```rascal
data Attr  
     = \bracket()
     | \assoc(Associativity \assoc)
     ;
```


#### Synopsis

Attributes in productions.

#### Description

An `Attr` (attribute) documents additional semantics of a production rule. Neither tags nor
brackets are processed by the parser generator. Rather downstream processors are
activated by these. Associativity is a parser generator feature though. 

## data Associativity {#ParseTree-Associativity}

```rascal
data Associativity  
     = \left()
     | \right()
     | \assoc()
     | \non-assoc()
     ;
```


#### Synopsis

Associativity attribute. 
 
#### Description

Associativity defines the various kinds of associativity of a specific production.

## data CharRange {#ParseTree-CharRange}

```rascal
data CharRange  
     = range(int begin, int end)
     ;
```


#### Synopsis

Character ranges and character class
#### Description

*  `CharRange` defines a range of characters.
*  A `CharClass` consists of a list of characters ranges.

## alias CharClass {#ParseTree-CharClass}

```rascal
list[CharRange]

```

## data Symbol {#ParseTree-Symbol}

```rascal
data Symbol  
     = \start(Symbol symbol)
     ;
```


#### Synopsis

Symbols that can occur in a ParseTree

#### Description

The type `Symbol` is introduced in [Type](../Library/Type.md), see [Symbol](../Library/Type.md#Type-Symbol), to represent the basic Rascal types,
e.g., `int`, `list`, and `rel`. Here we extend it with the symbols that may occur in a ParseTree.

* ❶   The `start` symbol wraps any symbol to indicate that it is a start symbol of the grammar and
        may occur at the root of a parse tree.
* ❷   Context-free non-terminal
* ❸   Lexical non-terminal
* ❹   Layout symbols
* ❺   Terminal symbols that are keywords
* ❻   Parameterized context-free non-terminal
* ❼  Parameterized lexical non-terminal
* ❽   Terminal.
* ❾   Case-insensitive terminal.
* ❶⓿  Character class
* ❶❶  Empty symbol
* ❶❷  Optional symbol
* ❶❸  List of one or more symbols without separators
* ❶❹  List of zero or more symbols without separators
* ❶❺  List of one or more symbols with separators
* ❶❻  List of zero or more symbols with separators
* ❶❼  Alternative of symbols
* ❶❽  Sequence of symbols
* ❶❾  Conditional occurrence of a symbol.

## data Symbol {#ParseTree-Symbol}

```rascal
data Symbol  
     = \sort(str name)
     | \lex(str name)
     | \layouts(str name)
     | \keywords(str name)
     | \parameterized-sort(str name, list[Symbol] parameters)
     | \parameterized-lex(str name, list[Symbol] parameters)
     ;
```

## data Symbol {#ParseTree-Symbol}

```rascal
data Symbol  
     = \lit(str string)
     | \cilit(str string)
     | \char-class(list[CharRange] ranges)
     ;
```

## data Symbol {#ParseTree-Symbol}

```rascal
data Symbol  
     = \empty()
     | \opt(Symbol symbol)
     | \iter(Symbol symbol)
     | \iter-star(Symbol symbol)
     | \iter-seps(Symbol symbol, list[Symbol] separators)
     | \iter-star-seps(Symbol symbol, list[Symbol] separators)
     | \alt(set[Symbol] alternatives)
     | \seq(list[Symbol] symbols)
     ;
```

## data Symbol {#ParseTree-Symbol}

```rascal
data Symbol  
     = \conditional(Symbol symbol, set[Condition] conditions)
     ;
```

## function subtype {#ParseTree-subtype}

```rascal
bool subtype(Symbol::\sort(_), Symbol::\adt("Tree", _))

```

## data Condition {#ParseTree-Condition}

```rascal
data Condition  
     = \follow(Symbol symbol)
     | \not-follow(Symbol symbol)
     | \precede(Symbol symbol)
     | \not-precede(Symbol symbol)
     | \delete(Symbol symbol)
     | \at-column(int column)
     | \begin-of-line()
     | \end-of-line()
     | \except(str label)
     ;
```


#### Synopsis

Datatype for declaring preconditions and postconditions on symbols

#### Description

A `Condition` can be attached to a symbol; it restricts the applicability
of that symbol while parsing input text. For instance, `follow` requires that it
is followed by another symbol and `at-column` requires that it occurs 
at a certain position in the current line of the input text.

## function priority {#ParseTree-priority}

```rascal
Production priority(Symbol s, [*Production a, priority(Symbol _, list[Production] b), *Production c])

```


#### Synopsis

Nested priority is flattened.

## function associativity {#ParseTree-associativity}

```rascal
Production associativity(Symbol s, Associativity as, {*Production a, choice(Symbol t, set[Production] b)})

Production associativity(Symbol rhs, Associativity a, {associativity(rhs, Associativity b, set[Production] alts), *Production rest})

Production associativity(Symbol s, Associativity as, {*Production a, priority(Symbol t, list[Production] b)})

Production associativity(Symbol rhs, Associativity a, set[Production] rest)

```


#### Synopsis

Normalization of associativity.

#### Description

* The [choice](../Library/Type.md#Type-choice) constructor under associativity is flattened.
* Nested (equal) associativity is flattened.
* [priority](../Library/ParseTree.md#ParseTree-priority) under an associativity group defaults to choice.

## function parse {#ParseTree-parse}

```rascal
&T<:Tree parse(type[&T<:Tree] begin, str input, bool allowAmbiguity=false, bool hasSideEffects=false, set[Tree(Tree)] filters={})

&T<:Tree parse(type[&T<:Tree] begin, str input, loc origin, bool allowAmbiguity=false, bool hasSideEffects=false, set[Tree(Tree)] filters={})

&T<:Tree parse(type[&T<:Tree] begin, loc input, bool allowAmbiguity=false, bool hasSideEffects=false, set[Tree(Tree)] filters={})

```


#### Synopsis

Parse input text (from a string or a location) and return a parse tree.

#### Description

*  Parse a string and return a parse tree.
*  Parse a string and return a parse tree, `origin` defines the original location of the input.
*  Parse the contents of resource input and return a parse tree.

The parse either throws ParseError exceptions or returns parse trees of type `Tree`. See [[ParseTree]].

The `allowAmbiguity` flag dictates the behavior of the parser in the case of ambiguity. When `allowAmbiguity=true` 
the parser will construct ambiguity clusters (local sets of parse trees where the input string is ambiguous). If it is `false`
the parser will throw an `Ambiguous` exception instead. An `Ambiguous` exception is comparable to a ParseError exception then.
The latter option terminates much faster, i.e. always in cubic time, and always linear in the size of the intermediate parse graph, 
while constructing ambiguous parse forests may grow to O(n^p+1), where p is the length of the longest production rule and n 
is the length of the input.

The `filters` set contains functions which may be called optionally after the parse algorithm has finished and just before
the Tree representation is built. The set of functions contain alternative functions, only on of them is successfully applied
to each node in a tree. If such a function fails to apply, the other ones are tried. There is no fixed-point computation, so
composed filters must be added to the set of filters programmatically. Post-parse filtering is best done at this stage and
not later on the Tree representation for efficiency reasons. Namely, the size of the parse graph before Tree construction
is still cubic due to "binarized" sharing of intermediate nodes, while after Tree construction the forest may obtain
a size in O(n^p+1) where n is the length of the input and p is the length of the longest syntax rule. Filtering using
the `filters` parameter, on the other hand, may very well cut the forest quickly down to even a linear size and result in 
an efficient overall parsing algorithm.

The `hasSideEffects` flag is normally set to false. When the `filters` functions have side-effects to
remove ambiguity, this option must be set to `true` to ensure correct behavior. A side-effect of filter functions is
typically the construction of a symbol table and the removal (see [[Statements/Filter]]) of syntax trees which refer to 
undefined symbols. In such a case `hasSideEffects` must be set to `true` for correctness' sake. If its set to `false`
then the algorithm assumes tree construction is context-free and it can memoize the results of shared intermediate graph nodes.
The tree construction algorithm is effectively always worst case
polynomial in O(n^p+1) --p being the length of the longest syntax rule-- when `hasSideEffects` is true, but may be linear when set 
to false. So this is quite an important flag to consider. 


#### Examples


```rascal-shell ,error
rascal>import demo::lang::Exp::Concrete::NoLayout::Syntax;
ok
rascal>import ParseTree;
ok
```
Seeing that `parse` returns a parse tree:

```rascal-shell ,continue,error
rascal>parse(#Exp, "2+3");
Exp: (Exp) `2+3`
```
Catching a parse error:

```rascal-shell ,continue,error
rascal>import IO;
ok
rascal>try {
>>>>>>>  Exp e = parse(#Exp, "2@3");
>>>>>>>}
>>>>>>>catch ParseError(loc l): {
>>>>>>>  println("I found a parse error at line <l.begin.line>, column <l.begin.column>");
>>>>>>>}
I found a parse error at line 1, column 1
ok
```

## function parser {#ParseTree-parser}

```rascal
&T (value input, loc origin) parser(type[&T] grammar, bool allowAmbiguity=false, bool hasSideEffects=false, bool firstAmbiguity=false, set[Tree(Tree)] filters={})

```


#### Synopsis

Generates a parser from an input grammar.

#### Description

This builtin function wraps the Rascal parser generator by transforming a grammar into a parsing function.

The resulting parsing function has the following overloaded signature:

   * Tree parse(str input, loc origin);
   * Tree parse(loc input, loc origin);

So the parse function reads either directly from a str or via the contents of a loc. It also takes a `origin` parameter
which leads to the prefix of the `src` fields of the resulting tree.

The parse function behaves differently depending of the given keyword parameters:
     *  `allowAmbiguity`: if true then no exception is thrown in case of ambiguity and a parse forest is returned. if false,
     *                    the parser throws an exception during tree building and produces only the first ambiguous subtree in its message.
     *                    if set to `false`, the parse constructs trees in linear time. if set to `true` the parser constructs trees in polynomial time.
     * 
     *  `hasSideEffects`: if false then the parser is a lot faster when constructing trees, since it does not execute the parse _actions_ in an
     *                    interpreted environment to make side effects (like a symbol table) and it can share more intermediate results as a result.
     *  
     *  `firstAmbiguity`: if true, then the parser returns the subforest for the first (left-most innermost) ambiguity instead of a parse tree for
     *                    the entire input string. This is for grammar debugging purposes a much faster solution then waiting for an entire 
     *                    parse forest to be constructed in polynomial time.

## function parsers {#ParseTree-parsers}

```rascal
&U (type[&U] nonterminal, value input, loc origin) parsers(type[&T] grammar, bool allowAmbiguity=false, bool hasSideEffects=false, bool firstAmbiguity=false,  set[Tree(Tree)] filters={})

```


#### Synopsis

Generates parsers from a grammar (reified type), where all non-terminals in the grammar can be used as start-symbol.

#### Description

This parser generator behaves the same as the `parser` function, but it produces parser functions which have an additional
nonterminal parameter. This can be used to select a specific non-terminal from the grammar to use as start-symbol for parsing.
 

## function firstAmbiguity {#ParseTree-firstAmbiguity}

```rascal
Tree firstAmbiguity(type[&T<:Tree] begin, str input)

Tree firstAmbiguity(type[&T<:Tree] begin, loc input)

```


.Synopsis parse the input but instead of returning the entire tree, return the trees for the first ambiguous substring.

#### Description

This function is similar to the [[parse]] function in its functionality. However, in case of serious ambiguity parse
could be very slow. This function is much faster, because it does not try to construct an entire forest and thus avoids
the cost of constructing nested ambiguity clusters. 

If the input sentence is not ambiguous after all, simply the entire tree is returned.

## function unparse {#ParseTree-unparse}

```rascal
str unparse(Tree tree)

```


#### Synopsis

Yield the string of characters that form the leafs of the given parse tree.

#### Description

`unparse` is the inverse function of [parse](../Library/ParseTree.md#ParseTree-parse), i.e., for every syntactically correct string _TXT_ of
type `S`, the following holds:
```rascal
unparse(parse(#S, _TXT_)) == _TXT_
```

#### Examples


```rascal-shell 
rascal>import demo::lang::Exp::Concrete::NoLayout::Syntax;
ok
rascal>import ParseTree;
ok
```
First parse an expression, this results in a parse tree. Then unparse this parse tree:

```rascal-shell ,continue
rascal>unparse(parse(#Exp, "2+3"));
str: "2+3"
```

## function printSymbol {#ParseTree-printSymbol}

```rascal
str printSymbol(Symbol sym, bool withLayout)

```

## function implode {#ParseTree-implode}

```rascal
&T<:value implode(type[&T<:value] t, Tree tree)

```


#### Synopsis

Implode a parse tree according to a given (ADT) type.

#### Description

Given a grammar for a language, its sentences can be parsed and the result is a parse tree
(or more precisely a value of type `Tree`). For many applications this is sufficient
and the results are achieved by traversing and matching them using concrete patterns.

In other cases, the further processing of parse trees is better done in a more abstract form.
The [abstract syntax](http://en.wikipedia.org/wiki/Abstract_syntax) for a language is a
data type that is used to represent programs in the language in an _abstract_ form.
Abstract syntax has the following properties:

*  It is "abstract" in the sense that it does not contain textual details such as parentheses,
  layout, and the like.
*  While a language has one grammar (also known as, _concrete syntax_) it may have several abstract syntaxes
  for different purposes: type analysis, code generation, etc.


The function `implode` bridges the gap between parse tree and abstract syntax tree.
Given a parse tree and a Rascal type it traverses them simultaneously and constructs
an abstract syntax tree (a value of the given type) as follows:

*  Literals, layout and empty (i.e. ()) nodes are skipped.

*  Regular */+ lists are imploded to `list`s or `set`s depending on what is 
  expected in the ADT.

*  Ambiguities are imploded to `set`s.

*  If the expected type is `str` the tree is unparsed into a string. This happens for both 
  lexical and context-free parse trees.

*  If a tree's production has no label and a single AST (i.e. non-layout, non-literal) argument
  (for instance, an injection), the tree node is skipped, and implosion continues 
  with the lone argument. The same applies to bracket productions, even if they
  are labeled.

*  If a tree's production has no label, but more than one argument, the tree is imploded 
  to a tuple (provided this conforms to the ADT).

*  Optionals are imploded to booleans if this is expected in the ADT.
  This also works for optional literals, as shown in the example below.

*  An optional is imploded to a list with zero or one argument, iff a list
  type is expected.

*  If the argument of an optional tree has a production with no label, containing
  a single list, then this list is spliced into the optional list.

*  For trees with (cons-)labeled productions, the corresponding constructor
  in the ADT corresponding to the non-terminal of the production is found in
  order to make the AST.
  
*  If the provided type is `node`, (cons-)labeled trees will be imploded to untyped `node`s.
  This means that any subtrees below it will be untyped nodes (if there is a label), tuples of 
  nodes (if a label is absent), and strings for lexicals. 

*  Unlabeled lexicals are imploded to str, int, real, bool depending on the expected type in
  the ADT. To implode lexical into types other than str, the PDB parse functions for 
  integers and doubles are used. Boolean lexicals should match "true" or "false". 
  NB: lexicals are imploded this way, even if they are ambiguous.

*  If a lexical tree has a cons label, the tree imploded to a constructor with that name
  and a single string-valued argument containing the tree's yield.


An `IllegalArgument` exception is thrown if during implosion a tree is encountered that cannot be
imploded to the expected type in the ADT. As explained above, this function assumes that the
ADT type names correspond to syntax non-terminal names, and constructor names correspond 
to production labels. Labels of production arguments do not have to match with labels
 in ADT constructors.

Finally, source location fields are propagated as keyword fields on constructor ASTs. 
To access them, the user is required to explicitly declare a keyword field on all
ADTs used in implosion. In other words, for every ADT type `T`, add:

```rascal
data T(loc location=|unknown);
```

#### Examples

Here are some examples for the above rules.

.Example for rule 5

Given the grammar
```rascal
syntax IDTYPE = Id ":" Type;
syntax Decls = decls: "declare" {IDTYPE ","}* ";";
```
    
`Decls` will be imploded as:
```rascal
data Decls = decls(list[tuple[str,Type]]);
```
(assuming Id is a lexical non-terminal).   

.Example for rule 6

Given the grammar
```rascal
syntax Formal = formal: "VAR"? {Id ","}+ ":" Type;
```
The corresponding ADT could be:
```rascal
data Formal = formal(bool, list[str], Type);
```

.Example for rule 8

Given the grammar
```rascal
syntax Tag = "[" {Modifier ","}* "]";
syntax Decl = decl: Tag? Signature Body;
```
In this case, a `Decl` is imploded into the following ADT:
```rascal
data Decl = decl(list[Modifier], Signature, Body);  
```

.Example for rule 9

Given the grammar
```rascal
syntax Exp = left add: Exp "+" Exp;
```
Can be imploded into:
```rascal
data Exp = add(Exp, Exp);
```

## data TreeSearchResult {#ParseTree-TreeSearchResult}

```rascal
data TreeSearchResult[&T<:Tree]  
     = treeFound(&T tree)
     | treeNotFound()
     ;
```


#### Synopsis

Tree search result type for [tree at](../Library/ParseTree.md#ParseTree-treeAt).

## function treeAt {#ParseTree-treeAt}

```rascal
TreeSearchResult[&T<:Tree] treeAt(type[&T<:Tree] t, loc l, Tree a:appl(_, _))

default TreeSearchResult[&T<:Tree] treeAt(type[&T<:Tree] t, loc l, Tree root)

```


#### Synopsis

Select the innermost Tree of a given type which is enclosed by a given location.

#### Description

## function sameType {#ParseTree-sameType}

```rascal
bool sameType(label(_,Symbol s),Symbol t)

bool sameType(Symbol s,label(_,Symbol t))

bool sameType(Symbol s,conditional(Symbol t,_))

bool sameType(conditional(Symbol s,_), Symbol t)

bool sameType(Symbol s, s)

default bool sameType(Symbol s, Symbol t)

```

## function isNonTerminalType {#ParseTree-isNonTerminalType}

```rascal
bool isNonTerminalType(Symbol::\sort(str _))

bool isNonTerminalType(Symbol::\lex(str _))

bool isNonTerminalType(Symbol::\layouts(str _))

bool isNonTerminalType(Symbol::\keywords(str _))

bool isNonTerminalType(Symbol::\parameterized-sort(str _, list[Symbol] _))

bool isNonTerminalType(Symbol::\parameterized-lex(str _, list[Symbol] _))

bool isNonTerminalType(Symbol::\start(Symbol s))

default bool isNonTerminalType(Symbol s)

```


#### Synopsis

Determine if the given type is a non-terminal type.

