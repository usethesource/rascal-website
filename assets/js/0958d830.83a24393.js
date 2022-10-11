"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[41521],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,y=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(y,i(i({ref:t},c),{},{components:n})):r.createElement(y,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},46207:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={title:"Location GreaterThan",keywords:[">"]},i=void 0,l={unversionedId:"Rascal/Expressions/Values/Location/GreaterThan/index",id:"Rascal/Expressions/Values/Location/GreaterThan/index",title:"Location GreaterThan",description:"Synopsis",source:"@site/docs/Rascal/Expressions/Values/Location/GreaterThan/index.md",sourceDirName:"Rascal/Expressions/Values/Location/GreaterThan",slug:"/Rascal/Expressions/Values/Location/GreaterThan/",permalink:"/docs/Rascal/Expressions/Values/Location/GreaterThan/",draft:!1,tags:[],version:"current",frontMatter:{title:"Location GreaterThan",keywords:[">"]},sidebar:"tutorialSidebar",previous:{title:"Location FieldSelection",permalink:"/docs/Rascal/Expressions/Values/Location/FieldSelection/"},next:{title:"Location GreaterThanOrEqual",permalink:"/docs/Rascal/Expressions/Values/Location/GreaterThanOrEqual/"}},s={},p=[{value:"Synopsis",id:"synopsis",level:4},{value:"Syntax",id:"syntax",level:4},{value:"Types",id:"types",level:4},{value:"Description",id:"description",level:4}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"synopsis"},"Synopsis"),(0,a.kt)("p",null,"The greater than operator on location values."),(0,a.kt)("h4",{id:"syntax"},"Syntax"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Exp\u2081 > Exp\u2082")),(0,a.kt)("h4",{id:"types"},"Types"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"th"},"Exp\u2081")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"th"},"Exp\u2082")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"th"},"Exp\u2081 > Exp\u2082")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"loc")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"loc")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"bool"))))),(0,a.kt)("h4",{id:"description"},"Description"),(0,a.kt)("p",null,"Yields ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," if the location value of ",(0,a.kt)("em",{parentName:"p"},"Exp"),"\u2081 strictly textually encloses\nthe location value of ",(0,a.kt)("em",{parentName:"p"},"Exp"),"\u2082, and ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," otherwise."))}u.isMDXComponent=!0}}]);