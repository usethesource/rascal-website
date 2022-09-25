---
title: "module demo::lang::turing::l1::interpreter::Interpreter"
---

#### Usage

`import demo::lang::turing::l1::interpreter::Interpreter;`


## alias Tape {#demo-lang-turing-l1-interpreter-Interpreter-Tape}

* `list[bool]`

## alias TuringState {#demo-lang-turing-l1-interpreter-Interpreter-TuringState}

* `tuple[list[Statement] prog, int line, Tape tape, int pos]`

## function interpreterStep {#demo-lang-turing-l1-interpreter-Interpreter-interpreterStep}

* ``TuringState interpreterStep(TuringState state)``

## function initialState {#demo-lang-turing-l1-interpreter-Interpreter-initialState}

* ``TuringState initialState(Program prog, Tape input)``

## function isFinished {#demo-lang-turing-l1-interpreter-Interpreter-isFinished}

* ``bool isFinished(TuringState s)``

## function interpreter {#demo-lang-turing-l1-interpreter-Interpreter-interpreter}

* ``Tape interpreter(Program prog, Tape input)``

