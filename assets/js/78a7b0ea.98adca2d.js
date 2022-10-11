"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[82703],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(n),d=i,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},68159:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const a={title:"Assertion Failed"},s=void 0,o={unversionedId:"RunTimeErrors/RuntimeExceptions/AssertionFailed/index",id:"RunTimeErrors/RuntimeExceptions/AssertionFailed/index",title:"Assertion Failed",description:"Synopsis",source:"@site/docs/RunTimeErrors/RuntimeExceptions/AssertionFailed/index.md",sourceDirName:"RunTimeErrors/RuntimeExceptions/AssertionFailed",slug:"/RunTimeErrors/RuntimeExceptions/AssertionFailed/",permalink:"/docs/RunTimeErrors/RuntimeExceptions/AssertionFailed/",draft:!1,tags:[],version:"current",frontMatter:{title:"Assertion Failed"},sidebar:"tutorialSidebar",previous:{title:"Arithmetic Exception",permalink:"/docs/RunTimeErrors/RuntimeExceptions/ArithmeticException/"},next:{title:"Empty List",permalink:"/docs/RunTimeErrors/RuntimeExceptions/EmptyList/"}},l={},c=[{value:"Synopsis",id:"synopsis",level:4},{value:"Function",id:"function",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4},{value:"Benefits",id:"benefits",level:4}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h4",{id:"synopsis"},"Synopsis"),(0,i.kt)("p",null,"An assertion in the Rascal code is false."),(0,i.kt)("h4",{id:"function"},"Function"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"data RuntimeException = AssertionFailed(str label);")),(0,i.kt)("h4",{id:"description"},"Description"),(0,i.kt)("p",null,"An ",(0,i.kt)("a",{parentName:"p",href:"/docs/Rascal/Statements/Assert/"},"Assert")," statement can be used to check assumptions during the execution of a Rascal program.\nThis error is generated if an assertion is not true."),(0,i.kt)("p",null,"Remedies:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Modify your code to make the assertion true."),(0,i.kt)("li",{parentName:"ul"},"Modify your assertion to reflect the current behaviour of your code."),(0,i.kt)("li",{parentName:"ul"},"Catch the ",(0,i.kt)("inlineCode",{parentName:"li"},"AssertionFailed")," yourself, see ",(0,i.kt)("a",{parentName:"li",href:"/docs/Rascal/Statements/TryCatch/"},"try catch"),".")),(0,i.kt)("h4",{id:"examples"},"Examples"),(0,i.kt)("p",null,"A false assertion gives an error:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rascal-shell",metastring:",error",",error":!0},"rascal>assert 3 > 4;\n|prompt:///|(0,13,<1,0>,<1,13>): AssertionFailed()\n    at $shell$(|main://$shell$|)\nok\n")),(0,i.kt)("p",null,"Define a function that only increments positive integers:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rascal-shell",metastring:",continue,error",",continue,error":!0},'rascal>int incrPositive(int n) { assert n > 0: "n should be greater than 0"; return n + 1; }\nint (int): function(|prompt:///|(0,85,<1,0>,<1,85>))\n')),(0,i.kt)("p",null,"Calling it with a positive integer is fine:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rascal-shell",metastring:",continue,error",",continue,error":!0},"rascal>incrPositive(3);\nint: 4\n")),(0,i.kt)("p",null,"But a negative argument gives an error:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rascal-shell",metastring:",continue,error",",continue,error":!0},'rascal>incrPositive(-3);\n|prompt:///|(40,28,<1,40>,<1,68>): AssertionFailed("n should be greater than 0")\n    at incrPositive(|prompt:///|(0,85,<1,0>,<1,85>))\n    at $shell$(|prompt:///|(0,17,<1,0>,<1,17>))\nok\n')),(0,i.kt)("p",null,"We can also catch the ",(0,i.kt)("inlineCode",{parentName:"p"},"AssertionFailed")," error. First import the Rascal exceptions (which are also included in ",(0,i.kt)("inlineCode",{parentName:"p"},"Prelude"),")\nand ",(0,i.kt)("inlineCode",{parentName:"p"},"IO"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rascal-shell",metastring:",continue,error",",continue,error":!0},'rascal>import Exception;\nok\nrascal>import IO;\nok\nrascal>try println(incrPositive(-3)); catch AssertionFailed(msg): println("incrPositive: <msg>");\nincrPositive: n should be greater than 0\nok\n')),(0,i.kt)("h4",{id:"benefits"},"Benefits"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Enables the precise expression of assumptions in your code."),(0,i.kt)("li",{parentName:"ul"},"Asserts are actually executed when the compiler option\n",(0,i.kt)("inlineCode",{parentName:"li"},"enableAsserts")," is set to true (by default set to ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),")."),(0,i.kt)("li",{parentName:"ul"},"In the RascalShell, ",(0,i.kt)("inlineCode",{parentName:"li"},"enableAsserts")," is always true.")))}u.isMDXComponent=!0}}]);