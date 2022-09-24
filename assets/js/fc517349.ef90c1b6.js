"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[17771],{3905:(e,a,n)=>{n.d(a,{Zo:()=>p,kt:()=>u});var t=n(67294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function s(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?s(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function l(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)n=s[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=t.createContext({}),c=function(e){var a=t.useContext(o),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},p=function(e){var a=c(e.components);return t.createElement(o.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},d=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),u=r,y=d["".concat(o,".").concat(u)]||d[u]||m[u]||s;return n?t.createElement(y,i(i({ref:a},p),{},{components:n})):t.createElement(y,i({ref:a},p))}));function u(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=d;var l={};for(var o in a)hasOwnProperty.call(a,o)&&(l[o]=a[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<s;c++)i[c]=n[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},84966:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var t=n(87462),r=(n(67294),n(3905));const s={title:"module analysis::m3::AST"},i=void 0,l={unversionedId:"Library/analysis/m3/AST",id:"Library/analysis/m3/AST",title:"module analysis::m3::AST",description:"Usage",source:"@site/docs/Library/analysis/m3/AST.md",sourceDirName:"Library/analysis/m3",slug:"/Library/analysis/m3/AST",permalink:"/docs/Library/analysis/m3/AST",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Library/analysis/m3/AST.md",tags:[],version:"current",frontMatter:{title:"module analysis::m3::AST"},sidebar:"tutorialSidebar",previous:{title:"analysis::m3",permalink:"/docs/Library/analysis/m3/"},next:{title:"module analysis::m3::Core",permalink:"/docs/Library/analysis/m3/Core"}},o={},c=[{value:"Usage",id:"usage",level:4},{value:"Synopsis",id:"synopsis",level:4},{value:"Description",id:"description",level:4},{value:"Benefits",id:"benefits",level:4},{value:"Pitfalls",id:"pitfalls",level:4},{value:"data AST",id:"analysis-m3-AST-AST",level:2},{value:"data Declaration",id:"analysis-m3-AST-Declaration",level:2},{value:"data Statement",id:"analysis-m3-AST-Statement",level:2},{value:"data Expression",id:"analysis-m3-AST-Expression",level:2},{value:"data Type",id:"analysis-m3-AST-Type",level:2}],p={toc:c};function m(e){let{components:a,...n}=e;return(0,r.kt)("wrapper",(0,t.Z)({},p,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h4",{id:"usage"},"Usage"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"import analysis::m3::AST;")),(0,r.kt)("h4",{id:"synopsis"},"Synopsis"),(0,r.kt)("p",null,"a symbolic representation for abstract syntax trees of programming languages."),(0,r.kt)("h4",{id:"description"},"Description"),(0,r.kt)("p",null,"We provide a general set of data types for the syntactic constructs of programming languages: ",(0,r.kt)("inlineCode",{parentName:"p"},"Expression"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Statement"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Declaration")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Type"),".\nAlso, very common syntactic constructs are added to this, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"if"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"while"),", etc."),(0,r.kt)("p",null,"The idea is that parsers for different languages will map to common abstract syntax elements, when this can be done meaningfully.\nIf not, then these front-ends will extend the existing types with new constructor definitions, or even new kinds of types will\nbe added. The shared representation limits the element of surprise when working with different languages, and perhaps may\nmake some downstream analyses reusable."),(0,r.kt)("p",null,"The concept of a ",(0,r.kt)("em",{parentName:"p"},"source ","[Location]")," is important for abstract syntax trees. The annotation ",(0,r.kt)("inlineCode",{parentName:"p"},"src")," will always point to value of type ",(0,r.kt)("inlineCode",{parentName:"p"},"loc"),",\npointing to the physical location of the construct in the source code."),(0,r.kt)("p",null,"The concept of ",(0,r.kt)("em",{parentName:"p"},"declaration")," is also relevant. A ",(0,r.kt)("inlineCode",{parentName:"p"},"decl")," annotation points from a use of a concept to its definition, but always\nvia an indirection (i.e. fully qualified name). The ",(0,r.kt)("inlineCode",{parentName:"p"},"decl")," annotation is also of type ",(0,r.kt)("inlineCode",{parentName:"p"},"loc"),", where each ",(0,r.kt)("a",{parentName:"p",href:"../../../Rascal/Expressions/Values/Location"},"Location")," is a fully qualified name of the\ndefinition that is used. "),(0,r.kt)("p",null,"Finally, the concept of a ",(0,r.kt)("em",{parentName:"p"},"type")," is relevant for ASTs. In particular an ",(0,r.kt)("inlineCode",{parentName:"p"},"Expression")," may have a ",(0,r.kt)("inlineCode",{parentName:"p"},"typ")," annotation, or\na variable declaration, etc."),(0,r.kt)("h4",{id:"benefits"},"Benefits"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Symbolic abstract syntax trees can be analyzed and transformed easily using Rascal primitives such as ","[Patterns]",", ","[$Rascal/Expressions/Comprehensions]",", and ","[Visit]",".")),(0,r.kt)("h4",{id:"pitfalls"},"Pitfalls"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Even though different languages may map to the same syntactic construct, this does not mean that the semantics is the same. Downstream\nmetrics or other analysis tools should still take semantic differences between programming languages into account. ")),(0,r.kt)("h2",{id:"analysis-m3-AST-\\AST"},"data \\AST"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal"},"data \\AST (loc file = |unknown:///|) \n     = declaration(Declaration declaration)\n     | lines(list[str] contents)\n     | noAST(Message msg)\n     ;\n")),(0,r.kt)("h2",{id:"analysis-m3-AST-Declaration"},"data Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal"},"data Declaration (\n    loc src = |unknown:///|,\n    loc decl = |unresolved:///|, //unresolvedDecl\n    TypeSymbol typ = \\any(),\n    list[Modifier] modifiers = [],\n    list[Message] messages = []\n)\n")),(0,r.kt)("h2",{id:"analysis-m3-AST-Statement"},"data Statement"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal"},"data Statement (\n    loc src = |unknown:///|,\n    loc decl = |unresolved:///| //unresolvedDecl\n)\n")),(0,r.kt)("h2",{id:"analysis-m3-AST-Expression"},"data Expression"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal"},"data Expression (\n    loc src = |unknown:///|,\n    loc decl = |unresolved:///|, //unresolvedDecl,\n    TypeSymbol typ = \\any()\n)\n")),(0,r.kt)("h2",{id:"analysis-m3-AST-Type"},"data Type"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal"},"data Type (\n    loc name = |unresolved:///|, //unresolvedType,              \n    TypeSymbol typ = \\any()\n)\n")))}m.isMDXComponent=!0}}]);