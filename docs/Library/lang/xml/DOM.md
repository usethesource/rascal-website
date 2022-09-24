---
title: "module lang::xml::DOM"
---

#### Usage

`import lang::xml::DOM;`

#### Synopsis

Functions for reading and writing XML files to and from a "DOM" representation.

#### Description

[XML](http://en.wikipedia.org/wiki/XML) is a widely used markup language for encoding and exchanging documents.

The Document Object Model [DOM](http://en.wikipedia.org/wiki/Document_Object_Model) is a cross-platform and language-independent
way of representing and manipulating HTML, XHTML and XML documents. In this module we represent the DOM as a 
Rascal [algebraic data type](../../../Rascal/Declarations/AlgebraicDataType) using [keyword parameters](../../../Rascal/Declarations/Function/) for the optional attributes.

In [IO](../../../Library/lang/xml/IO.md) a different approach is taken, where each XML document is mapped to an instance of 
the `node` class, which gives a more direct one-to-ony mapping as opposed to the DOM encoding here.
If you are studying XML documents in general, then the current module is the place to be. If you
are reading in specific data which is only accidentally encoded as XML, then have a look at [IO](../../../Library/lang/xml/IO.md).

The following functions are provided:

* [attribute](../../../Library/lang/xml/DOM.md#lang::xml::DOM-attribute)
* [cdata](../../../Library/lang/xml/DOM.md#lang::xml::DOM-cdata)
* [charData](../../../Library/lang/xml/DOM.md#lang::xml::DOM-charData)
* [charRef](../../../Library/lang/xml/DOM.md#lang::xml::DOM-charRef)
* [comment](../../../Library/lang/xml/DOM.md#lang::xml::DOM-comment)
* [document](../../../Library/lang/xml/DOM.md#lang::xml::DOM-document)
* [element](../../../Library/lang/xml/DOM.md#lang::xml::DOM-element)
* [entityRef](../../../Library/lang/xml/DOM.md#lang::xml::DOM-entityRef)
* [namespace](../../../Library/lang/xml/DOM.md#lang::xml::DOM-namespace)
* [none](../../../Library/lang/xml/DOM.md#lang::xml::DOM-none)
* [pi](../../../Library/lang/xml/DOM.md#lang::xml::DOM-pi)
* [Namespace](../../../Library/lang/xml/DOM.md#lang::xml::DOM-Namespace)
* [Node](../../../Library/lang/xml/DOM.md#lang::xml::DOM-Node)
* [attribute](../../../Library/lang/xml/DOM.md#lang::xml::DOM-attribute)
* [element](../../../Library/lang/xml/DOM.md#lang::xml::DOM-element)
* [implode](../../../Library/lang/xml/DOM.md#lang::xml::DOM-implode)
* [parseXMLDOM](../../../Library/lang/xml/DOM.md#lang::xml::DOM-parseXMLDOM)
* [parseXMLDOMTrim](../../../Library/lang/xml/DOM.md#lang::xml::DOM-parseXMLDOMTrim)
* [toXML](../../../Library/lang/xml/DOM.md#lang::xml::DOM-toXML)
* [xmlCompact](../../../Library/lang/xml/DOM.md#lang::xml::DOM-xmlCompact)
* [xmlPretty](../../../Library/lang/xml/DOM.md#lang::xml::DOM-xmlPretty)
* [xmlRaw](../../../Library/lang/xml/DOM.md#lang::xml::DOM-xmlRaw)

## data Node {#lang-xml-DOM-Node}

```rascal
data Node  
     = document(Node root)
     | attribute(Namespace namespace, str name, str text)
     | element(Namespace namespace, str name, list[Node] children)
     | charData(str text)
     | cdata(str text)
     | comment(str text)
     | pi(str target, str text)
     | entityRef(str name)
     | charRef(int code)
     ;
```

#### Synopsis

Datatypes for representing an instance of the DOM.

## data Namespace {#lang-xml-DOM-Namespace}

```rascal
data Namespace  
     = namespace(str prefix, str uri)
     | none()
     ;
```

## function implode {#lang-xml-DOM-implode}

* ``value implode(document(Node root))``
* ``value implode(element(Namespace _, str name, list[Node] kids))``
* ``value implode(charData(str t))``
* ``value implode(cdata(str t))``
* ``default value implode(Node x)``

## function toXML {#lang-xml-DOM-toXML}

* ``Node toXML(node x)``
* ``default Node toXML(value x)``

## function attribute {#lang-xml-DOM-attribute}

* ``Node attribute(str name, str text)``

#### Synopsis

Auxiliary constructor for XML attribute without namespace.

## function element {#lang-xml-DOM-element}

* ``Node element(str name, list[Node] kids)``

#### Synopsis

Auxiliary constructor for XML element without namespace.

## function parseXMLDOM {#lang-xml-DOM-parseXMLDOM}

* ``Node parseXMLDOM(str src)``

#### Synopsis

Parse an XML document and return a DOM instance.

#### Examples

Read the sample note file, parse it, and construct a DOM instance.

```rascal-shell 
rascal>import IO;
ok
rascal>import lang::xml::DOM;
ok
rascal>N = readFile(|project://rascal/src/org/rascalmpl/library/lang/xml/examples/note.xml|);
str: "\<note\>\n\<to\>Jurgen\</to\>\n\<to\>Tijs\</to\>\n\<from\>Paul\</from\>\n\<date\>2012-04-01\</date\>\n\<heading font=\"bold\"\>Reminder\</heading\>\n\<body\>Don\'t forget to run the Rascal tests!\</body\>\n\</note\>"
rascal>parseXMLDOM(N);
Node: document(element(
    none(),
    "note",
    [
      charData("\n"),
      element(
        none(),
        "to",
        [charData("Jurgen")]),
      charData("\n"),
      element(
        none(),
        "to",
        [charData("Tijs")]),
      charData("\n"),
      element(
        none(),
        "from",
        [charData("Paul")]),
      charData("\n"),
      element(
        none(),
        "date",
        [charData("2012-04-01")]),
      charData("\n"),
      element(
        none(),
        "heading",
        [
          attribute(
            none(),
            "font",
            "bold"),
          charData("Reminder")
        ]),
      charData("\n"),
      element(
        none(),
        "body",
        [charData("Don\'t forget to run the Rascal tests!")]),
      charData("\n")
    ]))
```

The DOM instance contains every single character (including spaces and newlines)
as they appear in the source file.
As expected, the result is of type [Node](../../../Library/lang/xml/DOM.md#lang::xml::DOM-Node).

## function parseXMLDOMTrim {#lang-xml-DOM-parseXMLDOMTrim}

* ``Node parseXMLDOMTrim(str src)``

#### Synopsis

Parse an XML document and trim it (remove layout).

#### Examples

Read the sample note file, parse it, and construct a DOM instance (using `parseXMLDOMTrim`).

```rascal-shell 
rascal>import IO;
ok
rascal>import lang::xml::DOM;
ok
rascal>N = readFile(|project://rascal/src/org/rascalmpl/library/lang/xml/examples/note.xml|);
str: "\<note\>\n\<to\>Jurgen\</to\>\n\<to\>Tijs\</to\>\n\<from\>Paul\</from\>\n\<date\>2012-04-01\</date\>\n\<heading font=\"bold\"\>Reminder\</heading\>\n\<body\>Don\'t forget to run the Rascal tests!\</body\>\n\</note\>"
rascal>parseXMLDOMTrim(N);
Node: document(element(
    none(),
    "note",
    [
      element(
        none(),
        "to",
        [charData("Jurgen")]),
      element(
        none(),
        "to",
        [charData("Tijs")]),
      element(
        none(),
        "from",
        [charData("Paul")]),
      element(
        none(),
        "date",
        [charData("2012-04-01")]),
      element(
        none(),
        "heading",
        [
          attribute(
            none(),
            "font",
            "bold"),
          charData("Reminder")
        ]),
      element(
        none(),
        "body",
        [charData("Don\'t forget to run the Rascal tests!")])
    ]))
```
All whitespace characters have been removed and do not occur in the trimmed DOM instance.
Compare this with the output of [parse x m l d oM](../../../Library/lang/xml/DOM.md#lang::xml::DOM-parseXMLDOM).

## function xmlRaw {#lang-xml-DOM-xmlRaw}

* ``str xmlRaw(Node x)``

#### Synopsis

Convert a DOM instance to a raw XML string.

#### Examples

Read the sample note file, parse it, construct a DOM instance, and convert it to a string:

```rascal-shell 
rascal>import IO;
ok
rascal>import lang::xml::DOM;
ok
rascal>F = readFile(|project://rascal/src/org/rascalmpl/library/lang/xml/examples/note.xml|);
str: "\<note\>\n\<to\>Jurgen\</to\>\n\<to\>Tijs\</to\>\n\<from\>Paul\</from\>\n\<date\>2012-04-01\</date\>\n\<heading font=\"bold\"\>Reminder\</heading\>\n\<body\>Don\'t forget to run the Rascal tests!\</body\>\n\</note\>"
rascal>println(F);
println(F);
<note>
<to>Jurgen</to>
<to>Tijs</to>
<from>Paul</from>
<date>2012-04-01</date>
<heading font="bold">Reminder</heading>
<body>Don't forget to run the Rascal tests!</body>
</note>
ok
rascal>S = xmlRaw(parseXMLDOM(F));
str: "\<?xml version=\"1.0\" encoding=\"UTF-8\"?\>\r\n\<note\>\r\n\<to\>Jurgen\</to\>\r\n\<to\>Tijs\</to\>\r\n\<from\>Paul\</from\>\r\n\<date\>2012-04-01\</date\>\r\n\<heading font=\"bold\"\>Reminder\</heading\>\r\n\<body\>Don\'t forget to run the Rascal tests!\</body\>\r\n\</note\>\r\n"
rascal>println(S);
println(S);
<?xml version="1.0" encoding="UTF-8"?>
<note>
<to>Jurgen</to>
<to>Tijs</to>
<from>Paul</from>
<date>2012-04-01</date>
<heading font="bold">Reminder</heading>
<body>Don't forget to run the Rascal tests!</body>
</note>

ok
```
Apart from an extra XML header, the original source file `F` and the output `S` of `xmlRaw` are identical.

## function xmlCompact {#lang-xml-DOM-xmlCompact}

* ``str xmlCompact(Node x)``

#### Synopsis

Convert a DOM instance to a compact XML string (with minimal white space).

#### Examples

Read the sample note file, parse it, construct a DOM instance, and convert it to a string:

```rascal-shell 
rascal>import IO;
ok
rascal>import lang::xml::DOM;
ok
rascal>F = readFile(|project://rascal/src/org/rascalmpl/library/lang/xml/examples/note.xml|);
str: "\<note\>\n\<to\>Jurgen\</to\>\n\<to\>Tijs\</to\>\n\<from\>Paul\</from\>\n\<date\>2012-04-01\</date\>\n\<heading font=\"bold\"\>Reminder\</heading\>\n\<body\>Don\'t forget to run the Rascal tests!\</body\>\n\</note\>"
rascal>println(F);
println(F);
<note>
<to>Jurgen</to>
<to>Tijs</to>
<from>Paul</from>
<date>2012-04-01</date>
<heading font="bold">Reminder</heading>
<body>Don't forget to run the Rascal tests!</body>
</note>
ok
rascal>S = xmlCompact(parseXMLDOM(F));
str: "\<?xml version=\"1.0\" encoding=\"UTF-8\"?\>\r\n\<note\>\<to\>Jurgen\</to\>\<to\>Tijs\</to\>\<from\>Paul\</from\>\<date\>2012-04-01\</date\>\<heading font=\"bold\"\>Reminder\</heading\>\<body\>Don\'t forget to run the Rascal tests!\</body\>\</note\>\r\n"
rascal>println(S);
println(S);
<?xml version="1.0" encoding="UTF-8"?>
<note><to>Jurgen</to><to>Tijs</to><from>Paul</from><date>2012-04-01</date><heading font="bold">Reminder</heading><body>Don't forget to run the Rascal tests!</body></note>

ok
```
The output `S` of `xmlCompact` is a version of the original source file `F` with all white space removed.

## function xmlPretty {#lang-xml-DOM-xmlPretty}

* ``str xmlPretty(Node x)``

#### Synopsis

Convert a DOM instance to a pretty printed XML string.

#### Examples

Read the sample note file, parse it, construct a DOM instance, and convert it to a string:

```rascal-shell 
rascal>import IO;
ok
rascal>import lang::xml::DOM;
ok
rascal>F = readFile(|project://rascal/src/org/rascalmpl/library/lang/xml/examples/note.xml|);
str: "\<note\>\n\<to\>Jurgen\</to\>\n\<to\>Tijs\</to\>\n\<from\>Paul\</from\>\n\<date\>2012-04-01\</date\>\n\<heading font=\"bold\"\>Reminder\</heading\>\n\<body\>Don\'t forget to run the Rascal tests!\</body\>\n\</note\>"
rascal>println(F);
println(F);
<note>
<to>Jurgen</to>
<to>Tijs</to>
<from>Paul</from>
<date>2012-04-01</date>
<heading font="bold">Reminder</heading>
<body>Don't forget to run the Rascal tests!</body>
</note>
ok
rascal>S = xmlPretty(parseXMLDOM(F));
str: "\<?xml version=\"1.0\" encoding=\"UTF-8\"?\>\r\n\<note\>\r\n  \<to\>Jurgen\</to\>\r\n  \<to\>Tijs\</to\>\r\n  \<from\>Paul\</from\>\r\n  \<date\>2012-04-01\</date\>\r\n  \<heading font=\"bold\"\>Reminder\</heading\>\r\n  \<body\>Don\'t forget to run the Rascal tests!\</body\>\r\n\</note\>\r\n"
rascal>println(S);
println(S);
<?xml version="1.0" encoding="UTF-8"?>
<note>
  <to>Jurgen</to>
  <to>Tijs</to>
  <from>Paul</from>
  <date>2012-04-01</date>
  <heading font="bold">Reminder</heading>
  <body>Don't forget to run the Rascal tests!</body>
</note>

ok
```
The output `S` of `xmlPretty` is a pretty printed version of the original source file `F`.
Observe that the elements inside `<note> ... </note>` are indented.

