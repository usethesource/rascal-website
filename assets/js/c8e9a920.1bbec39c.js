"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[38479],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>f});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var u=a.createContext({}),p=function(e){var r=a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},s=function(e){var r=p(e.components);return a.createElement(u.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},c=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,l=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=p(t),f=n,g=c["".concat(u,".").concat(f)]||c[f]||d[f]||l;return t?a.createElement(g,o(o({ref:r},s),{},{components:t})):a.createElement(g,o({ref:r},s))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var l=t.length,o=new Array(l);o[0]=c;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var p=2;p<l;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},15231:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=t(87462),n=(t(67294),t(3905));const l={title:"module lang::rascal::upgrade::UpgradePostfixStarAndPlusToPrefix"},o=void 0,i={unversionedId:"Library/lang/rascal/upgrade/UpgradePostfixStarAndPlusToPrefix",id:"Library/lang/rascal/upgrade/UpgradePostfixStarAndPlusToPrefix",title:"module lang::rascal::upgrade::UpgradePostfixStarAndPlusToPrefix",description:"Usage",source:"@site/docs/Library/lang/rascal/upgrade/UpgradePostfixStarAndPlusToPrefix.md",sourceDirName:"Library/lang/rascal/upgrade",slug:"/Library/lang/rascal/upgrade/UpgradePostfixStarAndPlusToPrefix",permalink:"/docs/Library/lang/rascal/upgrade/UpgradePostfixStarAndPlusToPrefix",draft:!1,tags:[],version:"current",frontMatter:{title:"module lang::rascal::upgrade::UpgradePostfixStarAndPlusToPrefix"},sidebar:"tutorialSidebar",previous:{title:"module lang::rascal::upgrade::UpdateNestedListAndSetPatterns",permalink:"/docs/Library/lang/rascal/upgrade/UpdateNestedListAndSetPatterns"},next:{title:"lang::rsf",permalink:"/docs/Library/lang/rsf/"}},u={},p=[{value:"Usage",id:"usage",level:4},{value:"function report",id:"lang-rascal-upgrade-UpgradePostfixStarAndPlusToPrefix-report",level:2},{value:"function update",id:"lang-rascal-upgrade-UpgradePostfixStarAndPlusToPrefix-update",level:2},{value:"function report",id:"lang-rascal-upgrade-UpgradePostfixStarAndPlusToPrefix-report",level:2},{value:"function updateTree",id:"lang-rascal-upgrade-UpgradePostfixStarAndPlusToPrefix-updateTree",level:2}],s={toc:p};function d(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h4",{id:"usage"},"Usage"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"import lang::rascal::upgrade::UpgradePostfixStarAndPlusToPrefix;")),(0,n.kt)("h2",{id:"lang-rascal-upgrade-UpgradePostfixStarAndPlusToPrefix-report"},"function report"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"list[Message] report(loc root)"))),(0,n.kt)("h2",{id:"lang-rascal-upgrade-UpgradePostfixStarAndPlusToPrefix-update"},"function update"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"void update(loc root)"))),(0,n.kt)("h2",{id:"lang-rascal-upgrade-UpgradePostfixStarAndPlusToPrefix-report"},"function report"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"list[Message] report(Tree m)"))),(0,n.kt)("h2",{id:"lang-rascal-upgrade-UpgradePostfixStarAndPlusToPrefix-updateTree"},"function updateTree"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Tree updateTree(Tree m)"))))}d.isMDXComponent=!0}}]);