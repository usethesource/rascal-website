---
title: "module lang::rascal::tests::basic::Generics"
---

#### Usage

`import lang::rascal::tests::basic::Generics;`

tests specific aspects of generic functions and generic data-types in Rascal


## data Wrapper {#lang-rascal-tests-basic-Generics-Wrapper}

```rascal
data Wrapper[&SAME]  
     = something(&SAME wrapped)
     ;
```

## alias Graph[&SAME] {#lang-rascal-tests-basic-Generics-Graph[&SAME]}

```rascal
rel[&SAME from, &SAME to]

```

## function getIt {#lang-rascal-tests-basic-Generics-getIt}

```rascal
&SAME getIt(Wrapper[&SAME] x)

```

it matters for testing that '&SAME' is the same name as in the definition of Wrapper

## function hygienicGenericADT {#lang-rascal-tests-basic-Generics-hygienicGenericADT}

```rascal
test bool hygienicGenericADT()

```

## function recursiveGenericFunction {#lang-rascal-tests-basic-Generics-recursiveGenericFunction}

```rascal
int recursiveGenericFunction(&T n)

```

## function genericFunction1 {#lang-rascal-tests-basic-Generics-genericFunction1}

```rascal
test bool genericFunction1()

```

## function genericFunction2 {#lang-rascal-tests-basic-Generics-genericFunction2}

```rascal
test bool genericFunction2()

```

## function less {#lang-rascal-tests-basic-Generics-less}

```rascal
bool less(&T a, &T b)

```

## function lessIsConsistentThroughTypeParameters {#lang-rascal-tests-basic-Generics-lessIsConsistentThroughTypeParameters}

```rascal
test bool lessIsConsistentThroughTypeParameters(num x, num y)

```

## function avoidEmpty {#lang-rascal-tests-basic-Generics-avoidEmpty}

```rascal
&T avoidEmpty(list[&T] _)

&T avoidEmpty(list[&T] _)

```

## function voidReturnIsNotAllowed {#lang-rascal-tests-basic-Generics-voidReturnIsNotAllowed}

```rascal
test bool voidReturnIsNotAllowed()

```

## function cast {#lang-rascal-tests-basic-Generics-cast}

```rascal
&T cast(type[&T] _, value x)

```

## function typeParametersAreCheckedStaticallyButAlsoBoundDynamically {#lang-rascal-tests-basic-Generics-typeParametersAreCheckedStaticallyButAlsoBoundDynamically}

```rascal
test bool typeParametersAreCheckedStaticallyButAlsoBoundDynamically()

```

## function \filter {#lang-rascal-tests-basic-Generics-\filter}

```rascal
list[&T] \filter(type[&T] _, list[value] elems)

```

## function typeParametersAreCheckedStaticallyButAlsoBoundDynamically2 {#lang-rascal-tests-basic-Generics-typeParametersAreCheckedStaticallyButAlsoBoundDynamically2}

```rascal
test bool typeParametersAreCheckedStaticallyButAlsoBoundDynamically2()

```

## function typeParametersAreCheckedStaticallyButAlsoBoundDynamically2_2 {#lang-rascal-tests-basic-Generics-typeParametersAreCheckedStaticallyButAlsoBoundDynamically2_2}

```rascal
test bool typeParametersAreCheckedStaticallyButAlsoBoundDynamically2_2()

```

## function typeParametersAreCheckedStaticallyButAlsoBoundDynamically3 {#lang-rascal-tests-basic-Generics-typeParametersAreCheckedStaticallyButAlsoBoundDynamically3}

```rascal
test bool typeParametersAreCheckedStaticallyButAlsoBoundDynamically3()

```

## function typeParametersAreCheckedStaticallyButAlsoBoundDynamically3_2 {#lang-rascal-tests-basic-Generics-typeParametersAreCheckedStaticallyButAlsoBoundDynamically3_2}

```rascal
test bool typeParametersAreCheckedStaticallyButAlsoBoundDynamically3_2()

```

## function typeParametersAreCheckedStaticallyButAlsoBoundDynamically3_3 {#lang-rascal-tests-basic-Generics-typeParametersAreCheckedStaticallyButAlsoBoundDynamically3_3}

```rascal
test bool typeParametersAreCheckedStaticallyButAlsoBoundDynamically3_3()

```

## function staticTypeParametersKeepElementLabelsAlsoWithListMatch {#lang-rascal-tests-basic-Generics-staticTypeParametersKeepElementLabelsAlsoWithListMatch}

```rascal
test bool staticTypeParametersKeepElementLabelsAlsoWithListMatch()

```

## function staticTypeParametersKeepElementLabelsAlsoWithSetMatch {#lang-rascal-tests-basic-Generics-staticTypeParametersKeepElementLabelsAlsoWithSetMatch}

```rascal
test bool staticTypeParametersKeepElementLabelsAlsoWithSetMatch()

```

## function recursiveOverloadedGenericFunction {#lang-rascal-tests-basic-Generics-recursiveOverloadedGenericFunction}

```rascal
test bool recursiveOverloadedGenericFunction()

```

## function voidMaybeShouldShouldThrowException {#lang-rascal-tests-basic-Generics-voidMaybeShouldShouldThrowException}

```rascal
test bool voidMaybeShouldShouldThrowException()

```

## function voidListsShouldThrowException {#lang-rascal-tests-basic-Generics-voidListsShouldThrowException}

```rascal
test bool voidListsShouldThrowException()

```

