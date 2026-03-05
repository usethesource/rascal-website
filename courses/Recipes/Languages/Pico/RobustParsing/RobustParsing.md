---
title: Robust Parsing
---

#### Synopsis

For many tasks it is important to be able to work with inputs that contain parse errors. Robust parsing can be of great help in those cases.
Using a Pico examples we will show how to parse input that contains parse errors.

#### Syntax

#### Types

#### Function
       
#### Usage

#### Description



#### Examples

Most parse functions support the `allowRecovery` keyword parameter. By setting this parameter to true, the parser will attempt to
recover when a pare error is encountered. If this recovery succeeds, a parse forest is returned that contains error subtrees:

```rascal-shell
import demo::lang::Pico::Syntax;
import ParseTree;
import vis::Text;
import IO;
import util::ParseErrorRecovery;

Program prg = parse(#Program, "begin declare x : natural, y : natural; x ;= 1; y := x + 5 end", allowRecovery=true);

println(prettyTree(prg));
```

As you can see error recovery resulted in a tree with ambiguities: the recoverer found multiple ways to recover the error and
included them all in the resulting tree as ambiguities.

The error trees themselves consist of an `error` node representing a production that was only partially recognized. The part that was
not recognized is included as the last child of the error node in the form of a `skipped` node containing the list of characters that
where skipped before parsing could continue.

Note that the definition of `error` and `skipped` productions can be found in the ((module:ParseTree)) module.

For some situations, simple disambiguation of the error ambiguities can be enough. For this the module ((util::ParseErrorRecovery)) offers
the `disambiguateParseErrors` function that takes an error tree and removes all ambiguities based on some simple heuristics:

```rascal-shell,continue
Program disambPrg = disambiguateParseErrors(prg);
println(prettyTree(disambPrg));
```

As you can see, no ambiguities remain. In this case error recovery resulted in a tree with a single error tree, only skipping 4 characters
before parsing could continue normally.

Note that for more complex solutions this simple disambiguation strategy is too limited. For instance if you want to use error recovery to
offer the user quick fixes in the editor, you might want to use all alternatives to find possible fixes.

#### Benefits

#### Pitfalls

