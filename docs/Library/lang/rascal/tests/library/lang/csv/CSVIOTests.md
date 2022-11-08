---
title: "module lang::rascal::tests::library::lang::csv::CSVIOTests"
---

#### Usage

`import lang::rascal::tests::library::lang::csv::CSVIOTests;`


## function readWrite {#lang-rascal-tests-library-lang-csv-CSVIOTests-readWrite}

```rascal
bool readWrite(set[&T] dt)

bool readWrite(type[&T] returnType, set[&T1] dt)

```

## function fixAmbStrings {#lang-rascal-tests-library-lang-csv-CSVIOTests-fixAmbStrings}

```rascal
&T fixAmbStrings(&T v)

```

## function csvBooleanInfer {#lang-rascal-tests-library-lang-csv-CSVIOTests-csvBooleanInfer}

```rascal
test bool csvBooleanInfer()

```

## function csvBoolean {#lang-rascal-tests-library-lang-csv-CSVIOTests-csvBoolean}

```rascal
test bool csvBoolean()

```

## function csvDateTime {#lang-rascal-tests-library-lang-csv-CSVIOTests-csvDateTime}

```rascal
test bool csvDateTime()

```

## function csvWithLoc {#lang-rascal-tests-library-lang-csv-CSVIOTests-csvWithLoc}

```rascal
test bool csvWithLoc(rel[loc first, int second] dt)

```

## function csvWithStr {#lang-rascal-tests-library-lang-csv-CSVIOTests-csvWithStr}

```rascal
test bool csvWithStr(rel[str first, int second] dt)

```

## function csvWithList {#lang-rascal-tests-library-lang-csv-CSVIOTests-csvWithList}

```rascal
test bool csvWithList(rel[list[&T] first, int second] dt)

```

## function csvWithSet {#lang-rascal-tests-library-lang-csv-CSVIOTests-csvWithSet}

```rascal
test bool csvWithSet(rel[set[&T] first, int second] dt)

```

## function csvWithMap {#lang-rascal-tests-library-lang-csv-CSVIOTests-csvWithMap}

```rascal
test bool csvWithMap(rel[map[&T, &Y] first, int second] dt)

```

## function csvWithNode {#lang-rascal-tests-library-lang-csv-CSVIOTests-csvWithNode}

```rascal
test bool csvWithNode(rel[node first, int second] dt)

```

## function csvMoreTuples {#lang-rascal-tests-library-lang-csv-CSVIOTests-csvMoreTuples}

```rascal
test bool csvMoreTuples(rel[str a, str b, int c, bool d, real e] dt)

```

## function csvMoreRandomTypes {#lang-rascal-tests-library-lang-csv-CSVIOTests-csvMoreRandomTypes}

```rascal
test bool csvMoreRandomTypes(rel[loc a, loc b, int c, str d, loc e] dt)

```

## function checkType {#lang-rascal-tests-library-lang-csv-CSVIOTests-checkType}

```rascal
bool checkType(type[value] expected, str input)

```

## function csvTypeInference1 {#lang-rascal-tests-library-lang-csv-CSVIOTests-csvTypeInference1}

```rascal
test bool csvTypeInference1()

```

## function csvTypeInference2 {#lang-rascal-tests-library-lang-csv-CSVIOTests-csvTypeInference2}

```rascal
test bool csvTypeInference2()

```

## function csvTypeInference3 {#lang-rascal-tests-library-lang-csv-CSVIOTests-csvTypeInference3}

```rascal
test bool csvTypeInference3()

```

## function createString {#lang-rascal-tests-library-lang-csv-CSVIOTests-createString}

```rascal
str createString(int j)

```

## function normalData {#lang-rascal-tests-library-lang-csv-CSVIOTests-normalData}

```rascal
test bool normalData()

```

