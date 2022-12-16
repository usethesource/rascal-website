---
title: Word Count
---

#### Synopsis

Counting words in strings.

#### Syntax

#### Types

#### Function

#### Description

#### Examples

The purpose of WordCount is to count the number of _words_ in a list of lines (strings).
A word is here defined as one or more letters (lowercase or uppercase), digits and the underscore character (`_`).

We split the problem in two parts:

*  Count the words in a single line. We explore three ways to do this in both imperative 
  and a functional styles.
*  Next we apply the single line counter to all the lines.


`wordCount` is a function with two arguments:
*  A list of lines.
*  A function that returns the number of words in a line.


The main task of `wordCount` is to loop over all lines and to add the word counts per line.

Here we see a number of alternative definitions of counting words in a single line,
with some tests and then the `wordCount` function is used to count entire text.

```rascal-commands
import String;
import List;

int countInLine1(str s) {
  int count = 0;
  for (/[a-zA-Z0-9_]+/ := s) {
    count += 1;
  }
  return count;
}

test bool tstCountInLine1a() = countInLine1("") == 0;
test bool tstCountInLine1b() = countInLine1("Jabberwocky by Lewis Carroll") == 4;

int countInLine2(str S) {
  int count = 0;

  // \w matches any word character
  // \W matches any non-word character
  // <...> are groups and should appear at the top level.
  while (/^\W*\w+<rest:.*$>/ := S) {
    count += 1;
    S = rest;
  }
  return count;
}

test bool tstCountInLine2a() = countInLine2("") == 0;

// this is the simplest solution:
int countInLine3(str s) = (0 | it + 1 | /\w+/ := s);

test bool tstCountInLine3a() = countInLine3("") == 0;
test bool tstCountInLine3b() = countInLine3("Jabberwocky by Lewis Carroll") == 4;

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


int wordCount(list[str] input, int (str s) countInLine) {
  count = 0;
  for (str line <- input){ // <1>
     count += countInLine(line); // <2>
  }
  return count;
}

int wordCountReduce(list[str] input, int (str s) countInline)
  = (0 | it + countInline(line) | str line <- input);

int wordCountMapSum(list[str] input, int (str s) countInLine)
  = sum(mapper(input, countInLine));


test bool tstWordCount1() = wordCount(Jabberwocky, countInLine1) == wordCount(Jabberwocky, countInLine2);
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

<1> An [enumerator]((Rascal:Boolean-Enumerator)) is used to generated all the lines in the list of lines.
<2> The argument function `countInLine` is applied to count the number of words in each line.

Let's now do some experiments using the Jabberwocky poem by Lewis Carrol as input.

```rascal-shell,continue
wordCount(Jabberwocky, countInLine1);
wordCount(Jabberwocky, countInLine2);
wordCount(Jabberwocky, countInLine3);
```
It is satisfactory that the three ways of counting words all yield the same result.

If you are into one-liners, we can include everything you learned from this example
in the following alternative `wordCount2` function:
```rascal-shell,continue
int wordCount2(list[str] lines) = (0 | it + (0 | it + 1 | /\w+/ := line) | str line <- lines);
wordCount2(Jabberwocky);
```
The function body contains two nested [reducers]((Rascal:Expressions-Reducer)).
The inner reducer counts the number of words in a line, the outer reducer accumulates all line word counts.

And this is the simplest solution in Rascal, where the nesting of reducers is flattened to
the combination of two generators, the first iterates over the lines and the second over the words in each line:
```rascal-shell-continue
int wordCount3(list[str] lines) = (0 | it + 1 | line <- lines, /\w+/ := line);
wordCount3(Jabberwocky);
```

#### Benefits

#### Pitfalls

