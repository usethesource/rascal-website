"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[59203],{3905:(e,t,n)=>{n.d(t,{Zo:()=>o,kt:()=>k});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},o=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),m=d(n),k=l,c=m["".concat(p,".").concat(k)]||m[k]||u[k]||r;return n?a.createElement(c,i(i({ref:t},o),{},{components:n})):a.createElement(c,i({ref:t},o))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:l,i[1]=s;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},82776:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var a=n(87462),l=(n(67294),n(3905));const r={title:"String Slice",keywords:["[","..","]"]},i=void 0,s={unversionedId:"Rascal/Expressions/Values/String/Slice/index",id:"Rascal/Expressions/Values/String/Slice/index",title:"String Slice",description:"Synopsis",source:"@site/docs/Rascal/Expressions/Values/String/Slice/index.md",sourceDirName:"Rascal/Expressions/Values/String/Slice",slug:"/Rascal/Expressions/Values/String/Slice/",permalink:"/docs/Rascal/Expressions/Values/String/Slice/",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Rascal/Expressions/Values/String/Slice/index.md",tags:[],version:"current",frontMatter:{title:"String Slice",keywords:["[","..","]"]},sidebar:"tutorialSidebar",previous:{title:"String NotEqual",permalink:"/docs/Rascal/Expressions/Values/String/NotEqual/"},next:{title:"String Subscription",permalink:"/docs/Rascal/Expressions/Values/String/Subscription/"}},p={},d=[{value:"Synopsis",id:"synopsis",level:4},{value:"Syntax",id:"syntax",level:4},{value:"Types",id:"types",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4}],o={toc:d};function u(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h4",{id:"synopsis"},"Synopsis"),(0,l.kt)("p",null,"Retrieve a slice of a string."),(0,l.kt)("h4",{id:"syntax"},"Syntax"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Exp<sub>1</sub> [ Exp<sub>2</sub> .. Exp<sub>4</sub>]")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Exp<sub>1</sub> [ Exp<sub>2</sub> , Exp3 .. Exp<sub>4</sub>]"))),(0,l.kt)("p",null,"where ",(0,l.kt)("inlineCode",{parentName:"p"},"Exp<sub>2</sub>")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"Exp<sub>4</sub>")," are optional."),(0,l.kt)("h4",{id:"types"},"Types"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"th"},"Exp<sub>1</sub>")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"th"},"Exp<sub>2</sub>")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"th"},"Exp<sub>3</sub>")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"th"},"Exp<sub>4</sub>")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"th"},"Exp<sub>1</sub> [ Exp<sub>2</sub> .. Exp<sub>4</sub> ]"),"   or  ",(0,l.kt)("inlineCode",{parentName:"th"},"Exp<sub>1</sub> [ Exp<sub>2</sub> , Exp<sub>3</sub> .. Exp<sub>4</sub>]")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"str")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"int")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"int")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"int")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"str"))))),(0,l.kt)("h4",{id:"description"},"Description"),(0,l.kt)("p",null,"A String slice is similar to a list ",(0,l.kt)("a",{parentName:"p",href:"../../../../../Rascal/Expressions/Values/List/Slice"},"Slice")," and uses the integer values of ",(0,l.kt)("em",{parentName:"p"},"Exp"),(0,l.kt)("sub",null,"2")," and ",(0,l.kt)("em",{parentName:"p"},"Exp"),(0,l.kt)("sub",null,"4")," to determine the ",(0,l.kt)("inlineCode",{parentName:"p"},"begin")," (",(0,l.kt)("em",{parentName:"p"},"inclusive"),") and ",(0,l.kt)("inlineCode",{parentName:"p"},"end")," (",(0,l.kt)("em",{parentName:"p"},"exclusive"),")\nof a slice from the string value ",(0,l.kt)("em",{parentName:"p"},"S")," of ",(0,l.kt)("em",{parentName:"p"},"Exp"),(0,l.kt)("sub",null,"1"),". Negative indices count from the end of the string backwards.\nUsing the second form, an extra index ",(0,l.kt)("em",{parentName:"p"},"Exp"),(0,l.kt)("sub",null,"3")," is given that determines the\nindex of the second element in the slice and establishes the ",(0,l.kt)("inlineCode",{parentName:"p"},"step")," between\nsuccessive elements in the slice. The default ",(0,l.kt)("inlineCode",{parentName:"p"},"step")," is 1.\nIf ",(0,l.kt)("inlineCode",{parentName:"p"},"end")," is smaller than ",(0,l.kt)("inlineCode",{parentName:"p"},"begin"),", the slice is constructed backwards."),(0,l.kt)("p",null,"Let ",(0,l.kt)("inlineCode",{parentName:"p"},"Len")," be the length of ",(0,l.kt)("em",{parentName:"p"},"S")," and let ",(0,l.kt)("em",{parentName:"p"},"N"),(0,l.kt)("sub",null,"2"),", ",(0,l.kt)("em",{parentName:"p"},"N"),(0,l.kt)("sub",null,"3")," and ",(0,l.kt)("em",{parentName:"p"},"N"),(0,l.kt)("sub",null,"4")," be the respective values of the expressions\n",(0,l.kt)("em",{parentName:"p"},"Exp"),(0,l.kt)("sub",null,"2"),", ",(0,l.kt)("em",{parentName:"p"},"Exp"),(0,l.kt)("sub",null,"2")," and ",(0,l.kt)("em",{parentName:"p"},"Exp"),(0,l.kt)("sub",null,"2")," when they are present."),(0,l.kt)("p",null,"The slice parameters ",(0,l.kt)("inlineCode",{parentName:"p"},"begin"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"end"),", and ",(0,l.kt)("inlineCode",{parentName:"p"},"step")," are determined as follows:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"Exp",(0,l.kt)("sub",null,"2")),":\n",(0,l.kt)("strong",{parentName:"li"},"  If ",(0,l.kt)("em",{parentName:"strong"},"Exp",(0,l.kt)("sub",null,"2"))," is absent, then ",(0,l.kt)("inlineCode",{parentName:"strong"},"begin = 0"),".\n"),"  Otherwise, if ",(0,l.kt)("em",{parentName:"li"},"N",(0,l.kt)("sub",null,"2"))," >= 0 then ",(0,l.kt)("inlineCode",{parentName:"li"},"begin = N<sub>2</sub>")," else ",(0,l.kt)("inlineCode",{parentName:"li"},"begin = N<sub>2</sub> + Len"),". "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"Exp",(0,l.kt)("sub",null,"4")),":\n",(0,l.kt)("strong",{parentName:"li"},"  If ",(0,l.kt)("em",{parentName:"strong"},"Exp",(0,l.kt)("sub",null,"4"))," is absent, then ",(0,l.kt)("inlineCode",{parentName:"strong"},"end = Len"),".\n"),"  Otherwise, if ",(0,l.kt)("em",{parentName:"li"},"N",(0,l.kt)("sub",null,"4"))," >= 0, then ",(0,l.kt)("inlineCode",{parentName:"li"},"end = N<sub>4</sub>")," else ",(0,l.kt)("inlineCode",{parentName:"li"},"end = N<sub>4</sub> + Len"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"Exp",(0,l.kt)("sub",null,"3")),":\n",(0,l.kt)("strong",{parentName:"li"},"  If ",(0,l.kt)("em",{parentName:"strong"},"Exp",(0,l.kt)("sub",null,"3"))," is absent, then if ",(0,l.kt)("inlineCode",{parentName:"strong"},"begin < end")," then ",(0,l.kt)("inlineCode",{parentName:"strong"},"step = 1")," else ",(0,l.kt)("inlineCode",{parentName:"strong"},"step = -1"),".\n"),"  Otherwise, if ",(0,l.kt)("inlineCode",{parentName:"li"},"begin < end"),", then ",(0,l.kt)("inlineCode",{parentName:"li"},"step = N<sub>3</sub> - begin")," else ",(0,l.kt)("inlineCode",{parentName:"li"},"step = begin - N<sub>3</sub>"),".")),(0,l.kt)("p",null,"Now, the constraints ",(0,l.kt)("inlineCode",{parentName:"p"},"0 <= begin < Len")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"0 < end < Len")," should hold,\notherwise the exception ",(0,l.kt)("inlineCode",{parentName:"p"},"IndexOutOfBounds")," is thrown."),(0,l.kt)("p",null,"The slice consists of the elements ",(0,l.kt)("inlineCode",{parentName:"p"},"S[begin]"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"S[begin+step]"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"S[end - step]"),".\nWhen ",(0,l.kt)("inlineCode",{parentName:"p"},"begin >= end"),", the elements are listed in reverse order."),(0,l.kt)("h4",{id:"examples"},"Examples"),(0,l.kt)("p",null,"Consider the string ",(0,l.kt)("inlineCode",{parentName:"p"},'S = "abcdefghi";')," (with size 9) as running example."),(0,l.kt)("p",null,"Here is a view on ",(0,l.kt)("em",{parentName:"p"},"L")," that will help to correlate positive and negative indices:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"th"},"i")),(0,l.kt)("th",{parentName:"tr",align:null},"0"),(0,l.kt)("th",{parentName:"tr",align:null},"1"),(0,l.kt)("th",{parentName:"tr",align:null},"2"),(0,l.kt)("th",{parentName:"tr",align:null},"3"),(0,l.kt)("th",{parentName:"tr",align:null},"4"),(0,l.kt)("th",{parentName:"tr",align:null},"5"),(0,l.kt)("th",{parentName:"tr",align:null},"6"),(0,l.kt)("th",{parentName:"tr",align:null},"7"),(0,l.kt)("th",{parentName:"tr",align:null},"8"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"S[i]")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"a"')),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"b"')),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"c"')),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"d"')),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"e"')),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"f"')),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"g"')),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"h"')),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"i"'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-i")),(0,l.kt)("td",{parentName:"tr",align:null},"-9"),(0,l.kt)("td",{parentName:"tr",align:null},"-8"),(0,l.kt)("td",{parentName:"tr",align:null},"-7"),(0,l.kt)("td",{parentName:"tr",align:null},"-6"),(0,l.kt)("td",{parentName:"tr",align:null},"-5"),(0,l.kt)("td",{parentName:"tr",align:null},"-4"),(0,l.kt)("td",{parentName:"tr",align:null},"-3"),(0,l.kt)("td",{parentName:"tr",align:null},"-2"),(0,l.kt)("td",{parentName:"tr",align:null},"-1")))),(0,l.kt)("p",null,"Some common use cases (with ",(0,l.kt)("inlineCode",{parentName:"p"},"begin")," <= ",(0,l.kt)("inlineCode",{parentName:"p"},"end"),"):"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Slice"),(0,l.kt)("th",{parentName:"tr",align:null},"Means:"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"S[begin..end]")),(0,l.kt)("td",{parentName:"tr",align:null},"characters with indices ",(0,l.kt)("inlineCode",{parentName:"td"},"begin")," through ",(0,l.kt)("inlineCode",{parentName:"td"},"end-1"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"S[begin..]")),(0,l.kt)("td",{parentName:"tr",align:null},"characters with indices ",(0,l.kt)("inlineCode",{parentName:"td"},"begin")," through the rest of the string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"S[..end]")),(0,l.kt)("td",{parentName:"tr",align:null},"characters with indices from the beginning through ",(0,l.kt)("inlineCode",{parentName:"td"},"end-1"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"S[..]")),(0,l.kt)("td",{parentName:"tr",align:null},"the whole list")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"S[-1]")),(0,l.kt)("td",{parentName:"tr",align:null},"last element of the string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"S[-2..]")),(0,l.kt)("td",{parentName:"tr",align:null},"the last two characters of the string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"S[..-2]")),(0,l.kt)("td",{parentName:"tr",align:null},"all characters except the last two.")))),(0,l.kt)("p",null,"Let's put this into practice now."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>S = "abcdefghi";\nstr: "abcdefghi"\n')),(0,l.kt)("p",null,"Slices with begin < end"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>S[1..3];\nstr: "bc"\nrascal>S[1..];       // empty end => end of string\nstr: "bcdefghi"\nrascal>S[..3];       // empty begin => first character of string\nstr: "abc"\nrascal>S[..];        // both empty => whole string\nstr: "abcdefghi"\n')),(0,l.kt)("p",null,"Slices with  begin >= end"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>S[3..1];      // slice contains characters with indices 3 and 2 (in that order)\nstr: "dc"\nrascal>S[3..3];      // empty slice when begin == end\nstr: ""\n')),(0,l.kt)("p",null,"Slices with negative begin or end:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>S[2..-2];     // equivalent to S[2..7]\nstr: "cdefg"\nrascal>S[2..7];\nstr: "cdefg"\nrascal>S[-4..-2];    // equivalent to S[5..7]\nstr: "fg"\nrascal>S[5..7];\nstr: "fg"\n')),(0,l.kt)("p",null,"Slices with an explicit second index:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>S[1,3..6];\nstr: "bdf"\nrascal>S[5,3..];\nstr: "fdb"\n')),(0,l.kt)("p",null,"Explore error cases:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>S[..10];\nstr: "abcdefghi"\nrascal>S[1..20];\nstr: "bcdefghi"\n')))}u.isMDXComponent=!0}}]);