---
title: Measuring Methods
---

#### Synopsis

We demonstrate how to extract interesting and accurate information about Java methods.

#### Examples



```rascal-shell 
rascal>import lang::java::m3::Core;
ok
rascal>import lang::java::m3::AST;
ok
```

Now we can extract our overview model, using the classpath we derived:

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
Now let's focus on the methods:

```rascal-shell ,continue
rascal>myMethods = methods(myModel);
set[loc]: {
  |java+method:///snakes/Game/isValidPosition(int)|,
  |java+method:///snakes/Game/firstSquare()|,
  |java+method:///snakes/Square/enter(snakes.Player)|,
  |java+constructor:///snakes/Player/Player(java.lang.String)|,
  |java+method:///snakes/Game/setSquareToSnake(int,int)|,
  |java+constructor:///snakes/FirstSquare/FirstSquare(snakes.Game,int)|,
  |java+method:///snakes/Game/winner()|,
  |java+method:///snakes/Square/nextSquare()|,
  |java+method:///snakes/Square/moveAndLand(int)|,
  |java+method:///snakes/SimpleGameTest/move1strings(snakes.Game)|,
  |java+method:///snakes/Game/initSquare(int,snakes.ISquare)|,
  |java+method:///snakes/Ladder/squareLabel()|,
  |java+method:///snakes/FirstSquare/isOccupied()|,
  |java+method:///snakes/Game/notOver()|,
  |java+method:///snakes/Game/findSquare(int,int)|,
  |java+method:///snakes/Player/wins()|,
  |java+method:///snakes/DieTest/reached(int)|,
  |java+method:///snakes/Square/previousSquare()|,
  |java+method:///snakes/Die/roll()|,
  |java+method:///snakes/SimpleGameTest/initialStrings(snakes.Game)|,
  |java+method:///snakes/SimpleGameTest/move4jillSnake(snakes.Game)|,
  |java+method:///snakes/Square/invariant()|,
  |java+method:///snakes/ISquare/landHereOrGoHome()|,
  |java+method:///snakes/Snake/squareLabel()|,
  |java+method:///snakes/Game/addSquares(int)|,
  |java+method:///snakes/DieTest/testInRange()|,
  |java+method:///snakes/DieTest/testMinReached()|,
  |java+method:///snakes/Game/toString()|,
  |java+method:///snakes/Game/getSquare(int)|,
  |java+method:///snakes/Square/isFirstSquare()|,
  |java+method:///snakes/ISquare/isOccupied()|,
  |java+method:///snakes/Player/square()|,
  |java+method:///snakes/Game/play(snakes.Die)|,
  |java+method:///snakes/Player/invariant()|,
  |java+method:///snakes/ISquare/position()|,
  |java+method:///snakes/Game/movePlayer(int)|,
  |java+method:///snakes/Ladder/invariant()|,
  |java+constructor:///snakes/Snake/Snake(int,snakes.Game,int)|,
  |java+method:///snakes/Game/main(java.lang.String%5B%5D)|,
  |java+method:///snakes/Square/leave(snakes.Player)|,
  |java+constructor:///snakes/Ladder/Ladder(int,snakes.Game,int)|,
  |java+method:///snakes/Square/isLastSquare()|,
  |java+constructor:///snakes/Square/Square(snakes.Game,int)|,
  |java+method:///snakes/Ladder/landHereOrGoHome()|,
  |java+constructor:///snakes/LastSquare/LastSquare(snakes.Game,int)|,
  |java+method:///snakes/ISquare/moveAndLand(int)|,
  |java+method:///snakes/Player/joinGame(snakes.Game)|,
  |java+method:///snakes/SimpleGameTest/newGame()|,
  |java+method:///snakes/Square/player()|,
  |java+method:///snakes/Game/setSquare(int,snakes.ISquare)|,
  |java+method:///snakes/SimpleGameTest/move2jackBackwards(snakes.Game)|,
  |java+method:///snakes/Game/currentPlayer()|,
  |java+method:///snakes/Square/landHereOrGoHome()|,
  |java+method:///snakes/Ladder/isValidTransport(int)|,
  |java+method:///snakes/Player/position()|,
  |java+method:///snakes/DieTest/testMaxReached()|,
  |java+method:///snakes/SimpleGameTest/move5jackLadder(snakes.Game)|,
  |java+method:///snakes/SimpleGameTest/move6jill(snakes.Game)|,
  |java+method:///snakes/FirstSquare/enter(snakes.Player)|,
  |java+method:///snakes/LastSquare/isLastSquare()|,
  |java+method:///snakes/FirstSquare/leave(snakes.Player)|,
  |java+method:///snakes/ISquare/isFirstSquare()|,
  |java+method:///snakes/SimpleGameTest/move3jackMeetsJill(snakes.Game)|,
  |java+method:///snakes/Square/isOccupied()|,
  |java+method:///snakes/SimpleGameTest/move2jillLadder(snakes.Game)|,
  |java+method:///snakes/Player/toString()|,
  |java+method:///snakes/Game/isOver()|,
  |java+method:///snakes/Ladder/destination()|,
  |java+method:///snakes/Square/position()|,
  |java+method:///snakes/Player/moveForward(int)|,
  |java+method:///snakes/Game/invariant()|,
  |java+method:///snakes/SimpleGameTest/move7jackBouncesBackToJill(snakes.Game)|,
  |java+method:///snakes/SimpleGameTest/move1jack(snakes.Game)|,
  |java+method:///snakes/FirstSquare/player()|,
  |java+method:///snakes/Game/addPlayers(snakes.Player%5B%5D)...
```
What is the source code for any given method?

```rascal-shell ,continue
rascal>import IO;
ok
rascal>methodSrc = readFile(|java+method:///snakes/Square/landHereOrGoHome()|);
str: "public ISquare landHereOrGoHome() {\n\t\treturn this.isOccupied() ? game.firstSquare() : this;\n\t}"
```
Let's print it for readability's sake:

```rascal-shell ,continue
rascal>println(methodSrc)
public ISquare landHereOrGoHome() {
		return this.isOccupied() ? game.firstSquare() : this;
	}
ok
```
How many words in this method? Let's use a regex :-)

```rascal-shell ,continue
rascal>(0 | it + 1 | /\W+/ := methodSrc)
int: 9
```
But now, let's get its AST

```rascal-shell ,continue
rascal>methodFiles = myModel.declarations[|java+method:///snakes/Square/landHereOrGoHome()|];
set[loc]: {|tmp:///snakes-and-ladders/src/snakes/Square.java|(678,94,<37,1>,<39,2>)}
```
Now we know what file to look in, parse it:
```rascal-shell
rascal>fileAST = createAstFromFile(|tmp:///snakes-and-ladders/src/snakes/Square.java|, true);
Declaration: compilationUnit(
  package(
    "snakes",
    decl=|java+package:///snakes|,
    src=|tmp:///snakes-and-ladders/src/snakes/Square.java|(0,15,<1,0>,<1,15>)),
  [],
  [class(
      "Square",
      [],
      [simpleType(simpleName(
            "ISquare",
            src=|tmp:///snakes-and-ladders/src/snakes/Square.java|(48,7,<3,31>,<3,38>),
            decl=|java+class:///ISquare|,
            typ=class(
              |java+class:///ISquare|,
              [])))],
      [
        field(
          int(),
          [variable(
              "position",
              0,
              src=|tmp:///snakes-and-ladders/src/snakes/Square.java|(74,8,<5,15>,<5,23>),
              decl=|java+field:///snakes/Square/position|,
              typ=int())],
          modifiers=[protected()],
          src=|tmp:///snakes-and-ladders/src/snakes/Square.java|(60,23,<5,1>,<5,24>)),
        field(
          simpleType(simpleName(
              "Game",
              src=|tmp:///snakes-and-ladders/src/snakes/Square.java|(95,4,<6,11>,<6,15>),
              decl=|java+class:///snakes/Game|,
              typ=class(
                |java+class:///snakes/Game|,
                []))),
          [variable(
              "game",
              0,
              src=|tmp:///snakes-and-ladders/src/snakes/Square.java|(100,4,<6,16>,<6,20>),
              decl=|java+field:///snakes/Square/game|,
              typ=class(
                |java+class:///snakes/Game|,
                []))],
          modifiers=[protected()],
          src=|tmp:///snakes-and-ladders/src/snakes/Square.java|(85,20,<6,1>,<6,21>)),
        field(
          simpleType(simpleName(
              "Player",
              src=|tmp:///snakes-and-ladders/src/snakes/Square.java|(115,6,<7,9>,<7,15>),
              decl=|java+class:///snakes/Player|,
              typ=class(
                |java+class:///snakes/Player|,
                []))),
          [variable(
              "player",
              0,
              src=|tmp:///snakes-and-ladders/src/snakes/Square.java|(122,6,<7,16>,<7,22>),
              decl=|java+field:///snakes/Square/player|,
              typ=class(
                |java+class:///snakes/Player|,
                []))],
          modifiers=[private()],
          src=|tmp:///snakes-and-ladders/src/snakes/Square.java|(107,22,<7,1>,<7,23>)),
        method(
          boolean(),
          "invariant",
          [],
          [],
          block(
            [return(
                infix(
                  infix(
                    simpleName(
                      "game",
                      src=|tmp:///snakes-and-ladders/src/snakes/Square.java|(171,4,<10,9>,<10,13>),
                      decl=|java+field:///snakes/Square/game|,
                      typ=class(
                        |java+class:///snakes/Game|,
                        [])),
                    "!=",
                    null(
                      src=|tmp:///snakes-and-ladders/src/snakes/Square.java|(179,4,<10,17>,<10,21>),
                      typ=null()),
                    src=|tmp:///snakes-and-ladders/src/snakes/Square.java|(171,12,<10,9>,<10,21>),
                    typ=unresolved()),
                  "&&",
                  methodCall(
                    false,
                    simpleName(
                      "game",
                      src=|tmp:///snakes-and-ladders/src/snakes/Square.java|(190,4,<11,6>,<11,10>),
                      decl=|java+field:///snakes/Square/game|,
                      typ=class(
                        |java+class:///snakes/Game|,
                        [])),
                    "isValidPosition",
                    [simpleName(
                        "position",
                        src=|tmp:///snakes-and-ladders/src/snakes/Square.java|(211,8,<11,27>,<11,35>),
                        decl=|java+field:///snakes/Square/position|,
                        typ=int())],
                    src=|tmp:///snakes-and-ladders/src/snakes/Square.java|(190,30,<11,6>,<11,36>)...
```
one of the declarations in this file is the method we wanted to see:
```rascal-shell
rascal>methodASTs = {d | /Declaration d := fileAST, d.decl == |java+method:///snakes/Square/landHereOrGoHome()|};
set[Declaration]: {method(
    simpleType(simpleName(
        "ISquare",
        src=|tmp:///snakes-and-ladders/src/snakes/Square.java|(685,7,<37,8>,<37,15>),
        decl=|java+class:///snakes/ISquare|,
        typ=class(
          |java+class:///snakes/ISquare|,
          []))),
    "landHereOrGoHome",
    [],
    [],
    block(
      [return(
          conditional(
            methodCall(
              false,
              this(
                src=|tmp:///snakes-and-ladders/src/snakes/Square.java|(723,4,<38,9>,<38,13>),
                typ=class(
                  |java+class:///snakes/Square|,
                  [])),
              "isOccupied",
              [],
              src=|tmp:///snakes-and-ladders/src/snakes/Square.java|(723,17,<38,9>,<38,26>),
              decl=|java+method:///snakes/Square/isOccupied()|,
              typ=boolean()),
            methodCall(
              false,
              simpleName(
                "game",
                src=|tmp:///snakes-and-ladders/src/snakes/Square.java|(743,4,<38,29>,<38,33>),
                decl=|java+field:///snakes/Square/game|,
                typ=class(
                  |java+class:///snakes/Game|,
                  [])),
              "firstSquare",
              [],
              src=|tmp:///snakes-and-ladders/src/snakes/Square.java|(743,18,<38,29>,<38,47>),
              decl=|unresolved:///|,
              typ=unresolved()),
            this(
              src=|tmp:///snakes-and-ladders/src/snakes/Square.java|(764,4,<38,50>,<38,54>),
              typ=class(
                |java+class:///snakes/Square|,
                [])),
            src=|tmp:///snakes-and-ladders/src/snakes/Square.java|(723,45,<38,9>,<38,54>),
            typ=unresolved()),
          src=|tmp:///snakes-and-ladders/src/snakes/Square.java|(716,53,<38,2>,<38,55>))],
      src=|tmp:///snakes-and-ladders/src/snakes/Square.java|(712,60,<37,35>,<39,2>)),
    modifiers=[public()],
    src=|tmp:///snakes-and-ladders/src/snakes/Square.java|(678,94,<37,1>,<39,2>),
    decl=|java+method:///snakes/Square/landHereOrGoHome()|,
    typ=method(
      |java+method:///snakes/Square/landHereOrGoHome()|,
      [],
      class(
        |java+class:///snakes/ISquare|,
        []),
      []))}
```

If `methodASTs` would have been an empty set, then the [search pattern](../../../../RascalConcepts/PatternMatching/index.md) `/Declaration d` or the condition `d.decl == ...` would have failed on this example. But it didn't! It found exactly one match.

Now we count the number of expressions:

```rascal-shell ,continue
rascal>(0 | it + 1 | /Expression _ := methodASTs)
int: 7
```
or give us the locations of all expressions:

```rascal-shell ,continue
rascal>[m.src | /Expression m := methodASTs]
list[loc]: [
  |tmp:///snakes-and-ladders/src/snakes/Square.java|(685,7,<37,8>,<37,15>),
  |tmp:///snakes-and-ladders/src/snakes/Square.java|(723,4,<38,9>,<38,13>),
  |tmp:///snakes-and-ladders/src/snakes/Square.java|(723,17,<38,9>,<38,26>),
  |tmp:///snakes-and-ladders/src/snakes/Square.java|(743,4,<38,29>,<38,33>),
  |tmp:///snakes-and-ladders/src/snakes/Square.java|(743,18,<38,29>,<38,47>),
  |tmp:///snakes-and-ladders/src/snakes/Square.java|(764,4,<38,50>,<38,54>),
  |tmp:///snakes-and-ladders/src/snakes/Square.java|(723,45,<38,9>,<38,54>)
]
```
the size should be the same, right?

```rascal-shell ,continue
rascal>import List;
ok
rascal>size([m.src | /Expression m := methodASTs]) == (0 | it + 1 | /Expression _ := methodASTs)
bool: true
```

#### Benefits

* Click on any of the printed source [Location](../../../../Rascal/Expressions/Values/Location/index.md)s in the terminal and the IDE brings you to the file.
* The method AST contains all structural/syntactic information about a method and its signature. They are defined in the [AST](../../../../Library/lang/java/m3/AST.md) module.
* every node in the AST has been annotated with a `src` field to explain where exactly in the file it came from
* when name and type resolution is `true` for [create ast from file](../../../../Library/lang/java/m3/AST.md#lang::java::m3::AST-createAstFromFile), the `decl` fields on given nodes point to the resolved qualified names of a reference. These qualified names coincide with the overview [M3](../../../../Library/lang/java/m3/Core.md) model contents. 
* [pattern matching](../../../../RascalConcepts/PatternMatching/index.md) is a very powerful way of exploring and changing ASTs
* AST and M3 models exist for other programming languages than Java. Your skills developed here may transfer to there.
* AST and M3 creation is fully based on reusing the Eclipse JDT compiler stack, which has a high quality and can also recover from local errors in input files.
* [Location](../../../../Rascal/Expressions/Values/Location/index.md) values like `|java+method:///org/rascalmpl/ast/Statement/VariableDeclaration/clone()|` that occur in ASTs and M3 relations are _clickable_ in the terminal window and will take you to the source code identified by the URI (and the offset).

#### Pitfalls

* AST's and M3 models are a snapshot representation of the current state of the code, if source code changes on disk the models are not automatically updated.
* M3 accuracy, and also AST accuracy, depends greatly on the quality of the `classPath` provided to the extraction methods.

