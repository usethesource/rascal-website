"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[55961],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>p});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),o=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=o(e.components);return n.createElement(u.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=o(a),p=r,g=d["".concat(u,".").concat(p)]||d[p]||k[p]||i;return a?n.createElement(g,l(l({ref:t},c),{},{components:a})):n.createElement(g,l({ref:t},c))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var o=2;o<i;o++)l[o]=a[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5766:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>k,frontMatter:()=>i,metadata:()=>s,toc:()=>o});var n=a(87462),r=(a(67294),a(3905));const i={title:"module util::tasks::Manager"},l=void 0,s={unversionedId:"Library/util/tasks/Manager",id:"Library/util/tasks/Manager",title:"module util::tasks::Manager",description:"Usage",source:"@site/docs/Library/util/tasks/Manager.md",sourceDirName:"Library/util/tasks",slug:"/Library/util/tasks/Manager",permalink:"/docs/Library/util/tasks/Manager",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Library/util/tasks/Manager.md",tags:[],version:"current",frontMatter:{title:"module util::tasks::Manager"},sidebar:"tutorialSidebar",previous:{title:"util::tasks",permalink:"/docs/Library/util/tasks/"},next:{title:"Rascal Language Reference",permalink:"/docs/Rascal/"}},u={},o=[{value:"Usage",id:"usage",level:4},{value:"alias Task&T,&N {#util-tasks-Manager-Task&T,&N}",id:"util-tasks-Manager-Task&T,&N",level:2},{value:"function registerProducer",id:"util-tasks-Manager-registerProducer",level:2},{value:"function unregisterProducer",id:"util-tasks-Manager-unregisterProducer",level:2},{value:"function lockProducerRegistry",id:"util-tasks-Manager-lockProducerRegistry",level:2},{value:"function unlockProducerRegistry",id:"util-tasks-Manager-unlockProducerRegistry",level:2},{value:"function registryTransaction",id:"util-tasks-Manager-registryTransaction",level:2},{value:"alias Transaction",id:"util-tasks-Manager-Transaction",level:2},{value:"alias Fact",id:"util-tasks-Manager-Fact",level:2},{value:"function startTransaction",id:"util-tasks-Manager-startTransaction",level:2},{value:"function endTransaction",id:"util-tasks-Manager-endTransaction",level:2},{value:"function abandonTransaction",id:"util-tasks-Manager-abandonTransaction",level:2},{value:"function getFact",id:"util-tasks-Manager-getFact",level:2},{value:"function queryFact",id:"util-tasks-Manager-queryFact",level:2},{value:"function hasFact",id:"util-tasks-Manager-hasFact",level:2},{value:"function removeFact",id:"util-tasks-Manager-removeFact",level:2},{value:"function setFact",id:"util-tasks-Manager-setFact",level:2},{value:"function getDependencyGraph",id:"util-tasks-Manager-getDependencyGraph",level:2}],c={toc:o};function k(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h4",{id:"usage"},"Usage"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"import util::tasks::Manager;")),(0,r.kt)("h2",{id:"util-tasks-Manager-Task&T,&N"},"alias Task","[&T,&N]"," {#util-tasks-Manager-Task","[&T,&N]","}"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bool (Transaction tr, type[&T] key, &N name)"))),(0,r.kt)("h2",{id:"util-tasks-Manager-registerProducer"},"function registerProducer"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"void registerProducer(Task[&T,&N] producer, set[value] keys)"))),(0,r.kt)("h2",{id:"util-tasks-Manager-unregisterProducer"},"function unregisterProducer"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"void unregisterProducer(Task[&T,&N] producer)"))),(0,r.kt)("h2",{id:"util-tasks-Manager-lockProducerRegistry"},"function lockProducerRegistry"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"void lockProducerRegistry()"))),(0,r.kt)("p",null,"Lock the producer registry \u201a\xc4\xec use this before adding/removing a\nset of related producers. Remember to enclose the critical section in\ntry { ...\xac\u2020} finally { unlockProducerRegistry(); } "),(0,r.kt)("h2",{id:"util-tasks-Manager-unlockProducerRegistry"},"function unlockProducerRegistry"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"void unlockProducerRegistry()"))),(0,r.kt)("h2",{id:"util-tasks-Manager-registryTransaction"},"function registryTransaction"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"void registryTransaction(void() f)"))),(0,r.kt)("h2",{id:"util-tasks-Manager-Transaction"},"alias Transaction"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"value"))),(0,r.kt)("h2",{id:"util-tasks-Manager-Fact"},"alias Fact"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"value"))),(0,r.kt)("h2",{id:"util-tasks-Manager-startTransaction"},"function startTransaction"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Transaction startTransaction()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Transaction startTransaction(Transaction parent)"))),(0,r.kt)("h2",{id:"util-tasks-Manager-endTransaction"},"function endTransaction"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"void endTransaction(Transaction tr)"))),(0,r.kt)("h2",{id:"util-tasks-Manager-abandonTransaction"},"function abandonTransaction"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"void abandonTransaction(Transaction tr)"))),(0,r.kt)("h2",{id:"util-tasks-Manager-getFact"},"function getFact"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"&T getFact(Transaction tr, type[&T] key, value name)"))),(0,r.kt)("h2",{id:"util-tasks-Manager-queryFact"},"function queryFact"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"&T queryFact(Transaction tr, type[&T] key, value name)"))),(0,r.kt)("h2",{id:"util-tasks-Manager-hasFact"},"function hasFact"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bool hasFact(Transaction tr, type[&T] key, value name)"))),(0,r.kt)("h2",{id:"util-tasks-Manager-removeFact"},"function removeFact"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"void removeFact(Transaction tr, type[&T] key, value name)"))),(0,r.kt)("h2",{id:"util-tasks-Manager-setFact"},"function setFact"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Fact setFact(Transaction tr, type[&T] key, value name, &T val)"))),(0,r.kt)("h2",{id:"util-tasks-Manager-getDependencyGraph"},"function getDependencyGraph"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"tuple[rel[str,str,str,int],rel[str,str,str]] getDependencyGraph(Transaction tr)"))))}k.isMDXComponent=!0}}]);