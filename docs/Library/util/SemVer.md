---
title: "module util::SemVer"
---

#### Usage

`import util::SemVer;`


## function satisfiesVersion {#util-SemVer-satisfiesVersion}

* ``bool satisfiesVersion(str version, str rangeSet)``


#### Synopsis

Semantic Versioning
#### Description

Check that a given version string satisfies a range-set as defined by:
(See https://github.com/npm/node-semver):
``````
range-set  ::= range ( logical-or range ) *
logical-or ::= ( ' ' ) * '||' ( ' ' ) *
range      ::= hyphen | simple ( ' ' simple ) * | ''
hyphen     ::= partial ' - ' partial
simple     ::= primitive | partial | tilde | caret
primitive  ::= ( '<' | '>' | '>=' | '<=' | '=' | ) partial
partial    ::= xr ( '.' xr ( '.' xr qualifier ? )? )?
xr         ::= 'x' | 'X' | '*' | nr
nr         ::= '0' | ['1'-'9'] ( ['0'-'9'] ) *
tilde      ::= '~' partial
caret      ::= '^' partial
qualifier  ::= ( '-' pre )? ( '+' build )?
pre        ::= parts
build      ::= parts
parts      ::= part ( '.' part ) *
part       ::= nr | [-0-9A-Za-z]+
``````

## function lessVersion {#util-SemVer-lessVersion}

* ``bool lessVersion(str version1, str version2)``

## function lessEqualVersion {#util-SemVer-lessEqualVersion}

* ``bool lessEqualVersion(str version1, str version2)``

## function greaterVersion {#util-SemVer-greaterVersion}

* ``bool greaterVersion(str version1, str version2)``

## function greaterEqualVersion {#util-SemVer-greaterEqualVersion}

* ``bool greaterEqualVersion(str version1, str version2)``

## function equalVersion {#util-SemVer-equalVersion}

* ``bool equalVersion(str version1, str version2)``

## function getRascalVersion {#util-SemVer-getRascalVersion}

* ``str getRascalVersion()``

## function getRascalRuntimeVersion {#util-SemVer-getRascalRuntimeVersion}

* ``str getRascalRuntimeVersion()``

## function getRascalCompilerVersion {#util-SemVer-getRascalCompilerVersion}

* ``str getRascalCompilerVersion()``

