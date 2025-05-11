---
layout: "layouts/container.liquid"
tags: alpineComponent
name: Dropdown context
examples: {
    dropdownContextSimple: [
        {
            label: "Template",
            file: "examples/dropdown-context-simple.html",
            language: "html",
        },
    ],
    dropdownContextOpen: [
        {
            label: "Template",
            file: "examples/dropdown-context-open.html",
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
        description: "Initial placement of the dropdown content. This is a FloatingUI option, see [documentation](https://floating-ui.com/docs/computePosition#placement) for examples and usage.",
    },
    {
        name: "data-offset-x",
        type: ["Number"],
        default: "0",
        description: "Offset of the dropdown relative to the reference element. This is a FloatingUI option, see [documentation](https://floating-ui.com/docs/offset) for examples and usage.",
    },
    {
        name: "data-offset-y",
        type: ["Number"],
        default: "0",
        description: "Offset of the dropdown relative to the reference element. This is a FloatingUI option, see [documentation](https://floating-ui.com/docs/offset) for examples and usage.",
    },
    {
        name: "data-flip",
        type: ["Boolean"],
        default: "false",
        description: "Allows flipping of the dropdown to the opposite placement if it is outside the current view. This is a FloatingUI option, see [documentation](https://floating-ui.com/docs/flip) for examples and usage.",
    },
    {
        name: "data-auto-placement",
        type: ["Boolean"],
        default: "false",
        description: "Automatically calculates the best placement for the floating element. This is a FloatingUI option, see [documentation](https://floating-ui.com/docs/autoPlacement) for examples and usage.",
    },
    {
        name: "data-inline",
        type: ["Boolean"],
        default: "false",
        description: "Improves positioning for inline reference elements that span multiple lines. This is a FloatingUI option, see [documentation](https://floating-ui.com/docs/inline) for examples and usage.",
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

{% render "example.liquid" example: "examples/dropdown-context-simple.html", tabs: examples.dropdownContextSimple %}

### Usage

```html
<script defer src="https://cdn.jsdelivr.net/npm/litewind-alpine@0.x.x/plugins/use-floating/dist/cdn.min.js"></script>
<script defer src="https://cdn.jsdelivr.net/npm/litewind-alpine@0.x.x/components/dropdown-context/dist/cdn.min.js"></script>
```

The data for the component is provided by the `dropdownContext` function in the `x-data` directive and the props in the `data-*` attributes. The dropdown-context also requires the `use-floating` plugin that uses [FloatingUI](https://floating-ui.com/) to calculate and update position of the menu.

#### Props

{% render "reference.liquid" props: props %}

### Opening menu

To show the context menu simply dispatch the `open-contextmenu` event anywhere in your application. The event's data should be an `object` with the following properties:
- `id`: the ID of the context menu to show
- `data`: context data
- `$event`: the native `contextmenu` event used to calculate the menu position

The context data is available in the `contextData` property in the menu template.

{% render "example.liquid" example: "examples/dropdown-context-open.html", tabs: examples.dropdownContextOpen %}
