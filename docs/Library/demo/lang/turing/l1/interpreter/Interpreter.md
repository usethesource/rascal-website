---
title: "module demo::lang::turing::l1::interpreter::Interpreter"
---

#### Usage

`import demo::lang::turing::l1::interpreter::Interpreter;`


## alias Tape {#demo-lang-turing-l1-interpreter-Interpreter-Tape}

```rascal
list[bool]

```

## alias TuringState {#demo-lang-turing-l1-interpreter-Interpreter-TuringState}

```rascal
tuple[list[Statement] prog, int line, Tape tape, int pos]

```

## function interpreterStep {#demo-lang-turing-l1-interpreter-Interpreter-interpreterStep}

```rascal
TuringState interpreterStep(TuringState state)

```

## function initialState {#demo-lang-turing-l1-interpreter-Interpreter-initialState}

```rascal
TuringState initialState(Program prog, Tape input)

```

## function isFinished {#demo-lang-turing-l1-interpreter-Interpreter-isFinished}

```rascal
bool isFinished(TuringState s)

```

## function interpreter {#demo-lang-turing-l1-interpreter-Interpreter-interpreter}

```rascal
Tape interpreter(Program prog, Tape input)

```

