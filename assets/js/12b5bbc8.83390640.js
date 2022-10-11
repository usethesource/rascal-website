"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[37503],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),y=s(n),m=a,d=y["".concat(c,".").concat(m)]||y[m]||u[m]||i;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=y;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},27909:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={title:"Precede Declaration",keywords:["<<","!<<"]},o=void 0,l={unversionedId:"Rascal/Declarations/SyntaxDefinition/Disambiguation/Precede/index",id:"Rascal/Declarations/SyntaxDefinition/Disambiguation/Precede/index",title:"Precede Declaration",description:"Synopsis",source:"@site/docs/Rascal/Declarations/SyntaxDefinition/Disambiguation/Precede/index.md",sourceDirName:"Rascal/Declarations/SyntaxDefinition/Disambiguation/Precede",slug:"/Rascal/Declarations/SyntaxDefinition/Disambiguation/Precede/",permalink:"/docs/Rascal/Declarations/SyntaxDefinition/Disambiguation/Precede/",draft:!1,tags:[],version:"current",frontMatter:{title:"Precede Declaration",keywords:["<<","!<<"]},sidebar:"tutorialSidebar",previous:{title:"Follow Declaration",permalink:"/docs/Rascal/Declarations/SyntaxDefinition/Disambiguation/Follow/"},next:{title:"Priority Declaration",permalink:"/docs/Rascal/Declarations/SyntaxDefinition/Disambiguation/Priority/"}},c={},s=[{value:"Synopsis",id:"synopsis",level:4},{value:"Syntax",id:"syntax",level:4},{value:"Description",id:"description",level:4}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"synopsis"},"Synopsis"),(0,a.kt)("p",null,"A conditional ",(0,a.kt)("a",{parentName:"p",href:"/docs/Rascal/Declarations/SyntaxDefinition/Symbol/"},"./Symbol"),", constraining the characters that can immediately precede a symbol in the input source text."),(0,a.kt)("h4",{id:"syntax"},"Syntax"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"constraint << Symbol")," "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"constraint !<< Symbol"))),(0,a.kt)("p",null,"where a ",(0,a.kt)("em",{parentName:"p"},"constraint")," is any character class, a literal or a keyword non-terminal ",(0,a.kt)("a",{parentName:"p",href:"/docs/Rascal/Declarations/SyntaxDefinition/Symbol/"},"Symbol"),"."),(0,a.kt)("h4",{id:"description"},"Description"),(0,a.kt)("p",null,"Using ",(0,a.kt)("inlineCode",{parentName:"p"},"!<<"),", the parser will not accept the ",(0,a.kt)("em",{parentName:"p"},"Symbol")," if it is immediately preceded by the ",(0,a.kt)("em",{parentName:"p"},"terminal")," in the input string. If the start of the symbol coincides with start of the inout, the constraint will always succeed and the symbol is accepted."))}u.isMDXComponent=!0}}]);