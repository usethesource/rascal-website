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

** `scheme`: the scheme (or protocol) to be used;

** `authority`: the domain where the data are located, as a `str`;

** `host`: the host where the URI is hosted (part of authority), as a `str`;

** `port`: port on host (part of authority), as a `int`;

** `path`: path name of file on host, as a `str`;

** `extension`: file name extension, as a `str`;

** `query`: query data, as a `str`;

** `fragment`: the fragment name following the path name and query data, as a `str`;

** `user`: user info (only present in schemes like mailto), as a `str`;
  
** `parent` : removes the last segment from the path component, if any, as a `loc`;

** `file` : the last segment of the path, as a `str`;

** `ls` : the contents of a directory, if the loc is a directory, as a `list[loc]`.

* `offset`: start of text area.

* `length`: length of text area.

* `begin.line`, `begin.column`: begin line and column of text area.

* `end.line`, `end.column` end line and column of text area.

These are the supported protocol schemes:

| Scheme name and pattern | Description |
| --- | --- |
| `file:///<path>` | for absolute file names in the OS filesystem | 
| `project://<projectName>/<path>` | relative to an IDEs workspace, the authority part is a project name and `/` is the root of the source project. Only in an IDE context you can find other projects with this. When running standalone on the commandline or using Maven only the current project is resolved. |
| `target://<authprojectNameprojectNameority>/<path>` | relative to an IDEs workspace, the authority part is a project name, and the `/` is the root of the binary target path. For example Java's `.class` files end up there |
| `tmp:///<path>` | finds the OS's folder for temporary files |
| `home:///<path>` | finds the current user's home folder |
| `cwd:///<path>` | finds the OS's current working directory |
| `std:///<path>` | resolves to the (installed) location of the Rascal standard library | 
| `zip+<scheme>://<authority>/<pathToZip>!/<pathInsideZip` | is for reading and writing into zip archives |
| `jar+<scheme>://<authority>/<pathToZip>!/<pathInJar` | is for reading and writing into jar archives |
| `plugin://<bundleName>/<path>` | resolves to the an Eclipse plugin (extracted) resource location, it resolves via an OSGI `bundleresource://` |
| `bundleresource://<bundleId>/<path>` | resolves to the an OSGI bundle (extracted) resource location. This resolves to a `jar+file://<filePath>!/<pathInJar>` often but could also resolve to a filesystem location depending on the configuration options of the bundle. |

Locations with specific position information should always be generated automatically but for the curious here is an example:

```rascal-shell 
rascal>|file:///home/paulk/pico.trm|(0,1,<2,3>,<4,5>)
loc: |file:///home/paulk/pico.trm|(0,1,<2,3>,<4,5>)
```
Note that this is equivalent to using the `home` scheme:

```rascal-shell 
rascal>|home://pico.trm|(0,1,<2,3>,<4,5>)
loc: |home://pico.trm|(0,1,<2,3>,<4,5>)
```

You could read a webpage:


```rascal-shell 
rascal>import IO;
ok
rascal>println(readFile(|http://www.example.org|))
<!doctype html>
<html>
<head>
    <title>Example Domain</title>

    <meta charset="utf-8" />
    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style type="text/css">
    body {
        background-color: #f0f0f2;
        margin: 0;
        padding: 0;
        font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
        
    }
    div {
        width: 600px;
        margin: 5em auto;
        padding: 2em;
        background-color: #fdfdff;
        border-radius: 0.5em;
        box-shadow: 2px 3px 7px 2px rgba(0,0,0,0.02);
    }
    a:link, a:visited {
        color: #38488f;
        text-decoration: none;
    }
    @media (max-width: 700px) {
        div {
            margin: 0 auto;
            width: auto;
        }
    }
    </style>    
</head>

<body>
<div>
    <h1>Example Domain</h1>
    <p>This domain is for use in illustrative examples in documents. You may use this
    domain in literature without prior coordination or asking for permission.</p>
    <p><a href="https://www.iana.org/domains/example">More information...</a></p>
</div>
</body>
</html>
ok
```

Addition on locations creates longer paths:

```rascal-shell 
rascal>x = |tmp://myTempDirectory|;
loc: |tmp://myTempDirectory|
rascal>x += "myTempFile.txt";
loc: |tmp://myTempDirectory/myTempFile.txt|
```



