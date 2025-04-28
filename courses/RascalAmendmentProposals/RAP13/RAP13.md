---
title: RAP 13 - Name-parametrized syntax role modifiers
sidebar_position: 13
---

| RAP | 13 |
| :---- | :---- |
| Title | Name-parametrized syntax role modifiers |
| Author | Jurgen Vinju, Paul Klint, Tijs van der Storm |
| Status | Draft |
| Type | Rascal Language, Static & Dynamic Type System  |

## Abstract

We want to introduce *syntax role modifiers* like `data[Statement]` , `syntax[Statement]` , `layout[Statement]` , and also “name-parameterized” modifiers like `data[&Name]`.

## Motivation

This RAP solves 3 problems in one go:

* The five syntax types \-**data**, **syntax**, **lexical**, **layout**, and **keywords**\- are *indistinguishable* from each other in Rascal source code because they all use identifier names (like `Statement`, `Expression` and `Declaration`). This leads to confusion since the types internally are different, more technically: they are *type*\-*incomparable* even if the names are equal*.* So, there exist equally looking types which are semantically different. Does not compute.  
* Transformations between syntax types can not be expressed as function types, unless the types are defined in different modules (then module prefixes can be used).  
  * E.g. `Statement implode(Statement x)` **does** **not** make sense, while `data[Statement] implode(syntax[Statement] pt)` **does** make sense.   
  * Implicitly defined syntax types, such as by `implode` or `explode` can not be used at all; while with syntax role modifiers we could implement “name preserving” function types.  
  *  `data[&N] implode(syntax[&N] pt)` would express a transformation from syntax tree to data tree while **preserving the name** of the type and changing its role modifier.  
* These issues are made worse by the plan to introduce “concrete syntax for external parsers”, namely for every `data` type there will be an implicit `syntax` type. Before with “implode” we could still pass the grammar of the target type as a parameter \- `&T implode(type[&T], &U <: Tree input)` \- but with “explode” there will be no such grammar typed in by the user. Hence *the concrete syntax feature for external parser is impossible* without a solution for the above. It is not expressible in Rascal momentarily.  
* This was already a hole in the type system, but we worked around it using modules and module prefixes, or judiciously not having two definitions of the same name in scope at the same time. It would be good to have this problem addressed, also independently of the concrete syntax urgency. 

## Specification

No new **syntax** is necessary for the new feature, we reuse the parametrized alias notation:

* Explicit notation: **`syntax`**`[Identifier]` , **`lexical`**`[Identifier]` , **`layout`**`[Identifier]` , **`keywords`**`[Identifier]` and **`data`**`[Identifier]`  
* Parameterized notation: **`syntax`**`[&Identifier]` , **`lexical`**`[&Identifier]` , **`layout`**`[&Identifier]` , **`keywords`**`[&Identifier]` and `data[&Identifier]`  
* Have to allow the use of these reserved keywords as “type names” before the parameters syntactically in the grammar.   
* Do not have to reserve any new keywords

The **semantics** of the **explicit** **notation** is “type alias”, where:

* **`data`**`[Id]` is an alias for `Id` where `Id` is declared as **`data`** `Id =` ...  
* **`syntax`**`[Id]` is an alias for `Id` where `Id` is declared as **`syntax`** `Id =` ...  
* **`lexical`**`[Id]` is an alias for `Id` where `Id` is declared as **`lexical`** `Id =` ...  
* **`layout`**`[Id]` is an alias for `Id` where `Id` is declared as **`layout`** `Id =` ...  
* **`keywords`**`[Id]` is an alias for `Id` where `Id` is declared as **`keywords`** `Id =` ...

With such explicit aliases, in case of an ambiguous name resolution for `Statement` where it is both in scope as a **`data`** and in scope as **`syntax`** type, the programmer can explicitly disambiguate by choosing either **`data`**`[Statement]` or **`syntax`**`[Statement]`. 

Since the above semantics is a simple matter of desugaring, there are no implications for the downstream type system.

The **semantics** of the **parametrized** **notation** is as follows:

* No other parameters are allowed instead of identifier names and type parameter names. I.e. **`data`**`[list[int]]` does not exist and it is not allowed.  
* In pattern matching positions with **free variable \&N**, the type **`data`**`[&N]` matches only with abstract data-types, and binds `&N` to the subject type. We have analogous rules for syntax, lexical, layout and keywords.  
* In pattern matching positions with **bound variable** **\&N**, or in the return type of functions where bound variables are instantiated, the data-type **`syntax`**`[&N]` instantiates to a syntax type **with the same name** as the type that `&N` was bound to.  
  * `&N` is statically known to have been bound by one of the syntax types, data, syntax, lexical, layout or keywords. Other possibilities are not allowed to prevent such cases as **`data`**`[list[int]]` at run-time.  
  * Analogously for the other syntax roles, of course.

## Backwards Compatibility

* The additional type-checking rules are not necessary for run-time execution, unless a program actually breaks the rules. This means we can add the feature to the interpreter and compiler and then independently to the type-checker.  
* There are no syntactic incompatibilities.  
* All existing programs will work since they do not use this new feature  
* There may be an urge to change the type of `implode` to a “name-preserving” variant, but that would break a lot of existing code. If we want to write a “name-safe” implode function we better come up with a different name or a different amount of parameters.

## Implementation

Internally this could be implements by a set of rewrite rules such as:

* `parametrized-adt(“data”, [sort(“X”)]) = adt(“X”)`  
* `parametrized-adt(“syntax”, [adt(“X”)]) =  sort(“X”)`  
* The semantics always ignores the modifier of the internal syntax type, but reuses its name to create an instance of the external type.

And there are (at least)  these details to consider:

* Allow `data[..]` , i.e. reserved keywords as names of parametrized types.  
* Implement syntactic sugar, where people use the notation rewrite it immediately to the respective type representation, using the above rules.  
* Add additional checks for open modifiers like `data[&N]` during pattern matching: it may only match data-types with that specific role and not just the generic `node` or any other syntax type.  
* Add specific instantiation semantics to parametrized data-types (i.e. the implementation of `Type.instantiate`), that implement the above rewrite rules (“lazy desugaring”). I.e. when `data[sort(“S”)]` is constructed reduce it to `adt(“S”)`.   
* That’s all. 

## Alternative solutions

* Could disallow identifiers for type names of syntax completely, and only allow `data[X]` instead of `X` .   
  * Pro: removes all ambiguity and introduces a one-to-one mapping from type literals to type instances  
  * Against: this makes a lot of code **longer and wider**, unnecessarily. I.e. `data Bool = and(data[Bool] lhs, data[Bool] rhs)` would not be so nice.  
* Could make all concrete syntax untyped. So all instances of concrete trees would become of type `Tree`   
  * Pro: although this simplifies the introduction of concrete syntax,  
  * Against:  it is also **messy** and the client code would not be very self-documenting.   
* Could create Rascal code generators that produce modules with quasi syntax rules for every abstract data-type in a reified grammar, and then use module prefix disambiguation to select the concrete type over the abstract types in client code where needed.   
  * Pro: this could work,   
  * Against: but it is **ugly**, and we’d never be able to get rid of it anymore. Also it depends on how people accidentally write and import other modules. 

## References

