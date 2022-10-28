---
title: "Code is Data: Analyzing Code"
---

Code analysis has many motivations. In this example we will see how we can resolve _bugs_ by analyzing code with automated queries, instead of reading code manually. In this example we will try and identify methods and classes that are not used at all.

#### Parsing=Turning Code into Data

In this example we use Rascal's JDT library, which wraps Eclipse's Java Development Toolkit compiler for Java and makes its information available as Rascal data types. This intermediate model is called _M3_, and its definition is split acros a generic
language independent module called [Core](../../../Library/analysis/m3/Core.md) and a Java specific part called [Core](../../../Library/lang/java/m3/Core.md). 



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

Now we can extract an overview model:

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

Next, let's focus on the _containment_ relation. This defines what parts of the source code are parts of which other parts:

```rascal-shell ,continue
rascal>myModel.containment
rel[loc from,loc to]: {
  <|java+method:///snakes/Game/isValidPosition(int)|,|java+parameter:///snakes/Game/isValidPosition(int)/scope(position)/scope(0)/position|>,
  <|java+compilationUnit:///snakes-and-ladders/src/snakes/SimpleGameTest.java|,|java+class:///snakes/SimpleGameTest|>,
  <|java+method:///snakes/Square/enter(snakes.Player)|,|java+parameter:///snakes/Square/enter(snakes.Player)/scope(player)/scope(0)/player|>,
  <|java+method:///snakes/FirstSquare/leave(snakes.Player)|,|java+parameter:///snakes/FirstSquare/leave(snakes.Player)/scope(player)/scope(0)/player|>,
  <|java+method:///snakes/Game/findSquare(int,int)|,|java+variable:///snakes/Game/findSquare(int,int)/target|>,
  <|java+method:///snakes/Game/findSquare(int,int)|,|java+parameter:///snakes/Game/findSquare(int,int)/scope(position)/scope(0)/position|>,
  <|java+method:///snakes/Game/findSquare(int,int)|,|java+parameter:///snakes/Game/findSquare(int,int)/scope(moves)/scope(0)/moves|>,
  <|java+constructor:///snakes/Snake/Snake(int,snakes.Game,int)|,|java+parameter:///snakes/Snake/Snake(int,snakes.Game,int)/scope(transport)/scope(0)/transport|>,
  <|java+constructor:///snakes/Snake/Snake(int,snakes.Game,int)|,|java+parameter:///snakes/Snake/Snake(int,snakes.Game,int)/scope(position)/scope(0)/position|>,
  <|java+constructor:///snakes/Snake/Snake(int,snakes.Game,int)|,|java+parameter:///snakes/Snake/Snake(int,snakes.Game,int)/scope(game)/scope(0)/game|>,
  <|java+method:///snakes/Game/addPlayers(snakes.Player%5B%5D)|,|java+variable:///snakes/Game/addPlayers(snakes.Player%5B%5D)/scope(0)/player|>,
  <|java+method:///snakes/Game/addPlayers(snakes.Player%5B%5D)|,|java+parameter:///snakes/Game/addPlayers(snakes.Player%5B%5D)/scope(initPlayers)/scope(0)/initPlayers|>,
  <|java+compilationUnit:///snakes-and-ladders/src/snakes/Snake.java|,|java+class:///snakes/Snake|>,
  <|java+compilationUnit:///snakes-and-ladders/src/snakes/Die.java|,|java+class:///snakes/Die|>,
  <|java+method:///snakes/Square/moveAndLand(int)|,|java+parameter:///snakes/Square/moveAndLand(int)/scope(moves)/scope(0)/moves|>,
  <|java+method:///snakes/SimpleGameTest/move1strings(snakes.Game)|,|java+parameter:///snakes/SimpleGameTest/move1strings(snakes.Game)/scope(game)/scope(0)/game|>,
  <|java+method:///snakes/Game/initSquare(int,snakes.ISquare)|,|java+parameter:///snakes/Game/initSquare(int,snakes.ISquare)/scope(square)/scope(0)/square|>,
  <|java+method:///snakes/Game/initSquare(int,snakes.ISquare)|,|java+parameter:///snakes/Game/initSquare(int,snakes.ISquare)/scope(position)/scope(0)/position|>,
  <|java+class:///snakes/Die|,|java+method:///snakes/Die/roll()|>,
  <|java+class:///snakes/Die|,|java+field:///snakes/Die/FACES|>,
  <|java+class:///snakes/Snake|,|java+method:///snakes/Snake/squareLabel()|>,
  <|java+class:///snakes/Snake|,|java+constructor:///snakes/Snake/Snake(int,snakes.Game,int)|>,
  <|java+method:///snakes/Die/roll()|,|java+variable:///snakes/Die/roll()/result|>,
  <|java+method:///snakes/SimpleGameTest/initialStrings(snakes.Game)|,|java+parameter:///snakes/SimpleGameTest/initialStrings(snakes.Game)/scope(game)/scope(0)/game|>,
  <|java+method:///snakes/SimpleGameTest/move4jillSnake(snakes.Game)|,|java+parameter:///snakes/SimpleGameTest/move4jillSnake(snakes.Game)/scope(game)/scope(0)/game|>,
  <|java+method:///snakes/DieTest/reached(int)|,|java+variable:///snakes/DieTest/reached(int)/scope(0)/i|>,
  <|java+method:///snakes/DieTest/reached(int)|,|java+variable:///snakes/DieTest/reached(int)/die|>,
  <|java+method:///snakes/DieTest/reached(int)|,|java+parameter:///snakes/DieTest/reached(int)/scope(value)/scope(0)/value|>,
  <|java+method:///snakes/Game/addSquares(int)|,|java+variable:///snakes/Game/addSquares(int)/scope(0)/scope(0)/square|>,
  <|java+method:///snakes/Game/addSquares(int)|,|java+parameter:///snakes/Game/addSquares(int)/scope(size)/scope(0)/size|>,
  <|java+method:///snakes/Game/addSquares(int)|,|java+variable:///snakes/Game/addSquares(int)/scope(0)/i|>,
  <|java+method:///snakes/DieTest/testInRange()...
```

You are looking at a binary relation of type `rel[loc from,loc to]`, where `from` is the container and `to` is the contained item. Each tuple, or row if you will, maps a container to a contained item.

As you can read, classes contain methods, methods contain variables, etc. Classes could also contain other classes (nested classes), and methods can even contain classes (anonymous classes). Let's focus on a specific class, and project what it contains from the relation:

```rascal-shell ,continue
rascal>import IO;
ok
rascal>println(readFile(|java+class:///snakes/Snake|))
public class Snake extends Ladder {

	public Snake(int transport, Game game, int position) {
		super(transport, game, position);
	}

	@Override
	protected String squareLabel() {
		return this.destination().position() + "<-" + position;
	}

}
ok
rascal>myModel.containment[|java+class:///snakes/Snake|]
set[loc]: {
  |java+method:///snakes/Snake/squareLabel()|,
  |java+constructor:///snakes/Snake/Snake(int,snakes.Game,int)|
}
rascal>methods(myModel)
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
rascal>import Set;
ok
rascal>size(methods(myModel))
int: 85
```

As you can see there are 85 methods in this system. Are they all used? That's not something you would want to check manually, so let's write some queries:


```rascal-shell ,continue
rascal>allMethods = methods(myModel);
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
methodInvocation reports on who calls who
```rascal-shell
rascal>myModel.methodInvocation
rel[loc from,loc to]: {
  <|java+method:///snakes/Game/firstSquare()|,|java+method:///java/util/List/get(int)|>,
  <|java+method:///snakes/Game/getSquare(int)|,|java+method:///snakes/Game/isValidPosition(int)|>,
  <|java+method:///snakes/Game/getSquare(int)|,|java+method:///java/util/List/get(int)|>,
  <|java+method:///snakes/Game/setSquareToSnake(int,int)|,|java+constructor:///snakes/Snake/Snake(int,snakes.Game,int)|>,
  <|java+method:///snakes/Game/setSquareToSnake(int,int)|,|java+method:///snakes/Game/setSquare(int,snakes.ISquare)|>,
  <|java+constructor:///snakes/FirstSquare/FirstSquare(snakes.Game,int)|,|java+constructor:///java/util/ArrayList/ArrayList()|>,
  <|java+constructor:///snakes/FirstSquare/FirstSquare(snakes.Game,int)|,|java+constructor:///snakes/Square/Square(snakes.Game,int)|>,
  <|java+method:///snakes/FirstSquare/leave(snakes.Player)|,|java+method:///java/util/List/contains(java.lang.Object)|>,
  <|java+method:///snakes/FirstSquare/leave(snakes.Player)|,|java+method:///java/util/List/remove(java.lang.Object)|>,
  <|java+constructor:///snakes/Game/Game(int,snakes.Player%5B%5D)|,|java+method:///snakes/Game/addSquares(int)|>,
  <|java+constructor:///snakes/Game/Game(int,snakes.Player%5B%5D)|,|java+method:///snakes/Game/invariant()|>,
  <|java+constructor:///snakes/Game/Game(int,snakes.Player%5B%5D)|,|java+method:///snakes/Game/addPlayers(snakes.Player%5B%5D)|>,
  <|java+method:///snakes/Square/nextSquare()|,|java+method:///snakes/Game/getSquare(int)|>,
  <|java+method:///snakes/Square/moveAndLand(int)|,|java+method:///snakes/Game/findSquare(int,int)|>,
  <|java+method:///snakes/Square/moveAndLand(int)|,|java+method:///snakes/ISquare/landHereOrGoHome()|>,
  <|java+method:///snakes/SimpleGameTest/move1strings(snakes.Game)|,|java+method:///java/lang/Object/toString()|>,
  <|java+method:///snakes/SimpleGameTest/move1strings(snakes.Game)|,|java+method:///snakes/Game/firstSquare()|>,
  <|java+method:///snakes/SimpleGameTest/move1strings(snakes.Game)|,|java+method:///snakes/Game/getSquare(int)|>,
  <|java+method:///snakes/Game/initSquare(int,snakes.ISquare)|,|java+method:///snakes/Game/isValidPosition(int)|>,
  <|java+method:///snakes/Game/initSquare(int,snakes.ISquare)|,|java+method:///java/util/List/set(int,E)|>,
  <|java+method:///snakes/FirstSquare/isOccupied()|,|java+method:///java/util/List/isEmpty()|>,
  <|java+method:///snakes/Ladder/squareLabel()|,|java+method:///snakes/ISquare/position()|>,
  <|java+method:///snakes/Ladder/squareLabel()|,|java+method:///snakes/Ladder/destination()|>,
  <|java+method:///snakes/Game/findSquare(int,int)|,|java+method:///snakes/Game/getSquare(int)|>,
  <|java+method:///snakes/Player/wins()|,|java+method:///snakes/ISquare/isLastSquare()|>,
  <|java+method:///snakes/Square/previousSquare()|,|java+method:///snakes/Game/getSquare(int)|>,
  <|java+method:///snakes/Die/roll()|,|java+method:///java/lang/Math/random()|>,
  <|java+method:///snakes/DieTest/reached(int)|,|java+method:///snakes/Die/roll()|>,
  <|java+method:///snakes/DieTest/reached(int)|,|java+constructor:///snakes/Die/Die()|>,
  <|java+method:///snakes/SimpleGameTest/initialStrings(snakes.Game)|,|java+method:///java/lang/Object/toString()|>,
  <|java+method:///snakes/SimpleGameTest/initialStrings(snakes.Game)|,|java+method:///snakes/Game/toString()|>,
  <|java+method:///snakes/SimpleGameTest/initialStrings(snakes.Game)|,|java+method:///snakes/Game/firstSquare()|>,
  <|java+method:///snakes/SimpleGameTest/initialStrings(snakes.Game)|,|java+method:///snakes/Game/getSquare(int)|>,
  <|java+method:///snakes/SimpleGameTest/initialStrings(snakes.Game)|,|java+method:///snakes/Player/toString()|>,
  <|java+method:///snakes/SimpleGameTest/move4jillSnake(snakes.Game)|,|java+method:///snakes/Game/notOver()|>,
  <|java+method:///snakes/SimpleGameTest/move4jillSnake(snakes.Game)|,|java+method:///snakes/Game/movePlayer(int)|>,
  <|java+method:///snakes/SimpleGameTest/move4jillSnake(snakes.Game)|,|java+method:///snakes/Game/currentPlayer()|>,
  <|java+method:///snakes/SimpleGameTest/move4jillSnake(snakes.Game)...
```
so let's find out which method definitions are never invoked
```rascal-shell
rascal>myModel.methodInvocation<1> - allMethods;
set[loc]: {
  |java+method:///java/lang/Object/toString()|,
  |java+method:///java/io/PrintStream/println(java.lang.String)|,
  |java+constructor:///snakes/SimpleGameTest/SimpleGameTest()|,
  |java+constructor:///snakes/Die/Die()|,
  |java+method:///java/util/List/add(E)|,
  |java+method:///java/util/List/get(int)|,
  |java+method:///java/util/List/contains(java.lang.Object)|,
  |java+method:///java/lang/StringBuffer/append(java.lang.String)|,
  |java+method:///java/util/Queue/remove()|,
  |java+method:///java/util/Queue/add(E)|,
  |java+constructor:///java/util/ArrayList/ArrayList()|,
  |java+method:///java/util/List/isEmpty()|,
  |java+method:///java/lang/Integer/toString(int)|,
  |java+method:///java/util/List/size()|,
  |java+method:///java/util/Collection/size()|,
  |java+method:///java/lang/Math/random()|,
  |java+method:///java/lang/StringBuffer/toString()|,
  |java+constructor:///java/util/LinkedList/LinkedList()|,
  |java+method:///java/util/Queue/peek()|,
  |java+method:///java/util/List/set(int,E)|,
  |java+method:///java/util/List/remove(java.lang.Object)|,
  |java+constructor:///java/lang/StringBuffer/StringBuffer()|
}
```

Mmmm... we've made a mistake. The Java language offers "virtual methods", while
we have listed many method definitions that override virtual methods they are never
explicitly called.


```rascal-shell ,continue
```
methodOverrides is a tabel that explains which method overrides which other method
```rascal-shell
rascal>myModel.methodOverrides
rel[loc from,loc to]: {
  <|java+method:///snakes/Square/moveAndLand(int)|,|java+method:///snakes/ISquare/moveAndLand(int)|>,
  <|java+method:///snakes/Game/toString()|,|java+method:///java/lang/Object/toString()|>,
  <|java+method:///snakes/Square/isFirstSquare()|,|java+method:///snakes/ISquare/isFirstSquare()|>,
  <|java+constructor:///snakes/Snake/Snake(int,snakes.Game,int)|,|java+constructor:///snakes/Ladder/Ladder(int,snakes.Game,int)|>,
  <|java+method:///snakes/Square/enter(snakes.Player)|,|java+method:///snakes/ISquare/enter(snakes.Player)|>,
  <|java+constructor:///snakes/FirstSquare/FirstSquare(snakes.Game,int)|,|java+constructor:///snakes/Square/Square(snakes.Game,int)|>,
  <|java+method:///snakes/Square/landHereOrGoHome()|,|java+method:///snakes/ISquare/landHereOrGoHome()|>,
  <|java+method:///snakes/Square/position()|,|java+method:///snakes/ISquare/position()|>,
  <|java+method:///snakes/FirstSquare/player()|,|java+method:///snakes/Square/player()|>,
  <|java+method:///snakes/Square/toString()|,|java+method:///java/lang/Object/toString()|>,
  <|java+method:///snakes/Snake/squareLabel()|,|java+method:///snakes/Ladder/squareLabel()|>,
  <|java+method:///snakes/Snake/squareLabel()|,|java+method:///snakes/Square/squareLabel()|>,
  <|java+method:///snakes/FirstSquare/enter(snakes.Player)|,|java+method:///snakes/Square/enter(snakes.Player)|>,
  <|java+method:///snakes/FirstSquare/enter(snakes.Player)|,|java+method:///snakes/ISquare/enter(snakes.Player)|>,
  <|java+method:///snakes/Ladder/squareLabel()|,|java+method:///snakes/Square/squareLabel()|>,
  <|java+method:///snakes/FirstSquare/isOccupied()|,|java+method:///snakes/ISquare/isOccupied()|>,
  <|java+method:///snakes/FirstSquare/isOccupied()|,|java+method:///snakes/Square/isOccupied()|>,
  <|java+method:///snakes/Square/leave(snakes.Player)|,|java+method:///snakes/ISquare/leave(snakes.Player)|>,
  <|java+method:///snakes/Square/isLastSquare()|,|java+method:///snakes/ISquare/isLastSquare()|>,
  <|java+constructor:///snakes/LastSquare/LastSquare(snakes.Game,int)|,|java+constructor:///snakes/Square/Square(snakes.Game,int)|>,
  <|java+method:///snakes/Ladder/landHereOrGoHome()|,|java+method:///snakes/ISquare/landHereOrGoHome()|>,
  <|java+method:///snakes/Ladder/landHereOrGoHome()|,|java+method:///snakes/Square/landHereOrGoHome()|>,
  <|java+method:///snakes/LastSquare/isLastSquare()|,|java+method:///snakes/Square/isLastSquare()|>,
  <|java+method:///snakes/LastSquare/isLastSquare()|,|java+method:///snakes/ISquare/isLastSquare()|>,
  <|java+method:///snakes/FirstSquare/leave(snakes.Player)|,|java+method:///snakes/Square/leave(snakes.Player)|>,
  <|java+method:///snakes/FirstSquare/leave(snakes.Player)|,|java+method:///snakes/ISquare/leave(snakes.Player)|>,
  <|java+method:///snakes/Square/isOccupied()|,|java+method:///snakes/ISquare/isOccupied()|>,
  <|java+method:///snakes/Player/toString()|,|java+method:///java/lang/Object/toString()|>,
  <|java+method:///snakes/FirstSquare/landHereOrGoHome()|,|java+method:///snakes/ISquare/landHereOrGoHome()|>,
  <|java+method:///snakes/FirstSquare/landHereOrGoHome()|,|java+method:///snakes/Square/landHereOrGoHome()|>,
  <|java+method:///snakes/FirstSquare/isFirstSquare()|,|java+method:///snakes/Square/isFirstSquare()|>,
  <|java+method:///snakes/FirstSquare/isFirstSquare()|,|java+method:///snakes/ISquare/isFirstSquare()|>
}
```
so we can compose that to find out who is probably called:
```rascal-shell
rascal>myModel.methodInvocation o (myModel.methodOverrides<1,0>) 
rel[loc,loc]: {
  <|java+method:///snakes/Ladder/squareLabel()|,|java+method:///snakes/Square/position()|>,
  <|java+method:///snakes/Snake/squareLabel()|,|java+method:///snakes/Square/position()|>,
  <|java+constructor:///snakes/Snake/Snake(int,snakes.Game,int)|,|java+constructor:///snakes/Snake/Snake(int,snakes.Game,int)|>,
  <|java+method:///snakes/Game/setSquareToLadder(int,int)|,|java+constructor:///snakes/Snake/Snake(int,snakes.Game,int)|>,
  <|java+method:///snakes/Player/wins()|,|java+method:///snakes/Square/isLastSquare()|>,
  <|java+method:///snakes/Player/wins()|,|java+method:///snakes/LastSquare/isLastSquare()|>,
  <|java+method:///snakes/SimpleGameTest/initialStrings(snakes.Game)|,|java+method:///snakes/Game/toString()|>,
  <|java+method:///snakes/SimpleGameTest/initialStrings(snakes.Game)|,|java+method:///snakes/Player/toString()|>,
  <|java+method:///snakes/SimpleGameTest/initialStrings(snakes.Game)|,|java+method:///snakes/Square/toString()|>,
  <|java+constructor:///snakes/Ladder/Ladder(int,snakes.Game,int)|,|java+constructor:///snakes/LastSquare/LastSquare(snakes.Game,int)|>,
  <|java+constructor:///snakes/Ladder/Ladder(int,snakes.Game,int)|,|java+constructor:///snakes/FirstSquare/FirstSquare(snakes.Game,int)|>,
  <|java+constructor:///snakes/FirstSquare/FirstSquare(snakes.Game,int)|,|java+constructor:///snakes/LastSquare/LastSquare(snakes.Game,int)|>,
  <|java+constructor:///snakes/FirstSquare/FirstSquare(snakes.Game,int)|,|java+constructor:///snakes/FirstSquare/FirstSquare(snakes.Game,int)|>,
  <|java+method:///snakes/SimpleGameTest/move3jackMeetsJill(snakes.Game)|,|java+method:///snakes/FirstSquare/isOccupied()|>,
  <|java+method:///snakes/SimpleGameTest/move3jackMeetsJill(snakes.Game)|,|java+method:///snakes/Square/isOccupied()|>,
  <|java+method:///snakes/Player/moveForward(int)|,|java+method:///snakes/Square/moveAndLand(int)|>,
  <|java+method:///snakes/Player/moveForward(int)|,|java+method:///snakes/Square/enter(snakes.Player)|>,
  <|java+method:///snakes/Player/moveForward(int)|,|java+method:///snakes/Square/leave(snakes.Player)|>,
  <|java+method:///snakes/Player/moveForward(int)|,|java+method:///snakes/FirstSquare/enter(snakes.Player)|>,
  <|java+method:///snakes/Player/moveForward(int)|,|java+method:///snakes/FirstSquare/leave(snakes.Player)|>,
  <|java+method:///snakes/Square/toString()|,|java+method:///snakes/Ladder/squareLabel()|>,
  <|java+method:///snakes/Square/toString()|,|java+method:///snakes/Snake/squareLabel()|>,
  <|java+method:///snakes/Square/toString()|,|java+method:///snakes/FirstSquare/player()|>,
  <|java+method:///snakes/Square/moveAndLand(int)|,|java+method:///snakes/Ladder/landHereOrGoHome()|>,
  <|java+method:///snakes/Square/moveAndLand(int)|,|java+method:///snakes/Square/landHereOrGoHome()|>,
  <|java+method:///snakes/Square/moveAndLand(int)|,|java+method:///snakes/FirstSquare/landHereOrGoHome()|>,
  <|java+method:///snakes/SimpleGameTest/move1strings(snakes.Game)|,|java+method:///snakes/Game/toString()|>,
  <|java+method:///snakes/SimpleGameTest/move1strings(snakes.Game)|,|java+method:///snakes/Player/toString()|>,
  <|java+method:///snakes/SimpleGameTest/move1strings(snakes.Game)|,|java+method:///snakes/Square/toString()|>,
  <|java+method:///snakes/Game/addSquares(int)|,|java+constructor:///snakes/LastSquare/LastSquare(snakes.Game,int)|>,
  <|java+method:///snakes/Game/addSquares(int)|,|java+constructor:///snakes/FirstSquare/FirstSquare(snakes.Game,int)|>,
  <|java+method:///snakes/Game/toString()|,|java+method:///snakes/Game/toString()|>,
  <|java+method:///snakes/Game/toString()|,|java+method:///snakes/Player/toString()|>,
  <|java+method:///snakes/Game/toString()|,|java+method:///snakes/Square/toString()|>,
  <|java+method:///snakes/Ladder/landHereOrGoHome()|,|java+method:///snakes/Ladder/landHereOrGoHome()|>,
  <|java+method:///snakes/Ladder/landHereOrGoHome()|,|java+method:///snakes/Square/landHereOrGoHome()|>,
  <|java+method:///snakes/Ladder/landHereOrGoHome()|,|java+method:///snakes/FirstSquare/landHereOrGoHome()...
```
and by adding all the others as well, we have a "complete" call graph
```rascal-shell
rascal>calls = myModel.methodInvocation + myModel.methodInvocation o (myModel.methodOverrides<1,0>);
rel[loc,loc]: {
  <|java+method:///snakes/Game/firstSquare()|,|java+method:///java/util/List/get(int)|>,
  <|java+method:///snakes/Game/getSquare(int)|,|java+method:///snakes/Game/isValidPosition(int)|>,
  <|java+method:///snakes/Game/getSquare(int)|,|java+method:///java/util/List/get(int)|>,
  <|java+method:///snakes/Game/setSquareToSnake(int,int)|,|java+constructor:///snakes/Snake/Snake(int,snakes.Game,int)|>,
  <|java+method:///snakes/Game/setSquareToSnake(int,int)|,|java+method:///snakes/Game/setSquare(int,snakes.ISquare)|>,
  <|java+constructor:///snakes/FirstSquare/FirstSquare(snakes.Game,int)|,|java+constructor:///java/util/ArrayList/ArrayList()|>,
  <|java+constructor:///snakes/FirstSquare/FirstSquare(snakes.Game,int)|,|java+constructor:///snakes/FirstSquare/FirstSquare(snakes.Game,int)|>,
  <|java+constructor:///snakes/FirstSquare/FirstSquare(snakes.Game,int)|,|java+constructor:///snakes/Square/Square(snakes.Game,int)|>,
  <|java+constructor:///snakes/FirstSquare/FirstSquare(snakes.Game,int)|,|java+constructor:///snakes/LastSquare/LastSquare(snakes.Game,int)|>,
  <|java+method:///snakes/FirstSquare/leave(snakes.Player)|,|java+method:///java/util/List/contains(java.lang.Object)|>,
  <|java+method:///snakes/FirstSquare/leave(snakes.Player)|,|java+method:///java/util/List/remove(java.lang.Object)|>,
  <|java+constructor:///snakes/Game/Game(int,snakes.Player%5B%5D)|,|java+method:///snakes/Game/addSquares(int)|>,
  <|java+constructor:///snakes/Game/Game(int,snakes.Player%5B%5D)|,|java+method:///snakes/Game/invariant()|>,
  <|java+constructor:///snakes/Game/Game(int,snakes.Player%5B%5D)|,|java+method:///snakes/Game/addPlayers(snakes.Player%5B%5D)|>,
  <|java+method:///snakes/Square/nextSquare()|,|java+method:///snakes/Game/getSquare(int)|>,
  <|java+method:///snakes/Square/moveAndLand(int)|,|java+method:///snakes/Game/findSquare(int,int)|>,
  <|java+method:///snakes/Square/moveAndLand(int)|,|java+method:///snakes/ISquare/landHereOrGoHome()|>,
  <|java+method:///snakes/Square/moveAndLand(int)|,|java+method:///snakes/Ladder/landHereOrGoHome()|>,
  <|java+method:///snakes/Square/moveAndLand(int)|,|java+method:///snakes/Square/landHereOrGoHome()|>,
  <|java+method:///snakes/Square/moveAndLand(int)|,|java+method:///snakes/FirstSquare/landHereOrGoHome()|>,
  <|java+method:///snakes/SimpleGameTest/move1strings(snakes.Game)|,|java+method:///java/lang/Object/toString()|>,
  <|java+method:///snakes/SimpleGameTest/move1strings(snakes.Game)|,|java+method:///snakes/Game/toString()|>,
  <|java+method:///snakes/SimpleGameTest/move1strings(snakes.Game)|,|java+method:///snakes/Game/firstSquare()|>,
  <|java+method:///snakes/SimpleGameTest/move1strings(snakes.Game)|,|java+method:///snakes/Game/getSquare(int)|>,
  <|java+method:///snakes/SimpleGameTest/move1strings(snakes.Game)|,|java+method:///snakes/Player/toString()|>,
  <|java+method:///snakes/SimpleGameTest/move1strings(snakes.Game)|,|java+method:///snakes/Square/toString()|>,
  <|java+method:///snakes/Game/initSquare(int,snakes.ISquare)|,|java+method:///snakes/Game/isValidPosition(int)|>,
  <|java+method:///snakes/Game/initSquare(int,snakes.ISquare)|,|java+method:///java/util/List/set(int,E)|>,
  <|java+method:///snakes/FirstSquare/isOccupied()|,|java+method:///java/util/List/isEmpty()|>,
  <|java+method:///snakes/Ladder/squareLabel()|,|java+method:///snakes/ISquare/position()|>,
  <|java+method:///snakes/Ladder/squareLabel()|,|java+method:///snakes/Ladder/destination()|>,
  <|java+method:///snakes/Ladder/squareLabel()|,|java+method:///snakes/Square/position()|>,
  <|java+method:///snakes/Game/findSquare(int,int)|,|java+method:///snakes/Game/getSquare(int)|>,
  <|java+method:///snakes/Player/wins()|,|java+method:///snakes/Square/isLastSquare()|>,
  <|java+method:///snakes/Player/wins()|,|java+method:///snakes/LastSquare/isLastSquare()|>,
  <|java+method:///snakes/Player/wins()|,|java+method:///snakes/ISquare/isLastSquare()|>,
  <|java+method:///snakes/Square/previousSquare()|,|java+method:///snakes/Game/getSquare(int)...
```
so which methods are defined but never called int this Game?
```rascal-shell
rascal>notCalled = methods(myModel) - calls<1>;
set[loc]: {
  |java+method:///snakes/Player/square()|,
  |java+method:///snakes/Game/main(java.lang.String%5B%5D)|,
  |java+method:///snakes/SimpleGameTest/move2jackBackwards(snakes.Game)|,
  |java+method:///snakes/SimpleGameTest/move6jill(snakes.Game)|,
  |java+method:///snakes/SimpleGameTest/move8jillWins(snakes.Game)|,
  |java+method:///snakes/Square/nextSquare()|,
  |java+method:///snakes/SimpleGameTest/move1strings(snakes.Game)|,
  |java+method:///snakes/Square/previousSquare()|,
  |java+method:///snakes/SimpleGameTest/initialStrings(snakes.Game)|,
  |java+method:///snakes/SimpleGameTest/move4jillSnake(snakes.Game)|,
  |java+method:///snakes/DieTest/testInRange()|,
  |java+method:///snakes/DieTest/testMinReached()|,
  |java+method:///snakes/DieTest/testMaxReached()|,
  |java+method:///snakes/SimpleGameTest/move5jackLadder(snakes.Game)|,
  |java+method:///snakes/SimpleGameTest/move3jackMeetsJill(snakes.Game)|,
  |java+method:///snakes/SimpleGameTest/move2jillLadder(snakes.Game)|,
  |java+method:///snakes/SimpleGameTest/move7jackBouncesBackToJill(snakes.Game)|,
  |java+method:///snakes/SimpleGameTest/move1jack(snakes.Game)|
}
rascal>notConstructed = constructors(myModel) - calls<1>;
set[loc]: {}
```

The results are:
* `main` is not called; that makes sense
* lots of test methods are not called; that also makes sense since they are called by the Unit test framework using reflection;
* we can filter the tests automatically, but this set is small enough to go through manually.

The two unused methods are:
* `|java+method:///snakes/Square/nextSquare()|`
* `|java+method:///snakes/Player/square()|`

Note that this analysis is reasonably precise, but not 100% exact:
* all name analysis and type analysis is done and used to disambiguate identifier names. There can be no confusion between overloaded methods for example and therefore overriding/implementing analysis is exact.
* the constructed call graph is:
   * an over-approximation because not all overriden methods have to be called, it's just that they might be called
   * an under-approximation because we don't see the calls made by reflection. The test methods are a good example of that
* adding more analysis code can make the result more exact.

