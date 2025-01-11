---
layout: "layouts/container.liquid"
tags: component
name: Dropdown
examples: {
    dropdownSimple: [
        {
            label: "Template",
            file: "examples/dropdown-simple.liquid",
            language: "html",
        },
    ],
    dropdownHover: [
        {
            label: "Template",
            file: "examples/dropdown-hover.liquid",
            language: "html",
        },
    ],
}
props: [
    {
        name: "data-trigger-event",
        type: ["String"],
        default: "click",
        description: "Event that triggers dropdown. Valid values are `click` or `hover`.",
    },
    {
        name: "data-auto-close",
        type: ["Boolean"],
        default: "true",
        description: "If `true` menu is closed after clicking on any element inside.",
    },
    {
        name: "data-placement",
        type: ["String"],
        default: "bottom-start",
        description: "Initial placement of dropdown content. FloatingUI option, see [documentation](https://floating-ui.com/docs/computePosition#placement) for examples and usage.",
    },
    {
        name: "data-offset-x",
        type: ["Number"],
        default: "0",
        description: "Offset of dropdown relative to reference element. FloatingUI option, see [documentation](https://floating-ui.com/docs/offset) for examples and usage.",
    },
    {
        name: "data-offset-y",
        type: ["Number"],
        default: "0",
        description: "Offset of dropdown relative to reference element. FloatingUI option, see [documentation](https://floating-ui.com/docs/offset) for examples and usage.",
    },
    {
        name: "data-flip",
        type: ["Boolean"],
        default: "false",
        description: "Allows fliping of the dropdown to the opposite placement if outside of current view. FloatingUI option, see [documentation](https://floating-ui.com/docs/flip) for examples and usage.",
    },
    {
        name: "data-auto-placement",
        type: ["Boolean"],
        default: "false",
        description: "Automatically calculates best placement for the floating element. FloatingUI option, see [documentation](https://floating-ui.com/docs/autoPlacement) for examples and usage.",
    },
    {
        name: "data-inline",
        type: ["Boolean"],
        default: "false",
        description: "",
    },
]
---
## Dropdown

{% render "example.liquid" example: "examples/dropdown-simple.liquid", tabs: examples.dropdownSimple %}

### Usage

Dropdown uses FloatingUI to position menu relative to triggering element. Before setting up dropdown make sure you have following scripts in your page.

```html
<script src="https://cdn.jsdelivr.net/npm/@floating-ui/core@1.6.8"></script>
<script src="https://cdn.jsdelivr.net/npm/@floating-ui/dom@1.6.12"></script>
<script defer type="module" src="/scripts/use-floating.js"></script>
```

The data for the component is provided by the `dropdown` function in the `x-data` directive and the props in the `data-*` attributes.

Props:

{% render "reference.liquid" props: props %}

### Dropdown on hover

To make dropdown menu open on hover set the `data-trigger-event` to `'hover'`. In hover mode there is short timeout before closing menu when the mouse leaves the trigger element.

{% render "example.liquid" example: "examples/dropdown-hover.liquid", tabs: examples.dropdownHover %}
