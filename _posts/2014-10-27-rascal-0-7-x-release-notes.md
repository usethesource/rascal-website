---
published: false
---


---
layout: post 
published: false
author: Jurgen Vinju
authorlink: http://homepages.cwi.nl/~jurgenv
title: "Rascal 0.7.x release notes"
---

In this post we report on the Rascal release 0.7.0. We expect a number of patch releases as well, which we report on by updating this post at the end when necessary. The Rascal release includes the following main components:

* Parser and interpreter: parsing and running Rascal programs
* Parser generator: generating parsers for programming languages and domain specific languages
* Eclipse plugin: an IDE for Rascal
* Eclipse plugin generator for DSLs: an IDE generator based on Rascal programs
* Rascal commandline shell: to run Rascal independently from Eclipse
* Standard library: utilities for programming in Rascal, including several (stable) programming language front-ends and general analysis facilities.

Compared to 0.6.x the 0.7 release is mainly a bug fix release, with a number of extensions to the libraries and one new language feature. 

* The new language feature is keyword parameters for both functions and data constructors. 
* In terms of library funcionality the big new things is *M3*, a common intermediate format for facts about source code. This includes a standard set of relations (containment, def/use, etc.) and a preferred way of modeling abstract syntax trees.

### M3

### Keyword parameters

### Looking forward to the 0.8.x, 0.9.x and 1.0 releases
