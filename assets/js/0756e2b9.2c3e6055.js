"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[36319],{3905:(e,t,o)=>{o.d(t,{Zo:()=>i,kt:()=>C});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function u(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):u(u({},t),e)),o},i=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),d=s(o),C=r,p=d["".concat(c,".").concat(C)]||d[C]||m[C]||a;return o?n.createElement(p,u(u({ref:t},i),{},{components:o})):n.createElement(p,u({ref:t},i))}));function C(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,u=new Array(a);u[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,u[1]=l;for(var s=2;s<a;s++)u[s]=o[s];return n.createElement.apply(null,u)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},31509:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=o(83117),r=(o(67294),o(3905));const a={title:"module demo::common::CountConstructors"},u=void 0,l={unversionedId:"Library/demo/common/CountConstructors",id:"Library/demo/common/CountConstructors",title:"module demo::common::CountConstructors",description:"Usage",source:"@site/docs/Library/demo/common/CountConstructors.md",sourceDirName:"Library/demo/common",slug:"/Library/demo/common/CountConstructors",permalink:"/docs/Library/demo/common/CountConstructors",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Library/demo/common/CountConstructors.md",tags:[],version:"current",frontMatter:{title:"module demo::common::CountConstructors"},sidebar:"tutorialSidebar",previous:{title:"module demo::common::ColoredTrees",permalink:"/docs/Library/demo/common/ColoredTrees"},next:{title:"module demo::common::Crawl",permalink:"/docs/Library/demo/common/Crawl"}},c={},s=[{value:"Usage",id:"usage",level:4},{value:"data ColoredTree",id:"demo-common-CountConstructors-ColoredTree",level:2},{value:"data Suite",id:"demo-common-CountConstructors-Suite",level:2},{value:"data Card",id:"demo-common-CountConstructors-Card",level:2},{value:"data Hand",id:"demo-common-CountConstructors-Hand",level:2},{value:"function count",id:"demo-common-CountConstructors-count",level:2},{value:"function countRelevant",id:"demo-common-CountConstructors-countRelevant",level:2},{value:"function tstCount",id:"demo-common-CountConstructors-tstCount",level:2},{value:"function tstCountRelevant",id:"demo-common-CountConstructors-tstCountRelevant",level:2}],i={toc:s};function m(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},i,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h4",{id:"usage"},"Usage"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"import demo::common::CountConstructors;")),(0,r.kt)("h2",{id:"demo-common-CountConstructors-ColoredTree"},"data ColoredTree"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal"},"data ColoredTree  \n     = leaf(int N)\n     | red(ColoredTree left, ColoredTree right)\n     | black(ColoredTree left, ColoredTree right)\n     ;\n")),(0,r.kt)("h2",{id:"demo-common-CountConstructors-Suite"},"data Suite"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal"},"data Suite  \n     = hearts()\n     | diamonds()\n     | clubs()\n     | spades()\n     ;\n")),(0,r.kt)("h2",{id:"demo-common-CountConstructors-Card"},"data Card"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal"},"data Card  \n     = two(Suite s)\n     | three(Suite s)\n     | four(Suite s)\n     | five(Suite s)\n     | six(Suite s)\n     | seven(Suite s)\n     | eight(Suite s)\n     | nine(Suite s)\n     | ten(Suite s)\n     | jack(Suite s)\n     | queen(Suite s)\n     | king(Suite s)\n     | ace(Suite s)\n     ;\n")),(0,r.kt)("h2",{id:"demo-common-CountConstructors-Hand"},"data Hand"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal"},"data Hand  \n     = hand(list[Card] cards)\n     ;\n")),(0,r.kt)("h2",{id:"demo-common-CountConstructors-count"},"function count"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"map[str,int] count(node N)"))),(0,r.kt)("h2",{id:"demo-common-CountConstructors-countRelevant"},"function countRelevant"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"map[str,int] countRelevant(node N, set[str] relevant)"))),(0,r.kt)("h2",{id:"demo-common-CountConstructors-tstCount"},"function tstCount"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"test bool tstCount()"))),(0,r.kt)("h2",{id:"demo-common-CountConstructors-tstCountRelevant"},"function tstCountRelevant"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"test bool tstCountRelevant()"))))}m.isMDXComponent=!0}}]);