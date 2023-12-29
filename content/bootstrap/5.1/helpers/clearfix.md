---
weight: 1
linkTitle: Clearfix
title: Clearfix · Bootstrap en Español v5.1
description: Borra rápida y fácilmente el contenido flotante dentro de un contenedor agregando una utilidad clearfix.
prev: /bootstrap/5.1/components/tooltips
---

# Clearfix

Borra rápida y fácilmente el contenido flotante dentro de un contenedor agregando una utilidad clearfix.

{{< content-ads/top-banner >}}

Borre fácilmente los `float`s agregando `.clearfix` **al elemento padre**. También se puedes utilizar como mixin.

Uso en HTML:

```html
<div class="clearfix">...</div>
```

El código fuente del mixin:

{{< bootstrap/5-1/scss-docs name="clearfix" file="scss/mixins/_clearfix.scss" >}}

Uso del mixin en SCSS:

```scss
.element {
  @include clearfix;
}
```

{{< content-ads/middle-banner-1 >}}

El siguiente ejemplo muestra cómo se puede utilizar clearfix. Sin clearfix, el div envolvente no se extendería alrededor de los botones, lo que causaría un diseño roto.

{{< bootstrap/5-1/example >}}
<div class="bg-info clearfix">
  <button type="button" class="btn btn-secondary float-start">Botón flotando a la izquierda</button>
  <button type="button" class="btn btn-secondary float-end">Botón flotando a la derecha</button>
</div>
{{< /bootstrap/5-1/example >}}

{{< content-ads/bottom-banner >}}