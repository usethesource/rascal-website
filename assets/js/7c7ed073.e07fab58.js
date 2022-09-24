"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[7558],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,v=m["".concat(s,".").concat(d)]||m[d]||c[d]||i;return n?r.createElement(v,o(o({ref:t},p),{},{components:n})):r.createElement(v,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},20909:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const i={title:"Invalid Argument"},o=void 0,l={unversionedId:"RunTimeErrors/RuntimeExceptions/InvalidArgument/index",id:"RunTimeErrors/RuntimeExceptions/InvalidArgument/index",title:"Invalid Argument",description:"Synopsis",source:"@site/docs/RunTimeErrors/RuntimeExceptions/InvalidArgument/index.md",sourceDirName:"RunTimeErrors/RuntimeExceptions/InvalidArgument",slug:"/RunTimeErrors/RuntimeExceptions/InvalidArgument/",permalink:"/docs/RunTimeErrors/RuntimeExceptions/InvalidArgument/",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/RunTimeErrors/RuntimeExceptions/InvalidArgument/index.md",tags:[],version:"current",frontMatter:{title:"Invalid Argument"},sidebar:"tutorialSidebar",previous:{title:"Index Out Of Bounds",permalink:"/docs/RunTimeErrors/RuntimeExceptions/IndexOutOfBounds/"},next:{title:"Invalid URI",permalink:"/docs/RunTimeErrors/RuntimeExceptions/InvalidURI/"}},s={},u=[{value:"Synopsis",id:"synopsis",level:4},{value:"Types",id:"types",level:4},{value:"Usage",id:"usage",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"synopsis"},"Synopsis"),(0,a.kt)("p",null,"A function or operation is applied to an invalid argument value."),(0,a.kt)("h4",{id:"types"},"Types"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"data RuntimeException = InvalidArgument() | InvalidArgument(value v) | InvalidArgument(value v, str message);")),(0,a.kt)("h4",{id:"usage"},"Usage"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"import Exception;")," (only needed when ",(0,a.kt)("inlineCode",{parentName:"p"},"InvalidArgument")," is used in ",(0,a.kt)("inlineCode",{parentName:"p"},"catch"),")"),(0,a.kt)("h4",{id:"description"},"Description"),(0,a.kt)("p",null,"This error is generated when a function or operation is applied to a value that it does not expect."),(0,a.kt)("p",null,"Remedies:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Check the value or values to which you apply the function or operation.")),(0,a.kt)("h4",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Changing the month of a ",(0,a.kt)("a",{parentName:"p",href:"../../../Rascal/Expressions/Values/DateTime"},"DateTime")," to an illegal month (13):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>NOW = $2013-01-13T22:16:51.740+01:00$;\ndatetime: $2013-01-13T22:16:51.740+01:00$\nrascal>NOW.month = 13;\n|prompt:///|(12,2,<1,12>,<1,14>): IllegalArgument(13,"Cannot create date with provided values.")\nok\n')),(0,a.kt)("p",null,"Setting the offset in a location to a negative value:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>someLoc = |home:///abc.txt|;\nloc: |home:///abc.txt|\nrascal>someLoc.offset = -1;\n|prompt:///|(18,1,<1,18>,<1,19>): UnavailableInformation()\n    at $shell$(|main://$shell$|)\nok\n")))}c.isMDXComponent=!0}}]);