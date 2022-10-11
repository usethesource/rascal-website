"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[33797],{3905:(e,r,a)=>{a.d(r,{Zo:()=>p,kt:()=>u});var n=a(67294);function t(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function l(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?l(Object(a),!0).forEach((function(r){t(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function i(e,r){if(null==e)return{};var a,n,t=function(e,r){if(null==e)return{};var a,n,t={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],r.indexOf(a)>=0||(t[a]=e[a]);return t}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var c=n.createContext({}),s=function(e){var r=n.useContext(c),a=r;return e&&(a="function"==typeof e?e(r):o(o({},r),e)),a},p=function(e){var r=s(e.components);return n.createElement(c.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var a=e.components,t=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),y=s(a),u=t,d=y["".concat(c,".").concat(u)]||y[u]||m[u]||l;return a?n.createElement(d,o(o({ref:r},p),{},{components:a})):n.createElement(d,o({ref:r},p))}));function u(e,r){var a=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var l=a.length,o=new Array(l);o[0]=y;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:t,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},7791:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=a(87462),t=(a(67294),a(3905));const l={title:"module lang::rascal::grammar::analyze::Dependency"},o=void 0,i={unversionedId:"Library/lang/rascal/grammar/analyze/Dependency",id:"Library/lang/rascal/grammar/analyze/Dependency",title:"module lang::rascal::grammar::analyze::Dependency",description:"Usage",source:"@site/docs/Library/lang/rascal/grammar/analyze/Dependency.md",sourceDirName:"Library/lang/rascal/grammar/analyze",slug:"/Library/lang/rascal/grammar/analyze/Dependency",permalink:"/docs/Library/lang/rascal/grammar/analyze/Dependency",draft:!1,tags:[],version:"current",frontMatter:{title:"module lang::rascal::grammar::analyze::Dependency"},sidebar:"tutorialSidebar",previous:{title:"module lang::rascal::grammar::analyze::DefUse",permalink:"/docs/Library/lang/rascal/grammar/analyze/DefUse"},next:{title:"lang::rascal::grammar::definition",permalink:"/docs/Library/lang/rascal/grammar/definition/"}},c={},s=[{value:"Usage",id:"usage",level:4},{value:"function symbolDependencies",id:"lang-rascal-grammar-analyze-Dependency-symbolDependencies",level:2}],p={toc:s};function m(e){let{components:r,...a}=e;return(0,t.kt)("wrapper",(0,n.Z)({},p,a,{components:r,mdxType:"MDXLayout"}),(0,t.kt)("h4",{id:"usage"},"Usage"),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"import lang::rascal::grammar::analyze::Dependency;")),(0,t.kt)("h2",{id:"lang-rascal-grammar-analyze-Dependency-symbolDependencies"},"function symbolDependencies"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"Graph[Symbol] symbolDependencies(Grammar g)")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"Graph[Symbol] symbolDependencies(GrammarDefinition d)"))),(0,t.kt)("p",null,"  Compute the symbol dependency graph. This graph does not report intermediate nodes\nfor regular expressions."))}m.isMDXComponent=!0}}]);