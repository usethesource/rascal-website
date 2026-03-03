---
title: Register your language
sidebar_position: 1
---

#### Synopsis

Start a new VScode extension for your language

#### Description

We assume you have already written a ((ParsingService)) function. Now think of:
* a name for your language;
* a file extension for its files.

```rascal-module
With the following shell commands you register your language with the IDE:
```rascal-shell
import util::LanguageServer;

