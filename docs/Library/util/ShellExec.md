---
title: "module util::ShellExec"
---

#### Usage

`import util::ShellExec;`


#### Synopsis

Execute and manage external processes.


## function createProcess {#util-ShellExec-createProcess}

* ``PID createProcess(str processCommand, loc workingDir=|cwd:///|, list[str] args = [], map[str,str] envVars = ())``
* ``PID createProcess(loc processCommand, loc workingDir=|cwd:///|, list[value] args = [], map[str, value] envVars = ())``


#### Synopsis

Start a new external process.

## function exec {#util-ShellExec-exec}

* ``str exec(str processCommand, loc workingDir=|cwd:///|, list[str] args = [], map[str, str] env = ())``
* ``str exec(loc processCommand, loc workingDir=|cwd:///|, list[value] args = [], map[str, value] env = ())``


#### Synopsis

start, run and kill an external process returning its output as a string.

## function execWithCode {#util-ShellExec-execWithCode}

* ``tuple[str output, int exitCode] execWithCode(str processCommand, loc workingDir=|cwd:///|, list[str] args = [], map[str, str] env = ())``
* ``tuple[str output, int exitCode] execWithCode(loc processCommand, loc workingDir=|cwd:///|, list[value] args = [], map[str, value] env = ())``

## function killProcess {#util-ShellExec-killProcess}

* ``int killProcess(PID processId, bool force=false)``


#### Synopsis

Kill a running process, or a zombie process (a process which is not alive yet not killed)

## function isAlive {#util-ShellExec-isAlive}

* ``bool isAlive(PID processId)``


#### Synopsis

Check whether a process is still alive

## function isZombie {#util-ShellExec-isZombie}

* ``bool isZombie(PID processId)``


#### Synopsis

Check whether a process is still registered but not actually running anymore. A zombie process may be cleaned up using killProcess.

## function exitCode {#util-ShellExec-exitCode}

* ``int exitCode(PID processId)``


#### Synopsis

Waits for the process to exit and then returns its return code. This is a blocking operation.

## function readFrom {#util-ShellExec-readFrom}

* ``str readFrom(PID processId)``


#### Synopsis

Read from an existing process's output stream. This is non-blocking.

## function readWithWait {#util-ShellExec-readWithWait}

* ``str readWithWait(PID processId, int wait)``


#### Synopsis

Read from an existing process's output stream with a given wait timeout. Some processes are a little slower in producing output. The wait is used to give the process some extra time in producing output. This is non-blocking apart from the waiting.

## function readFromErr {#util-ShellExec-readFromErr}

* ``str readFromErr(PID processId)``


#### Synopsis

Read from an existing process's error output stream. This is non-blocking.

## function readLineFromErr {#util-ShellExec-readLineFromErr}

* ``str readLineFromErr(PID processId, int wait=200, int maxTries=5)``


#### Synopsis

Read from an existing process's error output stream. This blocks until a full line is read and
waits for one second maximally for this line to appear.

## function readEntireStream {#util-ShellExec-readEntireStream}

* ``str readEntireStream(PID processId)``


#### Synopsis

Read the entire stream from an existing process's output stream. This is blocking.

## function readEntireErrStream {#util-ShellExec-readEntireErrStream}

* ``str readEntireErrStream(PID processId)``


#### Synopsis

Read the entire error stream from an existing process's output stream. This is blocking.

## function writeTo {#util-ShellExec-writeTo}

* ``void writeTo(PID processId, str msg)``


#### Synopsis

Write to an existing process's input stream.

## alias PID {#util-ShellExec-PID}

* `int`


#### Synopsis

Process Identifiers (PID).

#### Description

A PID is returned by [create process](../../Library/util/ShellExec#util::ShellExec-createProcess) and is required for any further interaction with the created process.

