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
&T readJSON(type[&T] expected, loc src, bool implicitConstructors = true, bool implicitNodes = true, str dateTimeFormat = "yyyy-MM-dd\'T\'HH:mm:ssZZZZZ", bool lenient=false)

```

reads JSON values from a stream
In general the translation behaves as follows:
 * Objects translate to map[str,value] by default, unless a node is expected (properties are then translated to keyword fields)
 * Arrays translate to lists by default, or to a set if that is expected or a tuple if that is expected. Arrays may also be interpreted as constructors or nodes (see below)
 * Booleans translate to bools
 * If the expected type provided is a datetime then an int instant is mapped and if a string is found then the dateTimeFormat parameter will be used to configure the parsing of a date-time string
 * If the expected type provided is an ADT then this reader will map Json objects in a particular way, as configured by the implicitNodes and implicitConstructor 
   parameters.
 * If num, int, real or rat are expected both strings and number values are mapped
 * If loc is expected than strings which look like URI are parsed (containing :/) or a file:/// URI is build, or if an object is found each separate field of
   a location object is read from the respective properties: { scheme : str, authority: str?, path: str?, fragment: str?, query: str?, offset: int, length: int, begin: [bl, bc], end: [el, ec]}
  
In "implicitConstructor" mode the name of a property will be used as the name of the nested constructor. So this expects data definitions to line up constructor
names with field names: `data MyType = myConstructor(MyType2 myConstructor2); data MyType2 = myConstructor2(int i)`
                                                             ^_______________________________^
                                                             
This would then map the Json input `"myConstructor" : { myConstructor2 : { "i" : 1 } }` to the Rascal value `myConstructor(myConstructor2(1))`
                                                             
In this mode field names for keyword parameters map to keyword parameters and field names to positional parameters map to positional parameters (which do not have
to be printed in order in the Json input file).                                                             
                                                             
In explicit constructor mode (`implicitConstructor==false`) the following array-based encoding is expected for constructor trees, by example:
   `[ "myConstructor", [ ["myConstructor2", [ 1 ] ] ] ]` and when there are keyword parameters we allow a third field of the array which is an object mapping
   Json properties to Rascal keyword fields.  
   
A similar distinction is made for values of type `node`, configured using the `implicitNode` parameter.                                                                                                                    

## function parseJSON {#lang-json-IO-parseJSON}

```rascal
&T parseJSON(type[&T] expected, str src, bool implicitConstructors = true, bool implicitNodes = true, str dateTimeFormat = "yyyy-MM-dd\'T\'HH:mm:ssZZZZZ", bool lenient=false)

```

parses JSON values from a string
In general the translation behaves as follows:
 * Objects translate to map[str,value] by default, unless a node is expected (properties are then translated to keyword fields)
 * Arrays translate to lists by default, or to a set if that is expected or a tuple if that is expected. Arrays may also be interpreted as constructors or nodes (see below)
 * Booleans translate to bools
 * If the expected type provided is a datetime then an int instant is mapped and if a string is found then the dateTimeFormat parameter will be used to configure the parsing of a date-time string
 * If the expected type provided is an ADT then this reader will map Json objects in a particular way, as configured by the implicitNodes and implicitConstructor 
   parameters.
 * If num, int, real or rat are expected both strings and number values are mapped
 * If loc is expected than strings which look like URI are parsed (containing :/) or a file:/// URI is build, or if an object is found each separate field of
   a location object is read from the respective properties: { scheme : str, authority: str?, path: str?, fragment: str?, query: str?, offset: int, length: int, begin: [bl, bc], end: [el, ec]}
  
In "implicitConstructor" mode the name of a property will be used as the name of the nested constructor. So this expects data definitions to line up constructor
names with field names: `data MyType = myConstructor(MyType2 myConstructor2); data MyType2 = myConstructor2(int i)`
                                                             ^_______________________________^
                                                             
This would then map the Json input `"myConstructor" : { myConstructor2 : { "i" : 1 } }` to the Rascal value `myConstructor(myConstructor2(1))`
                                                             
In this mode field names for keyword parameters map to keyword parameters and field names to positional parameters map to positional parameters (which do not have
to be printed in order in the Json input file).                                                             
                                                             
In explicit constructor mode (`implicitConstructor==false`) the following array-based encoding is expected for constructor trees, by example:
   `[ "myConstructor", [ ["myConstructor2", [ 1 ] ] ] ]` and when there are keyword parameters we allow a third field of the array which is an object mapping
   Json properties to Rascal keyword fields.  
   
A similar distinction is made for values of type `node`, configured using the `implicitNode` parameter.                                                                                                                    

## function writeJSON {#lang-json-IO-writeJSON}

```rascal
void writeJSON(loc target, value val, bool implicitConstructors=true, bool implicitNodes=true, bool unpackedLocations=false, str dateTimeFormat="yyyy-MM-dd\'T\'HH:mm:ssZZZZZ", bool dateTimeAsInt=false, int indent=0)

```

## function asJSON {#lang-json-IO-asJSON}

```rascal
str asJSON(value val, bool implicitConstructors=true, bool implicitNodes=true, bool unpackedLocations=false, str dateTimeFormat="yyyy-MM-dd\'T\'HH:mm:ssZZZZZ", bool dateTimeAsInt=false, int indent = 0)

```

