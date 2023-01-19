---
title: Running Rascal in Eclipse
---

After the [installation procedure]((DownloadAndInstallation)) running Rascal
in Eclipse is a matter of starting the ((RascalShell)):
1. with the command button
2. using the the pull-down menu

## Starting ((RascalShell)) with the command button.

* If no project was (ever) selected the button starts a ((RascalShell)) with only the standard library on its path
* Otherwise, the last selected project in any navigator, or opened file in the edit space, selects the project that is used to configure the search paths. 
* Use the [create new project instructions]((CreateNewProject)), or the `New project Wizard` in Eclipse to obtain a Rascal project setup.

![eclipse-commandbutton-screenshot]((eclipse-commandbutton-screenshot.png))

:::info
The Rascal logo appears twice in the button bar:
* the left one is to start the ((RascalShell))
* the right one is to select the Rascal Eclipse "perspective" with additional features like the "Rascal Navigator"
:::

## Starting ((RascalShell)) from the menu

From the menu the behavior is exactly the same as from the button bar:

![eclipse-menu-screenshot]((eclipse-menu-screenshot.png))

## Programmatic access to Eclipse features

* Use ((util::IDEServices)) to communicate with Eclipse, to register problems, to open files and browsers, etc.
* Use `util::IDE` for programming Eclipse plugins for languages designed using Rascal.
* The `project://<projectName>` location scheme provides access to the root of each registered folder in the VScode workspace.
* Use ((util::Reflective::getProjectPathConfig)) for Java and Rascal project configuration extracted from Maven and Eclipse configuration (classpaths, sourcepaths, library dependencies).


:::info
The `util::IDE` module is waiting to be documented
:::