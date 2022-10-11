"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[12928],{3905:(e,a,r)=>{r.d(a,{Zo:()=>u,kt:()=>d});var s=r(67294);function t(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function n(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);a&&(s=s.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,s)}return r}function l(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?n(Object(r),!0).forEach((function(a){t(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function i(e,a){if(null==e)return{};var r,s,t=function(e,a){if(null==e)return{};var r,s,t={},n=Object.keys(e);for(s=0;s<n.length;s++)r=n[s],a.indexOf(r)>=0||(t[r]=e[r]);return t}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(s=0;s<n.length;s++)r=n[s],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var o=s.createContext({}),p=function(e){var a=s.useContext(o),r=a;return e&&(r="function"==typeof e?e(a):l(l({},a),e)),r},u=function(e){var a=p(e.components);return s.createElement(o.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return s.createElement(s.Fragment,{},a)}},h=s.forwardRef((function(e,a){var r=e.components,t=e.mdxType,n=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),h=p(r),d=t,y=h["".concat(o,".").concat(d)]||h[d]||c[d]||n;return r?s.createElement(y,l(l({ref:a},u),{},{components:r})):s.createElement(y,l({ref:a},u))}));function d(e,a){var r=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var n=r.length,l=new Array(n);l[0]=h;var i={};for(var o in a)hasOwnProperty.call(a,o)&&(i[o]=a[o]);i.originalType=e,i.mdxType="string"==typeof e?e:t,l[1]=i;for(var p=2;p<n;p++)l[p]=r[p];return s.createElement.apply(null,l)}return s.createElement.apply(null,r)}h.displayName="MDXCreateElement"},22077:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>n,metadata:()=>i,toc:()=>p});var s=r(87462),t=(r(67294),r(3905));const n={title:"module analysis::graphs::LabeledGraph"},l=void 0,i={unversionedId:"Library/analysis/graphs/LabeledGraph",id:"Library/analysis/graphs/LabeledGraph",title:"module analysis::graphs::LabeledGraph",description:"Usage",source:"@site/docs/Library/analysis/graphs/LabeledGraph.md",sourceDirName:"Library/analysis/graphs",slug:"/Library/analysis/graphs/LabeledGraph",permalink:"/docs/Library/analysis/graphs/LabeledGraph",draft:!1,tags:[],version:"current",frontMatter:{title:"module analysis::graphs::LabeledGraph"},sidebar:"tutorialSidebar",previous:{title:"module analysis::graphs::Graph",permalink:"/docs/Library/analysis/graphs/Graph"},next:{title:"module analysis::linearprogramming::LinearProgramming",permalink:"/docs/Library/analysis/linearprogramming/"}},o={},p=[{value:"Usage",id:"usage",level:4},{value:"alias LGraph&T,&L {#analysis-graphs-LabeledGraph-LGraph&T,&L}",id:"analysis-graphs-LabeledGraph-LGraph&T,&L",level:2},{value:"function bottom",id:"analysis-graphs-LabeledGraph-bottom",level:2},{value:"Synopsis",id:"synopsis",level:4},{value:"function predecessors",id:"analysis-graphs-LabeledGraph-predecessors",level:2},{value:"Synopsis",id:"synopsis-1",level:4},{value:"function reach",id:"analysis-graphs-LabeledGraph-reach",level:2},{value:"Synopsis",id:"synopsis-2",level:4},{value:"function reachR",id:"analysis-graphs-LabeledGraph-reachR",level:2},{value:"Synopsis",id:"synopsis-3",level:4},{value:"function reachX",id:"analysis-graphs-LabeledGraph-reachX",level:2},{value:"Synopsis",id:"synopsis-4",level:4},{value:"function successors",id:"analysis-graphs-LabeledGraph-successors",level:2},{value:"Synopsis",id:"synopsis-5",level:4},{value:"function top",id:"analysis-graphs-LabeledGraph-top",level:2},{value:"Synopsis",id:"synopsis-6",level:4}],u={toc:p};function c(e){let{components:a,...r}=e;return(0,t.kt)("wrapper",(0,s.Z)({},u,r,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("h4",{id:"usage"},"Usage"),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"import analysis::graphs::LabeledGraph;")),(0,t.kt)("h2",{id:"analysis-graphs-LabeledGraph-LGraph&T,&L"},"alias LGraph","[&T,&L]"," {#analysis-graphs-LabeledGraph-LGraph","[&T,&L]","}"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"rel[&T from, &L label, &T to]"))),(0,t.kt)("h2",{id:"analysis-graphs-LabeledGraph-bottom"},"function bottom"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"set[&T] bottom(LGraph[&T,&L] G)"))),(0,t.kt)("h4",{id:"synopsis"},"Synopsis"),(0,t.kt)("p",null,"Return the bottom nodes of a LGraph."),(0,t.kt)("h2",{id:"analysis-graphs-LabeledGraph-predecessors"},"function predecessors"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"set[&T] predecessors(LGraph[&T,&L] G, &T From)"))),(0,t.kt)("h4",{id:"synopsis-1"},"Synopsis"),(0,t.kt)("p",null,"The predecessors of a single node in a LGraph."),(0,t.kt)("h2",{id:"analysis-graphs-LabeledGraph-reach"},"function reach"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"set[&T] reach(LGraph[&T,&L] G, set[&T] Start)"))),(0,t.kt)("h4",{id:"synopsis-2"},"Synopsis"),(0,t.kt)("p",null,"Reachability from a given start set of nodes."),(0,t.kt)("h2",{id:"analysis-graphs-LabeledGraph-reachR"},"function reachR"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"set[&T] reachR(LGraph[&T,&L] G, set[&T] Start, set[&T] Restr)"))),(0,t.kt)("h4",{id:"synopsis-3"},"Synopsis"),(0,t.kt)("p",null,"Reachability from given start set of nodes with restrictions."),(0,t.kt)("h2",{id:"analysis-graphs-LabeledGraph-reachX"},"function reachX"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"set[&T] reachX(LGraph[&T,&L] G, set[&T] Start, set[&T] Excl)"))),(0,t.kt)("h4",{id:"synopsis-4"},"Synopsis"),(0,t.kt)("p",null,"Reachability from given start set of nodes with exclusions."),(0,t.kt)("h2",{id:"analysis-graphs-LabeledGraph-successors"},"function successors"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"set[&T] successors(LGraph[&T, &L] G, &T From)"))),(0,t.kt)("h4",{id:"synopsis-5"},"Synopsis"),(0,t.kt)("p",null,"The successors of a single node in a LGraph."),(0,t.kt)("h2",{id:"analysis-graphs-LabeledGraph-top"},"function top"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"set[&T] top(LGraph[&T,&L] G)"))),(0,t.kt)("h4",{id:"synopsis-6"},"Synopsis"),(0,t.kt)("p",null,"Return the top nodes of a LGraph."))}c.isMDXComponent=!0}}]);