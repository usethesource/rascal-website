"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[85946],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},44162:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={title:"Browsing Documentation",keywords:["help"]},i=void 0,s={unversionedId:"GettingHelp/Browsing/index",id:"GettingHelp/Browsing/index",title:"Browsing Documentation",description:"Synopsis",source:"@site/docs/GettingHelp/Browsing/index.md",sourceDirName:"GettingHelp/Browsing",slug:"/GettingHelp/Browsing/",permalink:"/docs/GettingHelp/Browsing/",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/GettingHelp/Browsing/index.md",tags:[],version:"current",frontMatter:{title:"Browsing Documentation",keywords:["help"]},sidebar:"tutorialSidebar",previous:{title:"Getting Help",permalink:"/docs/GettingHelp/"},next:{title:"Help at the command line",permalink:"/docs/GettingHelp/CommandLine/"}},l={},c=[{value:"Synopsis",id:"synopsis",level:4},{value:"Description",id:"description",level:4},{value:"Structure",id:"structure",level:5},{value:"Links",id:"links",level:5},{value:"API docs",id:"api-docs",level:4},{value:"Code examples",id:"code-examples",level:4},{value:"Search",id:"search",level:4}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"synopsis"},"Synopsis"),(0,a.kt)("p",null,"Browsing the Rascal documentation"),(0,a.kt)("h4",{id:"description"},"Description"),(0,a.kt)("p",null,"All Rascal documentation has been indexed and cross-referenced\nand can be accessed via a single browser interface. "),(0,a.kt)("h5",{id:"structure"},"Structure"),(0,a.kt)("p",null,"It is organized\nin ",(0,a.kt)("em",{parentName:"p"},"courses"),", each course consist of\na hierarchy of ",(0,a.kt)("em",{parentName:"p"},"concepts"),". For example, the documentation for ",(0,a.kt)("inlineCode",{parentName:"p"},"while")," is found in the\ncourse named ",(0,a.kt)("a",{parentName:"p",href:"../../Rascal/"},"Rascal"),"\nand the complete name is ",(0,a.kt)("a",{parentName:"p",href:"../../Rascal/Statements/While"},"Rascal/Statements/While"),"."),(0,a.kt)("h5",{id:"links"},"Links"),(0,a.kt)("p",null,"Courses will refer to the concepts in other courses via links. All links have\nbeen checked before publication."),(0,a.kt)("h4",{id:"api-docs"},"API docs"),(0,a.kt)("p",null,"Every Rascal library project also represents one ",(0,a.kt)("em",{parentName:"p"},"course"),". Each module produces\none ",(0,a.kt)("em",{parentName:"p"},"concept")," and encapsulates what is defined and documented within. In particular\nthe ",(0,a.kt)("a",{parentName:"p",href:"../../Library/"},"standard library")," is interesting to browse. The package hierarchy\nof the library is mapped one-to-one to the concept hierarchy of the corresponding course."),(0,a.kt)("h4",{id:"code-examples"},"Code examples"),(0,a.kt)("p",null,"Almost all code examples in the documentation are tested automatically before the documentation\nis published. So you can freely copy/paste from the documentation."),(0,a.kt)("h4",{id:"search"},"Search"),(0,a.kt)("p",null,"Most pages are indexed carefully, for example using the appropriate keywords and punctuation of Rascal. "),(0,a.kt)("p",null,"Nevertheless the search box on the website will produce\nresults in all courses, like ",(0,a.kt)("a",{parentName:"p",href:"../../GettingHelp/"},"Help")," (this course)\nand ",(0,a.kt)("a",{parentName:"p",href:"../../Recipes/"},"Recipes")," or ",(0,a.kt)("a",{parentName:"p",href:"../../Library/"},"Library"),". "),(0,a.kt)("p",null,"The order of appearance of search results is based on several heuristics."))}u.isMDXComponent=!0}}]);