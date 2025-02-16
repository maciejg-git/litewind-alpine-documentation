---
layout: "layouts/container.liquid"
tags: component
name: Breadcrumb
examples: {
    breadcrumbSimple: [
        {
            label: "Template",
            file: "examples/breadcrumb-simple.liquid",
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

{% render "example.liquid" example: "examples/breadcrumb-simple.liquid", tabs: examples.breadcrumbSimple, collapse: false %}

### Usage

The data for the component is provided by the `breadcrumb` function in the `x-data` directive and the props in the `data-*` attributes.

#### Props

{% render "reference.liquid" props: props %}
