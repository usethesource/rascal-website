---
title: "module analysis::statistics::SimpleRegression"
---

#### Usage

`import analysis::statistics::SimpleRegression;`


#### Synopsis

Statistical methods for simple regression.

#### Description

The following functions are provided:
* [R](../../../Library/analysis/statistics/SimpleRegression.md#analysis::statistics::SimpleRegression-R)
* [RSquare](../../../Library/analysis/statistics/SimpleRegression.md#analysis::statistics::SimpleRegression-RSquare)
* [XSumSquares](../../../Library/analysis/statistics/SimpleRegression.md#analysis::statistics::SimpleRegression-XSumSquares)
* [intercept](../../../Library/analysis/statistics/SimpleRegression.md#analysis::statistics::SimpleRegression-intercept)
* [interceptStdErr](../../../Library/analysis/statistics/SimpleRegression.md#analysis::statistics::SimpleRegression-interceptStdErr)
* [meanSquareError](../../../Library/analysis/statistics/SimpleRegression.md#analysis::statistics::SimpleRegression-meanSquareError)
* [predict](../../../Library/analysis/statistics/SimpleRegression.md#analysis::statistics::SimpleRegression-predict)
* [regressionSumSquares](../../../Library/analysis/statistics/SimpleRegression.md#analysis::statistics::SimpleRegression-regressionSumSquares)
* [significance](../../../Library/analysis/statistics/SimpleRegression.md#analysis::statistics::SimpleRegression-significance)
* [slope](../../../Library/analysis/statistics/SimpleRegression.md#analysis::statistics::SimpleRegression-slope)
* [slopeConfidenceInterval](../../../Library/analysis/statistics/SimpleRegression.md#analysis::statistics::SimpleRegression-slopeConfidenceInterval)
* [slopeStdErr](../../../Library/analysis/statistics/SimpleRegression.md#analysis::statistics::SimpleRegression-slopeStdErr)
* [sumOfCrossProducts](../../../Library/analysis/statistics/SimpleRegression.md#analysis::statistics::SimpleRegression-sumOfCrossProducts)
* [sumSquaredErrors](../../../Library/analysis/statistics/SimpleRegression.md#analysis::statistics::SimpleRegression-sumSquaredErrors)
* [totalSumSquares](../../../Library/analysis/statistics/SimpleRegression.md#analysis::statistics::SimpleRegression-totalSumSquares)


## function intercept {#analysis-statistics-SimpleRegression-intercept}

* ``num intercept(lrel[num,num] values) throws IllegalArgument``


#### Synopsis

Intercept of regression line.
#### Description

Returns the [interce](http://en.wikipedia.org/wiki/Root_of_a_function) of the estimated regression line.
The least squares estimate of the intercept is computed using these [normal equations](http://www.xycoon.com/estimation4.htm)

## function interceptStdErr {#analysis-statistics-SimpleRegression-interceptStdErr}

* ``num interceptStdErr(lrel[num,num] values) throws IllegalArgument``


#### Synopsis

Standard error of intercept estimate.
#### Description

Returns the http://www.xycoon.com/standarderrorb0.htm[standard error of the intercept estimate], usually denoted s(b0).

## function meanSquareError {#analysis-statistics-SimpleRegression-meanSquareError}

* ``num meanSquareError(lrel[num,num] values) throws IllegalArgument``


#### Synopsis

Sum of squared errors divided by the degrees of freedom.

#### Description

Returns the sum of squared errors divided by the degrees of freedom, usually abbreviated MSE.

## function R {#analysis-statistics-SimpleRegression-R}

* ``num R(lrel[num,num] values) throws IllegalArgument``


#### Synopsis

Pearson's product-moment correlation coefficient.

#### Description

Computes Pearson's product-moment correlation coefficient.
More functions related to this coefficient can be found in [Correlation](../../../Library/analysis/statistics/Correlation.md).

## function regressionSumSquares {#analysis-statistics-SimpleRegression-regressionSumSquares}

* ``num regressionSumSquares(list[tuple[num,num]] values) throws IllegalArgument``


#### Synopsis

Sum of squared deviations of the predicted y values about their mean.

#### Description

Returns the sum of squared deviations of the predicted y values about their mean (which equals the mean of y).
This is usually abbreviated SSR or http://www.xycoon.com/SumOfSquares.htm[SSM].

## function RSquare {#analysis-statistics-SimpleRegression-RSquare}

* ``num RSquare(lrel[num,num] values) throws IllegalArgument``


#### Synopsis

Coefficient of determination.
#### Description

Returns the [coefficient of determination](http://en.wikipedia.org/wiki/Coefficient_of_determination) usually denoted r__^2^.
It provides a measure of how well future outcomes are likely to be predicted by the regression model.

## function significance {#analysis-statistics-SimpleRegression-significance}

* ``num significance(lrel[num,num] values) throws IllegalArgument``


#### Synopsis

Significance of the slope correlation.
#### Description

Returns the significance level of the slope (equiv) correlation.
Specifically, the returned value is the smallest alpha such that the slope confidence interval with significance level equal to alpha does not include 0. On regression output, this is often denoted Prob(|t| > 0)

#### Pitfalls

The validity of this statistic depends on the assumption that the observations included in the model are drawn from a 
[Bivariate Normal Distribution](http://en.wikipedia.org/wiki/Bivariate_normal_distribution).

## function slope {#analysis-statistics-SimpleRegression-slope}

* ``num slope(lrel[num,num] values) throws IllegalArgument``


#### Synopsis

Slope of regression line.
#### Description

Returns the slope of the estimated regression line.
The least squares estimate of the slope is computed using the http://www.xycoon.com/estimation4.htm[normal equations].
The slope is sometimes denoted b1.

## function slopeConfidenceInterval {#analysis-statistics-SimpleRegression-slopeConfidenceInterval}

* ``num slopeConfidenceInterval(lrel[num,num] values) throws IllegalArgument``


#### Synopsis

The 95% slope confidence interval.

#### Description

Returns the half-width of a 95% confidence interval for the slope estimate.
The 95% confidence interval is

(slope - slopeConfidenceInterval, slope + slopeConfidenceInterval)


#### Pitfalls

* The validity of this statistic depends on the assumption that the observations included in the model are drawn from a 
[Bivariate Normal Distribution](http://en.wikipedia.org/wiki/Bivariate_normal_distribution)

## function slopeStdErr {#analysis-statistics-SimpleRegression-slopeStdErr}

* ``num slopeStdErr(lrel[num,num] values) throws IllegalArgument``


#### Synopsis

Standard error of slope estimate.
#### Description

Returns the http://www.xycoon.com/standarderrorb0.htm[standard error of the slope estimate], usually denoted s(b1).

## function sumOfCrossProducts {#analysis-statistics-SimpleRegression-sumOfCrossProducts}

* ``num sumOfCrossProducts(lrel[num,num] values) throws IllegalArgument``


#### Synopsis

Sum of cross products of observations.
#### Description

Returns the sum of crossproducts, x__ᵢ*y__ᵢ.

## function sumSquaredErrors {#analysis-statistics-SimpleRegression-sumSquaredErrors}

* ``num sumSquaredErrors(lrel[num,num] values) throws IllegalArgument``


#### Synopsis

Sum of squared errors.
#### Description

Returns the sum of squared errors (SSE) associated with the regression model.
The sum is computed using the computational formula

SSE = SYY - (SXY * SXY / SXX)

where SYY is the sum of the squared deviations of the y values about their mean, SXX is similarly defined and SXY is the sum of the products of x and y mean deviations.

The return value is constrained to be non-negative, i.e., if due to rounding errors the computational formula returns a negative result, 0 is returned.

## function totalSumSquares {#analysis-statistics-SimpleRegression-totalSumSquares}

* ``num totalSumSquares(lrel[num,num] values) throws IllegalArgument``


#### Synopsis

Sum of squared deviations.
#### Description

Returns the sum of squared deviations of the y values about their mean.
This is defined as http://www.xycoon.com/SumOfSquares.htm[SSTO].

## function XSumSquares {#analysis-statistics-SimpleRegression-XSumSquares}

* ``num XSumSquares(lrel[num,num] values) throws IllegalArgument``


#### Synopsis

Sum of squared deviations of x values about their mean.

#### Description

Returns the sum of squared deviations of the x values about their mean.

## function predict {#analysis-statistics-SimpleRegression-predict}

* ``num predict(lrel[num,num] values, num x) throws IllegalArgument``


#### Synopsis

Predict a value.
#### Description

Returns the "predicted" `y` value associated with the supplied `x` value, based on regression model derived from the provided data values:

`predict(x) = intercept + slope * x`

