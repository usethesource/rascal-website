---
title: "module Node"
---

#### Usage

`import Node;`


#### Synopsis

Library functions for nodes.

#### Description

For operators on nodes see [Node](../Rascal/Expressions/Values/Node/) in the Rascal Language Reference.

The following functions are defined for nodes:
* [arbNode](../Library/Node.md#Node-arbNode/)
* [arity](../Library/Node.md#Node-arity/)
* [delAnnotation](../Library/Node.md#Node-delAnnotation/)
* [delAnnotations](../Library/Node.md#Node-delAnnotations/)
* [delAnnotationsRec](../Library/Node.md#Node-delAnnotationsRec/)
* [getAnnotations](../Library/Node.md#Node-getAnnotations/)
* [getChildren](../Library/Node.md#Node-getChildren/)
* [getKeywordParameters](../Library/Node.md#Node-getKeywordParameters/)
* [getName](../Library/Node.md#Node-getName/)
* [itoString](../Library/Node.md#Node-itoString/)
* [makeNode](../Library/Node.md#Node-makeNode/)
* [setAnnotations](../Library/Node.md#Node-setAnnotations/)
* [setKeywordParameters](../Library/Node.md#Node-setKeywordParameters/)
* [toString](../Library/Node.md#Node-toString/)
* [unset](../Library/Node.md#Node-unset/)
* [unsetRec](../Library/Node.md#Node-unsetRec/)


## function arity {#Node-arity}

* ``int arity(node T)``


#### Synopsis

Determine the number of children of a node.

#### Examples


```rascal-shell 
rascal>import Node;
ok
rascal>arity("f"(10, "abc"));
int: 2
rascal>arity("f"(10, "abc", false));
int: 3
```

## function getChildren {#Node-getChildren}

* ``list[value] getChildren(node T)``


#### Synopsis

Get the children of a node.

#### Examples


```rascal-shell 
rascal>import Node;
ok
rascal>getChildren("f"(10, "abc"));
list[value]: [10,"abc"]
```

## function getKeywordParameters {#Node-getKeywordParameters}

* ``map[str,value] getKeywordParameters(node T)``


#### Synopsis

Get the keyword parameters of a node.

#### Examples


```rascal-shell 
rascal>import Node;
ok
rascal>getKeywordParameters("f"(10, "abc", height=0));
map[str, value]: ("height":0)
```

## function getAnnotations {#Node-getAnnotations}

* ``map[str, value] getAnnotations(node T)``

## function setKeywordParameters {#Node-setKeywordParameters}

* ``&T <: node setKeywordParameters(&T <: node x, map[str,value] keywordParameters)``


#### Synopsis

Set the keyword parameters of a node.

#### Examples


```rascal-shell 
rascal>import Node;
ok
rascal>setKeywordParameters("f"(10, "abc"), ("height":0));
node: "f"(10,"abc",
  height=0)
```

## function setAnnotations {#Node-setAnnotations}

* ``&T <: node setAnnotations(&T <: node x, map[str,value] keywordParameters)``

## function getName {#Node-getName}

* ``str getName(node T)``


#### Synopsis

Determine the name of a node.

#### Examples


```rascal-shell 
rascal>import Node;
ok
rascal>getName("f"(10, "abc"));
str: "f"
```

## function makeNode {#Node-makeNode}

* ``node makeNode(str N, value V..., map[str, value] keywordParameters = ())``


#### Synopsis

Create a node given its function name and arguments.

#### Examples


```rascal-shell 
rascal>import Node;
ok
rascal>makeNode("f", [10, "abc"]);
node: "f"(10,"abc")
```

## function unset {#Node-unset}

* ``&T <: node unset(&T <: node x, str keywordParameter)``


#### Synopsis

Reset a specific keyword parameter back to their default on a node.

## function delAnnotation {#Node-delAnnotation}

* ``&T <: node delAnnotation(&T <:  node x, str keywordParameter)``

## function unset {#Node-unset}

* ``&T <: node unset(&T <: node x, set[str] keywordParameters)``
* ``&T <: node unset(&T <: node x)``


#### Synopsis

Reset a set of keyword parameters back to their default on a node.

## function delAnnotations {#Node-delAnnotations}

* ``&T <: node delAnnotations(&T <: node x)``

## function unsetRec {#Node-unsetRec}

* ``&T unsetRec(&T x)``


#### Synopsis

Recursively reset all keyword parameters of the node and its children back to their default.

## function delAnnotationsRec {#Node-delAnnotationsRec}

* ``&T delAnnotationsRec(&T x)``

## function unsetRec {#Node-unsetRec}

* ``&T unsetRec(&T x, str keywordParameter)``
* ``&T <: node unsetRec(&T <: node x, set[str] keywordParameters)``


#### Synopsis

Recursively reset a specific keyword parameter of the node and its children back to its default.

## function arbNode {#Node-arbNode}

* ``node arbNode()``

## function toString {#Node-toString}

* ``str toString(node T)``


#### Synopsis

Convert a node to a string.

#### Examples


```rascal-shell 
rascal>import Node;
ok
rascal>F = "f"(10, "abc", color="red", size="large");
node: "f"(10,"abc",
  size="large",
  color="red")
rascal>toString(F);
str: "\"f\"(10,\"abc\",size=\"large\",color=\"red\")"
```

## function itoString {#Node-itoString}

* ``str itoString(node T)``


#### Synopsis

Convert a node to an indented string.

#### Examples


```rascal-shell 
rascal>import Node;
ok
rascal>F = "f"(10, "abc", color="red", size="large");
node: "f"(10,"abc",
  size="large",
  color="red")
rascal>itoString(F);
str: "\"f\"(10,\"abc\",\n  size=\"large\",\n  color=\"red\")"
```

