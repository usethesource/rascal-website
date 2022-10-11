"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[36360],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(a),d=r,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||l;return a?n.createElement(f,i(i({ref:t},c),{},{components:a})):n.createElement(f,i({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},21275:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const l={title:"Call",keywords:["(",")"]},i=void 0,o={unversionedId:"Rascal/Expressions/Call/index",id:"Rascal/Expressions/Call/index",title:"Call",description:"Synopsis",source:"@site/docs/Rascal/Expressions/Call/index.md",sourceDirName:"Rascal/Expressions/Call",slug:"/Rascal/Expressions/Call/",permalink:"/docs/Rascal/Expressions/Call/",draft:!1,tags:[],version:"current",frontMatter:{title:"Call",keywords:["(",")"]},sidebar:"tutorialSidebar",previous:{title:"Expressions",permalink:"/docs/Rascal/Expressions/"},next:{title:"Comprehensions",permalink:"/docs/Rascal/Expressions/Comprehensions/"}},s={},p=[{value:"Synopsis",id:"synopsis",level:4},{value:"Syntax",id:"syntax",level:4},{value:"Types",id:"types",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4},{value:"Benefits",id:"benefits",level:4}],c={toc:p};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h4",{id:"synopsis"},"Synopsis"),(0,r.kt)("p",null,"Functions and constructors can be called or invoked in a uniform style."),(0,r.kt)("h4",{id:"syntax"},"Syntax"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"function call with positional parameters ",(0,r.kt)("inlineCode",{parentName:"li"},"Name ( Exp\u2081, Exp\u2082, ... )")),(0,r.kt)("li",{parentName:"ul"},"function call with keyword parameters ",(0,r.kt)("inlineCode",{parentName:"li"},"Name (Name\u2081 = Exp\u2081, Name\u2082 = Exp\u2082, ...)")),(0,r.kt)("li",{parentName:"ul"},"function call with both positional and keyword parameters ",(0,r.kt)("inlineCode",{parentName:"li"},"Name (Exp\u2081, Exp\u2082, ..., Name\u2081 = Exp\u2081, Name\u2082 = Exp\u2082, ...)")),(0,r.kt)("li",{parentName:"ul"},"function calls with computed functions ",(0,r.kt)("inlineCode",{parentName:"li"},"Exp ( Exp\u2081, Exp\u2082, ..., Name\u2081 = Exp\u2081, Name\u2082 = Exp\u2082, ...)")," ")),(0,r.kt)("h4",{id:"types"},"Types"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"Exp\u2081")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"Exp\u2082")),(0,r.kt)("th",{parentName:"tr",align:null},"..."),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"Name ( Exp\u2081, Exp\u2082, ... )")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"T\u2081")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"T\u2082")),(0,r.kt)("td",{parentName:"tr",align:null},"..."),(0,r.kt)("td",{parentName:"tr",align:null},"Determined by ",(0,r.kt)("em",{parentName:"td"},"Name"),", ",(0,r.kt)("em",{parentName:"td"},"T\u1d62")," and function declarations")))),(0,r.kt)("h4",{id:"description"},"Description"),(0,r.kt)("p",null,"For the purpose of calling a function or a constructor, we make no distinction between these two concepts.\nA constructor is a function that constructs an application of an algebraic data-type constructor definition,\nso it has no body, but it is a function which can be called."),(0,r.kt)("p",null,"First, the actual parameter expressions ",(0,r.kt)("em",{parentName:"p"},"Exp"),"\u1d62 are evaluated resulting in values ",(0,r.kt)("em",{parentName:"p"},"V"),"\u1d62.\nBased on ",(0,r.kt)("em",{parentName:"p"},"Name")," and the argument types ",(0,r.kt)("em",{parentName:"p"},"T"),"\u1d62, the identity of the function to be called is determined."),(0,r.kt)("p",null,"The values ",(0,r.kt)("em",{parentName:"p"},"V"),"\u1d62 are bound to the formal parameter names of the\ndeclared functions and the function body is executed.\nThe value returned by the function is used as value of the function call."),(0,r.kt)("p",null,"For the keyword parameters a similar evaluation produces values for each expression and those values\nare bound to the respective names. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The order of keyword parameters is irrelevant in the call syntax, as opposed to the order of the positional parameters. "),(0,r.kt)("li",{parentName:"ul"},"Notably, values are ",(0,r.kt)("em",{parentName:"li"},"also")," bound for the keyword parameters which are ",(0,r.kt)("em",{parentName:"li"},"not listed")," in the call site. For those values, ",(0,r.kt)("em",{parentName:"li"},"default")," expressions are evaluation which are retrieved from the ",(0,r.kt)("a",{parentName:"li",href:"/docs/Rascal/Declarations/Function/"},"Function")," signature. "),(0,r.kt)("li",{parentName:"ul"},"For ",(0,r.kt)("a",{parentName:"li",href:"/docs/Rascal/Declarations/Function/"},"Function"),"s those default parameters are computed and bound at the time of calling the function"),(0,r.kt)("li",{parentName:"ul"},"For ",(0,r.kt)("a",{parentName:"li",href:"/docs/Rascal/Declarations/AlgebraicDataType/"},"./algebraic data type")," constructors, the missing default parameters are computed, lazily, at the moment of ",(0,r.kt)("a",{parentName:"li",href:"/docs/Rascal/Expressions/Operators/FieldProjection/"},"field projection"),".")),(0,r.kt)("p",null,"For more information:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"see ",(0,r.kt)("a",{parentName:"li",href:"/docs/Rascal/Declarations/Function/"},"Function")," for more details about function declarations."),(0,r.kt)("li",{parentName:"ul"},"see ",(0,r.kt)("a",{parentName:"li",href:"/docs/Rascal/Declarations/AlgebraicDataType/"},"./algebraic data type")," for more details about constructor declarations.")),(0,r.kt)("p",null,"In case of ",(0,r.kt)("a",{parentName:"p",href:"/docs/Rascal/Declarations/Function/"},"function overloading"),', where there a more definitions of the same function (the same name and argument arity), there is a selection process called "dynamic dispatch". The functions are tried in arbitrary order,\nand if their signature ',(0,r.kt)("a",{parentName:"p",href:"/docs/RascalConcepts/PatternMatching/"},"matches"),", and their body does not ",(0,r.kt)("a",{parentName:"p",href:"/docs/Rascal/Statements/Fail/"},"Fail"),", then the return value of that function is used. Otherwise, the next function alternative is tried until a succesful alternative is found.\nIf the match of the signature is non-unitary, it involves backtracking, then a single function\nmay be tried many times."),(0,r.kt)("p",null,"If the name of the function in the call is"),(0,r.kt)("h4",{id:"examples"},"Examples"),(0,r.kt)("p",null,"First declare a function ",(0,r.kt)("inlineCode",{parentName:"p"},"square")," with argument ",(0,r.kt)("em",{parentName:"p"},"n")," that returns ",(0,r.kt)("em",{parentName:"p"},"n^2"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell",metastring:",continue",",continue":!0},"rascal>int square(int n) { return n * n; }\nint (int): function(|prompt:///|(0,35,<1,0>,<1,35>))\n")),(0,r.kt)("p",null,"Next call ",(0,r.kt)("inlineCode",{parentName:"p"},"square"),". This results in the following steps:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Based on the name ",(0,r.kt)("inlineCode",{parentName:"li"},"square")," and the int argument 12 we identify the function to be called\n(= the function ",(0,r.kt)("inlineCode",{parentName:"li"},"square")," we just defined)."),(0,r.kt)("li",{parentName:"ul"},"Compute the value of the actual parameter (= 12)."),(0,r.kt)("li",{parentName:"ul"},"Bind the formal parameter ",(0,r.kt)("inlineCode",{parentName:"li"},"n")," to the actual value 12."),(0,r.kt)("li",{parentName:"ul"},"Execute the body of ",(0,r.kt)("inlineCode",{parentName:"li"},"square"),"."),(0,r.kt)("li",{parentName:"ul"},"The return value of square is the vale of the call:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell",metastring:",continue",",continue":!0},"rascal>square(12);\nint: 144\n")),(0,r.kt)("h4",{id:"benefits"},"Benefits"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"calls with positional parameters are the classical way of function invocation in Mathematics and Computer Science"),(0,r.kt)("li",{parentName:"ul"},"calls with keyword parameters provide readability at the call site and we do not have to remember the invocation order"),(0,r.kt)("li",{parentName:"ul"},"calls with keyword parameters are always bound by defaults, so there is never a ",(0,r.kt)("inlineCode",{parentName:"li"},"null")," reference")))}u.isMDXComponent=!0}}]);