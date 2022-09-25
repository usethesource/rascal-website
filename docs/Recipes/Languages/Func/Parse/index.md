---
title: Parse
---

#### Synopsis

Parse a Func program from a string or a file.

#### Description

Parsing uses the syntax rules for a given start non-terminnal to parse a string and turn it into a parse tree.
The work horse is the [parse](../../../../Library/ParseTree.md#ParseTree-parse/) function that is available in the 
[ParseTree](../../../../Library/ParseTree.md/) library.

#### Examples

Here is how to parse Func programs from a string or file:

```rascal 
module demo::lang::Func::Parse

import demo::lang::Func::Func;
import ParseTree;

Prog parse(loc l) = parse(#Prog, l);
Prog parse(str s) = parse(#Prog, s);

```

                
Let's try this on example `F0.func`:
```rascal
fact(n) = if n <= 1 then
             1 
          else 
             n * fact(n-1)
          end
```

First, we try the version with a string argument:

```rascal-shell ,continue
rascal>import demo::lang::Func::Parse;
ok
rascal>import demo::lang::Func::programs::F0;
ok
rascal>parse(F0);
Prog: (Prog) `fact(n) = if n <= 1 then
             1 
          else 
             n * fact(n-1)
          end`
```
This must be defined as success: we get the original program and its parse tree back.
Next, we try the same from a file. We use the scheme `std` that refers to files that reside in the Rascal library.
See [$Rascal:Expressions/Values/Location] for further details on other schemes.

```rascal-shell ,continue
rascal>parse(|std:///demo/lang/Func/programs/F0.func|);
Prog: (Prog) `fact(n) = if n <= 1 then
             1 
          else 
             n * fact(n-1)
          end`
```


