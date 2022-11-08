---
title: Field Projection
keywords:
  - "<"
  - ">"

---

#### Synopsis

Projection of tuple.

#### Syntax

`Exp < Field₁, Field₂ ... >`

#### Description

_Exp_ should evaluate to a tuple or relation, and _Field_ᵢ should be a field name or an integer constant
 that refers to elements in the order in which they occur in the original value (counting from 0). 

#### Examples

Suppose we have a relation with traffic information that records the name of the day, the day number, and the length of the traffic jams at that day.

```rascal-shell 
rascal>rel[str day, int daynum, int length] Traffic = 
>>>>>>>{<"mon", 1, 100>, <"tue", 2, 150>, <"wed", 3, 125>, 
>>>>>>> <"thur", 4, 110>, <"fri", 5, 90>};
rel[str day,int daynum,int length]: {
  <"thur",4,110>,
  <"mon",1,100>,
  <"fri",5,90>,
  <"wed",3,125>,
  <"tue",2,150>
}
rascal>Traffic<length,daynum>;
rel[int length,int daynum]: {
  <110,4>,
  <125,3>,
  <90,5>,
  <150,2>,
  <100,1>
}
rascal>Traffic<2,day>;
rel[int length,str day]: {
  <110,"thur">,
  <125,"wed">,
  <90,"fri">,
  <150,"tue">,
  <100,"mon">
}
```
Field projection thus selects parts from a larger value that has a fixed number of parts. The selection is based on position and not on value and can be used to completely reorder or remove the parts of a larger value.

