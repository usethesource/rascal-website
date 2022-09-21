---
title: UninitializedPatternMatch
---

#### Synopsis

Pattern matching has not been properly initialized.

#### Syntax

#### Types

#### Function
       
#### Usage

#### Description

[Pattern matching][Rascal concepts:Pattern matching](/docs//RascalConcepts/PatternMatching) requires two ingredients:

*  One of the many [patterns](/docs/Rascal/Patterns).
*  A non-void subject value to which the pattern is applied.

This error is generated when the subject is void.

Remedy: replace the subject by a non-void value.

#### Examples

here is a (contrived) example that produces this error:

```rascal-shell
rascal>void dummy() { return; }
void (): function(|prompt:///|(0,24,<1,0>,<1,24>))
rascal>int n := dummy();
|prompt:///|(9,5,<1,9>,<1,14>): Uninitialized pattern match: trying to match a value of the type 'void'
Advice: |http://tutor.rascal-mpl.org/Errors/Static/UninitializedPatternMatch/UninitializedPatternMatch.html|
ok
```

#### Benefits


