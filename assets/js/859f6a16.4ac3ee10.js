"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[1095],{3905:(t,s,e)=>{e.d(s,{Zo:()=>u,kt:()=>p});var i=e(67294);function l(t,s,e){return s in t?Object.defineProperty(t,s,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[s]=e,t}function n(t,s){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);s&&(i=i.filter((function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable}))),e.push.apply(e,i)}return e}function a(t){for(var s=1;s<arguments.length;s++){var e=null!=arguments[s]?arguments[s]:{};s%2?n(Object(e),!0).forEach((function(s){l(t,s,e[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):n(Object(e)).forEach((function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(e,s))}))}return t}function r(t,s){if(null==t)return{};var e,i,l=function(t,s){if(null==t)return{};var e,i,l={},n=Object.keys(t);for(i=0;i<n.length;i++)e=n[i],s.indexOf(e)>=0||(l[e]=t[e]);return l}(t,s);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(i=0;i<n.length;i++)e=n[i],s.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(l[e]=t[e])}return l}var c=i.createContext({}),o=function(t){var s=i.useContext(c),e=s;return t&&(e="function"==typeof t?t(s):a(a({},s),t)),e},u=function(t){var s=o(t.components);return i.createElement(c.Provider,{value:s},t.children)},g={inlineCode:"code",wrapper:function(t){var s=t.children;return i.createElement(i.Fragment,{},s)}},S=i.forwardRef((function(t,s){var e=t.components,l=t.mdxType,n=t.originalType,c=t.parentName,u=r(t,["components","mdxType","originalType","parentName"]),S=o(e),p=l,d=S["".concat(c,".").concat(p)]||S[p]||g[p]||n;return e?i.createElement(d,a(a({ref:s},u),{},{components:e})):i.createElement(d,a({ref:s},u))}));function p(t,s){var e=arguments,l=s&&s.mdxType;if("string"==typeof t||l){var n=e.length,a=new Array(n);a[0]=S;var r={};for(var c in s)hasOwnProperty.call(s,c)&&(r[c]=s[c]);r.originalType=t,r.mdxType="string"==typeof t?t:l,a[1]=r;for(var o=2;o<n;o++)a[o]=e[o];return i.createElement.apply(null,a)}return i.createElement.apply(null,e)}S.displayName="MDXCreateElement"},21786:(t,s,e)=>{e.r(s),e.d(s,{assets:()=>c,contentTitle:()=>a,default:()=>g,frontMatter:()=>n,metadata:()=>r,toc:()=>o});var i=e(87462),l=(e(67294),e(3905));const n={title:"module lang::rascal::tests::basic::Strings1"},a=void 0,r={unversionedId:"Library/lang/rascal/tests/basic/Strings1",id:"Library/lang/rascal/tests/basic/Strings1",title:"module lang::rascal::tests::basic::Strings1",description:"Usage",source:"@site/docs/Library/lang/rascal/tests/basic/Strings1.md",sourceDirName:"Library/lang/rascal/tests/basic",slug:"/Library/lang/rascal/tests/basic/Strings1",permalink:"/docs/Library/lang/rascal/tests/basic/Strings1",draft:!1,tags:[],version:"current",frontMatter:{title:"module lang::rascal::tests::basic::Strings1"},sidebar:"tutorialSidebar",previous:{title:"module lang::rascal::tests::basic::SolvedIssues",permalink:"/docs/Library/lang/rascal/tests/basic/SolvedIssues"},next:{title:"module lang::rascal::tests::basic::Strings2",permalink:"/docs/Library/lang/rascal/tests/basic/Strings2"}},c={},o=[{value:"Usage",id:"usage",level:4},{value:"function subscription",id:"lang-rascal-tests-basic-Strings1-subscription",level:2},{value:"function sliceEmpty",id:"lang-rascal-tests-basic-Strings1-sliceEmpty",level:2},{value:"function sliceOverEnd",id:"lang-rascal-tests-basic-Strings1-sliceOverEnd",level:2},{value:"function sliceOverEnd2",id:"lang-rascal-tests-basic-Strings1-sliceOverEnd2",level:2},{value:"function subscriptionWrapped",id:"lang-rascal-tests-basic-Strings1-subscriptionWrapped",level:2},{value:"function sliceFirst1",id:"lang-rascal-tests-basic-Strings1-sliceFirst1",level:2},{value:"function sliceFirst2",id:"lang-rascal-tests-basic-Strings1-sliceFirst2",level:2},{value:"function makeSlice",id:"lang-rascal-tests-basic-Strings1-makeSlice",level:2},{value:"function sliceFirstSecond",id:"lang-rascal-tests-basic-Strings1-sliceFirstSecond",level:2},{value:"function sliceEnd",id:"lang-rascal-tests-basic-Strings1-sliceEnd",level:2},{value:"function sliceSecondEnd",id:"lang-rascal-tests-basic-Strings1-sliceSecondEnd",level:2},{value:"function arbFirstEnd",id:"lang-rascal-tests-basic-Strings1-arbFirstEnd",level:2},{value:"function sliceFirstSecondEnd",id:"lang-rascal-tests-basic-Strings1-sliceFirstSecondEnd",level:2},{value:"function sliceFirstNegative",id:"lang-rascal-tests-basic-Strings1-sliceFirstNegative",level:2},{value:"function sliceEndNegative",id:"lang-rascal-tests-basic-Strings1-sliceEndNegative",level:2},{value:"function sliceFirstNegativeSecondNegative",id:"lang-rascal-tests-basic-Strings1-sliceFirstNegativeSecondNegative",level:2},{value:"function sliceSecondNegative",id:"lang-rascal-tests-basic-Strings1-sliceSecondNegative",level:2},{value:"function assignSlice1",id:"lang-rascal-tests-basic-Strings1-assignSlice1",level:2},{value:"function assignSlice2",id:"lang-rascal-tests-basic-Strings1-assignSlice2",level:2},{value:"function assignSlice3",id:"lang-rascal-tests-basic-Strings1-assignSlice3",level:2},{value:"function assignSlice4",id:"lang-rascal-tests-basic-Strings1-assignSlice4",level:2},{value:"function assignStep1",id:"lang-rascal-tests-basic-Strings1-assignStep1",level:2},{value:"function assignStep2",id:"lang-rascal-tests-basic-Strings1-assignStep2",level:2},{value:"function assignStep3",id:"lang-rascal-tests-basic-Strings1-assignStep3",level:2},{value:"function assignStep4",id:"lang-rascal-tests-basic-Strings1-assignStep4",level:2},{value:"function assignStep5",id:"lang-rascal-tests-basic-Strings1-assignStep5",level:2},{value:"function assignStep6",id:"lang-rascal-tests-basic-Strings1-assignStep6",level:2},{value:"function assignStep7",id:"lang-rascal-tests-basic-Strings1-assignStep7",level:2},{value:"function assignStep8",id:"lang-rascal-tests-basic-Strings1-assignStep8",level:2},{value:"function assignStep9",id:"lang-rascal-tests-basic-Strings1-assignStep9",level:2},{value:"function assignStep10",id:"lang-rascal-tests-basic-Strings1-assignStep10",level:2},{value:"function assignStep11",id:"lang-rascal-tests-basic-Strings1-assignStep11",level:2},{value:"function assignStep12",id:"lang-rascal-tests-basic-Strings1-assignStep12",level:2},{value:"function assignStep13",id:"lang-rascal-tests-basic-Strings1-assignStep13",level:2},{value:"function tstCenter1",id:"lang-rascal-tests-basic-Strings1-tstCenter1",level:2},{value:"function tstCenter2",id:"lang-rascal-tests-basic-Strings1-tstCenter2",level:2},{value:"function tstCharAt",id:"lang-rascal-tests-basic-Strings1-tstCharAt",level:2},{value:"function tstChars",id:"lang-rascal-tests-basic-Strings1-tstChars",level:2},{value:"function tstContains",id:"lang-rascal-tests-basic-Strings1-tstContains",level:2},{value:"function tstEndsWith",id:"lang-rascal-tests-basic-Strings1-tstEndsWith",level:2},{value:"function tstEscape",id:"lang-rascal-tests-basic-Strings1-tstEscape",level:2},{value:"function tstFindAll",id:"lang-rascal-tests-basic-Strings1-tstFindAll",level:2},{value:"function tstFindFirst",id:"lang-rascal-tests-basic-Strings1-tstFindFirst",level:2},{value:"function tstFindLast",id:"lang-rascal-tests-basic-Strings1-tstFindLast",level:2},{value:"function tstIsEmpty",id:"lang-rascal-tests-basic-Strings1-tstIsEmpty",level:2},{value:"function tstStringChar",id:"lang-rascal-tests-basic-Strings1-tstStringChar",level:2},{value:"function tstIsValidCharacter",id:"lang-rascal-tests-basic-Strings1-tstIsValidCharacter",level:2},{value:"function tstLeft1",id:"lang-rascal-tests-basic-Strings1-tstLeft1",level:2},{value:"function tstLeft2",id:"lang-rascal-tests-basic-Strings1-tstLeft2",level:2},{value:"function tstLeft1_s",id:"lang-rascal-tests-basic-Strings1-tstLeft1_s",level:2},{value:"function tstLeft2_s",id:"lang-rascal-tests-basic-Strings1-tstLeft2_s",level:2},{value:"function areOverlapping",id:"lang-rascal-tests-basic-Strings1-areOverlapping",level:2},{value:"function tstReplaceAll",id:"lang-rascal-tests-basic-Strings1-tstReplaceAll",level:2},{value:"function tstReplaceFirst",id:"lang-rascal-tests-basic-Strings1-tstReplaceFirst",level:2},{value:"function tstReplaceLast",id:"lang-rascal-tests-basic-Strings1-tstReplaceLast",level:2},{value:"function tstReverse",id:"lang-rascal-tests-basic-Strings1-tstReverse",level:2},{value:"function tstRight1",id:"lang-rascal-tests-basic-Strings1-tstRight1",level:2},{value:"function tstRight2",id:"lang-rascal-tests-basic-Strings1-tstRight2",level:2},{value:"function tstSize",id:"lang-rascal-tests-basic-Strings1-tstSize",level:2},{value:"function tstSplit",id:"lang-rascal-tests-basic-Strings1-tstSplit",level:2},{value:"function tstStartsWith",id:"lang-rascal-tests-basic-Strings1-tstStartsWith",level:2},{value:"function tstSubstring1",id:"lang-rascal-tests-basic-Strings1-tstSubstring1",level:2},{value:"function tstSubstring2",id:"lang-rascal-tests-basic-Strings1-tstSubstring2",level:2},{value:"function toInt",id:"lang-rascal-tests-basic-Strings1-toInt",level:2},{value:"function tstToLowerCase",id:"lang-rascal-tests-basic-Strings1-tstToLowerCase",level:2},{value:"function toReal",id:"lang-rascal-tests-basic-Strings1-toReal",level:2},{value:"function tstToUpperCase",id:"lang-rascal-tests-basic-Strings1-tstToUpperCase",level:2},{value:"function tstTrim",id:"lang-rascal-tests-basic-Strings1-tstTrim",level:2}],u={toc:o};function g(t){let{components:s,...e}=t;return(0,l.kt)("wrapper",(0,i.Z)({},u,e,{components:s,mdxType:"MDXLayout"}),(0,l.kt)("h4",{id:"usage"},"Usage"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"import lang::rascal::tests::basic::Strings1;")),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Strings1-subscription"},"function subscription"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool subscription(str S)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Strings1-sliceEmpty"},"function sliceEmpty"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool sliceEmpty()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Strings1-sliceOverEnd"},"function sliceOverEnd"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool sliceOverEnd()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Strings1-sliceOverEnd2"},"function sliceOverEnd2"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool sliceOverEnd2()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Strings1-subscriptionWrapped"},"function subscriptionWrapped"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool subscriptionWrapped(str S)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Strings1-sliceFirst1"},"function sliceFirst1"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool sliceFirst1(str L)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Strings1-sliceFirst2"},"function sliceFirst2"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool sliceFirst2(str L)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Strings1-makeSlice"},"function makeSlice"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"str makeSlice(str L, int f, int s, int e)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Strings1-sliceFirstSecond"},"function sliceFirstSecond"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool sliceFirstSecond(str L)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Strings1-sliceEnd"},"function sliceEnd"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool sliceEnd(str L)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Strings1-sliceSecondEnd"},"function sliceSecondEnd"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool sliceSecondEnd(str L)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Strings1-arbFirstEnd"},"function arbFirstEnd"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"tuple[int,int] arbFirstEnd(str L)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Strings1-sliceFirstSecondEnd"},"function sliceFirstSecondEnd"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool sliceFirstSecondEnd(str L)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Strings1-sliceFirstNegative"},"function sliceFirstNegative"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool sliceFirstNegative(str L)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Strings1-sliceEndNegative"},"function sliceEndNegative"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool sliceEndNegative(str L)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Strings1-sliceFirstNegativeSecondNegative"},"function sliceFirstNegativeSecondNegative"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool sliceFirstNegativeSecondNegative(str L)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Strings1-sliceSecondNegative"},"function sliceSecondNegative"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool sliceSecondNegative(str L)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Strings1-assignSlice1"},"function assignSlice1"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool assignSlice1()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Strings1-assignSlice2"},"function assignSlice2"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool assignSlice2()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Strings1-assignSlice3"},"function assignSlice3"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool assignSlice3()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Strings1-assignSlice4"},"function assignSlice4"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool assignSlice4()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Strings1-assignStep1"},"function assignStep1"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool assignStep1()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Strings1-assignStep2"},"function assignStep2"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool assignStep2()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Strings1-assignStep3"},"function assignStep3"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool assignStep3()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Strings1-assignStep4"},"function assignStep4"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool assignStep4()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Strings1-assignStep5"},"function assignStep5"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool assignStep5()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Strings1-assignStep6"},"function assignStep6"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool assignStep6()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Strings1-assignStep7"},"function assignStep7"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool assignStep7()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Strings1-assignStep8"},"function assignStep8"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool assignStep8()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Strings1-assignStep9"},"function assignStep9"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool assignStep9()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Strings1-assignStep10"},"function assignStep10"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool assignStep10()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Strings1-assignStep11"},"function assignStep11"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool assignStep11()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Strings1-assignStep12"},"function assignStep12"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool assignStep12()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Strings1-assignStep13"},"function assignStep13"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool assignStep13()"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Strings1-tstCenter1"},"function tstCenter1"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool tstCenter1(str S)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Strings1-tstCenter2"},"function tstCenter2"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool tstCenter2(str S)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Strings1-tstCharAt"},"function tstCharAt"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool  tstCharAt(str S)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Strings1-tstChars"},"function tstChars"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool tstChars(str S)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Strings1-tstContains"},"function tstContains"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool tstContains(str S1, str S2, str S3)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Strings1-tstEndsWith"},"function tstEndsWith"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool tstEndsWith(str S1, str S2)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Strings1-tstEscape"},"function tstEscape"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool tstEscape(str S, str K1, str R1, str K2, str R2)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Strings1-tstFindAll"},"function tstFindAll"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool tstFindAll(str S1, str S2)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Strings1-tstFindFirst"},"function tstFindFirst"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool tstFindFirst(str S1, str S2)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Strings1-tstFindLast"},"function tstFindLast"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool tstFindLast(str S1, str S2)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Strings1-tstIsEmpty"},"function tstIsEmpty"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool tstIsEmpty(str S)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Strings1-tstStringChar"},"function tstStringChar"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool tstStringChar(str S)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Strings1-tstIsValidCharacter"},"function tstIsValidCharacter"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool tstIsValidCharacter(str S)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Strings1-tstLeft1"},"function tstLeft1"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool tstLeft1(str S)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Strings1-tstLeft2"},"function tstLeft2"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool tstLeft2(str S)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Strings1-tstLeft1_s"},"function tstLeft1_s"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool tstLeft1_s(str S)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Strings1-tstLeft2_s"},"function tstLeft2_s"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool tstLeft2_s(str S)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Strings1-areOverlapping"},"function areOverlapping"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"bool areOverlapping(str s1, str s2)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Strings1-tstReplaceAll"},"function tstReplaceAll"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool tstReplaceAll(str S1, str S2, str S3)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Strings1-tstReplaceFirst"},"function tstReplaceFirst"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool tstReplaceFirst(str S1, str S2, str S3)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Strings1-tstReplaceLast"},"function tstReplaceLast"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool tstReplaceLast(str S1, str S2, str S3)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Strings1-tstReverse"},"function tstReverse"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool tstReverse(str S)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Strings1-tstRight1"},"function tstRight1"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool tstRight1(str S)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Strings1-tstRight2"},"function tstRight2"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool tstRight2(str S)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Strings1-tstSize"},"function tstSize"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool tstSize(str S)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Strings1-tstSplit"},"function tstSplit"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool tstSplit(str S1, str S2)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Strings1-tstStartsWith"},"function tstStartsWith"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool tstStartsWith(str S1, str S2)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Strings1-tstSubstring1"},"function tstSubstring1"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool tstSubstring1(str S)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Strings1-tstSubstring2"},"function tstSubstring2"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool tstSubstring2(str S)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Strings1-toInt"},"function toInt"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool toInt(int N)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Strings1-tstToLowerCase"},"function tstToLowerCase"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool tstToLowerCase(str S)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Strings1-toReal"},"function toReal"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool toReal(real R)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Strings1-tstToUpperCase"},"function tstToUpperCase"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool tstToUpperCase(str S)"))),(0,l.kt)("h2",{id:"lang-rascal-tests-basic-Strings1-tstTrim"},"function tstTrim"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test bool tstTrim(str S)"))))}g.isMDXComponent=!0}}]);