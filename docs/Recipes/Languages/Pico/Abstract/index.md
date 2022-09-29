---
title: Abstract
---

#### Synopsis

Abstract syntax for Pico.

#### Examples

Here is the complete abstract syntax for Pico:


```rascal 
module demo::lang::Pico::Abstract

// highlight-next-line


data TYPE(loc src=|unknown:///|) 
    = natural() 
    | string()
    ; 
	  
// highlight-next-line
alias PicoId = str; 
	  
data PROGRAM(loc src=|unknown:///|)
// highlight-next-line
    = program(list[DECL] decls, list[STATEMENT] stats);

data DECL(loc src=|unknown:///|) 
    = decl(PicoId name, TYPE tp);

data EXP(loc src=|unknown:///|) 
    = id(PicoId name)
    | natCon(int iVal)
    | strCon(str sVal)
    | add(EXP left, EXP right)
    | sub(EXP left, EXP right)
    | conc(EXP left, EXP right)
    ;
    
data STATEMENT(loc src=|unknown:///|)
    = asgStat(PicoId name, EXP exp)
    | ifElseStat(EXP exp, list[STATEMENT] thenpart, list[STATEMENT] elsepart)
    | whileStat(EXP exp, list[STATEMENT] body)
    ;

// highlight-next-line
alias Occurrence = tuple[loc src, PicoId name, STATEMENT stat]; 

```

An abstract syntax specification is not necessary for implementing a programming language 
in Rascal. However, sometimes it comes in handy and for this reason we demonstrate an
AST for Pico here. One reason could be that you are using an external parser for a language,
another is that your DSL is only an intermediate format in a longer pipeline.

Notes:

* The types that may occur in a Pico program are either `natural` or `string`.
* Introduce `PicoId` as an alias for Rascal's `str` datatype.
* Define the various data types that constitute an AST for Pico. Observe that the constructor names match the names used in the concrete syntax, e.g., `strCon`, `add`, `ifElseStat`.
* Define an annotation with name `location` and of type `loc` (source code location) for all AST types. This will be used when transforming a parse tree into an abstract syntax tree [implode](../../../../Library/ParseTree.md#ParseTree-implode).
* Introduce `Occurrence` as a generic way of describing the location of various items in the AST.


