---
title: "module util::Highlight"
---

#### Usage

`import util::Highlight;`


## function highlight2html {#util-Highlight-highlight2html}

```rascal
str highlight2html(Tree t)

```

## function isKeyword {#util-Highlight-isKeyword}

```rascal
bool isKeyword(str s)

```

## function highlight2htmlRec {#util-Highlight-highlight2htmlRec}

```rascal
str highlight2htmlRec(t:appl(prod(lit(str l), _, _), _))

str highlight2htmlRec(t:appl(prod(cilit(str l), _, _), _))

str highlight2htmlRec(t:appl(prod(_, _, {*_, \tag("category"(str cat))}), list[Tree] as))

str highlight2htmlRec(appl(prod(_, _, set[Attr] attrs), list[Tree] as))

str highlight2htmlRec(appl(regular(_), list[Tree] as))

str highlight2htmlRec(amb({k, *_}))

default str highlight2htmlRec(Tree t)

```

## function span {#util-Highlight-span}

```rascal
str span(str class, str src)

```

## function wrapLink {#util-Highlight-wrapLink}

```rascal
default str wrapLink(str text, Tree _)

```

## function highlight2latex {#util-Highlight-highlight2latex}

```rascal
str highlight2latex(appl(prod(lit(str l), _, _), _))

str highlight2latex(appl(prod(cilit(str l), _, _), _))

str highlight2latex(appl(prod(_, _, {*_, \tag("category"(str cat))}), list[Tree] as))

str highlight2latex(appl(prod(_, _, set[Attr] attrs), list[Tree] as))

str highlight2latex(appl(regular(_), list[Tree] as))

str highlight2latex(amb({k, *_}))

default str highlight2latex(Tree t)

```

## function catCmd {#util-Highlight-catCmd}

```rascal
str catCmd(str class, str src)

```

