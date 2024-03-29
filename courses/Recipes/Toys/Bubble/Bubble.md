---
title: Bubble
---

#### Synopsis

Variout styles to write bubble sort.

#### Syntax

#### Types

#### Function

#### Description

[Bubble sort](http://en.wikipedia.org/wiki/Bubble_sort) is a classic (albeit not the most efficient) technique to sort lists of values.
We present here several styles to implement bubble sort. 
Also see [sort]((Library:List-sort)) for a more efficient library function for sorting.

#### Examples

```rascal-commands
import List;

@synopsis{sort1: uses list indexing, a for-loop and a (complex) assignment}
list[int] sort1(list[int] numbers) { 
  if (size(numbers) > 0) {
     for (int i <- [0 .. size(numbers)-1]) {
       if (numbers[i] > numbers[i+1]) {
         // interesting destructuring bind:
         <numbers[i], numbers[i+1]> = <numbers[i+1], numbers[i]>;
         return sort1(numbers);
       }
    }
  }  
  return numbers;
}

@synopsis{sort2 uses list matching, a switch and recursion instead of assignment}
list[int] sort2(list[int] numbers) {
  switch(numbers){
    case [*int nums1, int p, int q, *int nums2]:
       if (p > q) {
          return sort2(nums1 + [q, p] + nums2);
       } else {
       	  fail;
       }
     default: return numbers;
   }
}

@synopsis{sort3: uses list matching, while and an assignment}
list[int] sort3(list[int] numbers) {
  while ([*int nums1, int p, *int nums2, int q, *int nums3] := numbers && p > q)
        numbers = nums1 + [q] + nums2 + [p] + nums3;
  return numbers;
}

@synopsis{sort4: uses list matching, solve, list concatentation, and assignment}
list[int] sort4(list[int] numbers) {
  solve (numbers) {
    if ([*int nums1, int p, *int nums2, int q, *int nums3] := numbers && p > q)
      numbers = nums1 + [q] + nums2 + [p] + nums3;
  }
  return numbers;
}

@synopsis{sort5: using recursion instead of iteration, and splicing instead of concat}
list[int] sort5([*int nums1, int p, *int nums2, int q, *int nums3]) {
  if (p > q) 
    return sort5([*nums1, q, *nums2, p, *nums3]); 
  else 
    fail sort5;
}

default list[int] sort5(list[int] x) = x;

@synopsis{sort6: inlines the condition into a when, and uses overloading with a default function.}
list[int] sort6([*int nums1, int p, *int nums2, int q, *int nums3]) 
  = sort5([*nums1, q, *nums2, p, *nums3])
  when p > q; 

default list[int] sort6(list[int] x) = x;


bool isSorted(list[int] lst) = !any(int i <- index(lst), int j <- index(lst), (i < j) && (lst[i] > lst[j]));

test bool sorted1a() = isSorted([]);
test bool sorted1b() = isSorted([10]);
test bool sorted1c() = isSorted([10, 20]);
test bool sorted1d() = isSorted([-10, 20, 30]);
test bool sorted1e() = !isSorted([10, 20, -30]);

test bool sorted2(list[int] lst) = isSorted(sort2(lst));
test bool sorted3(list[int] lst) = isSorted(sort3(lst));
test bool sorted4(list[int] lst) = isSorted(sort4(lst));
test bool sorted5(list[int] lst) = isSorted(sort5(lst));
test bool sorted6(list[int] lst) = isSorted(sort6(lst));
```
                
`sort1` is a classic, imperative style, implementation of bubble sort: it iterates over consecutive pairs of elements and
when a not-yet-sorted pair is encountered, the elements are exchanged, and `sort1` is applied recursively to the whole list.

`sort2` uses list matching and consists of a switch with two cases:

*  A case matching a list with two consecutive elements that are unsorted. Observe that when the pattern of a case matches, the case as a whole can still fail.
*  A default case.


`sort3` also uses list matching but in a more declarative style: As long as there are unsorted elements in the list (possibly with intervening elements), exchange them.

`sort4` is identical to `sort3`, except that the shorter `*`-notation for list variables is used and that the type declaration for the
the non-list variables has been omitted.

`sort5` uses tail recursion to reach a fixed point instead of a while loop. One alternative matches lists with out-of-order elements, while the default alternative returns the list if no out-of-order elements are found.

Let's put them to the test:
```rascal-shell,continue
L = [9,8,7,6,5,4,3,2,1];
sort1(L);
sort2(L);
sort3(L);
sort4(L);
sort5(L);
```


#### Benefits

#### Pitfalls

