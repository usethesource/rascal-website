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

* Paul Klint, Tijs van der Storm, and Jurgen Vinju. EASY Meta-programming with Rascal. Leveraging the Extract-Analyze-Synthesize Paradigm for Meta-programming. (2010) In Proceedings of the 3rd International Summer School on Generative and Transformational Techniques in Software Engineering (GTTSE'09), LNCS. Springer.
   > This is a comprehensive overview of the first release of Rascal as it was used in education at the Master Software Engineering for the first time in 
   > 2009, and at the summer school in Braga that year. Note that the language has evolved quite a bit since then, so as a manual it is not apropriate anymore. 
   > The paper shows how the transformation and analysis paradigms have been merged into a single meta-language. You can find elements of ASF, SDF, Box, ATerms, 
   > ApiGen, RScript, and other design elements in this paper. This paper is often cited as the origin paper for Rascal. The other origin paper was in IEEE SCAM 2009 (see below).

### 2000's

* Paul Klint, Tijs van der Storm, and Jurgen J. Vinju. Rascal: A Domain Specific Language for Source Code Analysis and Manipulation. (2009) In Ninth IEEE International Working Conference on Source Code Analysis and Manipulation, SCAM 2009, Edmonton, Alberta, Canada, September 20-21, 2009, pages 168-177. IEEE Computer Society.
   > This paper motivates and positions Rascal in the domain of source code analysis and manipulation by introducing it along the running example of the 
   > "infer generic type arguments" refactoring. Since refactoring requires both analysis and transformation it is an ideal vehicle for motivation and demonstration
   > of Rascal's language-integrated meta programming primitives. This paper is often cited as an origin paper for Rascal. It won the 2019 most influential paper award
   > from IEEE SCAM, due to the observed impact of Rascal in education, research and industry.

* Jurgen J. Vinju and J.R. Cordy. How to make a bridge between transformation and analysis technologies? (2006) In J.R. Cordy, R. Lämmel, and A. Winter, editors, Transformation Techniques in Software Engineering, number 05161 in Dagstuhl Seminar Proceedings. Internationales Begegnungs- und Forschungszentrum (IBFI), Schloss Dagstuhl, Germany.
   > This technical report explains the relation between the code transformation and code analysis domains from a perspective of tool builders.
   > From here several main motivations for the design of Rascal were derived.

### 1990's

### 1980's

* J. Coutaz, J. The Box, A Layout Abstraction for User Interface Toolkits. (1984) Pittsburgh, PA: Carnegie Mellon University.
   > This technical report from CMU captures the domain of two dimensional layouts, including pretty printing in an elegant, functionally complete combinator language.
   > Later this Box abstraction would form the basic layer for all pretty printing and formatting utilities in ASF+SDF Meta-Environment,
   > and Rascal. It also ended up in other meta programming systems such as StrategoXT, SPoofax and DMS.
* Paul Klint. An overview of the SUMMER programming language (1980) POPL '80: Proceedings of the 7th ACM SIGPLAN-SIGACT symposium on Principles of programming languagesJanuary 
   > Summer was a source code analysis language with a wide array of pattern matching facilities, just as Rascal has. The meta notation used
   > in this paper was later the inspiration for much of the SDF2 notation. The move towards algebraic specification later during the ESPRIT GIPE projects focused the pattern
   > matching on trees instead of strings. String matching came back in Rascal later only in 2009.
   
## Algorithms and Data-structures

Here we find the algorithms and data-structures that enable the meta languages to work, to 
be efficient and scalable or generalizable. Sometimes the tools are intrically linked to the meta-language's designs; we list those
contributions here rather than above.

### 2020's

* Jurgen Vinju. Comparing Bottom-up with Top-down Parsing Architectures for the Syntax Definition Formalism from a Disambiguation standpoint. (2023) OASIcs, Volume 109, EVCS: Eelco Visser's Commemorative Symposium
   > This paper motivates why Rascal moved away from scannerless GLR and to scannerless GLL, and why data-dependent context-free grammars are the next step.

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

* Giorgios Economopoulos, Paul Klint, and Jurgen J. Vinju. Faster scannerless GLR parsing. (2009) Compiler Construction, 18th International Conference.
   > Here we merge RNGLR with SGLR to obtain a faster and simpler implementation that works more predictably. This also rationalized the
   > implementation of the reject filter and as a side-effect we optimized the garbage collection of parallel parse stack nodes and edges.
* Elizabeth Scott and Adrian Johnstone. Right nulled GLR parsers (2006), ACM Transactions on Programming Languages and Systems 28(4):577-618
   > This paper proposes a simpler and more efficient version of Tomita's GLR than the versions of Farshi and Rekers, and so
   > later we merged this into RNSGLR (see above).

### 1990's

* 🎓Eelco Visser,  Syntax Definition for Language Prototyping, University of Amsterdam. (1997)
   > This thesis re-designs the Syntax Definition Formalism (SDF) from scratch and removes the need for a scanner. 
   > The scannerless parsing algorithm SGLR contains the disambiguation filters required to make scannerless parsing possible and feasible.
* 🛠Eelco Visser, Combinatory Algebraic Specification & Compilation of List Matching, (1993)
   > Explorations of matching "modulo" theories (list matching) for more efficient term rewriting.
* 🎓Jan Rekers, Parser Generation for Interactive Environments, University of Amsterdam. (1992)
   > This thesis modifies Tomita's GLR algorithm to fix some issues but also makes it incremental and work on substrings for error recovery purposes.

### 1980's

* M. Tomita. Efficient Parsing for Natural Languages. (1985) A Fast Algorithm for Practical Systems. Kluwer Academic Publishers.
  > Tomita's GLR parsing algorithm provides non-deterministic parsing efficiently; the effect is that it basically has limitless lookahead,
  > and provides an implementation layer for modular/compositional grammars. More importantly, since most existing languages do not
  > fit into the LR or LR categories, the GLR algorithm provided a way for ASF+SDF to scale from toy to real programming languages
  > such as Pascal, COBOL and C.
