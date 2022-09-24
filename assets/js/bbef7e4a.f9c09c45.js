"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[88476],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,y=u["".concat(o,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(y,s(s({ref:t},c),{},{components:n})):r.createElement(y,s({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var p=2;p<i;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},47676:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={title:"Empty List"},s=void 0,l={unversionedId:"RunTimeErrors/RuntimeExceptions/EmptyList/index",id:"RunTimeErrors/RuntimeExceptions/EmptyList/index",title:"Empty List",description:"Synopsis",source:"@site/docs/RunTimeErrors/RuntimeExceptions/EmptyList/index.md",sourceDirName:"RunTimeErrors/RuntimeExceptions/EmptyList",slug:"/RunTimeErrors/RuntimeExceptions/EmptyList/",permalink:"/docs/RunTimeErrors/RuntimeExceptions/EmptyList/",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/RunTimeErrors/RuntimeExceptions/EmptyList/index.md",tags:[],version:"current",frontMatter:{title:"Empty List"},sidebar:"tutorialSidebar",previous:{title:"Assertion Failed",permalink:"/docs/RunTimeErrors/RuntimeExceptions/AssertionFailed/"},next:{title:"Empty Map",permalink:"/docs/RunTimeErrors/RuntimeExceptions/EmptyMap/"}},o={},p=[{value:"Synopsis",id:"synopsis",level:4},{value:"Types",id:"types",level:4},{value:"Usage",id:"usage",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4}],c={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"synopsis"},"Synopsis"),(0,a.kt)("p",null,"Illegal operation on an empty list."),(0,a.kt)("h4",{id:"types"},"Types"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"data RuntimeException = EmptyList();")),(0,a.kt)("h4",{id:"usage"},"Usage"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"import Exception;")," (only needed when ",(0,a.kt)("inlineCode",{parentName:"p"},"EmptyList")," is used in ",(0,a.kt)("inlineCode",{parentName:"p"},"catch"),")"),(0,a.kt)("h4",{id:"description"},"Description"),(0,a.kt)("p",null,"Rascal provides many operations and functions on lists, see ",(0,a.kt)("a",{parentName:"p",href:"../../../Rascal/Expressions/Values/List"},"list values"),"\nand ",(0,a.kt)("a",{parentName:"p",href:"/docs/Library/List"},"list functions"),".\nThis error is generated when a function or operation cannot handle the empty list."),(0,a.kt)("p",null,"Remedies:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Guard the function or operation with a test on the empty list (",(0,a.kt)("a",{parentName:"li",href:"/docs/Library/List#List-isEmpty"},"isEmpty"),") and\ntake alternative action in that case."),(0,a.kt)("li",{parentName:"ul"},"Catch the ",(0,a.kt)("inlineCode",{parentName:"li"},"EmptyList")," yourself, see ",(0,a.kt)("a",{parentName:"li",href:"../../../Rascal/Statements/TryCatch"},"try catch"),".")),(0,a.kt)("h4",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Import the ",(0,a.kt)("inlineCode",{parentName:"p"},"List")," library and introduce ",(0,a.kt)("inlineCode",{parentName:"p"},"L")," with an empty list as value:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>import List;\nok\nrascal>L = [];\nlist[void]: []\n")),(0,a.kt)("p",null,"Taking the head of an empty list gives an error:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>head(L);\n|std:///List.rsc|(4522,9,<195,38>,<195,47>): EmptyList()\n    at head(|std:///List.rsc|(4484,52,<195,0>,<195,52>))\n    at $shell$(|prompt:///|(0,8,<1,0>,<1,8>))\nok\n")),(0,a.kt)("p",null,"This is the case when taking the tail as well:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>tail(L);\n|std:///List.rsc|(18315,9,<841,44>,<841,53>): EmptyList()\n    at tail(|std:///List.rsc|(18271,58,<841,0>,<841,58>))\n    at $shell$(|prompt:///|(0,8,<1,0>,<1,8>))\nok\n")),(0,a.kt)("p",null,"We can also catch the ",(0,a.kt)("inlineCode",{parentName:"p"},"EmptyList")," error. First import the Rascal exceptions (which are also included in ",(0,a.kt)("inlineCode",{parentName:"p"},"Prelude"),")\nand ",(0,a.kt)("inlineCode",{parentName:"p"},"IO"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>import Exception;\nok\nrascal>import IO;\nok\nrascal>try \n>>>>>>>  println(head(L)); \n>>>>>>>catch EmptyList(): \n>>>>>>>  println("Cannot take head of empty list");\n  println("Cannot take head of empty list");\nCannot take head of empty list\nok\n')))}m.isMDXComponent=!0}}]);