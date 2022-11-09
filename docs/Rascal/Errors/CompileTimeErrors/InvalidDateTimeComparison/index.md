---
title: InvalidDateTimeComparison
---

#### Synopsis

Attempt to compare a date with a time.

#### Description

[datetime](../../../../Rascal/Expressions/Values/DateTime/index.md) values may contain two components: date and time.
Datetime values that contain both a date and a time can be compared.
Dates can also be compared with dates, and times with times.
This error is generated when a date is compared with a time.

#### Examples

Comparing dates with dates:

```rascal-shell 
rascal>$2013-07-15$ < $2014-07-15$
bool: true
```

Or with datetimes:

```rascal-shell ,continue
rascal>$2013-01-11T23:03:56.901+01:00$ < $2013-01-11T23:05:00.901+01:00$
bool: true
```
But mixing dates and times gives errors:

```rascal-shell ,error
rascal>$2013-07-15$ < $T20:03:56.901+01:00$
|prompt:///|(15,21,<1,15>,<1,36>): Invalid datetime input: Error reading time, expected ':', found: 48
Advice: |http://tutor.rascal-mpl.org/Errors/Static/DateTimeSyntax/DateTimeSyntax.html|
ok
```


