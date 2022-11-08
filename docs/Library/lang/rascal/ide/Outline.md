---
title: "module lang::rascal::ide::Outline"
---

#### Usage

`import lang::rascal::ide::Outline;`


## function outline {#lang-rascal-ide-Outline-outline}

```rascal
node outline(start[Module] m)

node outline(Module m)

```

## function clean {#lang-rascal-ide-Outline-clean}

```rascal
str clean(/\\<rest:.*>/)

str clean(str x:/\n/)

str clean(str x)

default str clean(str x)

```

