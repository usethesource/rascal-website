---
title: "module demo::lang::MissGrant::AST"
---

#### Usage

`import demo::lang::MissGrant::AST;`


## data Controller {#demo-lang-MissGrant-AST-Controller}

```rascal
data Controller  
     = controller(list[Event] events, 
					  list[str] resets, 
					  list[Command] commands,
					  list[State] states)
     ;
```

## data State {#demo-lang-MissGrant-AST-State}

```rascal
data State  
     = state(str name, list[str] actions, list[Transition] transitions)
     ;
```

## data Command {#demo-lang-MissGrant-AST-Command}

```rascal
data Command  
     = command(str name, str token)
     ;
```

## data Event {#demo-lang-MissGrant-AST-Event}

```rascal
data Event  
     = event(str name, str token)
     ;
```

## data Transition {#demo-lang-MissGrant-AST-Transition}

```rascal
data Transition  
     = transition(str event, str state)
     ;
```

## data ControllerState {#demo-lang-MissGrant-AST-ControllerState}

```rascal
data ControllerState  
     = controllerState(
		Controller ctl,
		str curStateName, 
		StateEnv stateEnv,
		map[str,str] eventNameToToken,
		map[str,str]  commandNameToToken,
		map[str,str]  eventTokenToName,
		map[str,str]  commandTokenToName
	)
     ;
```

## alias StateEnv {#demo-lang-MissGrant-AST-StateEnv}

* `map[str, State]`

## function initial {#demo-lang-MissGrant-AST-initial}

* ``State initial(Controller ctl)``

## function final {#demo-lang-MissGrant-AST-final}

* ``State final(Controller ctl)``

## function consumes {#demo-lang-MissGrant-AST-consumes}

* ``list[str] consumes(State s)``

## function stateGraph {#demo-lang-MissGrant-AST-stateGraph}

* ``Graph[str] stateGraph(Controller ctl)``

## function stateEnv {#demo-lang-MissGrant-AST-stateEnv}

* ``StateEnv stateEnv(Controller ctl)``

## function eventEnv {#demo-lang-MissGrant-AST-eventEnv}

* ``map[str,str] eventEnv(Controller ctl)``

## function commandEnv {#demo-lang-MissGrant-AST-commandEnv}

* ``map[str,str] commandEnv(Controller ctl)``

## function usedEvents {#demo-lang-MissGrant-AST-usedEvents}

* ``set[str] usedEvents(Controller ctl)``

## function usedActions {#demo-lang-MissGrant-AST-usedActions}

* ``set[str] usedActions(Controller ctl)``

## function definedCommands {#demo-lang-MissGrant-AST-definedCommands}

* ``set[str] definedCommands(Controller ctl)``

## function definedEvents {#demo-lang-MissGrant-AST-definedEvents}

* ``set[str] definedEvents(Controller ctl)``

## function definedStates {#demo-lang-MissGrant-AST-definedStates}

* ``set[str] definedStates(Controller ctl)``

## function initialControllerState {#demo-lang-MissGrant-AST-initialControllerState}

* ``ControllerState initialControllerState(Controller ctl)``

