"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[54822],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,i=e.originalType,u=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),m=s(r),d=l,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||i;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function d(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=r.length,o=new Array(i);o[0]=m;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:l,o[1]=a;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},12080:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>s});var n=r(83117),l=(r(67294),r(3905));const i={title:"module util::REPL"},o=void 0,a={unversionedId:"Library/util/REPL",id:"Library/util/REPL",title:"module util::REPL",description:"Usage",source:"@site/docs/Library/util/REPL.md",sourceDirName:"Library/util",slug:"/Library/util/REPL",permalink:"/docs/Library/util/REPL",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Library/util/REPL.md",tags:[],version:"current",frontMatter:{title:"module util::REPL"},sidebar:"tutorialSidebar",previous:{title:"module util::Progress",permalink:"/docs/Library/util/Progress"},next:{title:"module util::Random",permalink:"/docs/Library/util/Random"}},u={},s=[{value:"Usage",id:"usage",level:4},{value:"alias Completion",id:"util-REPL-Completion",level:2},{value:"data REPL",id:"util-REPL-REPL",level:2},{value:"function echo",id:"util-REPL-echo",level:2},{value:"function noSuggestions",id:"util-REPL-noSuggestions",level:2},{value:"alias Terminal",id:"util-REPL-Terminal",level:2},{value:"function newREPL",id:"util-REPL-newREPL",level:2},{value:"function startREPL",id:"util-REPL-startREPL",level:2}],c={toc:s};function p(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h4",{id:"usage"},"Usage"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"import util::REPL;")),(0,l.kt)("h2",{id:"util-REPL-Completion"},"alias Completion"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"tuple[int offset, list[str] suggestions]"))),(0,l.kt)("h2",{id:"util-REPL-REPL"},"data REPL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rascal"},'data REPL  \n     = repl(\n     str title = "", \n     str welcome = "", \n     str prompt = "\\n\\>",\n     str quit = "", \n     loc history = |home:///.term-repl-history|, \n     Content (str command) handler = echo,\n     Completion(str line, int cursor) completor = noSuggestions,\n     str () stacktrace = str () { return ""; }\n   )\n     ;\n')),(0,l.kt)("h2",{id:"util-REPL-echo"},"function echo"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Content echo(str line)"))),(0,l.kt)("h2",{id:"util-REPL-noSuggestions"},"function noSuggestions"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Completion noSuggestions(str _, int _)"))),(0,l.kt)("h2",{id:"util-REPL-Terminal"},"alias Terminal"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"tuple[void() run, void(str) send]"))),(0,l.kt)("h2",{id:"util-REPL-newREPL"},"function newREPL"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Terminal newREPL(REPL repl,       // filling in defaults from the repl constructor, for use in the Java code:   str title = repl.title,    str welcome = repl.welcome,    str prompt = repl.prompt,    str quit = repl.quit,   loc history = repl.history,   Content (str ) handler = repl.handler,   Completion(str , int) completor = repl.completor,   str () stacktrace = repl.stacktrace)"))),(0,l.kt)("h2",{id:"util-REPL-startREPL"},"function startREPL"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"void startREPL(REPL repl,       // filling in defaults from the repl constructor, for use in the Java code:   str title = repl.title,    str welcome = repl.welcome,    str prompt = repl.prompt,    str quit = repl.quit,   loc history = repl.history,   Content (str ) handler = repl.handler,   Completion(str , int) completor = repl.completor,   str () stacktrace = repl.stacktrace)"))))}p.isMDXComponent=!0}}]);