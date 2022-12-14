---
title: Squares
---

#### Synopsis

Print a list of squares

#### Syntax

#### Types

#### Function

#### Description

#### Examples

How can we print a list of squares? Here is a solution:

```rascal-modules
import IO; // <1>

@synopsis{Print a table of squares using a for loop and single line string templates}
void squares(int n) {
  println("Table of squares from 1 to <n>\n"); // <2>
  for (int I <- [1 .. n + 1])
      println("<I> squared = <I * I>");        // <3>
}

@synopsis{a solution with one multi line string template}
str squaresTemplate(int N) // <4>
  = "Table of squares from 1 to <N>
    '<for (int I <- [1 .. N + 1]) {>
    '  <I> squared = <I * I><}>";
```
           
<1> The [IO]((Library:module:IO)) module is imported since we want to print things using `println`.

<2> [String]((Rascal:Values-String)) interpolation is used several times.
    Here the value of `N` is inserted in the header message.

<3> The values of `I` and `I * I` are inserted in each line that is printed.

<4> Define an alternative implementation `squareTemplate` that is based on string templates 
    and returns a string value instead of printing the results itself.

Here is how `square` can be used:
```rascal-shell,continue
squares(9);
```

`squaresTemplate` gives a similar result but now as a string:
```rascal-shell,continue
squaresTemplate(9);
```

To get a truly identical result we have to import the [IO]((Library:module:IO)) module 
and print the value of `squaresTemplate`:
```rascal-shell,continue
import IO;
println(squaresTemplate(9));
```


#### Benefits

#### Pitfalls

