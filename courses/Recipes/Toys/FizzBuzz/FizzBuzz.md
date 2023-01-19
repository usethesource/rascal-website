---
title: FizzBuzz
---

#### Synopsis

We solve a well-known job interview puzzle.

#### Syntax

#### Types

#### Function

#### Description

[FizzBuzz](http://www.codinghorror.com/blog/2007/02/why-cant-programmers-program.html) is a well-known puzzle that is used at job interviews.
It is defined as follows:

  Write a program that prints the numbers from 1 to 100. 
  But for multiples of 3 print "Fizz" instead of the number and for the multiples of 5 print "Buzz". 
  For numbers which are multiples of both 3 and 5 print "FizzBuzz".

Surprisingly, many candidates fail to pass this test.
Solutions to FizzBuzz in various languages are available [here](http://www.geekschool.org/programming/fizzbuzz/).

#### Examples

Here are a few possible Rascal solutions:
```rascal-commands
import IO; 

@synopsis{fizzbuzz1 revolves around ternary conditions}
void fizzbuzz1() {
   for (int n <- [1 .. 101]){
      fb = ((n % 3 == 0) ? "Fizz" : "") + ((n % 5 == 0) ? "Buzz" : "");
      println((fb == "") ?"<n>" : fb);
   }
}

@synopsis{fizzbuzz2 embraces pattern matching and the switch statement}
void fizzbuzz2() {
  for (n <- [1..101]) 
    switch(<n % 3 == 0, n % 5 == 0>) {
      case <true,true>  : println("FizzBuzz");
      case <true,false> : println("Fizz");
      case <false,true> : println("Buzz");
      default: println(n);
    }
}
 
@synopsis{fizzbuzz3 uses classical structured if-then-else} 
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

```rascal-shell,continue
fizzbuzz1();
```

#### Benefits

#### Pitfalls

