---
title: "module util::tasks::Manager"
---

#### Usage

`import util::tasks::Manager;`

## alias Task[&T,&N] {#util-tasks-Manager-Task[&T,&N]}

* `bool (Transaction tr, type[&T] key, &N name)`

## function registerProducer {#util-tasks-Manager-registerProducer}

* ``void registerProducer(Task[&T,&N] producer, set[value] keys)``

## function unregisterProducer {#util-tasks-Manager-unregisterProducer}

* ``void unregisterProducer(Task[&T,&N] producer)``

## function lockProducerRegistry {#util-tasks-Manager-lockProducerRegistry}

* ``void lockProducerRegistry()``

Lock the producer registry ‚Äì use this before adding/removing a
	set of related producers. Remember to enclose the critical section in
	try { ...¬†} finally { unlockProducerRegistry(); } 

## function unlockProducerRegistry {#util-tasks-Manager-unlockProducerRegistry}

* ``void unlockProducerRegistry()``

## function registryTransaction {#util-tasks-Manager-registryTransaction}

* ``void registryTransaction(void() f)``

## alias Transaction {#util-tasks-Manager-Transaction}

* `value`

## alias Fact {#util-tasks-Manager-Fact}

* `value`

## function startTransaction {#util-tasks-Manager-startTransaction}

* ``Transaction startTransaction()``
* ``Transaction startTransaction(Transaction parent)``

## function endTransaction {#util-tasks-Manager-endTransaction}

* ``void endTransaction(Transaction tr)``

## function abandonTransaction {#util-tasks-Manager-abandonTransaction}

* ``void abandonTransaction(Transaction tr)``

## function getFact {#util-tasks-Manager-getFact}

* ``&T getFact(Transaction tr, type[&T] key, value name)``

## function queryFact {#util-tasks-Manager-queryFact}

* ``&T queryFact(Transaction tr, type[&T] key, value name)``

## function hasFact {#util-tasks-Manager-hasFact}

* ``bool hasFact(Transaction tr, type[&T] key, value name)``

## function removeFact {#util-tasks-Manager-removeFact}

* ``void removeFact(Transaction tr, type[&T] key, value name)``

## function setFact {#util-tasks-Manager-setFact}

* ``Fact setFact(Transaction tr, type[&T] key, value name, &T val)``

## function getDependencyGraph {#util-tasks-Manager-getDependencyGraph}

* ``tuple[rel[str,str,str,int],rel[str,str,str]] getDependencyGraph(Transaction tr)``

