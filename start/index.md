---
layout: default
title: Getting started
published: true
---


# Disclaimer

We currently only release alpha versions of Rascal, which are subject to frequent changes

# Eclipse plugin

The Eclipse update site for Rascal is: _[http://www.rascal-mpl.org/updates](http://www.rascal-mpl.org/updates)_

You need _Eclipse for RCP and RAP Developers (Indigo)_ version of Eclipse
available at [www.eclipse.org/downloads/](http://www.eclipse.org/downloads/) to run Rascal. It has been reported recently that the latest release (0.5.2) also works with
Juno and normal (non RCP/RAP) versions of Eclipse. Not thoroughly tested though!

Please note that:

 - Rascal now needs a JDK because it uses the Java compiler, so please download a JDK, not just a JRE.
 - You may have to [edit the Eclipse init file](/start/eclipse/editini.html) so
   that Eclipse can find your Java installation and Eclipse can allocate enough
   resources.
 - For generating parsers, Rascal uses quite a bit of memory. Please use `-vmargs -Xmx1G -Xss32m`

# Commandline REPL

# First time

After you have downloaded Rascal, you might be interested in the first steps to executing some Rascal code.

 - Open the Rascal Perspective (use the "Open Perspective" button in the top-right of your screen)
 - Create a new Rascal project (use the "New..." button in the top-left of your screen, then select "Rascal Project" from the menu)
 - This should automatically open a new console with the new project on its search path
 - Type `1 + 1` after the `rascal>` prompt to see `2`

### Further reading

Check out our [Help page](/help/) for links to documentation and our community.
