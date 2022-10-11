"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[32860],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),l=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),h=l(n),m=r,d=h["".concat(o,".").concat(m)]||h[m]||u[m]||s;return n?a.createElement(d,i(i({ref:t},p),{},{components:n})):a.createElement(d,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=h;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<s;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},34887:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const s={title:"Switch",keywords:["switch","case","default"]},i=void 0,c={unversionedId:"Rascal/Statements/Switch/index",id:"Rascal/Statements/Switch/index",title:"Switch",description:"Synopsis",source:"@site/docs/Rascal/Statements/Switch/index.md",sourceDirName:"Rascal/Statements/Switch",slug:"/Rascal/Statements/Switch/",permalink:"/docs/Rascal/Statements/Switch/",draft:!1,tags:[],version:"current",frontMatter:{title:"Switch",keywords:["switch","case","default"]},sidebar:"tutorialSidebar",previous:{title:"Solve",permalink:"/docs/Rascal/Statements/Solve/"},next:{title:"Test",permalink:"/docs/Rascal/Statements/Test/"}},o={},l=[{value:"Synopsis",id:"synopsis",level:4},{value:"Syntax",id:"syntax",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4},{value:"Pitfalls",id:"pitfalls",level:4}],p={toc:l};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h4",{id:"synopsis"},"Synopsis"),(0,r.kt)("p",null,"The switch statement is a control flow statement\nwhere the next block is selected by pattern matching\nagainst a number of ",(0,r.kt)("inlineCode",{parentName:"p"},"case")," patterns. "),(0,r.kt)("h4",{id:"syntax"},"Syntax"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal"},"switch ( _Exp_ ) {\ncase _PatternWithAction\u2081_;\ncase _PatternWithAction\u2082_;\n...\ndefault: ...\n}\n")),(0,r.kt)("h4",{id:"description"},"Description"),(0,r.kt)("p",null,"A switch statement is similar to a switch statement in C or Java.\nThe value of the expression ",(0,r.kt)("em",{parentName:"p"},"Exp")," is the subject term that will be matched by the successive\n",(0,r.kt)("a",{parentName:"p",href:"/docs/Rascal/Expressions/Visit/PatternWithAction/"},"Pattern With Action"),"s in the switch statement. The switch statement provides only matching at the top level of\nthe subject term and does not traverse it. The type of the pattern in each case must be identical to the type of\nthe subject term (or be a supertype of it). If no case matches, the switch acts as a dummy statement.\nThere is no fall through from one case to the next."),(0,r.kt)("h4",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Suppose we want to naively analyze a sentence and print the topic it is about:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>import IO;\nok\nrascal>S = "Princess Leila sipped from her rum punch";\nstr: "Princess Leila sipped from her rum punch"\nrascal>switch(S){\n>>>>>>>  case /Leila/: println("The topic is Star Wars");\n>>>>>>>  case /rum/:   println("The topic is Drunken man");\n>>>>>>>  case /punch/: println("The topic is Kick Boxing");\n>>>>>>>}\nThe topic is Star Wars\nok\n')),(0,r.kt)("p",null,"From the printed message you can infer that the cases are tried in the order in which they occur."),(0,r.kt)("h4",{id:"pitfalls"},"Pitfalls"),(0,r.kt)("p",null,"The switch statement does not yet return a value, this will be changed."))}u.isMDXComponent=!0}}]);