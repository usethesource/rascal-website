"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[86990],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),l=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(r),d=n,f=m["".concat(o,".").concat(d)]||m[d]||u[d]||i;return r?a.createElement(f,c(c({ref:t},p),{},{components:r})):a.createElement(f,c({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:n,c[1]=s;for(var l=2;l<i;l++)c[l]=r[l];return a.createElement.apply(null,c)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},41029:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=r(87462),n=(r(67294),r(3905));const i={title:"Static Semantics"},c=void 0,s={unversionedId:"Rascalopedia/StaticSemantics/index",id:"Rascalopedia/StaticSemantics/index",title:"Static Semantics",description:"Synopsis",source:"@site/docs/Rascalopedia/StaticSemantics/index.md",sourceDirName:"Rascalopedia/StaticSemantics",slug:"/Rascalopedia/StaticSemantics/",permalink:"/docs/Rascalopedia/StaticSemantics/",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Rascalopedia/StaticSemantics/index.md",tags:[],version:"current",frontMatter:{title:"Static Semantics"},sidebar:"tutorialSidebar",previous:{title:"Software Metric",permalink:"/docs/Rascalopedia/SoftwareMetric/"},next:{title:"Syntax",permalink:"/docs/Rascalopedia/Syntax/"}},o={},l=[{value:"Synopsis",id:"synopsis",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4}],p={toc:l};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h4",{id:"synopsis"},"Synopsis"),(0,n.kt)("p",null,"Description of the properties of a program that can be determined/checked before it is executed."),(0,n.kt)("h4",{id:"description"},"Description"),(0,n.kt)("p",null,"The static semantics of a program describe all properties that can be determined before the program is executed.\nA ",(0,n.kt)("a",{parentName:"p",href:"../../Rascalopedia/Typechecker"},"Typechecker")," is a tool that checks the properties of a program as described by its static semantics."),(0,n.kt)("p",null,"Static semantics describes properties that are relevant before a program is executed and\ndiffers from ",(0,n.kt)("a",{parentName:"p",href:"../../Rascalopedia/DynamicSemantics"},"Dynamic Semantics")," that\ndescribes the execution behaviour itself."),(0,n.kt)("h4",{id:"examples"},"Examples"),(0,n.kt)("p",null,"Examples of static semantic properties include:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The proper use of types."),(0,n.kt)("li",{parentName:"ul"},"The proper use of names.")),(0,n.kt)("p",null,"Language with substantial static semantics: Java, Haskell, Rascal.\nLanguages with only dynamic semantics: Python, Ruby."))}u.isMDXComponent=!0}}]);