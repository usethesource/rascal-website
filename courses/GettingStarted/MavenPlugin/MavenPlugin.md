---
title: Maven Plugin
sidebar_position: 4
details:
  - mvn
  - maven
  - compile
  - tutor
  - exec
  - package
---

The [rascal-maven-plugin](http://github.com/usethesource/rascal-maven-plugin) offers these Maven plugins for dealing with Rascal projects:
* ((CompileMojo)) for static checking and compiling Rascal projects to JVM class files, TypePal `.tpl` modules and `.constants` files.
* ((TutorMojo)) for (modularly) generating API docs, and compiling tutor courses to docusaurus markdown
* ((PackageMojo)) for packing compiled Rascal code, source code and documentation into a jar file, making the internal location references relocatable. 
* ((ExecMojo)) for executing arbitrary Rascal code during an arbitrary Maven goal.

Each of the above is configured in XML in the local `pom.xml` file of a Rascal project. All of them are executed during a `mvn package` or `mvn install` command line. If the local pom has the right configuration, then each mojo can also be invoked separately:
* `mvn rascal:compile` runs the compiler and `-Drascal.compile.skip` guarantees it is skipped.
* `mvn rascal:tutor` runs the tutor compiler and `-Drascal.tutor.skip` guarantees it is skipped.
* `mvn rascal:package` runs the package rewriter and `-Drascal.package.skip` guarantees it is skipped.
* `mvn rascal:exec` executes some Rascal code, while `-Drascal.exec.skip` makes sure this goal is skipped.


#### Benefits

* When using the ((getProjectPathConfig)) function from ((util::Reflective)), and a local `pom.xml` is available, then
the produced configuration will be influenced by what is configured in the `pom.xml` file as well.
* All dependencies defined in the `pom.xml` are used to automatically configure the library path of the compiler and the interpreter, as well as the classpath of the compiled or interpreted runtime engine.
* Rascal projects can depend on any other Maven project

