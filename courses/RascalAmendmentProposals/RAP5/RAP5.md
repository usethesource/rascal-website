---
title: RAP 5 - A single exact number type for Rascal
---

| RAP | 5 |
| :---- | :---- |
| Title | **A single exact number kind for Rascal** |
| Author | Jurgen Vinju |
| Status | Draft |
| Type | Rascal Language |

## Abstract

This RAP proposes to unify all of Rascal’s number kinds (*int*, *real*, *rat*) into a single representation. The primary goal is to achieve simplicity while keeping interoperability with other external data sources and sinks. The secondary goal is to achieve the intended specification of Rascal arithmetic to be fully symbolic, i.e. *exact*, and so to coincide very strongly with the notions of elementary school and highschool arithmetic.

All numbers will have associative and commutative semantics for \+ and \*, and classic distributivity for \* over \+. The rationals will have classic inversion laws of \*, / and \+, \-. This is unlike any programming language. There will be no implicit coercions, or rounding, or overflow for Rascal numbers.

The `int` type will reflect all round numbers, positive or negative. The `rat` type (supertype of `int`) will reflect all rational numbers (including the ints) and the `real` type (supertype of `rat`) will additionally reflect all other irrational numbers (including the rats). It is implied there will be only one kind of `0` value. Future versions may include an even general number types (`complex`), each again strict super-types of the previous.

Fractional representation may be used inside for efficiency’s sake, but for usability’s sake we’ll use decimal notation always for reading and writing numbers. This includes the rational numbers with infinite decimal sequences. For example: `1 / 3` will return `0.(3)` which stands for  `0.33333333…(infinitely)`. `(⅓) \* 3 == 1` with this new system, and `0.(3) \* 3 == 1` as well. (the bracket notation is a standard mathematical notation for infinitely progression decimal sequences).

Finally, we add midpoint-radius notation for *automatically handling approximations* of irrational numbers (pi, e) and raw data with inaccuracies. Programs will not explicitly have to deal with (im)precision, but Rascal will always show exactly (by default) how imprecise a calculation might be. Example: `pi(err=0.0005)` will return `3.141 ± 0.0005` to indicate that the real number pi is any number between 3.1405 and 3.1415 (and the current best guess is 3.141). We have a new theory on making the above algebraic laws of commutativity, transitivity and distributivity work for these “midpoint radius” numbers. 

## Motivation

* Complexity and incoherence: Rascal has a number of design principles: symbolic representations, immutability, strong typing, simplicity, which are currently not fully attained with the number types. There are problems with the previous design:   
  * there is currently a plethora of overloaded operators designed to make the three numbers types work together, int, real and rat.   
  * The `==` operator coerces the different types of numbers, contradicting one of the main axioms of Rascal “what-you-see-is-what-you-get” captured by the specification: for all values x, y: `x == y iff “<x>” == “<y>” ` 
    * Also even though `1. == 1` it’s not true currently that `{1., 1} == {1}` (!!!)  
  * Interaction with external data-sources leads to a combinatorial explosion when multiple function arguments are at play, this is because `rat`, `real` and `int` are currently *incomparable* types.  
  * The least-upper-bound `num` type is not used by Rascal programmers because it does not add the abstraction required to **not** think about the differences between `int`, `rat` and `real`. I.e. the substitution principle does not blossom in the current design.   
  * Generic functions over `num` do not work because there is no shared concept of the `0` and `1` values. So even though it seems the `+` operator works on all types of numbers, the `num` type itself is not a fully implemented calculus.  
    * Example: `\&T \<: num sum(list[\&T \<: num] l) = (0 | it \+ i | i \<- l);`  
    * `sum` does not type-check because `0` is not a value of all of the sub-types of `num`, just for `int` (for rat there is `0r` and for real there is `0.`). *This is not only cumbersome, it is also confusing.*  
    * In the newly proposed system the above `sum` function is valid and returns an int for a list of ints, a rat for a list of rat and a num otherwise, because 0 \\in int ⇒ 0 \\in rat =\> \\0 in real  
* *Opportunity 1*: since Rascal’s values are all symbolic and immutable anyway, there is an overhead which we pay and we do not exploit.   
  * We could have fully *exact* numbers without loss of precision without making Rascal slower. Rascal’s numbers were already “symbolic” and relatively slow at that as compared to floating point arithmetic in Julia or C.   
  * The current RAP should not make Rascal’s numbers slower than they are now, and possibly they will be faster  
  * The current RAP removes the need for run-time conversions of numbers, which may save some cycles  
* *Opportunity 2*: similarly a single number type would pave the way for units of measure integrated into the value system. We do not include this in the current RAP, but without a single number kind the unit system would grow complex quickly. We see the simplicity of this RAP as an enabler for an elegant unit type system.    
* *Opportunity 3*: currently API functions which interface with JVM libraries have to support all different kinds of Rascal’s numbers: int, real and rat. Especially with multiple arguments to a function this explodes. Library designers have to constantly think about a nearly impossible trade-off between convenience and efficiency. This problem can be removed by the current RAP.   
* *Opportunity 4*: a new unique selling point for Rascal  
  * Not exactness is a big threat to validity for many research methods in many different fields of science, not in the least **software analytics** and **software metrics**.  
  * Researcher do use R, Python and Julia libraries without knowing about the impact of inexactness of floating point arithmetic or the inaccuracies of their own data (!)  
  * A re-implementation of statistical libraries on top of exact numbers in Rascal will open up a new audience and set of “killer” apps for Rascal users, possible also outside of the context **software analytics** and **software metrics**.

## Specification

Noted that these changes have to be reflected in **vallang** as well as in **Rascal** and in the links to external number manipulation libraries (apache.math) in library code. This is a BIG change. 

### Syntax and types

1. Type system changes:  
   1. The `num` type disappears. For forward compatibility, in case a more general type then `real` is added (like `complex`) we should not have a number type which is more general than a type which will be added later.  
   2. The number type hierarchy will be: **void** \<: **int** \<: **rat** \<: **real** \<: **value**  
      1. `**real**` is the most general number type  
      2. `**rat**` is a proper sub-type of `**real**`   
      3. `**int**` is a proper sub-type of `**rat**`  
      4. The idea is that the system reflects the mathematical classes of numbers as much as possible. (see also LISP, Racket, Kawa “numerical tower”)  
   3. It is understood that the run-time type of any number is always at its most specific, even though statically the type of a variable is more generic.  
      1. This is essential for the interaction of the numbers with pattern matching  
      2. This is essential for the canonical representation of numbers and containers with numbers in them (for equational reasoning, aliasing and sharing)  
   4. In the previous type system, values of int and rat and real were of incomparable types, now `int` is a strict sub-type of `rat`. This will affect existing dynamically dispatched functions since they may not be mutually exclusive anymore.  
2. The syntax of numbers becomes a single non-terminal with a number of alternatives. (all types in Rascal coincide with some kind of literal language).   
   1. `[0-9]+` : rounded integers   
   2. `[0-9]+ “.” [0-9]+` : finite rational numbers in decimal notation   
   3.` [0-9]+ “.” [0-9]+ “(“ [0-9]+ “)”` : infinite decimal numbers with “repetents” to represent exactly rationals which have infinite decimal expansions. I.e. `0.(3) == ⅓`  
   4. The `x r y` notation disappears and is replaced by the `x/y` division expression  
   5. Syntactic support for midpoint-radius notation: `number1 ± number2` means the first number is exact within a range of `number1-number2` to `number1 \+ number2`. Number2 must be exact (no range), and so must number 1 (no range nesting).  
   6. “±” NumberLiteral: means “approximately this number”, where each digit is interpreted as if it were rounded to the nearest significant digit. So this literal `±1.00` will reduce to `1 ± 0.005` and this `±1.0` will reduce to `1 ± 0.05`. This is a convenience syntax.   
   7. Scientific notation with “e” still supported on top of decimal notation; this interacts nicely with the prefix ± notation for significant digits. 

   8. `.3` not supported anymore, you must write `0.3` for technical (ambiguity) reasons in the grammar  
   9. The repetent notation with the brackets requires an additional disambiguation for the CallOrTree expression (no literal numbers can be functions)  
3. Static types for arithmetic expressions  
   1. `lub` function is defined according to int \<: rat \<: real  
   2. For all expressions `e1`, `e2`, `type(e1) \<: **real`** and `type(e2) \<: **real`**:  
      1. type(e1 \+ e2) = lub(type(e1), type(e2))   
         1. Implied: ints remain ints, rats remain rats and reals are reals  
         2. Implied: Int \+ rat becomes rat, rat \+ real becomes real, etc.  
         3. Implied: no run-time coercion is even necessary. The numbers are already of the right kind statically (\_always\_).  
      2. type(e1 \- e2) = lub(type(e1), type(e2))   
      3. type(e1 \* e2) = lub(type(e1), type(e2))   
      4. type(e1 / e2) = lub(`**rat**`, lub(type(e1), type(e2))   
         1. / is not closed on integers: always at least a rat (statically)  
      5. type(e1 **div** e2) = `int`   
      6. type(e1 **mod** e2) = lub(type(e1), type(e2))   
      7. type([0-9]+ whole) = `**int**`  
      8. type([0-9]+ whole . [0-9]+ fraction) = `rat` **when** `fraction != 0`
      9. type([0-9]+ whole . [0]+ fraction) = `int`   
         1. **Implied:** 0.0 is an **int**, this is not strictly necessary obvious if you come from another PL, but for learnability in the REPL newbies can immediately  (statically) see and understand that 0 == 0.0 == 0.000000(0).  
      10. type([0-9]+ whole . [0-9]+ fraction “(“ [0-9]+ repetent “)”) = `**rat` when** fraction != 0\* and repetent != 0\*  
      11. type([0-9]+ whole . [0]+ fraction “(“ [0]+ repetent “)”) = `**int`**  
      12. type(e1 ± e2) = `**real**` if e2 != 0  
          1. Note that both e1 and e2 as left and right-hand sides of `±` always reduce (semantically) to values of type `**rat**` dynamically due to the axioms of `±`.  
      13. Types of inherent number property fields:  
          1. type(e1.numerator) = `int`  
          2. type(e2.denominator) = `int`  
          3. type(e1.radius) = `rat`  
          4. type(e1.midpoint) = `rat`  
          5. type(e1.whole) = `str`  
          6. type(e1.fraction) = `str`  
          7. type(e1.repetent) = `str`  
          8. type(e1.scale) = `int`  
          9. type(e1.precision) = `int`  
   3. Recall: even if statically an expression like `e1 / e2` has type `real`, still the dynamic type of the result might be `int`. Consider: `1.001 / 1.001 == 1`  
      1. This is sound because int \<: rat \<: real

   

4. Each specific instance of a number has a canonical syntactic form when it is printed:  
   1. Leading and trailing zeros are dropped  
   2. Rationals are printed in decimal notation with repetents  
      1. We always print `0.01075268817` and not `1/93`  
   3. x/1 is printed as x, so is x \* 1  
   4. Error ranges are printed using “±” as 0.0001 ± 0.000000001  
   5. Might use E scientific notation to avoid printing a lot of 0’s after the `.`  
        
5. Division. With `/` division defined on all numbers, it is also defined on integers to return rational values. This is backward incompatible and requires a few additions:  
   1. `1 / 3` will produce the rat `0.(3)` and not the int `0` anymore  
   2. New operators added `**mod**` and `**div**` operators for whole number division  
      1. 1 div 3 will produce 0  
      2. 1 mod 3 will produce 3  
      3. Mod and div can also be defined for general rationals and midpoint-radius numbers to mean “how many times does this fit?”  
   3. `**int**` indexes into lists, so `a[numExpression]` remains a static Rascal error when `a` has a type sub-type of `list[value]`. It has to be `a[intExpression]`. 

6. The internal representation of any number is always logically a gcd-normalized fraction  
   1. No more rounding errors  
   2. A challenge to make fast  
   3. Canonical representation due to the GCD, good for equality checks of (nested) collections with numbers in them (\!)  
        
7. Because there is only one number type all number operations are defined always  
   1. ==  
   2. \+  
   3. /  
   4. `div` (is / but whole number division)  
   5. `mod`  
   6. And there is only one `0` and one `1`  
8. No more coercions and no more overloading  
   1. No more coercions like the designers of Julia also advocate  
   2. But also no more implicit overloading or upgrading of numbers to higher precisions. This is enabled by having only ONE canonical representation of numbers inside, which is rationals and pairs of rationals in the midpoint-radius case.   
      1. Julia, for example, supports many different representations which can be traded by programmers (efficiency against exactness). Rascal does not offer these trade-offs anyway (never did support float or double), but we did overload `int \+ real`  and `real / int` etc. to generate a complex hierarchy of combinatorial size with possibly “interesting” conversions between rat, real and int.   
   3. The linear and predictable scheme of number I/O and conversions will be:  
      1. parse a number notation, or import it.   
      2. represent as rational,   
      3. Compute the with rationals,   
      4. print or export a number notation  
9. Midpoint-radius notation for dealing with irrational and inaccurate numbers:  
   1. Any irrational number such as pi or e or the outcome of the `sin` function, will be represented by a well-defined interval in midpoint-range notation  
   2. Any inaccurate number (for example obtained by a noisy measurement) can also be represented by the same kind of intervals  
   3. Using the midpoint range notation, we can offer a uniquely usable algebra with commutativity, associativity, distribution and (partial) inversion laws.   
   4. The specific definitions of this algebra are still under embargo  
   5. Midpoint range notation is like so: `midpoint ± radius`  
      1. The midpoint represents *the most likely* *outcome* of a computation  
      2. The radius represents an absolute radius around the midpoint. The actual value of the number may be any real number (rational or irrational) in `[midpoint \- radius, midpoint \+ radius]` (inclusive bounds)  
      3. All the arithmetic operators manage the radius’ automatically  
         1. Most code can be oblivious to the error ranges  
         2. The midpoint calculation is always isomorphic to a calculation on rational numbers without the error radius (i.e. error oblivious)  
         3. The radius’ are always a conservative over-approximation of the error  
         4. The radius’ are as tight as we can get them for the general arithmetic operators, but no specific theory will be included in the semantics of Rascal to tighten them more. This is up to the programmer.  
   6. Midpoint/radius numbers require more functions or operators for detecting overlap.   
      1. Midpoint radius numbers are only equal if both the midpoint and the radius are equal  
         1. `A ± e1 == B ± e2 ⇔ A == B && e1 == e2  
      2. Midpoint/radius numbers are partially ordered, not fully ordered like `rat`  
         1. `A ± e1 \< B ± e2 ⇔ A \+ e1 \< B \- e2`  
      3. Existing `in` operator detects interval inclusion (boolean):  
         1.  `a in b ⇔  a \>= b \- e && a \<= b \+ a`  
         2. `a ± e1 in b ± e2 ⇔  (a \- e1) in b && (a \+ e1) in b  
      4. Existing `&` operator detects interval overlap (boolean)  
         1. & is currently defined on sets as set intersection  
         2. We’re not defining interval intersection since the empty interval can not be represented using midpoint radius notation

### Support functions

* `str significant(num x)` prints a number with a number of digits upto the precision indicated by its radius. It fills with zeroes to the right.  
* Num fromSignificant(str x) parses a number, assuming the number of digits after the point represent its accuracy as a rounded number,  including trailing zeroes. So: `fromSignificant(“1.00”) would return `1 ± 0.005`.   
* Bridging to JVM languages:  
  * `INumber.as{Float,Double,Integer,Long,TwosComplement}() throws NumberFormatException` (if the number of more accurate than the target container)  
  * `IValueFactory.number({String, float,double,int,long,byte[] twoscomplement} num)` converts the value *without loss of the original precision*.  
  * Finding out about loss of precision when communicating with JVM libraries:  
    * `num fitFloat(num x)` uses the most precise float representation possible (with the least error) to represent `x`  
    * `num fitDouble(num x)` uses the most precise double representation possible (with the least error) to represent `x`  
    * `num floatError(num x)` returns the error made by fitting `x` into a JVM float  
    * `num doubleError(num x)` returns the error made by fitting `x` into a JBM double  
  * Library support for mapping INumber to `java.math.\*` big decimals and big integers and the like.  
* Mathematics library  
  * Some irrational numbers are represented by functions which produce rational approximations up to a given error:  
    * `num pi(rat err=1/1000)` produces pi within the bound given by `error`, and would be printed as such: `3.14129 ± 0.00001`  
    * `num e(rat err=1/1000)` produces pi within the bound given by `error`  
  * Goniometric functions, (sin, tan, cos, etc.) the same:  
    * tan(num n, rat err=1/1000), produces the `tan` of `n` within the bound given by `err`  
  * When a mathematical function is **undefined** for certain number(s), the function throws a value of ADT: `*NumberException*` with the constructor equal to the name of the function “Undefined” and its parameter(s) the input of the function.   
    * E.g. `data NumberException = tanUndefined(num x)`, (happens only when x == π/2, but that is logically impossible since Rascal would not have an exact representation of π/2, so it should never happen.   
    * Or, `data NumberException = avgUndefined(list\[num] l)` happens for `\[]` the empty list.  
    * The goal is to allow for precise error location, as well as allow for function-specific error-handling by catching/matching these run-time exceptions.  
* Statistics library  
  * Important use case of Rascal numbers are source code statistics.  
  * Loss of precision via external libraries would be throwing in the towel, but the loss of precision can be handled by reflecting the imprecision of `float` and `double` using the error ranges?   
  * Proposal: semi-automated source-to-source translation of Java, Julia or R **open-source** libraries for statistics towards Rascal statistics library. 


### Semantics

* Computation semantics is completely based on traditional rational number algebra. The standard field of 0, 1, \+, \* extended with /, `div` and `mod` for convenience’s sake.   
* Leading zeros are always dropped.   
* 0.0 == 0, 1.0 == 1, etc. due to standard algebra exact digit counts (“precision”) of a number are **not semantically meaningful** although symbolically different:  
  * Because *1.0 == 1 iff 10 == 10 iff 1 == 1*  
  * All numbers in Rascal are simply fully \_exact\_  
  * This means that a discussion on precision and resolution of rational numbers becomes relevant only at the boundaries between Rascal and other systems,   
  * Or we use the midpoint/radius notation for imprecise numbers  
  * The `str significant(num x)` function would return `”1.00”` for `significant(1 ± 0.005)`, to indicate that the original number was significantly precise up to 2 decimal digits after the dot.  
* `{1., 1} == {1}` as a corollary to the previous,   
  * Because `{1. , 1} == {1}` iff `{1, 1} == {1}` iff `{1} == {1}`.    
  * `\[1. , 1] == [1, 1]`, by the same reasoning  
  * Note: this opens possibility for **further optimizing the persistent collection data-structures** under vallang (using capsule) due to the possibility of a canonical internal representation of numbers, leading to short-circuiting (in)equality tests  of possibly very large collections of numbers.   
* Divide by zero is a runtime exception.   
  * We considered using Bergstra’s meadows, but the issue here is that the 0 division cancellation law is almost never really applicable (the axiom is pretty complex), and thus mostly computations which end up dividing by zero end up producing “NaN” or “a” or “I had a division by zero somewhere”. By that time the cause of the division by zero can be buried deeply in the past which hampers debugging and error reporting to the end-user.   
  * “Fail fast, fail clearly”  
* Repetents are *always* normalized to rationals inside, such that  
  * `0.(9) == 1`  
  * `0.(3) == ⅓`   
* We arrive at new and simple axioms which were not possible before due to rounding issues:  
  * ` y != 0 ⇒ x / y \* y == x`   
  * `z != 0 /\\ y != 0 ⇒ x / (y / z) == (x / y) / z`   
  * `y != 0 /\\ z != 0 ⇒ x / (y / z) = x \* (z / y)`  
* We arrive at axioms which were not possible due to number coercion and operator overloading:  
  * `(x \+ y) \+ z == x \+ (y \+ z)`  
  * `x == y iff "<x>" == "<y>"`, the “WYSIWYG” axiom, but care has to be taken that a canonical printing operation exists (see above) and that it never accidentally rounds numbers.  
* Error range semantics needs to be reflected on all built-in operations, such as \+, \-, /, \*, etc. (algebraic rules are under embargo for now)  
  * Supports commutativity, associativity and distributive law  
  * Inversion law holds for the midpoints, but not for the radius’  
  * “Obliviousness law” requires the midpoint calculations never to be affected by the error radius  
    * This is a usability feature: the programmer can always check the outcome of a calculation manually using highschool arithmetic and forgetting about the error radius  
    * This is a error-analysis refactoring feature: algorithms can be changed under the constraint of keeping all midpoints intact and improving only the bounds of the radius’.  
  * Two important axioms for the radius operator:  
    * Errors accumulate: E1 ± (e2 ± e3) = e1 \+= (e2 \+ e3)  
    * Bigger errors subsume smaller errors: (E1 ± e2) ± e3 = e1 ± (max(e2, e3))  
    * These two reductions imply canonical rational values for the left and right-hand side of `±`, since all nesting of `±` is rewritten to `+` and `max` on `rat`

### Design drawbacks and pitfalls

* Exact numbers are almost never equal  
  * Have to use `round` a lot more than before?  
  * Ignorance used to be bliss, now you see the threat to validity of your code all the time and you have to deal with it explicitly.  
* Rational numbers are more expensive than float and double  
  * Yes, factors of 10 to 20 slow down have been reported in other contexts  
  * Considering growth the speed of computer hardware this slowdown can also be seen as insignificant.  
* Many, many syntax and API breaking changes  
  * Have your cake and eat it, unfortunately.  
* Ugly notation of repetents with double brackets. 
  * Hard to fix  
  * Unicode overline is also possible when printing, but very hard to type in.   
* Statistics libraries in pure Rascal are a pretty big construction and maintenance effort.  
  * Without these libraries the point of introducing exact numbers into Rascal is almost mute, since no code will actually *use* them.   
  * The only argument left would be design simplicity.  
  * Without a semi-automatic acquisition of all these algorithms, or an open-source enthusiast willing to contribute this might be the breaking point for this RAP.   
* Error radiuses impose an additional overhead, but it would be a USP to have visible error rates on all numbers at all times.   
* Error radiuses only exist in numerical analysis packages and have not been applied in programming languages before as such.   
  * Probably because speed is always preferred over correctness  
  * But also because the specific kind proposes here is unique in providing a distributive law (which most people require to use)  
  * Alternative representations such as plain intervals suffer immensely from syntactic and semantic usability problems:  
    * No inversion, distributivity or associativity  
    * Error drift (the ranges start drifting from the midpoints)  
    * Syntactic overhead (each computation needs definition on at least two points in each program)  
    * So intervals are for numerical experts (not the audience of Rascal)

    

### Implementation details

* Using builtin integers to represent small rationals, i.e. the LSBs for the nominator and the MSBs for the denominator. This can go down to `byte` level as well for very small numbers.  
  * We might even improve on the current representation overhead of big decimals  
* Eventually large nominators/denominators will be represented by byte arrays (or big integer libraries)  
* Canonical representation is essential, **so GCD becomes a main bottleneck** and this needs to be investigated and mitigated  
  * Lazy  
  * Incremental/persistent  
  * Shared  
* No known big decimal libraries which support repetents (\!), not even notationally. Because it is expensive and because we should use rationals. 

## Backwards Compatibility

* Support (most of) the old syntax for numbers, but normalize to the new notation when printing the values  
* Rounding errors disappear which may result in new values not seen before  
* Library re-design introduces many API changes

## Implementation

* Vallang implements fast rationals, itself, based on learning from other open-source libraries. Avoid wrapping other implementations for speed reasons  
* Investigate use of JIT compilation and unboxing/boxing and/or MethodHandles   
* Library implementations (semi-automatic source-to-source translations)  
* Implementation involves removing a lot of existing code which become unnecessary in vallang, the Rascal interpreter, the Rascal type-checker and compiler(s) including removing unnecessary library code.

## Future work

What this RAP does not touch at all and still is important:

* **Dimensions and units**, run-time type system and static type system (studied in concert)  
  * Unit and dimension type systems have been investigated broadly and deeply in literature and in practise.  
  * It should not be hard to borrow the right design from somewhere?  
  * There is an overlap to be expected with our algebraic data-types, and perhaps a meaningful integration which avoids this overlap and allows for full extensibility of unit dimensions would be possible?  
* **Easier syntax and semantics for mapping and folding number operations** over the number containers (lists, sets, maps and relations)  
  * i.e. `list[real] \+ list[real]` could pairwise add the numbers if `+` weren’t already list concatenation.   
  * Now we have to write `[ a[i] \+ b[i] | i \<- index(a) ] ` or something in this vain, not even taking notice of the possible difference in length of the two lists.   
* **Diagramming**: Integration with diagram, graph and table visualisation libraries  
  * A **single number type** makes integration with external diagramming and graphing tools much easier  
  * First step: adapting Shapes and Salix bridges, perhaps also the older Figure library.   
  * Idea: optimize diagramming a lot: look at screen or paper resolution constraints to filter invisible data before processing it into the diagram.   
    * So: `scatterPlot(rel[real,real] input, resolution=600 dpi)` would not “print” dots which overlap by more than 50% (or 75% or 90%??) if printed at 600dpi. Here “print” means render or communicate to the graphics engine at all.   
    * Note that this filtering is very different from mathematical rounding. Here a “dot” is printed in a two dimensional fashion even though it is represented by mathematically precise single dimension  \<x,y\> position.   
      * “Overlapping” dots for more than 50% is a two-dimensional perspective.   
      * The overlapping points are removed entirely from the output set to be visualized, simply because some other point already represents their “visual value”.  
      * This filtering entails a communication and rendering optimization with possible orders of magnitude gains in efficiency. Consider an exponentially distributed and filled data-set, while paper and screens are simply linear in both directions.  
    * There are obvious threats to validity here and possible introduction of visible artefacts which must be taken care of very carefully.  
    * Possible related work study? Who has solved this issue in which big data processing workbench already?

## References

