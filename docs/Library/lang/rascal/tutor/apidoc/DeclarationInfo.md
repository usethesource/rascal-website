---
title: "module lang::rascal::tutor::apidoc::DeclarationInfo"
---

#### Usage

`import lang::rascal::tutor::apidoc::DeclarationInfo;`


## data DeclarationInfo {#lang-rascal-tutor-apidoc-DeclarationInfo-DeclarationInfo}

```rascal
data DeclarationInfo (
     str moduleName="", 
     str name=moduleName, 
     loc src = |unknown:///|, 
     str synopsis="", 
     str signature="",
     list[DocTag] docs = [], 
     loc docSrc = src) 
     = moduleInfo        (str kind="module")
     | functionInfo      (str kind="function")
     | constructorInfo   (str kind="constructor")
     | dataInfo          (str kind="data", list[str] overloads=[])
     | aliasInfo         (str kind="alias")
     | varInfo           (str kind="variable")
     ;
```

Representation of documentation-related information extracted from a module.

## data DocTag {#lang-rascal-tutor-apidoc-DeclarationInfo-DocTag}

```rascal
data DocTag (str label="", loc src=|unknown:///|, str content="") 
     = docTag()
     ;
```

