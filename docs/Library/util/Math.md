---
title: "module util::Math"
---

#### Usage

`import util::Math;`


#### Synopsis

Mathematical functions.

#### Description

The `Math` library provides the following functions:

* [E](../../Library/util/Math.md#util::Math-E)
* [PI](../../Library/util/Math.md#util::Math-PI)
* [abs](../../Library/util/Math.md#util::Math-abs)
* [arbInt](../../Library/util/Math.md#util::Math-arbInt)
* [arbPrime](../../Library/util/Math.md#util::Math-arbPrime)
* [arbRat](../../Library/util/Math.md#util::Math-arbRat)
* [arbReal](../../Library/util/Math.md#util::Math-arbReal)
* [arbSeed](../../Library/util/Math.md#util::Math-arbSeed)
* [ceil](../../Library/util/Math.md#util::Math-ceil)
* [cos](../../Library/util/Math.md#util::Math-cos)
* [denominator](../../Library/util/Math.md#util::Math-denominator)
* [exp](../../Library/util/Math.md#util::Math-exp)
* [fitDouble](../../Library/util/Math.md#util::Math-fitDouble)
* [fitFloat](../../Library/util/Math.md#util::Math-fitFloat)
* [floor](../../Library/util/Math.md#util::Math-floor)
* [ln](../../Library/util/Math.md#util::Math-ln)
* [log](../../Library/util/Math.md#util::Math-log)
* [log10](../../Library/util/Math.md#util::Math-log10)
* [log2](../../Library/util/Math.md#util::Math-log2)
* [max](../../Library/util/Math.md#util::Math-max)
* [min](../../Library/util/Math.md#util::Math-min)
* [nroot](../../Library/util/Math.md#util::Math-nroot)
* [numerator](../../Library/util/Math.md#util::Math-numerator)
* [percent](../../Library/util/Math.md#util::Math-percent)
* [pow](../../Library/util/Math.md#util::Math-pow)
* [precision](../../Library/util/Math.md#util::Math-precision)
* [primes](../../Library/util/Math.md#util::Math-primes)
* [remainder](../../Library/util/Math.md#util::Math-remainder)
* [round](../../Library/util/Math.md#util::Math-round)
* [scale](../../Library/util/Math.md#util::Math-scale)
* [setPrecision](../../Library/util/Math.md#util::Math-setPrecision)
* [sin](../../Library/util/Math.md#util::Math-sin)
* [sqrt](../../Library/util/Math.md#util::Math-sqrt)
* [tan](../../Library/util/Math.md#util::Math-tan)
* [toInt](../../Library/util/Math.md#util::Math-toInt)
* [toRat](../../Library/util/Math.md#util::Math-toRat)
* [toReal](../../Library/util/Math.md#util::Math-toReal)
* [toString](../../Library/util/Math.md#util::Math-toString)
* [unscaled](../../Library/util/Math.md#util::Math-unscaled)


## function abs {#util-Math-abs}

* ``&T <: num abs(&T <: num N)``


#### Synopsis

Absolute value of a number.

#### Description

Absolute value of the number `n`. The result type is equal to the type of the argument `n`.

#### Examples


```rascal-shell
rascal>import util::Math;
ok
rascal>abs(13)
int: 13
rascal>abs(-13)
int: 13
rascal>abs(3.14)
real: 3.14
rascal>abs(-3.14)
real: 3.14
```

## function arbInt {#util-Math-arbInt}

* ``int arbInt()``
* ``int arbInt(int limit)``


#### Synopsis

Generate a random integer value.

#### Description

Return an arbitrary integer value. When the argument `limit` is given, the generated value is in the interval [0, `limit`),
i.e., the limit is exclusive.

#### Examples


```rascal-shell
rascal>import util::Math;
ok
rascal>arbInt();
int: 1813933433
rascal>arbInt();
int: -523984217
rascal>arbInt();
int: 823476074
rascal>arbInt(10);
int: 1
rascal>arbInt(10);
int: 2
rascal>arbInt(10);
int: 9
```

#### Benefits

`arbInt` is a convenient generator for pseudo-random integers.

## function arbReal {#util-Math-arbReal}

* ``real arbReal()``


#### Synopsis

Generate a random real value in the interval [0.0,1.0).

#### Description

Generates an arbitrary real value in the interval [0.0, 1.0].

#### Examples


```rascal-shell
rascal>import util::Math;
ok
rascal>arbReal();
real: 0.1765092751746632
rascal>arbReal();
real: 0.4231631151146731
rascal>arbReal();
real: 0.6980036774366751
```

## function arbSeed {#util-Math-arbSeed}

* ``void arbSeed(int seed)``


#### Synopsis

Define the seed for the generation of arbitrary values.

#### Description

Define the seed for the generation of arbitrary values such as [arb bool](../../Library/Boolean.md#Boolean-arbBool), [arb int](../../Library/util/Math.md#util::Math-arbInt), [arb real](../../Library/util/Math.md#util::Math-arbReal),
[arb rat](../../Library/util/Math.md#util::Math-arbRat), [getOneFrom](../../Library/List.md#List-getOneFrom),[getOneFrom](../../Library/Set.md#Set-getOneFrom), [takeOneFrom](../../Library/List.md#List-takeOneFrom) and [takeOneFrom](../../Library/Set.md#Set-takeOneFrom). [arb seed](../../Library/util/Math.md#util::Math-arbSeed) resets the random number generator that
is used to choose arbitrary values. This can be used to generate a reproducible series of choices.

## function arbRat {#util-Math-arbRat}

* ``rat arbRat()``
* ``rat arbRat(int limit1, int limit2)``


#### Synopsis

Generate an arbitrary rational value.

#### Examples


```rascal-shell
rascal>import util::Math;
ok
rascal>arbRat();
rat: 1698928409r1535942567
rascal>arbRat();
rat: 544755509r1359901581
rascal>arbRat();
rat: -1385328029r2020550090
rascal>arbRat(10,100);
rat: 1r40
rascal>arbRat(10,100);
rat: 8r29
rascal>arbRat(10,100);
rat: 1r25
```

## function ceil {#util-Math-ceil}

* ``int ceil(num x)``


#### Synopsis

Compute the smallest integer that is larger than a given number.

#### Description

Computes the _ceiling_ of a given number.
Also see [floor](../../Library/util/Math.md#util::Math-floor).

#### Examples


```rascal-shell
rascal>import util::Math;
ok
rascal>ceil(3.2);
int: 4
rascal>ceil(-3.2);
int: -3
```

## function cos {#util-Math-cos}

* ``real cos(num x)``


#### Synopsis

Calculate the cosine of a numeric value.

#### Description

The cosine of the number `x`.

#### Examples


```rascal-shell
rascal>import util::Math;
ok
rascal>cos(1.0)
real: 0.54030230588
rascal>cos(60 * PI() / 180)
real: 0.50000000000
```

## function denominator {#util-Math-denominator}

* ``int denominator(rat n)``


#### Synopsis

Return the denominator of a rational value.

## function E {#util-Math-E}

* ``real E()``


#### Synopsis

The constant E.

#### Examples


```rascal-shell
rascal>import util::Math;
ok
rascal>E();
real: 2.7182818285
```

## function exp {#util-Math-exp}

* ``real exp(num x)``


#### Synopsis

Compute exp(x).
#### Description

Calculate `e`<sup>`x`</sup>. 

## function floor {#util-Math-floor}

* ``int floor(num x)``


#### Synopsis

Compute the largest integer that is smaller than a given number.

#### Description

Computes the _floor_ of a given number.
Also see [ceil](../../Library/util/Math.md#util::Math-ceil).

#### Examples


```rascal-shell
rascal>import util::Math;
ok
rascal>floor(3.2);
int: 3
rascal>floor(-3.2);
int: -4
```

## function ln {#util-Math-ln}

* ``real ln(num x)``


#### Synopsis

Calculate the natural log of a numeric value.

#### Description

Calculate natural log of `x`. 

#### Examples


```rascal-shell
rascal>import util::Math;
ok
rascal>ln(20.0)
real: 2.9957322736
rascal>ln(42.0)
real: 3.7376696183
```

## function log {#util-Math-log}

* ``real log(num x, num base)``


#### Synopsis

Calculate the log<sub>base</sub> of a numeric value.

#### Description

Calculate log<sub>base</sub> of `x`. 

#### Examples


```rascal-shell
rascal>import util::Math;
ok
rascal>log(9.99999999, 10)
real: 0.999999999566
rascal>log(10, 10)
real: 1.
rascal>log(256.0, 2)
real: 7.99999999999
```

## function log10 {#util-Math-log10}

* ``real log10(num x)``


#### Synopsis

Compute the 10 based log(x).

## function log2 {#util-Math-log2}

* ``real log2(num x)``


#### Synopsis

Compute the 2 based log(x).

## function max {#util-Math-max}

* ``&T <: num max(&T <: num N, &T <: num M)``


#### Synopsis

Determine the largest of two numeric values.

#### Description

The largest of two numbers. The type of the result is the same as the type of the largest argument.

#### Examples


```rascal-shell
rascal>import util::Math;
ok
rascal>max(12, 13);
int: 13
rascal>max(12, 13.5);
num: 13.5
rascal>max(12, 11.5);
num: 12
```

## function min {#util-Math-min}

* ``&T <: num min(&T <: num N, &T <: num M)``


#### Synopsis

Determine the smallest of two numeric values.

#### Description

The smallest of two numbers. The type of the result is the same as the type of the smallest argument.

#### Examples


```rascal-shell
rascal>import util::Math;
ok
rascal>min(12, 13);
int: 12
rascal>min(12, -13);
int: -13
rascal>min(3.14, 4);
num: 3.14
```

## function numerator {#util-Math-numerator}

* ``int numerator(rat n)``


#### Synopsis

Return the numerator of a rational value.

## function nroot {#util-Math-nroot}

* ``real nroot(num x, int n)``


#### Synopsis

Calculate the n<sup>th</sup> root of a numeric value.

#### Description

Calculate <sup>n</sup>&radic;`x` where `n` can only be a integer.

#### Examples


```rascal-shell
rascal>import util::Math;
ok
rascal>nroot(42 * 42, 2);
real: 42.0000000000
rascal>nroot(42 * 42 * 42, 3);
real: 42.0000000000
rascal>nroot(123456789012345678901234567890123456789.0, 100)
real: 2.4038930938
```

## function PI {#util-Math-PI}

* ``real PI()``


#### Synopsis

The constant pi.

#### Examples


```rascal-shell
rascal>import util::Math;
ok
rascal>PI();
real: 3.1415926536
```

## function pow {#util-Math-pow}

* ``real pow(num x, int y)``
* ``real pow(num x, real y)``


#### Synopsis

Calculate an arbitrary power of a numeric value.

#### Description

The calculate `x`<sup>`y`</sup> where `y` can only be a integer.

#### Examples


```rascal-shell
rascal>import util::Math;
ok
rascal>pow(sqrt(42), 2)
real: 41.99999999989811976256
rascal>pow(12345678901234567890.0, 1000)
real: 327323519862176629730082067574716643439462300540185122220961832511288805718030910484304325108222843885957688250811158315340566475836232001571619541935415038796348602192296984423155079801992333140052863080750492018420590783574245411031311510942905796189450351912614510641741094491709589411239576756065619918176653289948094430880732479266853021246187981170634861333302200580872985856560855518977488511675544145006801675791138351985746678734387422142342185164278661836498313416561398901718399810114596984172777042303963800096899625199810241300878005585014082782334502894938457546968837522885101157892509894692459561354313786780532679517827353604060468681961209174542267424246240853816845886755294209996435433895294269712878992262721644106226890031664370462222706979715904672586297266460593551184450504665032451235999357222433465060299295477020462819514888057483551478759508444976793225466736775132290553092049866427876353526626065630474037490603570383940996843823967040247622022658439400707006053650592894261198654836654639504753542843560398908885522596433160079097075880850067383018892541529465995345763588872837837593907229770700976597566733884202506653739605059379401347861288230399126563406134764726379055786459406660737522798066830604288612726394086519909309338994703718119693639450620275447776806553594104597194048560725083279242120977189767528195495335507571774589656293544257012451347889004221446663952536972136269481724663158860532924322053397767933001924701437115740854657082984585991651836842229921223742828990473127280082431920682100750955123993671834387994643422520721282979578784909325571258649149109201827243509225859052305726449746668735118920743230654106301983770403775061147939915240771494456634249374454345250552415101593382958143513116801567849013973694567642919070533812941570184136127617255991655186770210261385873186409485713856293174509996217914589400976889855958713421577335212662218393411619879901532201876563269347123972872344497080886637930441651259141049569049804413000150297629676129305940405487092640315363913091042956266173352666027423873096773031569220441623779694026871629405544513139993091183726122490006827751752741076885620415211542317496941956676394754879276979814511653516542017832996653484412313736356363305261532812972679430377759838879013873699720739033015759349473652785594888893377041014822677972342113818352300626995374712448170130314174419289739529982021437898597025566184922042135782017301373340541840251886826793222171028600662975155228812797443522045892690780164900156894217461209188361915847649443941189447229439906721259825215932223371314915787322490148065038149065584317884221248098894972346389635965334847844894296983317214252456367600733903894880305858451738209033898028888738089429510748290579293786966511702526421636839023818144487303883796157019333481281590182592242664434310787411848124503254182702718762286778744163663752419726010543539695902378784425822053579035604233167402979429162902604120869094779466506794967733027126798330733504515320709935121379216936936503517150761677018393050209847312382660928887004146016965681452309940614395990071269237730777211494402285973401134347314396249658064535813498390390228707068969712346028221844247394911352355219205653068923998044169246696199205931532280062594043451189765555574643899576685276356280338555983266720699445887933479778575910620051014501087647914152552526207935492180262761720164698382158135451840846941977075240573647713026577508324564964050461276723248623764128711424186543354565805827986611623687766424190141159982065651733888853975873295262987666051724164426176971670664220786382312628833993735024432664073367706606256513404081195840674289520710497921821809284330939220609778362882454615392304832328664341446921914422579024146155571399642339764786384745922769575752043854715925941119782659099976703423673050490970007943369522561413084390356583974592565338819090682096052094155857739238468257491510074355659857818999361006574913097067978865657382215313176814231120597124842183478696513677197512045290255088756641096724459645973492430801864900314570449211289319281689687528990384602371132230192221449626569380251208...
```

## function precision {#util-Math-precision}

* ``int precision(num x)``
* ``real precision(num x, int p)``


#### Synopsis

Return the precision of a real number.

## function setPrecision {#util-Math-setPrecision}

* ``int setPrecision(int p)``


#### Synopsis

Define the precision for numeric calculations; returns the previous precision.

## function scale {#util-Math-scale}

* ``int scale(num x)``


#### Synopsis

Return the scale of a real number.

## function unscaled {#util-Math-unscaled}

* ``int unscaled(real x)``


#### Synopsis

Return the unscaled integer of a real.

## function remainder {#util-Math-remainder}

* ``int remainder(rat n)``


#### Synopsis

Return the remainder of dividing the numerator by the denominator.

## function round {#util-Math-round}

* ``int round(num d)``
* ``(&T <: num) round(&T <: num r, &T <: num nearest)``


#### Synopsis

Round a number to the nearest multiple of a given number (default 1).

#### Examples


```rascal-shell
rascal>import util::Math;
ok
rascal>round(3.4);
int: 3
rascal>round(3.5);
int: 4
rascal>round(3.6);
int: 4
rascal>round(-3.4);
int: -3
rascal>round(-3.5);
int: -4
rascal>round(-3.6);
int: -4
rascal>round(13, 5);
int: 15
rascal>round(1.5,0.2);
real: 1.6
rascal>round(3r2,1r4);
rat: 3r2
```

## function fitFloat {#util-Math-fitFloat}

* ``real fitFloat(real r) throws ArithmeticException``


.Synopsis push real value into a float using coercion and return the value represented by that float as a real

#### Description

The function fitFloat converts the unlimited precision real into a JVM float value.

#### Benefits

* This function comes in handy in combination with random real test values which have to 
go through coercion in a Java library, like so:
 `bool test myTest(real r, real j) = fitFloat(r) + fitFloat(j) == fitFloat(r) + fitFloat(j);`
 
#### Pitfalls

* If the real is smaller than the minimum float value or larger than the maximum float
value, this function will throw an ArithmeticException.
 

## function fitDouble {#util-Math-fitDouble}

* ``real fitDouble(real r) throws ArithmeticException``


.Synopsis push real value into a JVM double using coercion and return the value represented by that float as a real

#### Description

The function fitDouble converts the unlimited precision real into a JVM double value.

#### Benefits

* This function comes in handy in combination with random real test values which have to 
go through coercion in a Java library, like so:
 `bool test myTest(real r, real j) = fitDouble(r) + fitDouble(j) == fitDouble(r) + fitDouble(j);`
 
#### Pitfalls

* If the real is smaller than the minimum double value or larger than the maximum double
value, this function will throw an ArithmeticException.

## function percent {#util-Math-percent}

* ``int percent(num part, num whole)``


#### Synopsis

Compute the ratio between two numbers as a percentage.

#### Examples


```rascal-shell
rascal>import util::Math;
ok
rascal>percent(1r4, 1);
int: 25
rascal>percent(13,250);
int: 5
rascal>percent(80.0,160.0);
int: 50
```

## function sin {#util-Math-sin}

* ``real sin(num x)``


#### Synopsis

Calculate the sine of a numeric value.

#### Description

The sine of the number `x`.

#### Examples


```rascal-shell
rascal>import util::Math;
ok
rascal>sin(0)
real: 0.
rascal>sin(PI() / 2)
real: 1.00000000000
```

## function sqrt {#util-Math-sqrt}

* ``real sqrt(num x)``


#### Synopsis

Calculate the square root of a numeric value.

#### Description

Calculate &radic;`x`. 

#### Examples


```rascal-shell
rascal>import util::Math;
ok
rascal>sqrt(42 * 42);
real: 42.0000000000
rascal>sqrt(12345678901234567890.5 * 12345678901234567890.5);
real: 12345678901234567890.5000000000
```

## function tan {#util-Math-tan}

* ``real tan(num x)``


#### Synopsis

Calculate the tangent of a numeric value.

#### Description

The tangent of the number `x`.

#### Examples


```rascal-shell
rascal>import util::Math;
ok
rascal>tan(45 * PI() / 180)
real: 1.0000000000
```

## function toInt {#util-Math-toInt}

* ``int toInt(num N)``


#### Synopsis

Convert a numeric value to an integer.

#### Description

Convert a number to an integer. If `n` is an integer, this is the identity. If `n` is a real value (implemented as BigDecimal) to an integer (implemented as BigInteger). This conversion is analogous to a narrowing primitive conversion from double to long as defined in the Java Language Specification: any fractional part of this BigDecimal will be discarded. Note that this conversion can loose information about the precision of the BigDecimal value.

#### Examples


```rascal-shell
rascal>import util::Math;
ok
rascal>toInt(13)
int: 13
rascal>toInt(13.5)
int: 13
```

## function toRat {#util-Math-toRat}

* ``rat toRat(int numerator, int denominator)``


#### Synopsis

Convert two numbers to a rational value (not supported on reals).

## function toReal {#util-Math-toReal}

* ``real toReal(num N)``


#### Synopsis

Convert a numeric value to a real.

#### Examples


```rascal-shell
rascal>import util::Math;
ok
rascal>toReal(12)
real: 12.
rascal>toReal(3.14)
real: 3.14
```

## function toString {#util-Math-toString}

* ``str toString(num N)``


#### Synopsis

Convert a numeric value to a string.

#### Examples


```rascal-shell
rascal>import util::Math;
ok
rascal>toString(12)
str: "12"
rascal>toString(3.14)
str: "3.14"
```

## function primes {#util-Math-primes}

* ``list[int] primes(int upTo)``

 
#### Synopsis

generate prime numbers up to a maximum

## function arbPrime {#util-Math-arbPrime}

* ``int arbPrime(int upTo)``

