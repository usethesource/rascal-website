---
title: "module Boolean"
---

#### Usage

`import Boolean;`


#### Synopsis

Library functions for Booleans.

#### Description

For operators on Boolean values see [Boolean](../Rascal/Expressions/Values/Boolean/index.md) in the Rascal Language Reference.

The following functions are defined for Booleans:
* [arbBool](../Library/Boolean.md#Boolean-arbBool)
* [fromString](../Library/Boolean.md#Boolean-fromString)
* [toInt](../Library/Boolean.md#Boolean-toInt)
* [toReal](../Library/Boolean.md#Boolean-toReal)
* [toString](../Library/Boolean.md#Boolean-toString)


## function arbBool {#Boolean-arbBool}

* ``bool arbBool()``


#### Synopsis

Return an arbitrary Boolean value.

#### Examples


```rascal-shell 
rascal>import Boolean;
ok
rascal>arbBool();
bool: true
rascal>arbBool();
bool: true
rascal>arbBool();
bool: false
```

#### Benefits

`arbInt` is a convenient generator for arbitrary binary choices.

## function fromString {#Boolean-fromString}

* ``bool fromString(str s)``


#### Synopsis

Convert the strings "true" or "false" to a bool.

## function toInt {#Boolean-toInt}

* ``int toInt(bool b)``


#### Synopsis

Convert a Boolean value to integer.

#### Description

Maps `true` to `1` and `false` to `0`.

#### Examples


```rascal-shell 
rascal>import Boolean;
ok
rascal>toInt(true);
int: 1
rascal>toInt(false);
int: 0
```

## function toReal {#Boolean-toReal}

* ``real toReal(bool b)``


#### Synopsis

Convert Boolean value to real.

#### Description

Maps `true` to `1.0` and `false` to `0.0`.

#### Examples


```rascal-shell 
rascal>import Boolean;
ok
rascal>toReal(true);
real: 1.0
rascal>toReal(false);
real: 0.0
```

## function toString {#Boolean-toString}

* ``str toString(bool b)``


#### Synopsis

Convert Boolean value to string.

#### Description

Maps `true` to `"true"` and `false` to `"false"`.

#### Examples


```rascal-shell 
rascal>import Boolean;
ok
rascal>toString(true);
str: "true"
rascal>toString(false);
str: "false"
```

