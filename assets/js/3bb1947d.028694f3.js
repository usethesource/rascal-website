"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[3353],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(f,s(s({ref:t},c),{},{components:r})):n.createElement(f,s({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var p=2;p<i;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},23909:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const i={title:"Synthesis",sidebar_position:2},s=void 0,o={unversionedId:"WhyRascal/SolutionStrategies/Synthesis/index",id:"WhyRascal/SolutionStrategies/Synthesis/index",title:"Synthesis",description:"Synopsis",source:"@site/docs/WhyRascal/SolutionStrategies/Synthesis/index.md",sourceDirName:"WhyRascal/SolutionStrategies/Synthesis",slug:"/WhyRascal/SolutionStrategies/Synthesis/",permalink:"/docs/WhyRascal/SolutionStrategies/Synthesis/",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Synthesis",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Analysis",permalink:"/docs/WhyRascal/SolutionStrategies/Analysis/"},next:{title:"Comparison with other paradigms",permalink:"/docs/WhyRascal/CompareWithOtherParadigms/"}},l={},p=[{value:"Synopsis",id:"synopsis",level:4},{value:"Description",id:"description",level:4}],c={toc:p};function u(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"synopsis"},"Synopsis"),(0,a.kt)("p",null,"Strategies to synthesise results."),(0,a.kt)("h4",{id:"description"},"Description"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Synthesis,Workflow",src:r(27167).Z,width:"745",height:"870"})),(0,a.kt)("p",null,"Results are synthesized as shown in the Figure above. This consists of the following steps:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Determine the results of the synthesis phase. Wide range of results is possible including:"),(0,a.kt)("p",{parentName:"li"},"**  Generated source code."),(0,a.kt)("p",{parentName:"li"},"**  Generated abstract representations, like finite automata or other formals models that capture properties of the SUI."),(0,a.kt)("p",{parentName:"li"},"**  Generated data for visualizations that will be used by visualization tools. ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"If source code is to be generated, there are various options."),(0,a.kt)("p",{parentName:"li"},"**  Print strings with embedded variables."),(0,a.kt)("p",{parentName:"li"},"**  Convert abstract syntax trees to strings (perhaps using forms of pretty printing)."),(0,a.kt)("p",{parentName:"li"},"**  Use a grammar of the target source language, also for code generation.\nNote that this approach guarantees the generation of syntactically correct source code as opposed to code\ngeneration using print statements or string templates.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"If other output is needed (e.g., an automaton or other formal structure) write data declarations to represent that output.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Finally, write functions and rewrite rules that generate the desired results."))),(0,a.kt)("p",null,"The Rascal features that are frequently used for synthesis are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Syntax definitions or data declarations to define output formats.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Pattern matching (used in many Rascal statements).")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Visits of datastructures and on-the-fly code generation.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Rewrite rules."))))}u.isMDXComponent=!0},27167:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/define-synthesis-75080d2b5bb9551f574415fdfdcc0131.png"}}]);