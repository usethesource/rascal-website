---
title: "module util::Progress"
---

#### Usage

`import util::Progress;`


## function progressBar {#util-Progress-progressBar}

* ``tuple[void(str) report, void() finished] progressBar(int total, str prefix = "Progress:", int length = 50, int limit = total, str fill = "\u2588", str unfill = "-", str printEnd = "\r")``


  .Synopsis
  This progressbar can be used in terminal applications to show the progress of some process in the terminal.
  
  .Description
  The total number of steps is the only required parameter to be passed in. All other parameters are optional.
   - `prefix` is the string that is displayed in front of the progress bar (default "").
   - `length` is the length (number of characters) of the displayed bar (default 50).
   - `limit` allows for the throtteling of the number of times the progress bar is printed. For instance if the total is 1000 and the limit is set to 100 then the progress bar will be updated every 10 iterations. 
   - `fill` is the character used for the percentage used (default "\u2588").
   - `unfill` is the character used for the unused part (default "-").
   - `printEnd` is the character used at the end of the line (default "\r").
   
  The return is a tuple with 2 functions, the `report` and the `finished` function.
  - `report(str suffix)` needs to be called for every iteration update. The suffix is displayed after the progressbar and can differ per iteration
  - `finished()` can be called at the end of the iteration to add a new line to the terminal  

  It is inspired on the progressbar described here: https://stackoverflow.com/questions/3173320/text-progress-bar-in-the-console

  .Examples

```rascal-shell 
rascal>  import util::Progress;
ok
rascal>  int total = 10; 
int: 10
rascal>  pb = progressBar(total, length = 15, limit = 100);
tuple[void (str) report,void () finished]: <function(|file:///Users/jurgenv/git/rascal/src/org/rascalmpl/library/util/Progress.rsc|(2277,340,<52,12>,<60,5>)),function(|file:///Users/jurgenv/git/rascal/src/org/rascalmpl/library/util/Progress.rsc|(2619,22,<60,7>,<60,29>))>
rascal>  for (i <- [0..total]) {
>>>>>>>    pb.report(" : <i+1> of <total>");
>>>>>>>  }
Progress: |█--------------| 10%  : 1 of 10Progress: |███------------| 20%  : 2 of 10Progress: |████-----------| 30%  : 3 of 10Progress: |██████---------| 40%  : 4 of 10Progress: |███████--------| 50%  : 5 of 10Progress: |█████████------| 60%  : 6 of 10Progress: |██████████-----| 70%  : 7 of 10Progress: |████████████---| 80%  : 8 of 10Progress: |█████████████--| 90%  : 9 of 10Progress: |███████████████| 100%  : 10 of 10
list[void]: []
rascal>  pb.finished();  
ok
```

## function spinner {#util-Progress-spinner}

* ``void (str) spinner(str prefix = " ", str printEnd = "\r")``


  .Synopsis
  Simple spinner to display progress for some terminal process for which the total number of steps is not known.
      
  .Description
  `prefix` - Contains the string displayed in front the spinner (default " ").
     
   It returns a function that can be called to make the spinner spin one rotation.
   This function takes a `suffix` string parameter that will be displayed behind the spinner  
  
  .Examples  

```rascal-shell 
rascal>  import util::Progress;
ok
rascal>  import util::Math;
ok
rascal>  sp = spinner();
void (str): function(|file:///Users/jurgenv/git/rascal/src/org/rascalmpl/library/util/Progress.rsc|(3317,305,<86,9>,<95,3>))
rascal>  while (n := arbInt(100), n != 1) {
>>>>>>>    sp("<n>");
>>>>>>>  }
 \ 34  | 79  / 26  - 5  \ 80  | 39  / 0  - 86  \ 69  | 55  / 2  - 48  \ 37  | 3  / 22  - 63  \ 63  | 37  / 90  - 49  \ 24  | 45  / 93  - 31  \ 27  | 85  / 43  - 2  \ 12  | 42  / 34  - 24  \ 10  | 70  / 77  - 51  \ 50  | 22  / 41  - 98  \ 94  | 36  / 90  - 43  \ 74  | 93  / 84  - 46  \ 18  | 56  / 37  - 51  \ 28  | 51  / 24  - 7  \ 14  | 36  / 54  - 8  \ 25  | 41  / 0  - 36  \ 45  | 4  / 33  - 97  \ 22  | 13  / 59  - 23  \ 3  | 65  / 50  - 15  \ 33  | 33  / 12  - 75  \ 31  | 17  / 7  - 3  \ 9  | 35  / 25  - 34  \ 59  | 65  / 47  - 43  \ 72  | 98  / 2  - 67  \ 88  | 9  / 46  - 84  \ 88  | 55  / 36  - 33  \ 81  | 15  / 24  - 61  \ 60  | 93  / 12  - 50  \ 12  | 16  / 73  - 42  \ 13  | 41  / 44  - 76  \ 74  | 68  / 36  - 49  \ 0  | 94  / 26  - 59  \ 74  | 78  / 41  - 80  \ 44  | 69  / 54  - 12  \ 27  | 65  / 93  - 96  \ 94 
list[void]: []
```

