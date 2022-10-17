---
title: Syntax
---

#### Synopsis

Concrete syntax for Pico.

#### Examples


```rascal 
module demo::lang::Pico::Syntax

import ParseTree;

lexical Id = [a-z][a-z0-9]* !>> [a-z0-9];      ❶  

lexical Natural = [0-9]+ ;      ❶  

lexical String = "\"" ![\"]*  "\"";      ❶  

layout Layout = WhitespaceAndComment* !>> [\ \t\n\r%];      ❷  

lexical WhitespaceAndComment      ❷  
   = [\ \t\n\r]
   | @category="Comment" ws2: "%" ![%]+ "%"      ❸  
   | @category="Comment" ws3: "%%" ![\n]* $      ❸  
   ;

start syntax Program      ❹  
   = program: "begin" Declarations decls {Statement  ";"}* body "end" ;

syntax Declarations 
   = "declare" {Declaration ","}* decls ";" ;  
 
syntax Declaration = decl: Id id ":" Type tp;

syntax Type 
   = natural:"natural" 
   | string :"string" 
   ;

syntax Statement 
   = asgStat: Id var ":="  Expression val 
   | ifElseStat: "if" Expression cond "then" {Statement ";"}*  thenPart "else" {Statement ";"}* elsePart "fi"
   | whileStat: "while" Expression cond "do" {Statement ";"}* body "od"
  ;  
     
syntax Expression      ❺  
   = id: Id name
   | strCon: String string
   | natCon: Natural natcon
   | bracket "(" Expression e ")"
   > left conc: Expression lhs "||" Expression rhs
   > left ( add: Expression lhs "+" Expression rhs
          | sub: Expression lhs "-" Expression rhs
          )
  ;

start[Program] program(str s) {
  return parse(#start[Program], s);
}

    ❻     start[Program] program(str s, loc l) {
  return parse(#start[Program], s, l);
} 

```

                
Notes:

* ❶   `Id`, `Natural` and `String` are the basic lexical tokens of the Pico language.
* ❷   `Layout` defines the white space and comments that may occur in a Pico program.
* ❸   Some lexical rules are labeled with `@category="Comment"`. This is for the benefit of syntax highlighting.
* ❹   The start symbol of the Pico grammar is called `Program`.
* ❺   The rules for `Expression` describe the priority and associativity of the operators: all operators are left-associative and `||` has a higher priority then `+` and `-`.
* ❻   Two utility functions `program` are defined that parse a given string or a given location as Pico program.


