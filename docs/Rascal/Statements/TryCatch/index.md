---
title: Try Catch
keywords:
  - try
  - catch
  - finally

---

#### Synopsis

Try to execute a statement and catch resulting exceptions.

#### Syntax

```rascal
try
   _Statement₁_;
catch _PatternWithAction₁_;
catch _PatternWithAction₂_;
...
catch: _Statement₂_;
finally: _Statement₃_;
```

#### Description

A try catch statement has as purpose to catch any [Exceptions](../../../Library/Exception.md) that are raised 
during the execution of _Statement_₁.
These exceptions may caused by:

*  The execution of an explicit [Throw](../../../Rascal/Statements/Throw/index.md) statement.

*  The Rascal system that discovers an abnormal condition, e.g., an out of bounds error when accessing a list element.


Note that all elements of the try catch statement are optional but that at least one has to be present. 
Their meaning is as follows:

*  If a pattern of some _PatternWithActionᵢ_ matches, the corresponding action is executed.

*  Otherwise, _Statement₂_ is executed (when present).

*  Before leaving the try catch statement _Statement₃_ is always executed (when present).

#### Examples

Let's define a variant of the [head](../../../Library/List.md#List-head) function that returns the first element of a list,
but throws an exception when the list is empty. Our variant will return `0` for an empty list:

```rascal-shell 
rascal>import List;
ok
rascal>import Exception;
ok
rascal>int hd(list[int] x) { try return head(x); catch: return 0; }
int (list[int]): function(|prompt:///|(0,60,<1,0>,<1,60>))
rascal>hd([1,2,3]);
int: 1
rascal>hd([]);
int: 0
```
We can also be more specific and catch the `EmptyList` exception
(which is available here since we have imported the `Exception` module):

```rascal-shell ,continue
rascal>int hd2(list[int] x) { try return head(x); catch EmptyList(): return 0; }
int (list[int]): function(|prompt:///|(0,73,<1,0>,<1,73>))
rascal>hd2([]);
int: 0
```



