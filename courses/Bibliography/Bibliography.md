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

* 🎓 Davy Landman, Reverse Engineering Source Code. (2017) Universiteit van Amsterdam.
   > We explore the limits of what can be leared purely from source code analysis.
   > In this thesis Rascal is used for both shallow and deep code analysis (metrics and static analysis of reflective code). By mining large open-source
   > software repositories, we discover that the cyclomatic complexity metric can _not be shown to correlate_ with source lines of code, 
   > and also we discover the destructive impact of reflection on the accuracy of static analysis tools, and what to do about that.

### 2000's

### 1990's

### 1980's

## Meta languages and systems

This literature is about the meta systems themselves, their design and their evaluation.

### 2020's

* 🎓Mauricio Merino Verano, Engineering Language-Parametric End-User Programming Environments for DSLs (2022) TU Eindhoven.
   > Inspired by industrial use cases at Canon Producting Printing, this thesis adds "Notebooks" and "Block-based languages" to the
   > Rascal technological space. Generating notebook interfaces for DSLs, like IDEs, and deriving usable block-based language interfaces
   > from context-free grammars are two highlights.


### 2010's

### 2000's

### 1990's

### 1980's

## Under the hood

Here we find the algorithms and data-structures that enable the meta languages to work, to 
be efficient and scalable or generalizable.

### 2020's

### 2010's

* 🎓 Ali Afroozeh and Anastasia Izmaylova, Practical General Top-down Parsers. (2019) Universiteit van Amsterdam.
   > This double thesis explores the GLL parsing algorithm as well as parsing combinators for adding context information
   > to parsing in a principled manner with the aim of finding practical solutions to the disambiguation problem.
   > The result is the elegant use of data-dependent context-free grammars to desugar high-level
   > disambiguation constructor to (such as operator precedence and the offside rule).
* 🎓 Naveneetha K. Vasudevan, A non-deterministic approach to ambiguity detection in Context Free Grammars. (2017)Department of Informatics King’s College London.
   > This thesis from outside of the Rascal community provides very effective ambiguity detection with a practical
   > and easy-to-implement approach. This knowledge is now the basis of Dr Ambiguity's ambiguity detection methods.
* 🎓 Michael Steindorfer, Efficient Immutable Collections. (2017) Universiteit van Amsterdam.
   > This thesis describes the core data-structures and optimizations required for Rascal's implementation
   > of relational calculus: relations, sets and maps. The trie map is the core vehicle, and the contributions
   > found their way outside of the Rascal community as well.
* 🎓 Bas Basten, Ambiguity Detection for Programming Language Grammars. (2011) Universiteit van Amsterdam
   > In this thesis ambiguity of context-free grammars is a problem, which must be detected, diagnosed and cured.
   > Static ambiguity detection in this thesis takes the approach of trying to prove unambiguity and reporting
   > failures with causes if such a proof can not be found. There is also a chapter on the diagnostics and curing
   > of ambiguities once found.

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

