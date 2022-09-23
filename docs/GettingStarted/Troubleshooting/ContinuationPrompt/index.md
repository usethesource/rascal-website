---
title: Continuation prompt?
details:
   - '>>>>>>'
   - continuation
   - prompt
---

##### Synopsis

What is the continuation prompt `>>>>>>`?

#### Description

When Rascal can not recognize a complete [command](../../../RascalShell/Commands) yet, it will 
prompt with this `>>>>>>`:


```rascal-shell
rascal>x = 1
```

The reason is that it expects a `;` after every [Assignment](../../../Rascal/Statements/Assignment).
To cancel the entire command, simply provide an empty line:


```rascal-shell
>>>>>>>
```

But we could also finish the command:


```rascal-shell
rascal>x = 1
>>>>>>>;
int: 1
```

#### Benefits

For typing more complex structured commands it is easy to split up a statement over several lines:


```rascal-shell
rascal>import IO;
ok
rascal>for (int i <- [0..11]) {
>>>>>>>    println("Counting <i>");
>>>>>>>}
}
Counting 0
Counting 1
Counting 2
Counting 3
Counting 4
Counting 5
Counting 6
Counting 7
Counting 8
Counting 9
Counting 10
list[void]: []
```

As you can see the entire [For](../../../Rascal/Statements/For) loop only starts when the prompt recognizes the entire command.

#### Pitfalls

If you type an empty line in the middle of a complex command, it is cancelled:


```rascal-shell
rascal>import IO;
ok
rascal>for (int i <- [0..11]) {
>>>>>>>
```




