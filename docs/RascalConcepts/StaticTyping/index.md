---
title: Static Typing
---

#### Synopsis

Static type checking.

#### Description

![Type Lattice](/assets/RascalConcepts/StaticTyping/type-lattice.png)

Rascal has a static and a dynamic type system, which interact with each other. The static type system is used by a type checker (not yet released) to predict errors and give warnings where possible slipups have occurred. The dynamic type system ensures well-formedness of data structures and plays an important role while pattern matching, since many algorithms dispatch on the types of values.

Rascal's static type system does not ensure that all functions will go right:
   * Functions may throw exceptions.
   * Functions may not be defined for the specific pattern which occur on the call site.

However, the static type system will produce an error when a function will certainly throw an exception, or when it is certainly not defined for a certain case. Also it catches some logical tautologies and contradictions which would lead to dead code.

The Rascal types are ordered in a so-called _type lattice_ shown in the figure above.

The arrows describe a _subtype-of_ relation between types. The type `void` is the _smallest_ type and 
is included in all other types and the type `value` is the _largest_ type that includes all other types. 
We also see that `rel` is a subtype of `set` and that each ADT is a subtype of `node`. 
A special role is played by the datatype `Tree` that is the generic type of syntax trees. 
Syntax trees for specific languages are all subtypes of `Tree`. As a result, syntax trees can be addressed at two levels: 

*  In a generic fashion as `Tree` and,
*  In a specific fashion as a more precisely typed syntax tree. 
Finally, each `alias` is structurally equivalent to one or more specific other types.

Rascal does not provide an explicit casting mechanism (as in Java), but pattern matching can play that role.
 
The language provides higher-order, parametric polymorphism. 
A type aliasing mechanism allows documenting specific uses of a type. 
Built-in operators are heavily overloaded. 
For instance, the operator `+` is used for addition on integers and reals but also for list concatenation, 
set union and the like.

#### Examples

Some example can illustrate the above.

```rascal-shell ,error
rascal>int I = 3;
int: 3
```
Since I is declared as type `int`, we cannot assign a `real` value to it:

```rascal-shell ,continue,error
rascal>I = 3.5;
|prompt:///|(4,3,<1,4>,<1,7>): Expected int, but got real
Advice: |http://tutor.rascal-mpl.org/Errors/Static/UnexpectedType/UnexpectedType.html|
ok
```


```rascal-shell 
rascal>num N = 3;
num: 3
```
Since N is declared as type `num`, we can assign both `int` and `real` values to it:

```rascal-shell ,continue
rascal>N = 3.5;
num: 3.5
```

Since all types are a subtype of type `value`, one can assign values of any type to a variable declared as `value`:

```rascal-shell 
rascal>value V = 3;
value: 3
rascal>V = "abc";
value: "abc"
rascal>V = false;
value: false
```
We can use pattern matching to classify the actual type of a value:

```rascal-shell ,continue
rascal>str classify(value V){
>>>>>>>  switch(V){
>>>>>>>    case str S: return "A string";
>>>>>>>    case bool B: return "A Boolean";
>>>>>>>    default: return "Another type"; 
>>>>>>>  }
>>>>>>>}
str (value): function(|prompt:///|(0,150,<1,0>,<7,1>))
rascal>classify(V);
str: "A Boolean"
rascal>V = 3.5;
value: 3.5
rascal>classify(V);
str: "Another type"
```

In addition to these standard examples, it is interesting that all [Algebraic Data Types](../../Rascal/Declarations/AlgebraicDataType/index.md) are subtypes of type `node`.
Let's introduce a simple `Color` data type:

```rascal-shell 
rascal>data Color = red(int level) | blue(int level);
ok
```
Unsurprisingly, we have:

```rascal-shell ,continue
rascal>Color C = red(3);
Color: red(3)
```
Due to subtyping, we can also have:

```rascal-shell ,continue
rascal>node ND = red(3);
node: red(3)
```

One example of the actual application of subtypes can be found in 
[Count Constructors](../../Recipes/Common/CountConstructors/index.md).


