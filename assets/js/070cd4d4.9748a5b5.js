"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[34393],{3905:(e,l,t)=>{t.d(l,{Zo:()=>p,kt:()=>c});var i=t(67294);function a(e,l,t){return l in e?Object.defineProperty(e,l,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[l]=t,e}function n(e,l){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);l&&(i=i.filter((function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var l=1;l<arguments.length;l++){var t=null!=arguments[l]?arguments[l]:{};l%2?n(Object(t),!0).forEach((function(l){a(e,l,t[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(t,l))}))}return e}function u(e,l){if(null==e)return{};var t,i,a=function(e,l){if(null==e)return{};var t,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)t=n[i],l.indexOf(t)>=0||(a[t]=e[t]);return a}(e,l);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)t=n[i],l.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=i.createContext({}),s=function(e){var l=i.useContext(o),t=l;return e&&(t="function"==typeof e?e(l):r(r({},l),e)),t},p=function(e){var l=s(e.components);return i.createElement(o.Provider,{value:l},e.children)},d={inlineCode:"code",wrapper:function(e){var l=e.children;return i.createElement(i.Fragment,{},l)}},y=i.forwardRef((function(e,l){var t=e.components,a=e.mdxType,n=e.originalType,o=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),y=s(t),c=a,f=y["".concat(o,".").concat(c)]||y[c]||d[c]||n;return t?i.createElement(f,r(r({ref:l},p),{},{components:t})):i.createElement(f,r({ref:l},p))}));function c(e,l){var t=arguments,a=l&&l.mdxType;if("string"==typeof e||a){var n=t.length,r=new Array(n);r[0]=y;var u={};for(var o in l)hasOwnProperty.call(l,o)&&(u[o]=l[o]);u.originalType=e,u.mdxType="string"==typeof e?e:a,r[1]=u;for(var s=2;s<n;s++)r[s]=t[s];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}y.displayName="MDXCreateElement"},64682:(e,l,t)=>{t.r(l),t.d(l,{assets:()=>o,contentTitle:()=>r,default:()=>d,frontMatter:()=>n,metadata:()=>u,toc:()=>s});var i=t(87462),a=(t(67294),t(3905));const n={title:"module ValueIO"},r=void 0,u={unversionedId:"Library/ValueIO",id:"Library/ValueIO",title:"module ValueIO",description:"Usage",source:"@site/docs/Library/ValueIO.md",sourceDirName:"Library",slug:"/Library/ValueIO",permalink:"/docs/Library/ValueIO",draft:!1,tags:[],version:"current",frontMatter:{title:"module ValueIO"},sidebar:"tutorialSidebar",previous:{title:"module Type",permalink:"/docs/Library/Type"},next:{title:"analysis",permalink:"/docs/Library/analysis/"}},o={},s=[{value:"Usage",id:"usage",level:4},{value:"Synopsis",id:"synopsis",level:4},{value:"function readValueFile",id:"ValueIO-readValueFile",level:2},{value:"Synopsis",id:"synopsis-1",level:4},{value:"function getFileLength",id:"ValueIO-getFileLength",level:2},{value:"Synopsis",id:"synopsis-2",level:4},{value:"function readBinaryValueFile",id:"ValueIO-readBinaryValueFile",level:2},{value:"Synopsis",id:"synopsis-3",level:4},{value:"function readTextValueFile",id:"ValueIO-readTextValueFile",level:2},{value:"Synopsis",id:"synopsis-4",level:4},{value:"function readTextValueFileWithEmbeddedTypes",id:"ValueIO-readTextValueFileWithEmbeddedTypes",level:2},{value:"Synopsis",id:"synopsis-5",level:4},{value:"function readTextValueString",id:"ValueIO-readTextValueString",level:2},{value:"Synopsis",id:"synopsis-6",level:4},{value:"function writeBinaryValueFile",id:"ValueIO-writeBinaryValueFile",level:2},{value:"Synopsis",id:"synopsis-7",level:4},{value:"function writeTextValueFile",id:"ValueIO-writeTextValueFile",level:2},{value:"Synopsis",id:"synopsis-8",level:4}],p={toc:s};function d(e){let{components:l,...t}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,t,{components:l,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"usage"},"Usage"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"import ValueIO;")),(0,a.kt)("h4",{id:"synopsis"},"Synopsis"),(0,a.kt)("p",null,"Library functions for reading and writing values in textual and binary format."),(0,a.kt)("h2",{id:"ValueIO-readValueFile"},"function readValueFile"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"value readValueFile(loc file)"))),(0,a.kt)("h4",{id:"synopsis-1"},"Synopsis"),(0,a.kt)("p",null,"Read  a value from a binary file in PBF format."),(0,a.kt)("h2",{id:"ValueIO-getFileLength"},"function getFileLength"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"int getFileLength(loc file)"))),(0,a.kt)("h4",{id:"synopsis-2"},"Synopsis"),(0,a.kt)("p",null,"Get length of a file in number of bytes."),(0,a.kt)("h2",{id:"ValueIO-readBinaryValueFile"},"function readBinaryValueFile"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"&T readBinaryValueFile(type[&T] result, loc file)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"value readBinaryValueFile(loc file)"))),(0,a.kt)("h4",{id:"synopsis-3"},"Synopsis"),(0,a.kt)("p",null,"Read a typed value from a binary file."),(0,a.kt)("h2",{id:"ValueIO-readTextValueFile"},"function readTextValueFile"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"&T readTextValueFile(type[&T] result, loc file)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"value readTextValueFile(loc file)"))),(0,a.kt)("h4",{id:"synopsis-4"},"Synopsis"),(0,a.kt)("p",null,"Read a typed value from a text file."),(0,a.kt)("h2",{id:"ValueIO-readTextValueFileWithEmbeddedTypes"},"function readTextValueFileWithEmbeddedTypes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"&T readTextValueFileWithEmbeddedTypes(type[&T] result, loc file)"))),(0,a.kt)("h4",{id:"synopsis-5"},"Synopsis"),(0,a.kt)("p",null,"If you have written a file containing reified types, then you can use this function\nto read them back.  "),(0,a.kt)("h2",{id:"ValueIO-readTextValueString"},"function readTextValueString"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"value readTextValueString(str input)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"&T readTextValueString(type[&T] result, str input)"))),(0,a.kt)("h4",{id:"synopsis-6"},"Synopsis"),(0,a.kt)("p",null,"Parse a textual string representation of a value."),(0,a.kt)("h2",{id:"ValueIO-writeBinaryValueFile"},"function writeBinaryValueFile"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"void writeBinaryValueFile(loc file, value val, bool compression = true)"))),(0,a.kt)("h4",{id:"synopsis-7"},"Synopsis"),(0,a.kt)("p",null,"Write a value to a file using an efficient binary file format."),(0,a.kt)("h2",{id:"ValueIO-writeTextValueFile"},"function writeTextValueFile"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"void writeTextValueFile(loc file, value val)"))),(0,a.kt)("h4",{id:"synopsis-8"},"Synopsis"),(0,a.kt)("p",null,"Write a value to a file using a textual file format."))}d.isMDXComponent=!0}}]);