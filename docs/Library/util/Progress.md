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
 \ 27  | 32  / 6  - 20  \ 57  | 68  / 53  - 82  \ 81  | 63  / 15  - 78  \ 89  | 46  / 36  - 74  \ 17  | 24  / 51  - 41  \ 9  | 63  / 36  - 37  \ 60  | 80  / 7  - 29  \ 16  | 47  / 16  - 94  \ 91  | 90  / 82  - 81  \ 49  | 5  / 66  - 93  \ 97  | 33  / 97  - 12  \ 58  | 38  / 59  - 48  \ 35  | 6  / 99  - 32  \ 98  | 43  / 28  - 47  \ 73  | 0  / 82  - 97  \ 3  | 96  / 77  - 54  \ 31 
list[void]: []
```

93  \ 25  | 28  / 83  - 39  \ 79  | 13  / 38  - 86  \ 90  | 59  / 28  - 41  \ 6  | 84  / 75  - 37  \ 4  | 16  / 33  - 71  \ 75  | 6  / 36  - 99  \ 38  | 14  / 31  - 5  \ 72  | 25  / 91  - 92  \ 94  | 90  / 23  - 70  \ 63  | 29  / 20  - 23  \ 97  | 62  / 20  - 59  \ 24  | 27  / 97  - 39  \ 37  | 44  / 43  - 20  \ 13  | 63  / 75  - 47  \ 16  | 95  / 96  - 40  \ 17  | 54  / 77  - 22  \ 20  | 64  / 15  - 41  \ 59  | 64  / 61  - 71  \ 78  | 90  / 6  - 41  \ 78  | 75  / 8  - 17  \ 13  | 92  / 91  - 34  \ 44  | 90  / 36  - 48  \ 9  | 35  / 88  - 70  \ 28  | 42  / 57  - 58  \ 90  | 33  / 61  - 90  \ 6  | 24  / 98  - 74  \ 68  | 47  / 2  - 75  \ 79  | 16  / 2  - 40  \ 63  | 15  / 86  - 12  \ 24  | 71  / 46  - 38  \ 46  | 89  / 60  - 45  \ 74  | 13  / 51  - 68  \ 85  | 46  / 23  - 51  \ 56  | 19  / 66  - 48  \ 48  | 48  / 99  - 76  \ 73  | 94  / 10  - 27  \ 35  | 31  / 89  - 11  \ 97  | 66  / 22  - 73  \ 50  | 66  / 45  - 74  \ 5  | 36  / 96  - 0  \ 76  | 86  / 82  - 74  \ 17  | 47  / 34  - 2  \ 62  | 49  / 27  - 58  \ 12  | 78  / 30  - 34  \ 7  | 60  / 54  - 63  \ 52  | 99  / 99  - 18  \ 43  | 50  / 13  - 28  \ 51  | 81  / 64  - 7  \ 73  | 45  / 70  - 23  \ 98  | 19  / 57  - 99  \ 22  | 24  / 8  - 23  \ 38  | 2  / 18  - 49 
list[void]: []
```

