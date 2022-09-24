"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[89023],{3905:(t,o,n)=>{n.d(o,{Zo:()=>l,kt:()=>p});var e=n(67294);function r(t,o,n){return o in t?Object.defineProperty(t,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[o]=n,t}function i(t,o){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);o&&(e=e.filter((function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable}))),n.push.apply(n,e)}return n}function u(t){for(var o=1;o<arguments.length;o++){var n=null!=arguments[o]?arguments[o]:{};o%2?i(Object(n),!0).forEach((function(o){r(t,o,n[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(n,o))}))}return t}function d(t,o){if(null==t)return{};var n,e,r=function(t,o){if(null==t)return{};var n,e,r={},i=Object.keys(t);for(e=0;e<i.length;e++)n=i[e],o.indexOf(n)>=0||(r[n]=t[n]);return r}(t,o);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(e=0;e<i.length;e++)n=i[e],o.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=e.createContext({}),a=function(t){var o=e.useContext(s),n=o;return t&&(n="function"==typeof t?t(o):u(u({},o),t)),n},l=function(t){var o=a(t.components);return e.createElement(s.Provider,{value:o},t.children)},m={inlineCode:"code",wrapper:function(t){var o=t.children;return e.createElement(e.Fragment,{},o)}},c=e.forwardRef((function(t,o){var n=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,l=d(t,["components","mdxType","originalType","parentName"]),c=a(n),p=r,C=c["".concat(s,".").concat(p)]||c[p]||m[p]||i;return n?e.createElement(C,u(u({ref:o},l),{},{components:n})):e.createElement(C,u({ref:o},l))}));function p(t,o){var n=arguments,r=o&&o.mdxType;if("string"==typeof t||r){var i=n.length,u=new Array(i);u[0]=c;var d={};for(var s in o)hasOwnProperty.call(o,s)&&(d[s]=o[s]);d.originalType=t,d.mdxType="string"==typeof t?t:r,u[1]=d;for(var a=2;a<i;a++)u[a]=n[a];return e.createElement.apply(null,u)}return e.createElement.apply(null,n)}c.displayName="MDXCreateElement"},58623:(t,o,n)=>{n.r(o),n.d(o,{assets:()=>s,contentTitle:()=>u,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>a});var e=n(87462),r=(n(67294),n(3905));const i={title:"module demo::common::WordCount::WordCount"},u=void 0,d={unversionedId:"Library/demo/common/WordCount/WordCount",id:"Library/demo/common/WordCount/WordCount",title:"module demo::common::WordCount::WordCount",description:"Usage",source:"@site/docs/Library/demo/common/WordCount/WordCount.md",sourceDirName:"Library/demo/common/WordCount",slug:"/Library/demo/common/WordCount/",permalink:"/docs/Library/demo/common/WordCount/",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Library/demo/common/WordCount/WordCount.md",tags:[],version:"current",frontMatter:{title:"module demo::common::WordCount::WordCount"},sidebar:"tutorialSidebar",previous:{title:"module demo::common::Trans",permalink:"/docs/Library/demo/common/Trans"},next:{title:"module demo::common::WordCount::CountInLine1",permalink:"/docs/Library/demo/common/WordCount/CountInLine1"}},s={},a=[{value:"Usage",id:"usage",level:4},{value:"Synopsis",id:"synopsis",level:4},{value:"Description",id:"description",level:4},{value:"function wordCount",id:"demo-common-WordCount-WordCount-wordCount",level:2},{value:"Synopsis",id:"synopsis-1",level:4},{value:"Description",id:"description-1",level:4},{value:"function wordCountReduce",id:"demo-common-WordCount-WordCount-wordCountReduce",level:2},{value:"Synopsis",id:"synopsis-2",level:4},{value:"Description",id:"description-2",level:4},{value:"function wordCountMapSum",id:"demo-common-WordCount-WordCount-wordCountMapSum",level:2},{value:"Synopsis",id:"synopsis-3",level:4},{value:"Description",id:"description-3",level:4},{value:"function tstWordCount1",id:"demo-common-WordCount-WordCount-tstWordCount1",level:2},{value:"function tstWordCount2",id:"demo-common-WordCount-WordCount-tstWordCount2",level:2},{value:"function tstWordCount3",id:"demo-common-WordCount-WordCount-tstWordCount3",level:2},{value:"function tstWordCount4",id:"demo-common-WordCount-WordCount-tstWordCount4",level:2},{value:"function tstWordCount5",id:"demo-common-WordCount-WordCount-tstWordCount5",level:2},{value:"function tstWordCount6",id:"demo-common-WordCount-WordCount-tstWordCount6",level:2}],l={toc:a};function m(t){let{components:o,...n}=t;return(0,r.kt)("wrapper",(0,e.Z)({},l,n,{components:o,mdxType:"MDXLayout"}),(0,r.kt)("h4",{id:"usage"},"Usage"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"import demo::common::WordCount::WordCount;")),(0,r.kt)("h4",{id:"synopsis"},"Synopsis"),(0,r.kt)("p",null,"demonstrates different ways of counting words in a string"),(0,r.kt)("h4",{id:"description"},"Description"),(0,r.kt)("p",null,"This not only demonstrates counting words using regular expressions and pattern matching with backtracking,\nbut also highlights the use of functions as parameters to other functions (higher-order functions)\nand the concept of ",(0,r.kt)("a",{parentName:"p",href:"../../../../Rascal/Expressions/Reducer"},"Reducer"),"s."),(0,r.kt)("h2",{id:"demo-common-WordCount-WordCount-wordCount"},"function wordCount"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"int wordCount(list[str] input, int (str s) countInLine)"))),(0,r.kt)("h4",{id:"synopsis-1"},"Synopsis"),(0,r.kt)("p",null,"Count the total amount of words in a list of strings"),(0,r.kt)("h4",{id:"description-1"},"Description"),(0,r.kt)("p",null,"wordCount takes a list of strings and a ",(0,r.kt)("inlineCode",{parentName:"p"},"countInLine")," function\nthat is applied to each line. The total number of words is returned"),(0,r.kt)("h2",{id:"demo-common-WordCount-WordCount-wordCountReduce"},"function wordCountReduce"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"int wordCountReduce(list[str] input, int (str s) countInline)"))),(0,r.kt)("h4",{id:"synopsis-2"},"Synopsis"),(0,r.kt)("p",null,"Count the total amount of words in a list of strings"),(0,r.kt)("h4",{id:"description-2"},"Description"),(0,r.kt)("p",null,"wordCountReduce takes a list of strings and a ",(0,r.kt)("inlineCode",{parentName:"p"},"countInLine")," function\nthat is applied to each line. The total number of words is returned.\nIt uses a ",(0,r.kt)("a",{parentName:"p",href:"../../../../Rascal/Expressions/Reducer"},"Reducer")," instead of a for loop for brevity."),(0,r.kt)("h2",{id:"demo-common-WordCount-WordCount-wordCountMapSum"},"function wordCountMapSum"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"int wordCountMapSum(list[str] input, int (str s) countInLine)"))),(0,r.kt)("h4",{id:"synopsis-3"},"Synopsis"),(0,r.kt)("p",null,"Count the total amount of words in a list of strings"),(0,r.kt)("h4",{id:"description-3"},"Description"),(0,r.kt)("p",null,"wordCountMapSum takes a list of strings and a ",(0,r.kt)("inlineCode",{parentName:"p"},"countInLine")," function\nthat is applied to each line. The total number of words is returned.\nIt uses a traditional -in functional programming- ",(0,r.kt)("inlineCode",{parentName:"p"},"map")," ((List::mapper) and ",(0,r.kt)("a",{parentName:"p",href:"/docs/Library/List#List-sum"},"sum")," functions from the ",(0,r.kt)("a",{parentName:"p",href:"../../../../Library/"},"Library"),"."),(0,r.kt)("h2",{id:"demo-common-WordCount-WordCount-tstWordCount1"},"function tstWordCount1"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"test bool tstWordCount1()"))),(0,r.kt)("h2",{id:"demo-common-WordCount-WordCount-tstWordCount2"},"function tstWordCount2"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"test bool tstWordCount2()"))),(0,r.kt)("h2",{id:"demo-common-WordCount-WordCount-tstWordCount3"},"function tstWordCount3"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"test bool tstWordCount3()"))),(0,r.kt)("h2",{id:"demo-common-WordCount-WordCount-tstWordCount4"},"function tstWordCount4"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"test bool tstWordCount4(str txt)"))),(0,r.kt)("h2",{id:"demo-common-WordCount-WordCount-tstWordCount5"},"function tstWordCount5"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"test bool tstWordCount5(str txt)"))),(0,r.kt)("h2",{id:"demo-common-WordCount-WordCount-tstWordCount6"},"function tstWordCount6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"test bool tstWordCount6(str txt)"))))}m.isMDXComponent=!0}}]);