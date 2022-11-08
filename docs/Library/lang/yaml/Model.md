---
title: "module lang::yaml::Model"
---

#### Usage

`import lang::yaml::Model;`


#### Synopsis

AST model for YAML (loosely based on the serialization model of <http://www.yaml.org/spec/1.2/spec.html>)


## data Node {#lang-yaml-Model-Node}

```rascal
data Node  
     = sequence(list[Node] \list)
     | scalar(value \value)
     | reference(int anchor)
     | mapping(map[Node, Node] \map)
     ;
```

## function loadYAML {#lang-yaml-Model-loadYAML}

```rascal
Node loadYAML(str src)

```

## function dumpYAML {#lang-yaml-Model-dumpYAML}

```rascal
str dumpYAML(Node yaml)

```

## function testLoadDump {#lang-yaml-Model-testLoadDump}

```rascal
test bool testLoadDump()

```

## function checkYAML {#lang-yaml-Model-checkYAML}

```rascal
set[str] checkYAML(Node n)

```

## function badAnchors {#lang-yaml-Model-badAnchors}

```rascal
set[Node] badAnchors(Node n)

```

## function wronglyTypedScalars {#lang-yaml-Model-wronglyTypedScalars}

```rascal
set[Node] wronglyTypedScalars(Node n)

```

## function okValue {#lang-yaml-Model-okValue}

```rascal
bool okValue(type[&T <: value] _, value v)

```

## function unsupportedTypes {#lang-yaml-Model-unsupportedTypes}

```rascal
set[type[value]] unsupportedTypes(Node n)

```

## function untaggedScalars {#lang-yaml-Model-untaggedScalars}

```rascal
set[Node] untaggedScalars(Node n)

```

## function duplicateAnchors {#lang-yaml-Model-duplicateAnchors}

```rascal
set[int] duplicateAnchors(Node n)

```

## function undefinedRefs {#lang-yaml-Model-undefinedRefs}

```rascal
tuple[set[int], set[int]] undefinedRefs(reference(i), set[int] seen, set[int] dupl)

tuple[set[int], set[int]] undefinedRefs(s:sequence(ns), set[int] seen, set[int] dupl)

tuple[set[int], set[int]] undefinedRefs(nod:mapping(m), set[int] seen, set[int] dupl)

default tuple[set[int], set[int]] undefinedRefs(Node n, set[int] seen, set[int] dupl)

```

## function equalNodes {#lang-yaml-Model-equalNodes}

```rascal
bool equalNodes(Node x, Node y)

```

