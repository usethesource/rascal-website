---
title: Type Parameters
keywords:
  - "&"

---

#### Synopsis

Type parameters enable parameterized types.

#### Syntax

`& Name`

#### Description

A type parameter may occur at every syntactic position where a type is required and turns an ordinary type into a parameterized type.
Parameterized types are used to define polymorphic functions and data types, i.e., functions and data types that are applicable for more than one type. Type parameters are bound to an actual type when the function or data type is applied and further uses of the type parameter are consistently replaced by the actual type.

The following syntactic positions are _binding occurrences_ for type parameters:

*  Type parameters in the type declaration of a function are bound to the types of the actual parameters in the call of that function. Type parameters that occur in the body of the function are replaced by the corresponding actual types.

*  The left-hand side of an alias. The type parameters are bound when the alias is used and occurrences of type parameters in the right hand side are replaced by corresponding actual types.

*  The alternatives of a data type. Binding and replacement is identical to that of function declarations.


All other occurrences of type parameters are _using occurrences_. The following rules apply:

*  When the same type parameter is used at different binding occurrences it should be bound to the same actual type.

*  For every using occurrence of a type parameter there should be a binding occurrence of a type parameter with the same name.

#### Examples

Let's consider a small example of the use of function parameters in a function declaration, see [Function](../../../../Rascal/Declarations/Function/index.md)
for more details on function declarations.
The following function `swap` returns a tuple in which its arguments are swapped and can be applied to arbitrary values 
in a type safe manner:

```rascal-shell 
rascal>tuple[&B, &A] swap(&A a, &B b) { return <b, a>; }
tuple[&B,&A] (&A, &B): function(|prompt:///|(0,49,<1,0>,<1,49>))
rascal>swap(1,2);
tuple[int,int]: <2,1>
rascal>swap("abc", 3);
tuple[int,str]: <3,"abc">
```
Observe that the type parameters that are used in the return type should be defined in the declarations of the formal parameter of the function.

An [Alias](../../../../Rascal/Declarations/Alias/index.md) declaration may also be parameterized. So we can generalize graphs as follows:
```rascal
alias Graph[&Node] = rel[&Node, &Node];
Graph[int] GI = {<1,2>, <3,4>, <4,1>};
Graph[str] GS = {<"a", "b">, <"c","d">, <"d", "a">};
```
The type parameters that are used in the type in the right part of the alias declaration 
should be defined in the left part of the alias definition.


