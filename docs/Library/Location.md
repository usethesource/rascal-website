---
title: "Location"
---

#### Usage

`import Location;`


#### Synopsis

Library functions for source locations.

#### Description

For a description of source locations see [Location](/docs/Rascal/Expressions/Values/Location) in the Rascal Language Reference.

The following functions are defined for source locations:
* [Library:function:Location::begins after](/docs/Library/Location#Location-beginsAfter)
* [Library:function:Location::begins before](/docs/Library/Location#Location-beginsBefore)
* [Library:function:Location::cover](/docs/Library/Location#Location-cover)
* [Library:function:Location::get content](/docs/Library/Location#Location-getContent)
* [Library:function:Location::is after](/docs/Library/Location#Location-isAfter)
* [Library:function:Location::is before](/docs/Library/Location#Location-isBefore)
* [Library:function:Location::is contained in](/docs/Library/Location#Location-isContainedIn)
* [Library:function:Location::is immediately after](/docs/Library/Location#Location-isImmediatelyAfter)
* [Library:function:Location::is immediately before](/docs/Library/Location#Location-isImmediatelyBefore)
* [Library:function:Location::is lexically less](/docs/Library/Location#Location-isLexicallyLess)
* [Library:function:Location::is overlapping](/docs/Library/Location#Location-isOverlapping)
* [Library:function:Location::is same file](/docs/Library/Location#Location-isSameFile)
* [Library:function:Location::is strictly contained in](/docs/Library/Location#Location-isStrictlyContainedIn)
* [Library:function:Location::relativize](/docs/Library/Location#Location-relativize)

A source location `l` refers to a text fragment in another file or resource. To ease the description we will
talk about _`l` 's text_ instead of _the text `l` refers to_.


## function relativize {#Location-relativize}

* ``loc relativize(loc outside, loc inside)``


#### Synopsis

Extracts a path relative to a parent location. 

#### Description

So from `x:///a/b`` and `x:///a/b/c`` this makes `relative:///c`.
If the outside does not envelop the inside, then the original loc is returned.

## function isSameFile {#Location-isSameFile}

* ``bool isSameFile(loc l, loc r)``


#### Synopsis

Check that two locations refer to the same file.

## function isLexicallyLess {#Location-isLexicallyLess}

* ``bool isLexicallyLess(loc l, loc r)``


#### Synopsis

Compare two location values lexicographically.

#### Description

When the two locations refer to different files, their paths are compared as string.
When they refer to the same file, their offsets are compared when present.

#### Pittfalls

This ordering regards the location value itself as opposed to the text it refers to.

## function getContent {#Location-getContent}

* ``str getContent(loc l)``


#### Synopsis

Get the textual content a location refers to.

## function isStrictlyContainedIn {#Location-isStrictlyContainedIn}

* ``bool isStrictlyContainedIn(loc inner, loc outer)``


#### Synopsis

Is a location textually (strictly) contained in another location?

#### Description

Strict containment between two locations `inner` and `outer` holds when


- `outer` 's text begins before `inner` 's text, or
- `outer` 's text ends after `inner` 's text, or
- both.

## function isContainedIn {#Location-isContainedIn}

* ``bool isContainedIn(loc inner, loc outer)``


#### Synopsis

Is a location textually contained in another location?

#### Description

Containment between two locations `inner` and `outer` holds when


- `inner` and `outer` are equal, or
- `inner` is strictly contained in `outer`.

## function beginsBefore {#Location-beginsBefore}

* ``bool beginsBefore(loc l, loc r)``


#### Synopsis

Begins a location's text before (but may overlap with) another location's text?

## function isBefore {#Location-isBefore}

* ``bool isBefore(loc l, loc r)``


#### Synopsis

Begins and ends a location's text before another location's text?

#### Description

`isBefore(l, r)` holds when `l` 's text occurs textually before `r` 's text.

## function isImmediatelyBefore {#Location-isImmediatelyBefore}

* ``bool isImmediatelyBefore(loc l, loc r)``


#### Synopsis

Occurs a location's text _immediately_ before another location's text?

#### Description

`isImmediatelyBefore(l, r)` holds when `l` 's text occurs textually before, and is adjacent to, `r` 's text.

## function beginsAfter {#Location-beginsAfter}

* ``bool beginsAfter(loc l, loc r)``


#### Synopsis

Begins a location's text after (but may overlap with) another location's text?

Description
`beginsAfter(l, r)` holds when `l` 's text begins after `r` 's text. No assumption is made about the end of both texts.
In other words, `l` 's text may end before or after the end of `r` 's text.

## function isAfter {#Location-isAfter}

* ``bool isAfter(loc l, loc r)``


#### Synopsis

Is a location's text completely after another location's text?

## function isImmediatelyAfter {#Location-isImmediatelyAfter}

* ``bool isImmediatelyAfter(loc l, loc r)``


#### Synopsis

Is a location's text _immediately_ after another location's text?

## function isOverlapping {#Location-isOverlapping}

* ``bool isOverlapping(loc l, loc r)``


#### Synopsis

Refer two locations to text that overlaps?

## function cover {#Location-cover}

* ``loc cover(list[loc] locs)``


#### Synopsis

Compute a location that textually covers the text of a list of locations.

#### Description

Create a new location that refers to the smallest text area that overlaps with the text of the given locations.
The given locations should all refer to the same file but they may be overlapping or be contained in each other.

