---
title: "module analysis::text::search::Lucene"
---

#### Usage

`import analysis::text::search::Lucene;`

#### Synopsis

Simple interface to the Lucene text analysis library

#### Description


This module wraps the Apache Lucene framework for text analysis. 

* It integrates deeply by
providing the interfaces for the analysis extension points of Lucene via Rascal callback functions: Analyzers, Tokenizers, Filters.
* It provides access to the full library of Lucene's text analyzers via their class names.
* It is a work in progress. Some configurability of Lucene is not yet exposed, for example
programmable weights for fields and the definition of similarity functions per document field. Also Query expressions are not yet exposed.
* This wrapper provides full abstraction over source locations. Both the directory of the index
as well as the locations of input documents are expressed using any existing rascal `loc`. 


## data Document {#analysis-text-search-Lucene-Document}

```rascal
data Document  
     = document(loc src, real score=.0)
     ;
```

#### Synopsis

A Lucene document has a src and an open set of keyword fields which are also indexed

#### Description


A lucene document has a `src` origin and an open set of keyword fields. 
Add as many keyword fields to a document as you want. They will be added to the Lucene document as "Fields".

* fields of type `str` will be stored and indexed as-is
* fields of type `loc` will be indexed but not stored

## data Analyzer {#analysis-text-search-Lucene-Analyzer}

```rascal
data Analyzer  
     = analyzerClass(str analyzerClassName)
     | analyzer(Tokenizer tokenizer, list[Filter] pipe)
     ;
```

## data Analyzer {#analysis-text-search-Lucene-Analyzer}

```rascal
data Analyzer  
     = fieldsAnalyzer(Analyzer src)
     ;
```

#### Synopsis

A fieldsAnalyzer declares using keyword fields which Analyzers to use for which Document field.

#### Description


The `src` parameter of `fieldsAnalyzer` aligns with the `src` parameter of a Document: this analyzer is used
to analyze the `src` field. Any other keyword fields, of type `Analyzer` are applied to the contents of a
`Document` keyword field of type `loc` or `str` with the same name. 

## data Term {#analysis-text-search-Lucene-Term}

```rascal
data Term  
     = term(str chars, loc src, str kind)
     ;
```

## data Tokenizer {#analysis-text-search-Lucene-Tokenizer}

```rascal
data Tokenizer  
     = tokenizer(list[Term] (str input) tokenizerFunction)
     | tokenizerClass(str tokenizerClassName)
     ;
```

## data Filter {#analysis-text-search-Lucene-Filter}

```rascal
data Filter  
     = \editFilter(str (str term) editor)
     | \removeFilter(bool (str term) accept)
     | \splitFilter(list[str] (str term) splitter)
     | \synonymFilter(list[str] (str term) generator)
     | \tagFilter(str (str term, str current) tagger)
     | \filterClass(str filterClassName)
     ;
```

## function createIndex {#analysis-text-search-Lucene-createIndex}

* ``void createIndex(loc index, set[Document] documents, Analyzer analyzer = standardAnalyzer())``

#### Synopsis

Creates a Lucene index at a given folder location from the given set of Documents, using a given set of text analyzers

## function searchIndex {#analysis-text-search-Lucene-searchIndex}

* ``set[Document] searchIndex(loc index, str query, Analyzer analyzer = standardAnalyzer(), int max = 10)``

#### Synopsis

Searches a Lucene index indicated by the indexFolder by analyzing a query with a given set of text analyzers and then matching the query to the index.

## function searchDocument {#analysis-text-search-Lucene-searchDocument}

* ``list[loc] searchDocument(loc doc, str query, Analyzer analyzer = standardAnalyzer(), int max = 10)``

#### Synopsis

Searches a document for a query by analyzing it with a given analyzer and listing the hits inside the document, for debugging and reporting purposes.

## function analyzeDocument {#analysis-text-search-Lucene-analyzeDocument}

* ``list[Term] analyzeDocument(loc doc, Analyzer analyzer = standardAnalyzer())``
* ``list[Term] analyzeDocument(str doc, Analyzer analyzer = standardAnalyzer())``

#### Synopsis

Simulate analyzing a document source location like `createIndex` would do, for debugging purposes

## function listTerms {#analysis-text-search-Lucene-listTerms}

* ``rel[str chars, int frequency] listTerms(loc index, str field, int max = 10)``

#### Synopsis

Inspect the terms stored in an index for debugging purposes (what did the analyzers do to the content of the documents?)

## function listFields {#analysis-text-search-Lucene-listFields}

* ``rel[str field, int docCount, int sumTotalTermFreq] listFields(loc index)``

#### Synopsis

Inspect the fields stored in an index for debugging purposes (which fields have been indexed, for how many documents, and how many terms?)

## function classicAnalyzer {#analysis-text-search-Lucene-classicAnalyzer}

* ``Analyzer classicAnalyzer()``

## function simpleAnalyzer {#analysis-text-search-Lucene-simpleAnalyzer}

* ``Analyzer simpleAnalyzer()``

## function standardAnalyzer {#analysis-text-search-Lucene-standardAnalyzer}

* ``Analyzer standardAnalyzer()``

## function whitespaceAnalyzer {#analysis-text-search-Lucene-whitespaceAnalyzer}

* ``Analyzer whitespaceAnalyzer()``

## function classicTokenizer {#analysis-text-search-Lucene-classicTokenizer}

* ``Tokenizer classicTokenizer()``

## function lowerCaseTokenizer {#analysis-text-search-Lucene-lowerCaseTokenizer}

* ``Tokenizer lowerCaseTokenizer()``

## function lowerCaseFilter {#analysis-text-search-Lucene-lowerCaseFilter}

* ``Filter lowerCaseFilter()``

