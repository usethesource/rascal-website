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
 \ 70  | 2  / 10  - 33  \ 60  | 24  / 97  - 70  \ 95  | 12  / 45  - 69  \ 82  | 92  / 11  - 71  \ 86  | 63  / 65  - 99  \ 12  | 22  / 53  - 81  \ 80  | 40  / 13  - 54  \ 83  | 64  / 47  - 4  \ 13  | 66  / 13  - 50  \ 56  | 81  / 49  - 60  \ 2  | 76  / 23  - 51  \ 14  | 54  / 8  - 56  \ 82  | 77  / 54  - 20  \ 73  | 72  / 66  - 48  \ 89  | 89  / 30  - 86  \ 16  | 99  / 89  - 24  \ 59  | 63  / 42  - 92  \ 48  | 2  / 81  - 85  \ 45  | 75  / 40  - 22  \ 42  | 63  / 52  - 97  \ 39  | 23  / 16  - 4  \ 76  | 41  / 65  - 68  \ 67  | 4  / 73  - 5  \ 20  | 10  / 17  - 67  \ 28  | 27  / 61  - 70  \ 39  | 96  / 95  - 58  \ 19  | 30  / 65  - 27  \ 23  | 26  / 0  - 15  \ 54  | 10  / 86  - 38  \ 73  | 22  / 39  - 73  \ 23  | 48  / 64  - 57  \ 94  | 9  / 35  - 55  \ 4  | 98  / 15  - 97  \ 38  | 11  / 43  - 9  \ 26  | 4  / 68  - 61  \ 48  | 78  / 88  - 32  \ 9  | 65  / 97  - 27  \ 15  | 73  / 55  - 76  \ 9  | 9  / 89  - 31  \ 51  | 48  / 26  - 6  \ 60  | 87  / 91  - 21  \ 44  | 68  / 55  - 0  \ 92  | 70  / 36  - 81  \ 17  | 25  / 12  - 85  \ 49  | 33  / 83  - 99  \ 18  | 91  / 59  - 51  \ 25  | 44  / 24  - 50  \ 23  | 39  / 15  - 75  \ 18  | 54  / 21  - 18  \ 38 
list[void]: []
```

