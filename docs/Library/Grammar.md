---
title: "module Grammar"
---

#### Usage

`import Grammar;`


#### Synopsis

A simple but effective internal format for the representation of context-free grammars.


## data GrammarModule {#Grammar-GrammarModule}

```rascal
data GrammarModule  
     = \module(str name, set[str] imports, set[str] extends, Grammar grammar)
     ;
```

## data GrammarDefinition {#Grammar-GrammarDefinition}

```rascal
data GrammarDefinition  
     = \definition(str main, map[str name, GrammarModule \mod] modules)
     ;
```

## function grammar {#Grammar-grammar}

* ``Grammar grammar(set[Symbol] starts, set[Production] prods)``
* ``Grammar grammar(type[&T <: Tree] sym)``

## data Item {#Grammar-Item}

```rascal
data Item  
     = item(Production production, int index)
     ;
```


#### Synopsis

An item is an index into the symbol list of a production rule.

## function compose {#Grammar-compose}

* ``Grammar compose(Grammar g1, Grammar g2)``


#### Synopsis

Compose two grammars.

#### Description

Compose two grammars by adding the rules of g2 to the rules of g1.
The start symbols of g1 will be the start symbols of the resulting grammar.

## function extends {#Grammar-extends}

* ``rel[str, str] extends(GrammarDefinition def)``

## function imports {#Grammar-imports}

* ``rel[str,str] imports(GrammarDefinition def)``

