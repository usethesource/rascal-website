---
title: "Creating Language Servers for VScode"
keywords:
    - LSP
    - IDE
    - VScode
    - "Visual Studio Code"
    - "Language Server Protocol"
---

#### Synopsis

Recipes for creating an IDE for your language based on the Language Server Protocol using ((module:util::LanguageServer)) and ((module:util::IDEServices)).

#### Syntax

#### Types

#### Function

#### Description

Rascal's VScode extension comes with a high-level [Language Server Protocol API]((org.rascalmpl.rascal-lsp)) builtin. The library module ((util::LanguageServer)) can be used to rapidly develop an IDE for your own domain specific language or programming language.

You can work in small steps:
1. First create a ((ParsingService)) and then ((RegisterYourLanguage)). This gives your users:
   * ((SyntaxHighlighting)) which can be further [configured]((SyntaxHighlighting)).
   * Parse error diagnostics and/or error recovery (see ((ParsingService)))
2. Then you can **optionally** and **independently** add editor services one-by-one:
   * the ((SelectionRangeService)) provides an easy and quick way to select the right pieces of DSL code for the user.
   * the ((DocumentSymbolService))  provides a linked outline view and symbol based search in the editor.
   * the ((HoverService)) provides quick (on-demand) documentation in the editor with a tooltip. See also later ((AnalysisService)) and ((BuildService)) for pre-computing documentation information.
   * the ((ReferencesSevice)) and 
   * ((DefinitionService)) and 
   * ((ImplementationService)) provide quick (on-demand) links to either all references, all definitions of a symbol, or all implementations of a symbol in the editor (with a hyperlink). See also later ((AnalysisService)) and ((BuildService)) for pre-computing reference, definition and implementation information.
   * the ((AnalysisService)) services provides errors and warnings for the user as diagnostics in the IDE (e.g. type checking), while the user is typing in the editor. 
   * the ((BuildService)) triggers a compiler or another language processor. It also produces errors and warnings for the user, but only when a file has been saved. 
   * ((ExecutionService)) provides an execution mechanism for  your own editor commands that can be triggered by the user:
      * Using ((AnalysisService)) or ((BuildService)) you can attach them to error messages to provide _quick fixes_.
      * Using ((CodeLensService)) or ((InlayHintService)) which both provides information "in between the lines" of your DSL code, which actionable hyperlinks to your ((ExecutionService)) commands.
      * Using ((CodeActionService)) which provides a low-key lightbulb menu of context-specific actions (like quick-fixes and refactoring)
   * ((CallHierarchyService)) provides an on-demand, lazy browser for the "call graph" of a PL or DSL.
   * ((RenameService)) offers language-specific renaming to your users.

So start with the ((ParsingService)) and ((RegisterYourLanguage)), then pick which IDE feature you'd like to provide to your users first, and just go with that.

#### Examples

#### Benefits

* There are only two small API modules relevant for constructing full featured IDEs:
   * ((util::LanguageServer)) for building an LSP server that connects to the VScode client.
   * ((util::IDEServices)) for programmatically calling IDE effects (like opening editors and starting web views).
* There is no need for a "second level" (starting up another VS code instance) to test your new extension. All you need is to ((RegisterYourLanguage)) and your language will be added to your IDE here and now.
* Your services code "sees" always the code that the user sees in their editor. Even if the file is unsaved, or the file comes from `aVeryWeirdURIScheme:///what?`, all of Rascal's IO features are rerouted implicitly to see the editor contents.
* Your LSP services are based on the metaprogramming facilities of Rascal, and IDE construction is just a form of meta-programming (code in -> UI information out).
* The Rascal LSP API functions are pure, and work with only immutable data-types. This makes it easy to test and/or debug independently of any editor client. Managing editor state and implementing the asynchronous LSP protocol is hidden under-the-hood.
* Your LSP services once made for VScode, will work for any IDE client we port the [LSP bridge]((org.rascalmpl.rascal-lsp)) to.
* You do not have to write a full type-checker or a full compiler, to start giving your users valuable features like error checking, overviews and hyperlinks. Start small. Dream big.
* All changes to DSL files are applied via collecting ((((TextEdits-FileSystemChange))))s, which is a kind of `diff` format. If you stick with this protocol rather then writing to disk yourself, then the IDE will integrate all changes into the undo/redo stack, and can also provide confirmation dialogs and/or previews.
* Later you can decide to deploy your own VScode extension with no changes to your ((util::LanguageServer)) services code.

#### Pitfalls

* It is easy to add many useful commands and features for yours users, but all of them have to have a clear and predictable semantics and all of them must be maintained in the future. It makes sense to create services "on demand", as your users ask for them. Too many options is confusing. Also not every DSL needs every programming language feature, even though it is easy to construct it with Rascal and the ((util::LanguageServer)) API.
* In VScode, if your ((ExecutionService)) changes any DSL files on a project, which are not in an open editor, then editors are opened for each file and it is up to the user to "save" them and commit to the changes. It's the same for ((RenameService)) and any other side-effect applied to code files you build into your Rascal code.