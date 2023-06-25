---
title: No Such Field
---

#### Synopsis

Field of an abstract data type value cannot be found at runtime.

#### Types

`data RuntimeException = NoSuchField(str name);`
       
#### Usage

`import Exception;` (only needed when `NoSuchField` is used in `catch`)

#### Description

Selecting a field from an abstract datatype depends on the actual constructor 
being used at run time. This exception is thrown when a non-existent field is accessed.


#### Examples

Consider this simplified model of lawful entities:
```rascal-shell
data Entity = person(str name, int birthYear) | company(str name, Entity director);
jane = person("Jane", 2001);
icm =  company("ICM", jane);
```
The field `birthYear` is evidently only applicable to a `person` but not to a `company`

```rascal-shell,continue,error
icm.birthYear;
jane.birthYear;
```
