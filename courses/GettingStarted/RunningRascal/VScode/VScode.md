---
title: Running Rascal in VScode
---

After the [installation procedure]((DownloadAndInstallation)) running Rascal
in VScode is a matter of starting the ((RascalShell)):
1. Using an editor action
2. Using the VScode command palette

## Starting ((RascalShell)) from an editor

This assumes there is a functional [Rascal project]((CreateNewProject)) in your workspace.

![vscode-editor-screenshot]((vscode-editor-screenshot.png))

* Every syntactically correct Rascal module has a `Import in new Rascal terminal` command link just about the `module` keyword.
* Every syntactically correct Rascal module with a `main` function in it has a `Run in new Rascal terminal` command link just about the signature of the main function.
* Clicking these links will start up a JVM process to run the Rascal terminal, and connect it via several sockets to the IDE.

## Starting ((RascalShell)) from the command palette

![vscode-palette-screenshot]((vscode-palette-screenshot.png))

* A ((RascalShell)) started from the palette has no source or library or classpath configuration and so it only knows about the standard library.
* See above for well-configured instances of ((RascalShell)).

## Programmatic access to VScode features

* Use ((util::IDEServices)) to communicate with VScode, to register problems, to open files and browsers, etc.
* Use `util::LanguageServer` to register languages designed and implemented in Rascal with the Language Server Protocol in VScode immediately.
* The `project://<projectName>` location scheme provides access to the root of each registered folder in the VScode workspace.
* Use ((util::Reflective::getProjectPathConfig)) for Java and Rascal project configuration extracted from Maven configuration (classpaths, sourcepaths, library dependencies).

:::info
The `util::LanguageServer` module is waiting to be documented.
:::
