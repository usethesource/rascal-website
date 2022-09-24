---
title: Map Comprehension
keywords:
  - "("
  - "|"
  - ")"

---

#### Synopsis

A map comprehension generates a map value.

#### Syntax

`( Exp~1~ : Exp~2~ | Gen~1~, Gen~2~, ... )`

#### Types

| `Exp~1~` | `Exp~2~` | `( Exp~1~ : Exp~2~ \| Gen~1~, Gen~2~, ... )`  |
| --- | --- | --- | --- |
| `T~1~`   | `T~2~`   | `map[T~1~, T~2~]`                               |

#### Description

A map comprehension consists of a number of two contributing expressions _Exp_~1~ (for key values), 
and _Exp_~2~ (the values associated with those key values) and a number of
generators _Gen_~1~, _Gen_~2~, _Gen_~3~, ... that are evaluated as described in [Comprehensions](../../../../../Rascal/Expressions/Comprehensions).

#### Examples

```rascal-shell 
```
Introduce a map of `fruits`:

```rascal-shell ,continue
rascal>fruits = ("pear" : 1, "apple" : 3, "banana" : 0, "berry" : 25, "orange": 35);
map[str, int]: ("banana":0,"pear":1,"orange":35,"berry":25,"apple":3)
rascal>import String;
ok
```
Use a map comprehension to filter fruits with a name of at most 5 characters:

```rascal-shell ,continue
rascal>(fruit : fruits[fruit] | fruit <- fruits, size(fruit) <= 5);
map[str, int]: ("pear":1,"berry":25,"apple":3)
```
Use a map comprehension to filter fruits with an associated value larger than 10:

```rascal-shell ,continue
rascal>(fruit : fruits[fruit] | fruit <- fruits, fruits[fruit] > 10);
map[str, int]: ("orange":35,"berry":25)
```

