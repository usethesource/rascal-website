---
title: "module lang::manifest::IO"
---

#### Usage

`import lang::manifest::IO;`


  Jar Manifest files are a kind of property files typically stored inside Jar files.
  They contain meta information about the other files stored in the jar file.


## function readManifest {#lang-manifest-IO-readManifest}

* ``map[str key, str val] readManifest(loc input)``
* ``(&T <: node) readManifest(type[&T<:node] t, loc input)``

reads a manifest file and returns its main attributes as a map

