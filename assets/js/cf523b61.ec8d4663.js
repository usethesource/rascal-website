"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[68532],{3905:(e,l,n)=>{n.d(l,{Zo:()=>s,kt:()=>m});var t=n(67294);function a(e,l,n){return l in e?Object.defineProperty(e,l,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[l]=n,e}function o(e,l){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);l&&(t=t.filter((function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable}))),n.push.apply(n,t)}return n}function r(e){for(var l=1;l<arguments.length;l++){var n=null!=arguments[l]?arguments[l]:{};l%2?o(Object(n),!0).forEach((function(l){a(e,l,n[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(n,l))}))}return e}function i(e,l){if(null==e)return{};var n,t,a=function(e,l){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],l.indexOf(n)>=0||(a[n]=e[n]);return a}(e,l);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],l.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=t.createContext({}),u=function(e){var l=t.useContext(d),n=l;return e&&(n="function"==typeof e?e(l):r(r({},l),e)),n},s=function(e){var l=u(e.components);return t.createElement(d.Provider,{value:l},e.children)},p={inlineCode:"code",wrapper:function(e){var l=e.children;return t.createElement(t.Fragment,{},l)}},c=t.forwardRef((function(e,l){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,y=c["".concat(d,".").concat(m)]||c[m]||p[m]||o;return n?t.createElement(y,r(r({ref:l},s),{},{components:n})):t.createElement(y,r({ref:l},s))}));function m(e,l){var n=arguments,a=l&&l.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=c;var i={};for(var d in l)hasOwnProperty.call(l,d)&&(i[d]=l[d]);i.originalType=e,i.mdxType="string"==typeof e?e:a,r[1]=i;for(var u=2;u<o;u++)r[u]=n[u];return t.createElement.apply(null,r)}return t.createElement.apply(null,n)}c.displayName="MDXCreateElement"},71043:(e,l,n)=>{n.r(l),n.d(l,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var t=n(87462),a=(n(67294),n(3905));const o={title:"module lang::yaml::Model"},r=void 0,i={unversionedId:"Library/lang/yaml/Model",id:"Library/lang/yaml/Model",title:"module lang::yaml::Model",description:"Usage",source:"@site/docs/Library/lang/yaml/Model.md",sourceDirName:"Library/lang/yaml",slug:"/Library/lang/yaml/Model",permalink:"/docs/Library/lang/yaml/Model",draft:!1,tags:[],version:"current",frontMatter:{title:"module lang::yaml::Model"},sidebar:"tutorialSidebar",previous:{title:"lang::yaml",permalink:"/docs/Library/lang/yaml/"},next:{title:"resource",permalink:"/docs/Library/resource/"}},d={},u=[{value:"Usage",id:"usage",level:4},{value:"Synopsis",id:"synopsis",level:4},{value:"data Node",id:"lang-yaml-Model-Node",level:2},{value:"function loadYAML",id:"lang-yaml-Model-loadYAML",level:2},{value:"function dumpYAML",id:"lang-yaml-Model-dumpYAML",level:2},{value:"function testLoadDump",id:"lang-yaml-Model-testLoadDump",level:2},{value:"function checkYAML",id:"lang-yaml-Model-checkYAML",level:2},{value:"function badAnchors",id:"lang-yaml-Model-badAnchors",level:2},{value:"function wronglyTypedScalars",id:"lang-yaml-Model-wronglyTypedScalars",level:2},{value:"function okValue",id:"lang-yaml-Model-okValue",level:2},{value:"function unsupportedTypes",id:"lang-yaml-Model-unsupportedTypes",level:2},{value:"function untaggedScalars",id:"lang-yaml-Model-untaggedScalars",level:2},{value:"function duplicateAnchors",id:"lang-yaml-Model-duplicateAnchors",level:2},{value:"function undefinedRefs",id:"lang-yaml-Model-undefinedRefs",level:2},{value:"function equalNodes",id:"lang-yaml-Model-equalNodes",level:2}],s={toc:u};function p(e){let{components:l,...n}=e;return(0,a.kt)("wrapper",(0,t.Z)({},s,n,{components:l,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"usage"},"Usage"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"import lang::yaml::Model;")),(0,a.kt)("h4",{id:"synopsis"},"Synopsis"),(0,a.kt)("p",null,"AST model for YAML (loosely based on the serialization model of ",(0,a.kt)("a",{parentName:"p",href:"http://www.yaml.org/spec/1.2/spec.html"},"http://www.yaml.org/spec/1.2/spec.html"),")"),(0,a.kt)("h2",{id:"lang-yaml-Model-Node"},"data Node"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rascal"},"data Node  \n     = sequence(list[Node] \\list)\n     | scalar(value \\value)\n     | reference(int anchor)\n     | mapping(map[Node, Node] \\map)\n     ;\n")),(0,a.kt)("h2",{id:"lang-yaml-Model-loadYAML"},"function loadYAML"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Node loadYAML(str src)"))),(0,a.kt)("h2",{id:"lang-yaml-Model-dumpYAML"},"function dumpYAML"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"str dumpYAML(Node yaml)"))),(0,a.kt)("h2",{id:"lang-yaml-Model-testLoadDump"},"function testLoadDump"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"test bool testLoadDump()"))),(0,a.kt)("h2",{id:"lang-yaml-Model-checkYAML"},"function checkYAML"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"set[str] checkYAML(Node n)"))),(0,a.kt)("h2",{id:"lang-yaml-Model-badAnchors"},"function badAnchors"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"set[Node] badAnchors(Node n)"))),(0,a.kt)("h2",{id:"lang-yaml-Model-wronglyTypedScalars"},"function wronglyTypedScalars"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"set[Node] wronglyTypedScalars(Node n)"))),(0,a.kt)("h2",{id:"lang-yaml-Model-okValue"},"function okValue"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"bool okValue(type[&T <: value] _, value v)"))),(0,a.kt)("h2",{id:"lang-yaml-Model-unsupportedTypes"},"function unsupportedTypes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"set[type[value]] unsupportedTypes(Node n)"))),(0,a.kt)("h2",{id:"lang-yaml-Model-untaggedScalars"},"function untaggedScalars"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"set[Node] untaggedScalars(Node n)"))),(0,a.kt)("h2",{id:"lang-yaml-Model-duplicateAnchors"},"function duplicateAnchors"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"set[int] duplicateAnchors(Node n)"))),(0,a.kt)("h2",{id:"lang-yaml-Model-undefinedRefs"},"function undefinedRefs"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"tuple[set[int], set[int]] undefinedRefs(reference(i), set[int] seen, set[int] dupl)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"tuple[set[int], set[int]] undefinedRefs(s:sequence(ns), set[int] seen, set[int] dupl)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"tuple[set[int], set[int]] undefinedRefs(nod:mapping(m), set[int] seen, set[int] dupl)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"default tuple[set[int], set[int]] undefinedRefs(Node n, set[int] seen, set[int] dupl)"))),(0,a.kt)("h2",{id:"lang-yaml-Model-equalNodes"},"function equalNodes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"bool equalNodes(Node x, Node y)"))))}p.isMDXComponent=!0}}]);