## Developers manual {#Developers}

## Synopsis

Contains tips, tricks and howto's on the development of Rascal itself.

### Details 

TutorCompiler

## Description

Rascal is implemented in Rascal itself and Java. It depends on many third-party
open-source libraries, and some of those are owned by the Rascal project itself.
These are [Capsule](http://github.com/usethesource/capsule) and [Vallang](http://github.com/usethesource/vallang). 

Capsule is a library for immutable collections based on the CHAMP datastructure. Vallang is the underlying run-time library for Rascal, which has all the primitive and recursively dependent data-type for storing data about software.

This manual is not complete, but it contains the following topics to help you underway to contribute bugfixes or features to Rascal:

* [Developers:Tutor compiler](/Developers.md#TutorCompiler-TutorCompiler)

## Tutor Compiler {#TutorCompiler-TutorCompiler}

## Synopsis {#TutorCompiler-TutorCompiler}

How to compile, run and test the tutor compiler.

## Description {#TutorCompiler-TutorCompiler}

The tutor compiler translates Rascal modules and Markdown files to Docusaurus Markdown files. The main features are:

* Flattening and fusing a hierarchical tree of markdown files that each describe a single concept
* Indexing sub-concepts and resolving links to them (internally)
* Implementing local tables of contents for listing nested subconcepts in the parent file
* Collecting and linking local image files
* Supporting subscripts as in `Type<sub>1</sub>` and `Type<sub>21</sub>` by translation to Unicode
* Collecting Rascal source modules and the function and data declarations in them to generating API documentations in markdown notation
* Running `rascal-shell` blocks on the Rascal REPL and collecting resulting HTML visualizations as screenshots (unfinished)
* Executing the questions DSL to produce embedded interactive questions (unfinished)

The tutor compiler is located here: [src/org/rascalmpl/library/lang/rascal/tutor](https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/library/lang/rascal/tutor), with each main feature in a sub-folder. You will find the main compiler file in `Compiler.rsc`. Some of the tutor compiler is written in Java, in particular the interface with the REPL (See `lang/rascal/tutor/repl/TutorCommandExecutor.java`.

## Compile and run the Rascal interpreter

* clone the rascal project first: `git clone git@github.com:usethesource/rascal.git`
* compile it, but skip the type-checking of the library: `mvn -Drascal.compile.skip -DskipTests package`
* run can be done in several ways:
   1. use VScode run command to execute `RascalShell` in debug mode
   2. use Eclipse to "Run as Java Program", also `RascalShell`
   4. use `java -jar target/rascal-<version>-SNAPSHOT.jar`

 
## Taking the doc compiler for a spin

Note that it's indeed best to run the rascal REPL as described above, otherwise you might miss fixes in the Java-implemented part of the tutor, or other related changes in the interpreter that needed fixing to build the tutor.

So start a Rascal REPL first. At least you need these three modules loaded:


```rascal-shell
rascal>import IO;
ok
rascal>import util::Reflective;
ok
rascal>import lang::rascal::tutor::Compiler;
ok
```

Then we create the configuration for running the compiler, using the `PathConfig` data-type from `util::Reflective`:


```rascal-shell
rascal>pcfg = pathConfig(srcs=[|project://rascal/src/org/rascalmpl/courses/Test|] , bin=|target://rascal/doc|);
PathConfig: pathConfig(
bin=|target://rascal/doc|,
srcs=[|project://rascal/src/org/rascalmpl/courses/Test|])
```

As you can see we used a singleton list to select the Test course subfolder, but you could also have listed all the directories under `courses`. That is necessary for the final product because only then the compiler knows how to resolve cross-references between the courses. The compiler will filter this list and select only subfolders, and start from each folder to generate a single `.md` file. 

Now we run the compiler:


```rascal-shell
rascal>compile(pcfg);
compile(pcfg);
compiling |project://rascal/src/org/rascalmpl/courses/Test/Test.md|
compiling |project://rascal/src/org/rascalmpl/courses/Test/t1.png|
compiling |project://rascal/src/org/rascalmpl/courses/Test/Test.quest|
compiling |project://rascal/src/org/rascalmpl/courses/Test/CallAnalysis|
compiling |project://rascal/src/org/rascalmpl/courses/Test/CallAnalysis/CallAnalysis.md|
compiling |project://rascal/src/org/rascalmpl/courses/Test/CallAnalysis/calls.png|
compiling |project://rascal/src/org/rascalmpl/courses/Test/If|
compiling |project://rascal/src/org/rascalmpl/courses/Test/If/If.md|
compiling |project://rascal/src/org/rascalmpl/courses/Test/Libraries|
compiling |project://rascal/src/org/rascalmpl/courses/Test/Libraries/Libraries.md|
compiling |project://rascal/src/org/rascalmpl/courses/Test/Libraries/Boolean|
compiling |project://rascal/src/org/rascalmpl/courses/Test/Libraries/Boolean/Boolean.remote|
compiling |project://rascal/src/org/rascalmpl/courses/Test/Questions|
compiling |project://rascal/src/org/rascalmpl/courses/Test/Questions/Questions.questions|
list[Message]: []
```

Afterwards you will find all the generated files in `./target/classes/doc/` and you can use a mark-down editor or compiler to further process the .md files.

## Conversion scripts

In `src/org/rascalmpl/library/lang/rascal/tutor` you will find "throwaway" scripts for translating asciidoctor markdown notation to docusaurus markdown notation.

