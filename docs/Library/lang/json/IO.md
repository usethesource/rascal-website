---
title: "module lang::json::IO"
---

#### Usage

`import lang::json::IO;`

#### Synopsis

(De)serialization of JSON values.


## function toJSON {#lang-json-IO-toJSON}

```rascal
str toJSON(value v)

str toJSON(value v, bool compact)

```

## function fromJSON {#lang-json-IO-fromJSON}

```rascal
&T fromJSON(type[&T] typ, str src)

```

## function readJSON {#lang-json-IO-readJSON}

```rascal
&T readJSON(type[&T] expected, loc src, str dateTimeFormat = "yyyy-MM-dd\'T\'HH:mm:ssZZZZZ", bool lenient=false)

```

reads JSON values from a stream
In general the translation behaves as follows:
 * Objects translate to map[str,value] by default, unless a node is expected (properties are then translated to keyword fields)
 * Arrays translate to lists by default, or to a set if that is expected or a tuple if that is expected. Arrays may also be interpreted as constructors or nodes (see below)
 * Booleans translate to bools
 * If the expected type provided is a datetime then an int instant is mapped and if a string is found then the dateTimeFormat parameter will be used to configure the parsing of a date-time string
 * If the expected type provided is an ADT then this reader will try to "parse" each object as a constructor for that ADT. It helps if there is only one constructor for that ADT. Positional parameters will be mapped by name as well as keyword parameters.
 * If the expected type provided is a node then it will construct a node named "object" and map the fields to keyword fields.
 * If num, int, real or rat are expected both strings and number values are mapped
 * If loc is expected than strings which look like URI are parsed (containing :/) or a file:/// URI is build, or if an object is found each separate field of
   a location object is read from the respective properties: { scheme : str, authority: str?, path: str?, fragment: str?, query: str?, offset: int, length: int, begin: [bl, bc], end: [el, ec]}

## function parseJSON {#lang-json-IO-parseJSON}

```rascal
&T parseJSON(type[&T] expected, str src, str dateTimeFormat = "yyyy-MM-dd\'T\'HH:mm:ssZZZZZ", bool lenient=false)

```

parses JSON values from a string
In general the translation behaves as the same as for [read j s oN](../../../Library/lang/json/IO.md#lang-json-IO-readJSON).

## function writeJSON {#lang-json-IO-writeJSON}

```rascal
void writeJSON(loc target, value val, bool unpackedLocations=false, str dateTimeFormat="yyyy-MM-dd\'T\'HH:mm:ssZZZZZ", bool dateTimeAsInt=false, int indent=0)

```

## function asJSON {#lang-json-IO-asJSON}

```rascal
str asJSON(value val, bool unpackedLocations=false, str dateTimeFormat="yyyy-MM-dd\'T\'HH:mm:ssZZZZZ", bool dateTimeAsInt=false, int indent = 0)

```

