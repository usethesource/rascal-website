"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[93477],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,f=m["".concat(i,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},64600:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={title:"module lang::json::ast::JSON"},l=void 0,s={unversionedId:"Library/lang/json/ast/JSON",id:"Library/lang/json/ast/JSON",title:"module lang::json::ast::JSON",description:"Usage",source:"@site/docs/Library/lang/json/ast/JSON.md",sourceDirName:"Library/lang/json/ast",slug:"/Library/lang/json/ast/JSON",permalink:"/docs/Library/lang/json/ast/JSON",draft:!1,tags:[],version:"current",frontMatter:{title:"module lang::json::ast::JSON"},sidebar:"tutorialSidebar",previous:{title:"module lang::json::ast::Implode",permalink:"/docs/Library/lang/json/ast/Implode"},next:{title:"lang::json::examples",permalink:"/docs/Library/lang/json/examples/"}},i={},c=[{value:"Usage",id:"usage",level:4},{value:"data JSON",id:"lang-json-ast-JSON-JSON",level:2}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"usage"},"Usage"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"import lang::json::ast::JSON;")),(0,a.kt)("h2",{id:"lang-json-ast-JSON-JSON"},"data JSON"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal"},"data JSON  \n     = null()\n     | object(map[str, JSON] properties)\n     | array(list[JSON] values)\n     | number(real n)\n     | string(str s)\n     | boolean(bool b)\n     | ivalue(type[value] t, value v)\n     ;\n")))}u.isMDXComponent=!0}}]);