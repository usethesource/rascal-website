---
title: Load AST
---

#### Synopsis

Parse Func program from string or file and convert to an abstract syntax tree.

#### Syntax

#### Types

#### Function

#### Description

To simplify later processing, Func programs are converted to an abstract syntax tree.

#### Examples

The concrete syntax for Func is described in [Concrete syntax](/docs/Recipes/Languages/Func/ConcreteSyntax) and its
abstract syntax in [Abstract syntax](/docs/Recipes/Languages/Func/AbstractSyntax).
Rather than manually writing conversion rules from Func parse trees to Func abstract syntax trees
we use our secret weapon: [implode](/docs/Library/ParseTree#ParseTree-implode) that performs the mapping for us.
As you see when you compare the concrete and abstract syntax, the ground work has already been done
by appropriately labelling concrete rules with constructor names of the abstract syntax.

Here is the code for the `load` funcion:


```rascal
// tag::module[]
module demo::lang::Func::Load

import demo::lang::Func::Func;
import demo::lang::Func::AST;
import demo::lang::Func::Parse;

import ParseTree;

demo::lang::Func::AST::Prog implode(demo::lang::Func::Func::Prog p) = 
    implode(#demo::lang::Func::AST::Prog, p);

demo::lang::Func::AST::Prog load(loc l) = implode(parse(l));
demo::lang::Func::AST::Prog load(str s) = implode(parse(s));
// end::module[]

```

                
This looks simple but also slightly intimidating due to the many qualified names.
The issue is that the names in the concrete and abstract syntax are (on purpose) overloaded.
A name like `Prog` can be the one from the concrete syntax(i.e., `demo::lang::Func::Func::Prog`)
or the one from the abstract syntax (i.e., `demo::lang::Func::AST::Prog`).

For instance, the local version of `implode` defined here get a concrete `Prog` as argument and returns an abstract one.
Both `load` function return an abstract `Prog`.

Let's try this on example `F0`:
```rascal
fact(n) = if n <= 1 then
             1 
          else 
             n * fact(n-1)
          end
```

                

```rascal-shell
rascal>import demo::lang::Func::Load;
ok
rascal>import demo::lang::Func::programs::F0;
ok
rascal>load(F0);
Prog: prog(
  [func(
      "fact",
      ["n"],
      cond(
        leq(
          var(
            "n",
            location=|unknown:///|(13,1,<1,13>,<1,14>),
            comments=()),
          nat(
            1,
            location=|unknown:///|(18,1,<1,18>,<1,19>),
            comments=()),
          location=|unknown:///|(13,6,<1,13>,<1,19>),
          comments=()),
        nat(
          1,
          location=|unknown:///|(38,1,<2,13>,<2,14>),
          comments=()),
        mul(
          var(
            "n",
            location=|unknown:///|(70,1,<4,13>,<4,14>),
            comments=()),
          call(
            "fact",
            [sub(
                var(
                  "n",
                  location=|unknown:///|(79,1,<4,22>,<4,23>),
                  comments=()),
                nat(
                  1,
                  location=|unknown:///|(81,1,<4,24>,<4,25>),
                  comments=()),
                location=|unknown:///|(79,3,<4,22>,<4,25>),
                comments=())],
            location=|unknown:///|(74,9,<4,17>,<4,26>),
            comments=()),
          location=|unknown:///|(70,13,<4,13>,<4,26>),
          comments=()),
        location=|unknown:///|(10,87,<1,10>,<5,13>),
        comments=()),
      location=|unknown:///|(0,97,<1,0>,<5,13>),
      comments=())],
  location=|unknown:///|(0,97,<1,0>,<5,13>),
  comments=())
```
We get the original program and its __abstract syntax tree__ of type `Prog` back.
In case of doubt, compare this with the result in [Parse](/docs/Recipes/Languages/Func/Parse) where we did obtain a parse tree.
Next, we try the same from a file:

```rascal-shell
rascal>load(|std:///demo/lang/Func/programs/F0.func|);
Prog: prog(
  [func(
      "fact",
      ["n"],
      cond(
        leq(
          var(
            "n",
            location=|std:///demo/lang/Func/programs/F0.func|(13,1,<1,13>,<1,14>),
            comments=()),
          nat(
            1,
            location=|std:///demo/lang/Func/programs/F0.func|(18,1,<1,18>,<1,19>),
            comments=()),
          location=|std:///demo/lang/Func/programs/F0.func|(13,6,<1,13>,<1,19>),
          comments=()),
        nat(
          1,
          location=|std:///demo/lang/Func/programs/F0.func|(38,1,<2,13>,<2,14>),
          comments=()),
        mul(
          var(
            "n",
            location=|std:///demo/lang/Func/programs/F0.func|(70,1,<4,13>,<4,14>),
            comments=()),
          call(
            "fact",
            [sub(
                var(
                  "n",
                  location=|std:///demo/lang/Func/programs/F0.func|(79,1,<4,22>,<4,23>),
                  comments=()),
                nat(
                  1,
                  location=|std:///demo/lang/Func/programs/F0.func|(81,1,<4,24>,<4,25>),
                  comments=()),
                location=|std:///demo/lang/Func/programs/F0.func|(79,3,<4,22>,<4,25>),
                comments=())],
            location=|std:///demo/lang/Func/programs/F0.func|(74,9,<4,17>,<4,26>),
            comments=()),
          location=|std:///demo/lang/Func/programs/F0.func|(70,13,<4,13>,<4,26>),
          comments=()),
        location=|std:///demo/lang/Func/programs/F0.func|(10,87,<1,10>,<5,13>),
        comments=()),
      location=|std:///demo/lang/Func/programs/F0.func|(0,97,<1,0>,<5,13>),
      comments=())],
  location=|std:///demo/lang/Func/programs/F0.func|(0,97,<1,0>,<5,13>),
  comments=())
```

#### Benefits


