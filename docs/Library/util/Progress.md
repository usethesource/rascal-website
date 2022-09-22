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
 \ 57  | 44  / 73  - 45  \ 15  | 95  / 9  - 82  \ 71  | 90  / 31  - 4  \ 21  | 58  / 98  - 2  \ 52  | 47  / 86  - 57  \ 76  | 68  / 37  - 56  \ 81  | 33  / 82  - 23  \ 41  | 73  / 17  - 16  \ 28  | 79  / 30  - 7  \ 36  | 7  / 82  - 70  \ 47  | 65  / 8  - 78  \ 89  | 23  / 58  - 34  \ 3  | 65  / 95  - 14  \ 30  | 67  / 57  - 3  \ 98  | 14  / 96  - 2  \ 91  | 87  / 85  - 38  \ 77  | 41  / 81  - 92  \ 60  | 66  / 62  - 86  \ 18  | 62  / 28  - 52  \ 33  | 64  / 42  - 23  \ 91  | 5  / 84  - 83  \ 85  | 99  / 14  - 45  \ 64  | 19  / 2  - 14  \ 54  | 55  / 6  - 27  \ 68  | 51  / 22  - 59  \ 83  | 87  / 56  - 14  \ 49  | 15  / 71  - 52  \ 34  | 80  / 42  - 74  \ 75  | 19  / 5  - 48  \ 97  | 14  / 62  - 97  \ 32  | 26  / 22  - 8  \ 36  | 48  / 81  - 69  \ 58  | 34  / 24  - 35  \ 80  | 43  / 81  - 52  \ 55  | 13  / 28  - 44  \ 58  | 59  / 56  - 79  \ 92  | 66  / 42  - 2  \ 70  | 55  / 83  - 92  \ 26  | 88  / 54  - 6  \ 76  | 7  / 92  - 66  \ 95  | 84  / 96  - 63  \ 41  | 61  / 87  - 6  \ 61  | 36  / 84  - 6  \ 2  | 26  / 58  - 33  \ 81  | 84  / 94  - 92  \ 92  | 99  / 5  - 70  \ 89  | 57  / 19  - 62  \ 66  | 10  / 77  - 66  \ 34  | 70  / 78  - 40  \ 53  | 25  / 44  - 56  \ 74  | 53  / 43  - 88  \ 42  | 64  / 35  - 53  \ 31  | 3  / 15  - 85  \ 59  | 96  / 2  - 51  \ 90  | 33  / 93  - 43  \ 69  | 32  / 95  - 63  \ 16  | 36  / 42  - 3  \ 76  | 0  / 71  - 35  \ 55  | 2  / 9  - 5  \ 67  | 97  / 67  - 70  \ 9  | 81  / 75  - 71  \ 23  | 58  / 16  - 86  \ 92  | 16  / 92  - 53  \ 59  | 74  / 31  - 22  \ 64  | 53  / 63  - 85  \ 66  | 5  / 17  - 3  \ 80  | 47  / 34  - 93  \ 39  | 98  / 91  - 49  \ 80  | 80  / 27  - 97  \ 36  | 44  / 22  - 19  \ 39  | 38  / 87  - 8  \ 67  | 39  / 60  - 94  \ 62  | 59  / 98  - 8  \ 3  | 53  / 68  - 60  \ 8  | 66  / 57  - 53  \ 36  | 6  / 50  - 10  \ 36  | 69  / 38  - 40  \ 54  | 42  / 32  - 92  \ 49  | 39  / 75  - 93  \ 57  | 4  / 6  - 5  \ 72  | 97  / 63  - 6  \ 39  | 39  / 66  - 89  \ 47  | 98  / 75  - 63  \ 4  | 6  / 72  - 77  \ 72  | 12  / 38  - 62  \ 65  | 5  / 3  - 95  \ 55  | 74  / 96  - 98  \ 93  | 19  / 29  - 80  \ 43  | 86  / 18  - 62  \ 70  | 63  / 79  - 91  \ 58  | 83  / 36  - 89  \ 57  | 89  / 38  - 53  \ 36  | 85  / 73  - 45  \ 93  | 20  / 62  - 37  \ 40  | 17  / 26  - 81  \ 95  | 31  / 50  - 51  \ 34  | 16  / 35  - 4  \ 37  | 90  / 81  - 62  \ 77  | 20  / 19  - 38  \ 45  | 16  / 82  - 87  \ 13  | 80  / 72  - 15  \ 98  | 47 
list[void]: []
```

