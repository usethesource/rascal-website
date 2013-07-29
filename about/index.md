---
layout: default
title: About
published: true
---

## About Rascal

Rascal is a project by researchers in programming languages and software engineering. The core team is from Centrum Wiskunde & Informatica (CWI), and people from different institutes and universities have been and are contributing.

In principle Rascal is a research laboratory and research vehicle that is not intended for production use (yet). It has been and is used in serious projects however and we plan to stabilize the language eventually.

- Rascal is the successor of the [ASF+SDF Meta-Environment](http://www.meta-environment.org/).
- [Tobias Baanders](http://www.tobiasart.eu/) designed the Rascal logo.
- It employs a parsing architecture inspired by Scott and Johnstone's GLL parsing.

## Teaching

Rascal is taught at Universiteit van Amsterdam as part of the Master Software Engineering program, in a collaboration between UvA, HvA and VU:

 - In Software Evolution it is used to analyze, visualize and transform source code of legacy systems.
 - In Software Construction it is used to construct compilers for domain specific languages.

Rascal is also taught in the course Advanced Programming at Amsterdam University College. The course material can be found here.

At Open Universiteit (OU), Rascal is also taught for the lab of the course on Software Evolution.

## Stories

#### Lego Turing Machine

Davy Landman and Jeroen van den Bos build a [Turing machine from
Lego](http://www.legoturingmachine.org) in honour of the Turing centennial.
Together with the Lego machine, they used Rascal to construct an IDE for a small
language and a compiler to a minimal instruction set that is run on the Lego NXT
brick.

#### Derric - a domain specific language for digital forensics

Jeroen van den Bos implemented the domain-specific language Derric for the
specification of data structures in digital forensics. Rascal was used to
construct the parser, the compiler to Java and a prototype Eclipse IDE. See the
2011 ICSE publication "Bringing Domain-Specific Languages to Digital Forensics"
by Jeroen van den Bos and Tijs van der Storm.

This application intensively uses the syntax definition feature of Rascal, as
well as the expressive string template feature to generate Java code.

#### Prototyping an extension to JML

In "[Prototyping a tool environment for run-time assertion checking in JML with
communication
histories](http://portal.acm.org/citation.cfm?id=1924526&CFID=5791396&CFTOKEN=71599861)" by Stijn de Gouw et al., Rascal and ANTLR were used to extend JML with communication histories specified by attribute grammars.

This prototype parses Java and ANTLR code, weaves tracing aspects into Java code and generates glue Java code.

#### SIG maintainability model and metric visualization

In the course [Software Evolution](http://www.rascal-mpl.org/Rascal/Teaching) the students each implemented metric and aggregation tools that implement the SIG maintainability model for Java code. In a second exercise the metric data was visualized.

Most students used the Rascal library interface to Eclipse JDT to obtain meta data about Java code. Rascal's regular expressions and relation and map operators were also popular. The visualizations were constructed using Rascal's Figure combinators.

#### Infer Generic Type Arguments for Featherweight Generic Java

Jurgen Vinju implemented this complex refactoring to test and evaluate the initial design of Rascal. The implementation of the refactoring is about as big as their definitions as inference rules and the surrounding text in the papers about FGJ and this refactoring. See the SCAM 2009 publication on the Documentation page.

This application intensively uses pattern matching, relational calculus operators, fixed point computation and maps. It is currently broken due to language evolution.

#### Rascal itself

The Rascal grammar, the parser generator and the static (type) checker (by Mark Hills) are implemented in Rascal. Part of the Eclipse IDE for Rascal is generated and instantiated using the Rascal code for Rascal as well.

These applications are very pattern matching and visitor intensive.

Rascal also offers a number of libraries that are written using a combination of Rascal and Java code. Examples include bindings for repository models (subversion, svn and git) that Waruzjan Shahbazian wrote and the Figure combinator library for visualization by Paul Klint.

These library modules are usually very data centric, providing abstract data types and syntax definitions for data representation and exchange.