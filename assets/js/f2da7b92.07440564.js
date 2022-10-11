"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[91024],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),p=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,f=d["".concat(o,".").concat(m)]||d[m]||u[m]||l;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<l;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},17673:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const l={title:"String GreaterThan",keywords:[">"]},i=void 0,s={unversionedId:"Rascal/Expressions/Values/String/GreaterThan/index",id:"Rascal/Expressions/Values/String/GreaterThan/index",title:"String GreaterThan",description:"Synopsis",source:"@site/docs/Rascal/Expressions/Values/String/GreaterThan/index.md",sourceDirName:"Rascal/Expressions/Values/String/GreaterThan",slug:"/Rascal/Expressions/Values/String/GreaterThan/",permalink:"/docs/Rascal/Expressions/Values/String/GreaterThan/",draft:!1,tags:[],version:"current",frontMatter:{title:"String GreaterThan",keywords:[">"]},sidebar:"tutorialSidebar",previous:{title:"String Equal",permalink:"/docs/Rascal/Expressions/Values/String/Equal/"},next:{title:"String GreaterThanOrEqual",permalink:"/docs/Rascal/Expressions/Values/String/GreaterThanOrEqual/"}},o={},p=[{value:"Synopsis",id:"synopsis",level:4},{value:"Syntax",id:"syntax",level:4},{value:"Types",id:"types",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"synopsis"},"Synopsis"),(0,a.kt)("p",null,"Greater than operator on string values."),(0,a.kt)("h4",{id:"syntax"},"Syntax"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Exp\u2081 > Exp\u2082")),(0,a.kt)("h4",{id:"types"},"Types"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"th"},"Exp\u2081")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"th"},"Exp\u2082")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"th"},"Exp\u2081 > Exp\u2082")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"str")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"str")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"bool"))))),(0,a.kt)("h4",{id:"description"},"Description"),(0,a.kt)("p",null,"Yields ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," if the string value of ",(0,a.kt)("em",{parentName:"p"},"Exp"),"\u2081 is strictly lexicographically greater\nthan the string value of ",(0,a.kt)("em",{parentName:"p"},"Exp"),"\u2082, and ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," otherwise."),(0,a.kt)("h4",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>"abcdef" > "abc";\nbool: true\nrascal>"defghi" > "abcdef";\nbool: true\nrascal>"a" > "abc";\nbool: false\n')))}u.isMDXComponent=!0}}]);