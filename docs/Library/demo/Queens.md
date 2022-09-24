---
title: "module demo::Queens"
---

#### Usage

`import demo::Queens;`

## alias Pos {#demo-Queens-Pos}

* `tuple[int x,int y]`

## function pairs {#demo-Queens-pairs}

* ``list[tuple[&T,&T]] pairs(list[&T] p)``

## function diagonalOverlap {#demo-Queens-diagonalOverlap}

* ``bool diagonalOverlap(Pos l, Pos r)``

## function isSolution {#demo-Queens-isSolution}

* ``bool isSolution(list[Pos] queens)``

## function nQueens {#demo-Queens-nQueens}

* ``list[list[Pos]] nQueens(int n)``

