"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[60626],{3905:(e,t,l)=>{l.d(t,{Zo:()=>p,kt:()=>y});var r=l(67294);function a(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function n(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,r)}return l}function s(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?n(Object(l),!0).forEach((function(t){a(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):n(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function c(e,t){if(null==e)return{};var l,r,a=function(e,t){if(null==e)return{};var l,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)l=n[r],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)l=n[r],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var i=r.createContext({}),o=function(e){var t=r.useContext(i),l=t;return e&&(l="function"==typeof e?e(t):s(s({},t),e)),l},p=function(e){var t=o(e.components);return r.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var l=e.components,a=e.mdxType,n=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=o(l),y=a,C=u["".concat(i,".").concat(y)]||u[y]||m[y]||n;return l?r.createElement(C,s(s({ref:t},p),{},{components:l})):r.createElement(C,s({ref:t},p))}));function y(e,t){var l=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=l.length,s=new Array(n);s[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var o=2;o<n;o++)s[o]=l[o];return r.createElement.apply(null,s)}return r.createElement.apply(null,l)}u.displayName="MDXCreateElement"},30818:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>n,metadata:()=>c,toc:()=>o});var r=l(87462),a=(l(67294),l(3905));const n={title:"module lang::rascal::tests::imports::CyclicImports1"},s=void 0,c={unversionedId:"Library/lang/rascal/tests/imports/CyclicImports1",id:"Library/lang/rascal/tests/imports/CyclicImports1",title:"module lang::rascal::tests::imports::CyclicImports1",description:"Usage",source:"@site/docs/Library/lang/rascal/tests/imports/CyclicImports1.md",sourceDirName:"Library/lang/rascal/tests/imports",slug:"/Library/lang/rascal/tests/imports/CyclicImports1",permalink:"/docs/Library/lang/rascal/tests/imports/CyclicImports1",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Library/lang/rascal/tests/imports/CyclicImports1.md",tags:[],version:"current",frontMatter:{title:"module lang::rascal::tests::imports::CyclicImports1"},sidebar:"tutorialSidebar",previous:{title:"module lang::rascal::tests::imports::C2",permalink:"/docs/Library/lang/rascal/tests/imports/C2"},next:{title:"module lang::rascal::tests::imports::IMP1",permalink:"/docs/Library/lang/rascal/tests/imports/IMP1"}},i={},o=[{value:"Usage",id:"usage",level:4},{value:"function Cycle1",id:"lang-rascal-tests-imports-CyclicImports1-Cycle1",level:2},{value:"function Cycle2",id:"lang-rascal-tests-imports-CyclicImports1-Cycle2",level:2},{value:"function Cycle3",id:"lang-rascal-tests-imports-CyclicImports1-Cycle3",level:2},{value:"function Cycle4",id:"lang-rascal-tests-imports-CyclicImports1-Cycle4",level:2},{value:"function Cycle5",id:"lang-rascal-tests-imports-CyclicImports1-Cycle5",level:2},{value:"function Cycle6",id:"lang-rascal-tests-imports-CyclicImports1-Cycle6",level:2},{value:"function Cycle7",id:"lang-rascal-tests-imports-CyclicImports1-Cycle7",level:2},{value:"function Cycle8",id:"lang-rascal-tests-imports-CyclicImports1-Cycle8",level:2}],p={toc:o};function m(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"usage"},"Usage"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"import lang::rascal::tests::imports::CyclicImports1;")),(0,a.kt)("h2",{id:"lang-rascal-tests-imports-CyclicImports1-Cycle1"},"function Cycle1"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"test bool Cycle1()"))),(0,a.kt)("h2",{id:"lang-rascal-tests-imports-CyclicImports1-Cycle2"},"function Cycle2"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"test bool Cycle2()"))),(0,a.kt)("h2",{id:"lang-rascal-tests-imports-CyclicImports1-Cycle3"},"function Cycle3"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"test bool Cycle3()"))),(0,a.kt)("h2",{id:"lang-rascal-tests-imports-CyclicImports1-Cycle4"},"function Cycle4"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"test bool Cycle4()"))),(0,a.kt)("h2",{id:"lang-rascal-tests-imports-CyclicImports1-Cycle5"},"function Cycle5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"test bool Cycle5()"))),(0,a.kt)("h2",{id:"lang-rascal-tests-imports-CyclicImports1-Cycle6"},"function Cycle6"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"test bool Cycle6()"))),(0,a.kt)("h2",{id:"lang-rascal-tests-imports-CyclicImports1-Cycle7"},"function Cycle7"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"test bool Cycle7()"))),(0,a.kt)("h2",{id:"lang-rascal-tests-imports-CyclicImports1-Cycle8"},"function Cycle8"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"test bool Cycle8()"))))}m.isMDXComponent=!0}}]);