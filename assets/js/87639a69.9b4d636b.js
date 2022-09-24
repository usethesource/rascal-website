"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[92991],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>m});var a=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function r(t,e){if(null==t)return{};var n,a,i=function(t,e){if(null==t)return{};var n,a,i={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var c=a.createContext({}),s=function(t){var e=a.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=s(t.components);return a.createElement(c.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},b=a.forwardRef((function(t,e){var n=t.components,i=t.mdxType,l=t.originalType,c=t.parentName,u=r(t,["components","mdxType","originalType","parentName"]),b=s(n),m=i,d=b["".concat(c,".").concat(m)]||b[m]||p[m]||l;return n?a.createElement(d,o(o({ref:e},u),{},{components:n})):a.createElement(d,o({ref:e},u))}));function m(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var l=n.length,o=new Array(l);o[0]=b;var r={};for(var c in e)hasOwnProperty.call(e,c)&&(r[c]=e[c]);r.originalType=t,r.mdxType="string"==typeof t?t:i,o[1]=r;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},95728:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>s});var a=n(87462),i=(n(67294),n(3905));const l={title:"module analysis::formalconcepts::FCA"},o=void 0,r={unversionedId:"Library/analysis/formalconcepts/FCA",id:"Library/analysis/formalconcepts/FCA",title:"module analysis::formalconcepts::FCA",description:"Usage",source:"@site/docs/Library/analysis/formalconcepts/FCA.md",sourceDirName:"Library/analysis/formalconcepts",slug:"/Library/analysis/formalconcepts/FCA",permalink:"/docs/Library/analysis/formalconcepts/FCA",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Library/analysis/formalconcepts/FCA.md",tags:[],version:"current",frontMatter:{title:"module analysis::formalconcepts::FCA"},sidebar:"tutorialSidebar",previous:{title:"module analysis::formalconcepts::CXTIO",permalink:"/docs/Library/analysis/formalconcepts/CXTIO"},next:{title:"analysis::grammars",permalink:"/docs/Library/analysis/grammars/"}},c={},s=[{value:"Usage",id:"usage",level:4},{value:"Synopsis",id:"synopsis",level:4},{value:"Description",id:"description",level:4},{value:"alias FormalContext&Object, &Attribute {#analysis-formalconcepts-FCA-FormalContext&Object, &Attribute}",id:"analysis-formalconcepts-FCA-FormalContext&Object, &Attribute",level:2},{value:"alias Concept&Object, &Attribute {#analysis-formalconcepts-FCA-Concept&Object, &Attribute}",id:"analysis-formalconcepts-FCA-Concept&Object, &Attribute",level:2},{value:"alias ConceptLattice&Object, &Attribute {#analysis-formalconcepts-FCA-ConceptLattice&Object, &Attribute}",id:"analysis-formalconcepts-FCA-ConceptLattice&Object, &Attribute",level:2},{value:"alias Object2Attributes&Object, &Attribute {#analysis-formalconcepts-FCA-Object2Attributes&Object, &Attribute}",id:"analysis-formalconcepts-FCA-Object2Attributes&Object, &Attribute",level:2},{value:"alias Attribute2Objects&Attribute, &Object {#analysis-formalconcepts-FCA-Attribute2Objects&Attribute, &Object}",id:"analysis-formalconcepts-FCA-Attribute2Objects&Attribute, &Object",level:2},{value:"function fca",id:"analysis-formalconcepts-FCA-fca",level:2},{value:"Synopsis",id:"synopsis-1",level:4},{value:"function toDot",id:"analysis-formalconcepts-FCA-toDot",level:2},{value:"Synopsis",id:"synopsis-2",level:4},{value:"function toDotline",id:"analysis-formalconcepts-FCA-toDotline",level:2},{value:"function toOutline",id:"analysis-formalconcepts-FCA-toOutline",level:2},{value:"function toFormalContext",id:"analysis-formalconcepts-FCA-toFormalContext",level:2},{value:"function intersection",id:"analysis-formalconcepts-FCA-intersection",level:2},{value:"function union",id:"analysis-formalconcepts-FCA-union",level:2},{value:"function isSubset",id:"analysis-formalconcepts-FCA-isSubset",level:2},{value:"function sigma",id:"analysis-formalconcepts-FCA-sigma",level:2},{value:"function tau",id:"analysis-formalconcepts-FCA-tau",level:2},{value:"function maxincl",id:"analysis-formalconcepts-FCA-maxincl",level:2},{value:"function createAttributeLattice",id:"analysis-formalconcepts-FCA-createAttributeLattice",level:2},{value:"function makeNodes",id:"analysis-formalconcepts-FCA-makeNodes",level:2},{value:"function newAdded1",id:"analysis-formalconcepts-FCA-newAdded1",level:2},{value:"function newAdded0",id:"analysis-formalconcepts-FCA-newAdded0",level:2},{value:"function compose",id:"analysis-formalconcepts-FCA-compose",level:2},{value:"function toDotString",id:"analysis-formalconcepts-FCA-toDotString",level:2},{value:"Synopsis",id:"synopsis-3",level:4}],u={toc:s};function p(t){let{components:e,...n}=t;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h4",{id:"usage"},"Usage"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"import analysis::formalconcepts::FCA;")),(0,i.kt)("h4",{id:"synopsis"},"Synopsis"),(0,i.kt)("p",null,"Library for Formal Concept Analysis"),(0,i.kt)("h4",{id:"description"},"Description"),(0,i.kt)("p",null,"Formal Concept Analysis is a somewhat ubiquitous tool in software analysis projects.\nIt can be used to find latent groups of objects that share the same attributes in a dataset.\nTypically, we apply ",(0,i.kt)("inlineCode",{parentName:"p"},"FCA")," to a relation ",(0,i.kt)("inlineCode",{parentName:"p"},"rel[&O objects, &A attributes]"),", which represents\nextracted source code artifacts and their attributes."),(0,i.kt)("h2",{id:"analysis-formalconcepts-FCA-FormalContext&Object, &Attribute"},"alias FormalContext","[&Object, &Attribute]"," {#analysis-formalconcepts-FCA-FormalContext","[&Object, &Attribute]","}"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"rel[&Object, &Attribute]"))),(0,i.kt)("h2",{id:"analysis-formalconcepts-FCA-Concept&Object, &Attribute"},"alias Concept","[&Object, &Attribute]"," {#analysis-formalconcepts-FCA-Concept","[&Object, &Attribute]","}"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tuple[set[&Object] objects, set[&Attribute] attributes]"))),(0,i.kt)("h2",{id:"analysis-formalconcepts-FCA-ConceptLattice&Object, &Attribute"},"alias ConceptLattice","[&Object, &Attribute]"," {#analysis-formalconcepts-FCA-ConceptLattice","[&Object, &Attribute]","}"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"rel[Concept[&Object, &Attribute], Concept[&Object, &Attribute]]"))),(0,i.kt)("h2",{id:"analysis-formalconcepts-FCA-Object2Attributes&Object, &Attribute"},"alias Object2Attributes","[&Object, &Attribute]"," {#analysis-formalconcepts-FCA-Object2Attributes","[&Object, &Attribute]","}"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"map[&Object, set[&Attribute]]"))),(0,i.kt)("h2",{id:"analysis-formalconcepts-FCA-Attribute2Objects&Attribute, &Object"},"alias Attribute2Objects","[&Attribute, &Object]"," {#analysis-formalconcepts-FCA-Attribute2Objects","[&Attribute, &Object]","}"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"map[&Attribute, set[&Object]]"))),(0,i.kt)("h2",{id:"analysis-formalconcepts-FCA-fca"},"function fca"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ConceptLattice[&Object, &Attribute] fca (FormalContext[&Object, &Attribute] fc)"))),(0,i.kt)("h4",{id:"synopsis-1"},"Synopsis"),(0,i.kt)("p",null,"Computes Concept Lattice given the Object Attribute Relation."),(0,i.kt)("h2",{id:"analysis-formalconcepts-FCA-toDot"},"function toDot"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DotGraph toDot(ConceptLattice[&Object, &Attribute] cl)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DotGraph toDot(ConceptLattice[&Object, &Attribute] cl, bool lab)"))),(0,i.kt)("h4",{id:"synopsis-2"},"Synopsis"),(0,i.kt)("p",null,"Computes Dot Graph from Concept Lattice."),(0,i.kt)("h2",{id:"analysis-formalconcepts-FCA-toDotline"},"function toDotline"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Dotline toDotline(ConceptLattice[&Object, &Attribute] cl)"))),(0,i.kt)("h2",{id:"analysis-formalconcepts-FCA-toOutline"},"function toOutline"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Outline toOutline(ConceptLattice[&Object, &Attribute] cl)"))),(0,i.kt)("h2",{id:"analysis-formalconcepts-FCA-toFormalContext"},"function toFormalContext"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"FormalContext[&Object, &Attribute] toFormalContext(Object2Attributes[&Object, &Attribute] objects)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"FormalContext[&Object, &Attribute] toFormalContext(Attribute2Objects[&Object, &Attribute] attributes)"))),(0,i.kt)("h2",{id:"analysis-formalconcepts-FCA-intersection"},"function intersection"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"set[&T] intersection(set[set[&T]] st)"))),(0,i.kt)("h2",{id:"analysis-formalconcepts-FCA-union"},"function union"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"set[&T] union(set[set[&T]] st)"))),(0,i.kt)("h2",{id:"analysis-formalconcepts-FCA-isSubset"},"function isSubset"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"bool isSubset(set[set[&T]] candidate, set[&T] s )"))),(0,i.kt)("h2",{id:"analysis-formalconcepts-FCA-sigma"},"function sigma"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"set[&Attribute] sigma(FormalContext[&Object, &Attribute] fc, set[&Object] objects)"))),(0,i.kt)("h2",{id:"analysis-formalconcepts-FCA-tau"},"function tau"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"set[&Object] tau(FormalContext[&Object, &Attribute] fc, set[&Attributes] attributes)"))),(0,i.kt)("h2",{id:"analysis-formalconcepts-FCA-maxincl"},"function maxincl"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"set[set[&T]] maxincl(set[set[&T]] c)"))),(0,i.kt)("h2",{id:"analysis-formalconcepts-FCA-createAttributeLattice"},"function createAttributeLattice"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"rel[set[&Attribute], set[&Attribute]] createAttributeLattice(FormalContext[&Object, &Attribute] fc)"))),(0,i.kt)("h2",{id:"analysis-formalconcepts-FCA-makeNodes"},"function makeNodes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"map[Concept[&Object, &Attribute], int] makeNodes(ConceptLattice[&Object, &Attribute] q)"))),(0,i.kt)("h2",{id:"analysis-formalconcepts-FCA-newAdded1"},"function newAdded1"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"set[&Attribute] newAdded1(ConceptLattice[&Object, &Attribute] q,  Concept[&Object, &Attribute] c)"))),(0,i.kt)("h2",{id:"analysis-formalconcepts-FCA-newAdded0"},"function newAdded0"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"set[Concept[&Object, &Attribute]] newAdded0(ConceptLattice[&Object, &Attribute] q, Concept[&Object, &Attribute] c)"))),(0,i.kt)("h2",{id:"analysis-formalconcepts-FCA-compose"},"function compose"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Stm compose(Concept[&Object, &Attribute] c, map[Concept[&Object, &Attribute], int] z, bool lab)"))),(0,i.kt)("h2",{id:"analysis-formalconcepts-FCA-toDotString"},"function toDotString"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"str toDotString(ConceptLattice[&Object, &Attribute]  q)"))),(0,i.kt)("h4",{id:"synopsis-3"},"Synopsis"),(0,i.kt)("p",null,"Write relation in ",(0,i.kt)("inlineCode",{parentName:"p"},".dot")," format."))}p.isMDXComponent=!0}}]);