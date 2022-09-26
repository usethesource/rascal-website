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
 \ 36  | 88  / 68  - 32  \ 62  | 94  / 59  - 70  \ 54  | 52  / 85  - 33  \ 36  | 81  / 18  - 19  \ 50  | 35  / 7  - 66  \ 32  | 14  / 96  - 45  \ 21  | 64  / 8  - 97  \ 99  | 9  / 4  - 79  \ 15  | 52  / 16  - 29  \ 95  | 8  / 34  - 8  \ 20  | 9  / 41  - 72  \ 28  | 23  / 5  - 84  \ 5  | 26  / 86  - 46  \ 36  | 41  / 51  - 15  \ 10  | 12  / 54  - 92  \ 81  | 40  / 14  - 92  \ 26  | 14  / 60  - 10  \ 95  | 89  / 94  - 31  \ 48  | 62  / 73  - 85  \ 60  | 65  / 67  - 91  \ 14  | 5  / 19  - 57  \ 13  | 41  / 45  - 20  \ 58  | 66  / 34  - 75  \ 24  | 18  / 4  - 5  \ 7  | 7  / 82  - 47  \ 50  | 37  / 80  - 51  \ 54  | 18  / 30  - 10  \ 24  | 8  / 7  - 35  \ 46  | 65  / 65  - 61  \ 28  | 30  / 27  - 95  \ 78  | 62  / 48  - 68  \ 10  | 63  / 55  - 18  \ 40  | 51  / 92  - 8  \ 89  | 88  / 51  - 27  \ 33  | 30  / 19  - 33  \ 5  | 51  / 18  - 45  \ 90  | 45  / 87  - 15  \ 16  | 48  / 81  - 69  \ 18  | 75  / 8  - 37  \ 19  | 49  / 79  - 2  \ 62  | 93  / 45  - 73  \ 31  | 75  / 92  - 71  \ 31  | 98  / 32  - 92  \ 18  | 78  / 56  - 96  \ 96  | 63  / 68  - 88  \ 49  | 20  / 19  - 17  \ 94  | 91  / 67  - 0  \ 90  | 62  / 79  - 9  \ 77  | 95  / 61  - 74  \ 9  | 69  / 91  - 16  \ 98  | 22  / 97  - 69  \ 72  | 61  / 68  - 29  \ 89  | 41  / 57  - 74  \ 64  | 49  / 44  - 84  \ 38  | 92  / 15  - 87  \ 31  | 97  / 84  - 36  \ 21  | 27  / 65  - 71  \ 42  | 62  / 95  - 38  \ 44  | 81  / 70  - 59  \ 90  | 89  / 3  - 27  \ 21  | 48  / 75  - 91  \ 4  | 88  / 56  - 73  \ 78  | 35  / 6  - 93  \ 35  | 14  / 70  - 87  \ 74  | 26  / 55  - 44  \ 2  | 35  / 77  - 76  \ 95  | 21  / 95  - 77  \ 64  | 37  / 36  - 7  \ 16  | 60  / 87  - 65  \ 2  | 52  / 85  - 93  \ 86  | 95  / 87  - 25  \ 57  | 6  / 16  - 89  \ 24  | 47  / 89  - 17  \ 66  | 91  / 17  - 22  \ 68  | 96  / 73  - 45  \ 91  | 89  / 45  - 68  \ 97  | 25  / 27  - 70  \ 13  | 48  / 89  - 0  \ 25  | 86  / 22  - 5  \ 14  | 48  / 67  - 46  \ 39  | 84  / 13  - 62  \ 65  | 58  / 62  - 49  \ 51  | 34  / 42  - 58  \ 6  | 86  / 15  - 59  \ 62  | 78  / 21  - 25  \ 25  | 95  / 4  - 64 
list[void]: []
```

