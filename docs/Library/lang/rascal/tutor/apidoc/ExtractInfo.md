---
title: "module lang::rascal::tutor::apidoc::ExtractInfo"
---

#### Usage

`import lang::rascal::tutor::apidoc::ExtractInfo;`

## function extractInfo {#lang-rascal-tutor-apidoc-ExtractInfo-extractInfo}

* ``list[DeclarationInfo] extractInfo(loc moduleLoc)``

#### Synopsis

Extract declaration information from a Rascal module at given location.

## function doExtractInfo {#lang-rascal-tutor-apidoc-ExtractInfo-doExtractInfo}

* ``list[DeclarationInfo] doExtractInfo(loc moduleLoc, datetime _/*lastModified*/)``

## function extractModule {#lang-rascal-tutor-apidoc-ExtractInfo-extractModule}

* ``list[DeclarationInfo] extractModule(m: (Module) `<Header header> <Body body>`)``

## function extractTopLevel {#lang-rascal-tutor-apidoc-ExtractInfo-extractTopLevel}

* ``list[DeclarationInfo] extractTopLevel(str moduleName, (Toplevel) `<Declaration decl>`)``

## function extractDecl {#lang-rascal-tutor-apidoc-ExtractInfo-extractDecl}

* ``list[DeclarationInfo]  extractDecl(str moduleName, d: (Declaration) `<Tags tags> <Visibility visibility> <Type tp> <{Variable ","}+ variables> ;`)``
* ``list[DeclarationInfo]  extractDecl(str moduleName, d: (Declaration) `<Tags tags> <Visibility visibility> anno <Type annoType> <Type onType>@<Name name> ;`)``
* ``list[DeclarationInfo]  extractDecl(str moduleName, d: (Declaration) `<Tags tags> <Visibility visibility> alias <UserType user> = <Type base> ;`)``
* ``list[DeclarationInfo]  extractDecl(str moduleName, d: (Declaration) `<Tags tags> <Visibility visibility> tag <Kind kind> <Name name> on <{Type ","}+ types> ;`)``
* ``list[DeclarationInfo]  extractDecl(str moduleName, d: (Declaration) `<Tags tags> <Visibility visibility> data <UserType user> ;`)``

## function align {#lang-rascal-tutor-apidoc-ExtractInfo-align}

* ``str align({Variant "|"}+ variants)``

## function extractDecl {#lang-rascal-tutor-apidoc-ExtractInfo-extractDecl}

* ``list[DeclarationInfo]  extractDecl(str moduleName, d: (Declaration) `<Tags tags> <Visibility visibility> data <UserType user> <CommonKeywordParameters commonKeywordParameters> ;`)``
* ``list[DeclarationInfo]  extractDecl(str moduleName, d: (Declaration) `<Tags tags> <Visibility visibility> data <UserType user> <CommonKeywordParameters commonKeywordParameters> = <{Variant "|"}+ variants> ;`)``

## function genVariant {#lang-rascal-tutor-apidoc-ExtractInfo-genVariant}

* ``DeclarationInfo genVariant(str moduleName, v: (Variant) `<Name name>(<{TypeArg ","}* _> <KeywordFormals _>)`)``

## function extractDecl {#lang-rascal-tutor-apidoc-ExtractInfo-extractDecl}

* ``list[DeclarationInfo]  extractDecl(str moduleName, d: (Declaration) `<FunctionDeclaration functionDeclaration>`)``

## function extractFunDecl {#lang-rascal-tutor-apidoc-ExtractInfo-extractFunDecl}

* ``DeclarationInfo extractFunDecl(str moduleName, fd: (FunctionDeclaration) `<Tags tags> <Visibility visibility> <Signature signature> ;`)``
* ``DeclarationInfo extractFunDecl(str moduleName, fd: (FunctionDeclaration) `<Tags tags> <Visibility visibility> <Signature signature> = <Expression expression> ;`)``
* ``DeclarationInfo extractFunDecl(str moduleName, fd: (FunctionDeclaration) `<Tags tags> <Visibility visibility> <Signature signature> = <Expression expression> when <{Expression ","}+ conditions>;`)``
* ``DeclarationInfo extractFunDecl(str moduleName, fd: (FunctionDeclaration) `<Tags tags>  <Visibility visibility> <Signature signature> <FunctionBody body>`)``

## function extractFunctionDeclaration {#lang-rascal-tutor-apidoc-ExtractInfo-extractFunctionDeclaration}

* ``DeclarationInfo extractFunctionDeclaration(str moduleName, FunctionDeclaration fd)``

## function getSynopsis {#lang-rascal-tutor-apidoc-ExtractInfo-getSynopsis}

* ``str getSynopsis(rel[str, DocTag] tags)``

## function isTutorTag {#lang-rascal-tutor-apidoc-ExtractInfo-isTutorTag}

* ``bool isTutorTag(str label)``

## function getTagContents {#lang-rascal-tutor-apidoc-ExtractInfo-getTagContents}

* ``rel[str, DocTag] getTagContents(Tags tags)``

#### Synopsis

extracts the contents of _all_ tags from a declaration syntax tree and stores origin information

## function sortedDocTags {#lang-rascal-tutor-apidoc-ExtractInfo-sortedDocTags}

* ``list[DocTag] sortedDocTags(rel[str, DocTag] tags)``

#### Synopsis

lists the supported documentation tags in the prescribed order

