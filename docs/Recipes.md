---
sidebar_position: 13
title: Recipes
---

**Synopsis.**

Recipes for writing Rascal programs.

**Description.**

These *Rascal Recipes* are a work-in-progress but will gradually evolve into a collection of basic Rascal language
examples and use cases. It consists of the following parts:

  - [Basic](#Recipes-Basic): Some basic, *hello world*-like, examples of Rascal programs.

  - [Common](#Recipes-Common): Solutions for some common tasks.

  - [Languages](#Recipes-Languages): Definitions of several languages and their tools.

  - [Metrics](#Recipes-Metrics): Computing.

  - [Visualization](#Recipes-Visualization): Recipes for creating visualizations.

The following features are covered:

  - Basic language features.

  - Common tasks.

  - Fact extraction.

  - Language definition.

  - Syntax definition.

  - Parsing.

  - Transformation.

  - Code generation.

  - IDE extensions.

  - Visualization.

## Basic

**Synopsis.**

Some basic, *hello world*-like, examples of Rascal programs.

**Description.**

We discuss the following examples:

  - [Hello](#Basic-Hello): Variations on the ubiquitous *Hello World* example.

  - [Factorial](#Basic-Factorial): Compute the factorial function.

  - [Squares](#Basic-Squares): Print a list of squares.

  - [Bottles Of Beer](#Basic-BottlesOfBeer): A Rascal version of a generator for the *99 Bottles of Beer* song.

  - [Bubble](#Basic-Bubble): Variout styles to write bubble sort.

  - [Even](#Basic-Even): Produce a list of even numbers.

  - [FizzBuzz](#Basic-FizzBuzz): We solve a well-known job interview puzzle.

  - [Quine](#Basic-Quine): A self-reproducing program.

**Pitfalls.**

These programs illustrate various features of Rascal; they are **not representative** as use cases of the language.

### Hello

**Synopsis.**

Variations on the ubiquitous *Hello World* example.

### `hello` on command line

**Examples.**

We demonstrate hello via an interactive session with the Rascal system. First we get the prompt `rascal>` that shows
that Rascal is ready for our input. Next, we import the library module [IO](/docs/Libraries#io) since hello world
requires printing. Rascal responds with the feedback `ok` so we know that all went well. Finally, we call `println` and
proudly observe our first Rascal output\!

``` rascal-shell
import IO;
println("Hello world, this is my first Rascal program");
```

### `hello` as function

A slightly more audacious approach is to wrap the print statement in a function and call it:

``` rascal-shell
import IO;
void hello() {
   println("Hello world, this is my first Rascal program");
}
```

When you type in a command and continue it on a new line the Rascal systems prompts you with `>>>>>>>` to indicate that
more input is needed. Don’t get scared by the `void (): void hello();` that you get back when typing in the hello
function. The first `void ()` part says the result is a function that returns nothing, and the second part `void
hello()` summarizes its value (or would you prefer a hex dump?). Finally, we call the `hello` function and enjoy its
output.

``` rascal-shell
hello();
```

### `hello` as module

The summit of hello-engineering can be reached by placing all the above in a separate module:

``` rascal
module demo::basic::Hello

import IO;

void hello() {
   println("Hello world, this is my first Rascal program");
}
```

This module should be placed in \<project dir\>/src/demo/basic/Hello.rsc.

Using this Hello module is now simple:

``` rascal-shell
import demo::basic::Hello;
hello();
```

The `hello` function is by default visible outside the `Hello` module. We could stress this by adding writing `public
void hello() { …​ }`. Restricting visibility to the module itself can be achieved by adding the keyword `private` to the
definition of `hello`.

### Factorial

**Synopsis.**

Compute the factorial function.

**Examples.**

The [factorial](http://en.wikipedia.org/wiki/Factorial) of a number N is defined as `N * (N-1) * (N-2) * …​ * 1`. Here
is the Rascal version:

``` rascal
module demo::basic::Factorial

int fac(int N) = N <= 0 ? 1 : N * fac(N - 1); 

int fac2(0) = 1;  
default int fac2(int N) = N * fac2(N - 1); 

int fac3(int N)  { 
  if (N == 0)
     return 1;
  return N * fac3(N - 1);
}
```

  - `fac` is defined using a conditional expression to distinguish cases.

  - `fac2` distinguishes cases using pattern-based dispatch ([Rascal Functions](/docs/Rascal#Function)). Here the
    case for `0` is defined.

  - Here all other cases for `fac2` are defined (as indicated by the `default` keyword).

  - `fac3` shows a more imperative implementation of factorial.

Here is how to use `fac`:

``` rascal-shell
import demo::basic::Factorial;
fac(47);
```

> **Note**
> 
> Indeed, Rascal supports arbitrary length numbers.

Here is an example of `fac2`:

``` rascal-shell
fac2(47);
```

### Squares

**Synopsis.**

Print a list of squares

**Examples.**

How can we print a list of squares? Here is a solution:

``` rascal
module demo::basic::Squares

import IO; 

// Print a table of squares

void squares(int N){
  println("Table of squares from 1 to <N>\n"); 
  for(int I <- [1 .. N + 1])
      println("<I> squared = <I * I>");        
}

// a solution with a multi line string template:

str squaresTemplate(int N) 
  = "Table of squares from 1 to <N>
    '<for (int I <- [1 .. N + 1]) {>
    '  <I> squared = <I * I><}>";
```

  - The [IO](/docs/Libraries#io) module is imported since we want to print things using `println`.

  - [String](/docs/Rascal#String) interpolation is used several times. Here the value of `N` is inserted in the header
    message.

  - The values of `I` and `I * I` are inserted in each line that is printed.

  - Define an alternative implementation `squareTemplate` that is based on string templates and returns a string value
    instead of printing the results itself.

Here is how `square` can be used:

``` rascal-shell
import demo::basic::Squares;
squares(9);
```

`squaresTemplate` gives a similar result but now as a string:

``` rascal-shell
squaresTemplate(9);
```

To get a truly identical result we have to import the [IO](/docs/Libraries#io) module and print the value of
`squaresTemplate`:

``` rascal-shell
import IO;
println(squaresTemplate(9));
```

### Bottles Of Beer

**Synopsis.**

A Rascal version of a generator for the *99 Bottles of Beer* song.

**Description.**

Programs that generate the lyrics for the song *99 Bottles of Beer* are a popular way to compare programming languages.
At [99-bottles-of-beer.net](http://99-bottles-of-beer.net/) you can find versions in nearly 1500 different languages and
the lyrics can be found [here](http://99-bottles-of-beer.net/lyrics.html).

**Examples.**

Here is our version:

``` rascal
module demo::basic::Bottles

import IO;

str bottles(0)     = "no more bottles"; 
str bottles(1)     = "1 bottle";
default str bottles(int n) = "<n> bottles"; 

void sing(){ 
  for(n <- [99 .. 0]){
       println("<bottles(n)> of beer on the wall, <bottles(n)> of beer.");
       println("Take one down, pass it around, <bottles(n-1)> of beer on the wall.\n");
  }
  println("No more bottles of beer on the wall, no more bottles of beer.");
  println("Go to the store and buy some more, 99 bottles of beer on the wall.");
}
```

  - We use an auxiliary function `bottles` that returns the word "bottle" adjusted for the actual number of bottles that
    is available. Observe how we use the patterns `0`, `1` and `int n` in the definition of three variants of this
    function.

  - *Pattern-directed invocation* (see [function declaration](/docs/Rascal#Function)) will determine at the call
    site which function will be called. The general case is labeled with `default` to indicate that if the case for 0
    and 1 do not match, this alternative should handle the other cases.

  - The main function is `sing` that iterates over the numbers 99 down to 1 (as described by the range `[99 .. 0]`) and
    prints appropriate lyrics. Observe how the value of the `bottles` function is interpolated several times in the
    string.

Here is the result:

``` rascal-shell
import demo::basic::Bottles;
sing();
```

### Bubble

**Synopsis.**

Variout styles to write bubble sort.

**Description.**

[Bubble sort](http://en.wikipedia.org/wiki/Bubble_sort) is a classical (albeit not the most efficient) technique to sort
lists of values. We present here several styles to implement bubble sort. Also see [sort](/docs/Libraries#sort) for a
more efficient library function for sorting.

**Examples.**

``` rascal
module demo::basic::Bubble

import List;

// Variations on Bubble sort

// sort1: uses list indexing and a for-loop

list[int] sort1(list[int] numbers) {
  if (size(numbers) > 0) {
     for (int i <- [0 .. size(numbers)-1]) {
       if (numbers[i] > numbers[i+1]) {
         <numbers[i], numbers[i+1]> = <numbers[i+1], numbers[i]>;
         return sort1(numbers);
       }
    }
  }
  return numbers;
}

// sort2: uses list matching and switch

list[int] sort2(list[int] numbers) {
  switch(numbers){
    case [*int nums1, int p, int q, *int nums2]:
       if (p > q) {
          return sort2(nums1 + [q, p] + nums2);
       } else {
          fail;
       }
     default: return numbers;
   }
}

// sort3: uses list matching and while

list[int] sort3(list[int] numbers) {
  while ([*int nums1, int p, *int nums2, int q, *int nums3] := numbers && p > q)
        numbers = nums1 + [q] + nums2 + [p] + nums3;
  return numbers;
}

// sort4: using recursion instead of iteration, and splicing instead of concat
list[int] sort4([*int nums1, int p, *int nums2, int q, *int nums3]) {
  if (p > q)
    return sort4([*nums1, q, *nums2, p, *nums3]);
  else
    fail sort4;
}

default list[int] sort4(list[int] x) = x;

// sort5: inlines the condition into a when:
list[int] sort5([*int nums1, int p, *int nums2, int q, *int nums3])
  = sort5([*nums1, q, *nums2, p, *nums3])
  when p > q;

default list[int] sort5(list[int] x) = x;
```

`sort1` is a classic, imperative style, implementation of bubble sort: it iterates over consecutive pairs of elements
and when a not-yet-sorted pair is encountered, the elements are exchanged, and `sort1` is applied recursively to the
whole list.

`sort2` uses list matching and consists of a switch with two cases:

  - a case matching a list with two consecutive elements that are unsorted. Observe that when the pattern of a case
    matches, the case as a whole can still fail.

  - a default case.

`sort3` also uses list matching but in a more declarative style: as long as there are unsorted elements in the list
(possibly with intervening elements), exchange them.

`sort4` is identical to `sort3`, except that the shorter `*`-notation for list variables is used and that the type
declaration for the the non-list variables has been omitted.

`sort5` uses tail recursion to reach a fixed point instead of a while loop. One alternative matches lists with
out-of-order elements, while the default alternative returns the list if no out-of-order elements are found.

Let’s put them to the test:

``` rascal-shell
import demo::basic::Bubble;
L = [9,8,7,6,5,4,3,2,1];
sort1(L);
sort2(L);
sort3(L);
sort4(L);
sort5(L);
```

### Even

**Synopsis.**

Produce a list of even numbers.

**Description.**

Let’s write a function that generates all the even numbers in a list up to a certain maximum. We will do it in a few
alternative ways: from very imperative to very declarative and some steps in between.

``` rascal-shell
list[int] even0(int max) {
  list[int] result = [];
  for (int i <- [0..max])
    if (i % 2 == 0)
      result += i;
  return result;
}
even0(25);
```

Now lets remove the temporary type declarations:

``` rascal-shell
list[int] even1(int max) {
  result = [];
  for (i <- [0..max])
    if (i % 2 == 0)
      result += i;
  return result;
}
even1(25);
```

To make the code shorter, we can inline the condition in the for loop:

``` rascal-shell
list[int] even2(int max) {
  result = [];
  for (i <- [0..max], i % 2 == 0)
    result += i;
  return result;
}
even2(25);
```

In fact, for loops may produce lists as values, using the append statement:

``` rascal-shell
list[int] even3(int max) {
  result = for (i <- [0..max], i % 2 == 0)
    append i;
  return result;
}
even3(25);
```

So now, the result temporary is not necessary anymore:

``` rascal-shell
list[int] even4(int max) {
  return for (i <- [0..max], i % 2 == 0)
           append i;
}
even4(25);
```

This code is actually very close to a list comprehension already:

``` rascal-shell
list[int] even5(int max) {
  return [ i | i <- [0..max], i % 2 == 0];
}
even5(25);
```

And now we can just define `even` using an expression only:

``` rascal-shell
list[int] even6(int max) = [i | i <- [0..max], i % 2 == 0];
even6(25);
```

Or, perhaps we prefer creating a set instead of a list:

``` rascal-shell
set[int] even7(int max) = {i | i <- [0..max], i % 2 == 0};
even7(25);
```

  - You can program in for loops and use temporary variables if you like.

  - Comprehensions are shorter and more powerful.

  - There are comprehensions for lists, sets, and maps

<!-- end list -->

  - Trainwreck alert: if you start putting too many conditions in a single for loop or comprehension the code may become
    unreadable.

### FizzBuzz

**Synopsis.**

We solve a well-known job interview puzzle.

**Description.**

[FizzBuzz](http://www.codinghorror.com/blog/2007/02/why-cant-programmers-program.html) is a well-known puzzle that is
used at job interviews. It is defined as follows:

    Write a program that prints the numbers from 1 to 100.
    But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz".
    For numbers which are multiples of both three and five print "FizzBuzz".

Surprisingly, many candidates fail to pass this test. Solutions to FizzBuzz in various languages are available
[here](http://www.geekschool.org/programming/fizzbuzz/).

**Examples.**

Here are a few possible Rascal solutions:

``` rascal
module demo::basic::FizzBuzz

import IO;

void fizzbuzz() {
   for (int n <- [1 .. 101]){
      fb = ((n % 3 == 0) ? "Fizz" : "") + ((n % 5 == 0) ? "Buzz" : "");
      println((fb == "") ?"<n>" : fb);
   }
}

void fizzbuzz2() {
  for (n <- [1..101])
    switch(<n % 3 == 0, n % 5 == 0>) {
      case <true,true>  : println("FizzBuzz");
      case <true,false> : println("Fizz");
      case <false,true> : println("Buzz");
      default: println(n);
    }
}

void fizzbuzz3() {
  for (n <- [1..101]) {
    if (n % 3 == 0) print("Fizz");
    if (n % 5 == 0) print("Buzz");
    else if (n % 3 != 0) print(n);
    println("");
  }
}
```

``` rascal-shell
import demo::basic::FizzBuzz;
fizzbuzz();
```

### Quine

**Synopsis.**

A self-reproducing program.

**Description.**

A [quine](http://en.wikipedia.org/wiki/Quine_(computing)) is a computer program that takes no input and produces a
copy of its own source code. A quine is also called a *self-replicating* or *self-reproducing* program.

At the [Quine Page](http://www.nyx.net/~gthompso/quine.htm) you can find hundreds of quines in many different
programming languages.

Learning about quines, is about learning how to quote and escape symbols in strings.

**Examples.**

``` rascal
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
```

  - A remarkable point in the code: the string variable `program` has as value the text of the module `Quine` upto here.

  - The definition of `program` ends here. This string has a mesmerizing amount of escapes to which we will come back in
    a moment.

  - The function `quine` prints the string `program` twice, here as is and this produces the program upto
    ![1](/images/1.png) above.

  - Here the value of `program` is printed as a string (surrounded with string quotes) in order to reproduce the string
    value of `program` followed by a semi-colon (`;`).

Now here is the catch: we have to be very carefull in handling special characters like quote (`"`) and backslash (`\`)
in strings.

Let’s do a simple experiment:

``` rascal-shell
import IO;
str greeting = "\"Good Morning, Dr. Watson\", said Holmes";
println("\"" + greeting + "\"");
```

As you see the quotes inside the string are not escaped and the result is not a legal string. So what can we do? We
escape all dangerous characters in the string before printing it using the \[Rascal:escape\] function. It takes a string
and a map of characters to be escaped and returns a result in which all escaping has been carried out. Be aware that in
the map, also escaping is needed\! We want to say: escape `"` and replace it by `\"`, but since both `"` and `\` have to
be escaped themselves we have to say: escape `"\""` and replace it by `"\\\""`. The effect is as follows:

``` rascal-shell
import String;
println("\"" + escape(greeting, ("\"": "\\\"")) + "\"");
```

And indeed, the two quotes are now properly escaped.

This is exactly what happens at ![4](/images/4.png) in the definition of `quine`:

``` rascal
println("\"" + escape(program, ("\"" : "\\\"", "\\" : "\\\\")) + "\";");
```

We escape `program` and replace `"` by `\"`, and `\` by `\\`. The mesmerizing amount of `\` characters can be explained
due to escaping `"` and `\`.

Now let’s put `quine` to the test.

``` rascal-shell
import demo::basic::Quine;
quine();
```

If you follow this output line-by-line you will see that it is identical to the original source code of module `Quine`.

## Common

**Synopsis.**

Solutions for some common tasks.

**Description.**

We discuss the following tasks:

  - [Ad Hoc Data Exploration](#Common-AdHocDataExploration): Using Rascal to explore an interesting data space.

  - [Call Analysis](#Common-CallAnalysis): Analyzing the call structure of an application.

  - [Call Lifting](#Common-CallLifting): Lift procedure calls to component calls.

  - [Colored Trees](#Common-ColoredTrees): Computations on binary trees.

  - [Count Constructors](#Common-CountConstructors): Generic function that can count constructors in a value of any
    algebraic data type.

  - [Derivative](#Common-Derivative): Symbolic differentiation.

  - [String Template](#Common-StringTemplate): Using string templates to generate code.

  - [Word Count](#Common-WordCount): Counting words in strings.
    
      - [CountInLine1](#WordCount-CountInLine1): Count words in a line.
    
      - [CountInLine2](#WordCount-CountInLine2): Count words in a line.
    
      - [CountInLine3](#WordCount-CountInLine3): Count words in a line.
    
      - [Jabberwocky](#WordCount-Jabberwocky): Lewis Carroll’s well-known poem.

  - [Word Replacement](#Common-WordReplacement): Replace words in a string.

### Ad Hoc Data Exploration

**Synopsis.**

Using Rascal to explore an interesting data space.

**Description.**

The problem we will look at comes from mathematics, and has a precise analytical solution, but let’s use Rascal to
explore the state space, and see how it can help us to build intuition.

As you know, Rascal supports arbitrarily large numbers cleanly and simply, unlike more traditional languages like C or
Java. For example, if you want to compute 1000\!, then it’s a simple matter of calling `fact(1000)` at the command line.
Let’s use this definition of factorial:

``` rascal
public int fact (int n) {
    if (n <= 1) {
        return 1;
    } else {
        return n * fact (n-1);
    }
}
```

If you compute `fact(1000)` at the Rascal command line, you get a large number, on the order of 4.02 x
10<sup>2567</sup>. This is much, much bigger than, say a google, which is a mere 10\<<sup>\>100</sup>. (If Rascal runs
out stack space, try computing 100\!, then 200\!, then …​ then 1000\!; the run-time will allocate more stack space
incrementally and automatically if you sneak up to where you want to go).

``` rascal
rascal> fact(1000);
int: 402387260077093773543702433923003985719374864210714632543799910429938512398629020592044208486969404800479988610197196058631666872994808558901323829669944590997424504087073759918823627727188732519779505950995276120874975462497043601418278094646496291056393887437886487337119181045825783647849977012476632889835955735432513185323958463075557409114262417474349347553428646576611667797396668820291207379143853719588249808126867838374559731746136085379534524221586593201928090878297308431392844403281231558611036976801357304216168747609675871348312025478589320767169132448426236131412508780208000261683151027341827977704784635868170164365024153691398281264810213092761244896359928705114964975419909342221566832572080821333186116811553615836546984046708975602900950537616475847728421889679646244945160765353408198901385442487984959953319101723355556602139450399736280750137837615307127761926849034352625200015888535147331611702103968175921510907788019393178114194545257223865541461062892187960223838971476088506276862967146674697562911234082439208160153780889893964518263243671616762179168909779911903754031274622289988005195444414282012187361745992642956581746628302955570299024324153181617210465832036786906117260158783520751516284225540265170483304226143974286933061690897968482590125458327168226458066526769958652682272807075781391858178889652208164348344825993266043367660176999612831860788386150279465955131156552036093988180612138558600301435694527224206344631797460594682573103790084024432438465657245014402821885252470935190620929023136493273497565513958720559654228749774011413346962715422845862377387538230483865688976461927383814900140767310446640259899490222221765904339901886018566526485061799702356193897017860040811889729918311021171229845901641921068884387121855646124960798722908519296819372388642614839657382291123125024186649353143970137428531926649875337218940694281434118520158014123344828015051399694290153483077644569099073152433278288269864602789864321139083506217095002597389863554277196742822248757586765752344220207573630569498825087968928162753848863396909959826280956121450994871701244516461260379029309120889086942028510640182154399457156805941872748998094254742173582401063677404595741785160829230135358081840096996372524230560855903700624271243416909004153690105933983835777939410970027753472000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
```

Now copy the numerical result above and paste it into an edit window to have a good look at it. Notice anything
interesting? The last 249 digits are all zeros. How did this happen and what does it mean?

To be honest, when I did this calculation for the first time, I thought I’d found a bug. So I looked at the values of
N\! for N in the range 900 to 1000 and discovered that the zeros accumulate on the end of N\! as N gets bigger. Let’s
think about it for a bit: N\! is a cumulative product, so once a zero has appeared on the end there is no way to get rid
of it by multiplying by a positive integer.

How do the zeros appear? Well, this isn’t to hard to figure out. Obviously, each time you reach a multiple of 10, you
will add (at least) one more zero to the cumulative product. But what about multiples of 5? Well, you would add one more
zero if you can match the 5 to a 2 within the factors, and there are lots of lonely 2s in that list. So, to summarize,
each time N is a multiple of 5, you add at least one zero onto the cumulative product N\!.

So here’s the question we’re going to solve: For an arbitrary N, can you predict exactly how many trailing zeros there
will be in N\!?

Again, this can be solved analytically (and if you go looking on the web, you will discover that this is an old chestnut
of a math problem that’s sometimes used in job interviews to test analytical ability), but what I want to do here is to
show how we can use Rascal to play around with the problem space a bit to help us build up our intuition. This is very
much like what we do in empirical software engineering, when we have lots of data to analyze, and we’re trying to look
for patterns that might explain behaviours, such as why some functions are more likely to be associated with bugs than
others. In that kind of situation, we typically go through two stages: first, we wade through the data, exploring
relationships, looking for unusual lumps or recognizable patters; second, we build theories of how the world works, and
test them out using the data. In both stages, we not only look at the data, we play with it. We build little tools to
help answer our questions, see where our hunches lead us. We use this "play" to improve our understanding of the problem
space, and build intuition about how it works as testable theories. In empirical software engineering, as in most other
sciences, we usually don’t get concrete proof of a theory; rather, we gather evidence towards ultimately accepting or
rejecting the theories (tho often, we may choose to use this evidence to refine the theories and try again).

In this case, however, there is a precise analytical solution, a proof, a "ground truth". But that doesn’t mean that we
can’t use the empirical approach to help build our intuition about the problem space, and ultimately devise a theory
about how to calculate the number of trailing zeros in N\!. Solving analytical problems is about having enough intuition
to see possible solutions. And using this empirical approach is one way to build intuition.

So let’s define a few helper functions and see where that leads us:

``` rascal
public int countZeros (int n) {
    if (n < 10) {
        return 0;
    } else if (n % 10 == 0) {
        return 1 + countZeros (n / 10);
    } else {
        return countZeros (n / 10);
    }
}
rascal> int i = fact(1000);
int: 402387260077093773543702433923003985719374864210714632543799910429938512398629020592044208486969404800479988610197196058631666872994808558901323829669944590997424504087073759918823627727188732519779505950995276120874975462497043601418278094646496291056393887437886487337119181045825783647849977012476632889835955735432513185323958463075557409114262417474349347553428646576611667797396668820291207379143853719588249808126867838374559731746136085379534524221586593201928090878297308431392844403281231558611036976801357304216168747609675871348312025478589320767169132448426236131412508780208000261683151027341827977704784635868170164365024153691398281264810213092761244896359928705114964975419909342221566832572080821333186116811553615836546984046708975602900950537616475847728421889679646244945160765353408198901385442487984959953319101723355556602139450399736280750137837615307127761926849034352625200015888535147331611702103968175921510907788019393178114194545257223865541461062892187960223838971476088506276862967146674697562911234082439208160153780889893964518263243671616762179168909779911903754031274622289988005195444414282012187361745992642956581746628302955570299024324153181617210465832036786906117260158783520751516284225540265170483304226143974286933061690897968482590125458327168226458066526769958652682272807075781391858178889652208164348344825993266043367660176999612831860788386150279465955131156552036093988180612138558600301435694527224206344631797460594682573103790084024432438465657245014402821885252470935190620929023136493273497565513958720559654228749774011413346962715422845862377387538230483865688976461927383814900140767310446640259899490222221765904339901886018566526485061799702356193897017860040811889729918311021171229845901641921068884387121855646124960798722908519296819372388642614839657382291123125024186649353143970137428531926649875337218940694281434118520158014123344828015051399694290153483077644569099073152433278288269864602789864321139083506217095002597389863554277196742822248757586765752344220207573630569498825087968928162753848863396909959826280956121450994871701244516461260379029309120889086942028510640182154399457156805941872748998094254742173582401063677404595741785160829230135358081840096996372524230560855903700624271243416909004153690105933983835777939410970027753472000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
rascal> countZeros(i);
int: 472
```

This was my first try at the solution (really\!), and there’s a problem: 1000\! has exactly 249 trailing zeros, not 472.

What did I do wrong? Oh, right, *trailing* zeros, and the above function counts *all* of the zeros. Let’s try again:

``` rascal
public int countTrailingZeros (int n) {
    if (n < 10) {
        return 0;
    } else if (n % 10 == 0) {
        return 1 + countTrailingZeros (n / 10);
    } else {
        return 0 ;
    }
}

rascal> countTrailingZeros(i);
int: 249
```

OK, so we’re making progress. Let’s define another function to help us explore the data space:

``` rascal
public void printLastTwenty (int n){
    for(int i <- [n-19..n+1]) {
        println ("<i>! has <countTrailingZeros(fact(i))> trailing zeros.");
    }
}

rascal>printLastTwenty(1000);
981! has 243 trailing zeros.
982! has 243 trailing zeros.
983! has 243 trailing zeros.
984! has 243 trailing zeros.
985! has 244 trailing zeros.
986! has 244 trailing zeros.
987! has 244 trailing zeros.
988! has 244 trailing zeros.
989! has 244 trailing zeros.
990! has 245 trailing zeros.
991! has 245 trailing zeros.
992! has 245 trailing zeros.
993! has 245 trailing zeros.
994! has 245 trailing zeros.
995! has 246 trailing zeros.
996! has 246 trailing zeros.
997! has 246 trailing zeros.
998! has 246 trailing zeros.
999! has 246 trailing zeros.
1000! has 249 trailing zeros.
ok
```

So the pattern I see arising (confirmed by more playing that I won’t show you) is that you add a zero every time N is
divisible by 5. But sometimes you add more than one zero: 1000\! adds three zeros.

We defined one function above to help us look at the data more compactly; now let’s create another function to look for
lumps in the data:

``` rascal
// Printout all i in [0..n] where i! has more trailing zeros than (i-1)!
public void findLumps (int n) {
    int iMinusOneFactZeros = 0;
    for (int i <- [1..n+1]) {
        int iFactZeros = countTrailingZeros(fact(i));
        int diff = iFactZeros - iMinusOneFactZeros ;
        if (diff >= 1) {
            println ("<diff> more zeros at <i>!");
        }
        iMinusOneFactZeros = iFactZeros;
    }
}

rascal>findLumps(1000);
1 more zeros at 5!
1 more zeros at 10!
1 more zeros at 15!
1 more zeros at 20!
2 more zeros at 25!
1 more zeros at 30!
1 more zeros at 35!
1 more zeros at 40!
1 more zeros at 45!
2 more zeros at 50!
1 more zeros at 55!
1 more zeros at 60!
1 more zeros at 65!
1 more zeros at 70!
2 more zeros at 75!
1 more zeros at 80!
1 more zeros at 85!
1 more zeros at 90!
1 more zeros at 95!
2 more zeros at 100!
1 more zeros at 105!
1 more zeros at 110!
1 more zeros at 115!
1 more zeros at 120!
3 more zeros at 125!
1 more zeros at 130!
...
1 more zeros at 245!
3 more zeros at 250!
1 more zeros at 255!
1 more zeros at 495!
3 more zeros at 500!
1 more zeros at 505!
...
1 more zeros at 620!
4 more zeros at 625!
1 more zeros at 630!
...
1 more zeros at 985!
1 more zeros at 990!
1 more zeros at 995!
3 more zeros at 1000!
ok
```

So probably we’re noticing some patterns here already, and maybe forming some intuition. But let’s first revise our
lump-finding function to produce even more concise output:

``` rascal
// We can parameterize the threshold to look for jumps of 2, 3, or 4 zeros
public void findLumps2 (int n, int tao) {
    int iMinusOneFactZeros = 0;
    for (int i <- [1..n+1]) {
        int iFactZeros = countTrailingZeros(fact(i));
        int diff = iFactZeros - iMinusOneFactZeros ;
        if (diff >= tao) {
            println ("<diff> more zeros at <i>!");
        }
        iMinusOneFactZeros = iFactZeros;
    }
}

rascal>findLumps2(1000,2);
2 more zeros at 25!
2 more zeros at 50!
2 more zeros at 75!
2 more zeros at 100!
3 more zeros at 125!
2 more zeros at 150!
2 more zeros at 175!
2 more zeros at 200!
2 more zeros at 225!
3 more zeros at 250!
2 more zeros at 275!
...
2 more zeros at 950!
2 more zeros at 975!
3 more zeros at 1000!
ok

rascal>findLumps2(1000,3);
3 more zeros at 125!
3 more zeros at 250!
3 more zeros at 375!
3 more zeros at 500!
4 more zeros at 625!
3 more zeros at 750!
3 more zeros at 875!
3 more zeros at 1000!
ok

rascal>findLumps2(1000,4);
4 more zeros at 625!
ok
```

Notice anything yet? Here are some fun math facts to consider:

  - 5<sup>0</sup> = 1

  - 5<sup>1</sup> = 5

  - 5 <sup>2</sup> = 25

  - 5<sup>3</sup> = 125

  - 5<sup>4</sup> = 625

  - 5<sup>5</sup> = 3125

So here’s the solution:

Let N be a positive integer.

Let k = floor (log<sub>5</sub> N)

Start a counter at zero, call it nz

We want to examine i ← \[1..N+1\]

  - If i is not divisible by 5, ignore it

  - If i is divisible by 5, add 1 to nz

  - If i is also divisible by 25, add 1 more

  - …​

  - If i is also divisible by 2k, add 1 more

We can write this in Rascal as:

``` rascal
public int predictZeros (int N) {
    int k = floorLogBase(N, 5);  // I wrote this
    int nz = 0;
    for (int i <- [1..N+1] ) {
        int p5 = 1;
        for (int j <- [1..k+1]) {
            p5 *= 5;
            if (i % p5 == 0) {
                nz += 1;
            } else {
                break;
            }
        }
    }
    return nz;
}
```

Now a little hand validation might convince you that this should work, but let’s write a little verifier function to be
sure:

``` rascal
public void verifyTheory (int N) {
    int checkInterval = 100; // for printing
    bool failed = false;
    for (int i <- [1..N+1]) {
        ifact=fact(i);
        int p = predictZeros(i);
        int c = countTrailingZeros(ifact);
        if (p != c) {
            failed = true;
            println ("Found a counter example at i=<i>");
            break;
        } else {
            if (i % checkInterval == 0) {
                println ("<i>! has <p> trailing zeros");
            }
        }
    }
    if (!failed) {
        println ("The theory works for i: 1..<N>");
    }
}

rascal>verifyTheory(10);
The theory works for i: 1..10
ok

rascal>verifyTheory(100);
100! has 24 trailing zeros
The theory works for i: 1..100
ok

rascal>verifyTheory(1000);
100! has 24 trailing zeros
200! has 49 trailing zeros
300! has 74 trailing zeros
400! has 99 trailing zeros
500! has 124 trailing zeros
600! has 148 trailing zeros
Found a counter example at i=625
    predicted zeros = 155
    observed zeros  = 156
ok
```

Yikes, what do we do? Well, first let’s look under the hood at the engine. The function `predictZeros` *is* actually
correct, assuming that the functions is calls are correct. So let’s look at the auxiliary functions I wrote (but haven’t
shown you yet):

``` rascal
// Log for an arbitrary base
public real logB(real a, real base) {
    return log(a) / log(base);
}

public real floor (real a) {
    return toReal(round (a - 0.5));
}

public int floorLogBase (int a, int b) {
    return toInt(floor(logB(toReal(a), toReal(b))));
}

rascal>floorLogBase(625,5);
int: 3
rascal>logB(625.0,5.0);
real: 3.9999999999999998757330130880776320985295476764801684...
```

Oh right, real numbers are prone to round off error. What should we do?

Well, here’s a bad solution (that "works"):

``` rascal
public real floor (real a) {
    return toReal(round (a - 0.5 + 0.00001));
}
```

But how can I be sure that that’s enought decimal places? What if someone likes my `floor` function and sticks it into
the Rascal library, where it is subsequently used by the Eurpoean Space Agency for its next generation of flight control
software?

Sometimes, the answer is to do a lot of homework. Lucky for us, here there is a fairly efficient exact solution using
repeated integer division:

``` rascal
// Also change predictZeros to call this version
public int floorLogBase2 (int a, int b) {
    int remaining = a;
    int ans = 0;
    while (remaining >= b) {
        ans += 1;
        remaining /= b;
    }
    return ans;
}

rascal>verifyTheory(1000);
100! has 24 trailing zeros
200! has 49 trailing zeros
300! has 74 trailing zeros
400! has 99 trailing zeros
500! has 124 trailing zeros
600! has 148 trailing zeros
700! has 174 trailing zeros
800! has 199 trailing zeros
900! has 224 trailing zeros
1000! has 249 trailing zeros
The theory works for i: 1..1000
ok
```

And we’re done. But what did we learn here? Here’s what I think:

  - Explore the terrain, take notes, build intuition, develop theories, test them.
    
      - Refine and repeat
    
      - Double check\!

  - Build infrastructure with natural "break points"
    
      - Understandable is better than fast, esp. in the beginning
    
      - The correct way is better than the easy way
        
          - The correct way may be pretty easy too

  - Document and later challenge your assumptions
    
      - Are you measuring what you think you are measuring? How do you know?

### Call Analysis

**Synopsis.**

Analyzing the call structure of an application.

**Description.**

Suppose a mystery box ends up on your desk. When you open it, it contains a huge software system with several questions
attached to it:

  - How many procedure calls occur in this system?

  - How many procedures does it contains?

  - What are the entry points for this system, i.e., procedures that call others but are not called themselves?

  - What are the leaves of this application, i.e., procedures that are called but do not make any calls themselves?

  - Which procedures call each other indirectly?

  - Which procedures are called directly or indirectly from each entry point?

  - Which procedures are called from all entry points?

Let’s see how these questions can be answered using Rascal.

**Examples.**

Consider the following call graph (a box represents a procedure and an arrow represents a call from one procedure to
another procedure):

![calls](/images/calls.png)

``` rascal-shell
import Set;
import Relation;
import analysis::graphs::Graph;
```

Rascal supports basic data types like integers and strings which are sufficient to formulate and answer the questions at
hand. However, we can gain readability by introducing separately named types for the items we are describing. First, we
introduce therefore a new type `Proc` (an alias for strings) to denote procedures:

``` rascal-shell
alias Proc = str;
```

Next, we have to represent the call relation as a Rascal datatype, and the relation is the most appropriate for it. As
preparation, we also import the libraries \[$Rascal:Prelude/Set\], \[$Rascal:Prelude/Relation\] and
\[$Rascal:Libraries/analysis/graphs/Graph\] that will come in handy.

``` rascal-shell
rel[Proc, Proc] Calls = {<"a", "b">, <"b", "c">, <"b", "d">, <"d", "c">,
                         <"d", "e">, <"f", "e">, <"f", "g">, <"g", "e">};
```

Now we are in a good position to start asking some questions.

*How many calls occur in this system?* We use the function \[Rascal:Set/size\] to determine the number of elements in a
set or relation. Since each tuple in the `Calls` relation represents a call between procedures, the number of tuples is
equal to the number of calls.

``` rascal-shell
size(Calls);
```

*How many procedures occur in this system?* This question is more subtle, since a procedure may call (or be called) by
several others and the number of tuples is therefore not indicative. What we need are the set of procedures that occur
(as first or second element) in *any* tuple. This is precisely what the function
\[$Rascal:Libraries/Prelude/Relation/carrier\] gives us:

``` rascal-shell
carrier(Calls);
```

and computing the number of procedures is now easy:

``` rascal-shell
size(carrier(Calls));
```

As an aside, functions \[$Rascal:Prelude/Relation/domain\] and \[$Rascal:Prelude/Relation/range\] do the same for the
first, respectively, second element of the pairs in a relation:

``` rascal-shell
domain(Calls);
range(Calls);
```

*What are the entry points for this system?*

The next step in the analysis is to determine which entry points this application has, i.e., procedures which call
others but are not called themselves. Entry points are useful since they define the external interface of a system and
may also be used as guidance to split a system in parts. The top of a relation contains those left-hand sides of tuples
in a relation that do not occur in any right-hand side. When a relation is viewed as a graph, its top corresponds to the
root nodes of that graph. Similarly, the bottom of a relation corresponds to the leaf nodes of the graph. See the
section called \[$Rascal:Libraries/analysis/graphs/Graph\] for more details. Using this knowledge, the entry points can
be computed by determining the top of the Calls relation:

``` rascal-shell
top(Calls);
```

*What are the leaves of this application?*

In a similar spirit, we can determine the leaves of this application, i.e., procedures that are being called but do not
make any calls themselves:

``` rascal-shell
bottom(Calls);
```

*Which procedures call each other indirectly?*

We can also determine the indirect calls between procedures, by taking the transitive closure of the Calls relation,
written as `Calls+`. Observe that the transitive closure will contain both the direct and the indirect calls.

``` rascal-shell
closureCalls = Calls+;
```

*Which procedures are called directly or indirectly from each entry point?*

We now know the entry points for this application ("a" and "f") and the indirect call relations. Combining this
information, we can determine which procedures are called from each entry point. This is done by indexing closureCalls
with appropriate procedure name. The index operator yields all right-hand sides of tuples that have a given value as
left-hand side. This gives the following:

``` rascal-shell
calledFromA = closureCalls["a"];
calledFromF = closureCalls["f"];
```

*Which procedures are called from all entry points?*

Finally, we can determine which procedures are called from both entry points by taking the intersection of the two sets
`calledFromA` and `calledFromF`:

``` rascal-shell
calledFromA & calledFromF;
```

or if your prefer to write all of the above as a one-liner using a \[$Rascal:Expressions/Reducer\] expression:

``` rascal-shell
(carrier(Calls) | it & (Calls+)[p] | p <- top(Calls));
```

The reducer is initialized with all procedures (`carrier(Calls)`) and iterates over all entry points (`p ← top(Calls)`).
At each iteration the current value of the reducer (`it`) is intersected (`&`) with the procedures called directly or
indirectly from that entry point (`(Calls+)[p]`).

  - In small examples, the above results can be easily obtained by a visual inspection of the call graph. Such a visual
    inspection does *not* scale very well to large graphs and this makes the above form of analysis particularly suited
    for studying large systems.

<!-- end list -->

  - We discuss call analysis in a, intentionally, simplistic fashion that does not take into account how the call
    relation is extracted from actual source code. The above principles are, however, applicable to real cases as well.

### Call Lifting

**Synopsis.**

Lift procedure calls to component calls.

**Description.**

A frequently occurring problem is that we know the call relation of a system but that we want to understand it at the
component level rather than at the procedure level. If it is known to which component each procedure belongs, it is
possible to lift the call relation to the component level. Actual lifting amounts to translating each call between
procedures by a call between components.

**Examples.**

Consider the following figure:

![Module Parts](/images/parts.png)

(a) Shows the calls between procedures; (b) shows how procedures are part of a system component. (c) shows how the call
relation given in (a) can be lifted to the component level.

The situation can be characterized by:

  - A call relation between procedures

  - A partOf relation between procedures and components

The problem is now to lift the call relation using the information in the partOf relation. In other words: a call
between two procedures will be lifted to a call between the components to which each procedure belongs.

Here is a solution:

``` rascal
module demo::common::Lift

alias proc = str;
alias comp = str;

rel[comp,comp] lift(rel[proc,proc] aCalls, rel[proc,comp] aPartOf){
    return { <C1, C2> | <proc P1, proc P2> <- aCalls,
                        <comp C1, comp C2> <- aPartOf[P1] * aPartOf[P2] };
}

// Test set-up

rel[proc,proc] Calls = {<"main", "a">, <"main", "b">, <"a", "b">, <"a", "c">, <"a", "d">,
                        <"b", "d">};

rel[proc, comp] PartOf = {<"main", "Appl">, <"a", "Appl">, <"b", "DB">,
                          <"c", "Lib">, <"d", "Lib">};

rel[comp,comp] ComponentCalls = lift(Calls, PartOf);
```

And we can use it as follows:

``` rascal-shell
import demo::common::Lift;
```

Encode the call relation and partOf relation:

``` rascal-shell
calls = {<"main", "a">, <"main", "b">, <"a", "b">, <"a", "c">, <"a", "d">, <"b", "d">};
partOf = {<"main", "Appl">, <"a", "Appl">, <"b", "DB">, <"c", "Lib">, <"d", "Lib">};
```

and do the lifting:

``` rascal-shell
lift(calls, partOf);
```

Please verify that this corresponds exactly to (c) in the figure above.

``` rascal-shell
```

### Colored Trees

**Synopsis.**

Computations on binary trees.

**Description.**

We consider binary trees---trees with exactly two children---that have integers as their leaves. Our trees can have red
and black nodes and we want to perform the following operations on them:

  - Count the number of red nodes.

  - Compute the sum of all the integers that occur in the leaves.

  - Extend the tree data type with green nodes.

  - Replace all red nodes by green ones.

**Examples.**

The definition of ColoredTrees is as follows:

``` rascal
module demo::common::ColoredTrees

// Define ColoredTrees with red and black nodes and integer leaves

data ColoredTree = leaf(int N) 
                 | red(ColoredTree left, ColoredTree right)
                 | black(ColoredTree left, ColoredTree right);

public ColoredTree  rb = red(black(leaf(1), red(leaf(2),leaf(3))), black(leaf(3), leaf(4)));

// Count the number of red nodes

int cntRed(ColoredTree t) {
   int c = 0;
   visit(t) {
     case red(_,_): c = c + 1; 
   };
   return c;
}

test bool tstCntRed() = cntRed(rb) == 2;

// Compute the sum of all integer leaves

int addLeaves(ColoredTree t) {
   int c = 0;
   visit(t) {
     case leaf(int N): c = c + N; 
   };
   return c;
}

test bool tstAddLeaves() = addLeaves(rb) == 13;

// Add green nodes to ColoredTree

data ColoredTree = green(ColoredTree left, ColoredTree right); 

// Transform red nodes into green nodes

ColoredTree makeGreen(ColoredTree t) {
   return visit(t) {
     case red(l, r) => green(l, r) 
   };
}
```

  - We define the data type of `ColoredTrees` with constructors `leaf`, `red` and `black`.

  - `cntRed` counts all red nodes by visiting all nodes and incrementing the counter `c` for each red one.

  - `addLeaves` visits all nodes and adds the integers in each leaf node.

  - `coloredTrees` are extended with a new constructor `green`.

  - `makeGreen` visits all nodes and turns red nodes in green ones.

We can now explore ColoredTrees:

``` rascal-shell
import demo::common::ColoredTrees;
rb = red(black(leaf(1), red(leaf(2),leaf(3))), black(leaf(3), leaf(4)));
```

Count the red nodes in `rb`:

``` rascal-shell
cntRed(rb);
```

and compute the sum of all leaves:

``` rascal-shell
addLeaves(rb);
```

Finally, we convert all red nodes:

``` rascal-shell
makeGreen(rb);
```

**Benefits.**

This example illustrates the fully automatic visiting of the elements of a structured data type. Compare this with the
traditional programming style in which a switch statement is used to determine the constructor and recursion is used to
visit substructures. This style becomes particularly cumbersome for data types with large numbers of constructors such
as, for instance, abstract syntax trees for real programming languages.

**Pitfalls.**

The visit statement is based on a new paradigm one has to learn.

### Count Constructors

**Synopsis.**

Generic function that can count constructors in a value of any algebraic data type.

**Description.**

In [???](#ColoredTrees), we have seen a function that can count the number of red nodes in a `ColoredTree`. Is it
possible to define a function that can count constructors in a value of any algerbaic data type?

We exploit the subtype relation (see [Static Typing](/docs/Rascal#StaticTyping)) between [algebraic data
types](/docs/Rascal#ADT)s and the type [node](/docs/Rascal#Node) to achieve this.

In real applications this becomes relevant when counting, for instance, statement types in programs.

**Examples.**

``` rascal
module demo::common::CountConstructors

import Node;
import Map;

// Define a ColoredTree data type

data ColoredTree = leaf(int N)
                 | red(ColoredTree left, ColoredTree right)
                 | black(ColoredTree left, ColoredTree right);

public ColoredTree CT = red(black(leaf(1), red(leaf(2),leaf(3))), black(leaf(3), leaf(4)));

// Define a Card data type.

data Suite = hearts() | diamonds() | clubs() | spades();

data Card =  two(Suite s) | three(Suite s) | four(Suite s) | five(Suite s) |
             six(Suite s) | seven(Suite s) | eight(Suite s) | nine(Suite s) | ten(Suite s) |
             jack(Suite s) | queen(Suite s) | king(Suite s) | ace(Suite s);

data Hand = hand(list[Card] cards);

public Hand H = hand([two(hearts()), jack(diamonds()), six(hearts()), ace(spades())]);

// Count frequencies of constructors

map[str,int] count(node N){ 
  freq = (); 
  visit(N){  
    case node M: { name = getName(M); 
                   freq[name] ? 0 += 1;
                 }
  }
  return freq; 
}

map[str,int] countRelevant(node N, set[str] relevant) = domainR(count(N), relevant); 
```

Two data types are introduced `ColoredTree` and `Hand` together with an example value of each (`CT`, respectively, `H`).

  - The function `count` is defined.

  - Introduces an empty map to maintain the frequencies.

  - Defines a visit of argument `N`; it traverses the complete value of `N`.

  - Defines the case that we encounter a node and we update its frequency count. First the name of the constructor is
    retrieved (using [getName](/docs/Libraries#getname)) and then the frequency is updated. The
    [isDefined](/docs/Rascal#IsDefined) operator is used to provide a default value of 0 when the name was not yet
    in the map.

  - The map `freq` is returned as result.

  - Defines a variant `countRelevant`; it gets is an extra argument of relevant constructors names that is used to
    filter the map that is returned by `count` using [domainR](/docs/Libraries#domainr).

<!-- end list -->

``` rascal-shell
import demo::common::CountConstructors;
count(CT);
count(H);
countRelevant(H, {"hearts", "spades"});
```

### Derivative

**Synopsis.**

Symbolic differentiation.

**Description.**

Computing the [derivative](http://en.wikipedia.org/wiki/Differentiation_(mathematics)) of an expression with respect
to some variable is a classical calculus problem. Loosely speaking, a derivative can be thought of as how much one
quantity is changing in response to changes in some other quantity; for example, the derivative of the position of a
moving object with respect to time is the object’s instantaneous velocity.

We present here rules for determining the derivative `dE/dX` of simple expressions `E` for a given variable `X`. Recall
that for number `N`, variables `X` and `Y`, and expressions `E1` and `E2` the following rules apply:

  - `dN / dX = 0`.

  - `dX / dX = 1`.

  - `dX / dY = 0`, when `X != Y`.

  - `d(E1 + E2) /dX = dE1 / dX + d E2 /dX`.

  - `d(E1 * E2) / dX = (d E1 / dX * E2) + (E1 * d E2 /dX)`.

**Examples.**

Here is our solution followed by a list of explanations:

``` rascal
module demo::common::Derivative

data Exp = con(int n) 
         | var(str name)
         | mul(Exp e1, Exp e2)
         | add(Exp e1, Exp e2)
         ;

public Exp E = add(mul(con(3), var("y")), mul(con(5), var("x"))); 

Exp dd(con(n), var(V))              = con(0); 
Exp dd(var(V1), var(V2))            = con((V1 == V2) ? 1 : 0);
Exp dd(add(Exp e1, Exp e2), var(V)) = add(dd(e1, var(V)), dd(e2, var(V)));
Exp dd(mul(Exp e1, Exp e2), var(V)) = add(mul(dd(e1, var(V)), e2), mul(e1, dd(e2, var(V))));

Exp simp(add(con(n), con(m))) = con(n + m); 
Exp simp(mul(con(n), con(m))) = con(n * m);

Exp simp(mul(con(1), Exp e))  = e;
Exp simp(mul(Exp e, con(1)))  = e;
Exp simp(mul(con(0), Exp e))  = con(0);
Exp simp(mul(Exp e, con(0)))  = con(0);

Exp simp(add(con(0), Exp e))  = e;
Exp simp(add(Exp e, con(0)))  = e;

default Exp simp(Exp e)       = e; 

Exp simplify(Exp e){ 
  return bottom-up visit(e){
           case Exp e1 => simp(e1)
         }
}
```

  - Define a data type `Exp` to represent expressions.

  - Introduce an example expression `E` for later use.

  - Define the actual differentiation function `dd`. Observe that this definition depends on the use of patterns in
    function declarations, see \[Rascal:Function\].

  - Define simplification rules.

  - A default rule is give for the case that no simplification applies.

  - Define the actual simplication function `simplify` that performs a bottom up traversal of the expression,
    application simplification rules on the up.

Let’s differentiate the example expression `E`:

``` rascal-shell
import demo::common::Derivative;
dd(E, var("x"));
```

As you can see, we managed to compute a derivative, but the result is far more complex than we would like. This is where
simplification comes in. First try a simple case:

``` rascal-shell
simplify(mul(var("x"), add(con(3), con(5))));
```

Now apply simplification to the result of differentiation:

``` rascal-shell
simplify(dd(E, var("x")));
```

### String Template

**Synopsis.**

Using string templates to generate code.

**Description.**

Many websites and code generators use template-based code generation. They start from a text template that contains
embedded variables and code. The template is "executed" by replacing the embedded variables and code by their string
value. Languages like PHP and Ruby are popular for this feature. Let’s see how we can do this in Rascal.

Rascal provides string templates that rival what is provided in
[Ruby](http://www.ruby-doc.org/stdlib/libdoc/erb/rdoc/ERB.html), [PHP](http://www.php.net/) or
[ANTLR](http://www.stringtemplate.org/). They are fully described in [string values](/docs/Rascal#String).

**Examples.**

The problem we want to solve is as follows: given a number of fields (with a name and a type) how can we generate a Java
class with getters and setters for those fields?

Here is a solution:

``` rascal
module demo::common::StringTemplate

import String;
import List;

// Capitalize the first character of a string

str capitalize(str s) { 
  return toUpperCase(substring(s, 0, 1)) + substring(s, 1);
}

// Helper function to generate a setter
private str genSetter(map[str,str] fields, str x) {
  return "public void set<capitalize(x)>(<fields[x]> <x>) {
         '  this.<x> = <x>;
         '}";
}

// Helper function to generate a getter
private str genGetter(map[str,str] fields, str x) {
  return "public <fields[x]> get<capitalize(x)>() {
         '  return <x>;
         '}";
}

// Generate a class with given name and fields.
// The field names are processed in sorted order.
str genClass(str name, map[str,str] fields) { 
  return
    "public class <name> {
    '  <for (x <- sort([f | f <- fields])) {>
    '  private <fields[x]> <x>;
    '  <genSetter(fields, x)>
    '  <genGetter(fields, x)><}>
    '}";
}

map[str, str] fields = (
     "name" : "String",
     "age" : "Integer",
     "address" : "String"
  );

str cperson =
  // Do not change a single space in the string below!
  "public class Person {
    '
    '  private String address;
    '  public void setAddress(String address) {
    '    this.address = address;
    '  }
    '  public String getAddress() {
    '    return address;
    '  }
    '  private Integer age;
    '  public void setAge(Integer age) {
    '    this.age = age;
    '  }
    '  public Integer getAge() {
    '    return age;
    '  }
    '  private String name;
    '  public void setName(String name) {
    '    this.name = name;
    '  }
    '  public String getName() {
    '    return name;
    '  }
    '}";
```

  - An auxiliary function `capitalize` is defined to capitalize the first character of a string.

  - Here is the heavy lifting done: `genClass` is defined that takes as arguments:
    
      - the `name` of the class, and
    
      - a map `fields` that associates field names with their type (both string values).

Function `genClass` returns a string that contains several *string interpolations* delimited by `<` and `>`. Let’s
discuss some of them:

  - In each line, only the text following `'` is contributed to the output. The text before (and including) `'` can be
    used to properly indent the string.

  - The output of each interpolated call, like to `genMethod` is auto-indented.

  - `public class <name>`: insert the desired class name in the result.

  - `<for x←fields){>` …​ `<}>`: loops over the fields and contributes the text produced by its body to the result.

  - `private <fields[x]> <x>;`: finds for the current field `x` its type and produces an appropriate private field
    declaration.

  - `public void set<capitalize(x)>(<fields[x]> <x>)`: method header for the setter for field `x`.

Let’s see how this works out on actual data:

``` rascal-shell
import demo::common::StringTemplate;
import IO;
fields = (
     "name" : "String",
     "age" : "Integer",
     "address" : "String"
  );
println(genClass("Person", fields));
```

  - String templates are ideal to generate arbitrary output. In particular, no grammar is needed to describe this
    output.

  - Auto-indent helps to be able to compose templates from reusable parts.

<!-- end list -->

  - Since no grammar is used to control output, errors in generated code can only be detected by a downstream processor
    such as a compiler for the generated code.

  - In more complex cases, it can be better to introduce an abstract datatype to represent the desired code and to use
    string templates to produce the actual textual representation of that code.

### Word Count

**Synopsis.**

Counting words in strings.

**Examples.**

The purpose of WordCount is to count the number of *words* in a list of lines (strings). A word is here defined as one
or more letters (lowercase or uppercase), digits and the underscore character (`_`).

We split the problem in two parts:

  - Count the words in a single line. We explore three ways to do this in an imperative
    ([CountInLine1](#WordCount-CountInLine1)\], [CountInLine2](#WordCount-CountInLine2)) and a functional style
    ([CountInLine3](#WordCount-CountInLine3)).

  - Next we apply the single line counter to all the lines.

`wordCount` is a function with two arguments: \* A list of lines. \* A function that returns the number of words in a
line.

The main task of `wordCount` is to loop over all lines and to add the word counts per line.

``` rascal
module demo::common::WordCount::WordCount

import demo::common::WordCount::CountInLine1;
import demo::common::WordCount::CountInLine2;
import demo::common::WordCount::CountInLine3;
import demo::common::WordCount::Jabberwocky;

import String;

// wordCount takes a list of strings and a count function
// that is applied to each line. The total number of words is returned

int wordCount(list[str] input, int (str s) countInLine)
{
  count = 0;
  for(str line <- input){ 
     count += countInLine(line); 
  }
  return count;
}
```

  - An [enumerator](/docs/Rascal#Enumerator) is used to generated all the lines in the list of lines.

  - The argument function `countInLine` is applied to count the number of words in each line.

Let’s now do some experiments using the [Jabberwocky](#WordCount-Jabberwocky) poem by Lewis Carrol as input.

``` rascal-shell
import demo::common::WordCount::WordCount;
import demo::common::WordCount::CountInLine1;
import demo::common::WordCount::CountInLine2;
import demo::common::WordCount::CountInLine3;
import demo::common::WordCount::Jabberwocky;
wordCount(Jabberwocky, countInLine1);
wordCount(Jabberwocky, countInLine2);
wordCount(Jabberwocky, countInLine3);
```

It is satisfactory that the three ways of counting words all yield the same result.

If you are into one-liners, we can include everything you learned from this example in the following alternative
`wordCount2` function:

``` rascal-shell
int wordCount2(list[str] lines) = (0 | it + (0 | it + 1 | /\w+/ := line) | str line <- lines);
wordCount2(Jabberwocky);
```

The function body contains two nested [reducers](/docs/Rascal#Reducer). The inner reducer counts the number of
words in a line, the outer reducer accumulates all line word counts.

``` rascal-shell
```

### CountInLine1

**Synopsis.**

Count words in a line.

**Examples.**

We count words using a regular expression match in a for loop. Each time that the pattern `/[a-zA-Z0-9_]+/` matches, the
body of the loop is executed and `count` is incremented.

``` rascal
module demo::common::WordCount::CountInLine1

int countInLine1(str S){
  int count = 0;
  for(/docs/[a-zA-Z0-9_]+/ := S){
       count += 1;
  }
  return count;
}
```

Let’s try it:

``` rascal-shell
import demo::common::WordCount::CountInLine1;
countInLine1("Jabberwocky by Lewis Carroll");
```

### CountInLine2

**Synopsis.**

Count words in a line.

**Examples.**

A slighly more involved manner of using regular matching in a loop.

``` rascal
module demo::common::WordCount::CountInLine2

int countInLine2(str S){
  int count = 0;

  // \w matches any word character
  // \W matches any non-word character
  // <...> are groups and should appear at the top level.
  while (/docs/^\W*\w+<rest:.*$>/ := S) {
    count += 1;
    S = rest;
  }
  return count;
}
```

The pattern `/^\W*\w+<rest:.*$>/` can be understood as follows:

  - The `^` makes it *anchored*, only matches at the begin of the substring `S`.

  - `\W*` matches zero or more non-word characters.

  - `\w+` matches one or more word characters.

  - `<rest:.*$>` matches the remaining part of `S` and assigns the result to the variable `rest`.

Inside the loop `count` is incremented and the new value of `S` becomes the remainder of the current match. To
summarize: each iteration removes the first word from `S` and counts it.

Here is `countInLine2` in action:

``` rascal-shell
import demo::common::WordCount::CountInLine2;
countInLine2("Jabberwocky by Lewis Carroll");
```

### CountInLine3

**Synopsis.**

Count words in a line.

**Examples.**

Here is a clever, albeit rather dense, solution that illustrates several Rascal concepts.

``` rascal
module demo::common::WordCount::CountInLine3

int countInLine3(str S){
  return (0 | it + 1 | /\w+/ := S);
}
```

We use a [reducer](/docs/Rascal#Reducer) that is a recipe to reduce the values produced by one or more generators
to a single value:

  - `0` is the initial value of the reducer

  - The pattern match `/\w+/ := S` matches all words in `S`.

  - Reduction is done by `it + 1`. In the latter `it` is a keyword that refers to the value that has been reduced sofar.
    Effectively, the matches are reduced to a match count.

Let’s try it:

``` rascal-shell
import demo::common::WordCount::CountInLine3;
countInLine3("Jabberwocky by Lewis Carroll");
```

### Jabberwocky

**Synopsis.**

Lewis Carroll’s well-known poem.

**Examples.**

``` rascal
module demo::common::WordCount::Jabberwocky

public list[str] Jabberwocky = [
    "Jabberwocky by Lewis Carroll",
    "",
    "\'Twas brillig, and the slithy toves",
    "Did gyre and gimble in the wabe;",
    "All mimsy were the borogoves,",
    "And the mome raths outgrabe.",
    "",
    "\"Beware the Jabberwock, my son!",
    "The jaws that bite, the claws that catch!",
    "Beware the Jubjub bird, and shun",
    "The frumious Bandersnatch!\"",
    "",
    "\'Twas brillig, and the slithy toves",
    "Did gyre and gimble in the wabe;",
    "All mimsy were the borogoves,",
    "And the mome raths outgrabe.",
    "",
    "\"Beware the Jabberwock, my son!",
    "The jaws that bite, the claws that catch!",
    "Beware the Jubjub bird, and shun",
    "The frumious Bandersnatch!\"",
    "",
    "He took his vorpal sword in hand:",
    "Long time the manxome foe he sought.",
    "So rested he by the Tumtum tree,",
    "And stood awhile in thought.",
    "",
    "And as in uffish thought he stood,",
    "The Jabberwock, with eyes of flame,",
    "Came whiffling through the tulgey wood",
    "And burbled as it came!",
    "",
    "One, two! One, two! and through and through",
    "The vorpal blade went snicker-snack!",
    "He left it dead, and with its head",
    "He went galumphing back.",
    "",
    "\"And hast thou slain the Jabberwock?",
    "Come to my arms, my beamish boy!",
    "O frabjous day! Callooh! Callay!",
    "He chortled in his joy.",
    "",
    "\'Twas brillig, and the slithy toves",
    "Did gyre and gimble in the wabe;",
    "All mimsy were the borogoves,",
    "And the mome raths outgrabe."
];
```

### Word Replacement

**Synopsis.**

Replace words in a string.

**Description.**

Suppose you are a book editor and want to ensure that all chapter and section titles are properly capitalized. Here is
how to do this.

**Examples.**

``` rascal
module demo::common::WordReplacement

import String;

// capitalize: convert first letter of a word to uppercase

str capitalize(str word) 
{
   if(/docs/^<letter:[a-z]><rest:.*$>/ := word){
     return toUpperCase(letter) + rest;
   } else {
     return word;
   }
}

test bool capitalize1() = capitalize("1") == "1";
test bool capitalize2() = capitalize("rascal") == "Rascal";

// Capitalize all words in a string

// Version 1: capAll1: using a while loop

str capAll1(str S) 
{
 result = "";
 while (/docs/^<before:\W*><word:\w+><after:.*$>/ := S) {
    result = result + before + capitalize(word);
    S = after;
  }
  return result;
}

test bool tstCapAll1() =  capAll1("turn this into a title") == "Turn This Into A Title";

// Version 2: capAll2: using visit

str capAll2(str S) 
{
   return visit(S){
    case /^<word:\w+>/i => capitalize(word)
   };
}
```

  - We start by introducing a helper function `capitalize` that does the actual capitalization of a single word. See
    [Regular Pattern](/docs/Rascal#Regular) for details about regular expression patterns. Next we give two versions
    of a capitalization functions for a sentence:

  - `capAll1` uses a while loop to find subsequent words and to replace them by a capitalized version.

  - `capAll2` uses a \[Rascal:Visit\] to visit all words in the sentence and replace them by a capitalized version.

Here are some examples:

``` rascal-shell
import demo::common::WordReplacement;
capitalize("rascal");
capAll1("turn this into a capitalized title")
capAll2("turn this into a capitalized title")
```

## Languages

**Synopsis.**

Definitions of several languages and their tools.

**Description.**

Examples of several languages and the implementation of tools like interpreters and compilers:

  - [Exp](#Languages-Exp): The *hello world* of syntax definition and language definition.
    
      - [Abstract](#Exp-Abstract): A version of Exp based on abstract syntax.
    
      - [Combined](#Exp-Combined): Combine concrete syntax with abstract syntax.
    
      - [Concrete](#Exp-Concrete): Various versions of Exp based on concrete syntax.

  - [Func](#Languages-Func): Func is a tiny functional language; we present several interpreters for it.
    
      - [Abstract Syntax](#Func-AbstractSyntax): The abstract syntax for Func.
    
      - [Concrete Syntax](#Func-ConcreteSyntax): The concrete syntax of Func.
    
      - [Eval0](#Func-Eval0): A Func interpreter that does not support let-expressions and pointers.
    
      - [Eval1](#Func-Eval1): Like Eval0 but with support for let-expressions.
    
      - [Eval2](#Func-Eval2): Like Eval1 but with support for sequences and assignments.
    
      - [Eval3](#Func-Eval3): A complete Func interpreter including support for the address and dereference operators.
    
      - [Load AST](#Func-LoadAST): Parse Func program from string or file and convert to an abstract syntax tree.
    
      - [Parse](#Func-Parse): Parse a Func program from a string or a file.

  - [Lisra](#Languages-Lisra): A lisp interpreter in Rascal.
    
      - [Eval](#Lisra-Eval): A Lisp interpreter.
    
      - [Parse](#Lisra-Parse): Parsing a Lisp expression.
    
      - [Pretty](#Lisra-Pretty): A Lisp pretty printer.
    
      - [Runtime](#Lisra-Runtime): The runtime representation of Lisp programs and data.
    
      - [Syntax](#Lisra-Syntax): The textual syntax of Lisp.
    
      - [Test](#Lisra-Test): Tests for the Lisp interpreter.

  - [Pico](#Languages-Pico): The classical toy language, including a specialized IDE.
    
      - [Abstract](#Pico-Abstract): Abstract syntax for Pico.
    
      - [Assembly](#Pico-Assembly): Assembly language for Pico.
    
      - [Compile](#Pico-Compile): Compile a Pico program to assembly language.
    
      - [ControlFlow](#Pico-ControlFlow): Compute the control flow graph for a Pico program.
    
      - [Evaluate](#Pico-Evaluate): Evaluate a Pico program.
    
      - [IDE](#Pico-IDE): An Integrated Development Environment for Pico.
    
      - [Load](#Pico-Load): Convert a Pico parse tree into a Pico abstract syntax tree.
    
      - [Syntax](#Pico-Syntax): Concrete syntax for Pico.
    
      - [Typecheck](#Pico-Typecheck): Typechecker for Pico programs.
    
      - [Uninit](#Pico-Uninit): Find unitialized variables in a Pico program.
    
      - [UseDef](#Pico-UseDef): Compute use-def information for the variables in a Pico program.
    
      - [Visualize](#Pico-Visualize): Visualize Pico Control Flow Graphs.

Other languages that we are considering (but are not yet described):

  - Oberon0: a scaled down version of the Oberon language.

  - MissGrant: a state machine language.

### Exp

**Synopsis.**

The *hello world* of syntax definition and language definition. It illustrates how to define concrete and abstract
syntax and how to use concrete and abstract patterns to evaluate expressions.

**Description.**

Our sample language Exp contains the following elements:

  - Integer constants, e.g., `123`.

  - A multiplication operator, e.g., `3*4`.

  - An addition operator, e.g., `3+4`.

  - Multiplication is left-associative and has precedence over addition.

  - Addition is left-associative.

  - Parentheses can be used to override the precedence of the operators.

<!-- end list -->

  - `123`

  - `2+3+4`

  - `2+3*4`

  - `(2+3)*4`

### Abstract

**Synopsis.**

A version of Exp based on abstract syntax.

**Description.**

The [abstract syntax](http://en.wikipedia.org/wiki/Abstract_syntax) for a language is a data type that is used to
represent programs in the language in an *abstract* form. Abstract syntax has the following properties:

  - It is "abstract" in the sense that it does not contain textual details such as parentheses, layout, and the like.

  - While a language has one grammar (also known as, *concrete syntax*) it may have several abstract syntaxes for
    different purposes: type analysis, code generation, etc.

**Examples.**

The abstract syntax for Exp looks like this:

``` rascal
module demo::lang::Exp::Abstract::Syntax

data Exp = con(int n)          
         | mul(Exp e1, Exp e2) 
         | add(Exp e1, Exp e2) 
         ;
```

  - Defines integer constants, e.g., `con(123)`.

  - Defines multiplication, e.g., `mul(con(2),con(3))`.

  - Defines addition, e.g., `add(con(2),con(3))`.

Given the abstract syntax for Exp, we can define an interpreter that evaluates expressions:

``` rascal
module demo::lang::Exp::Abstract::Eval
import demo::lang::Exp::Abstract::Syntax;

int eval(con(int n)) = n;                            
int eval(mul(Exp e1, Exp e2)) = eval(e1) * eval(e2); 
int eval(add(Exp e1, Exp e2)) = eval(e1) + eval(e2); 
```

Here we see Rascal’s *pattern-directed invocation* in action (see [Function
Declaration](/docs/Rascal#Function)). The essence is this: in other languages the formal parameters in a
function declaration are just that: formal parameters, i.e., single names that can be used inside the function and that
are bound when the function is called. In Rascal, however, the formal parameters are actually a *pattern* and functions
can have arbitrarily complex patterns as (single) formal parameter. These patterns may bind variables and thus introduce
variables that can be used in tthe function body.

The big advantage of pattern-directed invocation is modularity and extensibility:

  - The treatment of the cases in the abstract syntax is decoupled.

  - If the abstract is extended later on with new cases, the functions for the old cases can be reused.

In this example we use this mechanism to define separate functions for each case in the abstract syntax.

  - Defines the case for evaluating integer constants: they evaluate to themselves.

  - Defines the case for evaluating multiplication: first evaluate the arguments `e1` and `e2` and return the
    multiplication of their values.

  - Defines the case for evaluating addition: first evaluate the arguments `e1` and `e2` and return the addition of
    their values.

<!-- end list -->

``` rascal-shell
import demo::lang::Exp::Abstract::Syntax;
import demo::lang::Exp::Abstract::Eval;
eval(mul(con(7), con(3)));
eval(add(con(3), mul(con(4), con(5))));
```

Entering expressions in abstract syntax form is no fun, and this is where concrete syntax comes to the rescue.

### Combined

**Synopsis.**

Combine concrete syntax with abstract syntax.

**Description.**

Concrete syntax gives full control over the textual appearance of a language and leads to parse trees in a standard
format (i.e., values of type `Tree`).

Abstract syntax can be designed by the Rascal programmer according to his/her needs regarding the type checking, code
generation, transformation, or optimization to be done on the abstract syntax trees.

How can we bridge this gap? We discuss two approaches:

  - [Manual](#Combined-Manual): a transformation is written manually to convert parse trees to abstract syntax trees.

  - [Automatic](#Combined-Automatic): the library function \[Rascal:implode\] is used to automate this transformation.

##### Automatic

**Synopsis.**

Use implode to translate an Exp parse tree to an abstract syntax tree.

**Description.**

[implode](/docs/Libraries#implode) is a function that automates the mapping between parse trees and abstract syntax
trees. It takes two arguments:

  - The *reified* type of the desired abstract syntax. (In Rascal, types can not be used freely as values. A reified
    type, is a type that is wrapped in such a way that it can be passed as an argument to a function.)

  - The parse tree to be converted.

`implode` is smart in trying to find a mapping, but it needs some guidance. A necessary step is therefore to label the
rules in the grammar with the name of the constructor to which it has to be mapped.

**Examples.**

Let’s first label the syntax rules of the Exp grammar with constructor names:

``` rascal
module demo::lang::Exp::Combined::Automatic::Syntax

lexical LAYOUT = [\t-\n\r\ ];

layout LAYOUTLIST = LAYOUT*  !>> [\t-\n\r\ ] ;

lexical IntegerLiteral = [0-9]+;

start syntax Exp =
                   con: IntegerLiteral   
                 | bracket "(" Exp ")"
                 > left mul: Exp "*" Exp 
                 > left add: Exp "+" Exp 
                 ;
```

Observe that at ![1](/images/3.png) these labels have been added.

It is good practice to introduce separate modules for parsing and for the conversion itself:

  - A `Parse` module defines a parse function and returns a parse tree. It imports only the concrete syntax.

  - A `Load` module defines a load function that first calls the above `parse` function and then applies `implode` to
    it. This is the only module that imports both concrete and abstract syntax at the same time and is therefore the
    only place to be concerned about name clashes. (If I mention `Exp`, do you know which one I mean?).

Here is the `Parse` module for Exp …​

``` rascal
module demo::lang::Exp::Combined::Automatic::Parse

import demo::lang::Exp::Combined::Automatic::Syntax;
import ParseTree;

Tree parseExp(str txt) = parse(#Exp, txt);
```

and this is how it works:

``` rascal-shell
import demo::lang::Exp::Combined::Automatic::Parse;
parseExp("2+3*4");
```

We can use `parse` to define `load`:

``` rascal
module demo::lang::Exp::Combined::Automatic::Load

import demo::lang::Exp::Combined::Automatic::Parse; 
import demo::lang::Exp::Abstract::Syntax; 
import ParseTree; 

Exp load(str txt) = implode(#Exp, parseExp(txt));
```

Notes:

  - We also need the `parse` function, as defined above.

  - We also need the abstract syntax as already defined earlier in \[Exp/Abstract\].

  - We need \[Rascal:ParseTree\] since it provides the \[Rascal:implode\] function.

Let’s try it:

``` rascal-shell
import demo::lang::Exp::Combined::Automatic::Load;
load("2+3*4");
```

Remains the definition of the `eval` function:

``` rascal
module demo::lang::Exp::Combined::Automatic::Eval

import demo::lang::Exp::Abstract::Eval;
import demo::lang::Exp::Combined::Automatic::Load;

int eval(str txt) = eval(load(txt));
```

Here is the end result:

``` rascal-shell
import demo::lang::Exp::Combined::Automatic::Eval;
eval("2+3*4");
```

##### Manual

**Synopsis.**

An Exp evaluator that uses a manually written conversion from parse tree to abstract syntax tree.

**Examples.**

First we define a `parse` function for Exp:

``` rascal
module demo::lang::Exp::Combined::Manual::Parse
import demo::lang::Exp::Concrete::WithLayout::Syntax;
import ParseTree;

demo::lang::Exp::Concrete::WithLayout::Syntax::Exp
 parseExp(str txt) = parse(#Exp, txt);
```

and test it:

``` rascal-shell
import demo::lang::Exp::Combined::Manual::Parse;
parseExp("2+3");
```

Next, we define a `load` function:

``` rascal
module demo::lang::Exp::Combined::Manual::Load

import demo::lang::Exp::Concrete::WithLayout::Syntax; 
import demo::lang::Exp::Abstract::Syntax; 
import demo::lang::Exp::Combined::Manual::Parse; 
import String;

demo::lang::Exp::Abstract::Syntax::Exp loadExp(str txt) = load(parseExp(txt)); 

demo::lang::Exp::Abstract::Syntax::Exp load((Exp)`<IntegerLiteral l>`) 
       = con(toInt("<l>"));
demo::lang::Exp::Abstract::Syntax::Exp load((Exp)`<Exp e1> * <Exp e2>`)
       = mul(load(e1), load(e2));
demo::lang::Exp::Abstract::Syntax::Exp load((Exp)`<Exp e1> + <Exp e2>`)
       = add(load(e1), load(e2));
demo::lang::Exp::Abstract::Syntax::Exp load((Exp)`( <Exp e> )`)
       = load(e);
```

Some comments:

  - We reuse the previously defined concrete syntax with layout.

  - We also reuse the previously defined abstract syntax.

  - Import the `Parse` module defined above.

  - The top level `load` function that converts a string to an abstract syntax tree.

  - The conversion from parse tree to abstract syntax tree start here. Note that we explicitly use
    `demo::lang::Exp::Abstract::Syntax::Exp` in these rules to distinguish from
    `demo::lang::Exp::Concrete::WithLayout::Syntax::Exp`.

Let’s try it:

``` rascal-shell
import demo::lang::Exp::Combined::Manual::Load;
loadExp("2+3");
```

What remains is to write the interpreter using the above components:

``` rascal
module demo::lang::Exp::Combined::Manual::Eval

import demo::lang::Exp::Abstract::Eval;
import demo::lang::Exp::Combined::Manual::Load;

public int eval(str txt) = eval(loadExp(txt));
```

Here is how it works:

``` rascal-shell
import demo::lang::Exp::Combined::Manual::Eval;
eval("2+3");
```

### Concrete

**Synopsis.**

Various versions of Exp based on concrete syntax.

**Description.**

We discuss several versions of Exp based on concrete syntax:

  - [No Layout](#Concrete-NoLayout): is the simplest version that does not consider layout symbols in expressions.

  - [With Layout](#Concrete-WithLayout): adds layout information to Exp’s synax definition.

##### No Layout

**Synopsis.**

A version of Exp based on concrete syntax.

**Description.**

We describe howto write a grammar for Exp and how to use it to implement an evaluator.

**Examples.**

Here is the grammar for Exp:

``` rascal
module demo::lang::Exp::Concrete::NoLayout::Syntax

lexical IntegerLiteral = [0-9]+; 

start syntax Exp        
  = IntegerLiteral      
  | bracket "(" Exp ")" 
  > left Exp "*" Exp    
  > left Exp "+" Exp    
  ;
```

Notes:

  - Defines a lexical syntax rule for IntegerLiterals; they consist of one or more digits.

  - Defines the alternatives for Exp. The keyword `start` means that this is a start symbol of the grammar.

  - Defines alternative \#1: an `IntegerLiteral`.

  - Defines alternative \#2: parentheses. The `|` says that this alternative has the same priority as the previous one.
    The keyword `bracket` marks this as an alternative that defines parentheses.

  - Defines alternative \#3: multiplication. The `>` says that the previous rule has a higher priority than the current
    one. The keyword `left` marks this as a left-associative rule.

  - Defines alternative \#4: addition. The `>` says again that the previous rule has a higher priority than the current
    one. The keyword `left` marks this as a left-associative rule.

Now that the grammar is in place we want to use it to build an evaluator. Here is how:

``` rascal
module demo::lang::Exp::Concrete::NoLayout::Eval
import demo::lang::Exp::Concrete::NoLayout::Syntax;

import String;
import ParseTree; 

int eval(str txt) = eval(parse(#Exp, txt)); 

int eval((Exp)`<IntegerLiteral l>`) = toInt("<l>");       
int eval((Exp)`<Exp e1>*<Exp e2>`) = eval(e1) * eval(e2); 
int eval((Exp)`<Exp e1>+<Exp e2>`) = eval(e1) + eval(e2); 
int eval((Exp)`(<Exp e>)`) = eval(e);                     
```

Notes:

  - We import \[Rascal:ParseTree\] because we will need the `parse` function below.

  - The main function `eval` that evaluates an expression as string to an integer. It proceeds in two steps:
    
      - `parse(#Exp, txt)` parses the given `txt` according to non-terminal `Exp` as defined by the grammar. The result
        is a parse tree.
    
      - This parse tree is given to another eval function that will reduce the tree to an integer.

  - Converts an IntegerLiteral to an integer. Let’s dissect this further:
    
      - The `Exp` preceding the concrete pattern, unambiguously defines the type of the pattern. This is good practice
        to avoid ambiguities.
    
      - `<IntegerLiteral l>` matches an IntegerLiteral and binds it (a parse tree fragment) to variable `l`.
    
      - In the function body, `toInt("<l>")`, the parse tree fragment is inserted in a string — effectively unparsing
        it — and that string is converted to an integer.

  - Handle the multiplication case.

  - Handle the addition case.

  - Handles the case of parentheses.

What remains, is to check that `eval` works as expected.

``` rascal-shell
import demo::lang::Exp::Concrete::NoLayout::Syntax;
import ParseTree;
```

Just checking that `parse` returns a sort of parse tree:

``` rascal-shell
parse(#Exp, "2+3");
```

You will see such parse trees only once, unless you are a researcher in parsing ;-) Here is a demonstration of `eval`:

``` rascal-shell
import demo::lang::Exp::Concrete::NoLayout::Eval;
eval("2+3");
eval("2+3*4");
eval("(2+3)*4");
```

##### With Layout

**Synopsis.**

Defines a concrete syntax for Exp with layout.

**Description.**

In Rascal, the major difference between lexical syntax and non-lexical syntax is that:

  - Strings that are parsed according to the lexical syntax *do not* contain additional layout characters such as
    spaces, new lines, and source code comments.

  - Strings that are parsed according to the normal (non-lexical) syntax *can* contain layout characters between each
    element.

  - Which 'layout' (whitespace and/or source code comments) will be accepted has to be defined explicitly by the grammar
    writer.

The following example extends the grammar for `Exp` in [No Layout](#Concrete-NoLayout) with a layout definition:

``` rascal
module demo::lang::Exp::Concrete::WithLayout::Syntax

layout Whitespace = [\t-\n\r\ ]*; 

lexical IntegerLiteral = [0-9]+;

start syntax Exp
  = IntegerLiteral
  | bracket "(" Exp ")"
  > left Exp "*" Exp
  > left Exp "+" Exp
  ;
```

  - Using the `layout` definition, we define that the `Whitespace` non-terminal is used *in between every symbol* of the
    `syntax` productions in the current module.

And now we can use spaces in our definition of the eval function as well:

``` rascal
module demo::lang::Exp::Concrete::WithLayout::Eval
import demo::lang::Exp::Concrete::WithLayout::Syntax;

import String;
import ParseTree;

int eval(str txt) = eval(parse(#start[Exp], txt).top);

int eval((Exp)`<IntegerLiteral l>`) = toInt("<l>");
int eval((Exp)`<Exp e1> * <Exp e2>`) = eval(e1) * eval(e2);
int eval((Exp)`<Exp e1> + <Exp e2>`) = eval(e1) + eval(e2);
int eval((Exp)`( <Exp e> )`) = eval(e);
```

Note that [Pattern Matching](/docs/Rascal#PatternMatching) will *ignore* all trees in layout positions, such that
the parse tree of "1 + \\\\n1" will match against `<Exp e1> + <Exp e2>`. The same goes for equality on parse trees.

For the above example Rascal will insert the `Whitespace` non-terminal between every element of the syntax rules for
`Exp`. Moreover, for the start production (See [No Layout](#Concrete-NoLayout)) `Whitespace` will be added before and
after the `Exp`.

**Examples.**

The effect of the layout definition is that before parser generation the following grammar is derived for `Exp`:

``` rascal
syntax Exp
  = IntegerLiteral
  | bracket "(" Whitespace Exp Whitespace ")"
  > left Exp Whitespace "*" Whitespace Exp
  > left Exp Whitespace "+" Whitespace Exp
  ;

syntax start[Exp] = Whitespace Exp top Whitespace;
```

To put this all to the test:

``` rascal-shell
import demo::lang::Exp::Concrete::WithLayout::Syntax;
import demo::lang::Exp::Concrete::WithLayout::Eval;
eval("2 +  3");
eval("2   +  3*4");
eval("( 2+3 )* 4");
```

  - If the grammar for `Exp` would contain an optional symbol, as in `syntax Exp = Exp "+"? Exp`, then it would be
    ambiguous. Does a space in "1 1", belong to the `Whitespace` before or after the missing `+`? To disambiguate the
    `layout` definition should be changed to `layout Whitespace = [\ \t\n\r]* !>> [\ \t\n\r]`. That will make sure the
    space goes with the first Whitespace, because even an empty Whitespace list must never be followed immediately by a
    space.

### Func

**Synopsis.**

Func is a tiny functional language; we present several interpreters for it.

**Description.**

Func is a functional language with the following features:

  - A program consists of a number of function declarations.

  - A function declaration consists of a name, zero or more formal parameter names and an expression.

  - An expression can be one of:
    
      - an integer constant.
    
      - a variable.
    
      - arithmetic operators `+`, `-`, `*` and `/`.
    
      - comparison operators `<`, `<=`, `>` and `>=`.
    
      - a call of a function.
    
      - an `if` expression.
    
      - a sequence of expressions (`;`).
    
      - an assignment (`:=`).
    
      - a `let` expression to introduce new bindings for local variables.
    
      - an address of a variables (denoted by `&`).
    
      - derefence of a variable (denoted by `*`).

Some features add more complexity to an interpreter, therefore we present four interpreters [Eval0](#Func-Eval0),
[Eval1](#Func-Eval1), [Eval2](#Func-Eval2) and [Eval2](#Func-Eval2) that implement increasingly complex features:

| Feature              | Eval0 | Eval1 | Eval2 | Eval3 |
| -------------------- | ----- | ----- | ----- | ----- |
| function declaration | y     | y     | y     | y     |
| integer constant     | y     | y     | y     | y     |
| variable             | y     | y     | y     | y     |
| arithmetic operators | y     | y     | y     | y     |
| comparison operators | y     | y     | y     | y     |
| call                 | y     | y     | y     | y     |
| if                   | y     | y     | y     | y     |
| let                  |       | y     | y     | y     |
| sequence             |       |       | y     | y     |
| assignment           |       |       | y     | y     |
| address operator     |       |       |       | y     |
| dereference operator |       |       |       | y     |

**Examples.**

Here are several versions of the factorial function that use more and more features of the Func language:

`F0.func`:

``` rascal
fact(n) = if n <= 1 then
             1
          else
             n * fact(n-1)
          end
```

`F1.func`:

``` rascal
fact(n) = let
            x = n
          in
            if x <= 1 then
               x
            else
               x * fact(x-1)
            end
          end
```

`F2.func`:

``` rascal
fact(n) = if n <= 1 then
             n := 1
          else
             n := n * fact(n-1)
          end;
          n
```

`F3.func`:

``` rascal
swap(a, b) =
          let
            temp = *a
          in
            *a := *b;
            *b := temp
          end

fact(n) = let
            x = 1,
            y = 0
          in
            if n <= 1 then
               x := 1
            else
               x := n * fact(n-1)
            end;
            swap(&x, &y);
            y
          end
```

For convenience, we use two versions of these examples for each *F*<sub>i</sub>:

  - A file *F<sub>i</sub>*\`.func\` that contains the code as shown above.

  - A file *F<sub>i</sub>*\`.rsc\` a Rascal file that declares a string variable *F<sub>i</sub>* with the same content.

For instance, `F0.rsc` looks like this

``` rascal
module demo::lang::Func::programs::F0

public str F0 =
"fact(n) = if n \<= 1 then
             1
          else
             n * fact(n-1)
          end";
```

> **Note**
> 
> Note the escaped `<` character in `\<=`. This is necessary since `<` and `>` are used in strings to enclose
> interpolations (insertion of the value of a Rascal expression). Both symbols need to be escaped when used as literal
> symbol and not as interpolation.

### Abstract Syntax

**Synopsis.**

The abstract syntax for Func.

**Examples.**

Here is the abstract syntax for Func:

``` rascal
module demo::lang::Func::AST

data Prog = prog(list[Func] funcs);
data Func = func(str name, list[str] formals, Exp body);

data Exp = let(list[Binding] bindings, Exp exp)
         | cond(Exp cond, Exp then, Exp otherwise)
         | var(str name)
         | nat(int nat)
         | call(str name, list[Exp] args)

         | address(str var)
         | deref(Exp exp)

         | mul(Exp lhs, Exp rhs)
         | div(Exp lhs, Exp rhs)
         | add(Exp lhs, Exp rhs)
         | sub(Exp lhs, Exp rhs)
         | gt(Exp lhs, Exp rhs)
         | lt(Exp lhs, Exp rhs)
         | geq(Exp lhs, Exp rhs)
         | leq(Exp lhs, Exp rhs)

         | seq(Exp lhs, Exp rhs)
         | assign(Exp lhs, Exp rhs);

data Binding = binding(str var, Exp exp);
```

Observe that the abstract syntax follows the structure of the [Concrete Syntax](#Func-ConcreteSyntax) but omits details
such as operator priorities, parentheses, and the like.

### Concrete Syntax

**Synopsis.**

The concrete syntax of Func.

**Examples.**

``` rascal
module demo::lang::Func::Func

lexical Ident =  [a-zA-Z][a-zA-Z0-9]* !>> [a-zA-Z0-9];

lexical Natural = [0-9]+ !>> [0-9];

lexical LAYOUT = [\t-\n\r\ ];

layout LAYOUTLIST = LAYOUT*  !>> [\t-\n\r\ ] ;

start syntax Prog = prog: Func* ;

syntax Func = func: Ident name "(" {Ident ","}* ")" "=" Exp;

syntax Exp = let: "let" {Binding ","}* "in" Exp "end"
           | cond: "if" Exp "then" Exp "else" Exp "end"
           | bracket "(" Exp ")"
           | var: Ident
           | nat: Natural
           | call: Ident "(" {Exp ","}* ")"
           | address: "&" Ident
           > deref: "*" Exp
           > non-assoc (
               left mul: Exp "*" Exp
             | non-assoc div: Exp "/" Exp
           )
           > left (
               left add: Exp "+" Exp
             | left sub: Exp "-" Exp
           )
           >
           non-assoc (
               non-assoc gt: Exp "\>" Exp
             | non-assoc lt:  Exp "\<" Exp
             | non-assoc geq:  Exp "\>=" Exp
             | non-assoc leq:  Exp "\<=" Exp
           )
           >
           right assign: Exp ":=" Exp
           >
           right seq: Exp ";" Exp;

syntax Binding = binding: Ident "=" Exp;
```

The concrete syntax of Func uses many features of Rascal’s syntax definitions. Some notes:

  - The definition of lexical syntax follows the pattern:
    
      - Define lexical symbols (`Ident`, `Natural`).
    
      - Define rules for layout.
    
      - Use follow restrictions (`!>>`) to enforce the longest match of lexical symbols.

  - The definition of lexical also follows a common pattern:
    
      - List of non-terminal is defined with their alternatives.
    
      - One non-terminal is designated as start symbol (`Prog`).
    
      - Each alternative has a label, this is for the benefit of converting parse trees to abstract syntaxt trees.
    
      - Each alternative spells out its priority and associativity.

### Eval0

**Synopsis.**

A Func interpreter that does not support let-expressions and pointers.

**Description.**

Interpreter Eval0 supports the following features of Func:

| Feature              | Eval0 |
| -------------------- | ----- |
| function declaration | y     |
| integer constant     | y     |
| variable             | y     |
| arithmetic operators | y     |
| comparison operators | y     |
| call                 | y     |
| if                   | y     |
| let                  |       |
| sequence             |       |
| assignment           |       |
| address operator     |       |
| dereference operator |       |

**Examples.**

Here is the code for Eval0:

``` rascal
module demo::lang::Func::Eval0

// No let

import demo::lang::Func::AST;
import List;

alias PEnv = map[str, Func]; 

value eval0(str main, list[int] args, Prog prog) { 
  penv = ( f.name: f | f <- prog.funcs );
  f = penv[main];
  return eval0(subst(f.body, f.formals, args), penv);
}


Exp subst(Exp exp, list[str] vars, list[int] values) { 
  env = ( vars[i]: values[i] | i <- index(vars) );
  return visit (exp) {
    case var(str name) => nat(env[name])
  };
}

int eval0(nat(int nat), PEnv penv)  = nat; 

int eval0(mul(Exp lhs, Exp rhs), PEnv penv) = eval0(lhs, penv) * eval0(rhs, penv);

int eval0(div(Exp lhs, Exp rhs), PEnv penv) = eval0(lhs, penv) / eval0(rhs, penv);

int eval0(add(Exp lhs, Exp rhs), PEnv penv) = eval0(lhs, penv) + eval0(rhs, penv);

int eval0(sub(Exp lhs, Exp rhs), PEnv penv) = eval0(lhs, penv) - eval0(rhs, penv);

int eval0(gt(Exp lhs, Exp rhs), PEnv penv) = eval0(lhs, penv) > eval0(rhs, penv) ? 1 : 0;

int eval0(lt(Exp lhs, Exp rhs), PEnv penv) = eval0(lhs, penv) < eval0(rhs, penv) ? 1 : 0;

int eval0(geq(Exp lhs, Exp rhs), PEnv penv) = eval0(lhs, penv) >= eval0(rhs, penv) ? 1 : 0;

int eval0(leq(Exp lhs, Exp rhs), PEnv penv) = eval0(lhs, penv) <= eval0(rhs, penv) ? 1 : 0;

int eval0(cond(Exp cond, Exp then, Exp otherwise), PEnv penv) =  
    (eval0(cond, penv) != 0) ? eval0(then, penv) : eval0(otherwise, penv);

int eval0(call(str name, list[Exp] args), PEnv penv) =  
    eval0(subst(penv[name].body, penv[name].formals, [ eval0(a, penv) | a <- args]), penv);
```

Some points to note:

  - `PEnv` is used as an alias for a map from names to functions. Such maps are used to represent the function
    definitions in the program.

  - Here the top level interpreter `eval0` is defined. It takes the name of the main function, a list of actual
    parameters, and the complete Func program. Binding of variables is done by substitution.

  - The substitution function is defined. It takes an expression, a list of variables, and a list of integer values to
    be substituted for them. Note how a \[Rascal:Visit\] is used to find all the variables in the expression and to
    replace them.

  - The versions of `eval0` for each implemented construct. They all have a `PEnv` argument that is needed to resolve
    calls.

  - The if expression is defined: the then-branch is taken when the test evaluates to a non-zero integer.

  - The call expression is interpreted. It contains the following steps:
    
      - The actual parameters are evaluated.
    
      - A substitution is made in the body of the called function, replacing formal parameters by actual values.
    
      - The result of this substitution is evaluated.

Let’s try this on example `F0`:

``` rascal
fact(n) = if n <= 1 then
             1
          else
             n * fact(n-1)
          end
```

``` rascal-shell
import demo::lang::Func::Load;
import demo::lang::Func::Eval0;
import demo::lang::Func::programs::F0;
eval0("fact", [10], load(F0));
```

### Eval1

**Synopsis.**

Like Eval0 but with support for let-expressions.

**Description.**

Interpreter Eval1 supports the following features of Func:

| Feature              | Eval1 |
| -------------------- | ----- |
| function declaration | y     |
| integer constant     | y     |
| variable             | y     |
| arithmetic operators | y     |
| comparison operators | y     |
| call                 | y     |
| if                   | y     |
| *let*                | y     |
| sequence             |       |
| assignment           |       |
| address operator     |       |
| dereference operator |       |

In particular, the let construct is supported and this requires the addition of an extra environment for \<name, value\>
bindings.

**Examples.**

``` rascal
module demo::lang::Func::Eval1

// using env, allowing let

import demo::lang::Func::AST;

import List;

alias Env = map[str, int];  
alias PEnv = map[str, Func];

int eval1(str main, list[int] args, Prog prog) {
  penv = ( f.name: f | f <- prog.funcs );
  f = penv[main];
  env = ( f.formals[i] : args[i] | i <- index(f.formals) );
  return eval1(f.body, env, penv);
}


int eval1(nat(int nat), Env env, PEnv penv)  = nat;

int eval1(var(str n), Env env, PEnv penv)  = env[n]; 

int eval1(mul(Exp lhs, Exp rhs), Env env, PEnv penv) =
    eval1(lhs, env, penv) * eval1(rhs, env, penv);

int eval1(div(Exp lhs, Exp rhs), Env env, PEnv penv) =
    eval1(lhs, env, penv) / eval1(rhs, env, penv);

int eval1(add(Exp lhs, Exp rhs), Env env, PEnv penv) =
    eval1(lhs, env, penv) + eval1(rhs, env, penv);

int eval1(sub(Exp lhs, Exp rhs), Env env, PEnv penv) =
    eval1(lhs, env, penv) - eval1(rhs, env, penv);

int eval1(gt(Exp lhs, Exp rhs), Env env, PEnv penv) =
    eval1(lhs, env, penv) > eval1(rhs, env, penv) ? 1 : 0;

int eval1(lt(Exp lhs, Exp rhs), Env env, PEnv penv) =
    eval1(lhs, env, penv) < eval1(rhs, env, penv) ? 1 : 0;

int eval1(geq(Exp lhs, Exp rhs), Env env, PEnv penv) =
    eval1(lhs, env, penv) >= eval1(rhs, env, penv) ? 1 : 0;

int eval1(leq(Exp lhs, Exp rhs), Env env, PEnv penv) =
    eval1(lhs, env, penv) <= eval1(rhs, env, penv) ? 1 : 0;

int eval1(cond(Exp cond, Exp then, Exp otherwise), Env env, PEnv penv) =
    (eval1(cond, env, penv) != 0) ? eval1(then, env, penv) : eval1(otherwise, env, penv);

int eval1(call(str name, list[Exp] args), Env env, PEnv penv) {
   f = penv[name];
   env =  ( f.formals[i]: eval1(args[i], env, penv) | i <- index(f.formals) );
   return eval1(f.body, env, penv);
}

int eval1(let(list[Binding] bindings, Exp exp), Env env, PEnv penv) { 
   env += ( b.var : eval1(b.exp, env, penv) | b <- bindings );
   return eval1(exp, env, penv);
}
```

  - The alias `Env` is introduced that maps strings to integers. All evaluation functions get an extra Env argument.

  - The environment is used to retrieve a variable’s value.

  - The environment is extended with new bindings.

Let’s try this with F1:

``` rascal
fact(n) = let
            x = n
          in
            if x <= 1 then
               x
            else
               x * fact(x-1)
            end
          end
```

The result:

``` rascal-shell
import demo::lang::Func::Load;
import demo::lang::Func::Eval1;
import demo::lang::Func::programs::F1;
eval1("fact", [10], load(F1));
```

### Eval2

**Synopsis.**

Like Eval1 but with support for sequences and assignments.

**Description.**

Interpreter Eval2 supports the following features of Func:

| Feature              | Eval2 |
| -------------------- | ----- |
| function declaration | y     |
| integer constant     | y     |
| variable             | y     |
| arithmetic operators | y     |
| comparison operators | y     |
| call                 | y     |
| if                   | y     |
| let                  | y     |
| *sequence*           | y     |
| *assignment*         | y     |
| address operator     |       |
| dereference operator |       |

The main additions are local side effects and the sequence operator.

**Examples.**

``` rascal
module demo::lang::Func::Eval2

// local side effects, returning env

import demo::lang::Func::AST;

import List;

alias Env = map[str, int];
alias PEnv = map[str, Func];

alias Result2 = tuple[Env, int];  

Result2 eval2(str main, list[int] args, Prog prog) {
  penv = ( f.name: f | f <- prog.funcs );
  f = penv[main];
  env = ( f.formals[i] : args[i] | i <- index(f.formals) );
  return eval2(f.body, env, penv);
}

Result2 eval2(nat(int nat), Env env, PEnv penv) = <env, nat>;

Result2 eval2(var(str name), Env env, PEnv penv) = <env, env[name]>;

Result2 eval2(mul(Exp lhs, Exp rhs), Env env, PEnv penv) {  
  <env, x> = eval2(lhs, env, penv);
  <env, y> = eval2(rhs, env, penv);
  return <env, x * y>;
}

Result2 eval2(div(Exp lhs, Exp rhs), Env env, PEnv penv) {
  <env, x> = eval2(lhs, env, penv);
  <env, y> = eval2(rhs, env, penv);
  return <env, x / y>;
}

Result2 eval2(add(Exp lhs, Exp rhs), Env env, PEnv penv)  {
  <env, x> = eval2(lhs, env, penv);
  <env, y> = eval2(rhs, env, penv);
  return <env, x + y>;
}

Result2 eval2(sub(Exp lhs, Exp rhs), Env env, PEnv penv)  {
  <env, x> = eval2(lhs, env, penv);
  <env, y> = eval2(rhs, env, penv);
  return <env, x - y>;
}

Result2 eval2(gt(Exp lhs, Exp rhs), Env env, PEnv penv)  {
  <env, x> = eval2(lhs, env, penv);
  <env, y> = eval2(rhs, env, penv);
  return <env, (x > y) ? 1 : 0>;
}

Result2 eval2(lt(Exp lhs, Exp rhs), Env env, PEnv penv)  {
  <env, x> = eval2(lhs, env, penv);
  <env, y> = eval2(rhs, env, penv);
  return <env, (x < y) ? 1 : 0>;
}

Result2 eval2(geq(Exp lhs, Exp rhs), Env env, PEnv penv)  {
  <env, x> = eval2(lhs, env, penv);
  <env, y> = eval2(rhs, env, penv);
  return <env, (x >= y) ? 1 : 0>;
}

Result2 eval2(leq(Exp lhs, Exp rhs), Env env, PEnv penv)  {
  <env, x> = eval2(lhs, env, penv);
  <env, y> = eval2(rhs, env, penv);
  return <env, (x <= y) ? 1 : 0>;
}

Result2 eval2(cond(Exp cond, Exp then, Exp otherwise), Env env, PEnv penv)  {
  <env, c> = eval2(cond, env, penv);
  return (c != 0) ? eval2(then, env, penv) : eval2(otherwise, env, penv);
}

Result2 eval2(call(str name, list[Exp] args), Env env, PEnv penv)  {
   f = penv[name];
   for (i <- index(f.formals)) {
     <env, v> = eval2(args[i], env, penv);
     env[f.formals[i]] = v;
   }
   return eval2(f.body, env, penv);
}

Result2 eval2(let(list[Binding] bindings, Exp exp), Env env, PEnv penv)  {
   for (b <- bindings) {
     <env, x> = eval2(b.exp, env, penv);
     env[b.var] = x;
   }
   return eval2(exp, env, penv);
}

Result2 eval2(assign(var(str name), Exp exp), Env env, PEnv penv)  { 
  <env, v> = eval2(exp, env, penv);
  env[name] = v;
  return <env, v>;
}

Result2 eval2(seq(Exp lhs, Exp rhs), Env env, PEnv penv)  {  
  <env, _> = eval2(lhs, env, penv);
  return eval2(rhs, env, penv);
}
```

  - The alias `Result` is introduced: a pair of an environment and an integer value. All evaluator functions are changed
    from returning an integer (the result of evaluation) to `Result` (the result of evaluation *and* the local side
    effects).

  - The effect of this change can be seen in all functions. For instance, when evaluating multiplication, the
    environment produced by the left operand ahs to be passed as argument to the right operand of the multiplication.
    This is needed, to propagate any side effects caused by the left operand to propagate to the right one.

  - Assignment is implemented.

  - Sequencing is implemented. Observe that that the value of the left operand is ignored and that the value of the
    right operand is returned.

We apply `eval2` to example `F2`:

``` rascal
fact(n) = if n <= 1 then
             n := 1
          else
             n := n * fact(n-1)
          end;
          n
```

Let’s try this.

``` rascal-shell
import demo::lang::Func::Load;
import demo::lang::Func::Eval2;
import demo::lang::Func::programs::F2;
eval2("fact", [10], load(F2));
```

### Eval3

**Synopsis.**

A complete Func interpreter including support for the address and dereference operators.

**Description.**

Interpreter Eval3 supports the following features of Func:

| Feature                | Eval3 |
| ---------------------- | ----- |
| function declaration   | y     |
| integer constant       | y     |
| variable               | y     |
| arithmetic operators   | y     |
| comparison operators   | y     |
| call                   | y     |
| if                     | y     |
| let                    | y     |
| sequence               | y     |
| assignment             | y     |
| *address operator*     | y     |
| *dereference operator* | y     |

The main additions are the address and dereference operators.

**Examples.**

``` rascal
module demo::lang::Func::Eval3

// pointers into the stack

import demo::lang::Func::AST;

import List;

alias Env = map[str, Address];
alias PEnv = map[str, Func];

alias Result3 = tuple[Mem, int];

alias Address = int;
alias Mem = list[int];

Address push(Mem mem) {
  return size(mem);
}

tuple[Mem, Address] alloc(Mem mem, int v) {
  mem += [v];
  return <mem, size(mem) - 1>;
}

Mem pop(Mem mem, Address scope) {
  return slice(mem, 0, scope);
}

Result3 eval3(str main, list[int] args, Prog prog) {
  penv = ( f.name: f | f <- prog.funcs );
  f = penv[main];
  mem = [];
  <mem, env> = bind(f.formals, args, mem);
  return eval3(f.body, env, penv, mem);
}

tuple[Mem, Env] bind(list[str] fs, list[int] args, Mem mem) {
  env = ();
  for (i <- index(fs)) {
    <mem, a> = alloc(mem, args[i]);
    env[fs[i]] = a;
  }
  return <mem, env>;
}

Result3 eval3(nat(int nat), Env env, PEnv penv, Mem mem) = <mem, nat>;

Result3 eval3(var(str name), Env env, PEnv penv, Mem mem) = <mem, mem[env[name]]>;


Result3 eval3(mul(Exp lhs, Exp rhs), Env env, PEnv penv, Mem mem) {
  <mem, x> = eval3(lhs, env, penv, mem);
  <mem, y> = eval3(rhs, env, penv, mem);
  return <mem, x * y>;
}

Result3 eval3(div(Exp lhs, Exp rhs), Env env, PEnv penv, Mem mem) {
  <mem, x> = eval3(lhs, env, penv, mem);
  <mem, y> = eval3(rhs, env, penv, mem);
  return <mem, x / y>;
}

Result3 eval3(add(Exp lhs, Exp rhs), Env env, PEnv penv, Mem mem) {
  <mem, x> = eval3(lhs, env, penv, mem);
  <mem, y> = eval3(rhs, env, penv, mem);
  return <mem, x + y>;
}

Result3 eval3(sub(Exp lhs, Exp rhs), Env env, PEnv penv, Mem mem) {
  <mem, x> = eval3(lhs, env, penv, mem);
  <mem, y> = eval3(rhs, env, penv, mem);
  return <mem, x - y>;
}

Result3 eval3(gt(Exp lhs, Exp rhs), Env env, PEnv penv, Mem mem) {
  <mem, x> = eval3(lhs, env, penv, mem);
  <mem, y> = eval3(rhs, env, penv, mem);
  return <mem, (x > y) ? 1 : 0>;
}

Result3 eval3(lt(Exp lhs, Exp rhs), Env env, PEnv penv, Mem mem) {
  <mem, x> = eval3(lhs, env, penv, mem);
  <mem, y> = eval3(rhs, env, penv, mem);
  return <mem, (x < y) ? 1 : 0>;
}

Result3 eval3(geq(Exp lhs, Exp rhs), Env env, PEnv penv, Mem mem) {
  <mem, x> = eval3(lhs, env, penv, mem);
  <mem, y> = eval3(rhs, env, penv, mem);
  return <mem, (x >= y) ? 1 : 0>;
}

Result3 eval3(leq(Exp lhs, Exp rhs), Env env, PEnv penv, Mem mem) {
  <mem, x> = eval3(lhs, env, penv, mem);
  <mem, y> = eval3(rhs, env, penv, mem);
  return <mem, (x <= y) ? 1 : 0>;
}

Result3 eval3(cond(Exp cond, Exp then, Exp otherwise), Env env, PEnv penv, Mem mem) {
  <mem, c> = eval3(cond, env, penv, mem);
  return (c != 0) ? eval3(then, env, penv, mem) : eval3(otherwise, env, penv, mem);
}

Result3 eval3(call(str name, list[Exp] args), Env env, PEnv penv, Mem mem) {
   f = penv[name];
   scope = push(mem);
   vs = for (a <- args) {
     <mem, v> = eval3(a, env, penv, mem);
     append v;
   }
   <mem, env> = bind(f.formals, vs, mem);
   <mem, v> = eval3(f.body, env, penv, mem);
   return <pop(mem, scope), v>;
}

Result3 eval3(address(str var), Env env, PEnv penv, Mem mem) = <mem, env[var]>;

Result3 eval3(deref(Exp exp), Env env, PEnv penv, Mem mem) {
  <mem, v> = eval3(exp, env, penv, mem);
  return <mem, mem[v]>;
}

Result3 eval3(let(list[Binding] bindings, Exp exp), Env env, PEnv penv, Mem mem) {
   scope = push(mem);
   for (b <- bindings) {
     <mem, v> = eval3(b.exp, env, penv, mem);
     <mem, a> = alloc(mem, v);
     env[b.var] = a;
   }
   <mem, v> = eval3(exp, env, penv, mem);
   return <pop(mem, scope), v>;
}

Result3 eval3(seq(Exp lhs, Exp rhs), Env env, PEnv penv, Mem mem) {
  <mem, _> = eval3(lhs, env, penv, mem);
  return eval3(rhs, env, penv, mem);
}

Result3 eval3(assign(var(str name), Exp e), Env env, PEnv penv, Mem mem) {
  <mem, v> = eval3(e, env, penv, mem);
  mem[env[name]] = v;
  return <mem, v>;
}

Result3 eval3(assign(deref(Exp lvalue), Exp e), Env env, PEnv penv, Mem mem) {
  <mem, addr> = eval3(lvalue, env, penv, mem);
  <mem, v> = eval3(e, env, penv, mem);
  mem[addr] = v;
  return <mem, v>;
}
```

We apply `eval3` to example `F3`:

``` rascal
swap(a, b) =
          let
            temp = *a
          in
            *a := *b;
            *b := temp
          end

fact(n) = let
            x = 1,
            y = 0
          in
            if n <= 1 then
               x := 1
            else
               x := n * fact(n-1)
            end;
            swap(&x, &y);
            y
          end
```

Let’s try this.

``` rascal-shell
import demo::lang::Func::Load;
import demo::lang::Func::Eval3;
import demo::lang::Func::programs::F3;
eval3("fact", [10], load(F3));
```

### Load AST

**Synopsis.**

Parse Func program from string or file and convert to an abstract syntax tree.

**Description.**

To simplify later processing, Func programs are converted to an abstract syntax tree.

**Examples.**

The concrete syntax for Func is described in [Concrete Syntax](#Func-ConcreteSyntax) and its abstract syntax in
[Abstract Syntax](#Func-AbstractSyntax). Rather than manually writing conversion rules from Func parse trees to Func
abstract syntax trees we use our secret weapon: [implode](/docs/Libraries#implode) that performs the mapping for us.
As you see when you compare the concrete and abstract syntax, the ground work has already been done by appropriately
labelling concrete rules with constructor names of the abstract syntax.

Here is the code for the `load` funcion:

``` rascal
module demo::lang::Func::Load

import demo::lang::Func::Func;
import demo::lang::Func::AST;
import demo::lang::Func::Parse;

import ParseTree;

demo::lang::Func::AST::Prog implode(demo::lang::Func::Func::Prog p) =
    implode(#demo::lang::Func::AST::Prog, p);

demo::lang::Func::AST::Prog load(loc l) = implode(parse(l));
demo::lang::Func::AST::Prog load(str s) = implode(parse(s));
```

This looks simple but also slightly intimidating due to the many qualified names. The issue is that the names in the
concrete and abstract syntax are (on purpose) overloaded. A name like `Prog` can be the one from the concrete
syntax(i.e., `demo::lang::Func::Func::Prog`) or the one from the abstract syntax (i.e., `demo::lang::Func::AST::Prog`).

For instance, the local version of `implode` defined here get a concrete `Prog` as argument and returns an abstract one.
Both `load` function return an abstract `Prog`.

Let’s try this on example `F0`:

``` rascal
fact(n) = if n <= 1 then
             1
          else
             n * fact(n-1)
          end
```

``` rascal-shell
import demo::lang::Func::Load;
import demo::lang::Func::programs::F0;
load(F0);
```

We get the original program and its *abstract syntax tree* of type `Prog` back. In case of doubt, compare this with the
result in [Parse](#Func-Parse) where we did obtain a parse tree. Next, we try the same from a file:

``` rascal-shell
load(|std:///demo/lang/Func/programs/F0.func|);
```

### Parse

**Synopsis.**

Parse a Func program from a string or a file.

**Description.**

Parsing uses the syntax rules for a given start non-terminnal to parse a string and turn it into a parse tree. The work
horse is the [parse](/docs/Libraries#parse) function that is available in the
[PareTree](/docs/Libraries#parsetree) library.

**Examples.**

Here is how to parse Func programs from a string or file:

``` rascal
module demo::lang::Func::Parse

import demo::lang::Func::Func;
import ParseTree;

Prog parse(loc l) = parse(#Prog, l);
Prog parse(str s) = parse(#Prog, s);
```

Let’s try this on example `F0.func`:

``` rascal
fact(n) = if n <= 1 then
             1
          else
             n * fact(n-1)
          end
```

First, we try the version with a string argument:

``` rascal-shell
import demo::lang::Func::Parse;
import demo::lang::Func::programs::F0;
parse(F0);
```

This must be defined as success: we get the original program and its parse tree back. Next, we try the same from a file.
We use the scheme `std` that refers to files that reside in the Rascal library. See
\[$Rascal:Expressions/Values/Location\] for further details on other schemes.

``` rascal-shell
parse(|std:///demo/lang/Func/programs/F0.func|);
```

### Lisra

**Synopsis.**

A lisp interpreter in Rascal.

**Description.**

Writing a Lisp interpreter is a classical challenge. Popular word has that all large applications evolve until they
include a Lisp interpreter. (A variant says the same about including an email client in every large application).

We will closely follow and **reuse parts of** Peter Norvig’s excellent page on [Lispy](http://norvig.com/lispy.html), a
Lisp interpreter written in Python. The Lisp variant to be implemented is the following subset of the
[Scheme](http://en.wikipedia.org/wiki/Scheme_(programming_language)) language:

| Form                                                                                                    | Syntax                 | Semantics and Example                                                                                                                                                                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------- | ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [variable reference](http://www.schemers.org/Documents/Standards/R5RS/HTML/r5rs-Z-H-7.html#%_sec_4.1.1) | *var*                  | A symbol is interpreted as a variable name; its value is the variable’s value. Example: `x`                                                                                                                                                                                                                                                           |
| [constant literal](http://www.schemers.org/Documents/Standards/R5RS/HTML/r5rs-Z-H-7.html#%_sec_4.1.2)   | *number*               | A number evaluates to itself. Example: `12`                                                                                                                                                                                                                                                                                                           |
| [quotation](http://www.schemers.org/Documents/Standards/R5RS/HTML/r5rs-Z-H-7.html#%_sec_4.1.2)          | `(quote exp)`          | Return the *exp* literally; do not evaluate it. Example: `(quote (a b c)) ⇒; (a b c)`                                                                                                                                                                                                                                                                 |
| [conditional](http://www.schemers.org/Documents/Standards/R5RS/HTML/r5rs-Z-H-7.html#%_sec_4.1.5)        | `(if test conseq alt)` | Evaluate *test*; if true, evaluate and return *conseq*; otherwise evaluate and return *alt*. \<br\>Example: `(if (< 10 20) (+ 1 1) (+ 3 3)) ⇒ 2`                                                                                                                                                                                                      |
| [assignment](http://www.schemers.org/Documents/Standards/R5RS/HTML/r5rs-Z-H-7.html#%_sec_4.1.6)         | `(set! var exp)`       | Evaluate *exp* and assign that value to *var*, which must have been previously defined (with a `define` or as a parameter to an enclosing procedure). Example: `(set! x2 (* x x))`                                                                                                                                                                    |
| [definition](http://www.schemers.org/Documents/Standards/R5RS/HTML/r5rs-Z-H-8.html#%_sec_5.2)           | `(define var exp)`     | Define a new variable in the innermost environment and give it the value of evaluating the expression *exp*. Examples: `(define r 3)` *or* `(define square (lambda (x) (* x x)))`                                                                                                                                                                     |
| [procedure](http://www.schemers.org/Documents/Standards/R5RS/HTML/r5rs-Z-H-7.html#%_sec_4.1.4)          | `(lambda (var…​) exp)` | Create a procedure with parameter(s) named *var…​* and the expression as the body. Example: `(lambda (r) (* r r))`                                                                                                                                                                                                                                    |
| [sequencing](http://www.schemers.org/Documents/Standards/R5RS/HTML/r5rs-Z-H-7.html#%_sec_4.2.3)         | `(begin exp…​)`        | Evaluate each of the expressions in left-to-right order, and return the final value. Example: \`(begin (set\! x 1) (set\! x (+ x 1)) (\* x 2)) ⇒ 4                                                                                                                                                                                                    |
| [procedure call](http://www.schemers.org/Documents/Standards/R5RS/HTML/r5rs-Z-H-7.html#%_sec_4.1.3)     | `(proc exp…​)`         | If *proc* is anything other than one of the symbols `if`, `set!`, `define`, `lambda`, `begin`, or `quote` then it is treated as a procedure. It is evaluated using the same rules defined here. All the expressions are evaluated as well, and then the procedure is called with the list of expressions as arguments. Example: \<\`(square 12) ⇒ 144 |

In this table, *var* must be a symbol—​an identifier such as x or square—​and number must be an integer number, while
the other italicized words can be any expression. The notation *exp*…​ means zero or more repetitions of *exp*.

A Lisp interpreter consists of the following parts:

  - A *parser* that reads a Lisp program in text form and converts it to a runtime representation that is suitable for
    the interpreter.

  - The *interpreter* itself that executes the program in runtime representation and computes its outcome.

  - A *pretty printer* that converts the outcome in internal representation back to text.

  - Finally, an interactive *console* is needed that interact with the user.

We discuss all these aspects:

  - [Syntax](#Lisra-Syntax): The textual syntax of Lisp.

  - [Runtime](#Lisra-Runtime): The runtime representation of Lisp programs and data.

  - [Parse](#Lisra-Parse): Parsing a Lisp expression.

  - [Pretty](#Lisra-Pretty): A Lisp pretty printer.

  - [Eval](#Lisra-Eval): A Lisp interpreter.

  - [Test](#Lisra-Test): Tests for the Lisp interpreter.

### Syntax

**Synopsis.**

The textual syntax of Lisp.

**Description.**

The first step in defining Lisp’s textual format, we define a grammar for it:

``` rascal
module demo::lang::Lisra::Syntax

layout Whitespace      = [\t-\n\r\ ]*;
lexical IntegerLiteral = [0-9]+ !>> [0-9];
lexical AtomExp        = (![0-9()\t-\n\r\ ])+ !>>  ![0-9()\t-\n\r\ ];

start syntax LispExp            // TODO: remove constructor names (needed for compiler)
      = int_lit: IntegerLiteral
      | atom_exp: AtomExp
      | par_exp: "(" LispExp* ")"
      ;
```

`Whitespace` defines the characters that can be ignored between tokens.

`IntegerLiteral` defines integer constants. In a first approximation `[0-9]` is enough. However, to ensure that the
longest possible sequence of digits is used, the `!>> [0-9]` part ensures that an integer cannot be followed by another
digit.

`AtomExp` defines a Lisp symbol that may contain a wide range of characters (except layout and digits).

The main syntactic concept is a `LispExp` that may be an `IntegerLiteral`, `AtomExp` or a list of \`LispExp\`s surrouned
by parentheses.

**Examples.**

This grammar is demonstrated in [Parse](#Lisra-Parse).

### Runtime

**Synopsis.**

The runtime representation of Lisp programs and data.

**Description.**

There are several aspects of the runtime representation of Lisp programs and Lisp data that have to be described:

  - The representation of values (see `Lval` below).

  - The handling of the *scope* of variables (see `Scope`, `Env`, `makeEnv` and `find` below).

  - The way the interpreter returns its results (see `Result` below).

<!-- end list -->

``` rascal
module demo::lang::Lisra::Runtime

import Prelude;

data Lval 
     = Integer(int n)
     | Atom(str name)
     | List(list[Lval] elms)
     | Closure(Result(list[Lval] args, Env env))
     ;

alias Scope  = map[Lval,Lval]; 
alias Env    = list[Scope];

public Env emptyEnv = [()];

Env makeEnv(list[Lval] vars, list[Lval] values, Env outer) = 
   [(vars[i] : values[i] | i <- index(vars))] + outer;

int find(Lval sym, Env e){ 
   for(n <- index(e))
       if(e[n][sym]?)
          return n;
   return -1;
}

public Lval TRUE  = Atom("#t"); 
public Lval FALSE = Atom("#f");

alias Result = tuple[Lval val, Env env]; 
```

  - The data type `Lval` takes care of the representation of Lisp values. It covers integers, atoms, lists and closures
    (the representation of a functions and the context in which it will be executed).

  - A `Scope` describes the binding of several related variables to their value. Since scopes may be nested, an
    environment (`Env`) consisted of a list of scope. The most inner scope is at the start of the list and the most
    global one at the end.

  - Creating a new scope is done by `makeEnv` which takes a list of variables (represented by ``Lval`s, in most cases
    this will be an atom like `Atom("X")``), a list of values and creates a new scope in front of the current
    environment.

  - The function `find` tries to locate the scope in which a name was previously defined. It searches the nested scopes
    inside-out and returns the *index* in the given environment of the scope in which the name is defined, or `-1` if it
    is not found.

  - We define useful constants for true and false (the atoms `#t` and `#f`, respectively).

  - Finally, we define `Result` as a tuple of an `Lval` and an `Env`. Each step during interpretation will thus return
    the value it computed and a possibly modified environment.

### Parse

**Synopsis.**

Parsing a Lisp expression.

**Description.**

Given the Lisp [Syntax](#Lisra-Syntax), we can now apply it to parse textual Lisp expressions and convert them to the
runtime representation `Lval`.

``` rascal
module demo::lang::Lisra::Parse

import Prelude;
import demo::lang::Lisra::Syntax;
import demo::lang::Lisra::Runtime;

Lval parse(str txt) = build(parse(#LispExp, txt)); 

// Build Abstract Synax Tree: Transform a LispExp to an Lval

Lval build((LispExp)`<IntegerLiteral il>`) = Integer(toInt("<il>"));      
Lval build((LispExp)`<AtomExp at>`)        = Atom("<at>");                
Lval build((LispExp)`( <LispExp* lst> )`)  = List([build(l) | l <- lst]); 
```

  - First we define the actual `parse` function: it takes a string as argument and returns an `Lval`. It proceeds in two
    steps:
    
      - First the text is parsed using `parse(#LispExp, txt)`. The result is parse tree.
    
      - Next, the auxiliary function `build` is used to transform the parse tree to an `Lval`.

  - Function `build` is defined in cases, to handle the various parse tree forms. Fortunately, we do not have to spell
    out the details of the parse tree, but we can use concrete patterns instead (see [???](#Concrete%20Patterns),
    below).
    
        The right-hand sides deserve some attention. Here the argument `il` is a _parse tree_ (!!) that represents an integer literal.
        We first convert it to a string using string interpolation (`"<il>"`) and then convert it to an integer.

  - The text of the atom is reconstructed in a similar fashion.

  - The concrete list elements in `lst` are converted one-by-one using build and are then used to create a new `List`
    value.

We use concrete patterns in these definitions. For instance, the argument pattern

``` rascal
(LispExp)`<IntegerLiteral il>`
```

says:

  - Match something of type `LispExp`.

  - It should be an `IntegerLiteral` and bind it to a variable `il`.

More precisely, the text between backquotes should be a string that can be parsed according to the non-terminal that
precedes it (`LispExp` in this example). This is illustrated by the list case where the parentheses appear in the
concrete pattern:

``` rascal
(LispExp)`( <LispExp* lst> )`
```

**Examples.**

``` rascal-shell
import demo::lang::Lisra::Parse;
import demo::lang::Lisra::Runtime;
parse("1");
parse("x");
parse("(+ 5 7)");
```

### Pretty

**Synopsis.**

A Lisp pretty printer.

**Description.**

The purpose of a pretty printer is to convert an internal structure to text. We define here the simplest possible
solution:

``` rascal
module demo::lang::Lisra::Pretty

import demo::lang::Lisra::Runtime;

// Pretty print: transform an Lval to a string
str pretty(Integer(n))  = "<n>";
str pretty(Atom(name))  = name;
str pretty(List(list[Lval] elms)) = "( <for(Lval e <- elms){><pretty(e)> <}>)";
str pretty(Closure(fn)) = "Closure(<fn>)";
```

Compare the definition of `pretty` with that of `parse`:

``` rascal
Lval parse(str txt);
str pretty(Lval x);
```

For a well-designed pair of `parse`/`pretty` functions, the latter is the inverse of the former. In other words, for
every `L` the following should hold:

``` rascal
parse(pretty(L)) == L
```

**Examples.**

``` rascal-shell
import demo::lang::Lisra::Runtime;
import demo::lang::Lisra::Pretty;
pretty(Integer(42));
pretty(Atom("x"));
L = List([Atom("+"), Integer(5), Integer(7)]);
pretty(L);
```

Now let’s explore whether `pretty` is indeed the inverse of `parse`:

``` rascal-shell
import demo::lang::Lisra::Parse;
parse(pretty(L)) == L;
```

### Eval

**Synopsis.**

A Lisp interpreter.

**Description.**

Here is the core of our Lisp interpreter. Its basic functionality is to take

  - An `Lval` and an Environment (both defined in [Runtime](#Lisra-Runtime)).

  - Distinguish the various forms an `Lval` can have and compute the effect of evaluating it.

  - Return a `Result` that captures the value just computed and possibleside-effects on the environment.

Rascal provides pattern-directed dispatch: a function with the same name can have complete patterns as arguments. When
called, a pattern match determines which variant of the function will be called. This is used extensively in the
definitions below:

``` rascal
module demo::lang::Lisra::Eval

import Prelude;
import demo::lang::Lisra::Parse;
import demo::lang::Lisra::Runtime;

Lval eval(Lval x) = eval(x, [()]).val;

// Evaluate an Lval in a given environment and return a Result.

Result eval(str exp) = eval(parse(exp),  [()]);

Result eval(Integer(int x), Env e) = <Integer(x), e>; 

Result eval(var:Atom(str name), Env e) { 
  n = find(var, e);
  return <(n < 0) ? var : e[n][var], e>;
}

Result eval(List([Atom("quote"), *Lval exps]), Env e) = 
  <size(exps) == 1 ? exps[0] : List(exps), e>;

Result eval(List([Atom("set!"), var, exp]), Env e) { 
  val = eval(exp, e).val;
  n = find(var, e);
  if(n < 0) e[0][var] = val; else e[n][var] = val;
  return <val, e>;
}

Result eval(List([Atom("if"), Lval tst, Lval conseq, Lval alt]), Env e) = 
  eval(tst, e).val != FALSE ? eval(conseq, e) : eval(alt, e);


Result eval(List([Atom("begin"), *Lval exps]) , Env e) { 
  val = FALSE;
  for(Lval exp <- exps){
      <val, e> = eval(exp, e);
  }
  return <val, e>;
}

Result eval(List([Atom("define"), var, exp]), Env e){ 
   e[0][var] = eval(exp, e).val;
   return <FALSE, e>;
}

Result eval(List([Atom("lambda"), List(list[Lval] vars), exp]), Env defEnv) = 
  <Closure(Result(list[Lval] args, Env callEnv) {
                 return eval(exp, makeEnv(vars, args, tail(callEnv, size(defEnv))));
           }),
   defEnv>;

default Result eval(List([ *Lval exps ]), Env e) { 
  if(isEmpty(exps))
     return <List([]), e>;
  vals = [ eval(exp, e).val | exp <- exps ];
  return apply(head(vals), tail(vals), e);
}

//default Result eval(Lval exp, Env e) = <exp, e>;


// Apply an Lval to a list of arguments and return a Result
Result apply(Closure(Result(list[Lval] args, Env env) fn), list[Lval] args, Env e) { 
  return <fn(args, e).val, e>;
}



Result apply(Atom("+"),      [Integer(x), Integer(y)],      Env e) = <Integer(x + y), e>;
Result apply(Atom("-"),      [Integer(x), Integer(y)],      Env e) = <Integer(x - y), e>;
Result apply(Atom("*"),      [Integer(x), Integer(y)],      Env e) = <Integer(x * y), e>;
Result apply(Atom("\<"),     [Lval x, Lval y],              Env e) = <x < y ? TRUE : FALSE, e>;
Result apply(Atom("\>"),     [Lval x, Lval y],              Env e) = <x >= y ? TRUE : FALSE, e>;
Result apply(Atom("equal?"), [Lval x, Lval y],              Env e) = <x == y ? TRUE : FALSE, e>;
Result apply(Atom("null?"),  [List(list[Lval] x)],          Env e) = <isEmpty(x) ? TRUE : FALSE, e>;
Result apply(Atom("cons"),   [Lval x, List(list[Lval] y)],  Env e) = <List([x, *y]), e>;
Result apply(Atom("append"), [List(list[Lval] x), Lval y],  Env e) = <List([*x, y]), e>;
Result apply(Atom("car"),    [List(list[Lval] x)],          Env e) = <head(x), e>;
Result apply(Atom("cdr"),    [List(list[Lval] x)],          Env e) = <List(tail(x)), e>;
Result apply(Atom("list"),   list[Lval] x,                  Env e) = <List(x), e>;

default Result apply(Lval a,     list[Lval] b, Env e) { 
  println("Cannot apply <a> to <b> using <e>");
  return <FALSE, e>;
}
```

We now explain the different cases in more detail:

  - An integer constant evaluates to itself. Note how `Integer(int x)` is used as first argument of this `eval`
    function. It is a pattern that describes that the constructor `Integer` with an `int` argument `x` is to be matched.

  - An atom evaluates to the value to which it is bound or to itself. `find` (see \[Runtime\]) is used to search for the
    atom in question. The first argument is `var:Atom(str name)`, a pattern that matches an `Atom`. The `var:` prefix
    binds the complete atom to a variable `var` to be used in the body of the function.

  - A quoted list evaluates to itself. The pattern `List([Atom("quote"), exp*])` matches a `List` constructor whose
    first element is `Atom("quote")`. `exp*` means that the remaining list elements are assignment to `exp`. There are
    two cases: if the argument list has size 1, its first element is used, otherwise a list with all elements of `exp`
    vare returned. This ensures that `List([Atom("quote"), Integer(17)])` evaluates to `Integer(17)` and not to `List([
    Integer(17)]`.

  - Evaluates a `set!` expression that assigns the value of `exp` to variable `var`.

  - Evaluates the `if` expression. The test `tst` is evaluated and is not false, the value of `conseq` is returned and
    otherwise that of `alt`.

  - Evaluates a `block` expression. The list of expressions `exps` is evaluated one by one. Observe that in the for loop
    `<val, e> = eval(exp, e);` captures both the value and the environment that results from executing one expression.
    That new environment is is used to evaluate the next expression(s) in the list. The value of the last expression and
    a possible modied environment are returned.

  - Evaluate a `define` expression that binds the value of `exp` to variable `var`. The value of the expression is bound
    `var` in the local scope.

  - Evaluate a lambda expression. Essentially we return a `Closure` value that contains the expression in the lambda
    expression properly wrapped to do variable binding and environment management. A Closure contains a function that
    return type `Results` and has two arguments: `list[lval] args` the actual parameter values when the closure is
    applied, and `Env e` the environment at the site of the call. In the body of the closure we construct a new
    environment `makeEnv(vars, args, tail(callEnv, size(defEnv)))` that binds the variables in the lambda expression to
    the actual parameter values. What is special here is that we shorten the calling environment to the same length as
    the defining environment. This implements *lexical scoping* and avoids that names are visible in the called function
    that were not visible when the function was defined. Remember that Rascal values are immutable, meaning that after a
    value was created it cannot be changed. Using the above trick, we ensure that the called function has access to the
    most recent version of its environment.

  - Evaluates an arbitrary list. As a special case, the empty list is returned as false. Otherwise, all elements are
    evaluated and the auxiliary function \` apply\` is used to apply the value of the first element to the values of the
    remaining elements.

  - Apply an `Lval` to a list of arguments and return a `Result`. The first case handles a `Closure`; it amounts to
    calling the function in the closure (environment handling and parameter binding are done in the closure as discussed
    above.

  - Definition of all built-in functions.

  - A default function that prints an error message when an undefined function is called.

**Examples.**

``` rascal-shell
import demo::lang::Lisra::Runtime;
import demo::lang::Lisra::Eval;
eval(Integer(5));
eval(Atom("x"));
eval(List([Atom("+"), Integer(5), Integer(7)]));
```

  - A very modular, rule-based, type safe Lisp interpreter.

<!-- end list -->

  - It is no pleasure to type in \`Lval\`s directly, that is why a parser is needed, see [Parse](#Lisra-Parse).

### Test

**Synopsis.**

Tests for the Lisp interpreter.

**Description.**

It is good practice to write tests for your software.

Here are our tests for Lisra:

``` rascal
module demo::lang::Lisra::Test

import demo::lang::Lisra::Runtime;
import demo::lang::Lisra::Eval;

test bool eval01() = eval("42").val == Integer(42);
test bool eval02() = eval("x").val == Atom("x");

test bool eval03() = eval("(quote 1)").val == Integer(1);
test bool eval04() = eval("(quote 1 2)").val == List([Integer(1), Integer(2)]);

test bool eval05() = eval("(+ 1 2)").val == Integer(3);
test bool eval06() = eval("(- 5 3)").val == Integer(2);
test bool eval07() = eval("(* 5 3)").val == Integer(15);
test bool eval08() = eval("(\< 3 4)").val != FALSE;
test bool eval09() = eval("(\< 3 2)").val == FALSE;
test bool eval10() = eval("(\> 3 2)").val != FALSE;
test bool eval11() = eval("(\>3 4)").val == FALSE;
test bool eval12() = eval("(equal? 3 3)").val != FALSE;
test bool eval13() = eval("(equal? 3 2)").val == FALSE;

test bool eval14() = eval("(null? ())").val != FALSE;
test bool eval15() = eval("(null? (quote 1 2))").val == FALSE;

test bool eval16() = eval("(begin (define swap (lambda (a b) (list b a))) (swap 1 2))").val ==
                     List([Integer(2), Integer(1)]);
test bool eval17() = eval("(begin (define * (lambda (a b) (+ a b))) (* 1 2))"). val == Integer(3);

test bool eval18() = eval("(begin (set! x 1) x)").val == Integer(1);
test bool eval19() = eval("(if (\> 5 2) 10 20)").val == Integer(10);
test bool eval20() = eval("(if (\> 2 5) 10 20)").val == Integer(20);

test bool eval21() = eval("(begin (define fac (lambda (n) (if (\> n 1) (* n (fac (- n 1))) 1))) (fac 3))").val == Integer(6);
test bool eval22() = eval("(begin (define length (lambda (x) (if(null? x) 0 (+ 1 (length (cdr x)))))) (length (quote (1 2 3))))").val == Integer(3);
test bool eval23() = eval("(begin (define rev (lambda (x) (if (null? x) () (append (rev (cdr x)) (car x))))) (rev (quote 1 2 3)))").val == List([Integer(3), Integer(2), Integer(1)]);
test bool eval24() = eval("(begin (define F (lambda (x) y)) (set! y 10) (F 1))").val == Integer(10);
```

### Pico

**Synopsis.**

The classical toy language, including a specialized IDE.

**Description.**

Pico is a toy language that has been used as example over the years in many projects and disguishes, Pico has a single
purpose in life: being so simple that specifications of every possible language aspect are so simple that they fit on a
few pages. It can be summarized as follows:

  - There are two types: natural numbers and strings.

  - Variables have to be declared.

  - Statements are assignment, if-then-else and while-do.

  - Expressions may contain naturals, strings, variables, addition (`+`), subtraction (`-`) and concatenation (`||`).

  - The operators `+` and `-` have operands of type natural and their result is natural.

  - The operator `||` has operands of type string and its results is also of type string.

  - Tests in if-then-else statement and while-statement should be of type natural.

The following aspects of the Pico language will be discussed:

  - [Abstract](#Pico-Abstract): Abstract syntax for Pico.

  - [Assembly](#Pico-Assembly): Assembly language for Pico.

  - [Compile](#Pico-Compile): Compile a Pico program to assembly language.

  - [ControlFlow](#Pico-ControlFlow): Compute the control flow graph for a Pico program.

  - [Evaluate](#Pico-Evaluate): Evaluate a Pico program.

  - [IDE](#Pico-IDE): An Integrated Development Environment for Pico.

  - [Load](#Pico-Load): Convert a Pico parse tree into a Pico abstract syntax tree.

  - [Syntax](#Pico-Syntax): Concrete syntax for Pico.

  - [Typecheck](#Pico-Typecheck): Typechecker for Pico programs.

  - [Uninit](#Pico-Uninit): Find unitialized variables in a Pico program.

  - [UseDef](#Pico-UseDef): Compute use-def information for the variables in a Pico program.

  - [Visualize](#Pico-Visualize): Visualize Pico Control Flow Graphs.

**Examples.**

Here is a — not so simple — Pico program that computes the factorial function:

``` rascal
begin declare input : natural, 
              output : natural,
              repnr : natural,
              rep : natural;
      input := 14;
      output := 1;
      while input - 1 do 
          rep := output;
          repnr := input;
          while repnr - 1 do
             output := output + rep;
             repnr := repnr - 1
          od;
          input := input - 1
      od
end
```

Notes:

  - Pico programs do not have input/output statements, so we use variables for that purpose.

  - Pico has no multiplication operator so we have to simulate it with repeated addition (yes, simplicity comes at a
    price\!).

### Abstract

**Synopsis.**

Abstract syntax for Pico.

**Examples.**

Here is the complete abstract syntax for Pico:

``` rascal
module demo::lang::Pico::Abstract

public data TYPE = natural() | string(); 

public alias PicoId = str; 

public data PROGRAM = 
  program(list[DECL] decls, list[STATEMENT] stats);

public data DECL =
  decl(PicoId name, TYPE tp);

public data EXP =
       id(PicoId name)
     | natCon(int iVal)
     | strCon(str sVal)
     | add(EXP left, EXP right)
     | sub(EXP left, EXP right)
     | conc(EXP left, EXP right)
     ;

public data STATEMENT =
       asgStat(PicoId name, EXP exp)
     | ifElseStat(EXP exp, list[STATEMENT] thenpart, list[STATEMENT] elsepart)
     | whileStat(EXP exp, list[STATEMENT] body)
     ;

anno loc TYPE@location; 
anno loc PROGRAM@location;
anno loc DECL@location;
anno loc EXP@location;
anno loc STATEMENT@location;

public alias Occurrence = tuple[loc location, PicoId name, STATEMENT stat]; 
```

Notes:

  - The types that may occur in a Pico program are either natural or string.

  - Introduce `PicoId` as an alias for Rascal’s `str` datatype.

  - Define the various data types that constitute an AST for Pico. Observe that the constructor names match the names
    used in the concrete syntax, e.g., `strCon`, `add`, `ifElseStat`.

  - Define an annotation with name `location` and of type `loc` (source code location) for all AST types. This will be
    used when imploding a parse tree into an abstract syntax tree.

  - Introduce `Occurrence` as a genereic way of describing the location of various items in the AST.

### Assembly

**Synopsis.**

Assembly language for Pico.

**Examples.**

The [Compile](#Pico-Compile)r will translate Pico programs into the following assembly language.

``` rascal
module demo::lang::Pico::Assembly

import demo::lang::Pico::Abstract;

public data Instr =
       dclNat(PicoId Id)    // Reserve a memory location for a natural variable
     | dclStr(PicoId Id)    // Reserve a memory location for a string variable
     | pushNat(int intCon)  // Push integer constant on the stack
     | pushStr(str strCon)  // Push string constant on the stack
     | rvalue(PicoId Id)    // Push the value of a variable on the stack
     | lvalue(PicoId Id)    // Push the address of a variable on the stack
     | assign()             // Assign value on top, to variable at address top-1
     | add2()               // Replace top two stack values by their sum
     | sub2()               // Replace top two stack values by their difference
     | conc2()              // Replace top two stack values by their concatenation
     | label(str label)     // Associate a label with the next instruction
     | go(str  label)       // Go to instruction with given label
     | gotrue(str label)    // Go to instruction with given label, if top equals 0
     | gofalse(str label)   // Go to instruction with given label, if top not equal to 0
     ;
```

### Compile

**Synopsis.**

Compile a Pico program to assembly language.

**Examples.**

The Pico compiler translates Pico programs to [Assembly](#Pico-Assembly) language programs.

``` rascal
module demo::lang::Pico::Compile

import Prelude;
import demo::lang::Pico::Abstract;
import demo::lang::Pico::Assembly;
import demo::lang::Pico::Load;

alias Instrs = list[Instr]; 

// compile Expressions.

Instrs compileExp(natCon(int N)) = [pushNat(N)]; 

Instrs compileExp(strCon(str S)) = [pushStr(substring(S,1,size(S)-1))];

Instrs compileExp(id(PicoId Id)) = [rvalue(Id)];

public Instrs compileExp(add(EXP E1, EXP E2)) = 
  [*compileExp(E1), *compileExp(E2), add2()];

Instrs compileExp(sub(EXP E1, EXP E2)) =
  [*compileExp(E1), *compileExp(E2), sub2()];

Instrs compileExp(conc(EXP E1, EXP E2)) =
  [*compileExp(E1), *compileExp(E2), conc2()];

// Unique label generation

private int nLabel = 0; 

private str nextLabel() {
  nLabel += 1;
  return "L<nLabel>";
}

// Compile a statement

Instrs compileStat(asgStat(PicoId Id, EXP Exp)) =
    [lvalue(Id), *compileExp(Exp), assign()];

Instrs compileStat(ifElseStat(EXP Exp, 
                              list[STATEMENT] Stats1,
                              list[STATEMENT] Stats2)){

  elseLab = nextLabel();
  endLab = nextLabel();
  return [*compileExp(Exp),
          gofalse(elseLab),
          *compileStats(Stats1),
          go(endLab),
          label(elseLab),
          *compileStats(Stats2),
          label(endLab)];
}

Instrs compileStat(whileStat(EXP Exp,
                             list[STATEMENT] Stats1)) {
  entryLab = nextLabel();
  endLab = nextLabel();
  return [label(entryLab),
          *compileExp(Exp),
          gofalse(endLab),
          *compileStats(Stats1),
          go(entryLab),
          label(endLab)];
}

// Compile a list of statements
Instrs compileStats(list[STATEMENT] Stats1) = 
  [ *compileStat(S) | S <- Stats1 ];

// Compile declarations

Instrs compileDecls(list[DECL] Decls) =
  [ ((tp == natural()) ? dclNat(Id) : dclStr(Id)) | 
    decl(PicoId Id, TYPE tp) <- Decls
  ];

// Compile a Pico program

public Instrs compileProgram(PROGRAM P){ 
  nLabel = 0;
  if(program(list[DECL] Decls, list[STATEMENT] Series) := P){
     return [*compileDecls(Decls), *compileStats(Series)];
  } else
    throw "Cannot happen";
}

public Instrs compileProgram(str txt) = compileProgram(load(txt));
```

Notes:

  - We introduce `Instrs` as an alias for a list of assembly language instructions.

  - The compiler consists of the functions `compileExp`, `compileStat`, `compileStats`, `compileDecls` and
    `compileProgram`. They all have a program fragment as argument and return the corresponding list of instructions.

  - When compiling expressions, note how *list splicing* (see \[Rascal:Values/List\]) is used to insert the instructions
    that are generated for the operands of an operator into the list of instructions for the whole expression.

  - In order to conveniently write code generators for statements, we introduce a unique label generator. The global
    variable `nLabel` contains the index of the last generated label and `nextLabel` uses this to generate a new, unique
    label.

  - Consider code generation for an if-the-else statement:
    
      - Two fresh labels mark the start of the code for the else part (`elseLab`) and the end of the whole statement
        (`endLab`).
    
      - The code that is generated consists of the following:
        
          - Code for the test.
        
          - A gofalse to the code for the else-part.
        
          - Code for the then-part and a jump to the end of the statement.
        
          - Code for the else-part that starts with the label `elsePart`.
        
          - The label `endLab` that marks the end of the code for the if-then-else statement.

  - Compiling a list of statements conveniently uses a list comprehension and list splicing.

  - Compiling declarations allocates memory locations of the appropriate type for each declared variable.

  - `compileProgram` compiles a gives Pico program to assembly language.

Here is an example:

``` rascal-shell
import demo::lang::Pico::Compile;
compileProgram("begin declare x : natural; x := 47 end");
```

Here is the compilation of the factorial program:

``` rascal-shell
compileProgram("begin declare input : natural,
               '              output : natural,
               '             repnr : natural,
               '              rep : natural;
               '      input := 14;
               '      output := 1;
               '      while input - 1 do
               '          rep := output;
               '          repnr := input;
               '          while repnr - 1 do
               '             output := output + rep;
               '             repnr := repnr - 1
               '          od;
               '          input := input - 1
               '      od
               'end");
```

### ControlFlow

**Synopsis.**

Compute the control flow graph for a Pico program.

**Examples.**

A control flow graph shows how the entry and exit points of a program are connected with each other via all decision
points and statements in the program. Typically, an assignment statement is a single node in the graph and an
if-then-else statement creates a decision point (its test) that connects the then branch and the else branch. The exits
of each branch are connected to the exit of the if-then-else statement as a whole.

A control flow graph for Pico programs can be created as follows:

``` rascal
module demo::lang::Pico::ControlFlow

import analysis::graphs::Graph;
import demo::lang::Pico::Abstract;
import demo::lang::Pico::Load;
import List;

public data CFNode 
    = entry(loc location)
    | exit()
    | choice(loc location, EXP exp)
    | statement(loc location, STATEMENT stat);

alias CFGraph = tuple[set[CFNode] entry, Graph[CFNode] graph, set[CFNode] exit]; 

CFGraph cflowStat(s:asgStat(PicoId Id, EXP Exp)) { 
   S = statement(s@location, s);
   return <{S}, {}, {S}>;
}

CFGraph cflowStat(ifElseStat(EXP Exp,                  
                              list[STATEMENT] Stats1,
                              list[STATEMENT] Stats2)){
   CF1 = cflowStats(Stats1);
   CF2 = cflowStats(Stats2);
   E = {choice(Exp@location, Exp)};
   return < E, (E * CF1.entry) + (E * CF2.entry) + CF1.graph + CF2.graph, CF1.exit + CF2.exit >;
}

CFGraph cflowStat(whileStat(EXP Exp, list[STATEMENT] Stats)) { 
   CF = cflowStats(Stats);
   E = {choice(Exp@location, Exp)};
   return < E, (E * CF.entry) + CF.graph + (CF.exit * E), E >;
}

CFGraph cflowStats(list[STATEMENT] Stats){ 
  if(size(Stats) == 1) {
     return cflowStat(Stats[0]);
  }

  CF1 = cflowStat(Stats[0]);
  CF2 = cflowStats(tail(Stats));

  return < CF1.entry, CF1.graph + CF2.graph + (CF1.exit * CF2.entry), CF2.exit >;
}

CFGraph cflowProgram(PROGRAM P:program(list[DECL] _, list[STATEMENT] Series)){ 
   CF = cflowStats(Series);
   Entry = entry(P@location);
   Exit  = exit();

   return <{Entry}, ({Entry} * CF.entry) + CF.graph + (CF.exit * {Exit}), {Exit}>;
}

public CFGraph cflowProgram(str txt) = cflowProgram(load(txt)); 
```

Notes:

  - First we define a data type `CFNODE` that represents the various elements of a control flow graph:
    
      - `entry`: the entry point of the program.
    
      - `exit` the exit point of the program.
    
      - `choice`: a decision point in the control flow.
    
      - `statement`: a statement in the control flow.

  - Next we define `CFGRAPH` , an alias for a tuple consisting of the following three elements:
    
      - `entry`: the set of entry nodes of the graph.
    
      - `graph`: the actual graph of \`CFNODE\`s.
    
      - `exit`: the set of exit nodes.
        
        ``` 
         The computation of the control flow graph is defined by the functions
        `cflowStat`, `cflowStats`, `cflowDecls` and `cflowProgram`.
        ```

  - The control flow of an assignment statement is computed by wrapping the assignment statement as a `CFNODE` and
    return a `CFGRAPH` with the assignment statement as entry and exit node, and no internal connections.

  - The control flow of an if-then-else statement is computed as follows:
    
      - First the control flows of the then part and the else part are computed, yielding `CF1` and `CF2`.
    
      - Next a set `E` is created that consist of a the test of the if-then-else statement wrapped as choice node.
    
      - Finally, a `CFGRAPH` is returned consisting of the followng three elements:
        
          - The entry point set `E`.
        
          - A graph consisting of the connections between the entry point and both branches (`E * CF1.entry + E *
            CF2.entry`) and the internal graphs of both branches (`CF1.graph + CF2.graph`).
        
          - The union of exit nodes of both branches (`CF1.exit + CF2.exit`).

  - The control flow of while-statement is computed in a similar fashion, except that the exit of the loop body has to
    be connected with the entry of the while loop.

  - The control flow graph for a series of statements is obtained by connecting the exits and entries of consecutive
    statements.

  - The control flow graph of a complete program is obtained by creating an entry and an exit node and connecting them
    to the graph of the statements of the program.

  - Shows the steps from text to control flow graph.

We can now create a CFG for a small Pico program:

``` rascal-shell
import demo::lang::Pico::ControlFlow;
cflowProgram("begin declare n : natural, s : string; n := 10; s := \"a\"; while n do s := s + \"a\"; n := n - 1 od end");
```

Is the above not very motivating to move on to [Visualize](#Pico-Visualize)?

### Evaluate

**Synopsis.**

Evaluate a Pico program.

**Examples.**

A complete evaluator (interpreter) for Pico is defined below.

``` rascal
module demo::lang::Pico::Eval

import demo::lang::Pico::Abstract;
import demo::lang::Pico::Load;

data PicoValue = natval(int n) | strval(str s) | errorval(loc l, str msg); 

alias VENV = map[PicoId, PicoValue]; 

// Evaluate Expressions.

PicoValue evalExp(exp:natCon(int N), VENV env) = natval(N);

PicoValue evalExp(exp:strCon(str S), VENV env) = strval(S);

PicoValue evalExp(exp:id(PicoId Id), VENV env)  =
    env[Id]?  ? env[Id] : errorval(exp@location, "Uninitialized variable <Id>");

PicoValue evalExp(exp:add(EXP E1, EXP E2), VENV env) =
   (natval(n1) := evalExp(E1, env) &&
    natval(n2) := evalExp(E2, env)) ? natval(n1 + n2)
                                    : errorval(exp@location, "+ requires natural arguments");

PicoValue evalExp(exp:sub(EXP E1, EXP E2), VENV env) =
   (natval(n1) := evalExp(E1, env) &&
    natval(n2) := evalExp(E2, env)) ? natval(n1 - n2)
                                    : errorval(exp@location, "- requires natural arguments");

PicoValue evalExp(exp:conc(EXP E1, EXP E2), VENV env) =
   (strval(s1) := evalExp(E1, env) &&
    strval(s2) := evalExp(E2, env)) ? strval(s1 + s2)
                                    : errorval(exp@location, "|| requires string arguments");

// Evaluate a statement

VENV evalStat(stat:asgStat(PicoId Id, EXP Exp), VENV env) {
  env[Id] = evalExp(Exp, env);
  return env;
}

VENV evalStat(stat:ifElseStat(EXP Exp,
                              list[STATEMENT] Stats1,
                              list[STATEMENT] Stats2),
              VENV env) =
  evalStats(evalExp(Exp, env) != natval(0) ? Stats1 : Stats2, env);

VENV evalStat(stat:whileStat(EXP Exp,
                             list[STATEMENT] Stats1),
              VENV env) {
    while(evalExp(Exp, env) != natval(0)){
       env = evalStats(Stats1, env);
    }
    return env;
}

// Evaluate a list of statements
VENV evalStats(list[STATEMENT] Stats1, VENV env) {
  for(S <- Stats1){
      env = evalStat(S, env);
  }
  return env;
}

// Eval declarations

VENV evalDecls(list[DECL] Decls) =
    ( Id : (tp == demo::lang::Pico::Abstract::natural() ? natval(0) : strval(""))
    | decl(PicoId Id, TYPE tp) <- Decls
    );

// Evaluate a Pico program

public VENV evalProgram(PROGRAM P){
  if(program(list[DECL] Decls, list[STATEMENT] Series) := P){
     VENV env = evalDecls(Decls);
     return evalStats(Series, env);
  } else
    throw "Cannot happen";
}

public VENV evalProgram(str txt) = evalProgram(load(txt));
```

Notes:

  - First we introduce a data type `PicoValue` that wraps all possible values that can occur at run-time.

  - Compared to \[Pico/Typecheck\], we use `VENV`, a value environment (a map from Pico identifiers to Pico values).
    
      - The actual evaluator consists of the functions `evalExp`, `evalStat`, `evalStats`, `evalDecls` and
        `evalProgram`. They are written in a similar style as the typechecker.
    
      - `evalProgram` evaluates a given Pico program.

Here is how to evaluate a Pico program:

``` rascal-shell
import demo::lang::Pico::Eval;
evalProgram("begin declare x : natural, y : natural; x := 1; y := x + 5 end");
```

### IDE

**Synopsis.**

An Integrated Development Environment for Pico.

**Examples.**

``` rascal
Unresolved directive in Languages/Pico/IDE/IDE.adoc - include::/mnt/c/dev/projects/usethesource/rascal/src/org/rascalmpl/library/demo/lang/Pico/Plugin.rsc[tags=module]
```

  - First the name of the language and its file name extension are defined (/images/1.png).

  - Next the connection with the parser (/images/3.png), evaluator
    (/images/6.png) are defined.

  - (/images/7.png) combines the above into a set of contributions to the Pico IDE.

  - The actual creation of the Pico IDE is done by `registerPico` (/images/8.png) that:
    
      - Registers the Pico language with name, file name extension and Parser. Whenever a user clicks on a `.pico` file
        an editor will opened and the parsed file will be displayed in it.
    
      - Registers *annotators* for Pico programs. Annotators run whenever a change is made to a Pico program in an open
        editor.
    
      - Registers contributions to the context menu in the editor. When the user right-clicks, the context menu pops up
        and it will show a Pico entry with actions defined in the contributions.

Let’s write a Pico program that produces a string of "a"s:

![screen 1](/images/Screenshot1.png)

As can be seen in the editor above, we get an error since we made a typo (missing comma) in the declarations. We correct
it:

![screen 2](/images/Screenshot2.png)

Now it turns out that we had erroneously used the `+` operator on strings (it should be `||`). We correct it:

![screen 3](/images/Screenshot3.png)

Now we get a warning that variable `n` is not initialized. We correct it and get an error-free and warning-free program:

![screen 4](/images/Screenshot4.png)

### Load

**Synopsis.**

Convert a Pico parse tree into a Pico abstract syntax tree.

**Examples.**

The mapping between parse tree and abstract sybtax tree is achieved as follows:

``` rascal
 module demo::lang::Pico::Load

import Prelude;
import demo::lang::Pico::Syntax;
import demo::lang::Pico::Abstract;

public PROGRAM  load(str txt) = implode(#PROGRAM, parse(#Program, txt));
```

Notes:

  - The function `load` takes a string as argument (supposedly the source code of a Pico program) and returns a value of
    type `PROGRAM`, the abstract syntax tree of the input program. In case the input program is syntactically incorrect,
    a `ParseError` exception will be thrown, see [RuntimeException](/docs/Libraries#runtimeexception).

  - `parse(#Program, txt)`: parse `txt` according to the non-terminal `Program`. Note that `#Program` is a *reified
    type*, i.e., the type `Program` is represented as an ordinary Rascal value and passed as argument to the `parse`
    function, see [reified types](/docs/Rascal#ReifiedTypes). The `parse` function returns a parse tree of the input
    program.

  - `implode(#PROGRAM, parse(#Program, txt))`: transform the parse returned by `parse` into an abstract syntax tree of
    type `PROGRAM`. The \[$Rascal:implode\] function performs the automatic mapping between elements in the parse tree
    and their counterpart in the abstract syntax.

The function `load` can be used as follows:

``` rascal-shell
import demo::lang::Pico::Load;
load("begin declare x : natural; x := 3 end");
```

Observe how the various parts of the abstract syntax tree are annotated with location attributes.

### Syntax

**Synopsis.**

Concrete syntax for Pico.

**Examples.**

``` rascal
module demo::lang::Pico::Syntax

import ParseTree;

lexical Id  = [a-z][a-z0-9]* !>> [a-z0-9];
lexical Natural = [0-9]+ ;
lexical String = "\"" ![\"]*  "\"";

layout Layout = WhitespaceAndComment* !>> [\ \t\n\r%];

lexical WhitespaceAndComment
   = [\ \t\n\r]
   | @category="Comment" ws2: "%" ![%]+ "%"
   | @category="Comment" ws3: "%%" ![\n]* $
   ;

start syntax Program
   = program: "begin" Declarations decls {Statement  ";"}* body "end" ;

syntax Declarations
   = "declare" {Declaration ","}* decls ";" ;

syntax Declaration = decl: Id id ":" Type tp;

syntax Type
   = natural:"natural"
   | string :"string"
   ;

syntax Statement
   = asgStat: Id var ":="  Expression val
   | ifElseStat: "if" Expression cond "then" {Statement ";"}*  thenPart "else" {Statement ";"}* elsePart "fi"
   | whileStat: "while" Expression cond "do" {Statement ";"}* body "od"
  ;

syntax Expression
   = id: Id name
   | strCon: String string
   | natCon: Natural natcon
   | bracket "(" Expression e ")"
   > left conc: Expression lhs "||" Expression rhs
   > left ( add: Expression lhs "+" Expression rhs
          | sub: Expression lhs "-" Expression rhs
          )
  ;

public start[Program] program(str s) {
  return parse(#start[Program], s);
}

public start[Program] program(str s, loc l) {
  return parse(#start[Program], s, l);
}
```

Notes:

  - `Id`, `Natural` and `String` are the basic lexical tokens of the Pico language.

  - `Layout` defines the white space and comments that may occur in a Pico program.

  - Some lexical rules are labeled with `@category="Comment"`. This is for the benefit of syntax highlighting.

  - The start symbol of the Pico grammar is called `Program`.

  - The rules for `Expression` describe the priority and associativity of the operators: all operators are
    left-associative and `||` has a higher priority then `+` and `-`.

  - Two auxiliary functions `program` are defined that parse a given string or a given location as Pico program.

### Typecheck

**Synopsis.**

Typechecker for Pico programs.

**Examples.**

Recall the following properties of Pico that are relevant for type checking:

  - There are two types: natural numbers and strings.

  - Variables have to be declared.

  - Expressions may contain naturals, strings, variables, addition (`+`), subtraction (`-`) and concatenation (`||`).

  - The operators `+` and `-` have operands of type natural and their result is natural.

  - The operator `||` has operands of type string and its results is also of type string.

  - Tests in if-then-else statement and while-statement should be of type natural.

The type checker is going to check these rules and will produce an error message when they are violated.

``` rascal
module demo::lang::Pico::Typecheck

import Prelude;
import demo::lang::Pico::Abstract;
import demo::lang::Pico::Load;

alias TENV = tuple[ map[PicoId, TYPE] symbols, list[tuple[loc l, str msg]] errors]; 

TENV addError(TENV env, loc l, str msg) = env[errors = env.errors + <l, msg>]; 

str required(TYPE t, str got) = "Required <getName(t)>, got <got>"; 
str required(TYPE t1, TYPE t2) = required(t1, getName(t2));

// compile Expressions.

TENV checkExp(exp:natCon(int N), TYPE req, TENV env) = 
  req == natural() ? env : addError(env, exp@location, required(req, "natural"));

TENV checkExp(exp:strCon(str S), TYPE req, TENV env) =
 req == string() ? env : addError(env, exp@location, required(req, "string"));

TENV checkExp(exp:id(PicoId Id), TYPE req, TENV env) { 
  if(!env.symbols[Id]?)
     return addError(env, exp@location, "Undeclared variable <Id>");
  tpid = env.symbols[Id];
  return req == tpid ? env : addError(env, exp@location, required(req, tpid));
}

TENV checkExp(exp:add(EXP E1, EXP E2), TYPE req, TENV env) = 
  natural() := req ? checkExp(E1, natural(), checkExp(E2, natural(), env))
                   : addError(env, exp@location, required(req, "natural"));

TENV checkExp(exp:sub(EXP E1, EXP E2), TYPE req, TENV env) = 
  natural() := req ? checkExp(E1, natural(), checkExp(E2, natural(), env))
                   : addError(env, exp@location, required(req, "natural"));

TENV checkExp(exp:conc(EXP E1, EXP E2), TYPE req, TENV env) = 
  string() := req ? checkExp(E1, string(), checkExp(E2, string(), env))
                   : addError(env, exp@location, required(req, "string"));


// check a statement

TENV checkStat(stat:asgStat(PicoId Id, EXP Exp), TENV env) { 
  if(!env.symbols[Id]?)
     return addError(env, stat@location, "Undeclared variable <Id>");
  tpid = env.symbols[Id];
  return checkExp(Exp, tpid, env);
}

TENV checkStat(stat:ifElseStat(EXP Exp, 
                              list[STATEMENT] Stats1,
                              list[STATEMENT] Stats2),
               TENV env){
    env0 = checkExp(Exp, natural(), env);
    env1 = checkStats(Stats1, env0);
    env2 = checkStats(Stats2, env1);
    return env2;
}

TENV checkStat(stat:whileStat(EXP Exp,
                             list[STATEMENT] Stats1),
                 TENV env) {
    env0 = checkExp(Exp, natural(), env);
    env1 = checkStats(Stats1, env0);
    return env1;
}

// check a list of statements
TENV checkStats(list[STATEMENT] Stats1, TENV env) { 
  for(S <- Stats1){
      env = checkStat(S, env);
  }
  return env;
}

// check declarations

TENV checkDecls(list[DECL] Decls) = 
    <( Id : tp | decl(PicoId Id, TYPE tp) <- Decls), []>;

// check a Pico program

public TENV checkProgram(program(list[DECL] Decls, list[STATEMENT] Series)) { 
    return checkStats(Series, checkDecls(Decls));
}
                                                         
public list[tuple[loc l, str msg]] checkProgram(str txt) = checkProgram(load(txt)).errors;
```

Notes:

  - We will use `TENV` (short for type environment, as an alias for a tuple that contains all relevant type information:
    
      - `symbols`: a map from Pico identifiers to their declared type.
    
      - `errors`: a list of error messages. An error message is represented by its location (where the error occurred)
        and a textual message.

  - `addError` is an auxiliary function to add in a given type environment an error message to the list of errors. It
    returns a new type environment.

  - ``required`is an auxiliarty function to produce readable messages, e.g., `"Required natural, got string"``.

  - The actual type checking is done by the functions `checkExp`, `checkStat`, `checkStats`, `checkDecls` and
    `checkProgram`. They all have three arguments:
    
      - the program fragment (an abstract syntax tree) to be checked.
    
      - the required type of that fragment.
    
      - the type environment.
        
            `checkExp` checks expressions. For instance, checking a natural constant (`natCon`) is ok when type `natural` is expected but will give an error message when a `string` is expected. Observe how all the arguments of the check functions have a labeled pattern as first argument, here `exp:natCon(int N)`. The benefit is that the whole argument is available inside the function (as value of variable `exp`) and this can be used to retrieve the location information from it (`exp@location`) when an error has to be created.

  - An important case is to check whether an identifier has been defined and, if so, whether it is defined with the
    expected type.

  - Check `add`.

  - Check `sub`.

  - Check `conc`.

  - An assignment statement is checked: the identifier on the left-hand side should have been declared and should be
    type compatible with the expression on the right-hand side.

  - Checking if- and while-statements amounts to checking the embedded statements and ensuring that the type of the test
    is natural.

  - Checking a list of statements amounts to checking each statement in the list.

  - Checking declarations amounts to extracting each (id, type) pair form the declarations and using a map comprehension
    to build a type environment.

  - Checking a complete Pico program is achieved by first checking the declarations of the program and using the
    resulting type environment to check its body.

  - `checkProgram` defines how to check the source code of a given Pico program.

Checking an erroneous program goes like this:

``` rascal-shell
import demo::lang::Pico::Typecheck;
checkProgram("begin declare  x : natural; x := \"abc\" end");
```

The error location will be use later to give specific messages in the IDE.

### Uninit

**Synopsis.**

Find unitialized variables in a Pico program.

**Examples.**

Uninitialized variables are variables that are used without being initialized. This means that there is a path in the
control flow graph from the entry point of the program to a specific use of a variable, where that path does not contain
a definition of that variable.

This can be computed as follows:

``` rascal
module demo::lang::Pico::Uninit

import demo::lang::Pico::Abstract;
import demo::lang::Pico::Load;

import demo::lang::Pico::UseDef;
import demo::lang::Pico::ControlFlow;

import analysis::graphs::Graph;

public set[CFNode] defNodes(PicoId Id, set[Occurrence] Defs) =
   {statement(occ.stat@location, occ.stat) | Occurrence occ <- Defs, occ.name == Id};

public set[Occurrence] uninitProgram(PROGRAM P) {
   D = defs(P); 
   CFG = cflowProgram(P); 
   return { occ | occ <- uses(P), 
                  any(CFNode N <- reachX(CFG.graph, CFG.entry, defNodes(occ.name, D)),
                      N has location && occ.location <= N.location)
          }; 
}

public set[Occurrence] uninitProgram(str txt) = uninitProgram(load(txt)); 
```

  - First, we determine the variable definitions of the program,

  - and its control flow graph.

  - Next we ask for every use of a variable the question: can it be reached from the entries of the program without
    encountering a definition? This determined as follows:
    
      - `rangeR(D, {occ.item})` is the set of definition for the variable were are looking at. See
        \[Rascal:Relation/rangeR\].
    
      - `reachX` determines the reachability in a graph while excluding certain nodes, see \[Rascal:Graph/reachX\]. Here
        `reachX(CFG.graph, CFG.entry, rangeR(D, {occ.item}))` determines the nodes in the graph that can be reached from
        the entry point of the program without passing a definition of the current variable.
    
      - `any(CFNode N ← reachX( …​ ), N has location && occ.location <= N.location)` yields true if there is such a
        reachable node that covers the location of the current variable.

  - The complete comprehension returns the set of occurrences of uninitialized variables.

The function `uninitProgram` performs this analysis on the source text of a Pico program.

Here is a simple example, where variable `p` is used without intialization:

``` rascal-shell
import demo::lang::Pico::Uninit;
uninitProgram("begin declare n : natural, m : natural, p : natural; n := 10; m := n + p end");
```

### UseDef

**Synopsis.**

Compute use-def information for the variables in a Pico program.

**Examples.**

The *definitions* of a variable are the source code locations where a variable gets a value. The *uses* of a variable
are the location where the value of that variable is used. Both concepts are relevant for program analysis and are
defined here.

``` rascal
module demo::lang::Pico::UseDef

import demo::lang::Pico::Abstract;

set[Occurrence] usesExp(EXP e, STATEMENT s) =  
  u:id(PicoId Id1) := e ? {< u@location, Id1, s>}
                        : {< u@location, Id2, s> | /u:id(PicoId Id2) <- e };

set[Occurrence] usesStat(s:asgStat(PicoId Id, EXP e)) = usesExp(e, s); 

set[Occurrence] usesStat(s: ifElseStat(EXP e,
                              list[STATEMENT] s1,
                              list[STATEMENT] s2)) =
   usesExp(e, s) + usesStats(s1) + usesStats(s2);

set[Occurrence] usesStat(s: whileStat(EXP e,
                              list[STATEMENT] s1)) =
   usesExp(e, s) + usesStats(s1);

set[Occurrence] usesStats(list[STATEMENT] stats) =
   {*usesStat(s) | s <- stats};

public set[Occurrence] uses(PROGRAM p) = usesStats(p.stats);  

public set[Occurrence] defs(PROGRAM p) =  
   { < stat@location, v, stat > | /stat:asgStat(PicoId v, EXP _) <- p.stats};
```

Recall that `Occurrence` was introduced in [Abstract](#Pico-Abstract); it is a parameterized container to associate
program entities with their location.

  - The function `usesExp` computes a set of occurrences (uses) of Pico identifiers in a given statement:
    
      - If the expression is itself an identifier, then a singleton set containing that identifier and the statement is
        returned.
    
      - If the expression is composite, all its containing identifiers are collected using a descendant (deep) match
        (`/`, see \[Rascal:Descendant\])) in `/u:id(PicoId Id) <- e`. Note that we use a labeled pattern `u:id(PicoId
        Id)`, so that we can access the whole expression that was matched and retrieve its location information
        (`u@location`) when we are adding a \<location, identifier\> pair to the set of occurrences.

  - `useStat` extracts uses from all statement variants.

  - The function `uses` simply applies `usesStats` to the statement part of its program argument.

  - The function `defs` has a Pico program as argument and returns a set of occurrences (definitions) of Pico
    identifiers. The definition consists of a single set comprehension that consists of the following parts:
    
      - \` …​ \<- P. stats\` enumerates all statements in the program.
    
      - `/asgStat(PicoId Id, EXP Exp) <- P.stats` uses again a descendant match to find all assignment statements.
    
      - For each assignment statement a (location, identifier) pair is added to the result.

### Visualize

**Synopsis.**

Visualize Pico Control Flow Graphs.

> **Warning**
> 
> The visualization library is being reimplemented and reorganized; the information provided here maybe inaccurate or
> even incorrect.

**Examples.**

``` rascal
Unresolved directive in Languages/Pico/Visualize/Visualize.adoc - include::/mnt/c/dev/projects/usethesource/rascal/src/org/rascalmpl/library/demo/lang/Pico/Visualize.rsc[tags=module]
```

  - We want to include the text of expressions in the relevant Figure nodes, this is achieved by `make`.

  - An editor property is attached to each Figure node: clicking on the node opens an editor for the corresponding file.

  - `visNode` implements the visualization per CFG node.

  - Since Figure nodes in a visual graph need an `id` property, we define here a scheme to associate unique identifiers
    to each Figure node.

  - The complete visualization of a CFG is implemented by `visCFG`: it gets the CFG graph as arguments and then
    
      - creates all Figure edges,
    
      - creates all Figure nodes,
    
      - returns a Figure graph.

Let’s now apply this:

``` rascal-figure
                import demo::lang::Pico::ControlFlow;
import demo::lang::Pico::Visualize;
CFG = cflowProgram("begin declare n : natural, s : string; n := 10; s := \"a\"; while n do s := s + \"a\"; n := n - 1 od end");
render(visCFG(CFG.graph));
```

The resulting visualization looks like this:

![Control flow graph](/images/cfg1.png)

## Metrics

**Synopsis.**

Computing

### Measuring Java

**Synopsis.**

A few steps using the M3 model to compute basic metrics for a Java project in Eclipse

**Description.**

This is a recipe for computing basic or more advanced metrics from a Java project in Eclipse. We assume:

  - You have Rascal installed in an Eclipse instance.

  - You have a Java project in your Eclipse workspace that compiles without errors. Let’s call it `HelloWorld`.

Now we will follow the [EASY](/docs/WhyRascal#easy) paradigm:

  - a library will be used to *parse* the Java code generating \[Rascalopedia:AbstractSyntaxTree\]

  - the same library will generate a \[Rascal:Values/Relation\]al model to represent interesting facts between Java
    source code artifacts

  - then we can write queries over the generated trees and relations using \[Rascal:Expressions\].

These are a number of recipes for measuring different things about Java:

  - \[MeasuringClasses\]

  - \[MeasuringMethods\]

**Examples.**

``` rascal-shell
```

First we import the basic data types for representing Java. The model is called *M3*, and its definition is split acros
a generic language independent module called \[Rascal:analysis/m3/Core\] and a Java specific part called
\[Rascal:lang/java/m3/Core\]. Have a look at the documentation of these modules later. For now we will go through using
them in a few examples.

``` rascal-shell
import lang::java::m3::Core;
```

Then we import the API for extracting an M3 model from an Eclipse project.

``` rascal-shell
import lang::java::jdt::m3::Core;
```

Calling the following function generates an enormous value representing everything the Eclipse Java compiler knows about
this project:

``` rascal-shell
myModel = createM3FromEclipseProject(|project://example-project|);
```

  - Notice that *all* these \[$Rascal:Values/Location\] literals are hyperlinks and you can click on them to go the
    source code that they point to. Try it\!

### Measuring Classes

**Examples.**

``` rascal-shell
```

First we import the basic data types for representing Java. The model is called *M3*, and its definition is split acros
a generic language independent module called \[Rascal:analysis/m3/Core\] and a Java specific part called
\[Rascal:lang/java/m3/Core\]. Have a look at the documentation of these modules later. For now we will go through using
them in a few examples.

``` rascal-shell
import lang::java::m3::Core;
```

Then we import the API for extracting an M3 model from an Eclipse project.

``` rascal-shell
import lang::java::jdt::m3::Core;
```

Calling the following function generates an enormous value representing everything the Eclipse Java compiler knows about
this project:

``` rascal-shell
myModel = createM3FromEclipseProject(|project://example-project|);
```

Next, let’s focus on the *containment* relation. This defines what parts of the source code are parts of which other
parts:

``` rascal-shell
myModel.containment
```

As you can read, classes contain methods, methods contain variables, etc. Classes could also contain other classes
(nested classes), and methods can even contain classes (anonymous classes). Let’s focus on a specific class, and project
what it contains from the relation:

``` rascal-shell
myModel.containment[|java+class:///HelloWorld|]
```

Let’s filter the methods:

``` rascal-shell
helloWorldMethods = [ e | e <- myModel.containment[|java+class:///HelloWorld|], e.scheme == "java+method"];
```

And we are ready to compute our first metric. How many methods does this class contain?

``` rascal-shell
import List;
size(helloWorldMethods)
```

No magic applied\! It is just a little query on a model that knows everything about the code. Let’s generalize and
compute the number of methods for all classes in one big expression. First a function to compute the number for a given
class:

``` rascal-shell
int numberOfMethods(loc cl, M3 model) = size([ m | m <- model.containment[cl], isMethod(m)]);
```

then we apply this new function to give us a map from classes to integers:

``` rascal-shell
map[loc class, int methodCount] numberOfMethodsPerClass = (cl:numberOfMethods(cl, myModel) | <cl,_> <- myModel.containment, isClass(cl));
```

how about the number of fields?

``` rascal-shell
int numberOfFields(loc cl, M3 model) = size([ m | m <- model.containment[cl], isField(m)]);
map[loc class, int fieldCount] numberOfFieldsPerClass = (cl:numberOfFields(cl, myModel) | <cl,_> <- myModel.containment, isClass(cl));
```

what is the ratio between fields and methods for each class?

``` rascal-shell
(cl : (numberOfFieldsPerClass[cl] * 1.0) / (numberOfMethodsPerClass[cl] * 1.0) | cl <- classes(myModel))
```

### Measuring Methods

**Examples.**

``` rascal-shell
import lang::java::m3::Core;
import lang::java::jdt::m3::Core;
import lang::java::jdt::m3::AST;
```

First extract our overview model

``` rascal-shell
myModel = createM3FromEclipseProject(|project://example-project|);
```

Now let’s focus on the methods

``` rascal-shell
myMethods = methods(myModel);
```

What is the source code for a method?

``` rascal-shell
import IO;
methodSrc = readFile(|java+method:///HelloWorld/main(java.lang.String%5B%5D)|);
```

let’s print it:

``` rascal-shell
println(methodSrc)
```

how many words in this method?

``` rascal-shell
(0 | it + 1 | /\W+/ := methodSrc)
```

let’s get its AST

``` rascal-shell
methodAST = getMethodASTEclipse(|java+method:///HelloWorld/main(java.lang.String%5B%5D)|, model=myModel);
```

Now we count the number of expressions:

``` rascal-shell
(0 | it + 1 | /Expression _ := methodAST)
```

or give us the locations of all expressions:

``` rascal-shell
[m@src | /Expression m := methodAST]
```

the size should be the same, right?

``` rascal-shell
import List;
size([m@src | /Expression m := methodAST]) == (0 | it + 1 | /Expression _ := methodAST)
```

## Visualization

**Synopsis.**

Recipes for creating visualizations.

> **Warning**
> 
> The visualization library is being reimplemented and reorganized; the information provided here maybe inaccurate or
> even incorrect

We cover the following topics:

  - [ADT](#Visualization-ADT): Visualize an Algebraic Datatype as a tree.

  - [Draw a Logo](#Visualization-DrawLogo): Draw the Rascal logo.

  - [Interactive Box Height](#Visualization-InteractiveBoxHeight): Control the height of a box with user input.

  - [My First Box](#Visualization-MyFirstBox): Drawing a box in many variations.

  - [ParseTree](#Visualization-ParseTree): Visualize a parse tree.

  - [Playing With Properties](#Visualization-PlayingWithProperties): Illustrate the effect of various figure properties.

### ADT

**Synopsis.**

Visualize an Algebraic Datatype as a tree.

**Description.**

In [???](#ColoredTrees) we have discussed the Algebraic Data Type `ColoredTree`. Here we show how to create a
visualization for them. The global approach is:

  - Define a function `visColoredTree` that has a ColoredTree as argument and creates a `Figure` for it.

  - Display the resulting figure using \[$Rascal:Render/render\].

**Examples.**

Here is our solution:

``` rascal
module demo::vis::VisADT

//import vis::Figure;
//import vis::Render;
//
//data ColoredTree = leaf(int N)
//                 | red(ColoredTree left, ColoredTree right)
//                 | black(ColoredTree left, ColoredTree right)
//                 | green(ColoredTree left, ColoredTree right)
//                 ;
//
//Figure visColoredTree(leaf(int N)) =
//  box(text("<N>"), gap(2), fillColor("lightyellow")); 
//
//Figure visColoredTree(red(ColoredTree left, ColoredTree right)) =
//  visNode("red", left, right); 
//
//Figure visColoredTree(black(ColoredTree left, ColoredTree right)) =
//  visNode("black", left, right);
//
//Figure visColoredTree(green(ColoredTree left, ColoredTree right)) =
//  visNode("green", left, right);
//
//Figure visNode(str color, ColoredTree left, ColoredTree right) = 
//  tree(ellipse(fillColor(color)), [visColoredTree(left), visColoredTree(right)]);
//
//ColoredTree  rb = red(black(leaf(1), red(leaf(2),leaf(3))), green(leaf(3), leaf(4)));
```

  - A `leaf` is represented as its number converted to text, surrounded by a lightyellow box.

  - The figure for non-leaf nodes of a ColoredTree is generated by the auxiliary function `visNode`.

  - `visNode` represents the node itself as a \[$Rascal:Figures/tree\] that has a colored ellipse as root and the
    visualization of two ColoredTrees as children.

For the example `ColoredTree` `rb` we can set a standard (see [/Libraries\#std](/docs/Libraries#std))
[size](/docs/Libraries#size) and standard [gap](/docs/Libraries#gap):

``` rascal-figure
                import demo::vis::VisADT;
render(space(visColoredTree(rb), std(size(30)), std(gap(30))));
```

and the result is:

![a1](/images/a1.png)

Note that:

  - We place the Figure that is produced by `viscoloredTree` in a `space` for the sole purpose that add extra properties
    to it.

  - We use `std(size(30))` and \` std(gap(30))\` to achieve that these properties are set for all subfigures.

Some further custumizations are possible. By default, the tree visualization uses
[manhattan](/docs/Libraries#manhattan) style. If we turn it off

``` rascal-figure
                import demo::vis::VisADT;
render(space(visColoredTree(rb), std(size(30)), std(gap(30)), std(manhattan(false))));
```

the result is:

![a2](/images/a2.png)

It is also possible to change the [orientation](/docs/Libraries#orientation) of the tree and draw it, for example,
from left to right:

``` rascal-figure
                import demo::vis::VisADT;
render(space(visColoredTree(rb), std(size(30)), std(gap(30)), std(orientation(leftRight()))));
```

the result is:

![a3](/images/a3.png)

### Draw a Logo

**Synopsis.**

Draw the Rascal logo.

**Description.**

Given a 50x50 matrix containing the colors of the Rascal logo, we can reproduce it as visualization.

**Examples.**

Here is the solution:

``` rascal
module demo::vis::Logo

//import vis::Figure;
//import vis::Render;
//
//public list[int] LogoData = [
//0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff,
//0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff,
//0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff,
//0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff,
//0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff,
//0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff,
//0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff,
//0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff,
//0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff,
//0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff,
//0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff,
//0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff,
//0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff,
//0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff,
//0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff,
//0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff,
//0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff,
//0xfff9f9f9, 0xff9d9c9e, 0xff616063, 0xffa3a2a4, 0xfffcfcfc, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff,
//0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff,
//0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff,
//0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xfffefefe,
//0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff,
//0xfff7f7f7, 0xff595759, 0xff121014, 0xff616063, 0xfffcfcfc, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff,
//0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff,
//0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff,
//0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xfffefefe, 0xfffbfbfb, 0xff7f7e80, 0xff646163, 0xffc2c1c3, 0xfff7f7f7,
//0xffffffff, 0xfffefefe, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff,
//0xffffffff, 0xffdddddd, 0xff747375, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff,
//0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff,
//0xffffffff, 0xffffffff, 0xffffffff, 0xfffefefe, 0xfffefefe, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff,
//0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffc1c0c1, 0xff8e8782, 0xffc6bdb2, 0xff908984, 0xff5b595a,
//0xffcccccd, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff,
//0xffffffff, 0xffffffff, 0xff565357, 0xffd7d7d7, 0xffffffff, 0xfffefefe, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff,
//0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff,
//0xffffffff, 0xffffffff, 0xffffffff, 0xfffefefe, 0xffffffff, 0xfff3f3f3, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff,
//0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xff504e4f, 0xffd3c9be, 0xffe2d7cb, 0xffe1d7cb, 0xffdfd4c9,
//0xff4c4848, 0xffb5b5b7, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff,
//0xffffffff, 0xffffffff, 0xffdcdbdc, 0xff242226, 0xffdfdfdf, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff,
//0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff,
//0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xff7f7e80, 0xff131115, 0xff636264, 0xffffffff, 0xffffffff, 0xffffffff,
//0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffc8c8c9, 0xff696360, 0xffeadfd2, 0xffbcb3aa, 0xffbbb2a9, 0xffdfd5c8,
//0xffe5d9cd, 0xff645e5c, 0xffa09ea1, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff,
//0xffffffff, 0xfffefefe, 0xffffffff, 0xff7c7b7d, 0xff161418, 0xff9d9c9e, 0xfff9f9f9, 0xffffffff, 0xfffefefe, 0xffffffff,
//0xfffefefe, 0xffffffff, 0xffe4e4e4, 0xffe5e5e5, 0xffffffff, 0xffffffff, 0xfff7f7f7, 0xffffffff, 0xffffffff, 0xffffffff,
//0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xff747274, 0xff0e0c10, 0xff09070c, 0xfffafafa, 0xffffffff, 0xffffffff,
//0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xff58575a, 0xffd5cbc0, 0xffe0d5c9, 0xffdfd4c8, 0xffb5ada4, 0xff948d87,
//0xffede1d5, 0xffded4c8, 0xff7c7672, 0xff8c8b8d, 0xffffffff, 0xfffefefe, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff,
//0xfffefefe, 0xffffffff, 0xffffffff, 0xfff7f7f8, 0xff4a484b, 0xff151217, 0xff454447, 0xffe6e7e6, 0xffffffff, 0xffffffff,
//0xffd8d7d8, 0xffd7d7d7, 0xffffffff, 0xffa3a2a4, 0xfff4f4f4, 0xffffffff, 0xffd5d4d5, 0xffffffff, 0xffffffff, 0xffffffff,
//0xfffefefe, 0xffffffff, 0xffffffff, 0xffffffff, 0xfff7f7f7, 0xff939193, 0xff717072, 0xfffefefe, 0xffffffff, 0xffffffff,
//0xffffffff, 0xffffffff, 0xffffffff, 0xfff5f5f6, 0xff504d4f, 0xffede2d4, 0xffdfd5c9, 0xffe1d6ca, 0xffe8ddd1, 0xffa8a099,
//0xff817b76, 0xffdfd5ca, 0xffe4dace, 0xff6a6562, 0xffc2c2c2, 0xffffffff, 0xfffefefe, 0xffffffff, 0xfffdfdfd, 0xffffffff,
//0xffffffff, 0xffe3e3e4, 0xfff2f2f3, 0xffffffff, 0xffffffff, 0xff403d41, 0xff141217, 0xff131116, 0xff9a999b, 0xffd3d3d4,
//0xffdfdfdf, 0xff59575a, 0xffc6c6c7, 0xff3a373b, 0xffecebec, 0xffdfdfdf, 0xffbcbcbd, 0xffeaeaea, 0xffdddcdd, 0xffeeedee,
//0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xfffefefe, 0xffe2e1e2, 0xffa3a2a4, 0xffffffff, 0xffffffff, 0xffffffff,
//0xffffffff, 0xffffffff, 0xffffffff, 0xffd0d0d1, 0xff8a8480, 0xffe8ded1, 0xffcbc1b7, 0xffaca49c, 0xffebe1d3, 0xffe7ddd0,
//0xffbab1a8, 0xff827b76, 0xffe9ded1, 0xffdacfc4, 0xff4f4b4b, 0xffcccccd, 0xffffffff, 0xffffffff, 0xfffcfcfc, 0xffc1c0c1,
//0xffffffff, 0xfffefefe, 0xffb4b3b5, 0xffcccccc, 0xfff9f8f8, 0xff211f24, 0xff2c2924, 0xff373323, 0xff0a0a13, 0xff0f0c11,
//0xff18161a, 0xff1d1b1f, 0xff18161a, 0xff323034, 0xff666568, 0xff4b494c, 0xff838183, 0xff878688, 0xfff6f6f6, 0xffffffff,
//0xffffffff, 0xfffefefe, 0xffffffff, 0xfffefefe, 0xffffffff, 0xffabaaac, 0xffbcbbbc, 0xffffffff, 0xffffffff, 0xffffffff,
//0xffffffff, 0xffffffff, 0xffffffff, 0xffb5b5b6, 0xffaba39d, 0xffe2d8cc, 0xffdfd4c8, 0xffcec4ba, 0xff6b6563, 0xffc1b9af,
//0xffe3d8cc, 0xffb1a8a0, 0xff6d6764, 0xffe8dcd0, 0xffd9cfc3, 0xff3f3c3e, 0xffebebeb, 0xffffffff, 0xffffffff, 0xffedeced,
//0xff5d5c5f, 0xfff0f0f0, 0xffffffff, 0xff5d5b5e, 0xff312f32, 0xff2e2b24, 0xffe3d54c, 0xffe7d42d, 0xff625122, 0xff211e24,
//0xff403e42, 0xff1a181c, 0xff1a181c, 0xff1a181c, 0xff1a181c, 0xff19161b, 0xff151317, 0xffa6a4a6, 0xff838284, 0xffa3a2a4,
//0xffcfced0, 0xffffffff, 0xffffffff, 0xffffffff, 0xffefeeef, 0xff312f33, 0xfff1f1f1, 0xffffffff, 0xffffffff, 0xffffffff,
//0xffffffff, 0xffffffff, 0xffffffff, 0xffa3a2a4, 0xffc3b9b0, 0xffe4d9cd, 0xffe2d7cb, 0xffe4dacd, 0xffe4d9ce, 0xff89827e,
//0xff817a75, 0xffa9a199, 0xffa39a93, 0xff938b86, 0xffe1d6ca, 0xffb9b0a7, 0xff777577, 0xffffffff, 0xfffefefe, 0xffffffff,
//0xffcfcecf, 0xff323134, 0xff858385, 0xff8e8d8f, 0xff1a181c, 0xffcdc262, 0xfff4df32, 0xff786320, 0xff8b898e, 0xffffffff,
//0xffffffff, 0xffb0b0b1, 0xff171519, 0xff383417, 0xffcdc45f, 0xffa9a8a8, 0xff6a653a, 0xff161413, 0xff6c6a6f, 0xffcfcfcf,
//0xffffffff, 0xfffefefe, 0xffffffff, 0xffe8e8e8, 0xff302e32, 0xff919092, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff,
//0xffffffff, 0xffffffff, 0xffffffff, 0xff9b9a9b, 0xffc4bbb1, 0xffe3d8cb, 0xffbab1a8, 0xff918a84, 0xffb3aba2, 0xffe9ded1,
//0xffdbcfc4, 0xffbab1a8, 0xff736e6b, 0xff403b3c, 0xffa29992, 0xffe6dbcf, 0xff77706c, 0xffa9a8aa, 0xffffffff, 0xfff9f9f9,
//0xfff2f2f2, 0xffdddcdd, 0xff262327, 0xff13111a, 0xff989260, 0xfffcea49, 0xff8f7b1f, 0xff747374, 0xffffffff, 0xffffffff,
//0xffffffff, 0xffffffff, 0xff454346, 0xff131116, 0xffb2a947, 0xfffffb8f, 0xfffdee50, 0xffd7c826, 0xff26221a, 0xff211f24,
//0xff5d5b5e, 0xfff6f6f7, 0xffdfdfe0, 0xff2e2c30, 0xff525154, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff,
//0xffffffff, 0xffffffff, 0xffffffff, 0xff959394, 0xffc7bdb4, 0xffe0d6ca, 0xffe1d6ca, 0xffe1d6ca, 0xffa8a199, 0xff66615e,
//0xffbab0a7, 0xffddd3c7, 0xffe4d9cd, 0xffc8bfb5, 0xff494545, 0xffbdb4ab, 0xffe6dbcf, 0xff363234, 0xffe1e0e1, 0xffffffff,
//0xffa7a6a8, 0xff5f5d61, 0xff5e5d5f, 0xff2e2b20, 0xffe7dc7a, 0xffdfcb27, 0xff3b321c, 0xfff8f8f8, 0xffffffff, 0xffefefef,
//0xfff9f9f9, 0xffffffff, 0xff9e9d9e, 0xff100e12, 0xff12111a, 0xffada123, 0xffcbbc25, 0xffaca125, 0xff474221, 0xff18161b,
//0xff161419, 0xff2a282c, 0xff120f14, 0xff484649, 0xfff4f4f5, 0xfffefefe, 0xfffefefe, 0xffffffff, 0xffffffff, 0xffffffff,
//0xffffffff, 0xffffffff, 0xffffffff, 0xff959495, 0xffc8beb4, 0xffe4d9cd, 0xffe1d7cb, 0xffdfd4c8, 0xffe7dccf, 0xffe1d6ca,
//0xffa69e97, 0xff76706c, 0xffdfd5c8, 0xffe6dbcf, 0xffe4dace, 0xff7c7572, 0xffcac1b7, 0xffcbc1b7, 0xff636264, 0xfff9f9f9,
//0xffffffff, 0xffc6c6c7, 0xff838284, 0xff635e38, 0xfffbee60, 0xffae9925, 0xff5a585a, 0xffffffff, 0xffffffff, 0xff545356,
//0xff69686a, 0xfffcfcfc, 0xff939194, 0xff3f3418, 0xff19171b, 0xff14121b, 0xff161314, 0xff1c191d, 0xff151319, 0xff17151a,
//0xff13111c, 0xff1c1819, 0xff2f2d30, 0xffc7c6c7, 0xffaeacae, 0xffe3e3e4, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff,
//0xffffffff, 0xffffffff, 0xffffffff, 0xff9b9a9b, 0xffc4bab0, 0xffe3d8cc, 0xffded3c7, 0xffe3d9cc, 0xffe0d5ca, 0xffddd3c7,
//0xffe2d7cb, 0xffccc3b9, 0xff3b3839, 0xffd5cbc0, 0xffdfd5c9, 0xffcfc4ba, 0xff847d79, 0xffe4d9cc, 0xff817a76, 0xffc3c2c3,
//0xffffffff, 0xffffffff, 0xffabaaab, 0xff999351, 0xfffcec4a, 0xff7f6b23, 0xff85848b, 0xffffffff, 0xffffffff, 0xff383639,
//0xff1b191d, 0xffc1c1c1, 0xff575558, 0xff947d21, 0xff23201c, 0xff1a181c, 0xff817f82, 0xffffffff, 0xffdfdee0, 0xff3d3a30,
//0xffa59120, 0xff4c3a20, 0xff29262b, 0xff8b898b, 0xffededee, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff,
//0xffffffff, 0xffffffff, 0xffffffff, 0xffa5a5a7, 0xffc0b7ad, 0xffe3d8cb, 0xffe0d5c9, 0xffdacfc4, 0xffbfb5ad, 0xffb5ada4,
//0xffd3c8bd, 0xffebdfd2, 0xffd0c6bb, 0xff55504f, 0xffc3bab0, 0xffe7dccf, 0xff97908a, 0xff918a84, 0xffdad0c4, 0xff484446,
//0xfffafafa, 0xffffffff, 0xff676468, 0xffcbc375, 0xfff8e645, 0xff625122, 0xffa5a5aa, 0xffdad9d9, 0xfff5f5f5, 0xff323034,
//0xff161418, 0xff939295, 0xff2f2920, 0xffd4bc2d, 0xff29261a, 0xff6c6a6d, 0xffffffff, 0xffffffff, 0xffffffff, 0xff575444,
//0xffe9d223, 0xff33271c, 0xff413f43, 0xff89888a, 0xffa1a0a2, 0xffbfbfbf, 0xfff3f3f4, 0xffffffff, 0xfffefefe, 0xfffefefe,
//0xffffffff, 0xffffffff, 0xffffffff, 0xffbcbcbe, 0xffa29b94, 0xffe4dacd, 0xffdfd5c9, 0xffe3d8cb, 0xffdcd2c6, 0xffd5cbc0,
//0xff968f8a, 0xff645f5d, 0xff827b76, 0xff958e87, 0xff403d3d, 0xffc5bbb2, 0xffeadfd2, 0xff726b69, 0xffb2aaa1, 0xffa8a098,
//0xff636266, 0xffffffff, 0xff2b292d, 0xffe4dd96, 0xfff9e744, 0xff655423, 0xffb3b3b8, 0xff727174, 0xff525054, 0xff1e1c20,
//0xff18161a, 0xff4a4a52, 0xff665722, 0xffefdc30, 0xff2e2b1d, 0xfffdfdfd, 0xffeaeaea, 0xff515052, 0xfff0f0f2, 0xff535146,
//0xffd5be24, 0xff140f13, 0xff858486, 0xffc7c7c8, 0xffdddcdd, 0xfff4f4f4, 0xffd7d7d8, 0xff838184, 0xffffffff, 0xffffffff,
//0xffffffff, 0xffffffff, 0xffffffff, 0xffe0e0e0, 0xff6c6866, 0xffebe0d3, 0xffe1d6ca, 0xffd9d0c4, 0xffdad0c4, 0xffd9cfc4,
//0xffeadfd2, 0xffeee2d6, 0xffc6beb5, 0xff96908a, 0xff87817d, 0xff605a58, 0xffc1b8ae, 0xffe5d9ce, 0xff5f5a58, 0xffdfd4c9,
//0xff64605e, 0xffd2d1d3, 0xff19171b, 0xffece7ac, 0xfffded54, 0xff856f23, 0xffa0a0a6, 0xff9d9c9e, 0xff0d0b0f, 0xff19171b,
//0xff1b191e, 0xff1d1a1f, 0xffd3bb1f, 0xffecdd40, 0xff656256, 0xffffffff, 0xffd7d6d7, 0xff18161a, 0xff6a696e, 0xff6c683c,
//0xff9b8822, 0xff3b3b44, 0xff464347, 0xffa5a5a6, 0xfffbfbfb, 0xffe9e9e9, 0xff656262, 0xff1b191d, 0xffffffff, 0xffffffff,
//0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xff4d4b4f, 0xffd8cec2, 0xffe0d5ca, 0xffd2c8bd, 0xffc8bfb5, 0xffa8a199,
//0xffa29a94, 0xff9d958e, 0xff928985, 0xffded3c8, 0xffe3d8cb, 0xffded3c8, 0xff6d6764, 0xffcbc1b6, 0xff9e968f, 0xff847d78,
//0xffcdc3b8, 0xff6a686a, 0xff19171c, 0xffe4dfaf, 0xfffef587, 0xffc0a920, 0xff504d4e, 0xffe8e7e8, 0xff4d4c4f, 0xff16151b,
//0xff16131a, 0xffa49311, 0xfffbe923, 0xffe4d764, 0xff444241, 0xff5a585b, 0xff7d7b7e, 0xff1a181c, 0xff23212b, 0xff9d9129,
//0xff3a321f, 0xffababad, 0xffffffff, 0xffffffff, 0xffffffff, 0xff666466, 0xffa79f97, 0xff403e42, 0xffffffff, 0xfffefefe,
//0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffc1c2c3, 0xff655e5c, 0xffe6dccf, 0xffe4d9cd, 0xffe2d7cb, 0xffe8ded2,
//0xff726c67, 0xff524f49, 0xff97936f, 0xff3a3632, 0xffc5bcb2, 0xffdfd4c8, 0xffe3d8cd, 0xff3d3a3a, 0xffdacfc3, 0xff3c383a,
//0xffbdb4aa, 0xff686261, 0xff19171b, 0xffcdc789, 0xfffffde9, 0xfff1e36f, 0xff504822, 0xff1a171b, 0xff17141b, 0xff37331a,
//0xffd3c627, 0xfffff252, 0xfffbeb49, 0xffd6cd7f, 0xff29272b, 0xff1a181c, 0xff1a181c, 0xff19171b, 0xff1f1d1c, 0xffa09020,
//0xff23232e, 0xffe2e1e2, 0xffffffff, 0xffffffff, 0xff6d6d6f, 0xff99938e, 0xffa09890, 0xff838284, 0xffffffff, 0xffffffff,
//0xffffffff, 0xffffffff, 0xffffffff, 0xfffefefe, 0xffffffff, 0xff636163, 0xffbab1a7, 0xffded4c8, 0xffddd3c7, 0xff534e53,
//0xff7d7725, 0xffffffd1, 0xfffef47d, 0xffe6db55, 0xff565134, 0xff9e9694, 0xffe5dacd, 0xffd2c8bd, 0xff5b5655, 0xffbcb3aa,
//0xff363234, 0xffb5aca4, 0xff1a181c, 0xffa59f62, 0xfff8f3c5, 0xff8d864b, 0xffd7ca62, 0xffbcb036, 0xff9e941d, 0xff6f6717,
//0xff6a663f, 0xffaeab97, 0xfffffacc, 0xffbfbb9e, 0xff5c595c, 0xff1c1a1e, 0xff19171b, 0xff312f35, 0xff615a1d, 0xff403a19,
//0xff69676b, 0xffffffff, 0xfffbfafb, 0xff7e7d7f, 0xff9a938e, 0xffb7afa6, 0xff6c6561, 0xffcdcdce, 0xffffffff, 0xffffffff,
//0xffffffff, 0xffffffff, 0xffffffff, 0xfffefefe, 0xffffffff, 0xffe2e2e2, 0xff5a5556, 0xffe6dbce, 0xff7f797a, 0xff6d6413,
//0xfffff02c, 0xffedd933, 0xffb59d25, 0xffbfb228, 0xffe7d730, 0xff605b2d, 0xff605a5c, 0xffe8ddd0, 0xff98908a, 0xff756f6b,
//0xff87807b, 0xff847c78, 0xff18161b, 0xff736f47, 0xfff2e891, 0xff242117, 0xff776f24, 0xffd4c626, 0xffecdb28, 0xffbfb224,
//0xff544d19, 0xff13121b, 0xff646265, 0xffadaba4, 0xff777678, 0xffeeedee, 0xff92919c, 0xff4d4928, 0xffa19521, 0xff181517,
//0xfff7f6f7, 0xfff3f3f3, 0xff444246, 0xffbab1a9, 0xff857e79, 0xffd2c9be, 0xff595453, 0xfffcfcfc, 0xffffffff, 0xffffffff,
//0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffabaaac, 0xff585453, 0xff302c21, 0xffe6db55,
//0xfffef8c6, 0xffe3d04b, 0xff3e3a2a, 0xff2f2c23, 0xff7d7628, 0xffcbbc19, 0xff58534f, 0xff575251, 0xffd4cabf, 0xff413e3e,
//0xff8c8480, 0xff423d3e, 0xff292629, 0xff47442b, 0xfff3ea90, 0xff80761d, 0xfff8e60c, 0xffe2d548, 0xfffbeb3d, 0xfff9e92e,
//0xffefdf25, 0xff847b24, 0xff1e1b1a, 0xff2a272a, 0xff252218, 0xff393418, 0xff958b26, 0xffecdc28, 0xff2c2919, 0xffa3a2a5,
//0xffdededf, 0xff514f50, 0xffd7cdc4, 0xffada59c, 0xffaba39c, 0xffcbc1b7, 0xff737171, 0xffffffff, 0xffffffff, 0xffffffff,
//0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xfffefefe, 0xffffffff, 0xff7d7d7e, 0xff564f0c, 0xfffaf291,
//0xfffdf59e, 0xfffbed44, 0xfff2e43c, 0xffc1b74d, 0xff4a472e, 0xff433e1e, 0xff534f3f, 0xff423d41, 0xff312d32, 0xff585354,
//0xff111016, 0xff221f24, 0xff1c1a1d, 0xff1a181a, 0xffdcd15f, 0xffe4d52a, 0xffcdc026, 0xff26242d, 0xffc2ba77, 0xfffff250,
//0xfffae82d, 0xffe1d121, 0xff898127, 0xff211e1c, 0xffa1951d, 0xfffcf5a0, 0xfff4e763, 0xff4b461f, 0xff535259, 0xff908f92,
//0xff696564, 0xffd8cec3, 0xffaca49b, 0xff7e7875, 0xffcac1b7, 0xffaca39b, 0xff9c9b9d, 0xffffffff, 0xffffffff, 0xffffffff,
//0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xff5e5c5f, 0xff938813, 0xffffed17,
//0xffe5d518, 0xffc0ae24, 0xffc9bb22, 0xffdccc1d, 0xfffeeb17, 0xff544f19, 0xffc9bf5f, 0xfff6efa1, 0xffbdb888, 0xff989371,
//0xff8f8b66, 0xff676450, 0xff36332c, 0xff1b171b, 0xff776e20, 0xfffef05f, 0xfffff344, 0xff504a1f, 0xff19171e, 0xff8a866a,
//0xfff6ee8c, 0xfffaee63, 0xffe2d338, 0xffa1951b, 0xffdace4b, 0xffefe79b, 0xff5d561e, 0xff232024, 0xff6b6a6d, 0xff8f8a86,
//0xffe5d9ce, 0xff978f88, 0xff686462, 0xffa59d96, 0xffdcd1c6, 0xff65605e, 0xffd0d0d1, 0xffffffff, 0xffffffff, 0xffffffff,
//0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xff3f3d40, 0xffc0b546, 0xfffffab0,
//0xffd7c138, 0xff352f22, 0xff2f2b21, 0xff534d24, 0xff807720, 0xff4a441d, 0xffe6d625, 0xfff2e223, 0xffe7d726, 0xff978c20,
//0xff39341e, 0xff6b641f, 0xffbda71e, 0xffd9bd1f, 0xff6a5c1c, 0xffdfd264, 0xfffdef67, 0xffe8d935, 0xff2b281b, 0xff100e16,
//0xff100e14, 0xff3b392f, 0xff6d6629, 0xfffbe812, 0xffd5c736, 0xff5e5719, 0xff241d1b, 0xff383538, 0xffa59e97, 0xffcec4b9,
//0xff75706c, 0xff4b4848, 0xff8f8983, 0xffb7afa7, 0xffd5cbc0, 0xff3e3c40, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff,
//0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xff504e51, 0xffcab420, 0xfffef153,
//0xfff9eb55, 0xffe1d64c, 0xffd3c41e, 0xff8a801e, 0xff191719, 0xff4e4820, 0xffa59b2e, 0xff7c7527, 0xff2d291c, 0xff18161b,
//0xff2a271b, 0xffd4c728, 0xfffaef62, 0xfffdf594, 0xfff1e558, 0xff726c3b, 0xfffffcb6, 0xffeedd37, 0xffbeb232, 0xff151317,
//0xff85826d, 0xffebe16e, 0xffecdb1e, 0xffa39824, 0xff2e2c1d, 0xff211d1c, 0xff8f7120, 0xff3c383b, 0xff76706b, 0xff565151,
//0xffc1b8b0, 0xffcbc0b7, 0xff706a68, 0xffddd3c7, 0xff5e5956, 0xffaeadaf, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff,
//0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffa3a2a4, 0xff6c5d1d, 0xffa19120,
//0xff9f931f, 0xff988d1f, 0xff807727, 0xff484429, 0xff5d5c5e, 0xff737177, 0xff241f1d, 0xff755c23, 0xff3e381b, 0xff19171b,
//0xff302c1b, 0xffeade66, 0xfffdfdfd, 0xfffdfdff, 0xfffff9a8, 0xffbaae33, 0xffccc9af, 0xfff7efb0, 0xffe0d033, 0xffddd048,
//0xffe0d677, 0xffbfb124, 0xff5f5924, 0xff26211d, 0xff6c5821, 0xff342c1d, 0xffcba721, 0xff372c1e, 0xff746f6f, 0xffe5dace,
//0xffaea69d, 0xff605c5a, 0xffded5ca, 0xffcbc1b6, 0xff403c3f, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff,
//0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xfffefefe, 0xffffffff, 0xffb6b6bb, 0xff969497,
//0xff918f8f, 0xff9a999d, 0xffacacb3, 0xffcbcbce, 0xffffffff, 0xff807b71, 0xffa58d24, 0xffe3ce31, 0xfff1e13a, 0xff8f841b,
//0xff564e1e, 0xfff9ec5c, 0xfffdf8c3, 0xfffbf6c9, 0xfffbf5c0, 0xfff2e240, 0xff938c4a, 0xffffffda, 0xffe5db78, 0xff8f8521,
//0xff49421c, 0xff4c461f, 0xff80761e, 0xffad9524, 0xff43381f, 0xff3c351b, 0xfff4da17, 0xff977925, 0xff5d5a5f, 0xff807a76,
//0xffa69f98, 0xffaaa29a, 0xffd4cac0, 0xff827b76, 0xffbcbbbd, 0xffffffff, 0xfffefefe, 0xffffffff, 0xffffffff, 0xffffffff,
//0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff,
//0xffffffff, 0xffffffff, 0xffffffff, 0xfffcfcfc, 0xff494852, 0xffab8f2a, 0xffead942, 0xfffefad1, 0xfffdfdf8, 0xfffaed69,
//0xffcdb722, 0xffe8d62e, 0xfffbed61, 0xfffbee6d, 0xfffbee7d, 0xfffbeb46, 0xffc2b428, 0xff4c4629, 0xff524b22, 0xff938824,
//0xffddcd28, 0xffd3c522, 0xffc3b523, 0xff443e1e, 0xff13121c, 0xff82771b, 0xffffef20, 0xffd4be20, 0xff4a4240, 0xffc3bab0,
//0xff56514f, 0xff9f9792, 0xffdbd1c5, 0xff525052, 0xfff5f5f5, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff,
//0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff,
//0xffffffff, 0xfffefefe, 0xffffffff, 0xff777577, 0xff0d0c18, 0xffc4ac32, 0xffffffc7, 0xffa0a6a4, 0xffa0b39d, 0xfff6ea97,
//0xffead926, 0xffd8c924, 0xfff9e937, 0xfffbea35, 0xfffae932, 0xfffcec33, 0xfff0df25, 0xffb0a41f, 0xff9f973a, 0xff847c30,
//0xff776e1d, 0xffc8ba22, 0xffa19723, 0xff2a261e, 0xff12111b, 0xffccbe1e, 0xfffcea2e, 0xffe8d918, 0xff4c401e, 0xff484447,
//0xffbfb7ae, 0xffe9ded1, 0xff454040, 0xffc4c3c4, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff,
//0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff,
//0xfffefefe, 0xffffffff, 0xff8a898b, 0xff151317, 0xff12101b, 0xffa89b29, 0xfffffb91, 0xffceca7e, 0xff157688, 0xff44756b,
//0xffe1cb24, 0xffd7c826, 0xfff0df28, 0xfffbe92a, 0xfffbea1f, 0xffe2d214, 0xff7e793c, 0xffded894, 0xffecece0, 0xfff4f3e7,
//0xffb5aa39, 0xff5d571c, 0xffada22a, 0xff7a6627, 0xff554820, 0xffdacb23, 0xfffbeb4f, 0xfff4e222, 0xff70621b, 0xff908986,
//0xffe3d8cc, 0xff5f5956, 0xffa7a6a7, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff,
//0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xfffefefe,
//0xffffffff, 0xffbcbcbe, 0xff241e18, 0xff1c1a1c, 0xff11101c, 0xff95891b, 0xfffff854, 0xffb9b155, 0xff24899c, 0xff07a9ba,
//0xff25574d, 0xffdecb25, 0xffd4c525, 0xfffae828, 0xfff3e216, 0xff686335, 0xffeee587, 0xffddc62f, 0xfffcee55, 0xfffbf06b,
//0xfffdf28a, 0xff998f2b, 0xff514723, 0xff655325, 0xffa68b25, 0xffd4c424, 0xfffbec5a, 0xfff7e841, 0xff86781c, 0xff696361,
//0xff8a827d, 0xff807e81, 0xffffffff, 0xfffefefe, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff,
//0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xfffefefe,
//0xfff1f1f2, 0xff4c433c, 0xffb49723, 0xffac9f12, 0xff544d16, 0xff57501d, 0xffdcc81c, 0xff617c76, 0xff17aebd, 0xff00616e,
//0xff56562a, 0xffb9ac2f, 0xffb4a019, 0xfff3e023, 0xff79701f, 0xffddcf2d, 0xff655e23, 0xff352d15, 0xffe7dd68, 0xfffefce7,
//0xfffaf2a0, 0xffffee2f, 0xffbaad2a, 0xff463f20, 0xffaa8e25, 0xffdccd25, 0xfffbee62, 0xfff8ea4d, 0xff94861e, 0xff2c2828,
//0xff979798, 0xfffdfdfd, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff,
//0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff,
//0xff797779, 0xff7b651d, 0xffecdd4d, 0xfffffbd3, 0xfffcf057, 0xffd4c418, 0xff6d7b60, 0xff28adbb, 0xff008694, 0xff13656f,
//0xff317c84, 0xff319ca7, 0xff369da8, 0xff70772c, 0xff645c1b, 0xff8b8124, 0xff2d2a24, 0xffe1d873, 0xfffbed5e, 0xfffbec35,
//0xfff7e948, 0xfff8ea50, 0xfffae81a, 0xffeddc24, 0xff6c641f, 0xff8f8521, 0xfff6eb75, 0xfffaed5b, 0xff9a8919, 0xff5d5b5a,
//0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff,
//0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffc3c2c3,
//0xff171210, 0xffb09d25, 0xfffbf8da, 0xfff7f1c9, 0xffebe18f, 0xff7e8a5e, 0xff2ca7b9, 0xff007a89, 0xff414b28, 0xffc1ae21,
//0xffdfc913, 0xff556e39, 0xff007485, 0xff626a2a, 0xff413c1e, 0xff3e3a24, 0xffdcd268, 0xffa89d35, 0xff87750f, 0xfff9ec68,
//0xfffdf8bb, 0xfffaee64, 0xfffae924, 0xfffbe91f, 0xfffff55b, 0xfff5e647, 0xfff9f193, 0xfffbf286, 0xff9b8915, 0xff6f6b6b,
//0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff,
//0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xfff2f2f2, 0xff3a383b,
//0xff17151b, 0xff8e8222, 0xff808568, 0xff6d9a93, 0xff7ea19b, 0xff28a8b7, 0xff007f8f, 0xff273427, 0xffcfbf24, 0xfffae92e,
//0xfff3e12a, 0xff4f7753, 0xff4d5523, 0xffe6d519, 0xff3e3920, 0xffab9f20, 0xff887f2b, 0xff1e1c1d, 0xff837f52, 0xfff7f0a3,
//0xfff7ea60, 0xfff1e037, 0xfff7e726, 0xfffbe90e, 0xfffbed52, 0xfffcf9e1, 0xfffdfdff, 0xfffaf17f, 0xff927e15, 0xff8b8888,
//0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff,
//0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xfffefefe, 0xffffffff, 0xffa2a1a3, 0xff27221d,
//0xff1a181a, 0xff29261d, 0xffc7b913, 0xff0a6c7b, 0xff01a0b1, 0xff008e9e, 0xff234137, 0xffeede29, 0xffe3d326, 0xffe1d029,
//0xfff8e72d, 0xffb9a923, 0xfff1df1d, 0xffcabb16, 0xff25221b, 0xff625b23, 0xff4d471a, 0xfff9eb4c, 0xfffffa7d, 0xfff2e12f,
//0xffbfaa1e, 0xff7c6522, 0xffbba51f, 0xffe2ce19, 0xfff2df0f, 0xfff7e62b, 0xfff8eb56, 0xffecd91c, 0xff856b1c, 0xffafadad,
//0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff,
//0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xfffefefe, 0xff3f3932, 0xffa89321,
//0xffada447, 0xff655d19, 0xff8a7e1e, 0xff838225, 0xff016b7a, 0xff037c88, 0xffab9f23, 0xfffbea2d, 0xfff9e82a, 0xffd0ba23,
//0xffcaba28, 0xfff0df1f, 0xffe5d41a, 0xffdacb1b, 0xff645b23, 0xff13111b, 0xff4f491d, 0xffaea220, 0xffbcad20, 0xff928021,
//0xff3f351c, 0xff606068, 0xff352e26, 0xff4b3e15, 0xff7a691c, 0xff93811d, 0xff95821a, 0xff79661a, 0xff4c3d26, 0xffdfdedf,
//0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff,
//0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xff848385, 0xff504216, 0xffe5d87a,
//0xfffefef9, 0xfffbf3a2, 0xfff4e32d, 0xffd7c025, 0xff7b6f1d, 0xff054a57, 0xff24645a, 0xfff9e82c, 0xfffae92a, 0xffe5d51e,
//0xff211e1e, 0xff887e23, 0xffc5b322, 0xffc6b724, 0xffaa8b29, 0xff11111b, 0xff1a181c, 0xff19171b, 0xff18161a, 0xff2f2d30,
//0xffb2b1b3, 0xffffffff, 0xfffcfcfc, 0xffb1b1b1, 0xff6b696c, 0xff4f4d50, 0xff5b5a5c, 0xff9d9c9d, 0xfff3f3f3, 0xffffffff,
//0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff,
//0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffe3e3e4, 0xff18161a, 0xff887324, 0xfff6eec2,
//0xfffcf6c6, 0xfffbf4b7, 0xfffaec66, 0xfff7e628, 0xffe1cb24, 0xffb09c1c, 0xff79731b, 0xfff5e423, 0xffeada21, 0xffb4a427,
//0xff0f0e1b, 0xff11101b, 0xff14121c, 0xff342c1f, 0xff513c1f, 0xff111117, 0xff525053, 0xffc9c8c9, 0xffffffff, 0xffffffff,
//0xffffffff, 0xfffefefe, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xfffefefe,
//0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff,
//0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xfffefefe, 0xff727073, 0xff19171b, 0xff675721, 0xfff4e15a,
//0xfffaeb42, 0xfffae93e, 0xfffae933, 0xfffae931, 0xfff2e124, 0xffb9a720, 0xff322d1c, 0xff625b1f, 0xffaa9827, 0xff776325,
//0xff15141b, 0xff1a181c, 0xff171519, 0xff0d0a0f, 0xff474649, 0xffc7c6c8, 0xfff8f8f8, 0xffffffff, 0xffffffff, 0xffffffff,
//0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff,
//0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff,
//0xffffffff, 0xfffefefe, 0xffffffff, 0xffffffff, 0xffffffff, 0xffdcdcdc, 0xff252326, 0xff1a181c, 0xff312a1d, 0xffd3c122,
//0xfff7e72d, 0xfff5e42d, 0xfff3e22d, 0xffecdb2d, 0xffd3c423, 0xffaf9f25, 0xff261f1d, 0xff15131a, 0xff141119, 0xff1a171a,
//0xff232125, 0xff302e32, 0xff626063, 0xffd0d0d1, 0xffffffff, 0xffffffff, 0xfffefefe, 0xffffffff, 0xffffffff, 0xffffffff,
//0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff,
//0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff,
//0xffffffff, 0xffffffff, 0xfffdfdfd, 0xffe0e0e1, 0xffb1b0b2, 0xff39373a, 0xff0a070c, 0xff0e0b10, 0xff0b0910, 0xff332e12,
//0xff797019, 0xff96891d, 0xff93831d, 0xff817219, 0xff716217, 0xff62511f, 0xff373233, 0xff525053, 0xff777679, 0xffa6a5a7,
//0xffc9c9ca, 0xfff1f1f1, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff,
//0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff,
//0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff,
//0xffffffff, 0xffffffff, 0xffffffff, 0xffe2e2e2, 0xffc0bfc0, 0xffbcbbbc, 0xffbcbcbd, 0xffbab9ba, 0xffb6b5b6, 0xffb4b3b4,
//0xffb4b3b5, 0xffb7b6b7, 0xffbfbfc0, 0xffd4d4d5, 0xffeeeeee, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff,
//0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff,
//0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff,
//0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff,
//0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff,
//0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xfffefefe, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff,
//0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff,
//0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff,
//0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff,
//0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff,
//0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff,
//0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff,
//0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff,
//0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff];
//
//int width = 50;
//int height = 50;
//
//Figure logo(){
//  list[list[Figure]] boxes;
//  boxes = for(i <- [0..height]){
//              append for(j <- [0..width]){
//                         append box(fillColor(LogoData[i*50+j]),lineWidth(0));
//      }
//  }
//  return grid(boxes,aspectRatio(1.0));
//}
//
//void renderLogo() {
//  render(logo());
//}
```

We can use it as follows:

``` rascal-figure
                import demo::vis::Logo;
render(logo());
```

will produce:

![Rascal logo](/images/logo1.png)

or as a screenshot:

![Screen shot](/images/Screenshot1.png)

### Interactive Box Height

**Synopsis.**

Control the height of a box with user input.

  - A text entry field to enter numbers.

  - A box, whose height is controlled by the numer entered in the text field.

**Examples.**

Here is a solution:

``` rascal
module demo::vis::Higher

//import vis::Figure;
//import vis::Render;
//import String;
//
//bool intInput(str s){
//  return /^[0-9]+$/ := s;
//}
//
//Figure higher(){
//  int H = 100;
//    return vcat( [ textfield("<H>", void(str s){H = toInt(s);}, intInput),
//                 box(width(100), vresizable(false), vsize(num(){return H;}), fillColor("red"))
//               ], shrink(0.5), resizable(false));
//}
```

The auxiliary function `intInput` checks that a strings consists solely of digits. Function `higher` can be understood
as follows:

  - A local variable `H` is used to maintain the current height.

  - It returns a vertical concatenation of two elements: a \[Rascal:textfield\] and a \[Rascal:box\].

  - The textfield has three arguments:
    
      - A string that is the initial value of the text field.
    
      - A call back function `void(str s){H = toInt(s);}` that is called when text entry is complete: argument `s` is
        the text entered and the effect is to convert that text to a number and assign it to `H`.
    
      - Function `intInput` that checks that only numbers are entered.
    
      - The box has
    
      - a fixed width
    
      - it is not vertically resizable.
    
      - It has a vertical size that that depends on an anonymous function `vsize(num(){return H;})` that returns the
        value of `H`.
    
      - Its color is red.

Rendering this figure:

``` rascal-figure
import demo::vis::Higher;
render(higher());
```

gives

![h1](/images/h1.png)

Unfortunately we cannot show the interaction here, so run this example from the `demo` directory and watch how the
height of the box changes when you enter a new number in the text field.

### My First Box

**Synopsis.**

Drawing a box in many variations.

**Examples.**

Drawing a red [box](/docs/Libraries#box) is as simple as this:

``` rascal-figure
import vis::Figure;
import vis::Render;
b = box(fillColor("red"));
render(b);
```

and it will look like this:

![Box 1](/images/b1.png) or rather, it will look like this:

![Screenshot 1](/images/Screenshot1.png)

Wow, the box fills the whole window\! So lets give our box a [size](/docs/Libraries#size):

``` rascal-figure
import vis::Figure;
import vis::Render;
b = box(fillColor("red"), size(200,100));
render(b);
```

and it will look like this:

![Box 2](/images/b2.png)

On screen however, it still fills the whole window as shown above. The lesson here is that size is to be taken as
**minimum size** (and probably we should rename `size` to `minSize` to emphasize this).

So how can we produce a box that does *not* fill the whole window? The answer is to define the size of the box
*relative* to its surroundings by using [shrink](/docs/Libraries#shrink):

``` rascal-figure
import vis::Figure;
import vis::Render;
b = box(fillColor("red"), shrink(0.5));
render(b);
```

which says: *I am a red box and I want to occupy 50% of the available space.* The result is:

![Screen shot 2](/images/Screenshot2.png)

Shrinking can also be limited to one dimension using [hshrink](/docs/Libraries#hshrink) or
[vshrink](/docs/Libraries#vshrink):

``` rascal-figure
import vis::Figure;
import vis::Render;
b = box(fillColor("red"), hshrink(0.5));
render(b);
```

which says:\_ I am a red box and I want to occupy 50% of the available space in the horizontal direction and 100% of the
available space in the vertical direction.\_ The result is:

![Screen shot 3](/images/Screenshot3.png)

Relative sizes can also be used when figures are nested.

``` rascal-figure
import vis::Figure;
import vis::Render;
b1 = box(fillColor("red"), hshrink(0.5));
b2 = box(b1, fillColor("yellow"), size(200,100));
render(b2);
```

![Box 5](/images/b5.png)

**Pitfalls.**

In the above examples we have consistently added the two imports:

``` rascal
import vis::Figure;
import vis::Render;
```

In other recipes and the Rascal documentation we omit these two imports to avoid cluttering our examples with irrelevant
details. Be aware that you will always need them when creating a visualisation.

### ParseTree

**Synopsis.**

Visualize a parse tree.

**Description.**

A parse tree is a (usually large) internal representation of a parsed text. In the rare situation that it is necessary
to read or inspect a parse tree, a visualization can be useful.

**Examples.**

We embark on visualizing parse trees for the language Exp:

``` rascal-shell
import demo::lang::Exp::Concrete::WithLayout::Syntax;
import ParseTree;
parse(#Exp, "1+2*3");
```

As can be seen, even for such a trivial example, the details in the parse tree representation become sizeable.

We can visualize it as follows:

``` rascal-figure
import demo::lang::Exp::Concrete::WithLayout::Syntax;
import ParseTree;
import vis::Figure;
import vis::ParseTree;
import vis::Render;
render(visParsetree(parse(#Exp, "1+2*3")));
```

With as result:

![t1](/images/t1.png)

The figure is interactive (not available here):

  - Rectangles with blue text are terminal symbols.

  - Little circles represent non-terminals: hovering over them shows the corresponding grammar rule.

  - Little grey rectangles represent layout: hovering over them also shows the corresponding lexical rule.

<!-- end list -->

  - A dense, structured, representation of a parse tree that provides extra information via interaction.

<!-- end list -->

  - This visualization does not scale to huge trees.

### Playing With Properties

**Synopsis.**

Illustrate the effect of various figure properties.

**Examples.**

Here is an ellipse with minimum size 200x300 that occupies 80% of the available space:

``` rascal-figure
                e = ellipse(size(200,100), shrink(0.8));
render(e);
```

![e1](/images/e1.png)

(we add the shrink to leave some space for thick lines and shadows below).

Change the style of its border using [lineStyle](/docs/Libraries#linestyle):

``` rascal-figure
                e = ellipse(size(200,100), shrink(0.8), lineStyle("dot"));
render(e);
```

![e2](/images/e2.png)

Change the thickness of its border using [lineWidth](/docs/Libraries#linewidth):

``` rascal-figure
                e = ellipse(size(200,100), shrink(0.8), lineWidth(5));
render(e);
```

![e3](/images/e3.png)

Change the color of its border using [lineColor](/docs/Libraries#linecolor):

``` rascal-figure
                e = ellipse(size(200,100), shrink(0.8), lineColor("blue"));
render(e);
```

![e4](/images/e4.png)

Change the color of its area using [fillColor](/docs/Libraries#fillcolor):

``` rascal-figure
                e = ellipse(size(200,100), shrink(0.8), fillColor("yellow"));
render(e);
```

![e5](/images/e5.png)

Add a shadow using [shadow](/docs/Libraries#shadow):

``` rascal-figure
                e = ellipse(size(200,100), shrink(0.8), shadow(true));
render(e);
```

![e6](/images/e6.png)

Add the color of the shadow using [shadowColor](/docs/Libraries#shadowcolor):

``` rascal-figure
                e = ellipse(size(200,100), shrink(0.8), shadow(true), shadowColor("grey"));
render(e);
```

![e7](/images/e7.png)

Finally, enjoy the grande finale:

``` rascal-figure
                e = ellipse(size(200,100), shrink(0.8), lineStyle("dot"), lineWidth(5), lineColor("blue"), fillColor("yellow"), shadow(true), shadowColor("grey"));
render(e);
```

![e8](/images/e8.png)
