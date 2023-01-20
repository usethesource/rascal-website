---
title: Visiting
keywords:
   - traversal
   - visit
   - recursion
   - strategies
   - rewriting
---

#### Synopsis

Visiting tree structures and other container values.
#### Syntax

#### Types

#### Function

#### Description

Traversing the elements of a data structure is one of the most common operations in our domain. Especially
collecting information from abstract syntax trees and parse trees is common, but also other intermediate
data types require traversal code. Given a tree-like data structure we want to perform an operation on some (or all) nodes of the tree. The purpose of the ((Expressions-Visit)) is to decouple the logistics of visiting each node from the actual operation on each node. 

The ((Expressions-Visit)) statement and expression helps to automate the traversal without having to write boilerplate
recursion and case distinction. It resembles the ((Statements-Switch)) statement because it uses `case` clauses as well. 
A ((Expressions-Visit)) traverses an arbitrarily complex _subject_ value and applies the ((Patterns)) of each case to all its subtrees. 
All the elements of the subject are visited. When one of the cases matches the statements associated 
with that case are executed. These cases may:

*  Cause some side effect, i.e., assign a value to local or global variables;
*  Execute an [Insert]((Rascal:Statements-Insert)) statement that replaces the current element;
*  Execute a [Fail]((Rascal:Statements-Fail)) statement that causes the match for 
   the current case to fail.

The value of a visit expression is the original subject value with all replacements made as dictated by matching cases. 
The traversal order in a visit expressions can be explicitly defined by the programmer. 

#### Examples

* [ColoredTrees]((Recipes:Common-ColoredTrees)) shows how to visit a simple tree structure and change it without recursive function definitions.
* [Derivative]((Recipes:Common-Derivative)) is a more involved example where ((Expressions-Visit)) is used to decouple rewrite rules application from recursive traversal.

#### Benefits

* Avoid writing boilerplate recursion and case distinction with ((Expressions-Visit))
* Familiar switch-like syntax and semantics
* No case fall-through
#### Pitfalls

* Visit always visits all nodes, so watch out for nested scopes and declarations in syntax trees that you might want to skip (e.g. nested classes in a Java method)

