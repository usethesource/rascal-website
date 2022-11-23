---
title: "module util::Progress"
---

#### Usage

`import util::Progress;`


## function progressBar {#util-Progress-progressBar}

```rascal
tuple[void(str) report, void() finished] progressBar(int total, str prefix = "Progress:", int length = 50, int limit = total, str fill = "\u2588", str unfill = "-", str printEnd = "\r")

```


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

```rascal
void (str) spinner(str prefix = " ", str printEnd = "\r")

```


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
 \ 90  | 6  / 14  - 77  \ 89  | 60  / 48  - 10  \ 39  | 32  / 60  - 2  \ 14  | 32  / 87  - 8  \ 59  | 42  / 14  - 13  \ 91  | 6  / 25  - 8  \ 11  | 67  / 4  - 98  \ 3  | 17  / 99  - 91  \ 52  | 28  / 97  - 71  \ 12  | 20  / 34  - 40  \ 27  | 45  / 98  - 39  \ 93  | 46  / 68  - 34  \ 79  | 31  / 39  - 18  \ 97  | 56  / 43  - 90  \ 17  | 25  / 12  - 68  \ 69  | 36  / 32  - 7  \ 99  | 25  / 53  - 75  \ 54  | 17  / 81  - 33  \ 25  | 54  / 70  - 63  \ 52  | 11  / 98  - 0  \ 51  | 45  / 75  - 49  \ 7  | 50  / 77  - 13  \ 56  | 49  / 96  - 14  \ 29  | 7  / 97  - 73  \ 28  | 45  / 6  - 7  \ 53  | 16  / 46  - 43  \ 38  | 62  / 32  - 5  \ 9  | 38  / 62  - 92  \ 70  | 36  / 90  - 48  \ 77  | 3  / 89  - 45  \ 60  | 99  / 88  - 5  \ 46  | 63  / 50  - 10  \ 46  | 32  / 68  - 29  \ 91  | 0  / 92  - 24  \ 90  | 47  / 23  - 9  \ 26  | 4  / 13  - 96  \ 13  | 48  / 44  - 93  \ 31  | 99  / 45  - 44  \ 96  | 39  / 44  - 48  \ 15  | 3  / 80  - 2  \ 74  | 66  / 14  - 76  \ 99  | 17  / 19  - 28  \ 72  | 67  / 64  - 59  \ 46  | 24  / 39  - 69  \ 95  | 40  / 44  - 78  \ 45  | 54  / 65  - 48  \ 81  | 97  / 68  - 91  \ 42  | 48  / 74  - 25  \ 40  | 14  / 29  - 96  \ 80  | 96  / 32  - 89  \ 60  | 8  / 39  - 8  \ 53  | 2  / 90  - 38  \ 89  | 62  / 7  - 26  \ 8  | 86  / 4  - 57  \ 62  | 45  / 3  - 58  \ 62  | 69  / 44  - 66  \ 6  | 94  / 21  - 25  \ 8  | 97  / 5  - 17  \ 83  | 32  / 88  - 34  \ 39  | 35  / 12  - 40  \ 78  | 76  / 13  - 22  \ 6  | 60  / 77  - 17  \ 48  | 19  / 46  - 73  \ 31  | 22  / 26  - 58  \ 87  | 56  / 62  - 99  \ 26  | 82  / 52  - 8  \ 40  | 45  / 51  - 27  \ 7  | 18  / 72  - 7  \ 79  | 88  / 93  - 76  \ 92  | 94  / 7  - 86  \ 42  | 19  / 57  - 12  \ 77  | 36  / 45  - 84 
list[void]: []
```

