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
 \ 32  | 44  / 29  - 22  \ 84  | 89  / 97  - 88  \ 47  | 77  / 52  - 25  \ 34  | 92  / 17  - 45  \ 34  | 78  / 17  - 52  \ 78  | 65  / 34  - 16  \ 49  | 97  / 58  - 91  \ 81  | 71  / 67  - 23  \ 22  | 31  / 32  - 94  \ 62  | 12  / 82  - 31  \ 37  | 82  / 30  - 8  \ 38  | 96  / 74  - 74  \ 0  | 96  / 19  - 9  \ 79  | 5  / 45  - 67  \ 27  | 60  / 95  - 94  \ 16  | 7  / 59  - 55  \ 60  | 93  / 54  - 83  \ 58  | 18  / 77  - 8  \ 84  | 60  / 79  - 20  \ 80  | 44  / 43  - 54  \ 65  | 80  / 30  - 45  \ 96  | 42  / 50  - 99  \ 13  | 5  / 70  - 87  \ 7  | 67  / 77  - 36  \ 76  | 84  / 23  - 55  \ 24  | 10  / 40  - 52  \ 86  | 26  / 8  - 92  \ 33  | 43  / 52  - 81  \ 17  | 94  / 10  - 71  \ 4  | 86  / 75  - 16  \ 48  | 66  / 54  - 52  \ 87  | 25  / 14  - 75  \ 10  | 70  / 90  - 15  \ 44  | 24  / 5  - 22  \ 67  | 89  / 0  - 9  \ 65  | 24  / 97  - 40  \ 80  | 93  / 69  - 3  \ 96  | 75  / 2  - 85  \ 35  | 33  / 92  - 35  \ 79  | 4  / 28  - 43  \ 16  | 92  / 8  - 87  \ 17  | 81  / 86  - 6  \ 85  | 97  / 56  - 51  \ 27  | 65  / 57  - 86  \ 15  | 98  / 38  - 80  \ 4  | 56  / 61  - 22  \ 30  | 14  / 19  - 5  \ 41  | 40  / 17  - 33  \ 88  | 97  / 84  - 31  \ 29  | 3  / 9  - 9  \ 66  | 98  / 80  - 35  \ 89  | 2  / 42  - 84  \ 13  | 13  / 27  - 32  \ 80  | 29  / 74  - 95  \ 97  | 14  / 60  - 50  \ 51  | 89  / 19  - 43  \ 33  | 18  / 59  - 7  \ 50  | 88  / 56  - 71  \ 17  | 19  / 67  - 91  \ 37  | 73  / 11  - 73  \ 82  | 90  / 0  - 17  \ 95  | 46  / 28  - 53  \ 33  | 53  / 30  - 94  \ 26  | 16  / 32  - 24  \ 96  | 7  / 96  - 51  \ 53  | 47  / 25  - 82  \ 82  | 48  / 6  - 64  \ 24  | 31  / 16  - 86  \ 55  | 32  / 51  - 44  \ 58  | 72  / 74  - 88  \ 93  | 87  / 58  - 77  \ 54  | 27  / 30  - 93  \ 87  | 31  / 24  - 59  \ 53  | 24  / 78  - 8  \ 98  | 87  / 92  - 97  \ 81  | 41  / 34  - 97  \ 38  | 39  / 33  - 42  \ 25  | 41  / 78  - 43 
list[void]: []
```

