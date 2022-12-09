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

#### Benefits


* Easy to use for basic graph layouts.


## function graph {#vis-Graphs-graph}

```rascal
Content graph(lrel[&T x, &T y] v, NodeLinker[&T] nodeLinker=defaultNodeLinker, NodeLabeler[&T] nodeLabeler=defaultNodeLabeler, EdgeLabeler[&T] edgeLabeler=defaultEdgeLabeler, str title="Graph", CytoLayout \layout=defaultCoseLayout(), CytoStyle nodeStyle=defaultNodeStyle(), CytoStyle edgeStyle=defaultEdgeStyle())

Content graph(lrel[&T x, &L edge, &T y] v, NodeLinker[&T] nodeLinker=defaultNodeLinker, NodeLabeler[&T] nodeLabeler=defaultNodeLabeler, str title="Graph", CytoLayout \layout=defaultCoseLayout(), CytoStyle nodeStyle=defaultNodeStyle(), CytoStyle edgeStyle=defaultEdgeStyle())

Content graph(rel[&T x, &T y] v, NodeLinker[&T] nodeLinker=defaultNodeLinker, NodeLabeler[&T] nodeLabeler=defaultNodeLabeler, EdgeLabeler[&T] edgeLabeler=defaultEdgeLabeler, str title="Graph", CytoLayout \layout=defaultCoseLayout(), CytoStyle nodeStyle=defaultNodeStyle(), CytoStyle edgeStyle=defaultEdgeStyle())

Content graph(rel[&T x, &L edge, &T y] v, NodeLinker[&T] nodeLinker=defaultNodeLinker, NodeLabeler[&T] nodeLabeler=defaultNodeLabeler, str title="Graph", CytoLayout \layout=defaultCoseLayout(), CytoStyle nodeStyle=defaultNodeStyle(), CytoStyle edgeStyle=defaultEdgeStyle())

```

#### Synopsis

A graph plot from a binary list relation.

#### Examples



```rascal-shell 
rascal>import vis::Graphs;
ok
rascal>graph([<x,x+1> | x <- [1..100]] + [<100,1>])
```
![image](/assets/Library/vis/Graphs_screenshot_31.png)
```rascal-shell
rascal>graph([<x,x+1> | x <- [1..100]] + [<100,1>], \layout=\defaultCircleLayout())
```
![image](/assets/Library/vis/Graphs_screenshot_31.png)
```rascal-shell
```

Providing locations as node identities automatically transforms them to node links:

```rascal-shell 
rascal>import vis::Graphs;
ok
rascal>import IO;
ok
rascal>d = [<|std:///|, e> | e <- |std:///|.ls];
lrel[loc,loc]: [
  <|std:///|,|std:///Boolean.rsc|>,
  <|std:///|,|std:///Content.rsc|>,
  <|std:///|,|std:///DateTime.rsc|>,
  <|std:///|,|std:///Exception.rsc|>,
  <|std:///|,|std:///Grammar.rsc|>,
  <|std:///|,|std:///IO.rsc|>,
  <|std:///|,|std:///List.rsc|>,
  <|std:///|,|std:///ListRelation.rsc|>,
  <|std:///|,|std:///Location.rsc|>,
  <|std:///|,|std:///Map.rsc|>,
  <|std:///|,|std:///Message.rsc|>,
  <|std:///|,|std:///Node.rsc|>,
  <|std:///|,|std:///ParseTree.rsc|>,
  <|std:///|,|std:///Prelude$1.class|>,
  <|std:///|,|std:///Prelude$2.class|>,
  <|std:///|,|std:///Prelude$3.class|>,
  <|std:///|,|std:///Prelude$4.class|>,
  <|std:///|,|std:///Prelude$Backtrack.class|>,
  <|std:///|,|std:///Prelude$ByteBufferBackedInputStream.class|>,
  <|std:///|,|std:///Prelude$Distance.class|>,
  <|std:///|,|std:///Prelude$Less.class|>,
  <|std:///|,|std:///Prelude$NodeComparator.class|>,
  <|std:///|,|std:///Prelude$ReleasableCallback.class|>,
  <|std:///|,|std:///Prelude$Sorting.class|>,
  <|std:///|,|std:///Prelude.class|>,
  <|std:///|,|std:///Prelude.rsc|>,
  <|std:///|,|std:///Relation.rsc|>,
  <|std:///|,|std:///Set.rsc|>,
  <|std:///|,|std:///String.rsc|>,
  <|std:///|,|std:///Type.class|>,
  <|std:///|,|std:///Type.rsc|>,
  <|std:///|,|std:///ValueIO.rsc|>,
  <|std:///|,|std:///analysis|>,
  <|std:///|,|std:///demo|>,
  <|std:///|,|std:///index.md|>,
  <|std:///|,|std:///lang|>,
  <|std:///|,|std:///resource|>,
  <|std:///|,|std:///util|>,
  <|std:///|,|std:///vis|>
]
rascal>d += [<e,f> | <_, e> <- d, isDirectory(e), f <- e.ls];
lrel[loc,loc]: [
  <|std:///|,|std:///Boolean.rsc|>,
  <|std:///|,|std:///Content.rsc|>,
  <|std:///|,|std:///DateTime.rsc|>,
  <|std:///|,|std:///Exception.rsc|>,
  <|std:///|,|std:///Grammar.rsc|>,
  <|std:///|,|std:///IO.rsc|>,
  <|std:///|,|std:///List.rsc|>,
  <|std:///|,|std:///ListRelation.rsc|>,
  <|std:///|,|std:///Location.rsc|>,
  <|std:///|,|std:///Map.rsc|>,
  <|std:///|,|std:///Message.rsc|>,
  <|std:///|,|std:///Node.rsc|>,
  <|std:///|,|std:///ParseTree.rsc|>,
  <|std:///|,|std:///Prelude$1.class|>,
  <|std:///|,|std:///Prelude$2.class|>,
  <|std:///|,|std:///Prelude$3.class|>,
  <|std:///|,|std:///Prelude$4.class|>,
  <|std:///|,|std:///Prelude$Backtrack.class|>,
  <|std:///|,|std:///Prelude$ByteBufferBackedInputStream.class|>,
  <|std:///|,|std:///Prelude$Distance.class|>,
  <|std:///|,|std:///Prelude$Less.class|>,
  <|std:///|,|std:///Prelude$NodeComparator.class|>,
  <|std:///|,|std:///Prelude$ReleasableCallback.class|>,
  <|std:///|,|std:///Prelude$Sorting.class|>,
  <|std:///|,|std:///Prelude.class|>,
  <|std:///|,|std:///Prelude.rsc|>,
  <|std:///|,|std:///Relation.rsc|>,
  <|std:///|,|std:///Set.rsc|>,
  <|std:///|,|std:///String.rsc|>,
  <|std:///|,|std:///Type.class|>,
  <|std:///|,|std:///Type.rsc|>,
  <|std:///|,|std:///ValueIO.rsc|>,
  <|std:///|,|std:///analysis|>,
  <|std:///|,|std:///demo|>,
  <|std:///|,|std:///index.md|>,
  <|std:///|,|std:///lang|>,
  <|std:///|,|std:///resource|>,
  <|std:///|,|std:///util|>,
  <|std:///|,|std:///vis|>,
  <|std:///analysis|,|std:///analysis/clustering|>,
  <|std:///analysis|,|std:///analysis/diff|>,
  <|std:///analysis|,|std:///analysis/flow|>,
  <|std:///analysis|,|std:///analysis/formalconcepts|>,
  <|std:///analysis|,|std:///analysis/grammars|>,
  <|std:///analysis|,|std:///analysis/graphs|>,
  <|std:///analysis|,|std:///analysis/linearprogramming|>,
  <|std:///analysis|,|std:///analysis/m3|>,
  <|std:///analysis|,|std:///analysis/statistics|>,
  <|std:///analysis|,|std:///analysis/text|>,
  <|std:///demo|,|std:///demo/Dominators.rsc|>,
  <|std:///demo|,|std:///demo/McCabe.rsc|>,
  <|std:///demo|,|std:///demo/Mod17.rsc|>,
  <|std:///demo|,|std:///demo/Queens.rsc|>,
  <|std:///demo|,|std:///demo/ReachingDefs.rsc|>,
  <|std:///demo|,|std:///demo/Slicing.rsc|>,
  <|std:///demo|,|std:///demo/Uninit.rsc|>,
  <|std:///demo|,|std:///demo/basic|>,
  <|std:///demo|,|std:///demo/common|>,
  <|std:///demo|,|std:///demo/lang|>,
  <|std:///demo|,|std:///demo/vis|>,
  <|std:///lang|,|std:///lang/aterm|>,
  <|std:///lang|,|std:///lang/aut|>,
  <|std:///lang|,|std:///lang/box|>,
  <|std:///lang|,|std:///lang/c90|>,
  <|std:///lang|,|std:///lang/csv|>,
  <|std:///lang|,|std:///lang/diff|>,
  <|std:///lang|,|std:///lang/dimacs|>,
  <|std:///lang|,|std:///lang/dot|>,
  <|std:///lang|,|std:///lang/html|>,
  <|std:///lang|,|std:///lang/html5|>,
  <|std:///lang|,|std:///lang/java|>,
  <|std:///lang|,|std:///lang/javascript|>,
  <|std:///lang|,|std:///lang/json|>,
  <|std:///lang|,|std:///lang/manifest|>,
  <|std:///lang|,|std:///lang/oil|>,
  <|std:///lang|,|std:///lang/pico|>,
  <|std:///lang|,|std:///lang/rascal|>,
  <|std:///lang|,|std:///lang/rsf|>,
  <|std:///lang|,|std:///lang/sdf2|>,
  <|std:///lang|,|std:///lang/sexp|>,
  <|std:///lang|,|std:///lang/smtlib2|>,
  <|std:///lang|,|std:///lang/std|>,
  <|std:///lang|,|std:///lang/uri|>,
  <|std:///lang|,|std:///lang/xforms|>,
  <|std:///lang|,|std:///lang/xml|>,
  <|std:///lang|,|std:///lang/yaml|>,
  <|std:///resource|,|std:///resource/jdbc|>,
  <|std:///util|,|std:///util/Benchmark.class|>,
  <|std:///util|,|std:///util/Benchmark.rsc|>,
  <|std:///util|,|std:///util/Eval$EvalTimer.class|>,
  <|std:///util|,|std:///util/Eval$Timer.class|>,
  <|std:///util|,|std:///util/Eval.class|>,
  <|std:///util|,|std:///util/Eval.rsc|>,
  <|std:///util|,|std:///util/FileSystem.rsc|>,
  <|std:///util|,|std:///util/Highlight.rsc|>,
  <|std:///util|,|std:///util/IDEServices.rsc|>,
  <|std:///util|,|std:///util/IDEServicesLibrary.class|>,
  <|std:///util...
rascal>graph(d, \layout=defaultCoseLayout());
```
![image](/assets/Library/vis/Graphs_screenshot_38.png)
```rascal-shell
```
here we adapt the node labeler to show only the last file name in the path of the location:
```rascal-shell
rascal>graph(d, \layout=defaultCoseLayout(), nodeLabeler=str (loc l) { return l.file; });
```
![image](/assets/Library/vis/Graphs_screenshot_38.png)
```rascal-shell
```

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
Cytoscape cytoscape(list[CytoData] \data, \CytoLayout \layout=\defaultCoseLayout(), CytoStyle nodeStyle=defaultNodeStyle(), CytoStyle edgeStyle=defaultEdgeStyle())

```

## function graphData {#vis-Graphs-graphData}

```rascal
list[CytoData] graphData(rel[loc x, loc y] v, NodeLinker[loc] nodeLinker=defaultNodeLinker, NodeLabeler[loc] nodeLabeler=defaultNodeLabeler, EdgeLabeler[loc] edgeLabeler=defaultEdgeLabeler)

default list[CytoData] graphData(rel[&T x, &T y] v, NodeLinker[&T] nodeLinker=defaultNodeLinker,  NodeLabeler[&T] nodeLabeler=defaultNodeLabeler, EdgeLabeler[&T] edgeLabeler=defaultEdgeLabeler)

list[CytoData] graphData(lrel[loc x, &L edge, loc y] v, NodeLinker[&T] nodeLinker=defaultNodeLinker, NodeLabeler[&T] nodeLabeler=defaultNodeLabeler, EdgeLabeler[&T] edgeLabeler=defaultEdgeLabeler)

default list[CytoData] graphData(lrel[&T x, &L edge, &T y] v, NodeLinker[&T] nodeLinker=defaultNodeLinker, NodeLabeler[&T] nodeLabeler=defaultNodeLabeler, EdgeLabeler[&T] edgeLabeler=defaultEdgeLabeler)

list[CytoData] graphData(lrel[loc x, loc y] v, NodeLinker[loc] nodeLinker=defaultNodeLinker, NodeLabeler[loc] nodeLabeler=defaultNodeLabeler, EdgeLabeler[loc] edgeLabeler=defaultEdgeLabeler)

default list[CytoData] graphData(lrel[&T x, &T y] v, NodeLinker[&T] nodeLinker=defaultNodeLinker, NodeLabeler[&T] nodeLabeler=defaultNodeLabeler, EdgeLabeler[&T] edgeLabeler=defaultEdgeLabeler)

list[CytoData] graphData(rel[loc x, &L edge, loc y] v, NodeLinker[loc] nodeLinker=defaultNodeLinker, NodeLabeler[loc] nodeLabeler=defaultNodeLabeler, EdgeLabeler[&T] edgeLabeler=defaultEdgeLabeler)

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
     = \node(str id, str label=id, str editor="|none:///|")
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
data CytoLayout (CytoLayoutName name = cose(), bool animate=false) 
     = cytolayout()
     | breadthfirstLayout(
        CytoLayoutName name = CytoLayoutName::breadthfirst(),
        num spacingFactor= 1,
        list[str] roots = [],
        bool circle=false,
        bool grid=!circle,
        bool directed=false
    )
     | gridLayout(
        CytoLayoutName name = CytoLayoutName::grid(),
        int rows=2,
        int cols=2,
        bool avoidOverlap=true,
        num spacingFactor=1
    )
     | circleLayout(
        CytoLayoutName name = CytoLayoutName::circle(),
        bool avoidOverlap=true,
        num spacingFactor=1
    )
     | coseLayout(
        CytoLayoutName name = CytoLayoutName::cose()
    )
     ;
```

## function defaultCoseLayout {#vis-Graphs-defaultCoseLayout}

```rascal
CytoLayout defaultCoseLayout(bool avoidOverlap=true)

```

## function defaultCircleLayout {#vis-Graphs-defaultCircleLayout}

```rascal
CytoLayout defaultCircleLayout(bool avoidOverlap=true, num spacingFactor=1)

```

## function defaultGridLayout {#vis-Graphs-defaultGridLayout}

```rascal
CytoLayout defaultGridLayout(int rows=2, int cols=rows, bool avoidOverlap=true, num spacingFactor=1)

```

## function defaultBreadthfirstLayout {#vis-Graphs-defaultBreadthfirstLayout}

```rascal
CytoLayout defaultBreadthfirstLayout(num spacingFactor=1, bool circle=false, bool grid=!circle, bool directed=false)

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

