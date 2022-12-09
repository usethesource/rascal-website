---
title: "module util::Sampling"
---

#### Usage

`import util::Sampling;`

#### Synopsis

Utilities to randomly select smaller datasets from larger datasets

#### Description


Sampling is important when the analysis algorithms do not scale to the size of 
the original corpus, or when you need to train an analysis on a representative
set without overfitting on the entire corpus. These sampling functions all
assume that a uniformly random selection is required.


## function sample {#util-Sampling-sample}

```rascal
set[&T] sample(set[&T] corpus, int target)

list[&T] sample(list[&T] corpus, int target)

map[&T,&U] sample(map[&T,&U] corpus, int target)

```

#### Synopsis

Reduce the arity of a set by selecting a uniformly distributed sample.

#### Description


A uniform subset is computed by iterating over the set and skipping every element
with a probability of `1/(size(corpus) / target)`. This rapidly generates a new set of
expected `target` size, but most probably a little smaller or larger.

#### Examples



```rascal-shell 
rascal>import util::Sampling;
ok
rascal>sample({"a","b","c","e","f","g","h","i","j","k"}, 4)
set[str]: {"c","e","g","h","j","k"}
rascal>sample({"a","b","c","e","f","g","h","i","j","k"}, 4)
set[str]: {"a","b","e","f","g","i","j"}
rascal>sample({"a","b","c","e","f","g","h","i","j","k"}, 4)
set[str]: {"a","c","g","j","k"}
```

