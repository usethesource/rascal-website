---
title: Squares
---

#### Synopsis

Print a list of squares

#### Examples

How can we print a list of squares? Here is a solution:

```rascal 

module demo::basic::Squares

import IO;


void squares(int n) {
  println("Table of squares from 1 to <n>\n"); // <2>
  for (int I <- [1 .. n + 1])
      println("<I> squared = <I * I>");        // <3>
}


str squaresTemplate(int N) // <4>
  = "Table of squares from 1 to <N>
    '<for (int I <- [1 .. N + 1]) {>
    '  <I> squared = <I * I><}>";

```
           
<1> The [IO](../../../Library/IO.md/) module is imported since we want to print things using `println`.

<2> [String](../../../Rascal/Expressions/Values/String/) interpolation is used several times.
    Here the value of `N` is inserted in the header message.

<3> The values of `I` and `I * I` are inserted in each line that is printed.

<4> Define an alternative implementation `squareTemplate` that is based on string templates 
    and returns a string value instead of printing the results itself.

Here is how `square` can be used:

```rascal-shell 
rascal>import demo::basic::Squares;
ok
rascal>squares(9);
squares(9);
Table of squares from 1 to 9

1 squared = 1
2 squared = 4
3 squared = 9
4 squared = 16
5 squared = 25
6 squared = 36
7 squared = 49
8 squared = 64
9 squared = 81
ok
```

`squaresTemplate` gives a similar result but now as a string:

```rascal-shell ,continue
rascal>squaresTemplate(9);
str: "Table of squares from 1 to 9\n\n  1 squared = 1\n  2 squared = 4\n  3 squared = 9\n  4 squared = 16\n  5 squared = 25\n  6 squared = 36\n  7 squared = 49\n  8 squared = 64\n  9 squared = 81"
```

To get a truly identical result we have to import the [IO](../../../Library/IO.md/) module 
and print the value of `squaresTemplate`:

```rascal-shell ,continue
rascal>import IO;
ok
rascal>println(squaresTemplate(9));
println(squaresTemplate(9));
Table of squares from 1 to 9

  1 squared = 1
  2 squared = 4
  3 squared = 9
  4 squared = 16
  5 squared = 25
  6 squared = 36
  7 squared = 49
  8 squared = 64
  9 squared = 81
ok
```



