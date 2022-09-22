---
title: String Slice
keywords:
  - "["
  - ".."
  - "]"
---

#### Synopsis

Retrieve a slice of a string.

#### Syntax


* `Exp<sub>1</sub> [ Exp<sub>2</sub> .. Exp<sub>4</sub>]`
* `Exp<sub>1</sub> [ Exp<sub>2</sub> , Exp3 .. Exp<sub>4</sub>]`

where `Exp<sub>2</sub>` and `Exp<sub>4</sub>` are optional.

#### Types


| `Exp<sub>1</sub>`     | `Exp<sub>2</sub>` |  `Exp<sub>3</sub>`  | `Exp<sub>4</sub>` | `Exp<sub>1</sub> [ Exp<sub>2</sub> .. Exp<sub>4</sub> ]`   or  `Exp<sub>1</sub> [ Exp<sub>2</sub> , Exp<sub>3</sub> .. Exp<sub>4</sub>]`  |
| --- | --- | --- | --- | --- |
| `str`         | `int`     | `int`       | `int`     |  `str`                                                                            |


#### Description

A String slice is similar to a list [Slice](../../../../../Rascal/Expressions/Values/List/Slice) and uses the integer values of _Exp_<sub>2</sub> and _Exp_<sub>4</sub> to determine the `begin` (*inclusive*) and `end` (*exclusive*)
of a slice from the string value _S_ of _Exp_<sub>1</sub>. Negative indices count from the end of the string backwards.
Using the second form, an extra index _Exp_<sub>3</sub> is given that determines the
index of the second element in the slice and establishes the `step` between
successive elements in the slice. The default `step` is 1.
If `end` is smaller than `begin`, the slice is constructed backwards.

Let `Len` be the length of _S_ and let _N_<sub>2</sub>, _N_<sub>3</sub> and _N_<sub>4</sub> be the respective values of the expressions
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

The slice consists of the elements `S[begin]`, `S[begin+step]`, `S[end - step]`.
When `begin >= end`, the elements are listed in reverse order.

#### Examples

Consider the string `S = "abcdefghi";` (with size 9) as running example.

Here is a view on _L_ that will help to correlate positive and negative indices:


|`i`        | 0    |   1  |   2  |   3  |   4  |   5  |   6  |   7  |   8   |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|`S[i]`     | `"a"`| `"b"`| `"c"`| `"d"`| `"e"`| `"f"`| `"g"`| `"h"`| `"i"` |
|`-i`       | -9   | -8   | -7   | -6   |   -5 |   -4 |   -3 |   -2 |   -1  |




Some common use cases (with `begin` <= `end`):


| Slice           | Means:                                                          |
| --- | --- |
| `S[begin..end]` | characters with indices `begin` through `end-1`                 |
| `S[begin..]`    | characters with indices `begin` through the rest of the string  |
| `S[..end]`      | characters with indices from the beginning through `end-1`      |
| `S[..]`         | the whole list                                                  |
| `S[-1]`         | last element of the string                                      |
| `S[-2..]`       | the last two characters of the string                           |
| `S[..-2]`       | all characters except the last two.                             |



Let's put this into practice now.


```rascal-shell
rascal>S = "abcdefghi";
str: "abcdefghi"
```
Slices with begin < end

```rascal-shell
rascal>S[1..3];
str: "bc"
rascal>S[1..];       // empty end => end of string
str: "bcdefghi"
rascal>S[..3];       // empty begin => first character of string
str: "abc"
rascal>S[..];        // both empty => whole string
str: "abcdefghi"
```
Slices with  begin >= end

```rascal-shell
rascal>S[3..1];      // slice contains characters with indices 3 and 2 (in that order)
str: "dc"
rascal>S[3..3];      // empty slice when begin == end
str: ""
```
Slices with negative begin or end:

```rascal-shell
rascal>S[2..-2];     // equivalent to S[2..7]
str: "cdefg"
rascal>S[2..7];
str: "cdefg"
rascal>S[-4..-2];    // equivalent to S[5..7]
str: "fg"
rascal>S[5..7];
str: "fg"
```
Slices with an explicit second index:

```rascal-shell
rascal>S[1,3..6];
str: "bdf"
rascal>S[5,3..];
str: "fdb"
```
Explore error cases:

```rascal-shell
rascal>S[..10];
str: "abcdefghi"
rascal>S[1..20];
str: "bcdefghi"
```



       

