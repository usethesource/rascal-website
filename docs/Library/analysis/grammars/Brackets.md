---
title: "analysis::grammars::Brackets"
---

#### Usage

`import analysis::grammars::Brackets;`


## function prioritiesOf {#analysis-grammars-Brackets-prioritiesOf}

* ``DoNotNest prioritiesOf(type[&T] t)``

## function parens {#analysis-grammars-Brackets-parens}

* ``default &T parens(DoNotNest prios, node parent, node kid, &T x,  &T(&T x) parenizer)``
* ``&T parens(DoNotNest prios, node parent, node kid, &T x,  &T(&T x) parenizer)``

## function astPosition {#analysis-grammars-Brackets-astPosition}

* ``int astPosition(int pos, Production p)``

## function isASTsymbol {#analysis-grammars-Brackets-isASTsymbol}

* ``bool isASTsymbol(\layouts(_))``
* ``bool isASTsymbol(\keywords(str name))``
* ``bool isASTsymbol(\lit(str string))``
* ``bool isASTsymbol(\cilit(str string))``
* ``bool isASTsymbol(\empty())``
* ``default bool isASTsymbol(Symbol _)``

