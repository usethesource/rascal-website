---
title: "module lang::aterm::IO"
---

#### Usage

`import lang::aterm::IO;`


## function readTextATermFile {#lang-aterm-IO-readTextATermFile}

```rascal
&T readTextATermFile(type[&T] begin, loc location)

value readTextATermFile(loc location)

```

read an ATerm from a text file

## function readATermFromFile {#lang-aterm-IO-readATermFromFile}

```rascal
value readATermFromFile(str fileName)

```


#### Synopsis

Read an ATerm from a named file.

## function writeTextATermFile {#lang-aterm-IO-writeTextATermFile}

```rascal
void writeTextATermFile(loc location, value v)

```

write an ATerm to a text file

