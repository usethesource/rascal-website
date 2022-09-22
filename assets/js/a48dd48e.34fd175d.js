"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[97287],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),o=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=o(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=o(n),d=r,b=m["".concat(i,".").concat(d)]||m[d]||c[d]||s;return n?a.createElement(b,l(l({ref:t},u),{},{components:n})):a.createElement(b,l({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,l=new Array(s);l[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var o=2;o<s;o++)l[o]=n[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},24750:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>s,metadata:()=>p,toc:()=>o});var a=n(83117),r=(n(67294),n(3905));const s={title:"Map Difference",keywords:["-"]},l=void 0,p={unversionedId:"Rascal/Expressions/Values/Map/Difference/index",id:"Rascal/Expressions/Values/Map/Difference/index",title:"Map Difference",description:"Synopsis",source:"@site/docs/Rascal/Expressions/Values/Map/Difference/index.md",sourceDirName:"Rascal/Expressions/Values/Map/Difference",slug:"/Rascal/Expressions/Values/Map/Difference/",permalink:"/docs/Rascal/Expressions/Values/Map/Difference/",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Rascal/Expressions/Values/Map/Difference/index.md",tags:[],version:"current",frontMatter:{title:"Map Difference",keywords:["-"]},sidebar:"tutorialSidebar",previous:{title:"Map Comprehension",permalink:"/docs/Rascal/Expressions/Values/Map/Comprehension/"},next:{title:"Map Equal",permalink:"/docs/Rascal/Expressions/Values/Map/Equal/"}},i={},o=[{value:"Synopsis",id:"synopsis",level:4},{value:"Syntax",id:"syntax",level:4},{value:"Types",id:"types",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4}],u={toc:o};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h4",{id:"synopsis"},"Synopsis"),(0,r.kt)("p",null,"The difference between two maps."),(0,r.kt)("h4",{id:"syntax"},"Syntax"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Exp<sub>1</sub> - Exp<sub>2</sub>")),(0,r.kt)("h4",{id:"types"},"Types"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"Exp<sub>1</sub>")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"Exp<sub>2</sub>")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"Exp<sub>1</sub> - Exp<sub>2</sub>")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"map[TK<sub>1</sub>, TV<sub>1</sub>]")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"map[TK<sub>2</sub>, TV<sub>2</sub>]")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"map[lub(TK<sub>1</sub>,TK<sub>2</sub>),lub(TK<sub>1</sub>,TK<sub>2</sub>)]"))))),(0,r.kt)("h4",{id:"description"},"Description"),(0,r.kt)("p",null,"The result is the difference of the two map values of ",(0,r.kt)("em",{parentName:"p"},"Exp"),(0,r.kt)("sub",null,"1")," and ",(0,r.kt)("em",{parentName:"p"},"Exp"),(0,r.kt)("sub",null,"2"),",\ni.e. a map with all pairs in ",(0,r.kt)("em",{parentName:"p"},"Exp"),(0,r.kt)("sub",null,"1")," that do have a key that does not occur in ",(0,r.kt)("em",{parentName:"p"},"Exp"),(0,r.kt)("sub",null,"2"),"."),(0,r.kt)("h4",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>("apple": 1, "pear": 2) - ("banana": 3, "apple": 4);\nmap[str, int]: ("pear":2)\n')))}c.isMDXComponent=!0}}]);