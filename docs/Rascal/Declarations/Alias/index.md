---
title: Alias Declaration
keywords:
  - alias
  - type
sidebar_position: 8
---

#### Synopsis

Declare an alias for a type.

#### Syntax

```rascal
alias Name  = Type;
alias Name[&T1, ...] = Type
```

#### Description

Everything can be expressed using the elementary types and values that are provided by Rascal. 
However, for the purpose of documentation and readability it is sometimes better to use a descriptive name as type indication, rather than an elementary type.  The use of aliases is a good way to document your intentions. 

An alias declaration states that _Name_ can be used everywhere instead of the already defined type _Type_. 
Both types are thus considered to be type equivalent, and one could always be substituted for the other. 

Often an alias defines a type with labeled fields (see below) such that accessing a complex relation becomes
easier. 

Aliases can be type-parametrized as well more generic applications (see below for an example).

#### Examples

Introduce two aliases `ModuleId` and `Frequency` for the type str.

```rascal-shell 
rascal>alias ModuleId = str;
ok
rascal>alias Frequency = int;
ok
```

Another example is an alias definition for a graph containing edges between integer nodes:

```rascal-shell ,continue
rascal>alias IntGraph = rel[int from, int to];
ok
```

Note that the Rascal Standard Library provides a graph data type that is defined as follows:

```rascal-shell ,continue
rascal>alias Graph[&T] = rel[&T from, &T to];
ok
```

In other words the standard graph datatype can be parameterized with any element type.

Alias types are type _equivalences_: in every situation the alias is substitutable for its definition _and vice versa_.
Here is an example to show type equivalence:

```rascal-shell ,continue
rascal>Graph[int,int] myGraph = {<1,2>,<2,3>};
Graph[int]: {
  <1,2>,
  <2,3>
}
rascal>rel[int,int] myRel = {<4,5>,<5,6>,<6,4>};
rel[int,int]: {
  <5,6>,
  <4,5>,
  <6,4>
}
rascal>myGraph = myRel;
Graph[int]: {
  <5,6>,
  <4,5>,
  <6,4>
}
rascal>myRel = myGraph;
rel[int,int]: {
  <5,6>,
  <4,5>,
  <6,4>
}
```

When the static type is know and it is an alias, we can use the field names in its definition for projection:

```rascal-shell ,continue
rascal>nodes = myGraph<from> + myGraph<to>;
set[int]: {5,4,6}
```

See [Type Parameters](../../../Rascal/Declarations/StaticTyping/TypeParameters/index.md) for other examples of parameterized alias declarations.


