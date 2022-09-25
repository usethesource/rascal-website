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
 \ 68  | 11  / 20  - 77  \ 79  | 7  / 45  - 37  \ 69  | 49  / 39  - 27  \ 65  | 36  / 68  - 62  \ 70  | 4  / 12  - 10  \ 21  | 16  / 60  - 0  \ 40  | 73  / 90  - 26  \ 48  | 69  / 83  - 90  \ 61  | 34  / 25  - 18  \ 55  | 18  / 64  - 74  \ 13  | 82  / 61  - 69  \ 61  | 43  / 35  - 51  \ 30  | 9  / 2  - 48  \ 72  | 96  / 81  - 79  \ 67  | 57  / 95  - 94  \ 11  | 53  / 14  - 89  \ 2  | 74  / 41  - 66  \ 79  | 50  / 33  - 3  \ 39  | 94  / 35  - 55  \ 95  | 73  / 88  - 80  \ 90  | 57  / 70  - 31  \ 85  | 51  / 15  - 59  \ 62  | 53  / 31  - 39  \ 73  | 26  / 27  - 18  \ 89  | 79  / 57  - 68  \ 55  | 33  / 56  - 91  \ 16  | 76  / 66  - 89  \ 62  | 29  / 81  - 49  \ 62  | 28  / 43  - 18  \ 17  | 21  / 4  - 79  \ 85  | 46  / 86  - 62  \ 61  | 83  / 53  - 36  \ 42  | 93  / 65  - 49  \ 6  | 77  / 81  - 61  \ 63  | 92  / 26  - 90  \ 74  | 88  / 9  - 14  \ 8  | 50  / 34  - 34  \ 22  | 64  / 38  - 53  \ 88  | 99  / 84  - 86  \ 53  | 89  / 48  - 29  \ 44  | 20  / 68  - 84  \ 62  | 47  / 17  - 39  \ 32  | 75  / 82  - 39  \ 46  | 14  / 56  - 32  \ 86  | 60  / 35  - 46  \ 92  | 46  / 44  - 48  \ 24  | 56  / 64  - 76  \ 4  | 84  / 88  - 23  \ 51  | 85  / 51  - 62  \ 89  | 51  / 90  - 32  \ 60  | 15  / 7  - 39  \ 8  | 7  / 22  - 93  \ 8  | 73  / 61  - 23  \ 57  | 84  / 42  - 4  \ 93  | 97  / 35  - 48  \ 49  | 4  / 62  - 56  \ 4  | 87  / 46  - 35  \ 72  | 20  / 66  - 48  \ 14  | 26  / 17  - 67  \ 26  | 31  / 84  - 78  \ 17  | 73  / 93  - 40  \ 92  | 14  / 53  - 89  \ 98  | 31  / 56  - 65  \ 61  | 88  / 32  - 75  \ 34  | 55  / 12  - 26  \ 43  | 48  / 96  - 27  \ 75  | 32  / 7  - 78  \ 17  | 73  / 80  - 51  \ 73  | 57  / 10  - 38  \ 69  | 68  / 67  - 34  \ 3  | 33  / 88  - 15  \ 81  | 46  / 4  - 60  \ 73  | 3  / 18  - 11  \ 46  | 17  / 72  - 53  \ 98  | 43  / 26  - 61  \ 82  | 38  / 16  - 9  \ 21  | 79  / 66  - 36  \ 87  | 98  / 34 
list[void]: []
```

