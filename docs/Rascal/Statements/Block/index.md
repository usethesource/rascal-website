---
title: Block
keywords:
  - "{"
  - "}"
  - ";"

---

#### Synopsis

Group statements into a block.

#### Syntax

`{ Statement₁; ... ; Statementₙ }`

#### Description

A _block_ consists of a sequence of statements separated by semi-colons.

Since a block is itself a statement, it may be used in all places where a statement is required. 
A block also introduces a new scope and variables that are declared in the block are local to that block. 
The value produced by a block is the value produced by its last statement (if any).

#### Examples

Here is a contrived block of three expressions (be aware of the last semi-colon):

```rascal-shell 
rascal>{1;2;3;}
int: 3
```
its value is `3`.

The effect of a local variable declared in a block can be seen as follows:

```rascal-shell ,error
rascal>{int x = 3; x*x;}
int: 9
```
After the block we cannot refer to `x`:

```rascal-shell ,continue,error
rascal>x;
|prompt:///|(0,1,<1,0>,<1,1>): Undeclared variable: x
Advice: |http://tutor.rascal-mpl.org/Errors/Static/UndeclaredVariable/UndeclaredVariable.html|
ok
```



