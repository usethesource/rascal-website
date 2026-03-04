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


#### Benefits

* Links are checked at compile-time
* Ambiguous links are first tried in the local course scope before an ambiguity is reported
* Ambiguous links have helpful error messages with the options to choose from 

#### Pitfalls



