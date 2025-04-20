---
layout: "layouts/container.liquid"
tags: form
name: Autocomplete
examples: {
    autocompleteSimple: [
        {
            label: "Template",
            file: "examples/autocomplete-simple.liquid",
            language: "html",
        },
    ],
    autocompleteMultiple: [
        {
            label: "Template",
            file: "examples/autocomplete-multiple.liquid",
            language: "html",
        },
    ],
    autocompleteAsync: [
        {
            label: "Template",
            file: "examples/autocomplete-async.liquid",
            language: "html",
        },
    ],
}
props: [
    {
        name: "data-items",
        type: ["Array"],
        default: "[]",
        description: "Array of items to select. This can be an `array` of `strings` or an `array` of `objects`. The objects should have at least two properties: a `text` that will be displayed in the menu and a `value`. This prop is optional, items can be assigned directly to the `items` property.",
    },
    {
        name: "data-item-text",
        type: ["String"],
        default: "text",
        description: "Name of the property that holds the displayed text of the item.",
    },
    {
        name: "data-item-value",
        type: ["String"],
        default: "value",
        description: "Name of the property that holds the value of the item.",
    },
    {
        name: "data-multiple",
        type: ["Boolean"],
        default: "false",
        description: "Allows selecting multiple values.",
    },
    {
        name: "data-clearable",
        type: ["Boolean"],
        default: "false",
        description: "Adds an X button that resets model to the default value.",
    },
    {
        name: "data-use-loader",
        type: ["Boolean"],
        default: "false",
        description: "Enable or disable the spinner in the input.",
    },
    {
        name: "data-is-loading",
        type: ["Boolean"],
        default: "false",
        description: "If `true` displays a spinner in the input. Spinner should be first enabled in the `data-use-loader` prop.",
    },
    {
        name: "data-placeholder",
        type: ["String"],
        default: "empty string",
        description: "Sets the placeholder of the input element.",
    },
]
xModel: [
    {
        name: "x-model",
        type: ["Array"],
        default: "[]",
        description: "The type of the `x-model` is an `array` for single and multiple modes. The values in the `array` are the `value` fields of the selected options.",
    },
]
events: [
    {
        name: "open-selectmenu",
        type: [],
        description: "Event dispatched after opening select menu.",
    },
    {
        name: "scroll-to-bottom",
        type: [],
        description: "Event dispatched after menu is scrolled to the bottom.",
    },
]
---
## Autocomplete

{% render "github-link.liquid" component: "autocomplete" %}

{% render "example.liquid" example: "examples/autocomplete-simple.liquid", tabs: examples.autocompleteSimple %}

### Usage

```html
<script defer src="https://cdn.jsdelivr.net/npm/litewind-alpine@0.x.x/plugins/use-floating/dist/cdn.min.js"></script>
<script defer src="https://cdn.jsdelivr.net/npm/litewind-alpine@0.x.x/components/autocomplete/dist/cdn.min.js"></script>
```

The data for the component is provided by the `autocomplete` function in the `x-data` directive and the props in the `data-*` attributes.

#### Props

{% render "reference.liquid" props: props %}

#### x-model

{% render "reference.liquid" props: xModel %}

#### Events

{% render "reference.liquid" props: events %}

### Multiple values

{% render "example.liquid" example: "examples/autocomplete-multiple.liquid", tabs: examples.autocompleteMultiple %}

### Autocomplete async

{% render "example.liquid" example: "examples/autocomplete-async.liquid", tabs: examples.autocompleteAsync %}
