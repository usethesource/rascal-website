---
title: "analysis::statistics::Frequency"
---

#### Usage

`import analysis::statistics::Frequency;`


#### Synopsis

Frequency distributions.

#### Description

Counting the frequency of events is usually the first step in statistical analysis of raw data.
It involves choosing what are the events to count, how to group them in certain
categories and then quickly counting the frequency of each occurring event. 

This module helps by providing commonly used functions for the purpose of counting events.
The output of these functions can be used to draw (cumulative) histograms, or they can
directly be used for further statistical processing and visualisation. 


## function distribution {#analysis-statistics-Frequency-distribution}

* ``map[&T, int] distribution(rel[&U event, &T bucket] input)``
* ``map[&T <: num, int] distribution(rel[&U event, &T <: num bucket] input, &T <: num bucketSize)``
* ``map[&T, int] distribution(map[&U event, &T bucket] input)``
* ``map[&T <: num, int] distribution(map[&U event, &T <: num bucket] input, &T <: num bucketSize)``


#### Synopsis

Compute a distribution: count how many times events are mapped to which bucket.

#### Examples


```rascal-shell
rascal>import analysis::statistics::Frequency;
ok
rascal>distribution({<"chicken","animal">,<"bear","animal">,<"oak","plant">,<"tulip","plant">});
map[str, int]: ("plant":2,"animal":2)
rascal>distribution({<"alice",2>,<"bob",3>,<"claire",5>},5);
map[int, int]: (5:2,0:1)
```

## function cumFreq {#analysis-statistics-Frequency-cumFreq}

* ``int cumFreq(list[value] values, num n)``
* ``int cumFreq(list[value] values, str s)``


#### Synopsis

Cumulative frequency of values less than or equal to a given value.

#### Description

Returns the cumulative frequency of values less than or equal to a given numeric or string value.
Returns 0 if the value is not comparable to the values set.

#### Examples


```rascal-shell
rascal>import analysis::statistics::Frequency;
ok
rascal>D = [1, 2, 1, 1, 3, 5];
list[int]: [1,2,1,1,3,5]
rascal>cumFreq(D, 1);
int: 3
rascal>cumFreq(D, 2);
int: 4
rascal>cumFreq(D, 10);
int: 6
```

## function cumPct {#analysis-statistics-Frequency-cumPct}

* ``num cumPct(list[value] values, num n)``
* ``num cumPct(list[value] values, str s)``


#### Synopsis

Cumulative percentage of values less than or equal to a given value.

#### Description

Returns the cumulative percentage of values less than or equal to v (as a proportion between 0 and 1).


```rascal-shell
rascal>import analysis::statistics::Frequency;
ok
rascal>D = [1, 2, 1, 1, 3, 5];
list[int]: [1,2,1,1,3,5]
rascal>cumPct(D, 1);
num: 0.5
rascal>cumPct(D, 2);
num: 0.6666666666666666
rascal>cumPct(D, 10);
num: 1.0
```

## function pct {#analysis-statistics-Frequency-pct}

* ``num pct(list[value] values, num n)``
* ``num pct(list[value] values, str s)``


#### Synopsis

Percentage of values that are equal to a given value.

#### Description

Returns the percentage of values that are equal to v (as a proportion between 0 and 1).
#### Examples


```rascal-shell
rascal>import analysis::statistics::Frequency;
ok
rascal>D = [1, 2, 1, 1, 3, 5];
list[int]: [1,2,1,1,3,5]
rascal>pct(D, 1);
num: 0.5
rascal>pct(D, 2);
num: 0.16666666666666666
rascal>pct(D, 10);
num: 0.0
```

