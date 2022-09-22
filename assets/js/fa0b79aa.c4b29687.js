"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[72923],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>p});var n=i(67294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),f=c(i),p=r,m=f["".concat(l,".").concat(p)]||f[p]||u[p]||a;return i?n.createElement(m,s(s({ref:t},d),{},{components:i})):n.createElement(m,s({ref:t},d))}));function p(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,s=new Array(a);s[0]=f;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var c=2;c<a;c++)s[c]=i[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,i)}f.displayName="MDXCreateElement"},38182:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var n=i(83117),r=(i(67294),i(3905));const a={title:"module analysis::diff::edits::ExecuteTextEdits"},s=void 0,o={unversionedId:"Library/analysis/diff/edits/ExecuteTextEdits",id:"Library/analysis/diff/edits/ExecuteTextEdits",title:"module analysis::diff::edits::ExecuteTextEdits",description:"Usage",source:"@site/docs/Library/analysis/diff/edits/ExecuteTextEdits.md",sourceDirName:"Library/analysis/diff/edits",slug:"/Library/analysis/diff/edits/ExecuteTextEdits",permalink:"/docs/Library/analysis/diff/edits/ExecuteTextEdits",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Library/analysis/diff/edits/ExecuteTextEdits.md",tags:[],version:"current",frontMatter:{title:"module analysis::diff::edits::ExecuteTextEdits"},sidebar:"tutorialSidebar",previous:{title:"analysis::diff::edits",permalink:"/docs/Library/analysis/diff/edits/"},next:{title:"module analysis::diff::edits::TextEdits",permalink:"/docs/Library/analysis/diff/edits/TextEdits"}},l={},c=[{value:"Usage",id:"usage",level:4},{value:"function executeDocumentEdits",id:"analysis-diff-edits-ExecuteTextEdits-executeDocumentEdits",level:2},{value:"function executeDocumentEdit",id:"analysis-diff-edits-ExecuteTextEdits-executeDocumentEdit",level:2}],d={toc:c};function u(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h4",{id:"usage"},"Usage"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"import analysis::diff::edits::ExecuteTextEdits;")),(0,r.kt)("h2",{id:"analysis-diff-edits-ExecuteTextEdits-executeDocumentEdits"},"function executeDocumentEdits"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"void executeDocumentEdits(list[DocumentEdit] edits)"))),(0,r.kt)("h2",{id:"analysis-diff-edits-ExecuteTextEdits-executeDocumentEdit"},"function executeDocumentEdit"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"void executeDocumentEdit(removed(loc f))")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"void executeDocumentEdit(created(loc f))")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"void executeDocumentEdit(renamed(loc from, loc to))")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"void executeDocumentEdit(changed(loc file, list[TextEdit] edits))"))))}u.isMDXComponent=!0}}]);