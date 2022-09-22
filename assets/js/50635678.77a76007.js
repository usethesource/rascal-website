"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[15884],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),f=a,m=d["".concat(o,".").concat(f)]||d[f]||c[f]||s;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,l=new Array(s);l[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<s;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},82347:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var r=n(83117),a=(n(67294),n(3905));const s={title:"Set Difference",keywords:["-"]},l=void 0,i={unversionedId:"Rascal/Expressions/Values/Set/Difference/index",id:"Rascal/Expressions/Values/Set/Difference/index",title:"Set Difference",description:"Synopsis",source:"@site/docs/Rascal/Expressions/Values/Set/Difference/index.md",sourceDirName:"Rascal/Expressions/Values/Set/Difference",slug:"/Rascal/Expressions/Values/Set/Difference/",permalink:"/docs/Rascal/Expressions/Values/Set/Difference/",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Rascal/Expressions/Values/Set/Difference/index.md",tags:[],version:"current",frontMatter:{title:"Set Difference",keywords:["-"]},sidebar:"tutorialSidebar",previous:{title:"Set Comprehension",permalink:"/docs/Rascal/Expressions/Values/Set/Comprehension/"},next:{title:"Set Equal",permalink:"/docs/Rascal/Expressions/Values/Set/Equal/"}},o={},p=[{value:"Synopsis",id:"synopsis",level:4},{value:"Syntax",id:"syntax",level:4},{value:"Types",id:"types",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"synopsis"},"Synopsis"),(0,a.kt)("p",null,"The difference between two sets."),(0,a.kt)("h4",{id:"syntax"},"Syntax"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Exp<sub>1</sub> - Exp<sub>2</sub>")),(0,a.kt)("h4",{id:"types"},"Types"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"th"},"Exp<sub>1</sub>")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"th"},"Exp<sub>2</sub>")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"th"},"Exp<sub>1</sub> - Exp<sub>2</sub>")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"set[T<sub>1</sub>]")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"set[T<sub>2</sub>]")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"set[lub(T<sub>1</sub>,T<sub>2</sub>)]"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"set[T<sub>1</sub>]")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"T<sub>2</sub>")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"set[lub(T<sub>1</sub>,T<sub>2</sub>)]"))))),(0,a.kt)("h4",{id:"description"},"Description"),(0,a.kt)("p",null,"If both ",(0,a.kt)("em",{parentName:"p"},"Exp"),(0,a.kt)("sub",null,"1")," and ",(0,a.kt)("em",{parentName:"p"},"Exp"),(0,a.kt)("sub",null,"2")," have a set as value, the result is the difference of these two set values.\nIf ",(0,a.kt)("em",{parentName:"p"},"Exp"),(0,a.kt)("sub",null,"2")," does not have a set as value, it is first converted to a set before the difference is computed.\nThe difference is computed by removing all elements of the second set from the first set."),(0,a.kt)("h4",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>{1, 2, 3, 4} - {1, 2, 3};\nset[int]: {4}\nrascal>{1, 2, 3, 4} - {3};\nset[int]: {1,2,4}\nrascal>{1, 2, 3, 4} - 3;\nset[int]: {1,2,4}\nrascal>{1, 2, 3, 4} - {5, 6, 7};\nset[int]: {1,3,2,4}\n")))}c.isMDXComponent=!0}}]);