---
title: "module Message"
---

#### Usage

`import Message;`


#### Synopsis

A `Message` datatype that represents messages in the IDE.

#### Types

```rascal
data Message = error(str msg, loc at)
             | warning(str msg, loc at)
             | info(str msg, loc at);
```



#### Description

Messages can be used to communicate information about source texts.
They can be interpreted by IDEs to display type errors and warnings, etc.
`Message` s are, for instance, used as annotations of
[algebraic data type][AlgebraicDataType](../Rascal/Declarations/AlgebraicDataType).
A very common example is to annotate parse trees with messages.


#### Benefits

.Pitfalls


