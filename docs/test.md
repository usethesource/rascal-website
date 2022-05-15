---
sidebar_position: 999
title: Syntax Highlighting Demo
---
import Rascal from '@site/src/components/Rascal';

# Rascal component

<Rascal>
module demo::basic::Hello

\import IO;

void hello() {
    println("Hello world, this is my first Rascal program");
}
</Rascal>

# Backtick method

```rascal
module demo::basic::Hello

import IO;

void hello() {
    println("Hello world, this is my first Rascal program");
}
```