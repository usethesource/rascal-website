---
title: "module lang::aut::IO"
---

#### Usage

`import lang::aut::IO;`


## function readAUT {#lang-aut-IO-readAUT}

```rascal
rel[int, str, int] readAUT(str nameAUTFile)

```

#### Synopsis

Read relations from an AUT file.

#### Description



An AUT file contains tuples of ternary relation as lines with the following format:
* `(<int>,<str>,<int>)`
*  each field is separated by a comma 

readAUT takes an AUT file and generates a value of type `rel[int, str,int]`.

## function writeAUT {#lang-aut-IO-writeAUT}

```rascal
void writeAUT(str nameAUTFile, rel[int, str, int] r)

```

write an AUT file

