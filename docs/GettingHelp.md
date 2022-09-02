## Document preparation issues

The following issues have been detected while preparing this draft document. It is not ready for publication.

1. [warning] |project://rascal/src/org/rascalmpl/courses/GettingHelp/Browsing/Browsing.md|:35,0 Ambiguous concept link: Rascal:Statements-While resolves to all of {"#Statements-While","/Rascal.md#Statements-While"}

## Getting Help {#GettingHelp}

### Synopsis 
Getting help when working with Rascal

### Index 
tutorial newbie faq question beginner doc documentation

### Details 
CommandLine IDE Browsing

### Description 

You can use Rascal in two ways: 

* At the command line -- the _Command Line Interface_ (CLI) or 
  if you prefer the _Read-Eval-Print-Loop_ (REPL).
* In an Integrated Development Environment (IDE) like Eclipse.

Both provide help facilities that we discuss in more detail:

* [Getting help:IDE](/GettingHelp.md#IDE-IDE)
* [Getting help:Browsing](/GettingHelp.md#Browsing-Browsing)
* [Getting help:Command line](/GettingHelp.md#CommandLine-CommandLine)
* [Getting help:Further reading](/GettingHelp.md#FurtherReading-FurtherReading)

## Help in the Integrated Development Environment (IDE) {#IDE-IDE}

### Synopsis 
Get help when using Rascal in the IDE

### Index 
help

### Description 



NOTE: To be written

## Browsing Documentation {#Browsing-Browsing}

### Synopsis 
Browsing the Rascal documentation

### Index 
help

### Description 

All Rascal documentation has been indexed and cross-referenced 
and can be accessed via a single browser interface.

Suppose we want to learn about `while` statement in Rascal and 
the type `help while` at the command line. This will show the following
results (actual results may differ):

![](/assets/cd7021a6-1913-4ca6-a6ff-a66d7202aabc.png)

In the right pane you find the search results,
most relevant first (this happpens to be the
description of the `while` statement).
Each result consists of a clickable link and
a synopsis of the information to be found there.

In the top left corner, you find a search box
for new searches and the RascalTutor logo image:/images/rascal-tutor-small.png[width="40",heigth="40"] that
will bring you back to the Tutor home page.

All Rascal documentation is organized
in _courses_, each course consist of
a hierarchy of _concepts_.
The documentation for `while` is found in the
course named [Rascal](#Rascal)
and the complete name is [Rascal/Statements/While]_broken:Rascal:Statements-While (ambiguous link)_.

There are other courses like [Help](#Commands-Help) (this course)
and [Recipes](#Recipes) and the search for while
found uses of while in various courses (like this one, since we are mentioning
`while` quite a lot).

## Help at the command line {#CommandLine-CommandLine}

### Synopsis 
Get help when using Rascal at the command line (CLI, REPL)

### Index 
help

### Description 

While using the command line interface you have two commands at your proposal:

* `:help`

### Examples 

First, type `:help` and get some introductory help:


```rascal-shell
rascal>:help
:help
Welcome to the Rascal command shell.

Shell commands:
:help                      Prints this message
:quit or EOF               Quits the shell
:set <option> <expression> Sets an option
e.g. profiling    true/false
     tracing      true/false
     errors       true/false
:edit <modulename>         Opens an editor for that module
:test                      Runs all unit tests currently loaded

Example rascal statements and declarations:
1 + 1;                     Expressions simply print their output and (static) type
int a;                     Declarations allocate a name in the current scope
a = 1;                     Assignments store a value in a (optionally previously declared) variable
int a = 1;                 Declaration with initialization
import IO;                 Importing a module makes its public members available
println("Hello World")     Function calling

Please read the manual for further information
ok
```
  

## Further Reading {#FurtherReading-FurtherReading}

### Synopsis 
How to continue reading the Rascal documentation

### Index 
help

### Description 

The Tutor home page is always reachable via the RascalTutor logo image:/images/rascal-tutor-small.png[width="40",heigth="40"] 
in the top left corner of each Tutor page and is the best starting point for further reading. 
Here is a recent overview of the available courses:

include::../../tutor-overview.include[]

