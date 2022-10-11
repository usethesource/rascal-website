"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[21627],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=p(n),u=r,k=c["".concat(o,".").concat(u)]||c[u]||d[u]||i;return n?a.createElement(k,l(l({ref:t},m),{},{components:n})):a.createElement(k,l({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},67324:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={title:"Assignment",keywords:["=","+=","-=","*=","/=","?=","[","..","]",".","?","@"]},l=void 0,s={unversionedId:"Rascal/Statements/Assignment/index",id:"Rascal/Statements/Assignment/index",title:"Assignment",description:"Synopsis",source:"@site/docs/Rascal/Statements/Assignment/index.md",sourceDirName:"Rascal/Statements/Assignment",slug:"/Rascal/Statements/Assignment/",permalink:"/docs/Rascal/Statements/Assignment/",draft:!1,tags:[],version:"current",frontMatter:{title:"Assignment",keywords:["=","+=","-=","*=","/=","?=","[","..","]",".","?","@"]},sidebar:"tutorialSidebar",previous:{title:"Assert",permalink:"/docs/Rascal/Statements/Assert/"},next:{title:"Annotation",permalink:"/docs/Rascal/Statements/Assignment/Annotation/"}},o={},p=[{value:"Synopsis",id:"synopsis",level:4},{value:"Syntax",id:"syntax",level:4},{value:"Description",id:"description",level:4}],m={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h4",{id:"synopsis"},"Synopsis"),(0,r.kt)("p",null,"Assign a value to a variable or more complex data structure."),(0,r.kt)("h4",{id:"syntax"},"Syntax"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Assignable AssignmentOp Exp")),(0,r.kt)("p",null,"where ",(0,r.kt)("em",{parentName:"p"},"AssignmentOp")," may be one of ",(0,r.kt)("inlineCode",{parentName:"p"},"="),", ",(0,r.kt)("inlineCode",{parentName:"p"},"+="),", ",(0,r.kt)("inlineCode",{parentName:"p"},"-="),", ",(0,r.kt)("inlineCode",{parentName:"p"},"*="),", ",(0,r.kt)("inlineCode",{parentName:"p"},"/="),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"?="),"."),(0,r.kt)("p",null,"An ",(0,r.kt)("em",{parentName:"p"},"Assignable")," is one of the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Var")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Assignable [ Exp ]")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Assignable [ Exp .. Exp ]")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Assignable [ Exp, Exp .. Exp ]")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Assignable . Name")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"< Assignable, Assignable, ..., Assignable >")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Assignable ? Exp")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Assignable @ Name")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Name ( Assignable, Assignable, ... )"))),(0,r.kt)("h4",{id:"description"},"Description"),(0,r.kt)("p",null,"The purpose of an assignment is to assign a new value to a simple variable or to an element of a more complex data structure. "),(0,r.kt)("p",null,"The standard assignment operator is ",(0,r.kt)("inlineCode",{parentName:"p"},"="),".\nThe other assignment operators can be expressed as abbreviations for the standard assignment operator."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Assignment Operator"),(0,r.kt)("th",{parentName:"tr",align:null},"Equivalent to"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Assignable += Exp")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Assignable = Assignable + Exp"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Assignable -= Exp")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Assignable = Assignable - Exp"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Assignable *= Exp")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Assignable = Assignable * Exp"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Assignable /= Exp")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Assignable = Assignable / Exp"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Assignable &= Exp")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Assignable = Assignable & Exp"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Assignable ?= Exp")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Assignable = Assignable ? Exp"))))),(0,r.kt)("p",null,"An assignable is either a single variable, (the base variable), optionally followed by subscriptions, slices or field selections.\nThe assignment statement always results in assigning a completely new value to the base variable.\nWe distinguish the following forms of assignment:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/Rascal/Statements/Assignment/Annotation/"},"Annotation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/Rascal/Statements/Assignment/Constructor/"},"Constructor")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/Rascal/Statements/Assignment/Field/"},"Field")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/Rascal/Statements/Assignment/IsDefined/"},"IsDefined")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/Rascal/Statements/Assignment/Multiple/"},"Multiple")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/Rascal/Statements/Assignment/Slice/"},"Slice")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/Rascal/Statements/Assignment/Subscription/"},"Subscription")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/Rascal/Statements/Assignment/Variable/"},"Variable"))))}d.isMDXComponent=!0}}]);