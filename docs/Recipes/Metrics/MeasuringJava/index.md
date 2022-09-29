---
title: Measuring Java
---

#### Synopsis

A few steps using the M3 model to compute basic metrics for a Java project in Eclipse.

#### Description


This is a recipe for computing basic or more advanced metrics from a Java project in Eclipse. We assume:

*  You have Rascal installed in an Eclipse instance.
*  You have a Java project in your Eclipse workspace that compiles without errors. Let's call it `HelloWorld`.


Now we will follow the [EASY](../../../WhyRascal/EASY/index.md) paradigm:

*  a library will be used to _parse_ the Java code generating [Rascalopedia:AbstractSyntaxTree]
*  the same library will generate a [Rascal:Values/Relation]al model to represent interesting facts between Java source code artifacts
*  then we can write queries over the generated trees and relations using [Rascal:Expressions].


These are a number of recipes for measuring different things about Java:

*  [measuring classes](../../../Recipes/Metrics/MeasuringJava/MeasuringClasses/index.md)
*  [measuring methods](../../../Recipes/Metrics/MeasuringJava/MeasuringMethods/index.md)

#### Examples


First we import the basic data types for representing Java. The model is called _M3_, and its definition is split acros a generic
language independent module called [Rascal:analysis/m3/Core] and a Java specific part called [Rascal:lang/java/m3/Core]. Have a look at the documentation 
of these modules later. For now we will go through using them in a few examples.



```rascal-shell 
rascal>import lang::java::m3::Core;
ok
rascal>import lang::java::m3::AST;
ok
```

"Snakes and Ladders" is an example Java project of which we have stored the source code in `|tmp:///snakes-and-ladders/src|`

```rascal-shell ,continue
rascal>|tmp:///snakes-and-ladders/src/snakes/|.ls
list[loc]: [
  |tmp:///snakes-and-ladders/src/snakes/Die.java|,
  |tmp:///snakes-and-ladders/src/snakes/SimpleGameTest.java|,
  |tmp:///snakes-and-ladders/src/snakes/LastSquare.java|,
  |tmp:///snakes-and-ladders/src/snakes/Snake.java|,
  |tmp:///snakes-and-ladders/src/snakes/Ladder.java|,
  |tmp:///snakes-and-ladders/src/snakes/FirstSquare.java|,
  |tmp:///snakes-and-ladders/src/snakes/DieTest.java|,
  |tmp:///snakes-and-ladders/src/snakes/Player.java|,
  |tmp:///snakes-and-ladders/src/snakes/Game.java|,
  |tmp:///snakes-and-ladders/src/snakes/ISquare.java|,
  |tmp:///snakes-and-ladders/src/snakes/Square.java|
]
```

Now we can extract our overview model, using the classpath we derived:

```rascal-shell ,continue
rascal>myModel = createM3FromDirectory(|tmp:///snakes-and-ladders/src|);
```
:::danger
Rascal code execution failed (unexpectedly) during compilation of this documentation.
:::
```rascal-shell
|std:///lang/java/m3/Core.rsc|(5265,16,<118,8>,<118,24>): Undeclared variable: includeJarModels
Advice: |http://tutor.rascal-mpl.org/Errors/Static/UndeclaredVariable/UndeclaredVariable.html|
ok
```

Some projects have extensive classpaths which the M3 extractor requires for accurate Java analysis.
You can use this code to extract a classpath if the project is a Maven project:


```rascal-shell ,continue
rascal>import util::Reflective;
ok
rascal>cp = getProjectPathConfig(|tmp:///snakes-and-ladders|).javaCompilerPath;
list[loc]: [
  |file:///Users/jurgenv/git/rascal/target/classes|,
  |file:///Users/jurgenv/.m2/repository/org/rascalmpl/rascal-p2-dependencies-repackaged/0.6.0/rascal-p2-dependencies-repackaged-0.6.0.jar|,
  |file:///Users/jurgenv/.m2/repository/junit/junit/4.13.1/junit-4.13.1.jar|,
  |file:///Users/jurgenv/.m2/repository/org/hamcrest/hamcrest-core/1.3/hamcrest-core-1.3.jar|,
  |file:///Users/jurgenv/.m2/repository/io/usethesource/vallang/0.14.6/vallang-0.14.6.jar|,
  |file:///Users/jurgenv/.m2/repository/io/usethesource/capsule/0.7.1/capsule-0.7.1.jar|,
  |file:///Users/jurgenv/.m2/repository/org/apache/commons/commons-compress/1.21/commons-compress-1.21.jar|,
  |file:///Users/jurgenv/.m2/repository/org/tukaani/xz/1.9/xz-1.9.jar|,
  |file:///Users/jurgenv/.m2/repository/com/github/luben/zstd-jni/1.5.2-3/zstd-jni-1.5.2-3.jar|,
  |file:///Users/jurgenv/.m2/repository/com/github/ben-manes/caffeine/caffeine/3.0.4/caffeine-3.0.4.jar|,
  |file:///Users/jurgenv/.m2/repository/com/google/errorprone/error_prone_annotations/2.9.0/error_prone_annotations-2.9.0.jar|,
  |file:///Users/jurgenv/.m2/repository/org/checkerframework/checker-qual/3.24.0/checker-qual-3.24.0.jar|,
  |file:///Users/jurgenv/.m2/repository/org/ow2/asm/asm/9.2/asm-9.2.jar|,
  |file:///Users/jurgenv/.m2/repository/org/ow2/asm/asm-tree/9.2/asm-tree-9.2.jar|,
  |file:///Users/jurgenv/.m2/repository/org/apache/commons/commons-math/2.2/commons-math-2.2.jar|,
  |file:///Users/jurgenv/.m2/repository/commons-lang/commons-lang/2.6/commons-lang-2.6.jar|,
  |file:///Users/jurgenv/.m2/repository/com/google/code/gson/gson/2.8.9/gson-2.8.9.jar|,
  |file:///Users/jurgenv/.m2/repository/jline/jline/2.14.6/jline-2.14.6.jar|,
  |file:///Users/jurgenv/.m2/repository/org/yaml/snakeyaml/1.31/snakeyaml-1.31.jar|,
  |file:///Users/jurgenv/.m2/repository/org/jdom/jdom2/2.0.6/jdom2-2.0.6.jar|,
  |file:///Users/jurgenv/.m2/repository/org/apache/lucene/lucene-core/7.5.0/lucene-core-7.5.0.jar|,
  |file:///Users/jurgenv/.m2/repository/org/apache/lucene/lucene-highlighter/7.5.0/lucene-highlighter-7.5.0.jar|,
  |file:///Users/jurgenv/.m2/repository/org/apache/lucene/lucene-join/7.5.0/lucene-join-7.5.0.jar|,
  |file:///Users/jurgenv/.m2/repository/org/apache/lucene/lucene-memory/7.5.0/lucene-memory-7.5.0.jar|,
  |file:///Users/jurgenv/.m2/repository/org/apache/lucene/lucene-queries/7.5.0/lucene-queries-7.5.0.jar|,
  |file:///Users/jurgenv/.m2/repository/org/apache/lucene/lucene-analyzers-common/7.5.0/lucene-analyzers-common-7.5.0.jar|,
  |file:///Users/jurgenv/.m2/repository/org/apache/lucene/lucene-queryparser/7.5.0/lucene-queryparser-7.5.0.jar|,
  |file:///Users/jurgenv/.m2/repository/org/apache/lucene/lucene-sandbox/7.5.0/lucene-sandbox-7.5.0.jar|,
  |file:///Users/jurgenv/.m2/repository/org/nanohttpd/nanohttpd/2.3.1/nanohttpd-2.3.1.jar|,
  |file:///Users/jurgenv/.m2/repository/com/ibm/icu/icu4j/69.1/icu4j-69.1.jar|,
  |file:///Users/jurgenv/.m2/repository/com/beust/jcommander/1.72/jcommander-1.72.jar|
]
```

and then pass it into the M3 extractor (this project does not have dependencies)

```rascal-shell ,continue
rascal>myModel = createM3FromDirectory(|tmp:///snakes-and-ladders/src|, classPath=cp);
```
:::danger
Rascal code execution failed (unexpectedly) during compilation of this documentation.
:::
```rascal-shell
|std:///lang/java/m3/Core.rsc|(5265,16,<118,8>,<118,24>): Undeclared variable: includeJarModels
Advice: |http://tutor.rascal-mpl.org/Errors/Static/UndeclaredVariable/UndeclaredVariable.html|
ok
```

#### Benefits

*  Notice that _all_ these [Location](../../../Rascal/Expressions/Values/Location/index.md) literals are hyperlinks and you can click on them to go the source code that they point to. Try it!
* M3 models are great for metrics, but also they are the basis for many other static analyses
* See [measuring classes](../../../Recipes/Metrics/MeasuringJava/MeasuringClasses/index.md) and [measuring methods](../../../Recipes/Metrics/MeasuringJava/MeasuringMethods/index.md) for more benefits

#### Pitfalls

* See [measuring classes](../../../Recipes/Metrics/MeasuringJava/MeasuringClasses/index.md) and [measuring methods](../../../Recipes/Metrics/MeasuringJava/MeasuringMethods/index.md) for more pitfalls
