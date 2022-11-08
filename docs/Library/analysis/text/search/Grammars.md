---
title: "module analysis::text::search::Grammars"
---

#### Usage

`import analysis::text::search::Grammars;`


## function analyzerFromGrammar {#analysis-text-search-Grammars-analyzerFromGrammar}

```rascal
Analyzer analyzerFromGrammar(type[&T <: Tree] grammar)

```

## function identifierAnalyzerFromGrammar {#analysis-text-search-Grammars-identifierAnalyzerFromGrammar}

```rascal
Analyzer identifierAnalyzerFromGrammar(type[&T <: Tree] grammar)

```

## function commentAnalyzerFromGrammar {#analysis-text-search-Grammars-commentAnalyzerFromGrammar}

```rascal
Analyzer commentAnalyzerFromGrammar(type[&T <: Tree] grammar)

```

## function tokenizerFromGrammar {#analysis-text-search-Grammars-tokenizerFromGrammar}

```rascal
Tokenizer tokenizerFromGrammar(type[&T <: Tree] grammar)

```

#### Synopsis

Use a generate parser as a Lucene tokenizer. Skipping nothing.

## function identifierTokenizerFromGrammar {#analysis-text-search-Grammars-identifierTokenizerFromGrammar}

```rascal
Tokenizer identifierTokenizerFromGrammar(type[&T <: Tree] grammar)

```

#### Synopsis

Use a generated parser as a Lucene tokenizer, and skip all keywords and punctuation.

## function commentTokenizerFromGrammar {#analysis-text-search-Grammars-commentTokenizerFromGrammar}

```rascal
Tokenizer commentTokenizerFromGrammar(type[&T <: Tree] grammar)

```

#### Synopsis

Use a generated parser as a Lucene tokenizer, and skip all keywords and punctuation.

## function tokens {#analysis-text-search-Grammars-tokens}

```rascal
list[Tree] tokens(amb({Tree x, *_}), bool(Tree) isToken)

default list[Tree] tokens(Tree tok, bool(Tree) isToken)

```

## function isTokenType {#analysis-text-search-Grammars-isTokenType}

```rascal
bool isTokenType(lit(_))

bool isTokenType(cilit(_))

bool isTokenType(lex(_))

bool isTokenType(layouts(_))

bool isTokenType(label(str _, Symbol s))

default bool isTokenType(Symbol _)

```

## function isToken {#analysis-text-search-Grammars-isToken}

```rascal
bool isToken(appl(prod(Symbol s, _, _), _))

bool isToken(char(_))

default bool isToken(Tree _)

```

## function isLexical {#analysis-text-search-Grammars-isLexical}

```rascal
bool isLexical(appl(prod(Symbol s, _, _), _))

default bool isLexical(Tree _)

```

## function isComment {#analysis-text-search-Grammars-isComment}

```rascal
bool isComment(Tree t)

default bool isComment(Tree _)

```

