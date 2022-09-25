---
title: Map Subscription
keywords:
  - "["
  - "]"

---

#### Synopsis

Retrieve a value by its key in map.

#### Syntax

`Exp~1~ [ Exp~2~ ]`

#### Types

| `Exp~1~`           | `Exp~2~` | `Exp~1~ [ Exp~2~ ]`  |
| --- | --- | --- |
| `map[T~1~, T~2~]` | `T~1~`   | `T~2~`                |


#### Description

Map subscription uses the value of _Exp_~2~ as key in the map value of _Exp_~1~ and returns the associated value.
If this key does not occur in the map, the exception `NoSuchKey` is thrown.

#### Examples


```rascal-shell ,error
```
Introduce a map, assign it to `colors`, and retrieve the element with index `"trumps"`:

```rascal-shell ,continue,error
rascal>colors = ("hearts":"red", "clover":"black", 
>>>>>>>          "trumps":"black", "clubs":"red");
map[str, str]: ("hearts":"red","trumps":"black","clover":"black","clubs":"red")
rascal>colors["trumps"];
str: "black"
```
Explore some erroneous subscription expressions:

```rascal-shell ,continue,error
rascal>colors[0];
|prompt:///|(7,1,<1,7>,<1,8>): Expected str, but got int
Advice: |http://tutor.rascal-mpl.org/Errors/Static/UnexpectedType/UnexpectedType.html|
ok
rascal>colors["square"];
|prompt:///|(7,8,<1,7>,<1,15>): NoSuchKey("square")
	at $shell$(|prompt:///|(0,17,<1,0>,<1,17>))
ok
```


