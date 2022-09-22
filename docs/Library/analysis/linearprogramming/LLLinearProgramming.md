---
title: "module analysis::linearprogramming::LLLinearProgramming"
---

#### Usage

`import analysis::linearprogramming::LLLinearProgramming;`


## alias LLCoefficients {#analysis-linearprogramming-LLLinearProgramming-LLCoefficients}

* `list[num]`

## data LLObjectiveFun {#analysis-linearprogramming-LLLinearProgramming-LLObjectiveFun}

```rascal
data LLObjectiveFun  
     = llObjFun(LLCoefficients coefficients, num const)
     ;
```

## data ConstraintType {#analysis-linearprogramming-LLLinearProgramming-ConstraintType}

```rascal
data ConstraintType  
     = leq()
     | eq()
     | geq()
     ;
```

## data LLConstraint {#analysis-linearprogramming-LLLinearProgramming-LLConstraint}

```rascal
data LLConstraint  
     = llConstraint(LLCoefficients coefficients,
			   	ConstraintType ctype, num const)
     ;
```

## alias LLConstraints {#analysis-linearprogramming-LLLinearProgramming-LLConstraints}

* `set[LLConstraint]`

## alias LLVariableVals {#analysis-linearprogramming-LLLinearProgramming-LLVariableVals}

* `list[num]`

## data LLSolution {#analysis-linearprogramming-LLLinearProgramming-LLSolution}

```rascal
data LLSolution  
     = llSolution(LLVariableVals varVals, num funVal)
     ;
```

## function llRunObjFul {#analysis-linearprogramming-LLLinearProgramming-llRunObjFul}

* ``num llRunObjFul(LLObjectiveFun f, LLVariableVals vals)``

## function padToSize {#analysis-linearprogramming-LLLinearProgramming-padToSize}

* ``list[num] padToSize(list[num] l, int s)``

## function normalize {#analysis-linearprogramming-LLLinearProgramming-normalize}

* ``tuple[LLConstraints constraints, LLObjectiveFun f] normalize(LLConstraints constraints, LLObjectiveFun f)``

## function llOptimize {#analysis-linearprogramming-LLLinearProgramming-llOptimize}

* ``Maybe[LLSolution]  llOptimize(bool minimize, bool nonZero,  		   LLConstraints constraints, LLObjectiveFun f)``

