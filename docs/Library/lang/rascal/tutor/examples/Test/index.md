## Synopsis {/Lang/rascal/tutor/examples/Test}
This is a test synopsis.
 
## Description {/Lang/rascal/tutor/examples/Test}
See examples below!!!

## Examples  {/Lang/rascal/tutor/examples/Test}
 
```rascal-shell 
rascal>import Content; 
ok
rascal>html("this is some \<strong\>HTML\</strong\> output")
<div class="rascal-html-output">
<<<<<<< HEAD
  <iframe class="rascal-content-frame" style="display: block; width: 100%; height: 100%; resize: both" src="http://localhost:9052/"></iframe>
</div>
rascal>file(|https://www.rascal-mpl.org/assets/ico/favicon.png|)
<div class="rascal-html-output">
  <iframe class="rascal-content-frame" style="display: block; width: 100%; height: 100%; resize: both" src="http://localhost:9052/"></iframe>
=======
  <iframe class="rascal-content-frame" style="display: block; width: 100%; height: 100%; resize: both" src="http://localhost:-1/"></iframe>
</div>
rascal>file(|https://www.rascal-mpl.org/assets/ico/favicon.png|)
<div class="rascal-html-output">
  <iframe class="rascal-content-frame" style="display: block; width: 100%; height: 100%; resize: both" src="http://localhost:-1/"></iframe>
>>>>>>> 2a7f585b (all links end with a slash now..)
</div>
rascal>1 + 1 == 2
bool: true
rascal>int count = 1;
int: 1
rascal>content("counter", Response (Request _) { count += 1; return response("count: <count>"); })
<div class="rascal-html-output">
<<<<<<< HEAD
  <iframe class="rascal-content-frame" style="display: block; width: 100%; height: 100%; resize: both" src="http://localhost:9053/"></iframe>
=======
  <iframe class="rascal-content-frame" style="display: block; width: 100%; height: 100%; resize: both" src="http://localhost:-1/"></iframe>
>>>>>>> 2a7f585b (all links end with a slash now..)
</div>
rascal>count;
int: 1
rascal>count = 66;
int: 66
rascal>content("counter", Response (Request _) { count += 1; return response("count: <count>"); })
<div class="rascal-html-output">
<<<<<<< HEAD
  <iframe class="rascal-content-frame" style="display: block; width: 100%; height: 100%; resize: both" src="http://localhost:9053/"></iframe>
=======
  <iframe class="rascal-content-frame" style="display: block; width: 100%; height: 100%; resize: both" src="http://localhost:-1/"></iframe>
>>>>>>> 2a7f585b (all links end with a slash now..)
</div>
rascal>count;
int: 66
```

* _emphasis_
* *bold*
* [Rascal Web site](http:///rascal-mpl.org)
* [./call analysis](../../../../../../Library/lang/rascal/tutor/examples/Test/CallAnalysis) 
* Table:

  | Module | LOC |
  |--------|-----|
  | A      | 10 |
  | B      | 20 |
   
| Operator    | Description |
|------------|------------|
| `$A$ \| $B$` | alternative |
| `\|\|`       | or          |
   
Horizontal rule:

---

* `code`
* `in code: italics`

* [CallAnalysis](../../../../../../Library/lang/rascal/tutor/examples/Test/CallAnalysis/index.md)
* [If](../../../../../../Library/lang/rascal/tutor/examples/Test/If/index.md)
* [Libraries](../../../../../../Library/lang/rascal/tutor/examples/Test/Libraries/index.md)
* [Questions](../../../../../../Library/lang/rascal/tutor/examples/Test/Questions/index.md)

## Benefits {/Lang/rascal/tutor/examples/Test}

## Pitfalls {/Lang/rascal/tutor/examples/Test}

