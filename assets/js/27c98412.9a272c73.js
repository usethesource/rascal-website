"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[99562],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,f=d["".concat(i,".").concat(m)]||d[m]||u[m]||l;return n?a.createElement(f,s(s({ref:t},c),{},{components:n})):a.createElement(f,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var p=2;p<l;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},40421:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={title:"Boolean IfDefinedElse",keywords:["?"]},s=void 0,o={unversionedId:"Rascal/Expressions/Values/Boolean/IfDefinedElse/index",id:"Rascal/Expressions/Values/Boolean/IfDefinedElse/index",title:"Boolean IfDefinedElse",description:"Synopsis",source:"@site/docs/Rascal/Expressions/Values/Boolean/IfDefinedElse/index.md",sourceDirName:"Rascal/Expressions/Values/Boolean/IfDefinedElse",slug:"/Rascal/Expressions/Values/Boolean/IfDefinedElse/",permalink:"/docs/Rascal/Expressions/Values/Boolean/IfDefinedElse/",draft:!1,tags:[],version:"current",frontMatter:{title:"Boolean IfDefinedElse",keywords:["?"]},sidebar:"tutorialSidebar",previous:{title:"Boolean Equivalence",permalink:"/docs/Rascal/Expressions/Values/Boolean/Equivalence/"},next:{title:"Boolean Implication",permalink:"/docs/Rascal/Expressions/Values/Boolean/Implication/"}},i={},p=[{value:"Synopsis",id:"synopsis",level:4},{value:"Syntax",id:"syntax",level:4},{value:"Types",id:"types",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h4",{id:"synopsis"},"Synopsis"),(0,r.kt)("p",null,"Test whether expression has a defined value, otherwise provide alternative."),(0,r.kt)("h4",{id:"syntax"},"Syntax"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Exp\u2081 ? Exp\u2082")),(0,r.kt)("h4",{id:"types"},"Types"),(0,r.kt)("p",null,"//"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"Exp\u2081")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"Exp\u2082")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"Exp\u2081 ? Exp\u2082")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"T\u2081")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"T\u2082")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"T\u2082 <: T\u2081"))))),(0,r.kt)("h4",{id:"description"},"Description"),(0,r.kt)("p",null,"If no exception is generated during the evaluation of ",(0,r.kt)("em",{parentName:"p"},"Exp"),"\u2081, the result of ",(0,r.kt)("inlineCode",{parentName:"p"},"Exp\u2081 ? Exp\u2082")," is the value of ",(0,r.kt)("em",{parentName:"p"},"Exp"),"\u2081.\nOtherwise, it is the value of ",(0,r.kt)("em",{parentName:"p"},"Exp"),"\u2082."),(0,r.kt)("p",null,"Also see ",(0,r.kt)("a",{parentName:"p",href:"/docs/Rascal/Expressions/Values/Boolean/IsDefined/"},"IsDefined")," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/Rascal/Statements/Assignment/"},"Assignment"),"."),(0,r.kt)("h4",{id:"examples"},"Examples"),(0,r.kt)("p",null,"This test can, for instance, be used to handle the case that a certain key value is not in a map:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell",metastring:",error",",error":!0},'rascal>T = ("a" : 1, "b" : 2);\nmap[str, int]: ("a":1,"b":2)\n')),(0,r.kt)("p",null,"Trying to access the key ",(0,r.kt)("inlineCode",{parentName:"p"},'"c"')," will result in an error:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell",metastring:",continue,error",",continue,error":!0},'rascal>T["c"];\n|prompt:///|(2,3,<1,2>,<1,5>): NoSuchKey("c")\n    at $shell$(|prompt:///|(0,7,<1,0>,<1,7>))\nok\n')),(0,r.kt)("p",null,"Using the ",(0,r.kt)("inlineCode",{parentName:"p"},"?")," operator, we can write:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell",metastring:",continue,error",",continue,error":!0},'rascal>T["c"] ? 0;\nint: 0\n')),(0,r.kt)("p",null,"This is very useful, if we want to modify the associated value, but are not sure whether it exists:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell",metastring:",continue,error",",continue,error":!0},'rascal>T["c"] ? 0 += 1;\nmap[str, int]: ("a":1,"b":2,"c":1)\n')),(0,r.kt)("p",null,"Another example using a list:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell",metastring:",continue,error",",continue,error":!0},"rascal>L = [10, 20, 30];\nlist[int]: [10,20,30]\nrascal>L[4] ? 0;\nint: 0\n")),(0,r.kt)("p",null,"It is, however, not possible to assign to index positions outside the list."))}u.isMDXComponent=!0}}]);