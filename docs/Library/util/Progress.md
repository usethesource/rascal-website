---
title: "util::Progress"
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
 \ 92  | 92  / 55  - 73  \ 55  | 99  / 18  - 18  \ 46  | 44  / 4  - 91  \ 52  | 70  / 48  - 60  \ 21  | 15  / 26  - 72  \ 76  | 13  / 14  - 72  \ 88  | 63  / 33  - 68  \ 55  | 35  / 46  - 93  \ 14  | 69  / 14  - 6  \ 15  | 59  / 7  - 93  \ 0  | 64  / 75  - 30  \ 70  | 38  / 18  - 13  \ 92  | 37  / 90  - 84  \ 71  | 15  / 52  - 53  \ 66  | 22  / 63  - 19  \ 41  | 21  / 23  - 97  \ 39  | 45  / 96  - 31  \ 93  | 69  / 34  - 24  \ 47  | 61  / 27  - 77  \ 18  | 84  / 0  - 88  \ 20  | 65  / 96  - 94  \ 73  | 36  / 93  - 23  \ 38  | 23  / 13  - 24  \ 20  | 31  / 58  - 43  \ 38  | 38  / 66  - 79  \ 37  | 46  / 11  - 87  \ 74  | 99  / 71  - 84  \ 17  | 79  / 76  - 11  \ 25  | 67  / 59  - 90  \ 15  | 27  / 46  - 43  \ 33  | 87  / 68  - 55  \ 76  | 61  / 45  - 32  \ 54  | 22  / 20  - 66  \ 6  | 72  / 78  - 89  \ 13  | 2  / 15  - 24  \ 67  | 72  / 99  - 43  \ 51  | 79  / 43  - 2  \ 8  | 25  / 67  - 49  \ 25  | 58  / 30  - 92  \ 17  | 6  / 45  - 76  \ 20  | 7  / 20  - 85  \ 57  | 91  / 10  - 20  \ 88  | 47  / 20  - 48  \ 79  | 71  / 77  - 48  \ 94  | 81  / 97  - 24  \ 94  | 10  / 88  - 49  \ 56  | 20  / 43  - 80  \ 70  | 59  / 10  - 39  \ 25  | 79  / 25  - 51  \ 61  | 30  / 37  - 74  \ 40  | 40  / 41  - 20  \ 15  | 42  / 79  - 74  \ 15  | 45  / 33  - 55  \ 18  | 93  / 49  - 34  \ 21  | 2  / 42  - 2  \ 64  | 75  / 56  - 45  \ 6  | 28  / 40  - 24  \ 7  | 58  / 21  - 88  \ 99  | 78  / 15  - 9  \ 0  | 16  / 55  - 64  \ 93  | 28  / 21  - 31  \ 55  | 58  / 10  - 26  \ 76  | 78  / 11  - 94  \ 90  | 6  / 43  - 73  \ 98  | 9  / 35  - 25  \ 71  | 14  / 83  - 81  \ 87  | 85  / 49  - 54  \ 5  | 47  / 21  - 87  \ 63  | 0  / 28  - 57  \ 91  | 82  / 27  - 95  \ 29  | 25  / 51  - 73  \ 17  | 30  / 59  - 36  \ 41  | 5  / 82  - 60  \ 53  | 79  / 52  - 23  \ 91  | 38  / 63  - 91  \ 72  | 7  / 47  - 71  \ 59  | 74  / 59  - 20  \ 99  | 61  / 40  - 5  \ 81  | 4  / 41  - 58  \ 21  | 65  / 92  - 74  \ 83  | 6  / 3  - 23  \ 28  | 68  / 50  - 92  \ 87  | 27  / 18  - 49  \ 93  | 13  / 24  - 20  \ 29  | 6  / 72  - 32  \ 94  | 66  / 48  - 26  \ 14  | 61  / 49 
list[void]: []
```

