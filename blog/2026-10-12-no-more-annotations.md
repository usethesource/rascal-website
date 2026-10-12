---
title: Final step in replacing the annotations feature with the keyword field feature
authors: [jvinju]
---

Over the years we have been gradually replacing the (/docs/Rascal/Declarations/Annotation)[Annotation] feature with the (/docs/Rascal/Declarations/AlgebraicDataType)[Keyword field] feature.
In (/release-notes/rascal-0-43-x-release-notes)[release 0.43.0] the final step has been made by replacing the semantics of annotations with a "not implemented" error message with a **quick-fix** suggestion.
This feature removal went through the following stages to make for a smooth transition:

1. `2009-2013` only annotations implemented (syntax and semantics).
2. `2013-2019` both annotations and keyword fields implemented (syntax and semantics), but never at the same time on the same node.
3. `2019-2026` annotations simulated by keyword fields (both the syntactical features use semantics of keyword fields); `Tree@\loc` is simulated by `Tree.src`.
4. `2026-....` annotations not implemented anymore (only syntax), everything is a keyword field. `anno loc Tree@\loc` is replaced by `data Tree(loc src=|unknown:///|)` in the `ParseTree` module.

We are now past step 4. Every use of a syntactic construct related to annotations will produce:
1. an error message by the checker.
2. a quick-fix suggestion to remove any and all uses of annotation syntax _in the current project_ and replace them by the respective keyword field feature.
3. a static error by the interpreter.

Note that:
* If you don't fix the code, it will not run anymore and you will get static exceptions by the interpreter.
* After you have fixed the code, it may not run properly on older versions of Rascal anymore, because older versions always come with their own version of the `ParseTree` module.

For your convenience we list the differences in syntax and semantics here:

| Feature | Annotations | Keyword fields | Note |
|  --- | --- | ---- | --- |
| declaration | `anno OfType OnType@name` | `data OnType(OfType name = Default)` | annotations do not have default expressions |
| projection  | `OnExpr@name`             | `OnExpr.name`                        | annotations throw `NoSuchAnnotation` if `name` does not exist, while keyword fields return their default. Keyword fields on `node` throw `NoSuchField` exceptions and return a value of type `value` always. |
| assignment | `OnExpr@name = Expr` | `OnExpr.name = Expr` | Assigment operators like `+=` also inherit the semantics of projection |
| update  | `OnExpr[@name=Expr]` | `OnExpr[name=Expr]` | field update works the same for both features, both set the field whether or not it was there before |
| equality | `Cons[@f=1] == Cons[@f=2]` is `true` | `Cons(f=1) == Cons(f=2)` is `false` | constructor equality ignores annotations while it does not ignore keyword fields, this also holds for set elements, and map/relation keys |
| matching | `Cons[@f=1] := Cons[@f=2]` is `true` |  `Cons(f=1) := Cons(f=2)` is `true` | constructor matching always ignores keyword fields and annotations |

In stage 3, annotations took the semantics of keyword fields for _declaration_, _assignment_ and _matching_, and _equality_ while for _projection_ still the old `NoSuchAnnotation` was thrown. This is the stage you have probably been using. The hard change was between stages 2 and 3.

The quickfix for stage 4 produces an arbitrary default for well known types,
i.e. `int age = 0`, while for more complex type an exception is thrown by the default expression. It is advised to review the defaults manually.

Finally, the quickfix may open and rewrite a large group of files for the current project. You have to save and close each of them manually to write the result to disk. This would also be a good time to review the generated defaults.

If you get stuck, please contact (Jurgen Vinju)[mailto:Jurgen.Vinju@cwi.nl] or (Davy Landman)[mailto:Davy.Landman@swat.engineering] for help.