---
title: Constructor
---

#### Synopsis

Constructors create values for user-defined datatypes (Algebraic Datatypes).

#### Syntax

```rascal
Name ( Exp₁, Exp₂, ... )
```

#### Types

//

| `Exp₁` | `Exp₂` | ... |  `Name ( Exp₁, Exp₂, ... )`  |
| --- | --- | --- | --- |
| `T₁`   | `T₂`   | ... | Depends on ADT declaration           |


#### Description

Constructors are created using the [Call](../../../../Rascal/Expressions/Call/index.md) notation.

In ordinary programming languages record types or classes exist to introduce a new type name for a collection of related, 
named, values and to provide access to the elements of such a collection through their name. 

In Rascal, [AlgebraicDataType](../../../../Rascal/Declarations/AlgebraicDataType/index.md)s provide this facility. They have to be declared, see [./Algebraic Data Type](../../../../Rascal/Declarations/AlgebraicDataType/index.md), and
then values can be created using calls to the declared constructor functions.
The constructor _Name_ should correspond (regarding name, arity and argument types) to one of the alternatives
in the ADT declaration.

First, the actual parameter expressions _Exp_ᵢ are evaluated resulting in values _V_ᵢ.
Next, a data value is constructed in accordance with the declared data type
using the values _V_ᵢ as arguments for the constructor. This data value is used as value of the constructor. 
Constructors are functions that can be used in all contexts where functions can be used.

Observe that the syntax of a constructor is identical to the syntax of an function [Call](../../../../Rascal/Expressions/Call/index.md).

Also, all instances of [Constructor](../../../../Rascal/Expressions/Values/Constructor/index.md)s are instances of [Node](../../../../Rascal/Expressions/Values/Node/index.md) values. This means that the generic
operations on [Node](../../../../Rascal/Expressions/Values/Node/index.md) also work on [Constructor](../../../../Rascal/Expressions/Values/Constructor/index.md). If the [./algebraic data type](../../../../Rascal/Declarations/AlgebraicDataType/index.md) provides more precies types than `value` for fields or keyword fields of a constructor, then the [Node](../../../../Rascal/Expressions/Values/Node/index.md) operations are checked using these more precise types, both statically and at run-time.

#### Examples

First, define a datatype `WF` for word frequencies:

```rascal-shell ,continue
rascal>data WF = wf(str word, int freq);
ok
```
Then construct a new `WF` value by calling the constructor `wf` with appropriate arguments:

```rascal-shell ,continue
rascal>wf("Rascal", 10000);
WF: wf("Rascal",10000)
```

Constructors with keyword parameters are also interesting:

```rascal-shell 
rascal>data Shape
>>>>>>>    = rectangle(int width, int height, int area=width * height);
ok
rascal>rectangle(100,200).area
int: 20000
rascal>x = rectangle(100,200, area=100000);
Shape: rectangle(100,200,area=100000)
rascal>x.area
int: 100000
rascal>y = rectangle(100,200);
Shape: rectangle(100,200)
rascal>y.area
int: 20000
```


