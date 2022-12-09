---
title: "module lang::java::m3::Core"
---

#### Usage

`import lang::java::m3::Core;`

#### Synopsis

Extends the M3 [Core](../../../../Library/analysis/m3/Core.md) with Java specific concepts such as inheritance and overriding.


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

```rascal
M3 composeJavaM3(loc id, set[M3] models)

```

## function diffJavaM3 {#lang-java-m3-Core-diffJavaM3}

```rascal
M3 diffJavaM3(loc id, list[M3] models)

```

## function createM3FromFile {#lang-java-m3-Core-createM3FromFile}

```rascal
M3 createM3FromFile(loc file, bool errorRecovery = false, list[loc] sourcePath = [], list[loc] classPath = [], str javaVersion = "1.7")

```

## function createM3sFromFiles {#lang-java-m3-Core-createM3sFromFiles}

```rascal
set[M3] createM3sFromFiles(set[loc] files, bool errorRecovery = false, list[loc] sourcePath = [], list[loc] classPath = [], str javaVersion = "1.7")

```

## function createM3FromFiles {#lang-java-m3-Core-createM3FromFiles}

```rascal
M3 createM3FromFiles(loc projectName, set[loc] files, bool errorRecovery = false, list[loc] sourcePath = [], list[loc] classPath = [], str javaVersion = "1.7")

```

## function createM3sAndAstsFromFiles {#lang-java-m3-Core-createM3sAndAstsFromFiles}

```rascal
tuple[set[M3], set[Declaration]] createM3sAndAstsFromFiles(set[loc] files, bool errorRecovery = false, list[loc] sourcePath = [], list[loc] classPath = [], str javaVersion = "1.7")

```

## function createM3FromString {#lang-java-m3-Core-createM3FromString}

```rascal
M3 createM3FromString(loc fileName, str contents, bool errorRecovery = false, list[loc] sourcePath = [], list[loc] classPath = [], str javaVersion = "1.7")

```

## function createM3FromJarClass {#lang-java-m3-Core-createM3FromJarClass}

```rascal
M3 createM3FromJarClass(loc jarClass, list[loc] classPath = [])

```

## function createM3FromSingleClass {#lang-java-m3-Core-createM3FromSingleClass}

```rascal
M3 createM3FromSingleClass(loc jarClass, str className)

```

## function createM3FromJarFile {#lang-java-m3-Core-createM3FromJarFile}

```rascal
M3 createM3FromJarFile(loc jarLoc, list[loc] classPath = [])

```

## function createM3FromDirectory {#lang-java-m3-Core-createM3FromDirectory}

```rascal
M3 createM3FromDirectory(loc project, bool errorRecovery = false, bool includeJarModels=false, str javaVersion = "1.7", list[loc] classPath = [])

```

#### Synopsis

Globs for jars, class files and java files in a directory and tries to compile all source files into an M3 model

## function createM3FromMavenProject {#lang-java-m3-Core-createM3FromMavenProject}

```rascal
M3 createM3FromMavenProject(loc project, bool errorRecovery = false, bool includeJarModels=false, str javaVersion = "1.7", list[loc] classPath = [])

```

#### Synopsis

Globs for jars, class files and java files in a directory and tries to compile all source files into an M3 model

## function createM3FromJar {#lang-java-m3-Core-createM3FromJar}

```rascal
M3 createM3FromJar(loc jarFile, list[loc] classPath = [])

```

#### Synopsis

Extract an M3 model from all the class files in a jar

#### Description


We use [create m3 from jar](../../../../Library/lang/java/m3/Core.md#lang-java-m3-Core-createM3FromJar) to extract an initial M3 model and 
then a number of steps enrich the M3 towards a model that could
have come from the original source. 

In particular:
* `typeDependency` is enriched by adding `extends` and `implements`
* `methodOverrides` is recovered from `extends` and `implements`, but restricted to the actual overriden methods.

## function unregisterJavaProject {#lang-java-m3-Core-unregisterJavaProject}

```rascal
void unregisterJavaProject(loc project)

```

## function getMethodSignature {#lang-java-m3-Core-getMethodSignature}

```rascal
str getMethodSignature(loc method)

```

## function isCompilationUnit {#lang-java-m3-Core-isCompilationUnit}

```rascal
bool isCompilationUnit(loc entity)

```

## function isPackage {#lang-java-m3-Core-isPackage}

```rascal
bool isPackage(loc entity)

```

## function isClass {#lang-java-m3-Core-isClass}

```rascal
bool isClass(loc entity)

```

## function isConstructor {#lang-java-m3-Core-isConstructor}

```rascal
bool isConstructor(loc entity)

```

## function isMethod {#lang-java-m3-Core-isMethod}

```rascal
bool isMethod(loc entity)

```

## function isParameter {#lang-java-m3-Core-isParameter}

```rascal
bool isParameter(loc entity)

```

## function isVariable {#lang-java-m3-Core-isVariable}

```rascal
bool isVariable(loc entity)

```

## function isField {#lang-java-m3-Core-isField}

```rascal
bool isField(loc entity)

```

## function isInterface {#lang-java-m3-Core-isInterface}

```rascal
bool isInterface(loc entity)

```

## function isEnum {#lang-java-m3-Core-isEnum}

```rascal
bool isEnum(loc entity)

```

## function isType {#lang-java-m3-Core-isType}

```rascal
bool isType(loc entity)

```

## function files {#lang-java-m3-Core-files}

```rascal
set[loc] files(rel[loc, loc] containment)

```

## function declaredMethods {#lang-java-m3-Core-declaredMethods}

```rascal
rel[loc, loc] declaredMethods(M3 m, set[Modifier] checkModifiers = {})

```

## function declaredFields {#lang-java-m3-Core-declaredFields}

```rascal
rel[loc, loc] declaredFields(M3 m, set[Modifier] checkModifiers = {})

```

## function declaredFieldsX {#lang-java-m3-Core-declaredFieldsX}

```rascal
rel[loc, loc] declaredFieldsX(M3 m, set[Modifier] checkModifiers = {})

```

## function declaredTopTypes {#lang-java-m3-Core-declaredTopTypes}

```rascal
rel[loc, loc] declaredTopTypes(M3 m)

```

## function declaredSubTypes {#lang-java-m3-Core-declaredSubTypes}

```rascal
rel[loc, loc] declaredSubTypes(M3 m)

```

## function classes {#lang-java-m3-Core-classes}

```rascal
set[loc] classes(M3 m)

```

## function interfaces {#lang-java-m3-Core-interfaces}

```rascal
set[loc] interfaces(M3 m)

```

## function packages {#lang-java-m3-Core-packages}

```rascal
set[loc] packages(M3 m)

```

## function variables {#lang-java-m3-Core-variables}

```rascal
set[loc] variables(M3 m)

```

## function parameters {#lang-java-m3-Core-parameters}

```rascal
set[loc] parameters(M3 m)

```

## function fields {#lang-java-m3-Core-fields}

```rascal
set[loc] fields(M3 m)

```

## function methods {#lang-java-m3-Core-methods}

```rascal
set[loc] methods(M3 m)

```

## function constructors {#lang-java-m3-Core-constructors}

```rascal
set[loc] constructors(M3 m)

```

## function enums {#lang-java-m3-Core-enums}

```rascal
set[loc] enums(M3 m)

```

## function types {#lang-java-m3-Core-types}

```rascal
set[loc] types(M3 m)

```

## function elements {#lang-java-m3-Core-elements}

```rascal
set[loc] elements(M3 m, loc parent)

```

## function fields {#lang-java-m3-Core-fields}

```rascal
set[loc] fields(M3 m, loc class)

```

## function methods {#lang-java-m3-Core-methods}

```rascal
set[loc] methods(M3 m, loc class)

```

## function constructors {#lang-java-m3-Core-constructors}

```rascal
set[loc] constructors(M3 m, loc class)

```

## function nestedClasses {#lang-java-m3-Core-nestedClasses}

```rascal
set[loc] nestedClasses(M3 m, loc class)

```

