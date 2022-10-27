---
title: "module Content"
---

#### Usage

`import Content;`


#### Synopsis

Content provides access to the content server of the Rascal terminal for viewing interactive HTML output.


## function html {#Content-html}

* ``Content html(str html)``


#### Synopsis

Directly serve a static html page

## function file {#Content-file}

* ``Content file(loc src)``


#### Synopsis

Directly serve the contents of a file

## function plainText {#Content-plainText}

* ``Content plainText(str text)``


#### Synopsis

Directly serve the contents of a string as plain text

## alias Body {#Content-Body}

* `value (type[value] expected)`

## data Request {#Content-Request}

```rascal
data Request (map[str, str] headers = (), map[str, str] parameters = (), map[str,str] uploads = ()) 
     = get (str path)
     | put (str path, Body content)
     | post(str path, Body content)
     | delete(str path)
     | head(str path)
     ;
```


#### Synopsis

Request values represent what a browser is asking for, most importantly the URL path.

#### Description

A request value also contains the full HTTP headers, the URL parameters as a `map[str,str]`
and possibly uploaded content, also coded as a map[str,str]. From the constructor type,
`put` or `get` you can see what kind of HTTP request it was. 

#### Pitfalls

* Note that `put` and `post` have not been implemented yet in the REPL server. 

## data Response {#Content-Response}

```rascal
data Response  
     = response(Status status, str mimeType, map[str,str] header, str content)
     | fileResponse(loc file, str mimeType, map[str,str] header)
     | jsonResponse(Status status, map[str,str] header, value val, bool implicitConstructors = true,  bool implicitNodes = true, str dateTimeFormat = "yyyy-MM-dd\'T\'HH:mm:ss\'Z\'")
     ;
```


#### Synopsis

A response encodes what is send back from the server to the browser client.

#### Description

The three kinds of responses, encode either content that is already a `str`,
some file which is streamed directly from its source location or a jsonResponse
which involves a handy, automatic, encoding of Rascal values into json values.

## function response {#Content-response}

* ``Response response(str content, map[str,str] header = ())``
* ``Response response(Status status, str explanation, map[str,str] header = ())``


#### Synopsis

Utility to quickly render a string as HTML content

## function plain {#Content-plain}

* ``Response plain(str text)``


#### Synopsis

Utility to quickly make a plaintext response.

## function response {#Content-response}

* ``Response response(loc f, map[str,str] header = ())``
* ``default  Response response(value val, map[str,str] header = ())``


#### Synopsis

Utility to serve a file from any source location.

## data Status {#Content-Status}

```rascal
data Status  
     = ok()
     | created()
     | accepted()
     | noContent()
     | partialContent()
     | redirect()
     | notModified()
     | badRequest()
     | unauthorized()
     | forbidden()
     | notFound()
     | rangeNotSatisfiable()
     | internalError()
     ;
```


#### Synopsis

Encoding of HTTP status

