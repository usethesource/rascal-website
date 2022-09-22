"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[82479],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=i,y=d["".concat(s,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(y,a(a({ref:t},p),{},{components:n})):r.createElement(y,a({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},12049:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(83117),i=(n(67294),n(3905));const o={title:"Model-Driven Engineering"},a=void 0,l={unversionedId:"WhyRascal/EASY/ModelDrivenEngineering/index",id:"WhyRascal/EASY/ModelDrivenEngineering/index",title:"Model-Driven Engineering",description:"Synopsis",source:"@site/docs/WhyRascal/EASY/ModelDrivenEngineering/index.md",sourceDirName:"WhyRascal/EASY/ModelDrivenEngineering",slug:"/WhyRascal/EASY/ModelDrivenEngineering/",permalink:"/docs/WhyRascal/EASY/ModelDrivenEngineering/",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/WhyRascal/EASY/ModelDrivenEngineering/index.md",tags:[],version:"current",frontMatter:{title:"Model-Driven Engineering"},sidebar:"tutorialSidebar",previous:{title:"Forensics",permalink:"/docs/WhyRascal/EASY/Forensics/"},next:{title:"Renovation",permalink:"/docs/WhyRascal/EASY/Renovation/"}},s={},c=[{value:"Synopsis",id:"synopsis",level:4},{value:"Description",id:"description",level:4}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h4",{id:"synopsis"},"Synopsis"),(0,i.kt)("p",null,"Tools for Model-Driven Engineering."),(0,i.kt)("h4",{id:"description"},"Description"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Elisabeth")," is a software architect at a large airplane manufacturer and her concern is reliability and dependability of\nairplane control software. She and her team have designed a UML model of the control software and have extended it with annotations that describe the reliability of individual components.\nShe will use this annotated model in two ways: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"to extract relevant information from it to synthesize input for a statistical tool that will compute overall system reliability from the reliability of individual components;"),(0,i.kt)("li",{parentName:"ul"},"to generate executable code that takes the reliability issues into account.")))}u.isMDXComponent=!0}}]);