"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[71884],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),o=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=o(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=o(n),m=r,b=d["".concat(p,".").concat(m)]||d[m]||c[m]||l;return n?a.createElement(b,i(i({ref:t},u),{},{components:n})):a.createElement(b,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},99289:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>o});var a=n(83117),r=(n(67294),n(3905));const l={title:"ListRelation Subscription",keywords:["[","]"]},i=void 0,s={unversionedId:"Rascal/Expressions/Values/ListRelation/Subscription/index",id:"Rascal/Expressions/Values/ListRelation/Subscription/index",title:"ListRelation Subscription",description:"Synopsis",source:"@site/docs/Rascal/Expressions/Values/ListRelation/Subscription/index.md",sourceDirName:"Rascal/Expressions/Values/ListRelation/Subscription",slug:"/Rascal/Expressions/Values/ListRelation/Subscription/",permalink:"/docs/Rascal/Expressions/Values/ListRelation/Subscription/",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Rascal/Expressions/Values/ListRelation/Subscription/index.md",tags:[],version:"current",frontMatter:{title:"ListRelation Subscription",keywords:["[","]"]},sidebar:"tutorialSidebar",previous:{title:"ListRelation Reflexive Transitive Closure",permalink:"/docs/Rascal/Expressions/Values/ListRelation/ReflexiveTransitiveClosure/"},next:{title:"ListRelation Transitive Closure",permalink:"/docs/Rascal/Expressions/Values/ListRelation/TransitiveClosure/"}},p={},o=[{value:"Synopsis",id:"synopsis",level:4},{value:"Syntax",id:"syntax",level:4},{value:"Variant 1",id:"variant-1",level:2},{value:"Variant 2",id:"variant-2",level:2},{value:"Description",id:"description",level:4},{value:"Variant 1",id:"variant-1-1",level:2},{value:"Variant 2",id:"variant-2-1",level:2},{value:"Examples",id:"examples",level:4}],u={toc:o};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h4",{id:"synopsis"},"Synopsis"),(0,r.kt)("p",null,"Indexing of a list relation via tuple values."),(0,r.kt)("h4",{id:"syntax"},"Syntax"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Exp<sub>0</sub> [ Exp<sub>1</sub>, Exp<sub>2</sub>, ... Exp~n~]"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Exp<sub>0</sub> [ Exp<sub>1</sub>]")))),(0,r.kt)("h2",{id:"variant-1"},"Variant 1"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"Exp<sub>0</sub>")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"Exp<sub>1</sub>")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"Exp<sub>2</sub>")),(0,r.kt)("th",{parentName:"tr",align:null},"..."),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"Exp<sub>0</sub> [ Exp<sub>1</sub>, Exp<sub>2</sub>, ... ]")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"lrel[T<sub>1</sub>, T<sub>2</sub>, ... T~m~]")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:null},"..."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"lrel[T~n~, _T~n+1~_, ... T~m~]"))))),(0,r.kt)("h2",{id:"variant-2"},"Variant 2"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"Exp<sub>0</sub>")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"Exp<sub>1</sub>")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"Exp<sub>0</sub> [ Exp<sub>1</sub> ]"))))),(0,r.kt)("p",null,"|\n| ",(0,r.kt)("inlineCode",{parentName:"p"},"lrel[T<sub>1</sub>, T<sub>2</sub>, ... T~m~]"),"    | ",(0,r.kt)("inlineCode",{parentName:"p"},"list[T<sub>1</sub>]")," | ",(0,r.kt)("inlineCode",{parentName:"p"},"lrel[T<sub>2</sub>, T<sub>3</sub>, ... T~m~]"),"   |"),(0,r.kt)("h4",{id:"description"},"Description"),(0,r.kt)("p",null,"ListRelation resulting from subscription of a ListRelation ",(0,r.kt)("em",{parentName:"p"},"Exp"),(0,r.kt)("sub",null,"0"),"."),(0,r.kt)("h2",{id:"variant-1-1"},"Variant 1"),(0,r.kt)("p",null,"Subscription with the index values of ",(0,r.kt)("em",{parentName:"p"},"Exp"),(0,r.kt)("sub",null,"1"),", ",(0,r.kt)("em",{parentName:"p"},"Exp"),(0,r.kt)("sub",null,"2"),", ....\nThe result is a ListRelation with all tuples that have these index values as first elements\nwith the index values removed from the tuple.\nIf the resulting tuple has only a single element, a list is returned instead of a relation.\nA wildcard ",(0,r.kt)("inlineCode",{parentName:"p"},"_")," as index value matches all possible values at that index position."),(0,r.kt)("h2",{id:"variant-2-1"},"Variant 2"),(0,r.kt)("p",null,"Subscription with a set of the index values of ",(0,r.kt)("em",{parentName:"p"},"Exp"),(0,r.kt)("sub",null,"1"),".\nThe result is a ListRelation with all tuples that have these index values as first element\nwith the index values removed from the tuple. "),(0,r.kt)("h4",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>R = [<1,10>, <2,20>, <1,11>, <3,30>, <2,21>];\nlrel[int,int]: [\n  <1,10>,\n  <2,20>,\n  <1,11>,\n  <3,30>,\n  <2,21>\n]\nrascal>R[1];\ntuple[int,int]: <2,20>\nrascal>R[{1}];\nlist[int]: [10,11]\nrascal>R[{1, 2}];\nlist[int]: [10,20,11,21]\nrascal>RR = [<1,10,100>,<1,11,101>,<2,20,200>,<2,22,202>,\n>>>>>>>              <3,30,300>];\nlrel[int,int,int]: [\n  <1,10,100>,\n  <1,11,101>,\n  <2,20,200>,\n  <2,22,202>,\n  <3,30,300>\n]\nrascal>RR[1];\ntuple[int,int,int]: <1,11,101>\nrascal>RR[1,_];\nlist[int]: [100,101]\n")),(0,r.kt)("p",null,"Introduce a relation with economic data and assign it to ",(0,r.kt)("inlineCode",{parentName:"p"},"GDP"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>lrel[str country, int year, int amount] GDP =\n>>>>>>>[<"US", 2008, 14264600>, <"EU", 2008, 18394115>,\n>>>>>>> <"Japan", 2008, 4923761>, <"US", 2007, 13811200>, \n>>>>>>> <"EU", 2007, 13811200>, <"Japan", 2007, 4376705>];\nlrel[str country,int year,int amount]: [\n  <"US",2008,14264600>,\n  <"EU",2008,18394115>,\n  <"Japan",2008,4923761>,\n  <"US",2007,13811200>,\n  <"EU",2007,13811200>,\n  <"Japan",2007,4376705>\n]\n')),(0,r.kt)("p",null,"and then retrieve the information for the index ",(0,r.kt)("inlineCode",{parentName:"p"},'"Japan"'),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>GDP["Japan"];\nlrel[int,int]: [\n  <2008,4923761>,\n  <2007,4376705>\n]\n')),(0,r.kt)("p",null,"or rather for the indices ",(0,r.kt)("inlineCode",{parentName:"p"},'"Japan"')," and ",(0,r.kt)("inlineCode",{parentName:"p"},"2008"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>GDP["Japan", 2008];\nlist[int]: [4923761]\n')))}c.isMDXComponent=!0}}]);