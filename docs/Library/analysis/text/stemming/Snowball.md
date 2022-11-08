---
title: "module analysis::text::stemming::Snowball"
---

#### Usage

`import analysis::text::stemming::Snowball;`


#### Synopsis

Provides the library of stemmers written in the Snowball languages, and compiled to Java, which are
distributed with Lucene as a Rascal module.

#### Description

See http://snowball.tartarus.org[the Snowball homepage] for more informations

#### Examples


```rascal-shell 
rascal>import analysis::text::stemming::Snowball;
ok
rascal>stem("bikes")
str: "bike"
```


## data Language {#analysis-text-stemming-Snowball-Language}

```rascal
data Language  
     = armenian()
     | basque()
     | catalan()
     | danish()
     | dutch()
     | english()
     | finnish()
     | french()
     | german()
     | german2()
     | hungarian()
     | irish()
     | italian()
     | lithuanian()
     | norwegian()
     | portugese()
     | romanian()
     | russian()
     | spanish()
     | swedish()
     | turkish()
     ;
```

## function stem {#analysis-text-stemming-Snowball-stem}

```rascal
str stem(str word, Language lang=english())

```


#### Synopsis

Stemming algorithms from the Tartarus Snowball (http://snowball.tartarus.org[the Snowball homepage] for different languages. 

#### Description

This library wrapped into a single function supports Armenian, Basque, Catalan, Danish,
Dutch, English, Finnish, French, German, Hungarian, Irish, Italian, Lithuanian, Norwegian, Portugese,
Romanian, Russian, Spanish, Swedish and Turkish.

## function kraaijPohlmannStemmer {#analysis-text-stemming-Snowball-kraaijPohlmannStemmer}

```rascal
str kraaijPohlmannStemmer(str word)

```


#### Synopsis

Kraaij-Pohlmann is a well-known stemmer for the Dutch language. 

#### Description

See http://snowball.tartarus.org/algorithms/kraaij_pohlmann/stemmer.html

## function porterStemmer {#analysis-text-stemming-Snowball-porterStemmer}

```rascal
str porterStemmer(str word)

```


#### Synopsis

Porter stemming is a "standard" stemming algorithm for English of sorts.

#### Description

See http://snowball.tartarus.org/algorithms/porter/stemmer.html for more information. 

## function lovinsStemmer {#analysis-text-stemming-Snowball-lovinsStemmer}

```rascal
str lovinsStemmer(str word)

```


#### Synopsis

Lovins designed the first stemmer according to the Tartarus website.

#### Description

See http://snowball.tartarus.org/algorithms/lovins/stemmer.html

