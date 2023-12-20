---
title: Except Constraints
keywords:
  - "!"
  - except
  - remove
---

#### Synopsis

A constraint ((Symbol)), which removes specific rules instances from non-terminal usage positions.

#### Syntax

*  `_Nonterminal_!_ruleName_` 

where a _Nonterminal_ is the name of a lexical, syntax, keyword or layout type and `ruleName` is a name of one
of the alternatives of said _Nonterminal_.

#### Types

* The type of a constrained non-terminal is still this non-terminal. The type system does not implement the constraint, only the parser will.

#### Function

#### Description

Using the `!` except notation, the parser will remove all parse trees where at the given position in the parent rule, directly under it
a child is derived by the labeled rule.

#### Examples

Typically the rule for binary comma operators is ambiguous with comma-separated parameter lists:

```rascal-commands
lexical Id = [a-z]+;

syntax Exp
  = lookup: Id
  | call  : Exp "(" {Exp ","}* ")"
  > left comma : Exp "," Exp
  ;
```

The comma can be interpreted as either the separator or the binary operator:
```rascal-shell-continue
/amb(_) := [Exp] "a(a,b)"
```

So we can fix this with `!`:
```rascal-prepare
lexical Id = [a-z]+;
```

```rascal-commands-continue
syntax Exp
  = lookup: Id
  | bracket "(" Exp ")"
  | call  : Exp "(" {Exp!comma ","}* ")"
  > left comma : Exp "," Exp
  ;
```

And now the ambiguity is gone. The comma goes to the separator list:

```rascal-shell-continue
(Exp) `<Id id>(<Exp first>,<Exp last>)` := [Exp] "a(a,b)"
```

Still we can use the comma expression in other places, and nested more deeply:
```rascal-shell,continue
(Exp) `a,b(<Exp first>,(d,<Exp z>))` := [Exp] "a,b(c,(d,e))"
```

#### Benefits

* Allows one to keep with one expression non-terminal without having to copy an entire definition to exclude only one rule.

#### Pitfalls

* The except rule is **not transitive** like ((Priority)) or ((Associativity)) are.
* Chaining except is possible, like `A!a!b!c` but after a while it becomes questionable what the benefit in readability really is.
* Production rules must be labeled, a priori, before excepts can be written down. Adding new labels is not always semantics preserving; it may break API.

