---
layout: "layouts/container.liquid"
tags: component
name: Dropdown context
examples: {
    dropdownContextSimple: [
        {
            label: "Template",
            file: "examples/dropdown-context-simple.liquid",
            language: "html",
        },
    ],
}
props: [
    {
        name: "autoClose",
        type: ["Boolean"],
        default: "true",
        description: "If `true` menu is closed after click on any element inside.",
    },
]
floatingOptions: [
    {
        name: "placement",
        type: ["String"],
        default: "bottom-start",
        description: "Initial placement of dropdown content. See floatingUI documentation for valid values.",
    },
    {
        name: "offsetX",
        type: ["Number"],
        default: "0",
        description: "Offset of dropdown relative to reference element.",
    },
    {
        name: "offsetY",
        type: ["Number"],
        default: "0",
        description: "Offset of dropdown relative to reference element.",
    },
    {
        name: "flip",
        type: ["Boolean"],
        default: "false",
        description: "Allows fliping of the dropdown to the opposite placement if outside of current view.",
    },
    {
        name: "autoPlacement",
        type: ["Boolean"],
        default: "false",
        description: "Automatically calculates best placement for the floating element.",
    },
    {
        name: "inline",
        type: ["Boolean"],
        default: "false",
        description: "",
    },
]
---
## Dropdown context

{% render "example.liquid" example: "examples/dropdown-context-simple.liquid", tabs: examples.dropdownContextSimple %}

### Usage

The data for the component is provided by the `dropdownContext` function in the `x-data` directive.

```javascript
dropdownContext({
    autoClose: Boolean,
},
{
    placement: String,
    offsetX: Number,
    offsetY: Number,
    flip: Boolean,
    autoPlacement: Boolean,
    inline: Boolean,
})
```
Props:

{% render "reference.liquid" props: props %}

FloatingUI options:

{% render "reference.liquid" props: floatingOptions %}

### Opening menu

To show context menu simply dispatch `open-contextmenu` event anywhere in your application. The data in the dispacthed event is an `object` with following properties:
- `id` of the context menu to show
- context `data`
- `$event` magic containg native `contextmenu` event to calculate menu position
