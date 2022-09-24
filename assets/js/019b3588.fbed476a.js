"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[38215],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},84320:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={title:"Renaming"},o=void 0,c={unversionedId:"Tutor/Maintenance/Renaming/index",id:"Tutor/Maintenance/Renaming/index",title:"Renaming",description:"Synopsis",source:"@site/docs/Tutor/Maintenance/Renaming/index.md",sourceDirName:"Tutor/Maintenance/Renaming",slug:"/Tutor/Maintenance/Renaming/",permalink:"/docs/Tutor/Maintenance/Renaming/",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Tutor/Maintenance/Renaming/index.md",tags:[],version:"current",frontMatter:{title:"Renaming"},sidebar:"tutorialSidebar",previous:{title:"Removing",permalink:"/docs/Tutor/Maintenance/Removing/"},next:{title:"Markup",permalink:"/docs/Tutor/Markup/"}},l={},p=[{value:"Synopsis",id:"synopsis",level:4},{value:"Description",id:"description",level:4}],s={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"synopsis"},"Synopsis"),(0,a.kt)("p",null,"How to rename a concept."),(0,a.kt)("h4",{id:"description"},"Description"),(0,a.kt)("p",null,"To rename a concept ",(0,a.kt)("em",{parentName:"p"},"C")," to ",(0,a.kt)("em",{parentName:"p"},"D"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Rename ",(0,a.kt)("em",{parentName:"li"},"C")," to ",(0,a.kt)("em",{parentName:"li"},"D")," using the commands of the version control system."),(0,a.kt)("li",{parentName:"ul"},"Rename ",(0,a.kt)("inlineCode",{parentName:"li"},"D/C.concept")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"D/D.concept")," using the version control system."),(0,a.kt)("li",{parentName:"ul"},"Open ",(0,a.kt)("inlineCode",{parentName:"li"},"D/D.concept")," in a text editor and change the display name on the first line ",(0,a.kt)("inlineCode",{parentName:"li"},"# Old Display Name")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"# New Display Name"),"."),(0,a.kt)("li",{parentName:"ul"},"Recompile the course.")))}u.isMDXComponent=!0}}]);