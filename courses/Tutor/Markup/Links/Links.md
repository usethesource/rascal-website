---
title: Linking to Concepts
sidebar_position: 4
keywords:
    - reference
    - referring
    - linking
    - link
---

#### Synopsis

Refer to a concept in this course or another course.

#### Syntax

``````
((ConceptName))
((ParentConceptName-ConceptName))
((FullDashSeparatedPathTo-ConceptName))
((Course))
((Course:ConceptName))
((Course:ParentConceptName-ConceptName))
((Course:FullDashSeparatedPathTo-ConceptName))
((ModuleName))
((a::b::ModuleName))
((Course:a::b::ModuleName))
((module:ModuleName))
((module:a::b::ModuleName))
((Course:module:a::b::ModuleName))
((package:a::b))
((Course:package:a::b))
((data:ADTName))
((syntax::SyntaxName))
((function::functionName))
``````

And also for all of the above the labeled variants:
``````
[a text label]((ConceptLink))
``````

#### Types

#### Function

#### Description

Above are all the ways a concept can be linked:

* The concept name, which is equal to its file name is leading.
* The parent concept name can be used to disambiguate
* Otherwise the full path to the root of the course can be used, where `/` is replaced by `-`
* Rascal modules can be referenced by name and by their fully qualified name
* To disambiguate modules from concept names, the `module` and `package` prefixes come in handy.

#### Examples

The concept name of this concept is `ReferenceToConcept` while its title is `Reference to Concept` (note the spaces).

We can create a reference to the `CodeExamples` concept in the current course in the following ways:

* `((Code Examples))` (using the display name) gives: "((Code Examples))".
* `((Markup-CodeExamples))` (using its parent concept name and concept name) gives "((Markup-CodeExamples))".
* `[see code examples]((Tutor:Markup-CodeExamples))` gives "[see inline markup]((Tutor:Markup-CodeExamples))"
* for more link notations see the _syntax_ types above.

When a link name is _ambiguous_ this means that multiple concepts could be the target of the link. This
can happen, for example, when:
* The same name is used nested under different compound ((Concept))s
* The same name is used by different dependent libraries 
* A name occurs as different categories: concept, module, dunction, datatype, etc.
* Or any combination of the above.

Here is an example error message caused by an ambiguous reference:
```
[ERROR] /courses/Recipes/UserInterfaces/LanguageServerProtocol/RegisterYourLanguage/RegisterYourLanguage.md:51:0: Ambiguous concept link `Syntax Definition` can be resolved by:
   * using ((Rascal:SyntaxDefinition)) to link to /Rascal/Declarations/SyntaxDefinition/index.md;
   * using ((Rascal-SyntaxDefinition)) to link to /Library/lang/rascal/\syntax/Rascal.md#lang-rascal-\syntax-Rascal-SyntaxDefinition;
   * using ((MultiErrorBug-SyntaxDefinition)) to link to /Library/lang/rascal/tests/concrete/recovery/bugs/MultiErrorBug.md#lang-rascal-tests-concrete-recovery-bugs-MultiErrorBug-SyntaxDefinition;
```

We see that the name resolves to a concept in the `Rascal` course, to a non-terminal name in the Rascal syntax definition itself, called "SyntaxDefinition", and to a local type definition in one
of the test modules of the standard library. This is all accidental.

In short: the link "Syntax Definition" was just not precise enough. The error message helps by:
* providing three options to choose from (or as many as their are alternative resolutions);
* ensuring that each option resolves _precisely_ and _unambiguously_ to one of the original alternatives;
* ensuring thet each option is the _shortest_ way to describe the exact and unambiguous link. Their may be many more ways to write it.

#### Benefits

* Links are checked at compile-time
* Ambiguous links are first tried in the local course scope before an ambiguity is reported
* Ambiguous links have helpful error messages with the options to choose from 

#### Pitfalls



