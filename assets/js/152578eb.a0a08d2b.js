"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[58955],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=a,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||i;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},64767:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={title:"API documentation"},o=void 0,l={unversionedId:"Tutor/API/index",id:"Tutor/API/index",title:"API documentation",description:"Synopsis",source:"@site/docs/Tutor/API/index.md",sourceDirName:"Tutor/API",slug:"/Tutor/API/",permalink:"/docs/Tutor/API/",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Tutor/API/index.md",tags:[],version:"current",frontMatter:{title:"API documentation"},sidebar:"tutorialSidebar",previous:{title:"Tutor",permalink:"/docs/Tutor/"},next:{title:"Architecture",permalink:"/docs/Tutor/Architecture/"}},s={},c=[{value:"Synopsis",id:"synopsis",level:4},{value:"Description",id:"description",level:4},{value:"Benefits",id:"benefits",level:4},{value:"Pitfalls",id:"pitfalls",level:4}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"synopsis"},"Synopsis"),(0,a.kt)("p",null,"The Tutor compiler reads Rascal source files and produces ",(0,a.kt)("a",{parentName:"p",href:"../../Tutor/Concept"},"Concept")," markdown files\nfor each ",(0,a.kt)("a",{parentName:"p",href:"../../Rascal/Declarations/Module"},"Module"),"."),(0,a.kt)("h4",{id:"description"},"Description"),(0,a.kt)("p",null,"The compiler generates for every ",(0,a.kt)("inlineCode",{parentName:"p"},"Module.rsc")," a markdown file with the following structure:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"---\ntitle: <moduleName>\n---\n\n// for each declaration (function, data, syntax, alias, import, extend)\n## <declarationName> {#fully-qualified-declaration-name}\n\n#### Synopsis\n\n...\n#### Description\n...\n\n// etc.\n")),(0,a.kt)("p",null,"So, for all standard ",(0,a.kt)("a",{parentName:"p",href:"../../Tutor/Concept"},"Concept")," headers, like ",(0,a.kt)("inlineCode",{parentName:"p"},"Synopsis")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Benefits")," there is a place at every declaration."),(0,a.kt)("p",null,"The content of the header paragraphs is either directly derived from source code (like function signature and data definitions), or it is taken from the following ",(0,a.kt)("a",{parentName:"p",href:"../../Rascal/Declarations/Tag"},"Tag")," definitions on each declaration:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@doc")," may contain literally the headers of a ",(0,a.kt)("a",{parentName:"li",href:"../../Tutor/Concept"},"Concept"),", like ",(0,a.kt)("inlineCode",{parentName:"li"},"#### Synopsis"),". This notation is deprecated in favor of the tags below."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@synopsis")," is a single line description of the definition."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@description")," is a multi-line explanantion of the definition."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@benefits"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"@pitfalls"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"@examples"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"@types"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"@name")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"@function")," each follow the intent of the standard ",(0,a.kt)("a",{parentName:"li",href:"../../Tutor/Concept"},"Concept")," headers.")),(0,a.kt)("h4",{id:"benefits"},"Benefits"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A (small) part of documentation writing is automated. The information about the name of a function, data or annotation declaration, or its signature is always consistent."),(0,a.kt)("li",{parentName:"ul"},"You can write examples of the usage of each definition using ",(0,a.kt)("a",{parentName:"li",href:"../../Tutor/Markup/InlineMarkup/Listing"},"Listing")," markup that is run and checked at documentation compile-time.")),(0,a.kt)("h4",{id:"pitfalls"},"Pitfalls"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"This approach requires that functions with the same name are grouped together in the source file. (",(0,a.kt)("em",{parentName:"li"},"to-TODO-want (broken link)"),")"),(0,a.kt)("li",{parentName:"ul"},"You need to run the tutor compiler before errors in the documentation tags are detected.")))}u.isMDXComponent=!0}}]);