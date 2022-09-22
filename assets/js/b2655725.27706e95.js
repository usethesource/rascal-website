"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[87016],{3905:(e,t,l)=>{l.d(t,{Zo:()=>c,kt:()=>d});var i=l(67294);function r(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function n(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,i)}return l}function a(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?n(Object(l),!0).forEach((function(t){r(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):n(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function o(e,t){if(null==e)return{};var l,i,r=function(e,t){if(null==e)return{};var l,i,r={},n=Object.keys(e);for(i=0;i<n.length;i++)l=n[i],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)l=n[i],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var s=i.createContext({}),u=function(e){var t=i.useContext(s),l=t;return e&&(l="function"==typeof e?e(t):a(a({},t),e)),l},c=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var l=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(l),d=r,y=p["".concat(s,".").concat(d)]||p[d]||m[d]||n;return l?i.createElement(y,a(a({ref:t},c),{},{components:l})):i.createElement(y,a({ref:t},c))}));function d(e,t){var l=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=l.length,a=new Array(n);a[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,a[1]=o;for(var u=2;u<n;u++)a[u]=l[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,l)}p.displayName="MDXCreateElement"},92390:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>n,metadata:()=>o,toc:()=>u});var i=l(83117),r=(l(67294),l(3905));const n={title:"module util::FileSystem"},a=void 0,o={unversionedId:"Library/util/FileSystem",id:"Library/util/FileSystem",title:"module util::FileSystem",description:"Usage",source:"@site/docs/Library/util/FileSystem.md",sourceDirName:"Library/util",slug:"/Library/util/FileSystem",permalink:"/docs/Library/util/FileSystem",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Library/util/FileSystem.md",tags:[],version:"current",frontMatter:{title:"module util::FileSystem"},sidebar:"tutorialSidebar",previous:{title:"module util::Eval",permalink:"/docs/Library/util/Eval"},next:{title:"module util::Highlight",permalink:"/docs/Library/util/Highlight"}},s={},u=[{value:"Usage",id:"usage",level:4},{value:"data FileSystem",id:"util-FileSystem-FileSystem",level:2},{value:"function crawl",id:"util-FileSystem-crawl",level:2},{value:"function files",id:"util-FileSystem-files",level:2},{value:"function find",id:"util-FileSystem-find",level:2},{value:"function visibleFiles",id:"util-FileSystem-visibleFiles",level:2},{value:"Synopsis",id:"synopsis",level:4}],c={toc:u};function m(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,i.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h4",{id:"usage"},"Usage"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"import util::FileSystem;")),(0,r.kt)("h2",{id:"util-FileSystem-FileSystem"},"data FileSystem"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal"},"data FileSystem  \n     = directory(loc l, set[FileSystem] children)\n     | file(loc l)\n     ;\n")),(0,r.kt)("h2",{id:"util-FileSystem-crawl"},"function crawl"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"FileSystem crawl(loc l)"))),(0,r.kt)("h2",{id:"util-FileSystem-files"},"function files"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"set[loc] files(loc l)"))),(0,r.kt)("h2",{id:"util-FileSystem-find"},"function find"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"set[loc] find(loc f, bool (loc) filt)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"set[loc] find(loc f, str ext)"))),(0,r.kt)("h2",{id:"util-FileSystem-visibleFiles"},"function visibleFiles"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"set[loc] visibleFiles(loc l)"))),(0,r.kt)("h4",{id:"synopsis"},"Synopsis"),(0,r.kt)("p",null,"lists all files recursively ignored files and directories starting with a dot."))}m.isMDXComponent=!0}}]);