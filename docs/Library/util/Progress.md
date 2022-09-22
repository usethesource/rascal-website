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
 \ 62  | 75  / 59  - 50  \ 6  | 98  / 54  - 30  \ 39  | 86  / 13  - 18  \ 3  | 24  / 64  - 72  \ 0  | 51  / 20  - 68  \ 90  | 95  / 38  - 66  \ 92  | 0  / 80  - 74  \ 14  | 62  / 69  - 2  \ 61  | 67  / 69  - 3  \ 62  | 58  / 43  - 81  \ 2  | 83  / 94  - 5  \ 71  | 72  / 39  - 50  \ 59  | 87  / 37  - 48  \ 57  | 13  / 92  - 70  \ 78  | 28  / 72  - 42  \ 2  | 8  / 82  - 63  \ 17  | 81  / 17  - 50  \ 89  | 40  / 91  - 39  \ 92  | 87  / 83  - 87  \ 48  | 16  / 7  - 31  \ 95  | 54  / 78  - 0  \ 70  | 77  / 84  - 62  \ 98  | 52  / 55  - 20  \ 49  | 64  / 2  - 85  \ 15  | 62  / 53  - 21  \ 21  | 90  / 83  - 69  \ 60  | 0  / 76  - 90  \ 58  | 97  / 87  - 86  \ 45  | 16  / 77  - 14  \ 70  | 98  / 52  - 65  \ 45  | 59  / 27  - 88  \ 68  | 47  / 19  - 23  \ 38  | 17  / 27  - 51  \ 29  | 68  / 81  - 18  \ 47  | 83  / 96  - 73  \ 26  | 7  / 51  - 0  \ 21  | 73  / 60  - 57  \ 83  | 73  / 10  - 11  \ 71  | 75  / 12  - 14  \ 41  | 96  / 11  - 2  \ 83  | 69  / 76  - 0  \ 52  | 60  / 39  - 96  \ 56  | 41  / 84  - 12  \ 46  | 21  / 52  - 77  \ 82  | 9  / 43  - 45  \ 82  | 77  / 65  - 98  \ 55  | 23  / 68  - 91  \ 78  | 19  / 77  - 41  \ 33  | 98  / 79  - 40  \ 48  | 21  / 57  - 8  \ 84  | 16  / 0  - 27  \ 52  | 75  / 44  - 72  \ 88  | 7  / 76  - 95  \ 67  | 22  / 82  - 56  \ 45  | 6  / 73  - 54  \ 21  | 21  / 54  - 57  \ 66  | 7  / 90  - 79  \ 16  | 28  / 77  - 73  \ 50  | 53  / 44  - 70  \ 54  | 85  / 29  - 6 
list[void]: []
```

