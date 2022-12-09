---
title: "module vis::Charts"
---

#### Usage

`import vis::Charts;`

#### Synopsis

Simple data visualization using charts

#### Description


This modules provides a simple API to create charts for Rascal
(numerical) data, based on [chart.js](https://chartjs.org/). 
This library mirrors chart.js' JSON-based configuration API more or less one-to-one
using [AlgebraicDataType](../../Rascal/Declarations/AlgebraicDataType/index.md)s of Rascal. Documentation about chart.js should be easy
to interpret.

This module is quite new and may undergo some tweaks in the coming time.

#### Examples



```rascal-shell 
rascal>import vis::Charts;
ok
rascal>import util::Math;
ok
rascal>scatterChart([<x-arbInt(20),x+arbInt(20)> | x <- [1..100]])
```
![image](/assets/Library/vis/Charts_screenshot_23.png)
```rascal-shell
```


```rascal-shell -continue
rascal>barChart([<"<x>",x-arbInt(20)> | x <- [1..100]])
```
![image](/assets/Library/vis/Charts_screenshot_27.png)
```rascal-shell
```


```rascal-shell -continue
rascal>lineChart([<"<x>",x+arbInt(20)> | x <- [1..100]])
```
![image](/assets/Library/vis/Charts_screenshot_31.png)
```rascal-shell
```


```rascal-shell -continue
rascal>pieChart([<"<x>",x+arbInt(25)> | x <- [1..10]])
```
![image](/assets/Library/vis/Charts_screenshot_35.png)
```rascal-shell
```

#### Benefits


* Easy to use for basic charting.
* Uses [chart auto colors](../../Library/vis/Charts.md#vis-Charts-ChartAutoColors) extension for ease-of-use.
* Support for 8 [chart type](../../Library/vis/Charts.md#vis-Charts-ChartType)s including multiple [chart data set](../../Library/vis/Charts.md#vis-Charts-ChartDataSet)s in one chart.
* This API is open to extension via adding common keyword parameters for supporting any extension to the basic chart.js configuration.
* You can roll your own HTML or Server based on the building blocks in this module to include and use extensions, or to combine different charts in the same view.

#### Pitfalls


* Where `num` is asked, still `rat` values are _not_ supported.
* All `real` values must stay within JVM's `double` datatype
* All `int` values must fit within JVM's `long` datatype


## function scatterChart {#vis-Charts-scatterChart}

```rascal
Content scatterChart(lrel[num x,num y] v, str title="Scatterplot", ChartAutoColorMode colorMode=\dataset())

Content scatterChart(list[str] labels, lrel[num x,num y] values ..., str title="Scatterplots", ChartAutoColorMode colorMode=\dataset())

Content scatterChart(rel[num x ,num y] v, str title="Scatterplot", ChartAutoColorMode colorMode=\dataset())

Content scatterChart(list[str] labels, rel[num x,num y] values ..., str title="Scatterplots", ChartAutoColorMode colorMode=\dataset())

```

#### Synopsis

A scatterplot from a binary numerical relation.

## function bubbleChart {#vis-Charts-bubbleChart}

```rascal
Content bubbleChart(lrel[num x,num y, num r] v, str title="Scatterplot", ChartAutoColorMode colorMode=\data())

Content bubbleChart(list[str] labels, lrel[num x,num y, num r] values ..., str title="Scatterplots", ChartAutoColorMode colorMode=\data())

Content bubbleChart(rel[num x,num y, num r] v, str title="Scatterplot", ChartAutoColorMode colorMode=\data())

Content bubbleChart(list[str] labels, rel[num x,num y, num r] values ..., str title="Scatterplots", ChartAutoColorMode colorMode=\data())

```

#### Synopsis

A bubblechart from a binary numerical list relation.

#### Pitfalls


* the radius is in raw pixels rather than scaled to the chart's axis

## function barChart {#vis-Charts-barChart}

```rascal
Content barChart(rel[str label, num val] values, str title="Bar Chart", ChartAutoColorMode colorMode=\data())

Content barChart(lrel[str label, num val] values, str title="Bar Chart", ChartAutoColorMode colorMode=\data())

Content barChart(list[str] labels, rel[str label, num val] values..., str title="Bar Chart", ChartAutoColorMode colorMode=\dataset())

Content barChart(list[str] labels, lrel[str label, num val] values..., str title="Bar Chart", ChartAutoColorMode colorMode=\dataset())

```

#### Synopsis

A bar chart from labeled numbers

## function lineChart {#vis-Charts-lineChart}

```rascal
Content lineChart(rel[str label, num val] values, str title="Line Chart", ChartAutoColorMode colorMode=\dataset())

Content lineChart(lrel[str label, num val] values, str title="Line Chart", ChartAutoColorMode colorMode=\dataset())

Content lineChart(list[str] labels, rel[str label, num val] values..., str title="Line Chart", ChartAutoColorMode colorMode=\dataset())

Content lineChart(list[str] labels, lrel[str label, num val] values..., str title="Line Chart", ChartAutoColorMode colorMode=\dataset())

```

#### Synopsis

A line chart from labeled numbers

## function polarAreaChart {#vis-Charts-polarAreaChart}

```rascal
Content polarAreaChart(rel[str label, num val] values, str title="Polar Area Chart", ChartAutoColorMode colorMode=\data())

Content polarAreaChart(lrel[str label, num val] values, str title="Polar Area Chart", ChartAutoColorMode colorMode=\data())

Content polarAreaChart(list[str] labels, rel[str label, num val] values..., str title="Polar Area Chart", ChartAutoColorMode colorMode=\dataset())

Content polarAreaChart(list[str] labels, lrel[str label, num val] values..., str title="Polar Area Chart", ChartAutoColorMode colorMode=\dataset())

```

#### Synopsis

A polar area chart from labeled numbers

## function radarChart {#vis-Charts-radarChart}

```rascal
Content radarChart(rel[str label, num val] values, str title="Radar Chart", ChartAutoColorMode colorMode=\data())

Content radarChart(lrel[str label, num val] values, str title="Radar Chart", ChartAutoColorMode colorMode=\data())

Content radarChart(list[str] labels, rel[str label, num val] values..., str title="Radar Chart", ChartAutoColorMode colorMode=\dataset())

Content radarChart(list[str] labels, lrel[str label, num val] values..., str title="Radar Chart", ChartAutoColorMode colorMode=\dataset())

```

#### Synopsis

A radar chart from labeled numbers

## function pieChart {#vis-Charts-pieChart}

```rascal
Content pieChart(rel[str label, num val] values, str title="Pie Chart", ChartAutoColorMode colorMode=\data())

Content pieChart(lrel[str label, num val] values, str title="Pie Chart", ChartAutoColorMode colorMode=\data())

Content pieChart(list[str] labels, rel[str label, num val] values..., str title="Pie Chart", ChartAutoColorMode colorMode=\dataset())

Content pieChart(list[str] labels, lrel[str label, num val] values..., str title="Pie Chart", ChartAutoColorMode colorMode=\dataset())

```

#### Synopsis

A pie chart from labeled numbers

## function doughnutChart {#vis-Charts-doughnutChart}

```rascal
Content doughnutChart(rel[str label, num val] values, str title="Doughnut Chart", ChartAutoColorMode colorMode=\data())

Content doughnutChart(lrel[str label, num val] values, str title="Doughnut Chart", ChartAutoColorMode colorMode=\data())

Content doughnutChart(list[str] labels, rel[str label, num val] values..., str title="Doughnut Chart", ChartAutoColorMode colorMode=\data())

Content doughnutChart(list[str] labels, lrel[str label, num val] values..., str title="Doughnut Chart", ChartAutoColorMode colorMode=\data())

```

#### Synopsis

A dougnut chart from labeled numbers

## function chartDataSet {#vis-Charts-chartDataSet}

```rascal
ChartDataSet chartDataSet(str label, rel[num x, num y] r)

ChartDataSet chartDataSet(str label, rel[num x, num y, num rad] r)

ChartDataSet chartDataSet(str label, lrel[num x,num y] r)

ChartDataSet chartDataSet(str label, lrel[num x, num y, num r] r)

```

## function chartData {#vis-Charts-chartData}

```rascal
ChartData chartData(rel[str label, num val] v)

ChartData chartData(lrel[str label, num val] v)

ChartData chartData(list[str] labels, lrel[num x, num y] values...)

ChartData chartData(list[str] labels, lrel[num x , num y , num r] values...)

ChartData chartData(list[str] labels, rel[num x, num y] values...)

ChartData chartData(list[str] labels, rel[num x, num y, num r] values...)

ChartData chartData(list[str] setLabels, lrel[str label, num val] values...)

ChartData chartData(list[str] setLabels, rel[str label, num val] values...)

ChartData chartData(list[str] labels, list[num] values...)

ChartData chartData(str label, lrel[num x, num y] values)

ChartData chartData(str label, lrel[num x, num y, num r] values)

ChartData chartData(str label, rel[num x, num y] values)

ChartData chartData(str label, rel[num x, num y, num r] values)

```

## data Chart {#vis-Charts-Chart}

```rascal
data Chart  
     = chart(
        ChartType \type = scatter(),
        ChartOptions options = chartOptions(),
        ChartData \data = chartData()
    )
     ;
```

#### Synopsis

Toplevel chart structure

## data ChartData {#vis-Charts-ChartData}

```rascal
data ChartData  
     = chartData(
        list[str]  labels=[],
        list[ChartDataSet] datasets = []
    )
     ;
```

#### Synopsis

Wrapper for a set of datasets, each with a label

## data ChartDataSet {#vis-Charts-ChartDataSet}

```rascal
data ChartDataSet (
        str label="",
        list[str] backgroundColor=[],
        list[str] borderColor=[],
        list[str] color=[]
    ) 
     = chartDataSet(list[value] \data)
     ;
```

#### Synopsis

A dataset is a list of values to chart, with styling properties.

#### Description


The `data` field is a list of supported values, of which the constraints
are not expressible by [AlgebraicDataType](../../Rascal/Declarations/AlgebraicDataType/index.md)s. These are currently supported:

* [chart data point](../../Library/vis/Charts.md#vis-Charts-ChartDataPoint), with an without a `r`adius
* `num`, but within `double` precision (!) and no `rat`

## data ChartDataPoint {#vis-Charts-ChartDataPoint}

```rascal
data ChartDataPoint  
     = point(num x, num y, num r = 0)
     ;
```

#### Synopsis

A data point is one of the types of values in a ChartDataSet

## data ChartType {#vis-Charts-ChartType}

```rascal
data ChartType  
     = scatter()
     | bar()
     | bubble()
     | line()
     | polarArea()
     | radar()
     | pie()
     | doughnut()
     ;
```

## data ChartOptions {#vis-Charts-ChartOptions}

```rascal
data ChartOptions  
     = chartOptions(
        bool responsive=true,
        ChartPlugins plugins = chartPlugins()  
    )
     ;
```

## data ChartPlugins {#vis-Charts-ChartPlugins}

```rascal
data ChartPlugins  
     = chartPlugins(
        ChartTitle title = chartTitle(),
        ChartLegend legend = chartLegend(),
        ChartColors colors = chartColors(),
        ChartAutoColors autocolors = chartAutoColors()
    )
     ;
```

## data ChartAutoColors {#vis-Charts-ChartAutoColors}

```rascal
data ChartAutoColors  
     = chartAutoColors(
        ChartAutoColorMode \mode = \data()
    )
     ;
```

## data ChartAutoColorMode {#vis-Charts-ChartAutoColorMode}

```rascal
data ChartAutoColorMode  
     = \data()
     | \dataset()
     ;
```

## data ChartLegend {#vis-Charts-ChartLegend}

```rascal
data ChartLegend  
     = chartLegend(
        LegendPosition position = top(),
        bool display=true
    )
     ;
```

## data LegendPosition {#vis-Charts-LegendPosition}

```rascal
data LegendPosition  
     = \top()
     | \bottom()
     | \left()
     | \right()
     ;
```

## data ChartTitle {#vis-Charts-ChartTitle}

```rascal
data ChartTitle  
     = chartTitle(
        str text="",
        bool display = true
    )
     ;
```

## data ChartColors {#vis-Charts-ChartColors}

```rascal
data ChartColors  
     = chartColors(
        bool enabled = true
    )
     ;
```

## function chartServer {#vis-Charts-chartServer}

```rascal
Response(Request) chartServer(ChartData theData, ChartType \type=\bar(), str title="Chart", ChartAutoColorMode colorMode=\data(), bool legend=false)

Response (Request) chartServer(Chart ch)

```

#### Synopsis

Utility function that constructs a Chart from ChartData and a given Chart type and a title.

#### Description


A chart has a typical default layout that we can reuse for all kinds of chart types. This function
provides the template and immediately instantiates the client and the server to start displaying the chart
in a browser.

## function plotHTML {#vis-Charts-plotHTML}

```rascal
HTMLElement plotHTML()

```

#### Synopsis

default HTML wrapper for a chart

