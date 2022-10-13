---
title: No Layout
---

#### Synopsis

A version of Exp based on concrete syntax.

#### Description

We describe howto write a grammar for Exp and how to use it to implement an evaluator.


#### Examples

Here is the grammar for Exp:

```rascal 
module demo::lang::Exp::Concrete::NoLayout::Syntax
    
lexical IntegerLiteral = [0-9]+;      ❶  

start syntax Exp             ❷  
  = IntegerLiteral           ❸  
  | bracket "(" Exp ")"      ❹  
  > left Exp "*" Exp         ❺  
  > left Exp "+" Exp         ❻  
  ;

```

Notes:

* ❶  Defines a lexical syntax rule for IntegerLiterals; they consist of one or more digits.
* ❷  Defines the alternatives for Exp. The keyword `start` means that this is a start symbol of the grammar.
* ❸  Defines alternative #1: an `IntegerLiteral`.
* ❹  Defines alternative #2: parentheses. The `|` says that this alternative has the same priority as the previous one.
    The keyword `bracket` marks this as an alternative that defines parentheses.
* ❺  Defines alternative #3: multiplication. The `>` says that the previous rule has a higher priority than the current one.
    The keyword `left` marks this as a left-associative rule.
* ❻  Defines alternative #4: addition. The `>` says again that the previous rule has a higher priority than the current one.
    The keyword `left` marks this as a left-associative rule.


Now that the grammar is in place we want to use it to build an evaluator. Here is how:

```rascal 
module demo::lang::Exp::Concrete::NoLayout::Eval
import demo::lang::Exp::Concrete::NoLayout::Syntax;

import String;
import ParseTree;

int eval(str txt) = eval(parse(#Exp, txt));      ❷  

int eval((Exp)`<IntegerLiteral l>`) = toInt("<l>");            ❸  
int eval((Exp)`<Exp e1>*<Exp e2>`) = eval(e1) * eval(e2);      ❹  
int eval((Exp)`<Exp e1>+<Exp e2>`) = eval(e1) + eval(e2);      ❺  
int eval((Exp)`(<Exp e>)`) = eval(e);
test bool tstEval2() = eval("7*3") == 21;
test bool tstEval3() = eval("7+3") == 10;
test bool tstEval4() = eval("3+4*5") == 23;

```

Notes:

* ❶  We import [Rascal:ParseTree] because we will need the `parse` function below.
* ❷  The main function `eval` that evaluates an expression as string to an integer. It proceeds in two steps:
    *  `parse(#Exp, txt)` parses the given `txt` according to non-terminal `Exp` as defined by the grammar.
        The result is a parse tree.
    *  This parse tree is given to another eval function that will reduce the tree to an integer.
* ❸  Converts an IntegerLiteral to an integer. Let's dissect this further:
    *  The `Exp` preceding the concrete pattern, unambiguously defines the type of the pattern.
        This is good practice to avoid ambiguities.
    *  `<IntegerLiteral l>` matches an IntegerLiteral and binds it (a parse tree fragment) to variable `l`.
    *  In the function body, `toInt("<l>")`, the parse tree fragment is inserted in a string -- effectively unparsing it --
        and that string is converted to an integer.
* ❹  Handle the multiplication case.
* ❺  Handle the addition case.
* ❻  Handles the case of parentheses.


What remains, is to check that `eval` works as expected.

```rascal-shell 
rascal>import demo::lang::Exp::Concrete::NoLayout::Syntax;
ok
rascal>import ParseTree;
ok
```
Just checking that `parse` returns a sort of parse tree:

```rascal-shell ,continue
rascal>parse(#Exp, "2+3");
Exp: (Exp) `2+3`
```
You will see such parse trees only once, unless you are a researcher in parsing ;-)
Here is a demonstration of `eval`:

```rascal-shell ,continue
rascal>import demo::lang::Exp::Concrete::NoLayout::Eval;
ok
rascal>eval("2+3");
int: 5
rascal>eval("2+3*4");
int: 14
rascal>eval("(2+3)*4");
int: 20
```



