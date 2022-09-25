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


public data TYPE = natural() | string(); 
	  
// highlight-next-line
public alias PicoId = str; 
	  
public data PROGRAM  
// highlight-next-line
    = program(list[DECL] decls, list[STATEMENT] stats);

public data DECL 
    = decl(PicoId name, TYPE tp);

public data EXP 
     = id(PicoId name)
     | natCon(int iVal)
     | strCon(str sVal)
     | add(EXP left, EXP right)
     | sub(EXP left, EXP right)
     | conc(EXP left, EXP right)
     ;
    
public data STATEMENT 
     = asgStat(PicoId name, EXP exp)
     | ifElseStat(EXP exp, list[STATEMENT] thenpart, list[STATEMENT] elsepart)
     | whileStat(EXP exp, list[STATEMENT] body)
     ;

// highlight-next-line
anno loc TYPE@location;
anno loc PROGRAM@location;
anno loc DECL@location;
anno loc EXP@location;
anno loc STATEMENT@location;

public alias Occurrence = tuple[loc location, PicoId name, STATEMENT stat]; // <5>

```

                
Notes:

<1> The types that may occur in a Pico program are either natural or string.
<2> Introduce `PicoId` as an alias for Rascal's `str` datatype.
<3> Define the various data types that constitute an AST for Pico. Observe that the constructor names match the names used in the concrete syntax, e.g., `strCon`, `add`, `ifElseStat`.
<4> Define an annotation with name `location` and of type `loc` (source code location) for all AST types. This will be used when imploding
    a parse tree into an abstract syntax tree.
<5> Introduce `Occurrence` as a genereic way of describing the location of various items in the AST.


