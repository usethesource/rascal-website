"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[51021],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>b});var n=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var o=n.createContext({}),p=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,a=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(r),b=s,m=d["".concat(o,".").concat(b)]||d[b]||c[b]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function b(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:s,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5785:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(83117),s=(r(67294),r(3905));const a={title:"List StrictSubList",keywords:["<"]},i=void 0,l={unversionedId:"Rascal/Expressions/Values/List/StrictSubList/index",id:"Rascal/Expressions/Values/List/StrictSubList/index",title:"List StrictSubList",description:"Synopsis",source:"@site/docs/Rascal/Expressions/Values/List/StrictSubList/index.md",sourceDirName:"Rascal/Expressions/Values/List/StrictSubList",slug:"/Rascal/Expressions/Values/List/StrictSubList/",permalink:"/docs/Rascal/Expressions/Values/List/StrictSubList/",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Rascal/Expressions/Values/List/StrictSubList/index.md",tags:[],version:"current",frontMatter:{title:"List StrictSubList",keywords:["<"]},sidebar:"tutorialSidebar",previous:{title:"List Splice",permalink:"/docs/Rascal/Expressions/Values/List/Splice/"},next:{title:"List StrictSuperList",permalink:"/docs/Rascal/Expressions/Values/List/StrictSuperList/"}},o={},p=[{value:"Synopsis",id:"synopsis",level:4},{value:"Syntax",id:"syntax",level:4},{value:"Types",id:"types",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4}],u={toc:p};function c(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h4",{id:"synopsis"},"Synopsis"),(0,s.kt)("p",null,"The strict sublist operator on lists."),(0,s.kt)("h4",{id:"syntax"},"Syntax"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Exp<sub>1</sub> < Exp<sub>2</sub>")),(0,s.kt)("h4",{id:"types"},"Types"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"th"},"Exp<sub>1</sub>")),(0,s.kt)("th",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"th"},"Exp<sub>2</sub>")),(0,s.kt)("th",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"th"},"Exp<sub>1</sub> < Exp<sub>2</sub>")))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"list[T<sub>1</sub>]")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"list[T<sub>2</sub>]")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"bool"))))),(0,s.kt)("h4",{id:"description"},"Description"),(0,s.kt)("p",null,"Yields ",(0,s.kt)("inlineCode",{parentName:"p"},"true")," if the value of Exp",(0,s.kt)("sub",null,"1")," is a strict sublist of the value of Exp",(0,s.kt)("sub",null,"2"),",  and ",(0,s.kt)("inlineCode",{parentName:"p"},"false")," otherwise."),(0,s.kt)("h4",{id:"examples"},"Examples"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>[1, 2, 3] < [1, 2, 3, 4];\nbool: true\nrascal>[1, 2, 3, 4] < [1, 2, 3, 4];\nbool: false\nrascal>[1, 3, 5] < [1, 2, 3, 4, 5]\nbool: true\n")))}c.isMDXComponent=!0}}]);