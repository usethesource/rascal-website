"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[40757],{3905:(e,r,a)=>{a.d(r,{Zo:()=>m,kt:()=>d});var n=a(67294);function t(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function i(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?i(Object(a),!0).forEach((function(r){t(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function o(e,r){if(null==e)return{};var a,n,t=function(e,r){if(null==e)return{};var a,n,t={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],r.indexOf(a)>=0||(t[a]=e[a]);return t}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var s=n.createContext({}),c=function(e){var r=n.useContext(s),a=r;return e&&(a="function"==typeof e?e(r):l(l({},r),e)),a},m=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var a=e.components,t=e.mdxType,i=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=c(a),d=t,f=p["".concat(s,".").concat(d)]||p[d]||u[d]||i;return a?n.createElement(f,l(l({ref:r},m),{},{components:a})):n.createElement(f,l({ref:r},m))}));function d(e,r){var a=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var i=a.length,l=new Array(i);l[0]=p;var o={};for(var s in r)hasOwnProperty.call(r,s)&&(o[s]=r[s]);o.originalType=e,o.mdxType="string"==typeof e?e:t,l[1]=o;for(var c=2;c<i;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},60802:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=a(87462),t=(a(67294),a(3905));const i={title:"module lang::rascal::grammar::definition::Names"},l=void 0,o={unversionedId:"Library/lang/rascal/grammar/definition/Names",id:"Library/lang/rascal/grammar/definition/Names",title:"module lang::rascal::grammar::definition::Names",description:"Usage",source:"@site/docs/Library/lang/rascal/grammar/definition/Names.md",sourceDirName:"Library/lang/rascal/grammar/definition",slug:"/Library/lang/rascal/grammar/definition/Names",permalink:"/docs/Library/lang/rascal/grammar/definition/Names",draft:!1,tags:[],version:"current",frontMatter:{title:"module lang::rascal::grammar::definition::Names"},sidebar:"tutorialSidebar",previous:{title:"module lang::rascal::grammar::definition::Modules",permalink:"/docs/Library/lang/rascal/grammar/definition/Modules"},next:{title:"module lang::rascal::grammar::definition::Parameters",permalink:"/docs/Library/lang/rascal/grammar/definition/Parameters"}},s={},c=[{value:"Usage",id:"usage",level:4},{value:"function resolve",id:"lang-rascal-grammar-definition-Names-resolve",level:2},{value:"function unescape",id:"lang-rascal-grammar-definition-Names-unescape",level:2}],m={toc:c};function u(e){let{components:r,...a}=e;return(0,t.kt)("wrapper",(0,n.Z)({},m,a,{components:r,mdxType:"MDXLayout"}),(0,t.kt)("h4",{id:"usage"},"Usage"),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"import lang::rascal::grammar::definition::Names;")),(0,t.kt)("h2",{id:"lang-rascal-grammar-definition-Names-resolve"},"function resolve"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"Grammar resolve(Grammar d)"))),(0,t.kt)("p",null,"All uses of names are initially labeled 'sort', while declarations put\nthem in four classes: normal, lex, keywords and layout. This function will\nmark all uses accordingly such that the proper interpretation can be done\nby semantic processing of parse trees"),(0,t.kt)("h2",{id:"lang-rascal-grammar-definition-Names-unescape"},"function unescape"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"str unescape(str name)"))))}u.isMDXComponent=!0}}]);