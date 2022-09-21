---
title: Type Constraints
keywords:
  - "<:"
  - "&"

---

#### Synopsis

Type constraints restrict the acceptable type for parameters.

#### Syntax

`& Name <: Type`

#### Types

#### Function

#### Description

Constraints can be imposed on the actual types to which a type parameter may be bound. 
This is expressed by a subtype constraint which expresses that 
actual types bound to _Name_ should be a subtype of _Type_. 

#### Examples

Here is the definition of the absolute value function `abs` from the [./Number](/docs//Rascal/Expressions/Values/Number) library:
```rascal
public &T <: num abs(&T <: num N)
{
	return N >= 0 ? N : -N;
}
```
The argument `N` is constrained to be at most of type `num`.

```rascal-shell
rascal>import util::Math;
ok
rascal>abs(-3);
int: 3
rascal>abs(-3.5);
real: 3.5
```

Here is an example from the [Node](/docs//Rascal/Expressions/Values/Node) library:
```rascal
&T <: node setAnnotations(&T <: node x, map[str, value] annotations);
```
(we don't give the body of this function since it has been implemented in Java).
`setAnnotations` takes a value of any type that is at most `node` and adds annotations to it.
This makes it possible to set annotations on any [Algebraic Data Type](/docs//Rascal/Declarations/AlgebraicDataType).


```rascal-shell
rascal>import Node;
ok
rascal>nd = "f"(10, "abc");
node: "f"(10,"abc")
```
First we apply `setAnnotations` to a node value:

```rascal-shell
rascal>setAnnotations(nd, ("color" : "red", "size" : "large"));
node: "f"(10,"abc",
  size="large",
  color="red")
```
Next, we introduce a new data type `Suite`:

```rascal-shell
rascal>data Suite = hearts() | diamonds() | clubs() | spades();
ok
rascal>st = diamonds();
Suite: diamonds()
```
And apply `setAnnotations` to a value of type `Suite`:

```rascal-shell
rascal>setAnnotations(st, ("player" : "Hossein", "gain" : "120"));
Suite: diamonds(player="Hossein",gain="120")
```

#### Benefits


