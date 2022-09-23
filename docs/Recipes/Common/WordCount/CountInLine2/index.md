---
title: CountInLine2
---

#### Synopsis

Count words in a line.

#### Examples

A slighly more involved manner of using regular matching in a loop.

```rascal

module demo::common::WordCount::CountInLine2




int countInLine2(str S){
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
test bool tstCountInLine2b() = countInLine2("Jabberwocky by Lewis Carroll") == 4;

```

                
The pattern `/^\W*\w+<rest:.*$>/` can be understood as follows:

*  The `^` makes it anchored, only matches at the begin of the substring `S`.
*  `\W*` matches zero or more non-word characters.
*  `\w+` matches one or more word characters.
*  `<rest:.*$>` matches the remaining part of `S` and assigns the result to the variable `rest`.


Inside the loop `count` is incremented and the new value of `S` becomes
the remainder of the current match. To summarize: each iteration
removes the first word from `S` and counts it.

Here is `countInLine2` in action:

```rascal-shell
rascal>import demo::common::WordCount::CountInLine2;
ok
rascal>countInLine2("Jabberwocky by Lewis Carroll");
int: 4
```


