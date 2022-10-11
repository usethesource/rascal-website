"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[16665],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),y=p(n),d=r,f=y["".concat(l,".").concat(d)]||y[d]||u[d]||i;return n?a.createElement(f,s(s({ref:t},c),{},{components:n})):a.createElement(f,s({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=y;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},56701:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={title:"Reified Types",keywords:["#","type","&"]},s=void 0,o={unversionedId:"Rascal/Declarations/StaticTyping/ReifiedTypes/index",id:"Rascal/Declarations/StaticTyping/ReifiedTypes/index",title:"Reified Types",description:"Synopsis",source:"@site/docs/Rascal/Declarations/StaticTyping/ReifiedTypes/index.md",sourceDirName:"Rascal/Declarations/StaticTyping/ReifiedTypes",slug:"/Rascal/Declarations/StaticTyping/ReifiedTypes/",permalink:"/docs/Rascal/Declarations/StaticTyping/ReifiedTypes/",draft:!1,tags:[],version:"current",frontMatter:{title:"Reified Types",keywords:["#","type","&"]},sidebar:"tutorialSidebar",previous:{title:"StaticTyping",permalink:"/docs/Rascal/Declarations/StaticTyping/"},next:{title:"Type Constraints",permalink:"/docs/Rascal/Declarations/StaticTyping/TypeConstraints/"}},l={},p=[{value:"Synopsis",id:"synopsis",level:4},{value:"Syntax",id:"syntax",level:4},{value:"Types",id:"types",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h4",{id:"synopsis"},"Synopsis"),(0,r.kt)("p",null,"Reified types are types that can be used as values."),(0,r.kt)("h4",{id:"syntax"},"Syntax"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"# Name")),(0,r.kt)("h4",{id:"types"},"Types"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"type")),(0,r.kt)("h4",{id:"description"},"Description"),(0,r.kt)("p",null,"Usually one declares functions that have arguments that have a type that corresponds to one of the many forms of values in Rascal.\nIn exceptional circumstances it is desirable to define functions that have a type itself as argument. "),(0,r.kt)("p",null,"To solve this problem in a more general manner something special has to be done.\nTypes are not values and without an additional mechanism they cannot be passed as arguments to functions.\nTo achieve this effect we introduce reified types that are denoted by the type ",(0,r.kt)("inlineCode",{parentName:"p"},"type"),".\nIn other words, reified types make it possible to use types as values."),(0,r.kt)("h4",{id:"examples"},"Examples"),(0,r.kt)("p",null,"The prototypical example is a parse function: how to write a type safe parse function that expresses the type of the result we expect?\nSuppose we want to parse a language that has the non-terminals ",(0,r.kt)("inlineCode",{parentName:"p"},"EXP"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"STAT")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"PROGRAM"),".\nA first, naive, solution introduces a parse function for each non-terminal:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal"},"EXP parseEXP(str s){ ... }\nSTAT parsePROGRAM(str s) { ... }\nPROGRAM parsePROGRAM(str s) { ... }\n")),(0,r.kt)("p",null,"Unfortunately this solution does not scale well to large languages with many non-terminals and it breaks down completely\nwhen we do not know the non-terminals before hand."),(0,r.kt)("p",null,"Now we can write (see ",(0,r.kt)("a",{parentName:"p",href:"/docs/Rascal/Declarations/StaticTyping/TypeParameters/"},"Type Parameters")," for a description of the ",(0,r.kt)("inlineCode",{parentName:"p"},"&T")," notation):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal"},"&T parse(type[&T] start, str s) { ... }\n")),(0,r.kt)("p",null,"and use the parse by giving it a type as argument:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal"},'parse(#EXP, "1+3");\n')))}u.isMDXComponent=!0}}]);