"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[17225],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=l(a),u=r,h=d["".concat(c,".").concat(u)]||d[u]||m[u]||s;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var l=2;l<s;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},41368:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var n=a(87462),r=(a(67294),a(3905));const s={title:"Pattern Matching",sidebar_position:5},i=void 0,o={unversionedId:"RascalConcepts/PatternMatching/index",id:"RascalConcepts/PatternMatching/index",title:"Pattern Matching",description:"Synopsis",source:"@site/docs/RascalConcepts/PatternMatching/index.md",sourceDirName:"RascalConcepts/PatternMatching",slug:"/RascalConcepts/PatternMatching/",permalink:"/docs/RascalConcepts/PatternMatching/",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Pattern Matching",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Enumerating",permalink:"/docs/RascalConcepts/Enumerating/"},next:{title:"Control Structures",permalink:"/docs/RascalConcepts/ControlStructures/"}},c={},l=[{value:"Synopsis",id:"synopsis",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4}],p={toc:l};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h4",{id:"synopsis"},"Synopsis"),(0,r.kt)("p",null,"Pattern matching."),(0,r.kt)("h4",{id:"description"},"Description"),(0,r.kt)("p",null,"Pattern matching determines whether a given pattern matches a given value.\nThe outcome can be ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," (no match) or ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," (a match). A pattern match that succeeds may bind values to variables."),(0,r.kt)("p",null,"Pattern matching is ",(0,r.kt)("em",{parentName:"p"},"the")," mechanism for case distinction\n(",(0,r.kt)("a",{parentName:"p",href:"/docs/Rascal/Statements/Switch/"},"Switch")," statement) and search (",(0,r.kt)("a",{parentName:"p",href:"/docs/Rascal/Expressions/Visit/"},"Visit")," statement) in Rascal.\nPatterns can also be used in an explicit match operator ",(0,r.kt)("inlineCode",{parentName:"p"},":=")," and can then be part of larger boolean expressions.\nSince a pattern match may have more than one solution, local backtracking over the alternatives of a match is provided.\nPatterns can also be used in ",(0,r.kt)("a",{parentName:"p",href:"/docs/Rascal/Expressions/Comprehensions/Enumerator/"},"Enumerators"),"s and control structures like\n",(0,r.kt)("a",{parentName:"p",href:"/docs/Rascal/Statements/For/"},"For")," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/Rascal/Statements/While/"},"While")," statement."),(0,r.kt)("p",null,"A very rich pattern language is provided that includes string matching based on regular expressions,\nmatching of abstract patterns, and matching of concrete syntax patterns.\nSome of the features that are provided are list (associative) matching,\nset (associative, commutative, idempotent) matching, and deep matching of descendant patterns.\nAll these forms of matching can be used in a single pattern and can be nested.\nPatterns may contain variables that are bound when the match is successful.\nAnonymous (don't care) positions are indicated by the underscore (",(0,r.kt)("inlineCode",{parentName:"p"},"_"),").\nSee ",(0,r.kt)("a",{parentName:"p",href:"/docs/Rascal/Patterns/"},"Patterns")," for more details."),(0,r.kt)("h4",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Here is a ",(0,r.kt)("em",{parentName:"p"},"regular expression")," that matches a line of text, finds the first alphanumeric word in it, and extracts the word itself as well as the before and after it (",(0,r.kt)("inlineCode",{parentName:"p"},"\\W")," matches all non-word characters; ",(0,r.kt)("inlineCode",{parentName:"p"},"\\w")," matches all word characters):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal"},"/^<before:\\W*><word:\\w+><after:.*$>/\n")),(0,r.kt)("p",null,"Regular expressions follow the Java regular expression syntax with one exception: instead of using numbered groups to refer to parts of the subject string that have been matched by a part of the regular expression we use the notation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal"},"<_Name_:_RegularExpression_>\n")),(0,r.kt)("p",null,"If ",(0,r.kt)("inlineCode",{parentName:"p"},"RegularExpression")," matches, the matched substring is assigned to string variable ",(0,r.kt)("inlineCode",{parentName:"p"},"Name"),"."),(0,r.kt)("p",null,"The following abstract pattern matches the abstract syntax of a while statement defined earlier:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal"},"whileStat(EXP Exp, list[STAT] Stats)\n")),(0,r.kt)("p",null,"Variables in a pattern are either explicitly declared in the pattern itself---as done in the example---or they may be declared in the context in which the pattern occurs. So-called multi-variables in list and set patterns are declared by a ",(0,r.kt)("inlineCode",{parentName:"p"},"*")," suffix: ",(0,r.kt)("inlineCode",{parentName:"p"},"X*")," is thus\nan abbreviation for ",(0,r.kt)("inlineCode",{parentName:"p"},"list[...] X")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"set[...] X"),", where the precise element type depends on the context. The above pattern can then be written as"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal"},"whileStat(EXP Exp, Stats*)\n")),(0,r.kt)("p",null,"or, if you are not interested in the actual value of the statements as"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal"},"whileStat(EXP Exp, _*)\n")),(0,r.kt)("p",null,"When there is a grammar for this example language, we can also write concrete patterns as described in\n",(0,r.kt)("a",{parentName:"p",href:"/docs/Rascal/Patterns/Concrete/"},"Concrete Patterns"),"."))}m.isMDXComponent=!0}}]);