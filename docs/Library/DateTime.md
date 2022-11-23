---
title: "module DateTime"
---

#### Usage

`import DateTime;`


#### Synopsis

Library functions for date and time.

#### Description

For operators on `datetime` see [DateTime](../Rascal/Expressions/Values/DateTime/index.md) in the Rascal Language Reference.

The following functions are defined for datetime:
* [Interval](../Library/DateTime.md#DateTime-Interval)
* [duration](../Library/DateTime.md#DateTime-duration)
* [Duration](../Library/DateTime.md#DateTime-Duration)
* [interval](../Library/DateTime.md#DateTime-interval)
* [arbDateTime](../Library/DateTime.md#DateTime-arbDateTime)
* [createDate](../Library/DateTime.md#DateTime-createDate)
* [createDateTime](../Library/DateTime.md#DateTime-createDateTime)
* [createDuration](../Library/DateTime.md#DateTime-createDuration)
* [createDurationInternal](../Library/DateTime.md#DateTime-createDurationInternal)
* [createInterval](../Library/DateTime.md#DateTime-createInterval)
* [createTime](../Library/DateTime.md#DateTime-createTime)
* [dateRangeByDay](../Library/DateTime.md#DateTime-dateRangeByDay)
* [daysDiff](../Library/DateTime.md#DateTime-daysDiff)
* [daysInInterval](../Library/DateTime.md#DateTime-daysInInterval)
* [decrementDays](../Library/DateTime.md#DateTime-decrementDays)
* [decrementHours](../Library/DateTime.md#DateTime-decrementHours)
* [decrementMilliseconds](../Library/DateTime.md#DateTime-decrementMilliseconds)
* [decrementMinutes](../Library/DateTime.md#DateTime-decrementMinutes)
* [decrementMonths](../Library/DateTime.md#DateTime-decrementMonths)
* [decrementSeconds](../Library/DateTime.md#DateTime-decrementSeconds)
* [decrementYears](../Library/DateTime.md#DateTime-decrementYears)
* [incrementDays](../Library/DateTime.md#DateTime-incrementDays)
* [incrementHours](../Library/DateTime.md#DateTime-incrementHours)
* [incrementMilliseconds](../Library/DateTime.md#DateTime-incrementMilliseconds)
* [incrementMinutes](../Library/DateTime.md#DateTime-incrementMinutes)
* [incrementMonths](../Library/DateTime.md#DateTime-incrementMonths)
* [incrementSeconds](../Library/DateTime.md#DateTime-incrementSeconds)
* [incrementYears](../Library/DateTime.md#DateTime-incrementYears)
* [joinDateAndTime](../Library/DateTime.md#DateTime-joinDateAndTime)
* [now](../Library/DateTime.md#DateTime-now)
* [parseDate](../Library/DateTime.md#DateTime-parseDate)
* [parseDateInLocale](../Library/DateTime.md#DateTime-parseDateInLocale)
* [parseDateTime](../Library/DateTime.md#DateTime-parseDateTime)
* [parseDateTimeInLocale](../Library/DateTime.md#DateTime-parseDateTimeInLocale)
* [parseTime](../Library/DateTime.md#DateTime-parseTime)
* [parseTimeInLocale](../Library/DateTime.md#DateTime-parseTimeInLocale)
* [printDate](../Library/DateTime.md#DateTime-printDate)
* [printDateInLocale](../Library/DateTime.md#DateTime-printDateInLocale)
* [printDateTime](../Library/DateTime.md#DateTime-printDateTime)
* [printDateTimeInLocale](../Library/DateTime.md#DateTime-printDateTimeInLocale)
* [printTime](../Library/DateTime.md#DateTime-printTime)
* [printTimeInLocale](../Library/DateTime.md#DateTime-printTimeInLocale)
* [splitDateTime](../Library/DateTime.md#DateTime-splitDateTime)


## function now {#DateTime-now}

```rascal
datetime now()

```


#### Synopsis

Get the current datetime.

#### Examples


```rascal-shell 
rascal>import DateTime;
ok
rascal>now();
datetime: $2022-11-22T15:18:25.632+00:00$
```

## function createDate {#DateTime-createDate}

```rascal
datetime createDate(int year, int month, int day)

```


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

```rascal
datetime createTime(int hour, int minute, int second, int millisecond)

datetime createTime(int hour, int minute, int second, int millisecond, 
                                int timezoneHourOffset, int timezoneMinuteOffset)

datetime createTime(int hour, int minute, int second, int millisecond, 
                                int timezoneHourOffset, int timezoneMinuteOffset)

```


#### Synopsis

Create a new time (with optional timezone offset).

#### Examples


```rascal-shell 
rascal>import DateTime;
ok
rascal>createTime(8,15,30,55);
datetime: $T08:15:30.055+01:00$
rascal>createTime(8,15,30,55,2,0);
datetime: $T08:15:30.055+02:00$
```

## function createDateTime {#DateTime-createDateTime}

```rascal
datetime createDateTime(int year, int month, int day, int hour, int minute, 
                                    int second, int millisecond)

datetime createDateTime(int year, int month, int day, int hour, int minute, 
                                    int second, int millisecond)

datetime createDateTime(int year, int month, int day, int hour, int minute, 
                                    int second, int millisecond, int timezoneHourOffset, 
                                    int timezoneMinuteOffset)

datetime createDateTime(int year, int month, int day, int hour, int minute, 
                                    int second, int millisecond, int timezoneHourOffset, 
                                    int timezoneMinuteOffset)

datetime createDateTime(int year, int month, int day, int hour, int minute, 
                                    int second, int millisecond, int timezoneHourOffset, 
                                    int timezoneMinuteOffset)

```


#### Synopsis

Create a new datetime (with optional timezone offset).

#### Examples


```rascal-shell 
rascal>import DateTime;
ok
rascal>createDateTime(2012,1,1,8,15,30,55);
datetime: $2012-01-01T08:15:30.055+01:00$
rascal>createDateTime(2012,1,1,8,15,30,55,2,0);
datetime: $2012-01-01T08:15:30.055+02:00$
```

## function joinDateAndTime {#DateTime-joinDateAndTime}

```rascal
datetime joinDateAndTime(datetime date, datetime time)

```


#### Synopsis

Create a new datetime by combining a date and a time.

#### Examples


```rascal-shell 
rascal>import DateTime;
ok
rascal>D = createDate(2012, 1, 1);
datetime: $2012-01-01$
rascal>T = createTime(8, 15, 45, 30);
datetime: $T08:15:45.030+01:00$
rascal>joinDateAndTime(D, T);
datetime: $2012-01-01T08:15:45.030+01:00$
```

## function splitDateTime {#DateTime-splitDateTime}

```rascal
tuple[datetime date, datetime time] splitDateTime(datetime dt)

```



#### Synopsis

Split an existing datetime into a tuple with the date and the time.

#### Examples


```rascal-shell 
rascal>import DateTime;
ok
rascal>N = now();
datetime: $2022-11-22T15:18:25.893+00:00$
rascal>splitDateTime(N);
tuple[datetime date,datetime time]: <$2022-11-22$,$T15:18:25.893+00:00$>
```

## function incrementYears {#DateTime-incrementYears}

```rascal
datetime incrementYears(datetime dt, int n)

datetime incrementYears(datetime dt)

```


#### Synopsis

Increment the years by given amount or by 1.

#### Examples


```rascal-shell 
rascal>import DateTime;
ok
rascal>N = now();
datetime: $2022-11-22T15:18:25.940+00:00$
rascal>incrementYears(N);
datetime: $2023-11-22T15:18:25.940+00:00$
rascal>incrementYears(N, 5);
datetime: $2027-11-22T15:18:25.940+00:00$
```

## function incrementMonths {#DateTime-incrementMonths}

```rascal
datetime incrementMonths(datetime dt, int n)

datetime incrementMonths(datetime dt)

```


#### Synopsis

Increment the months by a given amount or by 1.
#### Examples


```rascal-shell 
rascal>import DateTime;
ok
rascal>N = now();
datetime: $2022-11-22T15:18:26.080+00:00$
rascal>incrementMonths(N);
datetime: $2022-12-22T15:18:26.080+00:00$
rascal>incrementMonths(N, 5);
datetime: $2023-04-22T15:18:26.080+00:00$
```

## function incrementDays {#DateTime-incrementDays}

```rascal
datetime incrementDays(datetime dt, int n)

datetime incrementDays(datetime dt)

```


#### Synopsis

Increment the days by given amount or by 1.

#### Examples


```rascal-shell 
rascal>import DateTime;
ok
rascal>N = now();
datetime: $2022-11-22T15:18:26.133+00:00$
rascal>incrementDays(N);
datetime: $2022-11-23T15:18:26.133+00:00$
rascal>incrementDays(N, 5);
datetime: $2022-11-27T15:18:26.133+00:00$
```

## function incrementHours {#DateTime-incrementHours}

```rascal
datetime incrementHours(datetime dt, int n)

datetime incrementHours(datetime dt)

```


#### Synopsis

Increment the hours by a given amount or by 1.`

#### Examples


```rascal-shell 
rascal>import DateTime;
ok
rascal>N = now();
datetime: $2022-11-22T15:18:26.182+00:00$
rascal>incrementHours(N);
datetime: $2022-11-22T16:18:26.182+00:00$
rascal>incrementHours(N, 5);
datetime: $2022-11-22T20:18:26.182+00:00$
```

## function incrementMinutes {#DateTime-incrementMinutes}

```rascal
datetime incrementMinutes(datetime dt, int n)

datetime incrementMinutes(datetime dt)

```


#### Synopsis

Increment the minutes by a given amount or by 1.

#### Examples


```rascal-shell 
rascal>import DateTime;
ok
rascal>N = now();
datetime: $2022-11-22T15:18:26.228+00:00$
rascal>incrementMinutes(N);
datetime: $2022-11-22T15:19:26.228+00:00$
rascal>incrementMinutes(N, 5);
datetime: $2022-11-22T15:23:26.228+00:00$
```

## function incrementSeconds {#DateTime-incrementSeconds}

```rascal
datetime incrementSeconds(datetime dt, int n)

datetime incrementSeconds(datetime dt)

```


#### Synopsis

Increment the seconds by a given amount or by 1.

#### Examples


```rascal-shell 
rascal>import DateTime;
ok
rascal>N = now();
datetime: $2022-11-22T15:18:26.285+00:00$
rascal>incrementSeconds(N);
datetime: $2022-11-22T15:18:27.285+00:00$
rascal>incrementSeconds(N, 5);
datetime: $2022-11-22T15:18:31.285+00:00$
```

## function incrementMilliseconds {#DateTime-incrementMilliseconds}

```rascal
datetime incrementMilliseconds(datetime dt, int n)

datetime incrementMilliseconds(datetime dt)

```


#### Synopsis

Increment the milliseconds by a given amount or by 1.

#### Examples


```rascal-shell 
rascal>import DateTime;
ok
rascal>N = now();
datetime: $2022-11-22T15:18:26.343+00:00$
rascal>incrementMilliseconds(N);
datetime: $2022-11-22T15:18:26.344+00:00$
rascal>incrementMilliseconds(N, 5);
datetime: $2022-11-22T15:18:26.348+00:00$
```

## function decrementYears {#DateTime-decrementYears}

```rascal
datetime decrementYears(datetime dt, int n)

datetime decrementYears(datetime dt)

```


#### Synopsis

Decrement the years by a given amount or by 1.

#### Examples


```rascal-shell 
rascal>import DateTime;
ok
rascal>N = now();
datetime: $2022-11-22T15:18:26.402+00:00$
rascal>decrementYears(N);
datetime: $2021-11-22T15:18:26.402+00:00$
rascal>decrementYears(N, 5);
datetime: $2017-11-22T15:18:26.402+00:00$
```

## function decrementMonths {#DateTime-decrementMonths}

```rascal
datetime decrementMonths(datetime dt, int n)

datetime decrementMonths(datetime dt)

```


#### Synopsis

Decrement the months by a given amount or by 1.

#### Examples


```rascal-shell 
rascal>import DateTime;
ok
rascal>N = now();
datetime: $2022-11-22T15:18:26.461+00:00$
rascal>decrementMonths(N);
datetime: $2022-10-22T15:18:26.461+00:00$
rascal>decrementMonths(N, 5);
datetime: $2022-06-22T15:18:26.461+00:00$
```

## function decrementDays {#DateTime-decrementDays}

```rascal
datetime decrementDays(datetime dt, int n)

datetime decrementDays(datetime dt)

```


#### Synopsis

Decrement the days by a given amount or by 1.

#### Examples


```rascal-shell 
rascal>import DateTime;
ok
rascal>N = now();
datetime: $2022-11-22T15:18:26.519+00:00$
rascal>decrementDays(N);
datetime: $2022-11-21T15:18:26.519+00:00$
rascal>decrementDays(N, 3);
datetime: $2022-11-19T15:18:26.519+00:00$
```

## function decrementHours {#DateTime-decrementHours}

```rascal
datetime decrementHours(datetime dt, int n)

datetime decrementHours(datetime dt)

```


#### Synopsis

Decrement the hours by a given amount or by 1.

#### Examples


```rascal-shell 
rascal>import DateTime;
ok
rascal>N = now();
datetime: $2022-11-22T15:18:26.574+00:00$
rascal>decrementHours(N);
datetime: $2022-11-22T14:18:26.574+00:00$
rascal>decrementHours(N, 5);
datetime: $2022-11-22T10:18:26.574+00:00$
```

## function decrementMinutes {#DateTime-decrementMinutes}

```rascal
datetime decrementMinutes(datetime dt, int n)

datetime decrementMinutes(datetime dt)

```


#### Synopsis

Decrement the minutes by a given amount or by 1.

#### Examples


```rascal-shell 
rascal>import DateTime;
ok
rascal>N = now();
datetime: $2022-11-22T15:18:26.634+00:00$
rascal>decrementMinutes(N);
datetime: $2022-11-22T15:17:26.634+00:00$
rascal>decrementMinutes(N, 5);
datetime: $2022-11-22T15:13:26.634+00:00$
```

## function decrementSeconds {#DateTime-decrementSeconds}

```rascal
datetime decrementSeconds(datetime dt, int n)

datetime decrementSeconds(datetime dt)

```


#### Synopsis

Decrement the seconds by a given amount or by 1.

#### Examples


```rascal-shell 
rascal>import DateTime;
ok
rascal>N = now();
datetime: $2022-11-22T15:18:26.697+00:00$
rascal>decrementSeconds(N);
datetime: $2022-11-22T15:18:25.697+00:00$
rascal>decrementSeconds(N, 5);
datetime: $2022-11-22T15:18:21.697+00:00$
```

## function decrementMilliseconds {#DateTime-decrementMilliseconds}

```rascal
datetime decrementMilliseconds(datetime dt, int n)

datetime decrementMilliseconds(datetime dt)

```


#### Synopsis

Decrement the milliseconds by a given amount or by 1.

#### Examples


```rascal-shell 
rascal>import DateTime;
ok
rascal>N = now();
datetime: $2022-11-22T15:18:26.757+00:00$
rascal>decrementMilliseconds(N);
datetime: $2022-11-22T15:18:26.756+00:00$
rascal>decrementMilliseconds(N, 5);
datetime: $2022-11-22T15:18:26.752+00:00$
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

```rascal
interval createInterval(datetime begin, datetime end)

```


#### Synopsis

Given two datetime values, create an interval.

#### Examples


```rascal-shell 
rascal>import DateTime;
ok
rascal>B = now();
datetime: $2022-11-22T15:18:26.818+00:00$
rascal>E = incrementDays(B, 2);
datetime: $2022-11-24T15:18:26.818+00:00$
rascal>createInterval(B, E);
interval: Interval($2022-11-22T15:18:26.818+00:00$,$2022-11-24T15:18:26.818+00:00$)
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

```rascal
tuple[int,int,int,int,int,int,int] createDurationInternal(datetime begin, datetime end)

```

## function createDuration {#DateTime-createDuration}

```rascal
Duration createDuration(datetime begin, datetime end)

Duration createDuration(interval i)

```


#### Synopsis

Create a new duration representing the duration between the begin and end dates.

#### Examples


```rascal-shell 
rascal>import DateTime;
ok
rascal>B = now();
datetime: $2022-11-22T15:18:26.881+00:00$
rascal>E1 = incrementHours(B);
datetime: $2022-11-22T16:18:26.881+00:00$
rascal>createDuration(B, E1);
Duration: duration(0,0,0,1,0,0,0)
rascal>E2 = incrementMinutes(B);
datetime: $2022-11-22T15:19:26.881+00:00$
rascal>createDuration(B, E2);
Duration: duration(0,0,0,0,1,0,0)
```

## function daysInInterval {#DateTime-daysInInterval}

```rascal
int daysInInterval(interval i)

```


#### Synopsis

Return the number of days in an interval, including the begin and end days.

#### Examples


```rascal-shell 
rascal>import DateTime;
ok
rascal>B = now();
datetime: $2022-11-22T15:18:26.946+00:00$
rascal>E = incrementDays(B, 2);
datetime: $2022-11-24T15:18:26.946+00:00$
rascal>I = createInterval(B, E);
interval: Interval($2022-11-22T15:18:26.946+00:00$,$2022-11-24T15:18:26.946+00:00$)
rascal>daysInInterval(I);
int: 2
```

## function daysDiff {#DateTime-daysDiff}

```rascal
int daysDiff(datetime begin, datetime end)

```


#### Synopsis

Return the difference between two dates and/or datetimes in days.

#### Examples


```rascal-shell 
rascal>import DateTime;
ok
rascal>B = now();
datetime: $2022-11-22T15:18:27.007+00:00$
rascal>E = incrementDays(B, 2);
datetime: $2022-11-24T15:18:27.007+00:00$
rascal>daysDiff(B, E);
int: 2
```

## function dateRangeByDay {#DateTime-dateRangeByDay}

```rascal
list[datetime] dateRangeByDay(interval i)

```


#### Synopsis

Given an interval, return a list of days.

#### Description

Given an interval `i`, return a list of days `[i.begin, ..., i.end]`.

#### Examples


```rascal-shell 
rascal>import DateTime;
ok
rascal>B = now();
datetime: $2022-11-22T15:18:27.071+00:00$
rascal>E = incrementDays(B, 2);
datetime: $2022-11-24T15:18:27.071+00:00$
rascal>I = createInterval(B, E);
interval: Interval($2022-11-22T15:18:27.071+00:00$,$2022-11-24T15:18:27.071+00:00$)
rascal>dateRangeByDay(I);
list[datetime]: [$2022-11-22$,$2022-11-23$,$2022-11-24$]
```

## function parseDate {#DateTime-parseDate}

```rascal
datetime parseDate(str inputDate, str formatString)

```


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

```rascal
datetime parseDateInLocale(str inputDate, str formatString, str locale)

```


#### Synopsis

Parse an input date given as a string using a specific locale and format string.

## function parseTime {#DateTime-parseTime}

```rascal
datetime parseTime(str inputTime, str formatString)

```


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

```rascal
datetime parseTimeInLocale(str inputTime, str formatString, str locale)

```


#### Synopsis

Parse an input time given as a string using a specific locale and format string.

## function parseDateTime {#DateTime-parseDateTime}

```rascal
datetime parseDateTime(str inputDateTime, str formatString)

```


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

```rascal
datetime parseDateTimeInLocale(str inputDateTime, str formatString, str locale)

```


#### Synopsis

Parse an input datetime given as a string using a specific locale and format string.

## function printDate {#DateTime-printDate}

```rascal
str printDate(datetime inputDate, str formatString)

str printDate(datetime inputDate)

```


#### Synopsis

Print an input date using the given format string.

#### Examples


```rascal-shell 
rascal>import DateTime;
ok
rascal>printDate(now());
str: "2022-11-22"
rascal>printDate(now(), "YYYYMMdd");
str: "20221122"
```

## function printDateInLocale {#DateTime-printDateInLocale}

```rascal
str printDateInLocale(datetime inputDate, str formatString, str locale)

str printDateInLocale(datetime inputDate, str locale)

```


#### Synopsis

Print an input date using a specific locale and format string.

#### Examples


```rascal-shell 
rascal>import DateTime;
ok
rascal>printDateInLocale(now(), "Europe/Netherlands");
str: "2022-11-22"
rascal>printDateInLocale(now(), "French");
str: "2022-11-22"
```

## function printTime {#DateTime-printTime}

```rascal
str printTime(datetime inputTime, str formatString)

str printTime(datetime inputTime)

```


#### Synopsis

Print an input time using the given format string.

#### Examples


```rascal-shell 
rascal>import DateTime;
ok
rascal>N = now();
datetime: $2022-11-22T15:18:27.440+00:00$
rascal>printTime(N);
str: "15:18:27.440+0000"
rascal>printTime(N, "HH/mm/ss");
str: "15/18/27"
```

## function printTimeInLocale {#DateTime-printTimeInLocale}

```rascal
str printTimeInLocale(datetime inputTime, str formatString, str locale)

str printTimeInLocale(datetime inputTime, str locale)

```


#### Synopsis

Print an input time using a specific locale and format string.

## function printDateTime {#DateTime-printDateTime}

```rascal
str printDateTime(datetime inputDateTime, str formatString)

str printDateTime(datetime inputDateTime)

```


#### Synopsis

Print an input datetime using the given format string.

#### Examples


```rascal-shell 
rascal>import DateTime;
ok
rascal>N = now();
datetime: $2022-11-22T15:18:27.510+00:00$
rascal>printDateTime(N);
str: "2022-11-22 15:18:27.510+0000"
rascal>printDateTime(N, "yyyy-MM-dd\'T\'HH:mm:ss.SSSZZ");
str: "2022-11-22T15:18:27.510+0000"
rascal>printDateTime(N, "YYYY/MM/dd/HH/mm/ss");
str: "2022/11/22/15/18/27"
```

## function printDateTimeInLocale {#DateTime-printDateTimeInLocale}

```rascal
str printDateTimeInLocale(datetime inputDateTime, str formatString, str locale)

str printDateTimeInLocale(datetime inputDateTime, str locale)

```


#### Synopsis

Print an input datetime using a specific locale and format string.

## function arbDateTime {#DateTime-arbDateTime}

```rascal
datetime arbDateTime()

```


#### Synopsis

Create a new arbitrary datetime.

#### Examples


```rascal-shell 
rascal>import DateTime;
ok
rascal>arbDateTime();
datetime: $2023-10-10T19:49:43.000+00:00$
```

