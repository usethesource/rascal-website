"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[77409],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=i,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},53933:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const a={title:"Invalid Use Of Time"},o=void 0,l={unversionedId:"RunTimeErrors/RuntimeExceptions/InvalidUseOfTime/index",id:"RunTimeErrors/RuntimeExceptions/InvalidUseOfTime/index",title:"Invalid Use Of Time",description:"Synopsis",source:"@site/docs/RunTimeErrors/RuntimeExceptions/InvalidUseOfTime/index.md",sourceDirName:"RunTimeErrors/RuntimeExceptions/InvalidUseOfTime",slug:"/RunTimeErrors/RuntimeExceptions/InvalidUseOfTime/",permalink:"/docs/RunTimeErrors/RuntimeExceptions/InvalidUseOfTime/",draft:!1,tags:[],version:"current",frontMatter:{title:"Invalid Use Of Time"},sidebar:"tutorialSidebar",previous:{title:"Invalid Use Of Location",permalink:"/docs/RunTimeErrors/RuntimeExceptions/InvalidUseOfLocation/"},next:{title:"Java",permalink:"/docs/RunTimeErrors/RuntimeExceptions/Java/"}},s={},p=[{value:"Synopsis",id:"synopsis",level:4},{value:"Types",id:"types",level:4},{value:"Usage",id:"usage",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h4",{id:"synopsis"},"Synopsis"),(0,i.kt)("p",null,"Invalid use of a time value at runtime"),(0,i.kt)("h4",{id:"types"},"Types"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"data RuntimeException = InvalidUseOfTime(str message);")),(0,i.kt)("h4",{id:"usage"},"Usage"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"import Exception;")," (only needed when ",(0,i.kt)("inlineCode",{parentName:"p"},"InvalidUseOfTime")," is used in ",(0,i.kt)("inlineCode",{parentName:"p"},"catch"),")"),(0,i.kt)("h4",{id:"description"},"Description"),(0,i.kt)("p",null,"Thrown by operations on time values that\ntry to update unavailable information."),(0,i.kt)("h4",{id:"examples"},"Examples"),(0,i.kt)("p",null,"Setting the ",(0,i.kt)("inlineCode",{parentName:"p"},"year")," field on a time value throws an exception:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rascal-shell",metastring:",error",",error":!0},"rascal>NOW = $T20:11:01.463+00:00$;\n|prompt:///|(6,21,<1,6>,<1,27>): Invalid datetime input: Error reading time, expected ':', found: 49\nAdvice: |http://tutor.rascal-mpl.org/Errors/Static/DateTimeSyntax/DateTimeSyntax.html|\nok\nrascal>NOW.year = 2020;\n|prompt:///|(0,3,<1,0>,<1,3>): Undeclared variable: NOW\nAdvice: |http://tutor.rascal-mpl.org/Errors/Static/UndeclaredVariable/UndeclaredVariable.html|\nok\n")),(0,i.kt)("p",null,"NOTE: Exception is not shown properly"))}u.isMDXComponent=!0}}]);