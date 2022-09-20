---
title: Slice
keywords:
  - "["
  - ".."
  - "]"
  - "="

---

#### Synopsis

Assign to a slice of a list or string.

#### Syntax

*   `Assignable [ Exp<sub>1</sub> .. Exp3_ ] = Exp<sub>4</sub>`
*   `Assignable [ Exp<sub>1</sub>, Exp<sub>2</sub> .. Exp<sub>3</sub> ] = Exp<sub>4</sub>`


`Exp<sub>1</sub>` and `Exp<sub>3</sub>` are optional
#### Types

#### Function
       
#### Usage

#### Description

A slice assignment is defined for [List](/Rascal/Expressions/Values/List), [String](/Rascal/Expressions/Values/String) and [Node](/Rascal/Expressions/Values/Node) 
and aims to replace a slice from the old value of the assignable by a new value. 
See [Slice](/Rascal/Expressions/Values/List/Slice), [Slice](/Rascal/Expressions/Values/String/Slice) or [Slice](/Rascal/Expressions/Values/Node/Slice) for a more detailed explanation of slicing.

Let _V_ be the current value of _Assignable_.

*  `Assignable [ Exp<sub>1</sub> .. Exp<sub>3</sub> ] = Exp<sub>4</sub>`:
   The slice `[ Exp<sub>1</sub> .. Exp<sub>3</sub> ]` determines two indices `begin` (inclusive) and `end`   
  (exclusive) in _V_.
  A new value _V_' is computed that is a copy of _V_ but with all the elements in _V_ with `begin <= index < end` replaced by the elements of the value of _Exp_<sub>4</sub>.
  Note that the size of _V_ and _V_' may differ.
  _V_' is assigned to the _Assignable_. 

*  `Assignable [ Exp<sub>1</sub>, Exp<sub>2</sub> .. Exp<sub>3</sub> ] = Exp<sub>4</sub>`:
  The slice `[ Exp<sub>1</sub>, Exp<sub>2</sub> .. _Exp<sub>3</sub> ]` determines two indices `begin` (inclusive) and `end` (exclusive)
  and a `step` between indices in _V_.
  A new value _V_' is computed that is a copy of _V_ but with all the elements in _V_ with indices 
  `begin`, `begin+step`. ... `end-step` <= `index < end` replaced by the successive elements of the value of _Exp_<sub>4</sub>.
  Note that the size of _V_ and _V_' may differ.  _V_' is assigned to the _Assignable_. 
  If the number of indices in the slice and the number of elements in the value of _Exp_<sub>4</sub> is not equal the following is done:
  **  If the number of elements in the slice is larger: the elements of _Exp<sub>4</sub>_ are used in a circular manner.
  **  If the number of elements in the slice is smaller: the remaining elements of _Exp<sub>4</sub>_ is inserted after the last index in the slice.

#### Examples

Replace the elements with index 3, 4, 5 in `L`:

```rascal-shell
rascal>L = [0,1,2,3,4,5,6,7,8,9];
list[int]: [0,1,2,3,4,5,6,7,8,9]
rascal>L[3..6] = [100,200,300,400,500];
list[int]: [0,1,2,100,200,300,400,500,6,7,8,9]
```
Replace the elements with index 1, 3, 5, 7 in `L` (note how the elements from `[100,200]` are used in a circular way):

```rascal-shell
rascal>L = [0,1,2,3,4,5,6,7,8,9];
list[int]: [0,1,2,3,4,5,6,7,8,9]
rascal>L[1,3..8] = [100,200];
list[int]: [0,100,2,200,4,100,6,200,8,9]
```
Replace the elements with index 1, 3, 5, 7 in `L` (note how the unused elements from `[100,200,300,400,500]` 
are insert at index 7):

```rascal-shell
rascal>L = [0,1,2,3,4,5,6,7,8,9];
list[int]: [0,1,2,3,4,5,6,7,8,9]
rascal>L[1,3..8] = [100,200,300,400,500];
list[int]: [0,100,2,200,4,300,6,400,500,8,9]
```
Similar examples for slicing assignment on strings:

```rascal-shell
rascal>S = "abcdefghij";
str: "abcdefghij"
rascal>S[3..6] = "UVWXYZ";
str: "abcUVWXYZghij"
rascal>S = "abcdefghij";
str: "abcdefghij"
rascal>S[1,3..8] = "XY";
str: "aXcYeXgYij"
rascal>S = "abcdefghij";
str: "abcdefghij"
rascal>S[1,3..8] = "UVWXYZ";
str: "aUcVeWgXYZij"
```
Replace the elements with index 3, 4, 5 in node `N`:

```rascal-shell
rascal>N = "f"(0,true,2,"abc",4,5.5,6,{7,77},8,{9,99,999});
node: "f"(
  0,
  true,
  2,
  "abc",
  4,
  5.5,
  6,
  {7,77},
  8,
  {999,9,99})
rascal>N[3..6] = [100,200,300,400,500];
node: "f"(
  0,
  true,
  2,
  100,
  200,
  300,
  400,
  500,
  6,
  {7,77},
  8,
  {999,9,99})
```
Replace the elements with index 1, 3, 5, 7 in `L` (note how the elements from `[100,200]` are used in a circular way):

```rascal-shell
rascal>N = "f"(0,true,2,"abc",4,5.5,6,{7,77},8,{9,99,999});
node: "f"(
  0,
  true,
  2,
  "abc",
  4,
  5.5,
  6,
  {7,77},
  8,
  {999,9,99})
rascal>N[1,3..8] = [100,200];
node: "f"(
  0,
  100,
  2,
  200,
  4,
  100,
  6,
  200,
  8,
  {999,9,99})
```
Replace the elements with index 1, 3, 5, 7 in `L` (note how the unused elements from `[100,200,300,400,500]` 
are insert at index 7):

```rascal-shell
rascal>N = "f"(0,true,2,"abc",4,5.5,6,{7,77},8,{9,99,999});
node: "f"(
  0,
  true,
  2,
  "abc",
  4,
  5.5,
  6,
  {7,77},
  8,
  {999,9,99})
rascal>N[1,3..8] = [100,200,300,400,500];
node: "f"(
  0,
  100,
  2,
  200,
  4,
  300,
  6,
  400,
  500,
  8,
  {999,9,99})
```

#### Benefits


