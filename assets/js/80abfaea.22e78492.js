"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[10389],{3905:(e,t,a)=>{a.d(t,{Zo:()=>o,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),p=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},o=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||l;return a?n.createElement(h,i(i({ref:t},o),{},{components:a})):n.createElement(h,i({ref:t},o))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9197:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const l={title:"List Pattern",keywords:["[","]"]},i=void 0,s={unversionedId:"Rascal/Patterns/List/index",id:"Rascal/Patterns/List/index",title:"List Pattern",description:"Synopsis",source:"@site/docs/Rascal/Patterns/List/index.md",sourceDirName:"Rascal/Patterns/List",slug:"/Rascal/Patterns/List/",permalink:"/docs/Rascal/Patterns/List/",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Rascal/Patterns/List/index.md",tags:[],version:"current",frontMatter:{title:"List Pattern",keywords:["[","]"]},sidebar:"tutorialSidebar",previous:{title:"Labelled Pattern",permalink:"/docs/Rascal/Patterns/Labelled/"},next:{title:"Literal Pattern",permalink:"/docs/Rascal/Patterns/Literal/"}},c={},p=[{value:"Synopsis",id:"synopsis",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4}],o={toc:p};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h4",{id:"synopsis"},"Synopsis"),(0,r.kt)("p",null,"List in abstract pattern."),(0,r.kt)("h4",{id:"description"},"Description"),(0,r.kt)("p",null,"A list pattern matches a list value (the subject), provided that ",(0,r.kt)("em",{parentName:"p"},"Pat"),(0,r.kt)("sub",null,"1"),", ",(0,r.kt)("em",{parentName:"p"},"Pat"),(0,r.kt)("sub",null,"2"),", ..., ",(0,r.kt)("em",{parentName:"p"},"Pat"),"~n~ match the elements of that list in order.\nSpecial cases exist when one of the patterns ",(0,r.kt)("em",{parentName:"p"},"Pat"),"~i~ is"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"a ",(0,r.kt)("a",{parentName:"p",href:"../../../Rascal/Patterns/Variable"},"Variable")," with a type that is identical to the element type of the subject list: the variable is matched with the value at the corresponding position in the subject list.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"a ",(0,r.kt)("a",{parentName:"p",href:"../../../Rascal/Patterns/MultiVariable"},"MultiVariable"),", with an optional element type that is identical to the element type of the subject list: list matching is applied and the variable can match an arbitrary number of elements of the subject list.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"a ",(0,r.kt)("a",{parentName:"p",href:"../../../Rascal/Patterns/Variable"},"Variable"),", where the variable has been declared with a list type, but not initialized, outside the pattern: list matching is applied and the variable can match an arbitrary number of elements of the subject list.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"a ",(0,r.kt)("a",{parentName:"p",href:"../../../Rascal/Patterns/Variable"},"Variable"),", where the variable has been declared with a type equal to the element type of the subject, but not initialized, outside the pattern: the variable is matched with the value at the corresponding position in the subject list."))),(0,r.kt)("h4",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>import IO;\nok\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A single variable")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>if([10, int N, 30, 40, 50] := [10, 20, 30, 40, 50])\n>>>>>>>   println("Match succeeded, N = <N>");\n   println("Match succeeded, N = <N>");\nMatch succeeded, N = 20\nok\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"An untyped multi-variable:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>if([10, *L, 50] := [10, 20, 30, 40, 50])\n>>>>>>>   println("Match succeeded, L = <L>");\n   println("Match succeeded, L = <L>");\nMatch succeeded, L = [20,30,40]\nok\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A typed multi-variable:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>if([10, *int L, 50] := [10, 20, 30, 40, 50])\n>>>>>>>   println("Match succeeded, L = <L>");\n   println("Match succeeded, L = <L>");\nMatch succeeded, L = [20,30,40]\nok\n')),(0,r.kt)("p",null,"A list pattern may also be ",(0,r.kt)("strong",{parentName:"p"},"non-linear"),", i.e., it may contain uses of variables that were bound earlier in the pattern\n(here, the second occurence of ",(0,r.kt)("inlineCode",{parentName:"p"},"L"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>if([10, *L, 40, *L, 50] := [10, 20, 30, 40, 20, 30, 50])\n>>>>>>>   println("Match succeeded, L = <L>");\n   println("Match succeeded, L = <L>");\nMatch succeeded, L = [20,30]\nok\n')),(0,r.kt)("p",null,"Here we see an example, where all pairs of equal elements in a list are printed:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>for([*L1, int N, *L2, N, *L3] := [ 5, 10, 20, 30, 40, 30, 15, 20, 10])\n>>>>>>>    println("N = <N>");\n    println("N = <N>");\nN = 10\nN = 20\nN = 30\nlist[void]: []\n')),(0,r.kt)("p",null,"Here we print all ways in which a given list can be partitioned in two lists:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>for([*L1, *L2] := [10, 20, 30, 40, 50]) \n>>>>>>>    println("<L1> and <L2>");\n    println("<L1> and <L2>");\n[] and [10,20,30,40,50]\n[10] and [20,30,40,50]\n[10,20] and [30,40,50]\n[10,20,30] and [40,50]\n[10,20,30,40] and [50]\n[10,20,30,40,50] and []\nlist[void]: []\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Already declared list variable:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>list[int] L;\nok\nrascal>if([10, L, 50] := [10, 20, 30, 40, 50])\n>>>>>>>   println("Match succeeded, L = <L>");\n   println("Match succeeded, L = <L>");\nMatch succeeded, L = [20,30,40]\nok\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Already declared element variable:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>int N;\nok\nrascal>if([10, N, 30, 40, 50] := [10, 20, 30, 40, 50])\n>>>>>>>   println("Match succeeded, N = <N>");\n   println("Match succeeded, N = <N>");\nMatch succeeded, N = 20\nok\n')))}u.isMDXComponent=!0}}]);