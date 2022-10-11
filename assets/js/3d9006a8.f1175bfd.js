"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[18123],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},p=Object.keys(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),s=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,p=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(a),d=r,b=m["".concat(o,".").concat(d)]||m[d]||c[d]||p;return a?n.createElement(b,l(l({ref:t},u),{},{components:a})):n.createElement(b,l({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=a.length,l=new Array(p);l[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<p;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},81488:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>p,metadata:()=>i,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const p={title:"Map SubMap",keywords:["<="]},l=void 0,i={unversionedId:"Rascal/Expressions/Values/Map/SubMap/index",id:"Rascal/Expressions/Values/Map/SubMap/index",title:"Map SubMap",description:"Synopsis",source:"@site/docs/Rascal/Expressions/Values/Map/SubMap/index.md",sourceDirName:"Rascal/Expressions/Values/Map/SubMap",slug:"/Rascal/Expressions/Values/Map/SubMap/",permalink:"/docs/Rascal/Expressions/Values/Map/SubMap/",draft:!1,tags:[],version:"current",frontMatter:{title:"Map SubMap",keywords:["<="]},sidebar:"tutorialSidebar",previous:{title:"Map StrictSuperMap",permalink:"/docs/Rascal/Expressions/Values/Map/StrictSuperMap/"},next:{title:"Map Subscription",permalink:"/docs/Rascal/Expressions/Values/Map/Subscription/"}},o={},s=[{value:"Synopsis",id:"synopsis",level:4},{value:"Syntax",id:"syntax",level:4},{value:"Types",id:"types",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4}],u={toc:s};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h4",{id:"synopsis"},"Synopsis"),(0,r.kt)("p",null,"Submap operator on map values."),(0,r.kt)("h4",{id:"syntax"},"Syntax"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Exp\u2081 <= Exp\u2082")),(0,r.kt)("h4",{id:"types"},"Types"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"Exp\u2081")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"Exp\u2082")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"Exp\u2081 <= Exp\u2082")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"map[TK\u2081,TV\u2082]")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"map[TK\u2082, TV\u2082]")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bool"))))),(0,r.kt)("h4",{id:"description"},"Description"),(0,r.kt)("p",null,"Yields ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," if all key/value pairs in the map value of ",(0,r.kt)("em",{parentName:"p"},"Exp"),"\u2081 occur in the map value ",(0,r.kt)("em",{parentName:"p"},"Exp"),"\u2082\nor the values of ",(0,r.kt)("em",{parentName:"p"},"Exp"),"\u2081 and ",(0,r.kt)("em",{parentName:"p"},"Exp"),"\u2082 are equal, and ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," otherwise."),(0,r.kt)("h4",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>("apple": 1, "pear": 2) <= ("pear": 2, "apple": 1);\nbool: true\nrascal>("apple": 1, "pear": 2) <= ("pear": 2, "apple": 1, "banana" : 3);\nbool: true\nrascal>("apple": 1, "pear": 2) <= ("apple": 1, "banana" : 3);\nbool: false\n')))}c.isMDXComponent=!0}}]);