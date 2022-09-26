---
title: Associativity Declaration
keywords:
  - left
  - right
  - assoc
  - non-assoc

---

#### Synopsis

Define associativity of operators

#### Syntax

*  `syntax Exp = Assoc Label Symbol₁ Symbol₂ ...`
*  `syntax Exp = Assoc ( Alt₁ | Alt₂ | ... )`
*  `syntax Exp = Assoc Symbol₁ Symbol₂ ...`
 

Here _Assoc_ is one of: `left`, `right`, `assoc` or `non-assoc`. See [Syntax Definition](../../../../../Rascal/Declarations/SyntaxDefinition/index.md)s on how to define alternatives and [Symbol](../../../../../Rascal/Declarations/SyntaxDefinition/Symbol/index.md)s.

#### Description

Using Associativity declarations we may disambiguate binary recursive operators. 

The semantics are that an associativity modifier will instruct the parser to disallow certain productions to nest _at particular argument positions_:

*  `left` and `assoc` will disallow productions to directly nest in their _right-most_ position.
*  `right` will disallow productions to directly nest in their _left-most_ position.
*  `non-assoc` will disallow productions to directly nest in either their left-most or their right-most position.

When associativity is declared for a group of productions, e.g. `left ( Alt₁ | _Alt ₂_ | Alt₃)`, then each alternative will be mutually associative to each other alternative _and itself_. If an alternative of a group defines its own local associativity, as in `left ( right Alt₁ | Alt₂ | Alt₃)`, then _Alt_₁ is right associative with respect to itself and left associative with respect to all others in the group. 

A finer point is that associativity has no effect on any other position than the left-most and right-most position (see also [Priority](../../../../../Rascal/Declarations/SyntaxDefinition/Disambiguation/Priority/index.md)). This is to guarantee that associativity does not introduce parse errors. The following tables explain when an associativity declaration filters, given two productions `father` and `child` that share an associativity group.
| If `left (Parent | Child)`      | Parent None: `E = "[" E "]"` | Parent Left-most: `E = E "*"` |Parent  Right-most: `E = "*" E` | Parent Both: `E = E "*" E`   |
| --- | --- | --- | --- | --- | --- |
| __Child None:__ `E = "{" E "}"`  | No filter        | No filter            | No filter                     | No filter               |
| __Child Left-most:__ `E = E "+"` | No filter        | No filter            | Filter under right            | Filter under right      |
| __Child Right-most:__ `E = "+" E`| No filter        | No filter            | No filter                     | No filter       |
| __Child Both:__ `E = E "+" E`    | No filter        | No filter            | Filter under right            | Filter under right      |


| If `right (Parent | Child)` | Parent None: `E = "[" E "]"` | Parent Left-most: `E = E "*"` |Parent  Right-most: `E = "*" E` | Parent Both: `E = E "*" E`   |
| --- | --- | --- | --- | --- | --- |
| __Child None:__ `E = "{" E "}"` | No filter        | No filter                    | No filter              | No filter               |
| __Child Left-most:__ `E = E "+"` | No filter       | No filter                    | No filter              | No filter      |
| __Child Right-most:__ `E = "+" E`| No filter       | Filter under left            | No filter              | Filter under left       |
| __Child Both:__ `E = E "+" E`   | No filter        | Filter under left            | No filter              | Filter under left   |




#### Benefits

*  Short notation for common constructs in programming languages.
*  Removes ambiguity but can not introduce parse errors.
*  Allows the use of less non-terminals for the same expression grammar (typically only one), which makes parse trees simpler as well as the mapping to an abstract syntax tree more direct.

#### Pitfalls

*  Please do not assume that Rascal's associativity declarations have the same semantics as SDF's associativity declarations.
*  Use of productions that are not both left and right recursive in an associativity group, although safe, is not very meaningful. We would advise to use the [Priority](../../../../../Rascal/Declarations/SyntaxDefinition/Disambiguation/Priority/index.md) relation such a case. For example:

| Original associativity | Better written as priority  |
| --- | --- |
|`E = left ( "+" E | E "+" E );` | `E = E "+" E > "+" E;`  |
|`E = right ( "+" E | E "+" E );` | `E = "+" E > E "+" E;`  |
|`E = left ( E "+" | E "+" E);` | `E = E "+" > E "+" E;`  |
|`E = right ( E "+" | E "+" E);` | `E = E "+" E > E "+" ;` |


//


