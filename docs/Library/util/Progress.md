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
  }
Progress: |█--------------| 10%  : 1 of 10Progress: |███------------| 20%  : 2 of 10Progress: |████-----------| 30%  : 3 of 10Progress: |██████---------| 40%  : 4 of 10Progress: |███████--------| 50%  : 5 of 10Progress: |█████████------| 60%  : 6 of 10Progress: |██████████-----| 70%  : 7 of 10Progress: |████████████---| 80%  : 8 of 10Progress: |█████████████--| 90%  : 9 of 10Progress: |███████████████| 100%  : 10 of 10
list[void]: []
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
rascal>  sp = spinner();
void (str): function(|std:///util/Progress.rsc|(3317,305,<86,9>,<95,3>))
rascal>  while (n := arbInt(100), n != 1) {
>>>>>>>    sp("<n>");
>>>>>>>  }
  }
<<<<<<< HEAD
 \ 16  | 90  / 61  - 57  \ 99  | 54  / 83  - 99  \ 42  | 48  / 59  - 48  \ 42  | 26  / 69  - 75  \ 50  | 22  / 69  - 76  \ 49  | 13  / 0  - 28  \ 55  | 7  / 18  - 53  \ 2  | 68  / 95  - 5  \ 69  | 35  / 4  - 9  \ 12  | 42  / 89  - 3  \ 83  | 67  / 24  - 97  \ 58  | 38  / 17  - 52  \ 50  | 44  / 93  - 72  \ 32  | 44  / 90  - 49  \ 11  | 28  / 73  - 72  \ 52  | 31  / 39  - 18  \ 4  | 14  / 34  - 66  \ 2  | 77  / 63 
=======
 \ 7  | 48  / 4  - 9  \ 69  | 28  / 71  - 87  \ 18  | 74  / 37  - 69  \ 30  | 67  / 38  - 14  \ 72  | 32  / 67  - 49  \ 80  | 93  / 93  - 85  \ 77  | 18  / 52  - 98  \ 0  | 39  / 97  - 52  \ 54  | 0  / 37  - 66  \ 66  | 10  / 11  - 57  \ 59  | 58  / 13  - 92  \ 37  | 67  / 58  - 29  \ 44  | 46  / 55  - 66  \ 27  | 30  / 88  - 90  \ 59  | 34  / 68  - 59  \ 39  | 85  / 25  - 13  \ 12  | 61  / 54  - 32  \ 17  | 24  / 98  - 59  \ 36  | 87  / 77  - 12  \ 9  | 0  / 79  - 41  \ 17  | 79  / 53  - 54  \ 55  | 13  / 41  - 97  \ 43  | 90  / 58  - 20  \ 72  | 18  / 68  - 88  \ 64  | 34  / 18  - 7  \ 47  | 61  / 49  - 48  \ 72  | 78  / 46  - 75  \ 56  | 61  / 9  - 21  \ 25  | 70  / 41  - 41  \ 76  | 33  / 16  - 41  \ 52  | 17  / 59  - 92  \ 18  | 72  / 6  - 82  \ 26 
>>>>>>> 2a7f585b (all links end with a slash now..)
list[void]: []
```

