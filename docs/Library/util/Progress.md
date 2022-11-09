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
 \ 98  | 9  / 67  - 74  \ 68  | 59  / 80  - 86  \ 25  | 93  / 32  - 5  \ 58  | 91  / 25  - 98  \ 77  | 85  / 12  - 86  \ 69  | 41  / 47  - 43  \ 40  | 38  / 68  - 29  \ 19  | 48  / 99  - 53  \ 97  | 68  / 40  - 69  \ 6  | 87  / 45  - 18  \ 39  | 99  / 7  - 17  \ 47  | 15  / 33  - 89  \ 80  | 72  / 21  - 99  \ 84  | 14  / 68  - 64  \ 96  | 77  / 21  - 8  \ 40  | 69  / 2  - 8  \ 29  | 52  / 22  - 93  \ 27  | 26  / 71  - 92  \ 58  | 32  / 36  - 11  \ 37  | 62  / 31  - 94  \ 70  | 96  / 98  - 39  \ 77  | 52  / 7  - 40  \ 43  | 57  / 18  - 55  \ 15  | 47  / 31  - 40  \ 58  | 27  / 42  - 59  \ 84  | 72  / 72  - 32  \ 19  | 80  / 55  - 87  \ 43  | 33  / 89  - 94  \ 91  | 23  / 18  - 87  \ 4  | 70  / 72  - 89  \ 43  | 89  / 28  - 82  \ 62  | 19  / 88  - 93  \ 64  | 72  / 63  - 65  \ 77  | 48  / 98  - 86  \ 67  | 39  / 57  - 62  \ 86  | 23  / 81  - 21  \ 23  | 94  / 85  - 10  \ 32  | 21  / 3  - 89  \ 28  | 19  / 91  - 41  \ 90  | 77  / 67  - 55  \ 3  | 42  / 46  - 17  \ 54  | 2  / 39  - 10  \ 57  | 48  / 33  - 95  \ 2  | 85  / 93  - 99  \ 79  | 45  / 8  - 44  \ 38  | 60  / 60  - 57  \ 32  | 82  / 78  - 5  \ 74  | 24  / 18  - 25  \ 80  | 87  / 82  - 99  \ 30  | 91  / 44  - 71  \ 0  | 25  / 32  - 90  \ 34  | 98  / 83  - 67  \ 69  | 12  / 54  - 70  \ 58  | 24  / 30  - 33  \ 20  | 18  / 69  - 81  \ 32  | 20  / 91  - 41  \ 30  | 46  / 72  - 25  \ 2  | 59  / 73  - 90  \ 58  | 53  / 73  - 32  \ 23  | 27  / 85  - 34  \ 15  | 40  / 84  - 63  \ 19  | 96  / 23  - 28  \ 85  | 35  / 45  - 85  \ 61  | 6  / 31  - 77  \ 92  | 95  / 47  - 13  \ 34  | 57  / 50  - 95  \ 19  | 44  / 72  - 44  \ 9  | 95  / 32  - 12  \ 12  | 47  / 73  - 23  \ 26  | 57  / 53  - 95  \ 90  | 89  / 9  - 85  \ 48  | 70  / 98  - 57  \ 52  | 65  / 23  - 87  \ 25  | 58  / 7  - 10  \ 89  | 22  / 22  - 30  \ 51  | 35  / 48  - 85  \ 44  | 42  / 78  - 10  \ 78  | 3  / 86  - 90  \ 79  | 20  / 89  - 58  \ 22  | 7  / 88  - 95 
list[void]: []
```

