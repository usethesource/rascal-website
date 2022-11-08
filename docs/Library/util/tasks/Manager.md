---
title: "module util::tasks::Manager"
---

#### Usage

`import util::tasks::Manager;`


## alias Task[&T,&N] {#util-tasks-Manager-Task[&T,&N]}

```rascal
bool (Transaction tr, type[&T] key, &N name)

```

## function registerProducer {#util-tasks-Manager-registerProducer}

```rascal
void registerProducer(Task[&T,&N] producer, set[value] keys)

```

## function unregisterProducer {#util-tasks-Manager-unregisterProducer}

```rascal
void unregisterProducer(Task[&T,&N] producer)

```

## function lockProducerRegistry {#util-tasks-Manager-lockProducerRegistry}

```rascal
void lockProducerRegistry()

```

Lock the producer registry ‚Äì use this before adding/removing a
	set of related producers. Remember to enclose the critical section in
	try { ...¬†} finally { unlockProducerRegistry(); } 

## function unlockProducerRegistry {#util-tasks-Manager-unlockProducerRegistry}

```rascal
void unlockProducerRegistry()

```

## function registryTransaction {#util-tasks-Manager-registryTransaction}

```rascal
void registryTransaction(void() f)

```

## alias Transaction {#util-tasks-Manager-Transaction}

```rascal
value

```

## alias Fact {#util-tasks-Manager-Fact}

```rascal
value

```

## function startTransaction {#util-tasks-Manager-startTransaction}

```rascal
Transaction startTransaction()

Transaction startTransaction(Transaction parent)

```

## function endTransaction {#util-tasks-Manager-endTransaction}

```rascal
void endTransaction(Transaction tr)

```

## function abandonTransaction {#util-tasks-Manager-abandonTransaction}

```rascal
void abandonTransaction(Transaction tr)

```

## function getFact {#util-tasks-Manager-getFact}

```rascal
&T getFact(Transaction tr, type[&T] key, value name)

```

## function queryFact {#util-tasks-Manager-queryFact}

```rascal
&T queryFact(Transaction tr, type[&T] key, value name)

```

## function hasFact {#util-tasks-Manager-hasFact}

```rascal
bool hasFact(Transaction tr, type[&T] key, value name)

```

## function removeFact {#util-tasks-Manager-removeFact}

```rascal
void removeFact(Transaction tr, type[&T] key, value name)

```

## function setFact {#util-tasks-Manager-setFact}

```rascal
Fact setFact(Transaction tr, type[&T] key, value name, &T val)

```

## function getDependencyGraph {#util-tasks-Manager-getDependencyGraph}

```rascal
tuple[rel[str,str,str,int],rel[str,str,str]] getDependencyGraph(Transaction tr)

```

