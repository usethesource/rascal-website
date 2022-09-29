---
title: Combined
---

#### Synopsis

Combine concrete syntax with abstract syntax.

#### Description

Concrete syntax gives full control over the textual appearance of a language and leads to parse trees
in a standard format (i.e., values of type `Tree`).

Abstract syntax can be designed by the Rascal programmer according to his/her needs regarding
the type checking, code generation, transformation, or optimization to be done on the abstract syntax trees.

How can we bridge this gap? We discuss two approaches:

*  [./Manual](../../../../Recipes/Languages/Exp/Combined/Manual/index.md): a transformation is written manually to convert parse trees to abstract syntax trees.
*  [./Automatic](../../../../Recipes/Languages/Exp/Combined/Automatic/index.md): the library function [Rascal:implode] is used to automate this transformation.


