"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[86532],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(r),f=l,m=d["".concat(s,".").concat(f)]||d[f]||c[f]||a;return r?n.createElement(m,o(o({ref:t},p),{},{components:r})):n.createElement(m,o({ref:t},p))}));function f(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,o=new Array(a);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},68984:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var n=r(87462),l=(r(67294),r(3905));const a={title:"module lang::sdf2::util::Importer"},o=void 0,i={unversionedId:"Library/lang/sdf2/util/Importer",id:"Library/lang/sdf2/util/Importer",title:"module lang::sdf2::util::Importer",description:"Usage",source:"@site/docs/Library/lang/sdf2/util/Importer.md",sourceDirName:"Library/lang/sdf2/util",slug:"/Library/lang/sdf2/util/Importer",permalink:"/docs/Library/lang/sdf2/util/Importer",draft:!1,tags:[],version:"current",frontMatter:{title:"module lang::sdf2::util::Importer"},sidebar:"tutorialSidebar",previous:{title:"lang::sdf2::util",permalink:"/docs/Library/lang/sdf2/util/"},next:{title:"module lang::sdf2::util::Load",permalink:"/docs/Library/lang/sdf2/util/Load"}},s={},u=[{value:"Usage",id:"usage",level:4},{value:"function generate",id:"lang-sdf2-util-Importer-generate",level:2},{value:"Synopsis",id:"synopsis",level:4},{value:"Description",id:"description",level:4}],p={toc:u};function c(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h4",{id:"usage"},"Usage"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"import lang::sdf2::util::Importer;")),(0,l.kt)("h2",{id:"lang-sdf2-util-Importer-generate"},"function generate"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"str generate(str name, loc at, PathConfig pcfg)"))),(0,l.kt)("h4",{id:"synopsis"},"Synopsis"),(0,l.kt)("p",null,"Converts an SDF2 module to a Rascal module"),(0,l.kt)("h4",{id:"description"},"Description"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"sdf")," uri scheme works like this:\n",(0,l.kt)("inlineCode",{parentName:"p"},"sdf:///<modulename>")),(0,l.kt)("p",null,"The default Rascal search path is used to resolve the\nmodule name to a file with the ",(0,l.kt)("inlineCode",{parentName:"p"},".sdf2")," extension. "),(0,l.kt)("p",null,"The module name is expected to be in SDF2 syntax."),(0,l.kt)("p",null,'If modules are "imported" by the given top module,\nthen these names are resolved recursively and a\n"definition" composed of all relative modules is\ncollected before the translation process starts.\nAll of the syntax rules in all of the SDF2 modules\nend up in one Rascal module.'))}c.isMDXComponent=!0}}]);