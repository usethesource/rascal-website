"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[57262],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>y});var l=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},i=Object.keys(e);for(l=0;l<i.length;l++)a=i[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)a=i[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=l.createContext({}),o=function(e){var t=l.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=o(e.components);return l.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},p=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),p=o(a),y=n,m=p["".concat(c,".").concat(y)]||p[y]||d[y]||i;return a?l.createElement(m,s(s({ref:t},u),{},{components:a})):l.createElement(m,s({ref:t},u))}));function y(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=p;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:n,s[1]=r;for(var o=2;o<i;o++)s[o]=a[o];return l.createElement.apply(null,s)}return l.createElement.apply(null,a)}p.displayName="MDXCreateElement"},4922:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>o});var l=a(87462),n=(a(67294),a(3905));const i={title:"module lang::rascal::tests::basic::Generics"},s=void 0,r={unversionedId:"Library/lang/rascal/tests/basic/Generics",id:"Library/lang/rascal/tests/basic/Generics",title:"module lang::rascal::tests::basic::Generics",description:"Usage",source:"@site/docs/Library/lang/rascal/tests/basic/Generics.md",sourceDirName:"Library/lang/rascal/tests/basic",slug:"/Library/lang/rascal/tests/basic/Generics",permalink:"/docs/Library/lang/rascal/tests/basic/Generics",draft:!1,tags:[],version:"current",frontMatter:{title:"module lang::rascal::tests::basic::Generics"},sidebar:"tutorialSidebar",previous:{title:"module lang::rascal::tests::basic::Functions",permalink:"/docs/Library/lang/rascal/tests/basic/Functions"},next:{title:"module lang::rascal::tests::basic::IO",permalink:"/docs/Library/lang/rascal/tests/basic/IO"}},c={},o=[{value:"Usage",id:"usage",level:4},{value:"data Wrapper",id:"lang-rascal-tests-basic-Generics-Wrapper",level:2},{value:"alias Graph&SAME {#lang-rascal-tests-basic-Generics-Graph&SAME}",id:"lang-rascal-tests-basic-Generics-Graph&SAME",level:2},{value:"function getIt",id:"lang-rascal-tests-basic-Generics-getIt",level:2},{value:"function hygienicGenericADT",id:"lang-rascal-tests-basic-Generics-hygienicGenericADT",level:2},{value:"function recursiveGenericFunction",id:"lang-rascal-tests-basic-Generics-recursiveGenericFunction",level:2},{value:"function genericFunction1",id:"lang-rascal-tests-basic-Generics-genericFunction1",level:2},{value:"function genericFunction2",id:"lang-rascal-tests-basic-Generics-genericFunction2",level:2},{value:"function less",id:"lang-rascal-tests-basic-Generics-less",level:2},{value:"function lessIsConsistentThroughTypeParameters",id:"lang-rascal-tests-basic-Generics-lessIsConsistentThroughTypeParameters",level:2},{value:"function avoidEmpty",id:"lang-rascal-tests-basic-Generics-avoidEmpty",level:2},{value:"function voidReturnIsNotAllowed",id:"lang-rascal-tests-basic-Generics-voidReturnIsNotAllowed",level:2},{value:"function cast",id:"lang-rascal-tests-basic-Generics-cast",level:2},{value:"function typeParametersAreCheckedStaticallyButAlsoBoundDynamically",id:"lang-rascal-tests-basic-Generics-typeParametersAreCheckedStaticallyButAlsoBoundDynamically",level:2},{value:"function \filter",id:"lang-rascal-tests-basic-Generics-\filter",level:2},{value:"function typeParametersAreCheckedStaticallyButAlsoBoundDynamically2",id:"lang-rascal-tests-basic-Generics-typeParametersAreCheckedStaticallyButAlsoBoundDynamically2",level:2},{value:"function typeParametersAreCheckedStaticallyButAlsoBoundDynamically2_2",id:"lang-rascal-tests-basic-Generics-typeParametersAreCheckedStaticallyButAlsoBoundDynamically2_2",level:2},{value:"function typeParametersAreCheckedStaticallyButAlsoBoundDynamically3",id:"lang-rascal-tests-basic-Generics-typeParametersAreCheckedStaticallyButAlsoBoundDynamically3",level:2},{value:"function typeParametersAreCheckedStaticallyButAlsoBoundDynamically3_2",id:"lang-rascal-tests-basic-Generics-typeParametersAreCheckedStaticallyButAlsoBoundDynamically3_2",level:2},{value:"function typeParametersAreCheckedStaticallyButAlsoBoundDynamically3_3",id:"lang-rascal-tests-basic-Generics-typeParametersAreCheckedStaticallyButAlsoBoundDynamically3_3",level:2},{value:"function staticTypeParametersKeepElementLabelsAlsoWithListMatch",id:"lang-rascal-tests-basic-Generics-staticTypeParametersKeepElementLabelsAlsoWithListMatch",level:2},{value:"function staticTypeParametersKeepElementLabelsAlsoWithSetMatch",id:"lang-rascal-tests-basic-Generics-staticTypeParametersKeepElementLabelsAlsoWithSetMatch",level:2},{value:"function recursiveOverloadedGenericFunction",id:"lang-rascal-tests-basic-Generics-recursiveOverloadedGenericFunction",level:2},{value:"function voidMaybeShouldShouldThrowException",id:"lang-rascal-tests-basic-Generics-voidMaybeShouldShouldThrowException",level:2},{value:"function voidListsShouldThrowException",id:"lang-rascal-tests-basic-Generics-voidListsShouldThrowException",level:2}],u={toc:o};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,l.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h4",{id:"usage"},"Usage"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"import lang::rascal::tests::basic::Generics;")),(0,n.kt)("p",null,"tests specific aspects of generic functions and generic data-types in Rascal"),(0,n.kt)("h2",{id:"lang-rascal-tests-basic-Generics-Wrapper"},"data Wrapper"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rascal"},"data Wrapper[&SAME]  \n     = something(&SAME wrapped)\n     ;\n")),(0,n.kt)("h2",{id:"lang-rascal-tests-basic-Generics-Graph&SAME"},"alias Graph","[&SAME]"," {#lang-rascal-tests-basic-Generics-Graph","[&SAME]","}"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"rel[&SAME from, &SAME to]"))),(0,n.kt)("h2",{id:"lang-rascal-tests-basic-Generics-getIt"},"function getIt"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"&SAME getIt(Wrapper[&SAME] x)"))),(0,n.kt)("p",null,"it matters for testing that '&SAME' is the same name as in the definition of Wrapper"),(0,n.kt)("h2",{id:"lang-rascal-tests-basic-Generics-hygienicGenericADT"},"function hygienicGenericADT"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"test bool hygienicGenericADT()"))),(0,n.kt)("h2",{id:"lang-rascal-tests-basic-Generics-recursiveGenericFunction"},"function recursiveGenericFunction"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"int recursiveGenericFunction(&T n)"))),(0,n.kt)("h2",{id:"lang-rascal-tests-basic-Generics-genericFunction1"},"function genericFunction1"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"test bool genericFunction1()"))),(0,n.kt)("h2",{id:"lang-rascal-tests-basic-Generics-genericFunction2"},"function genericFunction2"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"test bool genericFunction2()"))),(0,n.kt)("h2",{id:"lang-rascal-tests-basic-Generics-less"},"function less"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"bool less(&T a, &T b)"))),(0,n.kt)("h2",{id:"lang-rascal-tests-basic-Generics-lessIsConsistentThroughTypeParameters"},"function lessIsConsistentThroughTypeParameters"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"test bool lessIsConsistentThroughTypeParameters(num x, num y)"))),(0,n.kt)("h2",{id:"lang-rascal-tests-basic-Generics-avoidEmpty"},"function avoidEmpty"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"&T avoidEmpty(list[&T] _)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"&T avoidEmpty(list[&T] _)"))),(0,n.kt)("h2",{id:"lang-rascal-tests-basic-Generics-voidReturnIsNotAllowed"},"function voidReturnIsNotAllowed"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"test bool voidReturnIsNotAllowed()"))),(0,n.kt)("h2",{id:"lang-rascal-tests-basic-Generics-cast"},"function cast"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"&T cast(type[&T] _, value x)"))),(0,n.kt)("h2",{id:"lang-rascal-tests-basic-Generics-typeParametersAreCheckedStaticallyButAlsoBoundDynamically"},"function typeParametersAreCheckedStaticallyButAlsoBoundDynamically"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"test bool typeParametersAreCheckedStaticallyButAlsoBoundDynamically()"))),(0,n.kt)("h2",{id:"lang-rascal-tests-basic-Generics-\\filter"},"function \\filter"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"list[&T] \\filter(type[&T] _, list[value] elems)"))),(0,n.kt)("h2",{id:"lang-rascal-tests-basic-Generics-typeParametersAreCheckedStaticallyButAlsoBoundDynamically2"},"function typeParametersAreCheckedStaticallyButAlsoBoundDynamically2"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"test bool typeParametersAreCheckedStaticallyButAlsoBoundDynamically2()"))),(0,n.kt)("h2",{id:"lang-rascal-tests-basic-Generics-typeParametersAreCheckedStaticallyButAlsoBoundDynamically2_2"},"function typeParametersAreCheckedStaticallyButAlsoBoundDynamically2_2"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"test bool typeParametersAreCheckedStaticallyButAlsoBoundDynamically2_2()"))),(0,n.kt)("h2",{id:"lang-rascal-tests-basic-Generics-typeParametersAreCheckedStaticallyButAlsoBoundDynamically3"},"function typeParametersAreCheckedStaticallyButAlsoBoundDynamically3"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"test bool typeParametersAreCheckedStaticallyButAlsoBoundDynamically3()"))),(0,n.kt)("h2",{id:"lang-rascal-tests-basic-Generics-typeParametersAreCheckedStaticallyButAlsoBoundDynamically3_2"},"function typeParametersAreCheckedStaticallyButAlsoBoundDynamically3_2"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"test bool typeParametersAreCheckedStaticallyButAlsoBoundDynamically3_2()"))),(0,n.kt)("h2",{id:"lang-rascal-tests-basic-Generics-typeParametersAreCheckedStaticallyButAlsoBoundDynamically3_3"},"function typeParametersAreCheckedStaticallyButAlsoBoundDynamically3_3"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"test bool typeParametersAreCheckedStaticallyButAlsoBoundDynamically3_3()"))),(0,n.kt)("h2",{id:"lang-rascal-tests-basic-Generics-staticTypeParametersKeepElementLabelsAlsoWithListMatch"},"function staticTypeParametersKeepElementLabelsAlsoWithListMatch"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"test bool staticTypeParametersKeepElementLabelsAlsoWithListMatch()"))),(0,n.kt)("h2",{id:"lang-rascal-tests-basic-Generics-staticTypeParametersKeepElementLabelsAlsoWithSetMatch"},"function staticTypeParametersKeepElementLabelsAlsoWithSetMatch"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"test bool staticTypeParametersKeepElementLabelsAlsoWithSetMatch()"))),(0,n.kt)("h2",{id:"lang-rascal-tests-basic-Generics-recursiveOverloadedGenericFunction"},"function recursiveOverloadedGenericFunction"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"test bool recursiveOverloadedGenericFunction()"))),(0,n.kt)("h2",{id:"lang-rascal-tests-basic-Generics-voidMaybeShouldShouldThrowException"},"function voidMaybeShouldShouldThrowException"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"test bool voidMaybeShouldShouldThrowException()"))),(0,n.kt)("h2",{id:"lang-rascal-tests-basic-Generics-voidListsShouldThrowException"},"function voidListsShouldThrowException"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"test bool voidListsShouldThrowException()"))))}d.isMDXComponent=!0}}]);