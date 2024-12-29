---
layout: "layouts/container.liquid"
tags: directive
name: Tooltip
examples: {
    tooltipSimple: [
        {
            label: "Template",
            file: "examples/tooltip-simple.liquid",
            language: "html",
        },
    ],
    tooltipPlacement: [
        {
            label: "Template",
            file: "examples/tooltip-placement.liquid",
            language: "html",
        },
    ],
    tooltipDelay: [
        {
            label: "Template",
            file: "examples/tooltip-delay.liquid",
            language: "html",
        },
    ],
    tooltipFunction: [
        {
            label: "Template",
            file: "examples/tooltip-function.liquid",
            language: "html",
        },
    ],
}
---
## Tooltip

{% render "example.liquid" example: "examples/tooltip-simple.liquid", tabs: examples.tooltipSimple, collapse: false %}

### Usage

The tooltip can be added to any element with the `x-tooltip` directive. The value for the directive is an `object` that sets the tooltips contents and a few additional options.

```javascript
x-tooltip="{
    text: String | Function,
    placement: String,
    delay: Number,
    offsetX: Number,
    offsetY: Number,
    flip: Boolean,
    autoPlacement: Boolean,
}"
```

### Tooltip placement

{% render "example.liquid" example: "examples/tooltip-placement.liquid", tabs: examples.tooltipPlacement, collapse: false %}

### Tooltip delay

{% render "example.liquid" example: "examples/tooltip-delay.liquid", tabs: examples.tooltipDelay, collapse: false %}

### Function tooltip content

{% render "example.liquid" example: "examples/tooltip-function.liquid", tabs: examples.tooltipFunction, collapse: false %}
