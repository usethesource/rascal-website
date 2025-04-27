---
title: RAP 9 - Events -  a simple unified intermediate format for exceptions, errors, asserts, test results and Java stack traces
---

| RAP | 9 |
| :---- | :---- |
| Title | Events - a simple unified intermediate format for exceptions, errors, asserts, test results and Java stack traces |
| Author | Jurgen Vinju  |
| Status | Draft |
| Type | Rascal Language |

## Abstract

Proposal to merge the (open-ended) data-types for Rascal exceptions, Java exceptions,  error messages, assert failures and test results into a single common representation. 

The representation features a cause tree, source locations, context parameters and user-friendly messages. This new representation can be used to \`throw\` exceptions, collect static error messages and warnings, and report on test results. All in the same unified manner. 

Different back-end tools can be reused based on this shared representation, such as UI (error panes, highlights, stack traces) and analysis (root cause analysis, statistical debugging).

## Motivation

Exceptions are modeled as values in Rascal. In the standard library we have a common data-type called \`RuntimeException\` for them. A special kind of exception is reserved for assertion failures. Then we have \`Message\` to represent errors (info, warning, error, fatal), and we have test results (hidden inside the quick check feature). Finally normal Java exceptions also play an important role in our runtime which are now all mapped to the \`Java(str message)\` Exception constructor.

These formats all share characteristics:

* They are an intermediate representation between some thing that happened and its reporting in the UI;  
* They each require user reporting, causal tracing and analysis;  
* They are all \`open\` ended, in the sense that many types of exceptions, errors and test results will exist which can not be thought of in advance.

In the interest of simplicity and reuse (of representation, of analysis and of UI components), we can unify these representations into a single data-type. This will remove unnecessary code from different kinds of tools and enable newbies to start off with something that has everything they needed before they even thought of it.

## Specification

data Severity \= info() | warning() | error() | fatal();

@synopsis{An event is something to throw or report which has a severity, a source location, a cause, and a user-friendly message. Events kinds are modelled using an open-ended set of constructors of the data-type Event}  
data Event(  
  Severity severity \= info(),   
  loc src \= |unknown:|,   
  Event cause \= root(),   
  str message \= “”  
);

@synopsis{Events can be composed using boolean logic to explain their causes}  
data Event   
  \= and(list\[Event\] causes) // all these causes are required to produce the event  
  | or(list\[Event\] causes)  // either one of these caused were required  
  | root()                  // this is the root cause of the event  
  | not(Event cause)        // the absence of this event caused the event  
  ;

// for the above it could be interesting to generate messages which compose   
// the messages of the constituent causes. Elided here for the sake of brevity.

@synopsis{Events to model stack traces}  
data Event   
  \= methodCall(str class, str name, severity=info())  
  | functionCall(str module, str name, severity=info())  
  | mainCall(str class)  
  | staticInit(str class)  
  ;

@synopsis{Events to model test results and assertion results, with their causes.}  
data Event   
  \= testFailure(str name, map\[str, value\] parameters, Severity severity=error())  
  | testSuccess(str name, map\[str, value\] parameters, Severity severity=info())  
  | assertFailed(Severity severity=error())  
  | assertSucceeded(Severity severity=info())  
  | expectedEqual(value lhs, value rhs)  
  | expectedUnequal(value lhs, value rhs)  
  | expectedMatch(value lhs, value rhs)  
  | expectedNoMatch(value lhs, value rhs)  
  ;

@synopsis{Events to model static errors and warnings}  
data Event  
  \= unexpectedType(Type got, Type expected, Severity severity=error())  
  | undeclaredName(str name, Severity=error())  
  ; /\* etc \*/

@synopsis{Events to model run-time errors}  
data Event  
  \= matchFailed(Severity severity=warning())  
  | divisionByZero(Severity severity=error())  
  | permissionDenied(Severity severity=error())  
  ; /\* etc \*/

1. a “stack trace” is modeled via the “cause” of an event.   
   1. The \`throw\` statement, when confronted with an expression of sub-type \`node\`, will re-ify the stack by adding to the\`causes\` field to the element \`functionCall(...)\` that is the current function with its current parameters.   
      1. If the Event thrown already has user-defined causes, then these are kept as conjunctive causes. For example if the current throw is part of a catch block, the programmer might link the caught Event into the current Event by setting: \`catch Event caughtEvent: { throw newEvent(cause=caughtEvent\`); }\`  
   2. Every functionCall on the causes chain has its own singleton cause, namely its own caller.  
   3. \`throw\` will also generate the \`src\` location of itself into the Event, and also annotate functionCall and methodCall values with this information where possible.  
   4. the causes of test failure may be the \`expected\*\` events or an exception thrown during the execution of the test, or both.   
2. static error messages may be caused by observations or inferences from the source code rather than run-time events.  
   1. The Event data-type may wrap arbitrary complex symbols to represent the results of name and type analysis which are relevant to explain an error message.  
   2. The \`not\` event can be used that some errors are caused by the absence of something rather than the presence. For example: \`not(subTypeOf(x, y))\` explains that an error is caused by a required event (x being a subtype of y) has not happened.  
   3. Errors may also be linked in this way, and repeated errors can be cleaned up if they are caused by other errors, to prevent spamming the user. This clean up can be done generically based on a list of Event’s rather than the checker having to manage these dependencies explicitly. All the checker has to do is to record meticulously what causes every error.   
3. The standard attributes of \`Events\` can be produced by automatically \`throw\` but also programmatically provided (e.g. by a type checker or test runner). This makes no difference for the downstream processing of Events.  
4. We have to rewrite all existing Messages, Exceptions and test result representations  
   1. Declarations in Message, Exception  
   2. Representations in QuickCheck   
5. Java exceptions are modeled as constructors of Event as well. If not known in advance they are declared and generated at run-time using Java reflection.  
   1. the name of the event constructor being the simple name of the Java Throwable class: e.getClass().getSimpleName().  
   2. the message set to \`e.getMessage()\`  
   3. the causes set to top of the stack-trace, recursively to be represented by \`methodCall\` Event constructors  
   4. The Java \`getCause()\` if not \`null\` is a conjunctive cause of the top exception, so if that exists a Java exception will have both a stacktrace of its own, and another exception as causes.

## Examples

data Event \= insufficientGiniDatapoints(str message=”The Gini coefficient requires at least three datapoints to make sense”); // default keyword parameter links event kind to user-friendly message

int giniCoefficient(list\[num\] data) {  
  if (size(data) \<= 2\)  
    throw insufficientGiniDatapoints(); // throw fills in causality (trace, location)  
  …  
}

data Event \= failedTodo(str title, str message=”the task \<title\> failed to complete”);

void process(list\[TODO\] x) {  
   for (t \<- todo) {  
     try {  
       t.task();  
     }  
     catch Event e : {  
       throw failedTodo(t.title, causes=\[e\]); // link the cause and the stack trace  
     }  
   }  
}  

data Event \= unexpectedType(str exp, Type actual, Type expected, Severity=error(), str message=”\<exp\> requires parameters of type \<expected\>, but we have a \<actual\> here.” );  
list\[Event\] typecheck(Program p) \= \[\*check(ast) | /Expression ast := p\];  
list\[Event\] check(add(Exp l, Exp r)) \= \[unexpectedType(“addition”, l.type, \\int(), src=l.src\]   
  when l.type \!= int();   
default list\[Event\] check(Expression e) \= \[\];

## Backwards Compatibility

1. Code which used produced the Message datatype or threw exceptions of the \`Exception\` data-type will have to be reviewed and modified  
   1. TypePal will need to be adapted to generate Events rather than Messages  
   2. We have to move user-friendly messages to the declaration sites of error kinds.  
2. UI facing components, such as Eclipse support and LSP support will have to be adapted.  
3. The test runners will need to be extended to report in this style. This is a new feature with no backward compatibility issues.

## Implementation

* Code generated for the throw statement needs changing  
* Code generated for \`java\` methods needs to be wrapped with a try-catch, such that the stack trace can be reified as \`methodCall\` events, and the exception can be modeled as a new constructor of Event using reflection. E.g:  
  * catch	(Throwable e) {  
  *   C \= tf.constructor(Event, e.getClass().getSimpleName());  
  *   throw vf.constructor(C).setParameter(“causes”, …);  
  * }  
* Reifing the stack trace as Event::methodCall and Event::functionCall IConstructors may be quite an expensive operation.   
  * It could be worth the trouble to implement IConstructor again especially for these two constructors, and let them wrap a JVM exception trace for on-demand reification.  
  * And lazily produce the next wrapper for their \`causes\` on request (i.e. lazily implementing \`getParamer\` or \`getField\`)  
  * Possibly a generic \`*LazyConstructor* class *implements* *IConstructor\`* could be added to Vallang which would take Producer\<IValue\> as constructor parameters rather than IValues directly, and a \`*LazyKeywordParameterWrapper implements IWithKeywordParameters\`*, likewise would take Producer\<IValue\> lambda’s.   
* There is no way I know of to retrieve method parameter values from Java stack traces; except:  
  * [https://github.com/cretz/stackparam](https://github.com/cretz/stackparam)  
* Java 10 came with a new stack trace API:  
  * [https://docs.oracle.com/javase/10/docs/api/java/lang/StackWalker.html](https://docs.oracle.com/javase/10/docs/api/java/lang/StackWalker.html)  
* Displaying stack traces:  
  * The REPL would print the stack trace in a traditional manner rather than showing the actual value of the stack trace  
    

## 
