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
    dropdownContextOpen: [
        {
            label: "Template",
            file: "examples/dropdown-context-open.liquid",
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
    {
        name: "placement",
        type: ["String"],
        default: "bottom-start",
        description: "Initial placement of dropdown content. FloatingUI option, see [documentation](https://floating-ui.com/docs/computePosition#placement) for examples and usage.",
    },
    {
        name: "offsetX",
        type: ["Number"],
        default: "0",
        description: "Offset of dropdown relative to reference element. FloatingUI option, see [documentation](https://floating-ui.com/docs/offset) for examples and usage.",
    },
    {
        name: "offsetY",
        type: ["Number"],
        default: "0",
        description: "Offset of dropdown relative to reference element. FloatingUI option, see [documentation](https://floating-ui.com/docs/offset) for examples and usage.",
    },
    {
        name: "flip",
        type: ["Boolean"],
        default: "false",
        description: "Allows fliping of the dropdown to the opposite placement if outside of current view. FloatingUI option, see [documentation](https://floating-ui.com/docs/flip) for examples and usage.",
    },
    {
        name: "autoPlacement",
        type: ["Boolean"],
        default: "false",
        description: "Automatically calculates best placement for the floating element. FloatingUI option, see [documentation](https://floating-ui.com/docs/autoPlacement) for examples and usage.",
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

Context dropdown uses FloatingUI to position menu relative to mouse position. Before setting up dropdown make sure you have following scripts in your page.

```html
<script src="https://cdn.jsdelivr.net/npm/@floating-ui/core@1.6.8"></script>
<script src="https://cdn.jsdelivr.net/npm/@floating-ui/dom@1.6.12"></script>
<script defer type="module" src="/scripts/use-floating.js"></script>
```

The data for the component is provided by the `dropdownContext` function in the `x-data` directive.

```javascript
dropdownContext({
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

### Opening menu

To show context menu simply dispatch `open-contextmenu` event anywhere in your application. The data in the dispatched event is an `object` with following properties:
- `id` of the context menu to show
- context `data`
- `$event` magic containg native `contextmenu` event to calculate menu position

{% render "example.liquid" example: "examples/dropdown-context-open.liquid", tabs: examples.dropdownContextOpen %}
