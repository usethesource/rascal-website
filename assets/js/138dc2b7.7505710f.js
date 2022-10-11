"use strict";(self.webpackChunkrascal_website=self.webpackChunkrascal_website||[]).push([[16562],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=u(n),m=o,d=h["".concat(l,".").concat(m)]||h[m]||p[m]||r;return n?a.createElement(d,i(i({ref:t},c),{},{components:n})):a.createElement(d,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},95110:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var a=n(87462),o=(n(67294),n(3905));const r={title:"Ad Hoc Data Exploration"},i=void 0,s={unversionedId:"Recipes/Common/AdHocDataExploration/index",id:"Recipes/Common/AdHocDataExploration/index",title:"Ad Hoc Data Exploration",description:"Synopsis",source:"@site/docs/Recipes/Common/AdHocDataExploration/index.md",sourceDirName:"Recipes/Common/AdHocDataExploration",slug:"/Recipes/Common/AdHocDataExploration/",permalink:"/docs/Recipes/Common/AdHocDataExploration/",draft:!1,tags:[],version:"current",frontMatter:{title:"Ad Hoc Data Exploration"},sidebar:"tutorialSidebar",previous:{title:"Common",permalink:"/docs/Recipes/Common/"},next:{title:"Call Analysis",permalink:"/docs/Recipes/Common/CallAnalysis/"}},l={},u=[{value:"Synopsis",id:"synopsis",level:4},{value:"Description",id:"description",level:4}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h4",{id:"synopsis"},"Synopsis"),(0,o.kt)("p",null,"Using Rascal to explore an interesting data space."),(0,o.kt)("h4",{id:"description"},"Description"),(0,o.kt)("p",null,"The problem we will look at comes from mathematics, and has a precise analytical solution, but\nlet's use Rascal to explore the state space, and see how it can help us to build intuition."),(0,o.kt)("p",null,"As you know, Rascal supports arbitrarily large numbers cleanly and simply, unlike more traditional\nlanguages like C or Java.  For example, if you want to compute 1000!, then it's a simple matter of\ncalling ",(0,o.kt)("inlineCode",{parentName:"p"},"fact(1000)")," at the command line.  Let's use this definition of factorial:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rascal"},"public int fact (int n) {\n    if (n <= 1) {\n        return 1;\n    } else {\n        return n * fact (n-1);\n    }\n}\n")),(0,o.kt)("p",null,"If you compute ",(0,o.kt)("inlineCode",{parentName:"p"},"fact(1000)")," at the Rascal command line, you get a large number, on the order of 4.02 x 10^2567^. This is much, much bigger than, say a google, which is a mere 10<^>100^.  (If Rascal runs out stack space, try computing 100!, then 200!, then ... then 1000!; the run-time will allocate more stack space incrementally and automatically if you sneak up to where you want to go)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rascal"},"rascal> fact(1000);\nint: 402387260077093773543702433923003985719374864210714632543799910429938512398629020592044208486969404800479988610197196058631666872994808558901323829669944590997424504087073759918823627727188732519779505950995276120874975462497043601418278094646496291056393887437886487337119181045825783647849977012476632889835955735432513185323958463075557409114262417474349347553428646576611667797396668820291207379143853719588249808126867838374559731746136085379534524221586593201928090878297308431392844403281231558611036976801357304216168747609675871348312025478589320767169132448426236131412508780208000261683151027341827977704784635868170164365024153691398281264810213092761244896359928705114964975419909342221566832572080821333186116811553615836546984046708975602900950537616475847728421889679646244945160765353408198901385442487984959953319101723355556602139450399736280750137837615307127761926849034352625200015888535147331611702103968175921510907788019393178114194545257223865541461062892187960223838971476088506276862967146674697562911234082439208160153780889893964518263243671616762179168909779911903754031274622289988005195444414282012187361745992642956581746628302955570299024324153181617210465832036786906117260158783520751516284225540265170483304226143974286933061690897968482590125458327168226458066526769958652682272807075781391858178889652208164348344825993266043367660176999612831860788386150279465955131156552036093988180612138558600301435694527224206344631797460594682573103790084024432438465657245014402821885252470935190620929023136493273497565513958720559654228749774011413346962715422845862377387538230483865688976461927383814900140767310446640259899490222221765904339901886018566526485061799702356193897017860040811889729918311021171229845901641921068884387121855646124960798722908519296819372388642614839657382291123125024186649353143970137428531926649875337218940694281434118520158014123344828015051399694290153483077644569099073152433278288269864602789864321139083506217095002597389863554277196742822248757586765752344220207573630569498825087968928162753848863396909959826280956121450994871701244516461260379029309120889086942028510640182154399457156805941872748998094254742173582401063677404595741785160829230135358081840096996372524230560855903700624271243416909004153690105933983835777939410970027753472000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000\n")),(0,o.kt)("p",null,"Now copy the numerical result above and paste it into an edit window to have a good look at it.  Notice anything interesting?  The last 249 digits are all zeros.  How did this happen and what does it mean?"),(0,o.kt)("p",null,"To be honest, when I did this calculation for the first time, I thought I'd found a bug.  So I looked at the values of N! for N in the range 900 to 1000 and discovered that the zeros accumulate on the end of N! as N gets bigger.  Let's think about it for a bit:  N! is a cumulative product, so once a zero has appeared on the end there is no way to get rid of it by multiplying by a positive integer."),(0,o.kt)("p",null,"How do the zeros appear?  Well, this isn't to hard to figure out.  Obviously, each time you reach a multiple of 10, you will add (at least) one more zero to the cumulative product.  But what about multiples of 5?  Well, you would add one more zero if you can match the 5 to a 2 within the factors, and there are lots of lonely 2s in that list.  So, to summarize, each time N is a multiple of 5, you add at least one zero onto the cumulative product N!."),(0,o.kt)("p",null,"So here's the question we're going to solve:  For an arbitrary N, can you predict exactly how many trailing zeros there will be in N!?  "),(0,o.kt)("p",null,"Again, this can be solved analytically (and if you go looking on the web, you will discover that this is an old chestnut of a math problem that's sometimes used in job interviews to test analytical ability), but what I want to do here is to show how we can use Rascal to play around with the problem space a bit to help us build up our intuition.  This is very much like what we do in empirical software engineering, when we have lots of data to analyze, and we're trying to look for patterns that might explain behaviours, such as why some functions are more likely to be associated with bugs than others.  In that kind of situation, we typically go through two stages:  first, we wade through the data, exploring relationships, looking for unusual lumps or recognizable patters; second, we build theories of how the world works, and test them out using the data.  In both stages, we not only look at the data, we play with it.  We build little tools to help answer our questions, see where our hunches lead us.  We use this \"play\" to improve our understanding of the problem space, and build intuition about how it works as testable theories.  In empirical software engineering, as in most other sciences, we usually don't get concrete proof of a theory; rather, we gather evidence towards ultimately accepting or rejecting the theories (tho often, we may choose to use this evidence to refine the theories and try again)."),(0,o.kt)("p",null,"In this case, however, there is a precise analytical solution, a proof, a \"ground truth\".  But that doesn't mean that we can't use the empirical approach to help build our intuition about the problem space, and ultimately devise a theory about how to calculate the number of trailing zeros in N!.  Solving analytical problems is about having enough intuition to see possible solutions.  And using this empirical approach is one way to build intuition."),(0,o.kt)("p",null,"So let's define a few helper functions and see where that leads us:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rascal"},"public int countZeros (int n) {\n    if (n < 10) {\n        return 0;\n    } else if (n % 10 == 0) {\n        return 1 + countZeros (n / 10);\n    } else {\n        return countZeros (n / 10);\n    }   \n}\nrascal> int i = fact(1000);\nint: 402387260077093773543702433923003985719374864210714632543799910429938512398629020592044208486969404800479988610197196058631666872994808558901323829669944590997424504087073759918823627727188732519779505950995276120874975462497043601418278094646496291056393887437886487337119181045825783647849977012476632889835955735432513185323958463075557409114262417474349347553428646576611667797396668820291207379143853719588249808126867838374559731746136085379534524221586593201928090878297308431392844403281231558611036976801357304216168747609675871348312025478589320767169132448426236131412508780208000261683151027341827977704784635868170164365024153691398281264810213092761244896359928705114964975419909342221566832572080821333186116811553615836546984046708975602900950537616475847728421889679646244945160765353408198901385442487984959953319101723355556602139450399736280750137837615307127761926849034352625200015888535147331611702103968175921510907788019393178114194545257223865541461062892187960223838971476088506276862967146674697562911234082439208160153780889893964518263243671616762179168909779911903754031274622289988005195444414282012187361745992642956581746628302955570299024324153181617210465832036786906117260158783520751516284225540265170483304226143974286933061690897968482590125458327168226458066526769958652682272807075781391858178889652208164348344825993266043367660176999612831860788386150279465955131156552036093988180612138558600301435694527224206344631797460594682573103790084024432438465657245014402821885252470935190620929023136493273497565513958720559654228749774011413346962715422845862377387538230483865688976461927383814900140767310446640259899490222221765904339901886018566526485061799702356193897017860040811889729918311021171229845901641921068884387121855646124960798722908519296819372388642614839657382291123125024186649353143970137428531926649875337218940694281434118520158014123344828015051399694290153483077644569099073152433278288269864602789864321139083506217095002597389863554277196742822248757586765752344220207573630569498825087968928162753848863396909959826280956121450994871701244516461260379029309120889086942028510640182154399457156805941872748998094254742173582401063677404595741785160829230135358081840096996372524230560855903700624271243416909004153690105933983835777939410970027753472000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000\nrascal> countZeros(i);\nint: 472\n")),(0,o.kt)("p",null,"This was my first try at the solution (really!), and there's a problem: 1000! has exactly 249 trailing zeros, not 472.  "),(0,o.kt)("p",null,"What did I do wrong?  Oh, right, ",(0,o.kt)("em",{parentName:"p"},"trailing")," zeros, and the above function counts ",(0,o.kt)("em",{parentName:"p"},"all")," of the zeros.  Let's try again:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rascal"},"public int countTrailingZeros (int n) {\n    if (n < 10) {\n        return 0;\n    } else if (n % 10 == 0) {\n        return 1 + countTrailingZeros (n / 10);\n    } else {\n        return 0 ;\n    }   \n}\n\nrascal> countTrailingZeros(i);\nint: 249\n")),(0,o.kt)("p",null,"OK, so we're making progress.  Let's define another function to help us explore the data space:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rascal"},'public void printLastTwenty (int n){\n    for(int i <- [n-19..n+1]) {\n        println ("<i>! has <countTrailingZeros(fact(i))> trailing zeros.");\n    }\n}\n\nrascal>printLastTwenty(1000);\n981! has 243 trailing zeros.\n982! has 243 trailing zeros.\n983! has 243 trailing zeros.\n984! has 243 trailing zeros.\n985! has 244 trailing zeros.\n986! has 244 trailing zeros.\n987! has 244 trailing zeros.\n988! has 244 trailing zeros.\n989! has 244 trailing zeros.\n990! has 245 trailing zeros.\n991! has 245 trailing zeros.\n992! has 245 trailing zeros.\n993! has 245 trailing zeros.\n994! has 245 trailing zeros.\n995! has 246 trailing zeros.\n996! has 246 trailing zeros.\n997! has 246 trailing zeros.\n998! has 246 trailing zeros.\n999! has 246 trailing zeros.\n1000! has 249 trailing zeros.\nok\n')),(0,o.kt)("p",null,"So the pattern I see arising (confirmed by more playing that I won't show you) is that you add a zero every time N is divisible by 5.  But sometimes you add more than one zero: 1000! adds three zeros.  "),(0,o.kt)("p",null,"We defined one function above to help us look at the data more compactly; now let's create another function to look for lumps in the data:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rascal"},'// Printout all i in [0..n] where i! has more trailing zeros than (i-1)!\npublic void findLumps (int n) {\n    int iMinusOneFactZeros = 0;\n    for (int i <- [1..n+1]) {\n        int iFactZeros = countTrailingZeros(fact(i));\n        int diff = iFactZeros - iMinusOneFactZeros ;\n        if (diff >= 1) {\n            println ("<diff> more zeros at <i>!");\n        }\n        iMinusOneFactZeros = iFactZeros;\n    }\n}\n\nrascal>findLumps(1000);\n1 more zeros at 5!\n1 more zeros at 10!\n1 more zeros at 15!\n1 more zeros at 20!\n2 more zeros at 25!\n1 more zeros at 30!\n1 more zeros at 35!\n1 more zeros at 40!\n1 more zeros at 45!\n2 more zeros at 50!\n1 more zeros at 55!\n1 more zeros at 60!\n1 more zeros at 65!\n1 more zeros at 70!\n2 more zeros at 75!\n1 more zeros at 80!\n1 more zeros at 85!\n1 more zeros at 90!\n1 more zeros at 95!\n2 more zeros at 100!\n1 more zeros at 105!\n1 more zeros at 110!\n1 more zeros at 115!\n1 more zeros at 120!\n3 more zeros at 125!\n1 more zeros at 130!\n...\n1 more zeros at 245!\n3 more zeros at 250!\n1 more zeros at 255!\n1 more zeros at 495!\n3 more zeros at 500!\n1 more zeros at 505!\n...\n1 more zeros at 620!\n4 more zeros at 625!\n1 more zeros at 630!\n...\n1 more zeros at 985!\n1 more zeros at 990!\n1 more zeros at 995!\n3 more zeros at 1000!\nok\n')),(0,o.kt)("p",null,"So probably we're noticing some patterns here already, and maybe forming some intuition.  But let's first revise our lump-finding function to produce even more concise output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rascal"},'// We can parameterize the threshold to look for jumps of 2, 3, or 4 zeros\npublic void findLumps2 (int n, int tao) {\n    int iMinusOneFactZeros = 0;\n    for (int i <- [1..n+1]) {\n        int iFactZeros = countTrailingZeros(fact(i));\n        int diff = iFactZeros - iMinusOneFactZeros ;\n        if (diff >= tao) {\n            println ("<diff> more zeros at <i>!");\n        }\n        iMinusOneFactZeros = iFactZeros;\n    }\n}\n\nrascal>findLumps2(1000,2);\n2 more zeros at 25!\n2 more zeros at 50!\n2 more zeros at 75!\n2 more zeros at 100!\n3 more zeros at 125!\n2 more zeros at 150!\n2 more zeros at 175!\n2 more zeros at 200!\n2 more zeros at 225!\n3 more zeros at 250!\n2 more zeros at 275!\n...\n2 more zeros at 950!\n2 more zeros at 975!\n3 more zeros at 1000!\nok\n\nrascal>findLumps2(1000,3);\n3 more zeros at 125!\n3 more zeros at 250!\n3 more zeros at 375!\n3 more zeros at 500!\n4 more zeros at 625!\n3 more zeros at 750!\n3 more zeros at 875!\n3 more zeros at 1000!\nok\n\nrascal>findLumps2(1000,4);\n4 more zeros at 625!\nok\n')),(0,o.kt)("p",null,"Notice anything yet?  Here are some fun math facts to consider:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"5^0^ = 1"),(0,o.kt)("li",{parentName:"ul"},"5^1^ = 5"),(0,o.kt)("li",{parentName:"ul"},"5 ^2^ = 25"),(0,o.kt)("li",{parentName:"ul"},"5^3^ = 125"),(0,o.kt)("li",{parentName:"ul"},"5^4^ = 625"),(0,o.kt)("li",{parentName:"ul"},"5^5^ = 3125")),(0,o.kt)("p",null,"So here's the solution:"),(0,o.kt)("p",null,"Let N be a positive integer.  "),(0,o.kt)("p",null,"Let k = floor (log\u2085 N)"),(0,o.kt)("p",null,"Start a counter at zero, call it nz"),(0,o.kt)("p",null,"We want to examine i <- ","[1..N+1]"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If i  is not divisible by 5, ignore it"),(0,o.kt)("li",{parentName:"ul"},"If  i  is divisible by 5, add 1 to nz"),(0,o.kt)("li",{parentName:"ul"},"If  i  is also divisible by 25, add 1 more"),(0,o.kt)("li",{parentName:"ul"},"..."),(0,o.kt)("li",{parentName:"ul"},"If  i is also divisible by 2k, add 1 more")),(0,o.kt)("p",null,"We can write this in Rascal as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rascal"},"public int predictZeros (int N) {\n    int k = floorLogBase(N, 5);  // I wrote this\n    int nz = 0;\n    for (int i <- [1..N+1] ) {\n        int p5 = 1;\n        for (int j <- [1..k+1]) {\n            p5 *= 5;\n            if (i % p5 == 0) {\n                nz += 1;\n            } else {\n                break;\n            }\n        }\n    }\n    return nz; \n}\n")),(0,o.kt)("p",null,"Now a little hand validation might convince you that this should work, but let's write a little verifier function to be sure:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rascal"},'public void verifyTheory (int N) {\n    int checkInterval = 100; // for printing\n    bool failed = false;\n    for (int i <- [1..N+1]) {\n        ifact=fact(i);\n        int p = predictZeros(i);\n        int c = countTrailingZeros(ifact);\n        if (p != c) {\n            failed = true;\n            println ("Found a counter example at i=<i>");\n            break;\n        } else {\n            if (i % checkInterval == 0) {\n                println ("<i>! has <p> trailing zeros");\n            }\n        }\n    }\n    if (!failed) {\n        println ("The theory works for i: 1..<N>");\n    }\n}\n\nrascal>verifyTheory(10);\nThe theory works for i: 1..10\nok\n\nrascal>verifyTheory(100);\n100! has 24 trailing zeros\nThe theory works for i: 1..100\nok\n\nrascal>verifyTheory(1000);\n100! has 24 trailing zeros\n200! has 49 trailing zeros\n300! has 74 trailing zeros\n400! has 99 trailing zeros\n500! has 124 trailing zeros\n600! has 148 trailing zeros\nFound a counter example at i=625\n    predicted zeros = 155\n    observed zeros  = 156\nok\n')),(0,o.kt)("p",null,"Yikes, what do we do?  Well, first let's look under the hood at the engine.  The function ",(0,o.kt)("inlineCode",{parentName:"p"},"predictZeros")," ",(0,o.kt)("em",{parentName:"p"},"is")," actually correct, assuming that the functions is calls are correct.  So let's look at the auxiliary functions I wrote (but haven't shown you yet):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rascal"},"// Log for an arbitrary base\npublic real logB(real a, real base) {\n    return log(a) / log(base);\n}\n\npublic real floor (real a) {\n    return toReal(round (a - 0.5));\n}\n\npublic int floorLogBase (int a, int b) {\n    return toInt(floor(logB(toReal(a), toReal(b))));\n}\n\nrascal>floorLogBase(625,5);\nint: 3\nrascal>logB(625.0,5.0);\nreal: 3.9999999999999998757330130880776320985295476764801684...\n")),(0,o.kt)("p",null,"Oh right, real numbers are prone to round off error.  What should we do?"),(0,o.kt)("p",null,'Well, here\'s a bad solution (that "works"):'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rascal"},"public real floor (real a) {\n    return toReal(round (a - 0.5 + 0.00001));\n}\n")),(0,o.kt)("p",null,"But how can I be sure that that's enought decimal places?  What if someone likes my ",(0,o.kt)("inlineCode",{parentName:"p"},"floor")," function and sticks it into the Rascal library, where it is subsequently used by the Eurpoean Space Agency for its next generation of flight control software?"),(0,o.kt)("p",null,"Sometimes, the answer is to do a lot of homework.  Lucky for us, here there is a fairly efficient exact solution using repeated integer division:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rascal"},"// Also change predictZeros to call this version\npublic int floorLogBase2 (int a, int b) {\n    int remaining = a;\n    int ans = 0;\n    while (remaining >= b) {\n        ans += 1;\n        remaining /= b;\n    }\n    return ans;     \n}\n\nrascal>verifyTheory(1000);\n100! has 24 trailing zeros\n200! has 49 trailing zeros\n300! has 74 trailing zeros\n400! has 99 trailing zeros\n500! has 124 trailing zeros\n600! has 148 trailing zeros\n700! has 174 trailing zeros\n800! has 199 trailing zeros\n900! has 224 trailing zeros\n1000! has 249 trailing zeros\nThe theory works for i: 1..1000\nok\n")),(0,o.kt)("p",null,"And we're done.  But what did we learn here?  Here's what I think:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Explore the terrain, take notes, build intuition, develop theories, test them.\n",(0,o.kt)("strong",{parentName:"p"},"  Refine and repeat\n"),"  Double check!")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'Build infrastructure with natural "break points"\n',(0,o.kt)("strong",{parentName:"p"},"  Understandable is better than fast, esp. in the beginning\n"),"  The correct way is better than the easy way\n***  The correct way may be pretty easy too")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Document and later challenge your assumptions\n**  Are you measuring what you think you are measuring?  How do you know?"))))}p.isMDXComponent=!0}}]);