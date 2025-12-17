---
title: StackOverflow while generating a parser
---

#### Synopsis

Simple parser generation produces a StackOverflow exception.

#### Description

To be able to generate parsers Rascal uses stack space from the Java Virtual Machine (JVM).

If you get exceptions better configure your JVM with this `-Xss32m`

* On the commandline, you can use `java -Xss32m ...`
* In VS Code the Rascal language server already configures this automatically.
* The same for the Rascal Maven plugins; they are configured with big stack sizes.