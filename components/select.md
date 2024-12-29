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
    selectServer: [
        {
            label: "Template",
            file: "examples/select-server.liquid",
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
})
```
Props:

{% render "reference.liquid" props: props %}

#### x-model

{% render "reference.liquid" props: xModel %}

### Select multiple values

The `multiple` prop allows selection of multiple values.

{% render "example.liquid" example: "examples/select-multiple.liquid", tabs: examples.selectMultiple %}

### Async items

{% render "example.liquid" example: "examples/select-server.liquid", tabs: examples.selectServer %}
