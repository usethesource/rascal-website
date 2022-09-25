---
title: "module lang::smtlib2::Compiler"
---

#### Usage

`import lang::smtlib2::Compiler;`


	Synopsis: Translate the SMTLIBv2 AST to string so that it can be interpreted by a SMTLIBv2 compliant solver 


## function toString {#lang-smtlib2-Compiler-toString}

* ``list[str] toString(Script script)``
* ``str toString(setLogic(Logic logic))``
* ``str toString(setOption(Option option))``
* ``str toString(setInfo(Info info))``
* ``str toString(declareSort(str name, int arity))``
* ``str toString(defineSort(str name, list[str] sorts, list[Sort] types))``
* ``str toString(declareFunction(str name, list[Sort] params, Sort returnType))``
* ``str toString(defineFunction(str name, list[SortedVar] params, Sort returnType, Expr body))``
* ``str toString(\assert(Expr expr))``
* ``str toString(checkSatisfiable())``
* ``str toString(getValue(exprs))``
* ``str toString(getUnsatCore())``
* ``str toString(push(nr))``
* ``str toString(pop(nr))``
* ``str toString(exit())``
* ``default str toString(Command command)``
* ``str toString(interactiveMode(val))``
* ``str toString(printSuccess(bool val))``
* ``str toString(regularOutputChannel(channel))``
* ``str toString(diagnosticOutputChannel(str channel))``
* ``str toString(expandDefinitions(bool val))``
* ``str toString(produceProofs(bool val))``
* ``str toString(produceUnsatCores(bool val))``
* ``str toString(produceModels(bool val))``
* ``str toString(produceAssignments(bool val))``
* ``str toString(randomSeed(int seed))``
* ``str toString(verbosity(int level))``
* ``str toString(list[SortedVar] params)``
* ``str toString(list[Sort] sorts)``
* ``str toString(\int())``
* ``str toString(\bool())``
* ``str toString(boolVal(b))``
* ``str toString(intVal(i))``
* ``str toString(var(str name))``
* ``str toString(lit(Literal lit))``
* ``str toString(named(labeledExpr, label))``
* ``str toString(customFunctionCall(functionName, params))``
* ``str toString(\not(val))``
* ``str toString(implies(lhs, rhs))``
* ``str toString(and(lhs, rhs))``
* ``str toString(or(lhs, rhs))``
* ``str toString(xor(lhs, rhs))``
* ``str toString(eq(lhs, rhs))``
* ``str toString(distinct(lhs, rhs))``
* ``str toString(ite(condition, whenTrue, whenFalse))``
* ``str toString(neg(val))``
* ``str toString(sub(lhs, rhs))``
* ``str toString(add(lhs, rhs))``
* ``str toString(mul(lhs, rhs))``
* ``str toString(div(lhs, rhs))``
* ``str toString(\mod(lhs, rhs))``
* ``str toString(abs(val))``
* ``str toString(lte(lhs, rhs))``
* ``str toString(lt (lhs, rhs))``
* ``str toString(gte(lhs, rhs))``
* ``str toString(gt (lhs, rhs))``

