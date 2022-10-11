"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[52517],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),o=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=o(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),m=o(r),d=a,k=m["".concat(p,".").concat(d)]||m[d]||c[d]||i;return r?n.createElement(k,l(l({ref:t},s),{},{components:r})):n.createElement(k,l({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u.mdxType="string"==typeof e?e:a,l[1]=u;for(var o=2;o<i;o++)l[o]=r[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},43585:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>u,toc:()=>o});var n=r(87462),a=(r(67294),r(3905));const i={title:"Numbered Lists"},l=void 0,u={unversionedId:"Tutor/Markup/StructureMarkup/NumberedLists/index",id:"Tutor/Markup/StructureMarkup/NumberedLists/index",title:"Numbered Lists",description:"Synopsis",source:"@site/docs/Tutor/Markup/StructureMarkup/NumberedLists/index.md",sourceDirName:"Tutor/Markup/StructureMarkup/NumberedLists",slug:"/Tutor/Markup/StructureMarkup/NumberedLists/",permalink:"/docs/Tutor/Markup/StructureMarkup/NumberedLists/",draft:!1,tags:[],version:"current",frontMatter:{title:"Numbered Lists"},sidebar:"tutorialSidebar",previous:{title:"NewParagraph",permalink:"/docs/Tutor/Markup/StructureMarkup/NewParagraph/"},next:{title:"Table",permalink:"/docs/Tutor/Markup/StructureMarkup/Table/"}},p={},o=[{value:"Synopsis",id:"synopsis",level:4},{value:"Syntax",id:"syntax",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4},{value:"Pitfalls",id:"pitfalls",level:4}],s={toc:o};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"synopsis"},"Synopsis"),(0,a.kt)("p",null,"A (possibly nested) list of numbered points."),(0,a.kt)("h4",{id:"syntax"},"Syntax"),(0,a.kt)("p",null,"Here ",(0,a.kt)("inlineCode",{parentName:"p"},"\u2420")," is used to represent a visible space:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1. MarkedText")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"\u2420\u2420\u24201. MarkedText")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"\u2420\u2420\u2420\u2420\u2420\u24201. MarkedText"))),(0,a.kt)("h4",{id:"description"},"Description"),(0,a.kt)("p",null,"Numbered Lists create, possibly nested, lists of numbered points.\nThey start with a number followed by a period (",(0,a.kt)("inlineCode",{parentName:"p"},"1."),"). The number of spaces indicates the nesting level, every 3 spaces represents one level."),(0,a.kt)("p",null,"A list item ends with:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the start of a new list item."),(0,a.kt)("li",{parentName:"ul"},"an empty line.")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/Tutor/Markup/StructureMarkup/BulletLists/"},"bullet lists")," and ",(0,a.kt)("a",{parentName:"p",href:"/docs/Tutor/Markup/StructureMarkup/NumberedLists/"},"numbered lists")," can be mixed."),(0,a.kt)("h4",{id:"examples"},"Examples"),(0,a.kt)("p",null,"The input"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"1. First item.\n1. Second item.\n")),(0,a.kt)("p",null,"will produce:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"First item."),(0,a.kt)("li",{parentName:"ol"},"Second item.")),(0,a.kt)("p",null,"The input"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"1. First item.\n   1.  First subitem.\n   1.  Second subitem.\n1. Second item\n")),(0,a.kt)("p",null,"will produce:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"First item.",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"First subitem."),(0,a.kt)("li",{parentName:"ol"},"Second subitem."))),(0,a.kt)("li",{parentName:"ol"},"Second item")),(0,a.kt)("h4",{id:"pitfalls"},"Pitfalls"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"An empty line is required ",(0,a.kt)("em",{parentName:"li"},"after")," a NumberedList")))}c.isMDXComponent=!0}}]);