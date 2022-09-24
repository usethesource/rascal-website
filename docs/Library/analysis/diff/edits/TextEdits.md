---
title: "module analysis::diff::edits::TextEdits"
---

#### Usage

`import analysis::diff::edits::TextEdits;`

## data DocumentEdit {#analysis-diff-edits-TextEdits-DocumentEdit}

```rascal
data DocumentEdit  
     = removed(loc file)
     | created(loc file)
     | renamed(loc from, loc to)
     | changed(loc file, list[TextEdit] edits)
     ;
```

## data TextEdit {#analysis-diff-edits-TextEdits-TextEdit}

```rascal
data TextEdit  
     = replace(loc range, str replacement)
     ;
```

## function delete {#analysis-diff-edits-TextEdits-delete}

* ``TextEdit delete(loc range)``

