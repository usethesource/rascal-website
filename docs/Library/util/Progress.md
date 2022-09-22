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
 \ 90  | 88  / 16  - 47  \ 87  | 48  / 72  - 69  \ 80  | 2  / 69  - 3  \ 5  | 93  / 41  - 65  \ 26  | 92  / 40  - 94  \ 83  | 25  / 82  - 15  \ 13  | 94  / 9  - 84  \ 28  | 57  / 3  - 20  \ 97  | 59  / 9  - 24  \ 27  | 0  / 23  - 75  \ 69  | 41  / 71  - 57  \ 95  | 10  / 46  - 82  \ 46  | 95  / 50  - 98  \ 19  | 11  / 47  - 16  \ 48  | 8  / 97  - 60  \ 58  | 94  / 42  - 94  \ 19  | 26  / 30  - 61  \ 60  | 43  / 27  - 24  \ 27  | 74  / 96  - 92  \ 22  | 47  / 41  - 79  \ 75  | 92  / 12  - 13  \ 73  | 96  / 91  - 30  \ 74  | 69  / 78  - 20  \ 3  | 0  / 38  - 87  \ 21  | 94  / 32  - 82  \ 44  | 69  / 16  - 44  \ 13  | 15  / 18  - 37  \ 50  | 35  / 46  - 36  \ 51  | 11  / 84  - 90  \ 61  | 19  / 51  - 57  \ 78  | 60  / 11  - 31  \ 64  | 56  / 6  - 57  \ 42  | 81  / 28  - 20  \ 65  | 49  / 39  - 19  \ 73  | 86  / 78  - 27  \ 96  | 88  / 90  - 89  \ 92  | 60  / 47  - 70  \ 80  | 78  / 66  - 57  \ 97  | 15  / 32  - 25  \ 59  | 29  / 71  - 33  \ 4  | 49  / 92  - 39  \ 98  | 60  / 80  - 81  \ 81  | 46  / 48  - 39  \ 27  | 59  / 21  - 29  \ 95  | 59  / 90  - 64  \ 29  | 10  / 57  - 94  \ 15  | 25  / 24  - 31  \ 66  | 20  / 40  - 63  \ 33  | 17  / 41  - 77  \ 20  | 14  / 10  - 70  \ 97  | 75  / 40  - 0  \ 71  | 15  / 70  - 74  \ 11  | 85  / 51  - 89  \ 92  | 38  / 87  - 51  \ 52  | 94  / 37  - 64  \ 69  | 93  / 34  - 7  \ 94  | 65  / 8  - 77  \ 46  | 26  / 25  - 57  \ 59  | 25  / 67  - 90  \ 48  | 2  / 17  - 98  \ 78  | 97  / 4  - 60  \ 25  | 67  / 9  - 74  \ 91  | 7  / 54  - 85  \ 70  | 60  / 44  - 13  \ 91  | 22  / 67  - 24  \ 28  | 45  / 74  - 32  \ 73  | 81  / 7  - 2  \ 23  | 21  / 71  - 91  \ 46  | 75  / 39  - 5  \ 85  | 53  / 6  - 53  \ 17  | 86  / 75  - 81  \ 55  | 44  / 63  - 73  \ 15  | 74  / 48  - 56  \ 30  | 75  / 69  - 45  \ 36  | 49  / 65  - 47  \ 43  | 23  / 20  - 27  \ 68  | 83  / 90  - 81  \ 71  | 24  / 39  - 50  \ 10  | 65  / 32  - 0  \ 79  | 53  / 95  - 59  \ 32  | 31  / 21  - 61  \ 40  | 43  / 77  - 30  \ 84  | 99  / 10  - 34  \ 16  | 33  / 63  - 19  \ 75  | 61  / 51  - 95  \ 19  | 27  / 44  - 39  \ 54  | 51  / 81  - 71  \ 99  | 81  / 59  - 47  \ 56  | 51  / 72  - 85  \ 95  | 82  / 63  - 65  \ 85  | 22  / 52  - 78  \ 63  | 11  / 81  - 31  \ 61  | 69  / 0  - 51  \ 54  | 71  / 63  - 97  \ 85  | 0  / 14  - 73  \ 21  | 10  / 3  - 8  \ 4  | 64  / 51  - 63  \ 14  | 43  / 46  - 35  \ 26  | 62  / 73  - 83  \ 23  | 36  / 97  - 55  \ 64  | 28  / 7  - 46  \ 22  | 39  / 51  - 76  \ 10  | 40  / 6  - 31  \ 15  | 9  / 60  - 68  \ 51  | 25  / 20  - 80  \ 62  | 24  / 67  - 12  \ 5  | 7  / 27  - 70  \ 56  | 81  / 56  - 23 
list[void]: []
```

