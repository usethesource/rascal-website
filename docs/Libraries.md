---
sidebar_position: 6
title: Libraries
---

**Synopsis.**

The available [Rascal](/Rascal) libraries.

**Description.**

The libraries described here provide the following functionality:

  - [Prelude](#Libraries-Prelude): The Rascal standard prelude.

  - [analysis](#Libraries-analysis): Library functions for analysis tasks.

  - [lang](#Libraries-lang): Definitions and tools for various languages.

  - [util](#Libraries-util): Utilities: functions, data types and interfaces with external libraries.

# Prelude

**Synopsis.**

The Rascal standard prelude.

**Description.**

The `Prelude` library provides core functionality for handling all of Rascal’s data-types. See the [Rascal Language
Reference](/Rascal) for details of the language Rascal itself.

For

  - numeric functions, see the [Math](#util-Math) library,

  - statistical functions see [statistics](#analysis-statistics),

  - graph functions see [graphs](#analysis-graphs),

  - other common utilitites see [util](#Libraries-util).

`Prelude` provides the following:

  - [Boolean](#Prelude-Boolean): Library functions for Booleans.

  - [Content](#Prelude-Content): Content provides access to the content server of the Rascal terminal for viewing
    interactive HTML output.

  - [DateTime](#Prelude-DateTime): Library functions for date and time.

  - [Exception](#Prelude-Exception): Exceptions thrown by the Rascal run-time.

  - [IO](#Prelude-IO): Library functions for input/output.

  - [List](#Prelude-List): Library functions for lists.

  - [ListRelation](#Prelude-ListRelation): Library functions for list relations.

  - [Location](#Prelude-Location): Library functions for source locations.

  - [Map](#Prelude-Map): Library functions for maps.

  - [Message](#Prelude-Message): A `Message` datatype that represents messages in the IDE.

  - [Node](#Prelude-Node): Library functions for nodes.

  - [ParseTree](#Prelude-ParseTree): Library functions for parse trees.

  - [Relation](#Prelude-Relation): Library functions for relations.

  - [Set](#Prelude-Set): Library functions for sets.

  - [String](#Prelude-String): Library functions for strings.

  - [Type](#Prelude-Type): Rascal’s type system, implemented in Rascal itself.

  - [ValueIO](#Prelude-ValueIO): Library functions for reading and writing values in textual and binary format.

**Benefits.**

This library makes it possible to import all core Rascal functionality with a single import.

  - The prelude may contain more functionality than you need; this leads to an unnecessary longer import and pollution
    of your name space.

  - The precise contents of the prelude are under discussion.

  - In the future, Rascal may automatically load the prelude.

## Boolean

**Usage.**

`import Boolean;`

**Synopsis.**

Library functions for Booleans.

**Description.**

For operators on Boolean values see [Boolean](/Rascal#Values-Boolean) in the Rascal Language Reference.

The following functions are defined for Booleans:

  - [arbBool](#Libraries/Prelude/Boolean-arbBool): Return an arbitrary Boolean value.

  - [fromString](#Libraries/Prelude/Boolean-fromString): Convert the strings "true" or "false" to a bool

  - [toInt](#Libraries/Prelude/Boolean-toInt): Convert a Boolean value to integer.

  - [toReal](#Libraries/Prelude/Boolean-toReal): Convert Boolean value to real.

  - [toString](#Libraries/Prelude/Boolean-toString): Convert Boolean value to string.

### arbBool

**Function.**

`bool arbBool()`

**Synopsis.**

Return an arbitrary Boolean value.

**Examples.**

``` rascal-shell
import Boolean;
arbBool();
arbBool();
arbBool();
```

**Benefits.**

`arbInt` is a convenient generator for arbitrary binary choices.

### fromString

**Function.**

`bool fromString(str s)`

**Synopsis.**

Convert the strings "true" or "false" to a bool.

### toInt

**Function.**

`int toInt(bool b)`

**Synopsis.**

Convert a Boolean value to integer.

**Description.**

Maps `true` to `1` and `false` to `0`.

**Examples.**

``` rascal-shell
import Boolean;
toInt(true);
toInt(false);
```

### toReal

**Function.**

`real toReal(bool b)`

**Synopsis.**

Convert Boolean value to real.

**Description.**

Maps `true` to `1.0` and `false` to `0.0`.

**Examples.**

``` rascal-shell
import Boolean;
toReal(true);
toReal(false);
```

### toString

**Function.**

`str toString(bool b)`

**Synopsis.**

Convert Boolean value to string.

**Description.**

Maps `true` to `"true"` and `false` to `"false"`.

**Examples.**

``` rascal-shell
import Boolean;
toString(true);
toString(false);
```

## Content

**Usage.**

`import Content;`

**Synopsis.**

Content provides access to the content server of the Rascal terminal for viewing interactive HTML output.

### Content

**Types.**

``` rascal
data Content
     = content(str id, Response (Request) callback)
     | content(Response response)
     ;
```

**Synopsis.**

Content wraps the HTTP Request/Response API to support interactive visualization types on the terminal
[???](#Rascal.REPL).

**Description.**

Values wrapped in a `Content` wrapper will be displayed by interactive Rascal applications such as the IDE, the REPL
terminal and the documentation pages.

For example, a piece of html can be displayed directly like such:

``` rascal-shell
html("\<a href=\"http://www.rascal-mpl.org\"\>Rascal homepage\</a\>")
----
```

In its most general form, `Content` is an HTTP(s) webserver callback, such that you might deliver any kind of content,
based on any kind of request. If you produce a `Content` value which processes requests dynamically, subsequent
interaction from the web browser will be processed as well. So using the `Content` wrapper you can start an interactive
user experience in the browser directly from the REPL.

Content values stay plugged into the application server that is hidden in the REPL environment until they have not been
used for at least 30 minutes. If you want the same interaction back after 30 minutes of non-usage, you have to produce
another Content value on the commandline.

When you are happy with the interaction, or you want a permanent visualization which is not garbage collected after 30
minutes, you can consider wrapping the same callback in a webserver using the [???](#util::Webserver::serve) function.

### html

**Function.**

`Content html(str html)`

**Synopsis.**

Directly serve a static html page

### file

**Function.**

`Content file(loc src)`

**Synopsis.**

Directly serve the contents of a file

### text

**Function.**

`Content text(str text)`

**Synopsis.**

Directly serve the contents of a string as plain text

### Body

**Types.**

`value (type[value] expected)`

### Request

**Types.**

``` rascal
data Request (map[str, str] headers = (), map[str, str] parameters = (), map[str,str] uploads = ())
     = get (str path)
     | put (str path, Body content)
     | post(str path, Body content)
     | delete(str path)
     | head(str path)
     ;
```

**Synopsis.**

Request values represent what a browser is asking for, most importantly the URL path.

**Description.**

A request value also contains the full HTTP headers, the URL parameters as a `map[str,str]` and possibly uploaded
content, also coded as a map\[str,str\]. From the constructor type, `put` or `get` you can see what kind of HTTP request
it was.

  - Note that `put` and `post` have not been implemented yet in the REPL server.

### Response

**Types.**

``` rascal
data Response
     = response(Status status, str mimeType, map[str,str] header, str content)
     | fileResponse(loc file, str mimeType, map[str,str] header)
     | jsonResponse(Status status, map[str,str] header, value val, bool implicitConstructors = true,  bool implicitNodes = true, str dateTimeFormat = "yyyy-MM-dd\'T\'HH:mm:ss\'Z\'")
     ;
```

**Synopsis.**

A response encodes what is send back from the server to the browser client.

**Description.**

The three kinds of responses, encode either content that is already a `str`, some file which is streamed directly from
its source location or a jsonResponse which involves a handy, automatic, encoding of Rascal values into json values.

### response

  - `Response response(str content)`

  - `Response response(Status status, str explanation)`

**Synopsis.**

Utility to quickly render a string as HTML content

### plain

**Function.**

`Response plain(str text)`

**Synopsis.**

Utility to quickly make a plaintext response.

### response

  - `Response response(loc f)`

  - `default Response response(value val, map[str,str] header = ())`

**Synopsis.**

Utility to serve a file from any source location.

### Status

**Types.**

``` rascal
data Status
     = ok()
     | created()
     | accepted()
     | noContent()
     | partialContent()
     | redirect()
     | notModified()
     | badRequest()
     | unauthorized()
     | forbidden()
     | notFound()
     | rangeNotSatisfiable()
     | internalError()
     ;
```

**Synopsis.**

Encoding of HTTP status

## DateTime

**Usage.**

`import DateTime;`

**Synopsis.**

Library functions for date and time.

**Description.**

For operators on `datetime` see [DateTime](/Rascal#Values-DateTime) in the Rascal Language Reference.

The following functions are defined for datetime:

  - [now](#Libraries/Prelude/DateTime-now): Get the current datetime.

  - [createDate](#Libraries/Prelude/DateTime-createDate): Create a new date.

  - [createTime](#Libraries/Prelude/DateTime-createTime): Create a new time (with optional timezone offset).

  - [createTime](#Libraries/Prelude/DateTime-createTime):

  - [createDateTime](#Libraries/Prelude/DateTime-createDateTime): Create a new datetime (with optional timezone offset).

  - [createDateTime](#Libraries/Prelude/DateTime-createDateTime):

  - [joinDateAndTime](#Libraries/Prelude/DateTime-joinDateAndTime): Create a new datetime by combining a date and a
    time.

  - [splitDateTime](#Libraries/Prelude/DateTime-splitDateTime): Split an existing datetime into a tuple with the date
    and the time.

  - [incrementYears](#Libraries/Prelude/DateTime-incrementYears): Increment the years by given amount or by 1.

  - [incrementYears](#Libraries/Prelude/DateTime-incrementYears):

  - [incrementMonths](#Libraries/Prelude/DateTime-incrementMonths): Increment the months by a given amount or by 1.

  - [incrementMonths](#Libraries/Prelude/DateTime-incrementMonths):

  - [incrementDays](#Libraries/Prelude/DateTime-incrementDays): Increment the days by given amount or by 1.

  - [incrementDays](#Libraries/Prelude/DateTime-incrementDays):

  - [incrementHours](#Libraries/Prelude/DateTime-incrementHours): Increment the hours by a given amount or by 1.\`

  - [incrementHours](#Libraries/Prelude/DateTime-incrementHours):

  - [incrementMinutes](#Libraries/Prelude/DateTime-incrementMinutes): Increment the minutes by a given amount or by 1.

  - [incrementMinutes](#Libraries/Prelude/DateTime-incrementMinutes):

  - [incrementSeconds](#Libraries/Prelude/DateTime-incrementSeconds): Increment the seconds by a given amount or by 1.

  - [incrementSeconds](#Libraries/Prelude/DateTime-incrementSeconds):

  - [incrementMilliseconds](#Libraries/Prelude/DateTime-incrementMilliseconds): Increment the milliseconds by a given
    amount or by 1.

  - [incrementMilliseconds](#Libraries/Prelude/DateTime-incrementMilliseconds):

  - [decrementYears](#Libraries/Prelude/DateTime-decrementYears): Decrement the years by a given amount or by 1.

  - [decrementYears](#Libraries/Prelude/DateTime-decrementYears):

  - [decrementMonths](#Libraries/Prelude/DateTime-decrementMonths): Decrement the months by a given amount or by 1.

  - [decrementMonths](#Libraries/Prelude/DateTime-decrementMonths):

  - [decrementDays](#Libraries/Prelude/DateTime-decrementDays): Decrement the days by a given amount or by 1.

  - [decrementDays](#Libraries/Prelude/DateTime-decrementDays):

  - [decrementHours](#Libraries/Prelude/DateTime-decrementHours): Decrement the hours by a given amount or by 1.

  - [decrementHours](#Libraries/Prelude/DateTime-decrementHours):

  - [decrementMinutes](#Libraries/Prelude/DateTime-decrementMinutes): Decrement the minutes by a given amount or by 1.

  - [decrementMinutes](#Libraries/Prelude/DateTime-decrementMinutes):

  - [decrementSeconds](#Libraries/Prelude/DateTime-decrementSeconds): Decrement the seconds by a given amount or by 1.

  - [decrementSeconds](#Libraries/Prelude/DateTime-decrementSeconds):

  - [decrementMilliseconds](#Libraries/Prelude/DateTime-decrementMilliseconds): Decrement the milliseconds by a given
    amount or by 1.

  - [decrementMilliseconds](#Libraries/Prelude/DateTime-decrementMilliseconds):

  - [interval](#Libraries/Prelude/DateTime-interval): A closed interval on the time axis

  - [Interval](#Libraries/Prelude/DateTime-Interval):

  - [createInterval](#Libraries/Prelude/DateTime-createInterval): Given two datetime values, create an interval.

  - [Duration](#Libraries/Prelude/DateTime-Duration): A duration of time, measured in individual years, months, etc

  - [duration](#Libraries/Prelude/DateTime-duration):

  - [createDurationInternal](#Libraries/Prelude/DateTime-createDurationInternal):

  - [createDuration](#Libraries/Prelude/DateTime-createDuration): Create a new duration representing the duration
    between the begin and end dates.

  - [createDuration](#Libraries/Prelude/DateTime-createDuration):

  - [daysInInterval](#Libraries/Prelude/DateTime-daysInInterval): Return the number of days in an interval, including
    the begin and end days.

  - [daysDiff](#Libraries/Prelude/DateTime-daysDiff): Return the difference between two dates and/or datetimes in days.

  - [dateRangeByDay](#Libraries/Prelude/DateTime-dateRangeByDay): Given an interval, return a list of days.

  - [parseDate](#Libraries/Prelude/DateTime-parseDate): Parse an input date given as a string using the given format
    string.

  - [parseDateInLocale](#Libraries/Prelude/DateTime-parseDateInLocale): Parse an input date given as a string using a
    specific locale and format string

  - [parseTime](#Libraries/Prelude/DateTime-parseTime): Parse an input time given as a string using the given format
    string.

  - [parseTimeInLocale](#Libraries/Prelude/DateTime-parseTimeInLocale): Parse an input time given as a string using a
    specific locale and format string

  - [parseDateTime](#Libraries/Prelude/DateTime-parseDateTime): Parse an input datetime given as a string using the
    given format string.

  - [parseDateTimeInLocale](#Libraries/Prelude/DateTime-parseDateTimeInLocale): Parse an input datetime given as a
    string using a specific locale and format string

  - [printDate](#Libraries/Prelude/DateTime-printDate): Print an input date using the given format string.

  - [printDate](#Libraries/Prelude/DateTime-printDate):

  - [printDateInLocale](#Libraries/Prelude/DateTime-printDateInLocale): Print an input date using a specific locale and
    format string.

  - [printDateInLocale](#Libraries/Prelude/DateTime-printDateInLocale):

  - [printTime](#Libraries/Prelude/DateTime-printTime): Print an input time using the given format string.

  - [printTime](#Libraries/Prelude/DateTime-printTime):

  - [printTimeInLocale](#Libraries/Prelude/DateTime-printTimeInLocale): Print an input time using a specific locale and
    format string

  - [printTimeInLocale](#Libraries/Prelude/DateTime-printTimeInLocale):

  - [printDateTime](#Libraries/Prelude/DateTime-printDateTime): Print an input datetime using the given format string.

  - [printDateTime](#Libraries/Prelude/DateTime-printDateTime):

  - [printDateTimeInLocale](#Libraries/Prelude/DateTime-printDateTimeInLocale): Print an input datetime using a specific
    locale and format string

  - [printDateTimeInLocale](#Libraries/Prelude/DateTime-printDateTimeInLocale):

  - [arbDateTime](#Libraries/Prelude/DateTime-arbDateTime): Create a new arbitrary datetime.

### now

**Function.**

`datetime now()`

**Synopsis.**

Get the current datetime.

**Examples.**

``` rascal-shell
import DateTime;
now();
```

### createDate

**Function.**

`datetime createDate(int year, int month, int day)`

**Synopsis.**

Create a new date.

**Examples.**

``` rascal-shell
import DateTime;
createDate(2012,1,1);
```

### createTime

  - `datetime createTime(int hour, int minute, int second, int millisecond)`

  - `datetime createTime(int hour, int minute, int second, int millisecond,
    int timezoneHourOffset, int timezoneMinuteOffset)`

**Synopsis.**

Create a new time (with optional timezone offset).

**Examples.**

``` rascal-shell
import DateTime;
createTime(8,15,30,55);
createTime(8,15,30,55,2,0);
```

### createDateTime

  - `datetime createDateTime(int year, int month, int day, int hour, int minute,
    int second, int millisecond)`

  - `datetime createDateTime(int year, int month, int day, int hour, int minute,
    int second, int millisecond, int timezoneHourOffset,
    int timezoneMinuteOffset)`

**Synopsis.**

Create a new datetime (with optional timezone offset).

**Examples.**

``` rascal-shell
import DateTime;
createDateTime(2012,1,1,8,15,30,55);
createDateTime(2012,1,1,8,15,30,55,2,0);
```

### joinDateAndTime

**Function.**

`datetime joinDateAndTime(datetime date, datetime time)`

**Synopsis.**

Create a new datetime by combining a date and a time.

**Examples.**

``` rascal-shell
import DateTime;
D = createDate(2012, 1, 1);
T = createTime(8, 15, 45, 30);
joinDateAndTime(D, T);
```

### splitDateTime

**Function.**

`tuple[datetime date, datetime time] splitDateTime(datetime dt)`

**Synopsis.**

Split an existing datetime into a tuple with the date and the time.

**Examples.**

``` rascal-shell
import DateTime;
N = now();
splitDateTime(N);
```

### incrementYears

  - `datetime incrementYears(datetime dt, int n)`

  - `datetime incrementYears(datetime dt)`

**Synopsis.**

Increment the years by given amount or by 1.

**Examples.**

``` rascal-shell
import DateTime;
N = now();
incrementYears(N);
incrementYears(N, 5);
```

### incrementMonths

  - `datetime incrementMonths(datetime dt, int n)`

  - `datetime incrementMonths(datetime dt)`

**Synopsis.**

Increment the months by a given amount or by 1. .Function

**Examples.**

``` rascal-shell
import DateTime;
N = now();
incrementMonths(N);
incrementMonths(N, 5);
```

### incrementDays

  - `datetime incrementDays(datetime dt, int n)`

  - `datetime incrementDays(datetime dt)`

**Synopsis.**

Increment the days by given amount or by 1.

**Examples.**

``` rascal-shell
import DateTime;
N = now();
incrementDays(N);
incrementDays(N, 5);
```

### incrementHours

  - `datetime incrementHours(datetime dt, int n)`

  - `datetime incrementHours(datetime dt)`

**Synopsis.**

Increment the hours by a given amount or by 1.\`

**Examples.**

``` rascal-shell
import DateTime;
N = now();
incrementHours(N);
incrementHours(N, 5);
```

### incrementMinutes

  - `datetime incrementMinutes(datetime dt, int n)`

  - `datetime incrementMinutes(datetime dt)`

**Synopsis.**

Increment the minutes by a given amount or by 1.

**Examples.**

``` rascal-shell
import DateTime;
N = now();
incrementMinutes(N);
incrementMinutes(N, 5);
```

### incrementSeconds

  - `datetime incrementSeconds(datetime dt, int n)`

  - `datetime incrementSeconds(datetime dt)`

**Synopsis.**

Increment the seconds by a given amount or by 1.

**Examples.**

``` rascal-shell
import DateTime;
N = now();
incrementSeconds(N);
incrementSeconds(N, 5);
```

### incrementMilliseconds

  - `datetime incrementMilliseconds(datetime dt, int n)`

  - `datetime incrementMilliseconds(datetime dt)`

**Synopsis.**

Increment the milliseconds by a given amount or by 1.

**Examples.**

``` rascal-shell
import DateTime;
N = now();
incrementMilliseconds(N);
incrementMilliseconds(N, 5);
```

### decrementYears

  - `datetime decrementYears(datetime dt, int n)`

  - `datetime decrementYears(datetime dt)`

**Synopsis.**

Decrement the years by a given amount or by 1.

**Examples.**

``` rascal-shell
import DateTime;
N = now();
decrementYears(N);
decrementYears(N, 5);
```

### decrementMonths

  - `datetime decrementMonths(datetime dt, int n)`

  - `datetime decrementMonths(datetime dt)`

**Synopsis.**

Decrement the months by a given amount or by 1.

**Examples.**

``` rascal-shell
import DateTime;
N = now();
decrementMonths(N);
decrementMonths(N, 5);
```

### decrementDays

  - `datetime decrementDays(datetime dt, int n)`

  - `datetime decrementDays(datetime dt)`

**Synopsis.**

Decrement the days by a given amount or by 1.

**Examples.**

``` rascal-shell
import DateTime;
N = now();
decrementDays(N);
decrementDays(N, 3);
```

### decrementHours

  - `datetime decrementHours(datetime dt, int n)`

  - `datetime decrementHours(datetime dt)`

**Synopsis.**

Decrement the hours by a given amount or by 1.

**Examples.**

``` rascal-shell
import DateTime;
N = now();
decrementHours(N);
decrementHours(N, 5);
```

### decrementMinutes

  - `datetime decrementMinutes(datetime dt, int n)`

  - `datetime decrementMinutes(datetime dt)`

**Synopsis.**

Decrement the minutes by a given amount or by 1.

**Examples.**

``` rascal-shell
import DateTime;
N = now();
decrementMinutes(N);
decrementMinutes(N, 5);
```

### decrementSeconds

  - `datetime decrementSeconds(datetime dt, int n)`

  - `datetime decrementSeconds(datetime dt)`

**Synopsis.**

Decrement the seconds by a given amount or by 1.

**Examples.**

``` rascal-shell
import DateTime;
N = now();
decrementSeconds(N);
decrementSeconds(N, 5);
```

### decrementMilliseconds

  - `datetime decrementMilliseconds(datetime dt, int n)`

  - `datetime decrementMilliseconds(datetime dt)`

**Synopsis.**

Decrement the milliseconds by a given amount or by 1.

**Examples.**

``` rascal-shell
import DateTime;
N = now();
decrementMilliseconds(N);
decrementMilliseconds(N, 5);
```

### interval

**Types.**

``` rascal
data interval
     = Interval(datetime begin, datetime end)
     ;
```

**Synopsis.**

A closed interval on the time axis.

### createInterval

**Function.**

`interval createInterval(datetime begin, datetime end)`

**Synopsis.**

Given two datetime values, create an interval.

**Examples.**

``` rascal-shell
import DateTime;
B = now();
E = incrementDays(B, 2);
createInterval(B, E);
```

### Duration

**Types.**

``` rascal
data Duration
     = duration(int years, int months, int days, int hours, int minutes, int seconds, int milliseconds)
     ;
```

**Synopsis.**

A duration of time, measured in individual years, months, etc.

### createDurationInternal

**Function.**

`tuple[int,int,int,int,int,int,int] createDurationInternal(datetime begin, datetime end)`

### createDuration

  - `Duration createDuration(datetime begin, datetime end)`

  - `Duration createDuration(interval i)`

**Synopsis.**

Create a new duration representing the duration between the begin and end dates.

**Examples.**

``` rascal-shell
import DateTime;
B = now();
E1 = incrementHours(B);
createDuration(B, E1);
E2 = incrementMinutes(B);
createDuration(B, E2);
```

### daysInInterval

**Function.**

`int daysInInterval(interval i)`

**Synopsis.**

Return the number of days in an interval, including the begin and end days.

**Examples.**

``` rascal-shell
import DateTime;
B = now();
E = incrementDays(B, 2);
I = createInterval(B, E);
daysInInterval(I);
```

### daysDiff

**Function.**

`int daysDiff(datetime begin, datetime end)`

**Synopsis.**

Return the difference between two dates and/or datetimes in days.

**Examples.**

``` rascal-shell
import DateTime;
B = now();
E = incrementDays(B, 2);
daysDiff(B, E);
```

### dateRangeByDay

**Function.**

`list[datetime] dateRangeByDay(interval i)`

**Synopsis.**

Given an interval, return a list of days.

**Description.**

Given an interval `i`, return a list of days `[i.begin, …​, i.end]`.

**Examples.**

``` rascal-shell
import DateTime;
B = now();
E = incrementDays(B, 2);
I = createInterval(B, E);
dateRangeByDay(I);
```

### parseDate

**Function.**

`datetime parseDate(str inputDate, str formatString)`

**Synopsis.**

Parse an input date given as a string using the given format string.

**Examples.**

``` rascal-shell
import DateTime;
parseDate("2011-12-23", "yyyy-MM-dd");
parseDate("20111223", "yyyyMMdd");
```

### parseDateInLocale

**Function.**

`datetime parseDateInLocale(str inputDate, str formatString, str locale)`

**Synopsis.**

Parse an input date given as a string using a specific locale and format string.

### parseTime

**Function.**

`datetime parseTime(str inputTime, str formatString)`

**Synopsis.**

Parse an input time given as a string using the given format string.

**Examples.**

``` rascal-shell
import DateTime;
parseTime("11/21/19", "HH/mm/ss");
```

### parseTimeInLocale

**Function.**

`datetime parseTimeInLocale(str inputTime, str formatString, str locale)`

**Synopsis.**

Parse an input time given as a string using a specific locale and format string.

### parseDateTime

**Function.**

`datetime parseDateTime(str inputDateTime, str formatString)`

**Synopsis.**

Parse an input datetime given as a string using the given format string.

**Examples.**

``` rascal-shell
import DateTime;
parseDateTime("2011/12/23/11/19/54", "YYYY/MM/dd/HH/mm/ss");
```

### parseDateTimeInLocale

**Function.**

`datetime parseDateTimeInLocale(str inputDateTime, str formatString, str locale)`

**Synopsis.**

Parse an input datetime given as a string using a specific locale and format string.

### printDate

  - `str printDate(datetime inputDate, str formatString)`

  - `str printDate(datetime inputDate)`

**Synopsis.**

Print an input date using the given format string.

**Examples.**

``` rascal-shell
import DateTime;
printDate(now());
printDate(now(), "YYYYMMdd");
```

### printDateInLocale

  - `str printDateInLocale(datetime inputDate, str formatString, str locale)`

  - `str printDateInLocale(datetime inputDate, str locale)`

**Synopsis.**

Print an input date using a specific locale and format string.

**Examples.**

``` rascal-shell
import DateTime;
printDateInLocale(now(), "Europe/Netherlands");
printDateInLocale(now(), "French");
```

### printTime

  - `str printTime(datetime inputTime, str formatString)`

  - `str printTime(datetime inputTime)`

**Synopsis.**

Print an input time using the given format string.

**Examples.**

``` rascal-shell
import DateTime;
N = now();
printTime(N);
printTime(N, "HH/mm/ss");
```

### printTimeInLocale

  - `str printTimeInLocale(datetime inputTime, str formatString, str locale)`

  - `str printTimeInLocale(datetime inputTime, str locale)`

**Synopsis.**

Print an input time using a specific locale and format string.

### printDateTime

  - `str printDateTime(datetime inputDateTime, str formatString)`

  - `str printDateTime(datetime inputDateTime)`

**Synopsis.**

Print an input datetime using the given format string.

**Examples.**

``` rascal-shell
import DateTime;
N = now();
printDateTime(N);
printDateTime(N, "yyyy-MM-dd\'T\'HH:mm:ss.SSSZZ");
printDateTime(N, "YYYY/MM/dd/HH/mm/ss");
```

### printDateTimeInLocale

  - `str printDateTimeInLocale(datetime inputDateTime, str formatString, str locale)`

  - `str printDateTimeInLocale(datetime inputDateTime, str locale)`

**Synopsis.**

Print an input datetime using a specific locale and format string.

### arbDateTime

**Function.**

`datetime arbDateTime()`

**Synopsis.**

Create a new arbitrary datetime.

**Examples.**

``` rascal-shell
import DateTime;
arbDateTime();
```

## Exception

**Usage.**

`import Exception;`

**Synopsis.**

Exceptions thrown by the Rascal run-time.

### RuntimeException

**Types.**

``` rascal
data RuntimeException
     = Ambiguity(loc location, str nonterminal, str sentence)
     | ArithmeticException(str message)
     | AssertionFailed()
     | AssertionFailed(str label)
     | CallFailed(list[value] arguments)
     | DateTimeParsingError(str message)
     | DateTimePrintingError(str message)
     | EmptyList()
     | EmptyMap()
     | EmptySet()
     | IndexOutOfBounds(int index)
     | IllegalArgument()
     | IllegalArgument(value v)
     | IllegalArgument(value v, str message)
     | ImplodeError(str message)
     | InvalidURI(str uri)
     | InvalidUseOfDate(str message)
     | InvalidUseOfDateTime(str message)
     | InvalidUseOfLocation(str message)
     | InvalidUseOfTime(str message)
     | IO(str message)
     | Java(str class, str message)
     | Java(str class, str message, RuntimeException cause)
     | JavaException(str class, str message)
     | JavaException(str class, str message, RuntimeException cause)
     | MalFormedURI(str uri)
     | ModuleNotFound(str name)
     | MultipleKey(value key, value first, value second)
     | NoMainFunction()
     | NoParent(loc location)
     | NoSuchAnnotation(str label)
     | NoSuchElement(value v)
     | NoSuchField(str name)
     | NoSuchKey(value key)
     | NotImplemented(str message)
     | ParseError(loc location)
     | PathNotFound(loc l)
     | PathNotFound(set[loc] locs)
     | PermissionDenied()
     | PermissionDenied(str message)
     | RegExpSyntaxError(str message)
     | SchemeNotSupported(loc location)
     | StackOverflow()
     | Timeout()
     | UnavailableInformation()
     ;
```

**Synopsis.**

The `Exception` datatype used in all Rascal exceptions.

**Description.**

Since declarations for ADTs are extensible, the user can add new exceptions when needed.

Exceptions are either generated by the Rascal run-time (e.g., `IndexOutOfBounds`) or they are generated by a
[throw](/Rascal#Statements-Throw). Exceptions can be caught with a [try catch](/Rascal#Statements-TryCatch).

**Examples.**

Import relevant libraries:

``` rascal-shell
import Exception;
import IO;
```

Define the map `weekend` and do a subscription with a non-existing key:

``` rascal-shell
weekend = ("saturday": 1, "sunday": 2);
weekend["monday"];
```

Repeat this, but catch the exception. We use variable `N` to track what happened:

``` rascal-shell
N = 1;
try {
   N = weekend["monday"];
} catch NoSuchKey(v):
  N = 100;
println(N);
```

## IO

**Usage.**

`import IO;`

**Synopsis.**

Library functions for input/output.

**Description.**

The following input/output functions are defined:

  - [registerLocations](#Libraries/Prelude/IO-registerLocations): register a logical file scheme including the
    resolution method via a table.

  - [unregisterLocations](#Libraries/Prelude/IO-unregisterLocations): undo the effect of \[registerLocations\]

  - [resolveLocation](#Libraries/Prelude/IO-resolveLocation):

  - [appendToFile](#Libraries/Prelude/IO-appendToFile): Append a value to a file.

  - [appendToFileEnc](#Libraries/Prelude/IO-appendToFileEnc): Append a value to a file.

  - [charsets](#Libraries/Prelude/IO-charsets): Returns all available character sets

  - [canEncode](#Libraries/Prelude/IO-canEncode): Returns whether this charset can be used for encoding (use with
    [writeFile](#IO-writeFile)

  - [bprintln](#Libraries/Prelude/IO-bprintln): Print a value and return true.

  - [exists](#Libraries/Prelude/IO-exists): Check whether a given location exists.

  - [find](#Libraries/Prelude/IO-find): Find a named file in a list of locations.

  - [isDirectory](#Libraries/Prelude/IO-isDirectory): Check whether a given location is a directory.

  - [iprint](#Libraries/Prelude/IO-iprint): Print an indented representation of a value.

  - [iprintToFile](#Libraries/Prelude/IO-iprintToFile): Print an indented representation of a value to the specified
    location.

  - [iprintToString](#Libraries/Prelude/IO-iprintToString):

  - [iprintExp](#Libraries/Prelude/IO-iprintExp): Print an indented representation of a value and returns the value as
    result.

  - [iprintlnExp](#Libraries/Prelude/IO-iprintlnExp): Print an indented representation of a value followed by a newline
    and returns the value as result.

  - [iprintln](#Libraries/Prelude/IO-iprintln): Print a indented representation of a value and add a newline at the end.

  - [isFile](#Libraries/Prelude/IO-isFile): Check whether a given location is actually a file (and not a directory).

  - [lastModified](#Libraries/Prelude/IO-lastModified): Last modification date of a location.

  - [created](#Libraries/Prelude/IO-created): Creation datetime of a location.

  - [touch](#Libraries/Prelude/IO-touch): Set the modification date of a file to `now` or create the file if it did not
    exist ye

  - [setLastModified](#Libraries/Prelude/IO-setLastModified): Set the modification date of a file to the timestam

  - [listEntries](#Libraries/Prelude/IO-listEntries): List the entries in a directory.

  - [mkDirectory](#Libraries/Prelude/IO-mkDirectory): Create a new directory.

  - [print](#Libraries/Prelude/IO-print): Print a value without subsequent newline.

  - [printExp](#Libraries/Prelude/IO-printExp): Print a value and return it as result.

  - [printExp](#Libraries/Prelude/IO-printExp):

  - [println](#Libraries/Prelude/IO-println): Print a value to the output stream and add a newline.

  - [println](#Libraries/Prelude/IO-println):

  - [printlnExp](#Libraries/Prelude/IO-printlnExp): Print a value followed by a newline and return it as result.

  - [printlnExp](#Libraries/Prelude/IO-printlnExp):

  - [rprint](#Libraries/Prelude/IO-rprint): Raw print of a value.

  - [rprintln](#Libraries/Prelude/IO-rprintln): Raw print of a value followed by newline.

  - [readFile](#Libraries/Prelude/IO-readFile): Read the contents of a location and return it as string value.

  - [readFileEnc](#Libraries/Prelude/IO-readFileEnc): Read the contents of a location and return it as string value.

  - [uuencode](#Libraries/Prelude/IO-uuencode):

  - [readFileBytes](#Libraries/Prelude/IO-readFileBytes): Read the contents of a file and return it as a list of bytes

  - [readFileLines](#Libraries/Prelude/IO-readFileLines): Read the contents of a file location and return it as a list
    of strings.

  - [readFileLinesEnc](#Libraries/Prelude/IO-readFileLinesEnc): Read the contents of a file location and return it as a
    list of strings.

  - [remove](#Libraries/Prelude/IO-remove):

  - [writeFile](#Libraries/Prelude/IO-writeFile): Write values to a file.

  - [writeFileBytes](#Libraries/Prelude/IO-writeFileBytes): Write a list of bytes to a file

  - [writeFileEnc](#Libraries/Prelude/IO-writeFileEnc): Write values to a file.

  - [md5HashFile](#Libraries/Prelude/IO-md5HashFile): Read the contents of a location and return its MD5 hash.

  - [md5Hash](#Libraries/Prelude/IO-md5Hash):

  - [createLink](#Libraries/Prelude/IO-createLink):

  - [toBase64](#Libraries/Prelude/IO-toBase64):

  - [copy](#Libraries/Prelude/IO-copy):

  - [copyFile](#Libraries/Prelude/IO-copyFile):

  - [copyDirectory](#Libraries/Prelude/IO-copyDirectory):

  - [move](#Libraries/Prelude/IO-move):

  - [arbLoc](#Libraries/Prelude/IO-arbLoc):

  - [LocationChangeEvent](#Libraries/Prelude/IO-LocationChangeEvent):

  - [changeEvent](#Libraries/Prelude/IO-changeEvent):

  - [LocationChangeType](#Libraries/Prelude/IO-LocationChangeType):

  - [created](#Libraries/Prelude/IO-created):

  - [deleted](#Libraries/Prelude/IO-deleted):

  - [modified](#Libraries/Prelude/IO-modified):

  - [LocationType](#Libraries/Prelude/IO-LocationType):

  - [file](#Libraries/Prelude/IO-file):

  - [directory](#Libraries/Prelude/IO-directory):

  - [watch](#Libraries/Prelude/IO-watch):

  - [unwatch](#Libraries/Prelude/IO-unwatch):

### registerLocations

**Function.**

`void registerLocations(str scheme, str authority, map[loc logical, loc physical] m)`

**Synopsis.**

register a logical file scheme including the resolution method via a table.

**Description.**

Logical source location schemes, such as `|java+interface://JRE/java/util/List|` are used for precise qualified names of
artifacts while abstracting from their physical location in a specific part of a file on disk or from some webserver or
source repository location.

Using this function you can create your own schemes. The authority field is used for scoping the names you wish to
resolve to certain projects. This way one name can resolve to different locations in different projects.

  - Logical source locations are supported by IDE features such as hyperlinks

  - Logical source locations are supported by all IO functions as well

<!-- end list -->

  - repeated calls to registerLocations for the same `scheme` and `authority` will overwrite the `m` map.

  - the registry is an intentional memory leak; so make sure you use it wisely.

  - when the files references by the physical locations are being written to (edited, removed), then you may expect
    problems. The registry is not automatically invalidated.

### unregisterLocations

**Function.**

`void unregisterLocations(str scheme, str authority)`

**Synopsis.**

undo the effect of \[registerLocations\]

**Description.**

For debugging or for memory management you may wish to remove a lookup table.

### resolveLocation

**Function.**

`loc resolveLocation(loc l)`

### appendToFile

**Function.**

`void appendToFile(loc file, value V…​)
throws PathNotFound, IO`

**Synopsis.**

Append a value to a file.

**Description.**

Append a textual representation of some values to an existing or a newly created file:

  - If a value is a simple string, the quotes are removed and the contents are de-escaped.

  - If a value has a non-terminal type, the parse tree is unparsed to produce a value.

  - All other values are printed as-is.

  - Each value is terminated by a newline character.

**Encoding.**

The existing file can be stored using any character set possible, if you know the character set, please use
[appendToFileEnc](#IO-appendToFileEnc). Else the same method of deciding the character set is used as in
[readFile](#IO-readFile).

  - The same encoding pitfalls as the [readFile](#IO-readFile) function.

### appendToFileEnc

**Function.**

`void appendToFileEnc(loc file, str charset, value V…​)
throws PathNotFound, IO`

**Synopsis.**

Append a value to a file.

**Description.**

Append a textual representation of some values to an existing or a newly created file:

  - If a value is a simple string, the quotes are removed and the contents are de-escaped.

  - If a value has a non-terminal type, the parse tree is unparsed to produce a value.

  - All other values are printed as-is.

  - Each value is terminated by a newline character.

Files are encoded using the charset provided.

### charsets

**Function.**

`set[str] charsets()`

**Synopsis.**

Returns all available character sets.

### canEncode

**Function.**

`set[str] canEncode(str charset)`

**Synopsis.**

Returns whether this charset can be used for encoding (use with [writeFile](#IO-writeFile))

### bprintln

**Function.**

`bool bprintln(value arg)`

**Synopsis.**

Print a value and return true.

**Description.**

Print a value and return `true`. This is useful for debugging complex Boolean expressions or comprehensions. The only
difference between this function and [println](#IO-println) is that its return type is `bool` rather than `void`.

**Examples.**

``` rascal-shell
import IO;
bprintln("Hello World");
```

### exists

**Function.**

`bool exists(loc file)`

**Synopsis.**

Check whether a given location exists.

**Description.**

Check whether a certain location exists, i.e., whether an actual file is associated with it.

**Examples.**

``` rascal-shell
import IO;
```

Does the library file `IO.rsc` exist?

``` rascal-shell
exists(|std:///IO.rsc|);
```

### find

**Function.**

`loc find(str name, list[loc] path) throws PathNotFound`

**Synopsis.**

Find a named file in a list of locations.

**Examples.**

``` rascal-shell
import IO;
```

Find the file `IO.rsc` in the standard library:

``` rascal-shell
find("IO.rsc", [|std:///|]);
```

### isDirectory

**Function.**

`bool isDirectory(loc file)`

**Synopsis.**

Check whether a given location is a directory.

**Description.**

Check whether the location `file` is a directory.

### iprint

**Function.**

`void iprint(value arg, int lineLimit = 1000)`

**Synopsis.**

Print an indented representation of a value.

**Description.**

See [iprintExp](#IO-iprintExp) for a version that returns its argument as result and [iprintln](#IO-iprintln) for a
version that adds a newline and [iprintToFile](#IO-iprintToFile) for a version that prints to a file.

**Examples.**

``` rascal-shell
import IO;
iprint(["fruits", ("spider" : 8, "snake" : 0), [10, 20, 30]]);
```

### iprintToFile

**Function.**

`void iprintToFile(loc file, value arg)`

**Synopsis.**

Print an indented representation of a value to the specified location.

**Description.**

See [iprint](#IO-iprint) for a version that displays the result on the console and [iprintExp](#IO-iprintExp) for a
version that returns its argument as result and [iprintln](#IO-iprintln) for a version that adds a newline.

**Examples.**

``` rascal-shell
import IO;
iprintToFile(|file:///tmp/fruits.txt|, ["fruits", ("spider" : 8, "snake" : 0), [10, 20, 30]]);
```

### iprintToString

**Function.**

`str iprintToString(value arg)`

### iprintExp

**Function.**

`&T iprintExp(&T v)`

**Synopsis.**

Print an indented representation of a value and returns the value as result.

**Description.**

See [iprintlnExp](#IO-iprintlnExp) for a version that adds a newline.

**Examples.**

``` rascal-shell
import IO;
iprintExp(["fruits", ("spider" : 8, "snake" : 0), [10, 20, 30]]);
```

### iprintlnExp

**Function.**

`&T iprintlnExp(&T v)`

**Synopsis.**

Print an indented representation of a value followed by a newline and returns the value as result.

**Description.**

See [iprintExp](#IO-iprintExp) for a version that does not add a newline.

**Examples.**

``` rascal-shell
import IO;
iprintlnExp(["fruits", ("spider" : 8, "snake" : 0), [10, 20, 30]]);
```

### iprintln

**Function.**

`void iprintln(value arg, int lineLimit = 1000)`

**Synopsis.**

Print a indented representation of a value and add a newline at the end.

**Description.**

See [iprintlnExp](#IO-iprintlnExp) for a version that returns its argument as result and [iprint](#IO-iprint) for a
version that does not add a newline.

By default we only print the first 1000 lines, if you want to print larger values, either use
[writeTextValueFile](#ValueIO-writeTextValueFile) or change the limit with the lineLimit parameter.

**Examples.**

``` rascal-shell
import IO;
iprintln(["fruits", ("spider" : 8, "snake" : 0), [10, 20, 30]]);
iprintln([ {"hi"} | i <- [0..1000]], lineLimit = 10);
```

### isFile

**Function.**

`bool isFile(loc file)`

**Synopsis.**

Check whether a given location is actually a file (and not a directory).

**Description.**

Check whether location `file` is actually a file.

### lastModified

**Function.**

`datetime lastModified(loc file)`

**Synopsis.**

Last modification date of a location.

**Description.**

Returns last modification time of the file at location `file`.

**Examples.**

``` rascal-shell
import IO;
```

Determine the last modification date of the Rascal standard library:

``` rascal-shell
lastModified(|std:///IO.rsc|);
```

### created

**Function.**

`datetime created(loc file)`

**Synopsis.**

Creation datetime of a location.

**Description.**

Returns the creation time of the file at location `file`.

**Examples.**

``` rascal-shell
import IO;
```

Determine the last modification date of the Rascal standard library:

``` rascal-shell
created(|std:///IO.rsc|);
```

### touch

**Function.**

`void touch(loc file)`

**Synopsis.**

Set the modification date of a file to `now` or create the file if it did not exist yet

### setLastModified

**Function.**

`void setLastModified(loc file, datetime timestamp)`

**Synopsis.**

Set the modification date of a file to the timestamp

### listEntries

**Function.**

`list[str] listEntries(loc file)`

**Synopsis.**

List the entries in a directory.

**Description.**

List the entries in directory `file`.

**Examples.**

``` rascal-shell
import IO;
```

List all entries in the standard library:

``` rascal-shell
listEntries(|std:///|);
```

### mkDirectory

**Function.**

`void mkDirectory(loc file)
throws PathNotFound, IO`

**Synopsis.**

Create a new directory.

**Description.**

Create a directory at location `file`.

### print

**Function.**

`void print(value arg)`

**Synopsis.**

Print a value without subsequent newline.

**Description.**

Print a value on the output stream. See [println](#IO-println) for a version that adds a newline and
[printExp](#IO-printExp) for a version that returns its argument as value.

**Examples.**

Note that the only difference with [println](#IO-println) is that no newline is added after the value is printed

``` rascal-shell
import IO;
print("Hello World");
```

> **Note**
> 
> Since `print` does not add a newline, the prompt `ok` appears at a weird place, i.e., glued to the output of `print`.

### printExp

  - `&T printExp(&T v)`

  - `&T printExp(str msg, &T v)`

**Synopsis.**

Print a value and return it as result.

**Examples.**

``` rascal-shell
import IO;
printExp(3.14);
printExp("The value of PI is approximately ", 3.14);
```

### println

  - `void println(value arg)`

  - `void println()`

**Synopsis.**

Print a value to the output stream and add a newline.

**Description.**

Print a value on the output stream followed by a newline. See [print](#IO-print) for a version that does not add a
newline and [printlnExp](#IO-printlnExp) for a version that returns its argument as value.

**Examples.**

``` rascal-shell
import IO;
println("Hello World");
```

Introduce variable S and print it:

``` rascal-shell
S = "Hello World";
println(S);
```

Introduce variable L and print it:

``` rascal-shell
L = ["a", "b", "c"];
println(L);
```

Use a string template to print several values:

``` rascal-shell
println("<S>: <L>");
```

Just print a newline

``` rascal-shell
println();
```

### printlnExp

  - `&T printlnExp(&T v)`

  - `&T printlnExp(str msg, &T v)`

**Synopsis.**

Print a value followed by a newline and return it as result.

**Examples.**

``` rascal-shell
import IO;
printlnExp(3.14);
printlnExp("The value of PI is approximately ", 3.14);
```

> **Note**
> 
> Since `printExp` does no produce a newline after its output, the result prompt `real: 3.14` is glued to the output of
> `printExp`.

### rprint

**Function.**

`void rprint(value arg)`

**Synopsis.**

Raw print of a value.

**Pitfalls.**

This function is only available for internal use in the Rascal development team.

### rprintln

**Function.**

`void rprintln(value arg)`

**Synopsis.**

Raw print of a value followed by newline.

**Pitfalls.**

This function is only available for internal use in the Rascal development team.

### readFile

**Function.**

`str readFile(loc file)
throws PathNotFound, IO`

**Synopsis.**

Read the contents of a location and return it as string value.

**Description.**

Return the contents of a file location as a single string. Also see [readFileLines](#IO-readFileLines).

**Encoding.**

A text file can be encoded in many different character sets, most common are UTF8, ISO-8859-1, and ASCII. If you know
the encoding of the file, please use the [readFileEnc](#IO-readFileEnc) and [readFileLinesEnc](#IO-readFileLinesEnc)
overloads. If you do not know, we try to detect this. This detection is explained below:

  - If the implementation of the used scheme in the [location](/Rascal#Values-Location) (e.g.,`|project:///|`) defines
    the charset of the file then this is used.

  - Otherwise if the file contains a UTF8/16/32 [BOM](http://en.wikipedia.org/wiki/Byte_order_mark), then this is used.

  - As a last resort the IO library uses heuristics to determine if UTF-8 or UTF-32 could work:
    
      - Are the first 32 bytes valid UTF-8? Then use UTF-8.
    
      - Are the first 32 bytes valid UTF-32? Then use UTF-32.

  - Finally, we fall back to the system default (as given by the Java Runtime Environment).

**To summarize**, we use UTF-8 by default, except if the [location](/Rascal#Values-Location) has available meta-data,
the file contains a BOM, or the first 32 bytes of the file are not valid UTF-8.

  - The second version of `readFile` with a string argument is *deprecated*.

  - In case encoding is not known, we try to estimate as best as we can.

  - We default to UTF-8, if the file was not encoded in UTF-8 but the first characters were valid UTF-8, you might get
    an decoding error or just strange looking characters.

### readFileEnc

**Function.**

`str readFileEnc(loc file, str charset)
throws PathNotFound, IO`

**Synopsis.**

Read the contents of a location and return it as string value.

**Description.**

Return the contents (decoded using the Character set supplied) of a file location as a single string. Also see
[readFileLinesEnc](#IO-readFileLinesEnc).

### uuencode

**Function.**

`str uuencode(loc file)
throws PathNotFound, IO`

### readFileBytes

**Function.**

`list[int] readFileBytes(loc file)
throws PathNotFound, IO`

**Synopsis.**

Read the contents of a file and return it as a list of bytes.

### readFileLines

**Function.**

`list[str] readFileLines(loc file)
throws PathNotFound, IO`

**Synopsis.**

Read the contents of a file location and return it as a list of strings.

**Description.**

Return the contents of a file location as a list of lines. Also see [readFile](#IO-readFile).

**Encoding.**

Look at [readFile](#IO-readFile) to understand how this function chooses the character set. If you know the character
set used, please use [readFileLinesEnc](#IO-readFileLinesEnc).

  - In case encoding is not known, we try to estimate as best as we can (see \[readFile\]).

  - We default to UTF-8, if the file was not encoded in UTF-8 but the first characters were valid UTF-8, you might get
    an decoding error or just strange looking characters (see [readFile](#IO-readFile)).

### readFileLinesEnc

**Function.**

`list[str] readFileLinesEnc(loc file, str charset)
throws PathNotFound, IO`

**Synopsis.**

Read the contents of a file location and return it as a list of strings.

**Description.**

Return the contents (decoded using the Character set supplied) of a file location as a list of lines. Also see
[readFileLines](#IO-readFileLines).

### remove

**Function.**

`void remove(loc file, bool recursive=true) throws IO`

### writeFile

**Function.**

`void writeFile(loc file, value V…​)
throws PathNotFound, IO`

**Synopsis.**

Write values to a file.

**Description.**

Write a textual representation of some values to a file:

  - If a value is a simple string, the quotes are removed and the contents are de-escaped.

  - If a value has a non-terminal type, the parse tree is unparsed to produce a value.

  - All other values are printed as-is.

  - Each value is terminated by a newline character.

Files are encoded in UTF-8, in case this is not desired, use [writeFileEnc](#IO-writeFileEnc).

### writeFileBytes

**Function.**

`void writeFileBytes(loc file, list[int] bytes)
throws PathNotFound, IO`

**Synopsis.**

Write a list of bytes to a file.

### writeFileEnc

**Function.**

`void writeFileEnc(loc file, str charset, value V…​)
throws PathNotFound, IO`

**Synopsis.**

Write values to a file.

**Description.**

Write a textual representation of some values to a file:

  - If a value is a simple string, the quotes are removed and the contents are de-escaped.

  - If a value has a non-terminal type, the parse tree is unparsed to produce a value.

  - All other values are printed as-is.

  - Each value is terminated by a newline character.

Files are encoded using the charset provided.

### md5HashFile

**Function.**

`str md5HashFile(loc file)
throws PathNotFound, IO`

**Synopsis.**

Read the contents of a location and return its MD5 hash.

**Description.**

MD5 hash the contents of a file location.

### md5Hash

**Function.**

`str md5Hash(value v)`

### createLink

**Function.**

`str createLink(str title, str target)`

### toBase64

**Function.**

`str toBase64(loc file)
throws PathNotFound, IO`

### copy

**Function.**

`void copy(loc source, loc target, bool recursive=false, bool overwrite=true) throws IO`

### copyFile

**Function.**

`void copyFile(loc source, loc target)`

### copyDirectory

**Function.**

`void copyDirectory(loc source, loc target)`

### move

**Function.**

`void move(loc source, loc target, bool overwrite=true) throws IO`

### arbLoc

**Function.**

`loc arbLoc()`

### LocationChangeEvent

**Types.**

``` rascal
data LocationChangeEvent
     = changeEvent(loc src, LocationChangeType changeType, LocationType \type)
     ;
```

### LocationChangeType

**Types.**

``` rascal
data LocationChangeType
     = created()
     | deleted()
     | modified()
     ;
```

### LocationType

**Types.**

``` rascal
data LocationType
     = file()
     | directory()
     ;
```

### watch

**Function.**

`void watch(loc src, bool recursive, void (LocationChangeEvent event) watcher)`

### unwatch

**Function.**

`void unwatch(loc src, bool recursive, void (LocationChangeEvent event) watcher)`

## List

**Usage.**

`import List;`

**Synopsis.**

Library functions for lists.

**Description.**

For operators on lists see [List](/Rascal#Values-List) in the Rascal Language Reference.

The following functions are available for lists:

  - [concat](#Libraries/Prelude/List-concat): Concatenate a list of lists.

  - [delete](#Libraries/Prelude/List-delete): Delete an element from a list.

  - [distribution](#Libraries/Prelude/List-distribution): Get the distribution of the elements of the list. That

  - [drop](#Libraries/Prelude/List-drop): Drop elements from the head of a list.

  - [dup](#Libraries/Prelude/List-dup): Remove multiple occurrences of elements in a list. The first occurrence remains.

  - [elementAt](#Libraries/Prelude/List-elementAt):

  - [getOneFrom](#Libraries/Prelude/List-getOneFrom): Pick a random element from a list.

  - [getFirstFrom](#Libraries/Prelude/List-getFirstFrom): Pick first element from a list.

  - [getFirstFrom](#Libraries/Prelude/List-getFirstFrom):

  - [head](#Libraries/Prelude/List-head): Get the first element(s) from a list.

  - [head](#Libraries/Prelude/List-head):

  - [head](#Libraries/Prelude/List-head):

  - [headTail](#Libraries/Prelude/List-headTail): Split a list in a head and a tail.

  - [headTail](#Libraries/Prelude/List-headTail):

  - [index](#Libraries/Prelude/List-index): A list of legal index values of a list.

  - [indexOf](#Libraries/Prelude/List-indexOf): Index of first occurrence of an element in a list.

  - [insertAt](#Libraries/Prelude/List-insertAt): Insert an element at a specific position in a list.

  - [intercalate](#Libraries/Prelude/List-intercalate): Join a list of values into a string separated by a separator.

  - [intersperse](#Libraries/Prelude/List-intersperse): Intersperses a list of values with a separator.

  - [isEmpty](#Libraries/Prelude/List-isEmpty): Test whether a list is empty.

  - [last](#Libraries/Prelude/List-last): Return the last element of a list, if any.

  - [last](#Libraries/Prelude/List-last):

  - [lastIndexOf](#Libraries/Prelude/List-lastIndexOf): Return index of last occurrence of elt in lst, or -1 if elt is
    not found.

  - [mapper](#Libraries/Prelude/List-mapper): Apply a function to all list elements and return list of results.

  - [max](#Libraries/Prelude/List-max): Determine the largest element in a list.

  - [max](#Libraries/Prelude/List-max):

  - [merge](#Libraries/Prelude/List-merge): Merge the elements of two sorted lists into one list.

  - [merge](#Libraries/Prelude/List-merge):

  - [min](#Libraries/Prelude/List-min): Determine the smallest element in a list.

  - [min](#Libraries/Prelude/List-min):

  - [mix](#Libraries/Prelude/List-mix): Mix the elements of two lists.

  - [permutations](#Libraries/Prelude/List-permutations): Compute all permutations of a list.

  - [permutationsBag](#Libraries/Prelude/List-permutationsBag):

  - [pop](#Libraries/Prelude/List-pop): Pop top element from list, return a tuple.

  - [prefix](#Libraries/Prelude/List-prefix): Return all but the last element of a list.

  - [push](#Libraries/Prelude/List-push): Push an element in front of a list.

  - [reducer](#Libraries/Prelude/List-reducer): Apply a function to successive elements of list and combine the results
    (*deprecated*).

  - [remove](#Libraries/Prelude/List-remove):

  - [removeFromBag](#Libraries/Prelude/List-removeFromBag):

  - [removeFromBag](#Libraries/Prelude/List-removeFromBag):

  - [reverse](#Libraries/Prelude/List-reverse): Reverse a list.

  - [size](#Libraries/Prelude/List-size): Determine the number of elements in a list.

  - [slice](#Libraries/Prelude/List-slice): Compute a sublist of a list.

  - [sort](#Libraries/Prelude/List-sort): Sort the elements of a list.

  - [sort](#Libraries/Prelude/List-sort):

  - [isSorted](#Libraries/Prelude/List-isSorted): .Synopsis

  - [shuffle](#Libraries/Prelude/List-shuffle): Shuffle a list.

  - [shuffle](#Libraries/Prelude/List-shuffle): Shuffle a list with a seed.

  - [split](#Libraries/Prelude/List-split): Split a list into two halves.

  - [sum](#Libraries/Prelude/List-sum): Sum the elements of a list.

  - [sum](#Libraries/Prelude/List-sum):

  - [tail](#Libraries/Prelude/List-tail): Get the tail element(s) from a list.

  - [tail](#Libraries/Prelude/List-tail):

  - [tail](#Libraries/Prelude/List-tail):

  - [take](#Libraries/Prelude/List-take): Get number of elements from the head of a list.

  - [takeOneFrom](#Libraries/Prelude/List-takeOneFrom): Remove an arbitrary element from a list, returns the element and
    the modified list.

  - [takeWhile](#Libraries/Prelude/List-takeWhile): Take elements from the front of the list as long as a predicate is
    true.

  - [toMap](#Libraries/Prelude/List-toMap): Convert a list of pairs to a map; first elements are associated with a set
    of second elements.

  - [toMapUnique](#Libraries/Prelude/List-toMapUnique): Convert a list of tuples to a map; result must be a map.

  - [top](#Libraries/Prelude/List-top): Take the top element of a list.

  - [toRel](#Libraries/Prelude/List-toRel): Convert a list to a relation.

  - [toSet](#Libraries/Prelude/List-toSet): Convert a list to a set.

  - [toString](#Libraries/Prelude/List-toString): Convert a list to a string.

  - [itoString](#Libraries/Prelude/List-itoString): Convert a list to an indented string.

  - [unzip2](#Libraries/Prelude/List-unzip2): Make a pair (triple) of lists from a list of pairs (triples).

  - [unzip3](#Libraries/Prelude/List-unzip3):

  - [upTill](#Libraries/Prelude/List-upTill): Returns the list 0,1..n-1.

  - [zip2](#Libraries/Prelude/List-zip2): Make a list of pairs from two (three) lists of the same length.

  - [zip3](#Libraries/Prelude/List-zip3):

### concat

**Function.**

`list[&T] concat(list[list[&T]] xxs)`

**Synopsis.**

Concatenate a list of lists.

**Examples.**

``` rascal-shell
import List;
concat([]);
concat([[]]);
concat([[1]]);
concat([[1],[],[2,3]]);
concat([[1,2],[3],[4,5],[]]);
```

### delete

**Function.**

`list[&T] delete(list[&T] lst, int n)`

**Synopsis.**

Delete an element from a list.

**Description.**

Delete the `n`-th element from a list. A new list without the `n`-th element is returned as result. The
`IndexOutOfBounds` exception is thrown when n is not a valid index.

**Examples.**

``` rascal-shell
import List;
delete([1, 2, 3], 1);
delete(["zebra", "elephant", "snake", "owl"], 2);
```

### distribution

**Function.**

`map[&T element, int occurs] distribution(list[&T] lst)`

**Synopsis.**

Get the distribution of the elements of the list. That is how often does each element occur in the list?

**Examples.**

``` rascal-shell
import List;
distribution([4,4,4,3,1,2,1,1,3,4]);
```

### drop

**Function.**

`list[&T] drop(int n, list[&T] lst)`

**Synopsis.**

Drop elements from the head of a list.

**Description.**

Drop `n` elements (or `size(lst)` elements if `size(lst) < n`) from the head of `lst`. See [take](#List-take) to get
elements from the head of a list\].

**Examples.**

``` rascal-shell
import List;
drop(2, [5, 1, 7, 3]);
drop(10, [5, 1, 7, 3]);
drop(2, ["zebra", "elephant", "snake", "owl"]);
```

### dup

**Function.**

`list[&T] dup(list[&T] lst)`

**Synopsis.**

Remove multiple occurrences of elements in a list. The first occurrence remains.

**Examples.**

``` rascal-shell
import List;
dup([3, 1, 5, 3, 1, 7, 1, 2]);
```

### elementAt

**Function.**

`&T elementAt(list[&T] lst, int index)`

### getOneFrom

**Function.**

`&T getOneFrom(list[&T] lst)`

**Synopsis.**

Pick a random element from a list.

**Description.**

Get an arbitrary element from a list. See [takeOneFrom](#List-takeOneFrom) for a function that also removes the selected
element.

**Examples.**

``` rascal-shell
import List;
getOneFrom(["zebra", "elephant", "snake", "owl"]);
getOneFrom(["zebra", "elephant", "snake", "owl"]);
getOneFrom(["zebra", "elephant", "snake", "owl"]);
```

### getFirstFrom

  - `&T getFirstFrom([&T f, *&T _])`

  - `&T getFirstFrom(list[&T] _ :[])`

**Synopsis.**

Pick first element from a list.

**Description.**

Get the first element from a list. As opposed to [getOneFrom](#List-getOneFrom) this function always returns the same
(first) list element.

### head

  - `&T head([&T h, *&T _])`

  - `&T head(list[&T] _:[])`

  - `list[&T] head(list[&T] lst, int n) throws IndexOutOfBounds`

**Synopsis.**

Get the first element(s) from a list.

  - Returns the first element of a list or throws `EmptyList` when the list is empty. This is identical to [???](#top).

  - Returns the first `n` elements of a list or throws `IndexOutOfBounds` when the list is too short. This is similar to
    [???](#take).

**Examples.**

``` rascal-shell
import List;
```

Get the first element:

``` rascal-shell
head([1, 2, 3]);
head(["zebra", "elephant", "snake", "owl"]);
```

An exception is thrown when taking the head of an empty list:

``` rascal-shell
head([]);
```

Get the first n elements:

``` rascal-shell
head([1, 2, 3, 4], 2);
head(["zebra", "elephant", "snake", "owl"], 2);
```

An exception is thrown when the second argument exceeds the length of the list:

``` rascal-shell
head([1, 2, 3, 5], 5);
```

### headTail

  - `tuple[&T, list[&T]] headTail([&T h, *&T t])`

  - `tuple[&T, list[&T]] headTail(list[&T] _:[])`

**Synopsis.**

Split a list in a head and a tail.

**Description.**

This function is identical to [pop](#List-pop).

**Examples.**

``` rascal-shell
import List;
headTail([3, 1, 4, 5]);
pop([3, 1, 4, 5]);
headTail(["zebra", "elephant", "snake", "owl"]);
```

### index

**Function.**

`list[int] index(list[&T] lst)`

**Synopsis.**

A list of legal index values of a list.

**Description.**

Returns a list of all legal index values for a given list `lst`.

**Examples.**

``` rascal-shell
import List;
index([1, 3, 5]);
index(["zebra", "elephant", "snake", "owl"]);
```

**Benefits.**

This function is useful in [for](/Rascal#Statements-For) loops over lists.

### indexOf

**Function.**

`int indexOf(list[&T] lst, &T elt)`

**Synopsis.**

Index of first occurrence of an element in a list.

**Description.**

Return index of first occurrence of `elt` in `lst`, or `-1` if `elt` is not found. Also see
[lastIndexOf](#List-lastIndexOf).

**Examples.**

``` rascal-shell
import List;
indexOf([3, 1, 4, 5], 4);
indexOf([3, 1, 4, 5], 7);
indexOf(["zebra", "elephant", "snake", "owl"], "snake");
indexOf(["zebra", "elephant", "snake", "owl"], "eagle");
```

### insertAt

**Function.**

`list[&T] insertAt(list[&T] lst, int n, &T elm) throws IndexOutOfBounds`

**Synopsis.**

Insert an element at a specific position in a list.

**Description.**

Returns a new list with the value of `elm` inserted at index position `n` of the old list.

**Examples.**

``` rascal-shell
import List;
insertAt([1,2,3], 1, 5);
insertAt(["zebra", "elephant", "snake", "owl"], 2, "eagle");
```

An exception is thrown when the index position is outside the list:

``` rascal-shell
insertAt([1,2,3], 10, 5);
```

### intercalate

**Function.**

`str intercalate(str sep, list[value] l)`

**Synopsis.**

Join a list of values into a string separated by a separator.

**Examples.**

``` rascal-shell
import List;
intercalate("/", [3]);
intercalate("/", [3, 1, 4, 5]);
intercalate(", ", [3, 1, 4, 5]);
intercalate(", ", ["zebra", "elephant", "snake", "owl"]);
```

### intersperse

**Function.**

`list[&T] intersperse(&T sep, list[&T] xs)`

**Synopsis.**

Intersperses a list of values with a separator.

**Examples.**

``` rascal-shell
import List;
intersperse(", ", ["a","b","c"]);
intersperse(0, [1, 2, 3]);
intersperse(1, []);
intersperse([], [1]);
```

### isEmpty

**Function.**

`bool isEmpty(list[&T] lst)`

**Synopsis.**

Test whether a list is empty.

**Description.**

Returns `true` when a list is empty and `false` otherwise.

**Examples.**

``` rascal-shell
import List;
isEmpty([]);
isEmpty([1, 2, 3]);
```

### last

  - `&T last([*&T _, &T l])`

  - `&T last(list[&T] _:[])`

**Synopsis.**

Return the last element of a list, if any.

**Description.**

Also see [tail](#List-tail) that returns a list of one or more of the last elements of a list.

**Examples.**

``` rascal-shell
import List;
last([1]);
last([3, 1, 4, 5]);
last(["zebra", "elephant", "snake", "owl"]);
tail([3, 1, 4, 5]);
```

### lastIndexOf

**Function.**

`int lastIndexOf(list[&T] lst, &T elt)`

**Synopsis.**

Return index of last occurrence of elt in lst, or -1 if elt is not found.

**Description.**

Also see [indexOf](#List-indexOf).

**Examples.**

``` rascal-shell
import List;
lastIndexOf([3, 1, 4, 5, 4], 4);
lastIndexOf([3, 1, 4, 5, 4], 7);
lastIndexOf(["zebra", "owl", "elephant", "snake", "owl"], "owl");
```

### mapper

**Function.**

`list[&U] mapper(list[&T] lst, &U (&T) fn)`

**Synopsis.**

Apply a function to all list elements and return list of results.

**Description.**

Apply a function `fn` to each element of `lst` and return the list of results.

**Examples.**

``` rascal-shell
import List;
int incr(int x) { return x + 1; }
mapper([1, 2, 3, 4], incr);
```

### max

  - `&T max([&T h, *&T t])`

  - `&T max(list[&T] _:[])`

**Synopsis.**

Determine the largest element in a list.

**Examples.**

``` rascal-shell
import List;
max([1, 3, 5, 2, 4]);
max(["zebra", "elephant", "snake", "owl"]);
```

### merge

  - `list[&T] merge(list[&T] left, list[&T] right)`

  - `list[&T] merge(list[&T] left, list[&T] right, bool (&T a, &T b) lessOrEqual)`

**Synopsis.**

Merge the elements of two sorted lists into one list.

**Description.**

Merge the elements of two sorted lists into one list using the built-in ordering between values. Optional, a comparison
function `lessOrEqual` may be given for a user-defined ordering between values.

**Examples.**

``` rascal-shell
import List;
merge([1, 3, 5], [2, 7, 9, 15]);
merge(["ape", "elephant", "owl", "snale", "zebra"], ["apple", "berry", "orange", "pineapple"]);
```

Merge two lists of strings and use their length as ordering:

``` rascal-shell
import String;
merge(["ape", "owl", "snale", "zebra", "elephant"], ["apple", "berry", "orange", "pineapple"], bool(str x, str y){ return size(x) <= size(y); });
```

### min

  - `&T min([&T h, *&T t])`

  - `&T min(list[&T] _: [])`

**Synopsis.**

Determine the smallest element in a list.

**Examples.**

``` rascal-shell
import List;
min([1, 3, 5, 2, 4]);
min(["zebra", "elephant", "snake", "owl"]);
```

### mix

**Function.**

`list[&T] mix(list[&T] l, list[&T] r)`

**Synopsis.**

Mix the elements of two lists.

**Description.**

Let n be the minimum of the length of the two lists `l` and `r`. `mix` returns a list in which the first `n` elements
are taken alternately from the left and the right list, followed by the remaining elements of the longest list.

**Examples.**

``` rascal-shell
import List;
mix([3, 1, 7, 5, 9], [15, 25, 35]);
mix([3, 1, 7], [15, 25, 35, 45, 55]);
mix([3, 1, 7], ["elephant", "snake"]);
```

### permutations

**Function.**

`set[list[&T]] permutations(list[&T] lst)`

**Synopsis.**

Compute all permutations of a list.

**Examples.**

``` rascal-shell
import List;
permutations([1,2,3]);
```

### permutationsBag

**Function.**

`set[list[&T]] permutationsBag(map[&T element, int occurs] b)`

### pop

**Function.**

`tuple[&T, list[&T]] pop(list[&T] lst)`

**Synopsis.**

Pop top element from list, return a tuple. .Description This function is identical to [headTail](#List-headTail). Also
see [push](#List-push) and [top](#List-top).

**Examples.**

``` rascal-shell
import List;
pop([3, 1, 4, 5]);
headTail([3, 1, 4, 5]);
pop(["zebra", "elephant", "snake", "owl"]);
```

### prefix

**Function.**

`list[&T] prefix(list[&T] lst)`

**Synopsis.**

Return all but the last element of a list.

**Examples.**

``` rascal-shell
import List;
prefix([3, 1, 4, 5]);
prefix([]);
prefix(["zebra", "elephant", "snake", "owl"]);
```

### push

**Function.**

`list[&T] push(&T elem, list[&T] lst)`

**Synopsis.**

Push an element in front of a list.

**Description.**

Also see [pop](#List-pop) and [top](#List-top).

**Examples.**

``` rascal-shell
import List;
push(7, [3, 1, 4, 5]);
push("eagle", ["zebra", "elephant", "snake", "owl"]);
```

### reducer

**Function.**

`&T reducer(list[&T] lst, &T (&T, &T) fn, &T unit)`

**Synopsis.**

Apply a function to successive elements of list and combine the results (*deprecated*).

**Description.**

Apply the function `fn` to successive elements of list `lst` starting with `unit`.

**Examples.**

``` rascal-shell
import List;
int add(int x, int y) { return x + y; }
reducer([10, 20, 30, 40], add, 0);
```

**Pitfalls.**

WARNING: This function is **deprecated**, use a [reducer](/Rascal#Expressions-Reducer) instead.

### remove

**Function.**

`list[&T] remove(list[&T] lst, int indexToDelete)`

### removeFromBag

  - `map[&T element, int occurs] removeFromBag(map[&T element, int occurs] b, &T el)`

  - `map[&T element, int occurs] removeFromBag(map[&T element, int occurs] b, &T el, int nr)`

### reverse

**Function.**

`list[&T] reverse(list[&T] lst)`

**Synopsis.**

Reverse a list.

**Description.**

Returns a list with the elements of `lst` in reverse order.

**Examples.**

``` rascal-shell
import List;
reverse([1,4,2,3]);
reverse(["zebra", "elephant", "snake", "owl"]);
```

### size

**Function.**

`int size(list[&T] lst)`

**Synopsis.**

Determine the number of elements in a list.

**Examples.**

``` rascal-shell
import List;
size([20, 10, 30]);
size(["zebra", "elephant", "snake", "owl"]);
```

### slice

**Function.**

`list[&T] slice(list[&T] lst, int begin, int len)`

**Synopsis.**

Compute a sublist of a list.

**Description.**

Returns a sublist of `lst` from index `start` of length `len`.

> **Note**
> 
> In most cases it is better to use the built-in [slice](/Rascal#List-Slice) notation, see the example below.

**Examples.**

``` rascal-shell
import List;
slice([10, 20, 30, 40, 50, 60], 2, 3);
slice(["zebra", "elephant", "snake", "owl"], 1, 2);
```

Here are the equivalent expressions using the slice notation:

``` rascal-shell
[10, 20, 30, 40, 50, 60][2 .. 5];
["zebra", "elephant", "snake", "owl"][1 .. 3];
```

> **Warning**
> 
> In the slice notation the upper bound is exclusive.

### sort

  - `list[&T] sort(list[&T] lst)`

  - `list[&T] sort(list[&T] l, bool (&T a, &T b) less)`

**Synopsis.**

Sort the elements of a list.

**Description.**

Sort the elements of a list:

  - Use the built-in ordering on values to compare list elements.

  - Give an additional `lessThan` function that will be used to compare elements.

**Examples.**

``` rascal-shell
import List;
import String;
sort([10, 4, -2, 11, 100, 5]);
fruits = ["mango", "strawberry", "pear", "pineapple", "banana", "grape", "kiwi"];
sort(fruits);
sort(fruits, bool(str a, str b){ return size(a) > size(b); });
```

### isSorted

**Function.**

`bool isSorted(list[&T] l, bool (&T a, &T b) less = bool (&T a, &T b) { return a < b; })`

**Synopsis.**

Check whether a list is sorted or not.

**Description.**

Checks whether or not a list is sorted by searching for any out-of-order elements. The empty list is defined to be
"sorted" and what sorted means is defined the higher-order parameter "less" which should implement a partial-order
relation between the two parameters.

### shuffle

  - `list[&T] shuffle(list[&T] l)`

  - `list[&T] shuffle(list[&T] l, int seed)`

**Synopsis.**

Shuffle a list.

**Description.**

Returns a random (unbiased) shuffled list.

**Examples.**

``` rascal-shell
import List;
shuffle([1,4,2,3]);
shuffle(["zebra", "elephant", "snake", "owl"]);
```

### split

**Function.**

`tuple[list[&T],list[&T]] split(list[&T] l)`

**Synopsis.**

Split a list into two halves.

**Examples.**

``` rascal-shell
import List;
split([3, 1, 4, 5, 7]);
split(["zebra", "elephant", "snake", "owl"]);
```

### sum

  - `(&T <:num) sum([(&T <: num) hd, *(&T <: num) tl])`

  - `(&T <:num) sum(list[&T] _: [])`

**Synopsis.**

Sum the elements of a list.

**Examples.**

``` rascal-shell
import List;
sum([3, 1, 4, 5]);
sum([3, 1.5, 4, 5]);
```

### tail

  - `list[&T] tail([&T _, *&T t])`

  - `list[&T] tail(list[&T] _:[])`

  - `list[&T] tail(list[&T] lst, int len) throws IndexOutOfBounds`

**Synopsis.**

Get the tail element(s) from a list.

  - Return a list consisting of all but the first element of `lst`.

  - Return a list consisting of the last `n` elements of `lst`.

**Examples.**

``` rascal-shell
```

All but first element:

``` rascal-shell
import List;
tail([10,20,30]);
```

Try an error case:

``` rascal-shell
tail([]);
```

Last n elements:

``` rascal-shell
tail([10, 20, 30, 40, 50, 60], 3);
```

Try an error case:

``` rascal-shell
tail([10, 20, 30, 40, 50, 60], 10);
```

### take

**Function.**

`list[&T] take(int n, list[&T] lst)`

**Synopsis.**

Get number of elements from the head of a list.

**Description.**

Get `n` elements (or `size(lst)` elements if `size(lst) < n`) from the head of the list. See [drop](#List-drop) to
remove elements from the head of a list.

**Examples.**

``` rascal-shell
import List;
take(2, [3, 1, 4, 5]);
take(6, [3, 1, 4, 5]);
take(2, ["zebra", "elephant", "snake", "owl"]);
```

### takeOneFrom

**Function.**

`tuple[&T, list[&T]] takeOneFrom(list[&T] lst)`

**Synopsis.**

Remove an arbitrary element from a list, returns the element and the modified list.

**Description.**

Select an arbitrary element from `lst`, and return a tuple consisting of:

  - the selected element, and

  - a new list consisting of all elements of `lst` except the selected element.

See [getOneFrom](#List-getOneFrom) to only selected an element from a list.

**Examples.**

``` rascal-shell
import List;
takeOneFrom([10,20,30,40,50]);
takeOneFrom([10,20,30,40,50]);
takeOneFrom([10,20,30,40,50]);
takeOneFrom(["zebra", "elephant", "snake", "owl"]);
takeOneFrom(["zebra", "elephant", "snake", "owl"]);
takeOneFrom(["zebra", "elephant", "snake", "owl"]);
```

### takeWhile

**Function.**

`list[&T] takeWhile(list[&T] lst, bool (&T a) take)`

**Synopsis.**

Take elements from the front of the list as long as a predicate is true.

**Examples.**

``` rascal-shell
import List;
bool isEven(int a) = a mod 2 == 0;
takeWhile([2,4,6,8,1,2,3,4,5],isEven);
```

### toMap

**Function.**

`map[&A,list[&B]] toMap(list[tuple[&A, &B]] lst) throws MultipleKey`

**Synopsis.**

Convert a list of pairs to a map; first elements are associated with a set of second elements.

**Description.**

Convert a list of tuples to a map in which the first element of each tuple is associated with the set of second elements
from all tuples with the same first element. Keys should be unique.

**Examples.**

``` rascal-shell
import List;
toMap([<1,10>, <1, 11>, <2, 20>, <3, 30>, <3, 31>]);
```

**Pitfalls.**

`toMap` collects all values in tuples with the same first value in a set. Contrast this with `toMapUnique` that
associates each first tuple value with the second tuple value, but imposes the constraint that those keys are unique.

### toMapUnique

**Function.**

`map[&A,&B] toMapUnique(list[tuple[&A, &B]] lst) throws MultipleKey`

**Synopsis.**

Convert a list of tuples to a map; result must be a map.

**Description.**

Convert a list of tuples to a map; result must be a map.

**Examples.**

``` rascal-shell
import List;
toMapUnique([<1,10>, <2, 20>, <3, 30>]);
```

Let’s explore an error case:

``` rascal-shell
toMapUnique([<1,10>, <1, 11>, <2, 20>, <3, 30>]);
```

**Pitfalls.**

The keys in a map are unique by definition. `toMapUnique` throws a `MultipleKey` exception when the list contains more
than one tuple with the same first value.

### top

**Function.**

`&T top([&T t, *&T _])`

**Synopsis.**

Take the top element of a list. .Description This function is identical to [???](#head). Also see [pop](#List-pop) and
[push](#List-push).

**Examples.**

``` rascal-shell
import List;
top([3, 1, 4, 5]);
top(["zebra", "elephant", "snake", "owl"]);
```

### toRel

**Function.**

`rel[&T,&T] toRel(list[&T] lst)`

**Synopsis.**

Convert a list to a relation. .Description Convert a list to relation, where each tuple encodes which elements are
followed by each other. This function will return an empty relation for empty lists and for singleton lists.

**Examples.**

``` rascal-shell
import List;
toRel([3, 1, 4, 5]);
toRel(["zebra", "elephant", "snake", "owl"]);
```

### toSet

**Function.**

`set[&T] toSet(list[&T] lst)`

**Synopsis.**

Convert a list to a set.

**Description.**

Convert `lst` to a set.

**Examples.**

``` rascal-shell
import List;
toSet([10, 20, 30, 40]);
toSet(["zebra", "elephant", "snake", "owl"]);
```

Note that the same can be done using splicing

``` rascal-shell
l = [10,20,30,40];
s = {*l};
```

### toString

**Function.**

`str toString(list[&T] lst)`

**Synopsis.**

Convert a list to a string.

**Description.**

Convert `lst` to a string.

**Examples.**

``` rascal-shell
import List;
toString([10, 20, 30]);
toString(["zebra", "elephant", "snake", "owl"]);
```

### itoString

**Function.**

`str itoString(list[&T] lst)`

**Synopsis.**

Convert a list to an indented string.

**Description.**

Convert `lst` to a indented string.

**Examples.**

``` rascal-shell
import List;
itoString([10, 20, 30]);
itoString(["zebra", "elephant", "snake", "owl"]);
```

### unzip2

**Function.**

`tuple[list[&T],list[&U]] unzip2(list[tuple[&T,&U]] lst)`

**Synopsis.**

Make a pair (triple) of lists from a list of pairs (triples).

**Description.**

Also see [???](#List-unzip);

**Examples.**

``` rascal-shell
import List;
unzip2([<3,"thirty">, <1,"ten">, <4,"forty">]);
unzip3([<3,"thirty",300>, <1,"ten",100>, <4,"forty",400>]);
```

### unzip3

**Function.**

`tuple[list[&T],list[&U],list[&V]] unzip3(list[tuple[&T,&U,&V]] lst)`

### upTill

**Function.**

`list[int] upTill(int n)`

**Synopsis.**

Returns the list 0,1..n-1. .Description Returns the list `0`, `1`, .., `n-1`, this is slightly faster than `[0..n]`,
since the returned values are shared.

**Examples.**

``` rascal-shell
import List;
upTill(10);
```

### zip2

**Function.**

`list[tuple[&T first, &U second]] zip2(list[&T] a, list[&U] b)`

**Synopsis.**

Make a list of pairs from two (three) lists of the same length.

**Description.**

Also see [???](#List-unzip).

**Examples.**

``` rascal-shell
import List;
zip3([3, 1, 4], ["thirty", "ten", "forty"]);
zip3([3, 1, 4], ["thirty", "ten", "forty"], [300, 100, 400]);
```

### zip3

**Function.**

`list[tuple[&T first, &U second, &V third]] zip3(list[&T] a, list[&U] b, list[&V] c)`

## ListRelation

**Usage.**

`import ListRelation;`

**Synopsis.**

Library functions for list relations.

**Description.**

For operators on listrelations see [ListRelation](/Rascal#Values-ListRelation) in the Rascal Language Reference.

The following functions are defined for list relations :

  - [carrier](#Libraries/Prelude/ListRelation-carrier): Return the list of all elements in any tuple in a list relation.

  - [carrier](#Libraries/Prelude/ListRelation-carrier):

  - [carrier](#Libraries/Prelude/ListRelation-carrier):

  - [carrier](#Libraries/Prelude/ListRelation-carrier):

  - [carrierR](#Libraries/Prelude/ListRelation-carrierR): A list relation restricted to certain element values in
    tuples.

  - [carrierR](#Libraries/Prelude/ListRelation-carrierR):

  - [carrierR](#Libraries/Prelude/ListRelation-carrierR):

  - [carrierR](#Libraries/Prelude/ListRelation-carrierR):

  - [carrierX](#Libraries/Prelude/ListRelation-carrierX): A list relation excluding tuples containing certain values.

  - [carrierX](#Libraries/Prelude/ListRelation-carrierX):

  - [carrierX](#Libraries/Prelude/ListRelation-carrierX):

  - [carrierX](#Libraries/Prelude/ListRelation-carrierX):

  - [complement](#Libraries/Prelude/ListRelation-complement): Complement of a list relation.

  - [complement](#Libraries/Prelude/ListRelation-complement):

  - [complement](#Libraries/Prelude/ListRelation-complement):

  - [complement](#Libraries/Prelude/ListRelation-complement):

  - [domain](#Libraries/Prelude/ListRelation-domain): Domain of a list relation: a list consisting of the first element
    of each tuple, uniquely.

  - [domain](#Libraries/Prelude/ListRelation-domain):

  - [domain](#Libraries/Prelude/ListRelation-domain):

  - [domain](#Libraries/Prelude/ListRelation-domain):

  - [domainR](#Libraries/Prelude/ListRelation-domainR): List relation restricted to certain domain elements.

  - [domainR](#Libraries/Prelude/ListRelation-domainR):

  - [domainR](#Libraries/Prelude/ListRelation-domainR):

  - [domainR](#Libraries/Prelude/ListRelation-domainR):

  - [domainR](#Libraries/Prelude/ListRelation-domainR):

  - [domainR](#Libraries/Prelude/ListRelation-domainR):

  - [domainR](#Libraries/Prelude/ListRelation-domainR):

  - [domainR](#Libraries/Prelude/ListRelation-domainR):

  - [domainX](#Libraries/Prelude/ListRelation-domainX): List relation excluding certain domain values.

  - [domainX](#Libraries/Prelude/ListRelation-domainX):

  - [domainX](#Libraries/Prelude/ListRelation-domainX):

  - [domainX](#Libraries/Prelude/ListRelation-domainX):

  - [groupDomainByRange](#Libraries/Prelude/ListRelation-groupDomainByRange): Make sets of elements in the domain that
    relate to the same element in the range.

  - [groupRangeByDomain](#Libraries/Prelude/ListRelation-groupRangeByDomain): Make sets of elements in the range that
    relate to the same element in the domain.

  - [ident](#Libraries/Prelude/ListRelation-ident): The identity list relation.

  - [invert](#Libraries/Prelude/ListRelation-invert): Invert the tuples in a list relation.

  - [invert](#Libraries/Prelude/ListRelation-invert):

  - [invert](#Libraries/Prelude/ListRelation-invert):

  - [invert](#Libraries/Prelude/ListRelation-invert):

  - [range](#Libraries/Prelude/ListRelation-range): The range is composed of all but the first element of each tuple of
    a list relation, uniquely.

  - [range](#Libraries/Prelude/ListRelation-range):

  - [range](#Libraries/Prelude/ListRelation-range):

  - [range](#Libraries/Prelude/ListRelation-range):

  - [rangeR](#Libraries/Prelude/ListRelation-rangeR): List relation restricted to certain range values.

  - [rangeR](#Libraries/Prelude/ListRelation-rangeR):

  - [rangeX](#Libraries/Prelude/ListRelation-rangeX): List relation excluding certain range values.

  - [rangeX](#Libraries/Prelude/ListRelation-rangeX):

  - [index](#Libraries/Prelude/ListRelation-index): Listes a binary list relation as a map

  - [squeeze](#Libraries/Prelude/ListRelation-squeeze):

### carrier

  - `list[&T] carrier (lrel[&T,&T] R)`

  - `list[&T] carrier (lrel[&T,&T,&T] R)`

  - `list[&T] carrier (lrel[&T,&T,&T,&T] R)`

  - `list[&T] carrier (lrel[&T,&T,&T,&T,&T] R)`

**Synopsis.**

Return the list of all elements in any tuple in a list relation.

**Examples.**

``` rascal-shell
import ListRelation;
carrier([<1,10>, <2,20>]);
carrier([<1,10,100,1000>, <2,20,200,2000>]);
```

### carrierR

  - `lrel[&T,&T] carrierR (lrel[&T,&T] R, set[&T] S)`

  - `lrel[&T,&T,&T] carrierR (lrel[&T,&T,&T] R, set[&T] S)`

  - `lrel[&T,&T,&T,&T] carrierR (lrel[&T,&T,&T,&T] R, set[&T] S)`

  - `lrel[&T,&T,&T,&T,&T] carrierR (lrel[&T,&T,&T,&T,&T] R, set[&T] S)`

**Synopsis.**

A list relation restricted to certain element values in tuples.

**Description.**

Returns list relation `R` restricted to tuples with elements in set `S`.

**Examples.**

``` rascal-shell
import ListRelation;
carrierR([<1,10>, <2,20>, <3,30>], {10, 1, 20});
```

### carrierX

  - `lrel[&T,&T] carrierX (lrel[&T,&T] R, set[&T] S)`

  - `lrel[&T,&T,&T] carrierX (lrel[&T,&T,&T] R, set[&T] S)`

  - `lrel[&T,&T,&T,&T] carrierX (lrel[&T,&T,&T,&T] R, set[&T] S)`

  - `lrel[&T,&T,&T,&T,&T] carrierX (lrel[&T,&T,&T,&T,&T] R, set[&T] S)`

**Synopsis.**

A list relation excluding tuples containing certain values.

**Description.**

Returns list relation `R` excluding tuples with some element in `S`.

**Examples.**

``` rascal-shell
import ListRelation;
carrierX([<1,10>, <2,20>, <3,30>], {10, 1, 20});
```

### complement

  - `lrel[&T0, &T1] complement(lrel[&T0, &T1] R)`

  - `lrel[&T0, &T1, &T2] complement(lrel[&T0, &T1, &T2] R)`

  - `lrel[&T0, &T1, &T2, &T3] complement(lrel[&T0, &T1, &T2, &T3] R)`

  - `lrel[&T0, &T1, &T2, &T3, &T4] complement(lrel[&T0, &T1, &T2, &T3, &T4] R)`

**Synopsis.**

Complement of a list relation.

**Description.**

Given a list relation `R` a new relation `U` can be constructed that contains all possible tuples with element values
that occur at corresponding tuple positions in `R`. The function `complement` returns the complement of `R` relative to
`U`, in other words: `U - R`.

**Examples.**

``` rascal-shell
import ListRelation;
```

Declare `R` and compute corresponding `U`:

``` rascal-shell
R = [<1,10>, <2, 20>, <3, 30>];
U = domain(R) * range(R);
```

Here is the complement of `R` computed in two ways:

``` rascal-shell
U - R;
complement([<1,10>, <2, 20>, <3, 30>]);
```

### domain

  - `list[&T0] domain(lrel[&T0,&T1] R)`

  - `list[&T0] domain(lrel[&T0,&T1,&T2] R)`

  - `list[&T0] domain(lrel[&T0,&T1,&T2,&T3] R)`

  - `list[&T0] domain(lrel[&T0,&T1,&T2,&T3,&T4] R)`

**Synopsis.**

Domain of a list relation: a list consisting of the first element of each tuple, uniquely.

**Description.**

The domain can be seen as all possible inputs of the relation image operation. The result contains elements (or tuples)
in the order of appearance of the original relation, but all occurences after the first occurrence of an element have
been removed.

**Examples.**

``` rascal-shell
import ListRelation;
domain([<1,10>, <2,20>]);
domain([<"mon", 1>, <"tue", 2>]);
```

### domainR

  - `lrel[&T0,&T1] domainR (lrel[&T0,&T1] R, set[&T0] S)`

  - `lrel[&T0,&T1,&T2] domainR (lrel[&T0,&T1,&T2] R, set[&T0] S)`

  - `lrel[&T0,&T1,&T2,&T3] domainR (lrel[&T0,&T1,&T2,&T3] R, set[&T0] S)`

  - `lrel[&T0,&T1,&T2,&T3,&T4] domainR (lrel[&T0,&T1,&T2,&T3,&T4] R, set[&T0] S)`

  - `lrel[&T0,&T1] domainR (lrel[&T0,&T1] R, list[&T0] L)`

  - `lrel[&T0,&T1,&T2] domainR (lrel[&T0,&T1,&T2] R, list[&T0] L)`

  - `lrel[&T0,&T1,&T2,&T3] domainR (lrel[&T0,&T1,&T2,&T3] R, list[&T0] L)`

  - `lrel[&T0,&T1,&T2,&T3,&T4] domainR (lrel[&T0,&T1,&T2,&T3,&T4] R, list[&T0] L)`

**Synopsis.**

List relation restricted to certain domain elements.

**Description.**

Restriction of a list relation `R` to tuples with first element in `S`.

**Examples.**

``` rascal-shell
import ListRelation;
domainR([<1,10>, <2,20>, <3,30>], {3, 1});
```

### domainX

  - `lrel[&T0,&T1] domainX (lrel[&T0,&T1] R, set[&T0] S)`

  - `lrel[&T0,&T1,&T2] domainX (lrel[&T0,&T1,&T2] R, set[&T0] S)`

  - `lrel[&T0,&T1,&T2,&T3] domainX (lrel[&T0,&T1,&T2,&T3] R, set[&T0] S)`

  - `lrel[&T0,&T1,&T2,&T3,&T4] domainX (lrel[&T0,&T1,&T2,&T3,&T4] R, set[&T0] S)`

**Synopsis.**

List relation excluding certain domain values.

**Description.**

List relation `R` excluding tuples with first element in `S`.

**Examples.**

``` rascal-shell
import ListRelation;
domainX([<1,10>, <2,20>, <3,30>], {3, 1});
```

### groupDomainByRange

**Function.**

`list[list[&U]] groupDomainByRange(lrel[&U dom, &T ran] input)`

**Synopsis.**

Make sets of elements in the domain that relate to the same element in the range.

**Examples.**

``` rascal-shell
import ListRelation;
legs = [<"bird", 2>, <"dog", 4>, <"human", 2>, <"spider", 8>, <"millepede", 1000>, <"crab", 8>, <"cat", 4>];
groupDomainByRange(legs);
```

### groupRangeByDomain

**Function.**

`list[list[&T]] groupRangeByDomain(lrel[&U dom, &T ran] input)`

**Synopsis.**

Make sets of elements in the range that relate to the same element in the domain.

**Description.**

``` rascal-shell
import ListRelation;
skins = [<"bird", "feather">, <"dog", "fur">, <"tortoise", "shell">, <"human", "skin">, <"fish", "scale">, <"lizard", "scale">, <"crab", "shell">, <"cat", "fur">];
groupRangeByDomain(skins);
```

### ident

**Function.**

`lrel[&T, &T] ident (list[&T] S)`

**Synopsis.**

The identity list relation.

**Description.**

The identity list relation for set `S`.

**Examples.**

``` rascal-shell
import ListRelation;
ident(["mon", "tue", "wed"]);
```

### invert

  - `lrel[ &T1,&T0] invert (lrel[&T0,&T1 ] R)`

  - `lrel[ &T2,&T1,&T0] invert (lrel[&T0,&T1,&T2 ] R)`

  - `lrel[ &T3,&T2,&T1,&T0] invert (lrel[&T0,&T1,&T2,&T3 ] R)`

  - `lrel[&T4,&T3,&T2,&T1,&T0] invert (lrel[&T0,&T1,&T2,&T3,&T4] R)`

**Synopsis.**

Invert the tuples in a list relation.

**Examples.**

``` rascal-shell
import ListRelation;
invert([<1,10>, <2,20>]);
```

### range

  - `list[&T1] range (lrel[&T0,&T1] R)`

  - `lrel[&T1,&T2] range (lrel[&T0,&T1, &T2] R)`

  - `lrel[&T1,&T2,&T3] range (lrel[&T0,&T1,&T2,&T3] R)`

  - `lrel[&T1,&T2,&T3,&T4] range (lrel[&T0,&T1,&T2,&T3,&T4] R)`

**Synopsis.**

The range is composed of all but the first element of each tuple of a list relation, uniquely.

**Description.**

The range can be seen as all the elements of in all possible images of the relation. The result contains elements (or
tuples) in the order of appearance of the original relation, but all occurences after the first occurrence of an element
have been removed.

**Examples.**

``` rascal-shell
import ListRelation;
range([<1,10>, <2,20>]);
range([<"mon", 1>, <"tue", 2>]);
```

### rangeR

  - `lrel[&T0,&T1] rangeR (lrel[&T0,&T1] R, set[&T1] S)`

  - `lrel[&T0,&T1] rangeR (lrel[&T0,&T1] R, list[&T1] L)`

**Synopsis.**

List relation restricted to certain range values.

**Description.**

Restriction of binary list relation `R` to tuples with second element in set `S`.

**Examples.**

``` rascal-shell
import ListRelation;
rangeR([<1,10>, <2,20>, <3,30>], {30, 10});
```

### rangeX

  - `lrel[&T0,&T1] rangeX (lrel[&T0,&T1] R, set[&T1] S)`

  - `lrel[&T0,&T1] rangeX (lrel[&T0,&T1] R, list[&T1] S)`

**Synopsis.**

List relation excluding certain range values.

**Description.**

Restriction of binary list relation `R` to tuples with second element not in set `S`.

**Examples.**

``` rascal-shell
import ListRelation;
rangeX([<1,10>, <2,20>, <3,30>], {30, 10});
```

### index

**Function.**

`map[&K, set[&V]] index(lrel[&K, &V] R)`

**Synopsis.**

Listes a binary list relation as a map

**Description.**

Converts a binary list relation to a map of the domain to a set of the range.

**Examples.**

``` rascal-shell
import ListRelation;
index([<1,10>, <2,20>, <3,30>, <30,10>]);
```

### squeeze

**Function.**

`list[&T] squeeze(list[&T] xs)`

## Location

**Usage.**

`import Location;`

**Synopsis.**

Library functions for source locations.

**Description.**

For a description of source locations see [Location](/Rascal#Values-Location) in the Rascal Language Reference.

The following functions are defined for source locations:

  - [isSameFile](#Libraries/Prelude/Location-isSameFile): Check that two locations refer to the same file

  - [isLexicallyLess](#Libraries/Prelude/Location-isLexicallyLess): Compare two location values lexicographically.

  - [getContent](#Libraries/Prelude/Location-getContent): Get the textual content a location refers to

  - [isStrictlyContainedIn](#Libraries/Prelude/Location-isStrictlyContainedIn): Is a location textually (strictly)
    contained in another location?

  - [isContainedIn](#Libraries/Prelude/Location-isContainedIn): Is a location textually contained in another location?

  - [beginsBefore](#Libraries/Prelude/Location-beginsBefore): Begins a location’s text before (but may overlap with)
    another location’s text

  - [isBefore](#Libraries/Prelude/Location-isBefore): Begins and ends a location’s text before another location’s text?

  - [isImmediatelyBefore](#Libraries/Prelude/Location-isImmediatelyBefore): Occurs a location’s text *immediately*
    before another location’s text?

  - [beginsAfter](#Libraries/Prelude/Location-beginsAfter): Begins a location’s text after (but may overlap with)
    another location’s text?

  - [isAfter](#Libraries/Prelude/Location-isAfter): Is a location’s text completely after another location’s text

  - [isImmediatelyAfter](#Libraries/Prelude/Location-isImmediatelyAfter): Is a location’s text *immediately* after
    another location’s text

  - [isOverlapping](#Libraries/Prelude/Location-isOverlapping): Refer two locations to text that overlaps

  - [cover](#Libraries/Prelude/Location-cover): Compute a location that textually covers the text of a list of
    locations.

A source location `l` refers to a text fragment in another file or resource. To ease the description we will talk about
*\`l\` 's text* instead of *the text `l` refers to*.

### isSameFile

**Function.**

`bool isSameFile(loc l, loc r)`

**Synopsis.**

Check that two locations refer to the same file.

### isLexicallyLess

**Function.**

`bool isLexicallyLess(loc l, loc r)`

**Synopsis.**

Compare two location values lexicographically.

**Description.**

When the two locations refer to different files, their paths are compared as string. When they refer to the same file,
their offsets are compared when present.

**Pittfalls.**

This ordering regards the location value itself as opposed to the text it refers to.

### getContent

**Function.**

`str getContent(loc l)`

**Synopsis.**

Get the textual content a location refers to.

### isStrictlyContainedIn

**Function.**

`bool isStrictlyContainedIn(loc inner, loc outer)`

**Synopsis.**

Is a location textually (strictly) contained in another location?

**Description.**

Strict containment between two locations `inner` and `outer` holds when

  - `outer` 's text begins before `inner` 's text, or

  - `outer` 's text ends after `inner` 's text, or

  - both.

### isContainedIn

**Function.**

`bool isContainedIn(loc inner, loc outer)`

**Synopsis.**

Is a location textually contained in another location?

**Description.**

Containment between two locations `inner` and `outer` holds when

  - `inner` and `outer` are equal, or

  - `inner` is strictly contained in `outer`.

### beginsBefore

**Function.**

`bool beginsBefore(loc l, loc r)`

**Synopsis.**

Begins a location’s text before (but may overlap with) another location’s text?

### isBefore

**Function.**

`bool isBefore(loc l, loc r)`

**Synopsis.**

Begins and ends a location’s text before another location’s text?

**Description.**

`isBefore(l, r)` holds when `l` 's text occurs textually before `r` 's text.

### isImmediatelyBefore

**Function.**

`bool isImmediatelyBefore(loc l, loc r)`

**Synopsis.**

Occurs a location’s text *immediately* before another location’s text?

**Description.**

`isImmediatelyBefore(l, r)` holds when `l` 's text occurs textually before, and is adjacent to, `r` 's text.

### beginsAfter

**Function.**

`bool beginsAfter(loc l, loc r)`

**Synopsis.**

Begins a location’s text after (but may overlap with) another location’s text?

Description `beginsAfter(l, r)` holds when `l` 's text begins after `r` 's text. No assumption is made about the end of
both texts. In other words, `l` 's text may end before or after the end of `r` 's text.

### isAfter

**Function.**

`bool isAfter(loc l, loc r)`

**Synopsis.**

Is a location’s text completely after another location’s text?

### isImmediatelyAfter

**Function.**

`bool isImmediatelyAfter(loc l, loc r)`

**Synopsis.**

Is a location’s text *immediately* after another location’s text?

### isOverlapping

**Function.**

`bool isOverlapping(loc l, loc r)`

**Synopsis.**

Refer two locations to text that overlaps?

### cover

**Function.**

`loc cover(list[loc] locs)`

**Synopsis.**

Compute a location that textually covers the text of a list of locations.

**Description.**

Create a new location that refers to the smallest text area that overlaps with the text of the given locations. The
given locations should all refer to the same file but they may be overlapping or be contained in each other.

## Map

**Usage.**

`import Map;`

**Synopsis.**

Library functions for maps.

**Description.**

For operators on maps see [Map](/Rascal#Values-Map) in the Rascal Language Reference.

The following functions are defined for maps:

  - [delete](#Libraries/Prelude/Map-delete): Delete a key from a map.

  - [domain](#Libraries/Prelude/Map-domain): Determine the domain (set of keys) of a map.

  - [domainR](#Libraries/Prelude/Map-domainR): Map restricted to certain keys.

  - [domainX](#Libraries/Prelude/Map-domainX): Map with certain keys excluded.

  - [getOneFrom](#Libraries/Prelude/Map-getOneFrom): Get a n arbitrary key from a map.

  - [invert](#Libraries/Prelude/Map-invert): Invert the (key,value) pairs in a map.

  - [invertUnique](#Libraries/Prelude/Map-invertUnique): Invert the (key,value) pairs in a map.

  - [isEmpty](#Libraries/Prelude/Map-isEmpty): Test whether a map is empty.

  - [mapper](#Libraries/Prelude/Map-mapper): Apply a function to all (key, value) pairs in a map.

  - [range](#Libraries/Prelude/Map-range): The range (set of values that correspond to its keys) of a map.

  - [rangeR](#Libraries/Prelude/Map-rangeR): Map restricted to certain values in (key,values) pairs.

  - [rangeX](#Libraries/Prelude/Map-rangeX): Map with certain values in (key,value) pairs excluded.

  - [size](#Libraries/Prelude/Map-size): Number of (key, value) pairs in a map.

  - [toList](#Libraries/Prelude/Map-toList): Convert a map to a list of tuples.

  - [toRel](#Libraries/Prelude/Map-toRel): Convert a map to a relation.

  - [toRel](#Libraries/Prelude/Map-toRel):

  - [toRel](#Libraries/Prelude/Map-toRel):

  - [toString](#Libraries/Prelude/Map-toString): Convert a map to a string.

  - [itoString](#Libraries/Prelude/Map-itoString): Convert a map to a indented string.

### delete

**Function.**

`map[&K,&V] delete(map[&K,&V] m, &K k)`

**Synopsis.**

Delete a key from a map.

**Description.**

Returns the map `m` minus the key `k`.

**Examples.**

``` rascal-shell
import Map;
delete(("apple":1,"pear":2), "apple");
```

### domain

**Function.**

`set[&K] domain(map[&K, &V] M)`

**Synopsis.**

Determine the domain (set of keys) of a map.

**Description.**

Returns the domain (set of keys) of map `M`.

**Examples.**

``` rascal-shell
import Map;
domain(("apple": 1, "pear": 2));
```

### domainR

**Function.**

`map[&K, &V] domainR(map[&K, &V] M, set[&K] S)`

**Synopsis.**

Map restricted to certain keys.

**Description.**

Return the map `M` restricted to pairs with key in `S`.

**Examples.**

``` rascal-shell
import Map;
domainR(("apple": 1, "pear": 2, "orange": 3), {"apple", "pear"});
```

### domainX

**Function.**

`map[&K, &V] domainX(map[&K, &V] M, set[&K] S)`

**Synopsis.**

Map with certain keys excluded.

**Description.**

Return the map `M` restricted to pairs with key not in `S`.

**Examples.**

``` rascal-shell
import Map;
domainX(("apple": 1, "pear": 2, "orange": 3), {"apple", "pear"});
```

### getOneFrom

**Function.**

`&K getOneFrom(map[&K, &V] M)`

**Synopsis.**

Get a n arbitrary key from a map.

**Description.**

Returns an arbitrary key of map `M`.

**Examples.**

``` rascal-shell
import Map;
getOneFrom(("apple": 1, "pear": 2, "pineapple": 3));
getOneFrom(("apple": 1, "pear": 2, "pineapple": 3));
getOneFrom(("apple": 1, "pear": 2, "pineapple": 3));
```

### invert

**Function.**

`map[&V, set[&K]] invert(map[&K, &V] M)`

**Synopsis.**

Invert the (key,value) pairs in a map.

**Description.**

Returns inverted map in which each value in the old map `M` is associated with a set of key values from the old map.
Also see [invertUnique](#Map-invertUnique).

**Examples.**

``` rascal-shell
import Map;
invert(("apple": 1, "pear": 2, "orange": 1));
```

### invertUnique

**Function.**

`map[&V, &K] invertUnique(map[&K, &V] M)`

**Synopsis.**

Invert the (key,value) pairs in a map.

**Description.**

Returns a map with key and value inverted; the result should be a map. If the initial map contains duplicate values, the
`MultipleKey` exception is raised since an attempt is made to create a map where more than one value would be associated
with the same key.

Also see [invert](#Map-invert) and [Exception](#Prelude-Exception).

**Examples.**

``` rascal-shell
import Map;
invertUnique(("apple": 1, "pear": 2, "orange": 3));
```

Here is an examples that generates an exception:

``` rascal-shell
invertUnique(("apple": 1, "pear": 2, "orange": 1));
```

### isEmpty

**Function.**

`bool isEmpty(map[&K, &V] M)`

**Synopsis.**

Test whether a map is empty.

**Description.**

Returns `true` if map `M` is empty, and `false` otherwise.

**Examples.**

``` rascal-shell
import Map;
isEmpty(());
isEmpty(("apple": 1, "pear": 2, "orange": 3));
```

### mapper

**Function.**

`map[&K, &V] mapper(map[&K, &V] M, &L (&K) F, &W (&V) G)`

**Synopsis.**

Apply a function to all (key, value) pairs in a map.

**Description.**

Apply the functions `F` and `G` to each key/value pair in a map and return the transformed map.

**Examples.**

``` rascal-shell
import Map;
str prefix(str s) { return "X" + s; }
int incr(int x) { return x + 1; }
mapper(("apple": 1, "pear": 2, "orange": 3), prefix, incr);
```

### range

**Function.**

`set[&V] range(map[&K, &V] M)`

**Synopsis.**

The range (set of values that correspond to its keys) of a map.

**Description.**

Returns the range (set of values) of map `M`.

**Examples.**

``` rascal-shell
import Map;
range(("apple": 1, "pear": 2));
```

### rangeR

**Function.**

`map[&K, &V] rangeR(map[&K, &V] M, set[&V] S)`

**Synopsis.**

Map restricted to certain values in (key,values) pairs.

**Description.**

Returns the map restricted to pairs with values in `S`.

**Examples.**

``` rascal-shell
import Map;
rangeR(("apple": 1, "pear": 2, "orange": 3), {2, 3});
```

### rangeX

**Function.**

`map[&K, &V] rangeX(map[&K, &V] M, set[&V] S)`

**Synopsis.**

Map with certain values in (key,value) pairs excluded.

**Description.**

Returns the map restricted to pairs with values not in `S`.

**Examples.**

``` rascal-shell
import Map;
rangeX(("apple": 1, "pear": 2, "orange": 3), {2, 3});
```

### size

**Function.**

`int size(map[&K, &V] M)`

**Synopsis.**

Number of (key, value) pairs in a map.

**Description.**

Returns the number of pairs in map `M`.

**Examples.**

``` rascal-shell
import Map;
size(("apple": 1, "pear": 2, "orange": 3));
```

### toList

**Function.**

`list[tuple[&K, &V]] toList(map[&K, &V] M)`

**Synopsis.**

Convert a map to a list of tuples.

**Examples.**

``` rascal-shell
import Map;
toList(("apple": 1, "pear": 2, "orange": 3));
```

### toRel

  - `rel[&K,&V] toRel(map[&K, set[&V]] M)`

  - `rel[&K,&V] toRel(map[&K, list[&V]] M)`

  - `default java rel[&K, &V] toRel(map[&K, &V] M)`

**Synopsis.**

Convert a map to a relation.

**Examples.**

``` rascal-shell
import Map;
toRel(("apple": 1, "pear": 2, "orange": 3));
```

### toString

**Function.**

`str toString(map[&K, &V] M)`

**Synopsis.**

Convert a map to a string.

**Examples.**

``` rascal-shell
import Map;
toString(("apple": 1, "pear": 2, "orange": 3));
```

### itoString

**Function.**

`str itoString(map[&K, &V] M)`

**Synopsis.**

Convert a map to a indented string.

**Examples.**

``` rascal-shell
import Map;
itoString(("apple": 1, "pear": 2, "orange": 3));
```

## Message

**Usage.**

`import Message;`

**Synopsis.**

A `Message` datatype that represents messages in the IDE.

**Types.**

``` rascal
data Message = error(str msg, loc at)
             | warning(str msg, loc at)
             | info(str msg, loc at);
```

**Description.**

Messages can be used to communicate information about source texts. They can be interpreted by IDEs to display type
errors and warnings, etc. `Message` s are, for instance, used as annotations of [algebraic data
type](/Rascal#Declarations-AlgebraicDataType). A very common example is to annotate parse trees with messages.

### Message

**Types.**

``` rascal
data Message
     = error(str msg, loc at)
     | error(str msg)
     | warning(str msg, loc at)
     | info(str msg, loc at)
     ;
```

**Description.**

Messages can be used to communicate information about source texts. They can be interpreted by IDE’s to display type
errors and warnings, etc.

## Node

**Usage.**

`import Node;`

**Synopsis.**

Library functions for nodes.

**Description.**

For operators on nodes see [Node](/Rascal#Values-Node) in the Rascal Language Reference.

The following functions are defined for nodes:

  - [arity](#Libraries/Prelude/Node-arity): Determine the number of children of a node.

  - [getChildren](#Libraries/Prelude/Node-getChildren): Get the children of a node.

  - [getKeywordParameters](#Libraries/Prelude/Node-getKeywordParameters): Get the keyword parameters of a node.

  - [getAnnotations](#Libraries/Prelude/Node-getAnnotations):

  - [setKeywordParameters](#Libraries/Prelude/Node-setKeywordParameters): Set the keyword parameters of a node.

  - [setAnnotations](#Libraries/Prelude/Node-setAnnotations):

  - [getName](#Libraries/Prelude/Node-getName): Determine the name of a node.

  - [makeNode](#Libraries/Prelude/Node-makeNode): Create a node given its function name and arguments.

  - [unset](#Libraries/Prelude/Node-unset): Reset a specific keyword parameter back to their default on a node

  - [delAnnotation](#Libraries/Prelude/Node-delAnnotation):

  - [unset](#Libraries/Prelude/Node-unset): Reset a set of keyword parameters back to their default on a node

  - [unset](#Libraries/Prelude/Node-unset): Reset all keyword parameters back to their default

  - [delAnnotations](#Libraries/Prelude/Node-delAnnotations):

  - [unsetRec](#Libraries/Prelude/Node-unsetRec): Recursively reset all keyword parameters of the node and its children
    back to their default

  - [delAnnotationsRec](#Libraries/Prelude/Node-delAnnotationsRec):

  - [unsetRec](#Libraries/Prelude/Node-unsetRec): Recursively reset a specific keyword parameter of the node and its
    children back to its default

  - [unsetRec](#Libraries/Prelude/Node-unsetRec): Recursively reset a selected set of keyword parameters of the node and
    its children back to their default

  - [arbNode](#Libraries/Prelude/Node-arbNode):

  - [toString](#Libraries/Prelude/Node-toString): Convert a node to a string.

  - [itoString](#Libraries/Prelude/Node-itoString): Convert a node to an indented string.

### arity

**Function.**

`int arity(node T)`

**Synopsis.**

Determine the number of children of a node.

**Examples.**

``` rascal-shell
import Node;
arity("f"(10, "abc"));
arity("f"(10, "abc", false));
```

### getChildren

**Function.**

`list[value] getChildren(node T)`

**Synopsis.**

Get the children of a node.

**Examples.**

``` rascal-shell
import Node;
getChildren("f"(10, "abc"));
```

### getKeywordParameters

**Function.**

`map[str,value] getKeywordParameters(node T)`

**Synopsis.**

Get the keyword parameters of a node.

**Examples.**

``` rascal-shell
import Node;
getKeywordParameters("f"(10, "abc", height=0));
```

### getAnnotations

**Function.**

`map[str, value] getAnnotations(node T)`

### setKeywordParameters

**Function.**

`&T <: node setKeywordParameters(&T <: node x, map[str,value] keywordParameters)`

**Synopsis.**

Set the keyword parameters of a node.

**Examples.**

``` rascal-shell
import Node;
setKeywordParameters("f"(10, "abc"), ("height":0));
```

### setAnnotations

**Function.**

`&T <: node setAnnotations(&T <: node x, map[str,value] keywordParameters)`

### getName

**Function.**

`str getName(node T)`

**Synopsis.**

Determine the name of a node.

**Examples.**

``` rascal-shell
import Node;
getName("f"(10, "abc"));
```

### makeNode

**Function.**

`node makeNode(str N, value V…​, map[str, value] keywordParameters = ())`

**Synopsis.**

Create a node given its function name and arguments.

**Examples.**

``` rascal-shell
import Node;
makeNode("f", [10, "abc"]);
```

### unset

**Function.**

`&T <: node unset(&T <: node x, str keywordParameter)`

**Synopsis.**

Reset a specific keyword parameter back to their default on a node.

### delAnnotation

**Function.**

`&T <: node delAnnotation(&T <: node x, str keywordParameter)`

### unset

  - `&T <: node unset(&T <: node x, set[str] keywordParameters)`

  - `&T <: node unset(&T <: node x)`

**Synopsis.**

Reset a set of keyword parameters back to their default on a node.

### delAnnotations

**Function.**

`&T <: node delAnnotations(&T <: node x)`

### unsetRec

**Function.**

`&T unsetRec(&T x)`

**Synopsis.**

Recursively reset all keyword parameters of the node and its children back to their default.

### delAnnotationsRec

**Function.**

`&T delAnnotationsRec(&T x)`

### unsetRec

  - `&T unsetRec(&T x, str keywordParameter)`

  - `&T <: node unsetRec(&T <: node x, set[str] keywordParameters)`

**Synopsis.**

Recursively reset a specific keyword parameter of the node and its children back to its default.

### arbNode

**Function.**

`node arbNode()`

### toString

**Function.**

`str toString(node T)`

**Synopsis.**

Convert a node to a string.

**Examples.**

``` rascal-shell
import Node;
F = "f"(10, "abc", color="red", size="large");
toString(F);
```

### itoString

**Function.**

`str itoString(node T)`

**Synopsis.**

Convert a node to an indented string.

**Examples.**

``` rascal-shell
import Node;
F = "f"(10, "abc", color="red", size="large");
itoString(F);
```

## ParseTree

**Usage.**

`import ParseTree;`

**Synopsis.**

Library functions for parse trees.

**Description.**

A *concrete syntax tree* or [parse tree](http://en.wikipedia.org/wiki/Parse_tree) is an ordered, rooted tree that
represents the syntactic structure of a string according to some formal grammar.

Most Rascal users will encounter parse trees in the form of concrete values. Expert users may find the detailed
description here useful when writing generic functions on parse trees.

In Rascal parse trees, the interior nodes are labeled by rules of the grammar, while the leaf nodes are labeled by
terminals (characters) of the grammar.

`Tree` is the universal parse tree data type in Rascal and can be used to represent parse trees for any language.

  - `Tree` is a subtype of the type [node](/Rascal#Values-Node).

  - All types (non-terminals) declared in [syntax definitions](/Rascal#Declarations-SyntaxDefinition) are sub-types of
    `Tree`.

  - All [concrete syntax expressions](/Rascal#Expressions-ConcreteSyntax) produce parse trees with a type corresponding
    to a non-terminals.

  - Trees can be annotated in various ways, see features for [IDE construction](/Rascal#Concepts-IDEConstruction). Most
    importantly the `\loc` annotation always points to the source location of any (sub) parse tree.

Parse trees are usually analyzed and constructed using [concrete syntax expressions](/Rascal#Expressions-ConcreteSyntax)
and [concrete syntax patterns](/Rascal#Patterns-Concrete).

*Advanced users* may want to create tools that analyze any parse tree, regardless of the [syntax
definition](/Rascal#Declarations-SyntaxDefinition) that generated it, you can manipulate them on the abstract level.

A parse tree is of type [Tree](#ParseTree-Tree) using the auxiliary types [Production](#ParseTree-Production),
[Symbol](#ParseTree-Symbol), [Condition](#ParseTree-Condition), [Attr](#ParseTree-Attr),
[Associativity](#ParseTree-Associativity), [CharRange](#ParseTree-CharRange). Effectively, a parse tree is a nested tree
structure of type `Tree`.

  - Most internal nodes are applications (`appl`) of a `Production` to a list of children `Tree` nodes. `Production` is
    the abstract representation of a rule in a [syntax definition](/Rascal#Declarations-SyntaxDefinition), which
    consists of a definition of an alternative for a `Symbol` by a list of `Symbols`.

  - The leaves of a parse tree are always characters (`char`), which have an integer index in the UTF8 table.

  - Some internal nodes encode ambiguity (`amb`) by pointing to a set of alternative `Tree` nodes.

The `Production` and `Symbol` types are an abstract notation for rules in [syntax
definitions](/Rascal#Declarations-SyntaxDefinition), while the `Tree` type is the actual notation for parse trees.

Parse trees are called parse forests when they contain `amb` nodes.

You can analyze and manipulate parse trees in three ways:

  - Directly on the `Tree` level, just like any other [algebraic data type](/Rascal#Declarations-AlgebraicDataType).

  - Using [concrete syntax expressions](/Rascal#Expressions-ConcreteSyntax) and [concrete syntax
    patterns](/Rascal#Patterns-Concrete).

  - Using [actions](/Rascal#SynyaxDefinition-Action).

The type of a parse tree is the symbol that it’s production produces, i.e. `appl(prod(sort("A"),[],{}),[])` has type
`A`. Ambiguity nodes Each such a non-terminal type has `Tree` as its immediate super-type.

**Examples.**

``` rascal-shell
import ParseTree;
syntax A = "a";
// will make the following succeed:
parse(#A,"a") ==
appl(
  prod(
    sort("A"),
    [lit("a")],
    {}),
  [appl(
      prod(
        lit("a"),
        [\char-class([range(97,97)])],
        {}),
      [char(97)])]);
```

You see that the defined non-terminal A ends up as the production for the outermost node. As the only child is the tree
for recognizing the literal a, which is defined to be a single a from the character-class `[ a ]`.

When we use labels in the definitions, they also end up in the trees. The following definition

``` rascal-shell
import ParseTree;
lexical B= myB:"b";
lexical C = myC:"c" B bLabel;
// Will make the following succeed:
parse(#C,"cb") ==
appl(
  prod(
    label(
      "myC",
      lex("C")),
    [
      lit("c"),
      label(
        "bLabel",
        lex("B"))
    ],
    {}),
  [appl(
      prod(
        lit("c"),
        [\char-class([range(99,99)])],
        {}),
      [char(99)]),appl(
      prod(
        label(
          "myB",
          lex("B")),
        [lit("b")],
        {}),
      [appl(
          prod(
            lit("b"),
            [\char-class([range(98,98)])],
            {}),
          [char(98)])])]);
```

Here you see that the alternative name is a label around the first argument of `prod` while argument labels become
labels in the list of children of a `prod`.

**Pitfalls.**

For historical reasons the name of the annotation is "loc" and this interferes with the Rascal keyword `loc` for the
type of [source locations](/Rascal#Values-Location). Therefore the annotation name has to be escaped as `\loc` when it
is declared or used.

The following functions and data types are declared for ParseTrees:

### Tree

**Types.**

``` rascal
data Tree
     = appl(Production prod, list[Tree] args)
     | cycle(Symbol symbol, int cycleLength)
     | amb(set[Tree] alternatives)
     | char(int character)
     ;
```

**Synopsis.**

The Tree data type as produced by the parser.

**Description.**

A `Tree` defines the trees normally found after parsing; additional constructors exist for execptional cases:

  - Parse tree constructor when parse succeeded.

  - Cyclic parsetree.

  - Ambiguous subtree.

  - A single character.

### Production

**Types.**

``` rascal
data Production
     = prod(Symbol def, list[Symbol] symbols, set[Attr] attributes)
     | regular(Symbol def)
     ;
```

**Synopsis.**

Production in ParseTrees

**Description.**

The type `Production` is introduced in [Type](#Prelude-Type), see [Production](#Type-Production). Here we extend it with
the symbols that can occur in a ParseTree. We also extend productions with basic combinators allowing to construct
ordered and un-ordered compositions, and associativity groups.

  - A `prod` is a rule of a grammar, with a defined non-terminal, a list of terminal and/or non-terminal symbols and a
    possibly empty set of attributes.

  - A `regular` is a regular expression, i.e. a repeated construct.

  - `priority` means operator precedence, where the order of the list indicates the binding strength of each rule;

  - `assoc` means all alternatives are acceptable, but nested on the declared side;

  - `reference` means a reference to another production rule which should be substituted there, for extending priority
    chains and such.

### Production

**Types.**

``` rascal
data Production
     = \priority(Symbol def, list[Production] choices)
     | \associativity(Symbol def, Associativity \assoc, set[Production] alternatives)
     | \reference(Symbol def, str cons)
     ;
```

### Attr

**Types.**

``` rascal
data Attr
     = \bracket()
     | \assoc(Associativity \assoc)
     ;
```

**Synopsis.**

Attributes in productions.

**Description.**

An `Attr` (attribute) documents additional semantics of a production rule. Neither tags nor brackets are processed by
the parser generator. Rather downstream processors are activated by these. Associativity is a parser generator feature
though.

### Associativity

**Types.**

``` rascal
data Associativity
     = \left()
     | \right()
     | \assoc()
     | \non-assoc()
     ;
```

**Synopsis.**

Associativity attribute.

**Description.**

Associativity defines the various kinds of associativity of a specific production.

### CharRange

**Types.**

``` rascal
data CharRange
     = range(int begin, int end)
     ;
```

**Synopsis.**

Character ranges and character class .Description

  - `CharRange` defines a range of characters.

  - A `CharClass` consists of a list of characters ranges.

### CharClass

**Types.**

`list[CharRange]`

### Symbol

**Types.**

``` rascal
data Symbol
     = \start(Symbol symbol)
     ;
```

**Synopsis.**

Symbols that can occur in a ParseTree

**Description.**

The type `Symbol` is introduced in [Type](#Prelude-Type), see [Symbol](#Type-Symbol), to represent the basic Rascal
types, e.g., `int`, `list`, and `rel`. Here we extend it with the symbols that may occur in a ParseTree.

  - The `start` symbol wraps any symbol to indicate that it is a start symbol of the grammar and may occur at the root
    of a parse tree.

  - Context-free non-terminal

  - Lexical non-terminal

  - Layout symbols

  - Terminal symbols that are keywords

  - Parameterized context-free non-terminal

  - Parameterized lexical non-terminal

  - Terminal.

  - Case-insensitive terminal.

  - Character class

  - Empty symbol

  - Optional symbol

  - List of one or more symbols without separators

  - List of zero or more symbols without separators

  - List of one or more symbols with separators

  - List of zero or more symbols with separators

  - Alternative of symbols

  - Sequence of symbols

  - Conditional occurrence of a symbol.

### Symbol

**Types.**

``` rascal
data Symbol
     = \sort(str name)
     | \lex(str name)
     | \layouts(str name)
     | \keywords(str name)
     | \parameterized-sort(str name, list[Symbol] parameters)
     | \parameterized-lex(str name, list[Symbol] parameters)
     ;
```

### Symbol

**Types.**

``` rascal
data Symbol
     = \lit(str string)
     | \cilit(str string)
     | \char-class(list[CharRange] ranges)
     ;
```

### Symbol

**Types.**

``` rascal
data Symbol
     = \empty()
     | \opt(Symbol symbol)
     | \iter(Symbol symbol)
     | \iter-star(Symbol symbol)
     | \iter-seps(Symbol symbol, list[Symbol] separators)
     | \iter-star-seps(Symbol symbol, list[Symbol] separators)
     | \alt(set[Symbol] alternatives)
     | \seq(list[Symbol] symbols)
     ;
```

### Symbol

**Types.**

``` rascal
data Symbol
     = \conditional(Symbol symbol, set[Condition] conditions)
     ;
```

### subtype

**Function.**

`bool subtype(Symbol::\sort(_), Symbol::\adt("Tree", _))`

### Condition

**Types.**

``` rascal
data Condition
     = \follow(Symbol symbol)
     | \not-follow(Symbol symbol)
     | \precede(Symbol symbol)
     | \not-precede(Symbol symbol)
     | \delete(Symbol symbol)
     | \at-column(int column)
     | \begin-of-line()
     | \end-of-line()
     | \except(str label)
     ;
```

**Synopsis.**

Datatype for declaring preconditions and postconditions on symbols

**Description.**

A `Condition` can be attached to a symbol; it restricts the applicability of that symbol while parsing input text. For
instance, `follow` requires that it is followed by another symbol and `at-column` requires that it occurs at a certain
position in the current line of the input text.

### priority

**Function.**

`Production priority(Symbol s, [*Production a, priority(Symbol _, list[Production] b), *Production c])`

**Synopsis.**

Nested priority is flattened.

### associativity

  - `Production associativity(Symbol s, Associativity as, {*Production a, choice(Symbol t, set[Production] b)})`

  - `Production associativity(Symbol rhs, Associativity a, {associativity(rhs, Associativity b, set[Production] alts),
    *Production rest})`

  - `Production associativity(Symbol s, Associativity as, {*Production a, priority(Symbol t, list[Production] b)})`

  - `Production associativity(Symbol rhs, Associativity a, set[Production] rest)`

**Synopsis.**

Normalization of associativity.

  - Choice (see the `choice` constructor in [???](#Type-ParseTree)) under associativity is flattened.

  - Nested (equal) associativity is flattened.

  - Priority under an associativity group defaults to choice.

### parse

  - `&T<:Tree parse(type[&T<:Tree] begin, str input, bool allowAmbiguity=false, bool hasSideEffects=false,
    set[Tree(Tree)] filters={})`

  - `&T<:Tree parse(type[&T<:Tree] begin, str input, loc origin, bool allowAmbiguity=false, bool hasSideEffects=false,
    set[Tree(Tree)] filters={})`

  - `&T<:Tree parse(type[&T<:Tree] begin, loc input, bool allowAmbiguity=false, bool hasSideEffects=false,
    set[Tree(Tree)] filters={})`

**Synopsis.**

Parse input text (from a string or a location) and return a parse tree.

  - Parse a string and return a parse tree.

  - Parse a string and return a parse tree, `origin` defines the original location of the input.

  - Parse the contents of resource input and return a parse tree.

The parse either throws ParseError exceptions or returns parse trees of type `Tree`. See .

The `allowAmbiguity` flag dictates the behavior of the parser in the case of ambiguity. When `allowAmbiguity=true` the
parser will construct ambiguity clusters (local sets of parse trees where the input string is ambiguous). If it is
`false` the parser will throw an `Ambiguous` exception instead. An `Ambiguous` exception is comparable to a ParseError
exception then. The latter option terminates much faster, i.e. always in cubic time, and always linear in the size of
the intermediate parse graph, while constructing ambiguous parse forests may grow to O(n^p+1), where p is the length of
the longest production rule and n is the length of the input.

The `filters` set contains functions which may be called optionally after the parse algorithm has finished and just
before the Tree representation is built. The set of functions contain alternative functions, only on of them is
successfully applied to each node in a tree. If such a function fails to apply, the other ones are tried. There is no
fixed-point computation, so composed filters must be added to the set of filters programmatically. Post-parse filtering
is best done at this stage and not later on the Tree representation for efficiency reasons. Namely, the size of the
parse graph before Tree construction is still cubic due to "binarized" sharing of intermediate nodes, while after Tree
construction the forest may obtain a size in O(n^p+1) where n is the length of the input and p is the length of the
longest syntax rule. Filtering using the `filters` parameter, on the other hand, may very well cut the forest quickly
down to even a linear size and result in an efficient overall parsing algorithm.

The `hasSideEffects` flag is normally set to false. When the `filters` functions have side-effects to remove ambiguity,
this option must be set to `true` to ensure correct behavior. A side-effect of filter functions is typically the
construction of a symbol table and the removal (see \[\[Statements/Filter\]\]) of syntax trees which refer to undefined
symbols. In such a case `hasSideEffects` must be set to `true` for correctness' sake. If its set to `false` then the
algorithm assumes tree construction is context-free and it can memoize the results of shared intermediate graph nodes.
The tree construction algorithm is effectively always worst case polynomial in O(n^p+1) --p being the length of the
longest syntax rule-- when `hasSideEffects` is true, but may be linear when set to false. So this is quite an important
flag to consider.

**Examples.**

``` rascal-shell
import demo::lang::Exp::Concrete::NoLayout::Syntax;
import ParseTree;
```

Seeing that `parse` returns a parse tree:

``` rascal-shell
parse(#Exp, "2+3");
```

Catching a parse error:

``` rascal-shell
import IO;
try {
  Exp e = parse(#Exp, "2@3");
}
catch ParseError(loc l): {
  println("I found a parse error at line <l.begin.line>, column <l.begin.column>");
}
```

### parser

**Function.**

`&T (value input, loc origin) parser(type[&T] grammar, bool allowAmbiguity=false, bool hasSideEffects=false, bool
firstAmbiguity=false, set[Tree(Tree)] filters={})`

**Synopsis.**

Generates a parser from an input grammar.

**Description.**

This builtin function wraps the Rascal parser generator by transforming a grammar into a parsing function.

The resulting parsing function has the following overloaded signature:

  - Tree parse(str input, loc origin);

  - Tree parse(loc input, loc origin);

So the parse function reads either directly from a str or via the contents of a loc. It also takes a `origin` parameter
which leads to the prefix of the `src` fields of the resulting tree.

The parse function behaves differently depending of the given keyword parameters: \* `allowAmbiguity`: if true then no
exception is thrown in case of ambiguity and a parse forest is returned. if false, \* the parser throws an exception
during tree building and produces only the first ambiguous subtree in its message. \* if set to `false`, the parse
constructs trees in linear time. if set to `true` the parser constructs trees in polynomial time. \* \*
`hasSideEffects`: if false then the parser is a lot faster when constructing trees, since it does not execute the parse
*actions* in an \* interpreted environment to make side effects (like a symbol table) and it can share more intermediate
results as a result. \* \* `firstAmbiguity`: if true, then the parser returns the subforest for the first (left-most
innermost) ambiguity instead of a parse tree for \* the entire input string. This is for grammar debugging purposes a
much faster solution then waiting for an entire \* parse forest to be constructed in polynomial time.

### parsers

**Function.**

`&U (type[&U] nonterminal, value input, loc origin) parsers(type[&T] grammar, bool allowAmbiguity=false, bool
hasSideEffects=false, bool firstAmbiguity=false, set[Tree(Tree)] filters={})`

**Synopsis.**

Generates parsers from a grammar (reified type), where all non-terminals in the grammar can be used as start-symbol.

**Description.**

This parser generator behaves the same as the `parser` function, but it produces parser functions which have an
additional nonterminal parameter. This can be used to select a specific non-terminal from the grammar to use as
start-symbol for parsing.

### firstAmbiguity

  - `Tree firstAmbiguity(type[&T<:Tree] begin, str input)`

  - `Tree firstAmbiguity(type[&T<:Tree] begin, loc input)`

**Description.**

This function is similar to the function in its functionality. However, in case of serious ambiguity parse could be very
slow. This function is much faster, because it does not try to construct an entire forest and thus avoids the cost of
constructing nested ambiguity clusters.

If the input sentence is not ambiguous after all, simply the entire tree is returned.

### unparse

**Function.**

`str unparse(Tree tree)`

**Synopsis.**

Yield the string of characters that form the leafs of the given parse tree.

**Description.**

`unparse` is the inverse function of [parse](#ParseTree-parse), i.e., for every syntactically correct string *TXT* of
type `S`, the following holds:

``` rascal
unparse(parse(#S, TXT)) == TXT
```

**Examples.**

``` rascal-shell
import demo::lang::Exp::Concrete::NoLayout::Syntax;
import ParseTree;
```

First parse an expression, this results in a parse tree. Then unparse this parse tree:

``` rascal-shell
unparse(parse(#Exp, "2+3"));
```

### printSymbol

**Function.**

`str printSymbol(Symbol sym, bool withLayout)`

### implode

**Function.**

`&T<:value implode(type[&T<:value] t, Tree tree)`

**Synopsis.**

Implode a parse tree according to a given (ADT) type.

**Description.**

Given a grammar for a language, its sentences can be parsed and the result is a parse tree (or more precisely a value of
type `Tree`). For many applications this is sufficient and the results are achieved by traversing and matching them
using concrete patterns.

In other cases, the further processing of parse trees is better done in a more abstract form. The [abstract
syntax](http://en.wikipedia.org/wiki/Abstract_syntax) for a language is a data type that is used to represent programs
in the language in an *abstract* form. Abstract syntax has the following properties:

  - It is "abstract" in the sense that it does not contain textual details such as parentheses, layout, and the like.

  - While a language has one grammar (also known as, *concrete syntax*) it may have several abstract syntaxes for
    different purposes: type analysis, code generation, etc.

The function `implode` bridges the gap between parse tree and abstract syntax tree. Given a parse tree and a Rascal type
it traverses them simultaneously and constructs an abstract syntax tree (a value of the given type) as follows:

  - Literals, layout and empty (i.e. ()) nodes are skipped.

  - Regular \*/+ lists are imploded to \`list\`s or \`set\`s depending on what is expected in the ADT.

  - Ambiguities are imploded to \`set\`s.

  - If the expected type is `str` the tree is unparsed into a string. This happens for both lexical and context-free
    parse trees.

  - If a tree’s production has no label and a single AST (i.e. non-layout, non-literal) argument (for instance, an
    injection), the tree node is skipped, and implosion continues with the lone argument. The same applies to bracket
    productions, even if they are labeled.

  - If a tree’s production has no label, but more than one argument, the tree is imploded to a tuple (provided this
    conforms to the ADT).

  - Optionals are imploded to booleans if this is expected in the ADT. This also works for optional literals, as shown
    in the example below.

  - An optional is imploded to a list with zero or one argument, iff a list type is expected.

  - If the argument of an optional tree has a production with no label, containing a single list, then this list is
    spliced into the optional list.

  - For trees with (cons-)labeled productions, the corresponding constructor in the ADT corresponding to the
    non-terminal of the production is found in order to make the AST.

  - If the provided type is `node`, (cons-)labeled trees will be imploded to untyped \`node\`s. This means that any
    subtrees below it will be untyped nodes (if there is a label), tuples of nodes (if a label is absent), and strings
    for lexicals.

  - Unlabeled lexicals are imploded to str, int, real, bool depending on the expected type in the ADT. To implode
    lexical into types other than str, the PDB parse functions for integers and doubles are used. Boolean lexicals
    should match "true" or "false". NB: lexicals are imploded this way, even if they are ambiguous.

  - If a lexical tree has a cons label, the tree imploded to a constructor with that name and a single string-valued
    argument containing the tree’s yield.

An `IllegalArgument` exception is thrown if during implosion a tree is encountered that cannot be imploded to the
expected type in the ADT. As explained above, this function assumes that the ADT type names correspond to syntax
non-terminal names, and constructor names correspond to production labels. Labels of production arguments do not have to
match with labels in ADT constructors.

Finally, source location fields are propagated as keyword fields on constructor ASTs. To access them, the user is
required to explicitly declare a keyword field on all ADTs used in implosion. In other words, for every ADT type `T`,
add:

``` rascal
data T(loc location=|unknown);
```

**Examples.**

Here are some examples for the above rules.

**Example for rule 5.**

Given the grammar

``` rascal
syntax IDTYPE = Id ":" Type;
syntax Decls = decls: "declare" {IDTYPE ","}* ";";
```

`Decls` will be imploded as:

``` rascal
data Decls = decls(list[tuple[str,Type]]);
```

(assuming Id is a lexical non-terminal).

**Example for rule 6.**

Given the grammar

``` rascal
syntax Formal = formal: "VAR"? {Id ","}+ ":" Type;
```

The corresponding ADT could be:

``` rascal
data Formal = formal(bool, list[str], Type);
```

**Example for rule 8.**

Given the grammar

``` rascal
syntax Tag = "[" {Modifier ","}* "]";
syntax Decl = decl: Tag? Signature Body;
```

In this case, a `Decl` is imploded into the following ADT:

``` rascal
data Decl = decl(list[Modifier], Signature, Body);
```

**Example for rule 9.**

Given the grammar

``` rascal
syntax Exp = left add: Exp "+" Exp;
```

Can be imploded into:

``` rascal
data Exp = add(Exp, Exp);
```

### TreeSearchResult

**Types.**

``` rascal
data TreeSearchResult[&T<:Tree]
     = treeFound(&T tree)
     | treeNotFound()
     ;
```

**Synopsis.**

Tree search result type for [treeAt](#ParseTree-treeAt).

### treeAt

  - `TreeSearchResult[&T<:Tree] treeAt(type[&T<:Tree] t, loc l, Tree a:appl(_, _))`

  - `default TreeSearchResult[&T<:Tree] treeAt(type[&T<:Tree] t, loc l, Tree root)`

**Synopsis.**

Select the innermost Tree of a given type which is enclosed by a given location.

### sameType

  - `bool sameType(label(_,Symbol s),Symbol t)`

  - `bool sameType(Symbol s,label(_,Symbol t))`

  - `bool sameType(Symbol s,conditional(Symbol t,_))`

  - `bool sameType(conditional(Symbol s,_), Symbol t)`

  - `bool sameType(Symbol s, s)`

  - `default bool sameType(Symbol s, Symbol t)`

### isNonTerminalType

  - `bool isNonTerminalType(Symbol::\sort(str _))`

  - `bool isNonTerminalType(Symbol::\lex(str _))`

  - `bool isNonTerminalType(Symbol::\layouts(str _))`

  - `bool isNonTerminalType(Symbol::\keywords(str _))`

  - `bool isNonTerminalType(Symbol::\parameterized-sort(str _, list[Symbol] _))`

  - `bool isNonTerminalType(Symbol::\parameterized-lex(str _, list[Symbol] _))`

  - `bool isNonTerminalType(Symbol::\start(Symbol s))`

  - `default bool isNonTerminalType(Symbol s)`

**Synopsis.**

Determine if the given type is a non-terminal type.

## Relation

**Usage.**

`import Relation;`

**Synopsis.**

Library functions for relations.

**Description.**

For operators on relations see [Relation](/Rascal#Values-Relation) in the Rascal Language Reference.

The following functions are defined for relations:

  - [carrier](#Libraries/Prelude/Relation-carrier): Return the set of all elements in any tuple in a relation.

  - [carrier](#Libraries/Prelude/Relation-carrier):

  - [carrier](#Libraries/Prelude/Relation-carrier):

  - [carrier](#Libraries/Prelude/Relation-carrier):

  - [carrierR](#Libraries/Prelude/Relation-carrierR): A relation restricted to certain element values in tuples.

  - [carrierR](#Libraries/Prelude/Relation-carrierR):

  - [carrierR](#Libraries/Prelude/Relation-carrierR):

  - [carrierR](#Libraries/Prelude/Relation-carrierR):

  - [carrierX](#Libraries/Prelude/Relation-carrierX): A relation excluded tuples containing certain values.

  - [carrierX](#Libraries/Prelude/Relation-carrierX):

  - [carrierX](#Libraries/Prelude/Relation-carrierX):

  - [carrierX](#Libraries/Prelude/Relation-carrierX):

  - [complement](#Libraries/Prelude/Relation-complement): Complement of a relation.

  - [complement](#Libraries/Prelude/Relation-complement):

  - [complement](#Libraries/Prelude/Relation-complement):

  - [complement](#Libraries/Prelude/Relation-complement):

  - [domain](#Libraries/Prelude/Relation-domain): Domain of a relation: a set consisting of the first element of each
    tuple.

  - [domain](#Libraries/Prelude/Relation-domain):

  - [domain](#Libraries/Prelude/Relation-domain):

  - [domain](#Libraries/Prelude/Relation-domain):

  - [domainR](#Libraries/Prelude/Relation-domainR): Relation restricted to certain domain elements.

  - [domainR](#Libraries/Prelude/Relation-domainR):

  - [domainR](#Libraries/Prelude/Relation-domainR):

  - [domainR](#Libraries/Prelude/Relation-domainR):

  - [domainX](#Libraries/Prelude/Relation-domainX): Relation excluding certain domain values.

  - [domainX](#Libraries/Prelude/Relation-domainX):

  - [domainX](#Libraries/Prelude/Relation-domainX):

  - [domainX](#Libraries/Prelude/Relation-domainX):

  - [groupDomainByRange](#Libraries/Prelude/Relation-groupDomainByRange): Make sets of elements in the domain that
    relate to the same element in the range.

  - [groupRangeByDomain](#Libraries/Prelude/Relation-groupRangeByDomain): Make sets of elements in the range that relate
    to the same element in the domain.

  - [ident](#Libraries/Prelude/Relation-ident): The identity relation.

  - [invert](#Libraries/Prelude/Relation-invert): Invert the tuples in a relation.

  - [invert](#Libraries/Prelude/Relation-invert):

  - [invert](#Libraries/Prelude/Relation-invert):

  - [invert](#Libraries/Prelude/Relation-invert):

  - [range](#Libraries/Prelude/Relation-range): The range (i.e., all but the first element of each tuple) of a relation.

  - [range](#Libraries/Prelude/Relation-range):

  - [range](#Libraries/Prelude/Relation-range):

  - [range](#Libraries/Prelude/Relation-range):

  - [rangeR](#Libraries/Prelude/Relation-rangeR): Relation restricted to certain range values.

  - [rangeX](#Libraries/Prelude/Relation-rangeX): Relation excluding certain range values.

  - [index](#Libraries/Prelude/Relation-index): Indexes a binary relation as a map

### carrier

  - `set[&T] carrier (rel[&T,&T] R)`

  - `set[&T] carrier (rel[&T,&T,&T] R)`

  - `set[&T] carrier (rel[&T,&T,&T,&T] R)`

  - `set[&T] carrier (rel[&T,&T,&T,&T,&T] R)`

**Synopsis.**

Return the set of all elements in any tuple in a relation.

**Examples.**

``` rascal-shell
import Relation;
carrier({<1,10>, <2,20>});
carrier({<1,10,100,1000>, <2,20,200,2000>});
```

### carrierR

  - `rel[&T,&T] carrierR (rel[&T,&T] R, set[&T] S)`

  - `rel[&T,&T,&T] carrierR (rel[&T,&T,&T] R, set[&T] S)`

  - `rel[&T,&T,&T,&T] carrierR (rel[&T,&T,&T,&T] R, set[&T] S)`

  - `rel[&T,&T,&T,&T,&T] carrierR (rel[&T,&T,&T,&T,&T] R, set[&T] S)`

**Synopsis.**

A relation restricted to certain element values in tuples.

**Description.**

Returns relation `R` restricted to tuples with elements in set `S`.

**Examples.**

``` rascal-shell
import Relation;
carrierR({<1,10>, <2,20>, <3,30>}, {10, 1, 20});
```

### carrierX

  - `rel[&T,&T] carrierX (rel[&T,&T] R, set[&T] S)`

  - `rel[&T,&T,&T] carrierX (rel[&T,&T,&T] R, set[&T] S)`

  - `rel[&T,&T,&T,&T] carrierX (rel[&T,&T,&T,&T] R, set[&T] S)`

  - `rel[&T,&T,&T,&T,&T] carrierX (rel[&T,&T,&T,&T,&T] R, set[&T] S)`

**Synopsis.**

A relation excluded tuples containing certain values.

**Description.**

Returns relation `R` excluding tuples with some element in `S`.

**Examples.**

``` rascal-shell
import Relation;
carrierX({<1,10>, <2,20>, <3,30>}, {10, 1, 20});
```

### complement

  - `rel[&T0, &T1] complement(rel[&T0, &T1] R)`

  - `rel[&T0, &T1, &T2] complement(rel[&T0, &T1, &T2] R)`

  - `rel[&T0, &T1, &T2, &T3] complement(rel[&T0, &T1, &T2, &T3] R)`

  - `rel[&T0, &T1, &T2, &T3, &T4] complement(rel[&T0, &T1, &T2, &T3, &T4] R)`

**Synopsis.**

Complement of a relation.

**Description.**

Given a relation `R` a new relation `U` can be constructed that contains all possible tuples with element values that
occur at corresponding tuple positions in `R`. The function `complement` returns the complement of `R` relative to `U`,
in other words: `U - R`.

**Examples.**

``` rascal-shell
import Relation;
```

Declare `R` and compute corresponding `U`:

``` rascal-shell
R = {<1,10>, <2, 20>, <3, 30>};
U = domain(R) * range(R);
```

Here is the complement of `R` computed in two ways:

``` rascal-shell
U - R;
complement({<1,10>, <2, 20>, <3, 30>});
```

### domain

  - `set[&T0] domain (rel[&T0,&T1] R)`

  - `set[&T0] domain (rel[&T0,&T1,&T2] R)`

  - `set[&T0] domain (rel[&T0,&T1,&T2,&T3] R)`

  - `set[&T0] domain (rel[&T0,&T1,&T2,&T3,&T4] R)`

**Synopsis.**

Domain of a relation: a set consisting of the first element of each tuple.

**Examples.**

``` rascal-shell
import Relation;
domain({<1,10>, <2,20>});
domain({<"mon", 1>, <"tue", 2>});
```

### domainR

  - `rel[&T0,&T1] domainR (rel[&T0,&T1] R, set[&T0] S)`

  - `rel[&T0,&T1,&T2] domainR (rel[&T0,&T1,&T2] R, set[&T0] S)`

  - `rel[&T0,&T1,&T2,&T3] domainR (rel[&T0,&T1,&T2,&T3] R, set[&T0] S)`

  - `rel[&T0,&T1,&T2,&T3,&T4] domainR (rel[&T0,&T1,&T2,&T3,&T4] R, set[&T0] S)`

**Synopsis.**

Relation restricted to certain domain elements.

**Description.**

Restriction of a relation `R` to tuples with first element in `S`.

**Examples.**

``` rascal-shell
import Relation;
domainR({<1,10>, <2,20>, <3,30>}, {3, 1});
```

### domainX

  - `rel[&T0,&T1] domainX (rel[&T0,&T1] R, set[&T0] S)`

  - `rel[&T0,&T1,&T2] domainX (rel[&T0,&T1,&T2] R, set[&T0] S)`

  - `rel[&T0,&T1,&T2,&T3] domainX (rel[&T0,&T1,&T2,&T3] R, set[&T0] S)`

  - `rel[&T0,&T1,&T2,&T3,&T4] domainX (rel[&T0,&T1,&T2,&T3,&T4] R, set[&T0] S)`

**Synopsis.**

Relation excluding certain domain values.

**Description.**

Relation `R` excluded tuples with first element in `S`.

**Examples.**

``` rascal-shell
import Relation;
domainX({<1,10>, <2,20>, <3,30>}, {3, 1});
```

### groupDomainByRange

**Function.**

`set[set[&U]] groupDomainByRange(rel[&U dom, &T ran] input)`

**Synopsis.**

Make sets of elements in the domain that relate to the same element in the range.

**Examples.**

``` rascal-shell
import Relation;
legs = {<"bird", 2>, <"dog", 4>, <"human", 2>, <"spider", 8>, <"millepede", 1000>, <"crab", 8>, <"cat", 4>};
groupDomainByRange(legs);
```

### groupRangeByDomain

**Function.**

`set[set[&T]] groupRangeByDomain(rel[&U dom, &T ran] input)`

**Synopsis.**

Make sets of elements in the range that relate to the same element in the domain.

**Description.**

``` rascal-shell
import Relation;
skins = {<"bird", "feather">, <"dog", "fur">, <"tortoise", "shell">, <"human", "skin">, <"fish", "scale">, <"lizard", "scale">, <"crab", "shell">, <"cat", "fur">};
groupRangeByDomain(skins);
```

### ident

**Function.**

`rel[&T, &T] ident (set[&T] S)`

**Synopsis.**

The identity relation.

**Description.**

The identity relation for set `S`.

**Examples.**

``` rascal-shell
import Relation;
ident({"mon", "tue", "wed"});
```

### invert

  - `rel[&T1, &T0] invert (rel[&T0, &T1] R)`

  - `rel[&T2, &T1, &T0] invert (rel[&T0, &T1, &T2] R)`

  - `rel[&T3, &T2, &T1, &T0] invert (rel[&T0, &T1, &T2, &T3] R)`

  - `rel[&T4, &T3, &T2, &T1, &T0] invert (rel[&T0, &T1, &T2, &T3, &T4] R)`

**Synopsis.**

Invert the tuples in a relation.

**Examples.**

``` rascal-shell
import Relation;
invert({<1,10>, <2,20>});
```

### range

  - `set[&T1] range (rel[&T0,&T1] R)`

  - `rel[&T1,&T2] range (rel[&T0,&T1, &T2] R)`

  - `rel[&T1,&T2,&T3] range (rel[&T0,&T1,&T2,&T3] R)`

  - `rel[&T1,&T2,&T3,&T4] range (rel[&T0,&T1,&T2,&T3,&T4] R)`

**Synopsis.**

The range (i.e., all but the first element of each tuple) of a relation.

**Examples.**

``` rascal-shell
import Relation;
range({<1,10>, <2,20>});
range({<"mon", 1>, <"tue", 2>});
```

### rangeR

**Function.**

`rel[&T0,&T1] rangeR (rel[&T0,&T1] R, set[&T2] S)`

**Synopsis.**

Relation restricted to certain range values.

**Description.**

Restriction of binary relation `R` to tuples with second element in set `S`.

**Examples.**

``` rascal-shell
import Relation;
rangeR({<1,10>, <2,20>, <3,30>}, {30, 10});
```

### rangeX

**Function.**

`rel[&T0,&T1] rangeX (rel[&T0,&T1] R, set[&T2] S)`

**Synopsis.**

Relation excluding certain range values.

**Description.**

Restriction of binary relation `R` to tuples with second element not in set `S`.

**Examples.**

``` rascal-shell
import Relation;
rangeX({<1,10>, <2,20>, <3,30>}, {30, 10});
```

### index

**Function.**

`map[&K, set[&V]] index(rel[&K, &V] R)`

**Synopsis.**

Indexes a binary relation as a map

**Description.**

Converts a binary relation to a map of the domain to a set of the range.

**Examples.**

``` rascal-shell
import Relation;
index({<1,10>, <2,20>, <3,30>, <30,10>});
```

## Set

**Usage.**

`import Set;`

**Synopsis.**

Library functions for sets.

**Description.**

For operators on sets see [Set](/Rascal#Values-Set) in the Rascal Language Reference.

The following functions are defined for sets:

  - [classify](#Libraries/Prelude/Set-classify): Classify elements in a set.

  - [group](#Libraries/Prelude/Set-group): Group elements in a set given an equivalence function.

  - [index](#Libraries/Prelude/Set-index): Map set elements to a fixed index.

  - [isEmpty](#Libraries/Prelude/Set-isEmpty): Test whether a set is empty.

  - [mapper](#Libraries/Prelude/Set-mapper): Apply a function to all set elements and return set of results.

  - [max](#Libraries/Prelude/Set-max): Determine the largest element of a set.

  - [min](#Libraries/Prelude/Set-min): Determine the smallest element of a set.

  - [power](#Libraries/Prelude/Set-power): Determine the powerset of a set.

  - [power1](#Libraries/Prelude/Set-power1): The powerset (excluding the empty set) of a set value.

  - [reducer](#Libraries/Prelude/Set-reducer): Apply a function to successive elements of a set and combine the results
    (*deprecated*).

  - [reducer](#Libraries/Prelude/Set-reducer):

  - [size](#Libraries/Prelude/Set-size): Determine the number of elements in a set.

  - [sum](#Libraries/Prelude/Set-sum):

  - [sum](#Libraries/Prelude/Set-sum): Sum the elements of a set.

  - [getOneFrom](#Libraries/Prelude/Set-getOneFrom): Pick an arbitrary element from a set.

  - [getFirstFrom](#Libraries/Prelude/Set-getFirstFrom): Get "first" element from a set.

  - [getFirstFrom](#Libraries/Prelude/Set-getFirstFrom):

  - [takeOneFrom](#Libraries/Prelude/Set-takeOneFrom): Remove an arbitrary element from a set, returns the element and a
    set without that element.

  - [takeFirstFrom](#Libraries/Prelude/Set-takeFirstFrom): Remove "first" element from a set, returns the element and a
    set without that element.

  - [takeFirstFrom](#Libraries/Prelude/Set-takeFirstFrom):

  - [toList](#Libraries/Prelude/Set-toList): Convert a set to a list.

  - [toMap](#Libraries/Prelude/Set-toMap): Convert a set of tuples to a map; each key is associated with a set of
    values.

  - [toMapUnique](#Libraries/Prelude/Set-toMapUnique): Convert a set of tuples to a map (provided that there are no
    multiple keys).

  - [toString](#Libraries/Prelude/Set-toString): Convert a set to a string.

  - [itoString](#Libraries/Prelude/Set-itoString): Convert a set to an indented string.

  - [sort](#Libraries/Prelude/Set-sort): Sort the elements of a set.

  - [sort](#Libraries/Prelude/Set-sort):

  - [top](#Libraries/Prelude/Set-top): .Synopsis Produce the smallest `k` elements of a set as sorted by the `less`
    function

  - [top](#Libraries/Prelude/Set-top):

  - [union](#Libraries/Prelude/Set-union): Flatten a set of sets into a single set

  - [jaccard](#Libraries/Prelude/Set-jaccard): Compute the Jaccard similarity between two sets

### classify

**Function.**

`map[&K,set[&V]] classify(set[&V] input, &K (&V) getClass)`

**Synopsis.**

Classify elements in a set.

**Examples.**

We classify animals by their number of legs.

``` rascal-shell
import Set;
```

Create a map from animals to number of legs.

``` rascal-shell
legs = ("bird": 2, "dog": 4, "human": 2, "snake": 0, "spider": 8, "millepede": 1000, "crab": 8, "cat": 4);
```

Define function `nLegs` that returns the number of legs for each animal (or `0` when the animal is unknown):

``` rascal-shell
int nLegs(str animal){
    return legs[animal] ? 0;
}
```

Now classify a set of animals:

``` rascal-shell
classify({"bird", "dog", "human", "spider", "millepede", "zebra", "crab", "cat"}, nLegs);
```

### group

**Function.**

`set[set[&T]] group(set[&T] input, bool (&T a, &T b) similar)`

**Synopsis.**

Group elements in a set given an equivalence function.

**Examples.**

We classify animals by their number of legs.

``` rascal-shell
import Set;
```

Create a map from animals to number of legs.

``` rascal-shell
legs = ("bird": 2, "dog": 4, "human": 2, "snake": 0, "spider": 8, "millepede": 1000, "crab": 8, "cat": 4);
```

Define function `nLegs` that returns the number of legs fro each animal (or `0` when the animal is unknown):

``` rascal-shell
int nLegs(str animal){
    return legs[animal] ? 0;
}
bool similar(str a, str b) = nLegs(a) == nLegs(b);
```

Now group a set of animals:

``` rascal-shell
group({"bird", "dog", "human", "spider", "millepede", "zebra", "crab", "cat"}, similar);
```

> **Warning**
> 
> check compiler.

### index

**Function.**

`map[&T,int] index(set[&T] s)`

**Synopsis.**

Map set elements to a fixed index.

**Examples.**

``` rascal-shell
import Set;
index({"elephant", "zebra", "snake"});
```

### isEmpty

**Function.**

`bool isEmpty(set[&T] st)`

**Synopsis.**

Test whether a set is empty.

**Description.**

Yields `true` if `s` is empty, and `false` otherwise.

**Examples.**

``` rascal-shell
import Set;
isEmpty({1, 2, 3});
isEmpty({});
```

### mapper

**Function.**

`set[&U] mapper(set[&T] st, &U (&T) fn)`

**Synopsis.**

Apply a function to all set elements and return set of results.

**Description.**

Return a set obtained by applying function `fn` to all elements of set `s`.

**Examples.**

``` rascal-shell
import Set;
int incr(int x) { return x + 1; }
mapper({1, 2, 3, 4}, incr);
```

### max

**Function.**

`&T max(set[&T] st)`

**Synopsis.**

Determine the largest element of a set.

**Examples.**

``` rascal-shell
import Set;
max({1, 3, 5, 2, 4});
max({"elephant", "zebra", "snake"});
```

### min

**Function.**

`&T min(set[&T] st)`

**Synopsis.**

Determine the smallest element of a set.

**Examples.**

``` rascal-shell
import Set;
min({1, 3, 5, 4, 2});
```

### power

**Function.**

`set[set[&T]] power(set[&T] st)`

**Synopsis.**

Determine the powerset of a set.

**Description.**

Returns a set with all subsets of `s`.

**Examples.**

``` rascal-shell
import Set;
power({1,2,3,4});
```

### power1

**Function.**

`set[set[&T]] power1(set[&T] st)`

**Synopsis.**

The powerset (excluding the empty set) of a set value.

**Description.**

Returns all subsets (excluding the empty set) of `s`.

**Examples.**

``` rascal-shell
import Set;
power1({1,2,3,4});
```

### reducer

  - `&T reducer(set[&T] st, &T (&T,&T) fn, &T unit)`

  - `&T reducer(set[&T] _:{})`

**Synopsis.**

Apply a function to successive elements of a set and combine the results (*deprecated*).

**Description.**

Apply the function `fn` to successive elements of set `s` starting with `unit`.

**Examples.**

``` rascal-shell
import Set;
int add(int x, int y) { return x + y; }
reducer({10, 20, 30, 40}, add, 0);
```

> **Warning**
> 
> This function is **deprecated**, use a [reducer](/Rascal#Expressions-Reducer) instead.

### size

**Function.**

`int size(set[&T] st)`

**Synopsis.**

Determine the number of elements in a set.

**Examples.**

``` rascal-shell
import Set;
size({1,2,3,4});
size({"elephant", "zebra", "snake"});
size({});
```

### sum

  - `(&T <:num) sum(set[(&T <:num)] _:{})`

  - `default (&T <:num) sum({(&T <: num) e, *(&T <: num) r})`

### getOneFrom

**Function.**

`&T getOneFrom(set[&T] st)`

**Synopsis.**

Pick an arbitrary element from a set.

**Examples.**

``` rascal-shell
import Set;
getOneFrom({"elephant", "zebra", "snake"});
getOneFrom({"elephant", "zebra", "snake"});
getOneFrom({"elephant", "zebra", "snake"});
getOneFrom({"elephant", "zebra", "snake"});
```

### getFirstFrom

  - `&T getFirstFrom({&T f, *&T _})`

  - `&T getFirstFrom(set[&T] _:{})`

**Synopsis.**

Get "first" element from a set.

**Description.**

Get "first" element of a set. Of course, sets are unordered and do not have a first element. However, we may assume that
sets are internally ordered in some way and this ordering is reproducible. Applying `getFirstFrom` on the same set will
always returns the same element.

**Benefits.**

This function helps to make set-based code more deterministic, for instance, for testing purposes.

### takeOneFrom

**Function.**

`tuple[&T, set[&T]] takeOneFrom(set[&T] st)`

**Synopsis.**

Remove an arbitrary element from a set, returns the element and a set without that element.

**Description.**

Remove an arbitrary element from set `s` and return a tuple consisting of the element and a set without that element.
Also see [getOneFrom](#Set-getOneFrom).

**Examples.**

``` rascal-shell
import Set;
takeOneFrom({1, 2, 3, 4});
takeOneFrom({1, 2, 3, 4});
takeOneFrom({1, 2, 3, 4});
```

### takeFirstFrom

  - `tuple[&T, set[&T]] takeFirstFrom({&T f, *&T r})`

  - `tuple[&T, set[&T]] takeFirstFrom(set[&T] _:{})`

**Synopsis.**

Remove "first" element from a set, returns the element and a set without that element.

**Description.**

element of a set.

### toList

**Function.**

`list[&T] toList(set[&T] st)`

**Synopsis.**

Convert a set to a list.

**Examples.**

``` rascal-shell
import Set;
toList({1, 2, 3, 4});
toList({"elephant", "zebra", "snake"});
```

Note that the same result can be obtained using splicing:

``` rascal-shell
s = {1,2,3,4};
l = [*s];
```

**Pitfalls.**

Recall that the elements of a set are unordered and that there is no guarantee in which order the set elements will be
placed in the resulting list.

### toMap

**Function.**

`map[&A,set[&B]] toMap(rel[&A, &B] st)`

**Synopsis.**

Convert a set of tuples to a map; each key is associated with a set of values.

**Description.**

Convert a set of tuples to a map in which the first element of each tuple is associated with the set of second elements
of all tuples with the same first element.

**Examples.**

``` rascal-shell
import Set;
toMap({<"a", 1>, <"b", 2>, <"a", 10>});
```

### toMapUnique

**Function.**

`map[&A,&B] toMapUnique(rel[&A, &B] st) throws MultipleKey`

**Synopsis.**

Convert a set of tuples to a map (provided that there are no multiple keys).

**Description.**

Convert a set of tuples to a map. The result should be a legal map (i.e., without multiple keys).

**Examples.**

``` rascal-shell
import Set;
toMapUnique({<"a", 1>, <"b", 2>, <"c", 10>});
```

Now explore an erroneous example:

``` rascal-shell
toMapUnique({<"a", 1>, <"b", 2>, <"a", 10>});
```

### toString

**Function.**

`str toString(set[&T] st)`

**Synopsis.**

Convert a set to a string.

**Examples.**

``` rascal-shell
import Set;
toString({1, 2, 3});
toString({"elephant", "zebra", "snake"});
```

**Pitfalls.**

Recall that the elements of a set are unordered and that there is no guarantee in which order the set elements will be
placed in the resulting string.

### itoString

**Function.**

`str itoString(set[&T] st)`

**Synopsis.**

Convert a set to an indented string.

**Examples.**

``` rascal-shell
import Set;
toString({1, 2, 3});
toString({"elephant", "zebra", "snake"});
```

**Pitfalls.**

Recall that the elements of a set are unordered and that there is no guarantee in which order the set elements will be
placed in the resulting string.

### sort

  - `list[&T] sort(set[&T] s)`

  - `list[&T] sort(set[&T] l, bool (&T a, &T b) less)`

**Synopsis.**

Sort the elements of a set.

Sort the elements of a set:

  - Use the built-in ordering on values to compare list elements.

  - Give an additional `lessThan` function that will be used to compare elements.

This function `lessThan` (\<) function should implement a strict partial order, meaning:

  - that it is not reflexive, i.e. never `a < a`

  - is anti-symmetric, i.e. never `a < b && b < a`.

  - is transitive, i.e. if `a < b` and `b < c` then `a < c`.

**Examples.**

``` rascal-shell
import Set;
import String;
sort({10, 4, -2, 11, 100, 5});
fruits = {"mango", "strawberry", "pear", "pineapple", "banana", "grape", "kiwi"};
sort(fruits);
sort(fruits, bool(str a, str b){ return size(a) > size(b); });
```

### top

  - `list[&T] top(int k, set[&T] l, bool (&T a, &T b) less)`

  - `list[&T] top(int k, set[&T] l)`

**Description.**

This function is fast if `k` is relatively small, say 10 out of a 1000 elements. It operates in O(n\*k) time where n is
the size of the set.

If `k` is a larger value, say `k > 10`, then it’s perhaps better to just sort the entire set using the asympotically
faster (n\*log^2(n)) sort function and take the first `k` elements of the resulting list.

If `k` is a negative number, `top` will return the largest `abs(k)` elements of the set instead of the smallest.

### union

**Function.**

`set[&T] union(set[set[&T]] sets)`

**Synopsis.**

Flatten a set of sets into a single set.

### jaccard

**Function.**

`real jaccard(set[value] x, set[value] y)`

**Synopsis.**

Compute the Jaccard similarity between two sets.

## String

**Usage.**

`import String;`

**Synopsis.**

Library functions for strings.

**Description.**

For operators on strings see [String](/Rascal#Values-String) in the Rascal Language Reference.

The following functions are defined for strings:

  - [center](#Libraries/Prelude/String-center): Center a string in given space.

  - [center](#Libraries/Prelude/String-center):

  - [charAt](#Libraries/Prelude/String-charAt): Return character in a string by its index position.

  - [chars](#Libraries/Prelude/String-chars): Return characters of a string.

  - [contains](#Libraries/Prelude/String-contains): Check that a string contains another string.

  - [deescape](#Libraries/Prelude/String-deescape): Replace escaped characters by the escaped character itself (using
    Rascal escape conventions)

  - [endsWith](#Libraries/Prelude/String-endsWith): Check whether a string ends with a given substring.

  - [escape](#Libraries/Prelude/String-escape): Replace single characters in a string.

  - [findAll](#Libraries/Prelude/String-findAll): Find all occurrences of a string in another string.

  - [findFirst](#Libraries/Prelude/String-findFirst): Find the first occurrence of a string in another string.

  - [findLast](#Libraries/Prelude/String-findLast): Find the last occurrence of a string in another string.

  - [isEmpty](#Libraries/Prelude/String-isEmpty): Check whether a string is empty.

  - [arbString](#Libraries/Prelude/String-arbString): Generate a arbitrary string.

  - [left](#Libraries/Prelude/String-left): Left alignment of string in given space.

  - [left](#Libraries/Prelude/String-left):

  - [replaceAll](#Libraries/Prelude/String-replaceAll): Replace all occurrences of a string in another string.

  - [replaceFirst](#Libraries/Prelude/String-replaceFirst): Replace the first occurrence of a string in another string.

  - [replaceLast](#Libraries/Prelude/String-replaceLast): Replace the last occurrence of a string in another string.

  - [reverse](#Libraries/Prelude/String-reverse): Return a string with all characters in reverse order.

  - [right](#Libraries/Prelude/String-right): Right alignment of a string value in a given space.

  - [right](#Libraries/Prelude/String-right):

  - [size](#Libraries/Prelude/String-size): Determine length of a string value.

  - [startsWith](#Libraries/Prelude/String-startsWith): Check whether a string starts with a given prefix.

  - [stringChar](#Libraries/Prelude/String-stringChar): Convert a character code into a string

  - [stringChars](#Libraries/Prelude/String-stringChars): Convert a list of character codes into a string

  - [isValidCharacter](#Libraries/Prelude/String-isValidCharacter): Check that a given integer value is a valid Unicode
    code point

  - [substring](#Libraries/Prelude/String-substring): Extract a substring from a string value.

  - [substring](#Libraries/Prelude/String-substring):

  - [toInt](#Libraries/Prelude/String-toInt): Convert a string value to integer.

  - [toInt](#Libraries/Prelude/String-toInt):

  - [toLowerCase](#Libraries/Prelude/String-toLowerCase): Convert the characters in a string value to lower case.

  - [toReal](#Libraries/Prelude/String-toReal): Convert a string value to real.

  - [toUpperCase](#Libraries/Prelude/String-toUpperCase): Convert the characters in a string value to upper case.

  - [trim](#Libraries/Prelude/String-trim): Returns string with leading and trailing whitespace removed.

  - [squeeze](#Libraries/Prelude/String-squeeze): Squeeze repeated occurrences of characters.

  - [split](#Libraries/Prelude/String-split): Split a string into a list of strings based on a literal separator

  - [capitalize](#Libraries/Prelude/String-capitalize):

  - [uncapitalize](#Libraries/Prelude/String-uncapitalize):

  - [toBase64](#Libraries/Prelude/String-toBase64):

  - [fromBase64](#Libraries/Prelude/String-fromBase64):

  - [wrap](#Libraries/Prelude/String-wrap): Word wrap a string to fit in a certain width.

  - [format](#Libraries/Prelude/String-format):

  - [rexpMatch](#Libraries/Prelude/String-rexpMatch): Determine if a string matches the given (Java-syntax) regular
    expression

  - [toLocation](#Libraries/Prelude/String-toLocation): Convert a string value to a (source code) location.

  - [substitute](#Libraries/Prelude/String-substitute): Substitute substrings in a string based on a substitution map
    from location to string.

### center

  - `str center(str s, int n)`

  - `str center(str s, int n, str pad)`

**Synopsis.**

Center a string in given space.

  - Center string `s` in string of length `n` using spaces.

  - Center string `s` in string of length `n` using `pad` as padding character.

**Examples.**

``` rascal-shell
import String;
center("abc", 10);
center("abc", 10, "x");
```

### charAt

**Function.**

`int charAt(str s, int i) throws IndexOutOfBounds`

**Synopsis.**

Return character in a string by its index position.

**Description.**

Return the character at position `i` in string `s` as integer character code. Also see [stringChar](#String-stringChar)
that converts character codes back to string.

**Examples.**

``` rascal-shell
import String;
charAt("abc", 0);
stringChar(charAt("abc", 0));
```

### chars

**Function.**

`list[int] chars(str s)`

**Synopsis.**

Return characters of a string. .Description Return a list of the characters of `s` as integer character codes. Also see
[stringChars](#String-stringChars) that converts character codes back to string.

**Examples.**

``` rascal-shell
import String;
chars("abc");
stringChars(chars("abc")) == "abc";
```

### contains

**Function.**

`bool contains(str input, str find)`

**Synopsis.**

Check that a string contains another string.

**Description.**

Check whether the string `find` occurs as substring in the string `subject`.

**Examples.**

``` rascal-shell
import String;
contains("abracadabra", "bra");
contains("abracadabra", "e");
```

### deescape

**Function.**

`str deescape(str s)`

**Synopsis.**

Replace escaped characters by the escaped character itself (using Rascal escape conventions).

### endsWith

**Function.**

`bool endsWith(str subject, str suffix)`

**Synopsis.**

Check whether a string ends with a given substring.

**Description.**

Yields `true` if string `subject` ends with the string `suffix`.

**Examples.**

``` rascal-shell
import String;
endsWith("Hello.rsc", ".rsc");
```

### escape

**Function.**

`str escape(str subject, map[str,str] mapping)`

**Synopsis.**

Replace single characters in a string.

**Description.**

Return a copy of `subject` in which each single character key in replacements has been replaced by its associated value.

**Examples.**

``` rascal-shell
import String;
import IO;
escape("abracadabra", ("a" : "AA", "c" : "C"));
L = escape("\"Good Morning\", he said", ("\"": "\\\""));
println(L);
```

### findAll

**Function.**

`list[int] findAll(str subject, str find)`

**Synopsis.**

Find all occurrences of a string in another string.

**Description.**

Find all occurrences of string `find` in string `subject`. The result is a (possible empty) list of positions where
`find` matches.

See also [findFirst](#String-findFirst) and [findLast](#String-findLast).

**Examples.**

``` rascal-shell
import String;
findAll("abracadabra", "a");
findAll("abracadabra", "bra");
findAll("abracadabra", "e");
```

### findFirst

**Function.**

`int findFirst(str subject, str find)`

**Synopsis.**

Find the first occurrence of a string in another string.

**Description.**

Find the first occurrence of string `find` in string `subject`. The result is either a position in `subject` or `-1`
when `find` is not found.

Also see [findAll](#String-findAll) and [findLast](#String-findLast).

**Examples.**

``` rascal-shell
import String;
findFirst("abracadabra", "a");
findFirst("abracadabra", "bra");
findFirst("abracadabra", "e");
```

### findLast

**Function.**

`int findLast(str subject, str find)`

**Synopsis.**

Find the last occurrence of a string in another string.

**Description.**

Find the last occurrence of string `find` in string `subject`. The result is either a position in `subject` or `-1` when
`find` is not found.

Also see [findAll](#String-findAll) and [findFirst](#String-findFirst).

**Examples.**

``` rascal-shell
import String;
findLast("abracadabra", "a");
findLast("abracadabra", "bra");
findLast("abracadabra", "e");
```

### isEmpty

**Function.**

`bool isEmpty(str s)`

**Synopsis.**

Check whether a string is empty.

**Description.**

Returns `true` if string `s` is empty.

**Examples.**

``` rascal-shell
import String;
isEmpty("");
isEmpty("abc");
```

### arbString

**Function.**

`str arbString(int n)`

**Synopsis.**

Generate a arbitrary string.

**Description.**

Returns a string of maximum `n` length, with arbitrary characters.

**Examples.**

``` rascal-shell
import String;
arbString(3);
arbString(10);
```

### left

  - `str left(str s, int n)`

  - `str left(str s, int n, str pad)`

**Synopsis.**

Left alignment of string in given space.

  - Left align string `s` in string of length `n` using spaces.

  - Left align string `s` in string of length `n` using `pad` as pad character.

**Examples.**

``` rascal-shell
import String;
left("abc", 10);
left("abc", 10, "x");
```

### replaceAll

**Function.**

`str replaceAll(str subject, str find, str replacement)`

**Synopsis.**

Replace all occurrences of a string in another string.

**Description.**

Return a copy of `subject` in which all occurrences of `find` (if any) have been replaced by `replacement`. Also see
[replaceFirst](#String-replaceFirst) and [replaceLast](#String-replaceLast).

**Examples.**

``` rascal-shell
import String;
replaceAll("abracadabra", "a", "A");
replaceAll("abracadabra", "ra", "RARA");
replaceAll("abracadabra", "cra", "CRA");
```

**Pitfalls.**

Note that `find` is a string (as opposed to, for instance, a regular expression in Java).

### replaceFirst

**Function.**

`str replaceFirst(str subject, str find, str replacement)`

**Synopsis.**

Replace the first occurrence of a string in another string.

**Description.**

Return a copy of `subject` in which the first occurrence of `find` (if it exists) has been replaced by `replacement`.
Also see [replaceAll](#String-replaceAll) and [replaceLast](#String-replaceLast).

**Examples.**

``` rascal-shell
import String;
replaceFirst("abracadabra", "a", "A");
replaceFirst("abracadabra", "ra", "RARA");
replaceFirst("abracadabra", "cra", "CRA");
```

**Pitfalls.**

Note that `find` is a string (as opposed to, for instance, a regular expression in Java).

### replaceLast

**Function.**

`str replaceLast(str subject, str find, str replacement)`

**Synopsis.**

Replace the last occurrence of a string in another string.

**Description.**

Return a copy of `subject` in which the last occurrence of `find` (if it exists) has been replaced by `replacement`.
Also see [replaceFirst](#String-replaceFirst) and [replaceLast](#String-replaceLast).

**Examples.**

``` rascal-shell
import String;
replaceLast("abracadabra", "a", "A");
replaceLast("abracadabra", "ra", "RARA");
replaceLast("abracadabra", "cra", "CRA");
```

**Pitfalls.**

Note that `find` is a string (as opposed to, for instance, a regular expression in Java).

### reverse

**Function.**

`str reverse(str s)`

**Synopsis.**

Return a string with all characters in reverse order.

**Description.**

Returns string with all characters of string `s` in reverse order.

**Examples.**

``` rascal-shell
import String;
reverse("abc");
```

### right

  - `str right(str s, int n)`

  - `str right(str s, int n, str pad)`

**Synopsis.**

Right alignment of a string value in a given space.

  - Right align string `s` in string of length `n` using spaces.

  - Right align string `s` in string of length `n` using `pad` as pad character.

**Examples.**

``` rascal-shell
import String;
right("abc", 10);
right("abc", 10, "x");
```

### size

**Function.**

`int size(str s)`

**Synopsis.**

Determine length of a string value.

**Description.**

Returns the length (number of characters) in string `s`.

**Examples.**

``` rascal-shell
import String;
size("abc");
size("");
```

### startsWith

**Function.**

`bool startsWith(str subject, str prefix)`

**Synopsis.**

Check whether a string starts with a given prefix.

**Description.**

Yields `true` if string `subject` starts with the string `prefix`.

**Examples.**

``` rascal-shell
import String;
startsWith("Hello.rsc", "Hell");
```

### stringChar

**Function.**

`str stringChar(int char) throws IllegalArgument`

**Synopsis.**

Convert a character code into a string.

### stringChars

**Function.**

`str stringChars(list[int] chars) throws IllegalArgument`

**Synopsis.**

Convert a list of character codes into a string.

### isValidCharacter

**Function.**

`bool isValidCharacter(int ch)`

**Synopsis.**

Check that a given integer value is a valid Unicode code point.

### substring

  - `str substring(str s, int begin)`

  - `str substring(str s, int begin, int end)`

**Synopsis.**

Extract a substring from a string value.

  - Yields substring of string `s` from index `begin` to the end of the string.

  - Yields substring of string `s` from index `begin` to (but not including) index `end`.

**Examples.**

``` rascal-shell
import String;
substring("abcdef", 2);
substring("abcdef", 2, 4);
```

### toInt

  - `int toInt(str s) throws IllegalArgument`

  - `int toInt(str s, int r) throws IllegalArgument`

**Synopsis.**

Convert a string value to integer.

  - Converts string `s` to integer.

  - Convert string `s` to integer using radix `r`.

Throws `IllegalArgument` when `s` cannot be converted.

**Examples.**

``` rascal-shell
import String;
toInt("11");
toInt("11", 8);
```

Now try an erroneous argument:

``` rascal-shell
toInt("abc");
```

### toLowerCase

**Function.**

`str toLowerCase(str s)`

**Synopsis.**

Convert the characters in a string value to lower case.

**Description.**

Convert all characters in string `s` to lowercase. Also see [toUpperCase](#String-toUpperCase).

**Examples.**

``` rascal-shell
import String;
toLowerCase("AaBbCc123");
```

### toReal

**Function.**

`real toReal(str s)`

**Synopsis.**

Convert a string value to real.

**Description.**

Converts string `s` to a real. Throws `IllegalArgument` when `s` cannot be converted.

**Examples.**

``` rascal-shell
import String;
toReal("2.5e-3");
toReal("123");
toReal("abc");
```

### toUpperCase

**Function.**

`str toUpperCase(str s)`

**Synopsis.**

Convert the characters in a string value to upper case.

**Description.**

Converts all characters in string `s` to upper case.

Also see [toLowerCase](#String-toLowerCase).

**Examples.**

``` rascal-shell
import String;
toUpperCase("AaBbCc123");
```

### trim

**Function.**

`str trim(str s)`

**Synopsis.**

Returns string with leading and trailing whitespace removed.

**Examples.**

``` rascal-shell
import String;
trim("  jelly
beans  ");
```

### squeeze

**Function.**

`str squeeze(str src, str charSet)`

**Synopsis.**

Squeeze repeated occurrences of characters. .Description Squeeze repeated occurrences in `src` of characters in
`charSet` removed. See
[Apache](http://commons.apache.org/lang/api-2.6/index.html?org/apache/commons/lang/text/package-summary.html) for the
allowed syntax in `charSet`.

**Examples.**

``` rascal-shell
import String;
squeeze("hello", "el");
```

### split

**Function.**

`list[str] split(str sep, str src)`

**Synopsis.**

Split a string into a list of strings based on a literal separator.

### capitalize

**Function.**

`str capitalize(str src)`

### uncapitalize

**Function.**

`str uncapitalize(str src)`

### toBase64

**Function.**

`str toBase64(str src)`

### fromBase64

**Function.**

`str fromBase64(str src)`

### wrap

**Function.**

`str wrap(str src, int wrapLength)`

**Synopsis.**

Word wrap a string to fit in a certain width.

**Description.**

Inserts newlines in a string in order to fit the string in a certain width. It only breaks on spaces (' ').

### format

**Function.**

`str format(str s, str dir, int n, str pad)`

### rexpMatch

**Function.**

`bool rexpMatch(str s, str re)`

**Synopsis.**

Determine if a string matches the given (Java-syntax) regular expression.

### toLocation

**Function.**

`loc toLocation(str s)`

**Synopsis.**

Convert a string value to a (source code) location.

  - Converts string `s` to a location.

  - If the scheme is not provided, it is assumed to be `cwd`.

**Examples.**

``` rascal-shell
import String;
toLocation("http://grammarware.net");
toLocation("document.xml");
```

### substitute

**Function.**

`str substitute(str src, map[loc,str] s)`

**Synopsis.**

Substitute substrings in a string based on a substitution map from location to string.

**Examples.**

``` rascal-shell
import String;
substitute("abc", (|stdin:///|(1,1): "d"))
```

## Type

**Usage.**

`import Type;`

**Synopsis.**

Rascal’s type system, implemented in Rascal itself.

**Description.**

The goal of this module is to provide:

  - reflection capabilities that are useful for deserialization and validation of data, and

  - to provide the basic building blocks for syntax trees (see [ParseTree](#Prelude-ParseTree))

The following definition is built into Rascal:

``` rascal
data type[&T] = type(Symbol symbol, map[Symbol,Production] definitions);
```

The `#` operator will always produce a value of `type[&T]`, where `&T` is bound to the type that was reified.

**Examples.**

``` rascal-shell
import Type;
#int
#rel[int,int]
data B = t();
#B
syntax A = "a";
#A;
type(\int(),())
```

The following functions are provided on types:

### Symbol

**Types.**

``` rascal
data Symbol
     = \int()
     | \bool()
     | \real()
     | \rat()
     | \str()
     | \num()
     | \node()
     | \void()
     | \value()
     | \loc()
     | \datetime()
     ;
```

**Synopsis.**

A Symbol represents a Rascal Type.

**Description.**

Symbols are values that represent Rascal’s types. These are the atomic types. We define here:

  - Atomic types.

  - Labels that are used to give names to symbols, such as field names, constructor names, etc.

  - Composite types.

  - Parameters that represent a type variable.

In [ParseTree](#Prelude-ParseTree), see [Symbol](#ParseTree-Symbol), Symbols will be further extended with the symbols
that may occur in a ParseTree.

### Symbol

**Types.**

``` rascal
data Symbol
     = \label(str name, Symbol symbol)
     ;
```

### Symbol

**Types.**

``` rascal
data Symbol
     = \set(Symbol symbol)
     | \rel(list[Symbol] symbols)
     | \lrel(list[Symbol] symbols)
     | \tuple(list[Symbol] symbols)
     | \list(Symbol symbol)
     | \map(Symbol from, Symbol to)
     | \bag(Symbol symbol)
     | \adt(str name, list[Symbol] parameters)
     | \cons(Symbol \adt, str name, list[Symbol] parameters)
     | \alias(str name, list[Symbol] parameters, Symbol aliased)
     | \func(Symbol ret, list[Symbol] parameters, list[Symbol] kwTypes)
     | \overloaded(set[Symbol] alternatives)
     | \var-func(Symbol ret, list[Symbol] parameters, Symbol varArg)
     | \reified(Symbol symbol)
     ;
```

### Symbol

**Types.**

``` rascal
data Symbol
     = \parameter(str name, Symbol bound)
     ;
```

### Production

**Types.**

``` rascal
data Production
     = \cons(Symbol def, list[Symbol] symbols, list[Symbol] kwTypes, set[Attr] attributes)
     | \choice(Symbol def, set[Production] alternatives)
     | \composition(Production lhs, Production rhs)
     ;
```

**Synopsis.**

A production in a grammar or constructor in a data type.

**Description.**

Productions represent abstract (recursive) definitions of abstract data type constructors and functions:

  - `cons`: a constructor for an abstract data type.

  - `func`: a function.

  - `choice`: the choice between various alternatives.

  - `composition`: composition of two productions.

In ParseTree, see [Production](#ParseTree-Production), Productions will be further extended and will be used to
represent productions in syntax rules.

### Attr

**Types.**

``` rascal
data Attr
     = \tag(value \tag)
     ;
```

**Synopsis.**

Attributes register additional semantics annotations of a definition.

\[\[Type-\\var-func\]\] \#\# \\var-func

**Function.**

`Symbol \var-func(Symbol ret, list[Symbol] parameters, Symbol varArg)`

**Synopsis.**

Transform a function with varargs (`…​`) to a normal function with a list argument.

### choice

**Function.**

`Production choice(Symbol s, set[Production] choices)`

**Synopsis.**

Normalize the choice between alternative productions.

**Description.**

Nested choice is flattened.

### subtype

  - `bool subtype(type[&T] t, type[&U] u)`

  - `bool subtype(Symbol s, s)`

  - `default bool subtype(Symbol s, Symbol t)`

  - `bool subtype(Symbol _, Symbol::\value())`

  - `bool subtype(Symbol::\void(), Symbol _)`

  - `bool subtype(Symbol::\cons(Symbol a, _, list[Symbol] _), a)`

  - `bool subtype(Symbol::\cons(Symbol a, str name, list[Symbol] ap), Symbol::\cons(a,name,list[Symbol] bp))`

  - `bool subtype(Symbol::\adt(str _, list[Symbol] _), Symbol::\node())`

  - `bool subtype(Symbol::\adt(str n, list[Symbol] l), Symbol::\adt(n, list[Symbol] r))`

  - `bool subtype(Symbol::\alias(str _, list[Symbol] _, Symbol aliased), Symbol r)`

  - `bool subtype(Symbol l, \alias(str _, list[Symbol] _, Symbol aliased))`

  - `bool subtype(Symbol::\int(), Symbol::\num())`

  - `bool subtype(Symbol::\rat(), Symbol::\num())`

  - `bool subtype(Symbol::\real(), Symbol::\num())`

  - `bool subtype(Symbol::\tuple(list[Symbol] l), \tuple(list[Symbol] r))`

  - `bool subtype(Symbol::\list(Symbol s), Symbol::\list(Symbol t))`

  - `bool subtype(Symbol::\lrel(list[Symbol] l), Symbol::\lrel(list[Symbol] r))`

  - `bool subtype(Symbol::\list(Symbol s), Symbol::\lrel(list[Symbol] r))`

  - `bool subtype(Symbol::\lrel(list[Symbol] l), \list(Symbol r))`

  - `bool subtype(Symbol::\set(Symbol s), Symbol::\set(Symbol t))`

  - `bool subtype(Symbol::\rel(list[Symbol] l), Symbol::\rel(list[Symbol] r))`

  - `bool subtype(Symbol::\set(Symbol s), Symbol::\rel(list[Symbol] r))`

  - `bool subtype(Symbol::\rel(list[Symbol] l), Symbol::\set(Symbol r))`

  - `bool subtype(Symbol::\bag(Symbol s), Symbol::\bag(Symbol t))`

  - `bool subtype(Symbol::\map(Symbol from1, Symbol to1), Symbol::\map(Symbol from2, Symbol to2))`

  - `bool subtype(Symbol::\func(Symbol r1, list[Symbol] p1, list[Symbol] kw1), Symbol::\func(Symbol r2, list[Symbol] p2,
    list[Symbol] kw2))`

  - `bool subtype(Symbol::\parameter(str _, Symbol bound), Symbol r)`

  - `bool subtype(Symbol l, Symbol::\parameter(str _, Symbol bound))`

  - `bool subtype(Symbol::\label(str _, Symbol s), Symbol t)`

  - `bool subtype(Symbol s, Symbol::\label(str _, Symbol t))`

  - `bool subtype(Symbol::\reified(Symbol s), Symbol::\reified(Symbol t))`

  - `bool subtype(Symbol::\reified(Symbol s), Symbol::\node())`

  - `bool subtype(list[Symbol] l, list[Symbol] r)`

  - `default bool subtype(list[Symbol] l, list[Symbol] r)`

**Synopsis.**

Subtype on types.

### comparable

**Function.**

`bool comparable(Symbol s, Symbol t)`

**Synopsis.**

Check if two types are comparable, i.e., have a common supertype.

### equivalent

**Function.**

`bool equivalent(Symbol s, Symbol t)`

**Synopsis.**

Check if two types are equivalent.

### eq

**Function.**

`bool eq(value x, value y)`

**Synopsis.**

Structural equality between values.

**Description.**

The difference is that no implicit coercions are done between values of incomparable types, such as == does for int,
real and rat.

**Examples.**

``` rascal-shell
import Type;
1 == 1.0
eq(1,1.0)
```

### lub

  - `Symbol lub(Symbol s, s)`

  - `default Symbol lub(Symbol s, Symbol t)`

  - `Symbol lub(Symbol::\value(), Symbol t)`

  - `Symbol lub(Symbol s, Symbol::\value())`

  - `Symbol lub(Symbol::\void(), Symbol t)`

  - `Symbol lub(Symbol s, Symbol::\void())`

  - `Symbol lub(Symbol::\int(), Symbol::\num())`

  - `Symbol lub(Symbol::\int(), Symbol::\real())`

  - `Symbol lub(Symbol::\int(), Symbol::\rat())`

  - `Symbol lub(Symbol::\rat(), Symbol::\num())`

  - `Symbol lub(Symbol::\rat(), Symbol::\real())`

  - `Symbol lub(Symbol::\rat(), Symbol::\int())`

  - `Symbol lub(Symbol::\real(), Symbol::\num())`

  - `Symbol lub(Symbol::\real(), Symbol::\int())`

  - `Symbol lub(Symbol::\real(), Symbol::\rat())`

  - `Symbol lub(Symbol::\num(), Symbol::\int())`

  - `Symbol lub(Symbol::\num(), Symbol::\real())`

  - `Symbol lub(Symbol::\num(), Symbol::\rat())`

  - `Symbol lub(Symbol::\set(Symbol s), Symbol::\set(Symbol t))`

  - `Symbol lub(Symbol::\set(Symbol s), Symbol::\rel(list[Symbol] ts))`

  - `Symbol lub(Symbol::\rel(list[Symbol] ts), Symbol::\set(Symbol s))`

  - `Symbol lub(Symbol::\rel(list[Symbol] l), Symbol::\rel(list[Symbol] r))`

  - `Symbol lub(Symbol::\rel(list[Symbol] l), Symbol::\rel(list[Symbol] r))`

  - `Symbol lub(Symbol::\rel(list[Symbol] l), Symbol::\rel(list[Symbol] r))`

  - `Symbol lub(Symbol::\rel(list[Symbol] l), Symbol::\rel(list[Symbol] r))`

  - `Symbol lub(Symbol::\rel(list[Symbol] l), Symbol::\rel(list[Symbol] r))`

  - `Symbol lub(Symbol::\rel(list[Symbol] l), Symbol::\rel(list[Symbol] r))`

  - `Symbol lub(Symbol::\list(Symbol s), Symbol::\list(Symbol t))`

  - `Symbol lub(Symbol::\list(Symbol s), \lrel(list[Symbol] ts))`

  - `Symbol lub(Symbol::\lrel(list[Symbol] ts), Symbol::\list(Symbol s))`

  - `Symbol lub(Symbol::\lrel(list[Symbol] l), Symbol::\lrel(list[Symbol] r))`

  - `Symbol lub(Symbol::\lrel(list[Symbol] l), Symbol::\lrel(list[Symbol] r))`

  - `Symbol lub(Symbol::\lrel(list[Symbol] l), Symbol::\lrel(list[Symbol] r))`

  - `Symbol lub(Symbol::\lrel(list[Symbol] l), Symbol::\lrel(list[Symbol] r))`

  - `Symbol lub(Symbol::\lrel(list[Symbol] l), Symbol::\lrel(list[Symbol] r))`

  - `Symbol lub(Symbol::\lrel(list[Symbol] l), Symbol::\lrel(list[Symbol] r))`

  - `Symbol lub(Symbol::\tuple(list[Symbol] l), Symbol::\tuple(list[Symbol] r))`

  - `Symbol lub(Symbol::\tuple(list[Symbol] l), Symbol::\tuple(list[Symbol] r))`

  - `Symbol lub(Symbol::\tuple(list[Symbol] l), Symbol::\tuple(list[Symbol] r))`

  - `Symbol lub(Symbol::\tuple(list[Symbol] l), Symbol::\tuple(list[Symbol] r))`

  - `Symbol lub(Symbol::\tuple(list[Symbol] l), Symbol::\tuple(list[Symbol] r))`

  - `Symbol lub(Symbol::\map(\label(str lfl, Symbol lf), \label(str ltl, Symbol lt)), Symbol::\map(\label(str rfl,
    Symbol rf), \label(str rtl, Symbol rt)))`

  - `Symbol lub(Symbol::\map(\label(str lfl, Symbol lf), \label(str ltl, Symbol lt)), Symbol::\map(\label(str rfl,
    Symbol rf), \label(str rtl, Symbol rt)))`

  - `Symbol lub(Symbol::\map(\label(str lfl, Symbol lf), \label(str ltl, Symbol lt)), Symbol::\map(Symbol rf, Symbol
    rt))`

  - `Symbol lub(Symbol::\map(Symbol lf, Symbol lt), Symbol::\map(\label(str rfl, Symbol rf), \label(str rtl, Symbol
    rt)))`

  - `Symbol lub(Symbol::\map(Symbol lf, Symbol lt), Symbol::\map(Symbol rf, Symbol rt))`

  - `Symbol lub(Symbol::\bag(Symbol s), Symbol::\bag(Symbol t))`

  - `Symbol lub(Symbol::\adt(str n, list[Symbol] _), Symbol::\node())`

  - `Symbol lub(Symbol::\node(), \adt(str n, list[Symbol] _))`

  - `Symbol lub(Symbol::\adt(str n, list[Symbol] lp), Symbol::\adt(n, list[Symbol] rp))`

  - `Symbol lub(Symbol::\adt(str n, list[Symbol] lp), Symbol::\adt(n, list[Symbol] rp))`

  - `Symbol lub(Symbol::\adt(str n, list[Symbol] lp), Symbol::\adt(str m, list[Symbol] rp))`

  - `Symbol lub(Symbol::\adt(str ln, list[Symbol] lp), Symbol::\cons(Symbol b, _, list[Symbol] _))`

  - `Symbol lub(Symbol::\cons(Symbol la, _, list[Symbol] _), Symbol::\cons(Symbol ra, _, list[Symbol] _))`

  - `Symbol lub(Symbol::\cons(Symbol a, _, list[Symbol] lp), Symbol::\adt(str n, list[Symbol] rp))`

  - `Symbol lub(Symbol::\cons(Symbol _, _, list[Symbol] _), Symbol::\node())`

  - `Symbol lub(Symbol::\alias(str _, list[Symbol] _, Symbol aliased), Symbol r)`

  - `Symbol lub(Symbol l, \alias(str _, list[Symbol] _, Symbol aliased))`

**Synopsis.**

The least-upperbound (lub) between two types.

**Description.**

This function documents and implements the lub operation in Rascal’s type system.

### keepParams

**Function.**

`bool keepParams(Symbol::\parameter(str s1, Symbol bound1), Symbol::\parameter(str s2, Symbol bound2))`

### lub

  - `Symbol lub(Symbol l:Symbol::\parameter(str s1, Symbol bound1), Symbol r:Symbol::\parameter(str s2, Symbol bound2))`

  - `Symbol lub(Symbol l:Symbol::\parameter(str s1, Symbol bound1), Symbol r:Symbol::\parameter(str s2, Symbol bound2))`

  - `Symbol lub(Symbol::\parameter(str _, Symbol bound), Symbol r)`

  - `Symbol lub(Symbol l, Symbol::\parameter(str _, Symbol bound))`

  - `Symbol lub(Symbol::\reified(Symbol l), Symbol::\reified(Symbol r))`

  - `Symbol lub(Symbol::\reified(Symbol l), Symbol::\node())`

  - `Symbol lub(Symbol::\func(Symbol lr, list[Symbol] lp, list[Symbol] lkw), Symbol::\func(Symbol rr, list[Symbol] rp,
    list[Symbol] rkw))`

  - `Symbol lub(Symbol::\label(_,Symbol l), Symbol r)`

  - `Symbol lub(Symbol l, Symbol::\label(_,Symbol r))`

  - `list[Symbol] lub(list[Symbol] l, list[Symbol] r)`

  - `default list[Symbol] lub(list[Symbol] l, list[Symbol] r)`

### allLabeled

**Function.**

`bool allLabeled(list[Symbol] l)`

### noneLabeled

**Function.**

`bool noneLabeled(list[Symbol] l)`

### getLabels

**Function.**

`list[str] getLabels(list[Symbol] l)`

### addLabels

  - `list[Symbol] addLabels(list[Symbol] l, list[str] s)`

  - `default list[Symbol] addLabels(list[Symbol] l, list[str] s)`

### stripLabels

**Function.**

`list[Symbol] stripLabels(list[Symbol] l)`

### getParamLabels

**Function.**

`list[str] getParamLabels(list[Symbol] l)`

### addParamLabels

  - `list[Symbol] addParamLabels(list[Symbol] l, list[str] s)`

  - `default list[Symbol] addParamLabels(list[Symbol] l, list[str] s)`

### glb

  - `Symbol glb(Symbol s, s)`

  - `default Symbol glb(Symbol s, Symbol t)`

  - `Symbol glb(Symbol::\void(), Symbol t)`

  - `Symbol glb(Symbol s, Symbol::\void())`

  - `Symbol glb(Symbol::\value(), Symbol t)`

  - `Symbol glb(Symbol s, Symbol::\value())`

  - `Symbol glb(Symbol::\int(), Symbol::\num())`

  - `Symbol glb(Symbol::\num(), Symbol::\int())`

  - `Symbol glb(Symbol::\rat(),Symbol::\num())`

  - `Symbol glb(Symbol::\num(), Symbol::\rat())`

  - `Symbol glb(Symbol::\real(), Symbol::\num())`

  - `Symbol glb(Symbol::\num(), Symbol::\real())`

  - `Symbol glb(Symbol::\set(Symbol s), Symbol::\set(Symbol t))`

  - `Symbol glb(Symbol::\set(Symbol s), Symbol::\rel(list[Symbol] ts))`

  - `Symbol glb(Symbol::\rel(list[Symbol] ts), Symbol::\set(Symbol s))`

  - `Symbol glb(Symbol::\rel(list[Symbol] l), Symbol::\rel(list[Symbol] r))`

  - `Symbol glb(Symbol::\rel(list[Symbol] l), Symbol::\rel(list[Symbol] r))`

  - `Symbol glb(Symbol::\rel(list[Symbol] l), Symbol::\rel(list[Symbol] r))`

  - `Symbol glb(Symbol::\rel(list[Symbol] l), Symbol::\rel(list[Symbol] r))`

  - `Symbol glb(Symbol::\rel(list[Symbol] l), Symbol::\rel(list[Symbol] r))`

  - `Symbol glb(Symbol::\rel(list[Symbol] l), Symbol::\rel(list[Symbol] r))`

  - `Symbol glb(Symbol::\list(Symbol s), Symbol::\list(Symbol t))`

  - `Symbol glb(Symbol::\list(Symbol s), Symbol::\lrel(list[Symbol] ts))`

  - `Symbol glb(Symbol::\lrel(list[Symbol] ts), Symbol::\list(Symbol s))`

  - `Symbol glb(Symbol::\lrel(list[Symbol] l), Symbol::\lrel(list[Symbol] r))`

  - `Symbol glb(Symbol::\lrel(list[Symbol] l), Symbol::\lrel(list[Symbol] r))`

  - `Symbol glb(Symbol::\lrel(list[Symbol] l), Symbol::\lrel(list[Symbol] r))`

  - `Symbol glb(Symbol::\lrel(list[Symbol] l), Symbol::\lrel(list[Symbol] r))`

  - `Symbol glb(Symbol::\lrel(list[Symbol] l), Symbol::\lrel(list[Symbol] r))`

  - `Symbol glb(Symbol::\lrel(list[Symbol] l), Symbol::\lrel(list[Symbol] r))`

  - `Symbol glb(Symbol::\tuple(list[Symbol] l), Symbol::\tuple(list[Symbol] r))`

  - `Symbol glb(Symbol::\tuple(list[Symbol] l), Symbol::\tuple(list[Symbol] r))`

  - `Symbol glb(Symbol::\tuple(list[Symbol] l), Symbol::\tuple(list[Symbol] r))`

  - `Symbol glb(Symbol::\tuple(list[Symbol] l), Symbol::\tuple(list[Symbol] r))`

  - `Symbol glb(Symbol::\tuple(list[Symbol] l), Symbol::\tuple(list[Symbol] r))`

  - `Symbol glb(Symbol::\map(\label(str lfl, Symbol lf), \label(str ltl, Symbol lt)), Symbol::\map(\label(str rfl,
    Symbol rf), \label(str rtl, Symbol rt)))`

  - `Symbol glb(Symbol::\map(\label(str lfl, Symbol lf), \label(str ltl, Symbol lt)), Symbol::\map(\label(str rfl,
    Symbol rf), \label(str rtl, Symbol rt)))`

  - `Symbol glb(Symbol::\map(\label(str lfl, Symbol lf), \label(str ltl, Symbol lt)), Symbol::\map(Symbol rf, Symbol
    rt))`

  - `Symbol glb(Symbol::\map(Symbol lf, Symbol lt), Symbol::\map(\label(str rfl, Symbol rf), \label(str rtl, Symbol
    rt)))`

  - `Symbol glb(Symbol::\map(Symbol lf, Symbol lt), Symbol::\map(Symbol rf, Symbol rt))`

  - `Symbol glb(Symbol::\bag(Symbol s), Symbol::\bag(Symbol t))`

  - `Symbol glb(Symbol::\adt(str n, list[Symbol] _), Symbol::\node())`

  - `Symbol glb(\node(), Symbol::\adt(str n, list[Symbol] _))`

  - `Symbol glb(Symbol::\adt(str n, list[Symbol] lp), Symbol::\adt(n, list[Symbol] rp))`

  - `Symbol glb(Symbol::\adt(str n, list[Symbol] lp), Symbol::\adt(n, list[Symbol] rp))`

  - `Symbol glb(Symbol::\adt(str n, list[Symbol] lp), Symbol::\adt(str m, list[Symbol] rp))`

  - `Symbol glb(Symbol::\adt(str ln, list[Symbol] lp), Symbol::\cons(Symbol b, _, list[Symbol] _))`

  - `Symbol glb(Symbol::\cons(Symbol la, _, list[Symbol] _), Symbol::\cons(Symbol ra, _, list[Symbol] _))`

  - `Symbol glb(Symbol::\cons(Symbol a, _, list[Symbol] lp), Symbol::\adt(str n, list[Symbol] rp))`

  - `Symbol glb(Symbol::\cons(Symbol _, _, list[Symbol] _), \node())`

  - `Symbol glb(Symbol::\alias(str _, list[Symbol] _, Symbol aliased), Symbol r)`

  - `Symbol glb(Symbol l, Symbol::\alias(str _, list[Symbol] _, Symbol aliased))`

  - `Symbol glb(Symbol::\parameter(str _, Symbol bound), Symbol r)`

  - `Symbol glb(Symbol l, Symbol::\parameter(str _, Symbol bound))`

  - `Symbol glb(Symbol::\reified(Symbol l), Symbol::\reified(Symbol r))`

  - `Symbol glb(Symbol::\reified(Symbol l), Symbol::\node())`

  - `Symbol glb(Symbol::\func(Symbol lr, list[Symbol] lp, list[Symbol] kwl), Symbol::\func(Symbol rr, list[Symbol] rp,
    list[Symbol] kwr))`

  - `Symbol glb(Symbol::\label(_,Symbol l), Symbol r)`

  - `Symbol glb(Symbol l, Symbol::\label(_,Symbol r))`

  - `list[Symbol] glb(list[Symbol] l, list[Symbol] r)`

  - `default list[Symbol] glb(list[Symbol] l, list[Symbol] r)`

**Synopsis.**

The greatest lower bound (glb) between two types.

**Description.**

This function documents and implements the glb operation in Rascal’s type system.

### Exception

**Types.**

``` rascal
data Exception
     = typeCastException(Symbol from, type[value] to)
     ;
```

### typeCast

**Function.**

`&T typeCast(type[&T] typ, value v)`

### make

  - `&T make(type[&T] typ, str name, list[value] args)`

  - `&T make(type[&T] typ, str name, list[value] args, map[str,value] keywordArgs)`

**Synopsis.**

Instantiate an ADT constructor of a given type with the given children and optional keyword arguments.

**Description.**

This function will build a constructor if the definition exists and throw an exception otherwise.

### typeOf

**Function.**

`Symbol typeOf(value v)`

**Synopsis.**

Returns the dynamic type of a value as a reified type.

**Description.**

As opposed to the \# operator, which produces the type of a value statically, this function produces the dynamic type of
a value, represented by a symbol.

**Examples.**

``` rascal-shell
import Type;
value x = 1;
typeOf(x)
```

  - Note that the `typeOf` function does not produce definitions, like the [reify](/Rascal#Values-ReifiedTypes) operator
    `#` does, since values may escape the scope in which they’ve been constructed leaving their contents possibly
    undefined.

### isIntType

  - `bool isIntType(Symbol::\alias(,,Symbol at))`

  - `bool isIntType(Symbol::\parameter(_,Symbol tvb))`

  - `bool isIntType(Symbol::\label(_,Symbol lt))`

  - `bool isIntType(Symbol::\int())`

  - `default bool isIntType(Symbol _)`

**Synopsis.**

Determine if the given type is an int.

### isBoolType

  - `bool isBoolType(Symbol::\alias(,,Symbol at))`

  - `bool isBoolType(Symbol::\parameter(_,Symbol tvb))`

  - `bool isBoolType(Symbol::\label(_,Symbol lt))`

  - `bool isBoolType(Symbol::\bool())`

  - `default bool isBoolType(Symbol _)`

**Synopsis.**

Determine if the given type is a bool.

### isRealType

  - `bool isRealType(Symbol::\alias(,,Symbol at))`

  - `bool isRealType(Symbol::\parameter(_,Symbol tvb))`

  - `bool isRealType(Symbol::\label(_,Symbol lt))`

  - `bool isRealType(Symbol::\real())`

  - `default bool isRealType(Symbol _)`

**Synopsis.**

Determine if the given type is a real.

### isRatType

  - `bool isRatType(Symbol::\alias(,,Symbol at))`

  - `bool isRatType(Symbol::\parameter(_,Symbol tvb))`

  - `bool isRatType(Symbol::\label(_,Symbol lt))`

  - `bool isRatType(Symbol::\rat())`

  - `default bool isRatType(Symbol _)`

**Synopsis.**

Determine if the given type is a rational.

### isStrType

  - `bool isStrType(Symbol::\alias(,,Symbol at))`

  - `bool isStrType(Symbol::\parameter(_,Symbol tvb))`

  - `bool isStrType(Symbol::\label(_,Symbol lt))`

  - `bool isStrType(Symbol::\str())`

  - `default bool isStrType(Symbol _)`

**Synopsis.**

Determine if the given type is a string.

### isNumType

  - `bool isNumType(Symbol::\alias(,,Symbol at))`

  - `bool isNumType(Symbol::\parameter(_,Symbol tvb))`

  - `bool isNumType(Symbol::\label(_,Symbol lt))`

  - `bool isNumType(Symbol::\num())`

  - `default bool isNumType(Symbol _)`

**Synopsis.**

Determine if the given type is a num.

### isNodeType

  - `bool isNodeType(Symbol::\alias(,,Symbol at))`

  - `bool isNodeType(Symbol::\parameter(_,Symbol tvb))`

  - `bool isNodeType(Symbol::\label(_,Symbol lt))`

  - `bool isNodeType(Symbol::\node())`

  - `bool isNodeType(Symbol::\adt(,))`

  - `default bool isNodeType(Symbol _)`

**Synopsis.**

Determine if the given type is a node.

### isVoidType

  - `bool isVoidType(Symbol::\alias(,,Symbol at))`

  - `bool isVoidType(Symbol::\parameter(_,Symbol tvb))`

  - `bool isVoidType(Symbol::\label(_,Symbol lt))`

  - `bool isVoidType(Symbol::\void())`

  - `default bool isVoidType(Symbol _)`

**Synopsis.**

Determine if the given type is a void.

### isValueType

  - `bool isValueType(Symbol::\alias(,,Symbol at))`

  - `bool isValueType(Symbol::\parameter(_,Symbol tvb))`

  - `bool isValueType(Symbol::\label(_,Symbol lt))`

  - `bool isValueType(Symbol::\value())`

  - `default bool isValueType(Symbol _)`

**Synopsis.**

Determine if the given type is a value.

### isLocType

  - `bool isLocType(Symbol::\alias(,,Symbol at))`

  - `bool isLocType(Symbol::\parameter(_,Symbol tvb))`

  - `bool isLocType(Symbol::\label(_,Symbol lt))`

  - `bool isLocType(Symbol::\loc())`

  - `default bool isLocType(Symbol _)`

**Synopsis.**

Determine if the given type is a loc.

### isDateTimeType

  - `bool isDateTimeType(Symbol::\alias(,,Symbol at))`

  - `bool isDateTimeType(Symbol::\parameter(_,Symbol tvb))`

  - `bool isDateTimeType(Symbol::\label(_,Symbol lt))`

  - `bool isDateTimeType(Symbol::\datetime())`

  - `default bool isDateTimeType(Symbol _)`

**Synopsis.**

Determine if the given type is a `datetime`.

### isSetType

  - `bool isSetType(Symbol::\alias(,,Symbol at))`

  - `bool isSetType(Symbol::\parameter(_,Symbol tvb))`

  - `bool isSetType(Symbol::\label(_,Symbol lt))`

  - `bool isSetType(Symbol::\set(_))`

  - `bool isSetType(Symbol::\rel(_))`

  - `default bool isSetType(Symbol _)`

**Synopsis.**

Determine if the given type is a set.

### isRelType

  - `bool isRelType(Symbol::\alias(,,Symbol at))`

  - `bool isRelType(Symbol::\parameter(_,Symbol tvb))`

  - `bool isRelType(Symbol::\label(_,Symbol lt))`

  - `bool isRelType(Symbol::\rel(_))`

  - `bool isRelType(Symbol::\set(Symbol tp))`

  - `default bool isRelType(Symbol _)`

**Synopsis.**

Determine if the given type is a relation.

### isListRelType

  - `bool isListRelType(Symbol::\alias(,,Symbol at))`

  - `bool isListRelType(Symbol::\parameter(_,Symbol tvb))`

  - `bool isListRelType(Symbol::\label(_,Symbol lt))`

  - `bool isListRelType(Symbol::\lrel(_))`

  - `bool isListRelType(Symbol::\list(Symbol tp))`

  - `default bool isListRelType(Symbol _)`

**Synopsis.**

Determine if the given type is a list relation.

### isTupleType

  - `bool isTupleType(Symbol::\alias(,,Symbol at))`

  - `bool isTupleType(Symbol::\parameter(_,Symbol tvb))`

  - `bool isTupleType(Symbol::\label(_,Symbol lt))`

  - `bool isTupleType(Symbol::\tuple(_))`

  - `default bool isTupleType(Symbol _)`

**Synopsis.**

Determine if the given type is a tuple.

### isListType

  - `bool isListType(Symbol::\alias(,,Symbol at))`

  - `bool isListType(Symbol::\parameter(_,Symbol tvb))`

  - `bool isListType(Symbol::\label(_,Symbol lt))`

  - `bool isListType(Symbol::\list(_))`

  - `bool isListType(Symbol::\lrel(_))`

  - `default bool isListType(Symbol _)`

**Synopsis.**

Determine if the given type is a list.

### isListRelType

  - `bool isListRelType(Symbol::\alias(,,Symbol at))`

  - `bool isListRelType(Symbol::\parameter(_,Symbol tvb))`

  - `bool isListRelType(Symbol::\label(_,Symbol lt))`

  - `bool isListRelType(Symbol::\lrel(_))`

  - `default bool isListRelType(Symbol _)`

**Synopsis.**

Determine if the given type is a list relation.

### isMapType

  - `bool isMapType(Symbol::\alias(,,Symbol at))`

  - `bool isMapType(Symbol::\parameter(_,Symbol tvb))`

  - `bool isMapType(Symbol::\label(_,Symbol lt))`

  - `bool isMapType(Symbol::\map(,))`

  - `default bool isMapType(Symbol _)`

**Synopsis.**

Determine if the given type is a map.

### isBagType

  - `bool isBagType(Symbol::\alias(,,Symbol at))`

  - `bool isBagType(Symbol::\parameter(_,Symbol tvb))`

  - `bool isBagType(Symbol::\label(_,Symbol lt))`

  - `bool isBagType(Symbol::\bag(_))`

  - `default bool isBagType(Symbol _)`

**Synopsis.**

Determine if the given type is a bag (bags are not yet implemented).

### isADTType

  - `bool isADTType(Symbol::\alias(,,Symbol at))`

  - `bool isADTType(Symbol::\parameter(_,Symbol tvb))`

  - `bool isADTType(Symbol::\label(_,Symbol lt))`

  - `bool isADTType(Symbol::\adt(,))`

  - `bool isADTType(Symbol::\reified(_))`

  - `default bool isADTType(Symbol _)`

**Synopsis.**

Determine if the given type is an Abstract Data Type (ADT).

### isConstructorType

  - `bool isConstructorType(Symbol::\alias(,,Symbol at))`

  - `bool isConstructorType(Symbol::\parameter(_,Symbol tvb))`

  - `bool isConstructorType(Symbol::\label(_,Symbol lt))`

  - `bool isConstructorType(Symbol::\cons(Symbol _,str _,list[Symbol] _))`

  - `default bool isConstructorType(Symbol _)`

**Synopsis.**

Determine if the given type is a constructor.

### isAliasType

  - `bool isAliasType(Symbol::\alias(,,_))`

  - `bool isAliasType(Symbol::\parameter(_,Symbol tvb))`

  - `bool isAliasType(Symbol::\label(_,Symbol lt))`

  - `default bool isAliasType(Symbol _)`

**Synopsis.**

Determine if the given type is an alias.

### isFunctionType

  - `bool isFunctionType(Symbol::\alias(,,Symbol at))`

  - `bool isFunctionType(Symbol::\parameter(_,Symbol tvb))`

  - `bool isFunctionType(Symbol::\label(_,Symbol lt))`

  - `bool isFunctionType(Symbol::\func(,,_))`

  - `default bool isFunctionType(Symbol _)`

**Synopsis.**

Determine if the given type is a function.

### isReifiedType

  - `bool isReifiedType(Symbol::\alias(,,Symbol at))`

  - `bool isReifiedType(Symbol::\parameter(_,Symbol tvb))`

  - `bool isReifiedType(Symbol::\label(_,Symbol lt))`

  - `bool isReifiedType(Symbol::\reified(_))`

  - `default bool isReifiedType(Symbol _)`

**Synopsis.**

Determine if the given type is a reified type.

### isTypeVar

  - `bool isTypeVar(Symbol::\parameter(,))`

  - `bool isTypeVar(Symbol::\alias(,,Symbol at))`

  - `bool isTypeVar(Symbol::\label(_,Symbol lt))`

  - `default bool isTypeVar(Symbol _)`

**Synopsis.**

Determine if the given type is an type variable (parameter).

## ValueIO

**Usage.**

`import ValueIO;`

**Synopsis.**

Library functions for reading and writing values in textual and binary format.

### readValueFile

**Function.**

`value readValueFile(loc file)`

**Synopsis.**

Read a value from a binary file in PBF format.

### getFileLength

**Function.**

`int getFileLength(loc file)`

**Synopsis.**

Get length of a file in number of bytes.

### readBinaryValueFile

  - `&T readBinaryValueFile(type[&T] result, loc file)`

  - `value readBinaryValueFile(loc file)`

**Synopsis.**

Read a typed value from a binary file.

### readTextValueFile

  - `&T readTextValueFile(type[&T] result, loc file)`

  - `value readTextValueFile(loc file)`

**Synopsis.**

Read a typed value from a text file.

### readTextValueFileWithEmbeddedTypes

**Function.**

`&T readTextValueFileWithEmbeddedTypes(type[&T] result, loc file)`

**Synopsis.**

If you have written a file containing reified types, then you can use this function to read them back.

### readTextValueString

  - `value readTextValueString(str input)`

  - `&T readTextValueString(type[&T] result, str input)`

**Synopsis.**

Parse a textual string representation of a value.

### writeBinaryValueFile

**Function.**

`void writeBinaryValueFile(loc file, value val, bool compression = true)`

**Synopsis.**

Write a value to a file using an efficient binary file format.

### writeTextValueFile

**Function.**

`void writeTextValueFile(loc file, value val)`

**Synopsis.**

Write a value to a file using a textual file format.

# analysis

**Synopsis.**

Library functions for analysis tasks.

  - [FCA](#analysis-formalconcepts): Library for Formal Concept Analysis.

  - [graphs](#analysis-graphs): Analyzing unlabeled and labelled graphs.
    
      - [Graph](#graphs-Graph): A `Graph` datatype with associated functions.
    
      - [LabeledGraph](#graphs-LabeledGraph): Return the bottom nodes of a LGraph.

  - [m3](#analysis-m3): a language independent meta model for facts about source code, which is extensible to include
    language specific modeling elements.

  - [statistics](#analysis-statistics): Statistical functions.
    
      - [Correlation](#statistics-Correlation): Correlation between data values.
    
      - [Descriptive](#statistics-Descriptive): Descriptive Statistics.
    
      - [Frequency](#statistics-Frequency): Frequency distributions.
    
      - [Inference](#statistics-Inference): Statistical inference methods.
    
      - [SimpleRegression](#statistics-SimpleRegression): Statistical methods for simple regression.

## FCA

**Usage.**

`import analysis::formalconcepts::FCA;`

**Synopsis.**

Library for Formal Concept Analysis

**Description.**

Formal Concept Analysis is a somewhat ubiquitous tool in software analysis projects. It can be used to find latent
groups of objects that share the same attributes in a dataset. Typically, we apply `FCA` to a relation `rel[&O objects,
&A attributes]`, which represents extracted source code artifacts and their attributes.

\[\[FCA-FormalContext\[\&Object, \&Attribute\]\]\] \#\# FormalContext\[\&Object, \&Attribute\] .Types `rel[&Object,
&Attribute]`

\[\[FCA-Concept\[\&Object, \&Attribute\]\]\] \#\# Concept\[\&Object, \&Attribute\] .Types `tuple[set[&Object] objects,
set[&Attribute] attributes]`

\[\[FCA-ConceptLattice\[\&Object, \&Attribute\]\]\] \#\# ConceptLattice\[\&Object, \&Attribute\] .Types
`rel[Concept[&Object, &Attribute], Concept[&Object, &Attribute]]`

\[\[FCA-Object2Attributes\[\&Object, \&Attribute\]\]\] \#\# Object2Attributes\[\&Object, \&Attribute\] .Types
`map[&Object, set[&Attribute]]`

\[\[FCA-Attribute2Objects\[\&Attribute, \&Object\]\]\] \#\# Attribute2Objects\[\&Attribute, \&Object\] .Types
`map[&Attribute, set[&Object]]`

### fca

**Function.**

`ConceptLattice[&Object, &Attribute] fca (FormalContext[&Object, &Attribute] fc)`

**Synopsis.**

Computes Concept Lattice given the Object Attribute Relation.

### toDot

  - `DotGraph toDot(ConceptLattice[&Object, &Attribute] cl)`

  - `DotGraph toDot(ConceptLattice[&Object, &Attribute] cl, bool lab)`

**Synopsis.**

Computes Dot Graph from Concept Lattice.

### toDotline

**Function.**

`Dotline toDotline(ConceptLattice[&Object, &Attribute] cl)`

### toOutline

**Function.**

`Outline toOutline(ConceptLattice[&Object, &Attribute] cl)`

### toFormalContext

  - `FormalContext[&Object, &Attribute] toFormalContext(Object2Attributes[&Object, &Attribute] objects)`

  - `FormalContext[&Object, &Attribute] toFormalContext(Attribute2Objects[&Object, &Attribute] attributes)`

### intersection

**Function.**

`set[&T] intersection(set[set[&T]] st)`

### union

**Function.**

`set[&T] union(set[set[&T]] st)`

### isSubset

**Function.**

`bool isSubset(set[set[&T]] candidate, set[&T] s )`

### sigma

**Function.**

`set[&Attribute] sigma(FormalContext[&Object, &Attribute] fc, set[&Object] objects)`

### tau

**Function.**

`set[&Object] tau(FormalContext[&Object, &Attribute] fc, set[&Attributes] attributes)`

### maxincl

**Function.**

`set[set[&T]] maxincl(set[set[&T]] c)`

### createAttributeLattice

**Function.**

`rel[set[&Attribute], set[&Attribute]] createAttributeLattice(FormalContext[&Object, &Attribute] fc)`

### makeNodes

**Function.**

`map[Concept[&Object, &Attribute], int] makeNodes(ConceptLattice[&Object, &Attribute] q)`

### newAdded1

**Function.**

`set[&Attribute] newAdded1(ConceptLattice[&Object, &Attribute] q, Concept[&Object, &Attribute] c)`

### newAdded0

**Function.**

`set[Concept[&Object, &Attribute]] newAdded0(ConceptLattice[&Object, &Attribute] q, Concept[&Object, &Attribute] c)`

### compose

**Function.**

`Stm compose(Concept[&Object, &Attribute] c, map[Concept[&Object, &Attribute], int] z, bool lab)`

### toDotString

**Function.**

`str toDotString(ConceptLattice[&Object, &Attribute] q)`

**Synopsis.**

Write relation in `.dot` format.

## graphs

**Synopsis.**

Analyzing unlabeled and labelled graphs.

**Description.**

Graphs are represented as relations. So in general the idea is to use the `Relation` module to manipulate graphs. At the
same time there are algorithms and analyses which make particular sense when we view a relation as a graph, hence the
existence of the `Graph` and `LabeledGraph` libraries.

  - [Graph](#graphs-Graph): A `Graph` datatype with associated functions.

  - [LabeledGraph](#graphs-LabeledGraph): Return the bottom nodes of a LGraph.

### Graph

**Usage.**

`import analysis::graphs::Graph;`

**Synopsis.**

A `Graph` datatype with associated functions.

**Types.**

`alias Graph[&T] = rel[&T from, &T to];`

**Description.**

The Graph data type is a binary relation and all operators and functions defined on [relations](/Rascal#Values-Relation)
are also defined on Graphs.

The `Graph` library provides the following functions:

  - [Graph\[\&T\]](#Libraries/analysis/graphs/Graph-Graph[&T]):

  - [order](#Libraries/analysis/graphs/Graph-order): Compute topological order of the nodes in a graph.

  - [stronglyConnectedComponents](#Libraries/analysis/graphs/Graph-stronglyConnectedComponents): Compute strongly
    connected components in a graph.

  - [stronglyConnectedComponentsAndTopSort](#Libraries/analysis/graphs/Graph-stronglyConnectedComponentsAndTopSort):

  - [bottom](#Libraries/analysis/graphs/Graph-bottom): Determine the bottom nodes (leaves) of a graph.

  - [predecessors](#Libraries/analysis/graphs/Graph-predecessors): Determine the direct predecessors of a graph node.

  - [reach](#Libraries/analysis/graphs/Graph-reach): Determine the graph nodes reachable from a set of nodes.

  - [reachR](#Libraries/analysis/graphs/Graph-reachR): Determine the graph nodes reachable from a set of nodes using a
    restricted set of intermediate nodes.

  - [reachX](#Libraries/analysis/graphs/Graph-reachX): Determine the graph nodes reachable from a set of nodes excluding
    certain intermediate nodes.

  - [shortestPathPair](#Libraries/analysis/graphs/Graph-shortestPathPair): Determine the shortest path between two graph
    nodes.

  - [successors](#Libraries/analysis/graphs/Graph-successors): Determine the direct successors of a graph node.

  - [top](#Libraries/analysis/graphs/Graph-top): Determine the set of top nodes (roots) of a graph.

  - [connectedComponents](#Libraries/analysis/graphs/Graph-connectedComponents): Determine the connected components of a
    graph.

\[\[Graph-Graph\[\&T\]\]\] \#\# Graph\[\&T\] .Types `rel[&T from, &T to]`

#### order

**Function.**

`list[&T] order(Graph[&T] g)`

**Synopsis.**

Compute topological order of the nodes in a graph.

**Examples.**

``` rascal-shell
import  analysis::graphs::Graph;
order({<3,4>, <1,2>, <2,4>, <1,3>});
```

#### stronglyConnectedComponents

**Function.**

`set[set[&T]] stronglyConnectedComponents(Graph[&T] g)`

**Synopsis.**

Compute strongly connected components in a graph.

**Examples.**

``` rascal-shell
import  analysis::graphs::Graph;
stronglyConnectedComponents({<1, 2>, <2, 3>, <3, 2>, <2, 4>, <4, 2>, <3, 5>, <5, 3>, <4, 5>, <5, 3>});
```

#### stronglyConnectedComponentsAndTopSort

**Function.**

`tuple[set[set[&T]], list[&T]] stronglyConnectedComponentsAndTopSort(Graph[&T] ag)`

#### bottom

**Function.**

`set[&T] bottom(Graph[&T] G)`

**Synopsis.**

Determine the bottom nodes (leaves) of a graph.

**Description.**

Returns the bottom nodes of Graph `G`, i.e., the leaf nodes that don’t have any descendants.

**Examples.**

``` rascal-shell
import analysis::graphs::Graph;
bottom({<1,2>, <1,3>, <2,4>, <3,4>});
```

#### predecessors

**Function.**

`set[&T] predecessors(Graph[&T] G, &T From)`

**Synopsis.**

Determine the direct predecessors of a graph node.

**Description.**

Returns the direct predecessors of node `From` in Graph `G`.

**Examples.**

``` rascal-shell
import analysis::graphs::Graph;
predecessors({<1,2>, <1,3>, <2,4>, <3,4>}, 4);
```

#### reach

**Function.**

`set[&T] reach(Graph[&T] G, set[&T] Start)`

**Synopsis.**

Determine the graph nodes reachable from a set of nodes.

**Description.**

Returns the set of nodes in Graph `G` that are reachable from any of the nodes in the set `Start`.

#### reachR

**Function.**

`set[&T] reachR(Graph[&T] G, set[&T] Start, set[&T] Restr)`

**Synopsis.**

Determine the graph nodes reachable from a set of nodes using a restricted set of intermediate nodes.

**Description.**

Returns the set of nodes in Graph `G` that are reachable from any of the nodes in set `Start` using path that only use
nodes in the set `Restr`.

**Examples.**

``` rascal-shell
import analysis::graphs::Graph;
reachR({<1,2>, <1,3>, <2,4>, <3,4>}, {1}, {1, 2, 3});
```

#### reachX

**Function.**

`set[&T] reachX(Graph[&T] G, set[&T] Start, set[&T] Excl)`

**Synopsis.**

Determine the graph nodes reachable from a set of nodes excluding certain intermediate nodes.

**Description.**

Returns set of nodes in Graph `G` that are reachable from any of the nodes in `Start` via path that exclude nodes in
`Excl`.

**Examples.**

``` rascal-shell
import analysis::graphs::Graph;
reachX({<1,2>, <1,3>, <2,4>, <3,4>}, {1}, {2});
```

#### shortestPathPair

**Function.**

`list[&T] shortestPathPair(Graph[&T] G, &T From, &T To)`

**Synopsis.**

Determine the shortest path between two graph nodes.

**Description.**

Returns the shortest path between nodes `From` and `To` in Graph `G`.

#### successors

**Function.**

`set[&T] successors(Graph[&T] G, &T From)`

**Synopsis.**

Determine the direct successors of a graph node.

**Description.**

Returns the direct successors of node `From` in Graph `G`.

**Examples.**

``` rascal-shell
import analysis::graphs::Graph;
successors({<1,2>, <1,3>, <2,4>, <3,4>}, 1);
```

#### top

**Function.**

`set[&T] top(Graph[&T] G)`

**Synopsis.**

Determine the set of top nodes (roots) of a graph.

**Description.**

Returns the top nodes of Graph `G`, i.e., the root nodes that do not have any predecessors.

**Examples.**

``` rascal-shell
import analysis::graphs::Graph;
top({<1,2>, <1,3>, <2,4>, <3,4>});
```

#### connectedComponents

**Function.**

`set[set[&T]] connectedComponents(Graph[&T] G)`

**Synopsis.**

Determine the connected components of a graph.

**Description.**

Returns the [connected components](http://en.wikipedia.org/wiki/Connected_component_(graph_theory)) of Graph `G`, as
sets of nodes. All nodes within one component are all reachable from one another, there are no paths between two nodes
from different components. The graph is assumed to be undirected.

**Examples.**

``` rascal-shell
import analysis::graphs::Graph;
connectedComponents({<1,2>, <1,3>, <4,5>, <5,6>});
```

### LabeledGraph

**Usage.**

`import analysis::graphs::LabeledGraph;`

\[\[LabeledGraph-LGraph\[\&T,\&L\]\]\] \#\# LGraph\[\&T,\&L\] .Types `rel[&T from, &L label, &T to]`

#### bottom

**Function.**

`set[&T] bottom(LGraph[&T,&L] G)`

**Synopsis.**

Return the bottom nodes of a LGraph.

#### predecessors

**Function.**

`set[&T] predecessors(LGraph[&T,&L] G, &T From)`

**Synopsis.**

The predecessors of a single node in a LGraph.

#### reach

**Function.**

`set[&T] reach(LGraph[&T,&L] G, set[&T] Start)`

**Synopsis.**

Reachability from a given start set of nodes.

#### reachR

**Function.**

`set[&T] reachR(LGraph[&T,&L] G, set[&T] Start, set[&T] Restr)`

**Synopsis.**

Reachability from given start set of nodes with restrictions.

#### reachX

**Function.**

`set[&T] reachX(LGraph[&T,&L] G, set[&T] Start, set[&T] Excl)`

**Synopsis.**

Reachability from given start set of nodes with exclusions.

#### successors

**Function.**

`set[&T] successors(LGraph[&T, &L] G, &T From)`

**Synopsis.**

The successors of a single node in a LGraph.

#### top

**Function.**

`set[&T] top(LGraph[&T,&L] G)`

**Synopsis.**

Return the top nodes of a LGraph.

## m3

**Synopsis.**

a language independent meta model for facts about source code, which is extensible to include language specific modeling
elements

> **Warning**
> 
> this documentation awaits adaptation of m3 with the Rascal compiler

This is the core language independent model:

  - [M3](#Core-M3): the m3 constructor is identified by the name of a project encoded as a
    \[$Expressions/Values/Location\] and has annotations for each kind of fact extracted from a project.

For language-specific support, please go here:

  - \[lang/java/m3\]

To get started with m3 immediately, please have a look at:

  - \[$lang/java/jdt/m3/Core/createM3FromEclipseProject\]

<!-- end list -->

  - See \[$Recipes:Metrics/MeasuringJava\] for a step-by-step by-example recipe for how to use M3 for measuring things
    about Java:

## statistics

**Synopsis.**

Statistical functions.

**Description.**

A collection of statistical functions based on the [Apache statistics
library](http://commons.apache.org/math/api-3.6/index.html).

We do not provide a course on (or even an introduction to) statistics. Useful background information can be found here:

  - [Statistics](http://en.wikipedia.org/wiki/Statistics) on Wikipedia.

  - [An Introduction to Statistics](http://www.artofproblemsolving.com/LaTeX/Examples/statistics_firstfive.pdf) by Keone
    Hon.

  - [Think Stats](http://www.greenteapress.com/thinkstats/thinkstats.pdf): Probability and Statistics for Programmers\]
    by Allan B. Downey gives a very readable overview of statistic techniques.

  - [Statistics Calculator](http://www.scatterchart.com/statistical_calculator/) allows entering data and get an
    overview of the values of various statistical indicators.

  - [Online Calculation on STATISTICS](http://easycalculation.com/statistics/statistics.php) gives calculators for
    individual measures.

The following functionality is offered:

  - [Correlation](#statistics-Correlation): Correlation between data values.

  - [Descriptive](#statistics-Descriptive): Descriptive Statistics.

  - [Frequency](#statistics-Frequency): Frequency distributions.

  - [Inference](#statistics-Inference): Statistical inference methods.

  - [SimpleRegression](#statistics-SimpleRegression): Statistical methods for simple regression.

<!-- end list -->

  - Be aware that in creating data for statistical analysis, repeated values may occur. This implies that you should
    avoid creating sets of observations. This also explains why the functions provided here take lists (with elements of
    various types) as argument.

  - The validity of several of the statistics depend on the assumption that the observations included in the model are
    drawn from a [Bivariate Normal Distribution](http://en.wikipedia.org/wiki/Bivariate_normal_distribution). This is
    explicitly stated for functions this is the case.

> **Warning**
> 
> The statistics library is still highly experimental. Interfaces may change and functions maybe added or deleted
> without notice.

### Correlation

**Usage.**

`import analysis::statistics::Correlation;`

**Synopsis.**

Correlation between data values.

**Description.**

Compute the [correlation](http://en.wikipedia.org/wiki/Correlation) between pairs of data values. Correlation measures
the statistical relationship between two sets of data.

The following functions are provided:

  - [PearsonsCorrelation](#Libraries/analysis/statistics/Correlation-PearsonsCorrelation): Pearson product-moment
    correlation coefficient.

  - [PearsonsCorrelationStandardErrors](#Libraries/analysis/statistics/Correlation-PearsonsCorrelationStandardErrors):
    Standard errors associated with Pearson correlation

  - [PearsonsCorrelationPValues](#Libraries/analysis/statistics/Correlation-PearsonsCorrelationPValues): P-values
    (significance) associated with Pearson correlation

  - [SpearmansCorrelation](#Libraries/analysis/statistics/Correlation-SpearmansCorrelation): Spearman’s rank correlation
    coefficient.

  - [covariance](#Libraries/analysis/statistics/Correlation-covariance): Covariance of data values.

#### PearsonsCorrelation

**Function.**

`num PearsonsCorrelation(lrel[num x,num y] values)`

**Synopsis.**

Pearson product-moment correlation coefficient.

**Description.**

Compute the [Pearson product-moment correlation
coefficient](http://en.wikipedia.org/wiki/Pearson_product-moment_correlation_coefficient). It is a measure of the
strength of the linear dependence between two variables.

**Pitfalls.**

Use [SpearmansCorrelation](#Correlation-SpearmansCorrelation) when there is a **monotonous dependence** between the two
variables.

#### PearsonsCorrelationStandardErrors

**Function.**

`list[real] PearsonsCorrelationStandardErrors(lrel[num x,num y] values)`

**Synopsis.**

Standard errors associated with Pearson correlation.

#### PearsonsCorrelationPValues

**Function.**

`list[real] PearsonsCorrelationPValues(lrel[num x,num y] values)`

**Synopsis.**

P-values (significance) associated with Pearson correlation.

#### SpearmansCorrelation

**Function.**

`num SpearmansCorrelation(lrel[num x,num y] values)`

**Synopsis.**

Spearman’s rank correlation coefficient.

**Description.**

Compute [Spearman’s rank correlation coefficient](http://en.wikipedia.org/wiki/Spearman’s_rank_correlation_coefficient).
The correlation between the data values is computed by first performing a rank transformation on the data values using a
natural ranking and then computing [PearsonsCorrelation](#Correlation-PearsonsCorrelation).

**Pitfalls.**

Use [PearsonsCorrelation](#Correlation-PearsonsCorrelation) when there is a **linear dependence** between the variables.

#### covariance

**Function.**

`num covariance(lrel[num x,num y] values)`

**Synopsis.**

Covariance of data values.

**Description.**

Computes the [covariance](http://en.wikipedia.org/wiki/Covariance) between the `x` and `y` values.

**Examples.**

``` rascal-shell
import analysis::statistics::Correlation;
covariance([<1,12>,<3,12>,<3,11>,<5,7>]);
```

### Descriptive

**Usage.**

`import analysis::statistics::Descriptive;`

**Synopsis.**

Descriptive Statistics.

**Description.**

Provides the following univariate (single variable) statistics functions:

  - [geometricMean](#Libraries/analysis/statistics/Descriptive-geometricMean): Geometric mean of data values.

  - [kurtosis](#Libraries/analysis/statistics/Descriptive-kurtosis): Kurtosis of data values.

  - [kurtosisExcess](#Libraries/analysis/statistics/Descriptive-kurtosisExcess): Kurtosis excess of data values.

  - [max](#Libraries/analysis/statistics/Descriptive-max): Largest data value

  - [mean](#Libraries/analysis/statistics/Descriptive-mean): Arithmetic mean of data values.

  - [median](#Libraries/analysis/statistics/Descriptive-median): Median of data values.

  - [middle](#Libraries/analysis/statistics/Descriptive-middle):

  - [min](#Libraries/analysis/statistics/Descriptive-min): Smallest data value

  - [percentile](#Libraries/analysis/statistics/Descriptive-percentile): Percentile of data values.

  - [variance](#Libraries/analysis/statistics/Descriptive-variance): Variance of data values.

  - [skewness](#Libraries/analysis/statistics/Descriptive-skewness): Skewness of data values.

  - [standardDeviation](#Libraries/analysis/statistics/Descriptive-standardDeviation): Standard deviation of data
    values.

  - [sum](#Libraries/analysis/statistics/Descriptive-sum): Sum of data values

  - [sumsq](#Libraries/analysis/statistics/Descriptive-sumsq): Sum of the squares of data values

  - [centralMoment](#Libraries/analysis/statistics/Descriptive-centralMoment): Calculate the k-th central momen

  - [moment](#Libraries/analysis/statistics/Descriptive-moment): Calculate the k-th momen

**Examples.**

``` rascal-shell
import analysis::statistics::Descriptive;
D = [67, 88, 55, 92.5, 102, 51];
mn = min(D);
mx = max(D);
range = mx - mn;
midrange =  mn + range/2;
sum(D);
mean(D);
geometricMean(D);
standardDeviation(D);
variance(D);
percentile(D,25);
percentile(D,50);
percentile(D,75);
```

#### geometricMean

**Function.**

`real geometricMean([num hd, *num tl])`

**Synopsis.**

Geometric mean of data values.

**Description.**

Computes the [geometric mean](http://en.wikipedia.org/wiki/Geometric_mean) of the given data values.

#### kurtosis

**Function.**

`real kurtosis(list[num] values:[, *])`

**Synopsis.**

Kurtosis of data values.

**Description.**

Computes the [kurtosis](http://en.wikipedia.org/wiki/Kurtosis) of the given data values. Kurtosis is a measure of the
"peakedness" of a distribution.

#### kurtosisExcess

**Function.**

`real kurtosisExcess(list[num] values)`

**Synopsis.**

Kurtosis excess of data values.

**Description.**

Computes the [kurtosis excess](http://en.wikipedia.org/wiki/Kurtosis) of the given data values. Kurtosis excess is a
measure of the "peakedness" of a distribution corrected such that a normal distribution will be 0.

#### max

**Function.**

`(&T <: num) max([(&T <: num) h, *(&T <: num) t])`

**Synopsis.**

Largest data value.

#### mean

**Function.**

`real mean(list[num] nums:[, *])`

**Synopsis.**

Arithmetic mean of data values.

**Description.**

Computes the [arithmetic mean](http://en.wikipedia.org/wiki/Arithmetic_mean) of the data values.

#### median

**Function.**

`default real median(list[num] nums:[, *])`

**Synopsis.**

Median of data values.

**Description.**

Returns the [median](http://en.wikipedia.org/wiki/Median) of the available values. This is the same as the 50th
[???](#percentile).

**Examples.**

``` rascal-shell
import analysis::statistics::Descriptive;
median([1,2,5,7,8]);
median([1,2,2,6,7,8]);
```

#### middle

**Function.**

`list[&T] middle(list[&T] nums)`

#### min

**Function.**

`(&T <: num) min([(&T <: num) h, *(&T <: num) t])`

**Synopsis.**

Smallest data value.

#### percentile

**Function.**

`&T <: num percentile(list[&T <: num] nums, num p)`

**Synopsis.**

Percentile of data values.

**Description.**

Returns the ``p`th percentile of the data values.
0 < `p`` ⇐ 100 should hold.

#### variance

**Function.**

`num variance([num hd, *num tl])`

**Synopsis.**

Variance of data values.

**Description.**

Computes the [variance](http://en.wikipedia.org/wiki/Variance) of the data values. It measures how far a set of numbers
is spread out.

#### skewness

**Function.**

`real skewness(list[num] values:[, *])`

**Synopsis.**

Skewness of data values.

**Description.**

Returns the [skewness](http://en.wikipedia.org/wiki/Skewness) of the available values. Skewness is a measure of the
asymmetry of a given distribution.

#### standardDeviation

**Function.**

`real standardDeviation(list[num] values)`

**Synopsis.**

Standard deviation of data values.

**Description.**

Computes the [standard deviation](http://en.wikipedia.org/wiki/Standard_deviation) of the data values. It shows how much
variation exists from the average (mean, or expected value).

#### sum

**Function.**

`(&T <:num) sum([(&T <: num) hd, *(&T <: num) tl])`

**Synopsis.**

Sum of data values.

#### sumsq

**Function.**

`(&T <:num) sumsq(list[&T <:num] values)`

**Synopsis.**

Sum of the squares of data values.

#### centralMoment

**Function.**

`real centralMoment(list[num] nums:[, *], int order = 1)`

Calculate the k-th central moment

#### moment

**Function.**

`real moment(list[num] nums:[, *], int order = 1)`

Calculate the k-th moment

### Frequency

**Usage.**

`import analysis::statistics::Frequency;`

**Synopsis.**

Frequency distributions.

**Description.**

Counting the frequency of events is usually the first step in statistical analysis of raw data. It involves choosing
what are the events to count, how to group them in certain categories and then quickly counting the frequency of each
occurring event.

This module helps by providing commonly used functions for the purpose of counting events. The output of these functions
can be used to draw (cumulative) histograms, or they can directly be used for further statistical processing and
visualisation.

#### distribution

  - `map[&T, int] distribution(rel[&U event, &T bucket] input)`

  - `map[&T <: num, int] distribution(rel[&U event, &T <: num bucket] input, &T <: num bucketSize)`

  - `map[&T, int] distribution(map[&U event, &T bucket] input)`

  - `map[&T <: num, int] distribution(map[&U event, &T <: num bucket] input, &T <: num bucketSize)`

**Synopsis.**

Compute a distribution: count how many times events are mapped to which bucket.

**Examples.**

``` rascal-shell
import analysis::statistics::Frequency;
distribution({<"chicken","animal">,<"bear","animal">,<"oak","plant">,<"tulip","plant">});
distribution({<"alice",2>,<"bob",3>,<"claire",5>},5);
```

#### cumFreq

  - `int cumFreq(list[value] values, num n)`

  - `int cumFreq(list[value] values, str s)`

**Synopsis.**

Cumulative frequency of values less than or equal to a given value.

**Description.**

Returns the cumulative frequency of values less than or equal to a given numeric or string value. Returns 0 if the value
is not comparable to the values set.

**Examples.**

``` rascal-shell
import analysis::statistics::Frequency;
D = [1, 2, 1, 1, 3, 5];
cumFreq(D, 1);
cumFreq(D, 2);
cumFreq(D, 10);
```

#### cumPct

  - `num cumPct(list[value] values, num n)`

  - `num cumPct(list[value] values, str s)`

**Synopsis.**

Cumulative percentage of values less than or equal to a given value.

**Description.**

Returns the cumulative percentage of values less than or equal to v (as a proportion between 0 and 1).

``` rascal-shell
import analysis::statistics::Frequency;
D = [1, 2, 1, 1, 3, 5];
cumPct(D, 1);
cumPct(D, 2);
cumPct(D, 10);
```

#### pct

  - `num pct(list[value] values, num n)`

  - `num pct(list[value] values, str s)`

**Synopsis.**

Percentage of values that are equal to a given value.

**Description.**

Returns the percentage of values that are equal to v (as a proportion between 0 and 1). .Examples

``` rascal-shell
import analysis::statistics::Frequency;
D = [1, 2, 1, 1, 3, 5];
pct(D, 1);
pct(D, 2);
pct(D, 10);
```

### Inference

**Usage.**

`import analysis::statistics::Inference;`

**Synopsis.**

Statistical inference methods.

**Description.**

The following functions are provided:

  - [chiSquare](#Libraries/analysis/statistics/Inference-chiSquare): Chi-square coefficient of data values.

  - [chiSquareTest](#Libraries/analysis/statistics/Inference-chiSquareTest): Chi-square test on data values.

  - [chiSquareTest](#Libraries/analysis/statistics/Inference-chiSquareTest):

  - [tTest](#Libraries/analysis/statistics/Inference-tTest): T-test on sample data.

  - [tTest](#Libraries/analysis/statistics/Inference-tTest):

  - [tTest](#Libraries/analysis/statistics/Inference-tTest):

  - [anovaFValue](#Libraries/analysis/statistics/Inference-anovaFValue): Analysis of Variance (ANOVA) f-value.

  - [anovaPValue](#Libraries/analysis/statistics/Inference-anovaPValue): Analysis of Variance (ANOVA) p-value.

  - [anovaTest](#Libraries/analysis/statistics/Inference-anovaTest): Analysis of Variance (ANOVA) test.

  - [gini](#Libraries/analysis/statistics/Inference-gini): Gini coefficient.

#### chiSquare

**Function.**

`num chiSquare(lrel[num expected, int observed] values)`

**Synopsis.**

Chi-square coefficient of data values.

**Description.**

Compute the [ChiSquare statistic](http://en.wikipedia.org/wiki/Chi-square_statistic) comparing observed and expected
frequency counts.

**Examples.**

Consider an example from the web page mentioned above. To test the hypothesis that a random sample of 100 people has
been drawn from a population in which men and women are equal in frequency, the observed number of men and women would
be compared to the theoretical frequencies of 50 men and 50 women. If there were 44 men in the sample and 56 women, then
we have the following:

``` rascal-shell
import analysis::statistics::Inference;
chiSquare([<50, 44>, <50, 56>])
```

#### chiSquareTest

  - `num chiSquareTest(lrel[num expected, int observed] values)`

  - `bool chiSquareTest(lrel[num expected, int observed] values, real alpha)`

**Synopsis.**

Chi-square test on data values.

**Description.**

Perform a [Chi-square test](http://en.wikipedia.org/wiki/Pearson%27s_chi-squared_test) comparing expected and observed
frequency counts. There are two forms of this test:

  - Returns the *observed significance level*, or p-value, associated with a Chi-square goodness of fit test comparing
    observed frequency counts to expected counts.

  - Performs a Chi-square goodness of fit test evaluating the null hypothesis that the observed counts conform to the
    frequency distribution described by the expected counts, with significance level `alpha` (0 \< `alpha` \< 0.5).
    Returns true iff the null hypothesis can be rejected with confidence 1 - `alpha`.

#### tTest

  - `num tTest(list[num] sample1, list[num] sample2)`

  - `bool tTest(list[num] sample1, list[num] sample2, num alpha)`

  - `bool tTest(num mu, list[num] sample, num alpha)`

**Synopsis.**

T-test on sample data.

**Description.**

Perform [student’s t-test](http://en.wikipedia.org/wiki/Student’s_t-test). The test is provided in three variants:

  - Returns the *observed significance level*, or *p-value*, associated with a two-sample, two-tailed t-test comparing
    the means of the input samples. The number returned is the smallest significance level at which one can reject the
    null hypothesis that the two means are equal in favor of the two-sided alternative that they are different. For a
    one-sided test, divide the returned value by 2.

The t-statistic used is `t = (m1 - m2) / sqrt(var1/n1 + var2/n2)` where

  - `n1` is the size of the first sample

  - `n2` is the size of the second sample;

  - `m1` is the mean of the first sample;

  - `m2` is the mean of the second sample;

  - `var1` is the variance of the first sample;

  - `var2` is the variance of the second sample.
    
      - Performs a two-sided t-test evaluating the null hypothesis that `sample1` and `sample2` are drawn from
        populations with the same mean, with significance level `alpha`. This test does not assume that the
        subpopulation variances are equal. Returns true iff the null hypothesis that the means are equal can be rejected
        with confidence 1 - `alpha`. To perform a 1-sided test, use `alpha` / 2.
    
      - Performs a two-sided t-test evaluating the null hypothesis that the mean of the population from which sample is
        drawn equals `mu`. Returns true iff the null hypothesis can be rejected with confidence 1 - `alpha`. To perform
        a 1-sided test, use `alpha` \* 2.

**Examples.**

We use the data from the following [example](http://web.mst.edu/~psyworld/texample.htm#1) to illustrate the t-test.
First, we compute the t-statistic using the formula given above.

``` rascal-shell
import util::Math;
import analysis::statistics::Descriptive;
import List;
s1 = [5,7,5,3,5,3,3,9];
s2 = [8,1,4,6,6,4,1,2];
(mean(s1) - mean(s2))/sqrt(variance(s1)/size(s1) + variance(s2)/size(s2));
```

This is the same result as obtained in the cited example. We can also compute it directly using the `tTest` functions:

``` rascal-shell
import analysis::statistics::Inference;
tTest(s1, s2);
```

Observe that this is a smaller value than comes out directly of the formula. Recall that: *The number returned is the
smallest significance level at which one can reject the null hypothesis that the two means are equal in favor of the
two-sided alternative that they are different.* Finally, we perform the test around the significance level we just
obtained:

``` rascal-shell
tTest(s1,s2,0.40);
tTest(s1,s2,0.50);
```

#### anovaFValue

**Function.**

`num anovaFValue(list[list[num]] categoryData)`

**Synopsis.**

Analysis of Variance (ANOVA) f-value.

**Description.**

Perform [Analysis of Variance test](http://en.wikipedia.org/wiki/Analysis_of_variance) also described
[here](http://www.statsoft.com/textbook/anova-manova/).

Compute the F statistic — also known as [F-test](http://en.wikipedia.org/wiki/F-test) — using the definitional formula
`F = msbg/mswg` where

  - `msbg` = between group mean square.

  - `mswg` = within group mean square.

are as defined [here](http://faculty.vassar.edu/lowry/ch13pt1.html).

#### anovaPValue

**Function.**

`num anovaPValue(list[list[num]] categoryData)`

**Synopsis.**

Analysis of Variance (ANOVA) p-value.

**Description.**

Perform [Analysis of Variance test](http://en.wikipedia.org/wiki/Analysis_of_variance) also described
[here](http://www.statsoft.com/textbook/anova-manova/).

Computes the exact p-value using the formula `p = 1 - cumulativeProbability(F)` where `F` is the
[anovaFValue](#Inference-anovaFValue).

#### anovaTest

**Function.**

`bool anovaTest(list[list[num]] categoryData, num alpha)`

**Synopsis.**

Analysis of Variance (ANOVA) test.

**Description.**

Perform [Analysis of Variance test](http://en.wikipedia.org/wiki/Analysis_of_variance) also described
[here](http://www.statsoft.com/textbook/anova-manova/).

Returns true iff the estimated p-value is less than `alpha` (0 \< `alpha` ⇐ 0.5).

The exact p-value is computed using the formula `p = 1 - cumulativeProbability(F)` where `F` is the
[anovaFValue](#Inference-anovaFValue).

#### gini

**Function.**

`real gini(lrel[num observation,int frequency] values)`

**Synopsis.**

Gini coefficient.

**Description.**

Computes the [Gini coefficient](http://en.wikipedia.org/wiki/Gini_coefficient) that measures the inequality among values
in a frequency distribution.

The Gini coefficient is computed using Deaton’s formula and returns a value between 0 (completely equal distribution)
and 1 (completely unequal distribution).

**Examples.**

``` rascal-shell
import analysis::statistics::Inference;
```

A completely equal distribution:

``` rascal-shell
gini([<10000, 1>, <10000, 1>, <10000, 1>]);
```

A rather unequal distribution:

``` rascal-shell
gini([<998000, 1>, <20000, 3>, <117500, 1>, <70000, 2>, <23500, 5>, <45200,1>]);
```

### SimpleRegression

**Usage.**

`import analysis::statistics::SimpleRegression;`

**Synopsis.**

Statistical methods for simple regression.

**Description.**

The following functions are provided:

  - [intercept](#Libraries/analysis/statistics/SimpleRegression-intercept): Intercept of regression line.

  - [interceptStdErr](#Libraries/analysis/statistics/SimpleRegression-interceptStdErr): Standard error of intercept
    estimate.

  - [meanSquareError](#Libraries/analysis/statistics/SimpleRegression-meanSquareError): Sum of squared errors divided by
    the degrees of freedom.

  - [R](#Libraries/analysis/statistics/SimpleRegression-R): Pearson’s product-moment correlation coefficient.

  - [regressionSumSquares](#Libraries/analysis/statistics/SimpleRegression-regressionSumSquares): Sum of squared
    deviations of the predicted y values about their mean.

  - [RSquare](#Libraries/analysis/statistics/SimpleRegression-RSquare): Coefficient of determination.

  - [significance](#Libraries/analysis/statistics/SimpleRegression-significance): Significance of the slope correlation.

  - [slope](#Libraries/analysis/statistics/SimpleRegression-slope): Slope of regression line.

  - [slopeConfidenceInterval](#Libraries/analysis/statistics/SimpleRegression-slopeConfidenceInterval): The 95% slope
    confidence interval.

  - [slopeStdErr](#Libraries/analysis/statistics/SimpleRegression-slopeStdErr): Standard error of slope estimate.

  - [sumOfCrossProducts](#Libraries/analysis/statistics/SimpleRegression-sumOfCrossProducts): Sum of cross products of
    observations.

  - [sumSquaredErrors](#Libraries/analysis/statistics/SimpleRegression-sumSquaredErrors): Sum of squared errors.

  - [totalSumSquares](#Libraries/analysis/statistics/SimpleRegression-totalSumSquares): Sum of squared deviations.

  - [XSumSquares](#Libraries/analysis/statistics/SimpleRegression-XSumSquares): Sum of squared deviations of x values
    about their mean.

  - [predict](#Libraries/analysis/statistics/SimpleRegression-predict): Predict a value.

#### intercept

**Function.**

`num intercept(lrel[num,num] values) throws IllegalArgument`

**Synopsis.**

Intercept of regression line. .Description

Returns the [intercept](http://en.wikipedia.org/wiki/Root_of_a_function) of the estimated regression line. The least
squares estimate of the intercept is computed using these [normal equations](http://www.xycoon.com/estimation4.htm).

#### interceptStdErr

**Function.**

`num interceptStdErr(lrel[num,num] values) throws IllegalArgument`

**Synopsis.**

Standard error of intercept estimate. .Description Returns the [standard error of the intercept
estimate](http://www.xycoon.com/standarderrorb0.htm), usually denoted s(b0).

#### meanSquareError

**Function.**

`num meanSquareError(lrel[num,num] values) throws IllegalArgument`

**Synopsis.**

Sum of squared errors divided by the degrees of freedom.

**Description.**

Returns the sum of squared errors divided by the degrees of freedom, usually abbreviated MSE.

#### R

**Function.**

`num R(lrel[num,num] values) throws IllegalArgument`

**Synopsis.**

Pearson’s product-moment correlation coefficient.

**Description.**

Computes Pearson’s product-moment correlation coefficient. More functions related to this coefficient can be found in
[Correlation](#statistics-Correlation).

#### regressionSumSquares

**Function.**

`num regressionSumSquares(list[tuple[num,num]] values) throws IllegalArgument`

**Synopsis.**

Sum of squared deviations of the predicted y values about their mean.

**Description.**

Returns the sum of squared deviations of the predicted y values about their mean (which equals the mean of y). This is
usually abbreviated SSR or [SSM](http://www.xycoon.com/SumOfSquares.htm).

#### RSquare

**Function.**

`num RSquare(lrel[num,num] values) throws IllegalArgument`

**Synopsis.**

Coefficient of determination. .Description

Returns the [coefficient of determination](http://en.wikipedia.org/wiki/Coefficient_of_determination) usually denoted
r\_\_<sup>2</sup>. It provides a measure of how well future outcomes are likely to be predicted by the regression model.

#### significance

**Function.**

`num significance(lrel[num,num] values) throws IllegalArgument`

**Synopsis.**

Significance of the slope correlation. .Description

Returns the significance level of the slope (equiv) correlation. Specifically, the returned value is the smallest alpha
such that the slope confidence interval with significance level equal to alpha does not include 0. On regression output,
this is often denoted Prob(|t| \> 0)

**Pitfalls.**

The validity of this statistic depends on the assumption that the observations included in the model are drawn from a
[Bivariate Normal Distribution](http://en.wikipedia.org/wiki/Bivariate_normal_distribution).

#### slope

**Function.**

`num slope(lrel[num,num] values) throws IllegalArgument`

**Synopsis.**

Slope of regression line. .Description Returns the slope of the estimated regression line. The least squares estimate of
the slope is computed using the [normal equations](http://www.xycoon.com/estimation4.htm). The slope is sometimes
denoted b1.

#### slopeConfidenceInterval

**Function.**

`num slopeConfidenceInterval(lrel[num,num] values) throws IllegalArgument`

**Synopsis.**

The 95% slope confidence interval.

**Description.**

Returns the half-width of a 95% confidence interval for the slope estimate. The 95% confidence interval is

(slope - slopeConfidenceInterval, slope + slopeConfidenceInterval)

**Pitfalls.**

The validity of this statistic depends on the assumption that the observations included in the model are drawn from a
[Bivariate Normal Distribution](http://en.wikipedia.org/wiki/Bivariate_normal_distribution).

#### slopeStdErr

**Function.**

`num slopeStdErr(lrel[num,num] values) throws IllegalArgument`

**Synopsis.**

Standard error of slope estimate. .Description

Returns the [standard error of the slope estimate](http://www.xycoon.com/standarderrorb0.htm), usually denoted s(b1).

#### sumOfCrossProducts

**Function.**

`num sumOfCrossProducts(lrel[num,num] values) throws IllegalArgument`

**Synopsis.**

Sum of cross products of observations. .Description

Returns the sum of crossproducts, x*<sub>i</sub>\*y*<sub>i</sub>.

#### sumSquaredErrors

**Function.**

`num sumSquaredErrors(lrel[num,num] values) throws IllegalArgument`

**Synopsis.**

Sum of squared errors. .Description

Returns the sum of squared errors (SSE) associated with the regression model. The sum is computed using the
computational formula

SSE = SYY - (SXY \* SXY / SXX)

where SYY is the sum of the squared deviations of the y values about their mean, SXX is similarly defined and SXY is the
sum of the products of x and y mean deviations.

The return value is constrained to be non-negative, i.e., if due to rounding errors the computational formula returns a
negative result, 0 is returned.

#### totalSumSquares

**Function.**

`num totalSumSquares(lrel[num,num] values) throws IllegalArgument`

**Synopsis.**

Sum of squared deviations. .Description

Returns the sum of squared deviations of the y values about their mean. This is defined as
[SSTO](http://www.xycoon.com/SumOfSquares.htm).

#### XSumSquares

**Function.**

`num XSumSquares(lrel[num,num] values) throws IllegalArgument`

**Synopsis.**

Sum of squared deviations of x values about their mean.

**Description.**

Returns the sum of squared deviations of the x values about their mean.

#### predict

**Function.**

`num predict(lrel[num,num] values, num x) throws IllegalArgument`

**Synopsis.**

Predict a value. .Description

Returns the "predicted" `y` value associated with the supplied `x` value, based on regression model derived from the
provided data values:

`predict(x) = intercept + slope * x`

# lang

**Synopsis.**

Definitions and tools for various languages.

  - [RSF](#lang-RSF): Functions for reading/writing the Rigi Standard Format (RSF).
    
      - [readRSF](#RSF-readRSF): Read a file in Rigi Standard Format (RSF).

  - [csv](#lang-csv): Comma-Separated Values (CSV).

  - [java](#lang-java): Definitions and tools related to the Java language.
    
      - [jdt](#java-jdt): tools for Java provided via reusing the Eclipse JDT.
    
      - [m3](#java-m3): Java-specific version of the M3 model.

  - [xml](#lang-xml): XML utilities.

## RSF

**Synopsis.**

Functions for reading/writing the Rigi Standard Format (RSF).

**Usage.**

`import lang::RSF::IO;`

**Description.**

Rigi Standard Format (RSF) is a textual format to represent binary relations and is used to exchange relational facts
between different tools.

An RSF file consists of triples of the form

``` rascal
$RelName$ $Elem_1$ $Elem_2$
```

where *RelName* is the name of a relation and *Elem*<sub>1</sub> and *Elem*<sub>2</sub> are element values.

Provides the following function:

  - [readRSF](#RSF-readRSF): Read a file in Rigi Standard Format (RSF).

**Examples.**

``` rascal
call    main          printf
call    main          listcreate
data    main          FILE
data    listcreate    List
```

defines two relations named `call` and `data`.

### readRSF

**Synopsis.**

Read a file in Rigi Standard Format (RSF).

**Function.**

`map[str, rel[str,str]] readRSF(str nameRSFFile) throws IO(str msg)`

**Description.**

Since an RSF file may define more than one relation, a mapping from relation name to relation value is returned.

**Examples.**

For the RSF file:

``` rascal
call    main          printf
call    main          listcreate
data    main          FILE
data    listcreate    List
```

`readRSF` will create the following map:

``` rascal
("call" : {<"main", "printf">, <"main", "listcreate">},
 "data" : {<"main", "FILE">, <"listcreate", "List">})
```

## csv

**Synopsis.**

Comma-Separated Values (CSV).

**Description.**

The [CSV format](http://tools.ietf.org/html/rfc4180) was originally intended for exchanging information between
spreadsheets and databases but is today used as an exchange format in many other application domains as well. A CSV file
has the following structure:

  - An optional header line consisting of field names separated by comma’s.

  - One or more lines consisting of values separated by comma’s.

Some adaptation is possible and includes:

  - Including or excluding the header line (use `"header" : "true"` in the option map for the various functions).

  - Using another separator than a comma (use `"separator" : ";"` in the option map for the various functions, where
    `";"` can be any single character string).

The following functions are provided in the [???](#Rascal-Libraries-lang-csv-IO) library:

**Examples.**

Here is an example CSV file using the default separator (","):

``` rascal
field_name1,field_name2,field_name3
aaa,bbb,ccc
zzz,yyy,xxx
```

Here is an example CSV file using a non-default separator (";"):

``` rascal
position;artist;title;year
1;Eagles;Hotel California;1977
2;Queen;Bohemian rhapsody;1975
3;Boudewijn de Groot;Avond;1997
```

## java

**Synopsis.**

Definitions and tools related to the Java language.

### jdt

**Synopsis.**

tools for Java provided via reusing the Eclipse JDT

#### m3

**Synopsis.**

functions for generating M3 models starting from Eclipse projects

### m3

**Synopsis.**

Java-specific version of the M3 model

**Description.**

This API extends [m3](#analysis-m3) with Java specific functionality:

  - [AST](#m3-AST): defines AST node types for Java.

  - [Core](#m3-Core): extends the M3 \[$analysis/m3/Core\] with Java specific concepts such as inheritance and
    overriding.
    
      - [typeDependency](#Core-typeDependency):

  - [TypeHierarchy](#m3-TypeHierarchy):

  - [TypeSymbol](#m3-TypeSymbol):

Use this API to extract Java m3 models starting from Eclipse Java projects:

  - [AST](#m3-AST): defines AST node types for Java.

  - [Core](#m3-Core): extends the M3 \[$analysis/m3/Core\] with Java specific concepts such as inheritance and
    overriding.
    
      - [typeDependency](#Core-typeDependency):

  - [TypeHierarchy](#m3-TypeHierarchy):

  - [TypeSymbol](#m3-TypeSymbol):

#### AST

**Usage.**

`import lang::java::m3::AST;`

**Synopsis.**

defines AST node types for Java

##### Declaration

**Types.**

``` rascal
data Declaration
     = \compilationUnit(list[Declaration] imports, list[Declaration] types)
     | \compilationUnit(Declaration package, list[Declaration] imports, list[Declaration] types)
     | \enum(str name, list[Type] implements, list[Declaration] constants, list[Declaration] body)
     | \enumConstant(str name, list[Expression] arguments, Declaration class)
     | \enumConstant(str name, list[Expression] arguments)
     | \class(str name, list[Type] extends, list[Type] implements, list[Declaration] body)
     | \class(list[Declaration] body)
     | \interface(str name, list[Type] extends, list[Type] implements, list[Declaration] body)
     | \field(Type \type, list[Expression] fragments)
     | \initializer(Statement initializerBody)
     | \method(Type \return, str name, list[Declaration] parameters, list[Expression] exceptions, Statement impl)
     | \method(Type \return, str name, list[Declaration] parameters, list[Expression] exceptions)
     | \constructor(str name, list[Declaration] parameters, list[Expression] exceptions, Statement impl)
     | \import(str name)
     | \package(str name)
     | \package(Declaration parentPackage, str name)
     | \variables(Type \type, list[Expression] \fragments)
     | \typeParameter(str name, list[Type] extendsList)
     | \annotationType(str name, list[Declaration] body)
     | \annotationTypeMember(Type \type, str name)
     | \annotationTypeMember(Type \type, str name, Expression defaultBlock)
     | \parameter(Type \type, str name, int extraDimensions)
     | \vararg(Type \type, str name)
     ;
```

##### Expression

**Types.**

``` rascal
data Expression
     = \arrayAccess(Expression array, Expression index)
     | \newArray(Type \type, list[Expression] dimensions, Expression init)
     | \newArray(Type \type, list[Expression] dimensions)
     | \arrayInitializer(list[Expression] elements)
     | \assignment(Expression lhs, str operator, Expression rhs)
     | \cast(Type \type, Expression expression)
     | \characterLiteral(str charValue)
     | \newObject(Expression expr, Type \type, list[Expression] args, Declaration class)
     | \newObject(Expression expr, Type \type, list[Expression] args)
     | \newObject(Type \type, list[Expression] args, Declaration class)
     | \newObject(Type \type, list[Expression] args)
     | \qualifiedName(Expression qualifier, Expression expression)
     | \conditional(Expression expression, Expression thenBranch, Expression elseBranch)
     | \fieldAccess(bool isSuper, Expression expression, str name)
     | \fieldAccess(bool isSuper, str name)
     | \instanceof(Expression leftSide, Type rightSide)
     | \methodCall(bool isSuper, str name, list[Expression] arguments)
     | \methodCall(bool isSuper, Expression receiver, str name, list[Expression] arguments)
     | \null()
     | \number(str numberValue)
     | \booleanLiteral(bool boolValue)
     | \stringLiteral(str stringValue)
     | \type(Type \type)
     | \variable(str name, int extraDimensions)
     | \variable(str name, int extraDimensions, Expression \initializer)
     | \bracket(Expression expression)
     | \this()
     | \this(Expression thisExpression)
     | \super()
     | \declarationExpression(Declaration declaration)
     | \infix(Expression lhs, str operator, Expression rhs)
     | \postfix(Expression operand, str operator)
     | \prefix(str operator, Expression operand)
     | \simpleName(str name)
     | \markerAnnotation(str typeName)
     | \normalAnnotation(str typeName, list[Expression] memberValuePairs)
     | \memberValuePair(str name, Expression \value)
     | \singleMemberAnnotation(str typeName, Expression \value)
     ;
```

##### Statement

**Types.**

``` rascal
data Statement
     = \assert(Expression expression)
     | \assert(Expression expression, Expression message)
     | \block(list[Statement] statements)
     | \break()
     | \break(str label)
     | \continue()
     | \continue(str label)
     | \do(Statement body, Expression condition)
     | \empty()
     | \foreach(Declaration parameter, Expression collection, Statement body)
     | \for(list[Expression] initializers, Expression condition, list[Expression] updaters, Statement body)
     | \for(list[Expression] initializers, list[Expression] updaters, Statement body)
     | \if(Expression condition, Statement thenBranch)
     | \if(Expression condition, Statement thenBranch, Statement elseBranch)
     | \label(str name, Statement body)
     | \return(Expression expression)
     | \return()
     | \switch(Expression expression, list[Statement] statements)
     | \case(Expression expression)
     | \defaultCase()
     | \synchronizedStatement(Expression lock, Statement body)
     | \throw(Expression expression)
     | \try(Statement body, list[Statement] catchClauses)
     | \try(Statement body, list[Statement] catchClauses, Statement \finally)
     | \catch(Declaration exception, Statement body)
     | \declarationStatement(Declaration declaration)
     | \while(Expression condition, Statement body)
     | \expressionStatement(Expression stmt)
     | \constructorCall(bool isSuper, Expression expr, list[Expression] arguments)
     | \constructorCall(bool isSuper, list[Expression] arguments)
     ;
```

##### Type

**Types.**

``` rascal
data Type
     = arrayType(Type \type)
     | parameterizedType(Type \type)
     | qualifiedType(Type qualifier, Expression simpleName)
     | simpleType(Expression typeName)
     | unionType(list[Type] types)
     | wildcard()
     | upperbound(Type \type)
     | lowerbound(Type \type)
     | \int()
     | short()
     | long()
     | float()
     | double()
     | char()
     | string()
     | byte()
     | \void()
     | \boolean()
     ;
```

##### Modifier

**Types.**

``` rascal
data Modifier
     = \private()
     | \public()
     | \protected()
     | \friendly()
     | \static()
     | \final()
     | \synchronized()
     | \transient()
     | \abstract()
     | \native()
     | \volatile()
     | \strictfp()
     | \annotation(Expression \anno)
     | \onDemand()
     | \default()
     ;
```

##### getPaths

**Function.**

`set[loc] getPaths(loc dir, str suffix)`

##### findRoots

**Function.**

`set[loc] findRoots(set[loc] folders)`

##### createAstFromFile

**Function.**

`Declaration createAstFromFile(loc file, bool collectBindings, bool errorRecovery = false, list[loc] sourcePath = [],
list[loc] classPath = [], str javaVersion = "1.7")`

**Synopsis.**

Creates AST from a file

##### createAstsFromFiles

**Function.**

`set[Declaration] createAstsFromFiles(set[loc] file, bool collectBindings, bool errorRecovery = false, list[loc]
sourcePath = [], list[loc] classPath = [], str javaVersion = "1.7")`

**Synopsis.**

Creates AST from a file

##### createAstFromString

**Function.**

`Declaration createAstFromString(loc fileName, str source, bool collectBinding, bool errorRecovery = false, list[loc]
sourcePath = [], list[loc] classPath = [], str javaVersion = "1.7")`

Creates ASTs from an input string

##### createAstsFromDirectory

**Function.**

`set[Declaration] createAstsFromDirectory(loc project, bool collectBindings, bool errorRecovery = false, str javaVersion
= "1.7" )`

Creates ASTs from a project

#### Core

**Usage.**

`import lang::java::m3::Core;`

**Synopsis.**

extends the M3 \[$analysis/m3/Core\] with Java specific concepts such as inheritance and overriding.

**Description.**

For a quick start, go find [???](#createM3FromEclipseProject).

##### M3

**Types.**

``` rascal
data M3 (
    rel[loc from, loc to] extends = {},            // classes extending classes and interfaces extending interfaces
    rel[loc from, loc to] implements = {},         // classes implementing interfaces
    rel[loc from, loc to] methodInvocation = {},   // methods calling each other (including constructors)
    rel[loc from, loc to] fieldAccess = {},        // code using data (like fields)
    rel[loc from, loc to] typeDependency = {},     // using a type literal in some code (types of variables, annotations)
    rel[loc from, loc to] methodOverrides = {},    // which method override which other methods
    rel[loc declaration, loc annotation] annotations = {}
)
```

##### Language

**Types.**

``` rascal
data Language (str version="")
     = java()
     ;
```

##### composeJavaM3

**Function.**

`M3 composeJavaM3(loc id, set[M3] models)`

##### diffJavaM3

**Function.**

`M3 diffJavaM3(loc id, list[M3] models)`

##### createM3FromFile

**Function.**

`M3 createM3FromFile(loc file, bool errorRecovery = false, list[loc] sourcePath = [], list[loc] classPath = [], str
javaVersion = "1.7")`

##### createM3sFromFiles

**Function.**

`set[M3] createM3sFromFiles(set[loc] files, bool errorRecovery = false, list[loc] sourcePath = [], list[loc] classPath =
[], str javaVersion = "1.7")`

##### createM3FromFiles

**Function.**

`M3 createM3FromFiles(loc projectName, set[loc] files, bool errorRecovery = false, list[loc] sourcePath = [], list[loc]
classPath = [], str javaVersion = "1.7")`

##### createM3sAndAstsFromFiles

**Function.**

`tuple[set[M3], set[Declaration]] createM3sAndAstsFromFiles(set[loc] files, bool errorRecovery = false, list[loc]
sourcePath = [], list[loc] classPath = [], str javaVersion = "1.7")`

##### createM3FromString

**Function.**

`M3 createM3FromString(loc fileName, str contents, bool errorRecovery = false, list[loc] sourcePath = [], list[loc]
classPath = [], str javaVersion = "1.7")`

##### createM3FromJarClass

**Function.**

`M3 createM3FromJarClass(loc jarClass, list[loc] classPath = [])`

##### createM3FromSingleClass

**Function.**

`M3 createM3FromSingleClass(loc jarClass, str className)`

##### createM3FromJarFile

**Function.**

`M3 createM3FromJarFile(loc jarLoc, list[loc] classPath = [|system:///|])`

##### createM3FromDirectory

**Function.**

`M3 createM3FromDirectory(loc project, bool errorRecovery = false, str javaVersion = "1.7", list[loc] classPath = [])`

**Synopsis.**

globs for jars, class files and java files in a directory and tries to compile all source files into an \[$analysis/m3\]
model

##### createM3FromJar

**Function.**

`M3 createM3FromJar(loc jarFile, list[loc] classPath = [])`

##### unregisterJavaProject

**Function.**

`void unregisterJavaProject(loc project)`

##### getMethodSignature

**Function.**

`str getMethodSignature(loc method)`

##### isCompilationUnit

**Function.**

`bool isCompilationUnit(loc entity)`

##### isPackage

**Function.**

`bool isPackage(loc entity)`

##### isClass

**Function.**

`bool isClass(loc entity)`

##### isConstructor

**Function.**

`bool isConstructor(loc entity)`

##### isMethod

**Function.**

`bool isMethod(loc entity)`

##### isParameter

**Function.**

`bool isParameter(loc entity)`

##### isVariable

**Function.**

`bool isVariable(loc entity)`

##### isField

**Function.**

`bool isField(loc entity)`

##### isInterface

**Function.**

`bool isInterface(loc entity)`

##### isEnum

**Function.**

`bool isEnum(loc entity)`

##### isType

**Function.**

`bool isType(loc entity)`

##### files

**Function.**

`set[loc] files(rel[loc, loc] containment)`

##### declaredMethods

**Function.**

`rel[loc, loc] declaredMethods(M3 m, set[Modifier] checkModifiers = {})`

##### declaredFields

**Function.**

`rel[loc, loc] declaredFields(M3 m, set[Modifier] checkModifiers = {})`

##### declaredFieldsX

**Function.**

`rel[loc, loc] declaredFieldsX(M3 m, set[Modifier] checkModifiers = {})`

##### declaredTopTypes

**Function.**

`rel[loc, loc] declaredTopTypes(M3 m)`

##### declaredSubTypes

**Function.**

`rel[loc, loc] declaredSubTypes(M3 m)`

##### classes

**Function.**

`set[loc] classes(M3 m)`

##### interfaces

**Function.**

`set[loc] interfaces(M3 m)`

##### packages

**Function.**

`set[loc] packages(M3 m)`

##### variables

**Function.**

`set[loc] variables(M3 m)`

##### parameters

**Function.**

`set[loc] parameters(M3 m)`

##### fields

**Function.**

`set[loc] fields(M3 m)`

##### methods

**Function.**

`set[loc] methods(M3 m)`

##### constructors

**Function.**

`set[loc] constructors(M3 m)`

##### enums

**Function.**

`set[loc] enums(M3 m)`

##### types

**Function.**

`set[loc] types(M3 m)`

##### elements

**Function.**

`set[loc] elements(M3 m, loc parent)`

##### fields

**Function.**

`set[loc] fields(M3 m, loc class)`

##### methods

**Function.**

`set[loc] methods(M3 m, loc class)`

##### constructors

**Function.**

`set[loc] constructors(M3 m, loc class)`

##### nestedClasses

**Function.**

`set[loc] nestedClasses(M3 m, loc class)`

\<AUTOINSERTED\>

##### typeDependency

**Types.**

``` rascal
anno rel[loc from, loc to] M3@typeDependency;
```

**Usage.**

\</AUTOINSERTED\>

#### TypeHierarchy

**Usage.**

`import lang::java::m3::TypeHierarchy;`

##### getDeclaredTypeHierarchy

**Function.**

`rel[loc from, loc to] getDeclaredTypeHierarchy(M3 model)`

#### TypeSymbol

**Usage.**

`import lang::java::m3::TypeSymbol;`

##### Bound

**Types.**

``` rascal
data Bound
     = \super(list[TypeSymbol] bound)
     | \extends(list[TypeSymbol] bound)
     | \unbounded()
     ;
```

##### TypeSymbol

**Types.**

``` rascal
data TypeSymbol
     = \class(loc decl, list[TypeSymbol] typeParameters)
     | \interface(loc decl, list[TypeSymbol] typeParameters)
     | \enum(loc decl)
     | \method(loc decl, list[TypeSymbol] typeParameters, TypeSymbol returnType, list[TypeSymbol] parameters)
     | \constructor(loc decl, list[TypeSymbol] parameters)
     | \typeParameter(loc decl, Bound upperbound)
     | \typeArgument(loc decl)
     | \wildcard(Bound bound)
     | \capture(Bound bound, TypeSymbol wildcard)
     | \intersection(list[TypeSymbol] types)
     | \union(list[TypeSymbol] types)
     | \object()
     | \int()
     | \float()
     | \double()
     | \short()
     | \boolean()
     | \char()
     | \byte()
     | \long()
     | \void()
     | \null()
     | \array(TypeSymbol component, int dimension)
     | \typeVariable(loc decl)
     | \unresolved()
     ;
```

##### subtype

**Function.**

`default bool subtype(TypeSymbol s, TypeSymbol t)`

##### lub

**Function.**

`default TypeSymbol lub(TypeSymbol s, TypeSymbol t)`

## xml

**Synopsis.**

XML utilities

**Description.**

[XML](http://en.wikipedia.org/wiki/XML) is a widely used markup language for encoding and exchanging documents.

The following functions and datatypes are provided, all based on the Document Object Model (DOM):

# util

**Synopsis.**

Utilities: functions, data types and interfaces with external libraries.

  - [Benchmark](#util-Benchmark): Functions for time measurement and benchmarking.

  - [Clipboard](#util-Clipboard):

  - [Eval](#util-Eval): Evaluate a (list of) Rascal commands and return the value of the last command.

  - [Math](#util-Math): Mathematical functions.

  - [Monitor](#util-Monitor): Monitor the progress of a task/job.

  - [PriorityQueue](#util-PriorityQueue): A `PriorityQueue` datatype and associated functions.

  - [Prompt](#util-Prompt):

  - [Resources](#util-Resources): A `Resource` datatype and related functions on Eclipse resources.
    
      - [dependencies](#Resources-dependencies): Compute the (transitive) dependencies of a project.
    
      - [getProject](#Resources-getProject): Retrieve the hierarchical representation of a single named project.
    
      - [projects](#Resources-projects): Retrieve the set of project locations of the current Eclipse workspace.
    
      - [references](#Resources-references): The set of projects that are referenced by a project.
    
      - [root](#Resources-root): Retrieve a full hierarchical representation of all resources in the Eclipse workspace.

  - [ShellExec](#util-ShellExec): Execute and manage external processes.

## Benchmark

**Usage.**

`import util::Benchmark;`

**Synopsis.**

Functions for time measurement and benchmarking.

**Description.**

The `Benchmark` library provides the following functions:

  - [heapDump](#Libraries/util/Benchmark-heapDump): Write a JVM heap dump to a file.

  - [getFreeMemory](#Libraries/util/Benchmark-getFreeMemory): .Synopsis returns the free memory of the current JVM

  - [getTotalMemory](#Libraries/util/Benchmark-getTotalMemory): .Synopsis returns the current total memory allocated by
    the current JVM

  - [getMaxMemory](#Libraries/util/Benchmark-getMaxMemory): .Synopsis returns the maximum amount of memory that is
    available to the current JVM

  - [getUsedMemory](#Libraries/util/Benchmark-getUsedMemory):

  - [getMaxFreeMemory](#Libraries/util/Benchmark-getMaxFreeMemory):

  - [cpuTime](#Libraries/util/Benchmark-cpuTime): CPU time in nanoseconds (10<sup>-9</sup> sec).

  - [cpuTime](#Libraries/util/Benchmark-cpuTime):

  - [systemTime](#Libraries/util/Benchmark-systemTime): System time in nanoseconds (10<sup>-9</sup> sec).

  - [systemTime](#Libraries/util/Benchmark-systemTime):

  - [userTime](#Libraries/util/Benchmark-userTime): User time in nanoseconds (10<sup>-9</sup> sec).

  - [userTime](#Libraries/util/Benchmark-userTime):

  - [realTime](#Libraries/util/Benchmark-realTime): Current time in milliseconds (10<sup>-3</sup> sec).

  - [realTime](#Libraries/util/Benchmark-realTime):

  - [benchmark](#Libraries/util/Benchmark-benchmark): Measure and report the execution time of name:void-closure pairs

  - [benchmark](#Libraries/util/Benchmark-benchmark):

  - [getNanoTime](#Libraries/util/Benchmark-getNanoTime): Current time in nanoseconds (10<sup>-9</sup> sec) since
    January 1, 1970 GMT.

  - [getMilliTime](#Libraries/util/Benchmark-getMilliTime): Current time in milliseconds (10<sup>-3</sup> sec) since
    January 1, 1970 GMT.

  - [gc](#Libraries/util/Benchmark-gc): Force a garbage collection.

### heapDump

**Function.**

`void heapDump(loc file, bool live=true)`

**Synopsis.**

Write a JVM heap dump to a file.

  - The file parameter has to be of the `file` scheme.

  - The live parameter restricts the dump to only live objects.

### getFreeMemory

**Function.**

`int getFreeMemory()`

**Description.**

This returns the number of bytes that can be allocated still agains the current result of `getTotalMemory`.

### getTotalMemory

**Function.**

`int getTotalMemory()`

**Description.**

This returns the number of bytes currently allocated for use by the JVM. The number can change over time but it’s never
higher than `getMaxMemory()`

### getMaxMemory

**Function.**

`int getMaxMemory()`

**Description.**

This returns the number of bytes configured as maximum heap size of the current JVM.

### getUsedMemory

**Function.**

`int getUsedMemory()`

### getMaxFreeMemory

**Function.**

`int getMaxFreeMemory()`

### cpuTime

  - `int cpuTime()`

  - `int cpuTime(void () block)`

**Synopsis.**

CPU time in nanoseconds (10<sup>-9</sup> sec).

  - Current cpu time in *nanoseconds* (10<sup>-9</sup> sec) since the start of the thread that runs the code that calls
    this function.

  - The cpu time in nanoseconds used by the execution of the code `block`.

**Examples.**

We use the `fac` function described in [Factorial](/Recipes#Basic-Factorial) as example:

``` rascal-shell
import util::Benchmark;
import demo::basic::Factorial;
```

Here we measure time by using separate calls to `cpuTime` before and after a call to `fac`.

``` rascal-shell
before = cpuTime();
fac(50);
cpuTime() - before;
```

The code to be measured can also be passed as a function parameter to `cpuTime`:

``` rascal-shell
cpuTime( void() { fac(50); } );
```

These two timings for the same task may differ significantly due to the way these statements are executed here in the
tutor.

### systemTime

  - `int systemTime()`

  - `int systemTime(void () block)`

**Synopsis.**

System time in nanoseconds (10<sup>-9</sup> sec).

  - Current system time in nanoseconds (10<sup>-9</sup> sec) since the start of the thread that runs the code that calls
    this function.

  - System time in nanoseconds needed to execute the code `block`.

**Examples.**

We use the `fac` function described in [Factorial](/Recipes#Basic-Factorial) as example:

``` rascal-shell
import util::Benchmark;
import demo::basic::Factorial;
```

Here we measure time by using separate calls to `sytemTime` before and after a call to `fac`.

``` rascal-shell
before = systemTime();
fac(50);
systemTime() - before;
```

The code to be measured can also be passed as a function parameter to `systemTime`:

``` rascal-shell
systemTime( void() { fac(50); } );
```

### userTime

  - `int userTime()`

  - `int userTime(void () block)`

**Synopsis.**

User time in nanoseconds (10<sup>-9</sup> sec).

  - Current time in *nanoseconds* (10<sup>-9</sup> sec) since the start of the thread that runs the code that calls this
    function.

  - User time in nanoseconds needed to execute the code `block`.

**Examples.**

We use the `fac` function described in [Factorial](/Recipes#Basic-Factorial) as example:

``` rascal-shell
import util::Benchmark;
import demo::basic::Factorial;
```

Here we measure time by using separate calls to `userTime` before and after a call to `fac`.

``` rascal-shell
before = userTime();
fac(50);
userTime() - before;
```

The code to be measured can also be passed as a function parameter to `userTime`:

``` rascal-shell
userTime( void() { fac(50); } );
```

### realTime

  - `int realTime()`

  - `int realTime(void () block)`

**Synopsis.**

Current time in milliseconds (10<sup>-3</sup> sec).

  - Current system time in *milliseconds* (10<sup>-3</sup> sec) since January 1, 1970 GMT.

  - Real time in milliseconds needed to execute the code `block`.

**Pitfalls.**

This function is a competitor for the [now](#DateTime-now) function that provides a [datetime](/Rascal#Values-Datetime)
value for the current time.

### benchmark

  - `map[str,num] benchmark(map[str, void()] Cases)`

  - `map[str,num] benchmark(map[str, void()] Cases, int (void ()) duration)`

**Synopsis.**

Measure and report the execution time of name:void-closure pairs

**Description.**

Given is a map that maps strings (used as label to identify each case) to void-closures that execute the code to be
benchmarked. An optional `duration` argument can be used to specify the function to perform the actual measurement. By
default the function [realTime](#Benchmark-realTime) is used. A map of labels and durations is returned.

**Examples.**

We use the `fac` function described in [Factorial](/Recipes#Basic-Factorial) as example:

``` rascal-shell
import util::Benchmark;
import demo::basic::Factorial;
```

We measure two calls to the factorial function with arguments `100`, respectively, `200` (using by default
[realTime](#Benchmark-realTime) that returns milliseconds):

``` rascal-shell
benchmark( ("fac100" : void() {fac(100);}, "fac200" : void() {fac(200);}) );
```

We can do the same using [userTime](#Benchmark-userTime) that returns nanoseconds:

``` rascal-shell
benchmark( ("fac100" : void() {fac(100);}, "fac200" : void() {fac(200);}), userTime );
```

### getNanoTime

**Function.**

`int getNanoTime()`

**Synopsis.**

Current time in nanoseconds (10<sup>-9</sup> sec) since January 1, 1970 GMT. .Description

### getMilliTime

**Function.**

`int getMilliTime()`

**Synopsis.**

Current time in milliseconds (10<sup>-3</sup> sec) since January 1, 1970 GMT.

**Description.**

This function is a synonym for [realTime](#Benchmark-realTime) and gives the wall clock time in milliseconds.

### gc

**Function.**

`int gc()`

**Synopsis.**

Force a garbage collection.

**Description.**

This function forces a garbage collection and can, for instance, be used before running a benchmark.

## Clipboard

> **Warning**
> 
> documentation awaits Eclipse integration

## Eval

**Usage.**

`import util::Eval;`

### Result

**Types.**

``` rascal
data Result[&T]
     = ok()
     | result(&T val)
     ;
```

### Exception

**Types.**

``` rascal
data Exception
     = StaticError(str message, loc location)
     ;
```

### eval

  - `Result[&T] eval(type[&T] typ, str command) throws Timeout, StaticError, ParseError`

  - `Result[value] eval(str command)`

  - `Result[&T] eval(type[&T] typ, list[str] commands) throws Timeout, StaticError, ParseError`

  - `Result[value] eval(list[str] commands)`

  - `Result[&T] eval(type[&T] typ, str command, int duration) throws Timeout, StaticError, ParseError`

  - `Result[value] eval(str command, int duration)`

  - `Result[&T] eval(type[&T] typ, list[str] commands, int duration) throws Timeout, StaticError, ParseError`

  - `Result[value] eval(list[str] commands, int duration)`

**Synopsis.**

Evaluate a (list of) Rascal commands and return the value of the last command.

**Description.**

Evaluate a command or a list of commands and return the value of the last command that is executed.

Note that a command can be one of:

  - Statement

  - Declaration

  - Import

  - Extend

  - SyntaxDefinition

The notable exclusion are [???](#Expressions). An Expression is not allowed as a command to the eval function. You can
easily make a Statement from an Expression by adding a semi-colon.

An optional `duration` argument may be present to limit the time (in milliseconds) the execution may take. By default,
the duration is set to 1000 ms.

**Examples.**

``` rascal-shell
import util::Eval;
eval("2 * 3;");
eval(["X = 2 * 3;", "X + 5;"]);
```

### evalType

  - `str evalType(str command) throws Timeout, StaticError, ParseError`

  - `str evalType(list[str] commands) throws Timeout, StaticError, ParseError`

  - `str evalType(str command, int duration) throws Timeout, StaticError, ParseError`

  - `str evalType(list[str] commands, int duration) throws Timeout, StaticError, ParseError`

**Synopsis.**

Evaluate a (list of) Rascal commands and return the type of the last command.

**Description.**

Evaluate a command or a list of commands and return the type of the value of the last command that is executed. An
optional `duration` argument may be present to limit the time (in milliseconds) the execution may take. By default, the
duration is set to 1000 ms.

**Examples.**

``` rascal-shell
import util::Eval;
evalType("2 * 3;");
evalType("[1, 2, 3];");
```

## Math

**Usage.**

`import util::Math;`

**Synopsis.**

Mathematical functions.

**Description.**

The `Math` library provides the following functions:

  - [abs](#Libraries/util/Math-abs): Absolute value of a number.

  - [arbInt](#Libraries/util/Math-arbInt): Generate a random integer value.

  - [arbInt](#Libraries/util/Math-arbInt):

  - [arbReal](#Libraries/util/Math-arbReal): Generate a random real value in the interval \[0.0,1.0).

  - [arbSeed](#Libraries/util/Math-arbSeed): Define the seed for the generation of arbitrary values.

  - [arbRat](#Libraries/util/Math-arbRat): Generate an arbitrary rational value.

  - [arbRat](#Libraries/util/Math-arbRat):

  - [ceil](#Libraries/util/Math-ceil): Compute the smallest integer that is larger than a given number.

  - [cos](#Libraries/util/Math-cos): Calculate the cosine of a numeric value.

  - [denominator](#Libraries/util/Math-denominator): Return the denominator of a rational value

  - [E](#Libraries/util/Math-E): The constant E.

  - [exp](#Libraries/util/Math-exp): Compute exp(x).

  - [floor](#Libraries/util/Math-floor): Compute the largest integer that is smaller than a given number.

  - [ln](#Libraries/util/Math-ln): Calculate the natural log of a numeric value.

  - [log](#Libraries/util/Math-log): Calculate the log\<sub\>base\</sub\> of a numeric value.

  - [log10](#Libraries/util/Math-log10): Compute the 10 based log(x)

  - [log2](#Libraries/util/Math-log2): Compute the 2 based log(x)

  - [max](#Libraries/util/Math-max): Determine the largest of two numeric values.

  - [min](#Libraries/util/Math-min): Determine the smallest of two numeric values.

  - [numerator](#Libraries/util/Math-numerator): Return the numerator of a rational value

  - [nroot](#Libraries/util/Math-nroot): Calculate the n\<sup\>th\</sup\> root of a numeric value.

  - [PI](#Libraries/util/Math-PI): The constant pi.

  - [pow](#Libraries/util/Math-pow): Calculate an arbitrary power of a numeric value.

  - [pow](#Libraries/util/Math-pow): Calculate an arbitrary power of a numeric value.

  - [precision](#Libraries/util/Math-precision): Return the precision of a real number

  - [precision](#Libraries/util/Math-precision): Return a real number with given precisio

  - [setPrecision](#Libraries/util/Math-setPrecision): Define the precision for numeric calculations; returns the
    previous precision

  - [scale](#Libraries/util/Math-scale): Return the scale of a real number

  - [unscaled](#Libraries/util/Math-unscaled): Return the unscaled integer of a real

  - [remainder](#Libraries/util/Math-remainder): Return the remainder of dividing the numerator by the denominator

  - [round](#Libraries/util/Math-round): Round a number to the nearest multiple of a given number (default 1).

  - [round](#Libraries/util/Math-round):

  - [fitFloat](#Libraries/util/Math-fitFloat): .Synopsis push real value into a float using coercion and return the
    value represented by that float as a real

  - [fitDouble](#Libraries/util/Math-fitDouble): .Synopsis push real value into a JVM double using coercion and return
    the value represented by that float as a real

  - [percent](#Libraries/util/Math-percent): Compute the ratio between two numbers as a percentage.

  - [sin](#Libraries/util/Math-sin): Calculate the sine of a numeric value.

  - [sqrt](#Libraries/util/Math-sqrt): Calculate the square root of a numeric value.

  - [tan](#Libraries/util/Math-tan): Calculate the tangent of a numeric value.

  - [toInt](#Libraries/util/Math-toInt): Convert a numeric value to an integer.

  - [toRat](#Libraries/util/Math-toRat): Convert two numbers to a rational value (not supported on reals)

  - [toReal](#Libraries/util/Math-toReal): Convert a numeric value to a real.

  - [toString](#Libraries/util/Math-toString): Convert a numeric value to a string.

  - [primes](#Libraries/util/Math-primes): generate prime numbers up to a maximu

  - [arbPrime](#Libraries/util/Math-arbPrime):

### abs

**Function.**

`&T <: num abs(&T <: num N)`

**Synopsis.**

Absolute value of a number.

**Description.**

Absolute value of the number `n`. The result type is equal to the type of the argument `n`.

**Examples.**

``` rascal-shell
import util::Math;
abs(13)
abs(-13)
abs(3.14)
abs(-3.14)
```

### arbInt

  - `int arbInt()`

  - `int arbInt(int limit)`

**Synopsis.**

Generate a random integer value.

**Description.**

Return an arbitrary integer value. When the argument `limit` is given, the generated value is in the interval \[0,
`limit`), i.e., the limit is exclusive.

**Examples.**

``` rascal-shell
import util::Math;
arbInt();
arbInt();
arbInt();
arbInt(10);
arbInt(10);
arbInt(10);
```

**Benefits.**

`arbInt` is a convenient generator for pseudo-random integers.

### arbReal

**Function.**

`real arbReal()`

**Synopsis.**

Generate a random real value in the interval \[0.0,1.0).

**Description.**

Generates an arbitrary real value in the interval \[0.0, 1.0\].

**Examples.**

``` rascal-shell
import util::Math;
arbReal();
arbReal();
arbReal();
```

### arbSeed

**Function.**

`void arbSeed(int seed)`

**Synopsis.**

Define the seed for the generation of arbitrary values.

**Description.**

Define the seed for the generation of arbitrary values such as [arbBool](#Boolean-arbBool), [arbInt](#Math-arbInt),
[arbReal](#Math-arbReal), [arbRat](#Math-arbRat), [getOneFrom](#List-getOneFrom),[getOneFrom](#Set-getOneFrom),
[takeOneFrom](#List-takeOneFrom) and [takeOneFrom](#Set-takeOneFrom). [arbSeed](#Math-arbSeed) resets the random number
generator that is used to choose arbitrary values. This can be used to generate a reproducible series of choices.

### arbRat

  - `rat arbRat()`

  - `rat arbRat(int limit1, int limit2)`

**Synopsis.**

Generate an arbitrary rational value.

**Examples.**

``` rascal-shell
import util::Math;
arbRat();
arbRat();
arbRat();
arbRat(10,100);
arbRat(10,100);
arbRat(10,100);
```

### ceil

**Function.**

`int ceil(num x)`

**Synopsis.**

Compute the smallest integer that is larger than a given number.

**Description.**

Computes the *ceiling* of a given number. Also see [floor](#Math-floor).

**Examples.**

``` rascal-shell
import util::Math;
ceil(3.2);
ceil(-3.2);
```

### cos

**Function.**

`real cos(num x)`

**Synopsis.**

Calculate the cosine of a numeric value.

**Description.**

The cosine of the number `x`.

**Examples.**

``` rascal-shell
import util::Math;
cos(1.0)
cos(60 * PI() / 180)
```

### denominator

**Function.**

`int denominator(rat n)`

**Synopsis.**

Return the denominator of a rational value.

### E

**Function.**

`real E()`

**Synopsis.**

The constant E.

**Examples.**

``` rascal-shell
import util::Math;
E();
```

### exp

**Function.**

`real exp(num x)`

**Synopsis.**

Compute exp(x). .Description Calculate `e`\<sup\>\`x\`\</sup\>.

### floor

**Function.**

`int floor(num x)`

**Synopsis.**

Compute the largest integer that is smaller than a given number.

**Description.**

Computes the *floor* of a given number. Also see [ceil](#Math-ceil).

**Examples.**

``` rascal-shell
import util::Math;
floor(3.2);
floor(-3.2);
```

### ln

**Function.**

`real ln(num x)`

**Synopsis.**

Calculate the natural log of a numeric value.

**Description.**

Calculate natural log of `x`.

**Examples.**

``` rascal-shell
import util::Math;
ln(20.0)
ln(42.0)
```

### log

**Function.**

`real log(num x, num base)`

**Synopsis.**

Calculate the log\<sub\>base\</sub\> of a numeric value.

**Description.**

Calculate log\<sub\>base\</sub\> of `x`.

**Examples.**

``` rascal-shell
import util::Math;
log(9.99999999, 10)
log(10, 10)
log(256.0, 2)
```

### log10

**Function.**

`real log10(num x)`

**Synopsis.**

Compute the 10 based log(x).

### log2

**Function.**

`real log2(num x)`

**Synopsis.**

Compute the 2 based log(x).

### max

**Function.**

`&T <: num max(&T <: num N, &T <: num M)`

**Synopsis.**

Determine the largest of two numeric values.

**Description.**

The largest of two numbers. The type of the result is the same as the type of the largest argument.

**Examples.**

``` rascal-shell
import util::Math;
max(12, 13);
max(12, 13.5);
max(12, 11.5);
```

### min

**Function.**

`&T <: num min(&T <: num N, &T <: num M)`

**Synopsis.**

Determine the smallest of two numeric values.

**Description.**

The smallest of two numbers. The type of the result is the same as the type of the smallest argument.

**Examples.**

``` rascal-shell
import util::Math;
min(12, 13);
min(12, -13);
min(3.14, 4);
```

### numerator

**Function.**

`int numerator(rat n)`

**Synopsis.**

Return the numerator of a rational value.

### nroot

**Function.**

`real nroot(num x, int n)`

**Synopsis.**

Calculate the n\<sup\>th\</sup\> root of a numeric value.

**Description.**

Calculate \<sup\>n\</sup\>RADIC\`x\` where `n` can only be a integer.

**Examples.**

``` rascal-shell
import util::Math;
nroot(42 * 42, 2);
nroot(42 * 42 * 42, 3);
nroot(123456789012345678901234567890123456789.0, 100)
```

### PI

**Function.**

`real PI()`

**Synopsis.**

The constant pi.

**Examples.**

``` rascal-shell
import util::Math;
PI();
```

### pow

  - `real pow(num x, int y)`

  - `real pow(num x, real y)`

**Synopsis.**

Calculate an arbitrary power of a numeric value.

**Description.**

The calculate `x`\<sup\>\`y\`\</sup\> where `y` can only be a integer.

**Examples.**

``` rascal-shell
import util::Math;
pow(sqrt(42), 2)
pow(12345678901234567890.0, 1000)
```

### precision

  - `int precision(num x)`

  - `real precision(num x, int p)`

**Synopsis.**

Return the precision of a real number.

### setPrecision

**Function.**

`int setPrecision(int p)`

**Synopsis.**

Define the precision for numeric calculations; returns the previous precision.

### scale

**Function.**

`int scale(num x)`

**Synopsis.**

Return the scale of a real number.

### unscaled

**Function.**

`int unscaled(real x)`

**Synopsis.**

Return the unscaled integer of a real.

### remainder

**Function.**

`int remainder(rat n)`

**Synopsis.**

Return the remainder of dividing the numerator by the denominator.

### round

  - `int round(num d)`

  - `(&T <: num) round(&T <: num r, &T <: num nearest)`

**Synopsis.**

Round a number to the nearest multiple of a given number (default 1).

**Examples.**

``` rascal-shell
import util::Math;
round(3.4);
round(3.5);
round(3.6);
round(-3.4);
round(-3.5);
round(-3.6);
round(13, 5);
round(1.5,0.2);
round(3r2,1r4);
```

### fitFloat

**Function.**

`real fitFloat(real r) throws ArithmeticException`

**Description.**

The function fitFloat converts the unlimited precision real into a JVM float value.

  - This function comes in handy in combination with random real test values which have to go through coercion in a Java
    library, like so: `bool test myTest(real r, real j) = fitFloat(r) + fitFloat(j) == fitFloat(r) + fitFloat(j);`

<!-- end list -->

  - If the real is smaller than the minimum float value or larger than the maximum float value, this function will throw
    an ArithmeticException.

### fitDouble

**Function.**

`real fitDouble(real r) throws ArithmeticException`

**Description.**

The function fitDouble converts the unlimited precision real into a JVM double value.

  - This function comes in handy in combination with random real test values which have to go through coercion in a Java
    library, like so: `bool test myTest(real r, real j) = fitDouble(r) + fitDouble(j) == fitDouble(r) + fitDouble(j);`

<!-- end list -->

  - If the real is smaller than the minimum double value or larger than the maximum double value, this function will
    throw an ArithmeticException.

### percent

**Function.**

`int percent(num part, num whole)`

**Synopsis.**

Compute the ratio between two numbers as a percentage.

**Examples.**

``` rascal-shell
import util::Math;
percent(1r4, 1);
percent(13,250);
percent(80.0,160.0);
```

### sin

**Function.**

`real sin(num x)`

**Synopsis.**

Calculate the sine of a numeric value.

**Description.**

The sine of the number `x`.

**Examples.**

``` rascal-shell
import util::Math;
sin(0)
sin(PI() / 2)
```

### sqrt

**Function.**

`real sqrt(num x)`

**Synopsis.**

Calculate the square root of a numeric value.

**Description.**

Calculate RADIC\`x\`.

**Examples.**

``` rascal-shell
import util::Math;
sqrt(42 * 42);
sqrt(12345678901234567890.5 * 12345678901234567890.5);
```

### tan

**Function.**

`real tan(num x)`

**Synopsis.**

Calculate the tangent of a numeric value.

**Description.**

The tangent of the number `x`.

**Examples.**

``` rascal-shell
import util::Math;
tan(45 * PI() / 180)
```

### toInt

**Function.**

`int toInt(num N)`

**Synopsis.**

Convert a numeric value to an integer.

**Description.**

Convert a number to an integer. If `n` is an integer, this is the identity. If `n` is a real value (implemented as
BigDecimal) to an integer (implemented as BigInteger). This conversion is analogous to a narrowing primitive conversion
from double to long as defined in the Java Language Specification: any fractional part of this BigDecimal will be
discarded. Note that this conversion can loose information about the precision of the BigDecimal value.

**Examples.**

``` rascal-shell
import util::Math;
toInt(13)
toInt(13.5)
```

### toRat

**Function.**

`rat toRat(int numerator, int denominator)`

**Synopsis.**

Convert two numbers to a rational value (not supported on reals).

### toReal

**Function.**

`real toReal(num N)`

**Synopsis.**

Convert a numeric value to a real.

**Examples.**

``` rascal-shell
import util::Math;
toReal(12)
toReal(3.14)
```

### toString

**Function.**

`str toString(num N)`

**Synopsis.**

Convert a numeric value to a string.

**Examples.**

``` rascal-shell
import util::Math;
toString(12)
toString(3.14)
```

### primes

**Function.**

`list[int] primes(int upTo)`

**Synopsis.**

generate prime numbers up to a maximum

### arbPrime

**Function.**

`int arbPrime(int upTo)`

## Monitor

**Usage.**

`import util::Monitor;`

**Synopsis.**

Monitor the progress of a task/job.

### jobStart

**Function.**

`void jobStart(str label, int work=1, int totalWork=100)`

**Synopsis.**

Log the *start* of a job.

**Description.**

jobStart registers a new current job on the job stack with an amount of steps todo and how much work it contributes
(when it ends) to its parent job (if any).

### jobStep

**Function.**

`void jobStep(str label, str message, int work = 1)`

Log to the user that a certain event has happened under the currently registered Job.

### jobEnd

**Function.**

`int jobEnd(str label, bool success=true)`

### jobTodo

**Function.**

`void jobTodo(str label, int work=100)`

### jobIsCancelled

**Function.**

`void jobIsCancelled(str label)`

### jobWarning

**Function.**

`void jobWarning(str message, loc src)`

## PriorityQueue

**Usage.**

`import util::PriorityQueue;`

**Synopsis.**

A `PriorityQueue` datatype and associated functions.

**Usage.**

`import util::PriorityQueue;`

**Description.**

Priority queues maintain (priority, value) pairs in sorted order. They are implemented using a [Binomial
Heap](http://en.wikipedia.org/wiki/Binomial_heap). Priority queue are, for instance, used to implement shortest path
algorithms.

Provides the following functions:

  - [BinomialTree](#Libraries/util/PriorityQueue-BinomialTree):

  - [binomialTree](#Libraries/util/PriorityQueue-binomialTree):

  - [addSubTree](#Libraries/util/PriorityQueue-addSubTree):

  - [mergeTree](#Libraries/util/PriorityQueue-mergeTree):

  - [toString](#Libraries/util/PriorityQueue-toString):

  - [PriorityQueue](#Libraries/util/PriorityQueue-PriorityQueue):

  - [priorityQueue](#Libraries/util/PriorityQueue-priorityQueue):

  - [mkPriorityQueue](#Libraries/util/PriorityQueue-mkPriorityQueue):

  - [mkPriorityQueue](#Libraries/util/PriorityQueue-mkPriorityQueue):

  - [isEmpty](#Libraries/util/PriorityQueue-isEmpty):

  - [insertElement](#Libraries/util/PriorityQueue-insertElement):

  - [findMinimum](#Libraries/util/PriorityQueue-findMinimum):

  - [extractMinimum](#Libraries/util/PriorityQueue-extractMinimum):

  - [toString](#Libraries/util/PriorityQueue-toString):

  - [add](#Libraries/util/PriorityQueue-add):

  - [mergeQueue](#Libraries/util/PriorityQueue-mergeQueue):

**Pitfalls.**

Currently, both priority and associated value ("payload") have to be integers. This will be generalized.

### BinomialTree

**Types.**

``` rascal
data BinomialTree
     = binomialTree(int priority,            // priority of this tree
                                         int val,                     // payload
                                         int degree,                  // degree of tree
                                         list[BinomialTree] children  // subtrees
                                        )
     ;
```

### addSubTree

**Function.**

`BinomialTree addSubTree(BinomialTree p, BinomialTree q)`

### mergeTree

**Function.**

`BinomialTree mergeTree(BinomialTree p, BinomialTree q)`

### toString

**Function.**

`str toString(BinomialTree T)`

### PriorityQueue

**Types.**

``` rascal
data PriorityQueue
     = priorityQueue(list[BinomialTree] trees,  // trees in the heap
                                   int minIndex               // index of minimal tree
                                  )
     ;
```

### mkPriorityQueue

  - `PriorityQueue mkPriorityQueue()`

  - `PriorityQueue mkPriorityQueue(int priority, int val)`

### isEmpty

**Function.**

`bool isEmpty(PriorityQueue Q)`

### insertElement

**Function.**

`PriorityQueue insertElement(PriorityQueue Q, int priority, int val)`

### findMinimum

**Function.**

`int findMinimum(PriorityQueue Q)`

### extractMinimum

**Function.**

`tuple[int, int, PriorityQueue] extractMinimum(PriorityQueue Q)`

### toString

**Function.**

`str toString(PriorityQueue Q)`

### add

**Function.**

`list[BinomialTree] add(list[BinomialTree] heap, BinomialTree t)`

### mergeQueue

**Function.**

`PriorityQueue mergeQueue(PriorityQueue p, PriorityQueue q)`

## Prompt

> **Warning**
> 
> documentation awaits Eclipse integration

## Resources

**Synopsis.**

A `Resource` datatype and related functions on Eclipse resources.

**Usage.**

`import util::Resources;`

**Types.**

``` rascal
data Resource = root(set[Resource] projects)
              | project(loc id, set[Resource] contents)
              | folder(loc id, set[Resource] contents)
              | file(loc id);
```

**Description.**

The `Resource` library provides direct access to Eclipse projects and the resources they contain. A `Resource` is the
Rascal representation of an Eclipse project, or a folder or a file in an Eclipse project. In combination with the
[IO](#Prelude-IO) library module, users of the Resources library gain access to the contents of any file that is in an
Eclipse project.

Resource is a recursive data-type, where recursion indicates **containment**, i.e., a folder contains many other
resources, a project also contains other resources. The root of an Eclipse workspace also contains other resources, in
particular `projects`.

Each Resource, but the root, has an `id` field that explains the exact location of the resource.

The schema `project` that is supported by source locations (see [???](#Values-Location)) gives direct access to Eclipse
projects.

The `Resource` library provides the following:

  - [dependencies](#Resources-dependencies): Compute the (transitive) dependencies of a project.

  - [getProject](#Resources-getProject): Retrieve the hierarchical representation of a single named project.

  - [projects](#Resources-projects): Retrieve the set of project locations of the current Eclipse workspace.

  - [references](#Resources-references): The set of projects that are referenced by a project.

  - [root](#Resources-root): Retrieve a full hierarchical representation of all resources in the Eclipse workspace.

**Examples.**

A location that points to a project in the Eclipse workspace named "myProject":

``` rascal
|project://myProject|
```

A location that points to a file named `HelloWorld.java` in the `src` folder of the `example-project` project in the
workspace:

``` rascal
|project://example-project/src/HelloWorld.java|
```

A location that points to a part of the previous file, namely the first 10 characters on the first line:

``` rascal
|project://example-project/src/HelloWorld.java|(0,10,1,0,1,10)
```

Assuming that the project `|project://example-project|` exists in the current workspace, we can get the following:

``` rascal-shell
import util::Resources;
getProject(|project://example-project|);
```

``` rascal-shell
import util::Resources;
getProject(|project://example-project-which-does-not-exist|);
```

**Pitfalls.**

This library is only available for the Eclipse version of Rascal.

### dependencies

**Synopsis.**

Compute the (transitive) dependencies of a project.

**Function.**

`set[loc] dependencies(loc project)`

**Examples.**

Assuming that the project `|project://example-project|` exists in the current workspace, we can get the following:

``` rascal-shell
import util::Resources;
dependencies(|project://example-project|);
```

### getProject

**Synopsis.**

Retrieve the hierarchical representation of a single named project.

**Function.**

`Resource getProject(loc project)`

**Examples.**

``` rascal-shell
import util::Resources;
getProject(|project://example-project|);
```

``` rascal-shell
import util::Resources;
getProject(|project://example-project-which-does-not-exist|);
```

### projects

**Synopsis.**

Retrieve the set of project locations of the current Eclipse workspace.

**Function.**

`set[loc] projects()`

**Examples.**

The following example shows the projects as they existed when this page was generated:

``` rascal-shell
import util::Resources;
projects();
```

### references

**Synopsis.**

The set of projects that are referenced by a project.

**Function.**

`set[loc] references(loc project)`

### root

**Synopsis.**

Retrieve a full hierarchical representation of all resources in the Eclipse workspace.

**Function.**

`Resource root()`

**Examples.**

``` rascal-shell
import util::Resources;
root();
```

## ShellExec

**Usage.**

`import util::ShellExec;`

**Synopsis.**

Execute and manage external processes.

### createProcess

**Function.**

`PID createProcess(str processCommand, loc workingDir=|cwd:///|, list[str] args = [], map[str,str] envVars = ())`

**Synopsis.**

Start a new external process. .Description

## Start a new external process.

## Start a new external process in a given working directory.

## Start a new external process with the given arguments.

## Start a new external process with the given arguments in the given working directory.

## Start a new external process with the given environment variables.

## Start a new external process with the given environment variables in the given working directory.

## Start a new external process with the given arguments and environment variables.

## Start a new external process with the given arguments and environment variables in the given working directory.

### exec

**Function.**

`str exec(str processCommand, loc workingDir=|cwd:///|, list[str] args = [], map[str,str] env = ())`

**Synopsis.**

start, run and kill an external process returning its output as a string.

### execWithCode

**Function.**

`tuple[str output, int exitCode] execWithCode(str processCommand, loc workingDir=|cwd:///|, list[str] args = [],
map[str,str] env = ())`

### killProcess

**Function.**

`int killProcess(PID processId, bool force=false)`

**Synopsis.**

Kill a running process, or a zombie process (a process which is not alive yet not killed)

### isAlive

**Function.**

`bool isAlive(PID processId)`

**Synopsis.**

Check whether a process is still alive

### isZombie

**Function.**

`bool isZombie(PID processId)`

**Synopsis.**

Check whether a process is still registered but not actually running anymore. A zombie process may be cleaned up using
killProcess.

### exitCode

**Function.**

`int exitCode(PID processId)`

**Synopsis.**

Waits for the process to exit and then returns its return code. This is a blocking operation.

### readFrom

**Function.**

`str readFrom(PID processId)`

**Synopsis.**

Read from an existing process’s output stream. This is non-blocking.

### readWithWait

**Function.**

`str readWithWait(PID processId, int wait)`

**Synopsis.**

Read from an existing process’s output stream with a given wait timeout. Some processes are a little slower in producing
output. The wait is used to give the process some extra time in producing output. This is non-blocking apart from the
waiting.

### readFromErr

**Function.**

`str readFromErr(PID processId)`

**Synopsis.**

Read from an existing process’s error output stream. This is non-blocking.

### readLineFromErr

**Function.**

`str readLineFromErr(PID processId, int wait=200, int maxTries=5)`

**Synopsis.**

Read from an existing process’s error output stream. This blocks until a full line is read and waits for one second
maximally for this line to appear.

### readEntireStream

**Function.**

`str readEntireStream(PID processId)`

**Synopsis.**

Read the entire stream from an existing process’s output stream. This is blocking.

### readEntireErrStream

**Function.**

`str readEntireErrStream(PID processId)`

**Synopsis.**

Read the entire error stream from an existing process’s output stream. This is blocking.

### writeTo

**Function.**

`void writeTo(PID processId, str msg)`

**Synopsis.**

Write to an existing process’s input stream.

### PID

**Types.**

`int`

**Synopsis.**

Process Identifiers (PID).

**Description.**

A PID is returned by [createProcess](#ShellExec-createProcess) and is required for any further interaction with the
created process.
