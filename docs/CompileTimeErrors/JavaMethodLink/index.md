---
title: JavaMethodLink
---

#### Synopsis

Cannot link to a Java method.

#### Description

Rascal functions can be implemented in Java. This is the case for many functions in the standard library.
This requires these elements:

*  An abstract Rascal function declaration (= a function header without a body).
*  The keyword `java` should be part of the function header.
*  The function declaration is annotated (uing `javaClass`) with the name of the Java class that implements this function.


This error is generated when the Java implementation cannot be found. Most likely, this is a missing or misspelled Java class name.
It is also generated when the function declaration _does_ have a body.

Remedy: Contact the Rascal developers:

*  Ask a question on StackOverflow using the [Rascal Stackoverflow Tag](http://stackoverflow.com/questions/tagged/rascal).
*  Read the currently open issues at the Rascal's https://github.com/usethesource/rascal/issues?state=open[Issue Tracker on Github]. If your problem has not yet been reported by someone else, please report it here.


If you are an expert developer and have implemented your own extension in Java, please check your own extension code first.

#### Examples

This is how the `size` function on lists is declared in the Rascal library:

```rascal-shell 
rascal>@javaClass{org.rascalmpl.library.Prelude}
>>>>>>>public java int size(list[&T] lst);
int (list[&T]): function(|prompt:///|(0,77,<1,0>,<2,35>))
```

Misspelling the class name will generate the JavaMethodLink error:

```rascal-shell ,error
rascal>@javaClass{org.rascalmpl.library.Preludexxx}
>>>>>>>public java int size(list[&T] lst);
org.rascalmpl.exceptions.JavaMethodLink: Cannot link method org.rascalmpl.library.Preludexxx because: class not found
(internal error)
	at $shell$(|main://$shell$|)

org.rascalmpl.exceptions.JavaMethodLink: Cannot link method org.rascalmpl.library.Preludexxx because: class not found
	at org.rascalmpl.interpreter.utils.JavaBridge.getJavaClassInstance(JavaBridge.java:431)
	at org.rascalmpl.interpreter.result.JavaMethod.<init>(JavaMethod.java:95)
	at org.rascalmpl.interpreter.result.JavaMethod.<init>(JavaMethod.java:52)
	at org.rascalmpl.semantics.dynamic.FunctionDeclaration$Abstract.interpret(FunctionDeclaration.java:61)
	at org.rascalmpl.semantics.dynamic.Declaration$Function.interpret(Declaration.java:117)
	at org.rascalmpl.semantics.dynamic.Command$Declaration.interpret(Command.java:38)
	at org.rascalmpl.interpreter.Evaluator.eval(Evaluator.java:1094)
	at org.rascalmpl.interpreter.Evaluator.eval(Evaluator.java:955)
	at org.rascalmpl.interpreter.Evaluator.eval(Evaluator.java:908)
	at org.rascalmpl.repl.RascalInterpreterREPL.evalStatement(RascalInterpreterREPL.java:132)
	at org.rascalmpl.repl.BaseRascalREPL.handleInput(BaseRascalREPL.java:119)
	at lang.rascal.tutor.repl.TutorCommandExecutor.eval(TutorCommandExecutor.java:110)
	at lang.rascal.tutor.repl.TutorCommandExecutorCreator.lambda$eval$2(TutorCommandExecutorCreator.java:82)
	at org.rascalmpl.values.RascalFunctionValueFactory$RascalFunctionValue.call(RascalFunctionValueFactory.java:176)
	at org.rascalmpl.interpreter.result.FunctionResultFacade.call(FunctionResultFacade.java:54)
	at org.rascalmpl.semantics.dynamic.Expression$CallOrTree.interpret(Expression.java:539)
	at org.rascalmpl.semantics.dynamic.Statement$Expression.interpret(Statement.java:365)
	at org.rascalmpl.semantics.dynamic.Statement$Assignment.interpret(Statement.java:205)
	at org.rascalmpl.semantics.dynamic.Statement$NonEmptyBlock.interpret(Statement.java:759)
	at org.rascalmpl.semantics.dynamic.Statement$For.interpret(Statement.java:468)
	at org.rascalmpl.semantics.dynamic.Statement$Return.interpret(Statement.java:782)
	at org.rascalmpl.interpreter.result.RascalFunction.runBody(RascalFunction.java:385)
	at org.rascalmpl.interpreter.result.RascalFunction.call(RascalFunction.java:326)
	at org.rascalmpl.semantics.dynamic.Expression$CallOrTree.interpret(Expression.java:539)
	at org.rascalmpl.semantics.dynamic.Expression$List.interpret(Expression.java:1510)
	at org.rascalmpl.semantics.dynamic.Statement$Expression.interpret(Statement.java:365)
	at org.rascalmpl.semantics.dynamic.Statement$Return.interpret(Statement.java:782)
	at org.rascalmpl.interpreter.result.RascalFunction.runBody(RascalFunction.java:385)
	at org.rascalmpl.interpreter.result.RascalFunction.call(RascalFunction.java:326)
	at org.rascalmpl.interpreter.result.OverloadedFunction.callWith(OverloadedFunction.java:409)
	at org.rascalmpl.interpreter.result.OverloadedFunction.call(OverloadedFunction.java:369)
	at org.rascalmpl.semantics.dynamic.Expression$CallOrTree.interpret(Expression.java:539)
	at org.rascalmpl.semantics.dynamic.Expression$List.interpret(Expression.java:1510)
	at org.rascalmpl.semantics.dynamic.Statement$Expression.interpret(Statement.java:365)
	at org.rascalmpl.semantics.dynamic.Statement$Return.interpret(Statement.java:782)
	at org.rascalmpl.interpreter.result.RascalFunction.runBody(RascalFunction.java:385)
	at org.rascalmpl.interpreter.result.RascalFunction.call(RascalFunction.java:326)
	at org.rascalmpl.interpreter.result.OverloadedFunction.callWith(OverloadedFunction.java:409)
	at org.rascalmpl.interpreter.result.OverloadedFunction.call(OverloadedFunction.java:372)
	at org.rascalmpl.semantics.dynamic.Expression$CallOrTree.interpret(Expression.java:539)
	at org.rascalmpl.semantics.dynamic.Expression$List.interpret(Expression.java:1510)
	at org.rascalmpl.semantics.dynamic.Statement$Expression.interpret(Statement.java:365)
	at org.rascalmpl.semantics.dynamic.Statement$Return.interpret(Statement.java:782)
	at org.rascalmpl.interpreter.result.RascalFunction.runBody(RascalFunction.java:385)
	at org.rascalmpl.interpreter.result.RascalFunction.call(RascalFunction.java:326)
	at org.rascalmpl.interpreter.result.OverloadedFunction.callWith(OverloadedFunction.java:409)
	at org.rascalmpl.interpreter.result.OverloadedFunction.call(OverloadedFunction.java:372)
	at org.rascalmpl.semantics.dynamic.Expression$CallOrTree.interpret(Expression.java:539)
	at org.rascalmpl.semantics.dynamic.Expression$List.interpret(Expression.java:1510)
	at org.rascalmpl.semantics.dynamic.Statement$Expression.interpret(Statement.java:365)
	at org.rascalmpl.semantics.dynamic.Statement$Return.interpret(Statement.java:782)
	at org.rascalmpl.interpreter.result.RascalFunction.runBody(RascalFunction.java:385)
	at org.rascalmpl.interpreter.result.RascalFunction.call(RascalFunction.java:326)
	at org.rascalmpl.interpreter.result.OverloadedFunction.callWith(OverloadedFunction.java:409)
	at org.rascalmpl.interpreter.result.OverloadedFunction.call(OverloadedFunction.java:369)
	at org.rascalmpl.semantics.dynamic.Expression$CallOrTree.interpret(Expression.java:539)
	at org.rascalmpl.semantics.dynamic.Expression$List.interpret(Expression.java:1510)
	at org.rascalmpl.semantics.dynamic.Statement$Expression.interpret(Statement.java:365)
	at org.rascalmpl.semantics.dynamic.Statement$Return.interpret(Statement.java:782)
	at org.rascalmpl.interpreter.result.RascalFunction.runBody(RascalFunction.java:385)
	at org.rascalmpl.interpreter.result.RascalFunction.call(RascalFunction.java:326)
	at org.rascalmpl.interpreter.result.OverloadedFunction.callWith(OverloadedFunction.java:409)
	at org.rascalmpl.interpreter.result.OverloadedFunction.call(OverloadedFunction.java:372)
	at org.rascalmpl.semantics.dynamic.Expression$CallOrTree.interpret(Expression.java:539)
	at org.rascalmpl.semantics.dynamic.Expression$List.interpret(Expression.java:1510)
	at org.rascalmpl.semantics.dynamic.Statement$Expression.interpret(Statement.java:365)
	at org.rascalmpl.semantics.dynamic.Statement$Return.interpret(Statement.java:782)
	at org.rascalmpl.interpreter.result.RascalFunction.runBody(RascalFunction.java:385)
	at org.rascalmpl.interpreter.result.RascalFunction.call(RascalFunction.java:326)
	at org.rascalmpl.interpreter.result.OverloadedFunction.callWith(OverloadedFunction.java:409)
	at org.rascalmpl.interpreter.result.OverloadedFunction.call(OverloadedFunction.java:372)
	at org.rascalmpl.semantics.dynamic.Expression$CallOrTree.interpret(Expression.java:539)
	at org.rascalmpl.semantics.dynamic.Expression$List.interpret(Expression.java:1510)
	at org.rascalmpl.semantics.dynamic.Statement$Expression.interpret(Statement.java:365)
	at org.rascalmpl.semantics.dynamic.Statement$Return.interpret(Statement.java:782)
	at org.rascalmpl.interpreter.result.RascalFunction.runBody(RascalFunction.java:385)
	at org.rascalmpl.interpreter.result.RascalFunction.call(RascalFunction.java:326)
	at org.rascalmpl.interpreter.result.OverloadedFunction.callWith(OverloadedFunction.java:409)
	at org.rascalmpl.interpreter.result.OverloadedFunction.call(OverloadedFunction.java:372)
	at org.rascalmpl.semantics.dynamic.Expression$CallOrTree.interpret(Expression.java:539)
	at org.rascalmpl.semantics.dynamic.Expression$List.interpret(Expression.java:1510)
	at org.rascalmpl.semantics.dynamic.Statement$Expression.interpret(Statement.java:365)
	at org.rascalmpl.semantics.dynamic.Statement$Return.interpret(Statement.java:782)
	at org.rascalmpl.semantics.dynamic.Statement$IfThenElse.interpret(Statement.java:679)
	at org.rascalmpl.interpreter.result.RascalFunction.runBody(RascalFunction.java:385)
	at org.rascalmpl.interpreter.result.RascalFunction.call(RascalFunction.java:326)
	at org.rascalmpl.interpreter.result.OverloadedFunction.callWith(OverloadedFunction.java:409)
	at org.rascalmpl.interpreter.result.OverloadedFunction.call(OverloadedFunction.java:369)
	at org.rascalmpl.semantics.dynamic.Expression$CallOrTree.interpret(Expression.java:539)
	at org.rascalmpl.semantics.dynamic.Expression$List.interpret(Expression.java:1510)
	at org.rascalmpl.semantics.dynamic.Statement$Expression.interpret(Statement.java:365)
	at org.rascalmpl.semantics.dynamic.Statement$Return.interpret(Statement.java:782)
	at org.rascalmpl.semantics.dynamic.Statement$IfThenElse.interpret(Statement.java:679)
	at org.rascalmpl.interpreter.result.RascalFunction.runBody(RascalFunction.java:385)
	at org.rascalmpl.interpreter.result.RascalFunction.call(RascalFunction.java:326)
	at org.rascalmpl.interpreter.result.OverloadedFunction.callWith(OverloadedFunction.java:409)
	at org.rascalmpl.interpreter.result.OverloadedFunction.call(OverloadedFunction.java:369)
	at org.rascalmpl.semantics.dynamic.Expression$CallOrTree.interpret(Expression.java:539)
	at org.rascalmpl.semantics.dynamic.Statement$Expression.interpret(Statement.java:365)
	at org.rascalmpl.semantics.dynamic.Statement$Return.interpret(Statement.java:782)
	at org.rascalmpl.semantics.dynamic.Statement$IfThenElse.interpret(Statement.java:679)
	at org.rascalmpl.interpreter.result.RascalFunction.runBody(RascalFunction.java:385)
	at org.rascalmpl.interpreter.result.RascalFunction.call(RascalFunction.java:326)
	at org.rascalmpl.interpreter.result.OverloadedFunction.callWith(OverloadedFunction.java:409)
	at org.rascalmpl.interpreter.result.OverloadedFunction.call(OverloadedFunction.java:369)
	at org.rascalmpl.semantics.dynamic.Expression$CallOrTree.interpret(Expression.java:539)
	at org.rascalmpl.semantics.dynamic.Statement$Expression.interpret(Statement.java:365)
	at org.rascalmpl.semantics.dynamic.Statement$Return.interpret(Statement.java:782)
	at org.rascalmpl.semantics.dynamic.Statement$IfThenElse.interpret(Statement.java:679)
	at org.rascalmpl.interpreter.result.RascalFunction.runBody(RascalFunction.java:385)
	at org.rascalmpl.interpreter.result.RascalFunction.call(RascalFunction.java:326)
	at org.rascalmpl.interpreter.result.OverloadedFunction.callWith(OverloadedFunction.java:409)
	at org.rascalmpl.interpreter.result.OverloadedFunction.call(OverloadedFunction.java:369)
	at org.rascalmpl.semantics.dynamic.Expression$CallOrTree.interpret(Expression.java:539)
	at org.rascalmpl.semantics.dynamic.Statement$Expression.interpret(Statement.java:365)
	at org.rascalmpl.semantics.dynamic.Statement$Return.interpret(Statement.java:782)
	at org.rascalmpl.semantics.dynamic.Statement$IfThenElse.interpret(Statement.java:679)
	at org.rascalmpl.interpreter.result.RascalFunction.runBody(RascalFunction.java:385)
	at org.rascalmpl.interpreter.result.RascalFunction.call(RascalFunction.java:326)
	at org.rascalmpl.interpreter.result.OverloadedFunction.callWith(OverloadedFunction.java:409)
	at org.rascalmpl.interpreter.result.OverloadedFunction.call(OverloadedFunction.java:369)
	at org.rascalmpl.semantics.dynamic.Expression$CallOrTree.interpret(Expression.java:539)
	at org.rascalmpl.semantics.dynamic.Statement$Expression.interpret(Statement.java:365)
	at org.rascalmpl.semantics.dynamic.Statement$Return.interpret(Statement.java:782)
	at org.rascalmpl.semantics.dynamic.Statement$IfThenElse.interpret(Statement.java:679)
	at org.rascalmpl.interpreter.result.RascalFunction.runBody(RascalFunction.java:385)
	at org.rascalmpl.interpreter.result.RascalFunction.call(RascalFunction.java:326)
	at org.rascalmpl.interpreter.result.OverloadedFunction.callWith(OverloadedFunction.java:409)
	at org.rascalmpl.interpreter.result.OverloadedFunction.call(OverloadedFunction.java:369)
	at org.rascalmpl.semantics.dynamic.Expression$CallOrTree.interpret(Expression.java:539)
	at org.rascalmpl.semantics.dynamic.Expression$List.interpret(Expression.java:1510)
	at org.rascalmpl.semantics.dynamic.Statement$Expression.interpret(Statement.java:365)
	at org.rascalmpl.semantics.dynamic.Statement$Return.interpret(Statement.java:782)
	at org.rascalmpl.semantics.dynamic.Statement$IfThenElse.interpret(Statement.java:679)
	at org.rascalmpl.interpreter.result.RascalFunction.runBody(RascalFunction.java:385)
	at org.rascalmpl.interpreter.result.RascalFunction.call(RascalFunction.java:326)
	at org.rascalmpl.interpreter.result.OverloadedFunction.callWith(OverloadedFunction.java:409)
	at org.rascalmpl.interpreter.result.OverloadedFunction.call(OverloadedFunction.java:369)
	at org.rascalmpl.semantics.dynamic.Expression$CallOrTree.interpret(Expression.java:539)
	at org.rascalmpl.semantics.dynamic.Expression$List.interpret(Expression.java:1510)
	at org.rascalmpl.semantics.dynamic.Statement$Expression.interpret(Statement.java:365)
	at org.rascalmpl.semantics.dynamic.Statement$Return.interpret(Statement.java:782)
	at org.rascalmpl.interpreter.result.RascalFunction.runBody(RascalFunction.java:385)
	at org.rascalmpl.interpreter.result.RascalFunction.call(RascalFunction.java:326)
	at org.rascalmpl.interpreter.result.OverloadedFunction.callWith(OverloadedFunction.java:409)
	at org.rascalmpl.interpreter.result.OverloadedFunction.call(OverloadedFunction.java:372)
	at org.rascalmpl.semantics.dynamic.Expression$CallOrTree.interpret(Expression.java:539)
	at org.rascalmpl.semantics.dynamic.Expression$List.interpret(Expression.java:1510)
	at org.rascalmpl.semantics.dynamic.Statement$Expression.interpret(Statement.java:365)
	at org.rascalmpl.semantics.dynamic.Statement$Return.interpret(Statement.java:782)
	at org.rascalmpl.semantics.dynamic.Statement$NonEmptyBlock.interpret(Statement.java:759)
	at org.rascalmpl.semantics.dynamic.Statement$Try.evalStatementTry(Statement.java:939)
	at org.rascalmpl.semantics.dynamic.Statement$Try.interpret(Statement.java:932)
	at org.rascalmpl.interpreter.result.RascalFunction.runBody(RascalFunction.java:385)
	at org.rascalmpl.interpreter.result.RascalFunction.call(RascalFunction.java:326)
	at org.rascalmpl.interpreter.result.OverloadedFunction.callWith(OverloadedFunction.java:409)
	at org.rascalmpl.interpreter.result.OverloadedFunction.call(OverloadedFunction.java:369)
	at org.rascalmpl.semantics.dynamic.Expression$CallOrTree.interpret(Expression.java:539)
	at org.rascalmpl.semantics.dynamic.Expression$Addition.interpret(Expression.java:141)
	at org.rascalmpl.semantics.dynamic.Statement$Expression.interpret(Statement.java:365)
	at org.rascalmpl.semantics.dynamic.Statement$Return.interpret(Statement.java:782)
	at org.rascalmpl.interpreter.result.RascalFunction.runBody(RascalFunction.java:385)
	at org.rascalmpl.interpreter.result.RascalFunction.call(RascalFunction.java:326)
	at org.rascalmpl.interpreter.result.OverloadedFunction.callWith(OverloadedFunction.java:409)
	at org.rascalmpl.interpreter.result.OverloadedFunction.call(OverloadedFunction.java:369)
	at org.rascalmpl.semantics.dynamic.Expression$CallOrTree.interpret(Expression.java:539)
	at org.rascalmpl.semantics.dynamic.Statement$Expression.interpret(Statement.java:365)
	at org.rascalmpl.semantics.dynamic.Statement$Assignment.interpret(Statement.java:205)
	at org.rascalmpl.semantics.dynamic.Statement$NonEmptyBlock.interpret(Statement.java:759)
	at org.rascalmpl.semantics.dynamic.Statement$IfThenElse.interpret(Statement.java:679)
	at org.rascalmpl.interpreter.result.RascalFunction.runBody(RascalFunction.java:385)
	at org.rascalmpl.interpreter.result.RascalFunction.call(RascalFunction.java:326)
	at org.rascalmpl.semantics.dynamic.Expression$CallOrTree.interpret(Expression.java:539)
	at org.rascalmpl.semantics.dynamic.Statement$Expression.interpret(Statement.java:365)
	at org.rascalmpl.semantics.dynamic.Statement$Return.interpret(Statement.java:782)
	at org.rascalmpl.semantics.dynamic.Statement$NonEmptyBlock.interpret(Statement.java:759)
	at org.rascalmpl.semantics.dynamic.Statement$IfThenElse.interpret(Statement.java:679)
	at org.rascalmpl.interpreter.result.RascalFunction.runBody(RascalFunction.java:385)
	at org.rascalmpl.interpreter.result.RascalFunction.call(RascalFunction.java:326)
	at org.rascalmpl.interpreter.result.OverloadedFunction.callWith(OverloadedFunction.java:409)
	at org.rascalmpl.interpreter.result.OverloadedFunction.call(OverloadedFunction.java:369)
	at org.rascalmpl.semantics.dynamic.Expression$CallOrTree.interpret(Expression.java:539)
	at org.rascalmpl.semantics.dynamic.ListComprehensionWriter.append(ListComprehensionWriter.java:26)
	at org.rascalmpl.semantics.dynamic.Comprehension.evalComprehension(Comprehension.java:95)
	at org.rascalmpl.semantics.dynamic.Comprehension$List.interpret(Comprehension.java:39)
	at org.rascalmpl.semantics.dynamic.Expression$Comprehension.interpret(Expression.java:680)
	at org.rascalmpl.semantics.dynamic.Expression$List.interpret(Expression.java:1510)
	at org.rascalmpl.semantics.dynamic.Statement$Expression.interpret(Statement.java:365)
	at org.rascalmpl.semantics.dynamic.Statement$Return.interpret(Statement.java:782)
	at org.rascalmpl.interpreter.result.RascalFunction.runBody(RascalFunction.java:385)
	at org.rascalmpl.interpreter.result.RascalFunction.call(RascalFunction.java:326)
	at org.rascalmpl.semantics.dynamic.Expression$CallOrTree.interpret(Expression.java:539)
	at org.rascalmpl.semantics.dynamic.Statement$Expression.interpret(Statement.java:365)
	at org.rascalmpl.semantics.dynamic.Statement$Return.interpret(Statement.java:782)
	at org.rascalmpl.interpreter.result.RascalFunction.runBody(RascalFunction.java:385)
	at org.rascalmpl.interpreter.result.RascalFunction.call(RascalFunction.java:326)
	at org.rascalmpl.semantics.dynamic.Expression$CallOrTree.interpret(Expression.java:539)
	at org.rascalmpl.semantics.dynamic.ListComprehensionWriter.append(ListComprehensionWriter.java:26)
	at org.rascalmpl.semantics.dynamic.Comprehension.evalComprehension(Comprehension.java:95)
	at org.rascalmpl.semantics.dynamic.Comprehension$List.interpret(Comprehension.java:39)
	at org.rascalmpl.semantics.dynamic.Expression$Comprehension.interpret(Expression.java:680)
	at org.rascalmpl.semantics.dynamic.Statement$Expression.interpret(Statement.java:365)
	at org.rascalmpl.semantics.dynamic.Statement$Return.interpret(Statement.java:782)
	at org.rascalmpl.interpreter.result.RascalFunction.runBody(RascalFunction.java:385)
	at org.rascalmpl.interpreter.result.RascalFunction.call(RascalFunction.java:326)
	at org.rascalmpl.interpreter.result.OverloadedFunction.callWith(OverloadedFunction.java:409)
	at org.rascalmpl.interpreter.result.OverloadedFunction.call(OverloadedFunction.java:369)
	at org.rascalmpl.interpreter.result.OverloadedFunction.call(OverloadedFunction.java:360)
	at org.rascalmpl.interpreter.Evaluator.call(Evaluator.java:743)
	at org.rascalmpl.interpreter.Evaluator.call(Evaluator.java:726)
	at org.rascalmpl.interpreter.Evaluator.call(Evaluator.java:532)
	at org.rascalmpl.interpreter.Evaluator.call(Evaluator.java:489)
	at org.rascalmpl.maven.CompileRascalDocumentation.runCompiler(CompileRascalDocumentation.java:180)
	at org.rascalmpl.maven.CompileRascalDocumentation.execute(CompileRascalDocumentation.java:123)
	at org.apache.maven.plugin.DefaultBuildPluginManager.executeMojo(DefaultBuildPluginManager.java:137)
	at org.apache.maven.lifecycle.internal.MojoExecutor.doExecute(MojoExecutor.java:301)
	at org.apache.maven.lifecycle.internal.MojoExecutor.execute(MojoExecutor.java:211)
	at org.apache.maven.lifecycle.internal.MojoExecutor.execute(MojoExecutor.java:165)
	at org.apache.maven.lifecycle.internal.MojoExecutor.execute(MojoExecutor.java:157)
	at org.apache.maven.lifecycle.internal.LifecycleModuleBuilder.buildProject(LifecycleModuleBuilder.java:121)
	at org.apache.maven.lifecycle.internal.LifecycleModuleBuilder.buildProject(LifecycleModuleBuilder.java:81)
	at org.apache.maven.lifecycle.internal.builder.singlethreaded.SingleThreadedBuilder.build(SingleThreadedBuilder.java:56)
	at org.apache.maven.lifecycle.internal.LifecycleStarter.execute(LifecycleStarter.java:127)
	at org.apache.maven.DefaultMaven.doExecute(DefaultMaven.java:294)
	at org.apache.maven.DefaultMaven.doExecute(DefaultMaven.java:192)
	at org.apache.maven.DefaultMaven.execute(DefaultMaven.java:105)
	at org.apache.maven.cli.MavenCli.execute(MavenCli.java:960)
	at org.apache.maven.cli.MavenCli.doMain(MavenCli.java:293)
	at org.apache.maven.cli.MavenCli.main(MavenCli.java:196)
	at java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)
	at java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)
	at java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
	at java.base/java.lang.reflect.Method.invoke(Method.java:566)
	at org.codehaus.plexus.classworlds.launcher.Launcher.launchEnhanced(Launcher.java:282)
	at org.codehaus.plexus.classworlds.launcher.Launcher.launch(Launcher.java:225)
	at org.codehaus.plexus.classworlds.launcher.Launcher.mainWithExitCode(Launcher.java:406)
	at org.codehaus.plexus.classworlds.launcher.Launcher.main(Launcher.java:347)
ok
```
The same error message is generated if the function declaration contains a body:

```rascal-shell ,error
rascal>@javaClass{org.rascalmpl.library.Preludexxx}
>>>>>>>public java int size(list[&T] lst){
>>>>>>>  return 0;
>>>>>>>}
|prompt:///|(0,94,<1,0>,<4,1>): Java function has a body
Advice: |http://tutor.rascal-mpl.org/Errors/Static/NonAbstractJavaFunction/NonAbstractJavaFunction.html|
ok
```




