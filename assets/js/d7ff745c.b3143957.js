"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[12264],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>m});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var o=a.createContext({}),u=function(e){var r=a.useContext(o),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},s=function(e){var r=u(e.components);return a.createElement(o.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},d=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=u(t),m=n,f=d["".concat(o,".").concat(m)]||d[m]||c[m]||l;return t?a.createElement(f,p(p({ref:r},s),{},{components:t})):a.createElement(f,p({ref:r},s))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var l=t.length,p=new Array(l);p[0]=d;var i={};for(var o in r)hasOwnProperty.call(r,o)&&(i[o]=r[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,p[1]=i;for(var u=2;u<l;u++)p[u]=t[u];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},10069:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>p,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var a=t(83117),n=(t(67294),t(3905));const l={title:"NamedParagraph"},p=void 0,i={unversionedId:"Tutor/Markup/StructureMarkup/NamedParagraph/index",id:"Tutor/Markup/StructureMarkup/NamedParagraph/index",title:"NamedParagraph",description:"Synopsis",source:"@site/docs/Tutor/Markup/StructureMarkup/NamedParagraph/index.md",sourceDirName:"Tutor/Markup/StructureMarkup/NamedParagraph",slug:"/Tutor/Markup/StructureMarkup/NamedParagraph/",permalink:"/docs/Tutor/Markup/StructureMarkup/NamedParagraph/",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Tutor/Markup/StructureMarkup/NamedParagraph/index.md",tags:[],version:"current",frontMatter:{title:"NamedParagraph"},sidebar:"tutorialSidebar",previous:{title:"Bullet Lists",permalink:"/docs/Tutor/Markup/StructureMarkup/BulletLists/"},next:{title:"NewParagraph",permalink:"/docs/Tutor/Markup/StructureMarkup/NewParagraph/"}},o={},u=[{value:"Synopsis",id:"synopsis",level:4},{value:"Syntax",id:"syntax",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4},{value:"Pitfalls",id:"pitfalls",level:4}],s={toc:u};function c(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h4",{id:"synopsis"},"Synopsis"),(0,n.kt)("p",null,"Mark up for a named paragraph."),(0,n.kt)("h4",{id:"syntax"},"Syntax"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"## ParagraphName")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"\\### ParagraphName")),(0,n.kt)("li",{parentName:"ul"},"...")),(0,n.kt)("h4",{id:"description"},"Description"),(0,n.kt)("p",null,"A NamedParagraph produces a named paragraph of a level that is determined by the number of ",(0,n.kt)("inlineCode",{parentName:"p"},"#")," characters preceding the ",(0,n.kt)("em",{parentName:"p"},"ParagraphName"),"."),(0,n.kt)("h4",{id:"examples"},"Examples"),(0,n.kt)("p",null,"The input:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"## Paragraph")),(0,n.kt)("p",null,"will give"),(0,n.kt)("h4",{id:"pitfalls"},"Pitfalls"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"NamedParagraphs have at least two hash signs (",(0,n.kt)("inlineCode",{parentName:"li"},"##"),"). A single hash is reserved for the Concept level."),(0,n.kt)("li",{parentName:"ul"},"A NamedParagraph should start at the start of a line.")))}c.isMDXComponent=!0}}]);