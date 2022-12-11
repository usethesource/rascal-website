---
title: Equation Solving
sidebar_position: 14
---

#### Synopsis

Solving equations by fixed-point iteration.

#### Description

Many problems can be solved by forms of _constraint solving_. 
This is a declarative way of programming: Specify the constraints that a problem solution should 
satisfy and how potential solutions can be generated. 
The actual solution (if any) is found by enumerating solutions and testing their compliance with the constraints.

Rascal provides a [Solve](../../Rascal/Statements/Solve/index.md) statement that helps writing constraint solvers. 

#### Examples

A typical example is data flow analysis where the propagation of values through a program can be described by a set of equations. 
Their solution can be found with the solve statement.

WARNING: add links


