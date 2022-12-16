---
title: Automatic
---

#### Synopsis

Use implode to translate an Exp parse tree to an abstract syntax tree.

#### Syntax

#### Types

#### Function

#### Description

[implode]((Library:ParseTree-implode)) is a function that automates the mapping between parse trees and abstract syntax trees.
It takes two arguments:

*  The _reified_ type of the desired abstract syntax. (In Rascal, types can not be used freely as values.
  A reified type, is a type that is wrapped in such a way that it can be passed as an argument to a function.)
*  The parse tree to be converted.


`implode` is smart in trying to find a mapping, but it needs some guidance.
A necessary step is therefore to label the rules in the grammar with the name of the 
constructor to which it has to be mapped.

#### Examples

Let's first label the syntax rules of the Exp grammar with constructor names:
```rascal-commands
layout Whitespace = [\t-\n\r\ ]*;                    

lexical IntegerLiteral = [0-9]+;           

start syntax Exp 
    = con: IntegerLiteral   // <1>
    | bracket "(" Exp ")"     
    > left mul: Exp "*" Exp // <2>  
    > left add: Exp "+" Exp // <3>   
    ;
```
            
Observe that at 1, 2, 3 these labels have been added.

It is good practice to introduce separate modules for parsing and for the conversion itself:

*  A `Parse` module defines a parse function and returns a parse tree. It imports only the concrete syntax.
*  A `Load` module defines a load function that first calls the above `parse` function and then applies `implode` to it.
  This is the only module that imports both concrete and abstract syntax at the same time and is therefore the only place to be
  concerned about name clashes. (If I mention `Exp`, do you know which one I mean?).


Here is the `Parse` module for Exp ...
```rascal-commands,continue
import ParseTree;

Tree parseExp(str txt) = parse(#Exp, txt); 
```

and this is how it works:
```rascal-shell,continue
example = parseExp("2+3*4");
```

We can use `parse` to define `load`:
```rascal-commands,continue
data Exp  // <2>
    = con(int n)                 
    | mul(Exp e1, Exp e2)        
    | add(Exp e1, Exp e2)        
    ;

import ParseTree; // <3>

Exp load(Tree t) = implode(#Exp, t); 
```

Notes:

<1> We also need the `parse` function, as defined above.
<2> We also need the abstract syntax, show directly here. Note that in order to separate `Exp` the `syntax` type clearly from `Exp` the `data` type, you must position their definitions in separate modules.
<3> We need ((Library:ParseTree)) since it provides the ((Library:ParseTree-implode)) function.


Let's try it:
```rascal-shell,continue
example2 = load(example);
```

Remains the definition of the `eval` function:
```rascal-commands,continue
int eval(con(int n)) = n;                            
int eval(mul(Exp e1, Exp e2)) = eval(e1) * eval(e2); 
int eval(add(Exp e1, Exp e2)) = eval(e1) + eval(e2); 
```

                
Here is the end result:
```rascal-shell,continue
eval(example2);
```

#### Benefits

#### Pitfalls

