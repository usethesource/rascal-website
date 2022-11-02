---
title: Node pattern
---

#### Synopsis

Node in abstract pattern.

#### Syntax

```rascal
Pat ₁ ( Pat₂, ..., Patₙ)

Name (Pat₂, ..., Patₘ)

Pat ₁ ( Pat₁₂, ..., Pat₁ₙ, KeywordLabel₁ = Pat₂₂, ..., KeywordLabelₙ = Pat₂ₙ)

Name ( Pat₁₂, ..., Pat₁ₙ, KeywordLabel₁ = Pat₂₂, ..., KeywordLabelₙ = Pat₂ₙ)
```

#### Description

A node pattern matches a node value or a datatype value, provided that _Name_ matches with the constructor symbol of that value and _Pat_₂, _Pat_₂, ..., _Pat_ₙ  match the children of that value in order. Any variables bound by nested patterns are available from left to right.

The label of a node can also be a Pattern itself (Pat₁), in which case it must be of type `str`

Nodes may have keyword fields which can be matched via the literal KeywordLabel and a respective pattern for each field.

Note that during matching the keyword fields which are not listed in the pattern are ignored. This means that their presence or absence in the subject does not influence the match. When a keyword
field _is_ mentioned in the match pattern, then the match will fail or succeeed if the respective
pattern fails or succeeds.

#### Examples


```rascal-shell 
```
Match on node values (recall that the function symbol of a node has to be quoted, see [Values/Node]):

```rascal-shell ,continue
rascal>import IO;
ok
rascal>if("f"(A,13,B) := "f"("abc", 13, false))
>>>>>>>   println("A = <A>, B = <B>");
A = abc, B = false
ok
```
Define a data type and use it to match:

```rascal-shell ,continue
rascal>data Color = red(int N) | black(int N);
ok
rascal>if(red(K) := red(13))
>>>>>>>   println("K = <K>");
K = 13
ok
```


