---
title: "module Type"
---

#### Usage

`import Type;`

#### Synopsis

Rascal's type system, implemented in Rascal itself.

#### Description

The goal of this module is to provide:

*  reflection capabilities that are useful for deserialization and validation of data, and 
*  to provide the basic building blocks for syntax trees (see [parse tree](../Library/ParseTree.md))

The following definition is built into Rascal:
```rascal
data type[&T] = type(Symbol symbol, map[Symbol,Production] definitions);
```

The `#` operator will always produce a value of `type[&T]`, where `&T` is bound to the type that was reified.

#### Examples

```rascal-shell 
rascal>import Type;
ok
rascal>#int
type[int]: type(
  int(),
  ())
rascal>#rel[int,int]
type[rel[int,int]]: type(
  set(tuple([
        int(),
        int()
      ])),
  ())
rascal>data B = t();
ok
rascal>#B
type[B]: type(
  adt(
    "B",
    []),
  (adt(
      "B",
      []):choice(
      adt(
        "B",
        []),
      {cons(
          label(
            "t",
            adt(
              "B",
              [])),
          [],
          [],
          {})})))
rascal>syntax A = "a";
ok
rascal>#A;
type[A]: type(
  sort("A"),
  (
    layouts("$default$"):choice(
      layouts("$default$"),
      {prod(
          layouts("$default$"),
          [],
          {})}),
    empty():choice(
      empty(),
      {prod(
          empty(),
          [],
          {})}),
    sort("A"):choice(
      sort("A"),
      {prod(
          sort("A"),
          [lit("a")],
          {})})
  ))
rascal>type(\int(),())
type[value]: type(
  int(),
  ())
```
    
The following functions are provided on types:

## data Symbol {#Type-Symbol}

```rascal
data Symbol  
     = \int()
     | \bool()
     | \real()
     | \rat()
     | \str()
     | \num()
     | \node()
     | \void()
     | \value()
     | \loc()
     | \datetime()
     ;
```

#### Synopsis

A Symbol represents a Rascal Type.

#### Description

Symbols are values that represent Rascal's types. These are the atomic types.
We define here:

<1>  Atomic types.
<2> Labels that are used to give names to symbols, such as field names, constructor names, etc.
<3>  Composite types.
<4>  Parameters that represent a type variable.

In [parse tree](../Library/ParseTree.md), see [Symbol](../Library/ParseTree.md#ParseTree-Symbol), 
Symbols will be further extended with the symbols that may occur in a parse tree.

## data Symbol {#Type-Symbol}

```rascal
data Symbol  
     = \label(str name, Symbol symbol)
     ;
```

## data Symbol {#Type-Symbol}

```rascal
data Symbol  
     = \set(Symbol symbol)
     | \rel(list[Symbol] symbols)
     | \lrel(list[Symbol] symbols)
     | \tuple(list[Symbol] symbols)
     | \list(Symbol symbol)
     | \map(Symbol from, Symbol to)
     | \bag(Symbol symbol)
     | \adt(str name, list[Symbol] parameters)
     | \cons(Symbol \adt, str name, list[Symbol] parameters)
     | \alias(str name, list[Symbol] parameters, Symbol aliased)
     | \func(Symbol ret, list[Symbol] parameters, list[Symbol] kwTypes)
     | \overloaded(set[Symbol] alternatives)
     | \var-func(Symbol ret, list[Symbol] parameters, Symbol varArg)
     | \reified(Symbol symbol)
     ;
```

## data Symbol {#Type-Symbol}

```rascal
data Symbol  
     = \parameter(str name, Symbol bound)
     ;
```

## data Production {#Type-Production}

```rascal
data Production  
     = \cons(Symbol def, list[Symbol] symbols, list[Symbol] kwTypes, set[Attr] attributes)
     | \choice(Symbol def, set[Production] alternatives)
     | \composition(Production lhs, Production rhs)
     ;
```

#### Synopsis

A production in a grammar or constructor in a data type.

#### Description

Productions represent abstract (recursive) definitions of abstract data type constructors and functions:

* `cons`: a constructor for an abstract data type.
* `func`: a function.
* `choice`: the choice between various alternatives.
* `composition`: composition of two productions.

In ParseTree, see [Production](../Library/ParseTree.md#ParseTree-Production), 
Productions will be further extended and will be used to represent productions in syntax rules.

## data Attr {#Type-Attr}

```rascal
data Attr  
     = \tag(value \tag)
     ;
```

#### Synopsis

Attributes register additional semantics annotations of a definition. 

## function \var-func {#Type-\var-func}

* ``Symbol \var-func(Symbol ret, list[Symbol] parameters, Symbol varArg)``

#### Synopsis

Transform a function with varargs (`...`) to a normal function with a list argument.

## function choice {#Type-choice}

* ``Production choice(Symbol s, set[Production] choices)``

#### Synopsis

Normalize the choice between alternative productions.

#### Description

Nested choice is flattened.

## function subtype {#Type-subtype}

* ``bool subtype(type[&T] t, type[&U] u)``
* ``bool subtype(Symbol s, s)``
* ``default bool subtype(Symbol s, Symbol t)``
* ``bool subtype(Symbol _, Symbol::\value())``
* ``bool subtype(Symbol::\void(), Symbol _)``
* ``bool subtype(Symbol::\cons(Symbol a, _, list[Symbol] _), a)``
* ``bool subtype(Symbol::\cons(Symbol a, str name, list[Symbol] ap), Symbol::\cons(a,name,list[Symbol] bp))``
* ``bool subtype(Symbol::\adt(str _, list[Symbol] _), Symbol::\node())``
* ``bool subtype(Symbol::\adt(str n, list[Symbol] l), Symbol::\adt(n, list[Symbol] r))``
* ``bool subtype(Symbol::\alias(str _, list[Symbol] _, Symbol aliased), Symbol r)``
* ``bool subtype(Symbol l, \alias(str _, list[Symbol] _, Symbol aliased))``
* ``bool subtype(Symbol::\int(), Symbol::\num())``
* ``bool subtype(Symbol::\rat(), Symbol::\num())``
* ``bool subtype(Symbol::\real(), Symbol::\num())``
* ``bool subtype(Symbol::\tuple(list[Symbol] l), \tuple(list[Symbol] r))``
* ``bool subtype(Symbol::\list(Symbol s), Symbol::\list(Symbol t))``
* ``bool subtype(Symbol::\lrel(list[Symbol] l), Symbol::\lrel(list[Symbol] r))``
* ``bool subtype(Symbol::\list(Symbol s), Symbol::\lrel(list[Symbol] r))``
* ``bool subtype(Symbol::\lrel(list[Symbol] l), \list(Symbol r))``
* ``bool subtype(Symbol::\set(Symbol s), Symbol::\set(Symbol t))``
* ``bool subtype(Symbol::\rel(list[Symbol] l), Symbol::\rel(list[Symbol] r))``
* ``bool subtype(Symbol::\set(Symbol s), Symbol::\rel(list[Symbol] r))``
* ``bool subtype(Symbol::\rel(list[Symbol] l), Symbol::\set(Symbol r))``
* ``bool subtype(Symbol::\bag(Symbol s), Symbol::\bag(Symbol t))``
* ``bool subtype(Symbol::\map(Symbol from1, Symbol to1), Symbol::\map(Symbol from2, Symbol to2))``
* ``bool subtype(Symbol::\func(Symbol r1, list[Symbol] p1, list[Symbol] kw1), Symbol::\func(Symbol r2, list[Symbol] p2, list[Symbol] kw2))``
* ``bool subtype(Symbol::\parameter(str _, Symbol bound), Symbol r)``
* ``bool subtype(Symbol l, Symbol::\parameter(str _, Symbol bound))``
* ``bool subtype(Symbol::\label(str _, Symbol s), Symbol t)``
* ``bool subtype(Symbol s, Symbol::\label(str _, Symbol t))``
* ``bool subtype(Symbol::\reified(Symbol s), Symbol::\reified(Symbol t))``
* ``bool subtype(Symbol::\reified(Symbol s), Symbol::\node())``
* ``bool subtype(list[Symbol] l, list[Symbol] r)``
* ``default bool subtype(list[Symbol] l, list[Symbol] r)``

#### Synopsis

Subtype on types.

Functions with variable argument lists are normalized to normal functions

## function comparable {#Type-comparable}

* ``bool comparable(Symbol s, Symbol t)``

#### Synopsis

Check if two types are comparable, i.e., have a common supertype.

## function equivalent {#Type-equivalent}

* ``bool equivalent(Symbol s, Symbol t)``

#### Synopsis

Check if two types are equivalent.

## function eq {#Type-eq}

* ``bool eq(value x, value y)``

#### Synopsis

Structural equality between values. 

#### Description

The difference is that no implicit coercions are done between values of incomparable types, such as == does for
int, real and rat.

#### Examples

```rascal-shell 
rascal>import Type;
ok
rascal>1 == 1.0
bool: true
rascal>eq(1,1.0)
bool: false
```

## function lub {#Type-lub}

* ``Symbol lub(Symbol s, s)``
* ``default Symbol lub(Symbol s, Symbol t)``
* ``Symbol lub(Symbol::\value(), Symbol t)``
* ``Symbol lub(Symbol s, Symbol::\value())``
* ``Symbol lub(Symbol::\void(), Symbol t)``
* ``Symbol lub(Symbol s, Symbol::\void())``
* ``Symbol lub(Symbol::\int(), Symbol::\num())``
* ``Symbol lub(Symbol::\int(), Symbol::\real())``
* ``Symbol lub(Symbol::\int(), Symbol::\rat())``
* ``Symbol lub(Symbol::\rat(), Symbol::\num())``
* ``Symbol lub(Symbol::\rat(), Symbol::\real())``
* ``Symbol lub(Symbol::\rat(), Symbol::\int())``
* ``Symbol lub(Symbol::\real(), Symbol::\num())``
* ``Symbol lub(Symbol::\real(), Symbol::\int())``
* ``Symbol lub(Symbol::\real(), Symbol::\rat())``
* ``Symbol lub(Symbol::\num(), Symbol::\int())``
* ``Symbol lub(Symbol::\num(), Symbol::\real())``
* ``Symbol lub(Symbol::\num(), Symbol::\rat())``
* ``Symbol lub(Symbol::\set(Symbol s), Symbol::\set(Symbol t))``
* ``Symbol lub(Symbol::\set(Symbol s), Symbol::\rel(list[Symbol] ts))``
* ``Symbol lub(Symbol::\rel(list[Symbol] ts), Symbol::\set(Symbol s))``
* ``Symbol lub(Symbol::\rel(list[Symbol] l), Symbol::\rel(list[Symbol] r))``
* ``Symbol lub(Symbol::\rel(list[Symbol] l), Symbol::\rel(list[Symbol] r))``
* ``Symbol lub(Symbol::\rel(list[Symbol] l), Symbol::\rel(list[Symbol] r))``
* ``Symbol lub(Symbol::\rel(list[Symbol] l), Symbol::\rel(list[Symbol] r))``
* ``Symbol lub(Symbol::\rel(list[Symbol] l), Symbol::\rel(list[Symbol] r))``
* ``Symbol lub(Symbol::\rel(list[Symbol] l), Symbol::\rel(list[Symbol] r))``
* ``Symbol lub(Symbol::\list(Symbol s), Symbol::\list(Symbol t))``
* ``Symbol lub(Symbol::\list(Symbol s), \lrel(list[Symbol] ts))``
* ``Symbol lub(Symbol::\lrel(list[Symbol] ts), Symbol::\list(Symbol s))``
* ``Symbol lub(Symbol::\lrel(list[Symbol] l), Symbol::\lrel(list[Symbol] r))``
* ``Symbol lub(Symbol::\lrel(list[Symbol] l), Symbol::\lrel(list[Symbol] r))``
* ``Symbol lub(Symbol::\lrel(list[Symbol] l), Symbol::\lrel(list[Symbol] r))``
* ``Symbol lub(Symbol::\lrel(list[Symbol] l), Symbol::\lrel(list[Symbol] r))``
* ``Symbol lub(Symbol::\lrel(list[Symbol] l), Symbol::\lrel(list[Symbol] r))``
* ``Symbol lub(Symbol::\lrel(list[Symbol] l), Symbol::\lrel(list[Symbol] r))``
* ``Symbol lub(Symbol::\tuple(list[Symbol] l), Symbol::\tuple(list[Symbol] r))``
* ``Symbol lub(Symbol::\tuple(list[Symbol] l), Symbol::\tuple(list[Symbol] r))``
* ``Symbol lub(Symbol::\tuple(list[Symbol] l), Symbol::\tuple(list[Symbol] r))``
* ``Symbol lub(Symbol::\tuple(list[Symbol] l), Symbol::\tuple(list[Symbol] r))``
* ``Symbol lub(Symbol::\tuple(list[Symbol] l), Symbol::\tuple(list[Symbol] r))``
* ``Symbol lub(Symbol::\map(\label(str lfl, Symbol lf), \label(str ltl, Symbol lt)), Symbol::\map(\label(str rfl, Symbol rf), \label(str rtl, Symbol rt)))``
* ``Symbol lub(Symbol::\map(\label(str lfl, Symbol lf), \label(str ltl, Symbol lt)), Symbol::\map(\label(str rfl, Symbol rf), \label(str rtl, Symbol rt)))``
* ``Symbol lub(Symbol::\map(\label(str lfl, Symbol lf), \label(str ltl, Symbol lt)), Symbol::\map(Symbol rf, Symbol rt))``
* ``Symbol lub(Symbol::\map(Symbol lf, Symbol lt), Symbol::\map(\label(str rfl, Symbol rf), \label(str rtl, Symbol rt)))``
* ``Symbol lub(Symbol::\map(Symbol lf, Symbol lt), Symbol::\map(Symbol rf, Symbol rt))``
* ``Symbol lub(Symbol::\bag(Symbol s), Symbol::\bag(Symbol t))``
* ``Symbol lub(Symbol::\adt(str n, list[Symbol] _), Symbol::\node())``
* ``Symbol lub(Symbol::\node(), \adt(str n, list[Symbol] _))``
* ``Symbol lub(Symbol::\adt(str n, list[Symbol] lp), Symbol::\adt(n, list[Symbol] rp))``
* ``Symbol lub(Symbol::\adt(str n, list[Symbol] lp), Symbol::\adt(n, list[Symbol] rp))``
* ``Symbol lub(Symbol::\adt(str n, list[Symbol] lp), Symbol::\adt(str m, list[Symbol] rp))``
* ``Symbol lub(Symbol::\adt(str ln, list[Symbol] lp), Symbol::\cons(Symbol b, _, list[Symbol] _))``
* ``Symbol lub(Symbol::\cons(Symbol la, _, list[Symbol] _), Symbol::\cons(Symbol ra, _, list[Symbol] _))``
* ``Symbol lub(Symbol::\cons(Symbol a, _, list[Symbol] lp), Symbol::\adt(str n, list[Symbol] rp))``
* ``Symbol lub(Symbol::\cons(Symbol _, _, list[Symbol] _), Symbol::\node())``
* ``Symbol lub(Symbol::\alias(str _, list[Symbol] _, Symbol aliased), Symbol r)``
* ``Symbol lub(Symbol l, \alias(str _, list[Symbol] _, Symbol aliased))``

#### Synopsis

The least-upperbound (lub) between two types.

#### Description

This function documents and implements the lub operation in Rascal's type system. 

## function keepParams {#Type-keepParams}

* ``bool keepParams(Symbol::\parameter(str s1, Symbol bound1), Symbol::\parameter(str s2, Symbol bound2))``

## function lub {#Type-lub}

* ``Symbol lub(Symbol l:Symbol::\parameter(str s1, Symbol bound1), Symbol r:Symbol::\parameter(str s2, Symbol bound2))``
* ``Symbol lub(Symbol l:Symbol::\parameter(str s1, Symbol bound1), Symbol r:Symbol::\parameter(str s2, Symbol bound2))``
* ``Symbol lub(Symbol::\parameter(str _, Symbol bound), Symbol r)``
* ``Symbol lub(Symbol l, Symbol::\parameter(str _, Symbol bound))``
* ``Symbol lub(Symbol::\reified(Symbol l), Symbol::\reified(Symbol r))``
* ``Symbol lub(Symbol::\reified(Symbol l), Symbol::\node())``
* ``Symbol lub(Symbol::\func(Symbol lr, list[Symbol] lp, list[Symbol] lkw), Symbol::\func(Symbol rr, list[Symbol] rp, list[Symbol] rkw))``
* ``Symbol lub(Symbol::\label(_,Symbol l), Symbol r)``
* ``Symbol lub(Symbol l, Symbol::\label(_,Symbol r))``
* ``list[Symbol] lub(list[Symbol] l, list[Symbol] r)``
* ``default list[Symbol] lub(list[Symbol] l, list[Symbol] r)``

## function allLabeled {#Type-allLabeled}

* ``bool allLabeled(list[Symbol] l)``

## function noneLabeled {#Type-noneLabeled}

* ``bool noneLabeled(list[Symbol] l)``

## function getLabels {#Type-getLabels}

* ``list[str] getLabels(list[Symbol] l)``

## function addLabels {#Type-addLabels}

* ``list[Symbol] addLabels(list[Symbol] l, list[str] s)``
* ``default list[Symbol] addLabels(list[Symbol] l, list[str] s)``

## function stripLabels {#Type-stripLabels}

* ``list[Symbol] stripLabels(list[Symbol] l)``

## function getParamLabels {#Type-getParamLabels}

* ``list[str] getParamLabels(list[Symbol] l)``

## function addParamLabels {#Type-addParamLabels}

* ``list[Symbol] addParamLabels(list[Symbol] l, list[str] s)``
* ``default list[Symbol] addParamLabels(list[Symbol] l, list[str] s)``

## function glb {#Type-glb}

* ``Symbol glb(Symbol s, s)``
* ``default Symbol glb(Symbol s, Symbol t)``
* ``Symbol glb(Symbol::\void(), Symbol t)``
* ``Symbol glb(Symbol s, Symbol::\void())``
* ``Symbol glb(Symbol::\value(), Symbol t)``
* ``Symbol glb(Symbol s, Symbol::\value())``
* ``Symbol glb(Symbol::\int(), Symbol::\num())``
* ``Symbol glb(Symbol::\num(), Symbol::\int())``
* ``Symbol glb(Symbol::\rat(),Symbol::\num())``
* ``Symbol glb(Symbol::\num(), Symbol::\rat())``
* ``Symbol glb(Symbol::\real(), Symbol::\num())``
* ``Symbol glb(Symbol::\num(), Symbol::\real())``
* ``Symbol glb(Symbol::\set(Symbol s), Symbol::\set(Symbol t))``
* ``Symbol glb(Symbol::\set(Symbol s), Symbol::\rel(list[Symbol] ts))``
* ``Symbol glb(Symbol::\rel(list[Symbol] ts), Symbol::\set(Symbol s))``
* ``Symbol glb(Symbol::\rel(list[Symbol] l), Symbol::\rel(list[Symbol] r))``
* ``Symbol glb(Symbol::\rel(list[Symbol] l), Symbol::\rel(list[Symbol] r))``
* ``Symbol glb(Symbol::\rel(list[Symbol] l), Symbol::\rel(list[Symbol] r))``
* ``Symbol glb(Symbol::\rel(list[Symbol] l), Symbol::\rel(list[Symbol] r))``
* ``Symbol glb(Symbol::\rel(list[Symbol] l), Symbol::\rel(list[Symbol] r))``
* ``Symbol glb(Symbol::\rel(list[Symbol] l), Symbol::\rel(list[Symbol] r))``
* ``Symbol glb(Symbol::\list(Symbol s), Symbol::\list(Symbol t))``
* ``Symbol glb(Symbol::\list(Symbol s), Symbol::\lrel(list[Symbol] ts))``
* ``Symbol glb(Symbol::\lrel(list[Symbol] ts), Symbol::\list(Symbol s))``
* ``Symbol glb(Symbol::\lrel(list[Symbol] l), Symbol::\lrel(list[Symbol] r))``
* ``Symbol glb(Symbol::\lrel(list[Symbol] l), Symbol::\lrel(list[Symbol] r))``
* ``Symbol glb(Symbol::\lrel(list[Symbol] l), Symbol::\lrel(list[Symbol] r))``
* ``Symbol glb(Symbol::\lrel(list[Symbol] l), Symbol::\lrel(list[Symbol] r))``
* ``Symbol glb(Symbol::\lrel(list[Symbol] l), Symbol::\lrel(list[Symbol] r))``
* ``Symbol glb(Symbol::\lrel(list[Symbol] l), Symbol::\lrel(list[Symbol] r))``
* ``Symbol glb(Symbol::\tuple(list[Symbol] l), Symbol::\tuple(list[Symbol] r))``
* ``Symbol glb(Symbol::\tuple(list[Symbol] l), Symbol::\tuple(list[Symbol] r))``
* ``Symbol glb(Symbol::\tuple(list[Symbol] l), Symbol::\tuple(list[Symbol] r))``
* ``Symbol glb(Symbol::\tuple(list[Symbol] l), Symbol::\tuple(list[Symbol] r))``
* ``Symbol glb(Symbol::\tuple(list[Symbol] l), Symbol::\tuple(list[Symbol] r))``
* ``Symbol glb(Symbol::\map(\label(str lfl, Symbol lf), \label(str ltl, Symbol lt)), Symbol::\map(\label(str rfl, Symbol rf), \label(str rtl, Symbol rt)))``
* ``Symbol glb(Symbol::\map(\label(str lfl, Symbol lf), \label(str ltl, Symbol lt)), Symbol::\map(\label(str rfl, Symbol rf), \label(str rtl, Symbol rt)))``
* ``Symbol glb(Symbol::\map(\label(str lfl, Symbol lf), \label(str ltl, Symbol lt)), Symbol::\map(Symbol rf, Symbol rt))``
* ``Symbol glb(Symbol::\map(Symbol lf, Symbol lt), Symbol::\map(\label(str rfl, Symbol rf), \label(str rtl, Symbol rt)))``
* ``Symbol glb(Symbol::\map(Symbol lf, Symbol lt), Symbol::\map(Symbol rf, Symbol rt))``
* ``Symbol glb(Symbol::\bag(Symbol s), Symbol::\bag(Symbol t))``
* ``Symbol glb(Symbol::\adt(str n, list[Symbol] _), Symbol::\node())``
* ``Symbol glb(\node(), Symbol::\adt(str n, list[Symbol] _))``
* ``Symbol glb(Symbol::\adt(str n, list[Symbol] lp), Symbol::\adt(n, list[Symbol] rp))``
* ``Symbol glb(Symbol::\adt(str n, list[Symbol] lp), Symbol::\adt(n, list[Symbol] rp))``
* ``Symbol glb(Symbol::\adt(str n, list[Symbol] lp), Symbol::\adt(str m, list[Symbol] rp))``
* ``Symbol glb(Symbol::\adt(str ln, list[Symbol] lp), Symbol::\cons(Symbol b, _, list[Symbol] _))``
* ``Symbol glb(Symbol::\cons(Symbol la, _, list[Symbol] _), Symbol::\cons(Symbol ra, _, list[Symbol] _))``
* ``Symbol glb(Symbol::\cons(Symbol a, _, list[Symbol] lp), Symbol::\adt(str n, list[Symbol] rp))``
* ``Symbol glb(Symbol::\cons(Symbol _, _, list[Symbol] _), \node())``
* ``Symbol glb(Symbol::\alias(str _, list[Symbol] _, Symbol aliased), Symbol r)``
* ``Symbol glb(Symbol l, Symbol::\alias(str _, list[Symbol] _, Symbol aliased))``
* ``Symbol glb(Symbol::\parameter(str _, Symbol bound), Symbol r)``
* ``Symbol glb(Symbol l, Symbol::\parameter(str _, Symbol bound))``
* ``Symbol glb(Symbol::\reified(Symbol l), Symbol::\reified(Symbol r))``
* ``Symbol glb(Symbol::\reified(Symbol l), Symbol::\node())``
* ``Symbol glb(Symbol::\func(Symbol lr, list[Symbol] lp, list[Symbol] kwl), Symbol::\func(Symbol rr, list[Symbol] rp, list[Symbol] kwr))``
* ``Symbol glb(Symbol::\label(_,Symbol l), Symbol r)``
* ``Symbol glb(Symbol l, Symbol::\label(_,Symbol r))``
* ``list[Symbol] glb(list[Symbol] l, list[Symbol] r)``
* ``default list[Symbol] glb(list[Symbol] l, list[Symbol] r)``

#### Synopsis

The greatest lower bound (glb) between two types.

#### Description

This function documents and implements the glb operation in Rascal's type system. 

## data Exception {#Type-Exception}

```rascal
data Exception  
     = typeCastException(Symbol from, type[value] to)
     ;
```

## function typeCast {#Type-typeCast}

* ``&T typeCast(type[&T] typ, value v)``

## function make {#Type-make}

* ``&T make(type[&T] typ, str name, list[value] args)``
* ``&T make(type[&T] typ, str name, list[value] args, map[str,value] keywordArgs)``

#### Synopsis

Instantiate an ADT constructor of a given type with the given children and optional keyword arguments.

#### Description

This function will build a constructor if the definition exists and throw an exception otherwise.

## function typeOf {#Type-typeOf}

* ``Symbol typeOf(value v)``

#### Synopsis

Returns the dynamic type of a value as a reified type.

#### Description

As opposed to the # operator, which produces the type of a value statically, this
function produces the dynamic type of a value, represented by a symbol.

#### Examples

```rascal-shell 
rascal>import Type;
ok
rascal>value x = 1;
value: 1
rascal>typeOf(x)
Symbol: int()
```

#### Pitfalls

*  Note that the `typeOf` function does not produce definitions, like the 
   [reify](../Rascal/Expressions/Values/ReifiedTypes/) operator `#` does, 
   since values may escape the scope in which they've been constructed leaving their contents possibly undefined.

## function isIntType {#Type-isIntType}

* ``bool isIntType(Symbol::\alias(_,_,Symbol at))``
* ``bool isIntType(Symbol::\parameter(_,Symbol tvb))``
* ``bool isIntType(Symbol::\label(_,Symbol lt))``
* ``bool isIntType(Symbol::\int())``
* ``default bool isIntType(Symbol _)``

#### Synopsis

Determine if the given type is an int.

## function isBoolType {#Type-isBoolType}

* ``bool isBoolType(Symbol::\alias(_,_,Symbol at))``
* ``bool isBoolType(Symbol::\parameter(_,Symbol tvb))``
* ``bool isBoolType(Symbol::\label(_,Symbol lt))``
* ``bool isBoolType(Symbol::\bool())``
* ``default bool isBoolType(Symbol _)``

#### Synopsis

Determine if the given type is a bool.

## function isRealType {#Type-isRealType}

* ``bool isRealType(Symbol::\alias(_,_,Symbol at))``
* ``bool isRealType(Symbol::\parameter(_,Symbol tvb))``
* ``bool isRealType(Symbol::\label(_,Symbol lt))``
* ``bool isRealType(Symbol::\real())``
* ``default bool isRealType(Symbol _)``

#### Synopsis

Determine if the given type is a real.

## function isRatType {#Type-isRatType}

* ``bool isRatType(Symbol::\alias(_,_,Symbol at))``
* ``bool isRatType(Symbol::\parameter(_,Symbol tvb))``
* ``bool isRatType(Symbol::\label(_,Symbol lt))``
* ``bool isRatType(Symbol::\rat())``
* ``default bool isRatType(Symbol _)``

#### Synopsis

Determine if the given type is a rational.

## function isStrType {#Type-isStrType}

* ``bool isStrType(Symbol::\alias(_,_,Symbol at))``
* ``bool isStrType(Symbol::\parameter(_,Symbol tvb))``
* ``bool isStrType(Symbol::\label(_,Symbol lt))``
* ``bool isStrType(Symbol::\str())``
* ``default bool isStrType(Symbol _)``

#### Synopsis

Determine if the given type is a string.

## function isNumType {#Type-isNumType}

* ``bool isNumType(Symbol::\alias(_,_,Symbol at))``
* ``bool isNumType(Symbol::\parameter(_,Symbol tvb))``
* ``bool isNumType(Symbol::\label(_,Symbol lt))``
* ``bool isNumType(Symbol::\num())``
* ``default bool isNumType(Symbol _)``

#### Synopsis

Determine if the given type is a num.

## function isNodeType {#Type-isNodeType}

* ``bool isNodeType(Symbol::\alias(_,_,Symbol at))``
* ``bool isNodeType(Symbol::\parameter(_,Symbol tvb))``
* ``bool isNodeType(Symbol::\label(_,Symbol lt))``
* ``bool isNodeType(Symbol::\node())``
* ``bool isNodeType(Symbol::\adt(_,_))``
* ``default bool isNodeType(Symbol _)``

#### Synopsis

Determine if the given type is a node.

## function isVoidType {#Type-isVoidType}

* ``bool isVoidType(Symbol::\alias(_,_,Symbol at))``
* ``bool isVoidType(Symbol::\parameter(_,Symbol tvb))``
* ``bool isVoidType(Symbol::\label(_,Symbol lt))``
* ``bool isVoidType(Symbol::\void())``
* ``default bool isVoidType(Symbol _)``

#### Synopsis

Determine if the given type is a void.

## function isValueType {#Type-isValueType}

* ``bool isValueType(Symbol::\alias(_,_,Symbol at))``
* ``bool isValueType(Symbol::\parameter(_,Symbol tvb))``
* ``bool isValueType(Symbol::\label(_,Symbol lt))``
* ``bool isValueType(Symbol::\value())``
* ``default bool isValueType(Symbol _)``

#### Synopsis

Determine if the given type is a value.

## function isLocType {#Type-isLocType}

* ``bool isLocType(Symbol::\alias(_,_,Symbol at))``
* ``bool isLocType(Symbol::\parameter(_,Symbol tvb))``
* ``bool isLocType(Symbol::\label(_,Symbol lt))``
* ``bool isLocType(Symbol::\loc())``
* ``default bool isLocType(Symbol _)``

#### Synopsis

Determine if the given type is a loc.

## function isDateTimeType {#Type-isDateTimeType}

* ``bool isDateTimeType(Symbol::\alias(_,_,Symbol at))``
* ``bool isDateTimeType(Symbol::\parameter(_,Symbol tvb))``
* ``bool isDateTimeType(Symbol::\label(_,Symbol lt))``
* ``bool isDateTimeType(Symbol::\datetime())``
* ``default bool isDateTimeType(Symbol _)``

#### Synopsis

Determine if the given type is a `datetime`.

## function isSetType {#Type-isSetType}

* ``bool isSetType(Symbol::\alias(_,_,Symbol at))``
* ``bool isSetType(Symbol::\parameter(_,Symbol tvb))``
* ``bool isSetType(Symbol::\label(_,Symbol lt))``
* ``bool isSetType(Symbol::\set(_))``
* ``bool isSetType(Symbol::\rel(_))``
* ``default bool isSetType(Symbol _)``

#### Synopsis

Determine if the given type is a set.

## function isRelType {#Type-isRelType}

* ``bool isRelType(Symbol::\alias(_,_,Symbol at))``
* ``bool isRelType(Symbol::\parameter(_,Symbol tvb))``
* ``bool isRelType(Symbol::\label(_,Symbol lt))``
* ``bool isRelType(Symbol::\rel(_))``
* ``bool isRelType(Symbol::\set(Symbol tp))``
* ``default bool isRelType(Symbol _)``

#### Synopsis

Determine if the given type is a relation.

## function isListRelType {#Type-isListRelType}

* ``bool isListRelType(Symbol::\alias(_,_,Symbol at))``
* ``bool isListRelType(Symbol::\parameter(_,Symbol tvb))``
* ``bool isListRelType(Symbol::\label(_,Symbol lt))``
* ``bool isListRelType(Symbol::\lrel(_))``
* ``bool isListRelType(Symbol::\list(Symbol tp))``
* ``default bool isListRelType(Symbol _)``

#### Synopsis

Determine if the given type is a list relation.

## function isTupleType {#Type-isTupleType}

* ``bool isTupleType(Symbol::\alias(_,_,Symbol at))``
* ``bool isTupleType(Symbol::\parameter(_,Symbol tvb))``
* ``bool isTupleType(Symbol::\label(_,Symbol lt))``
* ``bool isTupleType(Symbol::\tuple(_))``
* ``default bool isTupleType(Symbol _)``

#### Synopsis

Determine if the given type is a tuple.

## function isListType {#Type-isListType}

* ``bool isListType(Symbol::\alias(_,_,Symbol at))``
* ``bool isListType(Symbol::\parameter(_,Symbol tvb))``
* ``bool isListType(Symbol::\label(_,Symbol lt))``
* ``bool isListType(Symbol::\list(_))``
* ``bool isListType(Symbol::\lrel(_))``
* ``default bool isListType(Symbol _)``

#### Synopsis

Determine if the given type is a list.

## function isListRelType {#Type-isListRelType}

* ``bool isListRelType(Symbol::\alias(_,_,Symbol at))``
* ``bool isListRelType(Symbol::\parameter(_,Symbol tvb))``
* ``bool isListRelType(Symbol::\label(_,Symbol lt))``
* ``bool isListRelType(Symbol::\lrel(_))``
* ``default bool isListRelType(Symbol _)``

#### Synopsis

Determine if the given type is a list relation.

## function isMapType {#Type-isMapType}

* ``bool isMapType(Symbol::\alias(_,_,Symbol at))``
* ``bool isMapType(Symbol::\parameter(_,Symbol tvb))``
* ``bool isMapType(Symbol::\label(_,Symbol lt))``
* ``bool isMapType(Symbol::\map(_,_))``
* ``default bool isMapType(Symbol _)``

#### Synopsis

Determine if the given type is a map.

## function isBagType {#Type-isBagType}

* ``bool isBagType(Symbol::\alias(_,_,Symbol at))``
* ``bool isBagType(Symbol::\parameter(_,Symbol tvb))``
* ``bool isBagType(Symbol::\label(_,Symbol lt))``
* ``bool isBagType(Symbol::\bag(_))``
* ``default bool isBagType(Symbol _)``

#### Synopsis

Determine if the given type is a bag (bags are not yet implemented).

## function isADTType {#Type-isADTType}

* ``bool isADTType(Symbol::\alias(_,_,Symbol at))``
* ``bool isADTType(Symbol::\parameter(_,Symbol tvb))``
* ``bool isADTType(Symbol::\label(_,Symbol lt))``
* ``bool isADTType(Symbol::\adt(_,_))``
* ``bool isADTType(Symbol::\reified(_))``
* ``default bool isADTType(Symbol _)``

#### Synopsis

Determine if the given type is an Abstract Data Type (ADT).

## function isConstructorType {#Type-isConstructorType}

* ``bool isConstructorType(Symbol::\alias(_,_,Symbol at))``
* ``bool isConstructorType(Symbol::\parameter(_,Symbol tvb))``
* ``bool isConstructorType(Symbol::\label(_,Symbol lt))``
* ``bool isConstructorType(Symbol::\cons(Symbol _,str _,list[Symbol] _))``
* ``default bool isConstructorType(Symbol _)``

#### Synopsis

Determine if the given type is a constructor.

## function isAliasType {#Type-isAliasType}

* ``bool isAliasType(Symbol::\alias(_,_,_))``
* ``bool isAliasType(Symbol::\parameter(_,Symbol tvb))``
* ``bool isAliasType(Symbol::\label(_,Symbol lt))``
* ``default bool isAliasType(Symbol _)``

#### Synopsis

Determine if the given type is an alias.

## function isFunctionType {#Type-isFunctionType}

* ``bool isFunctionType(Symbol::\alias(_,_,Symbol at))``
* ``bool isFunctionType(Symbol::\parameter(_,Symbol tvb))``
* ``bool isFunctionType(Symbol::\label(_,Symbol lt))``
* ``bool isFunctionType(Symbol::\func(_,_,_))``
* ``default bool isFunctionType(Symbol _)``

#### Synopsis

Determine if the given type is a function.

## function isReifiedType {#Type-isReifiedType}

* ``bool isReifiedType(Symbol::\alias(_,_,Symbol at))``
* ``bool isReifiedType(Symbol::\parameter(_,Symbol tvb))``
* ``bool isReifiedType(Symbol::\label(_,Symbol lt))``
* ``bool isReifiedType(Symbol::\reified(_))``
* ``default bool isReifiedType(Symbol _)``

#### Synopsis

Determine if the given type is a reified type.

## function isTypeVar {#Type-isTypeVar}

* ``bool isTypeVar(Symbol::\parameter(_,_))``
* ``bool isTypeVar(Symbol::\alias(_,_,Symbol at))``
* ``bool isTypeVar(Symbol::\label(_,Symbol lt))``
* ``default bool isTypeVar(Symbol _)``

#### Synopsis

Determine if the given type is an type variable (parameter).

