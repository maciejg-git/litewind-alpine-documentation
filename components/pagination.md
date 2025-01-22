---
layout: "layouts/container.liquid"
tags: component
name: Pagination
examples: {
    paginationSimple: [
        {
            label: "Template",
            file: "examples/pagination-simple.liquid",
            language: "html",
        },
    ],
}
props: [
    {
        name: "data-items-count",
        type: ["Number"],
        default: "0",
        description: "Total number of items. Pagination uses this value to compute the number of pages to render. It is usually provided by another component that uses pagination for navigation.",
    },
    {
        name: "data-items-per-page",
        type: ["Number"],
        default: "10",
        description: "Number of items per page. Pagination uses this value to compute the number of pages to render. It is usually provided by another component that uses pagination for navigation. `0` disables pagination (displays only 1 page).",
    },
    {
        name: "data-max-pages",
        type: ["Number"],
        default: "7",
        description: "Maximum number of pages to display. This prop must have value of 3 or more.",
    },
]
---
## Pagination

{% render "github-link.liquid" component: "pagination" %}

{% render "example.liquid" example: "examples/pagination-simple.liquid", tabs: examples.paginationSimple %}

### Usage

The data for the component is provided by the `pagination` function in the `x-data` directive and the props in the `data-*` attributes.

#### Props

{% render "reference.liquid" props: props %}
