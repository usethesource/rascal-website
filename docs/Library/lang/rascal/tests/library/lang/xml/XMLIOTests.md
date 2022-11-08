---
title: "module lang::rascal::tests::library::lang::xml::XMLIOTests"
---

#### Usage

`import lang::rascal::tests::library::lang::xml::XMLIOTests;`


## function checkXMLResult {#lang-rascal-tests-library-lang-xml-XMLIOTests-checkXMLResult}

```rascal
bool checkXMLResult(str input, node expected, bool fullyQualify = false)

```

## function buildXML {#lang-rascal-tests-library-lang-xml-XMLIOTests-buildXML}

```rascal
str buildXML(str name, map[str, str] attrs = (), list[str] children = [])

```

## function fixColon {#lang-rascal-tests-library-lang-xml-XMLIOTests-fixColon}

```rascal
str fixColon(str attr)

```

## function simpleXMLTest1 {#lang-rascal-tests-library-lang-xml-XMLIOTests-simpleXMLTest1}

```rascal
test bool simpleXMLTest1()

```

## function simpleXMLTest2 {#lang-rascal-tests-library-lang-xml-XMLIOTests-simpleXMLTest2}

```rascal
test bool simpleXMLTest2()

```

## function simpleXMLTest3 {#lang-rascal-tests-library-lang-xml-XMLIOTests-simpleXMLTest3}

```rascal
test bool simpleXMLTest3()

```

## function namespaceIgnored1 {#lang-rascal-tests-library-lang-xml-XMLIOTests-namespaceIgnored1}

```rascal
test bool namespaceIgnored1()

```

## function namespaceIgnored2 {#lang-rascal-tests-library-lang-xml-XMLIOTests-namespaceIgnored2}

```rascal
test bool namespaceIgnored2()

```

## function namespaceIncluded {#lang-rascal-tests-library-lang-xml-XMLIOTests-namespaceIncluded}

```rascal
test bool namespaceIncluded()

```

## function namespacesMultiple {#lang-rascal-tests-library-lang-xml-XMLIOTests-namespacesMultiple}

```rascal
test bool namespacesMultiple()

```

