---
title: "module lang::rascal::tutor::questions::QuestionCompiler"
---

#### Usage

`import lang::rascal::tutor::questions::QuestionCompiler;`

## function countGenAndUse {#lang-rascal-tutor-questions-QuestionCompiler-countGenAndUse}

* ``int countGenAndUse((Cmd) `<EvalCmd c>`)``

## function holeMarkup {#lang-rascal-tutor-questions-QuestionCompiler-holeMarkup}

* ``str holeMarkup(int n)``

## function clickMarkup {#lang-rascal-tutor-questions-QuestionCompiler-clickMarkup}

* ``str clickMarkup(int n, str text)``

## function preprocessCode {#lang-rascal-tutor-questions-QuestionCompiler-preprocessCode}

* ``tuple[str quoted, str execute, bool hasHoles, map[str,str] bindings] preprocessCode(int questionId,                                                                                  TokenOrCmdList q,                                                                                  str setup,                                                                                  map[str,str] initialEnv,                                                                                  PathConfig pcfg)``

## function preprocessClick {#lang-rascal-tutor-questions-QuestionCompiler-preprocessClick}

* ``str preprocessClick(int _, TokenOrCmdList q)``

## function removeComments {#lang-rascal-tutor-questions-QuestionCompiler-removeComments}

* ``str removeComments(Intro? intro)``

## function compileQuestions {#lang-rascal-tutor-questions-QuestionCompiler-compileQuestions}

* ``str compileQuestions(loc qloc, PathConfig pcfg)``

## function process {#lang-rascal-tutor-questions-QuestionCompiler-process}

* ``str process(loc qloc, PathConfig pcfg)``
* ``str process(str text, (Question) `<CodeQuestion q>`, PathConfig pcfg)``

## function replaceHoles {#lang-rascal-tutor-questions-QuestionCompiler-replaceHoles}

* ``str replaceHoles(str code)``

## function escape {#lang-rascal-tutor-questions-QuestionCompiler-escape}

* ``str escape(str code)``

## function removeSpacesAroundHoles {#lang-rascal-tutor-questions-QuestionCompiler-removeSpacesAroundHoles}

* ``str removeSpacesAroundHoles(str code)``

## function codeQuestionMarkup {#lang-rascal-tutor-questions-QuestionCompiler-codeQuestionMarkup}

* ``str codeQuestionMarkup(int n, str text, str code)``

## function process {#lang-rascal-tutor-questions-QuestionCompiler-process}

* ``str process(str text, (Question) `<ChoiceQuestion q>`, PathConfig pcfg)``

## function choiceQuestionMarkup {#lang-rascal-tutor-questions-QuestionCompiler-choiceQuestionMarkup}

* ``str choiceQuestionMarkup(int n, str explanation, Choice* choices)``

## function process {#lang-rascal-tutor-questions-QuestionCompiler-process}

* ``str process(str explanation, (Question) `<ClickQuestion q>`, PathConfig pcfg)``

## function clickQuestionMarkup {#lang-rascal-tutor-questions-QuestionCompiler-clickQuestionMarkup}

* ``str clickQuestionMarkup(int n, str explanation, str code)``

## function process {#lang-rascal-tutor-questions-QuestionCompiler-process}

* ``str process(str explanation, (Question) `<MoveQuestion q>`, PathConfig pcfg)``

## data Fragment {#lang-rascal-tutor-questions-QuestionCompiler-Fragment}

```rascal
data Fragment  
     = fragment(int index, list[str] lines, int pre, int post)
     ;
```

## function indent {#lang-rascal-tutor-questions-QuestionCompiler-indent}

* ``int indent(str s)``

## function makeSegments {#lang-rascal-tutor-questions-QuestionCompiler-makeSegments}

* ``list[list[str]] makeSegments(list[str] lines)``

## function moveQuestionMarkup {#lang-rascal-tutor-questions-QuestionCompiler-moveQuestionMarkup}

* ``str moveQuestionMarkup(int n, str explanation, str code, str decoy)``

## function process {#lang-rascal-tutor-questions-QuestionCompiler-process}

* ``str process(str explanation, (Question) `<FactQuestion q>`, PathConfig pcfg)``

## function factQuestionMarkup {#lang-rascal-tutor-questions-QuestionCompiler-factQuestionMarkup}

* ``str factQuestionMarkup(int n, str explanation, Fact+ facts)``

## function makeQuestion {#lang-rascal-tutor-questions-QuestionCompiler-makeQuestion}

* ``loc makeQuestion(int questionId, PathConfig pcfg)``

## function eval {#lang-rascal-tutor-questions-QuestionCompiler-eval}

* ``value eval(int questionId, str exp, str setup, PathConfig pcfg)``

## function runTests {#lang-rascal-tutor-questions-QuestionCompiler-runTests}

* ``void runTests(int questionId, str mbody, PathConfig pcfg)``

