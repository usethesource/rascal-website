---
title: Automatic
---

#### Synopsis

Use implode to translate an Exp parse tree to an abstract syntax tree.

#### Description

[implode](../../../../../Library/ParseTree.md#ParseTree-implode/) is a function that automates the mapping between parse trees and abstract syntax trees.
It takes two arguments:

*  The _reified_ type of the desired abstract syntax. (In Rascal, types can not be used freely as values.
  A reified type, is a type that is wrapped in such a way that it can be passed as an argument to a function.)
*  The parse tree to be converted.


`implode` is smart in trying to find a mapping, but it needs some guidance.
A necessary step is therefore to label the rules in the grammar with the name of the 
constructor to which it has to be mapped.

#### Examples

Let's first label the syntax rules of the Exp grammar with constructor names:

```rascal 
module demo::lang::Exp::Combined::Automatic::Syntax

lexical LAYOUT = [\t-\n\r\ ];                    

layout LAYOUTLIST = LAYOUT*  !>> [\t-\n\r\ ] ;  
    
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

```rascal 
module demo::lang::Exp::Combined::Automatic::Parse

import demo::lang::Exp::Combined::Automatic::Syntax;
import ParseTree;

Tree parseExp(str txt) = parse(#Exp, txt); 

```

and this is how it works:

```rascal-shell 
rascal>import demo::lang::Exp::Combined::Automatic::Parse;
ok
rascal>parseExp("2+3*4");
Tree: appl(
  prod(
    label(
      "add",
      sort("Exp")),
    [
      sort("Exp"),
      layouts("LAYOUTLIST"),
      lit("+"),
      layouts("LAYOUTLIST"),
      sort("Exp")
    ],
    {assoc(left())}),
  [appl(
      prod(
        label(
          "con",
          sort("Exp")),
        [lex("IntegerLiteral")],
        {}),
      [appl(
          prod(
            lex("IntegerLiteral"),
            [iter(\char-class([range(48,57)]))],
            {}),
          [appl(
              regular(iter(\char-class([range(48,57)]))),
              [char(50)],
              src=|unknown:///|(0,1,<1,0>,<1,1>))],
          src=|unknown:///|(0,1,<1,0>,<1,1>))],
      src=|unknown:///|(0,1,<1,0>,<1,1>)),appl(
      prod(
        layouts("LAYOUTLIST"),
        [conditional(
            \iter-star(lex("LAYOUT")),
            {\not-follow(\char-class([
                    range(9,10),
                    range(13,13),
                    range(32,32)
                  ]))})],
        {}),
      [appl(
          regular(\iter-star(lex("LAYOUT"))),
          [],
          src=|unknown:///|(1,0,<1,1>,<1,1>))],
      src=|unknown:///|(1,0,<1,1>,<1,1>)),appl(
      prod(
        lit("+"),
        [\char-class([range(43,43)])],
        {}),
      [char(43)]),appl(
      prod(
        layouts("LAYOUTLIST"),
        [conditional(
            \iter-star(lex("LAYOUT")),
            {\not-follow(\char-class([
                    range(9,10),
                    range(13,13),
                    range(32,32)
                  ]))})],
        {}),
      [appl(
          regular(\iter-star(lex("LAYOUT"))),
          [],
          src=|unknown:///|(2,0,<1,2>,<1,2>))],
      src=|unknown:///|(2,0,<1,2>,<1,2>)),appl(
      prod(
        label(
          "mul",
          sort("Exp")),
        [
          sort("Exp"),
          layouts("LAYOUTLIST"),
          lit("*"),
          layouts("LAYOUTLIST"),
          sort("Exp")
        ],
        {assoc(left())}),
      [appl(
          prod(
            label(
              "con",
              sort("Exp")),
            [lex("IntegerLiteral")],
            {}),
          [appl(
              prod(
                lex("IntegerLiteral"),
                [iter(\char-class([range(48,57)]))],
                {}),
              [appl(
                  regular(iter(\char-class([range(48,57)]))),
                  [char(51)],
                  src=|unknown:///|(2,1,<1,2>,<1,3>))],
              src=|unknown:///|(2,1,<1,2>,<1,3>))],
          src=|unknown:///|(2,1,<1,2>,<1,3>)),appl(
          prod(
            layouts("LAYOUTLIST"),
            [conditional(
                \iter-star(lex("LAYOUT")),
                {\not-follow(\char-class([
                        range(9,10),
                        range(13,13),
                        range(32,32)
                      ]))})],
            {}),
          [appl(
              regular(\iter-star(lex("LAYOUT"))),
              [],
              src=|unknown:///|(3,0,<1,3>,<1,3>))],
          src=|unknown:///|(3,0,<1,3>,<1,3>)),appl(
          prod(
            lit("*"),
            [\char-class([range(42,42)])],
            {}),
          [char(42)]),appl(
          prod(
            layouts("LAYOUTLIST"),
            [conditional(
                \iter-star(lex("LAYOUT")),
                {\not-follow(\char-class([
                        range(9,10),
                        range(13,13),
                        range(32,32)
                      ]))})],
            {}),
          [appl(
              regular(\iter-star(lex("LAYOUT"))),
              [],
              src=|unknown:///|(4,0,<1,4>,<1,4>))],
          src=|unknown:///|(4,0,<1,4>,<1,4>)),appl(
          prod(
            label(
              "con",
              sort("Exp")),
            [lex("IntegerLiteral")],
            {}),
          [appl(
              prod(
                lex("IntegerLiteral"),
                [iter(\char-class([range(48,57)]))],
                {}),
              [appl(
         ...
```

We can use `parse` to define `load`:

```rascal 
module demo::lang::Exp::Combined::Automatic::Load

import demo::lang::Exp::Combined::Automatic::Parse; // <1>
import demo::lang::Exp::Abstract::Syntax; // <2>
import ParseTree;

Exp load(str txt) = implode(#Exp, parseExp(txt)); 

```

Notes:

<1> We also need the `parse` function, as defined above.
<2> We also need the abstract syntax as already defined earlier in [Exp/Abstract].
<3> We need [Rascal:ParseTree] since it provides the [Rascal:implode] function.


Let's try it:

```rascal-shell 
rascal>import demo::lang::Exp::Combined::Automatic::Load;
ok
rascal>load("2+3*4");
Exp: add(
  con(
    2,
    location=|unknown:///|(0,1,<1,0>,<1,1>),
    comments=()),
  mul(
    con(
      3,
      location=|unknown:///|(2,1,<1,2>,<1,3>),
      comments=()),
    con(
      4,
      location=|unknown:///|(4,1,<1,4>,<1,5>),
      comments=()),
    location=|unknown:///|(2,3,<1,2>,<1,5>),
    comments=()),
  location=|unknown:///|(0,5,<1,0>,<1,5>),
  comments=())
```

Remains the definition of the `eval` function:

```rascal 
module demo::lang::Exp::Combined::Automatic::Eval

import demo::lang::Exp::Abstract::Eval;
import demo::lang::Exp::Combined::Automatic::Load;

int eval(str txt) = eval(load(txt));
test bool tstEval2() = eval("7*3") == 21;
test bool tstEval3() = eval("7+3") == 10;
test bool tstEval4() = eval("3+4*5") == 23;

```

                
Here is the end result:

```rascal-shell 
rascal>import demo::lang::Exp::Combined::Automatic::Eval;
ok
rascal>eval("2+3*4");
int: 14
```


