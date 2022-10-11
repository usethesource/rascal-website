"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[70325],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(r),m=i,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},98485:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var n=r(87462),i=(r(67294),r(3905));const a={title:"UninitializedPatternMatch"},l=void 0,o={unversionedId:"CompileTimeErrors/UninitializedPatternMatch/index",id:"CompileTimeErrors/UninitializedPatternMatch/index",title:"UninitializedPatternMatch",description:"Synopsis",source:"@site/docs/CompileTimeErrors/UninitializedPatternMatch/index.md",sourceDirName:"CompileTimeErrors/UninitializedPatternMatch",slug:"/CompileTimeErrors/UninitializedPatternMatch/",permalink:"/docs/CompileTimeErrors/UninitializedPatternMatch/",draft:!1,tags:[],version:"current",frontMatter:{title:"UninitializedPatternMatch"},sidebar:"tutorialSidebar",previous:{title:"UnguardedReturn",permalink:"/docs/CompileTimeErrors/UnguardedReturn/"},next:{title:"UnitializedVariable",permalink:"/docs/CompileTimeErrors/UnitializedVariable/"}},s={},c=[{value:"Synopsis",id:"synopsis",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4},{value:"Benefits",id:"benefits",level:4},{value:"Pitfalls",id:"pitfalls",level:4}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h4",{id:"synopsis"},"Synopsis"),(0,i.kt)("p",null,"Pattern matching has not been properly initialized."),(0,i.kt)("h4",{id:"description"},"Description"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/RascalConcepts/PatternMatching/"},"Pattern matching")," requires two ingredients:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"One of the many ",(0,i.kt)("a",{parentName:"li",href:"/docs/Rascal/Patterns/"},"patterns"),"."),(0,i.kt)("li",{parentName:"ul"},"A non-void subject value to which the pattern is applied.")),(0,i.kt)("p",null,"This error is generated when the subject is void."),(0,i.kt)("p",null,"Remedy: replace the subject by a non-void value."),(0,i.kt)("h4",{id:"examples"},"Examples"),(0,i.kt)("p",null,"Here is a (contrived) example that produces this error:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rascal-shell",metastring:",error",",error":!0},"rascal>void dummy() { return; }\nvoid (): function(|prompt:///|(0,24,<1,0>,<1,24>))\nrascal>int n := dummy();\n|prompt:///|(9,5,<1,9>,<1,14>): Uninitialized pattern match: trying to match a value of the type 'void'\nAdvice: |http://tutor.rascal-mpl.org/Errors/Static/UninitializedPatternMatch/UninitializedPatternMatch.html|\nok\n")),(0,i.kt)("h4",{id:"benefits"},"Benefits"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"As far as we know there is no other way to trigger this static ",(0,i.kt)("a",{parentName:"li",href:"/docs/CompileTimeErrors/"},"error"),".")),(0,i.kt)("h4",{id:"pitfalls"},"Pitfalls"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The error message seems to point to the pattern for the cause but the cause is in the static type (",(0,i.kt)("inlineCode",{parentName:"li"},"void"),") of the subject on the right.")))}u.isMDXComponent=!0}}]);