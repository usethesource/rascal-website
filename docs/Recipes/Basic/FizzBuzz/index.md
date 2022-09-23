---
title: FizzBuzz
---

#### Synopsis

We solve a well-known job interview puzzle.

#### Description

[FizzBuzz](http://www.codinghorror.com/blog/2007/02/why-cant-programmers-program.html) is a well-known puzzle that is used at job interviews.
It is defined as follows:

  Write a program that prints the numbers from 1 to 100. 
  But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". 
  For numbers which are multiples of both three and five print "FizzBuzz".

Surprisingly, many candidates fail to pass this test.
Solutions to FizzBuzz in various languages are available [here](http://www.geekschool.org/programming/fizzbuzz/).

#### Examples

Here are a few possible Rascal solutions:

```rascal

module demo::basic::FizzBuzz

import IO;


void fizzbuzz1() {
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
    if (n % 3 == 0) {
      print("Fizz");
    }
    if (n % 5 == 0) {
      print("Buzz");
    } else if (n % 3 != 0) {
      print(n);
    }
    println("");
  }
}

```


```rascal-shell
rascal>import demo::basic::FizzBuzz;
ok
rascal>fizzbuzz();
```
:::danger
Rascal code execution failed (unexpectedly) during compilation of this documentation.
<pre>
|prompt:///|(0,8,<1,0>,<1,8>): Undeclared variable: fizzbuzz
Advice: |http://tutor.rascal-mpl.org/Errors/Static/UndeclaredVariable/UndeclaredVariable.html|
</pre>
:::

```rascal-shell
ok
```


