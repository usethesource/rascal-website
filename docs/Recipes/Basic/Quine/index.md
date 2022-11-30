---
title: Quine
sidebar_position: 7
---

#### Synopsis

A self-reproducing program.

#### Description

A [Quine](http://en.wikipedia.org/wiki/Quine_(computing))
is a computer program that takes no input and produces a copy of its own source code.
A quine is also called a _self-replicating_ or _self-reproducing_ program.

At the [Quine Page](http://www.nyx.net/~gthompso/quine.htm) you can find hundreds of
quines in many different programming languages.

Learning about quines, is about learning how to quote and escape symbols in strings.


#### Examples

```rascal
demo::basic::Quine
```

                
* ❶  A remarkable point in the code: the string variable `program` has as value
   the text of the module `Quine` up to here. 
* ❷  The definition of `program` ends here.
    This string has a mesmerizing amount of escapes to which we will come back in a moment.

* ❸  The function `quine` prints the string `program` twice, here as is and this produces the program up to icon:callout[1] above.
* ❹  Here the value of `program` is printed as a string (surrounded with string quotes) in order to reproduce the string value 
    of `program` followed by a semi-colon (`;`).
  
Now here is the catch: We have to be very carefull in handling special characters like quote (`"`) and backslash (`\`) in strings.

Let's do a simple experiment:

```rascal-shell 
rascal>import IO;
ok
rascal>str greeting = "\"Good Morning, Dr. Watson\", said Holmes";
str: "\"Good Morning, Dr. Watson\", said Holmes"
rascal>println("\"" + greeting + "\"");
""Good Morning, Dr. Watson", said Holmes"
ok
```
As you see, the quotes inside the string are not escaped and the result is not a legal string.
So what can we do? We escape all dangerous characters in the string before printing it using the [Rascal:escape] function.
It takes a string and a map of characters to be escaped and returns a result in which all escaping has been carried out.
Be aware that in the map, escaping is also needed!
We want to say: Escape `"` and replace it by `\"`, but since both `"` and `\` have to be escaped themselves
we have to say: Escape `"\""` and replace it by `"\\\""`. The effect is as follows:

```rascal-shell ,continue
rascal>import String;
ok
rascal>println("\"" + escape(greeting, ("\"": "\\\"")) + "\"");
"\"Good Morning, Dr. Watson\", said Holmes"
ok
```
And indeed, the two quotes are now properly escaped.

This is exactly what happens at line 4 in the definition of `quine`:
```rascal
println("\"" + escape(program, ("\"" : "\\\"", "\\" : "\\\\")) + "\";");
```
We escape `program` and replace `"` by `\"`, and `\` by `\\`.
The mesmerizing amount of `\` characters can be explained due to escaping `"` and `\`.

Now let's put `quine` to the test.

```rascal-shell 
rascal>import demo::basic::Quine;
ok
rascal>quine();
module demo::basic::Quine

import IO;
import String;

void quine(){
  println(program);
  println("\"" + escape(program, ("\"" : "\\\"", "\\" : "\\\\")) + "\";");
}

str program =
"module demo::basic::Quine

import IO;
import String;

void quine(){
  println(program);
  println(\"\\\"\" + escape(program, (\"\\\"\" : \"\\\\\\\"\", \"\\\\\" : \"\\\\\\\\\")) + \"\\\";\");
}

str program =";
ok
```
If you follow this output line-by-line you will see that it
is identical to the original source code of module `Quine`:


```rascal 

module demo::basic::Quine

import IO;
import String;

void quine(){
  println(program);      ❸  
  println("\"" + escape(program, ("\"" : "\\\"", "\\" : "\\\\")) + "\";");      ❹  
}

str program =      ❶  
"module demo::basic::Quine

import IO;
import String;

void quine(){
  println(program);
  println(\"\\\"\" + escape(program, (\"\\\"\" : \"\\\\\\\"\", \"\\\\\" : \"\\\\\\\\\")) + \"\\\";\");
}

str program =";      ❷  

```


