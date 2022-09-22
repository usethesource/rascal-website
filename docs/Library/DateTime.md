---
title: "module DateTime"
---

#### Usage

`import DateTime;`


#### Synopsis

Library functions for date and time.

#### Description

For operators on `datetime` see [DateTime](../Rascal/Expressions/Values/DateTime) in the Rascal Language Reference.

The following functions are defined for datetime:
* [Library:constructor:Date time::Interval](../Library/DateTime.md#DateTime-Interval)
* [Library:constructor:Date time::duration](../Library/DateTime.md#DateTime-duration)
* [Library:data:Date time::Duration](../Library/DateTime.md#DateTime-Duration)
* [Library:data:Date time::interval](../Library/DateTime.md#DateTime-interval)
* [Library:function:Date time::arb date time](../Library/DateTime.md#DateTime-arbDateTime)
* [Library:function:Date time::create date](../Library/DateTime.md#DateTime-createDate)
* [Library:function:Date time::create date time](../Library/DateTime.md#DateTime-createDateTime)
* [Library:function:Date time::create duration](../Library/DateTime.md#DateTime-createDuration)
* [Library:function:Date time::create duration internal](../Library/DateTime.md#DateTime-createDurationInternal)
* [Library:function:Date time::create interval](../Library/DateTime.md#DateTime-createInterval)
* [Library:function:Date time::create time](../Library/DateTime.md#DateTime-createTime)
* [Library:function:Date time::date range by day](../Library/DateTime.md#DateTime-dateRangeByDay)
* [Library:function:Date time::days diff](../Library/DateTime.md#DateTime-daysDiff)
* [Library:function:Date time::days in interval](../Library/DateTime.md#DateTime-daysInInterval)
* [Library:function:Date time::decrement days](../Library/DateTime.md#DateTime-decrementDays)
* [Library:function:Date time::decrement hours](../Library/DateTime.md#DateTime-decrementHours)
* [Library:function:Date time::decrement milliseconds](../Library/DateTime.md#DateTime-decrementMilliseconds)
* [Library:function:Date time::decrement minutes](../Library/DateTime.md#DateTime-decrementMinutes)
* [Library:function:Date time::decrement months](../Library/DateTime.md#DateTime-decrementMonths)
* [Library:function:Date time::decrement seconds](../Library/DateTime.md#DateTime-decrementSeconds)
* [Library:function:Date time::decrement years](../Library/DateTime.md#DateTime-decrementYears)
* [Library:function:Date time::increment days](../Library/DateTime.md#DateTime-incrementDays)
* [Library:function:Date time::increment hours](../Library/DateTime.md#DateTime-incrementHours)
* [Library:function:Date time::increment milliseconds](../Library/DateTime.md#DateTime-incrementMilliseconds)
* [Library:function:Date time::increment minutes](../Library/DateTime.md#DateTime-incrementMinutes)
* [Library:function:Date time::increment months](../Library/DateTime.md#DateTime-incrementMonths)
* [Library:function:Date time::increment seconds](../Library/DateTime.md#DateTime-incrementSeconds)
* [Library:function:Date time::increment years](../Library/DateTime.md#DateTime-incrementYears)
* [Library:function:Date time::join date and time](../Library/DateTime.md#DateTime-joinDateAndTime)
* [Library:function:Date time::now](../Library/DateTime.md#DateTime-now)
* [Library:function:Date time::parse date](../Library/DateTime.md#DateTime-parseDate)
* [Library:function:Date time::parse date in locale](../Library/DateTime.md#DateTime-parseDateInLocale)
* [Library:function:Date time::parse date time](../Library/DateTime.md#DateTime-parseDateTime)
* [Library:function:Date time::parse date time in locale](../Library/DateTime.md#DateTime-parseDateTimeInLocale)
* [Library:function:Date time::parse time](../Library/DateTime.md#DateTime-parseTime)
* [Library:function:Date time::parse time in locale](../Library/DateTime.md#DateTime-parseTimeInLocale)
* [Library:function:Date time::print date](../Library/DateTime.md#DateTime-printDate)
* [Library:function:Date time::print date in locale](../Library/DateTime.md#DateTime-printDateInLocale)
* [Library:function:Date time::print date time](../Library/DateTime.md#DateTime-printDateTime)
* [Library:function:Date time::print date time in locale](../Library/DateTime.md#DateTime-printDateTimeInLocale)
* [Library:function:Date time::print time](../Library/DateTime.md#DateTime-printTime)
* [Library:function:Date time::print time in locale](../Library/DateTime.md#DateTime-printTimeInLocale)
* [Library:function:Date time::split date time](../Library/DateTime.md#DateTime-splitDateTime)


## function now {#DateTime-now}

* ``datetime now()``


#### Synopsis

Get the current datetime.

#### Examples


```rascal-shell
rascal>import DateTime;
ok
rascal>now();
datetime: $2022-09-22T11:20:30.612+00:00$
```

## function createDate {#DateTime-createDate}

* ``datetime createDate(int year, int month, int day)``


#### Synopsis

Create a new date.

#### Examples


```rascal-shell
rascal>import DateTime;
ok
rascal>createDate(2012,1,1);
datetime: $2012-01-01$
```

## function createTime {#DateTime-createTime}

* ``datetime createTime(int hour, int minute, int second, int millisecond)``
* ``datetime createTime(int hour, int minute, int second, int millisecond,                                  int timezoneHourOffset, int timezoneMinuteOffset)``


#### Synopsis

Create a new time (with optional timezone offset).

#### Examples


```rascal-shell
rascal>import DateTime;
ok
rascal>createTime(8,15,30,55);
datetime: $T08:15:30.055+02:00$
rascal>createTime(8,15,30,55,2,0);
datetime: $T08:15:30.055+02:00$
```

## function createDateTime {#DateTime-createDateTime}

* ``datetime createDateTime(int year, int month, int day, int hour, int minute,                                      int second, int millisecond)``
* ``datetime createDateTime(int year, int month, int day, int hour, int minute,                                      int second, int millisecond, int timezoneHourOffset,                                      int timezoneMinuteOffset)``


#### Synopsis

Create a new datetime (with optional timezone offset).

#### Examples


```rascal-shell
rascal>import DateTime;
ok
rascal>createDateTime(2012,1,1,8,15,30,55);
datetime: $2012-01-01T08:15:30.055+02:00$
rascal>createDateTime(2012,1,1,8,15,30,55,2,0);
datetime: $2012-01-01T08:15:30.055+02:00$
```

## function joinDateAndTime {#DateTime-joinDateAndTime}

* ``datetime joinDateAndTime(datetime date, datetime time)``


#### Synopsis

Create a new datetime by combining a date and a time.

#### Examples


```rascal-shell
rascal>import DateTime;
ok
rascal>D = createDate(2012, 1, 1);
datetime: $2012-01-01$
rascal>T = createTime(8, 15, 45, 30);
datetime: $T08:15:45.030+02:00$
rascal>joinDateAndTime(D, T);
datetime: $2012-01-01T08:15:45.030+02:00$
```

## function splitDateTime {#DateTime-splitDateTime}

* ``tuple[datetime date, datetime time] splitDateTime(datetime dt)``



#### Synopsis

Split an existing datetime into a tuple with the date and the time.

#### Examples


```rascal-shell
rascal>import DateTime;
ok
rascal>N = now();
datetime: $2022-09-22T11:20:30.841+00:00$
rascal>splitDateTime(N);
tuple[datetime date,datetime time]: <$2022-09-22$,$T11:20:30.841+00:00$>
```

## function incrementYears {#DateTime-incrementYears}

* ``datetime incrementYears(datetime dt, int n)``
* ``datetime incrementYears(datetime dt)``


#### Synopsis

Increment the years by given amount or by 1.

#### Examples


```rascal-shell
rascal>import DateTime;
ok
rascal>N = now();
datetime: $2022-09-22T11:20:30.886+00:00$
rascal>incrementYears(N);
datetime: $2023-09-22T11:20:30.886+00:00$
rascal>incrementYears(N, 5);
datetime: $2027-09-22T11:20:30.886+00:00$
```

## function incrementMonths {#DateTime-incrementMonths}

* ``datetime incrementMonths(datetime dt, int n)``
* ``datetime incrementMonths(datetime dt)``


#### Synopsis

Increment the months by a given amount or by 1.
#### Examples


```rascal-shell
rascal>import DateTime;
ok
rascal>N = now();
datetime: $2022-09-22T11:20:30.932+00:00$
rascal>incrementMonths(N);
datetime: $2022-10-22T11:20:30.932+00:00$
rascal>incrementMonths(N, 5);
datetime: $2023-02-22T11:20:30.932+00:00$
```

## function incrementDays {#DateTime-incrementDays}

* ``datetime incrementDays(datetime dt, int n)``
* ``datetime incrementDays(datetime dt)``


#### Synopsis

Increment the days by given amount or by 1.

#### Examples


```rascal-shell
rascal>import DateTime;
ok
rascal>N = now();
datetime: $2022-09-22T11:20:30.977+00:00$
rascal>incrementDays(N);
datetime: $2022-09-23T11:20:30.977+00:00$
rascal>incrementDays(N, 5);
datetime: $2022-09-27T11:20:30.977+00:00$
```

## function incrementHours {#DateTime-incrementHours}

* ``datetime incrementHours(datetime dt, int n)``
* ``datetime incrementHours(datetime dt)``


#### Synopsis

Increment the hours by a given amount or by 1.`

#### Examples


```rascal-shell
rascal>import DateTime;
ok
rascal>N = now();
datetime: $2022-09-22T11:20:31.023+00:00$
rascal>incrementHours(N);
datetime: $2022-09-22T12:20:31.023+00:00$
rascal>incrementHours(N, 5);
datetime: $2022-09-22T16:20:31.023+00:00$
```

## function incrementMinutes {#DateTime-incrementMinutes}

* ``datetime incrementMinutes(datetime dt, int n)``
* ``datetime incrementMinutes(datetime dt)``


#### Synopsis

Increment the minutes by a given amount or by 1.

#### Examples


```rascal-shell
rascal>import DateTime;
ok
rascal>N = now();
datetime: $2022-09-22T11:20:31.071+00:00$
rascal>incrementMinutes(N);
datetime: $2022-09-22T11:21:31.071+00:00$
rascal>incrementMinutes(N, 5);
datetime: $2022-09-22T11:25:31.071+00:00$
```

## function incrementSeconds {#DateTime-incrementSeconds}

* ``datetime incrementSeconds(datetime dt, int n)``
* ``datetime incrementSeconds(datetime dt)``


#### Synopsis

Increment the seconds by a given amount or by 1.

#### Examples


```rascal-shell
rascal>import DateTime;
ok
rascal>N = now();
datetime: $2022-09-22T11:20:31.126+00:00$
rascal>incrementSeconds(N);
datetime: $2022-09-22T11:20:32.126+00:00$
rascal>incrementSeconds(N, 5);
datetime: $2022-09-22T11:20:36.126+00:00$
```

## function incrementMilliseconds {#DateTime-incrementMilliseconds}

* ``datetime incrementMilliseconds(datetime dt, int n)``
* ``datetime incrementMilliseconds(datetime dt)``


#### Synopsis

Increment the milliseconds by a given amount or by 1.

#### Examples


```rascal-shell
rascal>import DateTime;
ok
rascal>N = now();
datetime: $2022-09-22T11:20:31.194+00:00$
rascal>incrementMilliseconds(N);
datetime: $2022-09-22T11:20:31.195+00:00$
rascal>incrementMilliseconds(N, 5);
datetime: $2022-09-22T11:20:31.199+00:00$
```

## function decrementYears {#DateTime-decrementYears}

* ``datetime decrementYears(datetime dt, int n)``
* ``datetime decrementYears(datetime dt)``


#### Synopsis

Decrement the years by a given amount or by 1.

#### Examples


```rascal-shell
rascal>import DateTime;
ok
rascal>N = now();
datetime: $2022-09-22T11:20:31.260+00:00$
rascal>decrementYears(N);
datetime: $2021-09-22T11:20:31.260+00:00$
rascal>decrementYears(N, 5);
datetime: $2017-09-22T11:20:31.260+00:00$
```

## function decrementMonths {#DateTime-decrementMonths}

* ``datetime decrementMonths(datetime dt, int n)``
* ``datetime decrementMonths(datetime dt)``


#### Synopsis

Decrement the months by a given amount or by 1.

#### Examples


```rascal-shell
rascal>import DateTime;
ok
rascal>N = now();
datetime: $2022-09-22T11:20:31.326+00:00$
rascal>decrementMonths(N);
datetime: $2022-08-22T11:20:31.326+00:00$
rascal>decrementMonths(N, 5);
datetime: $2022-04-22T11:20:31.326+00:00$
```

## function decrementDays {#DateTime-decrementDays}

* ``datetime decrementDays(datetime dt, int n)``
* ``datetime decrementDays(datetime dt)``


#### Synopsis

Decrement the days by a given amount or by 1.

#### Examples


```rascal-shell
rascal>import DateTime;
ok
rascal>N = now();
datetime: $2022-09-22T11:20:31.390+00:00$
rascal>decrementDays(N);
datetime: $2022-09-21T11:20:31.390+00:00$
rascal>decrementDays(N, 3);
datetime: $2022-09-19T11:20:31.390+00:00$
```

## function decrementHours {#DateTime-decrementHours}

* ``datetime decrementHours(datetime dt, int n)``
* ``datetime decrementHours(datetime dt)``


#### Synopsis

Decrement the hours by a given amount or by 1.

#### Examples


```rascal-shell
rascal>import DateTime;
ok
rascal>N = now();
datetime: $2022-09-22T11:20:31.450+00:00$
rascal>decrementHours(N);
datetime: $2022-09-22T10:20:31.450+00:00$
rascal>decrementHours(N, 5);
datetime: $2022-09-22T06:20:31.450+00:00$
```

## function decrementMinutes {#DateTime-decrementMinutes}

* ``datetime decrementMinutes(datetime dt, int n)``
* ``datetime decrementMinutes(datetime dt)``


#### Synopsis

Decrement the minutes by a given amount or by 1.

#### Examples


```rascal-shell
rascal>import DateTime;
ok
rascal>N = now();
datetime: $2022-09-22T11:20:31.518+00:00$
rascal>decrementMinutes(N);
datetime: $2022-09-22T11:19:31.518+00:00$
rascal>decrementMinutes(N, 5);
datetime: $2022-09-22T11:15:31.518+00:00$
```

## function decrementSeconds {#DateTime-decrementSeconds}

* ``datetime decrementSeconds(datetime dt, int n)``
* ``datetime decrementSeconds(datetime dt)``


#### Synopsis

Decrement the seconds by a given amount or by 1.

#### Examples


```rascal-shell
rascal>import DateTime;
ok
rascal>N = now();
datetime: $2022-09-22T11:20:31.592+00:00$
rascal>decrementSeconds(N);
datetime: $2022-09-22T11:20:30.592+00:00$
rascal>decrementSeconds(N, 5);
datetime: $2022-09-22T11:20:26.592+00:00$
```

## function decrementMilliseconds {#DateTime-decrementMilliseconds}

* ``datetime decrementMilliseconds(datetime dt, int n)``
* ``datetime decrementMilliseconds(datetime dt)``


#### Synopsis

Decrement the milliseconds by a given amount or by 1.

#### Examples


```rascal-shell
rascal>import DateTime;
ok
rascal>N = now();
datetime: $2022-09-22T11:20:31.644+00:00$
rascal>decrementMilliseconds(N);
datetime: $2022-09-22T11:20:31.643+00:00$
rascal>decrementMilliseconds(N, 5);
datetime: $2022-09-22T11:20:31.639+00:00$
```

## data interval {#DateTime-interval}

```rascal
data interval  
     = Interval(datetime begin, datetime end)
     ;
```


#### Synopsis

A closed interval on the time axis.

## function createInterval {#DateTime-createInterval}

* ``interval createInterval(datetime begin, datetime end)``


#### Synopsis

Given two datetime values, create an interval.

#### Examples


```rascal-shell
rascal>import DateTime;
ok
rascal>B = now();
datetime: $2022-09-22T11:20:31.698+00:00$
rascal>E = incrementDays(B, 2);
datetime: $2022-09-24T11:20:31.698+00:00$
rascal>createInterval(B, E);
interval: Interval($2022-09-22T11:20:31.698+00:00$,$2022-09-24T11:20:31.698+00:00$)
```

## data Duration {#DateTime-Duration}

```rascal
data Duration  
     = duration(int years, int months, int days, int hours, int minutes, int seconds, int milliseconds)
     ;
```


#### Synopsis

A duration of time, measured in individual years, months, etc.

## function createDurationInternal {#DateTime-createDurationInternal}

* ``tuple[int,int,int,int,int,int,int] createDurationInternal(datetime begin, datetime end)``

## function createDuration {#DateTime-createDuration}

* ``Duration createDuration(datetime begin, datetime end)``
* ``Duration createDuration(interval i)``


#### Synopsis

Create a new duration representing the duration between the begin and end dates.

#### Examples


```rascal-shell
rascal>import DateTime;
ok
rascal>B = now();
datetime: $2022-09-22T11:20:31.750+00:00$
rascal>E1 = incrementHours(B);
datetime: $2022-09-22T12:20:31.750+00:00$
rascal>createDuration(B, E1);
Duration: duration(0,0,0,1,0,0,0)
rascal>E2 = incrementMinutes(B);
datetime: $2022-09-22T11:21:31.750+00:00$
rascal>createDuration(B, E2);
Duration: duration(0,0,0,0,1,0,0)
```

## function daysInInterval {#DateTime-daysInInterval}

* ``int daysInInterval(interval i)``


#### Synopsis

Return the number of days in an interval, including the begin and end days.

#### Examples


```rascal-shell
rascal>import DateTime;
ok
rascal>B = now();
datetime: $2022-09-22T11:20:31.806+00:00$
rascal>E = incrementDays(B, 2);
datetime: $2022-09-24T11:20:31.806+00:00$
rascal>I = createInterval(B, E);
interval: Interval($2022-09-22T11:20:31.806+00:00$,$2022-09-24T11:20:31.806+00:00$)
rascal>daysInInterval(I);
int: 2
```

## function daysDiff {#DateTime-daysDiff}

* ``int daysDiff(datetime begin, datetime end)``


#### Synopsis

Return the difference between two dates and/or datetimes in days.

#### Examples


```rascal-shell
rascal>import DateTime;
ok
rascal>B = now();
datetime: $2022-09-22T11:20:31.868+00:00$
rascal>E = incrementDays(B, 2);
datetime: $2022-09-24T11:20:31.868+00:00$
rascal>daysDiff(B, E);
int: 2
```

## function dateRangeByDay {#DateTime-dateRangeByDay}

* ``list[datetime] dateRangeByDay(interval i)``


#### Synopsis

Given an interval, return a list of days.

#### Description

Given an interval `i`, return a list of days `[i.begin, ..., i.end]`.

#### Examples


```rascal-shell
rascal>import DateTime;
ok
rascal>B = now();
datetime: $2022-09-22T11:20:31.924+00:00$
rascal>E = incrementDays(B, 2);
datetime: $2022-09-24T11:20:31.924+00:00$
rascal>I = createInterval(B, E);
interval: Interval($2022-09-22T11:20:31.924+00:00$,$2022-09-24T11:20:31.924+00:00$)
rascal>dateRangeByDay(I);
list[datetime]: [$2022-09-22$,$2022-09-23$,$2022-09-24$]
```

## function parseDate {#DateTime-parseDate}

* ``datetime parseDate(str inputDate, str formatString)``


#### Synopsis

Parse an input date given as a string using the given format string.

#### Examples


```rascal-shell
rascal>import DateTime;
ok
rascal>parseDate("2011-12-23", "yyyy-MM-dd");
datetime: $2011-12-23$
rascal>parseDate("20111223", "yyyyMMdd");
datetime: $2011-12-23$
```

## function parseDateInLocale {#DateTime-parseDateInLocale}

* ``datetime parseDateInLocale(str inputDate, str formatString, str locale)``


#### Synopsis

Parse an input date given as a string using a specific locale and format string.

## function parseTime {#DateTime-parseTime}

* ``datetime parseTime(str inputTime, str formatString)``


#### Synopsis

Parse an input time given as a string using the given format string.

#### Examples


```rascal-shell
rascal>import DateTime;
ok
rascal>parseTime("11/21/19", "HH/mm/ss");
datetime: $T11:21:19.000+01:00$
```

## function parseTimeInLocale {#DateTime-parseTimeInLocale}

* ``datetime parseTimeInLocale(str inputTime, str formatString, str locale)``


#### Synopsis

Parse an input time given as a string using a specific locale and format string.

## function parseDateTime {#DateTime-parseDateTime}

* ``datetime parseDateTime(str inputDateTime, str formatString)``


#### Synopsis

Parse an input datetime given as a string using the given format string.

#### Examples


```rascal-shell
rascal>import DateTime;
ok
rascal>parseDateTime("2011/12/23/11/19/54", "YYYY/MM/dd/HH/mm/ss");
datetime: $2010-12-26T11:19:54.000+01:00$
```

## function parseDateTimeInLocale {#DateTime-parseDateTimeInLocale}

* ``datetime parseDateTimeInLocale(str inputDateTime, str formatString, str locale)``


#### Synopsis

Parse an input datetime given as a string using a specific locale and format string.

## function printDate {#DateTime-printDate}

* ``str printDate(datetime inputDate, str formatString)``
* ``str printDate(datetime inputDate)``


#### Synopsis

Print an input date using the given format string.

#### Examples


```rascal-shell
rascal>import DateTime;
ok
rascal>printDate(now());
str: "2022-09-22"
rascal>printDate(now(), "YYYYMMdd");
str: "20220922"
```

## function printDateInLocale {#DateTime-printDateInLocale}

* ``str printDateInLocale(datetime inputDate, str formatString, str locale)``
* ``str printDateInLocale(datetime inputDate, str locale)``


#### Synopsis

Print an input date using a specific locale and format string.

#### Examples


```rascal-shell
rascal>import DateTime;
ok
rascal>printDateInLocale(now(), "Europe/Netherlands");
str: "2022-09-22"
rascal>printDateInLocale(now(), "French");
str: "2022-09-22"
```

## function printTime {#DateTime-printTime}

* ``str printTime(datetime inputTime, str formatString)``
* ``str printTime(datetime inputTime)``


#### Synopsis

Print an input time using the given format string.

#### Examples


```rascal-shell
rascal>import DateTime;
ok
rascal>N = now();
datetime: $2022-09-22T11:20:32.232+00:00$
rascal>printTime(N);
str: "11:20:32.232+0000"
rascal>printTime(N, "HH/mm/ss");
str: "11/20/32"
```

## function printTimeInLocale {#DateTime-printTimeInLocale}

* ``str printTimeInLocale(datetime inputTime, str formatString, str locale)``
* ``str printTimeInLocale(datetime inputTime, str locale)``


#### Synopsis

Print an input time using a specific locale and format string.

## function printDateTime {#DateTime-printDateTime}

* ``str printDateTime(datetime inputDateTime, str formatString)``
* ``str printDateTime(datetime inputDateTime)``


#### Synopsis

Print an input datetime using the given format string.

#### Examples


```rascal-shell
rascal>import DateTime;
ok
rascal>N = now();
datetime: $2022-09-22T11:20:32.281+00:00$
rascal>printDateTime(N);
str: "2022-09-22 11:20:32.281+0000"
rascal>printDateTime(N, "yyyy-MM-dd\'T\'HH:mm:ss.SSSZZ");
str: "2022-09-22T11:20:32.281+0000"
rascal>printDateTime(N, "YYYY/MM/dd/HH/mm/ss");
str: "2022/09/22/11/20/32"
```

## function printDateTimeInLocale {#DateTime-printDateTimeInLocale}

* ``str printDateTimeInLocale(datetime inputDateTime, str formatString, str locale)``
* ``str printDateTimeInLocale(datetime inputDateTime, str locale)``


#### Synopsis

Print an input datetime using a specific locale and format string.

## function arbDateTime {#DateTime-arbDateTime}

* ``datetime arbDateTime()``


#### Synopsis

Create a new arbitrary datetime.

#### Examples


```rascal-shell
rascal>import DateTime;
ok
rascal>arbDateTime();
datetime: $2006-02-28T12:30:40.000+00:00$
```

