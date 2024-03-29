---
title: Location
keywords:
  - "|"
  - "("
  - ")"

---

#### Synopsis

(Source code) location values.

#### Syntax

`| Uri | ( O, L, < BL, BC > , < EL,EC > )`
where:

*  _Uri_ is an arbitrary Uniform Resource Identifier (URI).

*  _O_ and _L_ are integer expressions giving the offset of this location to the begin of file, respectively, its length.

*  _BL_ and _BC_ are integers expressions giving the begin line and begin column.

*  _EL_ and _EC_ are integers expressions giving the end line and end column.


The part following the second pipe symbol (`|`) is optional.

#### Types

`loc`

#### Function

#### Description

Location values are represented by the type `loc` and serve the following purposes:

*  Providing a uniform mechanism for accessing local or remote files. This is used in all IO-related library functions.
*  If the optional part is present they serve as text coordinates in a specific local or remote source file.
  This is very handy to associate a source code location which extracted facts.


URIs are explained in [Uniform Resource Identifier](http://en.wikipedia.org/wiki/Uniform_Resource_Identifier). From their original definition in RFC3986 we cite the following useful overview of an URI:
```rascal

         foo://example.com:8042/over/there?name=ferret#nose
         \_/   \______________/\_________/ \_________/ \__/
          |           |            |            |        |
       scheme     authority       path        query   fragment
          |   _____________________|__
         / \ /                        \
         urn:example:animal:ferret:nose
```

The elements of a location value can be accessed and modified using the standard mechanism of field selection and field assignment. The corresponding field names are:

*  `top`: the URI of the location without precise positioning information (offset, length, begin, end).
*  `uri`: the URI of the location as a string. Also subfields of the URI can be accessed:
   * `scheme`: the scheme (or protocol) to be used;
   * `authority`: the domain where the data are located, as a `str`;
   * `host`: the host where the URI is hosted (part of authority), as a `str`;
   * `port`: port on host (part of authority), as a `int`;
   * `path`: path name of file on host, as a `str`;
   * `extension`: file name extension, as a `str`;
   * `query`: query data, as a `str`;
   * `fragment`: the fragment name following the path name and query data, as a `str`;
   * `user`: user info (only present in schemes like mailto), as a `str`;
   * `parent` : removes the last segment from the path component, if any, as a `loc`;
   * `file` : the last segment of the path, as a `str`;
   * `ls` : the contents of a directory, if the loc is a directory, as a `list[loc]`.
* `offset`: start of text area.
* `length`: length of text area.
* `begin.line`, `begin.column`: begin line and column of text area.
* `end.line`, `end.column` end line and column of text area.

All the supported schemes are reported [here]((Locations))

Locations with specific position information are normally generated automatically (e.g. by parsers)  but for the curious here is an example:
```rascal-shell
|file:///home/paulk/pico.trm|(0,1,<2,3>,<4,5>)
```
Note that example is equivalent to using the `home` scheme:
```rascal-shell
|home://pico.trm|(0,1,<2,3>,<4,5>)
```

You could read a webpage:

```rascal-shell
import IO;
println(readFile(|http://www.example.org|))
```

Addition on locations creates longer paths:
```rascal-shell
x = |tmp://myTempDirectory|;
x += "myTempFile.txt";
```

#### Benefits

* locations are values, but they can be interpreted as references.

#### Pitfalls

* if a location naming scheme is not _unique_ (read inaccurate) then downstream analyses are similarly inaccurate.
