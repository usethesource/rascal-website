"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[41067],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(67294);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,c=e.mdxType,l=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(n),k=c,s=m["".concat(o,".").concat(k)]||m[k]||d[k]||l;return n?r.createElement(s,a(a({ref:t},u),{},{components:n})):r.createElement(s,a({ref:t},u))}));function k(e,t){var n=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var l=n.length,a=new Array(l);a[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:c,a[1]=i;for(var p=2;p<l;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},56235:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=n(83117),c=(n(67294),n(3905));const l={title:"module demo::lang::Pico::Typecheck"},a=void 0,i={unversionedId:"Library/demo/lang/Pico/Typecheck",id:"Library/demo/lang/Pico/Typecheck",title:"module demo::lang::Pico::Typecheck",description:"Usage",source:"@site/docs/Library/demo/lang/Pico/Typecheck.md",sourceDirName:"Library/demo/lang/Pico",slug:"/Library/demo/lang/Pico/Typecheck",permalink:"/docs/Library/demo/lang/Pico/Typecheck",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Library/demo/lang/Pico/Typecheck.md",tags:[],version:"current",frontMatter:{title:"module demo::lang::Pico::Typecheck"},sidebar:"tutorialSidebar",previous:{title:"module demo::lang::Pico::Syntax",permalink:"/docs/Library/demo/lang/Pico/Syntax"},next:{title:"module demo::lang::Pico::Uninit",permalink:"/docs/Library/demo/lang/Pico/Uninit"}},o={},p=[{value:"Usage",id:"usage",level:4},{value:"alias TENV",id:"demo-lang-Pico-Typecheck-TENV",level:2},{value:"function addError",id:"demo-lang-Pico-Typecheck-addError",level:2},{value:"function required",id:"demo-lang-Pico-Typecheck-required",level:2},{value:"function checkExp",id:"demo-lang-Pico-Typecheck-checkExp",level:2},{value:"function checkStat",id:"demo-lang-Pico-Typecheck-checkStat",level:2},{value:"function checkStats",id:"demo-lang-Pico-Typecheck-checkStats",level:2},{value:"function checkDecls",id:"demo-lang-Pico-Typecheck-checkDecls",level:2},{value:"function checkProgram",id:"demo-lang-Pico-Typecheck-checkProgram",level:2}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,c.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h4",{id:"usage"},"Usage"),(0,c.kt)("p",null,(0,c.kt)("inlineCode",{parentName:"p"},"import demo::lang::Pico::Typecheck;")),(0,c.kt)("h2",{id:"demo-lang-Pico-Typecheck-TENV"},"alias TENV"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"tuple[ map[PicoId, TYPE] symbols, list[tuple[loc l, str msg]] errors]"))),(0,c.kt)("h2",{id:"demo-lang-Pico-Typecheck-addError"},"function addError"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"TENV addError(TENV env, loc l, str msg)"))),(0,c.kt)("h2",{id:"demo-lang-Pico-Typecheck-required"},"function required"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"str required(TYPE t, str got)")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"str required(TYPE t1, TYPE t2)"))),(0,c.kt)("h2",{id:"demo-lang-Pico-Typecheck-checkExp"},"function checkExp"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"TENV checkExp(exp:natCon(int N), TYPE req, TENV env)")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"TENV checkExp(exp:strCon(str S), TYPE req, TENV env)")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"TENV checkExp(exp:id(PicoId Id), TYPE req, TENV env)")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"TENV checkExp(exp:add(EXP E1, EXP E2), TYPE req, TENV env)")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"TENV checkExp(exp:sub(EXP E1, EXP E2), TYPE req, TENV env)")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"TENV checkExp(exp:conc(EXP E1, EXP E2), TYPE req, TENV env)"))),(0,c.kt)("h2",{id:"demo-lang-Pico-Typecheck-checkStat"},"function checkStat"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"TENV checkStat(stat:asgStat(PicoId Id, EXP Exp), TENV env)")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"TENV checkStat(stat:ifElseStat(EXP Exp, // <10>                               list[STATEMENT] Stats1,                               list[STATEMENT] Stats2),                TENV env)")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"TENV checkStat(stat:whileStat(EXP Exp,                               list[STATEMENT] Stats1),                  TENV env)"))),(0,c.kt)("h2",{id:"demo-lang-Pico-Typecheck-checkStats"},"function checkStats"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"TENV checkStats(list[STATEMENT] Stats1, TENV env)"))),(0,c.kt)("h2",{id:"demo-lang-Pico-Typecheck-checkDecls"},"function checkDecls"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"TENV checkDecls(list[DECL] Decls)"))),(0,c.kt)("h2",{id:"demo-lang-Pico-Typecheck-checkProgram"},"function checkProgram"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"TENV checkProgram(program(list[DECL] Decls, list[STATEMENT] Series))")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"list[tuple[loc l, str msg]] checkProgram(str txt)"))))}d.isMDXComponent=!0}}]);