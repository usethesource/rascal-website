"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[36777],{3905:(e,a,t)=>{t.d(a,{Zo:()=>m,kt:()=>d});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),p=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},m=function(e){var a=p(e.components);return n.createElement(s.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=p(t),d=r,h=c["".concat(s,".").concat(d)]||c[d]||u[d]||i;return t?n.createElement(h,l(l({ref:a},m),{},{components:t})):n.createElement(h,l({ref:a},m))}));function d(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=c;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=t[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},75423:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=t(83117),r=(t(67294),t(3905));const i={title:"What is ValLang?",authors:["jvinju"]},l=void 0,o={permalink:"/blog/2017/03/01/what-is-vallang",editUrl:"https://github.com/usethesource/rascal-website/tree/website-v2/blog/blog/2017-03-01-what-is-vallang.md",source:"@site/blog/2017-03-01-what-is-vallang.md",title:"What is ValLang?",description:"Vallang () is a highly integrated and mostly-closed collection of mutually recursive fundamental data-types on the Java Virtual Machine:",date:"2017-03-01T00:00:00.000Z",formattedDate:"March 1, 2017",tags:[],readingTime:11.365,hasTruncateMarker:!1,authors:[{name:"Jurgen Vinju",title:"Groupleader @ CWI-SWAT, professor @ TU/E, Rascal Core Team",url:"http://homepages.cwi.nl/~jurgenv",imageURL:"https://www.cwi.nl/news/2014/jurgen-vinju-appointed-professor/@@images/5e1fe43d-a00b-4989-a5b9-eb526725c6ee.jpeg",key:"jvinju"}],frontMatter:{title:"What is ValLang?",authors:["jvinju"]},nextItem:{title:"Navigating the WordPress Plugin Landscape",permalink:"/blog/2016/05/16/navigating-the-wordpress-plugin-landscape"}},s={authorsImageUrls:[void 0]},p=[{value:"Why does Vallang exist?",id:"why-does-vallang-exist",level:2},{value:"What are the main design considerations of Vallang?",id:"what-are-the-main-design-considerations-of-vallang",level:2},{value:"Vallang values are symbolic and immutable.",id:"vallang-values-are-symbolic-and-immutable",level:4},{value:"Vallang values are generated via the AbstractFactory design pattern and do not leak implementation representations",id:"vallang-values-are-generated-via-the-abstractfactory-design-pattern-and-do-not-leak-implementation-representations",level:4},{value:"Vallang values uniquely deserialize/serialize from/to a standard and simple expression language",id:"vallang-values-uniquely-deserializeserialize-fromto-a-standard-and-simple-expression-language",level:4},{value:"Vallang values always know their most-precise concrete ad-hoc run-time type",id:"vallang-values-always-know-their-most-precise-concrete-ad-hoc-run-time-type",level:4},{value:"Vallang values include both trees and relations",id:"vallang-values-include-both-trees-and-relations",level:4},{value:"Who contributed to Vallang?",id:"who-contributed-to-vallang",level:2},{value:"What is in the near future for Vallang?",id:"what-is-in-the-near-future-for-vallang",level:2}],m={toc:p};function u(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Vallang")," (",(0,r.kt)("a",{parentName:"p",href:"https://github.com/usethesource/vallang"},"https://github.com/usethesource/vallang"),") is a highly integrated and mostly-closed collection of mutually recursive fundamental data-types on the Java Virtual Machine:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"locations represented by URIs: ",(0,r.kt)("inlineCode",{parentName:"li"},"|java+class://java/lang/String|")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"|file:///tmp/HelloWorld.java|")),(0,r.kt)("li",{parentName:"ul"},"integers of arbitrary size: ",(0,r.kt)("inlineCode",{parentName:"li"},"1,2,3, 134812345123841234")),(0,r.kt)("li",{parentName:"ul"},"reals of arbitrary size, precision and scale: ",(0,r.kt)("inlineCode",{parentName:"li"},"1., 1.0, 1e10")),(0,r.kt)("li",{parentName:"ul"},"rational numbers: ",(0,r.kt)("inlineCode",{parentName:"li"},"1r1, 1r7")),(0,r.kt)("li",{parentName:"ul"},"unicode strings: ",(0,r.kt)("inlineCode",{parentName:"li"},'"hello \ud83c\udf10"')),(0,r.kt)("li",{parentName:"ul"},"lists: ",(0,r.kt)("inlineCode",{parentName:"li"},'[1,2, 1.0, "hello \ud83c\udf10"]'),", ",(0,r.kt)("inlineCode",{parentName:"li"},"[]")),(0,r.kt)("li",{parentName:"ul"},"sets: ",(0,r.kt)("inlineCode",{parentName:"li"},'{1,2, 1.0, "hello \ud83c\udf10"}'),", ",(0,r.kt)("inlineCode",{parentName:"li"},"{}")),(0,r.kt)("li",{parentName:"ul"},"maps: ",(0,r.kt)("inlineCode",{parentName:"li"},'(1:0, "a":"b")'),", ",(0,r.kt)("inlineCode",{parentName:"li"},"()")),(0,r.kt)("li",{parentName:"ul"},"n-ary tuples with named fields: ",(0,r.kt)("inlineCode",{parentName:"li"},'<1,2,"a",1.0>'),", ",(0,r.kt)("inlineCode",{parentName:"li"},"<>")),(0,r.kt)("li",{parentName:"ul"},"n-ary relations (represented as sets of n-ary tuples): ",(0,r.kt)("inlineCode",{parentName:"li"},'{<1,2,"a",1.0>, <>}')),(0,r.kt)("li",{parentName:"ul"},"tree nodes: ",(0,r.kt)("inlineCode",{parentName:"li"},'"myNode"(1,2,3)')),(0,r.kt)("li",{parentName:"ul"},"many-sorted algebraic terms, acting as typed tree nodes: ",(0,r.kt)("inlineCode",{parentName:"li"},"myNode(1,2,3)"),"."),(0,r.kt)("li",{parentName:"ul"},"keyword fields or properties to tree nodes and algebraic data-types: ",(0,r.kt)("inlineCode",{parentName:"li"},'"myNode"(name="Winston")'),", ",(0,r.kt)("inlineCode",{parentName:"li"},"myNode(age=12)"))),(0,r.kt)("p",null,"Operations on these data-types are too many to list here. A selection is listed below, but you should expect the features to be pretty low level; i.e. directly accessing and manipulating the data rather than providing analysis algorithms. Algorithms in the library are added only if programming them below the abstraction layer of ",(0,r.kt)("strong",{parentName:"p"},"vallang")," provides a major efficiency benefit or it can factors out highly common client code into a reusable feature. More on this design decision later. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"relational calculus operators such as transitive (reflexive) closure, query and projections, compositions and joins"),(0,r.kt)("li",{parentName:"ul"},"generic tree traversal and primitives for implementing pattern matching")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Vallang")," has a type system based on type systems in functional programming, but note that each value has a most specific dynamic type associated always at run-time. More on the design of the type system below, but here is a list of ",(0,r.kt)("strong",{parentName:"p"},"vallang")," types:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"void")," - the bottom type with no values"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"value")," - the top type for all values"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"loc")," - the type for URI locations"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"int"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"real"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"rat")," are all sub-types of the aggregate type ",(0,r.kt)("inlineCode",{parentName:"li"},"num")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"tuple[t1,...,tn]")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"tuple[t1 l1, ..., tn ln]")," to represent tuples of fixed but arbitrary arity"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"list[t]"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"set[t]"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"map[t1,t2]")," as incomparable alternative collection types."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"node")," for trees"),(0,r.kt)("li",{parentName:"ul"},"user-defined many-sorted mutually recursive algebraic data-types, acting as grammars for instances of tree nodes: ",(0,r.kt)("inlineCode",{parentName:"li"},"data MyADT = myNode(int a, int b, int c, int age=...)")),(0,r.kt)("li",{parentName:"ul"},"alias types for short-handed type equivalences"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"rel[t1, ..., tn]")," is an alias for ",(0,r.kt)("inlineCode",{parentName:"li"},"set[tuple[t1,...tn]]")),(0,r.kt)("li",{parentName:"ul"},"open type parameters with upper bounds, ",(0,r.kt)("inlineCode",{parentName:"li"},"&T <: node"),", can be used to type parameterize composite types (used in type aliases) and to construct higher-order abstract algebraic datatypes.")),(0,r.kt)("p",null,"Sub-typing is ",(0,r.kt)("em",{parentName:"p"},"co-variant")," for the container types ",(0,r.kt)("inlineCode",{parentName:"p"},"list"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"map"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"set")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"tuple"),". Otherwise these rules define the entire type system:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"value")," is a strict supertype of all other types other than itself"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"node")," is the common supertype of all algebraic data-types"),(0,r.kt)("li",{parentName:"ul"},"each algebraic constructor is a strict sub-type of its abstract sort"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"void")," is the sub-type of all types"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"num")," is the supertype of ",(0,r.kt)("inlineCode",{parentName:"li"},"rat"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"int")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"real")),(0,r.kt)("li",{parentName:"ul"},"an alias ",(0,r.kt)("inlineCode",{parentName:"li"},"alias X = Y")," is a type equivalence"),(0,r.kt)("li",{parentName:"ul"},"constructor types are sub-types if they have the same name and arity, and they are comparable in their argument types. ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Within a single abstract sort no two alternative constructors may be sub-types of each other. ")))),(0,r.kt)("p",null,"There exists an extension mechanism for adding type kinds and their associated value kinds to the ",(0,r.kt)("strong",{parentName:"p"},"vallang")," system. Rascal, for example, uses this to represent functions and co-routines at run-time. The extension mechanism works by declaring a bi-directional transformation between the extensions and a symbolic representation of choice (chosen freely from the core representation mechanisms of ",(0,r.kt)("strong",{parentName:"p"},"vallang"),"). This bidirectional mapping is mostly used when serializing and deserializing values (see below)."),(0,r.kt)("p",null,"The types of ",(0,r.kt)("strong",{parentName:"p"},"vallang")," in Java are represented by a Composite design pattern with maximally shared instances of (the otherwise opaque) abstract class ",(0,r.kt)("inlineCode",{parentName:"p"},"Type"),". These types expose fast implementations of sub-type and type equivalence for implementing fast pattern matching. "),(0,r.kt)("p",null,"The values of ",(0,r.kt)("strong",{parentName:"p"},"vallang")," are all instances of ",(0,r.kt)("inlineCode",{parentName:"p"},"IValue")," and sub-interfaces thereof. For every kind of value there is an interface, e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"ISet"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"IList"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ITuple")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"IConstructor")," but they are not type-parametrized because Java's type system can not represent the aforementioned co-variant sub-typing rules we require. "),(0,r.kt)("h2",{id:"why-does-vallang-exist"},"Why does Vallang exist?"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"vallang")," is a ",(0,r.kt)("a",{parentName:"p",href:"http://www.usethesource.io"},"UseTheSource")," project recently renamed from ",(0,r.kt)("strong",{parentName:"p"},"rascal-values"),", which was known earlier as ",(0,r.kt)("strong",{parentName:"p"},"pdb.values"),". "),(0,r.kt)("p",null,"The project started as a part of the ",(0,r.kt)("a",{parentName:"p",href:"http://homepages.cwi.nl/~jurgenv/papers/OOPSLA-2009.pdf"},"IDE metatooling platform")," in 2007 as a ",(0,r.kt)("em",{parentName:"p"},"generic library for representing symbolic facts about source code"),", for use in the construction of IDE services in Eclipse, then it continued to form the basis of the run-time system for ",(0,r.kt)("a",{parentName:"p",href:"http://www.rascal-mpl.org"},"Rascal")," starting 2009, and finally was renamed to ",(0,r.kt)("strong",{parentName:"p"},"vallang")," to serve a wider scope."),(0,r.kt)("p",null,"We designed of ",(0,r.kt)("strong",{parentName:"p"},"vallang")," based on experience with and studying the ",(0,r.kt)("a",{parentName:"p",href:"http://www.meta-environment.org/Meta-Environment/ATerms.html"},"ATerm library")," and ",(0,r.kt)("a",{parentName:"p",href:"http://www.meta-environment.org/Meta-Environment/WebHome.html"},"ASF+SDF"),", but also by learning from RSF (Rigi Standard Format), Rscript and GXL and S-expressions. Perhaps JSON and YAML have also had a minor influence."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The main purpose of ",(0,r.kt)("strong",{parentName:"p"},"vallang")," is to provide a flexible and fully typed collection of ",(0,r.kt)("em",{parentName:"p"},"symbolic"),' representations of data, specifically "ready" to represent facts about software systems but amenable to basically any form of symbolic data analysis purposes.')),(0,r.kt)("p",null,"This purpose aligns with the mission of the ",(0,r.kt)("a",{parentName:"p",href:"http://www.rascalmpl.org"},"Rascal metaprogramming language")," which is made to ",(0,r.kt)("em",{parentName:"p"},"analyze")," and ",(0,r.kt)("em",{parentName:"p"},"manipulate")," exactly such symbolic representations. Therefore ",(0,r.kt)("strong",{parentName:"p"},"vallang")," is the run-time environment for both interpreted and compiled Rascal programs. "),(0,r.kt)("p",null,"Note that while ",(0,r.kt)("strong",{parentName:"p"},"vallang")," is a great fit for symbolic data analysis, it is currently not the best fit for numerical data analysis as it features only a uniform symbolic represetation of numbers of arbitrary precision and size (ints, reals, rationals). In other words, the numbers and collections of numbers in ",(0,r.kt)("strong",{parentName:"p"},"vallang")," are optimized for storage size, clarity and equational reasoning rather than optimal computational efficiency. This also means that indirect numerical encodings of data (i.e. using numerical vectors and matrices), which are often used in symbolic analyses to optimize computational efficiency are not the right strategy when using ",(0,r.kt)("strong",{parentName:"p"},"vallang"),": it's better to stick with a more direct symbolic representation and let ",(0,r.kt)("strong",{parentName:"p"},"vallang")," maintainers optimize them. "),(0,r.kt)("p",null,"Next to the maintainers of Rascal, the main users of ",(0,r.kt)("strong",{parentName:"p"},"vallang")," are currently programmers who write data acquisition and (de)serialisation adapters for the Rascal ecosystem:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"connecting open-compiler front-ends to Rascal"),(0,r.kt)("li",{parentName:"ul"},"providing external data-sources such as SQL and MongoDB databases"),(0,r.kt)("li",{parentName:"ul"},"connecting reusable interaction and visualization front-ends to Rascal")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Nevertheless ",(0,r.kt)("strong",{parentName:"p"},"vallang")," is a generic and Rascal-independent library which may serve as the run-time system for other programming languages or analysis systems, such as term rewriting systems, relational calculus systems, constraint solvers, model checkers, model transformations, etc.")),(0,r.kt)("p",null,"The latter perspective is the reason for the re-branding of ",(0,r.kt)("strong",{parentName:"p"},"rascal-values")," to ",(0,r.kt)("strong",{parentName:"p"},"vallang"),". You might consider ",(0,r.kt)("strong",{parentName:"p"},"vallang")," as a functional replacement for ECore, an alternative to the ATerm library on the JVM, or an alternative to JSON-based noSQL in-memory database systems, or a way of implementing graph databases. "),(0,r.kt)("p",null,"Finally, ",(0,r.kt)("strong",{parentName:"p"},"vallang")," is a JVM library because that is where we needed it for Rascal and the Eclipse IDE Metatooling Platform. We hope other JVM programmers will also benefit from it and we have no plans of porting it at the moment to any other technological space. "),(0,r.kt)("h2",{id:"what-are-the-main-design-considerations-of-vallang"},"What are the main design considerations of Vallang?"),(0,r.kt)("h4",{id:"vallang-values-are-symbolic-and-immutable"},"Vallang values are symbolic and immutable."),(0,r.kt)("p",null,"We think software analysis is complex enough to be confusing to even the most experienced programmers. Manipulating huge stores of hierarchical and relational data about softwar easily goes wrong; trivial bugs due to aliasing and sharing data between different stages of an analysis or transformation can take weeks to resolve, or worse: will never even be diagnosed. "),(0,r.kt)("p",null,"Since our goal is to provide many more variants of all kind of software analyses, we wish to focus on the interesting algorithmic details rather than the trivial mistakes we make. Therefore, ",(0,r.kt)("strong",{parentName:"p"},"vallang")," values are ",(0,r.kt)("em",{parentName:"p"},"immutable"),". Sharing of values or parts of values is allowed under-the-hood but is not observable. The library is implemented using persistent and/or maximally shared data structures for reasons of efficiency. "),(0,r.kt)("p",null,"Users of ",(0,r.kt)("strong",{parentName:"p"},"vallang")," freely share references to their data to other parts of an analysis because they know the data can not change due to an unforeseen interaction. We also believe that the immutable values can be shared freely between threads on the JVM, but there are not enough tests yet to make such a bold claim with full confidence. "),(0,r.kt)("h4",{id:"vallang-values-are-generated-via-the-abstractfactory-design-pattern-and-do-not-leak-implementation-representations"},"Vallang values are generated via the AbstractFactory design pattern and do not leak implementation representations"),(0,r.kt)("p",null,"The reason is that client code ",(0,r.kt)("em",{parentName:"p"},"must")," abstract from the implementation details to arrive at the mathematical precision of symbolic reasoning which ",(0,r.kt)("strong",{parentName:"p"},"vallang")," should provide."),(0,r.kt)("p",null,"This also serves a maintenance and evolution purpose for implementations of the library. We can plug in a new implementation of the library without affecting client code."),(0,r.kt)("p",null,"Note that for efficiency reasons values produced from different implementations of an abstract value factory (different implementations of ",(0,r.kt)("inlineCode",{parentName:"p"},"IValueFactory"),") are not required to interact correctly."),(0,r.kt)("h4",{id:"vallang-values-uniquely-deserializeserialize-fromto-a-standard-and-simple-expression-language"},"Vallang values uniquely deserialize/serialize from/to a standard and simple expression language"),(0,r.kt)("p",null,"The general rule is that for any two JVM object reference ",(0,r.kt)("inlineCode",{parentName:"p"},"o")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"p")," to any ",(0,r.kt)("strong",{parentName:"p"},"vallang")," object the following rule holds: ",(0,r.kt)("inlineCode",{parentName:"p"},"o.toString().equals(p.toString) <==> o.equals(p)")),(0,r.kt)("p",null,'We currently random test this rule and it sometimes fails due to a deprecated feature called "annotations" which we are removing to make the above contract true.'),(0,r.kt)("p",null,"The intended effects of the toString/equals contract of ",(0,r.kt)("strong",{parentName:"p"},"vallang")," are the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"What-you-see-is-what-you-get: debugging values by printing them means that you get as a programmer full disclosure about the meaning of the object"),(0,r.kt)("li",{parentName:"ul"},"Structural equality and equational reasoning: the context in which values are created can not have any influence on their identity"),(0,r.kt)("li",{parentName:"ul"},"Sharing is safe"),(0,r.kt)("li",{parentName:"ul"},"Serialisation and deserialisation is never lossy"),(0,r.kt)("li",{parentName:"ul"},"The sub-type relation for types of values coincides exactly with sublanguage concept of the set of sentences for all values of the given types. ")),(0,r.kt)("p",null,"The latter point is one of the main reasons why ",(0,r.kt)("strong",{parentName:"p"},"vallang")," is called a ",(0,r.kt)("strong",{parentName:"p"},"lang"),"uage. The result of ",(0,r.kt)("inlineCode",{parentName:"p"},"anyValue.toString()")," is a members of a precisely defined textual languages. The full textual language is generated from the ",(0,r.kt)("inlineCode",{parentName:"p"},"value")," type, and sub-languages are generated from the respective sub-types. ",(0,r.kt)("inlineCode",{parentName:"p"},"void")," is the empty language. In this manner the types of ",(0,r.kt)("strong",{parentName:"p"},"vallang")," act like non-terminals of a precise context-free grammar. The ",(0,r.kt)("strong",{parentName:"p"},"vallang")," language as defined above is a strict sub-language of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Expression")," sub-language of Rascal."),(0,r.kt)("p",null,"The other reason why ",(0,r.kt)("strong",{parentName:"p"},"vallang")," is names as a language is because the implementations of the ",(0,r.kt)("inlineCode",{parentName:"p"},"IValue")," interface and its sub-interfaces are seen as a closed combinator language for computations on the values, and their implementations are interpreters for this language. "),(0,r.kt)("h4",{id:"vallang-values-always-know-their-most-precise-concrete-ad-hoc-run-time-type"},"Vallang values always know their most-precise concrete ad-hoc run-time type"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"This is nice for debugging purposes, the types are descriptions of values and if matching or equality checking fails then the type abstraction usually explains why without having to go into reading the entire value."),(0,r.kt)("li",{parentName:"ul"},"Types may be computed lazily or eagerly, cashed or not. This is not functionally observable but it may affect run-time efficiency"),(0,r.kt)("li",{parentName:"ul"},"Having precise run-time types for every (nested) value, and having efficient access to this, is a prerequisite for building fast and type-safe rank-2 polymorphic higher order functional computations. Or in functional terms: you need this to make folds and maps work on heterogenous recursive and open data-types. Or in simpler terms: using this we can build statically type-safe data traversal and daya transformation features into Rascal. ")),(0,r.kt)("h4",{id:"vallang-values-include-both-trees-and-relations"},"Vallang values include both trees and relations"),(0,r.kt)("p",null,"Even though both trees and relations are generic enought to represent any data, sometimes a graph or table is more natural than a tree and sometimes the other way around. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"trees are nice for abstract and concrete syntax representations"),(0,r.kt)("li",{parentName:"ul"},"trees are nice for abstract symbolic domains, such as terms for constraint variables and binary constraints"),(0,r.kt)("li",{parentName:"ul"},"relations are nice for graph-like unstructred data, such as project dependencies, call graphs, etc."),(0,r.kt)("li",{parentName:"ul"},"relations are nice for access to external data stored in spreadsheets and databases"),(0,r.kt)("li",{parentName:"ul"},"trees are nice for access to web data stored in HTML, XML, JSON formats etc."),(0,r.kt)("li",{parentName:"ul"},"trees are good for transformation purposes, where we parse something, rewrite it and unparse it again"),(0,r.kt)("li",{parentName:"ul"},"relations are good for analysis purposes, where we extract facts, elaborate on them and finally report the result.")),(0,r.kt)("p",null,"Rascal is a language which can be used to easily switch between different representations of the same information, using pattern matching, querying, comprehensions, etc. From ",(0,r.kt)("strong",{parentName:"p"},"vallang")," you should not expect any help in this regard: the choice of representation for any information is a key design decision for the user of ",(0,r.kt)("strong",{parentName:"p"},"vallang"),"."),(0,r.kt)("h2",{id:"who-contributed-to-vallang"},"Who contributed to Vallang?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Robert M. Fuhrer (IBM TJ Watson)"),(0,r.kt)("li",{parentName:"ul"},"Jurgen J. Vinju (IBM TJ Watson and Centrum Wiskunde & Informatica)"),(0,r.kt)("li",{parentName:"ul"},"Arnold Lankamp (Centrum Wiskunde & Informatica)"),(0,r.kt)("li",{parentName:"ul"},"Michael Steindorfer (Centrum Wiskunde & Informatica and TU Delft)"),(0,r.kt)("li",{parentName:"ul"},"Davy Landman (Centrum Wiskunde & Informatica and SWAT.engineering)"),(0,r.kt)("li",{parentName:"ul"},"Paul Klint (Centrum Wiskunde & Informatica)")),(0,r.kt)("p",null,"and occasional contributions from others please see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/usethesource/rascal-value/graphs/contributors"},"github's factual overview")),(0,r.kt)("h2",{id:"what-is-in-the-near-future-for-vallang"},"What is in the near future for Vallang?"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'Removal of the "annotations" feature, which is completely replaces by the "keyword fields" feature. The main differences between these features are:',(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"While they both offer extensibility to the set of names and typed fields of nodes and constructors, annotations can never influence ",(0,r.kt)("inlineCode",{parentName:"li"},"equals()")," while keyword fields always do. "),(0,r.kt)("li",{parentName:"ul"},"Syntactically the notation for keyword fields is more compact: ",(0,r.kt)("inlineCode",{parentName:"li"},"f()[@myAnno=1]")," versus ",(0,r.kt)("inlineCode",{parentName:"li"},"f(myField=1)")))),(0,r.kt)("li",{parentName:"ol"},"Further integration of the capabilities of ",(0,r.kt)("a",{parentName:"li",href:"http://www.usethesource.io/projects/capsule"},"Capsule")," for persistent and optimized immutable collections under the hood of ",(0,r.kt)("inlineCode",{parentName:"li"},"IMap"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"ISet"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"IRelationAlgebra"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Reflexive relations with two indices (for both columns)"),(0,r.kt)("li",{parentName:"ul"},"Heterogeneous collections of numbers (unboxing down to primitive types to safe space)"),(0,r.kt)("li",{parentName:"ul"},"Smooth and incremental transitions from map to multimap representations"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"IBag"),", the ",(0,r.kt)("inlineCode",{parentName:"li"},"bag[&T]")," type")))}u.isMDXComponent=!0}}]);