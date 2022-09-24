"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[71307],{3905:(e,t,s)=>{s.d(t,{Zo:()=>u,kt:()=>m});var i=s(67294);function a(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function r(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,i)}return s}function n(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?r(Object(s),!0).forEach((function(t){a(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):r(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function l(e,t){if(null==e)return{};var s,i,a=function(e,t){if(null==e)return{};var s,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)s=r[i],t.indexOf(s)>=0||(a[s]=e[s]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)s=r[i],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(a[s]=e[s])}return a}var c=i.createContext({}),o=function(e){var t=i.useContext(c),s=t;return e&&(s="function"==typeof e?e(t):n(n({},t),e)),s},u=function(e){var t=o(e.components);return i.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},y=i.forwardRef((function(e,t){var s=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),y=o(s),m=a,v=y["".concat(c,".").concat(m)]||y[m]||p[m]||r;return s?i.createElement(v,n(n({ref:t},u),{},{components:s})):i.createElement(v,n({ref:t},u))}));function m(e,t){var s=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=s.length,n=new Array(r);n[0]=y;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,n[1]=l;for(var o=2;o<r;o++)n[o]=s[o];return i.createElement.apply(null,n)}return i.createElement.apply(null,s)}y.displayName="MDXCreateElement"},76091:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var i=s(87462),a=(s(67294),s(3905));const r={title:"module lang::rascal::tests::library::analysis::statistics::DescriptiveTests"},n=void 0,l={unversionedId:"Library/lang/rascal/tests/library/analysis/statistics/DescriptiveTests",id:"Library/lang/rascal/tests/library/analysis/statistics/DescriptiveTests",title:"module lang::rascal::tests::library::analysis::statistics::DescriptiveTests",description:"Usage",source:"@site/docs/Library/lang/rascal/tests/library/analysis/statistics/DescriptiveTests.md",sourceDirName:"Library/lang/rascal/tests/library/analysis/statistics",slug:"/Library/lang/rascal/tests/library/analysis/statistics/DescriptiveTests",permalink:"/docs/Library/lang/rascal/tests/library/analysis/statistics/DescriptiveTests",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Library/lang/rascal/tests/library/analysis/statistics/DescriptiveTests.md",tags:[],version:"current",frontMatter:{title:"module lang::rascal::tests::library::analysis::statistics::DescriptiveTests"},sidebar:"tutorialSidebar",previous:{title:"lang::rascal::tests::library::analysis::statistics",permalink:"/docs/Library/lang/rascal/tests/library/analysis/statistics/"},next:{title:"module lang::rascal::tests::library::analysis::statistics::RangeUtils",permalink:"/docs/Library/lang/rascal/tests/library/analysis/statistics/RangeUtils"}},c={},o=[{value:"Usage",id:"usage",level:4},{value:"function eq",id:"lang-rascal-tests-library-analysis-statistics-DescriptiveTests-eq",level:2},{value:"function leq",id:"lang-rascal-tests-library-analysis-statistics-DescriptiveTests-leq",level:2},{value:"function geometricLessThanArithmeticMean",id:"lang-rascal-tests-library-analysis-statistics-DescriptiveTests-geometricLessThanArithmeticMean",level:2},{value:"function meanTimesSizeEqualsSum",id:"lang-rascal-tests-library-analysis-statistics-DescriptiveTests-meanTimesSizeEqualsSum",level:2},{value:"function percentileRelation",id:"lang-rascal-tests-library-analysis-statistics-DescriptiveTests-percentileRelation",level:2},{value:"function varianceIsPositive",id:"lang-rascal-tests-library-analysis-statistics-DescriptiveTests-varianceIsPositive",level:2},{value:"function kurtoiseNeverBelowZero",id:"lang-rascal-tests-library-analysis-statistics-DescriptiveTests-kurtoiseNeverBelowZero",level:2},{value:"function standardDeviationIsPositive",id:"lang-rascal-tests-library-analysis-statistics-DescriptiveTests-standardDeviationIsPositive",level:2}],u={toc:o};function p(e){let{components:t,...s}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"usage"},"Usage"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"import lang::rascal::tests::library::analysis::statistics::DescriptiveTests;")),(0,a.kt)("h2",{id:"lang-rascal-tests-library-analysis-statistics-DescriptiveTests-eq"},"function eq"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"bool eq(num a, num b)"))),(0,a.kt)("h2",{id:"lang-rascal-tests-library-analysis-statistics-DescriptiveTests-leq"},"function leq"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"bool leq(num a, num b)"))),(0,a.kt)("h2",{id:"lang-rascal-tests-library-analysis-statistics-DescriptiveTests-geometricLessThanArithmeticMean"},"function geometricLessThanArithmeticMean"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"test bool geometricLessThanArithmeticMean(list[num] nums)"))),(0,a.kt)("h2",{id:"lang-rascal-tests-library-analysis-statistics-DescriptiveTests-meanTimesSizeEqualsSum"},"function meanTimesSizeEqualsSum"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"test bool meanTimesSizeEqualsSum(list[num] nums)"))),(0,a.kt)("h2",{id:"lang-rascal-tests-library-analysis-statistics-DescriptiveTests-percentileRelation"},"function percentileRelation"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"test bool percentileRelation(list[num] nums, int a, int b)"))),(0,a.kt)("h2",{id:"lang-rascal-tests-library-analysis-statistics-DescriptiveTests-varianceIsPositive"},"function varianceIsPositive"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"test bool varianceIsPositive(list[num] nums)"))),(0,a.kt)("h2",{id:"lang-rascal-tests-library-analysis-statistics-DescriptiveTests-kurtoiseNeverBelowZero"},"function kurtoiseNeverBelowZero"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"test bool kurtoiseNeverBelowZero(list[num] nums)"))),(0,a.kt)("h2",{id:"lang-rascal-tests-library-analysis-statistics-DescriptiveTests-standardDeviationIsPositive"},"function standardDeviationIsPositive"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"test bool standardDeviationIsPositive(list[num] nums)"))))}p.isMDXComponent=!0}}]);