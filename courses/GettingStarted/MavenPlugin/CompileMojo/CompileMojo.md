---
title: Compile Mojo
keywords:
    - compile
    - maven
    - goal
    - "rascal:compile"
---

All Rascal projects are assumed to be configured via a Maven `pom.xml` file. The primary goal
is to make the Rascal compiler available to the project via `<plugin>` tag. Running the compiler will make the binary output available for us by other projects later. Also static errors are detected and reported.

The `rascal:compile` mojo is executed by default with the `compile` goal of Maven. For every Rascal module in the `srcs` list of configured source modules, it will generate a binary `.tpl` TModule file. It typechecks all the modules which have an older timestamp on their corresponding binary output `.tpl` file, and the downstream damage triggered by these recompile. 

The main output for the user is a list of INFO, WARNING and ERROR messages, including their origin location. The compiler produces **errors** when the source code is not executable at that point. It generates **warnings**, when it is likely the generated code will throw exceptions at run-time or otherwise fail to behave as expected. **Info** messages are reserved for hinting at deprecated uses of the language or libraries, or other (possibly noisy) ignorable information about the code as written.

The compiler is configured in `pom.xml` in three locations:
* `<dependencies>...</dependencies>` - each dependency leads to a compile-time library path entry, and a run-time JVM classpath entry.
* the general `<configuration>...</configuration>` tags for Rascal mojos:
```xml
<plugins>
    <plugin>
        <groupId>org.rascalmpl</groupId>
        <artifactId>rascal-maven-plugin</artifactId>
        <version>${rascal-maven-plugin.version}</version>
        <configuration>
        ...configuration tags go here...
        </configuration>
    </plugin>
</plugins>
```
* and finally the specific `<configuration>...</configuration>` tag for the `compile` goal.
```xml
 <plugin>
    <groupId>org.rascalmpl</groupId>
    <artifactId>rascal-maven-plugin</artifactId>
    <version>${rascal-maven-plugin.version}</version>
    <executions>
        <execution>
            <!-- "default-compile" works best, "default-cli" only if used only once -->
            <id>default-compile</id> 
            <phase>compile</phase>
            <goals>
                <!-- it is possible to bind to other goals, but not recommended> -->
                <goal>compile</goal>
            </goals>
            <configuration>
               .... configuration tags go here ....
            </configuration>
        </execution>
    </executions>
</plugin>
```
* The latter overwrites the first, tag-by-tag

Each configuration has the exact same parameters as the keyword fields of a ((util::Reflective::PathConfig)) constructor, and some additional ones:
* `<srcs><src>${project.basedir}/src/main/rascal</src></srcs>`, configure a list of folder in the current project that are the roots for Rascal module names.
* `<libs>...</libs>` - configure library dependencies manually. However, if we leave these alone they are filled automatically via `<dependencies>` which is much easier to get right.
* `<bin>${project.basedir}/target/classes</bin>` defines the target folder for binary files. However, the default is always good.
* `<generatedSources>${project.basedir}/src/generated-sources/java</generatedSources>` - will be  used to store intermediate generated Java files. The default is fine too.
* `<ignores><ignore>${project.basedir}/src/main/rascal/Experiments</ignore></ignores>` - allows us to select files and folders reachable from the `srcs` and skip their compilation unless they are required by other non-ignored modules.
* A number of boolean flags can be used for debugging purposes:  `<logPathConfig>`, `<logImports>`, `<logWrittenFiles>`, `<warnUnused>`, `<warnUnusedFormals>`, `<warnUnusedVariables>`, `<warnUnusedPatternFormals>`, `<errorsAsWarnings>` and `<warningsAsErrors>`. The latter two control if a `mvn` run will fail (exit code 1) or succeed (exit code 0) in the presence of warnings or errors.
* Finally we can instruct the mojo to compile the projects in parallel chunks: 
   * the `<parallel>` boolean flag switches the behavior on. 
   * `<parallelMax>5</parallelMax>` restricts the number of parallel processes to 5. However the mojo will estimate a proper maximum based on available processors and memory automatically.
   * `<parallelPrechecks>` lists a number of files that will be compiled and made reusable before the other threads start. Typically the utility modules with a high "fan-in" are listed here, to avoid duplicate (re)work by the other processes.

#### Examples

Maven is typically executed on the Un*x or Windows commandline like so:
```bash
#! /bin/bash

# Typically runs the compiler and the tests before packaging everything 
# in a jar file,  and copying it to your local Maven repository:
mvn install

# like `install` but without copying to the Maven repository;
mvn package 

# If configured as above in an `<execution>` This will run only the Rascal compiler
mvn rascal:compile 

# runs everything _except the Rascal compiler_
mvn install -Drascal.compile.skip 
```

#### Benefits

* The Maven configuration, including the dependencies listed in `pom.xml` enable reuse of other Rascal programs as libraries or development tools.
* The Maven configuration, with the dependencies listed in `pom.xml` enable reuse of other JVM-based projects in the Maven Grand Central, or other repositories listed in the `pom.xml`
* The rascal:compile mojo works find with multi-module Maven projects and parent projects.

#### Pitfalls

* The current rascal:compile mojo executes the static checker and generates a `.tpl` TModel for every Rascal `.rsc` source file. The`.tpl` file enables modular checking against the "binary" interface of other imported and extended modules. _The JVM bytecode generator is not active yet._
* The rascal:compile mojo is fully configured from the pom.xml. Other sources of configuration
may still uses the `Sources` fields in `RASCAL.MF`. This discrepancy will be resolved in the coming months.
* ((getProjectPathConfig)) may produce different configurations for source folders for the same reason.