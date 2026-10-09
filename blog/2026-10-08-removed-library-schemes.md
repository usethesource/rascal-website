---
authors: [thartman]
title: "Migrating away from library schemes"
---

In Rascal `0.42.0` we've removed the `lib:///` resolver, and in Rascal `0.43.0` we removed the `std:///` resolver. These schemes could be used to refer to library dependencies. However, since it was not always clear where locations with these schemes resolve to exactly, we have been working towards their replacement. For example, what if you click a `|std:///IO.rsc|` link in a Rascal Terminal, which version of that file should VS Code open?

`std` would be used to refer to modules in the Rascal standard library, for example `std:///IO.rsc` for [`IO`](/docs/Library/IO/). The `lib` scheme would be used to refer to files in other library dependencies (like `lib://typepal` or `lib://rascal-lsp`). In either case, it was not always clear to which instance of a library such a URI would resolve, or what the version of that library was. For example, depending on where it was used, `std:///IO.rsc` could resolve to a version of Rascal in the Maven repository, the Rascal that was shipped with the VS Code extension, or the standalone JAR that a REPL was started from.

These schemes have been removed. Any use of source locations with these schemes needs to be rewritten, since using these schemes will lead to an exception. The following replacements can be used.

* Where `lib://` is used to refer to a project that is open in the VS Code workspace, replace it with `project://`.
* Where `lib://` or `std://` is used to refer to a dependency from the POM, compute the path config from the POM and find it in there.
  ```rascal
  pcfg = getProjectPathConfig(<pom-root>);
  if (lib <- pcfg.libs, /--mylib--/ := lib.authority) {
    ; // do something with lib
  }
  ```
  Note for `rascal` and `rascal-lsp`: if they are not yet present in the POM, follow the instructions [here](/blog/2026/10/07/pom-leading-for-dsls).

  For experiments, a direct [`mvn://`](/docs/Rascal/Locations/#description) URI can also be used. Note that this divert from the POM when the version in the POM is changed.
* In other cases, [`findResources`](/docs/Library/IO/#IO-findResources) can help.
