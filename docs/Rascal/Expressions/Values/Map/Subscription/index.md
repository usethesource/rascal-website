---
title: Map Subscription
keywords:
  - "["
  - "]"

---

#### Synopsis

Retrieve a value by its key in map.

#### Syntax

`Exp<sub>1</sub> [ Exp<sub>2</sub> ]`

#### Types

| `Exp<sub>1</sub>`           | `Exp<sub>2</sub>` | `Exp<sub>1</sub> [ Exp<sub>2</sub> ]`  |
| --- | --- | --- |
| `map[T<sub>1</sub>, T<sub>2</sub>]` | `T<sub>1</sub>`   | `T<sub>2</sub>`                |


#### Function

#### Description

Map subscription uses the value of _Exp_<sub>2</sub> as key in the map value of _Exp_<sub>1</sub> and returns the associated value.
If this key does not occur in the map, the exception `NoSuchKey` is thrown.

#### Examples


```rascal-shell
```
Introduce a map, assign it to `colors`, and retrieve the element with index `"trumps"`:

```rascal-shell
rascal>colors = ("hearts":"red", "clover":"black", 
>>>>>>>          "trumps":"black", "clubs":"red");
map[str, str]: ("hearts":"red","trumps":"black","clover":"black","clubs":"red")
rascal>colors["trumps"];
str: "black"
```
Explore some erroneous subscription expressions:

```rascal-shell
rascal>colors[0];
|prompt:///|(7,1,<1,7>,<1,8>): Expected str, but got int
Advice: |http://tutor.rascal-mpl.org/Errors/Static/UnexpectedType/UnexpectedType.html|
ok
rascal>colors["square"];
|prompt:///|(7,8,<1,7>,<1,15>): NoSuchKey("square")
	at $shell$(|prompt:///|(0,17,<1,0>,<1,17>))
ok
```

#### Benefits


