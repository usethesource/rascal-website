"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[91275],{3905:(e,a,l)=>{l.d(a,{Zo:()=>u,kt:()=>v});var t=l(67294);function n(e,a,l){return a in e?Object.defineProperty(e,a,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[a]=l,e}function i(e,a){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),l.push.apply(l,t)}return l}function r(e){for(var a=1;a<arguments.length;a++){var l=null!=arguments[a]?arguments[a]:{};a%2?i(Object(l),!0).forEach((function(a){n(e,a,l[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):i(Object(l)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(l,a))}))}return e}function o(e,a){if(null==e)return{};var l,t,n=function(e,a){if(null==e)return{};var l,t,n={},i=Object.keys(e);for(t=0;t<i.length;t++)l=i[t],a.indexOf(l)>=0||(n[l]=e[l]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)l=i[t],a.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var s=t.createContext({}),c=function(e){var a=t.useContext(s),l=a;return e&&(l="function"==typeof e?e(a):r(r({},a),e)),l},u=function(e){var a=c(e.components);return t.createElement(s.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},d=t.forwardRef((function(e,a){var l=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(l),v=n,p=d["".concat(s,".").concat(v)]||d[v]||m[v]||i;return l?t.createElement(p,r(r({ref:a},u),{},{components:l})):t.createElement(p,r({ref:a},u))}));function v(e,a){var l=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=l.length,r=new Array(i);r[0]=d;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,r[1]=o;for(var c=2;c<i;c++)r[c]=l[c];return t.createElement.apply(null,r)}return t.createElement.apply(null,l)}d.displayName="MDXCreateElement"},73900:(e,a,l)=>{l.r(a),l.d(a,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var t=l(87462),n=(l(67294),l(3905));const i={title:"module lang::java::m3::Core"},r=void 0,o={unversionedId:"Library/lang/java/m3/Core",id:"Library/lang/java/m3/Core",title:"module lang::java::m3::Core",description:"Usage",source:"@site/docs/Library/lang/java/m3/Core.md",sourceDirName:"Library/lang/java/m3",slug:"/Library/lang/java/m3/Core",permalink:"/docs/Library/lang/java/m3/Core",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Library/lang/java/m3/Core.md",tags:[],version:"current",frontMatter:{title:"module lang::java::m3::Core"},sidebar:"tutorialSidebar",previous:{title:"module lang::java::m3::AST",permalink:"/docs/Library/lang/java/m3/AST"},next:{title:"module lang::java::m3::Registry",permalink:"/docs/Library/lang/java/m3/Registry"}},s={},c=[{value:"Usage",id:"usage",level:4},{value:"Synopsis",id:"synopsis",level:4},{value:"data M3",id:"lang-java-m3-Core-M3",level:2},{value:"data Language",id:"lang-java-m3-Core-Language",level:2},{value:"function composeJavaM3",id:"lang-java-m3-Core-composeJavaM3",level:2},{value:"function diffJavaM3",id:"lang-java-m3-Core-diffJavaM3",level:2},{value:"function createM3FromFile",id:"lang-java-m3-Core-createM3FromFile",level:2},{value:"function createM3sFromFiles",id:"lang-java-m3-Core-createM3sFromFiles",level:2},{value:"function createM3FromFiles",id:"lang-java-m3-Core-createM3FromFiles",level:2},{value:"function createM3sAndAstsFromFiles",id:"lang-java-m3-Core-createM3sAndAstsFromFiles",level:2},{value:"function createM3FromString",id:"lang-java-m3-Core-createM3FromString",level:2},{value:"function createM3FromJarClass",id:"lang-java-m3-Core-createM3FromJarClass",level:2},{value:"function createM3FromSingleClass",id:"lang-java-m3-Core-createM3FromSingleClass",level:2},{value:"function createM3FromJarFile",id:"lang-java-m3-Core-createM3FromJarFile",level:2},{value:"function createM3FromDirectory",id:"lang-java-m3-Core-createM3FromDirectory",level:2},{value:"Synopsis",id:"synopsis-1",level:4},{value:"function createM3FromJar",id:"lang-java-m3-Core-createM3FromJar",level:2},{value:"function unregisterJavaProject",id:"lang-java-m3-Core-unregisterJavaProject",level:2},{value:"function getMethodSignature",id:"lang-java-m3-Core-getMethodSignature",level:2},{value:"function isCompilationUnit",id:"lang-java-m3-Core-isCompilationUnit",level:2},{value:"function isPackage",id:"lang-java-m3-Core-isPackage",level:2},{value:"function isClass",id:"lang-java-m3-Core-isClass",level:2},{value:"function isConstructor",id:"lang-java-m3-Core-isConstructor",level:2},{value:"function isMethod",id:"lang-java-m3-Core-isMethod",level:2},{value:"function isParameter",id:"lang-java-m3-Core-isParameter",level:2},{value:"function isVariable",id:"lang-java-m3-Core-isVariable",level:2},{value:"function isField",id:"lang-java-m3-Core-isField",level:2},{value:"function isInterface",id:"lang-java-m3-Core-isInterface",level:2},{value:"function isEnum",id:"lang-java-m3-Core-isEnum",level:2},{value:"function isType",id:"lang-java-m3-Core-isType",level:2},{value:"function files",id:"lang-java-m3-Core-files",level:2},{value:"function declaredMethods",id:"lang-java-m3-Core-declaredMethods",level:2},{value:"function declaredFields",id:"lang-java-m3-Core-declaredFields",level:2},{value:"function declaredFieldsX",id:"lang-java-m3-Core-declaredFieldsX",level:2},{value:"function declaredTopTypes",id:"lang-java-m3-Core-declaredTopTypes",level:2},{value:"function declaredSubTypes",id:"lang-java-m3-Core-declaredSubTypes",level:2},{value:"function classes",id:"lang-java-m3-Core-classes",level:2},{value:"function interfaces",id:"lang-java-m3-Core-interfaces",level:2},{value:"function packages",id:"lang-java-m3-Core-packages",level:2},{value:"function variables",id:"lang-java-m3-Core-variables",level:2},{value:"function parameters",id:"lang-java-m3-Core-parameters",level:2},{value:"function fields",id:"lang-java-m3-Core-fields",level:2},{value:"function methods",id:"lang-java-m3-Core-methods",level:2},{value:"function constructors",id:"lang-java-m3-Core-constructors",level:2},{value:"function enums",id:"lang-java-m3-Core-enums",level:2},{value:"function types",id:"lang-java-m3-Core-types",level:2},{value:"function elements",id:"lang-java-m3-Core-elements",level:2},{value:"function fields",id:"lang-java-m3-Core-fields",level:2},{value:"function methods",id:"lang-java-m3-Core-methods",level:2},{value:"function constructors",id:"lang-java-m3-Core-constructors",level:2},{value:"function nestedClasses",id:"lang-java-m3-Core-nestedClasses",level:2}],u={toc:c};function m(e){let{components:a,...l}=e;return(0,n.kt)("wrapper",(0,t.Z)({},u,l,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h4",{id:"usage"},"Usage"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"import lang::java::m3::Core;")),(0,n.kt)("h4",{id:"synopsis"},"Synopsis"),(0,n.kt)("p",null,"Extends the M3 ",(0,n.kt)("a",{parentName:"p",href:"/docs/Library/analysis/m3/Core"},"Core")," with Java specific concepts such as inheritance and overriding."),(0,n.kt)("h2",{id:"lang-java-m3-Core-M3"},"data M3"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rascal"},"data M3 (\n    rel[loc from, loc to] extends = {},            // classes extending classes and interfaces extending interfaces\n    rel[loc from, loc to] implements = {},         // classes implementing interfaces\n    rel[loc from, loc to] methodInvocation = {},   // methods calling each other (including constructors)\n    rel[loc from, loc to] fieldAccess = {},        // code using data (like fields)\n    rel[loc from, loc to] typeDependency = {},     // using a type literal in some code (types of variables, annotations)\n    rel[loc from, loc to] methodOverrides = {},    // which method override which other methods\n    rel[loc declaration, loc annotation] annotations = {}\n)\n")),(0,n.kt)("h2",{id:"lang-java-m3-Core-Language"},"data Language"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rascal"},'data Language (str version="") \n     = java()\n     ;\n')),(0,n.kt)("h2",{id:"lang-java-m3-Core-composeJavaM3"},"function composeJavaM3"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"M3 composeJavaM3(loc id, set[M3] models)"))),(0,n.kt)("h2",{id:"lang-java-m3-Core-diffJavaM3"},"function diffJavaM3"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"M3 diffJavaM3(loc id, list[M3] models)"))),(0,n.kt)("h2",{id:"lang-java-m3-Core-createM3FromFile"},"function createM3FromFile"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},'M3 createM3FromFile(loc file, bool errorRecovery = false, list[loc] sourcePath = [], list[loc] classPath = [], str javaVersion = "1.7")'))),(0,n.kt)("h2",{id:"lang-java-m3-Core-createM3sFromFiles"},"function createM3sFromFiles"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},'set[M3] createM3sFromFiles(set[loc] files, bool errorRecovery = false, list[loc] sourcePath = [], list[loc] classPath = [], str javaVersion = "1.7")'))),(0,n.kt)("h2",{id:"lang-java-m3-Core-createM3FromFiles"},"function createM3FromFiles"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},'M3 createM3FromFiles(loc projectName, set[loc] files, bool errorRecovery = false, list[loc] sourcePath = [], list[loc] classPath = [], str javaVersion = "1.7")'))),(0,n.kt)("h2",{id:"lang-java-m3-Core-createM3sAndAstsFromFiles"},"function createM3sAndAstsFromFiles"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},'tuple[set[M3], set[Declaration]] createM3sAndAstsFromFiles(set[loc] files, bool errorRecovery = false, list[loc] sourcePath = [], list[loc] classPath = [], str javaVersion = "1.7")'))),(0,n.kt)("h2",{id:"lang-java-m3-Core-createM3FromString"},"function createM3FromString"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},'M3 createM3FromString(loc fileName, str contents, bool errorRecovery = false, list[loc] sourcePath = [], list[loc] classPath = [], str javaVersion = "1.7")'))),(0,n.kt)("h2",{id:"lang-java-m3-Core-createM3FromJarClass"},"function createM3FromJarClass"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"M3 createM3FromJarClass(loc jarClass, list[loc] classPath = [])"))),(0,n.kt)("h2",{id:"lang-java-m3-Core-createM3FromSingleClass"},"function createM3FromSingleClass"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"M3 createM3FromSingleClass(loc jarClass, str className)"))),(0,n.kt)("h2",{id:"lang-java-m3-Core-createM3FromJarFile"},"function createM3FromJarFile"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"M3 createM3FromJarFile(loc jarLoc, list[loc] classPath = [|system:///|])"))),(0,n.kt)("h2",{id:"lang-java-m3-Core-createM3FromDirectory"},"function createM3FromDirectory"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},'M3 createM3FromDirectory(loc project, bool errorRecovery = false, str javaVersion = "1.7", list[loc] classPath = [])'))),(0,n.kt)("h4",{id:"synopsis-1"},"Synopsis"),(0,n.kt)("p",null,"globs for jars, class files and java files in a directory and tries to compile all source files into an ","[$analysis/m3]"," model"),(0,n.kt)("h2",{id:"lang-java-m3-Core-createM3FromJar"},"function createM3FromJar"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"M3 createM3FromJar(loc jarFile, list[loc] classPath = [])"))),(0,n.kt)("h2",{id:"lang-java-m3-Core-unregisterJavaProject"},"function unregisterJavaProject"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"void unregisterJavaProject(loc project)"))),(0,n.kt)("h2",{id:"lang-java-m3-Core-getMethodSignature"},"function getMethodSignature"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"str getMethodSignature(loc method)"))),(0,n.kt)("h2",{id:"lang-java-m3-Core-isCompilationUnit"},"function isCompilationUnit"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"bool isCompilationUnit(loc entity)"))),(0,n.kt)("h2",{id:"lang-java-m3-Core-isPackage"},"function isPackage"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"bool isPackage(loc entity)"))),(0,n.kt)("h2",{id:"lang-java-m3-Core-isClass"},"function isClass"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"bool isClass(loc entity)"))),(0,n.kt)("h2",{id:"lang-java-m3-Core-isConstructor"},"function isConstructor"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"bool isConstructor(loc entity)"))),(0,n.kt)("h2",{id:"lang-java-m3-Core-isMethod"},"function isMethod"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"bool isMethod(loc entity)"))),(0,n.kt)("h2",{id:"lang-java-m3-Core-isParameter"},"function isParameter"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"bool isParameter(loc entity)"))),(0,n.kt)("h2",{id:"lang-java-m3-Core-isVariable"},"function isVariable"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"bool isVariable(loc entity)"))),(0,n.kt)("h2",{id:"lang-java-m3-Core-isField"},"function isField"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"bool isField(loc entity)"))),(0,n.kt)("h2",{id:"lang-java-m3-Core-isInterface"},"function isInterface"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"bool isInterface(loc entity)"))),(0,n.kt)("h2",{id:"lang-java-m3-Core-isEnum"},"function isEnum"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"bool isEnum(loc entity)"))),(0,n.kt)("h2",{id:"lang-java-m3-Core-isType"},"function isType"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"bool isType(loc entity)"))),(0,n.kt)("h2",{id:"lang-java-m3-Core-files"},"function files"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"set[loc] files(rel[loc, loc] containment)"))),(0,n.kt)("h2",{id:"lang-java-m3-Core-declaredMethods"},"function declaredMethods"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"rel[loc, loc] declaredMethods(M3 m, set[Modifier] checkModifiers = {})"))),(0,n.kt)("h2",{id:"lang-java-m3-Core-declaredFields"},"function declaredFields"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"rel[loc, loc] declaredFields(M3 m, set[Modifier] checkModifiers = {})"))),(0,n.kt)("h2",{id:"lang-java-m3-Core-declaredFieldsX"},"function declaredFieldsX"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"rel[loc, loc] declaredFieldsX(M3 m, set[Modifier] checkModifiers = {})"))),(0,n.kt)("h2",{id:"lang-java-m3-Core-declaredTopTypes"},"function declaredTopTypes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"rel[loc, loc] declaredTopTypes(M3 m)"))),(0,n.kt)("h2",{id:"lang-java-m3-Core-declaredSubTypes"},"function declaredSubTypes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"rel[loc, loc] declaredSubTypes(M3 m)"))),(0,n.kt)("h2",{id:"lang-java-m3-Core-classes"},"function classes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"set[loc] classes(M3 m)"))),(0,n.kt)("h2",{id:"lang-java-m3-Core-interfaces"},"function interfaces"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"set[loc] interfaces(M3 m)"))),(0,n.kt)("h2",{id:"lang-java-m3-Core-packages"},"function packages"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"set[loc] packages(M3 m)"))),(0,n.kt)("h2",{id:"lang-java-m3-Core-variables"},"function variables"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"set[loc] variables(M3 m)"))),(0,n.kt)("h2",{id:"lang-java-m3-Core-parameters"},"function parameters"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"set[loc] parameters(M3 m)"))),(0,n.kt)("h2",{id:"lang-java-m3-Core-fields"},"function fields"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"set[loc] fields(M3 m)"))),(0,n.kt)("h2",{id:"lang-java-m3-Core-methods"},"function methods"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"set[loc] methods(M3 m)"))),(0,n.kt)("h2",{id:"lang-java-m3-Core-constructors"},"function constructors"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"set[loc] constructors(M3 m)"))),(0,n.kt)("h2",{id:"lang-java-m3-Core-enums"},"function enums"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"set[loc] enums(M3 m)"))),(0,n.kt)("h2",{id:"lang-java-m3-Core-types"},"function types"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"set[loc] types(M3 m)"))),(0,n.kt)("h2",{id:"lang-java-m3-Core-elements"},"function elements"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"set[loc] elements(M3 m, loc parent)"))),(0,n.kt)("h2",{id:"lang-java-m3-Core-fields"},"function fields"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"set[loc] fields(M3 m, loc class)"))),(0,n.kt)("h2",{id:"lang-java-m3-Core-methods"},"function methods"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"set[loc] methods(M3 m, loc class)"))),(0,n.kt)("h2",{id:"lang-java-m3-Core-constructors"},"function constructors"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"set[loc] constructors(M3 m, loc class)"))),(0,n.kt)("h2",{id:"lang-java-m3-Core-nestedClasses"},"function nestedClasses"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"set[loc] nestedClasses(M3 m, loc class)"))))}m.isMDXComponent=!0}}]);