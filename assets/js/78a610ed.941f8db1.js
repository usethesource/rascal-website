"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[30796],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(a),c=i,f=d["".concat(s,".").concat(c)]||d[c]||m[c]||r;return a?n.createElement(f,l(l({ref:t},u),{},{components:a})):n.createElement(f,l({ref:t},u))}));function c(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},20080:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var n=a(87462),i=(a(67294),a(3905));const r={title:"Priority Declaration",keywords:[">","|"]},l=void 0,o={unversionedId:"Rascal/Declarations/SyntaxDefinition/Disambiguation/Priority/index",id:"Rascal/Declarations/SyntaxDefinition/Disambiguation/Priority/index",title:"Priority Declaration",description:"Synopsis",source:"@site/docs/Rascal/Declarations/SyntaxDefinition/Disambiguation/Priority/index.md",sourceDirName:"Rascal/Declarations/SyntaxDefinition/Disambiguation/Priority",slug:"/Rascal/Declarations/SyntaxDefinition/Disambiguation/Priority/",permalink:"/docs/Rascal/Declarations/SyntaxDefinition/Disambiguation/Priority/",draft:!1,tags:[],version:"current",frontMatter:{title:"Priority Declaration",keywords:[">","|"]},sidebar:"tutorialSidebar",previous:{title:"Precede Declaration",permalink:"/docs/Rascal/Declarations/SyntaxDefinition/Disambiguation/Precede/"},next:{title:"Reserve Declaration",permalink:"/docs/Rascal/Declarations/SyntaxDefinition/Disambiguation/Reserve/"}},s={},p=[{value:"Synopsis",id:"synopsis",level:4},{value:"Syntax",id:"syntax",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4},{value:"Benefits",id:"benefits",level:4},{value:"Pitfalls",id:"pitfalls",level:4}],u={toc:p};function m(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h4",{id:"synopsis"},"Synopsis"),(0,i.kt)("p",null,"Declare the priority of operators."),(0,i.kt)("h4",{id:"syntax"},"Syntax"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"syntax Exp = alt\u2081 > alt\u2082 > alt\u2083")," is the basic syntax for priorities."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"syntax Exp = alt\u2081 | alt\u2082 > alt\u2083 | alt\u2084"),", where the ",(0,i.kt)("inlineCode",{parentName:"li"},"|")," signifies groups of equal priority"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"syntax Exp = associativity ( _alt\u2081 | ... ) > _alt\u2082"),", where an associativity group denotes a group of equal priority")),(0,i.kt)("h4",{id:"description"},"Description"),(0,i.kt)("p",null,"Priority declarations define a partial ordering between the productions ",(0,i.kt)("em",{parentName:"p"},"within a single non-terminal"),". The feature is specifically designed to fit with the semantics of expression sub-languages embedded in programming languages. There exist other mechanisms for ",(0,i.kt)("a",{parentName:"p",href:"/docs/Rascal/Declarations/SyntaxDefinition/Disambiguation/"},"Disambiguation"),", if ",(0,i.kt)("a",{parentName:"p",href:"/docs/Rascal/Declarations/SyntaxDefinition/Disambiguation/Priority/"},"Priority")," does not work for you."),(0,i.kt)("p",null,"The semantics of a priority relation ",(0,i.kt)("inlineCode",{parentName:"p"},"A > B")," is that B will not be nested under A in the left-most or right-most position.\nAny other position of A will allow B fine. Note that the priority relation you define is transitively closed, so if A > B and B > C then A > C."),(0,i.kt)("p",null,"A finer point is that Rascal restricts the filtering of priority such that it is guaranteed that no parse errors occur at the cause of a priority. The following table defines when and where Rascal forbids a direct nesting between two productions ",(0,i.kt)("inlineCode",{parentName:"p"},"parent > child"),", depending on at which left-most or right-most positions the parent and the child are recursive. "),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"If ",(0,i.kt)("inlineCode",{parentName:"th"},"Parent > Child")),(0,i.kt)("th",{parentName:"tr",align:null},"Parent None: ",(0,i.kt)("inlineCode",{parentName:"th"},'E = "[" E "]"')),(0,i.kt)("th",{parentName:"tr",align:null},"Parent Left-most: ",(0,i.kt)("inlineCode",{parentName:"th"},'E = E "*"')),(0,i.kt)("th",{parentName:"tr",align:null},"Parent  Right-most: ",(0,i.kt)("inlineCode",{parentName:"th"},'E = "*" E')),(0,i.kt)("th",{parentName:"tr",align:null},"Parent Both: ",(0,i.kt)("inlineCode",{parentName:"th"},'E = E "*" E')))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Child None:")," ",(0,i.kt)("inlineCode",{parentName:"td"},'E = "{" E "}"')),(0,i.kt)("td",{parentName:"tr",align:null},"No filter"),(0,i.kt)("td",{parentName:"tr",align:null},"No filter"),(0,i.kt)("td",{parentName:"tr",align:null},"No filter"),(0,i.kt)("td",{parentName:"tr",align:null},"No filter")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Child Left-most:")," ",(0,i.kt)("inlineCode",{parentName:"td"},'E = E "+"')),(0,i.kt)("td",{parentName:"tr",align:null},"No filter"),(0,i.kt)("td",{parentName:"tr",align:null},"No filter"),(0,i.kt)("td",{parentName:"tr",align:null},"Filter under right"),(0,i.kt)("td",{parentName:"tr",align:null},"Filter under right")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Child Right-most:")," ",(0,i.kt)("inlineCode",{parentName:"td"},'E = "+" E')),(0,i.kt)("td",{parentName:"tr",align:null},"No filter"),(0,i.kt)("td",{parentName:"tr",align:null},"Filter under left"),(0,i.kt)("td",{parentName:"tr",align:null},"No filter"),(0,i.kt)("td",{parentName:"tr",align:null},"Filter under left")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Child Both:")," ",(0,i.kt)("inlineCode",{parentName:"td"},'E = E "+" E')),(0,i.kt)("td",{parentName:"tr",align:null},"No filter"),(0,i.kt)("td",{parentName:"tr",align:null},"Filter under left"),(0,i.kt)("td",{parentName:"tr",align:null},"Filter under right"),(0,i.kt)("td",{parentName:"tr",align:null},"Filter under left and right")))),(0,i.kt)("h4",{id:"examples"},"Examples"),(0,i.kt)("p",null,"The following snippet uses all ",(0,i.kt)("a",{parentName:"p",href:"/docs/Rascal/Declarations/SyntaxDefinition/Disambiguation/Priority/"},"Priority")," features:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rascal"},'syntax Exp \n  = A: Id\n  | B: Number \n  > C: Exp "[" Exp "]" \n  | D: Exp "!"\n  > E: Exp "*" Exp \n  > F: Exp "+" Exp;\n  | bracket G: "(" Exp ")"\n  ;\n')),(0,i.kt)("p",null,"A short explanation:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"C and D share a group of equal priority. They are incomparable in the partial ordering. That's fine because ",(0,i.kt)("inlineCode",{parentName:"li"},"1![2]")," is not ambiguous."),(0,i.kt)("li",{parentName:"ul"},"Similarly A and B share a group; yet they are not recursive and so do not play any role in the priority ordering."),(0,i.kt)("li",{parentName:"ul"},"C and D both have higher priority then E and F, which means that E and F may not be directly nested under C or D."),(0,i.kt)("li",{parentName:"ul"},"However: E and F will be allowed under the second argument of C because it is not an outermost position. That's fine because ",(0,i.kt)("inlineCode",{parentName:"li"},"1 [2 + 3]")," is not ambiguous. ")),(0,i.kt)("p",null,"Here a number of strings for this language, with brackets to show how they will be parsed: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'"1 + 2 ',(0,i.kt)("em",{parentName:"li"},' 3" will be parsed as "1 + (2 '),' 3)" because E > F.'),(0,i.kt)("li",{parentName:"ul"},'"1 + 2 ',"[ 3 ]",'" will be parsed as "1 + (2',"[","3","]",')" because C > F.'),(0,i.kt)("li",{parentName:"ul"},'"1 * 3!" will be parsed as "1 + (3!)" because D > E.'),(0,i.kt)("li",{parentName:"ul"},'"1 + ',"[2 * 3]",'" will be parsed as "1 + (',"[2 * 3]",')" because priority is only defined for outermost positions.')),(0,i.kt)("h4",{id:"benefits"},"Benefits"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Short notation for common expression grammars"),(0,i.kt)("li",{parentName:"ul"},"Removes ambiguity but can not introduce parse errors"),(0,i.kt)("li",{parentName:"ul"},"Allows the use of less non-terminals for the same expression grammar (typically only one), which makes parse trees simpler as well as the mapping to an abstract syntax tree more direct.")),(0,i.kt)("h4",{id:"pitfalls"},"Pitfalls"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Please do not assume that Rascal's priorities have the same semantics as SDF's priorities."),(0,i.kt)("li",{parentName:"ul"},"When a priority does not have a filtering effect, such as in ",(0,i.kt)("inlineCode",{parentName:"li"},'E = E "+" > E "*"')," it is usually better to use normal alternative composition: ",(0,i.kt)("inlineCode",{parentName:"li"},'E = E "+" | E "*"'),". There is no difference in the semantics of parsing, but the latter expression is more intentional."),(0,i.kt)("li",{parentName:"ul"},'You should not hide right or left recursion behind a nullable non-terminal, since the system will not filter the ambiguity then. Example:\nE = left "a"? E "',(0,i.kt)("em",{parentName:"li"},'" E > E "+" E will remain ambiguous. This should be written as: E = left ("a" E "'),'" E | E "*" E ) > E "+" E; (unfolding the optional such that E becomes explicitly left-most).')))}m.isMDXComponent=!0}}]);