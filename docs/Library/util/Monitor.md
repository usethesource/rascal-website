---
title: "module util::Monitor"
---

#### Usage

`import util::Monitor;`


#### Synopsis

Monitor the progress of a task/job.


## function jobStart {#util-Monitor-jobStart}

```rascal
void jobStart(str label, int work=1, int totalWork=100)

```


#### Synopsis

Log the __start__ of a job.

#### Description

jobStart registers a new current job on the job stack with an amount of
steps todo and how much work it contributes (when it ends) to its parent job (if any).

## function jobStep {#util-Monitor-jobStep}

```rascal
void jobStep(str label, str message, int work = 1)

```


  Log to the user that a certain event has happened under
  the currently registered Job.

## function jobEnd {#util-Monitor-jobEnd}

```rascal
int jobEnd(str label, bool success=true)

```

## function jobTodo {#util-Monitor-jobTodo}

```rascal
void jobTodo(str label, int work=100)

```

## function jobIsCancelled {#util-Monitor-jobIsCancelled}

```rascal
void jobIsCancelled(str label)

```

## function jobWarning {#util-Monitor-jobWarning}

```rascal
void jobWarning(str message, loc src)

```

