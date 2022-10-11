"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[6574],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>d});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function m(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=a.createContext({}),s=function(e){var r=a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):m(m({},r),e)),t},p=function(e){var r=s(e.components);return a.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},c=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=s(t),d=n,f=c["".concat(l,".").concat(d)]||c[d]||u[d]||i;return t?a.createElement(f,m(m({ref:r},p),{},{components:t})):a.createElement(f,m({ref:r},p))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,m=new Array(i);m[0]=c;var o={};for(var l in r)hasOwnProperty.call(r,l)&&(o[l]=r[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,m[1]=o;for(var s=2;s<i;s++)m[s]=t[s];return a.createElement.apply(null,m)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},91815:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>m,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=t(87462),n=(t(67294),t(3905));const i={title:"module Grammar"},m=void 0,o={unversionedId:"Library/Grammar",id:"Library/Grammar",title:"module Grammar",description:"Usage",source:"@site/docs/Library/Grammar.md",sourceDirName:"Library",slug:"/Library/Grammar",permalink:"/docs/Library/Grammar",draft:!1,tags:[],version:"current",frontMatter:{title:"module Grammar"},sidebar:"tutorialSidebar",previous:{title:"module Exception",permalink:"/docs/Library/Exception"},next:{title:"module IO",permalink:"/docs/Library/IO"}},l={},s=[{value:"Usage",id:"usage",level:4},{value:"Synopsis",id:"synopsis",level:4},{value:"data GrammarModule",id:"Grammar-GrammarModule",level:2},{value:"data GrammarDefinition",id:"Grammar-GrammarDefinition",level:2},{value:"function grammar",id:"Grammar-grammar",level:2},{value:"data Item",id:"Grammar-Item",level:2},{value:"Synopsis",id:"synopsis-1",level:4},{value:"function compose",id:"Grammar-compose",level:2},{value:"Synopsis",id:"synopsis-2",level:4},{value:"Description",id:"description",level:4},{value:"function extends",id:"Grammar-extends",level:2},{value:"function imports",id:"Grammar-imports",level:2}],p={toc:s};function u(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h4",{id:"usage"},"Usage"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"import Grammar;")),(0,n.kt)("h4",{id:"synopsis"},"Synopsis"),(0,n.kt)("p",null,"A simple but effective internal format for the representation of context-free grammars."),(0,n.kt)("h2",{id:"Grammar-GrammarModule"},"data GrammarModule"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rascal"},"data GrammarModule  \n     = \\module(str name, set[str] imports, set[str] extends, Grammar grammar)\n     ;\n")),(0,n.kt)("h2",{id:"Grammar-GrammarDefinition"},"data GrammarDefinition"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rascal"},"data GrammarDefinition  \n     = \\definition(str main, map[str name, GrammarModule \\mod] modules)\n     ;\n")),(0,n.kt)("h2",{id:"Grammar-grammar"},"function grammar"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Grammar grammar(set[Symbol] starts, set[Production] prods)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Grammar grammar(type[&T <: Tree] sym)"))),(0,n.kt)("h2",{id:"Grammar-Item"},"data Item"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rascal"},"data Item  \n     = item(Production production, int index)\n     ;\n")),(0,n.kt)("h4",{id:"synopsis-1"},"Synopsis"),(0,n.kt)("p",null,"An item is an index into the symbol list of a production rule."),(0,n.kt)("h2",{id:"Grammar-compose"},"function compose"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Grammar compose(Grammar g1, Grammar g2)"))),(0,n.kt)("h4",{id:"synopsis-2"},"Synopsis"),(0,n.kt)("p",null,"Compose two grammars."),(0,n.kt)("h4",{id:"description"},"Description"),(0,n.kt)("p",null,"Compose two grammars by adding the rules of g2 to the rules of g1.\nThe start symbols of g1 will be the start symbols of the resulting grammar."),(0,n.kt)("h2",{id:"Grammar-extends"},"function extends"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"rel[str, str] extends(GrammarDefinition def)"))),(0,n.kt)("h2",{id:"Grammar-imports"},"function imports"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"rel[str,str] imports(GrammarDefinition def)"))))}u.isMDXComponent=!0}}]);