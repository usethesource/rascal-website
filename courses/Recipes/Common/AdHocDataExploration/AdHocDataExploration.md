---
title: Ad Hoc Data Exploration
---

#### Synopsis

Using Rascal to explore an interesting data space.

#### Syntax

#### Types

#### Function

#### Description

The problem we will look at comes from mathematics, and has a precise analytical solution, but
let's use Rascal to explore the state space, and see how it can help us to build intuition.

As you know, Rascal supports arbitrarily large numbers internally (without additional libraries), unlike more traditional 
languages like C or Java.  For example, if you want to compute 500!, then it's a simple matter of
calling `fact(500)` at the command line.  Let's use this definition of factorial:

```rascal-commands
int fact (int n) {
    if (n <= 1) {
	    return 1;
    } else {
	    return n * fact (n-1);
    }
}
```

If you compute `fact(1000)` at the Rascal command line, you get a large number, on the order of 4.02 x 10^2567^. This is much, much bigger than, say a google, which is a mere 10<^>100^.  If Rascal runs out stack space, try computing 100! and 200! up to the limit, or you can fiddle with the JVM's stacksize parameter `-Xss1G`

```rascal-shell,continue
fact(500);
```

Now copy the numerical result above and paste it into an edit window to have a good look at it.  Notice anything interesting?  The last 249 digits are all zeros.  How did this happen and what does it mean?

To be honest, when I did this calculation for the first time, I thought I'd found a bug.  So I looked at the values of N! for N in the range 900 to 1000 and discovered that the zeros accumulate on the end of N! as N gets bigger.  Let's think about it for a bit:  N! is a cumulative product, so once a zero has appeared on the end there is no way to get rid of it by multiplying by a positive integer.

How do the zeros appear?  Well, this isn't to hard to figure out.  Obviously, each time you reach a multiple of 10, you will add (at least) one more zero to the cumulative product.  But what about multiples of 5?  Well, you would add one more zero if you can match the 5 to a 2 within the factors, and there are lots of lonely 2s in that list.  So, to summarize, each time N is a multiple of 5, you add at least one zero onto the cumulative product N!.

So here's the question we're going to solve:  For an arbitrary N, can you predict exactly how many trailing zeros there will be in N!?  

Again, this can be solved analytically (and if you go looking on the web, you will discover that this is an old chestnut of a math problem that's sometimes used in job interviews to test analytical ability), but what I want to do here is to show how we can use Rascal to play around with the problem space a bit to help us build up our intuition.  This is very much like what we do in empirical software engineering, when we have lots of data to analyze, and we're trying to look for patterns that might explain behaviours, such as why some functions are more likely to be associated with bugs than others.  In that kind of situation, we typically go through two stages:  first, we wade through the data, exploring relationships, looking for unusual lumps or recognizable patters; second, we build theories of how the world works, and test them out using the data.  In both stages, we not only look at the data, we play with it.  We build little tools to help answer our questions, see where our hunches lead us.  We use this "play" to improve our understanding of the problem space, and build intuition about how it works as testable theories.  In empirical software engineering, as in most other sciences, we usually don't get concrete proof of a theory; rather, we gather evidence towards ultimately accepting or rejecting the theories (tho often, we may choose to use this evidence to refine the theories and try again).

In this case, however, there is a precise analytical solution, a proof, a "ground truth".  But that doesn't mean that we can't use the empirical approach to help build our intuition about the problem space, and ultimately devise a theory about how to calculate the number of trailing zeros in N!.  Solving analytical problems is about having enough intuition to see possible solutions.  And using this empirical approach is one way to build intuition.

So let's define a few helper functions and see where that leads us:
```rascal-commands,continue
int countZeros (int n) {
    if (n < 10) {
	    return 0;
    } else if (n % 10 == 0) {
        return 1 + countZeros (n / 10);
    } else {
	    return countZeros (n / 10);
    }   
}
```

```rascal-shell,continue
i = fact(500);
countZeros(i);
```

This was my first try at the solution (really!), and there's a problem: 1000! has exactly 249 trailing zeros, not 472.  
What did I do wrong?  Oh, right, _trailing_ zeros, and the above function counts _all_ of the zeros.  Let's try again:

```rascal-commands,continue
int countTrailingZeros (int n) {
    if (n < 10) {
	    return 0;
    } else if (n % 10 == 0) {
        return 1 + countTrailingZeros (n / 10);
    } else {
	    return 0 ;
    }   
}
```

```rascal-shell,continue
countTrailingZeros(i);
```

OK, so we're making progress.  Let's define another function to help us explore the data space:

```rascal-commands,continue
void printLastTwenty (int n){
    for(int i <- [n-19..n+1]) {
        println ("<i>! has <countTrailingZeros(fact(i))> trailing zeros.");
    }
}
```

```rascal-shell,continue
printLastTwenty(500);
```

So the pattern I see arising (confirmed by more playing that I won't show you) is that you add a zero every time N is divisible by 5.  But sometimes you add more than one zero: 500! adds three zeros.  

We defined one function above to help us look at the data more compactly; now let's create another function to look for lumps in the data:

```rascal-commands,continue
// Printout all i in [0..n] where i! has more trailing zeros than (i-1)!
public void findLumps (int n) {
    int iMinusOneFactZeros = 0;
    for (int i <- [1..n+1]) {
        int iFactZeros = countTrailingZeros(fact(i));
        int diff = iFactZeros - iMinusOneFactZeros ;
        if (diff >= 1) {
            println ("<diff> more zeros at <i>!");
        }
        iMinusOneFactZeros = iFactZeros;
    }
}
```

```rascal-shell,continue
findLumps(500);
```

So probably we're noticing some patterns here already, and maybe forming some intuition.  But let's first revise our lump-finding function to produce even more concise output:

```rascal-commands,continue
// We can parameterize the threshold to look for jumps of 2, 3, or 4 zeros
public void findLumps2 (int n, int tao) {
    int iMinusOneFactZeros = 0;
    for (int i <- [1..n+1]) {
        int iFactZeros = countTrailingZeros(fact(i));
        int diff = iFactZeros - iMinusOneFactZeros ;
        if (diff >= tao) {
            println ("<diff> more zeros at <i>!");
        }
        iMinusOneFactZeros = iFactZeros;
    }
}
```

```rascal-shell,continue
findLumps2(500,2);
findLumps2(500,3);
findLumps2(500,4);
```

Notice anything yet?  Here are some fun math facts to consider:

*  5^0^ = 1
*  5^1^ = 5
*  5^2^ = 25
*  5^3^ = 125
*  5^4^ = 625
*  5^5^ = 3125

So here's the solution:

Let N be a positive integer.

Let k = floor (log~5~ N)

Start a counter at zero, call it nz

We want to examine i <- [1..N+1]

*  If i  is not divisible by 5, ignore it
*  If  i  is divisible by 5, add 1 to nz
*  If  i  is also divisible by 25, add 1 more
*  ...
*  If  i is also divisible by 2k, add 1 more

We can write this in Rascal as:

```rascal-commands,continue
int predictZeros (int N) {
    int k = floorLogBase(N, 5);  // I wrote this
    int nz = 0;
    for (int i <- [1..N+1] ) {
	    int p5 = 1;
        for (int j <- [1..k+1]) {
            p5 *= 5;
    	    if (i % p5 == 0) {
		        nz += 1;
	        } else {
                break;
	        }
	    }
    }
    return nz; 
}
```

Now a little hand validation might convince you that this should work, but let's write a little verifier function to be sure:

```rascal-commands,continue
void verifyTheory (int N) {
    int checkInterval = 100; // for printing
    bool failed = false;
    for (int i <- [1..N+1]) {
        ifact=fact(i);
    	int p = predictZeros(i);
    	int c = countTrailingZeros(ifact);
    	if (p != c) {
	        failed = true;
	        println ("Found a counter example at i=<i>");
	        break;
    	} else {
	        if (i % checkInterval == 0) {
		        println ("<i>! has <p> trailing zeros");
	        }
	    }
    }
    if (!failed) {
	    println ("The theory works for i: 1..<N>");
    }
}
```

```rascal-shell,continue
verifyTheory(10);
verifyTheory(100);
verifyTheory(500);
```

Yikes, what do we do?  Well, first let's look under the hood at the engine.  The function `predictZeros` _is_ actually correct, assuming that the functions is calls are correct.  So let's look at the auxiliary functions I wrote (but haven't shown you yet):

```rascal-commands,continue
// Log for an arbitrary base
real logB(real a, real base) {
    return log(a) / log(base);
}

real floor (real a) {
    return toReal(round (a - 0.5));
}

int floorLogBase (int a, int b) {
    return toInt(floor(logB(toReal(a), toReal(b))));
}
```

```rascal-shell,continue
floorLogBase(625,5);
logB(625.0,5.0);
```

Oh right, real numbers are prone to round off error.  What should we do?

Well, here's a bad solution (that "works"):

```rascal-commands
public real floor (real a) {
    return toReal(round (a - 0.5 + 0.00001));
}
```

But how can I be sure that that's enought decimal places?  What if someone likes my `floor` function and sticks it into the Rascal library, where it is subsequently used by the Eurpoean Space Agency for its next generation of flight control software?

Sometimes, the answer is to do a lot of homework.  Lucky for us, here there is a fairly efficient exact solution using repeated integer division:

```rascal-commands,continue
// Also change predictZeros to call this version
int floorLogBase2 (int a, int b) {
    int remaining = a;
    int ans = 0;
    while (remaining >= b) {
	    ans += 1;
	    remaining /= b;
    }
    return ans;		
}
```

```rascal-shell,continue
verifyTheory(500);
```

And we're done.  But what did we learn here?  Here's what I think:

*  Explore the terrain, take notes, build intuition, develop theories, test them.
   *  Refine and repeat
   *  Double check!

*  Build infrastructure with natural "break points"
   *  Understandable is better than fast, esp. in the beginning
   *  The correct way is better than the easy way
   *  The correct way may be pretty easy too

*  Document and later challenge your assumptions 
   *  Are you measuring what you think you are measuring?  How do you know?

#### Examples

#### Benefits

#### Pitfalls

