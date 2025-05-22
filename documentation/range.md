---
layout: "layouts/container.liquid"
tags: form
name: Range
examples: {
    rangeSimple: [
        {
            label: "Template",
            file: "examples/range-simple.html",
            language: "html",
        },
    ],
    rangeFixedMin: [
        {
            label: "Template",
            file: "examples/range-fixed-min.html",
            language: "html",
        },
    ],
}
props: [
    {
        name: "data-min",
        type: ["Number"],
        default: "0",
        description: "Minimal slider value",
    },
    {
        name: "data-max",
        type: ["Number"],
        default: "100",
        description: "Maximal slider value",
    },
    {
        name: "data-step",
        type: ["Number"],
        default: "1",
        description: "Sets the interval of the slider value",
    },
    {
        name: "data-fixed-min",
        type: ["Boolean"],
        default: "false",
        description: "The minimal value is fixed. If true, only one slider for max value is used",
    },
    {
        name: "data-show-steps",
        type: ["Boolean"],
        default: "false",
        description: "If true, displays ticks in the slider",
    },
    {
        name: "show-labels",
        type: ["Boolean"],
        default: "false",
        description: "If true, displays value labels avove the sliders",
    },
]
---
## Range

{% render "example.liquid" example: "examples/range-simple.html", tabs: examples.rangeSimple  %}

### Usage

```html
<script defer src="https://cdn.jsdelivr.net/npm/litewind-alpine@0.x.x/components/range/dist/cdn.min.js"></script>
```

The data for the component is provided by the `range` function in the `x-data` directive and the props in the `data-*` attributes.

#### Props

{% render "reference.liquid" props: props %}

### Fixed minimal value

{% render "example.liquid" example: "examples/range-fixed-min.html", tabs: examples.rangeFixedMin  %}
