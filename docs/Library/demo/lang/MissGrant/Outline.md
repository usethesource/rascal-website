---
title: "module demo::lang::MissGrant::Outline"
---

#### Usage

`import demo::lang::MissGrant::Outline;`


## function outlineController {#demo-lang-MissGrant-Outline-outlineController}

```rascal
node outlineController(Controller ctl)

```

## function outline {#demo-lang-MissGrant-Outline-outline}

```rascal
node outline(Controller ctl)

node outline(list[Event] es)

node outline(list[Command] cs)

node outline(list[State] ss)

node outline(e:event(n, t))

node outline(c:command(n, t))

node outline(s:state(n, _, ts))

node outline(t:transition(e, s))

```

