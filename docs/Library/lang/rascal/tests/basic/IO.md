---
title: "module lang::rascal::tests::basic::IO"
---

#### Usage

`import lang::rascal::tests::basic::IO;`


## function writeReadFile {#lang-rascal-tests-basic-IO-writeReadFile}

* ``test bool writeReadFile(str content)``

## function writeReadValue {#lang-rascal-tests-basic-IO-writeReadValue}

* ``test bool writeReadValue(value x)``

## data Encoding {#lang-rascal-tests-basic-IO-Encoding}

```rascal
data Encoding  
     = utf8()
     | utf16le()
     | utf16be()
     | utf16()
     | utf32le()
     | utf32be()
     | utf32()
     ;
```

## function correctEncoding {#lang-rascal-tests-basic-IO-correctEncoding}

* ``test bool correctEncoding(Encoding enc, str content)``

## function correctEncodingImplicit {#lang-rascal-tests-basic-IO-correctEncodingImplicit}

* ``test bool correctEncodingImplicit(Encoding enc, str content)``

## function removeZeroIAmbBOM {#lang-rascal-tests-basic-IO-removeZeroIAmbBOM}

* ``str removeZeroIAmbBOM(Encoding enc, str s)``

## function appendWorksCorrectly {#lang-rascal-tests-basic-IO-appendWorksCorrectly}

* ``test bool appendWorksCorrectly(Encoding enc, str a, str b)``

## function appendWorksCorrectlyImplicit {#lang-rascal-tests-basic-IO-appendWorksCorrectlyImplicit}

* ``test bool appendWorksCorrectlyImplicit(Encoding enc, str a, str b)``

## function readOffsetStart {#lang-rascal-tests-basic-IO-readOffsetStart}

* ``test bool readOffsetStart(str a, str b)``

## function readOffsetEnd {#lang-rascal-tests-basic-IO-readOffsetEnd}

* ``test bool readOffsetEnd(str a, str b)``

## function readOffsetMiddle {#lang-rascal-tests-basic-IO-readOffsetMiddle}

* ``test bool readOffsetMiddle(str a, str b, str c)``

## function md5Hash {#lang-rascal-tests-basic-IO-md5Hash}

* ``test bool md5Hash()``

## data Compression {#lang-rascal-tests-basic-IO-Compression}

```rascal
data Compression  
     = gzip()
     | xz()
     | bzip2()
     | zstd()
     ;
```

## function compressionWorks {#lang-rascal-tests-basic-IO-compressionWorks}

* ``test bool compressionWorks(str a, Compression comp)``

## function compressionWorksWithEncoding {#lang-rascal-tests-basic-IO-compressionWorksWithEncoding}

* ``test bool compressionWorksWithEncoding(str a, Compression comp, Encoding enc)``

## function writeFileOffsetNonExistingFile {#lang-rascal-tests-basic-IO-writeFileOffsetNonExistingFile}

* ``test bool writeFileOffsetNonExistingFile()``

## function writeFileOffsetNonExistingFile2 {#lang-rascal-tests-basic-IO-writeFileOffsetNonExistingFile2}

* ``test bool writeFileOffsetNonExistingFile2()``

## function writeFileOffsetEnd {#lang-rascal-tests-basic-IO-writeFileOffsetEnd}

* ``test bool writeFileOffsetEnd(Encoding enc, str a, str b)``

## function writeFileOffsetEndInvalidLength {#lang-rascal-tests-basic-IO-writeFileOffsetEndInvalidLength}

* ``test bool writeFileOffsetEndInvalidLength(Encoding enc, str a, str b)``

## function writeFileOffsetEnd2 {#lang-rascal-tests-basic-IO-writeFileOffsetEnd2}

* ``test bool writeFileOffsetEnd2(Encoding enc, str a, str b)``

## function writeFileOffsetMiddle {#lang-rascal-tests-basic-IO-writeFileOffsetMiddle}

* ``test bool writeFileOffsetMiddle(Encoding enc, str a, str b)``

## function writeFileOffsetMiddle2 {#lang-rascal-tests-basic-IO-writeFileOffsetMiddle2}

* ``test bool writeFileOffsetMiddle2(Encoding enc, str a, str b)``

## function writeFileOffsetStart {#lang-rascal-tests-basic-IO-writeFileOffsetStart}

* ``test bool writeFileOffsetStart(Encoding enc, str a, str b)``

## function md5ValueTest {#lang-rascal-tests-basic-IO-md5ValueTest}

* ``test bool md5ValueTest()``

## function md5FileTest {#lang-rascal-tests-basic-IO-md5FileTest}

* ``test bool md5FileTest()``

