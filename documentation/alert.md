---
layout: "layouts/container.liquid"
tags: component
name: Alert
examples: {
    alertSimple: [
        {
            label: "Template",
            file: "examples/alert-simple.liquid",
            language: "html",
        },
    ],
}
props: [
    {
        name: "data-variant",
        type: ["String"],
        default: "info",
        description: "Variant of the alert. Valid variants include: `'info'`, `'warn'`, `'danger'` and `'success'`.",
    },
    {
        name: "data-closable",
        type: ["Boolean"],
        default: "false",
        description: "Adds close button to the alert.",
    },
]
---
## Alert

{% render "example.liquid" example: "examples/alert-simple.liquid", tabs: examples.alertSimple %}

### Usage

```html
<script defer src="https://cdn.jsdelivr.net/npm/litewind-alpine@0.x.x/components/alert/dist/cdn.min.js"></script>
```

The data for the component is provided by the `alert` function in the `x-data` directive and the props in the `data-*` attributes.

#### Props

{% render "reference.liquid" props: props %}
