---
title: "module demo::lang::Pico::Abstract"
---

#### Usage

`import demo::lang::Pico::Abstract;`


## data TYPE {#demo-lang-Pico-Abstract-TYPE}

```rascal
data TYPE (loc src=|unknown:///|) 
     = natural()
     | string()
     ;
```

## alias PicoId {#demo-lang-Pico-Abstract-PicoId}

* `str`

## data PROGRAM {#demo-lang-Pico-Abstract-PROGRAM}

```rascal
data PROGRAM (loc src=|unknown:///|) 
     = program(list[DECL] decls, list[STATEMENT] stats)
     ;
```

## data DECL {#demo-lang-Pico-Abstract-DECL}

```rascal
data DECL (loc src=|unknown:///|) 
     = decl(PicoId name, TYPE tp)
     ;
```

## data EXP {#demo-lang-Pico-Abstract-EXP}

```rascal
data EXP (loc src=|unknown:///|) 
     = id(PicoId name)
     | natCon(int iVal)
     | strCon(str sVal)
     | add(EXP left, EXP right)
     | sub(EXP left, EXP right)
     | conc(EXP left, EXP right)
     ;
```

## data STATEMENT {#demo-lang-Pico-Abstract-STATEMENT}

```rascal
data STATEMENT (loc src=|unknown:///|) 
     = asgStat(PicoId name, EXP exp)
     | ifElseStat(EXP exp, list[STATEMENT] thenpart, list[STATEMENT] elsepart)
     | whileStat(EXP exp, list[STATEMENT] body)
     ;
```

## alias Occurrence {#demo-lang-Pico-Abstract-Occurrence}

* `tuple[loc src, PicoId name, STATEMENT stat]`

