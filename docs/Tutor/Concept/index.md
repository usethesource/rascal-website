---
title: Concept
details:
  - Title
  - Keywords
  - Synopsis
  - Syntax
  - Types
  - Function
  - Details
  - Description
  - Examples
  - Benefits
  - Pitfalls
---

#### Synopsis

A _concept_ is the basic building block of a course. 

#### Syntax

* `module a/b/Concept` in `a/b/Concept.rsc`
* Or a file `a/b/Concept/Concept.md`, `a/b/Concept/index.md`:
   ``````
   ---
   title: Concept Title
   keywords:
      - keyword1
      - keyword2
   ---

   #### Synopsis
   
   This is the synopsis.

   #### Pitfalls
   ``````

All sections are optional, but not the title header. It is always recommended to have at least a Synopsis and some Examples. Empty sections are removed by the preprocessor.

#### Description

A concept describes a separate entity (idea, artefact, function, rule) that is relevant in the scope of the course in which it appears.
It consists of the named sections above that are described separately. 
Each section starts with a keyword that should appear at the begin of a line.

Here is a brief summary of the sections of a concept:
* [Title](../../Tutor/Concept/Title/index.md)
* [Keywords](../../Tutor/Concept/Keywords/index.md)
* [Synopsis](../../Tutor/Concept/Synopsis/index.md)
* [./Syntax](../../Tutor/Concept/Syntax/index.md)
* [Types](../../Tutor/Concept/Types/index.md)
* [./Function](../../Tutor/Concept/Function/index.md)
* [Details](../../Tutor/Concept/Details/index.md)
* [Description](../../Tutor/Concept/Description/index.md)
* [Examples](../../Tutor/Concept/Examples/index.md)
* [Benefits](../../Tutor/Concept/Benefits/index.md)
* [Pitfalls](../../Tutor/Concept/Pitfalls/index.md)



