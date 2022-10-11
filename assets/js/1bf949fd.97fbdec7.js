"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[59203],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),o=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=o(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),k=o(n),c=r,N=k["".concat(s,".").concat(c)]||k[c]||m[c]||l;return n?a.createElement(N,i(i({ref:t},d),{},{components:n})):a.createElement(N,i({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=k;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},82776:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var a=n(87462),r=(n(67294),n(3905));const l={title:"String Slice",keywords:["[","..","]"]},i=void 0,p={unversionedId:"Rascal/Expressions/Values/String/Slice/index",id:"Rascal/Expressions/Values/String/Slice/index",title:"String Slice",description:"Synopsis",source:"@site/docs/Rascal/Expressions/Values/String/Slice/index.md",sourceDirName:"Rascal/Expressions/Values/String/Slice",slug:"/Rascal/Expressions/Values/String/Slice/",permalink:"/docs/Rascal/Expressions/Values/String/Slice/",draft:!1,tags:[],version:"current",frontMatter:{title:"String Slice",keywords:["[","..","]"]},sidebar:"tutorialSidebar",previous:{title:"String NotEqual",permalink:"/docs/Rascal/Expressions/Values/String/NotEqual/"},next:{title:"String Subscription",permalink:"/docs/Rascal/Expressions/Values/String/Subscription/"}},s={},o=[{value:"Synopsis",id:"synopsis",level:4},{value:"Syntax",id:"syntax",level:4},{value:"Types",id:"types",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4}],d={toc:o};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h4",{id:"synopsis"},"Synopsis"),(0,r.kt)("p",null,"Retrieve a slice of a string."),(0,r.kt)("h4",{id:"syntax"},"Syntax"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Exp\u2081 [ Exp\u2082 .. Exp\u2084]")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Exp\u2081 [ Exp\u2082 , Exp3 .. Exp\u2084]"))),(0,r.kt)("p",null,"where ",(0,r.kt)("inlineCode",{parentName:"p"},"Exp\u2082")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Exp\u2084")," are optional."),(0,r.kt)("h4",{id:"types"},"Types"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"Exp\u2081")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"Exp\u2082")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"Exp\u2083")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"Exp\u2084")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"Exp\u2081 [ Exp\u2082 .. Exp\u2084 ]"),"   or  ",(0,r.kt)("inlineCode",{parentName:"th"},"Exp\u2081 [ Exp\u2082 , Exp\u2083 .. Exp\u2084]")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"str")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"str"))))),(0,r.kt)("h4",{id:"description"},"Description"),(0,r.kt)("p",null,"A String slice is similar to a list ",(0,r.kt)("a",{parentName:"p",href:"/docs/Rascal/Expressions/Values/List/Slice/"},"Slice")," and uses the integer values of ",(0,r.kt)("em",{parentName:"p"},"Exp"),"\u2082 and ",(0,r.kt)("em",{parentName:"p"},"Exp"),"\u2084 to determine the ",(0,r.kt)("inlineCode",{parentName:"p"},"begin")," (",(0,r.kt)("em",{parentName:"p"},"inclusive"),") and ",(0,r.kt)("inlineCode",{parentName:"p"},"end")," (",(0,r.kt)("em",{parentName:"p"},"exclusive"),")\nof a slice from the string value ",(0,r.kt)("em",{parentName:"p"},"S")," of ",(0,r.kt)("em",{parentName:"p"},"Exp"),"\u2081. Negative indices count from the end of the string backwards.\nUsing the second form, an extra index ",(0,r.kt)("em",{parentName:"p"},"Exp"),"\u2083 is given that determines the\nindex of the second element in the slice and establishes the ",(0,r.kt)("inlineCode",{parentName:"p"},"step")," between\nsuccessive elements in the slice. The default ",(0,r.kt)("inlineCode",{parentName:"p"},"step")," is 1.\nIf ",(0,r.kt)("inlineCode",{parentName:"p"},"end")," is smaller than ",(0,r.kt)("inlineCode",{parentName:"p"},"begin"),", the slice is constructed backwards."),(0,r.kt)("p",null,"Let ",(0,r.kt)("inlineCode",{parentName:"p"},"Len")," be the length of ",(0,r.kt)("em",{parentName:"p"},"S")," and let ",(0,r.kt)("em",{parentName:"p"},"N"),"\u2082, ",(0,r.kt)("em",{parentName:"p"},"N"),"\u2083 and ",(0,r.kt)("em",{parentName:"p"},"N"),"\u2084 be the respective values of the expressions\n",(0,r.kt)("em",{parentName:"p"},"Exp"),"\u2082, ",(0,r.kt)("em",{parentName:"p"},"Exp"),"\u2082 and ",(0,r.kt)("em",{parentName:"p"},"Exp"),"\u2082 when they are present."),(0,r.kt)("p",null,"The slice parameters ",(0,r.kt)("inlineCode",{parentName:"p"},"begin"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"end"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"step")," are determined as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Exp\u2082"),":\n",(0,r.kt)("strong",{parentName:"li"},"  If ",(0,r.kt)("em",{parentName:"strong"},"Exp\u2082")," is absent, then ",(0,r.kt)("inlineCode",{parentName:"strong"},"begin = 0"),".\n"),"  Otherwise, if ",(0,r.kt)("em",{parentName:"li"},"N\u2082")," >= 0 then ",(0,r.kt)("inlineCode",{parentName:"li"},"begin = N\u2082")," else ",(0,r.kt)("inlineCode",{parentName:"li"},"begin = N\u2082 + Len"),". "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Exp\u2084"),":\n",(0,r.kt)("strong",{parentName:"li"},"  If ",(0,r.kt)("em",{parentName:"strong"},"Exp\u2084")," is absent, then ",(0,r.kt)("inlineCode",{parentName:"strong"},"end = Len"),".\n"),"  Otherwise, if ",(0,r.kt)("em",{parentName:"li"},"N\u2084")," >= 0, then ",(0,r.kt)("inlineCode",{parentName:"li"},"end = N\u2084")," else ",(0,r.kt)("inlineCode",{parentName:"li"},"end = N\u2084 + Len"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Exp\u2083"),":\n",(0,r.kt)("strong",{parentName:"li"},"  If ",(0,r.kt)("em",{parentName:"strong"},"Exp\u2083")," is absent, then if ",(0,r.kt)("inlineCode",{parentName:"strong"},"begin < end")," then ",(0,r.kt)("inlineCode",{parentName:"strong"},"step = 1")," else ",(0,r.kt)("inlineCode",{parentName:"strong"},"step = -1"),".\n"),"  Otherwise, if ",(0,r.kt)("inlineCode",{parentName:"li"},"begin < end"),", then ",(0,r.kt)("inlineCode",{parentName:"li"},"step = N\u2083 - begin")," else ",(0,r.kt)("inlineCode",{parentName:"li"},"step = begin - N\u2083"),".")),(0,r.kt)("p",null,"Now, the constraints ",(0,r.kt)("inlineCode",{parentName:"p"},"0 <= begin < Len")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"0 < end < Len")," should hold,\notherwise the exception ",(0,r.kt)("inlineCode",{parentName:"p"},"IndexOutOfBounds")," is thrown."),(0,r.kt)("p",null,"The slice consists of the elements ",(0,r.kt)("inlineCode",{parentName:"p"},"S[begin]"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"S[begin+step]"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"S[end - step]"),".\nWhen ",(0,r.kt)("inlineCode",{parentName:"p"},"begin >= end"),", the elements are listed in reverse order."),(0,r.kt)("h4",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Consider the string ",(0,r.kt)("inlineCode",{parentName:"p"},'S = "abcdefghi";')," (with size 9) as running example."),(0,r.kt)("p",null,"Here is a view on ",(0,r.kt)("em",{parentName:"p"},"L")," that will help to correlate positive and negative indices:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"i")),(0,r.kt)("th",{parentName:"tr",align:null},"0"),(0,r.kt)("th",{parentName:"tr",align:null},"1"),(0,r.kt)("th",{parentName:"tr",align:null},"2"),(0,r.kt)("th",{parentName:"tr",align:null},"3"),(0,r.kt)("th",{parentName:"tr",align:null},"4"),(0,r.kt)("th",{parentName:"tr",align:null},"5"),(0,r.kt)("th",{parentName:"tr",align:null},"6"),(0,r.kt)("th",{parentName:"tr",align:null},"7"),(0,r.kt)("th",{parentName:"tr",align:null},"8"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"S[i]")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"a"')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"b"')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"c"')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"d"')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"e"')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"f"')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"g"')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"h"')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"i"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-i")),(0,r.kt)("td",{parentName:"tr",align:null},"-9"),(0,r.kt)("td",{parentName:"tr",align:null},"-8"),(0,r.kt)("td",{parentName:"tr",align:null},"-7"),(0,r.kt)("td",{parentName:"tr",align:null},"-6"),(0,r.kt)("td",{parentName:"tr",align:null},"-5"),(0,r.kt)("td",{parentName:"tr",align:null},"-4"),(0,r.kt)("td",{parentName:"tr",align:null},"-3"),(0,r.kt)("td",{parentName:"tr",align:null},"-2"),(0,r.kt)("td",{parentName:"tr",align:null},"-1")))),(0,r.kt)("p",null,"Some common use cases (with ",(0,r.kt)("inlineCode",{parentName:"p"},"begin")," <= ",(0,r.kt)("inlineCode",{parentName:"p"},"end"),"):"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Slice"),(0,r.kt)("th",{parentName:"tr",align:null},"Means:"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"S[begin..end]")),(0,r.kt)("td",{parentName:"tr",align:null},"characters with indices ",(0,r.kt)("inlineCode",{parentName:"td"},"begin")," through ",(0,r.kt)("inlineCode",{parentName:"td"},"end-1"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"S[begin..]")),(0,r.kt)("td",{parentName:"tr",align:null},"characters with indices ",(0,r.kt)("inlineCode",{parentName:"td"},"begin")," through the rest of the string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"S[..end]")),(0,r.kt)("td",{parentName:"tr",align:null},"characters with indices from the beginning through ",(0,r.kt)("inlineCode",{parentName:"td"},"end-1"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"S[..]")),(0,r.kt)("td",{parentName:"tr",align:null},"the whole list")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"S[-1]")),(0,r.kt)("td",{parentName:"tr",align:null},"last element of the string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"S[-2..]")),(0,r.kt)("td",{parentName:"tr",align:null},"the last two characters of the string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"S[..-2]")),(0,r.kt)("td",{parentName:"tr",align:null},"all characters except the last two.")))),(0,r.kt)("p",null,"Let's put this into practice now."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell",metastring:",error",",error":!0},'rascal>S = "abcdefghi";\nstr: "abcdefghi"\n')),(0,r.kt)("p",null,"Slices with begin < end"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell",metastring:",continue,error",",continue,error":!0},'rascal>S[1..3];\nstr: "bc"\nrascal>S[1..];       // empty end => end of string\nstr: "bcdefghi"\nrascal>S[..3];       // empty begin => first character of string\nstr: "abc"\nrascal>S[..];        // both empty => whole string\nstr: "abcdefghi"\n')),(0,r.kt)("p",null,"Slices with  begin >= end"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell",metastring:",continue,error",",continue,error":!0},'rascal>S[3..1];      // slice contains characters with indices 3 and 2 (in that order)\nstr: "dc"\nrascal>S[3..3];      // empty slice when begin == end\nstr: ""\n')),(0,r.kt)("p",null,"Slices with negative begin or end:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell",metastring:",continue,error",",continue,error":!0},'rascal>S[2..-2];     // equivalent to S[2..7]\nstr: "cdefg"\nrascal>S[2..7];\nstr: "cdefg"\nrascal>S[-4..-2];    // equivalent to S[5..7]\nstr: "fg"\nrascal>S[5..7];\nstr: "fg"\n')),(0,r.kt)("p",null,"Slices with an explicit second index:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell",metastring:",continue,error",",continue,error":!0},'rascal>S[1,3..6];\nstr: "bdf"\nrascal>S[5,3..];\nstr: "fdb"\n')),(0,r.kt)("p",null,"Explore error cases:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell",metastring:",continue,error",",continue,error":!0},'rascal>S[..10];\nstr: "abcdefghi"\nrascal>S[1..20];\nstr: "bcdefghi"\n')))}m.isMDXComponent=!0}}]);