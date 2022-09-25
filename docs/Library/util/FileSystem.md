---
title: "module util::FileSystem"
---

#### Usage

`import util::FileSystem;`


## data FileSystem {#util-FileSystem-FileSystem}

```rascal
data FileSystem  
     = directory(loc l, set[FileSystem] children)
     | file(loc l)
     ;
```

## function crawl {#util-FileSystem-crawl}

* ``FileSystem crawl(loc l)``

## function files {#util-FileSystem-files}

* ``set[loc] files(loc l)``

## function find {#util-FileSystem-find}

* ``set[loc] find(loc f, bool (loc) filt)``
* ``set[loc] find(loc f, str ext)``

## function visibleFiles {#util-FileSystem-visibleFiles}

* ``set[loc] visibleFiles(loc l)``


#### Synopsis

lists all files recursively ignored files and directories starting with a dot.

