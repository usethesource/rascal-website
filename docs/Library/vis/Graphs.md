---
title: "module vis::Graphs"
---

#### Usage

`import vis::Graphs;`

#### Synopsis

Simple data visualization using graphs

#### Description


This modules provides a simple API to create graph visuals for Rascal
(relational) data, based on [Cytoscape.js](https://js.cytoscape.org/). 

This module is quite new and may undergo some tweaks in the coming time.

#### Examples



```rascal-shell 
rascal>import vis::Graphs;
ok
rascal>graph([<x,x+1> | x <- [1..100]] + [<100,1>])
Serving 'Graph' at |http://localhost:9050/|
```

#### Benefits


* Easy to use for basic graph layouts.


## function graph {#vis-Graphs-graph}

```rascal
Content graph(lrel[&T x, &T y] v, NodeLinker[&T] nodeLinker=defaultNodeLinker, NodeLabeler[&T] nodeLabeler=defaultNodeLabeler, EdgeLabeler[&T] edgeLabeler=defaultEdgeLabeler, str title="Graph", CytoLayoutName \layoutName=cose(), CytoStyle nodeStyle=defaultNodeStyle(), CytoStyle edgeStyle=defaultEdgeStyle())

Content graph(lrel[&T x, &L edge, &T y] v, NodeLinker[&T] nodeLinker=defaultNodeLinker, NodeLabeler[&T] nodeLabeler=defaultNodeLabeler, str title="Graph", CytoLayoutName \layoutName=cose(), CytoStyle nodeStyle=defaultNodeStyle(), CytoStyle edgeStyle=defaultEdgeStyle())

Content graph(rel[&T x, &T y] v, NodeLinker[&T] nodeLinker=defaultNodeLinker, NodeLabeler[&T] nodeLabeler=defaultNodeLabeler, EdgeLabeler[&T] edgeLabeler=defaultEdgeLabeler, str title="Graph", CytoLayoutName \layoutName=cose(), CytoStyle nodeStyle=defaultNodeStyle(), CytoStyle edgeStyle=defaultEdgeStyle())

Content graph(rel[&T x, &L edge, &T y] v, NodeLinker[&T] nodeLinker=defaultNodeLinker, NodeLabeler[&T] nodeLabeler=defaultNodeLabeler, str title="Graph", CytoLayoutName \layoutName=cose(), CytoStyle nodeStyle=defaultNodeStyle(), CytoStyle edgeStyle=defaultEdgeStyle())

```

#### Synopsis

A graph plot from a binary list relation.

## alias NodeLinker[&T] {#vis-Graphs-NodeLinker[&T]}

```rascal
loc (&T _id1)

```

## function defaultNodeLinker {#vis-Graphs-defaultNodeLinker}

```rascal
loc defaultNodeLinker(loc l)

default loc defaultNodeLinker(&T _)

```

## alias NodeLabeler[&T] {#vis-Graphs-NodeLabeler[&T]}

```rascal
str (&T _id2)

```

## function defaultNodeLabeler {#vis-Graphs-defaultNodeLabeler}

```rascal
str defaultNodeLabeler(&T v)

```

## alias EdgeLabeler[&T] {#vis-Graphs-EdgeLabeler[&T]}

```rascal
str (&T _source, &T _target)

```

## function defaultEdgeLabeler {#vis-Graphs-defaultEdgeLabeler}

```rascal
str defaultEdgeLabeler(&T _source, &T _target)

```

## function cytoscape {#vis-Graphs-cytoscape}

```rascal
Cytoscape cytoscape(list[CytoData] \data, \CytoLayoutName \layoutName=\cose(), CytoStyle nodeStyle=defaultNodeStyle(), CytoStyle edgeStyle=defaultEdgeStyle())

```

## function graphData {#vis-Graphs-graphData}

```rascal
list[CytoData] graphData(rel[loc x, loc y] v, NodeLinker[loc] nodeLinker=defaultNodeLinker, NodeLabeler[loc] nodeLabeler=defaultNodeLabeler, EdgeLabeler[loc] edgeLabeler=defaultEdgeLabeler)

default list[CytoData] graphData(rel[&T x, &T y] v, NodeLinker[&T] nodeLinker=defaultNodeLinker,  NodeLabeler[&T] nodeLabeler=defaultNodeLabeler, EdgeLabeler[&T] edgeLabeler=defaultEdgeLabeler)

list[CytoData] graphData(lrel[loc x, &L edge, loc y] v, NodeLinker[&T] nodeLinker=defaultNodeLinker, NodeLabeler[&T] nodeLabeler=defaultNodeLabeler, EdgeLabeler[&T] edgeLabeler=defaultEdgeLabeler)

default list[CytoData] graphData(lrel[&T x, &L edge, &T y] v, NodeLinker[&T] nodeLinker=defaultNodeLinker, NodeLabeler[&T] nodeLabeler=defaultNodeLabeler, EdgeLabeler[&T] edgeLabeler=defaultEdgeLabeler)

list[CytoData] graphData(lrel[loc x, loc y] v, NodeLinker[loc] nodeLinker=defaultNodeLinker, NodeLabeler[loc] nodeLabeler=defaultNodeLabeler, EdgeLabeler[loc] edgeLabeler=defaultEdgeLabeler)

default list[CytoData] graphData(lrel[&T x, &T y] v, NodeLinker[&T] nodeLinker=defaultNodeLinker, NodeLabeler[&T] nodeLabeler=defaultNodeLabeler, EdgeLabeler[&T] edgeLabeler=defaultEdgeLabeler)

default list[CytoData] graphData(rel[loc x, &L edge, loc y] v, NodeLinker[loc] nodeLinker=defaultNodeLinker, NodeLabeler[loc] nodeLabeler=defaultNodeLabeler, EdgeLabeler[&T] edgeLabeler=defaultEdgeLabeler)

default list[CytoData] graphData(rel[&T x, &L edge, &T y] v, NodeLinker[&T] nodeLinker=defaultNodeLinker, NodeLabeler[&T] nodeLabeler=defaultNodeLabeler, EdgeLabeler[&T] edgeLabeler=defaultEdgeLabeler)

```

## data CytoNodeShape {#vis-Graphs-CytoNodeShape}

```rascal
data CytoNodeShape  
     = \ellipse()
     | \triangle()
     | \round-triangle()
     | \rectangle()
     | \round-rectangle()
     | \bottom-round-rectangle()
     | \cut-rectangle()
     | \barrel()
     | \rhomboid()
     | \diamond()
     | \round-diamond()
     | \pentagon()
     | \round-pentagon()
     | \hexagon()
     | \round-hexagon()
     | \concave-hexagon()
     | \heptagon()
     | \round-heptagon()
     | \octagon()
     | \round-octagon()
     | \star()
     | \tag()
     | \round-tag()
     | \vee()
     | \polygon()
     ;
```

## data Cytoscape {#vis-Graphs-Cytoscape}

```rascal
data Cytoscape  
     = cytoscape(
        list[CytoData] elements = [],
        list[CytoStyleOf] style=[],
        CytoLayout \layout = cytolayout()
    )
     ;
```

## data CytoData {#vis-Graphs-CytoData}

```rascal
data CytoData  
     = cytodata(CytoElement \data)
     ;
```

## data CytoElement {#vis-Graphs-CytoElement}

```rascal
data CytoElement  
     = \node(str id, str label=id, loc editor=|none:///|)
     | \edge(str source, str target, str id="<source>-<target>", str label="")
     ;
```

## data CytoStyleOf {#vis-Graphs-CytoStyleOf}

```rascal
data CytoStyleOf  
     = cytoNodeStyleOf(
        CytoSelector selector = \node(),
        CytoStyle style = cytoNodeStyle()
    )
     | cytoEdgeStyleOf(
        CytoSelector selector = \edge(),
        CytoStyle style = cytoEdgeStyle()
    )
     ;
```

## function cytoNodeStyleOf {#vis-Graphs-cytoNodeStyleOf}

```rascal
CytoStyleOf cytoNodeStyleOf(CytoStyle style)

```

## function cytoEdgeStyleOf {#vis-Graphs-cytoEdgeStyleOf}

```rascal
CytoStyleOf cytoEdgeStyleOf(CytoStyle style)

```

## function defaultNodeStyle {#vis-Graphs-defaultNodeStyle}

```rascal
CytoStyle defaultNodeStyle()

```

## function defaultEdgeStyle {#vis-Graphs-defaultEdgeStyle}

```rascal
CytoStyle defaultEdgeStyle()

```

## data CytoFontWeight {#vis-Graphs-CytoFontWeight}

```rascal
data CytoFontWeight  
     = normal()
     | lighter()
     | bold()
     | bolder()
     ;
```

## data CytoHorizontalAlign {#vis-Graphs-CytoHorizontalAlign}

```rascal
data CytoHorizontalAlign  
     = left()
     | center()
     | right()
     | auto()
     ;
```

## data CytoVerticalAlign {#vis-Graphs-CytoVerticalAlign}

```rascal
data CytoVerticalAlign  
     = top()
     | center()
     | bottom()
     | auto()
     ;
```

## data CytoStyle {#vis-Graphs-CytoStyle}

```rascal
data CytoStyle  
     = cytoNodeStyle(
        str width               = "label",
        str padding             = "10pt",
        str color               = "white",
        str \text-opacity       = "100%",
        str \font-family        = "",
        str \font-size          = "12pt",
        str \font-style         = "",
        CytoFontWeight \font-weight = normal(),
        str \background-color   = "blue",
        str label               = "data(label)",
        CytoNodeShape shape     = circle(),
        CytoHorizontalAlign \text-halign = center(),
        CytoVerticalAlign \text-valign = \top(),
        CytoTextWrap \text-wrap = CytoTextWrap::none(),
        str \text-max-width     = "100px",
        CytoHorizontalAlign \text-justification = CytoHorizontalAlign::center(),
        int \line-height        = 1
    )
     | cytoEdgeStyle(
        int width               = 3,
        str \line-color         = "black",
        str color               = "red",
        str \target-arrow-color = "black",
        str \source-arrow-color = "black",
        CytoArrowHeadStyle \target-arrow-shape = triangle(),
        CytoArrowHeadStyle \source-arrow-shape = none(),
        CytoCurveStyle \curve-style = bezier(),
        int \source-text-offset = 1,
        int \target-text-offset = 1,
        str label               = "data(label)"
    )
     ;
```

## data CytoTextWrap {#vis-Graphs-CytoTextWrap}

```rascal
data CytoTextWrap  
     = none()
     | wrap()
     | ellipses()
     ;
```

## data CytoCurveStyle {#vis-Graphs-CytoCurveStyle}

```rascal
data CytoCurveStyle  
     = bezier()
     | \unbundled-bezier()
     | straight()
     | segments()
     | \straight-triangle()
     | taxi()
     | haystack()
     ;
```

## data CytoArrowHeadStyle {#vis-Graphs-CytoArrowHeadStyle}

```rascal
data CytoArrowHeadStyle  
     = triangle()
     | \triangle-tee()
     | \circle-triangle()
     | \triangle-cross()
     | \triangle-backcurve()
     | vee()
     | tee()
     | square()
     | circle()
     | diamond()
     | chevron()
     | none()
     ;
```

## data CytoSelector {#vis-Graphs-CytoSelector}

```rascal
data CytoSelector  
     = \node()
     | \edge()
     ;
```

## data CytoLayout {#vis-Graphs-CytoLayout}

```rascal
data CytoLayout  
     = cytolayout(
        CytoLayoutName name = cose(),
        bool animate = false
    )
     ;
```

## data CytoLayoutName {#vis-Graphs-CytoLayoutName}

```rascal
data CytoLayoutName  
     = grid()
     | circle()
     | breadthfirst()
     | cose()
     ;
```

## function graphServer {#vis-Graphs-graphServer}

```rascal
Response (Request) graphServer(Cytoscape ch)

```

#### Synopsis

this is the main server generator for any graph value

#### Description


Given a Graph value this server captures the value and serves it
as a JSON value to the HTML client generated by [plotHTML](../../Library/vis/Graphs.md#vis::Graphs-plotHTML).

## function plotHTML {#vis-Graphs-plotHTML}

```rascal
HTMLElement plotHTML()

```

#### Synopsis

default HTML wrapper for a chart

