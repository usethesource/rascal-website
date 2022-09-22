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
 \ 73  | 29  / 9  - 40  \ 73  | 67  / 47  - 22  \ 45  | 3  / 32  - 64  \ 57  | 96  / 5  - 28  \ 31  | 7  / 41  - 82  \ 73  | 99  / 0  - 38  \ 81  | 76  / 68  - 64  \ 5  | 22  / 26  - 7  \ 11  | 18  / 14  - 87  \ 18  | 15  / 11  - 18  \ 88  | 55  / 41  - 19  \ 0  | 61  / 52  - 53  \ 32  | 27  / 5  - 2  \ 64  | 40  / 69  - 11  \ 44  | 36  / 56  - 41  \ 37  | 45  / 72  - 2  \ 27  | 58  / 83  - 98  \ 76  | 27  / 61  - 34  \ 94  | 71  / 60  - 2  \ 86  | 98  / 22  - 63  \ 93  | 3  / 49  - 64  \ 33  | 43  / 83  - 78  \ 58  | 88  / 43  - 36  \ 53  | 77  / 56  - 69  \ 74  | 23  / 89  - 16  \ 63  | 9  / 23  - 66  \ 19  | 77  / 68  - 30  \ 21  | 78  / 29  - 15  \ 82  | 95  / 83  - 16  \ 14  | 30  / 30  - 60  \ 52  | 94  / 6  - 41  \ 24  | 70  / 11  - 34  \ 43  | 99  / 24  - 74  \ 34  | 58  / 36  - 45  \ 40  | 35  / 2  - 86  \ 26  | 74  / 56  - 87  \ 28  | 55  / 3  - 85  \ 30  | 65  / 42  - 43  \ 24  | 5  / 60  - 42  \ 96  | 90  / 63  - 6  \ 7  | 9  / 88  - 84  \ 43  | 13  / 48  - 93  \ 92  | 97  / 66  - 15  \ 49  | 10  / 11  - 48  \ 22  | 12  / 63  - 43 
list[void]: []
```

