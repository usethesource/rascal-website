"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[45749],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>s});var a=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=a.createContext({}),v=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=v(e.components);return a.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=v(t),s=l,d=m["".concat(p,".").concat(s)]||m[s]||c[s]||r;return t?a.createElement(d,i(i({ref:n},u),{},{components:t})):a.createElement(d,i({ref:n},u))}));function s(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=m;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var v=2;v<r;v++)i[v]=t[v];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},92641:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>v});var a=t(87462),l=(t(67294),t(3905));const r={title:"module demo::lang::Func::Eval1"},i=void 0,o={unversionedId:"Library/demo/lang/Func/Eval1",id:"Library/demo/lang/Func/Eval1",title:"module demo::lang::Func::Eval1",description:"Usage",source:"@site/docs/Library/demo/lang/Func/Eval1.md",sourceDirName:"Library/demo/lang/Func",slug:"/Library/demo/lang/Func/Eval1",permalink:"/docs/Library/demo/lang/Func/Eval1",draft:!1,tags:[],version:"current",frontMatter:{title:"module demo::lang::Func::Eval1"},sidebar:"tutorialSidebar",previous:{title:"module demo::lang::Func::Eval0",permalink:"/docs/Library/demo/lang/Func/Eval0"},next:{title:"module demo::lang::Func::Eval2",permalink:"/docs/Library/demo/lang/Func/Eval2"}},p={},v=[{value:"Usage",id:"usage",level:4},{value:"alias Env",id:"demo-lang-Func-Eval1-Env",level:2},{value:"alias PEnv",id:"demo-lang-Func-Eval1-PEnv",level:2},{value:"function eval1",id:"demo-lang-Func-Eval1-eval1",level:2}],u={toc:v};function c(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h4",{id:"usage"},"Usage"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"import demo::lang::Func::Eval1;")),(0,l.kt)("h2",{id:"demo-lang-Func-Eval1-Env"},"alias Env"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"map[str, int]"))),(0,l.kt)("h2",{id:"demo-lang-Func-Eval1-PEnv"},"alias PEnv"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"map[str, Func]"))),(0,l.kt)("h2",{id:"demo-lang-Func-Eval1-eval1"},"function eval1"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"int eval1(str main, list[int] args, Prog prog)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"int eval1(nat(int nat), Env env, PEnv penv)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"int eval1(var(str n), Env env, PEnv penv)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"int eval1(mul(Exp lhs, Exp rhs), Env env, PEnv penv)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"int eval1(div(Exp lhs, Exp rhs), Env env, PEnv penv)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"int eval1(add(Exp lhs, Exp rhs), Env env, PEnv penv)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"int eval1(sub(Exp lhs, Exp rhs), Env env, PEnv penv)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"int eval1(gt(Exp lhs, Exp rhs), Env env, PEnv penv)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"int eval1(lt(Exp lhs, Exp rhs), Env env, PEnv penv)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"int eval1(geq(Exp lhs, Exp rhs), Env env, PEnv penv)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"int eval1(leq(Exp lhs, Exp rhs), Env env, PEnv penv)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"int eval1(cond(Exp cond, Exp then, Exp otherwise), Env env, PEnv penv)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"int eval1(call(str name, list[Exp] args), Env env, PEnv penv)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"int eval1(let(list[Binding] bindings, Exp exp), Env env, PEnv penv)"))))}c.isMDXComponent=!0}}]);