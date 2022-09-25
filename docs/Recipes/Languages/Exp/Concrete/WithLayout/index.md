---
title: With Layout
---

#### Synopsis

Defines a concrete syntax for Exp with layout.

#### Description

In Rascal, the major difference between lexical syntax and non-lexical syntax is that:

* Strings that are parsed according to the lexical syntax __do not__ contain additional layout characters
  such as spaces, new lines, and source code comments.
* Strings that are parsed according to the normal (non-lexical) syntax __can__ contain layout characters between
  each element. 
* Which 'layout' (whitespace and/or source code comments) will be accepted has to be defined explicitly by the grammar writer.


The following example extends the grammar for `Exp` in [No Layout](../../../../../Recipes/Languages/Exp/Concrete/NoLayout/) with a layout definition:

```rascal 
module demo::lang::Exp::Concrete::WithLayout::Syntax

layout Whitespace = [\t-\n\r\ ]*; // <1>
    
lexical IntegerLiteral = [0-9]+;           

start syntax Exp 
  = IntegerLiteral          
  | bracket "(" Exp ")"     
  > left Exp "*" Exp        
  > left Exp "+" Exp        
  ;

```

<1> Using the `layout` definition, we define that the `Whitespace` non-terminal is used _in between every symbol_ of the `syntax` productions in the current module.

And now we can use spaces in our definition of the eval function as well:

```rascal 
module demo::lang::Exp::Concrete::WithLayout::Eval
import demo::lang::Exp::Concrete::WithLayout::Syntax;

import String;
import ParseTree;

int eval(str txt) = eval(parse(#start[Exp], txt).top);              

int eval((Exp)`<IntegerLiteral l>`) = toInt("<l>");       
int eval((Exp)`<Exp e1> * <Exp e2>`) = eval(e1) * eval(e2);  
int eval((Exp)`<Exp e1> + <Exp e2>`) = eval(e1) + eval(e2); 
int eval((Exp)`( <Exp e> )`) = eval(e);                    

value main() {
  return eval(" 2+3");
}
test bool tstEval2() = eval("7 * 3") == 21;
test bool tstEval3() = eval("7 + 3") == 10;
test bool tstEval4() = eval(" 3 + 4*5 ") == 23;

```

Note that [Pattern Matching](../../../../../RascalConcepts/PatternMatching/) will _ignore_ all trees in layout positions, such that the parse tree of "1 + \\n1" will match against `<Exp e1> + <Exp e2>`. The same goes for equality on parse trees.

For the above example Rascal will insert the `Whitespace` non-terminal between every element of the syntax rules for `Exp`.
Moreover, for the start production (See [No Layout](../../../../../Recipes/Languages/Exp/Concrete/NoLayout/)) `Whitespace` will be added before and after the `Exp`.

#### Examples

The effect of the layout definition is that before parser generation the following grammar is derived for `Exp`:
```rascal
syntax Exp 
  = IntegerLiteral          
  | bracket "(" Whitespace Exp Whitespace ")"     
  > left Exp Whitespace "*" Whitespace Exp        
  > left Exp Whitespace "+" Whitespace Exp        
  ;

syntax start[Exp] = Whitespace Exp top Whitespace;
```

To put this all to the test:

```rascal-shell 
rascal>import demo::lang::Exp::Concrete::WithLayout::Syntax;
ok
rascal>import demo::lang::Exp::Concrete::WithLayout::Eval;
ok
rascal>eval("2 +  3");
int: 5
rascal>eval("2   +  3*4");
int: 14
rascal>eval("( 2+3 )* 4");
int: 20
```

#### Pitfalls

*  If the grammar for `Exp` would contain an optional symbol, as in `syntax Exp = Exp "+"? Exp`, then it would be ambiguous. Does a space in "1 1", belong to the `Whitespace` before or after the missing `+`? To disambiguate the `layout` definition should be changed to `layout Whitespace = [\ \t\n\r]* !>> [\ \t\n\r]`. That will make sure the space goes with the first Whitespace, because even an empty Whitespace list must never be followed immediately by a space.


