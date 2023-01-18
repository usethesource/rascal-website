---
title: Running Rascal
sidebar_position: 2
---

#### Running Rascal: starting a terminal with a read-eval-print-loop

1. On the Unix or Windows commandline, start a ((RascalShell)) by: `java -jar rascal-<version>.jar`
2. In VScode, in the command palette type `Rascal` and select `Create Rascal Terminal`
3. In Eclipse, from the button bar select the button with the Rascal logo.
4. With Maven, create a pom.xml which includes the above plugin and type: `mvn rascal:console`

You will be prompted for input right after the version is printed and information about the current search paths. 

Here we show how to quit the terminal:
```rascal
:quit
```

Similarly you could type `CTRL+D` which indicates end-of-file to terminate the process. More information 
about the features of the shell can be found [here]((RascalShell)). At the prompt you can type ((Rascal:Expressions)), ((Rascal:Statements)) and ((Rascal:Declarations)).

```rascal-shell
1 + 1
myList = [ i | i <- [1..11], i % 2 == 0];
import Prelude;
println("Hello <myList> is <size(myList)> long");
```

Next you could [create a new Rascal project]((CreateNewProject)) to start writing Rascal code.
