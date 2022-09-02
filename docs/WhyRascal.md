## Document preparation issues

The following issues have been detected while preparing this draft document. It is not ready for publication.

1. [warning] |project://rascal/src/org/rascalmpl/courses/WhyRascal/WhyRascal.md|:17,0 Broken concept link: Comparison with other Paradigms
1. [warning] |project://rascal/src/org/rascalmpl/courses/WhyRascal/EASY/EASY.md|:22,0 Ambiguous concept link: WhyRascal:EASY-Security resolves to all of {"#EASY-Security","/WhyRascal.md#EASY-Security"}
1. [warning] |project://rascal/src/org/rascalmpl/courses/WhyRascal/EASY/EASY.md|:22,0 Ambiguous concept link: WhyRascal:EASY-Forensics resolves to all of {"/WhyRascal.md#EASY-Forensics","#EASY-Forensics"}
1. [warning] |project://rascal/src/org/rascalmpl/courses/WhyRascal/EASY/EASY.md|:22,0 Ambiguous concept link: WhyRascal:EASY-ModelDrivenEngineering resolves to all of {"#EASY-ModelDrivenEngineering","/WhyRascal.md#EASY-ModelDrivenEngineering"}
1. [warning] |project://rascal/src/org/rascalmpl/courses/WhyRascal/EASY/EASY.md|:22,0 Ambiguous concept link: WhyRascal:EASY-Concurrency resolves to all of {"/WhyRascal.md#EASY-Concurrency","#EASY-Concurrency"}
1. [warning] |project://rascal/src/org/rascalmpl/courses/WhyRascal/EASY/EASY.md|:22,0 Ambiguous concept link: WhyRascal:EASY-Renovation resolves to all of {"#EASY-Renovation","/WhyRascal.md#EASY-Renovation"}
1. [warning] |project://rascal/src/org/rascalmpl/courses/WhyRascal/SolutionStrategies/SolutionStrategies.md|:41,0 Broken concept link: Problem-Solving-Workflow
1. [warning] |project://rascal/src/org/rascalmpl/courses/WhyRascal/SolutionStrategies/SolutionStrategies.md|:53,0 Broken concept link: Validation-Workflow
1. [warning] |project://rascal/src/org/rascalmpl/courses/WhyRascal/SolutionStrategies/SolutionStrategies.md|:65,0 Broken concept link: Requirements-Workflow
1. [warning] |project://rascal/src/org/rascalmpl/courses/WhyRascal/SolutionStrategies/SolutionStrategies.md|:82,0 Ambiguous concept link: WhyRascal:SolutionStrategies-Analysis resolves to all of {"#SolutionStrategies-Analysis","/WhyRascal.md#SolutionStrategies-Analysis"}
1. [warning] |project://rascal/src/org/rascalmpl/courses/WhyRascal/SolutionStrategies/SolutionStrategies.md|:82,0 Ambiguous concept link: WhyRascal:SolutionStrategies-Synthesis resolves to all of {"/WhyRascal.md#SolutionStrategies-Synthesis","#SolutionStrategies-Synthesis"}
1. [warning] |project://rascal/src/org/rascalmpl/courses/WhyRascal/SolutionStrategies/SolutionStrategies.md|:82,0 Ambiguous concept link: WhyRascal:SolutionStrategies-Extraction resolves to all of {"#SolutionStrategies-Extraction","/WhyRascal.md#SolutionStrategies-Extraction"}
1. [warning] |project://rascal/src/org/rascalmpl/courses/WhyRascal/SolutionStrategies/Analysis/Analysis.md|:19,0 Broken concept link: Analysis-Workflow
1. [warning] |project://rascal/src/org/rascalmpl/courses/WhyRascal/SolutionStrategies/Synthesis/Synthesis.md|:19,0 Broken concept link: Synthesis-Workflow
1. [warning] |project://rascal/src/org/rascalmpl/courses/WhyRascal/CompareWithOtherParadigms/CompareWithOtherParadigms.md|:11,0 Ambiguous concept link: WhyRascal:CompareWithOtherParadigms-ASFPlusSDF resolves to all of {"/WhyRascal.md#CompareWithOtherParadigms-ASFPlusSDF","#CompareWithOtherParadigms-ASFPlusSDF"}
1. [warning] |project://rascal/src/org/rascalmpl/courses/WhyRascal/CompareWithOtherParadigms/CompareWithOtherParadigms.md|:11,0 Ambiguous concept link: WhyRascal:CompareWithOtherParadigms-OO resolves to all of {"/WhyRascal.md#CompareWithOtherParadigms-OO","#CompareWithOtherParadigms-OO"}

## Why Rascal {#WhyRascal}

### Synopsis 
What is the motivation for Rascal and which problems can you solve with it?

### Details 
Motivation EASY SolutionStrategies CompareWithOtherParadigms

### Description 

We give various answers to these questions:

* In [Motivation](#Motivation-Motivation) we summarize the distinguishing features of Rascal 
  and describe some application domains.
* [EASY](#EASY-EASY) can be used in many Rascal applications.
* We have also collected [Solution Strategies](#SolutionStrategies-SolutionStrategies) for a wide range of problems.
* Last but not least we give a quick _Comparison with other Paradigms (broken link)_.

## The Extract-Analyze-SYnthesize (EASY) paradigm {#EASY-EASY}

### Synopsis 
Rascal excels in supporting the Extract-Analyze-SYnthesize (EASY) paradigm.

![](/assets/e0330546-7488-4ef2-878b-256f453b7fed.png)

// explicitly separate image from Description 

### Description 

Many meta-programming problems follow a fixed pattern. 
Starting with some input system (a black box that we usually call _system-of-interest_), 
first relevant information is extracted from it and stored in an internal representation. 
This internal representation is then analyzed and used to synthesize results.
 If the synthesis indicates this, these steps can be repeated over and over again. These steps are shown in the figure.
This is an abstract view on solving meta-programming problems, but is rather common.

Rascal has been designed to fully support problem solving that fits the EASY paradigm.
We will discuss the following use cases represented by different _personas_:

* _broken:WhyRascal:EASY-Security (ambiguous link)_
* _broken:WhyRascal:EASY-Forensics (ambiguous link)_
* _broken:WhyRascal:EASY-ModelDrivenEngineering (ambiguous link)_
* _broken:WhyRascal:EASY-Concurrency (ambiguous link)_
* _broken:WhyRascal:EASY-Renovation (ambiguous link)_


## Security {#EASY-Security}

### Synopsis 
Security analysis.





### Description 
_Alice_ is system administrator of a large online marketplace and she is looking for security breaches in her system. The objects-of-interest are the system's log files. First relevant entries are extracted. This will include, for instance, messages from the SecureShell demon that reports failed login attempts. From each entry login name and originating IP address are extracted and put in a table (the internal representation in this example). These data are analyzed by detecting duplicates and counting frequencies. Finally results are synthesized by listing the most frequently used login names and IP addresses.





## Forensics {#EASY-Forensics}

### Synopsis 
Domain-specific language for forensics research.





### Description 
_Bernd_ is a senior software engineer working at the Berlin headquarters of a forensic investigation lab of the German government. His daily work is to find common patterns in files stored on digital media that have been confiscated during criminal investigations. Text, audio and video files are stored in zillions of different data formats and each data format requires its own analysis technique. For each new investigation ad hoc combinations of tools are used. This makes the process very labour-intensive and error-prone. Bernd convinces his manager that designing a new domain-specific language (DSL) for forensic investigations may relieve the pressure on their lab. After designing the DSL---let's call it DERRICK---he makes an EASY implementation for it. Given a DERRICK program for a specific case under investigation, he first extracts relevant information from it and analyzes it: which media formats are relevant? Which patterns to look for? How should search results be combined? Given this new information, Java code is synthesized that uses the various existing tools and combines their results.





## Model-Driven Engineering {#EASY-ModelDrivenEngineering}

### Synopsis 
Tools for Model-Driven Engineering.





### Description 
_Elisabeth_ is a software architect at a large airplane manufacturer and her concern is reliability and dependability of 
airplane control software. She and her team have designed a UML model of the control software and have extended it with annotations that describe the reliability of individual components. 
She will use this annotated model in two ways: 

*  to extract relevant information from it to synthesize input for a statistical tool that will compute overall system reliability from the reliability of individual components;
*  to generate executable code that takes the reliability issues into account.





## Concurrency {#EASY-Concurrency}

### Synopsis 
Concurrency analysis.





### Description 
_Daniel_ is a concurrency researcher at one of the largest hardware manufacturers worldwide. He is working from an office in the Bay Area. Concurrency is the big issue for his company: it is becoming harder and harder to make CPUs faster, therefore more and more of them are bundled on a single chip. Programming these multi-core chips is difficult and many programs that worked fine on a single CPU contain hard to detect concurrency errors due to subtle differences in the order of execution that results from executing the code on more than one CPU. Here is where Daniel enters the picture. He is working on tools for finding concurrency errors. First he extracts facts from the code that are relevant for concurrency problems and have to do with calls, threads, shared variables and locks. Next, he analyzes these facts and synthesizes an abstract model that captures the essentials of the concurrency behaviour of the program. Finally he runs a third-party verification tool with this model as input to do the actual verification.





## Renovation {#EASY-Renovation}

### Synopsis 
System renovation.

![](/assets/2d75829a-3425-478a-af67-a98afcd6f1d6.png)

// explicitly separate image from Description 

### Description 



_Charlotte_ is software engineer at a large financial institution in Paris and she is looking for options to connect an old and dusty software system to a web interface. 

She will need to analyze the sources of that system to understand how it can be changed to meet the new requirements. The objects-of-interest are in this case the source files, documentation, test scripts and any other available information. They have to be parsed in some way in order to extract relevant information, say the calls between various parts of the system. The call information can be represented as a binary relation between caller and callee (the internal representation in this example). This relation with 1-step calls is analyzed and further extended with 2-step calls, 3-step calls and so on. In this way call chains of arbitrary length become available. With this new information, we can synthesize results by determining the entry points of the software system, i.e., the points where calls from the outside world enter the system. 

Having completed this first cycle, Charlotte may be interested in which procedures can be called from the entry points and so on and so forth. Results will be typically represented as pictures that display the relationships that were found. In the case of source code analysis, a variation of our workflow scheme is quite common. It is then called the extract-analyze-view paradigm and
 is shown in the figure.





## Solution Strategies {#SolutionStrategies-SolutionStrategies}

### Synopsis 
Strategies to solve problems in various domains using Rascal.




### Details 
Extraction Analysis Synthesis  

[[Problem-Solving-Workflow]]
![Problem Solving Workflow](/assets/fb4722cd-4f46-4cd9-afad-0f028e76f6b2.png)

### Description 
Before you study more complicated examples, it is useful to discuss some general problem solving 
strategies that are relevant in Rascal's application domain.

To appreciate these general strategies, it is good to keep some specific problem areas in mind:

*  __Documentation generation__: extract facts from source code and use them to generate textual documentation.
  A typical example is generating web-based documentation for legacy languages like Cobol and PL/I.
   
*  __Metrics calculation__: extract facts from source code (and possibly other sources like test runs) and use 
  them to calculate code metrics. Examples are cohesion and coupling of modules and test coverage.

*  __Model extraction__: extract facts from source code and use them to build an abstract model of the source code. 
  An example is extracting lock and unlock calls from source code and to build an automaton that guarantees 
  that lock/unlock occurs in pairs along every control flow path.
*  __Model-based code generation__: given a high-level model of a software system, described in UML or some other modelling language, transform this model into executable code. UML-to-Java code generation falls in this category.

*  __Source-to-source transformation__: large-scale, fully automated, source code transformation with certain objectives like removing deprecated language features, upgrading to newer APIs and the like.

*  __Interactive refactoring__: given known _code smells_ a user can interactively indicate how these smells should be removed. The refactoring features in Eclipse and Visual Studio are examples.


With these examples in mind, we can study the overall problem solving workflow as shown 
in the figure _Problem-Solving-Workflow (broken link)_ above.
It consists of three optional phases:

*  Is extraction needed to solve the problem, then define the extraction phase, see [Extraction](#SolutionStrategies-Extraction).

*  Is analysis needed, then define the analysis phase, see [Analysis](#SolutionStrategies-Analysis). 

*  Is synthesis needed, then define the synthesis phase, see [Synthesis](#SolutionStrategies-Synthesis).

[[Validation-Workflow]]
![Validation Workflow](/assets/8625df75-ac0e-4698-bb7d-07582d3ef299.png)

Each phase is subject to a validation and improvement workflow as shown in the second figure _Validation-Workflow (broken link)_. 
Each individual phase as well as the combination of phases may introduce errors and has thus to be carefully validated. 
In combination with the detailed strategies for each phase, this forms a complete approach for problem solving and validation 
using Rascal.

[[Requirements-Workflow]]
![Requirements Workflow](/assets/e1fea4a1-75cc-41b3-9edd-7dfa24acbe3f.png)

A major question in every problem solving situation is how to determine the requirements for each phase of the solution. 
For instance, how do we know what to extract from the source code if we do not know what the desired end results of the project are? 
The standard solution is to use a workflow for requirements gathering that is the inverse of the phases needed to solve 
the complete problem. 
This is shown in the third figure _Requirements-Workflow (broken link)_ and amounts to the phases: 

*  Requirements of the synthesis phase. 
  This amounts to making an inventory of the desired results of the whole project and may include generated source code, 
  abstract models, or visualizations. 
*  Requirements of the analysis phase. Once these results of the synthesis phase are known, it is possible to list the analysis results that are needed to synthesize desired results. Possible results of the analysis phase include type information, structural information of the original source.

*  Requirements of the extraction phase. As a last step, one can make an inventory of the facts that have to be extracted to form the starting point for the analysis phase. Typical facts include method calls, inheritance relations, control flow graphs, usage patterns of specific library functions or language constructs.


You will have no problem in identifying requirements for each phase when you apply them to a specific 
example from the list given earlier.

When these requirements have been established, it becomes much easier to actually carry out the project using the three phases 
of the first figure above.

We will discuss:
* _broken:WhyRascal:SolutionStrategies-Analysis (ambiguous link)_
* _broken:WhyRascal:SolutionStrategies-Synthesis (ambiguous link)_
* _broken:WhyRascal:SolutionStrategies-Extraction (ambiguous link)_





## Analysis {#SolutionStrategies-Analysis}

### Synopsis 
Strategies to analyze software systems.




### Details 


[[Analysis-Workflow]]
![Analysis Workflow](/assets/2519c09e-466e-4999-b0ae-7f62f2d07dd8.png)

### Description 
The analysis workflow is shown in the figure _Analysis-Workflow (broken link)_ below and consists of two steps:

*  Determine the results that are needed for the synthesis phase.

*  Write the Rascal code to perform the analysis. This may amount to:

  **  Reordering extracted facts to make them more suitable for the synthesis phase.

  **  Enriching extracted facts. Examples are computing transitive closures of extracted facts 
      (e.g., A may call B in one or more calls), or performing data reduction by abstracting aways details
      (i.e., reducing a program to a finite automaton).

  **  Combining enriched, extracted, facts to create new facts.


As before, validate, validate and validate the results of analysis. Essentially the same approach can be used as for validating the facts. Manual checking of answers on random samples of the SUI may be mandatory. It also happens frequently that answers inspire new queries that lead to new answers, and so on.

The Rascal features that are frequently used for analysis are:

*  List, set and map comprehensions.

*  The built-in operators and library functions, in particular for lists, maps, sets and relations.

*  Pattern matching (used in many Rascal statements).

*  Visits and switches to further process extracted facts.

*  The solve statement for constraint solving.

*  Rewrite rules to simplify results and to enforce constraints.





## Synthesis {#SolutionStrategies-Synthesis}

### Synopsis 
Strategies to synthesise results.




### Details 


[[Synthesis-Workflow]]
![Synthesis Workflow](/assets/b5879309-0b73-4997-b91b-f8d2d1b59506.png)

### Description 
Results are synthesized as shown in the Figure _Synthesis-Workflow (broken link)_ above. This consists of the following steps:

*  Determine the results of the synthesis phase. Wide range of results is possible including:

  **  Generated source code.

  **  Generated abstract representations, like finite automata or other formals models that capture properties of the SUI.

  **  Generated data for visualizations that will be used by visualization tools. 

*  If source code is to be generated, there are various options.

  **  Print strings with embedded variables.

  **  Convert abstract syntax trees to strings (perhaps using forms of pretty printing).

  **  Use a grammar of the target source language, also for code generation. 
      Note that this approach guarantees the generation of syntactically correct source code as opposed to code 
      generation using print statements or string templates.

*  If other output is needed (e.g., an automaton or other formal structure) write data declarations to represent that output.

*  Finally, write functions and rewrite rules that generate the desired results.


The Rascal features that are frequently used for synthesis are:

*  Syntax definitions or data declarations to define output formats.

*  Pattern matching (used in many Rascal statements).

*  Visits of datastructures and on-the-fly code generation.

*  Rewrite rules.





## Extraction {#SolutionStrategies-Extraction}

### Synopsis 
Strategies to extract facts from software systems.




### Details 


[[Extraction-Workflow]]
![Extraction Workflow](/assets/0c711544-7034-42f1-81c1-36e6ed4b0fb0.png)

### Description 
 
How can we extract facts from the _System under Investigation_ (SUI) that we are interested in? 
The extraction workflow is shown in the figure above and consists of the following steps:

*  First and foremost we have to determine which facts we need. This sounds trivial, but it is not. The problem is that we have to anticipate which facts will be needed in the next---not yet defined---analysis phase. A common approach is to use look-ahead and to sketch the queries that are likely to be used in the analysis phase and to determine which facts are needed for them. Start with extracting these facts and refine the extraction phase when the analysis phase is completely defined.


*  If relevant facts are already available (and they are reliable!) then we are done. This may happen when you are working on a system that has already been analyzed by others.

*  Otherwise you need the source code of the SUI. This requires:

   **  Checking that all sources are available (and can be compiled by the host system on which they are usually compiled and executed). Due to missing or unreliable configuration management on the original system this may be a labour-intensive step that requires many iterations.

   **  Determining in which languages the sources are written. In larger systems it is common that three or more different languages are being used.

*  If there are reliable third-party extraction tools available for this language mix, then we only have to apply them and we are done. Here again, validation is needed that the extracted facts are as expected.

*  The extraction may require syntax analysis. This is the case when more structural properties of the source code are needed such as the flow-of-control, nesting of declarations, and the like. There two approaches here:

*  Use a third-party parser, convert the source code to parse trees and do the further processing of these parse trees in Rascal. The advantage is that the parser can be re-used, the disadvantage is that data conversion is needed to adapt the generated parse tree to Rascal. Validate that the parser indeed accepts the language the SUI is written in, since you will not be the first who has been bitten by the language dialect monster when it turns out that the SUI uses a local variant that slightly deviates from a mainstream language.

*  Use an existing syntax definition of the source language or write your own definition. Be aware, however, that writing a grammar for a non-trivial language is a major undertaking and may require weeks to month of work. 
Whatever approach you choose, validate that the resulting grammar is compliant with the original grammar of the source language.

*  The extraction phase may only require lexical analysis. This happens when more superficial, textual, facts have to be extracted like procedure calls, counts of certain statements and the like. Use Rascal's full regular expression facilities to do the lexical analysis.


It may happen that the facts extracted from the source code are _wrong_. Typical error classes are:

*  Extracted facts are _wrong_: the extracted facts incorrectly state that procedure P calls procedure Q but this is contradicted by a source code inspection. This may happen when the fact extractor uses a conservative approximation when precise information is not statically available. In the language C, when procedure P performs an indirect call via a pointer variable, the approximation may be that P calls all procedures in the procedures.

*  Extracted facts are _incomplete_: the inheritance between certain classes in Java code is missing.


The strategy to validate extracted facts differ per case but here are three strategies:

*  Post process the extracted facts (using Rascal, of course) to obtain trivial facts about the source code such as total lines of source code and number of procedures, classes, interfaces and the like. Next validate these trivial facts with tools like wc (word and line count), grep (regular expression matching) and others.

*  Do a manual fact extraction on a small subset of the code and compare this with the automatically extracted facts.

*  Use another tool on the same source and compare results whenever possible. A typical example is a comparison of a call relation extracted with different tools.


The Rascal features that are most frequently used for extraction are:

*  Regular expression patterns to extract textual facts from source code.

*  Syntax definitions and concrete patterns to match syntactic structures in source code.

*  Pattern matching (used in many Rascal statements).

*  Visits to traverse syntax trees and to locally extract information.

*  The repertoire of built-in datatypes (like lists, maps, sets and relations) to represent the extracted facts.





## Comparison with other Paradigms {#CompareWithOtherParadigms-CompareWithOtherParadigms}

### Synopsis 
Rascal compared with the imperative, object-oriented and algebraic paradigms

### Description 

Rascal provides both familiar and unfamiliar features. These will be appreciated differently by programmers
that are expert in other language paradigms. We provide the following comparisons:

* _broken:WhyRascal:CompareWithOtherParadigms-ASFPlusSDF (ambiguous link)_
* _broken:WhyRascal:CompareWithOtherParadigms-OO (ambiguous link)_

## ASF+SDF {#CompareWithOtherParadigms-ASFPlusSDF}

### Synopsis 
Rascal explained for ASF+SDF programmers.





### Description 

Rascal is the successor of the specification language ASF+SDF that is part of the http://www.meta-environment.org[ASF+SDF Meta-Environment].

What are the differences between ASF+SDF and Rascal? What are the commonalities?

*  Rascal has all the high level features of ASF+SDF and some more. 
  Regarding functionality, old ASF+SDF specifications could, in principle, be transformed into Rascal programs using a conversion tool.
  We do not provide such a tool since it turns out to be better to redesign your specification from scratch to profit most
  from all the new features in Rascal.

*  Rascal uses its own syntax definition notation that is richer than SDF. It also uses its own parser generation and parsing technology.
  Parser generation is currently somewhat slower than for SDF, the generated parsers are, however, 
  substantially faster than SDF-based parsers.
  SDF specification can be automatically converted to Rascal,
  but here again, manual conversion leads to better results.

*  Like in ASF+SDF, Rascal has modules that introduce a namespace scope for variables and functions, which can be either private or public.     
  Modules can have type parameters as in SDF, which are instantiated by import statements.

*  In Rascal, patterns and variables in concrete syntax may optionally be quoted and escaped, and explicit declaration of the top non-terminal 
  is supported to solve ambiguity.

*  Rascal does not support rewrite rules. Instead pattern-directed function definition and invocation can be used.

*  Unlike ASF+SDF, Rascal has native, efficient, implementations for lists, sets, relations and maps.

*  Unlike ASF+SDF, Rascal can be used without parsing or concrete syntax, supporting for example regular expressions and abstract data types.

*  Rascal has native support for functions, which have a fixed syntax, always return a value and have a body consisting of imperative control flow statements. Adding a function will not trigger the need for regenerating parse tables as is the case in the ASF+SDF implementation. Function types can be polymorphic in their parameters and also allow functions as arguments to implement reusable algorithms.

*  The imperative nature of Rascal allows you to factor out common code and nest conditionals, unlike in ASF+SDF where alternative control flow paths have to be encoded by enumerating equations with non-overlapping conditions.

*  Rascal is an imperative language, which natively supports I/O and other side-effects without the workarounds that are needed in ASF+SDF to achieve this.

*  Rascal has native support for traversals, instead of the add-on it used to be in ASF+SDF. The visit statement is comparable to a traversal function in ASF+SDF, and is as type-safe as the traversal function, but it is more programmeable.

*  Instead of accumulator values of traversal functions in ASF+SDF, Rascal simply supports lexically scoped variables that can be updated using assignments.

*  Rascal natively supports specific expressions and datatypes for relational calculus, all borrowed directly from RScript.

*  When programming using Rascal functions, instead of rules, the control flow of a program becomes easily traceable and debuggable. It is simply like stepping through well structured code.

*  Rascal is based on a Java interpreter, or a Java run-time when compiled. So the code is more portable.

*  Rascal is supported by a modern, Eclipse-based, IDE, unlike the simple IDE of the ASF+SDF Meta-Environment.
  IDE services like keyword highlighting, outlining, and more are available for the Rascal programmer.





## Object-Oriented and Imperative Languages {#CompareWithOtherParadigms-OO}

### Synopsis 
Rascal explained for OO and imperative programmers.





### Description 

Rascal is an imperative domain-specific language (DSL) for meta-programming.
It provides high level statements and expressions specifically targeted at the domain of analysis and transformation of source code.

How does Rascal differ from an OO language or an imperative language?

*  Unlike OO languages, Rascal does not provide classes. Rascal has modules which can best be compared with a static class in Java.

*  Objects in an OO language (class instances) can have mutable local state (i.e, each object can have instance variables 
  that can be modified after object creation). In Rascal all values are immutable after creation. Sharing a value does 
  not introduce a coupling like in OO, simply because changes are only visible to the code that changes the values.
  Without mutability it is easy to combine stages of programs that perform different tasks.

*  Rascal does provide a mechanism for introducing user-defined types. 
  An _Algebraic Data Type_ introduces a new type and is defined by a number of _constructor functions_ to construct 
  values of that type. The constructed values are immutable. Although they are both called "constructors"
  there is a big difference between constructors in OO languages and in Rascal. The former create mutable objects while the
  latter create immutable values.

*  Variables can, however, be associated with different immutable values during their lifetime. This is why we say that Rascal is
a weakly imperative language. Rascal is, however, closer, to functional languages than to OO languages or imperative languages.

*  Rascal is safe: there are no null values.

*  Rascal is even more safe: it has a type system that prevents casting exceptions and other run-time failures. Still the type system specifically allows many kinds of combinations. For example, unlike in Java a set of integers is a subtype of a set of numbers (co-variance), which allows you to reuse algorithm for sets of numbers on sets of integers. It also provides true polymorphic and functions (no erasure), and functions can safely be parameters to other functions.

*  Rascal supports unchecked exceptions, throw and catch statements are available, but exceptions do not _have_ to be declared in function headers (but they _may_ be declared for documentation purposes).

*  Rascal provides high-level statements and expressions for:
** 	Visitors in all kinds of orders, expressed very concisely, and type safe.
** 	Pattern matching and construction (with and without concrete syntax!).
** 	Equation/constraint solving.
** 	Relational calculus.
** 	Rewrite rules for normalization/canonicalization of any kind of data-structure
**     Support for parser generation and parsing using context-free grammars.
** 	(De)Serialization of values.
** 	Communication with databases.

*  Rascal provides typed data constructors for common mathematical structures, such as:
** 	Terms (a.k.a. tree nodes or abstract data types).
**     Parse trees (derivations of context-free grammars, for concrete syntax and direct manipulation of source code).
**     Lists, tuples, maps, sets, relations, and graphs.

*  In Rascal you can implement high-fidelity source-to-source transformations. Without too much overhead, programs can do extensive rewriting of the source code without the loss of particular layout standards or source code comments.

*  Rascal is syntax-safe. When you use Rascal to generate or transform source code, it statically detects whether the resulting source code is syntactically correct.

*  Rascal is executed by an interpreter written in Java, or it can be compiled to Java classes.





## Motivation {#Motivation-Motivation}

### Synopsis 
The distinguishing features of Rascal and how they solve real problems.





### Description 

_Meta-programs_ are programs that analyze, transform or generate other programs. Ordinary programs work on data; meta-programs work on programs. 

The _range of programs_ to which meta-programming can be applied is large: from programs in standard languages like C and Java to domain-specific languages for describing high-level system models or applications in specialized areas like gaming or finance. In some cases, even test results or performance data are used as input for meta-programs.

The _range of kinds of meta programs_ that can be applied is also large. There are simple meta programs that generate boilerplate code from a list of items. There are complex meta programs that reverse engineer and statically analyse a big software system before visualizing the results. The point of Rascal is that in all these kinds of meta programs one needs similar operations and similar data-types. 

The _point of Rascal_ is to provide a reusable set of primitives to build and manipulate program representations. The point is _not_ to be or provide a unified representation of programs to let generic algorithms operate on. In meta programming the devil is often in the details. Rascal makes sure to not a priori abstract from the important details programming language syntax and semantics.

_Rascal is a domain specific programming language_. We emphasize programming here because Rascal is intended as an engineering tool for programmers that need to construct meta programs. Rascal programs allow running, inspecting, debugging, tracing, profiling, etc. just as normal programs do. The skills of any good programmer are enough to easily write good Rascal programs.

### Examples 
Typical applications of Rascal are:

*  Refactoring of Java source code.
*  Analyzing PHP code.
*  Searching for buffer overflows in C code.
*  Analyzing the version history of a large software project.
*  Implementing a _domain-specific language_ (DSL) for describing games or business processes.
*  Writing compilers.

All these cases involve a form of meta-programming: software programs (in a wide sense) are the objects-of-interest 
that are being analyzed, transformed or generated. 
Rascal can be applied in domains ranging from compiler construction and implementing domain-specific languages to constraint solving and software renovation.

Since representation of information is central to the approach, Rascal provides a rich set of built-in data types. 
To support extraction and analysis, parsing and advanced pattern matching are provided. 
High-level control structures make analysis and synthesis of complex data structures simple.

### Benefits 

*  __Familiar syntax__ in a _what-you-see is-what-you-get_ style is used even for sophisticated concepts 
   and this makes the language easy to learn and easy to use.
*  __Sophisticated built-in data types__ provide standard solutions for many meta-programming problems.
*  __Safety__ is achieved by finding most errors before the program is executed and by making common errors
   like missing initializations or invalid pointers impossible. 
*  __Local type inference__ makes local variable declarations redundant.
*  __Pattern matching__ can be used to analyze all complex data structures.
*  __Syntax definitions__ make it possible to define new and existing languages and to write tools for them.
*  __Visiting__ makes it easy to traverse data structures and to extract information from them or to synthesize results.
*  __Templates__ enable easy code generation.
*  __Functions as values__ permit programming styles with high re-use.
*  __Generic types__ allow writing functions that are applicable for many different types.
*  __Eclipse integration__ makes Rascal programming a breeze. All familiar tools are at your fingertips.



