---
title: Manual
---

#### Synopsis

An Exp evaluator that uses a manually written conversion from parse tree to abstract syntax tree.

#### Syntax

#### Types

#### Function

#### Description

#### Examples

Starting from the grammar for Exp:
```rascal-commands
layout Whitespace = [\t-\n\r\ ]*;
    
lexical IntegerLiteral = [0-9]+;           

start syntax Exp 
  = IntegerLiteral          
  | bracket "(" Exp ")"     
  > left Exp "*" Exp        
  > left Exp "+" Exp        
  ;
```

First we define a `parse` function for Exp:

```rascal-commands,continue
import ParseTree;

Exp parseExp(str txt) = parse(#Exp, txt); 
```

and test it:
```rascal-shell,continue
example = parseExp("2+3");
```

Now we need an abstract definition of the Exp language, where
the non-terminals of the grammar lign up with the ((Rascal:AlgebraicDataType)) names:
```rascal-commands,continue
data Exp 
    = con(int n)               
    | mul(Exp e1, Exp e2)        
    | add(Exp e1, Exp e2)        
    ;
```

NB: it is important to separate the concrete `syntax` definition
for `Exp` from the abstract `data` definition in _separate modules_
to avoid name clashes. 

Next, we define a `load` function:
```rascal-commands,continue
import String;

Exp load((Exp)`<IntegerLiteral l>`)  = con(toInt("<l>"));        // <4>
Exp load((Exp)`<Exp e1> * <Exp e2>`) = mul(load(e1), load(e2));  
Exp load((Exp)`<Exp e1> + <Exp e2>`) = add(load(e1), load(e2)); 
Exp load((Exp)`( <Exp e> )`)         = load(e);                    
```

Some comments:

<1> We reuse the previously defined concrete syntax with layout.
<2> We also reuse the previously defined abstract syntax.
<3> Import the `Parse` module defined above.
<4> The conversion from parse tree to abstract syntax tree starts here. 


Let's try it:
```rascal-shell,continue
load(example);
```

What remains is to write the interpreter using the above components:
```rascal-commands,continue
int eval(con(int n)) = n;                            
int eval(mul(Exp e1, Exp e2)) = eval(e1) * eval(e2); 
int eval(add(Exp e1, Exp e2)) = eval(e1) + eval(e2); 
```

Here is how it works:
```rascal-shell,continue
eval(load(example));
```

#### Benefits

#### Pitfalls

