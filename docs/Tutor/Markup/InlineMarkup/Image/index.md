---
title: Image
---

#### Synopsis

Include an image.

#### Syntax

:::caution
There is a "TODO" in the documentation source:
msg
(((TODO-image syntax has changed)))
:::

#### Description

Describes an image to be included:

* _File_ is the name of the image file.
* _AlternateName_ is the alternate name of the image.
* _Width_ is the required width (in pixels) of the image.
* _Height_ is the rewuired height of the image in pixels.
* When `link` is present, it turns the image in a link to the given _URI_.

    
:::caution
There is a "TODO" in the documentation source:
msg
(((TODO:For further styling of images, see http://asciidoctor.org/docs/user-manual/#images.)))
:::

##  Example 1 
```
![](/assets/Tutor/Markup/InlineMarkup/Image/dandelion.jpg)
```
will produce:

![](/assets/Tutor/Markup/InlineMarkup/Image/dandelion.jpg)

##  Example 2 
```
![](/assets/Tutor/Markup/InlineMarkup/Image/dandelion.jpg)
```

![](/assets/Tutor/Markup/InlineMarkup/Image/dandelion.jpg)

produces a reduced image floating at the right.

##  Example 3 

And, finally,
```
![](/assets/Tutor/Markup/InlineMarkup/Image/dandelion.jpg)
```
produces a clickable image that links back to the source of the image.

![](/assets/Tutor/Markup/InlineMarkup/Image/dandelion.jpg)

Try it!


