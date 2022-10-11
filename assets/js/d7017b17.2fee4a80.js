"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[85425],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>p});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),m=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=m(e.components);return a.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=m(t),p=r,v=c["".concat(u,".").concat(p)]||c[p]||d[p]||l;return t?a.createElement(v,i(i({ref:n},s),{},{components:t})):a.createElement(v,i({ref:n},s))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=c;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var m=2;m<l;m++)i[m]=t[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},37228:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var a=t(87462),r=(t(67294),t(3905));const l={title:"module demo::lang::Lisra::Runtime"},i=void 0,o={unversionedId:"Library/demo/lang/Lisra/Runtime",id:"Library/demo/lang/Lisra/Runtime",title:"module demo::lang::Lisra::Runtime",description:"Usage",source:"@site/docs/Library/demo/lang/Lisra/Runtime.md",sourceDirName:"Library/demo/lang/Lisra",slug:"/Library/demo/lang/Lisra/Runtime",permalink:"/docs/Library/demo/lang/Lisra/Runtime",draft:!1,tags:[],version:"current",frontMatter:{title:"module demo::lang::Lisra::Runtime"},sidebar:"tutorialSidebar",previous:{title:"module demo::lang::Lisra::Pretty",permalink:"/docs/Library/demo/lang/Lisra/Pretty"},next:{title:"module demo::lang::Lisra::Syntax",permalink:"/docs/Library/demo/lang/Lisra/Syntax"}},u={},m=[{value:"Usage",id:"usage",level:4},{value:"data Lval",id:"demo-lang-Lisra-Runtime-Lval",level:2},{value:"alias Scope",id:"demo-lang-Lisra-Runtime-Scope",level:2},{value:"alias Env",id:"demo-lang-Lisra-Runtime-Env",level:2},{value:"function makeEnv",id:"demo-lang-Lisra-Runtime-makeEnv",level:2},{value:"function find",id:"demo-lang-Lisra-Runtime-find",level:2},{value:"alias Result",id:"demo-lang-Lisra-Runtime-Result",level:2}],s={toc:m};function d(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h4",{id:"usage"},"Usage"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"import demo::lang::Lisra::Runtime;")),(0,r.kt)("h2",{id:"demo-lang-Lisra-Runtime-Lval"},"data Lval"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal"},"data Lval  \n     = Integer(int n)\n     | Atom(str name)\n     | List(list[Lval] elms)\n     | Closure(Result(list[Lval] args, Env env))\n     ;\n")),(0,r.kt)("h2",{id:"demo-lang-Lisra-Runtime-Scope"},"alias Scope"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"map[Lval,Lval]"))),(0,r.kt)("h2",{id:"demo-lang-Lisra-Runtime-Env"},"alias Env"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"list[Scope]"))),(0,r.kt)("h2",{id:"demo-lang-Lisra-Runtime-makeEnv"},"function makeEnv"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Env makeEnv(list[Lval] vars, list[Lval] values, Env outer)"))),(0,r.kt)("h2",{id:"demo-lang-Lisra-Runtime-find"},"function find"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"int find(Lval sym, Env e)"))),(0,r.kt)("h2",{id:"demo-lang-Lisra-Runtime-Result"},"alias Result"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"tuple[Lval val, Env env]"))))}d.isMDXComponent=!0}}]);