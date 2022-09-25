---
title: "module util::IDEServices"
---

#### Usage

`import util::IDEServices;`


## function browse {#util-IDEServices-browse}

* ``void browse(loc uri)``


#### Synopsis

Open a browser for a given location.

## function edit {#util-IDEServices-edit}

* ``void edit(loc uri)``


#### Synopsis

Open an editor for file at a given location.

## function applyDocumentsEdits {#util-IDEServices-applyDocumentsEdits}

* ``void applyDocumentsEdits(list[DocumentEdit] edits)``


#### Synopsis

Let the IDE apply a list of document edits.

#### Description

Asks the IDE to apply document edits as defined in the standard library module
analysis::diff::edits::TextEdits, according to the semantics defined in
analysis::diff::edits::ExecuteTextEdits. However, the IDE can take care of these
changes in order to provide important UI experience features such as "preview"
and "undo". 

Typically a call to this IDE service method is included in the implementation
of refactoring and quick-fix features of the language service protocol.

## function showInteractiveContent {#util-IDEServices-showInteractiveContent}

* ``void showInteractiveContent(Content content)``


#### Synopsis

Asks the IDE to show a "browser window" with the given interactive Content.

## function showMessage {#util-IDEServices-showMessage}

* ``void showMessage(Message message)``

## function logMessage {#util-IDEServices-logMessage}

* ``void logMessage(Message message)``

## function registerDiagnostics {#util-IDEServices-registerDiagnostics}

* ``void registerDiagnostics(list[Message] messages)``

## function unregisterDiagnostics {#util-IDEServices-unregisterDiagnostics}

* ``void unregisterDiagnostics(list[loc] resources)``

