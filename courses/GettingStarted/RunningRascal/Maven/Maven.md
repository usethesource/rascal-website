---
title: Running Rascal with Maven
---

After the minimal [installation procedure]((DownloadAndInstallation)) and [creating a Rascal Maven project]((CreateNewProject)), running Rascal
with maven is a matter of starting the ((RascalShell)) like so:

```bash
test-project $ mvn rascal:console
[INFO] Scanning for projects...
[INFO] 
[INFO] -------------------------< org.rascalmpl:demo >-------------------------
[INFO] Building demo 1.0-SNAPSHOT
[INFO] --------------------------------[ jar ]---------------------------------
[INFO] 
[INFO] --- rascal-maven-plugin:0.8.2:console (default-cli) @ demo ---
Version: 0.24.2
INFO: detected |lib://rascal| at |jar+file:///Users/jurgenv/.m2/repository/org/rascalmpl/rascal/0.24.2/rascal-0.24.2.jar!/|
rascal>import IO;
INFO: resolved |lib://rascal| at |jar+file:///Users/jurgenv/.m2/repository/org/rascalmpl/rascal/0.24.2/rascal-0.24.2.jar!/|
Loading module |lib://rascal/IO.rsc|
Loading module |lib://rascal/Exception.rsc|
ok
rascal>println("Hello REPL!")
Hello REPL!
ok
rascal>
```

Here we have assumed a Un*x-like shell environment, but for Windows Powershell or Command shell usages the interaction is similar.
