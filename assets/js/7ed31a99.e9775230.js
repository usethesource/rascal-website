"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[14758],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),f=a,y=d["".concat(c,".").concat(f)]||d[f]||u[f]||i;return n?r.createElement(y,o(o({ref:t},p),{},{components:n})):r.createElement(y,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},11555:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={title:"Tag Declaration",sidebar_position:10},o=void 0,l={unversionedId:"Rascal/Declarations/Tag/index",id:"Rascal/Declarations/Tag/index",title:"Tag Declaration",description:"Synopsis",source:"@site/docs/Rascal/Declarations/Tag/index.md",sourceDirName:"Rascal/Declarations/Tag",slug:"/Rascal/Declarations/Tag/",permalink:"/docs/Rascal/Declarations/Tag/",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Tag Declaration",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Alias Declaration",permalink:"/docs/Rascal/Declarations/Alias/"},next:{title:"Annotation Declaration",permalink:"/docs/Rascal/Declarations/Annotation/"}},c={},s=[{value:"Synopsis",id:"synopsis",level:4},{value:"Description",id:"description",level:4},{value:"Benefits",id:"benefits",level:4},{value:"Pitfalls",id:"pitfalls",level:4}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"synopsis"},"Synopsis"),(0,a.kt)("p",null,"Tag declarations are not implemented (yet)."),(0,a.kt)("h4",{id:"description"},"Description"),(0,a.kt)("p",null,"Tag declarations explain which type the expected value of a tag should have."),(0,a.kt)("h4",{id:"benefits"},"Benefits"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"They help the type checker to find common errors and they can help the parser to parse the contents of a string tag using a context-free grammar declaration.")),(0,a.kt)("h4",{id:"pitfalls"},"Pitfalls"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Not yet implemented, so basically tags are not checked")))}u.isMDXComponent=!0}}]);