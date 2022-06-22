---
sidebar_position: 3
title: Getting Help
---

**Synopsis.**

Getting help when working with Rascal

**Description.**

You can use Rascal in two ways:

  - At the command line — the *Command Line Interface* (CLI) or if you prefer the *Read-Eval-Print-Loop* (REPL).

  - In an Integrated Development Environment (IDE) like Eclipse.

Both provide help facilities that we discuss in more detail:

  - [Help at the command line](#commandLine): Get help when using Rascal at the command line (CLI, REPL).

  - [Help in the Integrated Development Environment (IDE)](#IDE): Get help when using Rascal in the IDE.

  - [Browsing Documentation](#browsing): Browsing the Rascal documentation.

## Help at the command line {#commandLine}

**Synopsis.**

Get help when using Rascal at the command line (CLI, REPL)

**Description.**

While using the command line interface you have two commands at your proposal:

  - `help`:
    
      - Without arguments, `help` gives some introductory information about the help facilities.
    
      - With arguments, the arguments are interpreted as search terms and search results are shown in a separate browser
        window.

  - `apropos`: like `help` but all (abbreviated) results are only shown as text in the command line interface.

**Examples.**

First, type `help` and get some introductory help:

``` rascal-shell
help
```

Next, type `help` followed by some search terms will open a browser window with a list of relevant pages in the Rascal
documentation. From there-on you can further browse through and search in Rascal’s extensive documentation.

Typing `apropos` followed by search terms shows the search results directly in the command shell and does not open a
separate browser. Here is a way to search for help related to `if`.

``` rascal-shell
apropos if
```

## Help in the Integrated Development Environment (IDE) {#IDE}

**Synopsis.**

Get help when using Rascal in the IDE

> **Note**
> 
> To be written

## Browsing Documentation {#browsing}

**Synopsis.**

Browsing the Rascal documentation

**Description.**

All Rascal documentation has been indexed and cross-referenced and can be accessed via a single browser interface.

Suppose we want to learn about `while` statement in Rascal and the type `help while` at the command line. This will show
the following results (actual results may differ):

![search results while](/images/search-results-while.png)

In the right pane you find the search results, most relevant first (this happpens to be the description of the `while`
statement). Each result consists of a clickable link and a synopsis of the information to be found there.

In the top left corner, you find a search box for new searches and the RascalTutor logo ![rascal tutor small](/images/rascal-tutor-small.png) that will bring you back to the Tutor home page.

All Rascal documentation is organized in *courses*, each course consist of a hierarchy of *concepts*. The documentation
for `while` is found in the course named [Rascal](/docs/Rascal) and the complete name is
[Rascal/Statements/While](/docs/Rascal#While).

There are other courses like [Help](/docs/GettingHelp) (this course) and [Recipes](/docs/Recipes) and the search for while found uses of
while in various courses (like this one, since we are mentioning `while` quite a lot).

