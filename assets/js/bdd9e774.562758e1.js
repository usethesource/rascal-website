"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[18314],{3905:(e,n,r)=>{r.d(n,{Zo:()=>s,kt:()=>m});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=t.createContext({}),p=function(e){var n=t.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},s=function(e){var n=p(e.components);return t.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,g=d["".concat(i,".").concat(m)]||d[m]||u[m]||l;return r?t.createElement(g,o(o({ref:n},s),{},{components:r})):t.createElement(g,o({ref:n},s))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<l;p++)o[p]=r[p];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},89182:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var t=r(87462),a=(r(67294),r(3905));const l={title:"module demo::lang::Func::AST"},o=void 0,c={unversionedId:"Library/demo/lang/Func/AST",id:"Library/demo/lang/Func/AST",title:"module demo::lang::Func::AST",description:"Usage",source:"@site/docs/Library/demo/lang/Func/AST.md",sourceDirName:"Library/demo/lang/Func",slug:"/Library/demo/lang/Func/AST",permalink:"/docs/Library/demo/lang/Func/AST",draft:!1,tags:[],version:"current",frontMatter:{title:"module demo::lang::Func::AST"},sidebar:"tutorialSidebar",previous:{title:"module demo::lang::Func::Func",permalink:"/docs/Library/demo/lang/Func/"},next:{title:"module demo::lang::Func::Eval0",permalink:"/docs/Library/demo/lang/Func/Eval0"}},i={},p=[{value:"Usage",id:"usage",level:4},{value:"data Prog",id:"demo-lang-Func-AST-Prog",level:2},{value:"data Func",id:"demo-lang-Func-AST-Func",level:2},{value:"data Exp",id:"demo-lang-Func-AST-Exp",level:2},{value:"data Binding",id:"demo-lang-Func-AST-Binding",level:2}],s={toc:p};function u(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,t.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"usage"},"Usage"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"import demo::lang::Func::AST;")),(0,a.kt)("h2",{id:"demo-lang-Func-AST-Prog"},"data Prog"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal"},"data Prog  \n     = prog(list[Func] funcs)\n     ;\n")),(0,a.kt)("h2",{id:"demo-lang-Func-AST-Func"},"data Func"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal"},"data Func  \n     = func(str name, list[str] formals, Exp body)\n     ;\n")),(0,a.kt)("h2",{id:"demo-lang-Func-AST-Exp"},"data Exp"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal"},"data Exp  \n     = let(list[Binding] bindings, Exp exp)\n     | cond(Exp cond, Exp then, Exp otherwise)\n     | var(str name)\n     | nat(int nat)\n     | call(str name, list[Exp] args)\n     | address(str var)\n     | deref(Exp exp)\n     | mul(Exp lhs, Exp rhs)\n     | div(Exp lhs, Exp rhs)\n     | add(Exp lhs, Exp rhs)\n     | sub(Exp lhs, Exp rhs)\n     | gt(Exp lhs, Exp rhs)\n     | lt(Exp lhs, Exp rhs)\n     | geq(Exp lhs, Exp rhs)\n     | leq(Exp lhs, Exp rhs)\n     | seq(Exp lhs, Exp rhs)\n     | assign(Exp lhs, Exp rhs)\n     ;\n")),(0,a.kt)("h2",{id:"demo-lang-Func-AST-Binding"},"data Binding"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal"},"data Binding  \n     = binding(str var, Exp exp)\n     ;\n")))}u.isMDXComponent=!0}}]);