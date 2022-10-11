"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[80878],{3905:(e,a,s)=>{s.d(a,{Zo:()=>d,kt:()=>v});var n=s(67294);function t(e,a,s){return a in e?Object.defineProperty(e,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[a]=s,e}function r(e,a){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),s.push.apply(s,n)}return s}function l(e){for(var a=1;a<arguments.length;a++){var s=null!=arguments[a]?arguments[a]:{};a%2?r(Object(s),!0).forEach((function(a){t(e,a,s[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):r(Object(s)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(s,a))}))}return e}function i(e,a){if(null==e)return{};var s,n,t=function(e,a){if(null==e)return{};var s,n,t={},r=Object.keys(e);for(n=0;n<r.length;n++)s=r[n],a.indexOf(s)>=0||(t[s]=e[s]);return t}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)s=r[n],a.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(t[s]=e[s])}return t}var o=n.createContext({}),m=function(e){var a=n.useContext(o),s=a;return e&&(s="function"==typeof e?e(a):l(l({},a),e)),s},d=function(e){var a=m(e.components);return n.createElement(o.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},k=n.forwardRef((function(e,a){var s=e.components,t=e.mdxType,r=e.originalType,o=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),k=m(s),v=t,u=k["".concat(o,".").concat(v)]||k[v]||c[v]||r;return s?n.createElement(u,l(l({ref:a},d),{},{components:s})):n.createElement(u,l({ref:a},d))}));function v(e,a){var s=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var r=s.length,l=new Array(r);l[0]=k;var i={};for(var o in a)hasOwnProperty.call(a,o)&&(i[o]=a[o]);i.originalType=e,i.mdxType="string"==typeof e?e:t,l[1]=i;for(var m=2;m<r;m++)l[m]=s[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,s)}k.displayName="MDXCreateElement"},899:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>m});var n=s(87462),t=(s(67294),s(3905));const r={title:"Measuring Methods"},l=void 0,i={unversionedId:"Recipes/Metrics/MeasuringJava/MeasuringMethods/index",id:"Recipes/Metrics/MeasuringJava/MeasuringMethods/index",title:"Measuring Methods",description:"Synopsis",source:"@site/docs/Recipes/Metrics/MeasuringJava/MeasuringMethods/index.md",sourceDirName:"Recipes/Metrics/MeasuringJava/MeasuringMethods",slug:"/Recipes/Metrics/MeasuringJava/MeasuringMethods/",permalink:"/docs/Recipes/Metrics/MeasuringJava/MeasuringMethods/",draft:!1,tags:[],version:"current",frontMatter:{title:"Measuring Methods"},sidebar:"tutorialSidebar",previous:{title:"Measuring Classes",permalink:"/docs/Recipes/Metrics/MeasuringJava/MeasuringClasses/"},next:{title:"Rascal Concepts",permalink:"/docs/RascalConcepts/"}},o={},m=[{value:"Synopsis",id:"synopsis",level:4},{value:"Examples",id:"examples",level:4},{value:"Benefits",id:"benefits",level:4},{value:"Pitfalls",id:"pitfalls",level:4}],d={toc:m};function c(e){let{components:a,...s}=e;return(0,t.kt)("wrapper",(0,n.Z)({},d,s,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("h4",{id:"synopsis"},"Synopsis"),(0,t.kt)("p",null,"We demonstrate how to extract interesting and accurate information about Java methods."),(0,t.kt)("h4",{id:"examples"},"Examples"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-rascal-shell"},"rascal>import lang::java::m3::Core;\nok\nrascal>import lang::java::m3::AST;\nok\n")),(0,t.kt)("p",null,"Now we can extract our overview model, using the classpath we derived:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-rascal-shell",metastring:",continue",",continue":!0},"rascal>myModel = createM3FromDirectory(|tmp:///snakes-and-ladders/src|);\nM3: m3(\n  |tmp:///snakes-and-ladders/src|,\n  annotations={\n    <|java+method:///snakes/SimpleGameTest/move1strings(snakes.Game)|,|java+class:///Given|>,\n    <|java+method:///snakes/Snake/squareLabel()|,|java+interface:///java/lang/Override|>,\n    <|java+method:///snakes/Ladder/landHereOrGoHome()|,|java+interface:///java/lang/Override|>,\n    <|java+method:///snakes/SimpleGameTest/newGame()|,|java+class:///Test|>,\n    <|java+method:///snakes/SimpleGameTest/move8jillWins(snakes.Game)|,|java+class:///Given|>,\n    <|java+method:///snakes/FirstSquare/isFirstSquare()|,|java+interface:///java/lang/Override|>,\n    <|java+method:///snakes/Ladder/squareLabel()|,|java+interface:///java/lang/Override|>,\n    <|java+method:///snakes/FirstSquare/isOccupied()|,|java+interface:///java/lang/Override|>,\n    <|java+method:///snakes/SimpleGameTest/initialStrings(snakes.Game)|,|java+class:///Given|>,\n    <|java+method:///snakes/SimpleGameTest/move4jillSnake(snakes.Game)|,|java+class:///Given|>,\n    <|java+method:///snakes/DieTest/testInRange()|,|java+class:///Test|>,\n    <|java+method:///snakes/DieTest/testMinReached()|,|java+class:///Test|>,\n    <|java+class:///snakes/SimpleGameTest|,|java+class:///RunWith|>,\n    <|java+method:///snakes/SimpleGameTest/move2jackBackwards(snakes.Game)|,|java+class:///Given|>,\n    <|java+method:///snakes/DieTest/testMaxReached()|,|java+class:///Test|>,\n    <|java+method:///snakes/SimpleGameTest/move5jackLadder(snakes.Game)|,|java+class:///Given|>,\n    <|java+method:///snakes/SimpleGameTest/move6jill(snakes.Game)|,|java+class:///Given|>,\n    <|java+method:///snakes/FirstSquare/enter(snakes.Player)|,|java+interface:///java/lang/Override|>,\n    <|java+method:///snakes/LastSquare/isLastSquare()|,|java+interface:///java/lang/Override|>,\n    <|java+method:///snakes/FirstSquare/leave(snakes.Player)|,|java+interface:///java/lang/Override|>,\n    <|java+method:///snakes/SimpleGameTest/move3jackMeetsJill(snakes.Game)|,|java+class:///Given|>,\n    <|java+method:///snakes/SimpleGameTest/move2jillLadder(snakes.Game)|,|java+class:///Given|>,\n    <|java+method:///snakes/SimpleGameTest/move7jackBouncesBackToJill(snakes.Game)|,|java+class:///Given|>,\n    <|java+method:///snakes/SimpleGameTest/move1jack(snakes.Game)|,|java+class:///Given|>,\n    <|java+method:///snakes/FirstSquare/player()|,|java+interface:///java/lang/Override|>\n  },\n  typeDependency={\n    <|java+method:///snakes/Game/winner()|,|java+class:///snakes/Game|>,\n    <|java+method:///snakes/Game/winner()|,|java+class:///snakes/Player|>,\n    <|java+parameter:///snakes/Player/joinGame(snakes.Game)/scope(game)/scope(0)/game|,|java+class:///snakes/Game|>,\n    <|java+field:///snakes/Game/winner|,|java+class:///snakes/Player|>,\n    <|java+method:///snakes/Square/nextSquare()|,|java+interface:///snakes/ISquare|>,\n    <|java+method:///snakes/Square/nextSquare()|,|java+class:///snakes/Game|>,\n    <|java+method:///snakes/Square/nextSquare()|,|java+primitiveType:///int|>,\n    <|java+method:///snakes/Square/nextSquare()|,|java+class:///snakes/Square|>,\n    <|java+method:///snakes/Square/moveAndLand(int)|,|java+interface:///snakes/ISquare|>,\n    <|java+method:///snakes/Square/moveAndLand(int)|,|java+class:///snakes/Game|>,\n    <|java+method:///snakes/Square/moveAndLand(int)|,|java+primitiveType:///int|>,\n    <|java+method:///snakes/Square/moveAndLand(int)|,|java+class:///snakes/Square|>,\n    <|java+method:///snakes/SimpleGameTest/move1strings(snakes.Game)|,|java+class:///java/lang/String|>,\n    <|java+method:///snakes/SimpleGameTest/move1strings(snakes.Game)|,|java+interface:///snakes/ISquare|>,\n    <|java+method:///snakes/SimpleGameTest/move1strings(snakes.Game)|,|java+class:///snakes/Game|>,\n    <|java+method:///snakes/SimpleGameTest/move1strings(snakes.Game)|,|java+class:///java/lang/Object|>,\n    <|java+method:///snakes/SimpleGameTest/move1strings(snakes.Game)|,|java+class:///Given|>,\n    <|java+method:///snakes/Game/initSquare(int,snakes.ISquare)|,|java+interface:///snakes/ISquare|>,\n    ...\n")),(0,t.kt)("p",null,"Now let's focus on the methods:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-rascal-shell",metastring:",continue",",continue":!0},"rascal>myMethods = methods(myModel);\nset[loc]: {\n  |java+method:///snakes/Game/isValidPosition(int)|,\n  |java+method:///snakes/Game/firstSquare()|,\n  |java+method:///snakes/Square/enter(snakes.Player)|,\n  |java+constructor:///snakes/Player/Player(java.lang.String)|,\n  |java+method:///snakes/Game/setSquareToSnake(int,int)|,\n  |java+constructor:///snakes/FirstSquare/FirstSquare(snakes.Game,int)|,\n  |java+method:///snakes/Game/winner()|,\n  |java+method:///snakes/Square/nextSquare()|,\n  |java+method:///snakes/Square/moveAndLand(int)|,\n  |java+method:///snakes/SimpleGameTest/move1strings(snakes.Game)|,\n  |java+method:///snakes/Game/initSquare(int,snakes.ISquare)|,\n  |java+method:///snakes/Ladder/squareLabel()|,\n  |java+method:///snakes/FirstSquare/isOccupied()|,\n  |java+method:///snakes/Game/notOver()|,\n  |java+method:///snakes/Game/findSquare(int,int)|,\n  |java+method:///snakes/Player/wins()|,\n  |java+method:///snakes/DieTest/reached(int)|,\n  |java+method:///snakes/Square/previousSquare()|,\n  |java+method:///snakes/Die/roll()|,\n  |java+method:///snakes/SimpleGameTest/initialStrings(snakes.Game)|,\n  |java+method:///snakes/SimpleGameTest/move4jillSnake(snakes.Game)|,\n  |java+method:///snakes/Square/invariant()|,\n  |java+method:///snakes/ISquare/landHereOrGoHome()|,\n  |java+method:///snakes/Snake/squareLabel()|,\n  |java+method:///snakes/Game/addSquares(int)|,\n  |java+method:///snakes/DieTest/testInRange()|,\n  |java+method:///snakes/DieTest/testMinReached()|,\n  |java+method:///snakes/Game/toString()|,\n  |java+method:///snakes/Game/getSquare(int)|,\n  |java+method:///snakes/Square/isFirstSquare()|,\n  |java+method:///snakes/ISquare/isOccupied()|,\n  |java+method:///snakes/Player/square()|,\n  |java+method:///snakes/Game/play(snakes.Die)|,\n  |java+method:///snakes/Player/invariant()|,\n  |java+method:///snakes/ISquare/position()|,\n  |java+method:///snakes/Game/movePlayer(int)|,\n  |java+method:///snakes/Ladder/invariant()|,\n  |java+constructor:///snakes/Snake/Snake(int,snakes.Game,int)|,\n  |java+method:///snakes/Game/main(java.lang.String%5B%5D)|,\n  |java+method:///snakes/Square/leave(snakes.Player)|,\n  |java+constructor:///snakes/Ladder/Ladder(int,snakes.Game,int)|,\n  |java+method:///snakes/Square/isLastSquare()|,\n  |java+constructor:///snakes/Square/Square(snakes.Game,int)|,\n  |java+method:///snakes/Ladder/landHereOrGoHome()|,\n  |java+constructor:///snakes/LastSquare/LastSquare(snakes.Game,int)|,\n  |java+method:///snakes/ISquare/moveAndLand(int)|,\n  |java+method:///snakes/Player/joinGame(snakes.Game)|,\n  |java+method:///snakes/SimpleGameTest/newGame()|,\n  |java+method:///snakes/Square/player()|,\n  |java+method:///snakes/Game/setSquare(int,snakes.ISquare)|,\n  |java+method:///snakes/SimpleGameTest/move2jackBackwards(snakes.Game)|,\n  |java+method:///snakes/Game/currentPlayer()|,\n  |java+method:///snakes/Square/landHereOrGoHome()|,\n  |java+method:///snakes/Ladder/isValidTransport(int)|,\n  |java+method:///snakes/Player/position()|,\n  |java+method:///snakes/DieTest/testMaxReached()|,\n  |java+method:///snakes/SimpleGameTest/move5jackLadder(snakes.Game)|,\n  |java+method:///snakes/SimpleGameTest/move6jill(snakes.Game)|,\n  |java+method:///snakes/FirstSquare/enter(snakes.Player)|,\n  |java+method:///snakes/LastSquare/isLastSquare()|,\n  |java+method:///snakes/FirstSquare/leave(snakes.Player)|,\n  |java+method:///snakes/ISquare/isFirstSquare()|,\n  |java+method:///snakes/SimpleGameTest/move3jackMeetsJill(snakes.Game)|,\n  |java+method:///snakes/Square/isOccupied()|,\n  |java+method:///snakes/SimpleGameTest/move2jillLadder(snakes.Game)|,\n  |java+method:///snakes/Player/toString()|,\n  |java+method:///snakes/Game/isOver()|,\n  |java+method:///snakes/Ladder/destination()|,\n  |java+method:///snakes/Square/position()|,\n  |java+method:///snakes/Player/moveForward(int)|,\n  |java+method:///snakes/Game/invariant()|,\n  |java+method:///snakes/SimpleGameTest/move7jackBouncesBackToJill(snakes.Game)|,\n  |java+method:///snakes/SimpleGameTest/move1jack(snakes.Game)|,\n  |java+method:///snakes/FirstSquare/player()|,\n  |java+method:///snakes/Game/addPlayers(snakes.Player%5B%5D)...\n")),(0,t.kt)("p",null,"What is the source code for any given method?"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-rascal-shell",metastring:",continue",",continue":!0},'rascal>import IO;\nok\nrascal>methodSrc = readFile(|java+method:///snakes/Square/landHereOrGoHome()|);\nstr: "public ISquare landHereOrGoHome() {\\n\\t\\treturn this.isOccupied() ? game.firstSquare() : this;\\n\\t}"\n')),(0,t.kt)("p",null,"Let's print it for readability's sake:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-rascal-shell",metastring:",continue",",continue":!0},"rascal>println(methodSrc)\npublic ISquare landHereOrGoHome() {\n        return this.isOccupied() ? game.firstSquare() : this;\n    }\nok\n")),(0,t.kt)("p",null,"How many words in this method? Let's use a regex :-)"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-rascal-shell",metastring:",continue",",continue":!0},"rascal>(0 | it + 1 | /\\W+/ := methodSrc)\nint: 9\n")),(0,t.kt)("p",null,"But now, let's get its AST"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-rascal-shell",metastring:",continue",",continue":!0},"rascal>methodFiles = myModel.declarations[|java+method:///snakes/Square/landHereOrGoHome()|];\nset[loc]: {|tmp:///snakes-and-ladders/src/snakes/Square.java|(678,94,<37,1>,<39,2>)}\n")),(0,t.kt)("p",null,"Now we know what file to look in, parse it:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>fileAST = createAstFromFile(|tmp:///snakes-and-ladders/src/snakes/Square.java|, true);\nDeclaration: compilationUnit(\n  package(\n    "snakes",\n    decl=|java+package:///snakes|,\n    src=|tmp:///snakes-and-ladders/src/snakes/Square.java|(0,15,<1,0>,<1,15>)),\n  [],\n  [class(\n      "Square",\n      [],\n      [simpleType(simpleName(\n            "ISquare",\n            src=|tmp:///snakes-and-ladders/src/snakes/Square.java|(48,7,<3,31>,<3,38>),\n            decl=|java+class:///ISquare|,\n            typ=class(\n              |java+class:///ISquare|,\n              [])))],\n      [\n        field(\n          int(),\n          [variable(\n              "position",\n              0,\n              src=|tmp:///snakes-and-ladders/src/snakes/Square.java|(74,8,<5,15>,<5,23>),\n              decl=|java+field:///snakes/Square/position|,\n              typ=int())],\n          modifiers=[protected()],\n          src=|tmp:///snakes-and-ladders/src/snakes/Square.java|(60,23,<5,1>,<5,24>)),\n        field(\n          simpleType(simpleName(\n              "Game",\n              src=|tmp:///snakes-and-ladders/src/snakes/Square.java|(95,4,<6,11>,<6,15>),\n              decl=|java+class:///snakes/Game|,\n              typ=class(\n                |java+class:///snakes/Game|,\n                []))),\n          [variable(\n              "game",\n              0,\n              src=|tmp:///snakes-and-ladders/src/snakes/Square.java|(100,4,<6,16>,<6,20>),\n              decl=|java+field:///snakes/Square/game|,\n              typ=class(\n                |java+class:///snakes/Game|,\n                []))],\n          modifiers=[protected()],\n          src=|tmp:///snakes-and-ladders/src/snakes/Square.java|(85,20,<6,1>,<6,21>)),\n        field(\n          simpleType(simpleName(\n              "Player",\n              src=|tmp:///snakes-and-ladders/src/snakes/Square.java|(115,6,<7,9>,<7,15>),\n              decl=|java+class:///snakes/Player|,\n              typ=class(\n                |java+class:///snakes/Player|,\n                []))),\n          [variable(\n              "player",\n              0,\n              src=|tmp:///snakes-and-ladders/src/snakes/Square.java|(122,6,<7,16>,<7,22>),\n              decl=|java+field:///snakes/Square/player|,\n              typ=class(\n                |java+class:///snakes/Player|,\n                []))],\n          modifiers=[private()],\n          src=|tmp:///snakes-and-ladders/src/snakes/Square.java|(107,22,<7,1>,<7,23>)),\n        method(\n          boolean(),\n          "invariant",\n          [],\n          [],\n          block(\n            [return(\n                infix(\n                  infix(\n                    simpleName(\n                      "game",\n                      src=|tmp:///snakes-and-ladders/src/snakes/Square.java|(171,4,<10,9>,<10,13>),\n                      decl=|java+field:///snakes/Square/game|,\n                      typ=class(\n                        |java+class:///snakes/Game|,\n                        [])),\n                    "!=",\n                    null(\n                      src=|tmp:///snakes-and-ladders/src/snakes/Square.java|(179,4,<10,17>,<10,21>),\n                      typ=null()),\n                    src=|tmp:///snakes-and-ladders/src/snakes/Square.java|(171,12,<10,9>,<10,21>),\n                    typ=unresolved()),\n                  "&&",\n                  methodCall(\n                    false,\n                    simpleName(\n                      "game",\n                      src=|tmp:///snakes-and-ladders/src/snakes/Square.java|(190,4,<11,6>,<11,10>),\n                      decl=|java+field:///snakes/Square/game|,\n                      typ=class(\n                        |java+class:///snakes/Game|,\n                        [])),\n                    "isValidPosition",\n                    [simpleName(\n                        "position",\n                        src=|tmp:///snakes-and-ladders/src/snakes/Square.java|(211,8,<11,27>,<11,35>),\n                        decl=|java+field:///snakes/Square/position|,\n                        typ=int())],\n                    src=|tmp:///snakes-and-ladders/src/snakes/Square.java|(190,30,<11,6>,<11,36>)...\n')),(0,t.kt)("p",null,"one of the declarations in this file is the method we wanted to see:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-rascal-shell"},'rascal>methodASTs = {d | /Declaration d := fileAST, d.decl == |java+method:///snakes/Square/landHereOrGoHome()|};\nset[Declaration]: {method(\n    simpleType(simpleName(\n        "ISquare",\n        src=|tmp:///snakes-and-ladders/src/snakes/Square.java|(685,7,<37,8>,<37,15>),\n        decl=|java+class:///snakes/ISquare|,\n        typ=class(\n          |java+class:///snakes/ISquare|,\n          []))),\n    "landHereOrGoHome",\n    [],\n    [],\n    block(\n      [return(\n          conditional(\n            methodCall(\n              false,\n              this(\n                src=|tmp:///snakes-and-ladders/src/snakes/Square.java|(723,4,<38,9>,<38,13>),\n                typ=class(\n                  |java+class:///snakes/Square|,\n                  [])),\n              "isOccupied",\n              [],\n              src=|tmp:///snakes-and-ladders/src/snakes/Square.java|(723,17,<38,9>,<38,26>),\n              decl=|java+method:///snakes/Square/isOccupied()|,\n              typ=boolean()),\n            methodCall(\n              false,\n              simpleName(\n                "game",\n                src=|tmp:///snakes-and-ladders/src/snakes/Square.java|(743,4,<38,29>,<38,33>),\n                decl=|java+field:///snakes/Square/game|,\n                typ=class(\n                  |java+class:///snakes/Game|,\n                  [])),\n              "firstSquare",\n              [],\n              src=|tmp:///snakes-and-ladders/src/snakes/Square.java|(743,18,<38,29>,<38,47>),\n              decl=|unresolved:///|,\n              typ=unresolved()),\n            this(\n              src=|tmp:///snakes-and-ladders/src/snakes/Square.java|(764,4,<38,50>,<38,54>),\n              typ=class(\n                |java+class:///snakes/Square|,\n                [])),\n            src=|tmp:///snakes-and-ladders/src/snakes/Square.java|(723,45,<38,9>,<38,54>),\n            typ=unresolved()),\n          src=|tmp:///snakes-and-ladders/src/snakes/Square.java|(716,53,<38,2>,<38,55>))],\n      src=|tmp:///snakes-and-ladders/src/snakes/Square.java|(712,60,<37,35>,<39,2>)),\n    modifiers=[public()],\n    src=|tmp:///snakes-and-ladders/src/snakes/Square.java|(678,94,<37,1>,<39,2>),\n    decl=|java+method:///snakes/Square/landHereOrGoHome()|,\n    typ=method(\n      |java+method:///snakes/Square/landHereOrGoHome()|,\n      [],\n      class(\n        |java+class:///snakes/ISquare|,\n        []),\n      []))}\n')),(0,t.kt)("p",null,"If ",(0,t.kt)("inlineCode",{parentName:"p"},"methodASTs")," would have been an empty set, then the ",(0,t.kt)("a",{parentName:"p",href:"/docs/RascalConcepts/PatternMatching/"},"search pattern")," ",(0,t.kt)("inlineCode",{parentName:"p"},"/Declaration d")," or the condition ",(0,t.kt)("inlineCode",{parentName:"p"},"d.decl == ...")," would have failed on this example. But it didn't! It found exactly one match."),(0,t.kt)("p",null,"Now we count the number of expressions:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-rascal-shell",metastring:",continue",",continue":!0},"rascal>(0 | it + 1 | /Expression _ := methodASTs)\nint: 7\n")),(0,t.kt)("p",null,"or give us the locations of all expressions:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-rascal-shell",metastring:",continue",",continue":!0},"rascal>[m.src | /Expression m := methodASTs]\nlist[loc]: [\n  |tmp:///snakes-and-ladders/src/snakes/Square.java|(685,7,<37,8>,<37,15>),\n  |tmp:///snakes-and-ladders/src/snakes/Square.java|(723,4,<38,9>,<38,13>),\n  |tmp:///snakes-and-ladders/src/snakes/Square.java|(723,17,<38,9>,<38,26>),\n  |tmp:///snakes-and-ladders/src/snakes/Square.java|(743,4,<38,29>,<38,33>),\n  |tmp:///snakes-and-ladders/src/snakes/Square.java|(743,18,<38,29>,<38,47>),\n  |tmp:///snakes-and-ladders/src/snakes/Square.java|(764,4,<38,50>,<38,54>),\n  |tmp:///snakes-and-ladders/src/snakes/Square.java|(723,45,<38,9>,<38,54>)\n]\n")),(0,t.kt)("p",null,"the size should be the same, right?"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-rascal-shell",metastring:",continue",",continue":!0},"rascal>import List;\nok\nrascal>size([m.src | /Expression m := methodASTs]) == (0 | it + 1 | /Expression _ := methodASTs)\nbool: true\n")),(0,t.kt)("h4",{id:"benefits"},"Benefits"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Click on any of the printed source ",(0,t.kt)("a",{parentName:"li",href:"/docs/Rascal/Expressions/Values/Location/"},"Location"),"s in the terminal and the IDE brings you to the file."),(0,t.kt)("li",{parentName:"ul"},"The method AST contains all structural/syntactic information about a method and its signature. They are defined in the ",(0,t.kt)("a",{parentName:"li",href:"/docs/Library/lang/java/m3/AST"},"AST")," module."),(0,t.kt)("li",{parentName:"ul"},"every node in the AST has been annotated with a ",(0,t.kt)("inlineCode",{parentName:"li"},"src")," field to explain where exactly in the file it came from"),(0,t.kt)("li",{parentName:"ul"},"when name and type resolution is ",(0,t.kt)("inlineCode",{parentName:"li"},"true")," for ",(0,t.kt)("a",{parentName:"li",href:"/docs/Library/lang/java/m3/AST#lang::java::m3::AST-createAstFromFile"},"create ast from file"),", the ",(0,t.kt)("inlineCode",{parentName:"li"},"decl")," fields on given nodes point to the resolved qualified names of a reference. These qualified names coincide with the overview ",(0,t.kt)("a",{parentName:"li",href:"/docs/Library/lang/java/m3/Core"},"M3")," model contents. "),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"/docs/RascalConcepts/PatternMatching/"},"pattern matching")," is a very powerful way of exploring and changing ASTs"),(0,t.kt)("li",{parentName:"ul"},"AST and M3 models exist for other programming languages than Java. Your skills developed here may transfer to there."),(0,t.kt)("li",{parentName:"ul"},"AST and M3 creation is fully based on reusing the Eclipse JDT compiler stack, which has a high quality and can also recover from local errors in input files."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"/docs/Rascal/Expressions/Values/Location/"},"Location")," values like ",(0,t.kt)("inlineCode",{parentName:"li"},"|java+method:///org/rascalmpl/ast/Statement/VariableDeclaration/clone()|")," that occur in ASTs and M3 relations are ",(0,t.kt)("em",{parentName:"li"},"clickable")," in the terminal window and will take you to the source code identified by the URI (and the offset).")),(0,t.kt)("h4",{id:"pitfalls"},"Pitfalls"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"AST's and M3 models are a snapshot representation of the current state of the code, if source code changes on disk the models are not automatically updated."),(0,t.kt)("li",{parentName:"ul"},"M3 accuracy, and also AST accuracy, depends greatly on the quality of the ",(0,t.kt)("inlineCode",{parentName:"li"},"classPath")," provided to the extraction methods.")))}c.isMDXComponent=!0}}]);