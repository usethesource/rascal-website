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
 \ 81  | 79  / 23  - 43  \ 40  | 91  / 16  - 61  \ 74  | 89  / 76  - 48  \ 57  | 89  / 80  - 66  \ 35  | 19  / 11  - 70  \ 68  | 71  / 74  - 52  \ 56  | 47  / 76  - 9  \ 34  | 53  / 22  - 88  \ 29  | 31  / 78  - 55  \ 46  | 88  / 80  - 40  \ 63  | 9  / 92  - 15  \ 91  | 38  / 57  - 69  \ 38  | 92  / 58  - 91  \ 40  | 26  / 66  - 49  \ 83  | 24  / 52  - 2  \ 10  | 92  / 70  - 25  \ 41  | 30  / 97  - 79  \ 2  | 43  / 6  - 7  \ 81  | 69  / 55  - 35  \ 41  | 41  / 80  - 32  \ 72  | 41  / 17  - 30  \ 29  | 22  / 58  - 91  \ 93  | 11  / 70  - 26  \ 11  | 93  / 65  - 92  \ 33  | 26  / 77  - 37  \ 5  | 17  / 96  - 65  \ 80  | 87  / 41  - 75  \ 67  | 92  / 84  - 72  \ 23  | 77  / 71  - 29  \ 19  | 14  / 56  - 22  \ 81  | 22  / 17  - 31  \ 2  | 3  / 88  - 33  \ 57  | 51  / 63  - 74  \ 58  | 12  / 35  - 79  \ 48  | 40  / 58  - 59  \ 35  | 62  / 90  - 80  \ 80  | 45  / 82  - 21  \ 17  | 67  / 16  - 83  \ 9  | 5  / 45  - 58  \ 62  | 22  / 58  - 61  \ 44  | 43  / 56  - 39  \ 25  | 59  / 82  - 12  \ 96  | 7  / 70  - 30  \ 44  | 3  / 2  - 53  \ 19  | 45  / 58  - 15  \ 55  | 0  / 88  - 98  \ 20  | 10  / 66  - 4  \ 31  | 94  / 88  - 12  \ 48  | 64  / 54  - 14  \ 51  | 75  / 11  - 21  \ 78  | 30  / 81  - 18  \ 39  | 0  / 55  - 26  \ 64  | 33  / 45  - 5  \ 33  | 13  / 6  - 98  \ 9  | 35  / 65  - 27  \ 22  | 92  / 58  - 85  \ 23  | 76  / 67  - 49  \ 39  | 62  / 23  - 46  \ 24  | 3  / 12  - 6  \ 22  | 84  / 6  - 16  \ 43  | 61  / 36  - 85  \ 28  | 10  / 82  - 20  \ 94  | 37  / 60  - 48  \ 58  | 47  / 95  - 73  \ 22  | 24  / 46  - 62  \ 30  | 27  / 65  - 89  \ 8  | 47  / 41  - 2  \ 49  | 3  / 23  - 67  \ 68  | 52  / 24  - 17  \ 24  | 20  / 50  - 47  \ 85  | 20  / 17  - 84  \ 4  | 31  / 8  - 91  \ 53  | 7  / 83  - 75  \ 7  | 26  / 67  - 77  \ 36  | 82  / 38  - 58  \ 66 
list[void]: []
```

