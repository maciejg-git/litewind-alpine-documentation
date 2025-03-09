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
    dropdownMenu: [
        {
            label: "Template",
            file: "examples/dropdown-menu.liquid",
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
    {
        name: "data-role",
        type: ["String"],
        default: "empty string",
        description: "The dropdown is a generic component that can be used for all kinds of applications. If you are building something more well defined like a menu or listbox you can use this prop to automatically add aria attributes to the elements. Valid values are: `menu`, `listbox` and `dialog`. By default, if this prop is not set, only ARIA attributes for expanding content are included.",
    },
]
---
## Dropdown

{% render "github-link.liquid" component: "dropdown" %}

{% render "example.liquid" example: "examples/dropdown-simple.liquid", tabs: examples.dropdownSimple %}

### Usage

```html
<script defer src="https://cdn.jsdelivr.net/npm/litewind-alpine@0.x.x/plugins/use-floating/dist/cdn.min.js"></script>
<script defer src="https://cdn.jsdelivr.net/npm/litewind-alpine@0.x.x/components/dropdown/dist/cdn.min.js"></script>
```

The data for the component is provided by the `dropdown` function in the `x-data` directive and the props in the `data-*` attributes.

#### Props

{% render "reference.liquid" props: props %}

### Dropdown on hover

To make dropdown menu open on hover set the `data-trigger-event` to `'hover'`. In hover mode there is short delay before closing menu when the mouse leaves the trigger element.

{% render "example.liquid" example: "examples/dropdown-hover.liquid", tabs: examples.dropdownHover %}

### Dropdown menu

Dropdown is a generic component that can contain any kind of content. To build standard menu add `data-role="menu"` prop and `x-bind="menuItem"` to the menu item elements. These will set required ARIA attributes and enable keyboard navigation.

{% render "example.liquid" example: "examples/dropdown-menu.liquid", tabs: examples.dropdownMenu %}
