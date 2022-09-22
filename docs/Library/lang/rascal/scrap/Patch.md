---
title: "module lang::rascal::scrap::Patch"
---

#### Usage

`import lang::rascal::scrap::Patch;`


## function commands2patch {#lang-rascal-scrap-Patch-commands2patch}

* ``lrel[loc, str] commands2patch(start[Commands] pt)``


Convert a sequence of commands to a textual patch value to be applied to the editor
containing the commands. The patch is based on the results of evaluating the commands
and comparing the outputs with what is in the source (pt) itself. Differences in command
output are reconciled through the patch. 

A patch is list of tuples from loc to str. Loc to "" represents removal.
A loc with length=0 to x represents insertion of x.

## function resultSource {#lang-rascal-scrap-Patch-resultSource}

* ``tuple[bool, str] resultSource(tuple[str val, str out, str err] output)``

