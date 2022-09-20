---
title: Node Slice
keywords:
  - "["
  - ".."
  - "]"
---

#### Synopsis

Retrieve a slice of a node's argument list.

#### Syntax

*  `Exp<sub>1</sub> [ Exp<sub>2</sub> .. Exp<sub>4</sub>]`
*  `Exp<sub>1</sub> [ Exp<sub>2</sub> , Exp3 .. Exp<sub>4</sub>]`


where _Exp_<sub>2</sub> and _Exp_<sub>4</sub> are optional.

#### Types


| `Exp<sub>1</sub>`     | `Exp<sub>2</sub>` |  `Exp<sub>3</sub>`  | `Exp<sub>4</sub>` | `Exp<sub>1</sub> [ Exp<sub>2</sub> .. Exp<sub>4</sub> ]`   or  `Exp<sub>1</sub> [ Exp<sub>2</sub> , Exp<sub>3</sub> .. Exp<sub>4</sub>]`  |
| --- | --- | --- | --- | --- |
| `node` | `int`     | `int`       | `int`     |  `list[value]`                                                                 |


#### Function

#### Description

A Node slice is similar to a list [Slice](/Rascal/Expressions/Values/List/Slice) and uses the integer values of _Exp_<sub>2</sub> and _Exp_<sub>4</sub> to determine the `begin` (*inclusive*) and `end` (*exclusive*)
of a slice from the children of the node value _ND_ of _Exp_<sub>1</sub>. Negative indices count from the end of the list of children backwards.
Using the second form, an extra index _Exp_<sub>3</sub> is given that determines the
index of the second element in the slice and establishes the `step` between
successive elements in the slice. The default `step` is 1.
If `end` is smaller than `begin`, the slice is constructed backwards.

Let `Len` be the number of children of _ND_ and let _N_<sub>2</sub>, _N_<sub>3</sub> and _N_<sub>4</sub> be the respective values of the expressions
 _Exp_<sub>2</sub>, _Exp_<sub>2</sub> and _Exp_<sub>2</sub> when they are present.

The slice parameters `begin`, `end`, and `step` are determined as follows:

*  _Exp<sub>2</sub>_:
**  If _Exp<sub>2</sub>_ is absent, then `begin = 0`.
**  Otherwise, if _N<sub>2</sub>_ >= 0 then `begin = N<sub>2</sub>` else `begin = N<sub>2</sub> + Len`. 
*  _Exp<sub>4</sub>_:
**  If _Exp<sub>4</sub>_ is absent, then `end = Len`.
**  Otherwise, if _N<sub>4</sub>_ >= 0, then `end = N<sub>4</sub>` else `end = N<sub>4</sub> + Len`.
*  _Exp<sub>3</sub>_:
**  If _Exp<sub>3</sub>_ is absent, then if `begin < end` then `step = 1` else `step = -1`.
**  Otherwise, if `begin < end`, then `step = N<sub>3</sub> - begin` else `step = begin - N<sub>3</sub>`.


Now, the constraints `0 <= begin < Len` and `0 < end < Len` should hold,
otherwise the exception `IndexOutOfBounds` is thrown.

The slice consists of the children `ND[begin]`, `ND[begin+step]`, `ND[end - step]`.
When `begin >= end`, the elements are listed in reverse order.

#### Examples

Consider the list `ND = "f"(0, "abc", 20, false, 40, [3,4,5], 60, {"a", "b"}, 80);` as running example.

Here is a view on the children of _ND_ that will help to correlate positive and negative indices:


|`i`        | 0 |     1 |  2 |     3 |  4 |       5 |  6 |          7 |  8  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|`ND[i]`    |`0`|`"abc"`|`20`|`false`|`40`|`[3,4,5]`|`60`|`{"a", "b"}`|`80` |
|`-i`       | -9|     -8|  -7|     -6|  -5|       -4|  -3|          -2|  -1 |

    

Some common use cases (with `begin` <= `end`):


| Slice            | Means:                                                                  |
| --- | --- |
| `ND[begin..end]` | children with indices `begin` through `end-1`                           |
| `ND[begin..]`    | children with indices `begin` through the rest of the list of children  |
| `ND[..end]`      | children with indices from the beginning through `end-1`                |
| `ND[..]`         | the whole list of children                                              |
| `ND[-1]`         | last child of the list of children                                      |
| `ND[-2..]`       | the last two children of the list of children                           |
| `ND[..-2]`       | all children except the last two.                                       |



Let's put this into practice now.


```rascal-shell
rascal>ND = "f"(0, "abc", 20, false, 40, [3,4,5], 60, {"a", "b"}, 80);
node: "f"(
  0,
  "abc",
  20,
  false,
  40,
  [3,4,5],
  60,
  {"a","b"},
  80)
```
Slices with begin < end

```rascal-shell
rascal>ND[1..3];
list[value]: ["abc",20]
rascal>ND[1..];       // empty end => end of list of children
list[value]: [
  "abc",
  20,
  false,
  40,
  [3,4,5],
  60,
  {"a","b"},
  80
]
rascal>ND[..3];       // empty begin => first child of list
list[value]: [0,"abc",20]
rascal>ND[..];        // both empty => whole list of children
list[value]: [
  0,
  "abc",
  20,
  false,
  40,
  [3,4,5],
  60,
  {"a","b"},
  80
]
```
Slices with  begin >= end

```rascal-shell
rascal>ND[3..1];      // slice contains children with indices 3 and 2 (in that order)
list[value]: [false,20]
rascal>ND[3..3];      // empty slice when begin == end
list[value]: []
```
Slices with negative begin or end:

```rascal-shell
rascal>ND[2..-2];     // equivalent to ND[2..7]
list[value]: [
  20,
  false,
  40,
  [3,4,5],
  60
]
rascal>ND[2..7];
list[value]: [
  20,
  false,
  40,
  [3,4,5],
  60
]
rascal>ND[-4..-2];    // equivalent to ND[5..7]
list[value]: [
  [3,4,5],
  60
]
rascal>ND[5..7];
list[value]: [
  [3,4,5],
  60
]
```
Slices with an explicit second index:

```rascal-shell
rascal>ND[1,3..6];
list[value]: [
  "abc",
  false,
  [3,4,5]
]
rascal>ND[5,3..];
list[value]: [
  [3,4,5],
  false,
  "abc"
]
```
Explore error cases:

```rascal-shell
rascal>ND[..10];
list[value]: [
  0,
  "abc",
  20,
  false,
  40,
  [3,4,5],
  60,
  {"a","b"},
  80
]
rascal>ND[1..20];
list[value]: [
  "abc",
  20,
  false,
  40,
  [3,4,5],
  60,
  {"a","b"},
  80
]
```

