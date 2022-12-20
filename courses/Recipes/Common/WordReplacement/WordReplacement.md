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

```rascal-commands
import String;

str capitalize(str word:/^<letter:[a-z]><rest:.*>/) 
  = "<toUpperCase(letter)><rest>";

default str capitalize(str word) = word;

test bool capitalize1() = capitalize("1") == "1";
test bool capitalize2() = capitalize("rascal") == "Rascal";

@synopsis{Version 1: capAll1: using a while loop}
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

@synopsis{Version 2: capAll2: using visit}
str capAll2(str S) // <3>
{
   return visit(S){
   	case /^<word:\w+>/i => capitalize(word)
   };
}

test bool tstCapAll2() = capAll2("turn this into a title") == "Turn This Into A Title";
```

                
<1> We start by introducing a helper function `capitalize` that does the actual capitalization of a single word.
    See [Regular Pattern]((Rascal:Patterns-Regular)) for details about regular expression patterns.
    Next we give two versions of a capitalization functions for a sentence:

<2> `capAll1` uses a while loop to find subsequent words and to replace them by a capitalized version.
<3> `capAll2` uses a ((Rascal:Statements-Visit)) to visit all words in the sentence and replace them by a capitalized version.


Here are some examples:

```rascal-shell,continue
capitalize("rascal");
capAll1("turn this into a capitalized title")
capAll2("turn this into a capitalized title")
```

#### Benefits

#### Pitfalls

