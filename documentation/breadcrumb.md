---
layout: "layouts/container.liquid"
tags: alpineComponent
name: Breadcrumb
examples: {
    breadcrumbSimple: [
        {
            label: "Template",
            file: "examples/breadcrumb-simple.html",
            language: "html",
        },
    ],
}
props: [
    {
        name: "data-items",
        type: ["String"],
        default: "[]",
        description: "Items to display.",
    },
    {
        name: "data-divider",
        type: ["String"],
        default: "/",
        description: "Character that divides the items.",
    },
]
---
## Breadcrumb

{% render "github-link.liquid" component: "breadcrumb" %}

{% render "example.liquid" example: "examples/breadcrumb-simple.html", tabs: examples.breadcrumbSimple, collapse: false, centerFlexRow: true %}

### Usage

```html
<script defer src="https://cdn.jsdelivr.net/npm/litewind-alpine@0.x.x/components/breadcrumb/dist/cdn.min.js"></script>
```

The data for the component is provided by the `breadcrumb` function in the `x-data` directive and the props in the `data-*` attributes.

#### Props

{% render "reference.liquid" props: props %}
