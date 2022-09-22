---
title: PartiallyLabeledFields
---

#### Synopsis

In a tuple or relation all fields should have names or none at all.

#### Description

The fields in tuples and relations can optionally be labelled with a name.
There are only two legal situations:

*  All fields have a label.
*  No field has a label.


This error signals the case that thei fields are partially labelled.


#### Examples


```rascal-shell
rascal>tuple[int n, str] T;
ok
rascal>rel[str name, int] R;
|prompt:///|(4,8,<1,4>,<1,12>): either all fields must be labeled, or none.
Advice: |http://tutor.rascal-mpl.org/Errors/Static/PartiallyLabeledFields/PartiallyLabeledFields.html|
ok
```

