"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[82250],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,b=d["".concat(i,".").concat(m)]||d[m]||c[m]||s;return n?a.createElement(b,l(l({ref:t},u),{},{components:n})):a.createElement(b,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,l=new Array(s);l[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<s;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},47477:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const s={title:"Node LessThan",keywords:["<"]},l=void 0,o={unversionedId:"Rascal/Expressions/Values/Node/LessThan/index",id:"Rascal/Expressions/Values/Node/LessThan/index",title:"Node LessThan",description:"Synopsis",source:"@site/docs/Rascal/Expressions/Values/Node/LessThan/index.md",sourceDirName:"Rascal/Expressions/Values/Node/LessThan",slug:"/Rascal/Expressions/Values/Node/LessThan/",permalink:"/docs/Rascal/Expressions/Values/Node/LessThan/",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Rascal/Expressions/Values/Node/LessThan/index.md",tags:[],version:"current",frontMatter:{title:"Node LessThan",keywords:["<"]},sidebar:"tutorialSidebar",previous:{title:"Node GreaterThanOrEqual",permalink:"/docs/Rascal/Expressions/Values/Node/GreaterThanOrEqual/"},next:{title:"Node LessThanOrEqual",permalink:"/docs/Rascal/Expressions/Values/Node/LessThanOrEqual/"}},i={},p=[{value:"Synopsis",id:"synopsis",level:4},{value:"Syntax",id:"syntax",level:4},{value:"Types",id:"types",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h4",{id:"synopsis"},"Synopsis"),(0,r.kt)("p",null,"Less than operator on node values."),(0,r.kt)("h4",{id:"syntax"},"Syntax"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Exp<sub>1</sub> < Exp<sub>2</sub>")),(0,r.kt)("h4",{id:"types"},"Types"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"Exp<sub>1</sub>")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"Exp<sub>2</sub>")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"Exp<sub>1</sub> < Exp<sub>2</sub>")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"node")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"node")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bool"))))),(0,r.kt)("h4",{id:"description"},"Description"),(0,r.kt)("p",null,"Comparison on nodes is defined by a lexicographic ordering. Node ",(0,r.kt)("inlineCode",{parentName:"p"},"N = F(N<sub>1</sub>, ..., N~n~)")," is less than node\n",(0,r.kt)("inlineCode",{parentName:"p"},"N = G(M<sub>1</sub>, ..., M~m~)")," when:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"N")," is not equal to ",(0,r.kt)("em",{parentName:"li"},"M"),", and"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"F")," is lexicographically less than ",(0,r.kt)("em",{parentName:"li"},"G"),", or ",(0,r.kt)("em",{parentName:"li"},"F")," is equal to ",(0,r.kt)("em",{parentName:"li"},"G")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"n < m"),".")),(0,r.kt)("h4",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>"f"(10, "abc") < "g"(3);\nbool: true\nrascal>"f"(10) < "f"(10, "abc");\nbool: true\n')))}c.isMDXComponent=!0}}]);