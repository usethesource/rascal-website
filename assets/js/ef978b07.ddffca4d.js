"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[71533],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),f=o,y=d["".concat(c,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(y,i(i({ref:t},l),{},{components:n})):r.createElement(y,i({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},61795:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={title:"Concrete"},i=void 0,s={unversionedId:"Recipes/Languages/Exp/Concrete/index",id:"Recipes/Languages/Exp/Concrete/index",title:"Concrete",description:"Synopsis",source:"@site/docs/Recipes/Languages/Exp/Concrete/index.md",sourceDirName:"Recipes/Languages/Exp/Concrete",slug:"/Recipes/Languages/Exp/Concrete/",permalink:"/docs/Recipes/Languages/Exp/Concrete/",draft:!1,tags:[],version:"current",frontMatter:{title:"Concrete"},sidebar:"tutorialSidebar",previous:{title:"Manual",permalink:"/docs/Recipes/Languages/Exp/Combined/Manual/"},next:{title:"No Layout",permalink:"/docs/Recipes/Languages/Exp/Concrete/NoLayout/"}},c={},p=[{value:"Synopsis",id:"synopsis",level:4},{value:"Description",id:"description",level:4}],l={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h4",{id:"synopsis"},"Synopsis"),(0,o.kt)("p",null,"Various versions of Exp based on concrete syntax."),(0,o.kt)("h4",{id:"description"},"Description"),(0,o.kt)("p",null,"We discuss several versions of Exp based on concrete syntax:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/Recipes/Languages/Exp/Concrete/NoLayout/"},"./No Layout"),": is the simplest version that does not consider layout symbols in expressions."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/Recipes/Languages/Exp/Concrete/WithLayout/"},"./With Layout"),": adds layout information to Exp's synax definition.")))}u.isMDXComponent=!0}}]);