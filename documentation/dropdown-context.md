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
        name: "data-auto-close",
        type: ["Boolean"],
        default: "true",
        description: "If `true` menu is closed after click on any element inside.",
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
    {
        name: "data-role",
        type: ["String"],
        default: "empty string",
        description: "The dropdown is a generic component that can be used for all kinds of applications. If you are building something more well defined like a menu or listbox you can use this prop to automatically add aria attributes to the elements. Valid values are: `menu`, `listbox` and `dialog`.",
    },
]
---
## Dropdown context

{% render "github-link.liquid" component: "dropdown-context" %}

{% render "example.liquid" example: "examples/dropdown-context-simple.liquid", tabs: examples.dropdownContextSimple %}

### Usage

```html
<script defer src="https://cdn.jsdelivr.net/npm/litewind-alpine@0.x.x/plugins/use-floating/dist/cdn.min.js"></script>
<script defer src="https://cdn.jsdelivr.net/npm/litewind-alpine@0.x.x/components/dropdown-context/dist/cdn.min.js"></script>
```

The data for the component is provided by the `dropdownContext` function in the `x-data` directive and the props in the `data-*` attributes. The dropdown-context also requires the `use-floating` plugin that uses [FloatingUI](https://floating-ui.com/) to calculate and update position of the menu.

#### Props

{% render "reference.liquid" props: props %}

### Opening menu

To show context menu simply dispatch `open-contextmenu` event anywhere in your application. The data in the dispatched event is an `object` with following properties:
- `id` of the context menu to show
- context `data`
- `$event` property containg native `contextmenu` event to calculate menu position

The context data is available in the `contextData` property in the menu template.

{% render "example.liquid" example: "examples/dropdown-context-open.liquid", tabs: examples.dropdownContextOpen %}
