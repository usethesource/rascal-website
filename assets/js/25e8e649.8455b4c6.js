"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[17386],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),o=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=o(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),g=o(n),f=a,m=g["".concat(s,".").concat(f)]||g[f]||p[f]||i;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=g;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var o=2;o<i;o++)l[o]=n[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},27239:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var r=n(87462),a=(n(67294),n(3905));const i={title:"module lang::rascal::tests::concrete::PrefixMatching"},l=void 0,c={unversionedId:"Library/lang/rascal/tests/concrete/PrefixMatching",id:"Library/lang/rascal/tests/concrete/PrefixMatching",title:"module lang::rascal::tests::concrete::PrefixMatching",description:"Usage",source:"@site/docs/Library/lang/rascal/tests/concrete/PrefixMatching.md",sourceDirName:"Library/lang/rascal/tests/concrete",slug:"/Library/lang/rascal/tests/concrete/PrefixMatching",permalink:"/docs/Library/lang/rascal/tests/concrete/PrefixMatching",draft:!1,tags:[],version:"current",frontMatter:{title:"module lang::rascal::tests::concrete::PrefixMatching"},sidebar:"tutorialSidebar",previous:{title:"module lang::rascal::tests::concrete::PostParseFilter",permalink:"/docs/Library/lang/rascal/tests/concrete/PostParseFilter"},next:{title:"module lang::rascal::tests::concrete::SubscriptAndSlice",permalink:"/docs/Library/lang/rascal/tests/concrete/SubscriptAndSlice"}},s={},o=[{value:"Usage",id:"usage",level:4},{value:"function prefixAssignStatement",id:"lang-rascal-tests-concrete-PrefixMatching-prefixAssignStatement",level:2},{value:"function prefixAssignTree",id:"lang-rascal-tests-concrete-PrefixMatching-prefixAssignTree",level:2},{value:"function prefixAssignValue",id:"lang-rascal-tests-concrete-PrefixMatching-prefixAssignValue",level:2},{value:"function specialCaseForAppl1",id:"lang-rascal-tests-concrete-PrefixMatching-specialCaseForAppl1",level:2},{value:"function concreteAssignStatement",id:"lang-rascal-tests-concrete-PrefixMatching-concreteAssignStatement",level:2},{value:"function concreteAssignTree",id:"lang-rascal-tests-concrete-PrefixMatching-concreteAssignTree",level:2},{value:"function concreteAssignValue",id:"lang-rascal-tests-concrete-PrefixMatching-concreteAssignValue",level:2}],u={toc:o};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"usage"},"Usage"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"import lang::rascal::tests::concrete::PrefixMatching;")),(0,a.kt)("p",null,"tests regression of issue #1594"),(0,a.kt)("h2",{id:"lang-rascal-tests-concrete-PrefixMatching-prefixAssignStatement"},"function prefixAssignStatement"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"test bool prefixAssignStatement()"))),(0,a.kt)("h2",{id:"lang-rascal-tests-concrete-PrefixMatching-prefixAssignTree"},"function prefixAssignTree"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"test bool prefixAssignTree()"))),(0,a.kt)("h2",{id:"lang-rascal-tests-concrete-PrefixMatching-prefixAssignValue"},"function prefixAssignValue"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"test bool prefixAssignValue()"))),(0,a.kt)("h2",{id:"lang-rascal-tests-concrete-PrefixMatching-specialCaseForAppl1"},"function specialCaseForAppl1"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"test bool specialCaseForAppl1()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"test bool specialCaseForAppl1()"))),(0,a.kt)("h2",{id:"lang-rascal-tests-concrete-PrefixMatching-concreteAssignStatement"},"function concreteAssignStatement"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"test bool concreteAssignStatement()"))),(0,a.kt)("h2",{id:"lang-rascal-tests-concrete-PrefixMatching-concreteAssignTree"},"function concreteAssignTree"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"test bool concreteAssignTree()"))),(0,a.kt)("h2",{id:"lang-rascal-tests-concrete-PrefixMatching-concreteAssignValue"},"function concreteAssignValue"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"test bool concreteAssignValue()"))))}p.isMDXComponent=!0}}]);