---
title: Manual
---

#### Synopsis

An Exp evaluator that uses a manually written conversion from parse tree to abstract syntax tree.

#### Examples

First we define a `parse` function for Exp:


```rascal 
module demo::lang::Exp::Combined::Manual::Parse
import demo::lang::Exp::Concrete::WithLayout::Syntax;
import ParseTree;

demo::lang::Exp::Concrete::WithLayout::Syntax::Exp
 parseExp(str txt) = parse(#Exp, txt); 

```

and test it:

```rascal-shell 
rascal>import demo::lang::Exp::Combined::Manual::Parse;
ok
rascal>parseExp("2+3");
Exp: (Exp) `2+3`
```

Next, we define a `load` function:

```rascal 
module demo::lang::Exp::Combined::Manual::Load

import demo::lang::Exp::Concrete::WithLayout::Syntax;      ❶  
import demo::lang::Exp::Abstract::Syntax;      ❷  
import demo::lang::Exp::Combined::Manual::Parse;      ❸  
import String;

demo::lang::Exp::Abstract::Syntax::Exp loadExp(str txt) = load(parseExp(txt));      ❹  
     
demo::lang::Exp::Abstract::Syntax::Exp load((Exp)`<IntegerLiteral l>`)      ❺  
       = con(toInt("<l>"));       
demo::lang::Exp::Abstract::Syntax::Exp load((Exp)`<Exp e1> * <Exp e2>`) 
       = mul(load(e1), load(e2));  
demo::lang::Exp::Abstract::Syntax::Exp load((Exp)`<Exp e1> + <Exp e2>`)
       = add(load(e1), load(e2)); 
demo::lang::Exp::Abstract::Syntax::Exp load((Exp)`( <Exp e> )`) 
       = load(e);                    

```

Some comments:

* ❶  We reuse the previously defined concrete syntax with layout.
* ❷  We also reuse the previously defined abstract syntax.
* ❸  Import the `Parse` module defined above.
* ❹  The top level `load` function that converts a string to an abstract syntax tree.
* ❺  The conversion from parse tree to abstract syntax tree starts here. Note that we
    explicitly use `demo::lang::Exp::Abstract::Syntax::Exp` in these
    rules to distinguish from `demo::lang::Exp::Concrete::WithLayout::Syntax::Exp`.


Let's try it:

```rascal-shell 
rascal>import demo::lang::Exp::Combined::Manual::Load;
ok
rascal>loadExp("2+3");
Exp: add(
  con(2),
  con(3))
```


What remains is to write the interpreter using the above components:

```rascal 
module demo::lang::Exp::Combined::Manual::Eval

import demo::lang::Exp::Abstract::Eval;
import demo::lang::Exp::Combined::Manual::Load;

public int eval(str txt) = eval(loadExp(txt));
test bool tstEval2() = eval("7*3") == 21;
test bool tstEval3() = eval("7+3") == 10;
test bool tstEval4() = eval("3+4*5") == 23;

```

                
Here is how it works:

```rascal-shell 
rascal>import demo::lang::Exp::Combined::Manual::Eval;
ok
rascal>eval("2+3");
int: 5
```


