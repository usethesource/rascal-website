---
title: API documentation
---

#### Synopsis

The Tutor compiler reads Rascal source files and produces [Concept](../../Tutor/Concept/) markdown files 
for each [Module](../../Rascal/Declarations/Module/).

#### Description

The compiler generates for every `Module.rsc` a markdown file with the following structure:

``````
---
title: <moduleName>
---

// for each declaration (function, data, syntax, alias, import, extend)
## <declarationName> {#fully-qualified-declaration-name}

#### Synopsis

...
#### Description
...

// etc.
``````

So, for all standard [Concept](../../Tutor/Concept/) headers, like `Synopsis` and `Benefits` there is a place at every declaration.

The content of the header paragraphs is either directly derived from source code (like function signature and data definitions), or it is taken from the following [Tag](../../Rascal/Declarations/Tag/) definitions on each declaration:
* `@doc` may contain literally the headers of a [Concept](../../Tutor/Concept/), like `#### Synopsis`. This notation is deprecated in favor of the tags below.
* `@synopsis` is a single line description of the definition.
* `@description` is a multi-line explanantion of the definition.
* `@benefits`, `@pitfalls`, `@examples`, `@types`, `@name` and `@function` each follow the intent of the standard [Concept](../../Tutor/Concept/) headers.


#### Benefits

* A (small) part of documentation writing is automated. The information about the name of a function, data or annotation declaration, or its signature is always consistent.
* You can write examples of the usage of each definition using [Listing](../../Tutor/Markup/InlineMarkup/Listing/) markup that is run and checked at documentation compile-time.

#### Pitfalls 

* This approach requires that functions with the same name are grouped together in the source file. (_to-TODO-want (broken link)_)
* You need to run the tutor compiler before errors in the documentation tags are detected.

