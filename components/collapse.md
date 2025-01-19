---
layout: "layouts/container.liquid"
tags: component
name: Collapse
examples: {
    collapseSimple: [
        {
            label: "Template",
            file: "examples/collapse-simple.liquid",
            language: "html",
        },
    ],
}
---
## Collapse

{% render "example.liquid" example: "examples/collapse-simple.liquid", tabs: examples.collapseSimple %}

### Usage

The data for the component is provided by the `collapse` function in the `x-data` directive and the props in the `data-*` attributes.
