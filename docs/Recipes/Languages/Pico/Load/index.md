---
title: Load
---

#### Synopsis

Convert a Pico parse tree into a Pico abstract syntax tree.

#### Examples

The mapping between parse tree and abstract sybtax tree is achieved as follows:

```rascal 
module demo::lang::Pico::Load

import Prelude;
import demo::lang::Pico::Syntax;
import demo::lang::Pico::Abstract;

public PROGRAM load(str txt)      ❶  
    =     ❸     implode(#PROGRAM,     ❷     parse(#start[Program], txt).top);

```

                
Notes:

* ❶   The function `load` takes a string as argument (supposedly the source code of a Pico program) and returns a value of type `PROGRAM`,
the abstract syntax tree of the input program. In case the input program is syntactically incorrect, a `ParseError` exception will be thrown,
see [RuntimeException](../../../../Library/Exception.md).

* ❷   `parse(#start[Program], txt)`: parse `txt` according to the non-terminal `Program`.
   * Note that `#start[Program]` is a _reified type_. The `#` operator turns a type literal into an ordinary Rascal value, which is then used by the `parse` function to generate a parser.
   * We use `#start[Program]` instead of directly `#Program` because the automatic `start` rule accepts whitespace before and after the program. See [reified types](../../../../Rascal/Expressions/Values/ReifiedTypes/index.md) for more information about reifying types and grammars.
   and the `parse` function returns a [parse tree](../../../../Rascalopedia/ParseTree/index.md) of the input program.

* ❸   `implode(#PROGRAM, parse(#Program, txt))`: Transform the parse returned by `parse` into an abstract syntax tree of type `PROGRAM`. The [implode](../../../../Library/ParseTree.md#ParseTree-implode) function performs the automatic mapping between elements in the parse tree and their counterpart in the abstract syntax.


The function `load` can be used as follows:

```rascal-shell 
rascal>import demo::lang::Pico::Load;
ok
rascal>load("begin declare x : natural; x := 3 end");
PROGRAM: program(
  [decl(
      "x",
      natural(
        src=|unknown:///|(18,7,<1,18>,<1,25>),
        comments=()),
      src=|unknown:///|(14,11,<1,14>,<1,25>),
      comments=())],
  [asgStat(
      "x",
      natCon(
        3,
        src=|unknown:///|(32,1,<1,32>,<1,33>),
        comments=()),
      src=|unknown:///|(27,6,<1,27>,<1,33>),
      comments=())],
  src=|unknown:///|(0,37,<1,0>,<1,37>),
  comments=())
```

Observe how the various parts of the abstract syntax tree are annotated with location attributes.


