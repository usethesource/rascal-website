---
title: "module lang::java::m3::Core"
---

#### Usage

`import lang::java::m3::Core;`

#### Synopsis

Extends the M3 [Core](../../../../Library/analysis/m3/Core.md/) with Java specific concepts such as inheritance and overriding.


## data M3 {#lang-java-m3-Core-M3}

```rascal
data M3 (
	rel[loc from, loc to] extends = {},            // classes extending classes and interfaces extending interfaces
	rel[loc from, loc to] implements = {},         // classes implementing interfaces
	rel[loc from, loc to] methodInvocation = {},   // methods calling each other (including constructors)
	rel[loc from, loc to] fieldAccess = {},        // code using data (like fields)
	rel[loc from, loc to] typeDependency = {},     // using a type literal in some code (types of variables, annotations)
	rel[loc from, loc to] methodOverrides = {},    // which method override which other methods
	rel[loc declaration, loc annotation] annotations = {}
)
```

## data Language {#lang-java-m3-Core-Language}

```rascal
data Language (str version="") 
     = java()
     ;
```

## function composeJavaM3 {#lang-java-m3-Core-composeJavaM3}

* ``M3 composeJavaM3(loc id, set[M3] models)``

## function diffJavaM3 {#lang-java-m3-Core-diffJavaM3}

* ``M3 diffJavaM3(loc id, list[M3] models)``

## function createM3FromFile {#lang-java-m3-Core-createM3FromFile}

* ``M3 createM3FromFile(loc file, bool errorRecovery = false, list[loc] sourcePath = [], list[loc] classPath = [], str javaVersion = "1.7")``

## function createM3sFromFiles {#lang-java-m3-Core-createM3sFromFiles}

* ``set[M3] createM3sFromFiles(set[loc] files, bool errorRecovery = false, list[loc] sourcePath = [], list[loc] classPath = [], str javaVersion = "1.7")``

## function createM3FromFiles {#lang-java-m3-Core-createM3FromFiles}

* ``M3 createM3FromFiles(loc projectName, set[loc] files, bool errorRecovery = false, list[loc] sourcePath = [], list[loc] classPath = [], str javaVersion = "1.7")``

## function createM3sAndAstsFromFiles {#lang-java-m3-Core-createM3sAndAstsFromFiles}

* ``tuple[set[M3], set[Declaration]] createM3sAndAstsFromFiles(set[loc] files, bool errorRecovery = false, list[loc] sourcePath = [], list[loc] classPath = [], str javaVersion = "1.7")``

## function createM3FromString {#lang-java-m3-Core-createM3FromString}

* ``M3 createM3FromString(loc fileName, str contents, bool errorRecovery = false, list[loc] sourcePath = [], list[loc] classPath = [], str javaVersion = "1.7")``

## function createM3FromJarClass {#lang-java-m3-Core-createM3FromJarClass}

* ``M3 createM3FromJarClass(loc jarClass, list[loc] classPath = [])``

## function createM3FromSingleClass {#lang-java-m3-Core-createM3FromSingleClass}

* ``M3 createM3FromSingleClass(loc jarClass, str className)``

## function createM3FromJarFile {#lang-java-m3-Core-createM3FromJarFile}

* ``M3 createM3FromJarFile(loc jarLoc, list[loc] classPath = [|system:///|])``

## function createM3FromDirectory {#lang-java-m3-Core-createM3FromDirectory}

* ``M3 createM3FromDirectory(loc project, bool errorRecovery = false, str javaVersion = "1.7", list[loc] classPath = [])``


#### Synopsis

globs for jars, class files and java files in a directory and tries to compile all source files into an [$analysis/m3] model

## function createM3FromJar {#lang-java-m3-Core-createM3FromJar}

* ``M3 createM3FromJar(loc jarFile, list[loc] classPath = [])``

## function unregisterJavaProject {#lang-java-m3-Core-unregisterJavaProject}

* ``void unregisterJavaProject(loc project)``

## function getMethodSignature {#lang-java-m3-Core-getMethodSignature}

* ``str getMethodSignature(loc method)``

## function isCompilationUnit {#lang-java-m3-Core-isCompilationUnit}

* ``bool isCompilationUnit(loc entity)``

## function isPackage {#lang-java-m3-Core-isPackage}

* ``bool isPackage(loc entity)``

## function isClass {#lang-java-m3-Core-isClass}

* ``bool isClass(loc entity)``

## function isConstructor {#lang-java-m3-Core-isConstructor}

* ``bool isConstructor(loc entity)``

## function isMethod {#lang-java-m3-Core-isMethod}

* ``bool isMethod(loc entity)``

## function isParameter {#lang-java-m3-Core-isParameter}

* ``bool isParameter(loc entity)``

## function isVariable {#lang-java-m3-Core-isVariable}

* ``bool isVariable(loc entity)``

## function isField {#lang-java-m3-Core-isField}

* ``bool isField(loc entity)``

## function isInterface {#lang-java-m3-Core-isInterface}

* ``bool isInterface(loc entity)``

## function isEnum {#lang-java-m3-Core-isEnum}

* ``bool isEnum(loc entity)``

## function isType {#lang-java-m3-Core-isType}

* ``bool isType(loc entity)``

## function files {#lang-java-m3-Core-files}

* ``set[loc] files(rel[loc, loc] containment)``

## function declaredMethods {#lang-java-m3-Core-declaredMethods}

* ``rel[loc, loc] declaredMethods(M3 m, set[Modifier] checkModifiers = {})``

## function declaredFields {#lang-java-m3-Core-declaredFields}

* ``rel[loc, loc] declaredFields(M3 m, set[Modifier] checkModifiers = {})``

## function declaredFieldsX {#lang-java-m3-Core-declaredFieldsX}

* ``rel[loc, loc] declaredFieldsX(M3 m, set[Modifier] checkModifiers = {})``

## function declaredTopTypes {#lang-java-m3-Core-declaredTopTypes}

* ``rel[loc, loc] declaredTopTypes(M3 m)``

## function declaredSubTypes {#lang-java-m3-Core-declaredSubTypes}

* ``rel[loc, loc] declaredSubTypes(M3 m)``

## function classes {#lang-java-m3-Core-classes}

* ``set[loc] classes(M3 m)``

## function interfaces {#lang-java-m3-Core-interfaces}

* ``set[loc] interfaces(M3 m)``

## function packages {#lang-java-m3-Core-packages}

* ``set[loc] packages(M3 m)``

## function variables {#lang-java-m3-Core-variables}

* ``set[loc] variables(M3 m)``

## function parameters {#lang-java-m3-Core-parameters}

* ``set[loc] parameters(M3 m)``

## function fields {#lang-java-m3-Core-fields}

* ``set[loc] fields(M3 m)``

## function methods {#lang-java-m3-Core-methods}

* ``set[loc] methods(M3 m)``

## function constructors {#lang-java-m3-Core-constructors}

* ``set[loc] constructors(M3 m)``

## function enums {#lang-java-m3-Core-enums}

* ``set[loc] enums(M3 m)``

## function types {#lang-java-m3-Core-types}

* ``set[loc] types(M3 m)``

## function elements {#lang-java-m3-Core-elements}

* ``set[loc] elements(M3 m, loc parent)``

## function fields {#lang-java-m3-Core-fields}

* ``set[loc] fields(M3 m, loc class)``

## function methods {#lang-java-m3-Core-methods}

* ``set[loc] methods(M3 m, loc class)``

## function constructors {#lang-java-m3-Core-constructors}

* ``set[loc] constructors(M3 m, loc class)``

## function nestedClasses {#lang-java-m3-Core-nestedClasses}

* ``set[loc] nestedClasses(M3 m, loc class)``

