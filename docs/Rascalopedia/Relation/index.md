---
title: Relation
---

#### Synopsis

An unordered set of tuples.

#### Description

In mathematics, given sets _D_<sub>1</sub>, _D_<sub>2</sub>, ... _D_~n~, a
_n_-ary relation _R_ is characterized by _R_ &subseteq;  _D_<sub>1</sub> &times; _D_<sub>2</sub> &times; ... &times; _D_~n~.
In other words, _R_ consists of a set of tuples < _V<sub>1</sub>_, ..., _V~n~_ > where each _V_~i~ is an element of
the set _D_~i~. When _n_ = 2, we call the relation a http://en.wikipedia.org/wiki/Relation_(mathematics)[binary relation].

In [database theory](http://en.wikipedia.org/wiki/Relational_algebra), a relation is a table with a heading and an unordered set of tuples:

| _D<sub>1</sub> Name<sub>1</sub>_ | _D<sub>2</sub> Name<sub>2</sub>_ | ... | _D~n~ Name~n~_ |
| --- | --- | --- | --- |
| _V<sub>11</sub>_        | _V<sub>12</sub>_        | ... | _V~1n~_        |
| _V<sub>21</sub>_        | _V<sub>22</sub>_        | ... | _V~2n~_         |
| _V<sub>31</sub>_        | _V<sub>32</sub>_        | ... | _V~3n~_         |
| ...            | ...            | ... |                




In Rascal, a relation is a set of tuples and is characterized by the type:
`rel[D<sub>1</sub> Name<sub>1</sub>, D<sub>2</sub> Name<sub>2</sub>, ..., D~n~ Name~n~]` 
See [Relation Values](../../Rascal/Expressions/Values/Relation) and  for a description of relations and their operators
(since relations are sets all set operators also apply to them, see [Set Values](../../Rascal/Expressions/Values/Set))
and [functions on relations](../../Library/Relation.md)
(and here again, since relations are sets all set operators also apply to them, 
see [functions on sets](../../Library/Set.md)).


## Relations in Daily Life

*  The _parent-of_ or _friend-of_ relation between people.
   ![](/assets/Rascalopedia/Relation/char-relation.jpg)
   [credit](http://www.translatedmemories.com/bookpgs/Pg10-11CharRelation.jpg)
*  A character relation map, describing the relations between the characters in a play or soap series.
*  A listing of the top 2000 songs of all times including the position, artist name, song title, the year the song was published.
   ![](/assets/Rascalopedia/Relation/top2000-2010.jpg)
   [credit](http://top2011.radio2.nl/lijst/2010)


## Relations in computer science

*  A relational data base.
*  Login information including user name, password, home directory, etc.


## Relations in Rascal

*  A parent child relation:
```rascal
rel[str parent, str child] = {
<"Paul", "Eva">,
<"Paul", "Thomas">,
<"Jurgen", "Simon">,
<"Jurgen", "David">,
<"Tijs", "Mats">
};
```
*  A fragment of the top 2000 relation:
```rascal
rel[int position, str artist, str title, int year] Top2000 = {
<1, "Eagles", "Hotel California",1977>,
<2, "Queen", "Bohemian rhapsody", 1975>,
<3, "Boudewijn de Groot", "Avond", 1997>,
...
};
```


