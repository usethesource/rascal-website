---
title: RAP 12 - Separate String edit from Visit functionality
sidebar_position: 12
---

| RAP | 12 |
| :---- | :---- |
| Title | Separate String edit from Visit functionality  |
| Author | Jurgen Vinju |
| Status | Draft |
| Type | Rascal Language |

### Issue

1. Visit behaves very differently on strings than on other values. Namely when a value of String is reached, it generates all tails of the string and executes all patterns on these tails.   
   1. This is considerably different from the visit behavior on other “containers” such as lists, sets and maps. Visit simply traverses each element in isolation and not “all tails”.  
   2. The fact that a string is treated as a container is inconsistent with other language feature such as the generator `<-` syntax. There we do not iterate over all tails of a list, for example.  
   3. The implementation in the interpreter switches to this special string behavior if the **dynamic typ**e of the _subject_ is a string. This contradicts compiler behavior which should select which kind of visit is necessary based on static information.  
   4. If you are simply using visit to visit all sub-values, it can be very surprising that the string tail visiting behavior is triggered. For example, when a `case value x: i+=1;` simply counts all values in the tree, the total count would be augmented with an increment for every tail of every string (\!\!\!). This is counterintuitive.  
      

### Analysis

2. There seems to be a case of “too much overloading” of the visit syntax. We do need this kind of power to edit strings concisely, but editing strings is not simply a special case of recursively visiting a data-structure. For strings we need additional semantics (a cursor inside of the string)  
3. It would be easy to separate the functionality into one `edit` statement and a `visit` statement, where `visit` would behave as before but not dive into tails of strings, and `edit` would behave as `visit` behaves now on strings (namely to visit all tails).

### Solution proposal

Introduce a new type of statement/expression for editing strings:

```rascal
result = edit(subject) {  
   case “string” => “string”  
   case /regex/  => regex  
}
```

* The subject should (statically) be a string  
* Cases of an edit statement should be either literal strings or regular expressions  
* Each pattern is applied to the string starting from a cursor which moves from left to right through the string  
* Substitutions replace only the matched substring, and editing is continued on the string that continues after the matched substring

This is exactly the same as how visit currently works on strings.

This example shows what would happen:

```rascal
result = edit(“aaa”) {  
   case “a” => “b”  
}
```

This would return “bbb”, since “a” matches at all cursor positions. 

Contrarily the following visit statement would behave differently:

```rascal
result = visit (“aaa”) {  
        case “a” => “b”  
}
```

Would return “aaa” since no value matched the “a” pattern. Only entire strings “a” would be replaced by “b” and strings such as “aaa” will remain unchanged.

