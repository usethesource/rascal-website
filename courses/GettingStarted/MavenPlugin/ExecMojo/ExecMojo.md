---
title: Exec Mojo
---

#### Synopsis

Start arbitrary Java code from the current project or one of its dependencies during a Maven run.

#### Description

The default configuration required for ((CompileMojo)) is the starting point. To
this you may add:

```pom.xml
<!-- add the name of a main module to start to the configuration -->
<configuration>
   <mainModule>MyExampleMainModule</mainModule>
</configuration>

<executions>
    <execution>
        <id>it-compile</id>
        <!-- any phase will do, but people often use generate-test-sources -->
        <phase>generate-test-sources</phase>
        <goals>
            <goal>exec</goal> <!-- the goal must be "exec" to select the current Mojo -->
        </goals>
    </execution>
</executions>
```

The `MyExampleMainModule` must have a `main` function. If this main function has a `PathConfig pcfg=pathConfig()` keyword parameter,
then the maven plugin will provide the configuration of the current project there.
