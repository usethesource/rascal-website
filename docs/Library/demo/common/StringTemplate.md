---
title: "module demo::common::StringTemplate"
---

#### Usage

`import demo::common::StringTemplate;`


## function capitalize {#demo-common-StringTemplate-capitalize}

```rascal
str capitalize(str s)

```

#### Synopsis

Capitalize the first character of a string

## function genSetter {#demo-common-StringTemplate-genSetter}

```rascal
str genSetter(map[str,str] fields, str x)

```

#### Synopsis

Helper function to generate a setter

## function genGetter {#demo-common-StringTemplate-genGetter}

```rascal
str genGetter(map[str,str] fields, str x)

```

#### Synopsis

Helper function to generate a getter

## function genClass {#demo-common-StringTemplate-genClass}

```rascal
str genClass(str name, map[str,str] fields)

```

#### Synopsis

Generate a class with given name and fields.
 The field names are processed in sorted order.

## function tstGenClass {#demo-common-StringTemplate-tstGenClass}

```rascal
test bool tstGenClass()

```

