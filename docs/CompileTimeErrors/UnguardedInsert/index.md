---
title: UnguardedInsert
---

#### Synopsis

An `insert` occurs outside a `visit` expression.

#### Description

An insert statement may only occur in the action part of a [pattern with action](../../Rascal/Expressions/Visit/PatternWithAction/index.md), 
more precisely in a case in a 
[visit](../../Rascal/Expressions/Visit/index.md) expression. 

Remedies:

*  Use an auxiliary variable and list or set operations to insert the value where you want.
*  Place the insert statement inside a visit.

#### Examples

Here is an example of the use of insert to swap the arguments of red nodes:

Our favorite data type, colored trees:

```rascal-shell ,error
rascal>data CTree = leaf(int n) | red(CTree left, CTree right) | green(CTree left, CTree right);
ok
```
An example tree:

```rascal-shell ,continue,error
rascal>CTree T = red(green(leaf(1), red(leaf(2), leaf(3))), red(leaf(4), leaf(5)));
CTree: red(
  green(
    leaf(1),
    red(
      leaf(2),
      leaf(3))),
  red(
    leaf(4),
    leaf(5)))
```
A visit to swap the arguments of red nodes:

```rascal-shell ,continue,error
rascal>visit(T){ case red(CTree l, CTree r): insert red(r,l); }
CTree: red(
  red(
    leaf(5),
    leaf(4)),
  green(
    leaf(1),
    red(
      leaf(3),
      leaf(2))))
```
An error occurs when insert is used outside a visit:

```rascal-shell ,continue,error
rascal>insert red(leaf(1), leaf(2));
|prompt:///|(0,29,<1,0>,<1,29>): Insert statement outside a visit statement
Advice: |http://tutor.rascal-mpl.org/Errors/Static/UnguardedInsert/UnguardedInsert.html|
ok
```


