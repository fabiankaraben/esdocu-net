---
weight: 2
linkTitle: Equipo
title: Equipo · Bootstrap en Español v5.1
description: Una descripción general del equipo fundador y los principales contribuyentes de Bootstrap.
---

# Equipo

Una descripción general del equipo fundador y los principales contribuyentes de Bootstrap.

{{< content-ads/top-banner >}}

Bootstrap es mantenido por el equipo fundador y un pequeño grupo de valiosos colaboradores principales, con el apoyo masivo y la participación de nuestra comunidad.

{{< team.inline >}}
<div class="list-group mb-3">
  {{- range (index $.Site.Data "bootstrap_5_1_core-team") }}
    <a class="list-group-item list-group-item-action d-flex align-items-center" href="https://github.com/{{ .user }}">
      <img src="https://github.com/{{ .user }}.png" alt="@{{ .user }}" width="32" height="32" class="rounded me-2" loading="lazy">
      <span>
        <strong>{{ .name }}</strong> @{{ .user }}
      </span>
    </a>
  {{ end -}}
</div>
{{< /team.inline >}}

{{< content-ads/middle-banner-1 >}}

Participa en el desarrollo de Bootstrap [abriendo un issue]({{< bootstrap/5-1/param repo >}}/issues/new) o enviando un pull request. Lee nuestras [directrices de contribución]({{< bootstrap/5-1/param repo >}}/blob/v{{< bootstrap/5-1/param current_version >}}/.github/CONTRIBUTING.md) para obtener información sobre cómo desarrollamos.

{{< content-ads/bottom-banner >}}