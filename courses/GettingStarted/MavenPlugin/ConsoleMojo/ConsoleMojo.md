---
title: Console Mojo
---

#### Synopsis

The console mojo starts up a Rascal terminal. 


#### Description

It will be configured to read the source code of the current
project, as configured in the `META-INF/RASCAL.MF` file, and it load modules from library projects in jar files, as configured in the `pom.xml` file.

The console mojo does not require further configuration in the pom file, other than the project's dependencies (see ((CompileMojo))). The `RASCAL.MF` file needs a `Sources` field. See also ((CreateNewProject))

```MANIFEST.MF
Project-Name: test-project
Source: src

```

#### Examples

This is an example execution runnig `mvn rascal:console` in the folder `test-project` which holds a `pom.xml` and a `META-INF/RASCAL.MF` file:

```bash
13:17:51 test-project$ mvn rascal:console
[INFO] Scanning for projects...
[INFO] 
[INFO] -------------------------< org.rascalmpl:demo >-------------------------
[INFO] Building demo 1.0-SNAPSHOT
[INFO]   from pom.xml
[INFO] --------------------------------[ jar ]---------------------------------
[INFO] 
[INFO] --- rascal:0.31.0:console (default-cli) @ demo ---
[INFO] The Rascal runtime was resolved at /Users/jurgenv/.m2/repository/org/rascalmpl/rascal/0.42.1/rascal-0.42.1.jar
[INFO] pom.xml: Rascal version is 0.42.1
[INFO] pom.xml: Project root is |file:///Users/jurgenv/git/test-project/|
[INFO] pom.xml: Bin folder   is |file:///Users/jurgenv/git/test-project/target/classes|
[INFO] pom.xml: Source module path is:
  - |std:///|
  - |file:///Users/jurgenv/git/test-project/src|
[INFO] pom.xml: Library module (and classes) path is:
  - |file:///Users/jurgenv/.m2/repository/org/rascalmpl/rascal/0.42.1/rascal-0.42.1.jar|
2026-03-26T12:17:55.247168Z main ERROR Log4j API could not find a logging provider.
rascal>import IO;
ok
rascal>println("Hello World!")
Hello World!
ok
rascal>
```

#### Benefits

* when you edit a file in between REPL commands, the REPL will automatically reload Rascal modules and provide warnings and errors if needed.


#### Pitfalls

* when you write Java code and link it to Rascal using the `java` modified (see ((Declarations-Function))), the terminal console is not able to pick up new versions of the Java class files without a restart. In this case:
   1. stop the terminal using `:quit`
   2. type `mvn compile`
   3. restart the terminal using `mvn rascal:console`
