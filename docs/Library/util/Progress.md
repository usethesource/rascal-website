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
tuple[void (str) report,void () finished]: <function(|std:///util/Progress.rsc|(2277,340,<52,12>,<60,5>)),function(|std:///util/Progress.rsc|(2619,22,<60,7>,<60,29>))>
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
void (str): function(|std:///util/Progress.rsc|(3317,305,<86,9>,<95,3>))
rascal>  while (n := arbInt(100), n != 1) {
>>>>>>>    sp("<n>");
>>>>>>>  }
 \ 87  | 35  / 56  - 89  \ 70  | 75  / 8  - 82  \ 9  | 16  / 71  - 57  \ 58  | 84  / 61  - 46  \ 27  | 57  / 74  - 81  \ 31  | 42  / 98  - 8  \ 26  | 9  / 41  - 93  \ 71  | 7  / 91  - 51  \ 93  | 96  / 16  - 10  \ 3  | 51  / 42  - 35  \ 14  | 93  / 24  - 82  \ 52  | 42  / 84  - 59  \ 82  | 96  / 81  - 96  \ 89  | 28  / 59  - 40  \ 83  | 81  / 15  - 37  \ 10  | 52  / 74  - 49  \ 27  | 26  / 75  - 43  \ 25  | 20  / 10  - 73  \ 79  | 96  / 45  - 38  \ 56  | 47  / 45  - 50  \ 22  | 15  / 33  - 25  \ 3  | 47  / 55  - 49  \ 97  | 65  / 71  - 5  \ 28  | 50  / 35  - 58  \ 43  | 94  / 85  - 50  \ 43  | 24  / 16  - 72  \ 20  | 90  / 73  - 43  \ 54  | 98  / 81  - 59  \ 83  | 53  / 81  - 5  \ 64  | 17  / 87  - 68  \ 97  | 62  / 69  - 64  \ 75  | 21  / 87  - 12 
list[void]: []
```

