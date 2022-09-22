"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[78985],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(r),u=o,y=d["".concat(p,".").concat(u)]||d[u]||m[u]||a;return r?n.createElement(y,i(i({ref:t},c),{},{components:r})):n.createElement(y,i({ref:t},c))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},71331:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(83117),o=(r(67294),r(3905));const a={title:"SyntaxError"},i=void 0,l={unversionedId:"CompileTimeErrors/SyntaxError/index",id:"CompileTimeErrors/SyntaxError/index",title:"SyntaxError",description:"Synopsis",source:"@site/docs/CompileTimeErrors/SyntaxError/index.md",sourceDirName:"CompileTimeErrors/SyntaxError",slug:"/CompileTimeErrors/SyntaxError/",permalink:"/docs/CompileTimeErrors/SyntaxError/",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/CompileTimeErrors/SyntaxError/index.md",tags:[],version:"current",frontMatter:{title:"SyntaxError"},sidebar:"tutorialSidebar",previous:{title:"RedeclaredVariable",permalink:"/docs/CompileTimeErrors/RedeclaredVariable/"},next:{title:"UndeclaredAnnotation",permalink:"/docs/CompileTimeErrors/UndeclaredAnnotation/"}},p={},s=[{value:"Synopsis",id:"synopsis",level:4},{value:"Description",id:"description",level:4}],c={toc:s};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h4",{id:"synopsis"},"Synopsis"),(0,o.kt)("p",null,"Text in a module or entered via the command line violates the Rascal syntax."),(0,o.kt)("h4",{id:"description"},"Description"),(0,o.kt)("p",null,"This error is generated when a text is expected to be Rascal but does not comply with the Rascal syntax."),(0,o.kt)("p",null,"Remedy: Correct your text and check for the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"All parentheses are balanced: ",(0,o.kt)("inlineCode",{parentName:"li"},"(...)"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"[...]"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"{...}"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"<...>"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"/.../"),"."),(0,o.kt)("li",{parentName:"ul"},"All multi-line comments are balanced: ",(0,o.kt)("inlineCode",{parentName:"li"},"/*...*/"),"."),(0,o.kt)("li",{parentName:"ul"},"All semi-colons are present."),(0,o.kt)("li",{parentName:"ul"},"All tests in ",(0,o.kt)("inlineCode",{parentName:"li"},"if"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"for"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"while")," statement are surrounded by ",(0,o.kt)("inlineCode",{parentName:"li"},"(...)"),".")),(0,o.kt)("p",null,"When you are completely desparate and cannot find the syntax error, the following ",(0,o.kt)("em",{parentName:"p"},"binary search")," strategy may help:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Surround all text in the module (except the module header) with ",(0,o.kt)("inlineCode",{parentName:"li"},"/*")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"*/"),". Now your module should parse. If not the syntax error is in the module header."),(0,o.kt)("li",{parentName:"ul"},"Move the upper comment symbol ",(0,o.kt)("inlineCode",{parentName:"li"},"/*")," to the middle of the file. Now there are two possibilities:\n",(0,o.kt)("strong",{parentName:"li"}," The module parses. The top part is correct and the syntax error is in the bottom part.\nMove the ",(0,o.kt)("inlineCode",{parentName:"strong"},"/*")," marker to the middle of the bottom part and repeat.\n")," The module does not parse. The syntax error is in the top part.\nMove the ",(0,o.kt)("inlineCode",{parentName:"li"},"/*")," marker to the middle of the top part and repeat.")))}m.isMDXComponent=!0}}]);