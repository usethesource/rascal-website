---
title: "analysis::linearprogramming::LinearProgramming"
---

#### Usage

`import analysis::linearprogramming::LinearProgramming;`


## alias Coefficients {#analysis-linearprogramming-LinearProgramming-Coefficients}

* `map[str var,num coef]`

## data LinearExpression {#analysis-linearprogramming-LinearProgramming-LinearExpression}

```rascal
data LinearExpression  
     = linearExp(Coefficients coefficients, num const)
     ;
```

## alias ObjectiveFun {#analysis-linearprogramming-LinearProgramming-ObjectiveFun}

* `LinearExpression`

## function linearExp {#analysis-linearprogramming-LinearProgramming-linearExp}

* ``ObjectiveFun linearExp(Coefficients coefficients)``

## data Constraint {#analysis-linearprogramming-LinearProgramming-Constraint}

```rascal
data Constraint  
     = constraint(	Coefficients coefficients,
			   					ConstraintType ctype, num const)
     ;
```

## function neg {#analysis-linearprogramming-LinearProgramming-neg}

* ``LinearExpression neg(LinearExpression exp)``

## function add {#analysis-linearprogramming-LinearProgramming-add}

* ``LinearExpression add(LinearExpression lhs, LinearExpression rhs)``

## function sub {#analysis-linearprogramming-LinearProgramming-sub}

* ``LinearExpression sub(LinearExpression lhs, LinearExpression rhs)``

## function constraint {#analysis-linearprogramming-LinearProgramming-constraint}

* ``Constraint constraint(LinearExpression lhs, ConstraintType ctype)``
* ``Constraint constraint(LinearExpression lhs,  							 ConstraintType ctype, LinearExpression rhs)``

## alias Constraints {#analysis-linearprogramming-LinearProgramming-Constraints}

* `set[Constraint]`

## alias VariableVals {#analysis-linearprogramming-LinearProgramming-VariableVals}

* `map[str var, num val]`

## data Solution {#analysis-linearprogramming-LinearProgramming-Solution}

```rascal
data Solution  
     = solution(VariableVals varVals, num funVal)
     ;
```

## function runObjFul {#analysis-linearprogramming-LinearProgramming-runObjFul}

* ``num runObjFul(ObjectiveFun f, VariableVals vals)``

## function minimizeNonNegative {#analysis-linearprogramming-LinearProgramming-minimizeNonNegative}

* ``Maybe[Solution]  minimizeNonNegative(Constraints constraints, ObjectiveFun f)``

## function minimize {#analysis-linearprogramming-LinearProgramming-minimize}

* ``Maybe[Solution]  minimize(Constraints constraints, ObjectiveFun f)``

## function maximizeNonNegative {#analysis-linearprogramming-LinearProgramming-maximizeNonNegative}

* ``Maybe[Solution]  maximizeNonNegative(Constraints constraints, ObjectiveFun f)``

## function maximize {#analysis-linearprogramming-LinearProgramming-maximize}

* ``Maybe[Solution]  maximize(set[Constraint] constraints, ObjectiveFun f)``

## function optimize {#analysis-linearprogramming-LinearProgramming-optimize}

* ``Maybe[Solution]  optimize(bool minimize, bool nonZero,  		 Constraints constraints, ObjectiveFun f)``

## function toLLCoefficients {#analysis-linearprogramming-LinearProgramming-toLLCoefficients}

* ``list[num] toLLCoefficients(Coefficients coefficients, list[str] indexVar)``

## function normalize {#analysis-linearprogramming-LinearProgramming-normalize}

* ``Coefficients normalize(Coefficients coefs)``

## function normalizeLinExp {#analysis-linearprogramming-LinearProgramming-normalizeLinExp}

* ``LinearExpression normalizeLinExp(LinearExpression l)``

## function fromLLVariableVals {#analysis-linearprogramming-LinearProgramming-fromLLVariableVals}

* ``Coefficients  fromLLVariableVals(LLVariableVals vars, list[str] indexVar)``

## function toLLObjectiveFun {#analysis-linearprogramming-LinearProgramming-toLLObjectiveFun}

* ``LLObjectiveFun toLLObjectiveFun(ObjectiveFun f, list[str] indexVar)``

## function toLLConstraint {#analysis-linearprogramming-LinearProgramming-toLLConstraint}

* ``LLConstraint toLLConstraint(Constraint c, list[str] indexVar)``

## function toLLConstraints {#analysis-linearprogramming-LinearProgramming-toLLConstraints}

* ``LLConstraints toLLConstraints(Constraints cs, list[str] indexVar)``

## function getIndexVar {#analysis-linearprogramming-LinearProgramming-getIndexVar}

* ``list[str] getIndexVar(Constraints cons,ObjectiveFun f)``

## function fromLLSolution {#analysis-linearprogramming-LinearProgramming-fromLLSolution}

* ``Solution fromLLSolution(LLSolution l, list[str] indexVar)``

