---
title: ReifiedTypes
keywords:
  - "#"
---

#### Synopsis

Types can be represented by values

#### Description

The type reify expression operator has two functions in one go:

*  it transforms type literals into values that represent them (an isomorphic relation)
*  it reifies the declarations necessary to build values of the types as well

As a result a reified type can be used to reconstruct a type and the abstract ([Algebraic Data Type](../../../../Rascal/Declarations/AlgebraicDataType/index.md)) or concrete ([Syntax Definition](../../../../Rascal/Declarations/SyntaxDefinition/index.md)) grammar that produced it. 

Type literals have a nice interaction with [Type Parameters](../../../../Rascal/Declarations/StaticTyping/TypeParameters/index.md), since they can be used to bind a type parameter without having to provide a value of the type. An example is the [parse](../../../../Library/ParseTree.md#ParseTree-parse) function in [parse tree](../../../../Library/ParseTree.md) (see below for an example usage).

The values that are used to represent types are declared in the [Type](../../../../Library/Type.md) module and [parse tree](../../../../Library/ParseTree.md) modules, namely `Symbol` is the data-type to represent types symbolically and `Production` is the data-type for representing grammatical constructs. 

A type literal wraps a `Symbol` and a map of `Production`s.

#### Examples

First import the module `Type`:

```rascal-shell 
rascal>import Type;
ok
```
Builtin types can be constructed without definitions, so the reified type representation is simple:

```rascal-shell ,continue
rascal>#int
type[int]: type(
  int(),
  ())
rascal>#list[int]
type[list[int]]: type(
  list(int()),
  ())
rascal>#rel[int from, int to]
type[rel[int from,int to]]: type(
  set(tuple([
        label(
          "from",
          int()),
        label(
          "to",
          int())
      ])),
  ())
```
to get the symbol from the reified type:

```rascal-shell ,continue
rascal>#int.symbol
Symbol: int()
```
or we can use some definitions and reify the defined type to see a different behavior:

```rascal-shell ,continue
rascal>data Nat = zero() | succ(Nat prev) | add(Nat l, Nat r) | mul(Nat l, Nat r);
ok
rascal>#Nat
type[Nat]: type(
  adt(
    "Nat",
    []),
  (adt(
      "Nat",
      []):choice(
      adt(
        "Nat",
        []),
      {
        cons(
          label(
            "add",
            adt(
              "Nat",
              [])),
          [
            label(
              "l",
              adt(
                "Nat",
                [])),
            label(
              "r",
              adt(
                "Nat",
                []))
          ],
          [],
          {}),
        cons(
          label(
            "mul",
            adt(
              "Nat",
              [])),
          [
            label(
              "l",
              adt(
                "Nat",
                [])),
            label(
              "r",
              adt(
                "Nat",
                []))
          ],
          [],
          {}),
        cons(
          label(
            "zero",
            adt(
              "Nat",
              [])),
          [],
          [],
          {}),
        cons(
          label(
            "succ",
            adt(
              "Nat",
              [])),
          [label(
              "prev",
              adt(
                "Nat",
                []))],
          [],
          {})
      })))
```
and we can get an abstract definition of the constructors of the [AlgebraicDataType]:

```rascal-shell ,continue
rascal>import Type;
ok
rascal>#Nat.definitions[adt("Nat",[])]
Production: choice(
  adt(
    "Nat",
    []),
  {
    cons(
      label(
        "add",
        adt(
          "Nat",
          [])),
      [
        label(
          "l",
          adt(
            "Nat",
            [])),
        label(
          "r",
          adt(
            "Nat",
            []))
      ],
      [],
      {}),
    cons(
      label(
        "mul",
        adt(
          "Nat",
          [])),
      [
        label(
          "l",
          adt(
            "Nat",
            [])),
        label(
          "r",
          adt(
            "Nat",
            []))
      ],
      [],
      {}),
    cons(
      label(
        "zero",
        adt(
          "Nat",
          [])),
      [],
      [],
      {}),
    cons(
      label(
        "succ",
        adt(
          "Nat",
          [])),
      [label(
          "prev",
          adt(
            "Nat",
            []))],
      [],
      {})
  })
```
we could go the other way around and construct a type literal dynamically:

```rascal-shell ,continue
rascal>type(\int(),())
type[value]: type(
  int(),
  ())
rascal>type(\int(),()) == #int
bool: true
```
we use type literals often in IO to express an expected type:

```rascal-shell ,continue
rascal>import ValueIO;
ok
rascal>int testInt = readTextValueString(#int, "1");
int: 1
rascal>tuple[int,int] testTuple = readTextValueString(#tuple[int,int], "\<1,2\>");
tuple[int,int]: <1,2>
```



#### Pitfalls

*  Note that the type reify operator always produces constant values, because type literals are always constants.


