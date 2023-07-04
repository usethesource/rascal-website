---
title: PEMDAS
keywords:
    - pemdas
    - precedence
    - order of operations
    - associativity
    - BODMAS
    - BEDMAS
    - BIDMAS
---

#### Synopsis

How does one define the order of mathematical operations in an expression language in Rascal?

#### Syntax

#### Types

#### Function

#### Description

```rascal-commands
lexical Id = [a-z]+;
lexical Num = [0-9]+;

syntax Exp
    = Id
    | Num
    | bracket "(" Exp ")" // <1>
    > right Exp "^" Exp   // <2>
    > left ( Exp "*" Exp  // <3>
           | Exp "/" Exp  // <4>
           )
    > left ( Exp "+" Exp  // <5>
           | Exp "-" Exp  // <6>
           )
    ;
```

* The `Id` and `Num` rules are not ambiguous. They do not require an order.
* <1>: The `bracket` rule is required to write expressions in a different order. The `bracket` syntax ryle attribute is used in ((Rascal:Patterns)) to ignore superfluous brackets in either the pattern or the subject value.
* <2>: At the first `>` starts the definition of order of operations. The highest precedences goes to the `^` operator (exponentiation). And here we chose for `right` associativity such that `1^2^3` parses as `1^(2^3)`.
* <3> and <4>: We chain more `>` to expand the ordered list of operators to include multiplication `*` and division `/`. They are both `left` associative, *also* towards one another, because they are grouped in an associativity group `left ( ... )`.
* <4> and <5>: The chain ends with addition and subtraction at the bottom of the hierarchy, again both `left` associative.

#### Examples

Let's add a small function that helps to visualize the order of the operators:
```rascal-shell,continue
Exp brackets(Exp e) = visit(e) {
case Exp f => (Exp) `(<Exp f>)` 
  when (Exp) `(<Exp _>)` !:= f, (Exp) `<Id i>` !:= f, (Exp) `<Num n>` !:= f
};
```

No we can see what the parser does:
```rascal-shell,continue
import IO;
for (input <- ["a+b*c", "a^b*c+d", "(a^b+1)^d+1"]) {
  t = parse(#Exp, input);
  println("<t> - <brackets(t)>");
}
```

Or we can use some pretty printing:
```rascal-shell,continue
import vis::Text;
for (input <- ["a+b*c", "a^b*c+d", "(a^b+1)^d+1"]) {
  t = parse(#Exp, input);
  println(prettyTree(t));
}
```

#### Benefits

* The standard operator order rules are easily expressed in Rascal
* We only need a single non-terminal `Exp` to define all operators and their relative precedence
* It is easy to add more operators

