---
title: "util::Memo"
---

#### Usage

`import util::Memo;`


## data MemoExpireConfiguration {#util-Memo-MemoExpireConfiguration}

```rascal
data MemoExpireConfiguration  
     = expireAfter( // expires entries when <x> times has passed since last access
            // define only one of these limits
            int seconds = -1,
            int minutes = -1,
            int hours = -1
        )
     | maximumSize(int entries)
     ;
```

