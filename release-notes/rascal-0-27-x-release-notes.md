---
authors: [jvinju]
title: "Rascal 0.27.x release notes"
sidebar_position: 1
---

In this post we report on the Rascal release 0.27.x

<!--truncate-->

## Release 0.27.2 - November 23, 2022

* the tutor compiler now takes screenshots if an interactive visual is generated in a rascal-shell code block.
* the JSON serializer maps objects to constructors one-to-one now. Only ((Rascal:AlgebraicDataType))s with single constructors are allowed, or lists of nullary constructors (for enums).
* added vis::Chart with 8 basic chart styles based on chart.js
* added util::Validator which can validate any `node` instances against an ((Rascal:AlgebraicDataType)) using matching and memoized backtracking. Useful for reading in complex XML, JSON or YAML data.
* issue with variablescope leakage in the visit statement was fixed.
