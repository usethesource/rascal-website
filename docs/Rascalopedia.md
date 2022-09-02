## Document preparation issues

The following issues have been detected while preparing this draft document. It is not ready for publication.

1. [warning] |project://rascal/src/org/rascalmpl/courses/Rascalopedia/Visualization/Visualization.md|:27,0 Broken concept link: Libraries:Libraries-Vis
1. [warning] |project://rascal/src/org/rascalmpl/courses/Rascalopedia/Grammar/Grammar.md|:5,0 Broken concept link: Concept-Syntax-Syntax
1. [warning] |project://rascal/src/org/rascalmpl/courses/Rascalopedia/Relation/Relation.md|:39,0 Broken concept link: Libraries:Libraries-Relation
1. [warning] |project://rascal/src/org/rascalmpl/courses/Rascalopedia/Relation/Relation.md|:41,0 Broken concept link: Libraries:Libraries-Set
1. [warning] |project://rascal/src/org/rascalmpl/courses/Rascalopedia/Language/Language.md|:18,0 Ambiguous concept link: Syntax resolves to all of {"#Languages-Lisra-Syntax","#Syntax-Syntax","#Concept-Syntax","#Languages-Pico-Syntax"}
1. [warning] |project://rascal/src/org/rascalmpl/courses/Rascalopedia/List/List.md|:50,0 Broken concept link: Libraries:Libraries-List
1. [warning] |project://rascal/src/org/rascalmpl/courses/Rascalopedia/AbstractSyntaxTree/AbstractSyntaxTree.md|:25,0 Ambiguous concept link: example-text.png resolves to all of {"/assets/3060d5ae-2272-4f59-b2e0-1ad2a1ba2b39.png","/assets/7aae588d-5848-4b81-8176-d97fd3631cf4.png"}
1. [warning] |project://rascal/src/org/rascalmpl/courses/Rascalopedia/ParseTree/ParseTree.md|:22,0 Ambiguous concept link: example-text.png resolves to all of {"/assets/3060d5ae-2272-4f59-b2e0-1ad2a1ba2b39.png","/assets/7aae588d-5848-4b81-8176-d97fd3631cf4.png"}
1. [warning] |project://rascal/src/org/rascalmpl/courses/Rascalopedia/AbstractDataType/AbstractDataType.md|:25,0 Ambiguous concept link: Rascal:Declarations-AlgebraicDataType resolves to all of {"/Rascal.md#Declarations-AlgebraicDataType","#Declarations-AlgebraicDataType"}
1. [warning] |project://rascal/src/org/rascalmpl/courses/Rascalopedia/Set/Set.md|:29,0 Broken concept link: Libraries:Prelude-Set
1. [warning] |project://rascal/src/org/rascalmpl/courses/Rascalopedia/Set/Set.md|:46,0 Broken concept link: Expressions-Values-List-List

## Rascalopedia {#Rascalopedia}

### Synopsis 
Overview of important terms and concepts.



### Function 
       


### Description 

Rascalopedia gives a quick overview of the most important terms and concepts
that are relevant for metaprogrammers in general and metaprogrammers using Rascal in particular.

Rascalopedia is work in progress. Please send us your suggestions for new concepts.

These are the currently covered topics:

* [Rascalopedia:Interpreter](/Rascalopedia.md#Interpreter-Interpreter)
* [Rascalopedia:Visualization](/Rascalopedia.md#Visualization-Visualization)
* [Rascalopedia:Meta programming](/Rascalopedia.md#MetaProgramming-MetaProgramming)
* [Rascalopedia:Grammar](/Rascalopedia.md#Grammar-Grammar)
* [Rascalopedia:Relation](/Rascalopedia.md#Relation-Relation)
* [Rascalopedia:Tuple](/Rascalopedia.md#Tuple-Tuple)
* [Rascalopedia:Prettyprinter](/Rascalopedia.md#Prettyprinter-Prettyprinter)
* [Rascalopedia:Language definition](/Rascalopedia.md#LanguageDefinition-LanguageDefinition)
* [Rascalopedia:Language](/Rascalopedia.md#Language-Language)
* [Rascalopedia:Scope](/Rascalopedia.md#Scope-Scope)
* [Rascalopedia:Parser](/Rascalopedia.md#Parser-Parser)
* [Rascalopedia:Static semantics](/Rascalopedia.md#StaticSemantics-StaticSemantics)
* [Rascalopedia:Software metric](/Rascalopedia.md#SoftwareMetric-SoftwareMetric)
* [Rascalopedia:Dynamic semantics](/Rascalopedia.md#DynamicSemantics-DynamicSemantics)
* [Rascalopedia:Testing](/Rascalopedia.md#Testing-Testing)
* [Rascalopedia:Software engineering](/Rascalopedia.md#SoftwareEngineering-SoftwareEngineering)
* [Rascalopedia:Software evolution](/Rascalopedia.md#SoftwareEvolution-SoftwareEvolution)
* [Rascalopedia:List](/Rascalopedia.md#List-List)
* [Rascalopedia:Abstract syntax tree](/Rascalopedia.md#AbstractSyntaxTree-AbstractSyntaxTree)
* [Rascalopedia:Parse tree](/Rascalopedia.md#ParseTree-ParseTree)
* [Rascalopedia:Abstract data type](/Rascalopedia.md#AbstractDataType-AbstractDataType)
* [Rascalopedia:Refactoring](/Rascalopedia.md#Refactoring-Refactoring)
* [Rascalopedia:Set](/Rascalopedia.md#Set-Set)
* [Rascalopedia:Syntax](/Rascalopedia.md#Syntax-Syntax)
* [Rascalopedia:Domain specific language](/Rascalopedia.md#DomainSpecificLanguage-DomainSpecificLanguage)
* [Rascalopedia:Compiler](/Rascalopedia.md#Compiler-Compiler)
* [Rascalopedia:Typechecker](/Rascalopedia.md#Typechecker-Typechecker)


## Interpreter {#Interpreter-Interpreter}

### Synopsis 
Directly execute the statements of a program.



### Function 
       


### Description 

There are two methods to execute a program that is written in some source language:

*  An http://en.wikipedia.org/wiki/Interpreter_(computing)[Interpreter] directly executes the source statements (but see the variations below).
*  A [Compiler](#Compiler-Compiler) translates the source program to some efficient executable form. That executable form is then executed by a hardware
  processor.


Interpreters exist in many flavours:

1.  Direct execution of the source.
2.  First parse the source text and build an [Abstract Syntax Tree](#AbstractSyntaxTree-AbstractSyntaxTree) that is then interpreted.
3.  As (2), but convert the AST first to an intermediate form that is more suitable for execution.
  Then interpret that intermediate form.
4.  As (2), but compile frequently executed parts of the the AST to executable code.


Clearly, going down this list, the interpreter more and more starts resembling a compiler.

The advantages of interpreters versus compiler are:

*  Interpreter:
**  Pro: simpler than compiler, faster development loop, better debugging facilities, better error messages.
**  Con: slower.
*  Compiler:
**  Pro: fast execution.
**  Con: complex, optimizations are error-prone.






## Visualization {#Visualization-Visualization}

### Synopsis 
Visual presentation of scientific or abstract data.



### Function 
       


### Description 

Visualization is the activity of presenting scientific data or abstract structures
in a visual form. There are several subareas:

*  http://en.wikipedia.org/wiki/Scientific_visualization[Scientific visualization]: deals with data that are geometric in nature and
  may have a time dimension.
*  http://en.wikipedia.org/wiki/Information_visualization[Information visualization](: deals with abstract data structures like trees, graphs and relations.
* http://en.wikipedia.org/wiki/Software_visualization[Software Visualization]: deals with facts related to software.


The [Visualization Library]_Libraries:Libraries-Vis (broken link)_ library provides a framework for interactive visualization.
Simple examples can be found in [visualization recipes](/Recipes.md#Visualization-Visualization).

### Examples 

## Scientific visualization


Robert vam Liere and Wim de Leeuw have visualized liquid flows.
There is also an http://homepages.cwi.nl/~robertl/movies/flow1.mpg[animated] version.


![](/assets/80fcb35f-a4c9-4214-b19e-17665698bad4.jpg)



## Information Visualization


Facebook's http://apps.facebook.com/friendwheel/[Friend Wheel] shows the connection between friends:



![](/assets/1fb6f639-d515-4a64-8fbc-976a089cdf21.jpg)


## Software Visualization

Stephen Eick http://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.67.962[visualizes] the frequency of execution for each line
in all source files of a software system.


![](/assets/9a66beac-853e-4db8-ba3b-b04e1b33fa98.png)



Daniel Bierwirth http://www.danielbierwirth.de/index.php/reseachprojects/8-myresearch/mastercurriculumresearchcat/73-bundle-view-software-visualization[shows] the connections (colored lines) between system components (at outer circle).


![](/assets/288f396e-6fb8-472c-aabc-41cabc62fb74.jpg)





## MetaProgramming {#MetaProgramming-MetaProgramming}

### Synopsis 
Analysis or transformation of one program by another program.



### Function 
       


### Description 
All programs have data as input and produce other data as output.
A typical example is a desktop calculator program:
after entering some numbers and operators, the program displays an answer.
For most programs the data are numeric (calculator, spreadsheet)
or textual (text editor, word processor).

A _metaprogram_ is a program that uses programs as data. Writing
metaprograms is called http://en.wikipedia.org/wiki/Metaprogramming[metaprogramming].

A metaprogram has to be written in some programming language itself.
This is called the _metalanguage_.

The program that is manipulated by the metaprogram is called the _source program_ (also: _object program_)
and is written in the _source language_ (also: _object language_).

In some cases the metaprogram transforms the source program into a _target program_ in a _target language_. 

### Examples 

A [Refactoring](#Refactoring-Refactoring) tool for restructuring Java code:

*  Metaprogram: the refactoring tool.
*  Metalanguage: in most cases Java.
*  Source program: the user's Java program to be refactored.
*  Source language: Java.
*  Target program: the refactored user's program.
*  Target language: Java.


A Java [Compiler](#Compiler-Compiler):

*  Metaprogram: the Java compiler.
*  Metalanguage: in most cases Java.
*  Source program: the user's Java program to be compiled.
*  Source language: Java.
*  Target program: the code that is generated by the compiler.
*  Target language: instructions for the JVM (Java Virtual Machine) or machine code, depending on the hardware platform.


A tool to compute [Software Metric](#SoftwareMetric-SoftwareMetric)s of Java programs

*  Metaprogram: the metrics tool.
*  Metalanguage: varies per tool: Java, Rascal.
*  Source program: the user's Java program for metrics will be computed.
*  Source language Java.
*  Target program: the value of the computed metric.
*  Target language: number.




## Grammar {#Grammar-Grammar}

### Synopsis 

A synonym for _Concept-Syntax-Syntax (broken link)_.


## Relation {#Relation-Relation}

### Synopsis 
An unordered set of tuples.



### Function 
       


### Description 

In mathematics, given sets _D_₁, _D_₂, ... _D_ₙ, a
_n_-ary relation _R_ is characterized by _R_ &subseteq;  _D_₁ &times; _D_₂ &times; ... &times; _D_ₙ.
In other words, _R_ consists of a set of tuples < _V₁_, ..., _Vₙ_ > where each _V_ᵢ is an element of
the set _D_ᵢ. When _n_ = 2, we call the relation a http://en.wikipedia.org/wiki/Relation_(mathematics)[binary relation].

In http://en.wikipedia.org/wiki/Relational_algebra[database theory], a relation is a table with a heading and an unordered set of tuples:

| _D₁ Name₁_ | _D₂ Name₂_ | ... | _Dₙ Nameₙ_ |
| --- | --- | --- | --- |
| _V₁₁_        | _V₁₂_        | ... | _V~1n~_        |
| _V₂₁_        | _V₂₂_        | ... | _V~2n~_         |
| _V₃₁_        | _V₃₂_        | ... | _V~3n~_         |
| ...            | ...            | ... |                




In Rascal, a relation is a set of tuples and is characterized by the type:
`rel[D₁ Name₁, D₂ Name₂, ..., Dₙ Nameₙ]` 
See [Relation Values](/Rascal.md#Expressions-Values-Relation) and  for a description of relations and their operators
(since relations are sets all set operators also apply to them, see [Set Values](/Rascal.md#Expressions-Values-Set))
and [functions on relations]_Libraries:Libraries-Relation (broken link)_
(and here again, since relations are sets all set operators also apply to them, 
see [functions on sets]_Libraries:Libraries-Set (broken link)_).


### Examples 
## Relations in Daily Life

*  The _parent-of_ or _friend-of_ relation between people.
   ![](/assets/1cee5aad-5e2e-47a2-ad3a-0b8704195f5b.jpg)
   http://www.translatedmemories.com/bookpgs/Pg10-11CharRelation.jpg[credit]
*  A character relation map, describing the relations between the characters in a play or soap series.
*  A listing of the top 2000 songs of all times including the position, artist name, song title, the year the song was published.
   ![](/assets/d6916c68-b9ce-41cb-9894-2eb3faad598b.jpg)
   http://top2011.radio2.nl/lijst/2010[credit]


## Relations in computer science

*  A relational data base.
*  Login information including user name, password, home directory, etc.


## Relations in Rascal

*  A parent child relation:
```rascal
rel[str parent, str child] = {
<"Paul", "Eva">,
<"Paul", "Thomas">,
<"Jurgen", "Simon">,
<"Jurgen", "David">,
<"Tijs", "Mats">
};
```
*  A fragment of the top 2000 relation:
```rascal
rel[int position, str artist, str title, int year] Top2000 = {
<1, "Eagles", "Hotel California",1977>,
<2, "Queen", "Bohemian rhapsody", 1975>,
<3, "Boudewijn de Groot", "Avond", 1997>,
...
};
```




## Tuple {#Tuple-Tuple}

### Synopsis 
An ordered, fixed length, sequence of values of possibly different type.



### Function 
       


### Description 

A tuple is an ordered fixed length sequence of values of possibly different type.

In Rascal a tuple is written as `<` V₁, ..., Vₙ `>` and a tuple type has the form `type[T₁, ..., Tₙ]`,
_T_ᵢ represents the type of element _i_. Tuple have two major applications:

*  As tuples in a [Relation](#Relation-Relation).
*  For ad-hoc packaging of values, for instance, to return multiple-values from a function.


See [Tuple Values](/Rascal.md#Expressions-Values-Tuple) for the operations on tuples.





## Prettyprinter {#Prettyprinter-Prettyprinter}

### Synopsis 
Transform an [Abstract Syntax Tree](#AbstractSyntaxTree-AbstractSyntaxTree) into a formatted string.



### Function 
       


### Description 
A http://en.wikipedia.org/wiki/Prettyprint[pretty printer]
formats the source code of programs. Alternative names are _formatter_ or _beautifier_.
Pretty printers differ in the inputs they accept:

*  The source text itself.
*  A [Parse tree](#ParseTree-ParseTree) that corresponds to the source text. This variant is also called _unparser_.
*  An [Abstract Syntax Tree](#AbstractSyntaxTree-AbstractSyntaxTree) that corresponds to the source text.


Pretty printers also differ in flexibility. They differ in:

*  The source language(s) they can accept.
*  The adaptability of the formatting rules.

### Examples 
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



## Language Definition {#LanguageDefinition-LanguageDefinition}

### Synopsis 
Description of all aspects of a language.



### Function 
       


### Description 
A language definition defines all relevant aspects of a programming language or [Domain Specific Language](#DomainSpecificLanguage-DomainSpecificLanguage) and includes:

*  A [Grammar](#Grammar-Grammar) (including lexical and contect-free syntax).
*  Rules to describe the textual formatting of a language. 
  These rules are sufficient to generate a [Prettyprinter](#Prettyprinter-Prettyprinter) for it.
*  Rules that describe the [Static Semantics](#StaticSemantics-StaticSemantics) of a language.
  These rules are sufficient to generate a [Typechecker](#Typechecker-Typechecker).
*  Rules that describe the [Dynamic Semantics](#DynamicSemantics-DynamicSemantics) of a language. 
  These rules are sufficient to generate an [Interpreter](#Interpreter-Interpreter) for it.
*  Rules how to generate code.


Other aspects of a language definition may include editor behaviour, highlighting, debugging, outlining, auto-completion and more.





## Language {#Language-Language}

### Synopsis 
The set of strings defined by a [Grammar](#Grammar-Grammar).



### Function 
       


### Description 

A [Grammar](#Grammar-Grammar) or _broken:Syntax (ambiguous link)_ defines the formation rules for a language.
A language is the (possible infinite) set of strings that are defined by a grammar.

### Examples 

*  The language of strings of at most 5 `a` 's: the finite set `{"a",  "aa", "aaa", "aaaa", "aaaaa"}`.
*  The language of strings that correspond to even numbers: the infinite set `{"0", "2", "4", "6", ...}`
*  The Java language: the infinite set of syntactically correct Java programs.




## Scope {#Scope-Scope}

### Synopsis 
The visibility and accessibility of names in a program.



### Function 
       







## Parser {#Parser-Parser}

### Synopsis 
Check that a text adheres to the rules of a language (and return a [Parse tree](#ParseTree-ParseTree)).



### Function 
       


### Description 

A http://en.wikipedia.org/wiki/Parsing[parser] checks that a text in language _L_ indeed adheres 
to the syntax rules of language _L_. There are two possible answers:

*  _Yes_. A [Parse tree](#ParseTree-ParseTree) is returned that shows how the text adheres to the syntax rules.
*  _No_. Error messages pin point the location where the text deviates from the syntax rules.


This is shown below:


![](/assets/4bdecf1e-dd2e-45ce-8e47-313794e4b109.png)






## Static Semantics {#StaticSemantics-StaticSemantics}

### Synopsis 
Description of the properties of a program that can be determined/checked before it is executed.



### Function 
       


### Description 
The static semantics of a program describe all properties that can be determined before the program is executed.
A [Typechecker](#Typechecker-Typechecker) is a tool that checks the properties of a program as described by its static semantics.

Static semantics describes properties that are relevant before a program is executed and 
differs from [Dynamic Semantics](#DynamicSemantics-DynamicSemantics) that
describes the execution behaviour itself.

### Examples 

Examples of static semantic properties include:

*  The proper use of types.
*  The proper use of names.


Language with substantial static semantics: Java, Haskell, Rascal.
Languages with only dynamic semantics: Python, Ruby.





## Software Metric {#SoftwareMetric-SoftwareMetric}

### Synopsis 
A metric to measure a source code property.



### Function 
       


### Description 
A software metric is a quantitative measure about source code.
A combination of one or more metrics can be used to quantitatively characterize
aspects of http://en.wikipedia.org/wiki/Software_quality[software quality].
Various quality aspects are of interest such as size, reliability, maintainability and so on.

### Examples 

Examples of software metrics are:

*  Source lines of code (http://en.wikipedia.org/wiki/Source_lines_of_code[SLOC]) measures the size of software.
  The larger the size, the more is needed to build and maintain it.
*  http://en.wikipedia.org/wiki/Cyclomatic_complexity[Cyclomatic complexity] measures logical complexity of code.
  Software components with a high cyclomatic complexity are hard to understand and maintain.
* http://en.wikipedia.org/wiki/Coupling_(computer_science)[Coupling] measures the coupling between software components.
  High coupling indicates problems in the structure of a system.




## Dynamic Semantics {#DynamicSemantics-DynamicSemantics}

### Synopsis 
Description of the execution behaviour of a program.



### Function 
       


### Description 
Dynamic semantics describes the execution behaviour of a program and includes:

*  Treatment of declarations, names, variables and [Scope](#Scope-Scope)s.
*  Execution of procedures, statements and expressions.

Contrast with [Static Semantics](#StaticSemantics-StaticSemantics) that describes pre-execution behaviour.





## Testing {#Testing-Testing}

### Synopsis 
Determine that the quality and functionality of software.



### Function 
       


### Description 

http://en.wikipedia.org/wiki/Software_testing[Software testing] is the process to determine
that a software system meets its specifications and works as expected. This is done by 
manually or automatically executing test cases and observe the result.





## Software Engineering {#SoftwareEngineering-SoftwareEngineering}

### Synopsis 
Discpline of design, building and maintaining software.



### Function 
       


### Description 
http://en.wikipedia.org/wiki/Software_engineering[Software engineering] is the discipline that encompasses all aspects
of creating software and encompasses:

*  _Requirements engineering_: determine what the future owners and users of a software system expect.
*  _Software Design_: design the global architecture as well as as the technical details.
*  _Software Construction_: build software according to its specification.
*  _Software Testing_: test that software works according to its specifications.
*  _Software Deployment_: distribute software to its users.
*  _Software Maintenance_: maintain software after it has been deployed.


There are various models to organize the above activities. The classical http://en.wikipedia.org/wiki/Waterfall_model[waterfall model]
organizes them sequentially. Variations are more iterative and allow to go back to earlier phases.
Waterfall-based methods follow solid engineering practices but may lead to much bureacracy and an inflexible process that
cannot easily cope with changing requirements.

Other approaches promote http://en.wikipedia.org/wiki/Agile_software_development[agile development]
and are characterized by very short iterations that include all the above activities.
Agile methods aim to produce prototypes as early as possible and this makes it easier for future users
to assess the prototype and suggest changes.





## Software Evolution {#SoftwareEvolution-SoftwareEvolution}

### Synopsis 
Understanding and managing the continuous change of software.



### Function 
       


### Description 

http://en.wikipedia.org/wiki/Meir_M._Lehman[Meir M. Lehman] was one of the first scientist to observe
that software evolves over its lifetime. He formulated several http://en.wikipedia.org/wiki/Lehman's_laws_of_software_evolution[laws]
about software evolution. Here are three examples of his laws (slightly paraphrased):

*  _Continuing Change_: Programs must be continually adapted or they become progressively less usefull.
*  _Increasing Complexity_: When a program evolves, its complexity increases unless work is done to maintain or reduce it.
*  _Continuing Growth_: The functional content of programs must be continually increased to maintain user satisfaction over their lifetime.


_Software evolution_ is a specialisation in [Software Engineering](#SoftwareEngineering-SoftwareEngineering) that address the following:

*  Understanding the reasons for software evolution.
*  Understanding the impact of software evolution on the structure and quality of source code.
*  Developing [Software Metric](#SoftwareMetric-SoftwareMetric)s and tools to measure the impact of software evolution.
*  Developing methods and tools for the better understanding of source code.
*  Developing [Refactoring](#Refactoring-Refactoring) tools to counter the effects of software evolution.





## List {#List-List}

### Synopsis 
An ordered sequence of values.



### Function 
       


### Description 
A list is a sequence of values with the following properties:

*  The list maybe empty.
*  The values in the list are _ordered_.
*  The same value may occur more than once.
*  The list has a size that is equal to the number of values in the list.
*  Each element in a list _L_ has an index. The first element has index 0. The last element has index `size(L)-1`.


Formally, a list can be defined as follows. Given the domains `ELEM` (elements) and `LIST` (lists) and the functions:
```rascal
nil :             -> LIST
cons: ELEM x LIST -> LIST
head: LIST        -> ELEM
tail: LIST        -> LIST
```
`nil` and `cons` are so-called _constructor functions_ that define the values in `LIST`. They can be paraphrased as:

*  The _empty list_ `nil` is an element of `LIST`.
*  If `e` is an element of `ELEM` and `l` is an element of LIST, then `cons(e, l)` is also an element in `LIST`.


`head` (take the first element) and `tail` (take the remainder of a list)
are defined functions characterized by the axioms:
```rascal
head(cons(e, l)) = e
tail(cons(e, l)) = l
```
The cases `head(nil)` and `tail(nil)` are left undefined (and usually correspond to a runtime error in a programming language).

In Rascal, lists are surrounded by brackets `[` and `]` and the elements are separated by commas.
Each list has a type of the form `list[T]`, where _T_ is the smallest common type of all list elements.
Read the description of [lists and their operators](/Rascal.md#Expressions-Values-List)
and of [library functions on lists]_Libraries:Libraries-List (broken link)_.

### Examples 
## Lists in Daily Life

*  A line of people waiting for the super market checkout or bus stop. 
   ![](/assets/8566579c-21b0-45b3-8b71-d37142aff9dc.png)
   http://www.realbollywood.com[credit]
*  The wagons of a train.
*  The Top 100 Music Charts.
   ![](/assets/38060c2b-5eaf-445f-b1aa-f1fa438e7a0b.png)
   http://www.billboard.com/charts/hot-100#/charts/hot-100[credit]
*  Twitter users ordered according to number of followers.
*  A _to do_ list.


## Lists in computer science

*  The locations in a computer memory.
*  The list of processes that use most cpu time.
*  The list of procedures that are called by a given procedure.


## Lists in Rascal

*  The empty list: `[]`. Its type is `list[void]`.
*  A list of integers: `[3, 1, 4]`. Its type is `list[int]`.
*  A list of mixed-type values: `[3, "a", 4]`. Its type is `list[value]`.




## Abstract Syntax Tree {#AbstractSyntaxTree-AbstractSyntaxTree}

### Synopsis 
Representation of the abstract syntactic structure of a program.



### Function 
       


### Description 
A [Parse tree](#ParseTree-ParseTree) is a detailed and very precise represention of the concrete syntactic structure of a program.
It may even be so detailed that it contains every space, comment and parenthesis in the original source text.
In many cases a less detailed representation is sufficient and an abstract syntax tree (or AST for short) is used.

### Examples 

For the input sentence

![]_broken:example-text.png (ambiguous link)_


the parse tree (left) and abstract syntax tree (right) may look as follows:



![](/assets/f46ef260-db3d-4b13-a18b-909996392a63.png)


Note that the parse tree on the left did not preserve the spaces in the original text but there
are parse tree formats (including the one used by Rascal) that preserve all textual information.




## ParseTree {#ParseTree-ParseTree}

### Synopsis 
Detailed represention of the concrete syntactic structure of a program.



### Function 
       


### Description 
A parse tree is a detailed and very precise represention of the concrete syntactic structure of a program.
It may even be so detailed that it contains every space, comment and parenthesis in the original source text.

### Examples 
A parse tree for the sentence 
![]_broken:example-text.png (ambiguous link)_



![](/assets/8bef6d31-256d-40b3-8d0b-bfbf686bac33.png)





## AbstractDataType {#AbstractDataType-AbstractDataType}

### Synopsis 
A definition of a data type.



### Function 
       


### Description 
An http://en.wikipedia.org/wiki/Abstract_data_type[Abstract Data Type] is a mathematical description of a structure
that can be implemented in various ways. For instance, a stack data type can be characterized by `empty` (the empty stack),
two functions `push` and `pop` and axioms that define them. At the implementation level, a stack
can be implemented using a list, array or something else.

In functional languages, and also in Rascal, abstract datatypes (or ADTs for short)
are used to define new data types. Well-known examples are http://en.wikipedia.org/wiki/Stack_(data_structure)[stack] and http://en.wikipedia.org/wiki/Tree_(data_structure)[tree].

See [Algebraic Data Types]_broken:Rascal:Declarations-AlgebraicDataType (ambiguous link)_ and 
[Constructors](/Rascal.md#Expressions-Values-Constructor) in the [Rascal Language Reference](#Rascal).

### Examples 

## Abstract Data Types in Daily Life

*  A stack of trays in the local cafetaria: ![](/assets/c7a03fb6-1467-4d3c-a64e-4ebc4c5e4af1.jpg)
   http://www.thermo-box.co.uk/fimi-food-transport-and-handling-products/self-levelling-heated-and-unheated-plate-and-tray-systems.html[credit]

*  A tree:
   ![](/assets/d3f04066-0a91-45bb-b848-4b675800c47d.jpg)
   http://free-extras.com/images/tree-569.htm[credit]

*  Coral:
   ![](/assets/fc124a3f-dedb-4747-ba51-9515e648cdc3.jpg)
   http://blog.enn.com/?p=476[credit]


## Abstract Data Types in computer science

*  The run-time stack of a programming language interpreter.
*  A search tree.
*  An ontology.


## Abstract Data Types in Rascal

*  A tree data type:
```rascal
data MyTree = leaf(int n) | tree(str name, MyTree left, MyTree right);
```




## Refactoring {#Refactoring-Refactoring}

### Synopsis 
Restructuring source code to improve its internal structure without changing its external behaviour.



### Function 
       


### Description 
Refactoring was popularized by http://martinfowler.com/refactoring/[Martin Fowler] and aims at improving source code quality.
The basic philosophy is to identify small, atomic, refactoring steps that improve the internal structure
of the code but do not change its external behaviour.
The supposed simplicity of these steps must guarantee their correctness.

Atomic steps can be combined to create large and complex refactorings.
The major Interactive Development Environements --
http://www.eclipse.org/[Eclipse],
http://www.jetbrains.com/idea/[IntelliJ],
http://www.microsoft.com/visualstudio/en-us[Visual Studio] --
provide interactive support for refactoring.

### Examples 
Some well-known refactorings are:

*  http://martinfowler.com/refactoring/catalog/renameMethod.html[Rename Method]
*  http://martinfowler.com/refactoring/catalog/encapsulateField.html[Encapsulate Field]
*  http://martinfowler.com/refactoring/catalog/extractMethod.html[Extract Methods]




## Set {#Set-Set}

### Synopsis 
An unordered collection of values without duplicates.



### Function 
       


### Description 

A set is a collection of values with the following properties:

*  The set maybe empty.
*  The values in the list are _unordered_.
*  A value can only occur once.
*  The set has a size that is equal to the number of values in the set.


In Rascal, sets are surrounded by braces `{` and `}` and the elements are separated by commas.
Each set has a type of the form `set[T]`, where _T_ is the smallest common type of all set elements.
Read the description of [sets and their operators](/Rascal.md#Expressions-Values-Set)
and of [library functions on sets]_Libraries:Prelude-Set (broken link)_.

### Examples 

## Sets in Daily Life

*  A cutlery set consisting of knife, fork and the like.
   ![](/assets/6c9b5531-264f-4d04-b491-e4ac5e1ce62f.jpg)
   http://www.ikea.com/gb/en/catalog/products/50087185/[credit]
*  A crowd of people.
*  A stamp collection (but be aware that the duplicates will disappear!)
   ![](/assets/ae6bebe9-b02e-48d9-9a34-49910816d169.jpg)
   http://www.life123.com/hobbies/antiques-collectibles/stamps/stamp-collecting-2.shtml[credit]

## Sets in computer science


*  The files in a directory. Of course, when you order them (by name, modification date) you need a _Expressions-Values-List-List (broken link)_ to represent them.
*  The set of moves an opponent can play in a game.
*  The set of nodes in a network.


## Sets in Rascal

*  The empty set: `{}`. Its type is `set[void]`.
*  A set of integers: `{3, 1, 4}`. Its type is `set[int]`.
*  A set of mixed-type values: `{3, "a", 4}`. Its type is `set[value]`.




## Syntax {#Syntax-Syntax}

### Synopsis 
The rules that describe correctly structured programs in a language.



### Function 
       


### Description 

According to the http://www.merriam-webster.com/dictionary/syntax[Merriam-Webster] dictionary _syntax_ means

*  the way in which linguistic elements (as words) are put together to form constituents (as phrases or clauses);
*  the part of grammar dealing with this.


http://dictionary.reference.com/browse/syntax[Dictionary.com] is more elaborate and defines _syntax_ as:

*  _Linguistics_:
**  a. the study of the rules for the formation of grammatical sentences in a language.
**  b. the study of the patterns of formation of sentences and phrases from words.
**  c. the rules or patterns so studied: English syntax.
**  d. a presentation of these: a syntax of English.
**  e. an instance of these: the syntax of a sentence.

*  _Computers_:  the grammatical rules and structural patterns governing the ordered use of appropriate words and symbols for issuing commands, writing code, etc., in a particular software application or programming language.


http://en.wikipedia.org/wiki/Syntax_(programming_languages[Wikipedia] says:  the syntax of a programming language is the
set of rules that define the combinations of symbols that are considered to be correctly structured programs in that language.

In linguistics, a [Grammar](#Grammar-Grammar) is a concept that includes syntax.
However, in the cases that are relevant for meta-programming they can be used interchangeably.
We will use them as synonyms.

In programming languages a further subdivision can be made:

*  _Lexical syntax_ defines the form of the lowest level textual items such as keywords, numeric constants, and string constants.
*  _Context-free syntax_ defines the global structure of statements, procedures and modules.


A [Parser](#Parser-Parser) checks that a text in language _L_ indeed adheres 
to the syntax rules of language _L_. There are two possible answers:

*  _Yes_. A [Parse tree](#ParseTree-ParseTree) is returned that shows how the text adheres to the syntax rules.
*  _No_. Error messages pin point the location where the text deviates from the syntax rules.





## Domain Specific Language {#DomainSpecificLanguage-DomainSpecificLanguage}

### Synopsis 
Programming language targeted for a particular application domain.



### Function 
       



### Examples 

*  SQL (querying data bases).
*  HTML (web pages).
*  CSS (presentation of HTML pages).
*  Excel (spreadsheets).
*  BibTex (bibliography).
*  BNF (grammars).
*  Regular expressions (text matching).




## Compiler {#Compiler-Compiler}

### Synopsis 
Tranform source code to an executable form.



### Function 
       


### Description 

A http://en.wikipedia.org/wiki/Compiler[compiler] transforms the source code of a program (in a source langue) to an executable form
(in a target language)
and consists of the following phases:

*  [Parser](#Parser-Parser): read the source code and build an [Abstract Syntax Tree](#AbstractSyntaxTree-AbstractSyntaxTree).
*  [Typechecker](#Typechecker-Typechecker): perform a semantic analysis of the code, resolve all names
  and verify that the program is type correct.
*  Optimisation: perform optimisations (e.g., constant folding, dead code elimination, call unfolding).
  This can be seen as a form of [Refactoring](#Refactoring-Refactoring).
*  Code generation: generate the final code, this can be asembly language or directly executable code.





## Typechecker {#Typechecker-Typechecker}

### Synopsis 
Checks the type rules for a source language.



### Function 
       


### Description 

A http://en.wikipedia.org/wiki/Type_system[type system] is a set of rules that defines how values,
variables and functions may be used in a given programming languages.

A type checker, checks that these rules are enforced. The moment that type checking can be done differs
per type system, but two extremes exist:

*  _Static type checking_: all checking is done before the program is executed.
*  _Dynamic type checking_: all checking is done during execution of the program.
*  _Hybrid type checking_: when possible checks are done before execution, the remaining checks are done during execution. 


These different styles of type checking have different trade offs:

*  Static typechecking:
**  Pro: most errors are found before execution.
**  Con: more type declarations have to be written by the programmer and in some situations the type systems limits what can be expressed.
*  Dynamic checking:
**  Pro: most flexible and expressive.
**  Con: errors can only be found during execution.
*  Hybrid (or gradual) type checking:
**  Pro: a reasonable compromise.
**  Con not be as safe as full static typechecking.



### Examples 

*  If in Java a variable has been declared as `bool` it cannot be added to an integer.
*  If in Java a method has three formal parameters, it cannot be called with four actual parameters.
*  In Python, a variable can first get a string value assigned and later on an integer value.




