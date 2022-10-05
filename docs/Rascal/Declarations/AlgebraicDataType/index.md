---
title: Algebraic Data Type
keywords:
  - data
  - struct
  - record
  - keywords
  - term
  - AST
sidebar_position: 4
---

#### Synopsis

Define a user-defined type (Algebraic Data Type).

#### Syntax

```rascal
// declaring a normal data type with 2 constructors of which the second also has keyword parameters:
data _Type_
  = _ConstructorName1_ ( _ParameterType1_ _ParameterName1_, _ParameterType2_ _ParameterName2_, ...)
  | _ConstructorName2_ ( _ParameterType1_ _ParameterName1_, ..., _KeywordType1_ _KeywordType1_ = _KeywordDefaultExp1_, ...)
  ;

// declaring a type-parametrized data-type:
data _Type_ [&_TypeParameter1_, &_TypeParameter2_]
  = _ConstructorName1_ ( &_TypeParameter1_ _ParameterName1_, &_TypeParameter2_ _ParameterName2_, ...)
  | _ConstructorName2_ ( &_TypeParameter1_ _ParameterName1_, ..., _KeywordType1_ _KeywordType1_ = _KeywordDefaultExp1_, ...)
  ;  


// declaring common keyword parameters:
data _Type_(_KeywordType1_ _KeywordType1_ = _KeywordDefaultExp1_, ...);
```

#### Description

The user-defined types in Rascal are either concrete [syntax definition](../../../Rascal/Declarations/SyntaxDefinition/index.md)s, [Alias](../../../Rascal/Declarations/Alias/index.md)es, or [./algebraic data type](../../../Rascal/Declarations/AlgebraicDataType/index.md)s ("ADTs"). We use ADTs to define the shapes of structured, hierarchical data, that can also be recursive. Many think of ADTs as tree-like data-structures, others think of them as many-sorted algebraic signatures, and then again the concept of a "case class" from object-oriented programming also comes very close.

In Rascal, algebraic data types have to be declared first by listing for each type a number of [Constructor](../../../Rascal/Expressions/Values/Constructor/index.md)s, and then values can be constructed using [Call](../../../Rascal/Expressions/Call/index.md) to the declared constructor functions.

Constructor declarations are very much like function signatures:
* They have positional parameters with types
* They have keyword parameters with types and default values.

However, unlike function signatures, constructor signatures can not have [Patterns](../../../Rascal/Patterns/index.md) as parameters. Only [Variable](../../../Rascal/Patterns/Variable/index.md)s are allowed.

Algebraic data-types can have type parameters, such as [Maybe](../../../Library/util/Maybe.md) for more generically applicable data-structures.

When "common keyword parameters" are declared, they are woven into the declarations of all visible constructors.

When there are functions with the same name and the same ADT as return type in scope, a constructor becomes
one of overloaded alternatives. See also [Call](../../../Rascal/Expressions/Call/index.md) for more semantics of overloading. Constructor
functions are always considered to be `default`, so they are tried only after all the other functions have failed.

#### Examples

The following data declaration defines the datatype `Bool` that contains various constants (`tt()` and `ff()`
and constructor functions `conj` and `disj`.

```rascal-shell ,continue
rascal>data Bool 
>>>>>>>  = tt() 
>>>>>>>  | ff() 
>>>>>>>  | conj(Bool L, Bool R)  
>>>>>>>  | disj(Bool L, Bool R)
>>>>>>>  ;
ok
```
 
Terms of type `Bool` can be constructed using the defined constructors:

```rascal-shell ,continue
rascal>example = conj(tt(),ff());
Bool: conj(
  tt(),
  ff())
rascal>example.L
Bool: tt()
rascal>example.R
Bool: ff()
```

Now let's add a "common" keyword field:

```rascal-shell ,continue
rascal>data Bool(loc origin=|unknown:///|);
ok
rascal>example = tt(origin=|home:///MyDocuments/test.bool|);
Bool: tt(origin=|home:///MyDocuments/test.bool|)
rascal>example.origin
loc: |home:///MyDocuments/test.bool|
```

A parametrized data-type can be useful at times. The following
also demonstrates an overloaded function:


```rascal-shell ,continue
rascal>data SortedList[&T] = sorted(list[&T] lst);
ok
rascal>SortedList[&T] sorted([*&T a, &T e, *&T b, &T f, *&T c]) = sorted([*a, f, *b, e, *c]) when f < e;
SortedList[&T] (list[&T]): function(|prompt:///|(0,97,<1,0>,<1,97>))
rascal>sorted([3,2,1])
SortedList[int]: sorted([1,2,3])
```

The (overloaded) `sorted` constructor is only built when the `sorted` function is done finding a list that is sorted
by swapping elements that are out of order using [list matching](../../../Rascal/Patterns/List/index.md). 

Since `SortedList` is type-parametrized it works on any kind of type:

```rascal-shell ,continue
rascal>sorted(["tic", "tac", "toe"])
SortedList[str]: sorted(["tac","tic","toe"])
```

More direct usage of overloaded constructors and functions is "normalizing rewrite rules". 
Here we use an axiomatic definition of `conj` and `disj` to rewrite all applications of `conj` to `tt` or `ff`:


```rascal-shell ,continue
rascal>Bool conj(ff(), Bool _) = ff();
Bool (Bool, Bool): function(|prompt:///|(0,31,<1,0>,<1,31>))
rascal>Bool conj(tt(), Bool b) = b;
Bool (Bool, Bool): function(|prompt:///|(0,28,<1,0>,<1,28>))
rascal>Bool disj(tt(), Bool _) = tt();
Bool (Bool, Bool): function(|prompt:///|(0,31,<1,0>,<1,31>))
rascal>Bool disj(ff(), Bool b) = b;
Bool (Bool, Bool): function(|prompt:///|(0,28,<1,0>,<1,28>))
```

Now let's try it out:

```rascal-shell ,continue
rascal>disj(conj(tt(),tt()), ff())
Bool: tt()
```


