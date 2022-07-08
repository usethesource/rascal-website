---
sidebar_position: 12
title: Glossary
---

**Synopsis.**

Overview of important terms and concepts.

**Description.**

Rascalopedia gives a quick overview of the most important terms and concepts that are relevant for metaprogrammers in
general and metaprogrammers using Rascal in particular.

Rascalopedia is work in progress. Please send us your suggestions for new concepts.

These are the currently covered topics:

  - [AbstractDataType](#abstractdatatype): A definition of a data type.

  - [Abstract Syntax Tree](#abstractsyntaxtree): Representation of the abstract syntactic structure of a
    program.

  - [Compiler](#compiler): Tranform source code to an executable form.

  - [Domain Specific Language](#domainspecificlanguage): Programming language targeted for a particular
    application domain.

  - [Dynamic Semantics](#dynamicsemantics): Description of the execution behaviour of a program.

  - [Grammar](#grammar): A synonym for [Syntax](#syntax).

  - [Interpreter](#interpreter): Directly execute the statements of a program.

  - [Language](#language): The set of strings defined by a [Grammar](#grammar).

  - [Language Definition](#languagedefinition): Description of all aspects of a language.

  - [List](#list): An ordered sequence of values.

  - [MetaProgramming](#metaprogramming): Analysis or transformation of one program by another program.

  - [ParseTree](#parsetree): Detailed represention of the concrete syntactic structure of a program.

  - [Parser](#parser): Check that a text adheres to the rules of a language (and return a
    [ParseTree](#parsetree)).

  - [Prettyprinter](#prettyprinter): Transform an [Abstract Syntax Tree](#abstractsyntaxtree)
    into a formatted string.

  - [Refactoring](#refactoring): Restructuring source code to improve its internal structure without
    changing its external behaviour.

  - [Relation](#relation): An unordered set of tuples.

  - [Scope](#scope): The visibility and accessibility of names in a program.

  - [Set](#set): An unordered collection of values without duplicates.

  - [Software Engineering](#softwareengineering): Discpline of design, building and maintaining software.

  - [Software Evolution](#softwareevolution): Understanding and managing the continuous change of software.

  - [Software Metric](#softwaremetric): A metric to measure a source code property.

  - [Static Semantics](#staticsemantics): Description of the properties of a program that can be
    determined/checked before it is executed.

  - [Syntax](#syntax): The rules that describe correctly structured programs in a language.

  - [Testing](#testing): Determine that the quality and functionality of software.

  - [Tuple](#tuple): An ordered, fixed length, sequence of values of possibly different type.

  - [Typechecker](#typechecker): Checks the type rules for a source language.

  - [Visualization](#visualization): Visual presentation of scientific or abstract data.

## AbstractDataType

**Synopsis.**

A definition of a data type.

**Description.**

An [Abstract Data Type](http://en.wikipedia.org/wiki/Abstract_data_type) is a mathematical description of a structure
that can be implemented in various ways. For instance, a stack data type can be characterized by `empty` (the empty
stack), two functions `push` and `pop` and axioms that define them. At the implementation level, a stack can be
implemented using a list, array or something else.

In functional languages, and also in Rascal, abstract datatypes (or ADTs for short) are used to define new data types.
Well-known examples are [stack](http://en.wikipedia.org/wiki/Stack_(data_structure)) and
[tree](http://en.wikipedia.org/wiki/Tree_(data_structure)).

See [Algebraic Data Types](/docs/Rascal#ADT) and [Constructors](/docs/Rascal#Constructor) in the
[Rascal Language Reference](/docs/Rascal).

### Abstract Data Types in Daily Life

  - A stack of trays in the local cafetaria: ![dispenser](/images/dispenser.jpg)
    [credit](http://www.thermo-box.co.uk/fimi-food-transport-and-handling-products/self-levelling-heated-and-unheated-plate-and-tray-systems.html)

  - A tree: ![tree](/images/tree.jpg) [credit](http://free-extras.com/images/tree-569.htm)

  - Coral: ![coral](/images/coral.jpg) [credit](http://blog.enn.com/?p=476)

### Abstract Data Types in computer science

  - The run-time stack of a programming language interpreter.

  - A search tree.

  - An ontology.

### Abstract Data Types in Rascal

  - A tree data type:

<!-- end list -->

    data MyTree = leaf(int n) | tree(str name, MyTree left, MyTree right);

## Abstract Syntax Tree

**Synopsis.**

Representation of the abstract syntactic structure of a program.

**Description.**

A [ParseTree](#parsetree) is a detailed and very precise represention of the concrete syntactic structure
of a program. It may even be so detailed that it contains every space, comment and parenthesis in the original source
text. In many cases a less detailed representation is sufficient and an abstract syntax tree (or AST for short) is used.

**Examples.**

For the input sentence

![example-text](/images/example-text.png)

the parse tree (left) and abstract syntax tree (right) may look as follows:

![parse-ast](/images/parse-ast.png)

Note that the parse tree on the left did not preserve the spaces in the original text but there are parse tree formats
(including the one used by Rascal) that preserve all textual information.

## Compiler

**Synopsis.**

Tranform source code to an executable form.

**Description.**

A [compiler](http://en.wikipedia.org/wiki/Compiler) transforms the source code of a program (in a source langue) to an
executable form (in a target language) and consists of the following phases:

  - [Parser](#parser): read the source code and build an [Abstract Syntax
    Tree](#abstractsyntaxtree).

  - [Typechecker](#typechecker): perform a semantic analysis of the code, resolve all names and verify that
    the program is type correct.

  - Optimisation: perform optimisations (e.g., constant folding, dead code elimination, call unfolding). This can be
    seen as a form of [Refactoring](#refactoring).

  - Code generation: generate the final code, this can be asembly language or directly executable code.

## Domain Specific Language

**Synopsis.**

Programming language targeted for a particular application domain.

  - SQL (querying data bases).

  - HTML (web pages).

  - CSS (presentation of HTML pages).

  - Excel (spreadsheets).

  - BibTex (bibliography).

  - BNF (grammars).

  - Regular expressions (text matching).

## Dynamic Semantics

**Synopsis.**

Description of the execution behaviour of a program.

**Description.**

Dynamic semantics describes the execution behaviour of a program and includes:

  - Treatment of declarations, names, variables and [Scope](#scope)s.

  - Execution of procedures, statements and expressions.

Contrast with [Static Semantics](#staticsemantics) that describes pre-execution behaviour.

## Grammar

**Synopsis.**

A synonym for [Syntax](#syntax).

## Interpreter

**Synopsis.**

Directly execute the statements of a program.

**Description.**

There are two methods to execute a program that is written in some source language:

  - An [Interpreter](http://en.wikipedia.org/wiki/Interpreter_(computing)) directly executes the source statements
    (but see the variations below).

  - A [Compiler](#compiler) translates the source program to some efficient executable form. That
    executable form is then executed by a hardware processor.

Interpreters exist in many flavours:

1.  Direct execution of the source.

2.  First parse the source text and build an [Abstract Syntax Tree](#abstractsyntaxtree) that is then
    interpreted.

3.  As (2), but convert the AST first to an intermediate form that is more suitable for execution. Then interpret that
    intermediate form.

4.  As (2), but compile frequently executed parts of the the AST to executable code.

Clearly, going down this list, the interpreter more and more starts resembling a compiler.

The advantages of interpreters versus compiler are:

  - Interpreter:
    
      - Pro: simpler than compiler, faster development loop, better debugging facilities, better error messages.
    
      - Con: slower.

  - Compiler:
    
      - Pro: fast execution.
    
      - Con: complex, optimizations are error-prone.

## Language

**Synopsis.**

The set of strings defined by a [Grammar](#grammar).

**Description.**

A [Grammar](#grammar) or [Syntax](#syntax) defines the formation rules for a language. A
language is the (possible infinite) set of strings that are defined by a grammar.

  - The language of strings of at most 5 `a` 's: the finite set `{"a", "aa", "aaa", "aaaa", "aaaaa"}`.

  - The language of strings that correspond to even numbers: the infinite set `{"0", "2", "4", "6", …​}`

  - The Java language: the infinite set of syntactically correct Java programs.

## Language Definition

**Synopsis.**

Description of all aspects of a language.

**Description.**

A language definition defines all relevant aspects of a programming language or [Domain Specific
Language](#domainspecificlanguage) and includes:

  - A [Grammar](#grammar) (including lexical and contect-free syntax).

  - Rules to describe the textual formatting of a language. These rules are sufficient to generate a
    [Prettyprinter](#prettyprinter) for it.

  - Rules that describe the [Static Semantics](#staticsemantics) of a language. These rules are sufficient
    to generate a [Typechecker](#typechecker).

  - Rules that describe the [Dynamic Semantics](#dynamicsemantics) of a language. These rules are
    sufficient to generate an [Interpreter](#interpreter) for it.

  - Rules how to generate code.

Other aspects of a language definition may include editor behaviour, highlighting, debugging, outlining, auto-completion
and more.

## List

**Synopsis.**

An ordered sequence of values.

**Description.**

A list is a sequence of values with the following properties:

  - The list maybe empty.

  - The values in the list are *ordered*.

  - The same value may occur more than once.

  - The list has a size that is equal to the number of values in the list.

  - Each element in a list *L* has an index. The first element has index 0. The last element has index `size(L)-1`.

Formally, a list can be defined as follows. Given the domains `ELEM` (elements) and `LIST` (lists) and the functions:

```rascal
nil :             -> LIST
cons: ELEM x LIST -> LIST
head: LIST        -> ELEM
tail: LIST        -> LIST
```

`nil` and `cons` are so-called *constructor functions* that define the values in `LIST`. They can be paraphrased as:

  - The *empty list* `nil` is an element of `LIST`.

  - If `e` is an element of `ELEM` and `l` is an element of LIST, then `cons(e, l)` is also an element in `LIST`.

`head` (take the first element) and `tail` (take the remainder of a list) are defined functions characterized by the
axioms:

```rascal
head(cons(e, l)) = e
tail(cons(e, l)) = l
```

The cases `head(nil)` and `tail(nil)` are left undefined (and usually correspond to a runtime error in a programming
language).

In Rascal, lists are surrounded by brackets `[` and `]` and the elements are separated by commas. Each list has a type
of the form `list[T]`, where *T* is the smallest common type of all list elements. Read the description of [lists and
their operators](/docs/Rascal#List) and of [library functions on lists](/docs/Libraries#list).

### Lists in Daily Life

  - A line of people waiting for the super market checkout or bus stop. ![bustop](/images/queue.png)
    [credit](http://www.realbollywood.com)

  - The wagons of a train.

  - The Top 100 Music Charts. ![hot100.png](/images/hot100.png)
    [credit](http://www.billboard.com/charts/hot-100#/charts/hot-100)

  - Twitter users ordered according to number of followers.

  - A *to do* list.

### Lists in computer science

  - The locations in a computer memory.

  - The list of processes that use most cpu time.

  - The list of procedures that are called by a given procedure.

### Lists in Rascal

  - The empty list: `[]`. Its type is `list[void]`.

  - A list of integers: `[3, 1, 4]`. Its type is `list[int]`.

  - A list of mixed-type values: `[3, "a", 4]`. Its type is `list[value]`.

## MetaProgramming

**Synopsis.**

Analysis or transformation of one program by another program.

**Description.**

All programs have data as input and produce other data as output. A typical example is a desktop calculator program:
after entering some numbers and operators, the program displays an answer. For most programs the data are numeric
(calculator, spreadsheet) or textual (text editor, word processor).

A *metaprogram* is a program that uses programs as data. Writing metaprograms is called
[metaprogramming](http://en.wikipedia.org/wiki/Metaprogramming).

A metaprogram has to be written in some programming language itself. This is called the *metalanguage*.

The program that is manipulated by the metaprogram is called the *source program* (also: *object program*) and is
written in the *source language* (also: *object language*).

In some cases the metaprogram transforms the source program into a *target program* in a *target language*.

**Examples.**

A [Refactoring](#refactoring) tool for restructuring Java code:

  - Metaprogram: the refactoring tool.

  - Metalanguage: in most cases Java.

  - Source program: the user’s Java program to be refactored.

  - Source language: Java.

  - Target program: the refactored user’s program.

  - Target language: Java.

A Java [Compiler](#compiler):

  - Metaprogram: the Java compiler.

  - Metalanguage: in most cases Java.

  - Source program: the user’s Java program to be compiled.

  - Source language: Java.

  - Target program: the code that is generated by the compiler.

  - Target language: instructions for the JVM (Java Virtual Machine) or machine code, depending on the hardware
    platform.

A tool to compute [Software Metric](#softwaremetric)s of Java programs

  - Metaprogram: the metrics tool.

  - Metalanguage: varies per tool: Java, Rascal.

  - Source program: the user’s Java program for metrics will be computed.

  - Source language Java.

  - Target program: the value of the computed metric.

  - Target language: number.

## ParseTree

**Synopsis.**

Detailed represention of the concrete syntactic structure of a program.

**Description.**

A parse tree is a detailed and very precise represention of the concrete syntactic structure of a program. It may even
be so detailed that it contains every space, comment and parenthesis in the original source text.

**Examples.**

A parse tree for the sentence ![example](/images/example-text.png)

![parse-tree](/images/parse-tree.png)

## Parser

**Synopsis.**

Check that a text adheres to the rules of a language (and return a [ParseTree](#parsetree)).

**Description.**

A [parser](http://en.wikipedia.org/wiki/Parsing) checks that a text in language *L* indeed adheres to the syntax rules
of language *L*. There are two possible answers:

  - *Yes*. A [ParseTree](#parsetree) is returned that shows how the text adheres to the syntax rules.

  - *No*. Error messages pin point the location where the text deviates from the syntax rules.

This is shown below:

![parser](/images/parser.png)

## Prettyprinter

**Synopsis.**

Transform an [Abstract Syntax Tree](#abstractsyntaxtree) into a formatted string.

**Description.**

A [pretty printer](http://en.wikipedia.org/wiki/Prettyprint) formats the source code of programs. Alternative names are
*formatter* or *beautifier*. Pretty printers differ in the inputs they accept:

  - The source text itself.

  - A [ParseTree](#parsetree) that corresponds to the source text. This variant is also called *unparser*.

  - An [Abstract Syntax Tree](#abstractsyntaxtree) that corresponds to the source text.

Pretty printers also differ in flexibility. They differ in:

  - The source language(s) they can accept.

  - The adaptability of the formatting rules.

**Examples.**

The program fragment

```rascal
if(x > 10) { System.err.println("x > 10"); } else { System.err.println("x <= 10"); }
```

can be pretty printed in many different ways. Here are two variants examples:

```rascal
if(x > 10) {
   System.err.println("x > 10");
} else {
   System.err.println("x <= 10");
}
```

```rascal
if( x > 10 )
{
  System.err.println("x > 10");
} else
{
   System.err.println("x <= 10");
}
```

## Refactoring

**Synopsis.**

Restructuring source code to improve its internal structure without changing its external behaviour.

**Description.**

Refactoring was popularized by [Martin Fowler](http://martinfowler.com/refactoring/) and aims at improving source code
quality. The basic philosophy is to identify small, atomic, refactoring steps that improve the internal structure of the
code but do not change its external behaviour. The supposed simplicity of these steps must guarantee their correctness.

Atomic steps can be combined to create large and complex refactorings. The major Interactive Development
Environements — [Eclipse](http://www.eclipse.org/), [IntelliJ](http://www.jetbrains.com/idea/), [Visual
Studio](http://www.microsoft.com/visualstudio/en-us) — provide interactive support for refactoring.

**Examples.**

Some well-known refactorings are:

  - [Rename Method](http://martinfowler.com/refactoring/catalog/renameMethod.html)

  - [Encapsulate Field](http://martinfowler.com/refactoring/catalog/encapsulateField.html)

  - [Extract Methods](http://martinfowler.com/refactoring/catalog/extractMethod.html)

## Relation

**Synopsis.**

An unordered set of tuples.

**Description.**

In mathematics, given sets *D*<sub>1</sub>, *D*<sub>2</sub>, …​ *D*<sub>n</sub>, a *n*-ary relation *R* is characterized
by *R* SUBSETEQ *D*<sub>1</sub> × *D*<sub>2</sub> × …​ × *D*<sub>n</sub>. In other words, *R* consists of a set of
tuples \< *V<sub>1</sub>*, …​, *V<sub>n</sub>* \> where each *V*<sub>i</sub> is an element of the set *D*<sub>i</sub>.
When *n* = 2, we call the relation a [binary relation](http://en.wikipedia.org/wiki/Relation_(mathematics)).

In [database theory](http://en.wikipedia.org/wiki/Relational_algebra), a relation is a table with a heading and an
unordered set of tuples:

| *D<sub>1</sub> Name<sub>1</sub>* | *D<sub>2</sub> Name<sub>2</sub>* | …​ | *D<sub>n</sub> Name<sub>n</sub>* |
| -------------------------------- | -------------------------------- | -- | -------------------------------- |
| *V<sub>11</sub>*                 | *V<sub>12</sub>*                 | …​ | *V<sub>1n</sub>*                 |
| *V<sub>21</sub>*                 | *V<sub>22</sub>*                 | …​ | *V<sub>2n</sub>*                 |
| *V<sub>31</sub>*                 | *V<sub>32</sub>*                 | …​ | *V<sub>3n</sub>*                 |
| …​                               | …​                               | …​ |                                  |

In Rascal, a relation is a set of tuples and is characterized by the type: `rel[D1 Name1, D2 Name2, …​, Dn Namen]` See
[Relation Values](/docs/Rascal#Relation) and for a description of relations and their operators (since relations are
sets all set operators also apply to them, see [Set Values](/docs/Rascal#Set)) and [functions on
relations](/docs/Libraries#relation) (and here again, since relations are sets all set operators also apply to
them, see [functions on sets](/docs/Libraries#set)).

### Relations in Daily Life

  - The *parent-of* or *friend-of* relation between people. ![char-relation](/images/char-relation.jpg) [credit](http://www.translatedmemories.com/bookpgs/Pg10-11CharRelation.jpg)

  - A character relation map, describing the relations between the characters in a play or soap series.

  - A listing of the top 2000 songs of all times including the position, artist name, song title, the year the song was published. ![top2000-2010](/images/top2000-2010.jpg) [credit](http://top2011.radio2.nl/lijst/2010)

### Relations in computer science

  - A relational data base.

  - Login information including user name, password, home directory, etc.

### Relations in Rascal

  - A parent child relation:

<!-- end list -->

    rel[str parent, str child] = {
    <"Paul", "Eva">,
    <"Paul", "Thomas">,
    <"Jurgen", "Simon">,
    <"Jurgen", "David">,
    <"Tijs", "Mats">
    };

  - A fragment of the top 2000 relation:

<!-- end list -->

    rel[int position, str artist, str title, int year] Top2000 = {
    <1, "Eagles", "Hotel California",1977>,
    <2, "Queen", "Bohemian rhapsody", 1975>,
    <3, "Boudewijn de Groot", "Avond", 1997>,
    ...
    };

## Scope

**Synopsis.**

The visibility and accessibility of names in a program.

## Set

**Synopsis.**

An unordered collection of values without duplicates.

**Description.**

A set is a collection of values with the following properties:

  - The set maybe empty.

  - The values in the list are *unordered*.

  - A value can only occur once.

  - The set has a size that is equal to the number of values in the set.

In Rascal, sets are surrounded by braces `{` and `}` and the elements are separated by commas. Each set has a type of
the form `set[T]`, where *T* is the smallest common type of all set elements. Read the description of [sets and their
operators](/docs/Rascal#Set) and of [library functions on sets](/docs/Libraries#set).

### Sets in Daily Life

  - A cutlery set consisting of knife, fork and the like. ![cutlery-set](/images/cutlery-set.jpg)
    [credit](http://www.ikea.com/gb/en/catalog/products/50087185/)

  - A crowd of people.

  - A stamp collection (but be aware that the duplicates will disappear\!)
    ![stamp-collecting](/images/stamp-collecting.jpg)
    [credit](http://www.life123.com/hobbies/antiques-collectibles/stamps/stamp-collecting-2.shtml)

### Sets in computer science

  - The files in a directory. Of course, when you order them (by name, modification date) you need a
    [List](#list) to represent them.

  - The set of moves an opponent can play in a game.

  - The set of nodes in a network.

### Sets in Rascal

  - The empty set: `{}`. Its type is `set[void]`.

  - A set of integers: `{3, 1, 4}`. Its type is `set[int]`.

  - A set of mixed-type values: `{3, "a", 4}`. Its type is `set[value]`.

## Software Engineering

**Synopsis.**

Discpline of design, building and maintaining software.

**Description.**

[Software engineering](http://en.wikipedia.org/wiki/Software_engineering) is the discipline that encompasses all aspects
of creating software and encompasses:

  - *Requirements engineering*: determine what the future owners and users of a software system expect.

  - *Software Design*: design the global architecture as well as as the technical details.

  - *Software Construction*: build software according to its specification.

  - *Software Testing*: test that software works according to its specifications.

  - *Software Deployment*: distribute software to its users.

  - *Software Maintenance*: maintain software after it has been deployed.

There are various models to organize the above activities. The classical [waterfall
model](http://en.wikipedia.org/wiki/Waterfall_model) organizes them sequentially. Variations are more iterative and
allow to go back to earlier phases. Waterfall-based methods follow solid engineering practices but may lead to much
bureacracy and an inflexible process that cannot easily cope with changing requirements.

Other approaches promote [agile development](http://en.wikipedia.org/wiki/Agile_software_development) and are
characterized by very short iterations that include all the above activities. Agile methods aim to produce prototypes as
early as possible and this makes it easier for future users to assess the prototype and suggest changes.

## Software Evolution

**Synopsis.**

Understanding and managing the continuous change of software.

**Description.**

[Meir M. Lehman](http://en.wikipedia.org/wiki/Meir_M._Lehman) was one of the first scientist to observe that software
evolves over its lifetime. He formulated several
[laws](http://en.wikipedia.org/wiki/Lehman’s_laws_of_software_evolution) about software evolution. Here are three
examples of his laws (slightly paraphrased):

  - *Continuing Change*: Programs must be continually adapted or they become progressively less usefull.

  - *Increasing Complexity*: When a program evolves, its complexity increases unless work is done to maintain or reduce
    it.

  - *Continuing Growth*: The functional content of programs must be continually increased to maintain user satisfaction
    over their lifetime.

*Software evolution* is a specialisation in [Software Engineering](#softwareengineering) that address the
following:

  - Understanding the reasons for software evolution.

  - Understanding the impact of software evolution on the structure and quality of source code.

  - Developing [Software Metric](#softwaremetric)s and tools to measure the impact of software evolution.

  - Developing methods and tools for the better understanding of source code.

  - Developing [Refactoring](#refactoring) tools to counter the effects of software evolution.

## Software Metric

**Synopsis.**

A metric to measure a source code property.

**Description.**

A software metric is a quantitative measure about source code. A combination of one or more metrics can be used to
quantitatively characterize aspects of [software quality](http://en.wikipedia.org/wiki/Software_quality). Various
quality aspects are of interest such as size, reliability, maintainability and so on.

**Examples.**

Examples of software metrics are:

  - Source lines of code ([SLOC](http://en.wikipedia.org/wiki/Source_lines_of_code)) measures the size of software. The
    larger the size, the more is needed to build and maintain it.

  - [Cyclomatic complexity](http://en.wikipedia.org/wiki/Cyclomatic_complexity) measures logical complexity of code.
    Software components with a high cyclomatic complexity are hard to understand and maintain.

  - [Coupling](http://en.wikipedia.org/wiki/Coupling_(computer_science)) measures the coupling between software
    components. High coupling indicates problems in the structure of a system.

## Static Semantics

**Synopsis.**

Description of the properties of a program that can be determined/checked before it is executed.

**Description.**

The static semantics of a program describe all properties that can be determined before the program is executed. A
[Typechecker](#typechecker) is a tool that checks the properties of a program as described by its static
semantics.

Static semantics describes properties that are relevant before a program is executed and differs from [Dynamic
Semantics](#dynamicsemantics) that describes the execution behaviour itself.

**Examples.**

Examples of static semantic properties include:

  - The proper use of types.

  - The proper use of names.

Language with substantial static semantics: Java, Haskell, Rascal. Languages with only dynamic semantics: Python, Ruby.

## Syntax

**Synopsis.**

The rules that describe correctly structured programs in a language.

**Description.**

According to the [Merriam-Webster](http://www.merriam-webster.com/dictionary/syntax) dictionary *syntax* means

  - the way in which linguistic elements (as words) are put together to form constituents (as phrases or clauses);

  - the part of grammar dealing with this.

[Dictionary.com](http://dictionary.reference.com/browse/syntax) is more elaborate and defines *syntax* as:

  - *Linguistics*:
    
      - a. the study of the rules for the formation of grammatical sentences in a language.
    
      - b. the study of the patterns of formation of sentences and phrases from words.
    
      - c. the rules or patterns so studied: English syntax.
    
      - d. a presentation of these: a syntax of English.
    
      - e. an instance of these: the syntax of a sentence.

  - *Computers*: the grammatical rules and structural patterns governing the ordered use of appropriate words and
    symbols for issuing commands, writing code, etc., in a particular software application or programming language.

[Wikipedia](http://en.wikipedia.org/wiki/Syntax_(programming_languages) says: the syntax of a programming language is
the set of rules that define the combinations of symbols that are considered to be correctly structured programs in that
language.

In linguistics, a [Grammar](#grammar) is a concept that includes syntax. However, in the cases that are
relevant for meta-programming they can be used interchangeably. We will use them as synonyms.

In programming languages a further subdivision can be made:

  - *Lexical syntax* defines the form of the lowest level textual items such as keywords, numeric constants, and string
    constants.

  - *Context-free syntax* defines the global structure of statements, procedures and modules.

A [Parser](#parser) checks that a text in language *L* indeed adheres to the syntax rules of language *L*.
There are two possible answers:

  - *Yes*. A [ParseTree](#parsetree) is returned that shows how the text adheres to the syntax rules.

  - *No*. Error messages pin point the location where the text deviates from the syntax rules.

## Testing

**Synopsis.**

Determine that the quality and functionality of software.

**Description.**

[Software testing](http://en.wikipedia.org/wiki/Software_testing) is the process to determine that a software system
meets its specifications and works as expected. This is done by manually or automatically executing test cases and
observe the result.

## Tuple

**Synopsis.**

An ordered, fixed length, sequence of values of possibly different type.

**Description.**

A tuple is an ordered fixed length sequence of values of possibly different type.

In Rascal a tuple is written as `<` *V*<sub>1</sub>, …​, *V*<sub>n</sub> `>` and a tuple type has the form `type[T1, …​,
Tn]`, *T*<sub>i</sub> represents the type of element *i*. Tuple have two major applications:

  - As tuples in a [Relation](#relation).

  - For ad-hoc packaging of values, for instance, to return multiple-values from a function.

See [Tuple Values](/docs/Rascal#Tuple) for the operations on tuples.

## Typechecker

**Synopsis.**

Checks the type rules for a source language.

**Description.**

A [type system](http://en.wikipedia.org/wiki/Type_system) is a set of rules that defines how values, variables and
functions may be used in a given programming languages.

A type checker, checks that these rules are enforced. The moment that type checking can be done differs per type system,
but two extremes exist:

  - *Static type checking*: all checking is done before the program is executed.

  - *Dynamic type checking*: all checking is done during execution of the program.

  - *Hybrid type checking*: when possible checks are done before execution, the remaining checks are done during
    execution.

These different styles of type checking have different trade offs:

  - Static typechecking:
    
      - Pro: most errors are found before execution.
    
      - Con: more type declarations have to be written by the programmer and in some situations the type systems limits
        what can be expressed.

  - Dynamic checking:
    
      - Pro: most flexible and expressive.
    
      - Con: errors can only be found during execution.

  - Hybrid (or gradual) type checking:
    
      - Pro: a reasonable compromise.
    
      - Con not be as safe as full static typechecking.

<!-- end list -->

  - If in Java a variable has been declared as `bool` it cannot be added to an integer.

  - If in Java a method has three formal parameters, it cannot be called with four actual parameters.

  - In Python, a variable can first get a string value assigned and later on an integer value.

## Visualization

**Synopsis.**

Visual presentation of scientific or abstract data.

**Description.**

Visualization is the activity of presenting scientific data or abstract structures in a visual form. There are several
subareas:

  - [Scientific visualization](http://en.wikipedia.org/wiki/Scientific_visualization): deals with data that are
    geometric in nature and may have a time dimension.

  - [Information visualization](http://en.wikipedia.org/wiki/Information_visualization)(: deals with abstract data
    structures like trees, graphs and relations.

  - [Software Visualization](http://en.wikipedia.org/wiki/Software_visualization): deals with facts related to software.

The [Visualization Library](/docs/Libraries#vis) library provides a framework for interactive visualization. Simple
examples can be found in [visualization recipes](/docs/Recipes#Visualization).

### Scientific visualization

**Examples.**

Robert vam Liere and Wim de Leeuw have visualized liquid flows. There is also an
[animated](http://homepages.cwi.nl/~robertl/movies/flow1.mpg) version.

![flow](/images/flow.jpg)

### Information Visualization

Facebook’s [Friend Wheel](http://apps.facebook.com/friendwheel/) shows the connection between friends:

![friends](/images/friends.jpg)

### Software Visualization

Stephen Eick [visualizes](http://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.67.962) the frequency of execution for
each line in all source files of a software system.

![frequency](/images/freq.png)

Daniel Bierwirth
[shows](http://www.danielbierwirth.de/index.php/reseachprojects/8-myresearch/mastercurriculumresearchcat/73-bundle-view-software-visualization)
the connections (colored lines) between system components (at outer circle).

![bundle](/images/bundle.jpg)
