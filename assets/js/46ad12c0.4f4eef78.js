"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[64904],{3905:(a,e,l)=>{l.d(e,{Zo:()=>d,kt:()=>v});var t=l(67294);function n(a,e,l){return e in a?Object.defineProperty(a,e,{value:l,enumerable:!0,configurable:!0,writable:!0}):a[e]=l,a}function i(a,e){var l=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),l.push.apply(l,t)}return l}function r(a){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{};e%2?i(Object(l),!0).forEach((function(e){n(a,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(l)):i(Object(l)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(l,e))}))}return a}function o(a,e){if(null==a)return{};var l,t,n=function(a,e){if(null==a)return{};var l,t,n={},i=Object.keys(a);for(t=0;t<i.length;t++)l=i[t],e.indexOf(l)>=0||(n[l]=a[l]);return n}(a,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);for(t=0;t<i.length;t++)l=i[t],e.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(a,l)&&(n[l]=a[l])}return n}var s=t.createContext({}),c=function(a){var e=t.useContext(s),l=e;return a&&(l="function"==typeof a?a(e):r(r({},e),a)),l},d=function(a){var e=c(a.components);return t.createElement(s.Provider,{value:e},a.children)},g={inlineCode:"code",wrapper:function(a){var e=a.children;return t.createElement(t.Fragment,{},e)}},u=t.forwardRef((function(a,e){var l=a.components,n=a.mdxType,i=a.originalType,s=a.parentName,d=o(a,["components","mdxType","originalType","parentName"]),u=c(l),v=n,p=u["".concat(s,".").concat(v)]||u[v]||g[v]||i;return l?t.createElement(p,r(r({ref:e},d),{},{components:l})):t.createElement(p,r({ref:e},d))}));function v(a,e){var l=arguments,n=e&&e.mdxType;if("string"==typeof a||n){var i=l.length,r=new Array(i);r[0]=u;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=a,o.mdxType="string"==typeof a?a:n,r[1]=o;for(var c=2;c<i;c++)r[c]=l[c];return t.createElement.apply(null,r)}return t.createElement.apply(null,l)}u.displayName="MDXCreateElement"},81405:(a,e,l)=>{l.r(e),l.d(e,{assets:()=>s,contentTitle:()=>r,default:()=>g,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var t=l(87462),n=(l(67294),l(3905));const i={title:"module lang::rascal::tests::basic::Overloading"},r=void 0,o={unversionedId:"Library/lang/rascal/tests/basic/Overloading",id:"Library/lang/rascal/tests/basic/Overloading",title:"module lang::rascal::tests::basic::Overloading",description:"Usage",source:"@site/docs/Library/lang/rascal/tests/basic/Overloading.md",sourceDirName:"Library/lang/rascal/tests/basic",slug:"/Library/lang/rascal/tests/basic/Overloading",permalink:"/docs/Library/lang/rascal/tests/basic/Overloading",draft:!1,tags:[],version:"current",frontMatter:{title:"module lang::rascal::tests::basic::Overloading"},sidebar:"tutorialSidebar",previous:{title:"module lang::rascal::tests::basic::Nodes",permalink:"/docs/Library/lang/rascal/tests/basic/Nodes"},next:{title:"module lang::rascal::tests::basic::Relations",permalink:"/docs/Library/lang/rascal/tests/basic/Relations"}},s={},c=[{value:"Usage",id:"usage",level:4},{value:"function overloading1",id:"lang-rascal-tests-basic-Overloading-overloading1",level:2},{value:"function overloading2",id:"lang-rascal-tests-basic-Overloading-overloading2",level:2},{value:"data D",id:"lang-rascal-tests-basic-Overloading-D",level:2},{value:"function constructorDynamicMatch",id:"lang-rascal-tests-basic-Overloading-constructorDynamicMatch",level:2},{value:"data D3",id:"lang-rascal-tests-basic-Overloading-D3",level:2},{value:"function overloading3a",id:"lang-rascal-tests-basic-Overloading-overloading3a",level:2},{value:"function overloading3b",id:"lang-rascal-tests-basic-Overloading-overloading3b",level:2},{value:"function overloadingDynamicCall",id:"lang-rascal-tests-basic-Overloading-overloadingDynamicCall",level:2},{value:"data D4",id:"lang-rascal-tests-basic-Overloading-D4",level:2},{value:"function overloadingMatcha",id:"lang-rascal-tests-basic-Overloading-overloadingMatcha",level:2},{value:"function overloadingMatchb",id:"lang-rascal-tests-basic-Overloading-overloadingMatchb",level:2},{value:"function overloadingPlusBacktracking1",id:"lang-rascal-tests-basic-Overloading-overloadingPlusBacktracking1",level:2},{value:"function overloadingPlusBacktracking2",id:"lang-rascal-tests-basic-Overloading-overloadingPlusBacktracking2",level:2},{value:"function overloadingPlusPolymorphism1",id:"lang-rascal-tests-basic-Overloading-overloadingPlusPolymorphism1",level:2},{value:"function overloadingPlusPolymorphism2",id:"lang-rascal-tests-basic-Overloading-overloadingPlusPolymorphism2",level:2},{value:"function overloadingPlusVarArgs",id:"lang-rascal-tests-basic-Overloading-overloadingPlusVarArgs",level:2},{value:"function overloadingPlusVarArgsSpecialCase",id:"lang-rascal-tests-basic-Overloading-overloadingPlusVarArgsSpecialCase",level:2},{value:"function singletonSetWithMap",id:"lang-rascal-tests-basic-Overloading-singletonSetWithMap",level:2},{value:"function callSingletonSetWithMap",id:"lang-rascal-tests-basic-Overloading-callSingletonSetWithMap",level:2},{value:"data F",id:"lang-rascal-tests-basic-Overloading-F",level:2},{value:"function getN1",id:"lang-rascal-tests-basic-Overloading-getN1",level:2},{value:"function getN2",id:"lang-rascal-tests-basic-Overloading-getN2",level:2},{value:"function overloadedCons1",id:"lang-rascal-tests-basic-Overloading-overloadedCons1",level:2},{value:"function overloadedCons2",id:"lang-rascal-tests-basic-Overloading-overloadedCons2",level:2}],d={toc:c};function g(a){let{components:e,...l}=a;return(0,n.kt)("wrapper",(0,t.Z)({},d,l,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h4",{id:"usage"},"Usage"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"import lang::rascal::tests::basic::Overloading;")),(0,n.kt)("h2",{id:"lang-rascal-tests-basic-Overloading-overloading1"},"function overloading1"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"test bool overloading1()"))),(0,n.kt)("h2",{id:"lang-rascal-tests-basic-Overloading-overloading2"},"function overloading2"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"test bool overloading2()"))),(0,n.kt)("h2",{id:"lang-rascal-tests-basic-Overloading-D"},"data D"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rascal"},"data D  \n     = d(str s)\n     | d(int n)\n     | d()\n     ;\n")),(0,n.kt)("h2",{id:"lang-rascal-tests-basic-Overloading-constructorDynamicMatch"},"function constructorDynamicMatch"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"test bool constructorDynamicMatch()"))),(0,n.kt)("p",null,"triggers issue #1234"),(0,n.kt)("h2",{id:"lang-rascal-tests-basic-Overloading-D3"},"data D3"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rascal"},"data D3  \n     = d3(str s)\n     | d3(int n)\n     | d3()\n     ;\n")),(0,n.kt)("h2",{id:"lang-rascal-tests-basic-Overloading-overloading3a"},"function overloading3a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"test bool overloading3a()"))),(0,n.kt)("h2",{id:"lang-rascal-tests-basic-Overloading-overloading3b"},"function overloading3b"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"test bool overloading3b()"))),(0,n.kt)("h2",{id:"lang-rascal-tests-basic-Overloading-overloadingDynamicCall"},"function overloadingDynamicCall"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"test bool overloadingDynamicCall()"))),(0,n.kt)("h2",{id:"lang-rascal-tests-basic-Overloading-D4"},"data D4"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rascal"},"data D4  \n     = d4(str s)\n     | d4(int n)\n     | d4()\n     ;\n")),(0,n.kt)("h2",{id:"lang-rascal-tests-basic-Overloading-overloadingMatcha"},"function overloadingMatcha"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"test bool overloadingMatcha()"))),(0,n.kt)("h2",{id:"lang-rascal-tests-basic-Overloading-overloadingMatchb"},"function overloadingMatchb"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"test bool overloadingMatchb()"))),(0,n.kt)("h2",{id:"lang-rascal-tests-basic-Overloading-overloadingPlusBacktracking1"},"function overloadingPlusBacktracking1"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"test bool overloadingPlusBacktracking1()"))),(0,n.kt)("h2",{id:"lang-rascal-tests-basic-Overloading-overloadingPlusBacktracking2"},"function overloadingPlusBacktracking2"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"test bool overloadingPlusBacktracking2()"))),(0,n.kt)("h2",{id:"lang-rascal-tests-basic-Overloading-overloadingPlusPolymorphism1"},"function overloadingPlusPolymorphism1"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"test bool overloadingPlusPolymorphism1()"))),(0,n.kt)("h2",{id:"lang-rascal-tests-basic-Overloading-overloadingPlusPolymorphism2"},"function overloadingPlusPolymorphism2"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"test bool overloadingPlusPolymorphism2()"))),(0,n.kt)("h2",{id:"lang-rascal-tests-basic-Overloading-overloadingPlusVarArgs"},"function overloadingPlusVarArgs"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"test bool overloadingPlusVarArgs()"))),(0,n.kt)("h2",{id:"lang-rascal-tests-basic-Overloading-overloadingPlusVarArgsSpecialCase"},"function overloadingPlusVarArgsSpecialCase"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"test bool overloadingPlusVarArgsSpecialCase()"))),(0,n.kt)("h2",{id:"lang-rascal-tests-basic-Overloading-singletonSetWithMap"},"function singletonSetWithMap"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"bool singletonSetWithMap({()})")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"default bool singletonSetWithMap(value _)"))),(0,n.kt)("h2",{id:"lang-rascal-tests-basic-Overloading-callSingletonSetWithMap"},"function callSingletonSetWithMap"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"test bool callSingletonSetWithMap()"))),(0,n.kt)("h2",{id:"lang-rascal-tests-basic-Overloading-F"},"data F"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rascal"},"data F  \n     = fff(str s, int n)\n     | fff(int n, str s)\n     ;\n")),(0,n.kt)("h2",{id:"lang-rascal-tests-basic-Overloading-getN1"},"function getN1"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"int getN1(fff(str s, n))"))),(0,n.kt)("h2",{id:"lang-rascal-tests-basic-Overloading-getN2"},"function getN2"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"int getN2(fff(n, str s))"))),(0,n.kt)("h2",{id:"lang-rascal-tests-basic-Overloading-overloadedCons1"},"function overloadedCons1"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"test bool overloadedCons1(str s, int n)"))),(0,n.kt)("h2",{id:"lang-rascal-tests-basic-Overloading-overloadedCons2"},"function overloadedCons2"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"test bool overloadedCons2(str s, int n)"))))}g.isMDXComponent=!0}}]);