"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[8043],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(o,".").concat(m)]||d[m]||u[m]||s;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,l=new Array(s);l[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<s;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},15707:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var r=n(83117),a=(n(67294),n(3905));const s={title:"Field Assignment",keywords:["[","=","]"]},l=void 0,i={unversionedId:"Rascal/Expressions/Operators/FieldAssignment/index",id:"Rascal/Expressions/Operators/FieldAssignment/index",title:"Field Assignment",description:"Synopsis",source:"@site/docs/Rascal/Expressions/Operators/FieldAssignment/index.md",sourceDirName:"Rascal/Expressions/Operators/FieldAssignment",slug:"/Rascal/Expressions/Operators/FieldAssignment/",permalink:"/docs/Rascal/Expressions/Operators/FieldAssignment/",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Rascal/Expressions/Operators/FieldAssignment/index.md",tags:[],version:"current",frontMatter:{title:"Field Assignment",keywords:["[","=","]"]},sidebar:"tutorialSidebar",previous:{title:"Operators",permalink:"/docs/Rascal/Expressions/Operators/"},next:{title:"Field Projection",permalink:"/docs/Rascal/Expressions/Operators/FieldProjection/"}},o={},p=[{value:"Synopsis",id:"synopsis",level:4},{value:"Syntax",id:"syntax",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"synopsis"},"Synopsis"),(0,a.kt)("p",null,"Assignment to a field of a tuple or datatype."),(0,a.kt)("h4",{id:"syntax"},"Syntax"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Exp<sub>1</sub> [ Name = Exp<sub>2</sub> ]")),(0,a.kt)("h4",{id:"description"},"Description"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Exp"),(0,a.kt)("sub",null,"1")," should evaluate to a tuple or datatype with a field ",(0,a.kt)("em",{parentName:"p"},"Name"),"; assign the value of ",(0,a.kt)("em",{parentName:"p"},"Exp"),(0,a.kt)("sub",null,"2")," to that field"),(0,a.kt)("p",null,"Field assignment applies to all values that have named components like tuples and relations with named elements, data types, and locations.\nField assignment returns a new value in which the named component has been replaced by a new value.\n",(0,a.kt)("em",{parentName:"p"},"Name")," stands for itself and is not evaluated."),(0,a.kt)("h4",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>tuple[int key, str val] T = <1, "abc">;\ntuple[int key,str val]: <1,"abc">\nrascal>T[val = "def"];\ntuple[int key,str val]: <1,"def">\nrascal> T;\ntuple[int key,str val]: <1,"abc">\n')),(0,a.kt)("p",null,"Observe that field assignment creates a new value with an updated field. The old value remains unchanged as can be seen from the unchanged value of T in the above example."))}u.isMDXComponent=!0}}]);