"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[6502],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>d});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},c=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(t),d=a,k=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return t?n.createElement(k,s(s({ref:r},c),{},{components:t})):n.createElement(k,s({ref:r},c))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=m;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=t[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},26662:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=t(87462),a=(t(67294),t(3905));const o={title:"Parse Error"},s=void 0,i={unversionedId:"RunTimeErrors/RuntimeExceptions/ParseError/index",id:"RunTimeErrors/RuntimeExceptions/ParseError/index",title:"Parse Error",description:"Synopsis",source:"@site/docs/RunTimeErrors/RuntimeExceptions/ParseError/index.md",sourceDirName:"RunTimeErrors/RuntimeExceptions/ParseError",slug:"/RunTimeErrors/RuntimeExceptions/ParseError/",permalink:"/docs/RunTimeErrors/RuntimeExceptions/ParseError/",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/RunTimeErrors/RuntimeExceptions/ParseError/index.md",tags:[],version:"current",frontMatter:{title:"Parse Error"},sidebar:"tutorialSidebar",previous:{title:"Not Implemented",permalink:"/docs/RunTimeErrors/RuntimeExceptions/NotImplemented/"},next:{title:"RegExp Syntax Error",permalink:"/docs/RunTimeErrors/RuntimeExceptions/RegExpSyntaxError/"}},l={},p=[{value:"Synopsis",id:"synopsis",level:4},{value:"Types",id:"types",level:4},{value:"Usage",id:"usage",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4}],c={toc:p};function u(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"synopsis"},"Synopsis"),(0,a.kt)("p",null,"Parse of a syntactically incorrect string."),(0,a.kt)("h4",{id:"types"},"Types"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"data RuntimeException = ParseError(loc parseloc) | ParseError(loc parseloc, str nt, str s);")),(0,a.kt)("h4",{id:"usage"},"Usage"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"import Exception;")," (only needed when ",(0,a.kt)("inlineCode",{parentName:"p"},"ParseError")," is used in ",(0,a.kt)("inlineCode",{parentName:"p"},"catch"),")"),(0,a.kt)("h4",{id:"description"},"Description"),(0,a.kt)("p",null,"This error is generated when during the execution of a Rascal program the\n",(0,a.kt)("a",{parentName:"p",href:"/docs/Library/ParseTree#ParseTree-parse"},"parse")," function is applied to a syntactically incorrect input sentence."),(0,a.kt)("p",null,"Remedies:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Correct the input sentence."),(0,a.kt)("li",{parentName:"ul"},"Adapt the grammar so that it accepts the input sentence."),(0,a.kt)("li",{parentName:"ul"},"Catch the ParseError yourself, see ",(0,a.kt)("a",{parentName:"li",href:"../../../Rascal/Statements/TryCatch"},"try catch"),".")),(0,a.kt)("h4",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Define the non-terminal ",(0,a.kt)("inlineCode",{parentName:"p"},"As")," that accepts one or more letters ",(0,a.kt)("inlineCode",{parentName:"p"},"a"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>syntax As = "a"+;\nok\n')),(0,a.kt)("p",null,"Then import ",(0,a.kt)("inlineCode",{parentName:"p"},"ParseTree")," so that we can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"parse")," function:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>import ParseTree;\nok\n")),(0,a.kt)("p",null,"Now we can parse sentences consisting of letters ",(0,a.kt)("inlineCode",{parentName:"p"},"a"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>parse(#As, "aaaaaaaa");\nAs: (As) `aaaaaaaa`\n')),(0,a.kt)("p",null,"But we get an error when parsing syntactically incorrect input  (i.e., that does not\nconsists of letters ",(0,a.kt)("inlineCode",{parentName:"p"},"a")," only):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>parse(#As, "aaaabaaa");\n|TODO:///|: ParseError(|unknown:///|(4,1,<1,4>,<1,5>))\nok\n')),(0,a.kt)("p",null,"We can also catch the ParseError but first import the Rascal modules ",(0,a.kt)("inlineCode",{parentName:"p"},"Exception")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"IO"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>import Exception;\nok\nrascal>import IO;\nok\nrascal>try \n>>>>>>>  parse(#As, "aaaabaaa"); \n>>>>>>>catch ParseError(e): \n>>>>>>>  println("Your input cannot be parsed: <e>");\n  println("Your input cannot be parsed: <e>");\nYour input cannot be parsed: |unknown:///|(4,1,<1,4>,<1,5>)\nok\n')))}u.isMDXComponent=!0}}]);