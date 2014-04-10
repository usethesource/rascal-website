---
layout: default
title: Configure Eclipse for rascal
published: true
---

To configure Eclipse properly for running Rascal, you may have to edit the eclipse.ini file:

 - find it first
   - on MacOSX it may be in
	`/Applications/Eclipse.app/Contents/MacOS/eclipse.ini`
   - on Windows it may be in `C:\Program Files\eclipse\eclipse.ini`
   - on Linux its where you extracted the eclipse tarball.
 - then find the line that starts with `-vm` and add on the next _separate_ line
   the path to the java run-time binary, e.g. `/usr/bin/java` or `C:\Program
   Files\Java SDK 1.7\bin\javaw.exe`.
    - If you can't find the line that starts with `-vm` you should add it before
	  the line starting with `-vmargs`
 - to have enough memory to run Rascal please
    - set the stacksize using the command line arguments of eclipse `-vmargs -Xss8m`,
	- or you might set this in the `eclipse.ini` file.
       - find the line that starts with `-vmargs` and add on a separate line `-Xss8m`