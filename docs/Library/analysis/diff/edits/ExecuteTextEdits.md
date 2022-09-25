---
title: "module analysis::diff::edits::ExecuteTextEdits"
---

#### Usage

`import analysis::diff::edits::ExecuteTextEdits;`


## function executeDocumentEdits {#analysis-diff-edits-ExecuteTextEdits-executeDocumentEdits}

* ``void executeDocumentEdits(list[DocumentEdit] edits)``

## function executeDocumentEdit {#analysis-diff-edits-ExecuteTextEdits-executeDocumentEdit}

* ``void executeDocumentEdit(removed(loc f))``
* ``void executeDocumentEdit(created(loc f))``
* ``void executeDocumentEdit(renamed(loc from, loc to))``
* ``void executeDocumentEdit(changed(loc file, list[TextEdit] edits))``

