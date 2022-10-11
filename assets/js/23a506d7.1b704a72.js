"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[13937],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),o=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=o(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=o(n),d=r,b=m["".concat(c,".").concat(d)]||m[d]||u[d]||s;return n?a.createElement(b,l(l({ref:t},p),{},{components:n})):a.createElement(b,l({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,l=new Array(s);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var o=2;o<s;o++)l[o]=n[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},69604:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>o});var a=n(87462),r=(n(67294),n(3905));const s={title:"Subscription",keywords:["[","]","="]},l=void 0,i={unversionedId:"Rascal/Statements/Assignment/Subscription/index",id:"Rascal/Statements/Assignment/Subscription/index",title:"Subscription",description:"Synopsis",source:"@site/docs/Rascal/Statements/Assignment/Subscription/index.md",sourceDirName:"Rascal/Statements/Assignment/Subscription",slug:"/Rascal/Statements/Assignment/Subscription/",permalink:"/docs/Rascal/Statements/Assignment/Subscription/",draft:!1,tags:[],version:"current",frontMatter:{title:"Subscription",keywords:["[","]","="]},sidebar:"tutorialSidebar",previous:{title:"Slice",permalink:"/docs/Rascal/Statements/Assignment/Slice/"},next:{title:"Variable",permalink:"/docs/Rascal/Statements/Assignment/Variable/"}},c={},o=[{value:"Synopsis",id:"synopsis",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4}],p={toc:o};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h4",{id:"synopsis"},"Synopsis"),(0,r.kt)("p",null,"Assign a single element of a structured value."),(0,r.kt)("h4",{id:"description"},"Description"),(0,r.kt)("p",null,"Let ",(0,r.kt)("em",{parentName:"p"},"V")," be the current value of ",(0,r.kt)("em",{parentName:"p"},"Assignable"),". The value of ",(0,r.kt)("em",{parentName:"p"},"Exp"),"\u2081 is used as index in ",(0,r.kt)("em",{parentName:"p"},"V")," and\nthe value of ",(0,r.kt)("em",{parentName:"p"},"Exp"),"\u2082 replaces the original value at that index position.\nThe result is a new value ",(0,r.kt)("em",{parentName:"p"},"V"),"' that is assigned to the ",(0,r.kt)("em",{parentName:"p"},"Assignable"),"."),(0,r.kt)("h4",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"")),(0,r.kt)("p",null,"Assignable has a list value:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell",metastring:",continue",",continue":!0},"rascal>L = [10,20,30];\nlist[int]: [10,20,30]\nrascal>P = L;\nlist[int]: [10,20,30]\nrascal>L[1] = 200;\nlist[int]: [10,200,30]\n")),(0,r.kt)("p",null,"Observe that ",(0,r.kt)("inlineCode",{parentName:"p"},"P")," is unchanged:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell",metastring:",continue",",continue":!0},"rascal>P;\nlist[int]: [10,20,30]\n")),(0,r.kt)("p",null,"Assignable has a map value:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell",metastring:",continue",",continue":!0},'rascal>M = ("abc": 1, "def" : 2);\nmap[str, int]: ("abc":1,"def":2)\nrascal>M["def"] = 3;\nmap[str, int]: ("abc":1,"def":3)\n')),(0,r.kt)("p",null,"Assignable has a tuple value:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell",metastring:",continue",",continue":!0},'rascal>T = <1, "abc", true>;\ntuple[int,str,bool]: <1,"abc",true>\nrascal>T[1] = "def";\ntuple[int,str,bool]: <1,"def",true>\n')),(0,r.kt)("p",null,"NOTE: See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/usethesource/rascal/issues/948"},"https://github.com/usethesource/rascal/issues/948")))}u.isMDXComponent=!0}}]);