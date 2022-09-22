---
title: "module util::PriorityQueue"
---

#### Usage

`import util::PriorityQueue;`



#### Synopsis

A `PriorityQueue` datatype and associated functions.

#### Usage

`import util::PriorityQueue;`

#### Description

Priority queues maintain (priority, value) pairs in sorted order. They are implemented using a
http://en.wikipedia.org/wiki/Binomial_heap[Binomial Heap]. Priority queue are, for instance, used to implement shortest path algorithms.

Provides the following functions:
* [Library:constructor:util::Priority queue::binomial tree](../../Library/util/PriorityQueue.md#util::PriorityQueue-binomialTree)
* [Library:constructor:util::Priority queue::priority queue](../../Library/util/PriorityQueue.md#util::PriorityQueue-priorityQueue)
* [Library:data:util::Priority queue::Binomial tree](../../Library/util/PriorityQueue.md#util::PriorityQueue-BinomialTree)
* [Library:data:util::Priority queue::Priority queue](../../Library/util/PriorityQueue.md#util::PriorityQueue-PriorityQueue)
* [Library:function:util::Priority queue::add](../../Library/util/PriorityQueue.md#util::PriorityQueue-add)
* [Library:function:util::Priority queue::add sub tree](../../Library/util/PriorityQueue.md#util::PriorityQueue-addSubTree)
* [Library:function:util::Priority queue::extract minimum](../../Library/util/PriorityQueue.md#util::PriorityQueue-extractMinimum)
* [Library:function:util::Priority queue::find minimum](../../Library/util/PriorityQueue.md#util::PriorityQueue-findMinimum)
* [Library:function:util::Priority queue::insert element](../../Library/util/PriorityQueue.md#util::PriorityQueue-insertElement)
* [Library:function:util::Priority queue::is empty](../../Library/util/PriorityQueue.md#util::PriorityQueue-isEmpty)
* [Library:function:util::Priority queue::merge queue](../../Library/util/PriorityQueue.md#util::PriorityQueue-mergeQueue)
* [Library:function:util::Priority queue::merge tree](../../Library/util/PriorityQueue.md#util::PriorityQueue-mergeTree)
* [Library:function:util::Priority queue::mk priority queue](../../Library/util/PriorityQueue.md#util::PriorityQueue-mkPriorityQueue)
* [Library:function:util::Priority queue::to string](../../Library/util/PriorityQueue.md#util::PriorityQueue-toString)

#### Pitfalls

Currently, both priority and associated value ("payload") have to be integers. This will be generalized.


## data BinomialTree {#util-PriorityQueue-BinomialTree}

```rascal
data BinomialTree  
     = binomialTree(int priority,            // priority of this tree
                                         int val,                     // payload
                                         int degree,                  // degree of tree
                                         list[BinomialTree] children  // subtrees
                                        )
     ;
```

## function addSubTree {#util-PriorityQueue-addSubTree}

* ``BinomialTree addSubTree(BinomialTree p, BinomialTree q)``

## function mergeTree {#util-PriorityQueue-mergeTree}

* ``BinomialTree mergeTree(BinomialTree p, BinomialTree q)``

## function toString {#util-PriorityQueue-toString}

* ``str toString(BinomialTree T)``

## data PriorityQueue {#util-PriorityQueue-PriorityQueue}

```rascal
data PriorityQueue  
     = priorityQueue(list[BinomialTree] trees,  // trees in the heap
                                   int minIndex               // index of minimal tree
                                  )
     ;
```

## function mkPriorityQueue {#util-PriorityQueue-mkPriorityQueue}

* ``PriorityQueue mkPriorityQueue()``
* ``PriorityQueue mkPriorityQueue(int priority, int val)``

## function isEmpty {#util-PriorityQueue-isEmpty}

* ``bool isEmpty(PriorityQueue Q)``

## function insertElement {#util-PriorityQueue-insertElement}

* ``PriorityQueue insertElement(PriorityQueue Q, int priority, int val)``

## function findMinimum {#util-PriorityQueue-findMinimum}

* ``int findMinimum(PriorityQueue Q)``

## function extractMinimum {#util-PriorityQueue-extractMinimum}

* ``tuple[int, int, PriorityQueue] extractMinimum(PriorityQueue Q)``

## function toString {#util-PriorityQueue-toString}

* ``str toString(PriorityQueue Q)``

## function add {#util-PriorityQueue-add}

* ``list[BinomialTree] add(list[BinomialTree] heap, BinomialTree t)``

## function mergeQueue {#util-PriorityQueue-mergeQueue}

* ``PriorityQueue mergeQueue(PriorityQueue p, PriorityQueue q)``

