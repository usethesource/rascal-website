---
title: Syntax
---

#### Synopsis

Concrete syntax for Pico.

#### Examples


```rascal 
module demo::lang::Pico::Syntax

import ParseTree;

lexical Id  = [a-z][a-z0-9]* !>> [a-z0-9];
lexical Natural = [0-9]+ ;
lexical String = "\"" ![\"]*  "\"";

layout Layout = WhitespaceAndComment* !>> [\ \t\n\r%];

lexical WhitespaceAndComment 
   = [\ \t\n\r]
   | @category="Comment" ws2: "%" ![%]+ "%"
   | @category="Comment" ws3: "%%" ![\n]* $
   ;

start syntax Program 
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
     
syntax Expression 
   = id: Id name
   | strCon: String string
   | natCon: Natural natcon
   | bracket "(" Expression e ")"
   > left conc: Expression lhs "||" Expression rhs
   > left ( add: Expression lhs "+" Expression rhs
          | sub: Expression lhs "-" Expression rhs
          )
  ;

public start[Program] program(str s) {
  return parse(#start[Program], s);
}

public start[Program] program(str s, loc l) {
  return parse(#start[Program], s, l);
} 

```

                
Notes:

*  `Id`, `Natural` and `String` are the basic lexical tokens of the Pico language.
*  `Layout` defines the white space and comments that may occur in a Pico program.
*  Some lexical rules are labeled with `@category="Comment"`. This is for the benefit of syntax highlighting.
*  The start symbol of the Pico grammar is called `Program`.
*  The rules for `Expression` describe the priority and associativity of the operators: all operators are left-associative and `||` has a higher priority then `+` and `-`.
*  Two auxiliary functions `program` are defined that parse a given string or a given location as Pico program.


