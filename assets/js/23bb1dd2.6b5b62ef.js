"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[28655],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(a),d=r,g=m["".concat(o,".").concat(d)]||m[d]||c[d]||i;return a?n.createElement(g,l(l({ref:t},u),{},{components:a})):n.createElement(g,l({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},79015:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={title:"Ambiguity"},l=void 0,s={unversionedId:"RunTimeErrors/RuntimeExceptions/Ambiguity/index",id:"RunTimeErrors/RuntimeExceptions/Ambiguity/index",title:"Ambiguity",description:"Synopsis",source:"@site/docs/RunTimeErrors/RuntimeExceptions/Ambiguity/index.md",sourceDirName:"RunTimeErrors/RuntimeExceptions/Ambiguity",slug:"/RunTimeErrors/RuntimeExceptions/Ambiguity/",permalink:"/docs/RunTimeErrors/RuntimeExceptions/Ambiguity/",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/RunTimeErrors/RuntimeExceptions/Ambiguity/index.md",tags:[],version:"current",frontMatter:{title:"Ambiguity"},sidebar:"tutorialSidebar",previous:{title:"Runtime Exceptions",permalink:"/docs/RunTimeErrors/RuntimeExceptions/"},next:{title:"Arithmetic Exception",permalink:"/docs/RunTimeErrors/RuntimeExceptions/ArithmeticException/"}},o={},p=[{value:"Synopsis",id:"synopsis",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4}],u={toc:p};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h4",{id:"synopsis"},"Synopsis"),(0,r.kt)("p",null,"Ambiguity found in parsed text. "),(0,r.kt)("h4",{id:"description"},"Description"),(0,r.kt)("p",null,"Rascal supports general context-free grammars and also provides\nvarious mechanisms to disambiguate them."),(0,r.kt)("p",null,"This exception is thrown when, given a grammar and a sentence,\nan ambiguity is found while parsing the sentence according to that grammar."),(0,r.kt)("h4",{id:"examples"},"Examples"),(0,r.kt)("p",null,"First declare a very simple expression language that should\nrecognize expressions like ",(0,r.kt)("inlineCode",{parentName:"p"},"a"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"a+a"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"a+(a+a)"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>syntax A = "a";\nok\nrascal>syntax E = A | "(" E ")" | E "+" E;\nok\n')),(0,r.kt)("p",null,"Next, import the ParseTree module that provides a ",(0,r.kt)("inlineCode",{parentName:"p"},"parse")," function that we will use:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>import ParseTree;\nok\n")),(0,r.kt)("p",null,"Entering a first expression goes well, except that the parser generator already predicts future ambiguity. So it prints a warning."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>parse(#E, "a+a");\nE: (E) `a+a`\n')),(0,r.kt)("p",null,"The following example triggers the predicted ambiguity indeed:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>parse(#E, "a+a+a");\n|TODO:///|: Ambiguity(\n  |unknown:///|(0,5,<1,0>,<1,5>),\n  "E",\n  "a+a+a")\nok\n')),(0,r.kt)("p",null,"The conclusion is that there are two parses here: ",(0,r.kt)("inlineCode",{parentName:"p"},"a+(a+a)")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"(a+a)+a"),",\nbecause we did forget to define the associativity of the ",(0,r.kt)("inlineCode",{parentName:"p"},"+")," operator."),(0,r.kt)("p",null,"Let's fix this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>syntax A = "a";\nok\nrascal>syntax E = A | "(" E ")" | left E "+" E;\nok\nrascal>import ParseTree;\nok\nrascal>parse(#E, "a+a+a");\nE: (E) `a+a+a`\n')),(0,r.kt)("p",null,"However, one can also deal with ambiguity differently. For example we could have the parser build a tree\nfor all ambiguous interpretations and inspect the resulting data-structure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>syntax A = "a";\nok\nrascal>syntax E = A | "(" E ")" | left E "+" E | left E "*" E;\nok\nrascal>import ParseTree;\nok\nrascal>t = parse(#E, "a+a*a", allowAmbiguity=true);\nE: (E) `a+a*a`\n')),(0,r.kt)("p",null,"Is the forest indeed ambiguous?"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>/amb(_) := t\nbool: true\n")),(0,r.kt)("p",null,"How many alternatives?"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>import Set;\nok\nrascal>import IO;\nok\nrascal>/amb(a) := t ? size(a) : 0; \nint: 2\n")),(0,r.kt)("p",null,"Which rules are at the top of the alternatives?"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>if (/amb({a1, a2}) := t) \n>>>>>>>  println("alternative 1: <a1.prod>\n>>>>>>>          \'alternative 2: <a2.prod>");\n          \'alternative 2: <a2.prod>");\nalternative 1: prod(sort("E"),[sort("E"),layouts("$default$"),lit("+"),layouts("$default$"),sort("E")],{assoc(left())})\nalternative 2: prod(sort("E"),[sort("E"),layouts("$default$"),lit("*"),layouts("$default$"),sort("E")],{assoc(left())})\nok\n')),(0,r.kt)("p",null,"Or, one could catch the ambiguity and report it like a ",(0,r.kt)("a",{parentName:"p",href:"../../../RunTimeErrors/RuntimeExceptions/ParseError"},"ParseError"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>import IO;\nok\nrascal>try \n>>>>>>>  parse(#E, "a+a*a");\n>>>>>>>catch Ambiguity(loc l, str s, _): \n>>>>>>>  println("the input is ambiguous for <s> on line <l.begin.line>");\n  println("the input is ambiguous for <s> on line <l.begin.line>");\nthe input is ambiguous for E on line 1\nok\n')),(0,r.kt)("p",null,"Here are some pointers for further disambiguation help:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../../../Rascal/Declarations/SyntaxDefinition"},"Syntax Definitions"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../../../Rascal/Declarations/SyntaxDefinition/Disambiguation"},"Disambiguation features"),".")))}c.isMDXComponent=!0}}]);