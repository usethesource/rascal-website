---
authors: [jvinju]
title: "Rascal 0.40.x release notes"
sidebar_position: 96
---

In this post we report on the Rascal release 0.40.x

<!--truncate-->

## Release 0.40.14 - November 5, 2024

The public release 0.40.x follows release 0.24.x; many improvements have been made in projects that depends on the rascal interpreter and the standard library (the type checker, the VScode extensions, clair, etc.) Some of these improvements depend directly on fixes in the interpreter and additions to the standard library. 

The support for XML, JSON and HTML as exchange formats has been improved or completely rewritten. The main feature that was added was the optional `loc src` keyword field that provides the exact location of each node as it appears in the XML, HTML or JSON source text.

The following issues were solved: 
* TODO

Standard library maintenance:
* Accurate and correct parsers of Windows and Unix file paths were added to the standard library.
