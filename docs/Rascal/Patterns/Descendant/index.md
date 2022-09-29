---
title: Descendant Pattern
keywords:
  - "/"

---

#### Synopsis

Deep match in an abstract pattern.

#### Description

A descendant pattern
performs a deep match of the pattern _Pat_. In other words, it matches when any element of the subject at any depth
that matches _Pat_ and is used to match, for instance, tree nodes at an arbitrary distance from the root.

#### Examples


```rascal-shell 
rascal>import IO;
ok
rascal>data ColoredTree = leaf(int N)
>>>>>>>                 | red(ColoredTree left, ColoredTree right) 
>>>>>>>                 | black(ColoredTree left, ColoredTree right);
ok
rascal>T = red(red(black(leaf(1), leaf(2)), black(leaf(3), leaf(4))), black(leaf(5), leaf(4)));
ColoredTree: red(
  red(
    black(
      leaf(1),
      leaf(2)),
    black(
      leaf(3),
      leaf(4))),
  black(
    leaf(5),
    leaf(4)))
```
Now we match for `black` nodes with `leaf(4)` as second argument:

```rascal-shell ,continue
rascal>for(/black(_,leaf(4)) := T)
>>>>>>>    println("Match!");
Match!
Match!
list[void]: []
```
We use an __anonymous variable__ `_` at a position where we don't care about the actual value that is matched.
In order to print the actual values of the matches, we would need an [Abstract/Labelled] pattern.

Here we match all leaves that occur as second argument of `black`:

```rascal-shell ,continue
rascal>for(/black(_,leaf(int N)) := T)
>>>>>>>    println("Match <N>");
Match 2
Match 4
Match 4
list[void]: []
```
Here we list all integers that occur in any leaf:

```rascal-shell ,continue
rascal>for(/int N := T)
>>>>>>>    println("Match <N>");
Match 1
Match 2
Match 3
Match 4
Match 5
Match 4
list[void]: []
```
Rather than printing, we can also collect them in a list using [$Statements/Append]:

```rascal-shell ,continue
rascal>for(/int N := T)
>>>>>>>    append N;
list[int]: [1,2,3,4,5,4]
```

