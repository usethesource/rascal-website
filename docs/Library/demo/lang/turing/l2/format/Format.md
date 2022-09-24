---
title: "module demo::lang::turing::l2::format::Format"
---

#### Usage

`import demo::lang::turing::l2::format::Format;`

## function turing2box {#demo-lang-turing-l2-format-Format-turing2box}

* ``Box turing2box(Program p)``

## function stat2box {#demo-lang-turing-l2-format-Format-stat2box}

* ``Box stat2box(writeSet())``
* ``Box stat2box(writeUnset())``
* ``Box stat2box(moveForward())``
* ``Box stat2box(moveBackward())``
* ``Box stat2box(jumpAlwaysLabel(n))``
* ``Box stat2box(jumpSetLabel(n))``
* ``Box stat2box(jumpUnsetLabel(n))``
* ``Box stat2box(loop(n, ss))``

## function stats2box {#demo-lang-turing-l2-format-Format-stats2box}

* ``Box stats2box(list[Statement] ss)``

