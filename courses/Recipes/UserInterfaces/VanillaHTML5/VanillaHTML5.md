---
title: Vanilla HTML5 user interfaces
keywords:
    - HTML5
    - JavaScript
    - WebServer
    - Content
---

#### Synopsis

Creating interactive visual content for the browser using Rascal's HTML and HTTP low-level API support.

#### Syntax

#### Types

#### Function

#### Description

To start with a simple "webserver" in Rascal, all you really need is to import ((module:Content)) and
write a server function:

```rascal-shell
import Content;
// A server in Rascal terms is a function  that takes an HTTP Request and produces an HTTP Response:
Response myWebServer(Request q) = response("Hello \<b\>World\<b\>");
// Let's test the server locally to see what the `plain` utility function produces as Response:
myWebServer(get("index.html"))
// and the REPL will spin-up an actual server by itself like this:
content("myServer", myWebServer)
```

There are handy shorthands in ((module:Content)) like ((plainText)) and ((Library:Content-html)) and ((Library:Content-file)) to directly
stream strings, html and files to the web client.

The HTTP ((module:Content)) servers that start from the REPL automatically are also managed automatically. If you use the same tag, the server is reloaded.
Also inactive servers are removed and their data is garbage collected after 30 minutes of inactivity.

#### Examples

**Generating HTML as text** is done using the ((StringTemplate)) recipe. For example:
```rascal-prepare
import Content;
```

```rascal-commands,continue
words = ["aap", "noot", "mies"];
str generateList(list[str] words)
    = "\<ul\>
      '<for (w <- words) {>\<li\><w>\</li\>
      '<}>\</ul\>";
```

```rascal-shell,continue
// This is the generated content as plain/text mimetype:
plainText(generateList(words))
// This is the generated content as plain/html mimetype:
html(generateList(words))
```
 
**Generating abstract HTML** is done using ((lang::html::AST)) algebraic data-type for HTML. For example:
```rascal-shell,continue
import lang::html::AST;
import lang::html::IO;
```

```rascal-shell,continue
HTMLElement generateUL(list[str] words) = ul([li([text(w)]) | w <- words]);
// and we can see the generated HTML
plainText(writeHTMLString(generateUL(words)))
// or view the HTML as rendered by the browser
html(writeHTMLString(generateUL(words)));
```

**Interactive content** is not much more complicated to setup, but it does require JavaScript programming.
We stay with the Request/Response system. Next to the request for the main page we 
we also receive asynchronous http requests (via the "fetch" function in JavaScript). In this next server definition we use ((Declarations-Function)) overloading to handle
each request URL with a different function body:

```rascal-commands,continue
// In this demo we use a simple integer to demonstrate server-side data and state:
int counter = 0;
// The first overload serves the main page, which includes a call to `fetch` the new counter state (in JavaScript):
Response myInteractiveServer(get("/")) 
    = response("\<html\>
               '  \<body\>
               '     \<p\>Counter: \<b id=\"cnt\"\><counter>\</b\>\</p\>
               '     \<button onClick=\"fetch(\'increment\').then(rsp =\> rsp.json()).then(cnt =\> { document.getElementById(\'cnt\').innerHTML = cnt; })\" \>Increment\</button\>
               '  \</body\>
               '\<html\>");               
// The second overload serves the "increment" URL and returns the new value of the (server side) counter variable:
Response myInteractiveServer(get("/increment")) {
    counter += 1;
    return response(counter); // a JSON response value
}
```

When we run the server we can click on the button and see the page react:
```rascal-shell,continue
content("myInteractiveServer", myInteractiveServer);
```
Now pressing the button...
```rascal-prepare,continue
counter += 1;
content("myInteractiveServer", myInteractiveServer);
```


#### Benefits

Rascal web servers have access to all of Rascal:
* Use all the parsers, fact extractors, type checkers, and whatnot from the ecosystem to give the user the information they need.
* HTML is just another language. Use any Rascal analysis, transformation and generation recipes to analyze the input (data and code) and produce the output (HTML) for your interactive webserver. 

Rascal web servers can be applied in different contexts:
* You can start a managed server on the REPL using the ((module:Content)) wrapper, which opens your local browser (a webview in the IDE or your desktop browser if on the commandline)
* You can start a webview in the IDE using ((showInteractiveContent)), using the same wrapper. This makes sure your users see the visual always in their WebView. The server is never cleaned up.
* You can start your own ((util::Webserver)) and let the user browse to the proper `http://localhost:<port>` number or call ((util::IDEServices::browse)) yourself.

Rascal webservers are HTTP5 complete:
* If you understand HTML and JavaScript you can build anything. You can load any HTML or any JavaScript into your site. There are no restrictions.
   * SVG
   * CSS
   * Forms
   * JavaScript libraries
   * Asynchronous HTTP requests with "fetch"
   * ...
* Content can come directly from disk using ((Values-Location)) values or you can create an HTML string template, use ((lang::html::AST)) ((Rascal:AlgebraicDataType))s or directly stream any Rascal values as JSON.
* All internal details of HTTP are visible in the ((Content-Response)) and ((Request)) constructors, including advanced headers.
* Any Rascal data can be serialized to JSON and send to the client instantly using `response(anyValue)`.

Each type of ((Content-Response)) streams their content to the client rather than creating internal copies:
* `response(str content)`, very large strings in Rascal (generated by a recursive string template for example), are streamed and buffered on demand directly from the internal balanced binary concatenation trees.
* `fileResponse(loc file)`, files are never loaded completely into the server, but rather streamed via a buffer directly to the client.
* `jsonResponse(Status status, map[str,str] header, value val), Rascal values are serialized using ((lang::json::IO::writeJSON)) using a small internal buffer. There is never a copy of the entire JSON content in memory unless it fits into the buffer.

Have a look at the ((Library:vis)) package in the standard library for basic usage of the above for ((vis::Charts)), ((vis::Graphs)) and basic HTML mappings of Rascal values in ((vis::Basic)). These modules
all use asynchronous http requests to open editors for source files when certain HTML links are clicked. 

#### Pitfalls

* In Rascal strings the `<` and `>` signs have to be escaped. Since they occur so often in HTML code, it is sometimes better to use ((lang::html::AST)) instead of plain strings.
* Starting a web server is a side-effect and web server are memory leaks because of this. Whatever data these functions hold, it can not be collected until the server is stopped or claimed.
   * if a web server function reads information from disk and creates an internal model, it helps to clear every reference to this model while the server waits for the next invocation.
* Web server callbacks lock the Rascal evaluator that created them when they are being executed. This means that while the server function is executing a REPL is blocked, for example.
* ((lang::html::AST)) trees are not streamed yet. They are first rendered to a string and that string is then buffered and streamed to the client.
* The raw HTTP fetch pattern is a bit low level. For a more high level programmable framework, have a look at ((SalixRecipes)).