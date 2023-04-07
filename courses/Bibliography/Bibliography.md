---
title: Bibliography
sidebar_position: 6.5
---

The literature about Rascal goes back all the way to 1980's when its predecessor ASF+SDF spawned.
This page intends to provide a comprehensive list
of papers, PhD theses and master's theses about what is happening "under the hood", on the language
level and with the applications of Rascal.

## Applications

Work that applies the meta-technology and theories is scattered over several sub-disciplines of Computer Science; e.g.
Programming Languages, Software Engineering, Reverse Engineering, Re-engineering, Refactoring, Domain-specific Languages, Model Driven Engineering, and System Security.

### 2020's

* 🎓 Lina María Ochoa Venegas, Break the Code? Breaking Changes and their Impact on Software Evolution, (2023) TU Eindhoven.
   > In this thesis Rascal was applied to detect breaking changes in Java libraries and predict their impact in client projects.
   > The Maracas tool reuses japicmp and the JDT M3 bridge for extracting detailed static information from source code and bytecode.
* 🎓Tim Soethout, Banking on Domain Knowledge for Faster Transactions --- Leveraging Models to Avoid Coordination, (2022) TU Eindhoven.
   > This thesis applies Rascal for Model Driven Engineering. Detailed communication protocols are generated from high-level specification.
   > The code that is generated implements algorithms that use domain knowledge to avoid locking in distributed communication systems.

### 2010's

### 2000's

### 1990's

### 1980's

## Meta languages and systems

This literature is about the meta systems themselves, their design and their evaluation.

### 2020's

### 2010's

### 2000's

### 1990's

### 1980's

## Under the hood

Here we find the algorithms and data-structures that enable the meta languages to work, to 
be efficient and scalable or generalizable.

### 2020's

### 2010's

* 🎓 Michael Steindorfer, Efficient Immutable Collections. (2017) Universiteit van Amsterdam.
   > This thesis describes the core data-structures and optimizations required for Rascal's implementation
   > of relational calculus: relations, sets and maps. The trie map is the core vehicle, and the contributions
   > found their way outside of the Rascal community as well.

### 2000's

### 1990's

* 🎓Eelco Visser,  Syntax Definition for Language Prototyping, University of Amsterdam. (1997)
   > This thesis re-designs the Syntax Definition Formalism (SDF) from scratch and removes the need for a scanner. 
   > The scannerless parsing algorithm SGLR contains the disambiguation filters required to make scannerless parsing possible and feasible.
* 🛠Eelco Visser, Combinatory Algebraic Specification & Compilation of List Matching, (1993)
   > Explorations of matching "modulo" theories (list matching) for more efficient term rewriting.
* 🎓Jan Rekers, Parser Generation for Interactive Environments, University of Amsterdam. (1992)
   > This thesis modifies Tomita's GLR algorithm to fix some issues but also makes it incremental and work on substrings for error recovery purposes.

### 1980's

