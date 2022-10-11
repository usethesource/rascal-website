"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[9243],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>f});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=l(t),f=o,d=m["".concat(s,".").concat(f)]||m[f]||p[f]||i;return t?n.createElement(d,a(a({ref:r},u),{},{components:t})):n.createElement(d,a({ref:r},u))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=t[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},34011:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=t(87462),o=(t(67294),t(3905));const i={title:"AmbiguousFunctionReference"},a=void 0,c={unversionedId:"CompileTimeErrors/AmbiguousFunctionReference/index",id:"CompileTimeErrors/AmbiguousFunctionReference/index",title:"AmbiguousFunctionReference",description:"Synopsis",source:"@site/docs/CompileTimeErrors/AmbiguousFunctionReference/index.md",sourceDirName:"CompileTimeErrors/AmbiguousFunctionReference",slug:"/CompileTimeErrors/AmbiguousFunctionReference/",permalink:"/docs/CompileTimeErrors/AmbiguousFunctionReference/",draft:!1,tags:[],version:"current",frontMatter:{title:"AmbiguousFunctionReference"},sidebar:"tutorialSidebar",previous:{title:"Compile Time Errors",permalink:"/docs/CompileTimeErrors/"},next:{title:"ArgumentMismatch",permalink:"/docs/CompileTimeErrors/ArgumentMismatch/"}},s={},l=[{value:"Synopsis",id:"synopsis",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4}],u={toc:l};function p(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h4",{id:"synopsis"},"Synopsis"),(0,o.kt)("p",null,"An ambiguous function name"),(0,o.kt)("h4",{id:"description"},"Description"),(0,o.kt)("p",null,"Warning: How to generate this error? "),(0,o.kt)("h4",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>data D = d(int x);\nok\nrascal>data D2 = d(str x);\nok\nrascal>d(3).x\nint: 3\nrascal>d("a").x\nstr: "a"\n')))}p.isMDXComponent=!0}}]);