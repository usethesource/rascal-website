---
title: Set
---

#### Synopsis

An unordered collection of values without duplicates.

#### Description

A set is a collection of values with the following properties:

*  The set maybe empty.
*  The values in the collection are _unordered_.
*  A value can only occur once.
*  The set has a size that is equal to the number of values in the set.


In Rascal, sets are surrounded by braces `{` and `}` and the elements are separated by commas.
Each set has a type of the form `set[T]`, where _T_ is the smallest common type of all set elements.
Read more about the description of [sets and their operators](../../Rascal/Expressions/Values/Set/index.md)
and the [library functions on sets](../../Library/Set.md).

## Sets in Daily Life

*  A cutlery set consisting of knife, fork and the like.
   ![cutlery-set.jpg](/assets/Rascalopedia/Set/cutlery-set.jpg)
   [credit](http://www.ikea.com/gb/en/catalog/products/50087185/)
*  A crowd of people.
*  A stamp collection (but be aware that the duplicates will disappear!)
   ![stamp-collecting.jpg](/assets/Rascalopedia/Set/stamp-collecting.jpg)
   [credit](http://www.life123.com/hobbies/antiques-collectibles/stamps/stamp-collecting-2.shtml)

## Sets in Computer Science

*  The files in a directory. Of course, when you order them (by name, modification date) you need a [List](../../Rascalopedia/List/index.md) to represent them.
*  The set of moves an opponent can play in a game.
*  The set of nodes in a network.

## Sets in Rascal

*  The empty set: `{}`. Its type is `set[void]`.
*  A set of integers: `{3, 1, 4}`. Its type is `set[int]`.
*  A set of mixed-type values: `{3, "a", 4}`. Its type is `set[value]`.


