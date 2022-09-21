---
title: Word Replacement
---

#### Synopsis

Replace words in a string.

#### Syntax

#### Types

#### Function

#### Description

Suppose you are a book editor and want to ensure that all chapter
and section titles are properly capitalized. Here is how to do this. 

#### Examples


```rascal

//START
// tag::module[]
module demo::common::WordReplacement

import String;

str capitalize(str word) // <1>
{
   if(/^<letter:[a-z]><rest:.*$>/ := word){
     return toUpperCase(letter) + rest;
   } else {
     return word;
   }
}
test bool capitalize2() = capitalize("rascal") == "Rascal";

// Capitalize all words in a string

// Version 1: capAll1: using a while loop

str capAll1(str S) // <2>
{
 result = "";
 while (/^<before:\W*><word:\w+><after:.*$>/ := S) { 
    result = result + before + capitalize(word);
    S = after;
  }
  return result;
}

test bool tstCapAll1() =  capAll1("turn this into a title") == "Turn This Into A Title";

// Version 2: capAll2: using visit

str capAll2(str S) // <3>
{
   return visit(S){
   	case /^<word:\w+>/i => capitalize(word)
   };
}
// end::module[]

test bool tstCapAll2() = capAll2("turn this into a title") == "Turn This Into A Title";

```

                
<1> We start by introducing a helper function `capitalize` that does the actual capitalization of a single word.
    See [Regular Pattern](/docs//Rascal/Patterns/Regular) for details about regular expression patterns.
    Next we give two versions of a capitalization functions for a sentence:

<2> `capAll1` uses a while loop to find subsequent words and to replace them by a capitalized version.
<3> `capAll2` uses a [Rascal:Visit] to visit all words in the sentence and replace them by a capitalized version.


Here are some examples:


```rascal-shell
rascal>import demo::common::WordReplacement;
ok
rascal>capitalize("rascal");
str: "Rascal"
rascal>capAll1("turn this into a capitalized title")
str: "Turn This Into A Capitalized Title"
rascal>capAll2("turn this into a capitalized title")
str: "Turn This Into A Capitalized Title"
```

#### Benefits


