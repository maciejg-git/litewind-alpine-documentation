---
layout: "layouts/container.liquid"
tags: form
name: Select
examples: {
    selectSimple: [
        {
            label: "Template",
            file: "examples/select-simple.liquid",
            language: "html",
        },
    ],
    selectMultiple: [
        {
            label: "Template",
            file: "examples/select-multiple.liquid",
            language: "html",
        },
    ],
}
props: [
    {
        name: "items",
        type: ["Array"],
        default: "[]",
        description: "Array of items to select. This can be an `array` of `strings` or an `array` of `objects`. The objects should have at least two properties: a `text` that will be displayed in the menu and a `value`.",
    },
    {
        name: "itemText",
        type: ["String"],
        default: "text",
        description: "Name of the property that holds the displayed text of the item.",
    },
    {
        name: "itemValue",
        type: ["String"],
        default: "value",
        description: "Name of the property that holds the value of the item.",
    },
    {
        name: "multiple",
        type: ["Boolean"],
        default: "false",
        description: "Allows selecting multiple values.",
    },
    {
        name: "clearable",
        type: ["Boolean"],
        default: "false",
        description: "Adds an X button that resets model to the default value.",
    },
    {
        name: "useLoader",
        type: ["Boolean"],
        default: "false",
        description: "Enable or disable the spinner in the input.",
    },
    {
        name: "isLoading",
        type: ["Boolean"],
        default: "false",
        description: "If `true` displays a spinner in the input. Spinner should be first enabled in the `useLoader` prop.",
    },
    {
        name: "placeholder",
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
---
## Select

{% render "example.liquid" example: "examples/select-simple.liquid", tabs: examples.selectSimple %}

### Usage

The data for the component is provided by the `select` function in the `x-data` directive.

```javascript
select({
    items: Array,
    itemText: String,
    itemValue: String,
    multiple: Boolean,
    clearable: Boolean,
    useLoader: Boolean,
    isLoading: Boolean,
    placeholder: String,
})
```
Props:

{% render "reference.liquid" props: props %}

#### x-model

{% render "reference.liquid" props: xModel %}

### Select multiple values

{% render "example.liquid" example: "examples/select-multiple.liquid", tabs: examples.selectMultiple %}
