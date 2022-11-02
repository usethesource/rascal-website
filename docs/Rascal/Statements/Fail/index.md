---
title: Fail
keywords:
  - fail

---

#### Synopsis

Let the current alternative of a pattern match fail.

#### Syntax

```rascal
fail;

fail Label;
```

#### Description

A `fail` statement is only allowed in statements that are controlled by the outcome of a pattern match:

*  The [Patterns](../../../Rascal/Patterns/index.md) in a [Pattern with Action](../../../Rascal/Expressions/Visit/PatternWithAction/index.md) in [Switch](../../../Rascal/Statements/Switch/index.md) or [Visit](../../../Rascal/Statements/Visit/index.md) statement controls the statements in the action part.
*  The test (expression) of a [While](../../../Rascal/Statements/While/index.md) or [Do](../../../Rascal/Statements/Do/index.md) statement controls the statements in the body part.
*  The test (expressions) of a [For](../../../Rascal/Statements/For/index.md) statement control the statements in the body part.
*  The formal parameter declaration of a [Function](../../../Rascal/Declarations/Function/index.md).


The `fail` statement is associated with the innermost pattern match by which it is controlled, unless
it has a label. [For](../../../Rascal/Statements/For/index.md), [While](../../../Rascal/Statements/While/index.md) and [If](../../../Rascal/Statements/If/index.md) can have a label that `fail` can jump to, and
_function names_ can be used to fail the entire application of a function match. A failed function
would backtrack to the next overloaded candidate.

When `fail` is executed:

*  If the associated pattern has more alternatives, the next alternative is explored,
*  otherwise the pattern as a whole fails. 
   ** In the case of switch or visit this means that the next case will be tried.
   ** For while, do and for, this implies that any bindings caused by the pattern are undone and that the next 
      alternative in the test is tried; otherwise the loop is terminated.
   ** For a function call it means that the next function declaration (or the default one) is tried.

#### Examples

Here is an example taken from [Bubble](../../../Recipes/Basic/Bubble/index.md). 
It uses a `fail` for the case that no unsorted element can be found in the list of numbers.
As a result, the whole case fails and the default case is used.

```rascal-shell 
rascal>import IO;
ok
rascal>public list[int] sort(list[int] numbers){
>>>>>>>  switch(numbers){
>>>>>>>    case [*int nums1, int p, int q, *int nums2]:
>>>>>>>       if(p > q){
>>>>>>>          return sort(nums1 + [q, p] + nums2);
>>>>>>>       } else {
>>>>>>>       	  fail;
>>>>>>>       }
>>>>>>>     default: return numbers;
>>>>>>>   }
>>>>>>>}
list[int] (list[int]): function(|prompt:///|(0,252,<1,0>,<11,1>))
rascal>sort([10, 1, 5, 3]);
list[int]: [1,3,5,10]
```

#### Benefits

* fail offers direct programmeable influence on backtracking behavior

#### Pitfalls

* fail breaks stack-trace-based debugging because the failed call may have been in the past.

