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
---
## Pagination

{% render "example.liquid" example: "examples/pagination-simple.liquid" %}
{% render "code.liquid" tabs: examples.paginationSimple %}
