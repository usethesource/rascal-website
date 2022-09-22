"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[75449],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(a),d=i,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||r;return a?n.createElement(f,l(l({ref:t},c),{},{components:a})):n.createElement(f,l({ref:t},c))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7639:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var n=a(83117),i=(a(67294),a(3905));const r={title:"Function Declaration",keywords:["public","private","java","test","default","&"]},l=void 0,o={unversionedId:"Rascal/Declarations/Function/index",id:"Rascal/Declarations/Function/index",title:"Function Declaration",description:"Synopsis",source:"@site/docs/Rascal/Declarations/Function/index.md",sourceDirName:"Rascal/Declarations/Function",slug:"/Rascal/Declarations/Function/",permalink:"/docs/Rascal/Declarations/Function/",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Rascal/Declarations/Function/index.md",tags:[],version:"current",frontMatter:{title:"Function Declaration",keywords:["public","private","java","test","default","&"]},sidebar:"tutorialSidebar",previous:{title:"Annotation Declaration",permalink:"/docs/Rascal/Declarations/Annotation/"},next:{title:"Import",permalink:"/docs/Rascal/Declarations/Import/"}},s={},p=[{value:"Synopsis",id:"synopsis",level:4},{value:"Syntax",id:"syntax",level:4},{value:"Variant 1",id:"variant-1",level:2},{value:"Variant 2",id:"variant-2",level:2},{value:"Variant 3 and 4",id:"variant-3-and-4",level:2},{value:"Body types",id:"body-types",level:2},{value:"Parameterized types in function declaration",id:"parameterized-types-in-function-declaration",level:2},{value:"Overloading",id:"overloading",level:2},{value:"Modifiers",id:"modifiers",level:2},{value:"Examples",id:"examples",level:4},{value:"Benefits",id:"benefits",level:4},{value:"Pitfalls",id:"pitfalls",level:4}],c={toc:p};function u(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h4",{id:"synopsis"},"Synopsis"),(0,i.kt)("p",null,"Declare a function."),(0,i.kt)("h4",{id:"syntax"},"Syntax"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Modifiers Type Name( Type<sub>1</sub> Var<sub>1</sub>, ..., Type~n~ Var~n~ ) Body")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Modifiers Type Name( Type<sub>1</sub> Var<sub>1</sub>, ..., Type~n~ Var~n~ Type<sub>0</sub> Name<sub>0</sub>... ) Body")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Modifiers Type Name( Pattern<sub>1</sub>, ..., Pattern~n~) Body")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Modifiers Type Name( Pattern<sub>1</sub>, ..., Pattern~n~, Type<sub>0</sub> Name<sub>0</sub>...) Body"))),(0,i.kt)("p",null,"where ",(0,i.kt)("inlineCode",{parentName:"p"},"Body")," is one of:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"{ Statements }")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"throws Exception<sub>1</sub>, Exception<sub>2</sub>, ... { Statements }")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"= Expression;"))),(0,i.kt)("p",null,"and where ",(0,i.kt)("inlineCode",{parentName:"p"},"Modifiers")," may be:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'("public" | "private")? ("java" | "test" | "default")?'))),(0,i.kt)("h2",{id:"variant-1"},"Variant 1"),(0,i.kt)("p",null,"A function declaration introduces a new function with name ",(0,i.kt)("em",{parentName:"p"},"name"),", typed formal parameters ",(0,i.kt)("inlineCode",{parentName:"p"},"Type<sub>1</sub> Var<sub>1</sub>"),", a return type ",(0,i.kt)("em",{parentName:"p"},"Type"),"\nand a ",(0,i.kt)("em",{parentName:"p"},"Statement")," that forms the function body.\nThe type of ",(0,i.kt)("em",{parentName:"p"},"Statement")," should be equal to ",(0,i.kt)("em",{parentName:"p"},"Type"),"."),(0,i.kt)("p",null,"The formal parameters may be used in ",(0,i.kt)("em",{parentName:"p"},"Statement")," and get their value when function ",(0,i.kt)("em",{parentName:"p"},"Name")," is invoked."),(0,i.kt)("h2",{id:"variant-2"},"Variant 2"),(0,i.kt)("p",null,"A function may have a variable list of arguments, this has as syntax variant 2 given above."),(0,i.kt)("p",null,"The last parameter of a function may be followed by ",(0,i.kt)("inlineCode",{parentName:"p"},"...")," and this has as effect that all remaining actual parameters\nthat occur in a call to this function are collected as list value of the last formal parameter.\nInside the function body, the type of this parameter will therefore be ",(0,i.kt)("inlineCode",{parentName:"p"},"list[Type<sub>0</sub>]"),"."),(0,i.kt)("h2",{id:"variant-3-and-4"},"Variant 3 and 4"),(0,i.kt)("p",null,"All formal parameter of a function can be ",(0,i.kt)("a",{parentName:"p",href:"../../../Rascal/Patterns"},"Patterns"),". There are some restrictions however:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A Pattern in formal parameter positions may not refer to variables in the scope."),(0,i.kt)("li",{parentName:"ul"},"Patterns in formal parameter positions may not introduce fresh variables without an explicit type. "),(0,i.kt)("li",{parentName:"ul"},"The last parameter, if followed by ",(0,i.kt)("inlineCode",{parentName:"li"},"...")," can only be a normal typed parameters, not just any pattern.")),(0,i.kt)("h2",{id:"body-types"},"Body types"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Functions with list of statements as bodies must eventually use ",(0,i.kt)("inlineCode",{parentName:"li"},"return")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"fail")," on every control flow path. "),(0,i.kt)("li",{parentName:"ul"},"The declarations to ",(0,i.kt)("inlineCode",{parentName:"li"},"throw")," an exception are documentation only"),(0,i.kt)("li",{parentName:"ul"},"Single expressions can be bodies of functions, the return value is the value of the expression.")),(0,i.kt)("h2",{id:"parameterized-types-in-function-declaration"},"Parameterized types in function declaration"),(0,i.kt)("p",null,"The types that occur in function declarations may also contain ",(0,i.kt)("a",{parentName:"p",href:"../../../Rascal/Declarations/StaticTyping/TypeParameters"},"Type Parameters"),".\nIn this way functions can be defined for arbitrary types. The type variable is bound (statically) at by the types of the parameters given at location of the call. The result type must be used at least once in any of the parameters."),(0,i.kt)("h2",{id:"overloading"},"Overloading"),(0,i.kt)("p",null,"Function definitions may be overloaded, i.e. a function with the same name may be defined twice and\na function may redefine a constructor of an ",(0,i.kt)("a",{parentName:"p",href:"../../../Rascal/Declarations/AlgebraicDataType"},"Algebraic Data Type")," or a ",(0,i.kt)("a",{parentName:"p",href:"../../../Rascal/Declarations/SyntaxDefinition"},"Syntax Definition"),"."),(0,i.kt)("p",null,"There are some restrictions however:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Overloaded alternatives for the same function name but with different patterns must return the same type."),(0,i.kt)("li",{parentName:"ul"},"Overloaded alternatives for the same function name must have mutually exclusive patterns, unless one alternative is labeled ",(0,i.kt)("inlineCode",{parentName:"li"},"default")," and the other is not. The patterns of formal parameters are mutually exclusive if for at least one parameter position:\n",(0,i.kt)("strong",{parentName:"li"},"  They range over incomparable types, as in ",(0,i.kt)("inlineCode",{parentName:"strong"},"int f(int a)")," and ",(0,i.kt)("inlineCode",{parentName:"strong"},"int f(real a)"),", or\n"),"  They range over different alternatives of an ",(0,i.kt)("a",{parentName:"li",href:"../../../Rascal/Declarations/AlgebraicDataType"},"Algebraic Data Type"),", as in ",(0,i.kt)("inlineCode",{parentName:"li"},"int f(and(Bool a, Bool b))")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"int f(or(Bool a, Bool b))"),(0,i.kt)("strong",{parentName:"li"},"  They range over different alternatives of a ",(0,i.kt)("a",{parentName:"strong",href:"../../../Rascal/Declarations/SyntaxDefinition"},"Syntax Definition")),"  And note that deep matches using the ",(0,i.kt)("inlineCode",{parentName:"li"},"/")," alternative are considered to be of type ",(0,i.kt)("inlineCode",{parentName:"li"},"value")," and therefore overlap with all other patterns."),(0,i.kt)("li",{parentName:"ul"},"Overlapping patterns are allowed if the one alternative has the ",(0,i.kt)("inlineCode",{parentName:"li"},"default")," modified while the other does not."),(0,i.kt)("li",{parentName:"ul"},"If a function is fallible, it uses the ",(0,i.kt)("inlineCode",{parentName:"li"},"fail")," statement to back-track to a different alternative, then there must be a ",(0,i.kt)("inlineCode",{parentName:"li"},"default")," alternative defined which can handle the general case. An ","[AlgebraicDataType]"," or a ","[SyntaxDefinition]"," with the same name and return type counts as a ",(0,i.kt)("inlineCode",{parentName:"li"},"default")," alternative."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"default")," functions may not fail.")),(0,i.kt)("h2",{id:"modifiers"},"Modifiers"),(0,i.kt)("p",null,"The ",(0,i.kt)("em",{parentName:"p"},"Modifiers")," affect ",(0,i.kt)("em",{parentName:"p"},"visibility")," and ",(0,i.kt)("em",{parentName:"p"},"special behaviour")," of functions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Visibility"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"private")," declares that a function is only visible in the current module.\n",(0,i.kt)("inlineCode",{parentName:"li"},"public")," declares that it is visible outside the module as well. When visibility is not specified, ",(0,i.kt)("inlineCode",{parentName:"li"},"private")," is assumed."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Special Behaviour"),":\n",(0,i.kt)("strong",{parentName:"li"},"  ",(0,i.kt)("inlineCode",{parentName:"strong"},"java")," declares that the body of the function is implemented in Java. The function should have a\n",(0,i.kt)("inlineCode",{parentName:"strong"},"javaClass")," annotation that determines where the Java implementation can be found.\n"),"  ",(0,i.kt)("inlineCode",{parentName:"li"},"test")," declares that this is a test function. A test function is a boolean function (currently) without arguments.\nIt can be called as any other function. However, it can also be called automatically\nby the unit test framework, by typing ",(0,i.kt)("inlineCode",{parentName:"li"},":test")," at the command line, see ",(0,i.kt)("a",{parentName:"li",href:"../../../RascalShell/Commands/Help"},"Help"),".\n**  ",(0,i.kt)("inlineCode",{parentName:"li"},"default")," declares an alternative for an overloaded function that will only be tried after\nall non-default alternatives have been tried. Note that ",(0,i.kt)("a",{parentName:"li",href:"../../../Rascal/Declarations/AlgebraicDataType"},"Algebraic Data Type"),"s and ",(0,i.kt)("a",{parentName:"li",href:"../../../Rascal/Declarations/SyntaxDefinition"},"Syntax Definition"),"s\n",(0,i.kt)("em",{parentName:"li"},"implicitly")," define ",(0,i.kt)("inlineCode",{parentName:"li"},"default")," functions that may be overloaded by normal ",(0,i.kt)("a",{parentName:"li",href:"../../../Rascal/Declarations/Function"},"Function"),"s.")),(0,i.kt)("h4",{id:"examples"},"Examples"),(0,i.kt)("p",null,"Declare a function"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>rel[int, int] invert(rel[int,int] R){\n>>>>>>>   return {<Y, X> | <int X, int Y> <- R };\n>>>>>>>}\nrel[int,int] (rel[int,int]): function(|prompt:///|(0,82,<1,0>,<3,1>))\n")),(0,i.kt)("p",null,"Call it"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>invert({<1,10>, <2,20>});\nrel[int,int]: {\n  <10,1>,\n  <20,2>\n}\n")),(0,i.kt)("p",null,"In the following example we illustrate the use of type variables in function declarations.\nDeclare an inversion function that is applicable to any binary relation:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>rel[&T2, &T1] invert2(rel[&T1,&T2] R){  \n>>>>>>>   return {<Y, X> | <&T1 X, &T2 Y> <- R };\n>>>>>>>}\nset[tuple[&T2,&T1]] (set[tuple[&T1,&T2]]): function(|prompt:///|(0,85,<1,0>,<3,1>))\n")),(0,i.kt)("p",null,"Now apply it to relations with different types:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>invert2({<1,10>, <2,20>});\nrel[int,int]: {\n  <10,1>,\n  <20,2>\n}\nrascal>invert2({<"mon", 1>, <"tue", 2>});\nrel[int,str]: {\n  <1,"mon">,\n  <2,"tue">\n}\n')),(0,i.kt)("p",null,"As another example declare a function that can be used to swap the elements of pairs of arbitrary types\n(also see ",(0,i.kt)("a",{parentName:"p",href:"../../../Rascal/Expressions/Values/Tuple/Subscription"},"Subscription"),"):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>tuple[&T2, &T1] swap(tuple[&T1, &T2] TP) { return <TP[1], TP[0]>;}\ntuple[&T2,&T1] (tuple[&T1,&T2]): function(|prompt:///|(0,66,<1,0>,<1,66>))\nrascal>swap(<1, 2>);\ntuple[int,int]: <2,1>\nrascal>swap(<"wed", 3>);\ntuple[int,str]: <3,"wed">\n')),(0,i.kt)("p",null,"Here we use an overloaded definition with incomparable patterns:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>int f(int i) = 1;\nint (int): function(|prompt:///|(0,17,<1,0>,<1,17>))\nrascal>int f(real r) = 2;\nint (real): function(|prompt:///|(0,18,<1,0>,<1,18>))\nrascal>f(0);\nint: 1\nrascal>f(0.0);\nint: 2\n")),(0,i.kt)("p",null,"And we may use ",(0,i.kt)("inlineCode",{parentName:"p"},"default"),", as in:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>int f(0) = 1;\nint (int): function(|prompt:///|(0,13,<1,0>,<1,13>))\nrascal>default int f(int n) = n * f(n - 1);\nint (int): function(|prompt:///|(0,36,<1,0>,<1,36>))\nrascal>f(0);\nint: 1\nrascal>f(2);\nint: 2\n")),(0,i.kt)("p",null,"In combination with an ",(0,i.kt)("a",{parentName:"p",href:"../../../Rascal/Declarations/AlgebraicDataType"},"Algebraic Data Type"),", which defines ",(0,i.kt)("inlineCode",{parentName:"p"},"default")," functions implicitly for every alternative,\nwe can define canonicalization functions. The same holds for ",(0,i.kt)("a",{parentName:"p",href:"../../../Rascal/Declarations/SyntaxDefinition"},"Syntax Definition"),"s, see ",(0,i.kt)("a",{parentName:"p",href:"../../../Rascal/Declarations/SyntaxDefinition/Action"},"Action"),"s."),(0,i.kt)("p",null,"This definition implies a default function for t(), f() and neg(B):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>data B = t() | f() | neg(B);\nok\n")),(0,i.kt)("p",null,"The following definition will remove any nested neg before it is even constructed:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>B neg(neg(B b)) = b;\nB (B): function(|prompt:///|(0,20,<1,0>,<1,20>))\nrascal>neg(t());\nB: neg(t())\nrascal>neg(neg(f()));\nB: f()\n")),(0,i.kt)("h4",{id:"benefits"},"Benefits"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Overloaded functions can be extended by other modules that extend the current module, and even be "fused" by modules that extend different modules that define the same overloaded signature. In this way you can write language processors ',(0,i.kt)("strong",{parentName:"li"},"modularly"),". The open extensibility of overloaded functions in Rascal is a way to circumvent the classes ",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Expression_problem"},'"Expression Problem".')),(0,i.kt)("li",{parentName:"ul"},"Overloaded functions including complex pattern matching at the parameter positions are as powerful as term rewriting systems; they ",(0,i.kt)("em",{parentName:"li"},"are")," a kind of term rewriting system. Together with the ",(0,i.kt)("a",{parentName:"li",href:"../../../Rascal/Declarations/SyntaxDefinition"},"syntax definition")," and ",(0,i.kt)("a",{parentName:"li",href:"../../../Rascal/Declarations/AlgebraicDataType"},"algebraic data type"),' features (serving as many-sorted algebraic signatures), the overloaded functions allow for "algebraic specification" as a style of programming in Rascal. ')),(0,i.kt)("h4",{id:"pitfalls"},"Pitfalls"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"In case of overlapping function definitions, the order in which the functions are tried is left undefined. The only exceptions are functions marked ",(0,i.kt)("inlineCode",{parentName:"li"},"default"),", those will be tried after non-",(0,i.kt)("inlineCode",{parentName:"li"},"default")," functions."),(0,i.kt)("li",{parentName:"ul"},"Neither the Rascal compiler not its static checker, or the interpreter, check for the ",(0,i.kt)("strong",{parentName:"li"},"completeness")," of overloaded function definitions. The question: is do they handle all the cases that the grammar of the input data-types provide for? And if so, is every choice of prioritizing the different alternatives leading to the same answer? This problem is akin to the properties of ",(0,i.kt)("strong",{parentName:"li"},"termination"),", ",(0,i.kt)("strong",{parentName:"li"},"unique normal forms")," and ",(0,i.kt)("strong",{parentName:"li"},"confluence")," of term rewriting systems. A set of overloaded alternative functions, including a data constructor with the same name, are comparable to a term rewriting system for a many-sorted algebraic signature.")))}u.isMDXComponent=!0}}]);