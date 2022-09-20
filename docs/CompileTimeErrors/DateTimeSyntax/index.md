---
title: DateTimeSyntax
---

#### Synopsis

A datetime value is syntactically incorrect.

#### Syntax

#### Types

#### Function
       
#### Usage

#### Description

Datetime values have a rather complex format as described in [datetime](/Rascal/Expressions/Values/DateTime).
Some errors in the format are treated as syntax errors, others generate the `DateTimeSyntax` error.

Remedy: Fix the datetime value notation.

#### Examples

A correct datetime value:

```rascal-shell
rascal>$2013-07-15T09:15:23.123+03:00$;
datetime: $2013-07-15T09:15:23.123+03:00$
```
Certain errors, like a wrong day number (here: 40) lead to a parse error:

```rascal-shell
rascal>$2013-07-40T09:15:23.123+03:00$;
ok
```

Others, like a wrong month number (here: 15) lead to a DateTimeSyntax error

```rascal-shell
rascal>$2010-15-15T09:15:23.123+03:00$;
|prompt:///|(0,31,<1,0>,<1,31>): Invalid datetime input: Cannot create date with provided values.
Advice: |http://tutor.rascal-mpl.org/Errors/Static/DateTimeSyntax/DateTimeSyntax.html|
ok
```

#### Benefits


