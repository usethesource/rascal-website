---
title: "module demo::lang::Pico::Assembly"
---

#### Usage

`import demo::lang::Pico::Assembly;`


## data Instr {#demo-lang-Pico-Assembly-Instr}

```rascal
data Instr  
     = dclNat(PicoId Id)
     | dclStr(PicoId Id)
     | pushNat(int intCon)
     | pushStr(str strCon)
     | rvalue(PicoId Id)
     | lvalue(PicoId Id)
     | assign()
     | add2()
     | sub2()
     | conc2()
     | label(str label)
     | go(str label)
     | gotrue(str label)
     | gofalse(str label)
     ;
```

