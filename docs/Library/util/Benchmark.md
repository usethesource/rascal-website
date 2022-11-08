---
title: "module util::Benchmark"
---

#### Usage

`import util::Benchmark;`


#### Synopsis

Functions for time measurement and benchmarking.

#### Description

The `Benchmark` library provides the following functions:
* [benchmark](../../Library/util/Benchmark.md#util::Benchmark-benchmark)
* [cpuTime](../../Library/util/Benchmark.md#util::Benchmark-cpuTime)
* [cpuTimeOf](../../Library/util/Benchmark.md#util::Benchmark-cpuTimeOf)
* [gc](../../Library/util/Benchmark.md#util::Benchmark-gc)
* [getFreeMemory](../../Library/util/Benchmark.md#util::Benchmark-getFreeMemory)
* [getMaxFreeMemory](../../Library/util/Benchmark.md#util::Benchmark-getMaxFreeMemory)
* [getMaxMemory](../../Library/util/Benchmark.md#util::Benchmark-getMaxMemory)
* [getMilliTime](../../Library/util/Benchmark.md#util::Benchmark-getMilliTime)
* [getNanoTime](../../Library/util/Benchmark.md#util::Benchmark-getNanoTime)
* [getTotalMemory](../../Library/util/Benchmark.md#util::Benchmark-getTotalMemory)
* [getUsedMemory](../../Library/util/Benchmark.md#util::Benchmark-getUsedMemory)
* [heapDump](../../Library/util/Benchmark.md#util::Benchmark-heapDump)
* [realTime](../../Library/util/Benchmark.md#util::Benchmark-realTime)
* [realTimeOf](../../Library/util/Benchmark.md#util::Benchmark-realTimeOf)
* [systemTime](../../Library/util/Benchmark.md#util::Benchmark-systemTime)
* [systemTimeOf](../../Library/util/Benchmark.md#util::Benchmark-systemTimeOf)
* [userTime](../../Library/util/Benchmark.md#util::Benchmark-userTime)
* [userTimeOf](../../Library/util/Benchmark.md#util::Benchmark-userTimeOf)


## function heapDump {#util-Benchmark-heapDump}

```rascal
void heapDump(loc file, bool live=true)

```

#### Synopsis

Write a JVM heap dump to a file.

#### Description


* The file parameter has to be of the `file` scheme.
* The live parameter restricts the dump to only live objects.

## function getFreeMemory {#util-Benchmark-getFreeMemory}

```rascal
int getFreeMemory()

```

#### Synopsis

Returns the free memory of the current JVM

#### Description


This returns the number of bytes that can be allocated
still against the current result of [get total memory](../../Library/util/Benchmark.md#util::Benchmark-getTotalMemory).

## function getTotalMemory {#util-Benchmark-getTotalMemory}

```rascal
int getTotalMemory()

```

#### Synopsis

Returns the current total memory allocated by the current JVM

#### Description


This returns the number of bytes currently allocated for use by the JVM.
The number can change over time but it's never higher than [get max memory](../../Library/util/Benchmark.md#util::Benchmark-getMaxMemory)`

## function getMaxMemory {#util-Benchmark-getMaxMemory}

```rascal
int getMaxMemory()

```

#### Synopsis

Returns the maximum amount of memory that is available to the current JVM

## function getUsedMemory {#util-Benchmark-getUsedMemory}

```rascal
int getUsedMemory()

```

#### Synopsis

Returns the amount of memory that is currently in use by the programs running on this JVM

## function getMaxFreeMemory {#util-Benchmark-getMaxFreeMemory}

```rascal
int getMaxFreeMemory()

```

#### Synopsis

Returns the amount of memory that is yet available, in principle, on the current JVM

## function cpuTime {#util-Benchmark-cpuTime}

```rascal
int cpuTime()

```

#### Synopsis

CPU time in nanoseconds (10^-9^ sec)

#### Description


* Current cpu time in __nanoseconds__ (10^-9^ sec) since the start of the thread that runs the code that calls this function.
* This number has nanoseconds resolution, but not necessarily nanosecond accuracy.

#### Examples


We use the `fac` function described in [Factorial](../../Recipes/Basic/Factorial/index.md) as example:

```rascal-shell 
rascal>import util::Benchmark;
ok
rascal>import demo::basic::Factorial;
ok
```
Here we measure time by using separate calls to `cpuTime` before and after a call to `fac`.

```rascal-shell ,continue
rascal>before = cpuTime();
int: 95089231000
rascal>fac1(50);
int: 30414093201713378043612608166064768844377641568960512000000000000
rascal>cpuTime() - before;
int: 2461000
```

See also [cpu time of](../../Library/util/Benchmark.md#util::Benchmark-cpuTimeOf) for a more convenient way of measuring the time spent during a block of code.

#### Pitfalls


* The timings shown above may be significantly influenced by the documentation compilation process

## function realTime {#util-Benchmark-realTime}

```rascal
int realTime()

```

#### Synopsis

Returns wall clock time in _milliseconds_ since the Unix epoch

#### Description


Returns the difference, measured in milliseconds, between the current time and midnight, January 1, 1970 UTC

#### Pitfalls


   * The actual accuracy of the time may be not as good as a millisecond. This depends on OS and hardware specifics.
   * Note that the resolution is _milliseconds_ here, while [cpu time](../../Library/util/Benchmark.md#util::Benchmark-cpuTime) produces nanosecond resolution.

## function getNanoTime {#util-Benchmark-getNanoTime}

```rascal
int getNanoTime()

```

#### Synopsis

Return nanoseconds clock time of the JVM's high resolution clock.

#### Description


   See `System.nanoTime` Java documentation. An excerpt:

> Returns the current value of the running Java Virtual Machine's 
> high-resolution time source, in nanoseconds.
> This method can only be used to measure elapsed time and is
> not related to any other notion of system or wall-clock time.
> The value returned represents nanoseconds since some fixed but
> arbitrary <i>origin</i> time (perhaps in the future, so values
> may be negative).  The same origin is used by all invocations of
> this method in an instance of a Java virtual machine; other
> virtual machine instances are likely to use a different origin.
     
> This method provides nanosecond precision, but not necessarily
> nanosecond resolution (that is, how frequently the value changes).

## function getMilliTime {#util-Benchmark-getMilliTime}

```rascal
int getMilliTime()

```

#### Synopsis

Synonym for [real time](../../Library/util/Benchmark.md#util::Benchmark-realTime)

## function cpuTimeOf {#util-Benchmark-cpuTimeOf}

```rascal
int cpuTimeOf(void () block)

```

#### Synopsis

Measure the exact running time of a block of code, using [cpu time](../../Library/util/Benchmark.md#util::Benchmark-cpuTime).

## function systemTime {#util-Benchmark-systemTime}

```rascal
int systemTime()

```

#### Synopsis

System time in nanoseconds (10^-9^ sec).

#### Description


Returns the CPU time that the current thread has executed in system mode in nanoseconds.

* Current system time in nanoseconds (10^-9^ sec) since the start of the thread that runs the code that calls this function.
* The returned value is of nanoseconds precision but not necessarily nanoseconds accuracy.
* CPU time is the number of CPU cycles times the OS-registered clock speed.
* The other [CPU time](../../Library/util/Benchmark.md#util::Benchmark-cpuTime), next to [System time](../../Library/util/Benchmark.md#util::Benchmark-systemTime) is spent in [User time](../../Library/util/Benchmark.md#util::Benchmark-userTime).

#### Examples


We use the `fac` function described in [Factorial](../../Recipes/Basic/Factorial/index.md) as example:


```rascal-shell 
rascal>import util::Benchmark;
ok
rascal>import demo::basic::Factorial;
ok
```

Here we measure time by using separate calls to `sytemTime` before and after a call to `fac`.


```rascal-shell ,continue
rascal>before = systemTime();
int: 4363524000
rascal>fac1(50);
int: 30414093201713378043612608166064768844377641568960512000000000000
rascal>systemTime() - before;
int: 216000
```

## function systemTimeOf {#util-Benchmark-systemTimeOf}

```rascal
int systemTimeOf(void () block)

```

#### Synopsis

Measure the exact running time of a block of code, using [system time](../../Library/util/Benchmark.md#util::Benchmark-systemTime).

#### Examples



```rascal-shell 
rascal>import util::Benchmark;
ok
rascal>import demo::basic::Factorial;
ok
rascal>systemTimeOf(
>>>>>>>   void() { 
>>>>>>>      fac1(50); 
>>>>>>>   } 
>>>>>>>);
int: 13000
```

## function userTime {#util-Benchmark-userTime}

```rascal
int userTime()

```

#### Synopsis

User time in nanoseconds (10^-9^ sec)

#### Description


Returns the CPU time that the current thread has executed in user mode in nanoseconds.

* The returned value is of nanoseconds precision but not necessarily nanoseconds accuracy.
* As distinguished from [now](../../Library/DateTime.md#DateTime-now) which returns the wall clock time since the Unix epoch.
* CPU time is the number of CPU cycles times the OS-registered clock speed.
* The other [CPU time](../../Library/util/Benchmark.md#util::Benchmark-cpuTime), next to [user time](../../Library/util/Benchmark.md#util::Benchmark-userTime) is spent in [system time](../../Library/util/Benchmark.md#util::Benchmark-systemTime).

#### Examples


We use the `fac` function described in [Factorial](../../Recipes/Basic/Factorial/index.md) as example:


```rascal-shell 
rascal>import util::Benchmark;
ok
rascal>import demo::basic::Factorial;
ok
```
Here we measure time by using separate calls to `userTime` before and after a call to `fac`.

```rascal-shell ,continue
rascal>before = userTime();
int: 90865630000
rascal>fac1(50);
int: 30414093201713378043612608166064768844377641568960512000000000000
rascal>userTime() - before;
int: 2269000
```

## function userTimeOf {#util-Benchmark-userTimeOf}

```rascal
int userTimeOf(void () block)

```

#### Synopsis

Measure the exact running time of a block of code in nanoseconds, doc combined with previous function.

## function realTimeOf {#util-Benchmark-realTimeOf}

```rascal
int realTimeOf(void () block)

```

#### Synopsis

Measure the exact running time of a block of code in milliseconds, doc included in previous function.

#### Pitfalls


* watch out this is measured in milliseconds, not nanoseconds

## function benchmark {#util-Benchmark-benchmark}

```rascal
map[str,num] benchmark(map[str, void()] Cases)

map[str,num] benchmark(map[str, void()] Cases, int (void ()) duration)

```

#### Synopsis

Utility to measure and compare the execution time a set of code blocks

#### Description



Given is a map that maps strings (used as label to identify each case) to void-closures that execute the code to be benchmarked.
An optional `duration` argument can be used to specify the function to perform the actual measurement. By default the function [real time of](../../Library/util/Benchmark.md#util::Benchmark-realTimeOf) is used. A map of labels and durations is returned.

#### Examples


We use the `fac` function described in [Factorial](../../Recipes/Basic/Factorial/index.md) as example:

```rascal-shell 
rascal>import util::Benchmark;
ok
rascal>import demo::basic::Factorial;
ok
```

We measure two calls to the factorial function with arguments `100`, respectively, `200` 
(using by default [real time](../../Library/util/Benchmark.md#util::Benchmark-realTime) that returns milliseconds):

```rascal-shell ,continue
rascal>benchmark(
>>>>>>>   ("fac100" : void() {
>>>>>>>                  fac1(100);
>>>>>>>               }, 
>>>>>>>   "fac200" :  void() {
>>>>>>>                  fac1(200);
>>>>>>>               }) 
>>>>>>>   );
map[str, num]: ("fac100":0,"fac200":1)
```

We can do the same using [user time](../../Library/util/Benchmark.md#util::Benchmark-userTime) that returns nanoseconds:

```rascal-shell ,continue
rascal>benchmark( 
>>>>>>>   ("fac100" : void() {
>>>>>>>                  fac1(100);
>>>>>>>            }, 
>>>>>>>   "fac200" : void() {
>>>>>>>                  fac1(200);
>>>>>>>            })
>>>>>>>   , userTimeOf);
map[str, num]: ("fac100":328000,"fac200":527000)
```

## function gc {#util-Benchmark-gc}

```rascal
int gc()

```

#### Description


This function tries to trigger a garbage collection. It may be useful to call this function
just before measuring the efficiency of a code block, in order to factor out previous effects
on the heap.

#### Benefits


* This helps avoiding to restart the JVM, and optionally warming it up, for each individual measurement.
* Long running terminal [REPL](../../RascalShell/REPL/index.md)s can be rejuvenated on demand by a call to [gc](../../Library/util/Benchmark.md#util::Benchmark-gc).

#### Pitfalls


* Although a GC cycle is triggered by this function, it guarantees nothing about the effect of this cycle in terms of completeness or precision in removing garbage from the heap.
* GC only works for real garbage. So if there is an unrelated accidental memory leak somewhere, it may better to start a fresh JVM to measure the current functionality under scrutiny.

