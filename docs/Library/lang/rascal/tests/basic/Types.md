---
title: "module lang::rascal::tests::basic::Types"
---

#### Usage

`import lang::rascal::tests::basic::Types;`


## function unwrap {#lang-rascal-tests-basic-Types-unwrap}

```rascal
Symbol unwrap(\label(str lbl, Symbol s))

Symbol unwrap(\parameter(str name, Symbol bound))

Symbol unwrap(\alias(str name, list[Symbol] parameters, Symbol s))

default Symbol unwrap(Symbol s)

```

## function subtype_same {#lang-rascal-tests-basic-Types-subtype_same}

```rascal
test bool subtype_same(Symbol s)

```

## function sub_type_label {#lang-rascal-tests-basic-Types-sub_type_label}

```rascal
test bool sub_type_label(Symbol s, str lbl)

```

## function subtype_void {#lang-rascal-tests-basic-Types-subtype_void}

```rascal
test bool subtype_void(Symbol s)

```

## function subtype_value {#lang-rascal-tests-basic-Types-subtype_value}

```rascal
test bool subtype_value(Symbol s)

```

## function subtype_int_num {#lang-rascal-tests-basic-Types-subtype_int_num}

```rascal
test bool subtype_int_num()

```

## function subtype_real_num {#lang-rascal-tests-basic-Types-subtype_real_num}

```rascal
test bool subtype_real_num()

```

## function subtype_rat_num {#lang-rascal-tests-basic-Types-subtype_rat_num}

```rascal
test bool subtype_rat_num()

```

## function subtype_int_str {#lang-rascal-tests-basic-Types-subtype_int_str}

```rascal
test bool subtype_int_str()

```

## function subtype_list {#lang-rascal-tests-basic-Types-subtype_list}

```rascal
test bool subtype_list(Symbol s)

```

## function subtype_set {#lang-rascal-tests-basic-Types-subtype_set}

```rascal
test bool subtype_set(Symbol s)

```

## function subtype_map {#lang-rascal-tests-basic-Types-subtype_map}

```rascal
test bool subtype_map(Symbol k, Symbol v)

```

## function subtype_tuple1 {#lang-rascal-tests-basic-Types-subtype_tuple1}

```rascal
test bool subtype_tuple1(Symbol s, Symbol t)

```

## function subtype_tuple2 {#lang-rascal-tests-basic-Types-subtype_tuple2}

```rascal
test bool subtype_tuple2(Symbol s, Symbol t, Symbol u)

```

## function subtype_rel1 {#lang-rascal-tests-basic-Types-subtype_rel1}

```rascal
test bool subtype_rel1(Symbol s, Symbol t)

```

## function subtype_rel2 {#lang-rascal-tests-basic-Types-subtype_rel2}

```rascal
test bool subtype_rel2(Symbol s, Symbol t, Symbol u)

```

## function subtype_lrel1 {#lang-rascal-tests-basic-Types-subtype_lrel1}

```rascal
test bool subtype_lrel1(Symbol s, Symbol t)

```

## function subtype_lrel2 {#lang-rascal-tests-basic-Types-subtype_lrel2}

```rascal
test bool subtype_lrel2(Symbol s, Symbol t, Symbol u)

```

## function lub_value {#lang-rascal-tests-basic-Types-lub_value}

```rascal
test bool lub_value(Symbol s)

```

## function lub_void1 {#lang-rascal-tests-basic-Types-lub_void1}

```rascal
test bool lub_void1(Symbol s)

```

## function lub_void2 {#lang-rascal-tests-basic-Types-lub_void2}

```rascal
test bool lub_void2(Symbol s)

```

## function lub_int_real {#lang-rascal-tests-basic-Types-lub_int_real}

```rascal
test bool lub_int_real()

```

## function lub_int_rat {#lang-rascal-tests-basic-Types-lub_int_rat}

```rascal
test bool lub_int_rat()

```

## function lub_real_rat {#lang-rascal-tests-basic-Types-lub_real_rat}

```rascal
test bool lub_real_rat()

```

## function lub_list_set {#lang-rascal-tests-basic-Types-lub_list_set}

```rascal
test bool lub_list_set(Symbol s)

```

## function lub_intstr {#lang-rascal-tests-basic-Types-lub_intstr}

```rascal
test bool lub_intstr()

```

