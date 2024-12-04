---
layout: "layouts/container.liquid"
tags: form
name: Input
examples: {
    inputSimple: [
        {
            label: "Template",
            file: "examples/input-simple.liquid",
            language: "html",
        },
    ],
}
props: [
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
---
## Input

{% render "example.liquid" example: "examples/input-simple.liquid", tabs: examples.inputSimple %}

### Usage

To use this component simply copy and paste minimal template or any template from the examples below.

The data for the component is provided by the `input` function in the `x-data` directive. This function takes single `object` as argument.

```javascript
input({
    clearable: Boolean,
    useLoader: Boolean,
    isLoading: Boolean,
    placeholder: String,
})
```

{% render "reference.liquid" props: props %}
