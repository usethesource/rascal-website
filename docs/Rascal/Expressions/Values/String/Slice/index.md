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


* `Exp₁ [ Exp₂ .. Exp₄]`
* `Exp₁ [ Exp₂ , Exp3 .. Exp₄]`

where `Exp₂` and `Exp₄` are optional.

#### Types


| `Exp₁`     | `Exp₂` |  `Exp₃`  | `Exp₄` | `Exp₁ [ Exp₂ .. Exp₄ ]`   or  `Exp₁ [ Exp₂ , Exp₃ .. Exp₄]`  |
| --- | --- | --- | --- | --- |
| `str`         | `int`     | `int`       | `int`     |  `str`                                                                            |


#### Description

A String slice is similar to a list [Slice](../../../../../Rascal/Expressions/Values/List/Slice/index.md) and uses the integer values of _Exp_₂ and _Exp_₄ to determine the `begin` (*inclusive*) and `end` (*exclusive*)
of a slice from the string value _S_ of _Exp_₁. Negative indices count from the end of the string backwards.
Using the second form, an extra index _Exp_₃ is given that determines the
index of the second element in the slice and establishes the `step` between
successive elements in the slice. The default `step` is 1.
If `end` is smaller than `begin`, the slice is constructed backwards.

Let `Len` be the length of _S_ and let _N_₂, _N_₃ and _N_₄ be the respective values of the expressions
 _Exp_₂, _Exp_₂ and _Exp_₂ when they are present.

The slice parameters `begin`, `end`, and `step` are determined as follows:

*  _Exp₂_:
**  If _Exp₂_ is absent, then `begin = 0`.
**  Otherwise, if _N₂_ >= 0 then `begin = N₂` else `begin = N₂ + Len`. 
*  _Exp₄_:
**  If _Exp₄_ is absent, then `end = Len`.
**  Otherwise, if _N₄_ >= 0, then `end = N₄` else `end = N₄ + Len`.
*  _Exp₃_:
**  If _Exp₃_ is absent, then if `begin < end` then `step = 1` else `step = -1`.
**  Otherwise, if `begin < end`, then `step = N₃ - begin` else `step = begin - N₃`.


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


```rascal-shell ,error
rascal>S = "abcdefghi";
str: "abcdefghi"
```
Slices with begin < end

```rascal-shell ,continue,error
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

```rascal-shell ,continue,error
rascal>S[3..1];      // slice contains characters with indices 3 and 2 (in that order)
str: "dc"
rascal>S[3..3];      // empty slice when begin == end
str: ""
```
Slices with negative begin or end:

```rascal-shell ,continue,error
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

```rascal-shell ,continue,error
rascal>S[1,3..6];
str: "bdf"
rascal>S[5,3..];
str: "fdb"
```
Explore error cases:

```rascal-shell ,continue,error
rascal>S[..10];
str: "abcdefghi"
rascal>S[1..20];
str: "bcdefghi"
```



       

