{
   layout: default
}
## Troubleshooting Installation Problems

### Diagnostic Tools

-  The *Error Log* will typically contain useful information if something goes wrong. You can see it by going
   to the *Window* menu, then *Show View → Error Log* (or *Show View → Other... → Error Log*). If you can't
   identify the log entry corresponding to your problem, clear the log and provoke the problem again.

   If the log contains an exception trace, you might get a hint about what's wrong by looking at the last
   exception in the chain of exceptions (if there's more than one in the log entry).
   
   You can also find the log as a text file in your Eclipse workspace directory, in ```.metadata/.log```.
   
-  The *Installation Details* dialog can also give you some useful information. You find it by opening
   the *About Eclipse* box, then pressing *Installation Details*. In the *Installed Software* tab, you can
   check that Rascal is actually installed, and which version you have, and in the *Configuration* tab, you
   can check that your Java installation is OK.

### Common Installation Problems

 - *Eclipse starts but I can't find the Rascal Perspective or any Rascal entries in the File → New menu*

   This is typically because you're running on Java 6 instead of Java 7. Rascal requires the Java 7 SDK to
   run. You can check which Java you're using by checking the ```java.version``` and ```java.vm.name``` entries
   in *Installation Details → Configuration*.

   If you're running Java 6 even when Java 7 is installed, the simplest approach is just to remove all old
   installations of Java 6. You can also supply the path to the Java VM using the ```-vm``` option in your
   [eclipse.ini file](/start/editini.html).
   
 - *Eclipse starts, but I get an error message say that I need the Java JDK*
  
   Install Java 7 JDK. If you have it installed but still get the error message, the simplest approach is
   just to remove all your installations of Java JRE (typically called just *Java 7uXX* on Windows). Your
   JDK installation will supply all functionality of the JRE. You can also supply the path to the correct
   Java VM using the ```-vm``` option in your [eclipse.ini file](/start/editini.html).

 - *Something goes wrong, and the exception in the Error Log says: "org.rascalmpl.interpreter.asserts.ImplementationError:
    Unexpected error in Rascal interpreter: Could not find an installed System Java Compiler, please provide
    a Java Runtime that includes the Java Development Tools"*

   This is the same as the previous problem.  
  
 - *Rascal used to work, but I updated it and now it doesn't*
  
   Some requirements have changed in the stable release; you now need Java 7, and Eclipse Juno or Kepler.
   Eclipse Indigo no longer works.

 - *I use git, and it keeps hanging or using 100% CPU*
  
   Install the most recent version of EGit from http://download.eclipse.org/egit/updates; the one bundled
   with Eclipse is buggy.

 - *Installation complains about a missing "jetty" package*
 
   Most likely you're using an Indigo or earlier version of Eclipse. Use
   [3.8.2](http://archive.eclipse.org/eclipse/downloads/drops/R-3.8.2-201301310800/), 
   [Juno](http://eclipse.org/downloads/packages/release/juno/sr2) or 
   [Kepler](http://eclipse.org/downloads/) instead.
