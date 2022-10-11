"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[48784],{3905:(a,t,e)=>{e.d(t,{Zo:()=>m,kt:()=>g});var l=e(67294);function n(a,t,e){return t in a?Object.defineProperty(a,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[t]=e,a}function s(a,t){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(a);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),e.push.apply(e,l)}return e}function r(a){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?s(Object(e),!0).forEach((function(t){n(a,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):s(Object(e)).forEach((function(t){Object.defineProperty(a,t,Object.getOwnPropertyDescriptor(e,t))}))}return a}function i(a,t){if(null==a)return{};var e,l,n=function(a,t){if(null==a)return{};var e,l,n={},s=Object.keys(a);for(l=0;l<s.length;l++)e=s[l],t.indexOf(e)>=0||(n[e]=a[e]);return n}(a,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(a);for(l=0;l<s.length;l++)e=s[l],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(a,e)&&(n[e]=a[e])}return n}var c=l.createContext({}),u=function(a){var t=l.useContext(c),e=t;return a&&(e="function"==typeof a?a(t):r(r({},t),a)),e},m=function(a){var t=u(a.components);return l.createElement(c.Provider,{value:t},a.children)},o={inlineCode:"code",wrapper:function(a){var t=a.children;return l.createElement(l.Fragment,{},t)}},y=l.forwardRef((function(a,t){var e=a.components,n=a.mdxType,s=a.originalType,c=a.parentName,m=i(a,["components","mdxType","originalType","parentName"]),y=u(e),g=n,p=y["".concat(c,".").concat(g)]||y[g]||o[g]||s;return e?l.createElement(p,r(r({ref:t},m),{},{components:e})):l.createElement(p,r({ref:t},m))}));function g(a,t){var e=arguments,n=t&&t.mdxType;if("string"==typeof a||n){var s=e.length,r=new Array(s);r[0]=y;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=a,i.mdxType="string"==typeof a?a:n,r[1]=i;for(var u=2;u<s;u++)r[u]=e[u];return l.createElement.apply(null,r)}return l.createElement.apply(null,e)}y.displayName="MDXCreateElement"},22599:(a,t,e)=>{e.r(t),e.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>o,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var l=e(87462),n=(e(67294),e(3905));const s={title:"module lang::rascal::tests::library::analysis::statistics::RangeUtils"},r=void 0,i={unversionedId:"Library/lang/rascal/tests/library/analysis/statistics/RangeUtils",id:"Library/lang/rascal/tests/library/analysis/statistics/RangeUtils",title:"module lang::rascal::tests::library::analysis::statistics::RangeUtils",description:"Usage",source:"@site/docs/Library/lang/rascal/tests/library/analysis/statistics/RangeUtils.md",sourceDirName:"Library/lang/rascal/tests/library/analysis/statistics",slug:"/Library/lang/rascal/tests/library/analysis/statistics/RangeUtils",permalink:"/docs/Library/lang/rascal/tests/library/analysis/statistics/RangeUtils",draft:!1,tags:[],version:"current",frontMatter:{title:"module lang::rascal::tests::library::analysis::statistics::RangeUtils"},sidebar:"tutorialSidebar",previous:{title:"module lang::rascal::tests::library::analysis::statistics::DescriptiveTests",permalink:"/docs/Library/lang/rascal/tests/library/analysis/statistics/DescriptiveTests"},next:{title:"lang::rascal::tests::library::lang",permalink:"/docs/Library/lang/rascal/tests/library/lang/"}},c={},u=[{value:"Usage",id:"usage",level:4},{value:"function abs",id:"lang-rascal-tests-library-analysis-statistics-RangeUtils-abs",level:2},{value:"function assureRange",id:"lang-rascal-tests-library-analysis-statistics-RangeUtils-assureRange",level:2},{value:"function makeSmallerThanInt",id:"lang-rascal-tests-library-analysis-statistics-RangeUtils-makeSmallerThanInt",level:2},{value:"function makeSmallerThanReal",id:"lang-rascal-tests-library-analysis-statistics-RangeUtils-makeSmallerThanReal",level:2},{value:"function makeSmallerThanRat",id:"lang-rascal-tests-library-analysis-statistics-RangeUtils-makeSmallerThanRat",level:2},{value:"function makeSmallerThan",id:"lang-rascal-tests-library-analysis-statistics-RangeUtils-makeSmallerThan",level:2}],m={toc:u};function o(a){let{components:t,...e}=a;return(0,n.kt)("wrapper",(0,l.Z)({},m,e,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h4",{id:"usage"},"Usage"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"import lang::rascal::tests::library::analysis::statistics::RangeUtils;")),(0,n.kt)("h2",{id:"lang-rascal-tests-library-analysis-statistics-RangeUtils-abs"},"function abs"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"list[&T <: num] abs(list[&T <: num] nums)"))),(0,n.kt)("h2",{id:"lang-rascal-tests-library-analysis-statistics-RangeUtils-assureRange"},"function assureRange"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"(&T<:num) assureRange(&T <: num n, num low, num high)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"list[&T <: num] assureRange(list[&T <: num] nums, num low, num high)"))),(0,n.kt)("h2",{id:"lang-rascal-tests-library-analysis-statistics-RangeUtils-makeSmallerThanInt"},"function makeSmallerThanInt"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"int makeSmallerThanInt(int n, int limit)"))),(0,n.kt)("h2",{id:"lang-rascal-tests-library-analysis-statistics-RangeUtils-makeSmallerThanReal"},"function makeSmallerThanReal"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"real makeSmallerThanReal(real n, int limit)"))),(0,n.kt)("h2",{id:"lang-rascal-tests-library-analysis-statistics-RangeUtils-makeSmallerThanRat"},"function makeSmallerThanRat"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"rat makeSmallerThanRat(rat n, int limit)"))),(0,n.kt)("h2",{id:"lang-rascal-tests-library-analysis-statistics-RangeUtils-makeSmallerThan"},"function makeSmallerThan"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"&T <: num makeSmallerThan(&T <: num n, int limit)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"list[&T <: num] makeSmallerThan(list[&T <: num] nums, int limit)"))))}o.isMDXComponent=!0}}]);