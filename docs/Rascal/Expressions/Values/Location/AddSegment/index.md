---
title: Location AddSegment
keywords:
  - "+"

---

#### Synopsis

Locations can be concatenated with strings to add segments to the path component

#### Syntax

`Loc + Str`

#### Types

//

| `Loc` | `Str` | `Loc + Str`  |
| --- | --- | --- |
| `loc`     | `str`     | `loc`                |

#### Description

Adds a segment to the path component of a location.
This concatenation introduces a path separator (`/`) automatically.

#### Examples

```rascal-shell 
rascal>|tmp:///myDir| + "myFile";
loc: |tmp:///myDir/myFile|
```
To get the original back, you can use the `parent` field:

```rascal-shell 
rascal>(|tmp:///myDir| + "myFile").parent
loc: |tmp:///myDir|
```

