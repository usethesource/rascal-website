"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[89883],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return t?a.createElement(h,i(i({ref:n},p),{},{components:t})):a.createElement(h,i({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},42818:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=t(87462),r=(t(67294),t(3905));const o={title:"No Such Annotation"},i=void 0,l={unversionedId:"RunTimeErrors/RuntimeExceptions/NoSuchAnnotation/index",id:"RunTimeErrors/RuntimeExceptions/NoSuchAnnotation/index",title:"No Such Annotation",description:"Synopsis",source:"@site/docs/RunTimeErrors/RuntimeExceptions/NoSuchAnnotation/index.md",sourceDirName:"RunTimeErrors/RuntimeExceptions/NoSuchAnnotation",slug:"/RunTimeErrors/RuntimeExceptions/NoSuchAnnotation/",permalink:"/docs/RunTimeErrors/RuntimeExceptions/NoSuchAnnotation/",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/RunTimeErrors/RuntimeExceptions/NoSuchAnnotation/index.md",tags:[],version:"current",frontMatter:{title:"No Such Annotation"},sidebar:"tutorialSidebar",previous:{title:"No Parent",permalink:"/docs/RunTimeErrors/RuntimeExceptions/NoParent/"},next:{title:"No Such Field",permalink:"/docs/RunTimeErrors/RuntimeExceptions/NoSuchField/"}},s={},c=[{value:"Synopsis",id:"synopsis",level:4},{value:"Types",id:"types",level:4},{value:"Usage",id:"usage",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4},{value:"Pitfalls",id:"pitfalls",level:4}],p={toc:c};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h4",{id:"synopsis"},"Synopsis"),(0,r.kt)("p",null,"Annotation without a value."),(0,r.kt)("h4",{id:"types"},"Types"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"data RuntimeException = NoSuchAnnotation(str label);")),(0,r.kt)("h4",{id:"usage"},"Usage"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"import Exception;")," (only needed when ",(0,r.kt)("inlineCode",{parentName:"p"},"NoSuchAnnotation")," is used in ",(0,r.kt)("inlineCode",{parentName:"p"},"catch"),")"),(0,r.kt)("h4",{id:"description"},"Description"),(0,r.kt)("p",null,"An ",(0,r.kt)("a",{parentName:"p",href:"../../../Rascal/Declarations/Annotation"},"annotation")," can be associated with any node value\n(including any ",(0,r.kt)("a",{parentName:"p",href:"../../../Rascal/Declarations/AlgebraicDataType"},"algebraic data type"),").\nThis error is generated when the value of an annotation is requested but has not been defined."),(0,r.kt)("p",null,"Remedies:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ensure that the annotation value is properly initialized for all relevant parts of the node value. "),(0,r.kt)("li",{parentName:"ul"},"Use the\n",(0,r.kt)("a",{parentName:"li",href:"../../../Rascal/Expressions/Values/Boolean/IsDefined"},"isDefined")," and\n",(0,r.kt)("a",{parentName:"li",href:"../../../Rascal/Expressions/Values/Boolean/IfDefinedElse"},"ifDefinedElse")," operators to check whether the annotation value\nis set and act accordingly."),(0,r.kt)("li",{parentName:"ul"},"Catch the ",(0,r.kt)("inlineCode",{parentName:"li"},"NoSuchAnnotation yourself"),", see ",(0,r.kt)("a",{parentName:"li",href:"../../../Rascal/Statements/TryCatch"},"try catch"),".")),(0,r.kt)("h4",{id:"examples"},"Examples"),(0,r.kt)("p",null,"INFO: Eliminate the double ","[red]","##Error: Error:##"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>data Fruit = apple(int n) | orange(int n);\nok\nrascal>anno str Fruit @ quality;\nok\nrascal>piece = orange(13);\nFruit: orange(13)\nrascal>piece@quality;\n|prompt:///|(0,5,<1,0>,<1,5>): NoSuchAnnotation("quality")\n    at $shell$(|prompt:///|(0,14,<1,0>,<1,14>))\nok\n')),(0,r.kt)("p",null,"Use the unary postfix operator isDefined ",(0,r.kt)("inlineCode",{parentName:"p"},"?")," to check whether the ",(0,r.kt)("inlineCode",{parentName:"p"},"quality")," annotation is set:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>piece@quality?;\nbool: false\n")),(0,r.kt)("p",null,"Use the ternary operator ifDefinedElse ",(0,r.kt)("inlineCode",{parentName:"p"},"?")," to compute an alternative value when the ",(0,r.kt)("inlineCode",{parentName:"p"},"quality")," annotation is not set:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>piece@quality ? "no quality value";\nstr: "no quality value"\n')),(0,r.kt)("p",null,"We can also catch the ",(0,r.kt)("inlineCode",{parentName:"p"},"NoSuchAnnotation")," error. First import the Rascal exceptions (which are also included in ",(0,r.kt)("inlineCode",{parentName:"p"},"Prelude"),")\nand ",(0,r.kt)("inlineCode",{parentName:"p"},"IO"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>import Exception;\nok\nrascal>import IO;\nok\nrascal>try piece@quality; catch NoSuchAnnotation(l): println("No such annotation: <l>");\ntry piece@quality; catch NoSuchAnnotation(l): println("No such annotation: <l>");\nNo such annotation: quality\nok\n')),(0,r.kt)("p",null,"Finally, we can just assign a value to the ",(0,r.kt)("inlineCode",{parentName:"p"},"quality")," annotation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>piece@quality = "excellent";\nFruit: orange(13,quality="excellent")\nrascal>piece@quality;\nstr: "excellent"\n')),(0,r.kt)("h4",{id:"pitfalls"},"Pitfalls"),(0,r.kt)("p",null,"WARNING: Using white space around the ",(0,r.kt)("inlineCode",{parentName:"p"},"@")," confuses the Rascal parser"))}u.isMDXComponent=!0}}]);