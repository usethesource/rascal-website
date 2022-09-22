---
title: "module lang::csv::IO"
---

#### Usage

`import lang::csv::IO;`


#### Synopsis

Functions for reading and writing Comma-Separated Values (CSV) files.

#### Description

The http://tools.ietf.org/html/rfc4180[CSV format] is used for exchanging
information between spreadsheets and databases. A CSV file has the following structure:

*  An optional header line consisting of field names separated by comma's.
*  One or more lines consisting of values separated by comma's.

The following functions are provided:

* [Library:function:lang::csv::IO::generate](../../../Library/lang/csv/IO#lang::csv::IO-generate)
* [Library:function:lang::csv::IO::get c s v type](../../../Library/lang/csv/IO#lang::csv::IO-getCSVType)
* [Library:function:lang::csv::IO::load c sV](../../../Library/lang/csv/IO#lang::csv::IO-loadCSV)
* [Library:function:lang::csv::IO::load normalized c sV](../../../Library/lang/csv/IO#lang::csv::IO-loadNormalizedCSV)
* [Library:function:lang::csv::IO::read c sV](../../../Library/lang/csv/IO#lang::csv::IO-readCSV)
* [Library:function:lang::csv::IO::write c sV](../../../Library/lang/csv/IO#lang::csv::IO-writeCSV)

#### Examples

* CSV file with headers
```csv
field_name1,field_name2,field_name3
aaa,bbb,ccc 
zzz,yyy,xxx 
```


## function readCSV {#lang-csv-IO-readCSV}

* ``value readCSV(loc location, bool header = true, str separator = ",", str encoding = "UTF8")``
* ``value readCSV(loc location, map[str,str] options)``
* ``&T readCSV(type[&T] result, loc location, bool header = true, str separator = ",", str encoding = "UTF8")``


#### Synopsis

Read a relation from a CSV (Comma Separated Values) file.

#### Description

Read a CSV file and return a value of a required type.

The `result` argument is the required type of the value that is produced by reading the CSV
that is found at `location`.
Optionally, the following arguments can be supplied:

*  `header = true` specifies that a header is present (default).
*  `header = false` specifies that no header is present.
*  `separator = ","` specifies that `,` is the separator character between fields (default).

The CSV data should conform to the specified type (if any).

If the required type is not specified, it is _inferred_ in three steps:

_Step 1_: The type of each field occurrence is inferred from its contents using the
following rules:

*  An empty value is of type `void`.
*  A field that contains a string that corresponds to a number is numeric.
*  A field that contains `true` or `false` is of type is `bool`.
*  In all other cases the field is of type `str`.

_Step 2_: The type of each field is inferred from the type of all of its occurrences:

*  If all occurrences have a numeric type, then the smallest possible type is used.
*  If the occurrences have a mixed type, i.e., numeric, non-numeric, boolean or string, then the type is `str`.
*  If the requested type for a field is `str` and another type would be inferred by the preceeding two rules, 
its inferred type will be `str`.

Reading the values in fields is straightforward, except for the case that the text in the field is enclosed between double quotes (`"`):

*  the text may include line breaks which are represented as `\n` in the resulting string value of the field.
*  the text may contain escaped double quotes (`""`) which are represented as `\"` in the resulting string value.

#### Examples

Given is the follwing file `ex1.csv`:

```rascal
position;artist;title;year
1;Eagles;Hotel California;1977
2;Queen;Bohemian rhapsody;1975
3;Boudewijn de Groot;Avond;1997
```

We can read it in various ways:


```rascal-shell
rascal>import lang::csv::IO;
ok
rascal>R1 = readCSV(#rel[int position, str artist, str title, int year],  |project://rascal/src/org/rascalmpl/library/lang/csv/examples/ex1.csv|, separator = ";");
rel[int position,str artist,str title,int year]: {
  <1,"Eagles","Hotel California",1977>,
  <2,"Queen","Bohemian rhapsody",1975>,
  <3,"Boudewijn de Groot","Avond",1997>
}
```
Now we can, for instance, select one of the fields of `R1`:


```rascal-shell
rascal>R1.artist;
set[str]: {"Queen","Boudewijn de Groot","Eagles"}
```
It is also possible to infer the type:


```rascal-shell
rascal>R1 = readCSV(|project://rascal/src/org/rascalmpl/library/lang/csv/examples/ex1.csv|, separator = ";");
rel[int position,str artist,str title,int year]: {
  <1,"Eagles","Hotel California",1977>,
  <2,"Queen","Bohemian rhapsody",1975>,
  <3,"Boudewijn de Groot","Avond",1997>
}
```

## function getCSVType {#lang-csv-IO-getCSVType}

* ``type[value] getCSVType(loc location, bool header = true, str separator = ",", str encoding = "UTF8")``

## function writeCSV {#lang-csv-IO-writeCSV}

* ``void writeCSV(type[&T] schema, &T relation, loc location, bool header = true, str separator = ",", str encoding = "UTF8")``


#### Synopsis

Write a relation to a CSV (Comma Separated Values) file.

#### Description

Write `relation` to a CSV file at `location`.
The options influence the way the actrual CSV file is written:

*  `header`: add or omit a header (based on the labels of the relation).
*  `separator`: defines the separator character between fields (default is `,`).

#### Examples


```rascal-shell
rascal>import lang::csv::IO;
ok
rascal>rel[int position, str artist, str title, int year] R1 = {
>>>>>>>  <1,"Eagles","Hotel California",1977>,
>>>>>>>  <2,"Queen","Bohemian rhapsody",1975>,
>>>>>>>  <3,"Boudewijn de Groot","Avond",1997>
>>>>>>>};
rel[int position,str artist,str title,int year]: {
  <1,"Eagles","Hotel California",1977>,
  <2,"Queen","Bohemian rhapsody",1975>,
  <3,"Boudewijn de Groot","Avond",1997>
}
```
we can write the CSV with a header row:
```rascal-shell
rascal>writeCSV(#rel[int position, str artist, str title, int year], R1, |tmp:///ex1a.csv|);
ok
rascal>
```
or write it without the header row:
```rascal-shell
rascal>writeCSV(#rel[int, str, str, int], R1, |tmp:///ex1b.csv|, header = false, separator = ";");
ok
```

The result of both calls to writeCSV are included below:

`ex1a.csv` (with a header line and default separator `,`):
```rascal
position,artist,title,year
1,Eagles,Hotel California,1977
2,Queen,Bohemian rhapsody,1975
3,Boudewijn de Groot,Avond,1997
```

`ex1b.csv` (without a header line with separator `;`):
```rascal
1;Eagles;Hotel California;1977
2;Queen;Bohemian rhapsody;1975
3;Boudewijn de Groot;Avond;1997
```

## function loadCSV {#lang-csv-IO-loadCSV}

* ``lang::csv::ast::CSV::Table loadCSV(loc l)``

## function loadNormalizedCSV {#lang-csv-IO-loadNormalizedCSV}

* ``lang::csv::ast::CSV::Table loadNormalizedCSV(loc l)``

## function generate {#lang-csv-IO-generate}

* ``str generate(str moduleName, loc uri)``

#### Synopsis

Generator for CSV resources

