---
title: Keyboard Shortcuts
---

#### Description

When handling console input, RascalShell supports a subset of the shortcuts provided by
[GNU readline](https://en.wikipedia.org/wiki/GNU_Readline)

Some convenient shortcuts are:

| Key combo | Description |
| --------  | ----------  | 
| `Ctrl+a`  | Move cursor to begin of line. |
| `Ctrl+d`  | EOF marker, closes the current RascalShell (equivalent to the command (`quit`). |
| `Ctrl+e`  | Move cursor to end of line. |
| `Ctrl+k`  | Kill remainder of line after cursor. |
| `Ctrl+l`  | Clear screen. |
| `Ctrl+c   | Abort current (running) command. |

#### Benefits

* ((RascalShell)) is built on top of [JLine 3](https://github.com/jline/jline3)
* The command shell allows for multiline editing.