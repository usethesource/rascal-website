---
title: "module util::Maybe"
---

#### Usage

`import util::Maybe;`

#### Synopsis

Encapsulate any optional value using `Maybe[&T]`


## data Maybe {#util-Maybe-Maybe}

```rascal
data Maybe[&A]  
     = nothing()
     | just(&A val)
     ;
```

#### Synopsis

Generic data type to encapsulate any value, optionally.

#### Examples


```rascal
Maybe[int] indexOf(list[int] l, int toFind) {
   for (i <- index(l), l[i] == toFind) {
      return just(i);
   }
   
   return nothing();
}
```

