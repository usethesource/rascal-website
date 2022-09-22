---
title: CountInLine1
---

#### Synopsis

Count words in a line.

#### Examples

We count words using a regular expression match in a for loop.
Each time that the pattern `/[a-zA-Z0-9_]+/` matches, the body of the loop is executed
and `count` is incremented.

```rascal

//START
// tag::module[]
module demo::common::WordCount::CountInLine1



int countInLine1(str S){
  int count = 0;
  for(/[a-zA-Z0-9_]+/ := S){
       count += 1;
  }
  return count;
}
test bool tstCountInLine1b() = countInLine1("Jabberwocky by Lewis Carroll") == 4;

```

                
Let's try it:

```rascal-shell
rascal>import demo::common::WordCount::CountInLine1;
ok
rascal>countInLine1("Jabberwocky by Lewis Carroll");
int: 4
```


