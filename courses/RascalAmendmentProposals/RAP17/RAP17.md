---
title: RAP 17 - Drop symbol sequence syntax and semantics
sidebar_position: 17
---

| RAP | 16 |
| :---- | :---- |
| Title | Drop sequence symbols | 
| Author | Jurgen Vinju |
| Status | Draft |
| Type | Language Design  |

## Abstract

The sequence symbol in syntax definitions, `(A B)` defines a nameless non-terminal which parses and `A` followed by a `B`. In context-free syntax contexts a lalayout node is added. An arbitrary amount of elements is allowed. Sequence is one of "regular" symbols next to lists, separated lists, alternatives and optionals.

The proposal is to remove this feature entirely from Rascal.

## Motivation

* For technical reasons in the parser the sequence non-terminal requires extensive special cases in multiple places in the implementation of Rascal. It is therefore still not fully supported in concrete syntax fragments. It does not work as an outermost type and it does not work as a spliced variable in a concrete pattern or a concrete expression. It also does not work as the toplevel type to the `parse` function.
It can be made to work but at the cost of weird special cases in several places. While the other regular expressions have been dealt with in a natural way, this is not possible for the sequence symbol. 
* Nested sequences in a grammar do not contribute to the readability of a grammar.
* Nested sequences in a grammar make downstream processing in Rascal harder.
* A simple production rule for the sequence: `syntax MySequence = A B;` solves the problem.

## Compatibility

* Sequence is not used by the bootstrap sequence because it does not occur in the Rascal grammar for Rascal
* None of our examples use sequence
* Removing sequence will produce a parse error in the grammars that use it.
