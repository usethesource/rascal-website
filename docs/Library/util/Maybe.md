---
title: "module util::Maybe"
---

#### Usage

`import util::Maybe;`

#### Synopsis

Represent an optional value.

## data Maybe {#util-Maybe-Maybe}

```rascal
data Maybe[&A]  
     = nothing()
     | just(&A val)
     ;
```

#### Synopsis

Data type to represent an optional value.

#### Examples

```rascal
Maybe[int] linearSearch(list[int] l, int toFind) {
   for(i <- index(l)){
      if(l[i] == toFind) {
         return just(i);
      }
   }
   return nothing();
}
```

