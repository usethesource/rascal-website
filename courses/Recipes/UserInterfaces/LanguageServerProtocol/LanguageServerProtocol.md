---
title: "VScode and the Language Server Protocol"
keywords:
    - LSP
    - VScode
    - "Visual Studio Code"
    - "Language Server Protocol"
---

#### Synopsis

Recipe for creating an IDE for your language based on the Language Server Protocol

#### Syntax

#### Types

#### Function

#### Description

Rascal's VScode extension comes with ((org.rascalmpl.rascal-lsp)) builtin. It can be used to rapidly develop an IDE 
for your own domain specific language.

You can work in small steps:
1. First create a ((ParsingService)) and then ((RegisterYourLanguage)). This gives your users:
   * ((SyntaxHighlighting)) which can be further [configured]((SyntaxHighlighting)).
   * Parse error diagnostics and/or error recovery (see ((ParsingService))
2. Then you can **optionally** and **independently** add editor services one-by-one:
   * the ((SelectionRangeService)) provides an easy and quick way to select the right pieces of DSL code for the user.
   * the ((DocumentSymbolService))  provides a linked outline view and symbol based search in the editor.
   * the ((HoverService)) provides quick (on-demand) documentation in the editor with a tooltip. See also later ((AnalysisService)) and ((BuildService)) for pre-computing documentation information.
   * the ((ReferencesSevice)) and 
   * ((DefinitionService)) and 
   * ((ImplementationService)) provide quick (on-demand) links to either all references, all definitions of a symbol, or all implementations of a symbol in the editor (with a hyperlink). See also later ((AnalysisService)) and ((BuildService)) for pre-computing reference, definition and implementation information.
   * the ((AnalysisService)) services provides errors and warnings for the user as diagnostics in the IDE (e.g. type checking), while the user is typing in the editor. 
   * the ((BuildService)) triggers a compiler or another language processor. It also produces errors and warnings for the user, but only when a file has been saved. Because a ((BuildService)) processes entire DSL files, it can conveniently be used to collect ((Hover)), ((References)) and ((Definition)) information. 
   * ((ExecutionService)) provides an execution mechanism for  your own editor commands that can be triggered by the user:
      * Using ((AnalysisService)) or ((BuildService)) you can attach them to error messages to provide _quick fixes_.
      * Using ((CodeLensService)) or ((InlayHintService)) which both provides information "in between the lines" of your DSL code, which actionable hyperlinks to your ((ExecutionService)) commands.
      * Using ((CodeActionService)) which provides a low-key lightbulb menu of context-specific actions (like quick-fixes and refactoring)
   * ((CallHierarchyService)) provides an on-demand, lazy browser for the "call graph" of a PL or DSL.
   * ((RenameService)) offers language-specific renaming to your users.

So start with the ((ParserService)) and  ((RegisterYourLanguage)), then pick which IDE feature you'd like to provide 
to your users first, and go with that.

#### Examples

#### Benefits

#### Pitfalls