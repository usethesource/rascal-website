---
title: "module demo::Queens"
---

#### Usage

`import demo::Queens;`

#### Synopsis

Experiments with the 8-queens puzzle in Rascal

#### Description


See: 
* <http://en.wikipedia.org/wiki/Eight_queens_puzzle>
* <http://en.wikipedia.org/wiki/Eight_queens_puzzle_solutions>


## alias Pos {#demo-Queens-Pos}

```rascal
tuple[int x,int y]

```

## function pairs {#demo-Queens-pairs}

```rascal
list[tuple[&T,&T]] pairs(list[&T] p)

```

## function diagonalOverlap {#demo-Queens-diagonalOverlap}

```rascal
bool diagonalOverlap(Pos l, Pos r)

```

## function isSolution {#demo-Queens-isSolution}

```rascal
bool isSolution(list[Pos] queens)

```

## function nQueens {#demo-Queens-nQueens}

```rascal
list[list[Pos]] nQueens(int n)

```

