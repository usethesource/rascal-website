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
 \ 92  | 65  / 70  - 13  \ 95  | 7  / 48  - 99  \ 86  | 55  / 14  - 52  \ 35  | 99  / 68  - 26  \ 70  | 42  / 13  - 35  \ 9  | 30  / 86  - 61  \ 90  | 92  / 96  - 79  \ 20  | 69  / 59  - 18  \ 80  | 93  / 75  - 70  \ 71  | 95  / 92  - 37  \ 29  | 73  / 43  - 82  \ 69  | 48  / 88  - 68  \ 92  | 84  / 15  - 18  \ 56  | 56  / 46  - 79  \ 50  | 64  / 44  - 82  \ 80  | 60  / 65  - 80  \ 49  | 26  / 23  - 95  \ 78  | 45  / 77  - 19  \ 19  | 45  / 66  - 84  \ 83  | 50  / 41  - 59  \ 66  | 80  / 45  - 18  \ 5  | 30  / 8  - 3  \ 95  | 4  / 93  - 57  \ 90  | 95  / 22  - 65  \ 65  | 83  / 12  - 48  \ 6  | 72  / 26  - 46  \ 44  | 46  / 17  - 16  \ 7  | 71  / 32  - 19  \ 32  | 15  / 14  - 72  \ 72  | 51  / 33  - 69  \ 73  | 23  / 18  - 78  \ 48  | 82  / 47  - 5  \ 73  | 29  / 11  - 36  \ 30  | 0  / 36  - 92  \ 36  | 44  / 27  - 44  \ 96  | 26  / 31  - 44  \ 65  | 85  / 16  - 80  \ 22  | 91  / 85  - 73  \ 43  | 97  / 61  - 30  \ 34  | 94  / 95  - 21  \ 12  | 79  / 8  - 61  \ 66  | 16  / 74  - 68  \ 54  | 96  / 15  - 61  \ 38  | 34  / 97  - 15  \ 38  | 33  / 21  - 54  \ 61  | 85  / 62  - 48  \ 38  | 0  / 84  - 17  \ 70  | 13  / 59  - 80  \ 32  | 58  / 22  - 77  \ 46  | 54  / 64  - 43  \ 23  | 5  / 7  - 27  \ 98  | 77  / 39  - 31  \ 6  | 59  / 74  - 6  \ 99  | 87  / 42  - 5  \ 34  | 57  / 21  - 55  \ 73  | 64  / 26  - 78  \ 82  | 17  / 75  - 65  \ 78  | 49  / 91  - 47  \ 98  | 92  / 97  - 29  \ 98  | 14  / 4  - 17  \ 3  | 88  / 71  - 59  \ 27  | 28  / 33  - 80  \ 30  | 79  / 2  - 43  \ 68  | 43  / 64  - 52  \ 22  | 17  / 62  - 80  \ 91  | 53  / 18  - 71  \ 4  | 25  / 2  - 12  \ 8  | 85  / 37  - 91  \ 79  | 64  / 9  - 78  \ 69  | 24  / 42  - 18  \ 91  | 52  / 40  - 18  \ 93  | 55  / 66  - 44  \ 43  | 89  / 86  - 36  \ 19  | 98  / 42  - 95  \ 13  | 55  / 38  - 20  \ 99 
list[void]: []
```

