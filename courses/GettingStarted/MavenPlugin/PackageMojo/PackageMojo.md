---
title: Package Mojo
---

#### Synopsis

Prepare compiler output files for distribution in a jar file, and downstream usage in projects and IDEs.

#### Description

The `prepare` plugin takes care of:
    * copying source files to the target folder, for later reference by debuggers (source distribution)
    * renaming file references in generated code and interface files (`.tpl` and `.constant`) such that they point to the distributed location and not the source project location.

This mojo creates a fresh copy of the target build directory with the renamed entities, and then configures downstream processors to continue with the new directory rather than the old. The `jar` mojo then eventually packages the right files into the jar file.

The mojo makes ample use of the `mvn:///` scheme to refer to project dependencies unambiguously.

#### Benefits

* this enables debugging library projects, including the standard library, with browsing and breakpoint support inside of distributed files.
* this makes sure source files are in the proper place for depending projects to find them.

#### Pitfalls

* this distributes your source code in the main jar file for your project. If you don't want this, then don't use the plugin. However, with the current interpreted it is not possible to depend on libraries which do not distribute their source code.
