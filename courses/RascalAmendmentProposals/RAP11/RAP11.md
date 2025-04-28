---
title: RAP 11 - Better Datetime
sidebar_position: 11
---

| RAP[^1] | 11 |
| :---- | :---- |
| Title | Re-implementation of Rascal Datetime functionality based on Java time, adding support for incomplete datetime information, and replacing offsets with zone ids as primary encoding  |
| Author | Davy Landman, Jurgen Vinju |
| Status | Draft |
| Type | Rascal Language |

### Issue

1. The current date-time feature in Rascal (and vallang) is based on com.ibm.icu. It has been caught up with by the Java standard library which now features excellent support via a fork of jodatime  
2. The current implementation does not support partial datetime information, for example missing a timezone offset. But a lot of data does not have this information and so it must be representable. Programmers should be able to choose how and when to complete the missing data.  
3. Rascal does not support \`datetime\` without a date field, and it does not allow the programmer to test for this missing information either.  
4. We currently only have offset information, this should be replaced with Zone information and only zone offsets in case of disambiguation for duplicate local date times., since offsets can change, especially for dates in the future. [More details](https://codeblog.jonskeet.uk/2019/03/27/storing-utc-is-not-a-silver-bullet).  
5. We have limited libraries (or language support) to mutate zone / offset information.

Example why [time zoneid](https://stackoverflow.com/tags/timezone/info)’s are preferred over zone-offsets:

User reads data from a csv, it contains local date-time for which they know they should be interpreted in `Brazil/East` time zone. User has outdated time zone database installed (an 3y old java8 installation [for example](https://hi.service-now.com/kb_view.do?sysparm_article=KB0622033)). Since Brazil stopped with daylight savings time in November 2019, mapping a local date to a zone offset will be incorrect on the users computer. It will compute `2020-02-02 10:00:00` to `2020-02-02T12:00-02:00`. On this computer all will go well but running the same script on a different computer (with updated java version) will translate it to `2020-02-02T13:00:00-03:00`. Now you could argue that locally this isn’t much of a problem, but as soon as you start exporting this data (and importing it somewhere else) problems start to emerge. If you would encode dates as `2020-02-02T10:00[Brazil/East]`, no information is lost, and you can always (with the local best available knowledge) translate this to different time zones or do date math on it.

### Analysis

1. Com.ibm.icu has bugs that Java time does not have;   
2. And Java time is more “standard”  
3. ICU is quite a big dependency, since it carries a copy of all zone information.   
4. So it makes sense to move to Java time, as both a preventive and corrective maintenance task

1. If one gets this datetime information in, say, a CSV file: $2020-01-01T10:00$ the information is **incomplete**  
   1. We don’t know which absolute point in time this is, because a timezone is lacking  
   2. Also it is imprecise, because the milliseconds offset is missing  
2. Currently Rascal does not support such incomplete datetime information. We produce a parse error  
3. We do want to be able to represent incomplete information about datetime  
4. We do not want to heuristically fill in the missing data without the programmer’s intervention  
   1. Downstream metrics (say time measurements) may become inaccurate (noisy) or even imprecise (off) if arbitrary offsets are introduced.  
   2. Rascal/vallang is wysiwyg and filling in the missing offsets would not honor that design element  
5. Much of the Java time library **needs complete information** to even work correctly.  
6. There is now a question of   
   1. How to represent incomplete datetime data  
   2. How to fill in the missing offsets  
   3. When to fill in the missing offsets

   

### Solution proposal

#### Complexity (why UTC or zone offsets are not enough)

Date time is complex, please read the blog by Jon Skeet (StackOverflow fame & author of nodatime, a .net version of jodatime) why storing UTC is not the solution for future dates: [https://codeblog.jonskeet.uk/2019/03/27/storing-utc-is-not-a-silver-bullet/](https://codeblog.jonskeet.uk/2019/03/27/storing-utc-is-not-a-silver-bullet/).

Rough summary: for datetimes in the past, it’s okay to convert them to UTC and store them that way, but for dates in the future, dates should be stored with the time zone code and the local date\&time for that zone. Note, not the zone offset, nor the utc, but the [time zone code](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) (like “Europe/Amsterdam”) since for example countries sometimes decide to move the day-light savings time a week earlier or later, so then the mapping to UTC changes.

Note that even with a time zone code you need an zone-offset to disambiguate the overlapping times around the transition of summer to winter time. See the manual of [ZonedDateTime](https://docs.oracle.com/javase/8/docs/api/java/time/ZonedDateTime.html) for a good explanation. In general this 

#### Solution

##### Types

* Add \`time\` type for values that represent (absolute) time instants on any given day  
* Add \`date\` type for values that represent a given day without a specific time  
* Keep \`datetime\` type to represent values that have both absolute date and time

* ##### Literals

Change rascal literals to also include a zone code, sadly ISO8601 doesn’t contain a standard for it yet, so there exists different encoding (sometimes as a separate field next to the datetime). [Java’s approach](https://docs.oracle.com/javase/8/docs/api/java/time/format/DateTimeFormatter.html#ISO_DATE_TIME) is quite compact:

`$2020-01-01T20:00:00+02:00[Europe/Amsterdam]$`

Both the offset and the time zone are optional. You can also just give the timezone information  
Caveats:

* `$2020-01-01T20:00:00[Europe/Amsterdam]$` is the same as `$2020-01-01T20:00:00+02:00[Europe/Amsterdam]$`  
* `$2020-01-01T20:00:00+04:00[Europe/Amsterdam]$` will be corrected to `$2020-01-01T20:00:00+02:00[Europe/Amsterdam]$`

  

[^1]:  RAP is at the moment following Pyhton’s PEP ([https://www.python.org/dev/peps/](https://www.python.org/dev/peps/)). We need to look at other projects to see what is best. See for instance,  [http://yt-project.org/](http://yt-project.org/) 
