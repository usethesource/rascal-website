---
title: "module lang::csv::ast::CSV"
---

#### Usage

`import lang::csv::ast::CSV;`


## data Table {#lang-csv-ast-CSV-Table}

```rascal
data Table  
     = table(list[Record] records)
     ;
```

## data Record {#lang-csv-ast-CSV-Record}

```rascal
data Record  
     = record(list[Field] fields)
     ;
```

## data Field {#lang-csv-ast-CSV-Field}

```rascal
data Field  
     = unquoted(str text)
     | quoted(str text)
     ;
```

## function unquote {#lang-csv-ast-CSV-unquote}

* ``Table unquote(Table tbl)``

