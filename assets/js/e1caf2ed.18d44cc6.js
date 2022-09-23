"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[76732],{3905:(e,a,n)=>{n.d(a,{Zo:()=>m,kt:()=>c});var t=n(67294);function l(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function p(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){l(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function r(e,a){if(null==e)return{};var n,t,l=function(e,a){if(null==e)return{};var n,t,l={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(l[n]=e[n]);return l}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=t.createContext({}),o=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):p(p({},a),e)),n},m=function(e){var a=o(e.components);return t.createElement(s.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},d=t.forwardRef((function(e,a){var n=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,m=r(e,["components","mdxType","originalType","parentName"]),d=o(n),c=l,k=d["".concat(s,".").concat(c)]||d[c]||u[c]||i;return n?t.createElement(k,p(p({ref:a},m),{},{components:n})):t.createElement(k,p({ref:a},m))}));function c(e,a){var n=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var i=n.length,p=new Array(i);p[0]=d;var r={};for(var s in a)hasOwnProperty.call(a,s)&&(r[s]=a[s]);r.originalType=e,r.mdxType="string"==typeof e?e:l,p[1]=r;for(var o=2;o<i;o++)p[o]=n[o];return t.createElement.apply(null,p)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},39780:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>s,contentTitle:()=>p,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>o});var t=n(83117),l=(n(67294),n(3905));const i={title:"module Map"},p=void 0,r={unversionedId:"Library/Map",id:"Library/Map",title:"module Map",description:"Usage",source:"@site/docs/Library/Map.md",sourceDirName:"Library",slug:"/Library/Map",permalink:"/docs/Library/Map",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Library/Map.md",tags:[],version:"current",frontMatter:{title:"module Map"},sidebar:"tutorialSidebar",previous:{title:"module Location",permalink:"/docs/Library/Location"},next:{title:"module Message",permalink:"/docs/Library/Message"}},s={},o=[{value:"Usage",id:"usage",level:4},{value:"Synopsis",id:"synopsis",level:4},{value:"Description",id:"description",level:4},{value:"function delete",id:"Map-delete",level:2},{value:"Synopsis",id:"synopsis-1",level:4},{value:"Description",id:"description-1",level:4},{value:"Examples",id:"examples",level:4},{value:"function domain",id:"Map-domain",level:2},{value:"Synopsis",id:"synopsis-2",level:4},{value:"Description",id:"description-2",level:4},{value:"Examples",id:"examples-1",level:4},{value:"function domainR",id:"Map-domainR",level:2},{value:"Synopsis",id:"synopsis-3",level:4},{value:"Description",id:"description-3",level:4},{value:"Examples",id:"examples-2",level:4},{value:"function domainX",id:"Map-domainX",level:2},{value:"Synopsis",id:"synopsis-4",level:4},{value:"Description",id:"description-4",level:4},{value:"Examples",id:"examples-3",level:4},{value:"function getOneFrom",id:"Map-getOneFrom",level:2},{value:"Synopsis",id:"synopsis-5",level:4},{value:"Description",id:"description-5",level:4},{value:"Examples",id:"examples-4",level:4},{value:"function invert",id:"Map-invert",level:2},{value:"Synopsis",id:"synopsis-6",level:4},{value:"Description",id:"description-6",level:4},{value:"Examples",id:"examples-5",level:4},{value:"function invertUnique",id:"Map-invertUnique",level:2},{value:"Synopsis",id:"synopsis-7",level:4},{value:"Description",id:"description-7",level:4},{value:"Examples",id:"examples-6",level:4},{value:"function isEmpty",id:"Map-isEmpty",level:2},{value:"Synopsis",id:"synopsis-8",level:4},{value:"Description",id:"description-8",level:4},{value:"Examples",id:"examples-7",level:4},{value:"function mapper",id:"Map-mapper",level:2},{value:"Synopsis",id:"synopsis-9",level:4},{value:"Description",id:"description-9",level:4},{value:"Examples",id:"examples-8",level:4},{value:"function range",id:"Map-range",level:2},{value:"Synopsis",id:"synopsis-10",level:4},{value:"Description",id:"description-10",level:4},{value:"Examples",id:"examples-9",level:4},{value:"function rangeR",id:"Map-rangeR",level:2},{value:"Synopsis",id:"synopsis-11",level:4},{value:"Description",id:"description-11",level:4},{value:"Examples",id:"examples-10",level:4},{value:"function rangeX",id:"Map-rangeX",level:2},{value:"Synopsis",id:"synopsis-12",level:4},{value:"Description",id:"description-12",level:4},{value:"Examples",id:"examples-11",level:4},{value:"function size",id:"Map-size",level:2},{value:"Synopsis",id:"synopsis-13",level:4},{value:"Description",id:"description-13",level:4},{value:"Examples",id:"examples-12",level:4},{value:"function toList",id:"Map-toList",level:2},{value:"Synopsis",id:"synopsis-14",level:4},{value:"Examples",id:"examples-13",level:4},{value:"function toRel",id:"Map-toRel",level:2},{value:"Synopsis",id:"synopsis-15",level:4},{value:"Examples",id:"examples-14",level:4},{value:"function toString",id:"Map-toString",level:2},{value:"Synopsis",id:"synopsis-16",level:4},{value:"Examples",id:"examples-15",level:4},{value:"function itoString",id:"Map-itoString",level:2},{value:"Synopsis",id:"synopsis-17",level:4},{value:"Examples",id:"examples-16",level:4}],m={toc:o};function u(e){let{components:a,...n}=e;return(0,l.kt)("wrapper",(0,t.Z)({},m,n,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h4",{id:"usage"},"Usage"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"import Map;")),(0,l.kt)("h4",{id:"synopsis"},"Synopsis"),(0,l.kt)("p",null,"Library functions for maps."),(0,l.kt)("h4",{id:"description"},"Description"),(0,l.kt)("p",null,"For operators on maps see ",(0,l.kt)("a",{parentName:"p",href:"../Rascal/Expressions/Values/Map"},"Map")," in the Rascal Language Reference."),(0,l.kt)("p",null,"The following functions are defined for maps:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/Library/Map#Map-delete"},"delete")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/Library/Map#Map-domain"},"domain")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/Library/Map#Map-domainR"},"domainR")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/Library/Map#Map-domainX"},"domainX")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/Library/Map#Map-getOneFrom"},"getOneFrom")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/Library/Map#Map-invert"},"invert")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/Library/Map#Map-invertUnique"},"invertUnique")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/Library/Map#Map-isEmpty"},"isEmpty")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/Library/Map#Map-itoString"},"itoString")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/Library/Map#Map-mapper"},"mapper")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/Library/Map#Map-range"},"range")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/Library/Map#Map-rangeR"},"rangeR")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/Library/Map#Map-rangeX"},"rangeX")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/Library/Map#Map-size"},"size")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/Library/Map#Map-toList"},"toList")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/Library/Map#Map-toRel"},"toRel")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/Library/Map#Map-toString"},"toString"))),(0,l.kt)("h2",{id:"Map-delete"},"function delete"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"map[&K,&V] delete(map[&K,&V] m, &K k)"))),(0,l.kt)("h4",{id:"synopsis-1"},"Synopsis"),(0,l.kt)("p",null,"Delete a key from a map."),(0,l.kt)("h4",{id:"description-1"},"Description"),(0,l.kt)("p",null,"Returns the map ",(0,l.kt)("inlineCode",{parentName:"p"},"m")," minus the key ",(0,l.kt)("inlineCode",{parentName:"p"},"k"),"."),(0,l.kt)("h4",{id:"examples"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>import Map;\nok\nrascal>delete(("apple":1,"pear":2), "apple");\nmap[str, int]: ("pear":2)\n')),(0,l.kt)("h2",{id:"Map-domain"},"function domain"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"set[&K] domain(map[&K, &V] M)"))),(0,l.kt)("h4",{id:"synopsis-2"},"Synopsis"),(0,l.kt)("p",null,"Determine the domain (set of keys) of a map."),(0,l.kt)("h4",{id:"description-2"},"Description"),(0,l.kt)("p",null,"Returns the domain (set of keys) of map ",(0,l.kt)("inlineCode",{parentName:"p"},"M"),"."),(0,l.kt)("h4",{id:"examples-1"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>import Map;\nok\nrascal>domain(("apple": 1, "pear": 2));\nset[str]: {"pear","apple"}\n')),(0,l.kt)("h2",{id:"Map-domainR"},"function domainR"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"map[&K, &V] domainR(map[&K, &V] M, set[&K] S)"))),(0,l.kt)("h4",{id:"synopsis-3"},"Synopsis"),(0,l.kt)("p",null,"Map restricted to certain keys."),(0,l.kt)("h4",{id:"description-3"},"Description"),(0,l.kt)("p",null,"Return the map ",(0,l.kt)("inlineCode",{parentName:"p"},"M")," restricted to pairs with key in ",(0,l.kt)("inlineCode",{parentName:"p"},"S"),"."),(0,l.kt)("h4",{id:"examples-2"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>import Map;\nok\nrascal>domainR(("apple": 1, "pear": 2, "orange": 3), {"apple", "pear"});\nmap[str, int]: ("pear":2,"apple":1)\n')),(0,l.kt)("h2",{id:"Map-domainX"},"function domainX"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"map[&K, &V] domainX(map[&K, &V] M, set[&K] S)"))),(0,l.kt)("h4",{id:"synopsis-4"},"Synopsis"),(0,l.kt)("p",null,"Map with certain keys excluded."),(0,l.kt)("h4",{id:"description-4"},"Description"),(0,l.kt)("p",null,"Return the map ",(0,l.kt)("inlineCode",{parentName:"p"},"M")," restricted to pairs with key not in ",(0,l.kt)("inlineCode",{parentName:"p"},"S"),"."),(0,l.kt)("h4",{id:"examples-3"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>import Map;\nok\nrascal>domainX(("apple": 1, "pear": 2, "orange": 3), {"apple", "pear"});\nmap[str, int]: ("orange":3)\n')),(0,l.kt)("h2",{id:"Map-getOneFrom"},"function getOneFrom"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"&K getOneFrom(map[&K, &V] M)"))),(0,l.kt)("h4",{id:"synopsis-5"},"Synopsis"),(0,l.kt)("p",null,"Get a n arbitrary key from a map."),(0,l.kt)("h4",{id:"description-5"},"Description"),(0,l.kt)("p",null,"Returns an arbitrary key of map ",(0,l.kt)("inlineCode",{parentName:"p"},"M"),"."),(0,l.kt)("h4",{id:"examples-4"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>import Map;\nok\nrascal>getOneFrom(("apple": 1, "pear": 2, "pineapple": 3));\nstr: "apple"\nrascal>getOneFrom(("apple": 1, "pear": 2, "pineapple": 3));\nstr: "pineapple"\nrascal>getOneFrom(("apple": 1, "pear": 2, "pineapple": 3));\nstr: "pineapple"\n')),(0,l.kt)("h2",{id:"Map-invert"},"function invert"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"map[&V, set[&K]] invert(map[&K, &V] M)"))),(0,l.kt)("h4",{id:"synopsis-6"},"Synopsis"),(0,l.kt)("p",null,"Invert the (key,value) pairs in a map."),(0,l.kt)("h4",{id:"description-6"},"Description"),(0,l.kt)("p",null,"Returns inverted map in which each value in the old map ",(0,l.kt)("inlineCode",{parentName:"p"},"M")," is associated with a set of key values from the old map.\nAlso see ",(0,l.kt)("a",{parentName:"p",href:"/docs/Library/Map#Map-invertUnique"},"invert unique"),"."),(0,l.kt)("h4",{id:"examples-5"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>import Map;\nok\nrascal>invert(("apple": 1, "pear": 2, "orange": 1));\nmap[int, set[str]]: (\n  1:{"orange","apple"},\n  2:{"pear"}\n)\n')),(0,l.kt)("h2",{id:"Map-invertUnique"},"function invertUnique"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"map[&V, &K] invertUnique(map[&K, &V] M)"))),(0,l.kt)("h4",{id:"synopsis-7"},"Synopsis"),(0,l.kt)("p",null,"Invert the (key,value) pairs in a map."),(0,l.kt)("h4",{id:"description-7"},"Description"),(0,l.kt)("p",null,"Returns a map with key and value inverted; the result should be a map.\nIf the initial map contains duplicate values,\nthe ",(0,l.kt)("inlineCode",{parentName:"p"},"MultipleKey")," exception is raised since\nan attempt is made to create a map where more than one\nvalue would be associated with the same key."),(0,l.kt)("p",null,"Also see ",(0,l.kt)("a",{parentName:"p",href:"/docs/Library/Map#Map-invert"},"invert")," and ",(0,l.kt)("a",{parentName:"p",href:"/docs/Library/Exception"},"Exception"),"."),(0,l.kt)("h4",{id:"examples-6"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>import Map;\nok\nrascal>invertUnique(("apple": 1, "pear": 2, "orange": 3));\nmap[int, str]: (1:"apple",3:"orange",2:"pear")\n')),(0,l.kt)("p",null,"Here is an examples that generates an exception:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>invertUnique(("apple": 1, "pear": 2, "orange": 1));\n|std:///Map.rsc|(2854,732,<144,0>,<171,54>): MultipleKey(1,"apple","orange")\n    at *** somewhere ***(|std:///Map.rsc|(2854,732,<144,0>,<171,54>))\n    at invertUnique(|prompt:///|(47,1,<1,47>,<1,48>))\nok\n')),(0,l.kt)("h2",{id:"Map-isEmpty"},"function isEmpty"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"bool isEmpty(map[&K, &V] M)"))),(0,l.kt)("h4",{id:"synopsis-8"},"Synopsis"),(0,l.kt)("p",null,"Test whether a map is empty."),(0,l.kt)("h4",{id:"description-8"},"Description"),(0,l.kt)("p",null,"Returns ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," if map ",(0,l.kt)("inlineCode",{parentName:"p"},"M")," is empty, and ",(0,l.kt)("inlineCode",{parentName:"p"},"false")," otherwise."),(0,l.kt)("h4",{id:"examples-7"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>import Map;\nok\nrascal>isEmpty(());\nbool: true\nrascal>isEmpty(("apple": 1, "pear": 2, "orange": 3));\nbool: false\n')),(0,l.kt)("h2",{id:"Map-mapper"},"function mapper"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"map[&K, &V] mapper(map[&K, &V] M, &L (&K) F, &W (&V) G)"))),(0,l.kt)("h4",{id:"synopsis-9"},"Synopsis"),(0,l.kt)("p",null,"Apply a function to all (key, value) pairs in a map."),(0,l.kt)("h4",{id:"description-9"},"Description"),(0,l.kt)("p",null,"Apply the functions ",(0,l.kt)("inlineCode",{parentName:"p"},"F")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"G")," to each key/value pair in a map and return the transformed map."),(0,l.kt)("h4",{id:"examples-8"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>import Map;\nok\nrascal>str prefix(str s) { return "X" + s; }\nstr (str): function(|prompt:///|(0,37,<1,0>,<1,37>))\nrascal>int incr(int x) { return x + 1; }\nint (int): function(|prompt:///|(0,33,<1,0>,<1,33>))\nrascal>mapper(("apple": 1, "pear": 2, "orange": 3), prefix, incr);\nmap[str, int]: ("Xapple":2,"Xorange":4,"Xpear":3)\n')),(0,l.kt)("h2",{id:"Map-range"},"function range"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"set[&V] range(map[&K, &V] M)"))),(0,l.kt)("h4",{id:"synopsis-10"},"Synopsis"),(0,l.kt)("p",null,"The range (set of values that correspond to its keys) of a map."),(0,l.kt)("h4",{id:"description-10"},"Description"),(0,l.kt)("p",null,"Returns the range (set of values) of map ",(0,l.kt)("inlineCode",{parentName:"p"},"M"),"."),(0,l.kt)("h4",{id:"examples-9"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>import Map;\nok\nrascal>range(("apple": 1, "pear": 2));\nset[int]: {1,2}\n')),(0,l.kt)("h2",{id:"Map-rangeR"},"function rangeR"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"map[&K, &V] rangeR(map[&K, &V] M, set[&V] S)"))),(0,l.kt)("h4",{id:"synopsis-11"},"Synopsis"),(0,l.kt)("p",null,"Map restricted to certain values in (key,values) pairs."),(0,l.kt)("h4",{id:"description-11"},"Description"),(0,l.kt)("p",null,"Returns the map restricted to pairs with values in ",(0,l.kt)("inlineCode",{parentName:"p"},"S"),"."),(0,l.kt)("h4",{id:"examples-10"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>import Map;\nok\nrascal>rangeR(("apple": 1, "pear": 2, "orange": 3), {2, 3});\nmap[str, int]: ("pear":2,"orange":3)\n')),(0,l.kt)("h2",{id:"Map-rangeX"},"function rangeX"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"map[&K, &V] rangeX(map[&K, &V] M, set[&V] S)"))),(0,l.kt)("h4",{id:"synopsis-12"},"Synopsis"),(0,l.kt)("p",null,"Map with certain values in (key,value) pairs excluded."),(0,l.kt)("h4",{id:"description-12"},"Description"),(0,l.kt)("p",null,"Returns the map restricted to pairs with values not in ",(0,l.kt)("inlineCode",{parentName:"p"},"S"),"."),(0,l.kt)("h4",{id:"examples-11"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>import Map;\nok\nrascal>rangeX(("apple": 1, "pear": 2, "orange": 3), {2, 3});\nmap[str, int]: ("apple":1)\n')),(0,l.kt)("h2",{id:"Map-size"},"function size"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"int size(map[&K, &V] M)"))),(0,l.kt)("h4",{id:"synopsis-13"},"Synopsis"),(0,l.kt)("p",null,"Number of (key, value) pairs in a map."),(0,l.kt)("h4",{id:"description-13"},"Description"),(0,l.kt)("p",null,"Returns the number of pairs in map ",(0,l.kt)("inlineCode",{parentName:"p"},"M"),"."),(0,l.kt)("h4",{id:"examples-12"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>import Map;\nok\nrascal>size(("apple": 1, "pear": 2, "orange": 3));\nint: 3\n')),(0,l.kt)("h2",{id:"Map-toList"},"function toList"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"list[tuple[&K, &V]] toList(map[&K, &V] M)"))),(0,l.kt)("h4",{id:"synopsis-14"},"Synopsis"),(0,l.kt)("p",null,"Convert a map to a list of tuples."),(0,l.kt)("h4",{id:"examples-13"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>import Map;\nok\nrascal>toList(("apple": 1, "pear": 2, "orange": 3));\nlrel[str,int]: [\n  <"apple",1>,\n  <"orange",3>,\n  <"pear",2>\n]\n')),(0,l.kt)("h2",{id:"Map-toRel"},"function toRel"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"rel[&K,&V] toRel(map[&K, set[&V]] M)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"rel[&K,&V] toRel(map[&K, list[&V]] M)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"default java rel[&K, &V] toRel(map[&K, &V] M)"))),(0,l.kt)("h4",{id:"synopsis-15"},"Synopsis"),(0,l.kt)("p",null,"Convert a map to a relation."),(0,l.kt)("h4",{id:"examples-14"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>import Map;\nok\nrascal>toRel(("apple": 1, "pear": 2, "orange": 3));\nrel[str,int]: {\n  <"pear",2>,\n  <"orange",3>,\n  <"apple",1>\n}\n')),(0,l.kt)("h2",{id:"Map-toString"},"function toString"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"str toString(map[&K, &V] M)"))),(0,l.kt)("h4",{id:"synopsis-16"},"Synopsis"),(0,l.kt)("p",null,"Convert a map to a string."),(0,l.kt)("h4",{id:"examples-15"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>import Map;\nok\nrascal>toString(("apple": 1, "pear": 2, "orange": 3));\nstr: "(\\"pear\\":2,\\"orange\\":3,\\"apple\\":1)"\n')),(0,l.kt)("h2",{id:"Map-itoString"},"function itoString"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"str itoString(map[&K, &V] M)"))),(0,l.kt)("h4",{id:"synopsis-17"},"Synopsis"),(0,l.kt)("p",null,"Convert a map to a indented string."),(0,l.kt)("h4",{id:"examples-16"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>import Map;\nok\nrascal>itoString(("apple": 1, "pear": 2, "orange": 3));\nstr: "(\\"pear\\":2,\\"orange\\":3,\\"apple\\":1)"\n')))}u.isMDXComponent=!0}}]);