"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[93699],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},69511:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={title:"Unavailable Information"},o=void 0,l={unversionedId:"RunTimeErrors/RuntimeExceptions/UnavailableInformation/index",id:"RunTimeErrors/RuntimeExceptions/UnavailableInformation/index",title:"Unavailable Information",description:"Synopsis",source:"@site/docs/RunTimeErrors/RuntimeExceptions/UnavailableInformation/index.md",sourceDirName:"RunTimeErrors/RuntimeExceptions/UnavailableInformation",slug:"/RunTimeErrors/RuntimeExceptions/UnavailableInformation/",permalink:"/docs/RunTimeErrors/RuntimeExceptions/UnavailableInformation/",draft:!1,tags:[],version:"current",frontMatter:{title:"Unavailable Information"},sidebar:"tutorialSidebar",previous:{title:"RegExp Syntax Error",permalink:"/docs/RunTimeErrors/RuntimeExceptions/RegExpSyntaxError/"},next:{title:"Other Runtime Errors",permalink:"/docs/RunTimeErrors/OtherRuntimeErrors/"}},s={},p=[{value:"Synopsis",id:"synopsis",level:4},{value:"Types",id:"types",level:4},{value:"Usage",id:"usage",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"synopsis"},"Synopsis"),(0,a.kt)("p",null,"Requested information is unavailable at runtime"),(0,a.kt)("h4",{id:"types"},"Types"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"data RuntimeException = UnavailableInformation(str message);")),(0,a.kt)("h4",{id:"usage"},"Usage"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"import Exception;")," (only needed when ",(0,a.kt)("inlineCode",{parentName:"p"},"UnavailableInformation")," is used in ",(0,a.kt)("inlineCode",{parentName:"p"},"catch"),")"),(0,a.kt)("h4",{id:"description"},"Description"),(0,a.kt)("p",null,"Several datetypes may contain optional information that is not always available:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"In a ",(0,a.kt)("a",{parentName:"li",href:"/docs/Rascal/Expressions/Values/DateTime/"},"datetime")," value the date or the time may be missing."),(0,a.kt)("li",{parentName:"ul"},"In a ",(0,a.kt)("a",{parentName:"li",href:"/docs/Rascal/Expressions/Values/Location/"},"location")," value, various fields are optional,\ne.g., ",(0,a.kt)("inlineCode",{parentName:"li"},"port"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"offset"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"begin")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"end"),".")),(0,a.kt)("p",null,"This exception is thrown when optional information is not available."),(0,a.kt)("h4",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal-shell",metastring:",error",",error":!0},"rascal>$2016-09-14$.hour;\n|prompt:///|(0,12,<1,0>,<1,12>): Can not retrieve the hour on a date value\nAdvice: |http://tutor.rascal-mpl.org/Errors/Static/UnsupportedOperation/UnsupportedOperation.html|\nok\nrascal>someLoc = |home:///abc.txt|;\nloc: |home:///abc.txt|\nrascal>someLoc.offset;\n|prompt:///|(0,7,<1,0>,<1,7>): UnavailableInformation()\n    at $shell$(|prompt:///|(0,15,<1,0>,<1,15>))\nok\n")))}u.isMDXComponent=!0}}]);