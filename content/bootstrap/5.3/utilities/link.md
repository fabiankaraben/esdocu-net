---
weight: 9
linkTitle: Enlace
title: Uso de las utilidades de Enlaces en Bootstrap · Bootstrap en Español v5.3
description: Las utilidades de enlace se utilizan para estilizar tus anchors y ajustar su color, opacidad, desplazamiento de subrayado, color de subrayado y más.
---

# Uso de las utilidades de Enlaces en Bootstrap

Las utilidades de enlace se utilizan para estilizar tus anchors y ajustar su color, opacidad, desplazamiento de subrayado, color de subrayado y más.

{{< content-ads/top-banner >}}

Opacidad del enlace {#link-opacity}
------------------------------------

Cambia la opacidad alfa del valor de color del enlace `rgba()` con utilidades. Ten en cuenta que los cambios en la opacidad de un color pueden generar enlaces con [_insuficiente_ contraste](/bootstrap/5.3/getting-started/accessibility/#color-contrast).

{{< demo-iframe path="/demos/bootstrap/5.3/utilities/link/link-opacity-1.html" >}}
```html {filename="HTML"}
    <p><a class="link-opacity-10" href="#">Opacidad del enlace 10</a></p>
    <p><a class="link-opacity-25" href="#">Opacidad del enlace 25</a></p>
    <p><a class="link-opacity-50" href="#">Opacidad del enlace 50</a></p>
    <p><a class="link-opacity-75" href="#">Opacidad del enlace 75</a></p>
    <p><a class="link-opacity-100" href="#">Opacidad del enlace 100</a></p>
```
{{< /demo-iframe >}}

Incluso puedes cambiar el nivel de opacidad al pasar el mouse.

{{< demo-iframe path="/demos/bootstrap/5.3/utilities/link/link-opacity-2.html" >}}
```html {filename="HTML"}
    <p><a class="link-opacity-10-hover" href="#">Opacidad hover del enlace 10</a></p>
    <p><a class="link-opacity-25-hover" href="#">Opacidad hover del enlace 25</a></p>
    <p><a class="link-opacity-50-hover" href="#">Opacidad hover del enlace 50</a></p>
    <p><a class="link-opacity-75-hover" href="#">Opacidad hover del enlace 75</a></p>
    <p><a class="link-opacity-100-hover" href="#">Opacidad hover del enlace 100</a></p>
```
{{< /demo-iframe >}}

{{< content-ads/middle-banner-1 >}}

Enlace subrayado {#link-underlines}
------------------------------------

### Color de subrayado {#underline-color}

Cambia el color del subrayado independientemente del color del texto del enlace.

{{< demo-iframe path="/demos/bootstrap/5.3/utilities/link/underline-color.html" >}}
```html {filename="HTML"}
    <p><a href="#" class="link-underline-primary">Subrayado primario</a></p>
    <p><a href="#" class="link-underline-secondary">Subrayado secundario</a></p>
    <p><a href="#" class="link-underline-success">Subrayado de éxito</a></p>
    <p><a href="#" class="link-underline-danger">Subrayado de peligro</a></p>
    <p><a href="#" class="link-underline-warning">Subrayada de advertencia</a></p>
    <p><a href="#" class="link-underline-info">Subrayado de información</a></p>
    <p><a href="#" class="link-underline-light">Subrayado claro</a></p>
    <p><a href="#" class="link-underline-dark">Subrayado oscuro</a></p>
```
{{< /demo-iframe >}}

### Desplazamiento del subrayado {#underline-offset}

{{< content-ads/middle-banner-2 >}}

Cambia la distancia del subrayado de tu texto. El desplazamiento se establece en unidades `em` para escalar automáticamente con el `font-size` actual del elemento.

{{< demo-iframe path="/demos/bootstrap/5.3/utilities/link/underline-offset.html" >}}
```html {filename="HTML"}
    <p><a href="#">Enlace predeterminado</a></p>
    <p><a class="link-offset-1" href="#">Enlace de compensación (offset) 1</a></p>
    <p><a class="link-offset-2" href="#">Enlace Offset 2</a></p>
    <p><a class="link-offset-3" href="#">Enlace Offset 3</a></p>
```
{{< /demo-iframe >}}

### Opacidad del subrayado {#underline-opacity}

Cambiar la opacidad del subrayado. Requiere agregar `.link-underline` para establecer primero un color `rgba()` que usamos para luego modificar la opacidad alfa.

{{< demo-iframe path="/demos/bootstrap/5.3/utilities/link/underline-opacity.html" >}}
```html {filename="HTML"}
        <p><a class="link-offset-2 link-underline link-underline-opacity-0" href="#">Opacidad del subrayado 0</a></p>
        <p><a class="link-offset-2 link-underline link-underline-opacity-10" href="#">Opacidad del subrayado 10</a></p>
        <p><a class="link-offset-2 link-underline link-underline-opacity-25" href="#">Opacidad del subrayado 25</a></p>
        <p><a class="link-offset-2 link-underline link-underline-opacity-50" href="#">Opacidad del subrayado 50</a></p>
        <p><a class="link-offset-2 link-underline link-underline-opacity-75" href="#">Opacidad del subrayado 75</a></p>
        <p><a class="link-offset-2 link-underline link-underline-opacity-100" href="#">Opacidad del subrayado 100</a></p>
```
{{< /demo-iframe >}}

{{< content-ads/middle-banner-3 >}}

### Variantes hover {#hover-variants}

Al igual que las utilidades `.link-opacity-*-hover`, `.link-offset` y `.link-underline-opacity` incluyen variantes `:hover` de forma predeterminada. Mezcla y combina para crear estilos de enlaces únicos.

{{< demo-iframe path="/demos/bootstrap/5.3/utilities/link/hover-variants.html" >}}
```html {filename="HTML"}
    <a class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover" href="#">
        Opacidad del subrayado 0
    </a>
```
{{< /demo-iframe >}}

Enlaces de colores {#colored-links}
------------------------------------

[Los ayudantes de enlaces de colores](/bootstrap/5.3/helpers/colored-links) se han actualizado para combinarlos con nuestras utilidades de enlaces. Utiliza las nuevas utilidades para modificar la opacidad del enlace, la opacidad del subrayado y el desplazamiento del subrayado.

{{< content-ads/middle-banner-4 >}}

{{< demo-iframe path="/demos/bootstrap/5.3/utilities/link/colored-links.html" >}}
```html {filename="HTML"}
    <p><a href="#" class="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Enlace principal</a></p>
    <p><a href="#" class="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Enlace secundario</a></p>
    <p><a href="#" class="link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Enlace de éxito</a></p>
    <p><a href="#" class="link-danger link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Enlace de peligro</a></p>
    <p><a href="#" class="link-warning link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Enlace de advertencia</a></p>
    <p><a href="#" class="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Enlace de información</a></p>
    <p><a href="#" class="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Enlace claro</a></p>
    <p><a href="#" class="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Enlace oscuro</a></p>
    <p><a href="#" class="link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover">Enlace de énfasis</a></p>
```
{{< /demo-iframe >}}

{{< callout type="info" emoji="" >}}
**Consejo de accesibilidad:** El uso de colores para agregar significado solo proporciona una indicación visual, que no se transmitirá a los usuarios de tecnologías de asistencia como lectores de pantalla. Asegúrate de que el significado sea obvio a partir del contenido mismo (por ejemplo, el texto visible con un [_suficiente_ contraste de color](/bootstrap/5.3/getting-started/accessibility#color-contrast)) o se incluye a través de medios alternativos, como texto adicional oculto con la clase `.visually-hidden`.
{{< /callout >}}

Personalización del CSS {#css}
-----------

{{< bootstrap/content-suggestion >}}

Además de las siguientes funciones de Sass, considera leer sobre nuestras [propiedades personalizadas de CSS](/bootstrap/5.3/customize/css-variables) incluidas (también conocidas como variables CSS) para colores y más.

{{< content-ads/middle-banner-5 >}}

### API de utilidades de Sass {#sass-utilities-api}

Las utilidades de enlace se declaran en nuestra API de utilidades en `scss/_utilities.scss`. [Aprende a utilizar la API de utilidades.](/bootstrap/5.3/utilities/api/#using-the-api)

[scss/_utilities.scss](https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_utilities.scss)

```scss {filename="scss/_utilities.scss"}
"link-opacity": (
  css-var: true,
  class: link-opacity,
  state: hover,
  values: (
    10: .1,
    25: .25,
    50: .5,
    75: .75,
    100: 1
  )
),
"link-offset": (
  property: text-underline-offset,
  class: link-offset,
  state: hover,
  values: (
    1: .125em,
    2: .25em,
    3: .375em,
  )
),
"link-underline": (
  property: text-decoration-color,
  class: link-underline,
  local-vars: (
    "link-underline-opacity": 1
  ),
  values: map-merge(
    $utilities-links-underline,
    (
      null: rgba(var(--#{$prefix}link-color-rgb), var(--#{$prefix}link-underline-opacity, 1)),
    )
  )
),
"link-underline-opacity": (
  css-var: true,
  class: link-underline-opacity,
  state: hover,
  values: (
    0: 0,
    10: .1,
    25: .25,
    50: .5,
    75: .75,
    100: 1
  ),
),
```

{{< content-ads/bottom-banner >}}
