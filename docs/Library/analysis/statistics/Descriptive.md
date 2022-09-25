---
title: "module analysis::statistics::Descriptive"
---

#### Usage

`import analysis::statistics::Descriptive;`


#### Synopsis

Descriptive Statistics.

#### Description

Provides the following univariate (single variable) statistics functions:

* [centralMoment](../../../Library/analysis/statistics/Descriptive.md#analysis::statistics::Descriptive-centralMoment/)
* [geometricMean](../../../Library/analysis/statistics/Descriptive.md#analysis::statistics::Descriptive-geometricMean/)
* [kurtosis](../../../Library/analysis/statistics/Descriptive.md#analysis::statistics::Descriptive-kurtosis/)
* [kurtosisExcess](../../../Library/analysis/statistics/Descriptive.md#analysis::statistics::Descriptive-kurtosisExcess/)
* [max](../../../Library/analysis/statistics/Descriptive.md#analysis::statistics::Descriptive-max/)
* [mean](../../../Library/analysis/statistics/Descriptive.md#analysis::statistics::Descriptive-mean/)
* [median](../../../Library/analysis/statistics/Descriptive.md#analysis::statistics::Descriptive-median/)
* [middle](../../../Library/analysis/statistics/Descriptive.md#analysis::statistics::Descriptive-middle/)
* [min](../../../Library/analysis/statistics/Descriptive.md#analysis::statistics::Descriptive-min/)
* [moment](../../../Library/analysis/statistics/Descriptive.md#analysis::statistics::Descriptive-moment/)
* [percentile](../../../Library/analysis/statistics/Descriptive.md#analysis::statistics::Descriptive-percentile/)
* [skewness](../../../Library/analysis/statistics/Descriptive.md#analysis::statistics::Descriptive-skewness/)
* [standardDeviation](../../../Library/analysis/statistics/Descriptive.md#analysis::statistics::Descriptive-standardDeviation/)
* [sum](../../../Library/analysis/statistics/Descriptive.md#analysis::statistics::Descriptive-sum/)
* [sumsq](../../../Library/analysis/statistics/Descriptive.md#analysis::statistics::Descriptive-sumsq/)
* [variance](../../../Library/analysis/statistics/Descriptive.md#analysis::statistics::Descriptive-variance/)

#### Examples


```rascal-shell 
rascal>import analysis::statistics::Descriptive;
ok
rascal>D = [67, 88, 55, 92.5, 102, 51];
list[num]: [67,88,55,92.5,102,51]
rascal>mn = min(D);
num: 51
rascal>mx = max(D);
num: 102
rascal>range = mx - mn;
num: 51
rascal>midrange =  mn + range/2;
num: 76.5
rascal>sum(D);
num: 455.5
rascal>mean(D);
real: 75.91666667
rascal>geometricMean(D);
real: 73.3734107237
rascal>standardDeviation(D);
real: 21.1622698845
rascal>variance(D);
num: 447.841666666666666666666666666
rascal>percentile(D,25);
num: 55
rascal>percentile(D,50);
num: 67
rascal>percentile(D,75);
num: 92.5
```


## function geometricMean {#analysis-statistics-Descriptive-geometricMean}

* ``real geometricMean([num hd, *num tl])``


#### Synopsis

Geometric mean of data values.

#### Description

Computes the http://en.wikipedia.org/wiki/Geometric_mean[geometric mean] of the given data values.

## function kurtosis {#analysis-statistics-Descriptive-kurtosis}

* ``real kurtosis(list[num] values:[_, *_])``


#### Synopsis

Kurtosis of data values.

#### Description

Computes the http://en.wikipedia.org/wiki/Kurtosis[kurtosis] of the given data values.
Kurtosis is a measure of the "peakedness" of a distribution.

## function kurtosisExcess {#analysis-statistics-Descriptive-kurtosisExcess}

* ``real kurtosisExcess(list[num] values)``


#### Synopsis

Kurtosis excess of data values.

#### Description

Computes the http://en.wikipedia.org/wiki/Kurtosis[kurtosis excess] of the given data values.
Kurtosis excess is a measure of the "peakedness" of a distribution corrected such that a normal distribution will be 0.

## function max {#analysis-statistics-Descriptive-max}

* ``(&T <: num) max([(&T <: num) h, *(&T <: num) t])``


#### Synopsis

Largest data value.

## function mean {#analysis-statistics-Descriptive-mean}

* ``real mean(list[num] nums:[_, *_])``


#### Synopsis

Arithmetic mean of data values.

#### Description

Computes the http://en.wikipedia.org/wiki/Arithmetic_mean[arithmetic mean] of the data values.

## function median {#analysis-statistics-Descriptive-median}

* ``default real median(list[num] nums:[_, *_])``


#### Synopsis

Median of data values.

#### Description

Returns the http://en.wikipedia.org/wiki/Median[median] of the available values.
This is the same as the 50th [percentile](../../../Library/analysis/statistics/Descriptive.md#analysis::statistics::Descriptive-percentile/).

#### Examples


```rascal-shell 
rascal>import analysis::statistics::Descriptive;
ok
rascal>median([1,2,5,7,8]);
real: 5.
rascal>median([1,2,2,6,7,8]);
real: 4.
```

## function middle {#analysis-statistics-Descriptive-middle}

* ``list[&T] middle(list[&T] nums)``

## function min {#analysis-statistics-Descriptive-min}

* ``(&T <: num) min([(&T <: num) h, *(&T <: num) t])``


#### Synopsis

Smallest data value.

## function percentile {#analysis-statistics-Descriptive-percentile}

* ``&T <: num percentile(list[&T <: num] nums, num p)``


#### Synopsis

Percentile of data values.

#### Description

Returns the `p`th http://en.wikipedia.org/wiki/Percentile[percentile] of the data values.
 0 < `p` <= 100 should hold.

## function variance {#analysis-statistics-Descriptive-variance}

* ``num variance([num hd, *num tl])``


#### Synopsis

Variance of data values.

#### Description

Computes the http://en.wikipedia.org/wiki/Variance[variance] of the data values.
It measures how far a set of numbers is spread out.

## function skewness {#analysis-statistics-Descriptive-skewness}

* ``real skewness(list[num] values:[_, *_])``


#### Synopsis

Skewness of data values.

#### Description

Returns the http://en.wikipedia.org/wiki/Skewness[skewness] of the available values. Skewness is a measure of the asymmetry of a given distribution.

## function standardDeviation {#analysis-statistics-Descriptive-standardDeviation}

* ``real standardDeviation(list[num] values)``


#### Synopsis

Standard deviation of data values.

#### Description

Computes the http://en.wikipedia.org/wiki/Standard_deviation[standard deviation]
of the data values. It shows how much variation exists from the average (mean, or expected value). 

## function sum {#analysis-statistics-Descriptive-sum}

* ``(&T <:num) sum([(&T <: num) hd, *(&T <: num) tl])``


#### Synopsis

Sum of data values.

## function sumsq {#analysis-statistics-Descriptive-sumsq}

* ``(&T <:num) sumsq(list[&T <:num] values)``


#### Synopsis

Sum of the squares of data values.

## function centralMoment {#analysis-statistics-Descriptive-centralMoment}

* ``real centralMoment(list[num] nums:[_, *_], int order = 1)``


	Calculate the k-th central moment

## function moment {#analysis-statistics-Descriptive-moment}

* ``real moment(list[num] nums:[_, *_], int order = 1)``


	Calculate the k-th moment

