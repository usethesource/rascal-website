"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[35970],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>u});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=a.createContext({}),p=function(e){var r=a.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},s=function(e){var r=p(e.components);return a.createElement(c.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},m=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(t),u=n,y=m["".concat(c,".").concat(u)]||m[u]||d[u]||l;return t?a.createElement(y,o(o({ref:r},s),{},{components:t})):a.createElement(y,o({ref:r},s))}));function u(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var l=t.length,o=new Array(l);o[0]=m;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var p=2;p<l;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},29363:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=t(87462),n=(t(67294),t(3905));const l={title:"RedeclaredType"},o=void 0,i={unversionedId:"CompileTimeErrors/RedeclaredType/index",id:"CompileTimeErrors/RedeclaredType/index",title:"RedeclaredType",description:"Synopsis",source:"@site/docs/CompileTimeErrors/RedeclaredType/index.md",sourceDirName:"CompileTimeErrors/RedeclaredType",slug:"/CompileTimeErrors/RedeclaredType/",permalink:"/docs/CompileTimeErrors/RedeclaredType/",draft:!1,tags:[],version:"current",frontMatter:{title:"RedeclaredType"},sidebar:"tutorialSidebar",previous:{title:"RedeclaredField",permalink:"/docs/CompileTimeErrors/RedeclaredField/"},next:{title:"RedeclaredVariable",permalink:"/docs/CompileTimeErrors/RedeclaredVariable/"}},c={},p=[{value:"Synopsis",id:"synopsis",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4}],s={toc:p};function d(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h4",{id:"synopsis"},"Synopsis"),(0,n.kt)("p",null,"A type with the same name has been declared before."),(0,n.kt)("h4",{id:"description"},"Description"),(0,n.kt)("p",null,"Some declarations introduce new type names. Most important are an\n",(0,n.kt)("a",{parentName:"p",href:"/docs/Rascal/Declarations/AlgebraicDataType/"},"algebraic data type")," and ",(0,n.kt)("a",{parentName:"p",href:"/docs/Rascal/Declarations/Alias/"},"alias"),".\nThis error signals that the same type name is used for incompatible purposes."),(0,n.kt)("p",null,"Remedy: rename one of the type names."),(0,n.kt)("h4",{id:"examples"},"Examples"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rascal-shell",metastring:",error",",error":!0},"rascal>data D = d(int x);\nok\nrascal>alias D = str;\n|prompt:///|(0,14,<1,0>,<1,14>): Illegal re-declaration of type: D\nAdvice: |http://tutor.rascal-mpl.org/Errors/Static/RedeclaredType/RedeclaredType.html|\nok\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rascal-shell",metastring:",error",",error":!0},"rascal>alias D = int;\nok\nrascal>alias D = str;\n|prompt:///|(0,14,<1,0>,<1,14>): Illegal re-declaration of type: D\nAdvice: |http://tutor.rascal-mpl.org/Errors/Static/RedeclaredType/RedeclaredType.html|\nok\n")))}d.isMDXComponent=!0}}]);