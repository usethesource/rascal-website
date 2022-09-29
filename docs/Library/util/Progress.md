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
void (str): function(|std:///util/Progress.rsc|(3317,305,<86,9>,<95,3>))
rascal>  while (n := arbInt(100), n != 1) {
>>>>>>>    sp("<n>");
>>>>>>>  }
 \ 63  | 44  / 95  - 57  \ 39  | 14  / 86  - 51  \ 75  | 11  / 95  - 97  \ 87  | 85  / 70  - 51  \ 6  | 99  / 19  - 67  \ 16  | 77  / 41  - 80  \ 29  | 84  / 66  - 17  \ 22  | 56  / 22  - 73  \ 95  | 40  / 25  - 7  \ 98  | 36  / 52  - 75  \ 14  | 8  / 36  - 78  \ 92  | 8  / 82  - 68  \ 88  | 52  / 50  - 84  \ 54  | 31  / 3  - 38  \ 34  | 77  / 25  - 68  \ 90  | 90  / 58  - 22  \ 55  | 49  / 63  - 77  \ 2  | 38  / 66  - 95  \ 75  | 37  / 78  - 21  \ 11  | 25  / 87  - 25  \ 32  | 72  / 80  - 15  \ 18  | 55  / 31  - 44  \ 88  | 6  / 50  - 7  \ 25  | 87  / 21  - 89  \ 75  | 89  / 77  - 71  \ 48  | 57  / 5 
list[void]: []
```

43  / 67  - 95  \ 15  | 79  / 85  - 62  \ 21  | 44  / 16  - 34  \ 24  | 64  / 78  - 9  \ 29  | 66  / 27  - 26  \ 66  | 42  / 43  - 28  \ 46  | 76  / 11  - 20  \ 40  | 38  / 48  - 35  \ 49  | 89  / 93  - 23  \ 23  | 40  / 27  - 11  \ 61  | 73  / 80  - 52  \ 41  | 30  / 58  - 15  \ 54  | 68  / 2  - 45  \ 99  | 46  / 18  - 77  \ 55  | 0  / 63  - 8  \ 11  | 27  / 99  - 13  \ 74  | 98  / 90  - 25  \ 58  | 16  / 76  - 79  \ 53  | 77  / 53  - 28  \ 5  | 28  / 41  - 99  \ 76  | 49  / 96  - 75  \ 3  | 91  / 97  - 96  \ 27  | 97  / 98  - 69  \ 16  | 75  / 40  - 41  \ 23  | 38  / 88  - 25  \ 34  | 28  / 99  - 53  \ 38  | 69  / 3  - 43  \ 32  | 5  / 36  - 48  \ 80  | 60  / 63  - 46  \ 24  | 94  / 61  - 90  \ 66  | 93  / 7  - 87  \ 79  | 40  / 34  - 66  \ 95  | 56  / 86  - 54  \ 93  | 26  / 57  - 45  \ 19  | 96  / 5  - 28  \ 14  | 27  / 30  - 75  \ 18  | 23  / 36  - 64  \ 69  | 93  / 85  - 57  \ 55  | 41  / 48  - 62  \ 94  | 43  / 49  - 93  \ 63  | 24  / 63  - 30  \ 41  | 15  / 61  - 75  \ 33  | 47  / 45  - 57  \ 44  | 61  / 60  - 13  \ 98  | 26  / 47  - 9  \ 47  | 54  / 82  - 92  \ 75  | 23  / 87  - 41  \ 30  | 17  / 62  - 13  \ 35  | 68  / 33  - 3  \ 40  | 16  / 39  - 28  \ 12  | 94  / 34  - 76  \ 72  | 99  / 85  - 67  \ 51  | 90  / 7  - 67  \ 92  | 7  / 87  - 63  \ 38  | 95  / 62  - 73  \ 92  | 28  / 84  - 70  \ 11  | 25  / 78  - 26  \ 33  | 67  / 52  - 79  \ 24  | 59  / 27  - 26  \ 0  | 5  / 49  - 20  \ 13  | 58  / 26  - 84  \ 30  | 18  / 32  - 99  \ 67  | 16  / 43  - 82  \ 91  | 65  / 76  - 36  \ 62  | 21  / 43  - 15  \ 28  | 30  / 31  - 12  \ 0  | 49  / 45  - 27  \ 31  | 79  / 85  - 9  \ 82  | 75  / 67  - 33  \ 12  | 41  / 90  - 39  \ 83  | 7  / 19  - 44  \ 39  | 49  / 41  - 68  \ 96  | 20  / 72  - 17  \ 70  | 39  / 28  - 3  \ 20  | 14  / 72  - 14  \ 17  | 57  / 52  - 45  \ 24  | 89  / 73  - 50  \ 97  | 58  / 92  - 7  \ 66  | 55  / 95  - 10  \ 64  | 26  / 87  - 20  \ 55  | 73  / 77  - 21  \ 61  | 48  / 12  - 53  \ 54  | 38 
list[void]: []
```

