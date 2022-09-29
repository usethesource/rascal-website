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
 \ 60  | 95  / 29  - 44  \ 10  | 35  / 22  - 7  \ 11  | 4  / 7  - 12  \ 4  | 29  / 40  - 87  \ 2  | 26  / 4  - 53  \ 42  | 85  / 7  - 2  \ 2  | 68  / 9  - 56  \ 83  | 25  / 2  - 80  \ 5  | 36  / 45  - 71  \ 14  | 55  / 52  - 96  \ 35  | 48  / 50  - 61  \ 22  | 79  / 71  - 87  \ 64  | 78  / 17  - 11  \ 15  | 20  / 16  - 75  \ 91  | 6  / 64  - 55  \ 79  | 77  / 0  - 78  \ 5  | 57  / 27  - 49  \ 46  | 21  / 44  - 74  \ 91  | 65  / 71  - 73  \ 88  | 9  / 33  - 56  \ 43  | 69  / 45  - 54  \ 30  | 39  / 48  - 99  \ 43  | 79  / 13  - 38  \ 84  | 10  / 63  - 88  \ 59  | 21  / 59  - 60  \ 33  | 22  / 70  - 73  \ 7  | 27  / 35  - 40  \ 38  | 99  / 51  - 67  \ 98  | 9  / 86  - 40  \ 50  | 86  / 85  - 38  \ 68  | 79  / 37  - 27  \ 12  | 13  / 52  - 65  \ 0  | 22  / 41  - 2  \ 2  | 81  / 83  - 20  \ 58  | 70  / 57  - 47  \ 64  | 51  / 76  - 96  \ 14  | 75  / 38  - 46  \ 90  | 2  / 95  - 3  \ 94  | 6  / 31  - 20  \ 86  | 57  / 30  - 18  \ 23  | 67  / 76  - 62  \ 95  | 71  / 30  - 80  \ 20  | 50  / 3  - 41  \ 34  | 16  / 24  - 18  \ 38  | 71  / 53 
list[void]: []
```

  \ 13  | 99  / 50  - 45  \ 97  | 92  / 86  - 30  \ 43  | 42  / 95  - 39  \ 97  | 34  / 99  - 36  \ 26  | 6  / 53  - 45  \ 63  | 13  / 60  - 35  \ 35  | 42  / 32  - 31  \ 64  | 38  / 79  - 43  \ 72  | 82  / 88  - 97  \ 94  | 81  / 44  - 48  \ 43  | 80  / 81  - 82  \ 19  | 55  / 60  - 17  \ 88  | 64  / 10  - 78  \ 33  | 42  / 24  - 59  \ 32  | 68  / 28  - 28  \ 12  | 96  / 0  - 85  \ 74  | 11  / 90  - 52  \ 35  | 68  / 21  - 11  \ 58  | 85  / 88  - 90  \ 52  | 59  / 77  - 66  \ 14  | 62  / 6  - 21  \ 14  | 88  / 96  - 85  \ 35  | 38  / 43  - 60  \ 11  | 44  / 99  - 10  \ 34  | 71  / 20  - 67  \ 85  | 22  / 90  - 34  \ 13  | 50  / 49  - 15  \ 55  | 88  / 86  - 28  \ 61  | 40  / 36  - 85  \ 50  | 15  / 25  - 21  \ 51  | 26  / 62  - 19  \ 18  | 10  / 7  - 75  \ 73  | 72  / 95  - 98  \ 12  | 47  / 73  - 68  \ 19  | 46  / 71  - 16  \ 19  | 72  / 36  - 99  \ 88  | 38  / 29  - 31  \ 22  | 46  / 80  - 3  \ 16  | 95  / 97  - 88  \ 73  | 22  / 18  - 26  \ 69  | 76  / 23  - 40  \ 36  | 62  / 76  - 87  \ 28  | 93  / 7  - 86  \ 98  | 24  / 13  - 95  \ 59  | 53  / 85  - 31  \ 76  | 35  / 35  - 3  \ 3  | 33  / 60  - 83  \ 28  | 59  / 83  - 24  \ 29  | 35  / 92  - 62  \ 17  | 57  / 81  - 2  \ 21  | 95  / 81  - 28  \ 58  | 95  / 11 
list[void]: []
```

