---
layout: "layouts/container.liquid"
tags: component
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
    tooltipAnimation: [
        {
            label: "Template",
            file: "examples/tooltip-animation.liquid",
            language: "html",
        },
    ],
}
---
## Tooltip

{% render "github-link.liquid" component: "tooltip" %}

{% render "example.liquid" example: "examples/tooltip-simple.liquid", tabs: examples.tooltipSimple, collapse: false %}

### Usage

```html
<script defer src="https://cdn.jsdelivr.net/npm/litewind-alpine@0.x.x/plugins/use-floating/dist/cdn.min.js"></script>
<script defer src="https://cdn.jsdelivr.net/npm/litewind-alpine@0.x.x/components/tooltip/dist/cdn.min.js"></script>
```

The tooltip can be added to any element with the `x-tooltip` directive. Use directive value to set the text of the tooltip and the modifiers to customize it.

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
- `fade` and `scale-fade` - animation modifiers

### Tooltip placement

{% render "example.liquid" example: "examples/tooltip-placement.liquid", tabs: examples.tooltipPlacement, collapse: false %}

### Tooltip delay

{% render "example.liquid" example: "examples/tooltip-delay.liquid", tabs: examples.tooltipDelay, collapse: false %}

### Tooltip offset

{% render "example.liquid" example: "examples/tooltip-offset.liquid", tabs: examples.tooltipOffset, collapse: false %}

### Function tooltip content

{% render "example.liquid" example: "examples/tooltip-function.liquid", tabs: examples.tooltipFunction, collapse: false %}

### Tooltip animation

{% render "example.liquid" example: "examples/tooltip-animation.liquid", tabs: examples.tooltipAnimation, collapse: false %}
