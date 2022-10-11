"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[13733],{3905:(e,t,l)=>{l.d(t,{Zo:()=>c,kt:()=>f});var i=l(67294);function n(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function a(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,i)}return l}function r(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?a(Object(l),!0).forEach((function(t){n(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function o(e,t){if(null==e)return{};var l,i,n=function(e,t){if(null==e)return{};var l,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)l=a[i],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)l=a[i],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var u=i.createContext({}),s=function(e){var t=i.useContext(u),l=t;return e&&(l="function"==typeof e?e(t):r(r({},t),e)),l},c=function(e){var t=s(e.components);return i.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var l=e.components,n=e.mdxType,a=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=s(l),f=n,m=p["".concat(u,".").concat(f)]||p[f]||d[f]||a;return l?i.createElement(m,r(r({ref:t},c),{},{components:l})):i.createElement(m,r({ref:t},c))}));function f(e,t){var l=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=l.length,r=new Array(a);r[0]=p;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:n,r[1]=o;for(var s=2;s<a;s++)r[s]=l[s];return i.createElement.apply(null,r)}return i.createElement.apply(null,l)}p.displayName="MDXCreateElement"},63679:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>u,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var i=l(87462),n=(l(67294),l(3905));const a={title:"module util::Reflective"},r=void 0,o={unversionedId:"Library/util/Reflective",id:"Library/util/Reflective",title:"module util::Reflective",description:"Usage",source:"@site/docs/Library/util/Reflective.md",sourceDirName:"Library/util",slug:"/Library/util/Reflective",permalink:"/docs/Library/util/Reflective",draft:!1,tags:[],version:"current",frontMatter:{title:"module util::Reflective"},sidebar:"tutorialSidebar",previous:{title:"module util::Random",permalink:"/docs/Library/util/Random"},next:{title:"module util::SemVer",permalink:"/docs/Library/util/SemVer"}},u={},s=[{value:"Usage",id:"usage",level:4},{value:"function getLineSeparator",id:"util-Reflective-getLineSeparator",level:2},{value:"function evalCommands",id:"util-Reflective-evalCommands",level:2},{value:"function parseModule",id:"util-Reflective-parseModule",level:2},{value:"function parseModuleWithSpaces",id:"util-Reflective-parseModuleWithSpaces",level:2},{value:"data RascalConfigMode",id:"util-Reflective-RascalConfigMode",level:2},{value:"data PathConfig",id:"util-Reflective-PathConfig",level:2},{value:"data RascalManifest",id:"util-Reflective-RascalManifest",level:2},{value:"data JavaBundleManifest",id:"util-Reflective-JavaBundleManifest",level:2},{value:"function metafile",id:"util-Reflective-metafile",level:2},{value:"function applyManifests",id:"util-Reflective-applyManifests",level:2},{value:"function makeFileName",id:"util-Reflective-makeFileName",level:2},{value:"function getSearchPathLoc",id:"util-Reflective-getSearchPathLoc",level:2},{value:"function getModuleLocation",id:"util-Reflective-getModuleLocation",level:2},{value:"function splitFileExtension",id:"util-Reflective-splitFileExtension",level:2},{value:"function getModuleName",id:"util-Reflective-getModuleName",level:2},{value:"function getDerivedReadLoc",id:"util-Reflective-getDerivedReadLoc",level:2},{value:"Synopsis",id:"synopsis",level:4},{value:"Description",id:"description",level:4},{value:"Examples",id:"examples",level:4},{value:"Benefits",id:"benefits",level:4},{value:"function getDerivedWriteLoc",id:"util-Reflective-getDerivedWriteLoc",level:2},{value:"Synopsis",id:"synopsis-1",level:4},{value:"Description",id:"description-1",level:4},{value:"Examples",id:"examples-1",level:4},{value:"Benefits",id:"benefits-1",level:4},{value:"function getProjectPathConfig",id:"util-Reflective-getProjectPathConfig",level:2},{value:"function inCompiledMode",id:"util-Reflective-inCompiledMode",level:2},{value:"function diff",id:"util-Reflective-diff",level:2},{value:"function watch",id:"util-Reflective-watch",level:2},{value:"function getFingerprint",id:"util-Reflective-getFingerprint",level:2},{value:"function getFingerprintNode",id:"util-Reflective-getFingerprintNode",level:2},{value:"function throwNullPointerException",id:"util-Reflective-throwNullPointerException",level:2},{value:"function getRascalReservedIdentifiers",id:"util-Reflective-getRascalReservedIdentifiers",level:2},{value:"function getRascalVersion",id:"util-Reflective-getRascalVersion",level:2},{value:"function newRascalProject",id:"util-Reflective-newRascalProject",level:2},{value:"function pomFile",id:"util-Reflective-pomFile",level:2},{value:"function emptyModule",id:"util-Reflective-emptyModule",level:2},{value:"function rascalMF",id:"util-Reflective-rascalMF",level:2},{value:"function pomXml",id:"util-Reflective-pomXml",level:2}],c={toc:s};function d(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,i.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h4",{id:"usage"},"Usage"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"import util::Reflective;")),(0,n.kt)("h2",{id:"util-Reflective-getLineSeparator"},"function getLineSeparator"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"str getLineSeparator()"))),(0,n.kt)("p",null,"Returns the system-dependent line separator string"),(0,n.kt)("h2",{id:"util-Reflective-evalCommands"},"function evalCommands"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"lrel[str result, str out, str err] evalCommands(list[str] command, loc org)"))),(0,n.kt)("h2",{id:"util-Reflective-parseModule"},"function parseModule"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"lang::rascal::\\syntax::Rascal::Module parseModule(loc location)"))),(0,n.kt)("p",null,"Just parse a module at a given location without any furter processing (i.e., fragment parsing) or side-effects (e.g. module loading) "),(0,n.kt)("h2",{id:"util-Reflective-parseModuleWithSpaces"},"function parseModuleWithSpaces"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"start[Module] parseModuleWithSpaces(loc location)"))),(0,n.kt)("p",null,"Parse a module (including surounding spaces) at a given location without any furter processing (i.e., fragment parsing) or side-effects (e.g. module loading) "),(0,n.kt)("h2",{id:"util-Reflective-RascalConfigMode"},"data RascalConfigMode"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rascal"},"data RascalConfigMode  \n     = compiler()\n     | interpreter()\n     ;\n")),(0,n.kt)("h2",{id:"util-Reflective-PathConfig"},"data PathConfig"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rascal"},"data PathConfig  \n     = pathConfig(list[loc] srcs = [|std:///|],        // List of directories to search for source files\n               list[loc] courses = [|courses:///|], // List of locations to search for course source files\n               loc bin = |home:///bin/|,            // Global directory for derived files outside projects\n               list[loc] libs = [|lib://rascal/|],          // List of directories to search source for derived files\n               list[loc] javaCompilerPath = [], // TODO: must generate the same defaults as in PathConfig \n               list[loc] classloaders = [|system:///|]      // TODO: must generate the same defaults as in PathConfig\n              )\n     ;\n")),(0,n.kt)("h2",{id:"util-Reflective-RascalManifest"},"data RascalManifest"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rascal"},'data RascalManifest  \n     = rascalManifest(\n      str \\Project-Name = "Project",\n      str \\Main-Module = "Plugin",\n      str \\Main-Function = "main", \n      list[str] Source = ["src"],\n      str Bin = "bin",\n      list[str] \\Required-Libraries = [],\n      list[str] \\Required-Dependencies = []\n    )\n     ;\n')),(0,n.kt)("h2",{id:"util-Reflective-JavaBundleManifest"},"data JavaBundleManifest"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rascal"},'data JavaBundleManifest  \n     = javaManifest(\n      str \\Manifest-Version = "",\n      str \\Bundle-SymbolicName = "",\n      str \\Bundle-RequiredExecutionEnvironment = "JavaSE-1.8",\n      list[str] \\Require-Bundle = [],\n      str \\Bundle-Version = "0.0.0.qualifier",\n      list[str] \\Export-Package = [],\n      str \\Bundle-Vendor = "",\n      str \\Bundle-Name = "",\n      list[str] \\Bundle-ClassPath = [],\n      list[str] \\Import-Package = [] \n    )\n     ;\n')),(0,n.kt)("h2",{id:"util-Reflective-metafile"},"function metafile"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"loc metafile(loc l)"))),(0,n.kt)("h2",{id:"util-Reflective-applyManifests"},"function applyManifests"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"PathConfig applyManifests(PathConfig cfg)"))),(0,n.kt)("p",null,"  Converts a PathConfig and replaces all references to roots of projects or bundles\nby the folders which are nested under these roots as configured in their respective\nMETA-INF/RASCAL.MF files."),(0,n.kt)("h2",{id:"util-Reflective-makeFileName"},"function makeFileName"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},'str makeFileName(str qualifiedModuleName, str extension = "rsc")'))),(0,n.kt)("h2",{id:"util-Reflective-getSearchPathLoc"},"function getSearchPathLoc"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"loc getSearchPathLoc(str filePath, PathConfig pcfg)"))),(0,n.kt)("h2",{id:"util-Reflective-getModuleLocation"},"function getModuleLocation"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},'loc getModuleLocation(str qualifiedModuleName,  PathConfig pcfg, str extension = "rsc")'))),(0,n.kt)("h2",{id:"util-Reflective-splitFileExtension"},"function splitFileExtension"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"tuple[str,str] splitFileExtension(str path)"))),(0,n.kt)("h2",{id:"util-Reflective-getModuleName"},"function getModuleName"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},'str getModuleName(loc moduleLoc,  PathConfig pcfg, set[str] extensions = {"tc", "tpl"})'))),(0,n.kt)("h2",{id:"util-Reflective-getDerivedReadLoc"},"function getDerivedReadLoc"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},'tuple[bool, loc] getDerivedReadLoc(str qualifiedModuleName, str extension, PathConfig pcfg, set[str] srcExtensions = {"rsc", "mu"}, str rootDir = "")'))),(0,n.kt)("h4",{id:"synopsis"},"Synopsis"),(0,n.kt)("p",null,"Derive a location from a given module name for reading"),(0,n.kt)("h4",{id:"description"},"Description"),(0,n.kt)("p",null,"Given a module name, a file name extension, and a PathConfig,\na path name is constructed from the module name + extension."),(0,n.kt)("p",null,"If a file F with this path exists in one of the directories in the PathConfig,\nthen the pair <true, F> is returned. Otherwise <false, some error location> is returned."),(0,n.kt)("p",null,'For a source extension (typically "rsc" or "mu" but this can be configured) srcs is searched, otherwise binPath + libs.'),(0,n.kt)("h4",{id:"examples"},"Examples"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>import util::Reflective;\nok\nrascal>getDerivedReadLoc("List", "rsc", pathConfig());\ntuple[bool,loc]: <true,|std:///List.rsc|>\nrascal>getDerivedReadLoc("experiments::Compiler::Compile", "rvm", pathConfig());\ntuple[bool,loc]: <false,|error:///|>\nrascal>getDerivedReadLoc("experiments::Compiler::muRascal2RVM::Library", "mu", pathConfig());\ntuple[bool,loc]: <false,|error:///|>\n')),(0,n.kt)("h4",{id:"benefits"},"Benefits"),(0,n.kt)("p",null,"This function is useful for type checking and compilation tasks, when derived information related to source modules has to be read\nfrom locations in different, configurable, directories."),(0,n.kt)("h2",{id:"util-Reflective-getDerivedWriteLoc"},"function getDerivedWriteLoc"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},'loc getDerivedWriteLoc(str qualifiedModuleName, str extension, PathConfig pcfg, set[str] srcExtensions = {"rsc", "mu"}, str rootDir = "")'))),(0,n.kt)("h4",{id:"synopsis-1"},"Synopsis"),(0,n.kt)("p",null,"Derive a location from a given module name for writing"),(0,n.kt)("h4",{id:"description-1"},"Description"),(0,n.kt)("p",null,"Given a module name, a file name extension, and a PathConfig,\na path name is constructed from the module name + extension."),(0,n.kt)("p",null,"For source modules, a writable location cannot be derived.\nFor other modules, a location for this path in bin will be returned."),(0,n.kt)("h4",{id:"examples-1"},"Examples"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>import util::Reflective;\nok\nrascal>getDerivedWriteLoc("List", "rvm", pathConfig());\nloc: |home:///bin/List.rvm|\nrascal>getDerivedWriteLoc("experiments::Compiler::Compile", "rvm", pathConfig());\nloc: |home:///bin/experiments/Compiler/Compile.rvm|\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rascal-shell",metastring:",error",",error":!0},'rascal>getDerivedWriteLoc("experiments::Compiler::muRascal2RVM::Library", "rsc", pathConfig());\n|prompt:///|(0,18,<1,0>,<1,18>): Undeclared variable: getDerivedWriteLoc\nAdvice: |http://tutor.rascal-mpl.org/Errors/Static/UndeclaredVariable/UndeclaredVariable.html|\nok\n')),(0,n.kt)("h4",{id:"benefits-1"},"Benefits"),(0,n.kt)("p",null,"This function is useful for type checking and compilation tasks, when derived information related to source modules has to be written\nto locations in separate, configurable, directories."),(0,n.kt)("h2",{id:"util-Reflective-getProjectPathConfig"},"function getProjectPathConfig"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"PathConfig getProjectPathConfig(loc projectRoot, RascalConfigMode mode = compiler())"))),(0,n.kt)("h2",{id:"util-Reflective-inCompiledMode"},"function inCompiledMode"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"bool inCompiledMode()"))),(0,n.kt)("p",null,"Is the current Rascal code executed by the compiler or the interpreter?"),(0,n.kt)("h2",{id:"util-Reflective-diff"},"function diff"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"str diff(value old, value new)"))),(0,n.kt)("p",null,"Give a textual diff between two values."),(0,n.kt)("h2",{id:"util-Reflective-watch"},"function watch"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"&T watch(type[&T] tp, &T val, str name)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"&T watch(type[&T] tp, &T val, str name, value suffix)"))),(0,n.kt)("p",null,"Watch value val: "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"running in interpreted mode: write val to a file, "),(0,n.kt)("li",{parentName:"ul"},"running in compiled mode: compare val with previously written value")),(0,n.kt)("h2",{id:"util-Reflective-getFingerprint"},"function getFingerprint"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"int getFingerprint(value val, bool concretePatterns)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"int getFingerprint(value val, int arity, bool concretePatterns)"))),(0,n.kt)("p",null,"Compute a fingerprint of a value for the benefit of the compiler and the compiler runtime"),(0,n.kt)("h2",{id:"util-Reflective-getFingerprintNode"},"function getFingerprintNode"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"int getFingerprintNode(node nd)"))),(0,n.kt)("p",null,"Compute a fingerprint of a complete node for the benefit of the compiler and the compiler runtime"),(0,n.kt)("h2",{id:"util-Reflective-throwNullPointerException"},"function throwNullPointerException"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"void throwNullPointerException()"))),(0,n.kt)("p",null,"Throw a raw Java NullPointerException, to help simulate an unexpected exception in test scenarios"),(0,n.kt)("h2",{id:"util-Reflective-getRascalReservedIdentifiers"},"function getRascalReservedIdentifiers"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"set[str] getRascalReservedIdentifiers()"))),(0,n.kt)("p",null,"Return a list of all Rascal reserved identifiers (a.k.a. keywords)"),(0,n.kt)("h2",{id:"util-Reflective-getRascalVersion"},"function getRascalVersion"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"str getRascalVersion()"))),(0,n.kt)("h2",{id:"util-Reflective-newRascalProject"},"function newRascalProject"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},'void newRascalProject(loc folder, str name="my-project", str group="org.rascalmpl", str version="0.1.0-SNAPSHOT")'))),(0,n.kt)("p",null,"Create a folder structure for an empty Rascal project with Maven support"),(0,n.kt)("h2",{id:"util-Reflective-pomFile"},"function pomFile"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"loc pomFile(loc folder)"))),(0,n.kt)("h2",{id:"util-Reflective-emptyModule"},"function emptyModule"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"str emptyModule()"))),(0,n.kt)("h2",{id:"util-Reflective-rascalMF"},"function rascalMF"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"str rascalMF(str name)"))),(0,n.kt)("h2",{id:"util-Reflective-pomXml"},"function pomXml"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"str pomXml(str name, str group, str version)"))))}d.isMDXComponent=!0}}]);