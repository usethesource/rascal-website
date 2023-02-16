---
title: Eight Queens
---

This demo implements a solver of the eight queens puzzle:
* <http://en.wikipedia.org/wiki/Eight_queens_puzzle>
* <http://en.wikipedia.org/wiki/Eight_queens_puzzle_solutions>

First the prerequisites:
```rascal-commands
import List;
import util::Math;
```

We play eight queens on a chess board, n by n squares, but usually 8.
very queen has her position:

```rascal-commands,continue
alias Pos = tuple[int x,int y];
```

Queens challenge eachother diagonally if the absolute difference
in x coordinates equals the absolute difference in y coordinates:

```rascal-commands,continue
bool diagonalOverlap(Pos l, Pos r) = l != r ==> abs(l.x - r.x) == abs(l.y - r.y);
```

One particular guess at a solution can be checked by simply comparing
all pairs of queens with one another for diagonal overlap:

```rascal-commands,continue
lrel[&T,&T] pairs(list[&T] p) =
        [ <p[i],p[j]> | i <- [0..size(p)-1], j <- [i+1..size(p)]];

bool isSolution(list[Pos] queens) = all(<l,r> <- pairs(queens), !diagonalOverlap(l,r));
```

The main driver is a brute force generator of all possible permutations on the board:
```rascal-commands,continue
list[list[Pos]] nQueens(int n) 
    = [queens 
        | cols <- permutations([0..n]),
          queens := [<i,cols[i]> | i <- [0..n]],
          isSolution(queens)];
```

Let's give it a try:

```rascal-shell-continue
nQueens(4)
```
