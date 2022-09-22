"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[90960],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),p=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(t),d=r,g=m["".concat(i,".").concat(d)]||m[d]||u[d]||l;return t?a.createElement(g,o(o({ref:n},c),{},{components:t})):a.createElement(g,o({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=m;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<l;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},99714:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var a=t(83117),r=(t(67294),t(3905));const l={title:"Compile"},o=void 0,s={unversionedId:"Recipes/Languages/Pico/Compile/index",id:"Recipes/Languages/Pico/Compile/index",title:"Compile",description:"Synopsis",source:"@site/docs/Recipes/Languages/Pico/Compile/index.md",sourceDirName:"Recipes/Languages/Pico/Compile",slug:"/Recipes/Languages/Pico/Compile/",permalink:"/docs/Recipes/Languages/Pico/Compile/",draft:!1,editUrl:"https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/docs/Recipes/Languages/Pico/Compile/index.md",tags:[],version:"current",frontMatter:{title:"Compile"},sidebar:"tutorialSidebar",previous:{title:"Assembly",permalink:"/docs/Recipes/Languages/Pico/Assembly/"},next:{title:"ControlFlow",permalink:"/docs/Recipes/Languages/Pico/ControlFlow/"}},i={},p=[{value:"Synopsis",id:"synopsis",level:4},{value:"Examples",id:"examples",level:4}],c={toc:p};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h4",{id:"synopsis"},"Synopsis"),(0,r.kt)("p",null,"Compile a Pico program to assembly language."),(0,r.kt)("h4",{id:"examples"},"Examples"),(0,r.kt)("p",null,"The Pico compiler translates Pico programs to ",(0,r.kt)("a",{parentName:"p",href:"../../../../Recipes/Languages/Pico/Assembly"},"Assembly")," language programs."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal"},'// tag::module[]\nmodule demo::lang::Pico::Compile\n\nimport Prelude;\nimport demo::lang::Pico::Abstract;\nimport demo::lang::Pico::Assembly;\nimport demo::lang::Pico::Load;\n\nalias Instrs = list[Instr]; // <1>\n\n// compile Expressions.\n\nInstrs compileExp(natCon(int N)) = [pushNat(N)]; // <2>\n\nInstrs compileExp(strCon(str S)) = [pushStr(substring(S,1,size(S)-1))];\n\nInstrs compileExp(id(PicoId Id)) = [rvalue(Id)];\n\npublic Instrs compileExp(add(EXP E1, EXP E2)) = // <3>\n  [*compileExp(E1), *compileExp(E2), add2()];\n\nInstrs compileExp(sub(EXP E1, EXP E2)) =\n  [*compileExp(E1), *compileExp(E2), sub2()];\n\nInstrs compileExp(conc(EXP E1, EXP E2)) =\n  [*compileExp(E1), *compileExp(E2), conc2()];\n  \n// Unique label generation\n\nprivate int nLabel = 0; // <4>\n\nprivate str nextLabel() {\n  nLabel += 1;\n  return "L<nLabel>";\n}\n\n// Compile a statement\n\nInstrs compileStat(asgStat(PicoId Id, EXP Exp)) =\n    [lvalue(Id), *compileExp(Exp), assign()];\n    \nInstrs compileStat(ifElseStat(EXP Exp, // <5>\n                              list[STATEMENT] Stats1,\n                              list[STATEMENT] Stats2)){\n  \n  elseLab = nextLabel();\n  endLab = nextLabel();  \n  return [*compileExp(Exp), \n          gofalse(elseLab), \n          *compileStats(Stats1),  \n          go(endLab), \n          label(elseLab), \n          *compileStats(Stats2), \n          label(endLab)];\n}\n\nInstrs compileStat(whileStat(EXP Exp, \n                             list[STATEMENT] Stats1)) {\n  entryLab = nextLabel();\n  endLab = nextLabel();\n  return [label(entryLab), \n          *compileExp(Exp), \n          gofalse(endLab), \n          *compileStats(Stats1), \n          go(entryLab), \n          label(endLab)];\n}\n\n// Compile a list of statements\nInstrs compileStats(list[STATEMENT] Stats1) = // <6>\n  [ *compileStat(S) | S <- Stats1 ];\n  \n// Compile declarations\n\nInstrs compileDecls(list[DECL] Decls) =\n  [ ((tp == natural()) ? dclNat(Id) : dclStr(Id)) | // <7>     \n    decl(PicoId Id, TYPE tp) <- Decls\n  ];\n\n// Compile a Pico program\n\npublic Instrs compileProgram(PROGRAM P){ // <8>\n  nLabel = 0;\n  if(program(list[DECL] Decls, list[STATEMENT] Series) := P){\n     return [*compileDecls(Decls), *compileStats(Series)];\n  } else\n    throw "Cannot happen";\n}\n\npublic Instrs compileProgram(str txt) = compileProgram(load(txt));\n// end::module[]\n\n')),(0,r.kt)("p",null,"Notes:"),(0,r.kt)("p",null,"<1> We introduce ",(0,r.kt)("inlineCode",{parentName:"p"},"Instrs")," as an alias for a list of assembly language instructions.\n<2> The compiler consists of the functions ",(0,r.kt)("inlineCode",{parentName:"p"},"compileExp"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"compileStat"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"compileStats"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"compileDecls")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"compileProgram"),".\nThey all have a program fragment as argument and return the corresponding list of instructions.\n<3> When compiling expressions, note how ",(0,r.kt)("em",{parentName:"p"},"list splicing")," (see ","[Rascal:Values/List]",") is used to insert the instructions that are generated for the operands of an operator into the list of instructions for the whole expression.\n<4> In order to conveniently write code generators for statements, we introduce a unique label generator. The global variable ",(0,r.kt)("inlineCode",{parentName:"p"},"nLabel")," contains\nthe index of the last generated label and ",(0,r.kt)("inlineCode",{parentName:"p"},"nextLabel")," uses this to generate a new, unique label."),(0,r.kt)("p",null,"<5> Consider code generation for an if-the-else statement:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"*  Two fresh labels mark the start of the code for the else part (`elseLab`) and the end of the whole statement (`endLab`).\n*  The code that is generated consists of the following:\n    ***  Code for the test.\n    ***  A gofalse to the code for the else-part.\n    ***  Code for the then-part and a jump to the end of the statement.\n    ***  Code for the else-part that starts with the label `elsePart`.\n    ***  The label `endLab` that marks the end of the code for the if-then-else statement.\n")),(0,r.kt)("p",null,"<6>  Compiling a list of statements conveniently uses a list comprehension and list splicing."),(0,r.kt)("p",null,"<7>  Compiling declarations allocates memory locations of the appropriate type for each declared variable."),(0,r.kt)("p",null,"<8>  ",(0,r.kt)("inlineCode",{parentName:"p"},"compileProgram")," compiles a gives Pico program to assembly language."),(0,r.kt)("p",null,"Here is an example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>import demo::lang::Pico::Compile;\nok\nrascal>compileProgram("begin declare x : natural; x := 47 end");\nlist[Instr]: [\n  dclStr("x"),\n  lvalue("x"),\n  pushNat(47),\n  assign()\n]\n')),(0,r.kt)("p",null,"Here is the compilation of the factorial program:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>compileProgram("begin declare input : natural,  \n>>>>>>>               \'              output : natural,           \n>>>>>>>               \'             repnr : natural,\n>>>>>>>               \'              rep : natural;\n>>>>>>>               \'      input := 14;\n>>>>>>>               \'      output := 1;\n>>>>>>>               \'      while input - 1 do        \n>>>>>>>               \'          rep := output;\n>>>>>>>               \'          repnr := input;\n>>>>>>>               \'          while repnr - 1 do\n>>>>>>>               \'             output := output + rep;\n>>>>>>>               \'             repnr := repnr - 1\n>>>>>>>               \'          od;\n>>>>>>>               \'          input := input - 1\n>>>>>>>               \'      od\n>>>>>>>               \'end");\nlist[Instr]: [\n  dclStr("input"),\n  dclStr("output"),\n  dclStr("repnr"),\n  dclStr("rep"),\n  lvalue("input"),\n  pushNat(14),\n  assign(),\n  lvalue("output"),\n  pushNat(1),\n  assign(),\n  label("L1"),\n  rvalue("input"),\n  pushNat(1),\n  sub2(),\n  gofalse("L2"),\n  lvalue("rep"),\n  rvalue("output"),\n  assign(),\n  lvalue("repnr"),\n  rvalue("input"),\n  assign(),\n  label("L3"),\n  rvalue("repnr"),\n  pushNat(1),\n  sub2(),\n  gofalse("L4"),\n  lvalue("output"),\n  rvalue("output"),\n  rvalue("rep"),\n  add2(),\n  assign(),\n  lvalue("repnr"),\n  rvalue("repnr"),\n  pushNat(1),\n  sub2(),\n  assign(),\n  go("L3"),\n  label("L4"),\n  lvalue("input"),\n  rvalue("input"),\n  pushNat(1),\n  sub2(),\n  assign(),\n  go("L1"),\n  label("L2")\n]\n')))}u.isMDXComponent=!0}}]);