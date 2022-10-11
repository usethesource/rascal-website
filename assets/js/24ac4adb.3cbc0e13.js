"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[58847],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),p=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},m=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=p(a),d=n,x=u["".concat(o,".").concat(d)]||u[d]||c[d]||l;return a?r.createElement(x,s(s({ref:t},m),{},{components:a})):r.createElement(x,s({ref:t},m))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,s=new Array(l);s[0]=u;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var p=2;p<l;p++)s[p]=a[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7092:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const l={title:"module lang::rascal::syntax::tests::ImplodeTestGrammar"},s=void 0,i={unversionedId:"Library/lang/rascal/syntax/tests/ImplodeTestGrammar",id:"Library/lang/rascal/syntax/tests/ImplodeTestGrammar",title:"module lang::rascal::\\syntax::tests::ImplodeTestGrammar",description:"Usage",source:"@site/docs/Library/lang/rascal/syntax/tests/ImplodeTestGrammar.md",sourceDirName:"Library/lang/rascal/syntax/tests",slug:"/Library/lang/rascal/syntax/tests/ImplodeTestGrammar",permalink:"/docs/Library/lang/rascal/syntax/tests/ImplodeTestGrammar",draft:!1,tags:[],version:"current",frontMatter:{title:"module lang::rascal::\\syntax::tests::ImplodeTestGrammar"},sidebar:"tutorialSidebar",previous:{title:"module lang::rascal::\\syntax::tests::ExpressionGrammars",permalink:"/docs/Library/lang/rascal/syntax/tests/ExpressionGrammars"},next:{title:"module lang::rascal::\\syntax::tests::ImplodeTests",permalink:"/docs/Library/lang/rascal/syntax/tests/ImplodeTests"}},o={},p=[{value:"Usage",id:"usage",level:4},{value:"function parseExp",id:"lang-rascal-syntax-tests-ImplodeTestGrammar-parseExp",level:2},{value:"function expLit1",id:"lang-rascal-syntax-tests-ImplodeTestGrammar-expLit1",level:2},{value:"function expLit2",id:"lang-rascal-syntax-tests-ImplodeTestGrammar-expLit2",level:2},{value:"function parseExpr",id:"lang-rascal-syntax-tests-ImplodeTestGrammar-parseExpr",level:2},{value:"function exprLit1",id:"lang-rascal-syntax-tests-ImplodeTestGrammar-exprLit1",level:2},{value:"function exprLit2",id:"lang-rascal-syntax-tests-ImplodeTestGrammar-exprLit2",level:2}],m={toc:p};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h4",{id:"usage"},"Usage"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"import lang::rascal::\\syntax::tests::ImplodeTestGrammar;")),(0,n.kt)("p",null,"Tests the potential clashes among value constructors of different adts, plus, the identified clash with: bool eq(value, value);"),(0,n.kt)("h2",{id:"lang-rascal-\\syntax-tests-ImplodeTestGrammar-parseExp"},"function parseExp"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Exp parseExp(str s)"))),(0,n.kt)("h2",{id:"lang-rascal-\\syntax-tests-ImplodeTestGrammar-expLit1"},"function expLit1"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Exp expLit1()"))),(0,n.kt)("h2",{id:"lang-rascal-\\syntax-tests-ImplodeTestGrammar-expLit2"},"function expLit2"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Exp expLit2()"))),(0,n.kt)("h2",{id:"lang-rascal-\\syntax-tests-ImplodeTestGrammar-parseExpr"},"function parseExpr"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Expr parseExpr(str s)"))),(0,n.kt)("h2",{id:"lang-rascal-\\syntax-tests-ImplodeTestGrammar-exprLit1"},"function exprLit1"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Expr exprLit1()"))),(0,n.kt)("h2",{id:"lang-rascal-\\syntax-tests-ImplodeTestGrammar-exprLit2"},"function exprLit2"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Expr exprLit2()"))))}c.isMDXComponent=!0}}]);