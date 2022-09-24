---
title: "module lang::rascal::tutor::Output"
---

#### Usage

`import lang::rascal::tutor::Output;`

## data Output {#lang-rascal-tutor-Output-Output}

```rascal
data Output  
     = out(str content)
     | err(Message message)
     | details(list[str] order)
     | search(list[str] contents, str fragment)
     | \docTag(str tagName, list[Output] output)
     ;
```

## function empty {#lang-rascal-tutor-Output-empty}

* ``Output empty()``

