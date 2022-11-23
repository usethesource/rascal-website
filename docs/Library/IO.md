---
title: "module IO"
---

#### Usage

`import IO;`

#### Synopsis

Library functions for input/output.

#### Description


The following input/output functions are defined:
* [changeEvent](../Library/IO.md#IO-changeEvent)
* [created](../Library/IO.md#IO-created)
* [deleted](../Library/IO.md#IO-deleted)
* [directory](../Library/IO.md#IO-directory)
* [file](../Library/IO.md#IO-file)
* [modified](../Library/IO.md#IO-modified)
* [LocationChangeEvent](../Library/IO.md#IO-LocationChangeEvent)
* [LocationChangeType](../Library/IO.md#IO-LocationChangeType)
* [LocationType](../Library/IO.md#IO-LocationType)
* [appendToFile](../Library/IO.md#IO-appendToFile)
* [appendToFileEnc](../Library/IO.md#IO-appendToFileEnc)
* [arbLoc](../Library/IO.md#IO-arbLoc)
* [bprintln](../Library/IO.md#IO-bprintln)
* [canEncode](../Library/IO.md#IO-canEncode)
* [charsets](../Library/IO.md#IO-charsets)
* [copy](../Library/IO.md#IO-copy)
* [copyDirectory](../Library/IO.md#IO-copyDirectory)
* [copyFile](../Library/IO.md#IO-copyFile)
* [createLink](../Library/IO.md#IO-createLink)
* [created](../Library/IO.md#IO-created)
* [exists](../Library/IO.md#IO-exists)
* [find](../Library/IO.md#IO-find)
* [iprint](../Library/IO.md#IO-iprint)
* [iprintExp](../Library/IO.md#IO-iprintExp)
* [iprintToFile](../Library/IO.md#IO-iprintToFile)
* [iprintToString](../Library/IO.md#IO-iprintToString)
* [iprintln](../Library/IO.md#IO-iprintln)
* [iprintlnExp](../Library/IO.md#IO-iprintlnExp)
* [isDirectory](../Library/IO.md#IO-isDirectory)
* [isFile](../Library/IO.md#IO-isFile)
* [lastModified](../Library/IO.md#IO-lastModified)
* [listEntries](../Library/IO.md#IO-listEntries)
* [md5Hash](../Library/IO.md#IO-md5Hash)
* [md5HashFile](../Library/IO.md#IO-md5HashFile)
* [mkDirectory](../Library/IO.md#IO-mkDirectory)
* [move](../Library/IO.md#IO-move)
* [print](../Library/IO.md#IO-print)
* [printExp](../Library/IO.md#IO-printExp)
* [println](../Library/IO.md#IO-println)
* [printlnExp](../Library/IO.md#IO-printlnExp)
* [readBase64](../Library/IO.md#IO-readBase64)
* [readFile](../Library/IO.md#IO-readFile)
* [readFileBytes](../Library/IO.md#IO-readFileBytes)
* [readFileEnc](../Library/IO.md#IO-readFileEnc)
* [readFileLines](../Library/IO.md#IO-readFileLines)
* [readFileLinesEnc](../Library/IO.md#IO-readFileLinesEnc)
* [registerLocations](../Library/IO.md#IO-registerLocations)
* [remove](../Library/IO.md#IO-remove)
* [resolveLocation](../Library/IO.md#IO-resolveLocation)
* [rprint](../Library/IO.md#IO-rprint)
* [rprintln](../Library/IO.md#IO-rprintln)
* [setLastModified](../Library/IO.md#IO-setLastModified)
* [toBase64](../Library/IO.md#IO-toBase64)
* [touch](../Library/IO.md#IO-touch)
* [unregisterLocations](../Library/IO.md#IO-unregisterLocations)
* [unwatch](../Library/IO.md#IO-unwatch)
* [uudecode](../Library/IO.md#IO-uudecode)
* [uuencode](../Library/IO.md#IO-uuencode)
* [watch](../Library/IO.md#IO-watch)
* [writeBase64](../Library/IO.md#IO-writeBase64)
* [writeFile](../Library/IO.md#IO-writeFile)
* [writeFileBytes](../Library/IO.md#IO-writeFileBytes)
* [writeFileEnc](../Library/IO.md#IO-writeFileEnc)
* [writeFileLines](../Library/IO.md#IO-writeFileLines)


## function registerLocations {#IO-registerLocations}

```rascal
void registerLocations(str scheme, str authority, map[loc logical, loc physical] m)

```

#### Synopsis

Register a logical file scheme including the resolution method via a table.

#### Description


Logical source location schemes, such as `|java+interface://JRE/java/util/List|` are used for
precise qualified names of artifacts while abstracting from their physical location in a specific part
of a file on disk or from some webserver or source repository location.

Using this function you can create your own schemes. The authority field is used for scoping the 
names you wish to resolve to certain projects. This way one name can resolve to different locations 
in different projects.

#### Benefits


*  Logical source locations are supported by IDE features such as hyperlinks
*  Logical source locations are supported by all IO functions as well

#### Pitfalls


* Repeated calls to registerLocations for the same `scheme` and `authority` will overwrite the `m` map.
* The registry is an intentional memory leak; so make sure you use it wisely. See also [unregister locations](../Library/IO.md#IO-unregisterLocations).
* When the files references by the physical locations are being written to (edited, removed), then you
may expect problems. The registry is not automatically invalidated.

## function unregisterLocations {#IO-unregisterLocations}

```rascal
void unregisterLocations(str scheme, str authority)

```

Undo the effect of [register locations](../Library/IO.md#IO-registerLocations)

#### Description


For debugging or for memory management you may wish to remove a lookup table.

## function resolveLocation {#IO-resolveLocation}

```rascal
loc resolveLocation(loc l)

```

## function appendToFile {#IO-appendToFile}

```rascal
void appendToFile(loc file, value V..., str charset=DEFAULT_CHARSET, bool inferCharset=!(charset?))
throws PathNotFound, IO

void appendToFile(loc file, value V..., str charset=DEFAULT_CHARSET, bool inferCharset=!(charset?))
throws PathNotFound, IO

```

#### Synopsis

Append a value to a file.

#### Description


Append a textual representation of some values to an existing or a newly created file:

*  If a value is a simple string, the quotes are removed and the contents are de-escaped.
*  If a value has a non-terminal type, the parse tree is unparsed to produce a value.
*  All other values are printed as-is.
*  Each value is terminated by a newline character.

The existing file can be stored using any character set possible, if you know the character set, please use [append to file enc](../Library/IO.md#IO-appendToFileEnc).
Else the same method of deciding the character set is used as in [read file](../Library/IO.md#IO-readFile).

#### Pitfalls


*  The same encoding pitfalls as the [read file](../Library/IO.md#IO-readFile) function.

## function appendToFileEnc {#IO-appendToFileEnc}

```rascal
void appendToFileEnc(loc file, str charset, value V...) throws PathNotFound, IO

```

#### Synopsis

Append a value to a file.

#### Description


Append a textual representation of some values to an existing or a newly created file:

*  If a value is a simple string, the quotes are removed and the contents are de-escaped.
*  If a value has a non-terminal type, the parse tree is unparsed to produce a value.
*  All other values are printed as-is.
*  Each value is terminated by a newline character.

Files are encoded using the charset provided.

## function charsets {#IO-charsets}

```rascal
set[str] charsets()

```

#### Synopsis

Returns all available character sets.

## function canEncode {#IO-canEncode}

```rascal
set[str] canEncode(str charset)

```

#### Synopsis

Returns whether this charset can be used for encoding (use with [write file](../Library/IO.md#IO-writeFile))

## function bprintln {#IO-bprintln}

```rascal
bool bprintln(value arg)

```

#### Synopsis

Print a value and return true.

#### Description


Print a value and return `true`. This is useful for debugging complex Boolean expressions or comprehensions.
The only difference between this function and [println](../Library/IO.md#IO-println) is that its return type is `bool` rather than `void`.

#### Examples



```rascal-shell 
rascal>import IO;
ok
rascal>bprintln("Hello World");
Hello World
bool: true
```

## function exists {#IO-exists}

```rascal
bool exists(loc file)

```

#### Synopsis

Check whether a given location exists.

#### Description

Check whether a certain location exists, i.e., whether an actual file is associated with it.

#### Examples




```rascal-shell 
rascal>import IO;
ok
```

Does the library file `IO.rsc` exist?

```rascal-shell ,continue
rascal>exists(|std:///IO.rsc|);
bool: true
```

## function find {#IO-find}

```rascal
loc find(str name, list[loc] path) throws PathNotFound

```

#### Synopsis

Find a named file in a list of locations.

#### Examples



```rascal-shell 
rascal>import IO;
ok
```
Find the file `IO.rsc` in the standard library:

```rascal-shell ,continue
rascal>find("IO.rsc", [|std:///|]);
loc: |std:///IO.rsc|
```

## function isDirectory {#IO-isDirectory}

```rascal
bool isDirectory(loc file)

```

#### Synopsis

Check whether a given location is a directory.

#### Description


Check whether the location `file` is a directory.

## function iprint {#IO-iprint}

```rascal
void iprint(value arg, int lineLimit = 1000)

```

#### Synopsis

Print an indented representation of a value.

#### Description


See [iprintExp](../Library/IO.md#IO-iprintExp) for a version that returns its argument as result
and [iprintln](../Library/IO.md#IO-iprintln) for a version that adds a newline
and [iprintToFile](../Library/IO.md#IO-iprintToFile) for a version that prints to a file.

#### Examples



```rascal-shell 
rascal>import IO;
ok
rascal>iprint(["fruits", ("spider" : 8, "snake" : 0), [10, 20, 30]]);
[
  "fruits",
  ("snake":0,"spider":8),
  [10,20,30]
]
ok
```

## function iprintToFile {#IO-iprintToFile}

```rascal
void iprintToFile(loc file, value arg, str charset=DEFAULT_CHARSET)

```

#### Synopsis

Print an indented representation of a value to the specified location.

#### Description


See [iprint](../Library/IO.md#IO-iprint) for a version that displays the result on the console
and [iprintExp](../Library/IO.md#IO-iprintExp) for a version that returns its argument as result
and [iprintln](../Library/IO.md#IO-iprintln) for a version that adds a newline.

#### Examples



```rascal-shell 
rascal>import IO;
ok
rascal>iprintToFile(|file:///tmp/fruits.txt|, ["fruits", ("spider" : 8, "snake" : 0), [10, 20, 30]]);
ok
```

## function iprintToString {#IO-iprintToString}

```rascal
str iprintToString(value arg)

```

## function iprintExp {#IO-iprintExp}

```rascal
&T iprintExp(&T v)

```


#### Synopsis

Print an indented representation of a value and returns the value as result.

#### Description

See [iprintlnExp](../Library/IO.md#IO-iprintlnExp) for a version that adds a newline.

#### Examples


```rascal-shell 
rascal>import IO;
ok
rascal>iprintExp(["fruits", ("spider" : 8, "snake" : 0), [10, 20, 30]]);
[
  "fruits",
  ("snake":0,"spider":8),
  [10,20,30]
]
list[value]: [
  "fruits",
  ("snake":0,"spider":8),
  [10,20,30]
]
```

## function iprintlnExp {#IO-iprintlnExp}

```rascal
&T iprintlnExp(&T v)

```


#### Synopsis

Print an indented representation of a value followed by a newline and returns the value as result.

#### Description

See [iprintExp](../Library/IO.md#IO-iprintExp) for a version that does not add a newline.

#### Examples


```rascal-shell 
rascal>import IO;
ok
rascal>iprintlnExp(["fruits", ("spider" : 8, "snake" : 0), [10, 20, 30]]);
[
  "fruits",
  ("snake":0,"spider":8),
  [10,20,30]
]
list[value]: [
  "fruits",
  ("snake":0,"spider":8),
  [10,20,30]
]
```

## function iprintln {#IO-iprintln}

```rascal
void iprintln(value arg, int lineLimit = 1000)

```


#### Synopsis

Print a indented representation of a value and add a newline at the end.

#### Description

See [iprintlnExp](../Library/IO.md#IO-iprintlnExp) for a version that returns its argument as result
and [iprint](../Library/IO.md#IO-iprint) for a version that does not add a newline.

By default we only print the first 1000 lines, if you want to print larger values, either 
use [writeTextValueFile](../Library/ValueIO.md#ValueIO-writeTextValueFile) or change the limit with the lineLimit parameter.

#### Examples


```rascal-shell 
rascal>import IO;
ok
rascal>iprintln(["fruits", ("spider" : 8, "snake" : 0), [10, 20, 30]]);
[
  "fruits",
  ("snake":0,"spider":8),
  [10,20,30]
]
ok
rascal>iprintln([ {"hi"} | i <- [0..1000]], lineLimit = 10);
[
  {"hi"},
  {"hi"},
  {"hi"},
  {"hi"},
  {"hi"},
  {"hi"},
  {"hi"},
  {"hi"},
  {"hi"},
...
ok
```

## function isFile {#IO-isFile}

```rascal
bool isFile(loc file)

```


#### Synopsis

Check whether a given location is actually a file (and not a directory).

#### Description

Check whether location `file` is actually a file.

## function lastModified {#IO-lastModified}

```rascal
datetime lastModified(loc file)

```


#### Synopsis

Last modification date of a location.

#### Description

Returns last modification time of the file at location `file`.

#### Examples


```rascal-shell 
rascal>import IO;
ok
```
Determine the last modification date of the Rascal standard library:

```rascal-shell ,continue
rascal>lastModified(|std:///IO.rsc|);
datetime: $2022-11-22T14:52:28.000+00:00$
```

## function created {#IO-created}

```rascal
datetime created(loc file)

```


#### Synopsis

Creation datetime of a location.

#### Description

Returns the creation time of the file at location `file`.

#### Examples


```rascal-shell 
rascal>import IO;
ok
```
Determine the last modification date of the Rascal standard library:

```rascal-shell ,continue
rascal>created(|std:///IO.rsc|);
datetime: $2022-11-22T14:52:28.000+00:00$
```

## function touch {#IO-touch}

```rascal
void touch(loc file)

```


#### Synopsis

Set the modification date of a file to `now` or create the file if it did not exist yet
 

## function setLastModified {#IO-setLastModified}

```rascal
void setLastModified(loc file, datetime timestamp)

```

 
#### Synopsis

Set the modification date of a file to the timestamp
 

## function listEntries {#IO-listEntries}

```rascal
list[str] listEntries(loc file)

```


#### Synopsis

List the entries in a directory.

#### Description

List the entries in directory `file`.

#### Examples


```rascal-shell ,error
rascal>import IO;
ok
```
List all entries in the standard library:

```rascal-shell ,continue,error
rascal>listEntries(|std:///|);
list[str]: ["Boolean.rsc","Content.rsc","DateTime.rsc","Exception.rsc","Grammar.rsc","IO.rsc","List.rsc","ListRelation.rsc","Location.rsc","Map.rsc","Message.rsc","Node.rsc","ParseTree.rsc","Prelude$1.class","Prelude$2.class","Prelude$3.class","Prelude$4.class","Prelude$Backtrack.class","Prelude$ByteBufferBackedInputStream.class","Prelude$Distance.class","Prelude$Less.class","Prelude$NodeComparator.class","Prelude$ReleasableCallback.class","Prelude$Sorting.class","Prelude.class","Prelude.rsc","Relation.rsc","Set.rsc","String.rsc","Type.class","Type.rsc","ValueIO.rsc","analysis","demo","index.md","lang","resource","util","vis"]
```

## function mkDirectory {#IO-mkDirectory}

```rascal
void mkDirectory(loc file)
throws PathNotFound, IO

void mkDirectory(loc file)
throws PathNotFound, IO

```


#### Synopsis

Create a new directory.

#### Description

Create a directory at location `file`.

## function print {#IO-print}

```rascal
void print(value arg)

```


#### Synopsis

Print a value without subsequent newline.

#### Description

Print a value on the output stream.
See [println](../Library/IO.md#IO-println) for a version that adds a newline
and [printExp](../Library/IO.md#IO-printExp) for a version that returns its argument as value.


#### Examples

Note that the only difference with [println](../Library/IO.md#IO-println) is that no newline is added after the value is printed

```rascal-shell 
rascal>import IO;
ok
rascal>print("Hello World");
Hello World
ok
```

NOTE: Since `print` does not add a newline, the prompt `ok` appears at a weird place, i.e., 
glued to the output of `print`.

## function printExp {#IO-printExp}

```rascal
&T printExp(&T v)

&T printExp(str msg, &T v)

```


#### Synopsis

Print a value and return it as result.

#### Examples


```rascal-shell 
rascal>import IO;
ok
rascal>printExp(3.14);
3.14
real: 3.14
rascal>printExp("The value of PI is approximately ", 3.14);
The value of PI is approximately 3.14
real: 3.14
```

## function println {#IO-println}

```rascal
void println(value arg)

void println()

```


#### Synopsis

Print a value to the output stream and add a newline.

#### Description

Print a value on the output stream followed by a newline.
See [print](../Library/IO.md#IO-print) for a version that does not add a newline
and [printlnExp](../Library/IO.md#IO-printlnExp) for a version that returns its argument as value.

#### Examples


```rascal-shell 
rascal>import IO;
ok
rascal>println("Hello World");
Hello World
ok
```
Introduce variable S and print it:

```rascal-shell ,continue
rascal>S = "Hello World";
str: "Hello World"
rascal>println(S);
Hello World
ok
```
Introduce variable L and print it:

```rascal-shell ,continue
rascal>L = ["a", "b", "c"];
list[str]: ["a","b","c"]
rascal>println(L);
["a","b","c"]
ok
```
Use a string template to print several values:

```rascal-shell ,continue
rascal>println("<S>: <L>");
Hello World: ["a","b","c"]
ok
```
Just print a newline

```rascal-shell ,continue
rascal>println();
ok
```

## function printlnExp {#IO-printlnExp}

```rascal
&T printlnExp(&T v)

&T printlnExp(str msg, &T v)

```


#### Synopsis

Print a value followed by a newline and return it as result.

#### Examples


```rascal-shell 
rascal>import IO;
ok
rascal>printlnExp(3.14);
3.14
real: 3.14
rascal>printlnExp("The value of PI is approximately ", 3.14);
The value of PI is approximately 3.14
real: 3.14
```
NOTE: Since `printExp` does no produce a newline after its output, the result prompt `real: 3.14` is glued to the
output of `printExp`.

## function rprint {#IO-rprint}

```rascal
void rprint(value arg)

```


#### Synopsis

Raw print of a value.

#### Pitfalls

This function is only available for internal use in the Rascal development team.

## function rprintln {#IO-rprintln}

```rascal
void rprintln(value arg)

```


#### Synopsis

Raw print of a value followed by newline.

#### Pitfalls

This function is only available for internal use in the Rascal development team.

## function readFile {#IO-readFile}

```rascal
str readFile(loc file, str charset=DEFAULT_CHARSET, bool inferCharset=!(charset?))
throws PathNotFound, IO

str readFile(loc file, str charset=DEFAULT_CHARSET, bool inferCharset=!(charset?))
throws PathNotFound, IO

```


#### Synopsis

Read the contents of a location and return it as string value.

#### Description

Return the contents of a file location as a single string.
Also see [read file lines](../Library/IO.md#IO-readFileLines).

#### Encoding

A text file can be encoded in many different character sets, most common are UTF8, ISO-8859-1, and ASCII.
If you know the encoding of the file, please use the [read file enc](../Library/IO.md#IO-readFileEnc) and [read file lines enc](../Library/IO.md#IO-readFileLinesEnc) overloads.
If you do not know, we try to detect this. This detection is explained below:

*  If the implementation of the used scheme in the [location](../Rascal/Expressions/Values/Location/index.md) 
   (e.g.,`|project:///|`) defines the charset of the file then this is used.
*  Otherwise if the file contains a UTF8/16/32 [BOM](http://en.wikipedia.org/wiki/Byte_order_mark),
   then this is used.
*  As a last resort the IO library uses heuristics to determine if UTF-8 or UTF-32 could work:
   **  Are the first 32 bytes valid UTF-8? Then use UTF-8.
   **  Are the first 32 bytes valid UTF-32? Then use UTF-32.
*  Finally, we fall back to the system default (as given by the Java Runtime Environment).

*To summarize*, we use UTF-8 by default, except if the [location](../Rascal/Expressions/Values/Location/index.md) has available meta-data, the file contains a BOM, or
the first 32 bytes of the file are not valid UTF-8.

#### Pitfalls

*  In case encoding is not known, we try to estimate as best as we can.
*  We default to UTF-8, if the file was not encoded in UTF-8 but the first characters were valid UTF-8, 
  you might get an decoding error or just strange looking characters.

## function readFileEnc {#IO-readFileEnc}

```rascal
str readFileEnc(loc file, str charset) throws PathNotFound, IO

```

#### Synopsis

Read the contents of a location and return it as string value.

#### Description


Return the contents (decoded using the Character set supplied) of a file location as a single string.
Also see [read file lines enc](../Library/IO.md#IO-readFileLinesEnc).

## function readBase64 {#IO-readBase64}

```rascal
str readBase64(loc file)
throws PathNotFound, IO

str readBase64(loc file)
throws PathNotFound, IO

```

## function uuencode {#IO-uuencode}

```rascal
str uuencode(loc file)

```

## function writeBase64 {#IO-writeBase64}

```rascal
void writeBase64(loc file, str content)
throws PathNotFound, IO

void writeBase64(loc file, str content)
throws PathNotFound, IO

```

## function uudecode {#IO-uudecode}

```rascal
void uudecode(loc file, str content)

```

## function readFileBytes {#IO-readFileBytes}

```rascal
list[int] readFileBytes(loc file)
throws PathNotFound, IO

list[int] readFileBytes(loc file)
throws PathNotFound, IO

```


#### Synopsis

Read the contents of a file and return it as a list of bytes.

## function readFileLines {#IO-readFileLines}

```rascal
list[str] readFileLines(loc file, str charset=DEFAULT_CHARSET)
throws PathNotFound, IO

list[str] readFileLines(loc file, str charset=DEFAULT_CHARSET)
throws PathNotFound, IO

```


#### Synopsis

Read the contents of a file location and return it as a list of strings.

#### Description

Return the contents of a file location as a list of lines.
Also see [read file](../Library/IO.md#IO-readFile).

#### Encoding

Look at [read file](../Library/IO.md#IO-readFile) to understand how this function chooses the character set. If you know the character set used, please use [read file lines enc](../Library/IO.md#IO-readFileLinesEnc).

#### Pitfalls

*  In case encoding is not known, we try to estimate as best as we can (see [readFile]).
*  We default to UTF-8, if the file was not encoded in UTF-8 but the first characters were valid UTF-8, 
  you might get an decoding error or just strange looking characters (see [read file](../Library/IO.md#IO-readFile)).

## function writeFileLines {#IO-writeFileLines}

```rascal
void writeFileLines(loc file, list[str] lines, str charset=DEFAULT_CHARSET)

```

#### Synopsis

Writes a list of strings to a file, where each separate string is ended with a newline

#### Benefits


  * mirrors [read file lines](../Library/IO.md#IO-readFileLines) in its functionality

#### Pitfalls


  * if the individual elements of the list also contain newlines, the output may have more lines than list elements

## function readFileLinesEnc {#IO-readFileLinesEnc}

```rascal
list[str] readFileLinesEnc(loc file, str charset)
throws PathNotFound, IO

list[str] readFileLinesEnc(loc file, str charset)
throws PathNotFound, IO

```

#### Synopsis

Read the contents of a file location and return it as a list of strings.

#### Description


Return the contents (decoded using the Character set supplied) of a file location as a list of lines.
Also see [read file lines](../Library/IO.md#IO-readFileLines).

## function remove {#IO-remove}

```rascal
void remove(loc file, bool recursive=true) throws IO

```

## function writeFile {#IO-writeFile}

```rascal
void writeFile(loc file, value V..., str charset=DEFAULT_CHARSET)
throws PathNotFound, IO

void writeFile(loc file, value V..., str charset=DEFAULT_CHARSET)
throws PathNotFound, IO

```


#### Synopsis

Write values to a file.

#### Description

Write a textual representation of some values to a file:

*  If a value is a simple string, the quotes are removed and the contents are de-escaped.
*  If a value has a non-terminal type, the parse tree is unparsed to produce a value.
*  All other values are printed as-is.
*  Each value is terminated by a newline character.

Files are encoded in UTF-8, in case this is not desired, use [write file enc](../Library/IO.md#IO-writeFileEnc).

## function writeFileBytes {#IO-writeFileBytes}

```rascal
void writeFileBytes(loc file, list[int] bytes)
throws PathNotFound, IO

void writeFileBytes(loc file, list[int] bytes)
throws PathNotFound, IO

```

#### Synopsis

Write a list of bytes to a file.

## function writeFileEnc {#IO-writeFileEnc}

```rascal
void writeFileEnc(loc file, str charset, value V...) throws PathNotFound, IO

```


#### Synopsis

Write values to a file.

#### Description

Write a textual representation of some values to a file:

*  If a value is a simple string, the quotes are removed and the contents are de-escaped.
*  If a value has a non-terminal type, the parse tree is unparsed to produce a value.
*  All other values are printed as-is.
*  Each value is terminated by a newline character.

Files are encoded using the charset provided.

## function md5HashFile {#IO-md5HashFile}

```rascal
str md5HashFile(loc file)
throws PathNotFound, IO

str md5HashFile(loc file)
throws PathNotFound, IO

```


#### Synopsis

Read the contents of a location and return its MD5 hash.

#### Description

MD5 hash the contents of a file location.

## function md5Hash {#IO-md5Hash}

```rascal
str md5Hash(value v)

```

## function createLink {#IO-createLink}

```rascal
str createLink(str title, str target)

```

## function toBase64 {#IO-toBase64}

```rascal
str toBase64(loc file)
throws PathNotFound, IO

str toBase64(loc file)
throws PathNotFound, IO

```

## function copy {#IO-copy}

```rascal
void copy(loc source, loc target, bool recursive=false, bool overwrite=true) throws IO

```

## function copyFile {#IO-copyFile}

```rascal
void copyFile(loc source, loc target)

```

## function copyDirectory {#IO-copyDirectory}

```rascal
void copyDirectory(loc source, loc target)

```

## function move {#IO-move}

```rascal
void move(loc source, loc target, bool overwrite=true) throws IO

```

## function arbLoc {#IO-arbLoc}

```rascal
loc arbLoc()

```

## data LocationChangeEvent {#IO-LocationChangeEvent}

```rascal
data LocationChangeEvent  
     = changeEvent(loc src, LocationChangeType changeType, LocationType \type)
     ;
```

## data LocationChangeType {#IO-LocationChangeType}

```rascal
data LocationChangeType  
     = created()
     | deleted()
     | modified()
     ;
```

## data LocationType {#IO-LocationType}

```rascal
data LocationType  
     = file()
     | directory()
     ;
```

## function watch {#IO-watch}

```rascal
void watch(loc src, bool recursive, void (LocationChangeEvent event) watcher)

```

## function unwatch {#IO-unwatch}

```rascal
void unwatch(loc src, bool recursive, void (LocationChangeEvent event) watcher)

```

