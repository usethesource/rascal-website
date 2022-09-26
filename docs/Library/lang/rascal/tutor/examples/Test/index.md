# Synopsis
This is a test synopsis.
 
# Description
See examples below!!!

# Examples 
 

```rascal-shell 
rascal>import Content; 
ok
rascal>html("this is some \<strong\>HTML\</strong\> output")
<div class="rascal-html-output">
  <iframe class="rascal-content-frame" style="display: block; width: 100%; height: 100%; resize: both" src="http://localhost:9116/"></iframe>
</div>
rascal>file(|https://www.rascal-mpl.org/assets/ico/favicon.png|)
<div class="rascal-html-output">
  <iframe class="rascal-content-frame" style="display: block; width: 100%; height: 100%; resize: both" src="http://localhost:9116/"></iframe>
</div>
rascal>1 + 1 == 2
bool: true
rascal>int count = 1;
int: 1
rascal>content("counter", Response (Request _) { count += 1; return response("count: <count>"); })
<div class="rascal-html-output">
  <iframe class="rascal-content-frame" style="display: block; width: 100%; height: 100%; resize: both" src="http://localhost:9117/"></iframe>
</div>
rascal>count;
int: 1
rascal>count = 66;
int: 66
rascal>content("counter", Response (Request _) { count += 1; return response("count: <count>"); })
<div class="rascal-html-output">
  <iframe class="rascal-content-frame" style="display: block; width: 100%; height: 100%; resize: both" src="http://localhost:9117/"></iframe>
</div>
rascal>count;
int: 66
```

* _emphasis_
* *bold*
* [Rascal Web site](http:///rascal-mpl.org)
* [./call analysis](../../../../../../Library/lang/rascal/tutor/examples/Test/CallAnalysis/index.md) 
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

# Pitfalls

