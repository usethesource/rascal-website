"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[48836],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),m=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=m(n),d=r,g=c["".concat(o,".").concat(d)]||c[d]||u[d]||i;return n?a.createElement(g,l(l({ref:t},p),{},{components:n})):a.createElement(g,l({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var m=2;m<i;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},70652:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var a=n(87462),r=(n(67294),n(3905));const i={title:"module analysis::text::stemming::Snowball"},l=void 0,s={unversionedId:"Library/analysis/text/stemming/Snowball",id:"Library/analysis/text/stemming/Snowball",title:"module analysis::text::stemming::Snowball",description:"Usage",source:"@site/docs/Library/analysis/text/stemming/Snowball.md",sourceDirName:"Library/analysis/text/stemming",slug:"/Library/analysis/text/stemming/Snowball",permalink:"/docs/Library/analysis/text/stemming/Snowball",draft:!1,tags:[],version:"current",frontMatter:{title:"module analysis::text::stemming::Snowball"},sidebar:"tutorialSidebar",previous:{title:"analysis::text::stemming",permalink:"/docs/Library/analysis/text/stemming/"},next:{title:"demo",permalink:"/docs/Library/demo/"}},o={},m=[{value:"Usage",id:"usage",level:4},{value:"Synopsis",id:"synopsis",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4},{value:"data Language",id:"analysis-text-stemming-Snowball-Language",level:2},{value:"function stem",id:"analysis-text-stemming-Snowball-stem",level:2},{value:"Synopsis",id:"synopsis-1",level:4},{value:"Description",id:"description-1",level:4},{value:"function kraaijPohlmannStemmer",id:"analysis-text-stemming-Snowball-kraaijPohlmannStemmer",level:2},{value:"Synopsis",id:"synopsis-2",level:4},{value:"Description",id:"description-2",level:4},{value:"function porterStemmer",id:"analysis-text-stemming-Snowball-porterStemmer",level:2},{value:"Synopsis",id:"synopsis-3",level:4},{value:"Description",id:"description-3",level:4},{value:"function lovinsStemmer",id:"analysis-text-stemming-Snowball-lovinsStemmer",level:2},{value:"Synopsis",id:"synopsis-4",level:4},{value:"Description",id:"description-4",level:4}],p={toc:m};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h4",{id:"usage"},"Usage"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"import analysis::text::stemming::Snowball;")),(0,r.kt)("h4",{id:"synopsis"},"Synopsis"),(0,r.kt)("p",null,"Provides the library of stemmers written in the Snowball languages, and compiled to Java, which are\ndistributed with Lucene as a Rascal module."),(0,r.kt)("h4",{id:"description"},"Description"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"http://snowball.tartarus.org%5Bthe"},"http://snowball.tartarus.org[the")," Snowball homepage] for more informations"),(0,r.kt)("h4",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>import analysis::text::stemming::Snowball;\nok\nrascal>stem("bikes")\nstr: "bike"\n')),(0,r.kt)("h2",{id:"analysis-text-stemming-Snowball-Language"},"data Language"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal"},"data Language  \n     = armenian()\n     | basque()\n     | catalan()\n     | danish()\n     | dutch()\n     | english()\n     | finnish()\n     | french()\n     | german()\n     | german2()\n     | hungarian()\n     | irish()\n     | italian()\n     | lithuanian()\n     | norwegian()\n     | portugese()\n     | romanian()\n     | russian()\n     | spanish()\n     | swedish()\n     | turkish()\n     ;\n")),(0,r.kt)("h2",{id:"analysis-text-stemming-Snowball-stem"},"function stem"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"str stem(str word, Language lang=english())"))),(0,r.kt)("h4",{id:"synopsis-1"},"Synopsis"),(0,r.kt)("p",null,"Stemming algorithms from the Tartarus Snowball (",(0,r.kt)("a",{parentName:"p",href:"http://snowball.tartarus.org%5Bthe"},"http://snowball.tartarus.org[the")," Snowball homepage] for different languages. "),(0,r.kt)("h4",{id:"description-1"},"Description"),(0,r.kt)("p",null,"This library wrapped into a single function supports Armenian, Basque, Catalan, Danish,\nDutch, English, Finnish, French, German, Hungarian, Irish, Italian, Lithuanian, Norwegian, Portugese,\nRomanian, Russian, Spanish, Swedish and Turkish."),(0,r.kt)("h2",{id:"analysis-text-stemming-Snowball-kraaijPohlmannStemmer"},"function kraaijPohlmannStemmer"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"str kraaijPohlmannStemmer(str word)"))),(0,r.kt)("h4",{id:"synopsis-2"},"Synopsis"),(0,r.kt)("p",null,"Kraaij-Pohlmann is a well-known stemmer for the Dutch language. "),(0,r.kt)("h4",{id:"description-2"},"Description"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"http://snowball.tartarus.org/algorithms/kraaij_pohlmann/stemmer.html"},"http://snowball.tartarus.org/algorithms/kraaij_pohlmann/stemmer.html")),(0,r.kt)("h2",{id:"analysis-text-stemming-Snowball-porterStemmer"},"function porterStemmer"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"str porterStemmer(str word)"))),(0,r.kt)("h4",{id:"synopsis-3"},"Synopsis"),(0,r.kt)("p",null,'Porter stemming is a "standard" stemming algorithm for English of sorts.'),(0,r.kt)("h4",{id:"description-3"},"Description"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"http://snowball.tartarus.org/algorithms/porter/stemmer.html"},"http://snowball.tartarus.org/algorithms/porter/stemmer.html")," for more information. "),(0,r.kt)("h2",{id:"analysis-text-stemming-Snowball-lovinsStemmer"},"function lovinsStemmer"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"str lovinsStemmer(str word)"))),(0,r.kt)("h4",{id:"synopsis-4"},"Synopsis"),(0,r.kt)("p",null,"Lovins designed the first stemmer according to the Tartarus website."),(0,r.kt)("h4",{id:"description-4"},"Description"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"http://snowball.tartarus.org/algorithms/lovins/stemmer.html"},"http://snowball.tartarus.org/algorithms/lovins/stemmer.html")))}u.isMDXComponent=!0}}]);