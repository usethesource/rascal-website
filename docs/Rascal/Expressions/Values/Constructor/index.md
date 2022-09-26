---
title: Constructor
---

#### Synopsis

Constructors create values for user-defined datatypes (Algebraic Datatypes).

#### Syntax

`Name ( Exp₁, Exp₂, ... )`

#### Types

//

| `Exp₁` | `Exp₂` | ... |  `Name ( Exp₁, Exp₂, ... )`  |
| --- | --- | --- | --- |
| `T₁`   | `T₂`   | ... | Depends on ADT declaration           |


#### Description

In ordinary programming languages record types or classes exist to introduce a new type name for a collection of related, 
named, values and to provide access to the elements of such a collection through their name. 

In Rascal, algebraic data types provide this facility. They have to be declared, see [Algebraic Data Type](../../../../Rascal/Declarations/AlgebraicDataType/index.md), and
then values can be created using calls to the declared constructor functions.
The constructor _Name_ should correspond (regarding name, arity and argument types) to one of the alternatives
in the ADT declaration.

First, the actual parameter expressions _Exp_ᵢ are evaluated resulting in values _V_ᵢ.
Next, a data value is constructed in accordance with the declared data type
using the values _V_ᵢ as arguments for the constructor. This data value is used as value of the constructor. 
Constructors are functions that can be used in all contexts where functions can be used.

Observe that the syntax of a constructor is identical to the syntax of an function [Call](../../../../Rascal/Expressions/Call/index.md).

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


