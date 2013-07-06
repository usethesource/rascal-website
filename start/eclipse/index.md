---
layout: "default"
title: "Installing Rascal Eclipse plugin"
---
### Disclaimer

We currently only release alpha versions of Rascal, which are subject to frequent changes.

### Eclipse version

You need _Eclipse for RCP and RAP Developers (Indigo)_ version of Eclipse
available at [www.eclipse.org/downloads/](http://www.eclipse.org/downloads/) to run Rascal.

It has been reported recently that the latest release (0.5.2) also works with
Juno and normal (non RCP/RAP) versions of Eclipse. Not thoroughly tested though!

Please note that:

 - Rascal needs a JDK because it uses the Java compiler, so please download a JDK, not just a JRE.
 - You may have to [edit the Eclipse init file](/start/eclipse/editini.html) so
   that Eclipse can find your Java installation and Eclipse can allocate enough
   resources.
 - For generating parsers, Rascal uses quite a bit of memory. Please use `-vmargs -Xmx1G -Xss32m`

### Required Eclipse plugins

Rascal is bundled with a number of required plugins, and will also contact the Eclipse update site for more.

### Installing Rascal

The Eclipse update site for Rascal is: http://www.rascal-mpl.org/updates:

1. Start Eclipse.
2. Select Help -> Install New Software.
3. Make sure that the tick for "Contact all update sites during install to find required software" is enabled.
4. Type: http://www.rascal-mpl.org/updates in the "Work with" edit box.
5. Select the feature Rascal.
6. Select Next (several times) and accept the software license. The process may take a few minutes!
7. Once these features have been installed, restart Eclipse.
