"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[39869],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return t?r.createElement(f,i(i({ref:n},c),{},{components:t})):r.createElement(f,i({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},29067:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=t(87462),a=(t(67294),t(3905));const o={title:"No Such Key"},i=void 0,l={unversionedId:"RunTimeErrors/RuntimeExceptions/NoSuchKey/index",id:"RunTimeErrors/RuntimeExceptions/NoSuchKey/index",title:"No Such Key",description:"Synopsis",source:"@site/docs/RunTimeErrors/RuntimeExceptions/NoSuchKey/index.md",sourceDirName:"RunTimeErrors/RuntimeExceptions/NoSuchKey",slug:"/RunTimeErrors/RuntimeExceptions/NoSuchKey/",permalink:"/docs/RunTimeErrors/RuntimeExceptions/NoSuchKey/",draft:!1,tags:[],version:"current",frontMatter:{title:"No Such Key"},sidebar:"tutorialSidebar",previous:{title:"No Such Field",permalink:"/docs/RunTimeErrors/RuntimeExceptions/NoSuchField/"},next:{title:"Not Implemented",permalink:"/docs/RunTimeErrors/RuntimeExceptions/NotImplemented/"}},s={},p=[{value:"Synopsis",id:"synopsis",level:4},{value:"Types",id:"types",level:4},{value:"Usage",id:"usage",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4}],c={toc:p};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"synopsis"},"Synopsis"),(0,a.kt)("p",null,"A map does not contain a requested key."),(0,a.kt)("h4",{id:"types"},"Types"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"data RuntimeException = NoSuchKey(value v);")),(0,a.kt)("h4",{id:"usage"},"Usage"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"import Exception;")," (only needed when ",(0,a.kt)("inlineCode",{parentName:"p"},"NoSuchKey")," is used in ",(0,a.kt)("inlineCode",{parentName:"p"},"catch"),")"),(0,a.kt)("h4",{id:"description"},"Description"),(0,a.kt)("p",null,"Rascal provides many operations and functions on maps,\nsee ",(0,a.kt)("a",{parentName:"p",href:"/docs/Rascal/Expressions/Values/Map/"},"map values")," and ",(0,a.kt)("a",{parentName:"p",href:"/docs/Library/Map"},"map functions"),".\nThis error is generated when a function or operation cannot find a requested key value in a map."),(0,a.kt)("p",null,"Remedies: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Use the\n",(0,a.kt)("a",{parentName:"li",href:"/docs/Rascal/Expressions/Values/Boolean/IsDefined/"},"isDefined")," and\n",(0,a.kt)("a",{parentName:"li",href:"/docs/Rascal/Expressions/Values/Boolean/IfDefinedElse/"},"ifDefinedElse")," operator to guard a lookup in a map."),(0,a.kt)("li",{parentName:"ul"},"Catch the ",(0,a.kt)("inlineCode",{parentName:"li"},"NoSuchKey")," yourself, see ",(0,a.kt)("a",{parentName:"li",href:"/docs/Rascal/Statements/TryCatch/"},"try catch"),".")),(0,a.kt)("h4",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Import the ",(0,a.kt)("inlineCode",{parentName:"p"},"Map")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"IO")," libraries and introduce map ",(0,a.kt)("inlineCode",{parentName:"p"},"M"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal-shell",metastring:",error",",error":!0},'rascal>import Map;\nok\nrascal>import IO;\nok\nrascal>M = ("a" : 1, "b" : 2);\nmap[str, int]: ("a":1,"b":2)\n')),(0,a.kt)("p",null,"Indexing ",(0,a.kt)("inlineCode",{parentName:"p"},"M")," with a non-existing key gives an error:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal-shell",metastring:",continue,error",",continue,error":!0},'rascal>M["c"]\n|prompt:///|(2,3,<1,2>,<1,5>): NoSuchKey("c")\n    at $shell$(|prompt:///|(0,23,<1,0>,<1,23>))\nok\n')),(0,a.kt)("p",null,"Use the postfix isDefined operator ",(0,a.kt)("inlineCode",{parentName:"p"},"?")," to test whether the value is defined:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal-shell",metastring:",continue,error",",continue,error":!0},'rascal>if(M["c"]?) println("defined"); else println("not defined");\nnot defined\nok\n')),(0,a.kt)("p",null,"Or use the binary ifDefinedElse operator ",(0,a.kt)("inlineCode",{parentName:"p"},"?")," to return an alternative value\nwhen the value of ",(0,a.kt)("inlineCode",{parentName:"p"},'M["c"]')," is undefined:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal-shell",metastring:",continue,error",",continue,error":!0},'rascal>M["c"] ? 3\nint: 3\n')),(0,a.kt)("p",null,"Yet another solution is to use try/catch.\nFirst we import the Rascal exceptions (which are also included in ",(0,a.kt)("inlineCode",{parentName:"p"},"Prelude"),"):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal-shell",metastring:",continue,error",",continue,error":!0},'rascal>import Exception;\nok\nrascal>try println(M["c"]); catch NoSuchKey(k): println("Key <k> does not exist");\nKey c does not exist\nok\n')))}u.isMDXComponent=!0}}]);