---
layout: default
title: Contributing
published: true
---

<p class="text-center">
   <a class="btn" href="https://github.com/usethesource/rascal"><i class="icon-github"></i> Source code </a>
   <a class="btn" href="https://github.com/usethesource/rascal/issues/"><i class="icon-tasks"></i> Report issues</a>
   <a class="btn" href="https://github.com/usethesource/rascal/wiki/Rascal-Developers-Setup---Step-by-Step"><i class="icon-info-sign"></i> Develop instructions</a>
</p>

Thanks for your interest in the Rascal MPL project!
This page is intended for developers contributing to the source code of the Rascal implementation  itself, rather than programmers that use Rascal.

Rascal is a (meta) programming language with the following features:

1. type-checker ([rascal-core](https://github.com/usethesource/rascal-core))
2. interpreter that type-checks ([rascal](https://github.com/usethesource/rascal))
3. compiler ([rascal-core](https://github.com/usethesource/rascal-core))
4. standard library ([rascal](https://github.com/usethesource/rascal))
4. parser generator ([rascal](https://github.com/usethesource/rascal))
4. type-checker generator ([typepal](https://github.com/usethesource/typepal))
4. top-down context-free general parsing algorithm ([rascal](https://github.com/usethesource/rascal))
4. hash-trie based implementation of relational calculus (via [capsule](https://github.com/usethesource/capsule))
4. immutable values (sets, lists, numbers, maps, algebraic data-types), via [vallang](https://github.com/usethesource/vallang)
5. REPL ([rascal](https://github.com/usethesource/rascal))
6. Eclipse IDE with IDE generator based on Eclipse IMP ([rascal-eclipse](https://github.com/usethesource/rascal-eclipse))
7. VScode IDE with IDE generator based on LSP ([rascal-language-servers](https://github.com/usethesource/rascal-language-servers))
8. Interactive documentation (tutor) compiler ([rascal](https://github.com/usethesource/rascal))
8. Interactive documentation content ([rascal](https://github.com/usethesource/rascal))
8. Libraries for
   * Java analysis ([rascal](https://github.com/usethesource/rascal))
   * C++ analysis ([clair](https://github.com/cwi-swat/clair))
   * PHP analysis ([php-air](https://github.com/cwi-swat/php-analysis/))
   * Python analysis ([python-air](https://github.com/cwi-swat/python-air))
   * Javascript analysis ([js-air](https://github.com/cwi-swat/js-air/))
   * HTML5-based UI implementations ([salix](https://github.com/cwi-swat/salix))
   * etc.

 
Contributing to libraries or the standard library is preferred over contributions to the core implementation features since
features in the core are tangled and therefore complex. We do have a lot of tests, so if you plan to contribute a bug-fix or
a new feature don't forget to run `mvn test`. If you are a parser, type-checking, or functional programming/term-rewriting expert, 
please do not hesitate to give us feedback or suggestions, we love those topics and it's always good to talk to a fellow 
enthusiast and learn something new.

## Library contributions

If you'd like to contribute a new library or library function do not hesitate to contact us: open an enhancement or bug issue 
[here](https://github.com/usethesource/rascal/issues) and we can start discussing the ins and outs of your idea! Also
we'd be able to help out; you don't have to do it all alone.

## Contributing ideas for enhancements and bug fixes

We welcome feedback. Please use [GitHub issues](https://github.com/usethesource/rascal/issues) 
to submit your contributions such as pull requests, bug reports and suggestions for enhancement. Thanks! 

## Source access

Rascal is completely hosted on GitHub, [under the UseTheSource repositories](https://github.com/organizations/usethesource).
See our [developer setup](https://github.com/usethesource/rascal/wiki/Rascal-Developers-Setup---Step-by-Step)
instructions on which projects to checkout and dependencies to install.

## Continuous integration

* We use Github's Actions for continuous integration:
   * Vallang [![Build Status Vallang](https://github.com/usethesource/vallang/actions/workflows/build.yaml/badge.svg)](https://github.com/usethesource/vallang/actions/workflows/build.yaml)
   * Capsule [![Build Status Capsule](https://github.com/usethesource/capsule/actions/workflows/build.yaml/badge.svg)](https://github.com/usethesource/capsule/actions/workflows/build.yaml)
   * Rascal [![Build Status Rascal](https://github.com/usethesource/rascal/actions/workflows/build.yaml/badge.svg)](https://github.com/usethesource/rascal/actions/workflows/build.yaml)
   * Rascal-core [![Build Status Rascal Compiler](https://github.com/usethesource/rascal-core/actions/workflows/build.yaml/badge.svg)](https://github.com/usethesource/rascal-core/actions/workflows/build.yaml)
   * Typepal [![Build Status TypePal](https://github.com/usethesource/typepal/actions/workflows/build.yaml/badge.svg)](https://github.com/usethesource/typepal/actions/workflows/build.yaml)
   * Rascal-eclipse [![Build Status Rascal-Eclipse](https://github.com/usethesource/rascal-eclipse/actions/workflows/build.yaml/badge.svg)](https://github.com/usethesource/rascal-eclipse/actions/workflows/build.yaml)
   * Rascal-vscode [![Build Status Rascal-VScode](https://github.com/usethesource/rascal-language-servers/actions/workflows/build.yaml/badge.svg)](https://github.com/usethesource/rascal-language-servers/actions/workflows/build.yaml)
   
