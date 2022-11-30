---
title: String Template
---

#### Synopsis

Using string templates to generate code.

#### Description

Many websites and code generators use template-based code generation. They start from a text template that contains embedded variables and code. The template is "executed" by replacing the embedded variables and code by their string value. Languages like PHP and Ruby are popular for this feature. Let's see how we can do this in Rascal. 

Rascal provides string templates that rival what is provided in
[Ruby](http://www.ruby-doc.org/stdlib/libdoc/erb/rdoc/ERB.html), [PHP](http://www.php.net/) or [ANTLR](http://www.stringtemplate.org/).
They are fully described in [string values](../../../Rascal/Expressions/Values/String/index.md).

#### Examples

The problem we want to solve is as follows: 
given a number of fields (with a name and a type)
how can we generate a Java class with getters and setters for those fields?

Here is a solution:

```rascal 

module demo::common::StringTemplate

import String;
import List;


str capitalize(str s) = "<toUpperCase(s[0])><s[1..]>";
  

private str genSetter(map[str,str] fields, str x) {
  return "public void set<capitalize(x)>(<fields[x]> <x>) {
         '  this.<x> = <x>;
         '}";
}


private str genGetter(map[str,str] fields, str x) {
  return "public <fields[x]> get<capitalize(x)>() {
         '  return <x>;
         '}";
}


str genClass(str name, map[str,str] fields) {      ❷  
  return 
    "public class <name> {
    '  <for (x <- sort([f | f <- fields])) {>
    '  private <fields[x]> <x>;
    '  <genSetter(fields, x)>
    '  <genGetter(fields, x)><}>
    '}";
}

map[str, str] fields = (
     "name" : "String",
     "age" : "Integer",
     "address" : "String"
  );
  
str cperson = 
  // Do not change a single space in the string below! (for testing purposes)
  "public class Person {
    '  
    '  private String address;
    '  public void setAddress(String address) {
    '    this.address = address;
    '  }
    '  public String getAddress() {
    '    return address;
    '  }
    '  private Integer age;
    '  public void setAge(Integer age) {
    '    this.age = age;
    '  }
    '  public Integer getAge() {
    '    return age;
    '  }
    '  private String name;
    '  public void setName(String name) {
    '    this.name = name;
    '  }
    '  public String getName() {
    '    return name;
    '  }
    '}";

```

                
* ❶  An auxiliary function `capitalize` is defined to capitalize the first character of a string.

* ❷  Here is the heavy lifting done: `genClass` is defined that takes as arguments:

*  The `name` of the class, and
*  A map `fields` that associates field names with their type (both string values).


Function `genClass` returns a string that contains several _string interpolations_ delimited by `<` and `>`.
Let's discuss some of them:

*  In each line, only the text following `'` is contributed to the output. The text before (and including) `'` can be used to properly indent
   the string.
*  The output of each interpolated call, like to `genMethod` is auto-indented.
*  `public class <name>`: inserts the desired class name in the result.
*  `<for x<-fields){>` ... `<}>`: loops over the fields and contributes the text produced by its body to the result.
*  `private <fields[x]> <x>;`: finds for the current field `x` its type and produces an appropriate private field declaration.
*  `public void set<capitalize(x)>(<fields[x]> <x>)`: method header for the setter for field `x`.

Let's see how this works out on actual data:

```rascal-shell 
rascal>import demo::common::StringTemplate;
ok
rascal>import IO;
ok
rascal>fields = (
>>>>>>>     "name" : "String",
>>>>>>>     "age" : "Integer",
>>>>>>>     "address" : "String"
>>>>>>>  );
map[str, str]: ("name":"String","address":"String","age":"Integer")
rascal>println(genClass("Person", fields));
public class Person {
  
  private String address;
  public void setAddress(String address) {
    this.address = address;
  }
  public String getAddress() {
    return address;
  }
  private Integer age;
  public void setAge(Integer age) {
    this.age = age;
  }
  public Integer getAge() {
    return age;
  }
  private String name;
  public void setName(String name) {
    this.name = name;
  }
  public String getName() {
    return name;
  }
}
ok
```

#### Benefits

*  String templates are ideal to generate arbitrary output. In particular, no grammar is needed to describe this output.
*  Auto-indent helps to be able to compose templates from reusable parts.

#### Pitfalls

*  Since no grammar is used to control output, errors in generated code can only be detected by a downstream processor such as a compiler for the generated code.

*  In more complex cases, it can be better to introduce an abstract datatype to represent the desired code and to use string templates to
produce the actual textual representation of that code.


