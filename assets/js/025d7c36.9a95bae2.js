"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[65366],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=s(n),m=r,k=c["".concat(o,".").concat(m)]||c[m]||g[m]||l;return n?a.createElement(k,u(u({ref:t},p),{},{components:n})):a.createElement(k,u({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,u=new Array(l);u[0]=c;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,u[1]=i;for(var s=2;s<l;s++)u[s]=n[s];return a.createElement.apply(null,u)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},56148:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>u,default:()=>g,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const l={title:"module lang::rascal::tutor::questions::ValueGenerator"},u=void 0,i={unversionedId:"Library/lang/rascal/tutor/questions/ValueGenerator",id:"Library/lang/rascal/tutor/questions/ValueGenerator",title:"module lang::rascal::tutor::questions::ValueGenerator",description:"Usage",source:"@site/docs/Library/lang/rascal/tutor/questions/ValueGenerator.md",sourceDirName:"Library/lang/rascal/tutor/questions",slug:"/Library/lang/rascal/tutor/questions/ValueGenerator",permalink:"/docs/Library/lang/rascal/tutor/questions/ValueGenerator",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Library/lang/rascal/tutor/questions/ValueGenerator.md",tags:[],version:"current",frontMatter:{title:"module lang::rascal::tutor::questions::ValueGenerator"},sidebar:"tutorialSidebar",previous:{title:"module lang::rascal::tutor::questions::QuestionCompiler",permalink:"/docs/Library/lang/rascal/tutor/questions/QuestionCompiler"},next:{title:"lang::rascal::tutor::questions",permalink:"/docs/Library/lang/rascal/tutor/questions/"}},o={},s=[{value:"Usage",id:"usage",level:4},{value:"function generateType",id:"lang-rascal-tutor-questions-ValueGenerator-generateType",level:2},{value:"function generateArbType",id:"lang-rascal-tutor-questions-ValueGenerator-generateArbType",level:2},{value:"function size",id:"lang-rascal-tutor-questions-ValueGenerator-size",level:2},{value:"function makeTupleType",id:"lang-rascal-tutor-questions-ValueGenerator-makeTupleType",level:2},{value:"function generateArbTupleType",id:"lang-rascal-tutor-questions-ValueGenerator-generateArbTupleType",level:2},{value:"function generateArbRelType",id:"lang-rascal-tutor-questions-ValueGenerator-generateArbRelType",level:2},{value:"function generateArbLRelType",id:"lang-rascal-tutor-questions-ValueGenerator-generateArbLRelType",level:2},{value:"function generateValue",id:"lang-rascal-tutor-questions-ValueGenerator-generateValue",level:2},{value:"function generateBool",id:"lang-rascal-tutor-questions-ValueGenerator-generateBool",level:2},{value:"function generateInt",id:"lang-rascal-tutor-questions-ValueGenerator-generateInt",level:2},{value:"function generateReal",id:"lang-rascal-tutor-questions-ValueGenerator-generateReal",level:2},{value:"function generateNumber",id:"lang-rascal-tutor-questions-ValueGenerator-generateNumber",level:2},{value:"function generateLoc",id:"lang-rascal-tutor-questions-ValueGenerator-generateLoc",level:2},{value:"function generateDateTime",id:"lang-rascal-tutor-questions-ValueGenerator-generateDateTime",level:2},{value:"function generateString",id:"lang-rascal-tutor-questions-ValueGenerator-generateString",level:2},{value:"function generateList",id:"lang-rascal-tutor-questions-ValueGenerator-generateList",level:2},{value:"function generateSet",id:"lang-rascal-tutor-questions-ValueGenerator-generateSet",level:2},{value:"function generateMap",id:"lang-rascal-tutor-questions-ValueGenerator-generateMap",level:2},{value:"function generateTuple",id:"lang-rascal-tutor-questions-ValueGenerator-generateTuple",level:2},{value:"function generateRel",id:"lang-rascal-tutor-questions-ValueGenerator-generateRel",level:2},{value:"function generateLRel",id:"lang-rascal-tutor-questions-ValueGenerator-generateLRel",level:2},{value:"function generateArb",id:"lang-rascal-tutor-questions-ValueGenerator-generateArb",level:2}],p={toc:s};function g(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h4",{id:"usage"},"Usage"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"import lang::rascal::tutor::questions::ValueGenerator;")),(0,r.kt)("h2",{id:"lang-rascal-tutor-questions-ValueGenerator-generateType"},"function generateType"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Type generateType(Type tp)"))),(0,r.kt)("h2",{id:"lang-rascal-tutor-questions-ValueGenerator-generateArbType"},"function generateArbType"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'Type generateArbType(int n, {Type ","}+ prefs)')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Type generateArbType(int n, list[Type] prefs)"))),(0,r.kt)("h2",{id:"lang-rascal-tutor-questions-ValueGenerator-size"},"function size"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'int size({Type ","}+ ets)'))),(0,r.kt)("h2",{id:"lang-rascal-tutor-questions-ValueGenerator-makeTupleType"},"function makeTupleType"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'Type makeTupleType({Type ","}+ ets)'))),(0,r.kt)("h2",{id:"lang-rascal-tutor-questions-ValueGenerator-generateArbTupleType"},"function generateArbTupleType"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Type generateArbTupleType(int n, list[Type] prefs)"))),(0,r.kt)("h2",{id:"lang-rascal-tutor-questions-ValueGenerator-generateArbRelType"},"function generateArbRelType"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Type generateArbRelType(int n, list[Type] prefs)"))),(0,r.kt)("h2",{id:"lang-rascal-tutor-questions-ValueGenerator-generateArbLRelType"},"function generateArbLRelType"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Type generateArbLRelType(int n, list[Type] prefs)"))),(0,r.kt)("h2",{id:"lang-rascal-tutor-questions-ValueGenerator-generateValue"},"function generateValue"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"str generateValue(Type tp)"))),(0,r.kt)("h2",{id:"lang-rascal-tutor-questions-ValueGenerator-generateBool"},"function generateBool"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"str generateBool()"))),(0,r.kt)("h2",{id:"lang-rascal-tutor-questions-ValueGenerator-generateInt"},"function generateInt"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"str generateInt(int from, int to)"))),(0,r.kt)("h2",{id:"lang-rascal-tutor-questions-ValueGenerator-generateReal"},"function generateReal"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"str generateReal(int from, int to)"))),(0,r.kt)("h2",{id:"lang-rascal-tutor-questions-ValueGenerator-generateNumber"},"function generateNumber"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"str generateNumber(int from, int to)"))),(0,r.kt)("h2",{id:"lang-rascal-tutor-questions-ValueGenerator-generateLoc"},"function generateLoc"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"str generateLoc()"))),(0,r.kt)("h2",{id:"lang-rascal-tutor-questions-ValueGenerator-generateDateTime"},"function generateDateTime"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"str generateDateTime()"))),(0,r.kt)("h2",{id:"lang-rascal-tutor-questions-ValueGenerator-generateString"},"function generateString"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"str generateString()"))),(0,r.kt)("h2",{id:"lang-rascal-tutor-questions-ValueGenerator-generateList"},"function generateList"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"str generateList(Type et, int from=0, int to=5)"))),(0,r.kt)("h2",{id:"lang-rascal-tutor-questions-ValueGenerator-generateSet"},"function generateSet"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"str generateSet(Type et, int from=0, int to=5)"))),(0,r.kt)("h2",{id:"lang-rascal-tutor-questions-ValueGenerator-generateMap"},"function generateMap"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"str generateMap(Type kt, Type vt,  int from=0, int to=5)"))),(0,r.kt)("h2",{id:"lang-rascal-tutor-questions-ValueGenerator-generateTuple"},"function generateTuple"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'str generateTuple({Type ","}+ ets)')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"str generateTuple(list[Type] ets)"))),(0,r.kt)("h2",{id:"lang-rascal-tutor-questions-ValueGenerator-generateRel"},"function generateRel"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'str generateRel({Type ","}+ ets)')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"str generateRel(list[Type] ets)"))),(0,r.kt)("h2",{id:"lang-rascal-tutor-questions-ValueGenerator-generateLRel"},"function generateLRel"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'str generateLRel({Type ","}+ ets)'))),(0,r.kt)("h2",{id:"lang-rascal-tutor-questions-ValueGenerator-generateArb"},"function generateArb"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"str generateArb(int n, list[Type] prefs)"))))}g.isMDXComponent=!0}}]);