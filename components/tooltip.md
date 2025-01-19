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
    tooltipOffset: [
        {
            label: "Template",
            file: "examples/tooltip-offset.liquid",
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

The tooltip can be added to any element with the `x-tooltip` directive. You can set the text of the tooltip in the directive value and customize it with a directive modifiers.

```html
<button x-data x-tooltip="tooltip">
  Hover me
</button>
```

#### Modifiers

- placement modifiers: `top`, `top-start`, `top-end`, `bottom`, `bottom-start`, `bottom-end`, `right`, `right-start`, `right-end`, `left`, `left-start`, `left-end`
- `delay:x` - delay before showing and hiding tooltip, for example, `delay:300` (default `50`)
- `offset-x:x` - right and left offset of the tooltip relative to the element, for example, `offset-x:5` (default `0`)
- `offset-y:x` - top and bottom offset of the tooltip relative to the element, for example, `offset-y:5` (default `0`)
- `flip` - allows flipping of the tooltip to the opposite placement if outside of current view (default `false`)
- `auto-placement` - automatically calculates best placement for the tooltip (default `false`)
- `func` - the value will be evaluated by Alpine. This can be useful for dynamic tooltips. (default `false`)

### Tooltip placement

{% render "example.liquid" example: "examples/tooltip-placement.liquid", tabs: examples.tooltipPlacement, collapse: false %}

### Tooltip delay

{% render "example.liquid" example: "examples/tooltip-delay.liquid", tabs: examples.tooltipDelay, collapse: false %}

### Tooltip offset

{% render "example.liquid" example: "examples/tooltip-offset.liquid", tabs: examples.tooltipOffset, collapse: false %}

### Function tooltip content

{% render "example.liquid" example: "examples/tooltip-function.liquid", tabs: examples.tooltipFunction, collapse: false %}
