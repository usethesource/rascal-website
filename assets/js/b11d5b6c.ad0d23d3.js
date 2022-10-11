"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[33099],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},94322:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={title:"UnguardedFail"},l=void 0,o={unversionedId:"CompileTimeErrors/UnguardedFail/index",id:"CompileTimeErrors/UnguardedFail/index",title:"UnguardedFail",description:"Synopsis",source:"@site/docs/CompileTimeErrors/UnguardedFail/index.md",sourceDirName:"CompileTimeErrors/UnguardedFail",slug:"/CompileTimeErrors/UnguardedFail/",permalink:"/docs/CompileTimeErrors/UnguardedFail/",draft:!1,tags:[],version:"current",frontMatter:{title:"UnguardedFail"},sidebar:"tutorialSidebar",previous:{title:"UnguardedAppend",permalink:"/docs/CompileTimeErrors/UnguardedAppend/"},next:{title:"UnguardedInsert",permalink:"/docs/CompileTimeErrors/UnguardedInsert/"}},s={},p=[{value:"Synopsis",id:"synopsis",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"synopsis"},"Synopsis"),(0,a.kt)("p",null,"Use of ",(0,a.kt)("inlineCode",{parentName:"p"},"fail")," statement outside a condtional context."),(0,a.kt)("h4",{id:"description"},"Description"),(0,a.kt)("p",null,"A ",(0,a.kt)("a",{parentName:"p",href:"/docs/Rascal/Statements/Fail/"},"fail")," statement is only allowed inside conditional statements.\nThis error is generated when ",(0,a.kt)("inlineCode",{parentName:"p"},"fail")," is used outside a conditional context."),(0,a.kt)("p",null,"Remedies:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Surround the ",(0,a.kt)("inlineCode",{parentName:"li"},"fail")," statement by a conditional conditional statement."),(0,a.kt)("li",{parentName:"ul"},"Replace the ",(0,a.kt)("inlineCode",{parentName:"li"},"fail")," statement by a ","[Rascal:Throw]"," statement."),(0,a.kt)("li",{parentName:"ul"},"replace the ",(0,a.kt)("inlineCode",{parentName:"li"},"fail")," statement by a ","[Rascal:Return]"," statement.")),(0,a.kt)("h4",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Here is a correct (albeit not very useful) use of ",(0,a.kt)("inlineCode",{parentName:"p"},"fail")," where the pattern match ",(0,a.kt)("inlineCode",{parentName:"p"},"int N := 35")," acts as guard:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>if(int N := 35){ if(N > 10) fail; }\nok\n")),(0,a.kt)("p",null,"Any condition (non only one using pattern matching) can act as guard:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal-shell",metastring:",continue",",continue":!0},"rascal>if(true) { fail; }\nok\n")),(0,a.kt)("p",null,"An error occurs when ",(0,a.kt)("inlineCode",{parentName:"p"},"fail")," is used outside a conditional context:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal-shell",metastring:",error",",error":!0},"rascal>fail;\n|prompt:///|(0,5,<1,0>,<1,5>): Use of fail outside a conditional context\nAdvice: |http://tutor.rascal-mpl.org/Errors/Static/UnguardedFail/UnguardedFail.html|\nok\n")))}d.isMDXComponent=!0}}]);