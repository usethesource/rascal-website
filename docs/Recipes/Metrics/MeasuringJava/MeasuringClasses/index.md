---
title: Measuring Classes
---

#### Synopsis

A typical example of how to use M3 to analyze Java classes.

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

```rascal-shell
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

```rascal-shell
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

```rascal-shell
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

```rascal-shell
rascal>import IO;
ok
rascal>println(readFile(|java+class:///snakes/Snake|))
println(readFile(|java+class:///snakes/Snake|))
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
```
Let's filter the methods:

```rascal-shell
rascal>snakeMethods = [ e | e <- myModel.containment[|java+class:///snakes/Snake|], e.scheme == "java+method"];
list[loc]: [|java+method:///snakes/Snake/squareLabel()|]
```
And we are ready to compute our first metric. How many methods does this class contain?

```rascal-shell
rascal>import List;
ok
rascal>size(snakeMethods)
int: 1
```
No magic applied! It is just a little query on a model that knows everything about the code. 

Note that some people define Java's constructors also as methods! In that case our metric is wrong and we should fix it.
The quality of a metric's implementation is defined by its independent definition.

Let's generalize and compute the number of methods for all classes in one big expression. First we make a new function to compute the number for any given class. Now we reuse `isMethod` for a change, which includes normal methods, constructors and static initializers:

```rascal-shell
rascal>int numberOfMethods(loc cl, M3 model) = size([ m | m <- model.containment[cl], isMethod(m)]);
int (loc, M3): function(|prompt:///|(0,93,<1,0>,<1,93>))
rascal>numberOfMethods(|java+class:///snakes/Snake|, myModel)
int: 2
```

Then we apply this new function to give us a map from classes to integers:

```rascal-shell
rascal>classes(myModel)
set[loc]: {
  |java+class:///snakes/Game|,
  |java+class:///snakes/SimpleGameTest|,
  |java+class:///snakes/DieTest|,
  |java+class:///snakes/Square|,
  |java+class:///snakes/Player|,
  |java+class:///snakes/Ladder|,
  |java+class:///snakes/Die|,
  |java+class:///snakes/Snake|,
  |java+class:///snakes/LastSquare|,
  |java+class:///snakes/FirstSquare|
}
rascal>map[loc class, int methodCount] numberOfMethodsPerClass = (cl:numberOfMethods(cl, myModel) | cl <- classes(myModel));
map[loc class, int methodCount]: (
  |java+class:///snakes/Game|:20,
  |java+class:///snakes/SimpleGameTest|:12,
  |java+class:///snakes/DieTest|:4,
  |java+class:///snakes/Square|:15,
  |java+class:///snakes/Player|:8,
  |java+class:///snakes/Ladder|:6,
  |java+class:///snakes/Die|:1,
  |java+class:///snakes/Snake|:2,
  |java+class:///snakes/LastSquare|:2,
  |java+class:///snakes/FirstSquare|:7
)
```
How about the number of fields?

```rascal-shell
rascal>int numberOfFields(loc cl, M3 model) = size([ m | m <- model.containment[cl], isField(m)]);
int (loc, M3): function(|prompt:///|(0,91,<1,0>,<1,91>))
rascal>map[loc class, int fieldCount] numberOfFieldsPerClass = (cl:numberOfFields(cl, myModel) | cl <- classes(myModel));
map[loc class, int fieldCount]: (
  |java+class:///snakes/Game|:4,
  |java+class:///snakes/SimpleGameTest|:2,
  |java+class:///snakes/DieTest|:1,
  |java+class:///snakes/Square|:3,
  |java+class:///snakes/Player|:2,
  |java+class:///snakes/Ladder|:1,
  |java+class:///snakes/Die|:1,
  |java+class:///snakes/Snake|:0,
  |java+class:///snakes/LastSquare|:0,
  |java+class:///snakes/FirstSquare|:1
)
```
What is the ratio between fields and methods for each class?

```rascal-shell
rascal>(cl : (numberOfFieldsPerClass[cl] * 1.0) / (numberOfMethodsPerClass[cl] * 1.0) | cl <- classes(myModel))
map[loc, real]: (
  |java+class:///snakes/Game|:0.2,
  |java+class:///snakes/SimpleGameTest|:0.1666666667,
  |java+class:///snakes/DieTest|:0.25,
  |java+class:///snakes/Square|:0.2,
  |java+class:///snakes/Player|:0.25,
  |java+class:///snakes/Ladder|:0.1666666667,
  |java+class:///snakes/Die|:1.,
  |java+class:///snakes/Snake|:0.,
  |java+class:///snakes/LastSquare|:0.,
  |java+class:///snakes/FirstSquare|:0.1428571429
)
```

There is a lot more to discover in M3 models. These are the currently available relations in an M3 model:

```rascal-shell
rascal>import Node;
ok
rascal>import Set;
ok
rascal>for (r <- sort(getKeywordParameters(myModel)<0>)) println("  <r>");
for (r <- sort(getKeywordParameters(myModel)<0>)) println("  <r>");
  annotations
  containment
  declarations
  documentation
  extends
  fieldAccess
  implements
  messages
  methodInvocation
  methodOverrides
  modifiers
  names
  typeDependency
  types
  uses
list[void]: []
```

See [Core](../../../../Library/analysis/m3/Core.md) for the definition of the language-independent relations and [Core](../../../../Library/lang/java/m3/Core.md) for the Java-specific extensions.

#### Benefits

* Rascal values, such as M3 models, are fully text-based. That means what you see on screen is what is in memory, and vice versa. Nothing is hidden or implicit. No magic!
* Using relational calculus operators like [Intersection](../../../../Rascal/Expressions/Values/Set/Intersection), [Union](../../../../Rascal/Expressions/Values/Set/Union), [Composition](../../../../Rascal/Expressions/Values/Relation/Composition), [Comprehension](../../../../Rascal/Expressions/Values/Set/Comprehension) you can query M3 models in many different ways.
* M3 models encapsulate *everything* there is to know about the structure of a Java project. Using the knowledge of the Eclipse JDT compiler we derive types and names, semantic relations that can be queried at will.
* M3 models are *composable*; you could extract them for different projects that depend on each-other and combine them before running an analysis on the whole
* There are other M3 models for other languages, with similar ideas and design. You can transfer your analysis skills to those lanaguges, but also make analyses that cross the boundaries of programming languages (consider javascript and java, or java and C via JNI, etc.)

#### Pitfalls

* Inaccurate query results are possible even though the M3 models are 100% accurate. 
   * M3 models are *initial* in the sense that they contain what can be statically derived from the source code in terms of declarations and relations. 
   * Analyses based directly on this information can still be *inaccurate*; simply because they represent harder questions.
   * For example, a Java call graph produced by the relation composition `myModel.methodInvocation o myModel.methodOverrides` shows _all_ possible concrete methods that could be invoked via virtual method invocation (over-approximation), but it skips all the invokes constructed via reflection (under-aproximation). In that sense this query is both incomplete and unsound, however useful it may be.
* Java still has the most complete M3 model in the Rascal ecosystem, so when you move to other languages prepare to extract more information from AST models instead.

