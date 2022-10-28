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

*  a library will be used to _parse_ the Java code generating [abstract syntax tree](../../../Rascalopedia/AbstractSyntaxTree/index.md)
*  the same library will generate a ((Rascal:Values/Relation))al model to represent interesting facts between Java source code artifacts
*  then we can write queries over the generated trees and relations using [Expressions](../../../Rascal/Expressions/index.md).


These are a number of recipes for measuring different things about Java:

*  [measuring classes](../../../Recipes/Metrics/MeasuringJava/MeasuringClasses/index.md)
*  [measuring methods](../../../Recipes/Metrics/MeasuringJava/MeasuringMethods/index.md)

#### Examples


First we import the basic data types for representing Java. The model is called _M3_, and its definition is split acros a generic
language independent module called [Core](../../../Library/analysis/m3/Core.md) and a Java specific part called [Core](../../../Library/lang/java/m3/Core.md). Have a look at the documentation 
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

Now we can extract our overview model:

```rascal-shell ,continue
rascal>myModel = createM3FromDirectory(|tmp:///snakes-and-ladders/src|);
M3: m3(
  |tmp:///snakes-and-ladders/src|,
  annotations={
    <|java+method:///snakes/SimpleGameTest/move1strings(snakes.Game)|,|java+class:///Given|>,
    <|java+method:///snakes/Snake/squareLabel()|,|java+interface:///java/lang/Override|>,
    <|java+method:///snakes/Ladder/landHereOrGoHome()|,|java+interface:///java/lang/Override|>,
    <|java+method:///snakes/SimpleGameTest/newGame()|,|java+class:///Test|>,
    <|java+method:///snakes/SimpleGameTest/move8jillWins(snakes.Game)|,|java+class:///Given|>,
    <|java+method:///snakes/FirstSquare/isFirstSquare()|,|java+interface:///java/lang/Override|>,
    <|java+method:///snakes/Ladder/squareLabel()|,|java+interface:///java/lang/Override|>,
    <|java+method:///snakes/FirstSquare/isOccupied()|,|java+interface:///java/lang/Override|>,
    <|java+method:///snakes/SimpleGameTest/initialStrings(snakes.Game)|,|java+class:///Given|>,
    <|java+method:///snakes/SimpleGameTest/move4jillSnake(snakes.Game)|,|java+class:///Given|>,
    <|java+method:///snakes/DieTest/testInRange()|,|java+class:///Test|>,
    <|java+method:///snakes/DieTest/testMinReached()|,|java+class:///Test|>,
    <|java+class:///snakes/SimpleGameTest|,|java+class:///RunWith|>,
    <|java+method:///snakes/SimpleGameTest/move2jackBackwards(snakes.Game)|,|java+class:///Given|>,
    <|java+method:///snakes/DieTest/testMaxReached()|,|java+class:///Test|>,
    <|java+method:///snakes/SimpleGameTest/move5jackLadder(snakes.Game)|,|java+class:///Given|>,
    <|java+method:///snakes/SimpleGameTest/move6jill(snakes.Game)|,|java+class:///Given|>,
    <|java+method:///snakes/FirstSquare/enter(snakes.Player)|,|java+interface:///java/lang/Override|>,
    <|java+method:///snakes/LastSquare/isLastSquare()|,|java+interface:///java/lang/Override|>,
    <|java+method:///snakes/FirstSquare/leave(snakes.Player)|,|java+interface:///java/lang/Override|>,
    <|java+method:///snakes/SimpleGameTest/move3jackMeetsJill(snakes.Game)|,|java+class:///Given|>,
    <|java+method:///snakes/SimpleGameTest/move2jillLadder(snakes.Game)|,|java+class:///Given|>,
    <|java+method:///snakes/SimpleGameTest/move7jackBouncesBackToJill(snakes.Game)|,|java+class:///Given|>,
    <|java+method:///snakes/SimpleGameTest/move1jack(snakes.Game)|,|java+class:///Given|>,
    <|java+method:///snakes/FirstSquare/player()|,|java+interface:///java/lang/Override|>
  },
  typeDependency={
    <|java+method:///snakes/Game/winner()|,|java+class:///snakes/Game|>,
    <|java+method:///snakes/Game/winner()|,|java+class:///snakes/Player|>,
    <|java+parameter:///snakes/Player/joinGame(snakes.Game)/scope(game)/scope(0)/game|,|java+class:///snakes/Game|>,
    <|java+field:///snakes/Game/winner|,|java+class:///snakes/Player|>,
    <|java+method:///snakes/Square/nextSquare()|,|java+interface:///snakes/ISquare|>,
    <|java+method:///snakes/Square/nextSquare()|,|java+class:///snakes/Game|>,
    <|java+method:///snakes/Square/nextSquare()|,|java+primitiveType:///int|>,
    <|java+method:///snakes/Square/nextSquare()|,|java+class:///snakes/Square|>,
    <|java+method:///snakes/Square/moveAndLand(int)|,|java+interface:///snakes/ISquare|>,
    <|java+method:///snakes/Square/moveAndLand(int)|,|java+class:///snakes/Game|>,
    <|java+method:///snakes/Square/moveAndLand(int)|,|java+primitiveType:///int|>,
    <|java+method:///snakes/Square/moveAndLand(int)|,|java+class:///snakes/Square|>,
    <|java+method:///snakes/SimpleGameTest/move1strings(snakes.Game)|,|java+class:///java/lang/String|>,
    <|java+method:///snakes/SimpleGameTest/move1strings(snakes.Game)|,|java+interface:///snakes/ISquare|>,
    <|java+method:///snakes/SimpleGameTest/move1strings(snakes.Game)|,|java+class:///snakes/Game|>,
    <|java+method:///snakes/SimpleGameTest/move1strings(snakes.Game)|,|java+class:///java/lang/Object|>,
    <|java+method:///snakes/SimpleGameTest/move1strings(snakes.Game)|,|java+class:///Given|>,
    <|java+method:///snakes/Game/initSquare(int,snakes.ISquare)|,|java+interface:///snakes/ISquare|>,
    ...
```

Some projects have extensive classpaths which the M3 extractor requires for accurate Java analysis.
You can use this code to extract a classpath if the project is a Maven project:


```rascal-shell ,continue
rascal>import util::Reflective;
ok
rascal>cp = getProjectPathConfig(|tmp:///snakes-and-ladders|).javaCompilerPath;
list[loc]: [|file:///usr/local/Cellar/maven/3.8.5/libexec/boot/plexus-classworlds-2.6.0.jar|]
```

and then pass it into the M3 extractor (this project does not have dependencies)

```rascal-shell ,continue
rascal>myModel = createM3FromDirectory(|tmp:///snakes-and-ladders/src|, classPath=cp);
M3: m3(
  |tmp:///snakes-and-ladders/src|,
  annotations={
    <|java+method:///snakes/SimpleGameTest/move1strings(snakes.Game)|,|java+class:///Given|>,
    <|java+method:///snakes/Snake/squareLabel()|,|java+interface:///java/lang/Override|>,
    <|java+method:///snakes/Ladder/landHereOrGoHome()|,|java+interface:///java/lang/Override|>,
    <|java+method:///snakes/SimpleGameTest/newGame()|,|java+class:///Test|>,
    <|java+method:///snakes/SimpleGameTest/move8jillWins(snakes.Game)|,|java+class:///Given|>,
    <|java+method:///snakes/FirstSquare/isFirstSquare()|,|java+interface:///java/lang/Override|>,
    <|java+method:///snakes/Ladder/squareLabel()|,|java+interface:///java/lang/Override|>,
    <|java+method:///snakes/FirstSquare/isOccupied()|,|java+interface:///java/lang/Override|>,
    <|java+method:///snakes/SimpleGameTest/initialStrings(snakes.Game)|,|java+class:///Given|>,
    <|java+method:///snakes/SimpleGameTest/move4jillSnake(snakes.Game)|,|java+class:///Given|>,
    <|java+method:///snakes/DieTest/testInRange()|,|java+class:///Test|>,
    <|java+method:///snakes/DieTest/testMinReached()|,|java+class:///Test|>,
    <|java+class:///snakes/SimpleGameTest|,|java+class:///RunWith|>,
    <|java+method:///snakes/SimpleGameTest/move2jackBackwards(snakes.Game)|,|java+class:///Given|>,
    <|java+method:///snakes/DieTest/testMaxReached()|,|java+class:///Test|>,
    <|java+method:///snakes/SimpleGameTest/move5jackLadder(snakes.Game)|,|java+class:///Given|>,
    <|java+method:///snakes/SimpleGameTest/move6jill(snakes.Game)|,|java+class:///Given|>,
    <|java+method:///snakes/FirstSquare/enter(snakes.Player)|,|java+interface:///java/lang/Override|>,
    <|java+method:///snakes/LastSquare/isLastSquare()|,|java+interface:///java/lang/Override|>,
    <|java+method:///snakes/FirstSquare/leave(snakes.Player)|,|java+interface:///java/lang/Override|>,
    <|java+method:///snakes/SimpleGameTest/move3jackMeetsJill(snakes.Game)|,|java+class:///Given|>,
    <|java+method:///snakes/SimpleGameTest/move2jillLadder(snakes.Game)|,|java+class:///Given|>,
    <|java+method:///snakes/SimpleGameTest/move7jackBouncesBackToJill(snakes.Game)|,|java+class:///Given|>,
    <|java+method:///snakes/SimpleGameTest/move1jack(snakes.Game)|,|java+class:///Given|>,
    <|java+method:///snakes/FirstSquare/player()|,|java+interface:///java/lang/Override|>
  },
  typeDependency={
    <|java+method:///snakes/Game/winner()|,|java+class:///snakes/Game|>,
    <|java+method:///snakes/Game/winner()|,|java+class:///snakes/Player|>,
    <|java+parameter:///snakes/Player/joinGame(snakes.Game)/scope(game)/scope(0)/game|,|java+class:///snakes/Game|>,
    <|java+field:///snakes/Game/winner|,|java+class:///snakes/Player|>,
    <|java+method:///snakes/Square/nextSquare()|,|java+interface:///snakes/ISquare|>,
    <|java+method:///snakes/Square/nextSquare()|,|java+class:///snakes/Game|>,
    <|java+method:///snakes/Square/nextSquare()|,|java+primitiveType:///int|>,
    <|java+method:///snakes/Square/nextSquare()|,|java+class:///snakes/Square|>,
    <|java+method:///snakes/Square/moveAndLand(int)|,|java+interface:///snakes/ISquare|>,
    <|java+method:///snakes/Square/moveAndLand(int)|,|java+class:///snakes/Game|>,
    <|java+method:///snakes/Square/moveAndLand(int)|,|java+primitiveType:///int|>,
    <|java+method:///snakes/Square/moveAndLand(int)|,|java+class:///snakes/Square|>,
    <|java+method:///snakes/SimpleGameTest/move1strings(snakes.Game)|,|java+class:///java/lang/String|>,
    <|java+method:///snakes/SimpleGameTest/move1strings(snakes.Game)|,|java+interface:///snakes/ISquare|>,
    <|java+method:///snakes/SimpleGameTest/move1strings(snakes.Game)|,|java+class:///snakes/Game|>,
    <|java+method:///snakes/SimpleGameTest/move1strings(snakes.Game)|,|java+class:///java/lang/Object|>,
    <|java+method:///snakes/SimpleGameTest/move1strings(snakes.Game)|,|java+class:///Given|>,
    <|java+method:///snakes/Game/initSquare(int,snakes.ISquare)|,|java+interface:///snakes/ISquare|>,
    ...
```

#### Benefits

*  Notice that _all_ these [Location](../../../Rascal/Expressions/Values/Location/index.md) literals are hyperlinks and you can click on them to go the source code that they point to. Try it!
* M3 models are great for metrics, but also they are the basis for many other static analyses
* See [measuring classes](../../../Recipes/Metrics/MeasuringJava/MeasuringClasses/index.md) and [measuring methods](../../../Recipes/Metrics/MeasuringJava/MeasuringMethods/index.md) for more benefits

#### Pitfalls

* See [measuring classes](../../../Recipes/Metrics/MeasuringJava/MeasuringClasses/index.md) and [measuring methods](../../../Recipes/Metrics/MeasuringJava/MeasuringMethods/index.md) for more pitfalls

