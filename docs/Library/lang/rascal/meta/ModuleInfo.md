---
title: "module lang::rascal::meta::ModuleInfo"
---

#### Usage

`import lang::rascal::meta::ModuleInfo;`


## data ImportsInfo {#lang-rascal-meta-ModuleInfo-ImportsInfo}

```rascal
data ImportsInfo  
     = importsInfo(set[str] importedModules, set[str] extendedModules)
     ;
```

## function getImports {#lang-rascal-meta-ModuleInfo-getImports}

```rascal
ImportsInfo getImports((Module)`<Header h> <Body _>`)

```

