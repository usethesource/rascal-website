---
title: "module ValueIO"
---

#### Usage

`import ValueIO;`


#### Synopsis

Library functions for reading and writing values in textual and binary format.


## function readValueFile {#ValueIO-readValueFile}

* ``value readValueFile(loc file)``


#### Synopsis

Read  a value from a binary file in PBF format.

## function getFileLength {#ValueIO-getFileLength}

* ``int getFileLength(loc file)``


#### Synopsis

Get length of a file in number of bytes.

## function readBinaryValueFile {#ValueIO-readBinaryValueFile}

* ``&T readBinaryValueFile(type[&T] result, loc file)``
* ``value readBinaryValueFile(loc file)``


#### Synopsis

Read a typed value from a binary file.

## function readTextValueFile {#ValueIO-readTextValueFile}

* ``&T readTextValueFile(type[&T] result, loc file)``
* ``value readTextValueFile(loc file)``


#### Synopsis

Read a typed value from a text file.

## function readTextValueFileWithEmbeddedTypes {#ValueIO-readTextValueFileWithEmbeddedTypes}

* ``&T readTextValueFileWithEmbeddedTypes(type[&T] result, loc file)``


#### Synopsis

If you have written a file containing reified types, then you can use this function
  to read them back.  

## function readTextValueString {#ValueIO-readTextValueString}

* ``value readTextValueString(str input)``
* ``&T readTextValueString(type[&T] result, str input)``


#### Synopsis

Parse a textual string representation of a value.

## function writeBinaryValueFile {#ValueIO-writeBinaryValueFile}

* ``void writeBinaryValueFile(loc file, value val, bool compression = true)``


#### Synopsis

Write a value to a file using an efficient binary file format.

## function writeTextValueFile {#ValueIO-writeTextValueFile}

* ``void writeTextValueFile(loc file, value val)``


#### Synopsis

Write a value to a file using a textual file format.
