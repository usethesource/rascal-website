---
title: "module lang::rascal::tests::library::Node"
---

#### Usage

`import lang::rascal::tests::library::Node;`


## data XNODE {#lang-rascal-tests-library-Node-XNODE}

```rascal
data XNODE  
     = xf()
     | xf(int)
     | xf(int,int)
     | xf(int,int,int)
     ;
```

## function arity1 {#lang-rascal-tests-library-Node-arity1}

* ``test bool arity1()``

## function arity2 {#lang-rascal-tests-library-Node-arity2}

* ``test bool arity2()``

## function arity3 {#lang-rascal-tests-library-Node-arity3}

* ``test bool arity3()``

## data ANODE {#lang-rascal-tests-library-Node-ANODE}

```rascal
data ANODE  
     = leaf(int n)
     | a(ANODE left, ANODE right)
     ;
```

## function delAnnotation1 {#lang-rascal-tests-library-Node-delAnnotation1}

* ``test bool delAnnotation1()``

## function delAnnotation2 {#lang-rascal-tests-library-Node-delAnnotation2}

* ``test bool delAnnotation2()``

## function delAnnotation3 {#lang-rascal-tests-library-Node-delAnnotation3}

* ``test bool delAnnotation3()``

## function delAnnotation4 {#lang-rascal-tests-library-Node-delAnnotation4}

* ``test bool delAnnotation4()``

## function delAnnotation5 {#lang-rascal-tests-library-Node-delAnnotation5}

* ``test bool delAnnotation5()``

## function delAnnotations1 {#lang-rascal-tests-library-Node-delAnnotations1}

* ``test bool delAnnotations1()``

## function delAnnotations2 {#lang-rascal-tests-library-Node-delAnnotations2}

* ``test bool delAnnotations2()``

## function delAnnotations3 {#lang-rascal-tests-library-Node-delAnnotations3}

* ``test bool delAnnotations3()``

## function delAnnotations4 {#lang-rascal-tests-library-Node-delAnnotations4}

* ``test bool delAnnotations4()``

## function delAnnotations5 {#lang-rascal-tests-library-Node-delAnnotations5}

* ``test bool delAnnotations5()``

## function delAnnotations6 {#lang-rascal-tests-library-Node-delAnnotations6}

* ``test bool delAnnotations6()``

## function delAnnotations7 {#lang-rascal-tests-library-Node-delAnnotations7}

* ``test bool delAnnotations7()``

## function delAnnotations8 {#lang-rascal-tests-library-Node-delAnnotations8}

* ``test bool delAnnotations8()``

## function delAnnotations9 {#lang-rascal-tests-library-Node-delAnnotations9}

* ``test bool delAnnotations9()``

## function delAnnotations10 {#lang-rascal-tests-library-Node-delAnnotations10}

* ``test bool delAnnotations10()``

## function delAnnotationsRec1 {#lang-rascal-tests-library-Node-delAnnotationsRec1}

* ``test bool delAnnotationsRec1()``

## function delAnnotationsRec2 {#lang-rascal-tests-library-Node-delAnnotationsRec2}

* ``test bool delAnnotationsRec2()``

## function delAnnotationsRec3 {#lang-rascal-tests-library-Node-delAnnotationsRec3}

* ``test bool delAnnotationsRec3()``

## function delAnnotationsRec4 {#lang-rascal-tests-library-Node-delAnnotationsRec4}

* ``test bool delAnnotationsRec4()``

## function delAnnotationsRec5 {#lang-rascal-tests-library-Node-delAnnotationsRec5}

* ``test bool delAnnotationsRec5()``

## function delAnnotationsRec6 {#lang-rascal-tests-library-Node-delAnnotationsRec6}

* ``test bool delAnnotationsRec6()``

## function delAnnotationsRec7 {#lang-rascal-tests-library-Node-delAnnotationsRec7}

* ``test bool delAnnotationsRec7()``

## function delAnnotationsRec8 {#lang-rascal-tests-library-Node-delAnnotationsRec8}

* ``test bool delAnnotationsRec8()``

## function delAnnotationsRec9 {#lang-rascal-tests-library-Node-delAnnotationsRec9}

* ``test bool delAnnotationsRec9()``

## function delAnnotationsRec10 {#lang-rascal-tests-library-Node-delAnnotationsRec10}

* ``test bool delAnnotationsRec10()``

## function getAnnotations1 {#lang-rascal-tests-library-Node-getAnnotations1}

* ``test bool getAnnotations1()``

## function getAnnotations2 {#lang-rascal-tests-library-Node-getAnnotations2}

* ``test bool getAnnotations2()``

## function getAnnotations3 {#lang-rascal-tests-library-Node-getAnnotations3}

* ``test bool getAnnotations3()``

## data YNODE {#lang-rascal-tests-library-Node-YNODE}

```rascal
data YNODE  
     = yf()
     | yf(int)
     | yf(int,int)
     | yf(int,int,int)
     ;
```

## function getChildren1 {#lang-rascal-tests-library-Node-getChildren1}

* ``test bool getChildren1()``

## function getChildren2 {#lang-rascal-tests-library-Node-getChildren2}

* ``test bool getChildren2()``

## function getChildren3 {#lang-rascal-tests-library-Node-getChildren3}

* ``test bool getChildren3()``

## data ZNODE {#lang-rascal-tests-library-Node-ZNODE}

```rascal
data ZNODE  
     = zf()
     | zf(int)
     | zf(int,int)
     | zf(int,int,int)
     ;
```

## function getName1 {#lang-rascal-tests-library-Node-getName1}

* ``test bool getName1()``

## function getName2 {#lang-rascal-tests-library-Node-getName2}

* ``test bool getName2()``

## function makeNode1 {#lang-rascal-tests-library-Node-makeNode1}

* ``test bool makeNode1()``

## function makeNode2 {#lang-rascal-tests-library-Node-makeNode2}

* ``test bool makeNode2()``

## function makeNode3 {#lang-rascal-tests-library-Node-makeNode3}

* ``test bool makeNode3()``

## function makeNode4 {#lang-rascal-tests-library-Node-makeNode4}

* ``test bool makeNode4()``

## function setAnnotations1 {#lang-rascal-tests-library-Node-setAnnotations1}

* ``test bool setAnnotations1()``

## function setAnnotations2 {#lang-rascal-tests-library-Node-setAnnotations2}

* ``test bool setAnnotations2()``

## function setAnnotations3 {#lang-rascal-tests-library-Node-setAnnotations3}

* ``test bool setAnnotations3()``

## function unsetKW1 {#lang-rascal-tests-library-Node-unsetKW1}

* ``test bool unsetKW1()``

## function unsetSelKW1 {#lang-rascal-tests-library-Node-unsetSelKW1}

* ``test bool unsetSelKW1()``

## function unsetSelKW2 {#lang-rascal-tests-library-Node-unsetSelKW2}

* ``test bool unsetSelKW2()``

## function unsetSelKW3 {#lang-rascal-tests-library-Node-unsetSelKW3}

* ``test bool unsetSelKW3()``

## function unsetSelKW4 {#lang-rascal-tests-library-Node-unsetSelKW4}

* ``test bool unsetSelKW4()``

## function unsetSelKW5 {#lang-rascal-tests-library-Node-unsetSelKW5}

* ``test bool unsetSelKW5()``

## function unsetSelKW6 {#lang-rascal-tests-library-Node-unsetSelKW6}

* ``test bool unsetSelKW6()``

## function unsetRecKW1 {#lang-rascal-tests-library-Node-unsetRecKW1}

* ``test bool unsetRecKW1()``

## function unsetRecSelKW1 {#lang-rascal-tests-library-Node-unsetRecSelKW1}

* ``test bool unsetRecSelKW1()``

## function unsetRecSelKW2 {#lang-rascal-tests-library-Node-unsetRecSelKW2}

* ``test bool unsetRecSelKW2()``

## function unseRecSelKW3 {#lang-rascal-tests-library-Node-unseRecSelKW3}

* ``test bool unseRecSelKW3()``

## function unseRecSelKW4 {#lang-rascal-tests-library-Node-unseRecSelKW4}

* ``test bool unseRecSelKW4()``

## function unsetRecSelKW5 {#lang-rascal-tests-library-Node-unsetRecSelKW5}

* ``test bool unsetRecSelKW5()``

## function unsetRecSelKW6 {#lang-rascal-tests-library-Node-unsetRecSelKW6}

* ``test bool unsetRecSelKW6()``

## function unsetRecSelKW7 {#lang-rascal-tests-library-Node-unsetRecSelKW7}

* ``test bool unsetRecSelKW7()``

## data KNODE {#lang-rascal-tests-library-Node-KNODE}

```rascal
data KNODE (int x = 2) 
     = z()
     | y()
     ;
```

## function setKW1 {#lang-rascal-tests-library-Node-setKW1}

* ``test bool setKW1()``

## function setKW2 {#lang-rascal-tests-library-Node-setKW2}

* ``test bool setKW2()``

## function setKW3 {#lang-rascal-tests-library-Node-setKW3}

* ``test bool setKW3()``

## function textWriteRead {#lang-rascal-tests-library-Node-textWriteRead}

* ``bool textWriteRead(type[&T] typ, str termString, value termValue)``

## function readTermFromFileInt1 {#lang-rascal-tests-library-Node-readTermFromFileInt1}

* ``test bool readTermFromFileInt1()``

## function readTermFromFileInt2 {#lang-rascal-tests-library-Node-readTermFromFileInt2}

* ``test bool readTermFromFileInt2()``

## function readTermFromFileStr1 {#lang-rascal-tests-library-Node-readTermFromFileStr1}

* ``test bool readTermFromFileStr1()``

## function readTermFromFileStr2 {#lang-rascal-tests-library-Node-readTermFromFileStr2}

* ``test bool readTermFromFileStr2()``

## function readTermFromFileList1 {#lang-rascal-tests-library-Node-readTermFromFileList1}

* ``test bool readTermFromFileList1()``

## function readTermFromFileList2 {#lang-rascal-tests-library-Node-readTermFromFileList2}

* ``test bool readTermFromFileList2()``

## function readTermFromFileFun1 {#lang-rascal-tests-library-Node-readTermFromFileFun1}

* ``test bool readTermFromFileFun1()``

## function readTermFromFileFun2 {#lang-rascal-tests-library-Node-readTermFromFileFun2}

* ``test bool readTermFromFileFun2()``

## function readTermFromFileFunWithArgs1 {#lang-rascal-tests-library-Node-readTermFromFileFunWithArgs1}

* ``test bool readTermFromFileFunWithArgs1()``

## function readTermFromFileFunWithArgs2 {#lang-rascal-tests-library-Node-readTermFromFileFunWithArgs2}

* ``test bool readTermFromFileFunWithArgs2()``

## data FUN {#lang-rascal-tests-library-Node-FUN}

```rascal
data FUN  
     = f(int A, int B, int C)
     ;
```

## function readTermFromFileADT1 {#lang-rascal-tests-library-Node-readTermFromFileADT1}

* ``test bool readTermFromFileADT1()``

## function readTermFromFileADT2 {#lang-rascal-tests-library-Node-readTermFromFileADT2}

* ``test bool readTermFromFileADT2()``

## function toStringTest {#lang-rascal-tests-library-Node-toStringTest}

* ``test bool toStringTest()``

## function kwParamsInfluenceUnEqual {#lang-rascal-tests-library-Node-kwParamsInfluenceUnEqual}

* ``test bool kwParamsInfluenceUnEqual()``

## function kwParamsInfluenceEqual {#lang-rascal-tests-library-Node-kwParamsInfluenceEqual}

* ``test bool kwParamsInfluenceEqual()``

## function kwParamsInfluenceSetSemantics {#lang-rascal-tests-library-Node-kwParamsInfluenceSetSemantics}

* ``test bool kwParamsInfluenceSetSemantics()``

## function kwParamsDoNotInfluenceMatch {#lang-rascal-tests-library-Node-kwParamsDoNotInfluenceMatch}

* ``test bool kwParamsDoNotInfluenceMatch()``

## function kwParamsDoNotInfluenceNoMatch {#lang-rascal-tests-library-Node-kwParamsDoNotInfluenceNoMatch}

* ``test bool kwParamsDoNotInfluenceNoMatch()``

## function keywordParametersAreFields {#lang-rascal-tests-library-Node-keywordParametersAreFields}

* ``test bool keywordParametersAreFields()``

