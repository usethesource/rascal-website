---
title: Func
---

#### Synopsis

Func is a tiny functional language; We present several interpreters for it.

#### Description

Func is a functional language with the following features:

* A program consists of a number of function declarations.
* A function declaration consists of a name, zero or more formal parameter names and an expression.
* An expression can be one of:
  **  an integer constant.
  **  a variable.
  **  arithmetic operators `+`, `-`, `*` and `/`.
  **  comparison operators `<`, `\<=`, `>` and `>=`.
  **  a call of a function.
  **  an `if` expression.
  **  a sequence of expressions (`;`).
  **  an assignment (`:=`).
  **  a `let` expression to introduce new bindings for local variables.
  **  an address of a variables (denoted by `&`).
  **  derefence of a variable (denoted by `*`).


Some features add more complexity to an interpreter, therefore
we present four interpreters [Eval0](../../../Recipes/Languages/Func/Eval0/index.md), [Eval1](../../../Recipes/Languages/Func/Eval1/index.md), [Eval2](../../../Recipes/Languages/Func/Eval2/index.md) and [Eval2](../../../Recipes/Languages/Func/Eval2/index.md)
that implement increasingly complex features:


| Feature              | Eval0 | Eval1 | Eval2 | Eval3 |
| --- | --- | --- | --- | --- |
| function declaration | y     | y     | y     | y |
| integer constant     | y     | y     | y     | y |
| variable             | y     | y     | y     | y |
| arithmetic operators | y     | y     | y     | y |
| comparison operators | y     | y     | y     | y |
| call                 | y     | y     | y     | y |
| if                   | y     | y     | y     | y |
| let                  |       | y     | y     | y |
| sequence             |       |       | y     | y |
| assignment           |       |       | y     | y |
| address operator     |       |       |       | y |
| dereference operator |       |       |       | y |


#### Examples

Here are several versions of the factorial function
that use more and more features of the Func language:

`F0.func`:
```rascal
fact(n) = if n <= 1 then
             1 
          else 
             n * fact(n-1)
          end
```

`F1.func`:
```rascal
fact(n) = let
	        x = n
          in
	        if x <= 1 then 
	           x 
	        else 
		       x * fact(x-1)
	        end
	      end
```

`F2.func`:
```rascal
fact(n) = if n <= 1 then 
             n := 1
	      else 
	         n := n * fact(n-1)
	      end;
	      n
```

`F3.func`:
```rascal
swap(a, b) =
          let 
	        temp = *a
	      in
            *a := *b;
	        *b := temp
	      end

fact(n) = let
	        x = 1,
	        y = 0
	      in
	        if n <= 1 then 
	           x := 1
	        else 
	           x := n * fact(n-1)
	        end;
	        swap(&x, &y);
	        y
	      end
```

                
For convenience, we use two versions of these examples for each _F_ᵢ:

*  A file _Fᵢ_`.func` that contains the code as shown above.
*  A file _Fᵢ_`.rsc` a Rascal file that declares a string variable _Fᵢ_ with the same content.


For instance, `F0.rsc` looks like this 
```rascal
module demo::lang::Func::programs::F0

public str F0 =
"fact(n) = if n \<= 1 then
             1 
          else 
             n * fact(n-1)
          end";
```

NOTE: Note the escaped `<` character in `\\<=`. This is necessary since `<` and `>` are used
in strings to enclose interpolations (insertion of the value of a Rascal expression).
Both symbols need to be escaped when used as literal symbol and not as interpolation.
                

