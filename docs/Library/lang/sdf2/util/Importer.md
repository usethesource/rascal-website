---
title: "module lang::sdf2::util::Importer"
---

#### Usage

`import lang::sdf2::util::Importer;`

## function generate {#lang-sdf2-util-Importer-generate}

* ``str generate(str name, loc at, PathConfig pcfg)``

#### Synopsis

Converts an SDF2 module to a Rascal module

#### Description

The `sdf` uri scheme works like this:
`sdf:///<modulename>`

The default Rascal search path is used to resolve the 
module name to a file with the `.sdf2` extension. 

The module name is expected to be in SDF2 syntax.

If modules are "imported" by the given top module,
then these names are resolved recursively and a 
"definition" composed of all relative modules is
collected before the translation process starts.
All of the syntax rules in all of the SDF2 modules 
end up in one Rascal module.

