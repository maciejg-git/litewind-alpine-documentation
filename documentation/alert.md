---
layout: "layouts/container.liquid"
tags: alpineComponent
name: Alert
examples: {
    alertSimple: [
        {
            label: "Template",
            file: "examples/alert-simple.html",
            language: "html",
        },
    ],
    alertClosable: [
        {
            label: "Template",
            file: "examples/alert-closable.html",
            language: "html",
        },
    ],
    alertStyle: [
        {
            label: "Template",
            file: "examples/alert-style.html",
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
    {
        name: "data-role",
        type: ["String"],
        default: "status",
        description: "This prop sets the role of the alert. Valid roles for an alert are: `'status'` or `'alert'`.",
    },
]
---
## Alert

{% render "github-link.liquid" component: "alert" %}

{% render "example.liquid" example: "examples/alert-simple.html", tabs: examples.alertSimple %}

### Usage

```html
<script defer src="https://cdn.jsdelivr.net/npm/litewind-alpine@0.x.x/components/alert/dist/cdn.min.js"></script>
```

The data for the component is provided by the `alert` function in the `x-data` directive and the props in the `data-*` attributes.

#### Props

{% render "reference.liquid" props: props %}

### Closable alert

The `data-closable` prop adds button that closes alert.

{% render "example.liquid" example: "examples/alert-closable.html", tabs: examples.alertClosable %}

### Alert style

Here is an example of an alternative alert style.

{% render "example.liquid" example: "examples/alert-style.html", tabs: examples.alertStyle %}
