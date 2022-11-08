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

```rascal
str abFilter(str token)

```

## function utFilter {#analysis-text-search-LuceneTest-utFilter}

```rascal
bool utFilter(str token)

```

## function lauSplitDanda {#analysis-text-search-LuceneTest-lauSplitDanda}

```rascal
list[str] lauSplitDanda("laudanda")

```

## function an {#analysis-text-search-LuceneTest-an}

```rascal
Analyzer  an()

```

## function commentAnalyzer {#analysis-text-search-LuceneTest-commentAnalyzer}

```rascal
Analyzer  commentAnalyzer()

```

## function wordSplitFilter {#analysis-text-search-LuceneTest-wordSplitFilter}

```rascal
Filter wordSplitFilter()

```

## function extraAnalyzer {#analysis-text-search-LuceneTest-extraAnalyzer}

```rascal
Analyzer  extraAnalyzer()

```

## function indexAnalyzer {#analysis-text-search-LuceneTest-indexAnalyzer}

```rascal
Analyzer indexAnalyzer()

```

## function picoIndex {#analysis-text-search-LuceneTest-picoIndex}

```rascal
void picoIndex()

```

## function picoSearch {#analysis-text-search-LuceneTest-picoSearch}

```rascal
void picoSearch(str term)

```

## function extraSearch {#analysis-text-search-LuceneTest-extraSearch}

```rascal
void extraSearch()

```

## function extraTermsTest {#analysis-text-search-LuceneTest-extraTermsTest}

```rascal
test bool extraTermsTest()

```

## function identifierTest {#analysis-text-search-LuceneTest-identifierTest}

```rascal
test bool identifierTest()

```

## function analyzerTest1 {#analysis-text-search-LuceneTest-analyzerTest1}

```rascal
test bool analyzerTest1()

```

## function analyzerTest2 {#analysis-text-search-LuceneTest-analyzerTest2}

```rascal
test bool analyzerTest2()

```

## function searchDocTest1 {#analysis-text-search-LuceneTest-searchDocTest1}

```rascal
test bool searchDocTest1()

```

## function searchDocTest2 {#analysis-text-search-LuceneTest-searchDocTest2}

```rascal
test bool searchDocTest2()

```

## function searchDocTest3 {#analysis-text-search-LuceneTest-searchDocTest3}

```rascal
test bool searchDocTest3()

```

## function main {#analysis-text-search-LuceneTest-main}

```rascal
void main()

```

