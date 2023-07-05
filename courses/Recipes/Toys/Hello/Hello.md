---
title: Hello
---

The "Hello" example shows where to put your code such that it can do _something_. In this
case all we do is print `Hello World...`. After you know where to put code such that it
can be executed, you can replace the slightly silly example with more useful things.

##  `hello` on command line, a.k.a. ((RascalShell))

The place to get Rascal code executed _immediately_ is the ((RascalShell)) prompt.
[Here]((GettingStarted)) is how to get it started.

When you have it up and running, it shows the prompt `rascal>` that indicates that Rascal is ready for our input. 

Next, we import the library module [IO]((Library:module:IO)) since we will require a function from that library. Rascal responds with the feedback `ok` so we know that all went well. Now we can call `println` and proudly observe our first Rascal output:
```rascal-shell
import IO;
println("Hello world, this is my first Rascal program");
```

##  `hello` as function 

As the command above, a piece of code is not _reusable_. To be able to use some code again and 
again, the best way is to wrap it in a ((Declarations-Function)), and then call it:

```rascal-shell
import IO;
void hello() {
   println("Hello world, this is my first Rascal program");
}
```

When you type in a command and continue on a new line 
the Rascal systems prompts you with `>>>>>>>` to 
indicate that more input is needed. 

Don't get scared by 
the `void (): function(|prompt:///|(0,76,<1,0>,<3,1>))` that you get back 
when typing in the hello function. The first 
`void ()` part says the result is a function that takes 
no arguments and 
returns nothing, and the second part 
`function(...)` is a simplified print-out of the function-as-a-value 
that elides all of the details of how functions are represented in memory.

Finally, we call the `hello` function and we do this
twice to make point:
```rascal-shell,continue
hello()
hello()
```

##  `hello` in a module 

To have the `hello` function also for the future and to let it be used by others,
we will place it in a file. A Rascal file is called a "module":

```rascal
module demo::basic::Hello

import IO;

void hello() {
   println("Hello world, this is my first Rascal program!");
}
```

This module should be placed in `<project dir>/src/demo/basic/Hello.rsc`.

Using this `Hello` module is now simple:

```rascal-shell
import demo::basic::Hello;
hello();
```

The `hello` function is by default visible outside the `Hello` module.
We could further specify this by writing `public void hello() { ... }`.

Restricting visibility to the module itself can be achieved by adding the keyword `private`
to the definition of `hello`. When other modules `import Hello;`, they would not be able 
to invoke this `private` `hello()` function. 

#### Benefits

* ((println)) is a simple function that renders a string to the output stream
* The ((Values-String)) constants you pass to ((println)) may contain entire string templates with automatic indentation

#### Pitfalls

* Don't forget to import the ((module:IO)) module.
```rascal-shell,errors
println("I think I forgot to import the IO module...")
```
