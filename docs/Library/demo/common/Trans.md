---
title: "module demo::common::Trans"
---

#### Usage

`import demo::common::Trans;`


## function trans {#demo-common-Trans-trans}

```rascal
rel[int,int] trans(rel[int,int] R)

```

#### Synopsis

Compute transitive closure: R+ = R + (R o R) + (R o R o R) + ...

#### Description


  This demo can be also implemented by `R+` but here
  we want to demonstrate the use of the [Solve](../../../Rascal/Statements/Solve/index.md) statement.

## function t1 {#demo-common-Trans-t1}

```rascal
test bool t1()

```

## function t2 {#demo-common-Trans-t2}

```rascal
test bool t2()

```

