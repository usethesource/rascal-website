---
title: "module util::Validator"
---

#### Usage

`import util::Validator;`

#### Synopsis

Generic validator function that can convert values of the `node` type to instances of abstract `data` type constructors.

#### Description


The intended use-case is to read structured data externally, say an XML or JSON or YAML file, as generic `node` values and then
to use the `validate` function to map the untyped representation to a typed representation, if it can be validated accordingly.


## data RuntimeException {#util-Validator-RuntimeException}

```rascal
data RuntimeException  
     = invalid(str \type, value v, list[value] path=[])
     ;
```

## data RuntimeException {#util-Validator-RuntimeException}

```rascal
data RuntimeException  
     = none()
     ;
```

## function validate {#util-Validator-validate}

```rascal
&T validate(type[&T] expected, value v, list[value] path=[], bool relaxed=false)

&T validate(type[&T] expected, node v, list[value] path = [], bool relaxed=false)

default &T validate(type[&T] expected, value v, list[value] path=[], bool relaxed=false)

```

The general and simple validation case is when a value's run-time type already matches the expected static type

## function simpleInt {#util-Validator-simpleInt}

```rascal
test bool simpleInt()

```

## function defaultNode {#util-Validator-defaultNode}

```rascal
test bool defaultNode()

```

## function adtTest {#util-Validator-adtTest}

```rascal
test bool adtTest()

```

## function adtRelaxedTest {#util-Validator-adtRelaxedTest}

```rascal
test bool adtRelaxedTest()

```

## function adtTestFail {#util-Validator-adtTestFail}

```rascal
test bool adtTestFail()

```

## function adtTestFailNested {#util-Validator-adtTestFailNested}

```rascal
test bool adtTestFailNested()

```

## function adtTestFailKeyword {#util-Validator-adtTestFailKeyword}

```rascal
test bool adtTestFailKeyword()

```

