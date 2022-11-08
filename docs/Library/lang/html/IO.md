---
title: "module lang::html::IO"
---

#### Usage

`import lang::html::IO;`

#### Synopsis

Provides read and write functionality for HTMLElements defined in [AST](../../../Library/lang/html/AST.md)


## data HTMLEscapeMode {#lang-html-IO-HTMLEscapeMode}

```rascal
data HTMLEscapeMode  
     = baseMode()
     | extendedMode()
     | xhtmlMode()
     ;
```

## data HTMLSyntax {#lang-html-IO-HTMLSyntax}

```rascal
data HTMLSyntax  
     = htmlSyntax()
     | xmlSyntax()
     ;
```

## function readHTMLFile {#lang-html-IO-readHTMLFile}

```rascal
HTMLElement readHTMLFile(loc file, loc base=file)

```

#### Synopsis

Parse a HTML file and return an HTMLElement AST

#### Description


This function uses [JSoup's](http://www.jsoup.org) HTML parser which is robust
against errors in the HTML, and complete in the sense that it supports all of HTML.

## function readHTMLString {#lang-html-IO-readHTMLString}

```rascal
HTMLElement readHTMLString(str content, loc base=|http://localhost|)

```

#### Synopsis

Parse a HTML string and return an HTMLElement AST

#### Description


This function uses [JSoup's](http://www.jsoup.org) HTML parser which is robust
against errors in the HTML, and complete in the sense that it supports all of HTML.

## function writeHTMLString {#lang-html-IO-writeHTMLString}

```rascal
str writeHTMLString(HTMLElement dom, str charset="UTF-8", HTMLEscapeMode escapeMode = baseMode(), bool outline=false, bool prettyPrint=true, int indentAmount=4, int maxPaddingWidth=30, HTMLSyntax \syntax=htmlSyntax())

```

#### Synopsis

Pretty-print the HTMLElement AST to a string

#### Description


This function uses [JSoup's](http://www.jsoup.org) DOM functionality to 
yield a syntactically correct (X)HTML string.

## function writeHTMLFile {#lang-html-IO-writeHTMLFile}

```rascal
void writeHTMLFile(loc file, HTMLElement dom, str charset="UTF-8", HTMLEscapeMode escapeMode = baseMode(), bool outline=false, bool prettyPrint=true, int indentAmount=4, int maxPaddingWidth=30, HTMLSyntax \syntax=htmlSyntax())

```

#### Synopsis

Pretty-print the HTMLElement AST to a string

#### Description


This function uses [JSoup's](http://www.jsoup.org) DOM functionality to 
yield a syntactically correct (X)HTML file.

## function serve {#lang-html-IO-serve}

```rascal
Content serve(HTMLElement elem)

```

#### Synopsis

Convenience function to visualize an HTMLElement tree in the browser

