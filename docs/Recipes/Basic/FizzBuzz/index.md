---
title: FizzBuzz
sidebar_position: 6
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
rascal>fizzbuzz1();
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
16
17
Fizz
19
Buzz
Fizz
22
23
Fizz
Buzz
26
Fizz
28
29
FizzBuzz
31
32
Fizz
34
Buzz
Fizz
37
38
Fizz
Buzz
41
Fizz
43
44
FizzBuzz
46
47
Fizz
49
Buzz
Fizz
52
53
Fizz
Buzz
56
Fizz
58
59
FizzBuzz
61
62
Fizz
64
Buzz
Fizz
67
68
Fizz
Buzz
71
Fizz
73
74
FizzBuzz
76
77
Fizz
79
Buzz
Fizz
82
83
Fizz
Buzz
86
Fizz
88
89
FizzBuzz
91
92
Fizz
94
Buzz
Fizz
97
98
Fizz
Buzz
ok
```


