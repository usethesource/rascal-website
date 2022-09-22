"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[9749],{3905:(a,e,l)=>{l.d(e,{Zo:()=>d,kt:()=>k});var r=l(67294);function o(a,e,l){return e in a?Object.defineProperty(a,e,{value:l,enumerable:!0,configurable:!0,writable:!0}):a[e]=l,a}function t(a,e){var l=Object.keys(a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),l.push.apply(l,r)}return l}function n(a){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{};e%2?t(Object(l),!0).forEach((function(e){o(a,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(l)):t(Object(l)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(l,e))}))}return a}function m(a,e){if(null==a)return{};var l,r,o=function(a,e){if(null==a)return{};var l,r,o={},t=Object.keys(a);for(r=0;r<t.length;r++)l=t[r],e.indexOf(l)>=0||(o[l]=a[l]);return o}(a,e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);for(r=0;r<t.length;r++)l=t[r],e.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(a,l)&&(o[l]=a[l])}return o}var i=r.createContext({}),s=function(a){var e=r.useContext(i),l=e;return a&&(l="function"==typeof a?a(e):n(n({},e),a)),l},d=function(a){var e=s(a.components);return r.createElement(i.Provider,{value:e},a.children)},c={inlineCode:"code",wrapper:function(a){var e=a.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(a,e){var l=a.components,o=a.mdxType,t=a.originalType,i=a.parentName,d=m(a,["components","mdxType","originalType","parentName"]),u=s(l),k=o,g=u["".concat(i,".").concat(k)]||u[k]||c[k]||t;return l?r.createElement(g,n(n({ref:e},d),{},{components:l})):r.createElement(g,n({ref:e},d))}));function k(a,e){var l=arguments,o=e&&e.mdxType;if("string"==typeof a||o){var t=l.length,n=new Array(t);n[0]=u;var m={};for(var i in e)hasOwnProperty.call(e,i)&&(m[i]=e[i]);m.originalType=a,m.mdxType="string"==typeof a?a:o,n[1]=m;for(var s=2;s<t;s++)n[s]=l[s];return r.createElement.apply(null,n)}return r.createElement.apply(null,l)}u.displayName="MDXCreateElement"},257:(a,e,l)=>{l.r(e),l.d(e,{assets:()=>i,contentTitle:()=>n,default:()=>c,frontMatter:()=>t,metadata:()=>m,toc:()=>s});var r=l(83117),o=(l(67294),l(3905));const t={title:"module lang::rascal::grammar::Lookahead"},n=void 0,m={unversionedId:"Library/lang/rascal/grammar/Lookahead",id:"Library/lang/rascal/grammar/Lookahead",title:"module lang::rascal::grammar::Lookahead",description:"Usage",source:"@site/docs/Library/lang/rascal/grammar/Lookahead.md",sourceDirName:"Library/lang/rascal/grammar",slug:"/Library/lang/rascal/grammar/Lookahead",permalink:"/docs/Library/lang/rascal/grammar/Lookahead",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Library/lang/rascal/grammar/Lookahead.md",tags:[],version:"current",frontMatter:{title:"module lang::rascal::grammar::Lookahead"},sidebar:"tutorialSidebar",previous:{title:"module lang::rascal::grammar::ConcreteSyntax",permalink:"/docs/Library/lang/rascal/grammar/ConcreteSyntax"},next:{title:"module lang::rascal::grammar::ParserGenerator",permalink:"/docs/Library/lang/rascal/grammar/ParserGenerator"}},i={},s=[{value:"Usage",id:"usage",level:4},{value:"data Production",id:"lang-rascal-grammar-Lookahead-Production",level:2},{value:"data Symbol",id:"lang-rascal-grammar-Lookahead-Symbol",level:2},{value:"data Grammar",id:"lang-rascal-grammar-Lookahead-Grammar",level:2},{value:"function computeLookaheads",id:"lang-rascal-grammar-Lookahead-computeLookaheads",level:2},{value:"function compileLookaheads",id:"lang-rascal-grammar-Lookahead-compileLookaheads",level:2},{value:"function order",id:"lang-rascal-grammar-Lookahead-order",level:2},{value:"function optimizeLookaheads",id:"lang-rascal-grammar-Lookahead-optimizeLookaheads",level:2},{value:"function optimizeLookaheadsOld",id:"lang-rascal-grammar-Lookahead-optimizeLookaheadsOld",level:2},{value:"function intersect",id:"lang-rascal-grammar-Lookahead-intersect",level:2},{value:"function diff",id:"lang-rascal-grammar-Lookahead-diff",level:2},{value:"function removeLabels",id:"lang-rascal-grammar-Lookahead-removeLabels",level:2},{value:"function removeLabel",id:"lang-rascal-grammar-Lookahead-removeLabel",level:2},{value:"function removeLabels",id:"lang-rascal-grammar-Lookahead-removeLabels",level:2},{value:"function usedSymbols",id:"lang-rascal-grammar-Lookahead-usedSymbols",level:2},{value:"function definedSymbols",id:"lang-rascal-grammar-Lookahead-definedSymbols",level:2},{value:"function terminalSymbols",id:"lang-rascal-grammar-Lookahead-terminalSymbols",level:2},{value:"alias SymbolUse",id:"lang-rascal-grammar-Lookahead-SymbolUse",level:2},{value:"function first",id:"lang-rascal-grammar-Lookahead-first",level:2},{value:"function follow",id:"lang-rascal-grammar-Lookahead-follow",level:2},{value:"function firstAndFollow",id:"lang-rascal-grammar-Lookahead-firstAndFollow",level:2},{value:"function mergeCC",id:"lang-rascal-grammar-Lookahead-mergeCC",level:2}],d={toc:s};function c(a){let{components:e,...l}=a;return(0,o.kt)("wrapper",(0,r.Z)({},d,l,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h4",{id:"usage"},"Usage"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"import lang::rascal::grammar::Lookahead;")),(0,o.kt)("h2",{id:"lang-rascal-grammar-Lookahead-Production"},"data Production"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rascal"},"data Production  \n     = lookahead(Symbol def, set[Symbol] classes, Production production)\n     ;\n")),(0,o.kt)("h2",{id:"lang-rascal-grammar-Lookahead-Symbol"},"data Symbol"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rascal"},"data Symbol  \n     = eoi()\n     ;\n")),(0,o.kt)("h2",{id:"lang-rascal-grammar-Lookahead-Grammar"},"data Grammar"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rascal"},"data Grammar  \n     = simple(set[Symbol] starts, set[Production] productions)\n     ;\n")),(0,o.kt)("h2",{id:"lang-rascal-grammar-Lookahead-computeLookaheads"},"function computeLookaheads"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Grammar computeLookaheads(Grammar G, rel[Symbol,Symbol] extra)"))),(0,o.kt)("p",null,"  This function wraps productions with their single character lookahead sets for\nparser generation."),(0,o.kt)("p",null,"  'extra' contains extra lookahead symbols per symbol"),(0,o.kt)("h2",{id:"lang-rascal-grammar-Lookahead-compileLookaheads"},"function compileLookaheads"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Grammar compileLookaheads(Grammar G)"))),(0,o.kt)("p",null,"  This function evaluates lookahead sets to obtain an optimal production selection automaton\nAs a side-effect it also needs to replace priority ordering and associativity by the simple choice operator!  "),(0,o.kt)("h2",{id:"lang-rascal-grammar-Lookahead-order"},"function order"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"list[CharRange] order(list[CharRange] x)"))),(0,o.kt)("h2",{id:"lang-rascal-grammar-Lookahead-optimizeLookaheads"},"function optimizeLookaheads"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Production optimizeLookaheads(Symbol rhs, set[Production] alts)"))),(0,o.kt)("h2",{id:"lang-rascal-grammar-Lookahead-optimizeLookaheadsOld"},"function optimizeLookaheadsOld"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Production optimizeLookaheadsOld(Symbol rhs, set[Production] alts)"))),(0,o.kt)("h2",{id:"lang-rascal-grammar-Lookahead-intersect"},"function intersect"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"set[Symbol] intersect(set[Symbol] u1, set[Symbol] u2)"))),(0,o.kt)("h2",{id:"lang-rascal-grammar-Lookahead-diff"},"function diff"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"set[Symbol] diff(set[Symbol] u1, set[Symbol] u2)"))),(0,o.kt)("h2",{id:"lang-rascal-grammar-Lookahead-removeLabels"},"function removeLabels"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Grammar removeLabels(Grammar G)"))),(0,o.kt)("h2",{id:"lang-rascal-grammar-Lookahead-removeLabel"},"function removeLabel"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Symbol removeLabel(Symbol s)"))),(0,o.kt)("h2",{id:"lang-rascal-grammar-Lookahead-removeLabels"},"function removeLabels"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"list[Symbol] removeLabels(list[Symbol] syms)"))),(0,o.kt)("h2",{id:"lang-rascal-grammar-Lookahead-usedSymbols"},"function usedSymbols"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"set[Symbol] usedSymbols(Grammar G)"))),(0,o.kt)("h2",{id:"lang-rascal-grammar-Lookahead-definedSymbols"},"function definedSymbols"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"set[Symbol] definedSymbols(Grammar G)"))),(0,o.kt)("h2",{id:"lang-rascal-grammar-Lookahead-terminalSymbols"},"function terminalSymbols"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"set[Symbol] terminalSymbols(Grammar G)"))),(0,o.kt)("h2",{id:"lang-rascal-grammar-Lookahead-SymbolUse"},"alias SymbolUse"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"map[Symbol, set[Symbol]]"))),(0,o.kt)("h2",{id:"lang-rascal-grammar-Lookahead-first"},"function first"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"set[Symbol] first(list[Symbol] symbols, SymbolUse FIRST)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"SymbolUse first(Grammar G)"))),(0,o.kt)("h2",{id:"lang-rascal-grammar-Lookahead-follow"},"function follow"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"SymbolUse follow(Grammar G,  SymbolUse FIRST)"))),(0,o.kt)("h2",{id:"lang-rascal-grammar-Lookahead-firstAndFollow"},"function firstAndFollow"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"tuple[SymbolUse, SymbolUse] firstAndFollow(Grammar G)"))),(0,o.kt)("h2",{id:"lang-rascal-grammar-Lookahead-mergeCC"},"function mergeCC"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"SymbolUse mergeCC(SymbolUse su)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"set[Symbol] mergeCC(set[Symbol] su)"))))}c.isMDXComponent=!0}}]);