"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[50110],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=i.createContext({}),l=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=l(e.components);return i.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(t),d=r,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||a;return t?i.createElement(f,o(o({ref:n},c),{},{components:t})):i.createElement(f,o({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=u;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<a;l++)o[l]=t[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},25707:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var i=t(87462),r=(t(67294),t(3905));const a={title:"Rewriting",sidebar_position:11},o=void 0,s={unversionedId:"RascalConcepts/Rewriting/index",id:"RascalConcepts/Rewriting/index",title:"Rewriting",description:"Synopsis",source:"@site/docs/RascalConcepts/Rewriting/index.md",sourceDirName:"RascalConcepts/Rewriting",slug:"/RascalConcepts/Rewriting/",permalink:"/docs/RascalConcepts/Rewriting/",draft:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{title:"Rewriting",sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"Syntax Definition and Parsing",permalink:"/docs/RascalConcepts/SyntaxDefinitionAndParsing/"},next:{title:"IDE Construction",permalink:"/docs/RascalConcepts/IDEConstruction/"}},p={},l=[{value:"Synopsis",id:"synopsis",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4}],c={toc:l};function m(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h4",{id:"synopsis"},"Synopsis"),(0,r.kt)("p",null,"Rewriting using pattern-directed invocation"),(0,r.kt)("h4",{id:"description"},"Description"),(0,r.kt)("p",null,"A rewrite rule is a recipe on how to simplify values.\nRemember: (",(0,r.kt)("em",{parentName:"p"},"a")," + ",(0,r.kt)("em",{parentName:"p"},"b"),")^2^ = ",(0,r.kt)("em",{parentName:"p"},"a"),"^2^ + 2 ",(0,r.kt)("em",{parentName:"p"},"ab")," + ",(0,r.kt)("em",{parentName:"p"},"b"),"^2^?\nA rewrite rule has a pattern as left-hand side -- here: (",(0,r.kt)("em",{parentName:"p"},"a")," + ",(0,r.kt)("em",{parentName:"p"},"b"),")^2^ -- and a replacement as\nright-hand side -- here: ",(0,r.kt)("em",{parentName:"p"},"a"),"^2^ + 2 ",(0,r.kt)("em",{parentName:"p"},"ab")," + ",(0,r.kt)("em",{parentName:"p"},"b"),"^2^.\nGiven a value and a set of rewrite rules the patterns are tried on every subpart of the value and replacements are made if a match is successful. This is repeated as long as some pattern matches."),(0,r.kt)("p",null,"Rascal has ancestors, notably ",(0,r.kt)("a",{parentName:"p",href:"http://www.meta-environment.org/"},"ASF+SDF"),", where rewriting was the most important computation mechanism.\nIn Rascal, rewriting can be achieved using pattern-directed invocation,\nsee ",(0,r.kt)("a",{parentName:"p",href:"/docs/Rascal/Declarations/Function/"},"Function Declaration"),",\npossibly combined with a ",(0,r.kt)("a",{parentName:"p",href:"/docs/Rascal/Expressions/Visit/"},"Visit")," statement."),(0,r.kt)("h4",{id:"examples"},"Examples"),(0,r.kt)("p",null,"In a package for symbolic differentiation it is desirable to keep expressions in simplified form in order\nto avoid intermediate results like ",(0,r.kt)("inlineCode",{parentName:"p"},"add(product(con(1), x), mul(con(0), y))")," that can be simplified to ",(0,r.kt)("inlineCode",{parentName:"p"},"x"),".\nThe following definitions achieve this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal"},"Exp simp(add(con(n), con(m))) = con(n + m);   //<1>\nExp simp(mul(con(n), con(m))) = con(n * m);\n\nExp simp(mul(con(1), Exp e))  = e;\nExp simp(mul(Exp e, con(1)))  = e;\nExp simp(mul(con(0), Exp e))  = con(0);\nExp simp(mul(Exp e, con(0)))  = con(0);\n\nExp simp(add(con(0), Exp e))  = e;\nExp simp(add(Exp e, con(0)))  = e;\n\ndefault Exp simp(Exp e)       = e;            // <2>\n\nExp simplify(Exp e){                          // <3>\n  return bottom-up visit(e){\n           case Exp e1 => simp(e1)\n         }\n}\n")),(0,r.kt)("p",null,"<1> Definitions of the function ",(0,r.kt)("inlineCode",{parentName:"p"},"simp")," are given with different patterns as formal argument.\nEach definition is responsible for one particular simplification\n(here is where the similarity with rewrite rules surfaces)."),(0,r.kt)("p",null,"<2> A default for ",(0,r.kt)("inlineCode",{parentName:"p"},"simp")," is given: if no other definition applies, the default one is used."),(0,r.kt)("p",null,"<3> The actual ",(0,r.kt)("inlineCode",{parentName:"p"},"simplify")," function: it performs a bottom up visit of the expression, replacing each subexpression by\na simplified version."),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/docs/Recipes/Common/Derivative/"},"Derivative")," for a full explanation of this example."))}m.isMDXComponent=!0}}]);