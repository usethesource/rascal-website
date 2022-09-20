---
title: "lang::rsf::IO"
---

#### Usage

`import lang::rsf::IO;`


## function readRSF {#lang-rsf-IO-readRSF}

* ``map[str, rel[str,str]] readRSF(loc nameRSFFile)``
* ``map[str, rel[str,str]] readRSF(loc nameRSFFile)``

Read an RSF file.

Read relations from an RSF file. An RSF file contains tuples of binary relations
in the following format:
    RelationName Arg1 Arg2
where each field is separated by a tabulation character (\t). One file may contain tuples for more than one relation. readRSF takes an RSF file nameRSFFile and generates a map[str,rel[str,str]] that maps each relation name to the actual relation.

## function getRSFTypes {#lang-rsf-IO-getRSFTypes}

* ``map[str, type[value]] getRSFTypes(loc location)``

## function readRSFRelation {#lang-rsf-IO-readRSFRelation}

* ``&T readRSFRelation(type[&T] result, str name, loc location)``

## function generate {#lang-rsf-IO-generate}

* ``str generate(str moduleName, loc uri)``


  The RSF schema should be given as:
    rsf+rascal-file-uri
  where rascal-file-uri is a standard Rascal URI, for instance:
    rsf+file:///tmp/myRSFFile.rsf
  or
    rsf+project://MyProject/src/data/myRSFFile.rsf

