---
title: Word Count
---

#### Synopsis

Counting words in strings.

#### Examples

The purpose of WordCount is to count the number of _words_ in a list of lines (strings).
A word is here defined as one or more letters (lowercase or uppercase), digits and the underscore character (`_`).

We split the problem in two parts:

*  Count the words in a single line. We explore three ways to do this in an imperative ([count in line1](../../../Recipes/Common/WordCount/CountInLine1/index.md)], [count in line2](../../../Recipes/Common/WordCount/CountInLine2/index.md))
  and a functional style ([count in line3](../../../Recipes/Common/WordCount/CountInLine3/index.md)).
*  Next we apply the single line counter to all the lines.


`wordCount` is a function with two arguments:
*  A list of lines.
*  A function that returns the number of words in a line.


The main task of `wordCount` is to loop over all lines and to add the word counts per line.



```rascal 

module demo::common::WordCount::WordCount

import demo::common::WordCount::CountInLine1;
import demo::common::WordCount::CountInLine2;
import demo::common::WordCount::CountInLine3;
import demo::common::WordCount::Jabberwocky;

import String;
import List;


int wordCount(list[str] input, int (str s) countInLine)
{
  count = 0;
  for (str line <- input){      ❶  
     count += countInLine(line);      ❷  
  }
  return count;
}


int wordCountReduce(list[str] input, int (str s) countInline)
  = (0 | it + countInline(line) | str line <- input);


int wordCountMapSum(list[str] input, int (str s) countInLine)
  = sum(mapper(input, countInLine));
test bool tstWordCount2() = wordCount(Jabberwocky, countInLine1) == wordCount(Jabberwocky, countInLine3);

test bool tstWordCount3() = wordCount(Jabberwocky, countInLine2) == wordCount(Jabberwocky, countInLine3);

test bool tstWordCount4(str txt) {
    lines = split(txt, "\n");
    return wordCount(lines, countInLine1) == wordCount(lines, countInLine2);
}    
    
test bool tstWordCount5(str txt) {
    lines = split(txt, "\n"); 
    return wordCount(lines, countInLine1) == wordCount(lines, countInLine3); 
}

    
test bool tstWordCount6(str txt) {
    lines = split(txt, "\n");  
    return wordCount(lines, countInLine2) == wordCount(lines, countInLine3);
}

```

                
* ❶  An [enumerator](../../../Rascal/Expressions/Comprehensions/Enumerator/index.md) is used to generated all the lines in the list of lines.
* ❷  The argument function `countInLine` is applied to count the number of words in each line.

Let's now do some experiments using the [Jabberwocky](../../../Recipes/Common/WordCount/Jabberwocky/index.md) poem by Lewis Carrol as input.


```rascal-shell 
rascal>import demo::common::WordCount::WordCount;
ok
rascal>import demo::common::WordCount::CountInLine1;
ok
rascal>import demo::common::WordCount::CountInLine2;
ok
rascal>import demo::common::WordCount::CountInLine3;
ok
rascal>import demo::common::WordCount::Jabberwocky;
ok
rascal>wordCount(Jabberwocky, countInLine1);
int: 216
rascal>wordCount(Jabberwocky, countInLine2);
int: 216
rascal>wordCount(Jabberwocky, countInLine3);
int: 216
```
It is satisfactory that the three ways of counting words all yield the same result.

If you are into one-liners, we can include everything you learned from this example
in the following alternative `wordCount2` function:

```rascal-shell ,continue
rascal>int wordCount2(list[str] lines) = (0 | it + (0 | it + 1 | /\w+/ := line) | str line <- lines);
int (list[str]): function(|prompt:///|(0,94,<1,0>,<1,94>))
rascal>wordCount2(Jabberwocky);
int: 216
```
The function body contains two nested [reducers](../../../Rascal/Expressions/Reducer/index.md).
The inner reducer counts the number of words in a line, the outer reducer accumulates all line word counts.


```rascal-shell ,continue
```



