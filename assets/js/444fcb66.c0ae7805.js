"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[98245],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),p=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,f=d["".concat(o,".").concat(m)]||d[m]||c[m]||i;return r?n.createElement(f,s(s({ref:t},u),{},{components:r})):n.createElement(f,s({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var p=2;p<i;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},72980:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const i={title:"Tuple Subscription",keywords:["[","]"]},s=void 0,l={unversionedId:"Rascal/Expressions/Values/Tuple/Subscription/index",id:"Rascal/Expressions/Values/Tuple/Subscription/index",title:"Tuple Subscription",description:"Synopsis",source:"@site/docs/Rascal/Expressions/Values/Tuple/Subscription/index.md",sourceDirName:"Rascal/Expressions/Values/Tuple/Subscription",slug:"/Rascal/Expressions/Values/Tuple/Subscription/",permalink:"/docs/Rascal/Expressions/Values/Tuple/Subscription/",draft:!1,tags:[],version:"current",frontMatter:{title:"Tuple Subscription",keywords:["[","]"]},sidebar:"tutorialSidebar",previous:{title:"Tuple NotEqual",permalink:"/docs/Rascal/Expressions/Values/Tuple/NotEqual/"},next:{title:"Value",permalink:"/docs/Rascal/Expressions/Values/Value/"}},o={},p=[{value:"Synopsis",id:"synopsis",level:4},{value:"Syntax",id:"syntax",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4}],u={toc:p};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"synopsis"},"Synopsis"),(0,a.kt)("p",null,"Retrieve a tuple field by its index position."),(0,a.kt)("h4",{id:"syntax"},"Syntax"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Exp\u2081 [ Exp\u2082 ]")),(0,a.kt)("h4",{id:"description"},"Description"),(0,a.kt)("p",null,"Subscription retrieves the tuple element with index ",(0,a.kt)("em",{parentName:"p"},"Exp"),"\u2082 from the tuple value of ",(0,a.kt)("em",{parentName:"p"},"Exp"),"\u2081."),(0,a.kt)("h4",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Introduce a tuple, assign it to T and retrieve the element with index 0:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>T = <"mon", 1>;\ntuple[str,int]: <"mon",1>\nrascal>T[0];\nstr: "mon"\n')))}c.isMDXComponent=!0}}]);