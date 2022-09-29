---
title: Type Constrained Pattern
keywords:
  - "["
  - "]"

---

#### Synopsis

Type constrained abstract pattern.

#### Description

A type constrained pattern matches provided that the subject has type _Type_ and _Pat_ matches. This can be handy in case of ambiguity (say more than one constructor with the same name), or in case the pattern is completely general. See an example below:

Warning: This does not seem to work properly. There is a bug.

#### Examples


```rascal-shell 
rascal>import IO;
ok
```
Some example data type which contains generic values as well as specific expressions:

```rascal-shell ,continue
rascal>data Exp = val(value v) | add(Exp l, Exp r) | sub(Exp l, Exp r);
ok
rascal>ex = add(add(val("hello"(1,2)),val("bye")), sub(val(1),val(2)));
Exp: add(
  add(
    val("hello"(1,2)),
    val("bye")),
  sub(
    val(1),
    val(2)))
```
Here we constrain the match to find only Exps:

```rascal-shell ,continue
rascal>visit (ex) {
>>>>>>>  case [Exp] str name(_,_) : println("node name is <name>");
>>>>>>>}
node name is hello
node name is add
node name is sub
node name is add
Exp: add(
  add(
    val("hello"(1,2)),
    val("bye")),
  sub(
    val(1),
    val(2)))
```
Here we do not constrain the same pattern:

```rascal-shell ,continue
rascal>visit (ex) {
>>>>>>>  case str name(_,_) : println("node name is <name>");
>>>>>>>}
node name is hello
node name is add
node name is sub
node name is add
Exp: add(
  add(
    val("hello"(1,2)),
    val("bye")),
  sub(
    val(1),
    val(2)))
```

