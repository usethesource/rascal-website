---
title: Compile
---

#### Synopsis

Compile a Pico program to assembly language.

#### Examples

The Pico compiler translates Pico programs to [Assembly](../../../../Recipes/Languages/Pico/Assembly/index.md) language programs.


```rascal 
module demo::lang::Pico::Compile

import Prelude;
import demo::lang::Pico::Abstract;
import demo::lang::Pico::Assembly;
import demo::lang::Pico::Load;

alias Instrs = list[Instr];      ❶  


// highlight-next-line
Instrs compileExp(natCon(int N)) = [pushNat(N)];      ❷  

Instrs compileExp(strCon(str S)) = [pushStr(substring(S,1,size(S)-1))];

Instrs compileExp(id(PicoId Id)) = [rvalue(Id)];

// highlight-next-line
Instrs compileExp(add(EXP E1, EXP E2))      ❸  
  = [*compileExp(E1), *compileExp(E2), add2()];

Instrs compileExp(sub(EXP E1, EXP E2)) 
  = [*compileExp(E1), *compileExp(E2), sub2()];

Instrs compileExp(conc(EXP E1, EXP E2)) 
  = [*compileExp(E1), *compileExp(E2), conc2()];
  
// highlight-next-line
private int nLabel = 0;      ❹  


private str nextLabel() {
  nLabel += 1;
  return "L<nLabel>";
}


Instrs compileStat(asgStat(PicoId Id, EXP Exp)) 
  = [lvalue(Id), *compileExp(Exp), assign()];
	
// highlight-next-line
Instrs compileStat(ifElseStat(EXP Exp,                        ❺  
                              list[STATEMENT] Stats1,
                              list[STATEMENT] Stats2)){
  
  elseLab = nextLabel();
  endLab = nextLabel();  
  return [*compileExp(Exp), 
          gofalse(elseLab), 
          *compileStats(Stats1),  
          go(endLab), 
          label(elseLab), 
          *compileStats(Stats2), 
          label(endLab)];
}

Instrs compileStat(whileStat(EXP Exp, 
                             list[STATEMENT] Stats1)) {
  entryLab = nextLabel();
  endLab = nextLabel();
  return [label(entryLab), 
          *compileExp(Exp), 
          gofalse(endLab), 
          *compileStats(Stats1), 
          go(entryLab), 
          label(endLab)];
}


Instrs compileStats(list[STATEMENT] Stats1) 
// highlight-next-line
  = [ *compileStat(S) | S <- Stats1 ];      ❻  
  

Instrs compileDecls(list[DECL] Decls) =
// highlight-next-line
  [ ((tp == natural()) ? dclNat(Id) : dclStr(Id)) |       ❼  
    decl(PicoId Id, TYPE tp) <- Decls
  ];


// highlight-next-line
Instrs compileProgram(PROGRAM P){       ❽  
  nLabel = 0;
  if (program(list[DECL] Decls, list[STATEMENT] Series) := P) {
     return [*compileDecls(Decls), *compileStats(Series)];
  } else {
    throw "Cannot happen";
  }
}

Instrs compileProgram(str txt) = compileProgram(load(txt));

```

Notes:

* ❶  We introduce `Instrs` as an alias for a list of assembly language instructions.
* ❷  The compiler consists of the functions `compileExp`, `compileStat`, `compileStats`, `compileDecls` and `compileProgram`.
    They all have a program fragment as argument and return the corresponding list of instructions.
* ❸  When compiling expressions, note how _list splicing_ (see [List](../../../../Rascal/Expressions/Values/List/index.md)) is used to insert the instructions that are generated for the operands of an operator into the list of instructions for the whole expression.
* ❹  In order to conveniently write code generators for statements, we introduce a unique label generator. The global variable `nLabel` contains
    the index of the last generated label and `nextLabel` uses this to generate a new, unique label.
* ❺  Consider code generation for an if-then-else statement:
    *  Two fresh labels mark the start of the code for the else part (`elseLab`) and the end of the whole statement (`endLab`).
    *  The code that is generated consists of the following:
        *  Code for the test.
        *  A gofalse to the code for the else-part.
        *  Code for the then-part and a jump to the end of the statement.
        *  Code for the else-part that starts with the label `elsePart`.
        *  The label `endLab` that marks the end of the code for the if-then-else statement.
* ❻   Compiling a list of statements conveniently uses list comprehension and list splicing.
* ❼   Compiling declarations allocates memory locations of the appropriate type for each declared variable.
* ❽    `compileProgram` compiles a gives Pico program to assembly language.

Here is an example:

```rascal-shell 
rascal>import demo::lang::Pico::Compile;
ok
rascal>compileProgram("begin declare x : natural; x := 47 end");
list[Instr]: [
  dclStr("x"),
  lvalue("x"),
  pushNat(47),
  assign()
]
```

Here is the compilation of the factorial program:

```rascal-shell ,continue
rascal>compileProgram("begin declare input : natural,  
>>>>>>>               '              output : natural,           
>>>>>>>               '             repnr : natural,
>>>>>>>               '              rep : natural;
>>>>>>>               '      input := 14;
>>>>>>>               '      output := 1;
>>>>>>>               '      while input - 1 do        
>>>>>>>               '          rep := output;
>>>>>>>               '          repnr := input;
>>>>>>>               '          while repnr - 1 do
>>>>>>>               '             output := output + rep;
>>>>>>>               '             repnr := repnr - 1
>>>>>>>               '          od;
>>>>>>>               '          input := input - 1
>>>>>>>               '      od
>>>>>>>               'end");
list[Instr]: [
  dclStr("input"),
  dclStr("output"),
  dclStr("repnr"),
  dclStr("rep"),
  lvalue("input"),
  pushNat(14),
  assign(),
  lvalue("output"),
  pushNat(1),
  assign(),
  label("L1"),
  rvalue("input"),
  pushNat(1),
  sub2(),
  gofalse("L2"),
  lvalue("rep"),
  rvalue("output"),
  assign(),
  lvalue("repnr"),
  rvalue("input"),
  assign(),
  label("L3"),
  rvalue("repnr"),
  pushNat(1),
  sub2(),
  gofalse("L4"),
  lvalue("output"),
  rvalue("output"),
  rvalue("rep"),
  add2(),
  assign(),
  lvalue("repnr"),
  rvalue("repnr"),
  pushNat(1),
  sub2(),
  assign(),
  go("L3"),
  label("L4"),
  lvalue("input"),
  rvalue("input"),
  pushNat(1),
  sub2(),
  assign(),
  go("L1"),
  label("L2")
]
```


