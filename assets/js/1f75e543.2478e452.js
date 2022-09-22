"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[96959],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(a),d=n,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||s;return a?r.createElement(f,i(i({ref:t},c),{},{components:a})):r.createElement(f,i({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,i=new Array(s);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var p=2;p<s;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},28517:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var r=a(83117),n=(a(67294),a(3905));const s={title:"Syntax"},i=void 0,o={unversionedId:"Rascalopedia/Syntax/index",id:"Rascalopedia/Syntax/index",title:"Syntax",description:"Synopsis",source:"@site/docs/Rascalopedia/Syntax/index.md",sourceDirName:"Rascalopedia/Syntax",slug:"/Rascalopedia/Syntax/",permalink:"/docs/Rascalopedia/Syntax/",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Rascalopedia/Syntax/index.md",tags:[],version:"current",frontMatter:{title:"Syntax"},sidebar:"tutorialSidebar",previous:{title:"Static Semantics",permalink:"/docs/Rascalopedia/StaticSemantics/"},next:{title:"Testing",permalink:"/docs/Rascalopedia/Testing/"}},l={},p=[{value:"Synopsis",id:"synopsis",level:4},{value:"Description",id:"description",level:4}],c={toc:p};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h4",{id:"synopsis"},"Synopsis"),(0,n.kt)("p",null,"The rules that describe correctly structured programs in a language."),(0,n.kt)("h4",{id:"description"},"Description"),(0,n.kt)("p",null,"According to the ",(0,n.kt)("a",{parentName:"p",href:"http://www.merriam-webster.com/dictionary/syntax"},"Merriam-Webster")," dictionary ",(0,n.kt)("em",{parentName:"p"},"syntax")," means"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"the way in which linguistic elements (as words) are put together to form constituents (as phrases or clauses);"),(0,n.kt)("li",{parentName:"ul"},"the part of grammar dealing with this.")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"http://dictionary.reference.com/browse/syntax"},"Dictionary.com")," is more elaborate and defines ",(0,n.kt)("em",{parentName:"p"},"syntax")," as:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("em",{parentName:"p"},"Linguistics"),":\n",(0,n.kt)("strong",{parentName:"p"},"  a. the study of the rules for the formation of grammatical sentences in a language.\n"),"  b. the study of the patterns of formation of sentences and phrases from words.\n",(0,n.kt)("strong",{parentName:"p"},"  c. the rules or patterns so studied: English syntax.\n"),"  d. a presentation of these: a syntax of English.\n**  e. an instance of these: the syntax of a sentence.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("em",{parentName:"p"},"Computers"),":  the grammatical rules and structural patterns governing the ordered use of appropriate words and symbols for issuing commands, writing code, etc., in a particular software application or programming language."))),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Syntax_(programming_languages%5BWikipedia%5D"},"http://en.wikipedia.org/wiki/Syntax_(programming_languages[Wikipedia]")," says:  the syntax of a programming language is the\nset of rules that define the combinations of symbols that are considered to be correctly structured programs in that language."),(0,n.kt)("p",null,"In linguistics, a ",(0,n.kt)("a",{parentName:"p",href:"../../Rascalopedia/Grammar"},"Grammar")," is a concept that includes syntax.\nHowever, in the cases that are relevant for meta-programming they can be used interchangeably.\nWe will use them as synonyms."),(0,n.kt)("p",null,"In programming languages a further subdivision can be made:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Lexical syntax")," defines the form of the lowest level textual items such as keywords, numeric constants, and string constants."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Context-free syntax")," defines the global structure of statements, procedures and modules.")),(0,n.kt)("p",null,"A ",(0,n.kt)("a",{parentName:"p",href:"../../Rascalopedia/Parser"},"Parser")," checks that a text in language ",(0,n.kt)("em",{parentName:"p"},"L")," indeed adheres\nto the syntax rules of language ",(0,n.kt)("em",{parentName:"p"},"L"),". There are two possible answers:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Yes"),". A ",(0,n.kt)("a",{parentName:"li",href:"../../Rascalopedia/ParseTree"},"ParseTree")," is returned that shows how the text adheres to the syntax rules."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"No"),". Error messages pin point the location where the text deviates from the syntax rules.")))}u.isMDXComponent=!0}}]);