---
title: "module lang::json::ast::JSON"
---

#### Usage

`import lang::json::ast::JSON;`

## data JSON {#lang-json-ast-JSON-JSON}

```rascal
data JSON  
     = null()
     | object(map[str, JSON] properties)
     | array(list[JSON] values)
     | number(real n)
     | string(str s)
     | boolean(bool b)
     | ivalue(type[value] t, value v)
     ;
```

