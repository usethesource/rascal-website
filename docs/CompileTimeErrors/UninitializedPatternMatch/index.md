---
title: UninitializedPatternMatch
---

#### Synopsis

Pattern matching has not been properly initialized.

#### Description

[Pattern matching](../../RascalConcepts/PatternMatching/index.md) requires two ingredients:

*  One of the many [patterns](../../Rascal/Patterns/index.md).
*  A non-void subject value to which the pattern is applied.

This error is generated when the subject is void.

Remedy: replace the subject by a non-void value.

#### Examples

Here is a (contrived) example that produces this error:

```rascal-shell ,error
rascal>void dummy() { return; }
void (): function(|prompt:///|(0,24,<1,0>,<1,24>))
rascal>int n := dummy();
|prompt:///|(9,5,<1,9>,<1,14>): Uninitialized pattern match: trying to match a value of the type 'void'
Advice: |http://tutor.rascal-mpl.org/Errors/Static/UninitializedPatternMatch/UninitializedPatternMatch.html|
ok
```

#### Benefits

* As far as we know there is no other way to trigger this static [error](../../CompileTimeErrors/index.md).

#### Pitfalls

* The error message seems to point to the pattern for the cause but the cause is in the static type (`void`) of the subject on the right.
