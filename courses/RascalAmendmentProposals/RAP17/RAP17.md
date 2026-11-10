---
title: RAP 17 - Drop symbol sequence syntax and semantics
sidebar_position: 17
---

| RAP | 16 |
| :---- | :---- |
| Title | Drop sequence and alternative symbols | 
| Author | Jurgen Vinju |
| Status | Draft |
| Type | Language Design  |

## Abstract

The sequence symbol in syntax definitions, `(A B)` defines a nameless non-terminal which parses and `A` followed by a `B`. In context-free syntax contexts a layout node is added. An arbitrary amount of elements is allowed. Sequence is one of "regular" symbols next to lists, separated lists, alternatives and optionals.

The alternative symbol in syntax definitions `(A | B)` defines a nameless non-terminal which accepts either `A` or `B` (or both). An arbitrary amount of elements is allowed. Alternative is also one of the "regular" symbols next to lists, etc.

The proposal is to remove these features entirely from Rascal. Also from lexical syntax definitions where they are sometimes quite handy.

## Motivation

* For technical reasons in the parser the sequence non-terminal requires extensive special cases in multiple places in the implementation of Rascal. It is therefore still not fully supported in concrete syntax fragments. It does not work as an outermost type and it does not work as a spliced variable in a concrete pattern or a concrete expression. It also does not work as the toplevel type to the `parse` function.
It can be made to work but at the cost of weird special cases in several places. While the other regular expressions have been dealt with in a natural way, this is not possible for the sequence symbol. 
* Nested sequences in a grammar do not contribute to the readability of a grammar.
* Nested sequences in a grammar make downstream processing in Rascal harder.
* A simple production rule for the sequence: `syntax MySequence = A B;` solves the problem.
* Alternative is the dual of sequence. Where Sequence implements (again) the concatenation feature of productions rules, alternative implements again the `|` of production rules. To remove one without the other would be inconsistent.
* Nested alternatives in a grammar do not contribute to the readability of grammar.
* Nested alternatives in a grammar make downstream processing harder.
* Both nested alternatives and nested sequences make it hard to create a clear mapping between concrete and abstract syntax (implode).

## Compatibility

* Neither Sequence nor Alternative is used by the bootstrap sequence because it does not occur in the Rascal grammar for Rascal
* None of our examples use sequence or alternative
* Removing sequence will produce a parse error in the grammars that use it.
* Some people use sequence and alternative in complex lexical syntax definitions. They will have to introduce a non-terminal for every instance.
* It is possible to leave the syntax of Sequence and Alternative in the grammar for a while and provide quickfixes for the user.
