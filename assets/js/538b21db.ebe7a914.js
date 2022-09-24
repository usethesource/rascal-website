"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[36446],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),f=a,d=m["".concat(i,".").concat(f)]||m[f]||u[f]||o;return n?r.createElement(d,s(s({ref:t},c),{},{components:n})):r.createElement(d,s({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},81423:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={title:"For",keywords:["for"]},s=void 0,l={unversionedId:"Rascal/Statements/For/index",id:"Rascal/Statements/For/index",title:"For",description:"Synopsis",source:"@site/docs/Rascal/Statements/For/index.md",sourceDirName:"Rascal/Statements/For",slug:"/Rascal/Statements/For/",permalink:"/docs/Rascal/Statements/For/",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Rascal/Statements/For/index.md",tags:[],version:"current",frontMatter:{title:"For",keywords:["for"]},sidebar:"tutorialSidebar",previous:{title:"Fail",permalink:"/docs/Rascal/Statements/Fail/"},next:{title:"If",permalink:"/docs/Rascal/Statements/If/"}},i={},p=[{value:"Synopsis",id:"synopsis",level:4},{value:"Syntax",id:"syntax",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"synopsis"},"Synopsis"),(0,a.kt)("p",null,"For loop."),(0,a.kt)("h4",{id:"syntax"},"Syntax"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"for ( Exp<sub>1</sub> , Exp<sub>2</sub> , ... , Exp~n~ ) Statement;")),(0,a.kt)("h4",{id:"description"},"Description"),(0,a.kt)("p",null,"The for-statement executes ",(0,a.kt)("em",{parentName:"p"},"Statement")," for all possible combinations of values generated, and filtered, by the expressions ",(0,a.kt)("em",{parentName:"p"},"Exp"),"~i~."),(0,a.kt)("p",null,"Some of the expressions can generate bindings (",(0,a.kt)("a",{parentName:"p",href:"../../../Rascal/Expressions/Comprehensions/Enumerator"},"Enumerator"),", <<Values,Boolean,Match>>), and some can filter them (",(0,a.kt)("a",{parentName:"p",href:"../../../Rascal/Expressions/Values"},"Values"),").\nThe for loop will iterate over the cartesian product of all the generating expressions, and filter the combinations which fail the conditional expressions. "),(0,a.kt)("p",null,"By default, the value of a for statement is the empty list. In general,\nthe value of a for statement consists of all values contributed by ",(0,a.kt)("a",{parentName:"p",href:"../../../Rascal/Statements/Append"},"Append")," statements that are executed during the repeated execution of its body Statement."),(0,a.kt)("h4",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>import IO;\nok\nrascal>for(int n <- [1 .. 5]) println("n = <n>");\nfor(int n <- [1 .. 5]) println("n = <n>");\nn = 1\nn = 2\nn = 3\nn = 4\nlist[void]: []\nrascal>for(int n <- [1 .. 5]) append n * n;\nlist[int]: [1,4,9,16]\n')))}u.isMDXComponent=!0}}]);