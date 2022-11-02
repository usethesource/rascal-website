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
   Statement₁
catch Pattern₁ :
  Statement₂
catch Pattern₂ : {
  Statements
}
catch: 
  Statement₃
finally: Statement₄
```

#### Description

A try catch statement has as purpose to catch any [Exceptions](../../../Library/Exception.md) that are raised 
during the execution of _Statement_₁.
These exceptions may caused by:

*  The execution of an explicit [Throw](../../../Rascal/Statements/Throw/index.md) statement.

*  The Rascal system that discovers an abnormal condition, e.g., an out of bounds error when accessing a list element.


Note that all elements of the try catch statement are optional but that at least one has to be present. 
Their meaning is as follows:

*  If a _Pattern_ matches, the corresponding action is executed. This is a statement after the `:` which can be a [Block](../../../Rascal/Statements/Block/index.md)

*  Otherwise, the default `catch:` executes _Statement₃_.

*  If a `finally` is present, before leaving the try catch statement _Statement₄_ is _always_ executed (when present). This is true also when the code is terminated with [Return](../../../Rascal/Statements/Return/index.md), [Break](../../../Rascal/Statements/Break/index.md), [Continue](../../../Rascal/Statements/Continue/index.md) or [Fail](../../../Rascal/Statements/Fail/index.md).

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



