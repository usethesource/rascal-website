---
title: Running Rascal on the Commandline
---

After [downloading]((DownloadAndInstallation)) the jar you can immediately run the ((GettingStarted-RascalShell)) like so:

```bash
test-project $ java -jar ~/Downloads/rascal-0.26.5.jar 
Version: 0.26.5
INFO: detected |lib://rascal| at |jar+file:///Users/jurgenv/Downloads/rascal-0.26.5.jar!/|
rascal>import IO;
INFO: resolved |lib://rascal| at |jar+file:///Users/jurgenv/Downloads/rascal-0.26.5.jar!/|
Loading module |lib://rascal/IO.rsc|
Loading module |lib://rascal/Exception.rsc|
ok
rascal>println("Hello commandline!")
Hello commandline!
ok
rascal>
```

Some people find it practical to wrap the `jar` command using a shell script:

```bash
#! /bin/bash
exec java -jar /Users/jurgenv/Downloads/rascal-0.26.5.jar $*
```

Saving this to `rascal.sh` you can use it as follows:

```bash
test-project $ ./rascal.sh 
Version: 0.26.5
INFO: detected |lib://rascal| at |jar+file:///Users/jurgenv/Downloads/rascal-0.26.5.jar!/|
rascal>
```

Similarly you could create a PowerShell or Batch script on Windows to wrap the call to the JVM.

It makes sense to [create a Rascal project]((CreateNewProject)) and start the REPL from there.
The REPL will automatically pick up the `pom.xml` and `RASCAL.MF` files if it can find them in (a parent of) the current working directory, and configure itself accordingly.
