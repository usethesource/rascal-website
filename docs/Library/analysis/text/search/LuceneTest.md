---
title: "module analysis::text::search::LuceneTest"
---

#### Usage

`import analysis::text::search::LuceneTest;`

## data Document {#analysis-text-search-LuceneTest-Document}

```rascal
data Document (loc comments = |unknown:///|, str extra = "")
```

## data Analyzer {#analysis-text-search-LuceneTest-Analyzer}

```rascal
data Analyzer (Analyzer comments = standardAnalyzer(), Analyzer extra = standardAnalyzer())
```

## function abFilter {#analysis-text-search-LuceneTest-abFilter}

* ``str abFilter(str token)``

## function utFilter {#analysis-text-search-LuceneTest-utFilter}

* ``bool utFilter(str token)``

## function lauSplitDanda {#analysis-text-search-LuceneTest-lauSplitDanda}

* ``list[str] lauSplitDanda("laudanda")``

## function an {#analysis-text-search-LuceneTest-an}

* ``Analyzer  an()``

## function commentAnalyzer {#analysis-text-search-LuceneTest-commentAnalyzer}

* ``Analyzer  commentAnalyzer()``

## function wordSplitFilter {#analysis-text-search-LuceneTest-wordSplitFilter}

* ``Filter wordSplitFilter()``

## function extraAnalyzer {#analysis-text-search-LuceneTest-extraAnalyzer}

* ``Analyzer  extraAnalyzer()``

## function indexAnalyzer {#analysis-text-search-LuceneTest-indexAnalyzer}

* ``Analyzer indexAnalyzer()``

## function picoIndex {#analysis-text-search-LuceneTest-picoIndex}

* ``void picoIndex()``

## function picoSearch {#analysis-text-search-LuceneTest-picoSearch}

* ``void picoSearch(str term)``

## function extraSearch {#analysis-text-search-LuceneTest-extraSearch}

* ``void extraSearch()``

## function extraTermsTest {#analysis-text-search-LuceneTest-extraTermsTest}

* ``test bool extraTermsTest()``

## function identifierTest {#analysis-text-search-LuceneTest-identifierTest}

* ``test bool identifierTest()``

## function analyzerTest1 {#analysis-text-search-LuceneTest-analyzerTest1}

* ``test bool analyzerTest1()``

## function analyzerTest2 {#analysis-text-search-LuceneTest-analyzerTest2}

* ``test bool analyzerTest2()``

## function searchDocTest1 {#analysis-text-search-LuceneTest-searchDocTest1}

* ``test bool searchDocTest1()``

## function searchDocTest2 {#analysis-text-search-LuceneTest-searchDocTest2}

* ``test bool searchDocTest2()``

## function searchDocTest3 {#analysis-text-search-LuceneTest-searchDocTest3}

* ``test bool searchDocTest3()``

## function main {#analysis-text-search-LuceneTest-main}

* ``void main()``

