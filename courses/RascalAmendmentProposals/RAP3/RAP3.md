---
title: RAP 3 - Concrete Patterns for External Parsers
---

| RAP | 3 |
| :---- | :---- |
| Title | Concrete Patterns for External Parsers |
| Author | Jurgen Vinju |
| Status | Draft |
| Type | Rascal Language |

## Abstract

We use external compiler and IDE front-ends to lift on community efforts of constructing high quality language processors. We use Rascal to process the abstract syntax trees which are produced but we can only match using abstract patterns on these currently. A system by Arjan Mooij, internally at ESI, elegantly uses the CDT (Eclipse C parser) to parse concrete syntax strings and generate AST patterns from them. A similar feature can be added to Rascal, such that we can use elegant concrete syntax patterns on otherwise abstract syntax trees as well. 

## Motivation

* Concrete syntax patterns are much more concise and also more independent of underlying tree structure  
* Concrete syntax patterns are easier to write for domain experts  
* We make good use of external parsers

## Specification

We have alternatives for implementing this feature. Currently concrete syntax is written as follows:

(NonTerminal) \`concrete-syntax-string-with-holes\`

In this example we use the NonTerminal as a parser to parse the concrete-syntax string at compile-time. The holes are replaced with simple unique placeholders before parsing and after parsing the resulting parse tree is changed to put the original holes back. Then the pattern interpreter or pattern compiler goes to work to translate the tree to either a pattern matching automaton or a constructor tree if the pattern is at an expression location rather than a pattern matching location.

We propose to generalize this notation to allow any string function to be applied to the concrete syntax syntax fragment, like so:

data Exp \= … ; // an abstract data definition or any other type  
Exp javaExp(str x, loc l); // given this function which can parse a java expression string to an abstract data-type

(javaExp) \`1 \+ 1\` // a concrete Java expression which will be parsed by the javaExp function (at compile time)

The semantics would be that the normal string analysis and subsitution takes place to simplify placeholders for holes, then the string is passed to the given function, then the resulting value is visited to replace the placeholders with the holes again. The resulting value is a normal Rascal pattern which can be further processed by the interpreter or compiler.

The implicit constraint is of course that the same parser is used to parse pattern strings as the parser which is used to parse subject programs to match against the patterns. This will remain a semantical constraint which is enforced by the programmer manually. However, due to Rascal’s type system, you can of course only match against patterns of the right type (i.e pattern and subject must have comparable types statically).

## Backwards Compatibility

* Since before functions were not allowed 

## Implementation

* The challenge is to lift the value which is produced by the external parser back to a pattern expression in the interpreter and then nest the nested placeholders back in.  
* With the concrete syntax feature we have a similar issue regarding the syntax trees; which will have to be implemented differently.  
* We could also support pattern compilation/interpretation for values, mimicking the expression semantics; that would be a quicker hack perhaps.

## References

