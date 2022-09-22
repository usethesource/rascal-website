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
rascal>  
rascal>  int total = 10; 
int: 10
rascal>  pb = progressBar(total, length = 15, limit = 100);
tuple[void (str) report,void () finished]: <function(|std:///util/Progress.rsc|(2286,340,<55,12>,<63,5>)),function(|std:///util/Progress.rsc|(2628,22,<63,7>,<63,29>))>
rascal>  
rascal>  for (i <- [0..total]) {
>>>>>>>    pb.report(" : <i+1> of <total>");
>>>>>>>  }
  }
Progress: |█--------------| 10%  : 1 of 10Progress: |███------------| 20%  : 2 of 10Progress: |████-----------| 30%  : 3 of 10Progress: |██████---------| 40%  : 4 of 10Progress: |███████--------| 50%  : 5 of 10Progress: |█████████------| 60%  : 6 of 10Progress: |██████████-----| 70%  : 7 of 10Progress: |████████████---| 80%  : 8 of 10Progress: |█████████████--| 90%  : 9 of 10Progress: |███████████████| 100%  : 10 of 10
list[void]: []
rascal>  
rascal>  pb.finished();  
  pb.finished();  
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
rascal>  
rascal>  sp = spinner();
void (str): function(|std:///util/Progress.rsc|(3332,305,<91,9>,<100,3>))
rascal>  
rascal>  while (n := arbInt(100), n != 1) {
>>>>>>>    sp("<n>");
>>>>>>>  }
  }
 \ 6  | 93  / 55  - 84  \ 37  | 56  / 18  - 3  \ 27  | 82  / 43  - 66  \ 6  | 35  / 56  - 73  \ 15  | 49  / 79  - 92  \ 50  | 38  / 47  - 9  \ 97  | 55  / 13  - 36  \ 38  | 41  / 8  - 89  \ 64  | 22  / 82  - 58  \ 2  | 81  / 35  - 62  \ 70  | 40  / 61  - 78  \ 49  | 88  / 29  - 90  \ 44  | 51  / 96  - 29  \ 17  | 41  / 62  - 98  \ 28  | 20  / 6  - 50  \ 4  | 23  / 64  - 52  \ 54  | 41  / 87  - 6  \ 56  | 96  / 82  - 43  \ 23  | 97  / 36  - 75  \ 63  | 47  / 53  - 23  \ 20  | 97  / 49  - 38  \ 27  | 84  / 66  - 71  \ 71  | 90  / 46  - 26  \ 78  | 93  / 17  - 26  \ 68  | 43  / 77  - 78  \ 78  | 24  / 83  - 73  \ 57  | 98  / 27  - 7  \ 62  | 65  / 60  - 25  \ 58  | 4  / 58  - 80  \ 95  | 58  / 57  - 7  \ 6  | 70  / 7  - 60  \ 7  | 71  / 11  - 66  \ 11  | 84  / 93  - 40  \ 81  | 9  / 10 
list[void]: []
```

