"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[20105],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>m});var l=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,l)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,l,n=function(e,t){if(null==e)return{};var i,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)i=r[l],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)i=r[l],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var s=l.createContext({}),p=function(e){var t=l.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},c=function(e){var t=p(e.components);return l.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var i=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(i),m=n,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return i?l.createElement(f,a(a({ref:t},c),{},{components:i})):l.createElement(f,a({ref:t},c))}));function m(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=i.length,a=new Array(r);a[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,a[1]=o;for(var p=2;p<r;p++)a[p]=i[p];return l.createElement.apply(null,a)}return l.createElement.apply(null,i)}d.displayName="MDXCreateElement"},19445:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var l=i(87462),n=(i(67294),i(3905));const r={title:"module lang::rascal::tutor::Compiler"},a=void 0,o={unversionedId:"Library/lang/rascal/tutor/Compiler",id:"Library/lang/rascal/tutor/Compiler",title:"module lang::rascal::tutor::Compiler",description:"Usage",source:"@site/docs/Library/lang/rascal/tutor/Compiler.md",sourceDirName:"Library/lang/rascal/tutor",slug:"/Library/lang/rascal/tutor/Compiler",permalink:"/docs/Library/lang/rascal/tutor/Compiler",draft:!1,tags:[],version:"current",frontMatter:{title:"module lang::rascal::tutor::Compiler"},sidebar:"tutorialSidebar",previous:{title:"lang::rascal::tutor",permalink:"/docs/Library/lang/rascal/tutor/"},next:{title:"module lang::rascal::tutor::Includer",permalink:"/docs/Library/lang/rascal/tutor/Includer"}},s={},p=[{value:"Usage",id:"usage",level:4},{value:"Synopsis",id:"synopsis",level:4},{value:"Description",id:"description",level:4},{value:"function defaultCompile",id:"lang-rascal-tutor-Compiler-defaultCompile",level:2},{value:"function compile",id:"lang-rascal-tutor-Compiler-compile",level:2},{value:"Synopsis",id:"synopsis-1",level:4},{value:"function dropSlash",id:"lang-rascal-tutor-Compiler-dropSlash",level:2},{value:"function compileCourse",id:"lang-rascal-tutor-Compiler-compileCourse",level:2},{value:"function compile",id:"lang-rascal-tutor-Compiler-compile",level:2},{value:"function compileDirectory",id:"lang-rascal-tutor-Compiler-compileDirectory",level:2},{value:"function generateIndexFile",id:"lang-rascal-tutor-Compiler-generateIndexFile",level:2},{value:"function compileRascalFile",id:"lang-rascal-tutor-Compiler-compileRascalFile",level:2},{value:"Synopsis",id:"synopsis-2",level:4},{value:"function createDetailsList",id:"lang-rascal-tutor-Compiler-createDetailsList",level:2},{value:"Synopsis",id:"synopsis-3",level:4},{value:"function compileMarkdownFile",id:"lang-rascal-tutor-Compiler-compileMarkdownFile",level:2},{value:"function compileMarkdown",id:"lang-rascal-tutor-Compiler-compileMarkdown",level:2},{value:"function compileRascalShell",id:"lang-rascal-tutor-Compiler-compileRascalShell",level:2},{value:"function compileRascalShellPrepare",id:"lang-rascal-tutor-Compiler-compileRascalShellPrepare",level:2},{value:"Synopsis",id:"synopsis-4",level:4},{value:"function skipEmpty",id:"lang-rascal-tutor-Compiler-skipEmpty",level:2},{value:"function filterErrors",id:"lang-rascal-tutor-Compiler-filterErrors",level:2},{value:"function length",id:"lang-rascal-tutor-Compiler-length",level:2}],c={toc:p};function u(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,l.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h4",{id:"usage"},"Usage"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"import lang::rascal::tutor::Compiler;")),(0,n.kt)("h4",{id:"synopsis"},"Synopsis"),(0,n.kt)("p",null,"compiles .rsc and .md files to markdown by executing Rascal-specific code and inlining its output"),(0,n.kt)("h4",{id:"description"},"Description"),(0,n.kt)("p",null,"  This compiler collects .rsc files and .md files from a PathConfig's srcs folders."),(0,n.kt)("p",null,"  Every .rsc file is compiled to a .md file with an outline of the declarations contained\nin the file and the contents of the @synopsis, @description, @pitfalls, @benefits, @examples\ntags with those declarations. @doc is also supported for backward compatibility's purposes.\nThe resulting markdown is processed by the rest of the compiler, as if written by hand."),(0,n.kt)("p",null,"  Every .md file is scanned for rascal-shell between triple backticks elements. The contents between the backticks are\nexecuted by a private Rascal REPL and the output is captured in different ways. Normal IO\nvia stderr and stdout is literally printed back and HTML or image output is inlined into\nthe document."),(0,n.kt)("p",null,"  For (nested) folders in the srcs folders, which do not contain an ",(0,n.kt)("inlineCode",{parentName:"p"},"index.md")," file, or\na ",(0,n.kt)("inlineCode",{parentName:"p"},"<name>.md")," file where the name is equal to the name of the current folder, a fresh index.md\nfile is generated."),(0,n.kt)("h2",{id:"lang-rascal-tutor-Compiler-defaultCompile"},"function defaultCompile"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"void defaultCompile()"))),(0,n.kt)("h2",{id:"lang-rascal-tutor-Compiler-compile"},"function compile"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"list[Message] compile(PathConfig pcfg, CommandExecutor exec = createExecutor(pcfg))"))),(0,n.kt)("h4",{id:"synopsis-1"},"Synopsis"),(0,n.kt)("p",null,"compiles each pcfg.srcs folder as a course root"),(0,n.kt)("h2",{id:"lang-rascal-tutor-Compiler-dropSlash"},"function dropSlash"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"loc dropSlash(loc src)"))),(0,n.kt)("h2",{id:"lang-rascal-tutor-Compiler-compileCourse"},"function compileCourse"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"list[Message] compileCourse(loc root, PathConfig pcfg, CommandExecutor exec, Index ind)"))),(0,n.kt)("h2",{id:"lang-rascal-tutor-Compiler-compile"},"function compile"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"list[Message] compile(loc src, PathConfig pcfg, CommandExecutor exec, Index ind, int sidebar_position=-1)"))),(0,n.kt)("h2",{id:"lang-rascal-tutor-Compiler-compileDirectory"},"function compileDirectory"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"list[Message] compileDirectory(loc d, PathConfig pcfg, CommandExecutor exec, Index ind, int sidebar_position=-1)"))),(0,n.kt)("h2",{id:"lang-rascal-tutor-Compiler-generateIndexFile"},"function generateIndexFile"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"list[Message] generateIndexFile(loc d, PathConfig pcfg, int sidebar_position=-1)"))),(0,n.kt)("h2",{id:"lang-rascal-tutor-Compiler-compileRascalFile"},"function compileRascalFile"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"list[Message] compileRascalFile(loc m, PathConfig pcfg, CommandExecutor exec, Index ind)"))),(0,n.kt)("h4",{id:"synopsis-2"},"Synopsis"),(0,n.kt)("p",null,"Translates Rascal source files to docusaurus markdown."),(0,n.kt)("h2",{id:"lang-rascal-tutor-Compiler-createDetailsList"},"function createDetailsList"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"list[str] createDetailsList(loc m, PathConfig pcfg)"))),(0,n.kt)("h4",{id:"synopsis-3"},"Synopsis"),(0,n.kt)("p",null,"This uses another nested directory listing to construct information for the TOC embedded in the current document."),(0,n.kt)("h2",{id:"lang-rascal-tutor-Compiler-compileMarkdownFile"},"function compileMarkdownFile"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"list[Message] compileMarkdownFile(loc m, PathConfig pcfg, CommandExecutor exec, Index ind, int sidebar_position=-1)"))),(0,n.kt)("h2",{id:"lang-rascal-tutor-Compiler-compileMarkdown"},"function compileMarkdown"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"list[Output] compileMarkdown(loc m, PathConfig pcfg, CommandExecutor exec, Index ind, int sidebar_position=-1)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"list[Output] compileMarkdown([str first:/^\\s*``````/, *block, str second:/^``````/, *str rest], int line, int offset, PathConfig pcfg, CommandExecutor exec, Index ind, list[str] dtls, int sidebar_position=-1)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"list[Output] compileMarkdown([str first:/^\\s*```rascal-include<rest1:.*>$/, *str components, /^\\s*```/, *str rest2], int line, int offset, PathConfig pcfg, CommandExecutor exec, Index ind, list[str] dtls, int sidebar_position=-1)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"list[Output] compileMarkdown([str first:/^\\s*```rascal-shell<rest1:.*>$/, *block, /^\\s*```/, *str rest2], int line, int offset, PathConfig pcfg, CommandExecutor exec, Index ind, list[str] dtls, int sidebar_position=-1)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"list[Output] compileMarkdown([str first:/^\\s*```rascal-prepare<rest1:.*>$/, *block, /^\\s*```/, *str rest2], int line, int offset, PathConfig pcfg, CommandExecutor exec, Index ind, list[str] dtls, int sidebar_position=-1)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"list[Output] compileMarkdown([str first:/^\\s*\\(\\(\\(\\s*TOC\\s*\\)\\)\\)\\s*$/, *str rest], int line, int offset, PathConfig pcfg, CommandExecutor exec, Index ind, list[str] dtls, int sidebar_position=-1)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"list[Output] compileMarkdown([str first:/^\\s*\\(\\(\\(\\s*TODO<msg:[^\\)]*>\\s*\\)\\)\\)\\s*$/, *str rest], int line, int offset, PathConfig pcfg, CommandExecutor exec, Index ind, list[str] dtls, int sidebar_position=-1)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"list[Output] compileMarkdown([str first:/^\\s*\\(\\(\\|<url:[^\\|]+>\\|\\)\\)\\s*$/, *str rest], int line, int offset, PathConfig pcfg, CommandExecutor exec, Index ind, list[str] dtls, int sidebar_position=-1)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"list[Output] compileMarkdown([/^<prefix:.*>~<digits:[aeh-pr-vx0-9\\(\\)+\\-]+>~<postfix:.*>$/, *str rest], int line, int offset, PathConfig pcfg, CommandExecutor exec, Index ind, list[str] dtls, int sidebar_position=-1)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"list[Output] compileMarkdown([/^<prefix:.*>~<digits:[^~]*[^aeh-pr-vx0-9]+[^~]*>~<postfix:.*>$/, *str rest], int line, int offset, PathConfig pcfg, CommandExecutor exec, Index ind, list[str] dtls, int sidebar_position=-1)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"list[Output] compileMarkdown([/^<prefix:.*>\\[<title:[^\\]]+>\\]\\(\\(<link:[A-Za-z0-9\\-\\ \\t\\.\\:]+>\\)\\)<postfix:.*>$/, *str rest], int line, int offset, PathConfig pcfg, CommandExecutor exec, Index ind, list[str] dtls, int sidebar_position=-1)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"default list[Output] compileMarkdown([/^<prefix:.*>\\(\\(<link:[A-Za-z0-9\\-\\ \\t\\.\\:]+>\\)\\)<postfix:.*>$/, *str rest], int line, int offset, PathConfig pcfg, CommandExecutor exec, Index ind, list[str] dtls, int sidebar_position=-1)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"list[Output] compileMarkdown([a:/^\\-\\-\\-\\s*$/, *str header, b:/^\\-\\-\\-\\s*$/, *str rest], int line, int offset, PathConfig pcfg, CommandExecutor exec, Index ind, list[str] dtls, int sidebar_position=-1)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"list[Output] compileMarkdown([str first:/^\\s*#+\\s+<title:.*>$/, *str emptySection, nextSection:/^\\s*#+\\s+.*$/, *str rest], int line, int offset, PathConfig pcfg, CommandExecutor exec, Index ind, list[str] dtls, int sidebar_position=-1)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"list[Output] compileMarkdown([str first:/^\\s*#+\\s+<title:.*>$/, *str body, nextSection:/^\\s*#+\\s+.*$/, *str rest], int line, int offset, PathConfig pcfg, CommandExecutor exec, Index ind, list[str] dtls, int sidebar_position=-1)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"list[Output] compileMarkdown([str first:/^\\s*#+\\s+<title:.*>$/, *str emptySection, /^\\s*$/], int line, int offset, PathConfig pcfg, CommandExecutor exec, Index ind, list[str] dtls, int sidebar_position=-1)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"list[Output] compileMarkdown([], int _/*line*/, int _/*offset*/, PathConfig _, CommandExecutor _, Index _, list[str] _)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"default list[Output] compileMarkdown([str head, *str tail], int line, int offset, PathConfig pcfg, CommandExecutor exec, Index ind, list[str] dtls, int sidebar_position=-1)"))),(0,n.kt)("h2",{id:"lang-rascal-tutor-Compiler-compileRascalShell"},"function compileRascalShell"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"list[Output] compileRascalShell(list[str] block, bool allowErrors, bool isContinued, int lineOffset, int offset, PathConfig pcfg, CommandExecutor exec, Index _)"))),(0,n.kt)("h2",{id:"lang-rascal-tutor-Compiler-compileRascalShellPrepare"},"function compileRascalShellPrepare"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"list[Output] compileRascalShellPrepare(list[str] block, bool isContinued, int lineOffset, int offset, PathConfig pcfg, CommandExecutor exec, Index _)"))),(0,n.kt)("h4",{id:"synopsis-4"},"Synopsis"),(0,n.kt)("p",null,"Prepare blocks run the REPL but show no input or output"),(0,n.kt)("h2",{id:"lang-rascal-tutor-Compiler-skipEmpty"},"function skipEmpty"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"list[str] skipEmpty([/^s*$/, *str rest])")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"default list[str] skipEmpty(list[str] lst)"))),(0,n.kt)("h2",{id:"lang-rascal-tutor-Compiler-filterErrors"},"function filterErrors"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"str filterErrors(str errorStream)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"list[str] filterErrors([/^warning, ambiguity/, *str rest])")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"list[str] filterErrors([/^Generating parser/, *str rest])")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"default list[str] filterErrors([str head, *str tail])")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"list[str] filterErrors([])"))),(0,n.kt)("h2",{id:"lang-rascal-tutor-Compiler-length"},"function length"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"int length(list[str] lines)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"int length(str line)"))))}u.isMDXComponent=!0}}]);