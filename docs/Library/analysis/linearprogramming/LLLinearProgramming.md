---
title: "module analysis::linearprogramming::LLLinearProgramming"
---

#### Usage

`import analysis::linearprogramming::LLLinearProgramming;`

#### Synopsis

Low level linear programming interface


## alias LLCoefficients {#analysis-linearprogramming-LLLinearProgramming-LLCoefficients}

```rascal
list[num]

```

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

```rascal
set[LLConstraint]

```

## alias LLVariableVals {#analysis-linearprogramming-LLLinearProgramming-LLVariableVals}

```rascal
list[num]

```

## data LLSolution {#analysis-linearprogramming-LLLinearProgramming-LLSolution}

```rascal
data LLSolution  
     = llSolution(LLVariableVals varVals, num funVal)
     ;
```

## function llRunObjFul {#analysis-linearprogramming-LLLinearProgramming-llRunObjFul}

```rascal
num llRunObjFul(LLObjectiveFun f, LLVariableVals vals)

```

## function padToSize {#analysis-linearprogramming-LLLinearProgramming-padToSize}

```rascal
list[num] padToSize(list[num] l, int s)

```

## function normalize {#analysis-linearprogramming-LLLinearProgramming-normalize}

```rascal
tuple[LLConstraints constraints, LLObjectiveFun f]
normalize(LLConstraints constraints, LLObjectiveFun f)

tuple[LLConstraints constraints, LLObjectiveFun f]
normalize(LLConstraints constraints, LLObjectiveFun f)

```

## function llOptimize {#analysis-linearprogramming-LLLinearProgramming-llOptimize}

```rascal
Maybe[LLSolution] 
llOptimize(bool minimize, bool nonZero, 
		   LLConstraints constraints, LLObjectiveFun f)

Maybe[LLSolution] 
llOptimize(bool minimize, bool nonZero, 
		   LLConstraints constraints, LLObjectiveFun f)

Maybe[LLSolution] 
llOptimize(bool minimize, bool nonZero, 
		   LLConstraints constraints, LLObjectiveFun f)

```

