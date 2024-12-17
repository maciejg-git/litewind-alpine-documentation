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
        name: "triggerEv",
        type: ["String"],
        default: "click",
        description: "Event that triggers dropdown. Valid values are `click` or `hover`.",
    },
    {
        name: "autoClose",
        type: ["Boolean"],
        default: "true",
        description: "If `true` menu is closed after clicking on any element inside.",
    },
    {
        name: "placement",
        type: ["String"],
        default: "bottom-start",
        description: "Initial placement of dropdown content. FloatingUI option, see documentation for examples and usage.",
    },
    {
        name: "offsetX",
        type: ["Number"],
        default: "0",
        description: "Offset of dropdown relative to reference element. FloatingUI option, see documentation for examples and usage.",
    },
    {
        name: "offsetY",
        type: ["Number"],
        default: "0",
        description: "Offset of dropdown relative to reference element. FloatingUI option, see documentation for examples and usage.",
    },
    {
        name: "flip",
        type: ["Boolean"],
        default: "false",
        description: "Allows fliping of the dropdown to the opposite placement if outside of current view. FloatingUI option, see documentation for examples and usage.",
    },
    {
        name: "autoPlacement",
        type: ["Boolean"],
        default: "false",
        description: "Automatically calculates best placement for the floating element. FloatingUI option, see documentation for examples and usage.",
    },
    {
        name: "inline",
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

The data for the component is provided by the `dropdown` function in the `x-data` directive.

```javascript
dropdown({
    triggerEv: String,
    autoClose: Boolean,
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

### Dropdown on hover

{% render "example.liquid" example: "examples/dropdown-hover.liquid", tabs: examples.dropdownHover %}
