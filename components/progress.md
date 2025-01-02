---
layout: "layouts/container.liquid"
tags: component
name: Progress
examples: {
    progressSimple: [
        {
            label: "Template",
            file: "examples/progress-simple.liquid",
            language: "html",
        },
    ],
    progressIndetermnate: [
        {
            label: "Template",
            file: "examples/progress-indeterminate.liquid",
            language: "html",
        },
    ],
}
props: [
    {
        name: "interactive",
        type: ["Boolean"],
        default: "false",
        description: "If this prop is enabled clicking on progress will dispatch `progress-clicked` event with the clicked position.",
    },
]
xModel: [
    {
        name: "x-model",
        type: ["String", "Array"],
        description: "Current progress in percent.",
    },
]
---
## Progress

{% render "example.liquid" example: "examples/progress-simple.liquid", tabs: examples.progressSimple, collapse: false %}

### Usage

The data for the component is provided by the `progress` function in the `x-data` directive.

```javascript
progress({
    interactive: Boolean,
})
```
Props:

{% render "reference.liquid" props: props %}

#### x-model

{% render "reference.liquid" props: xModel %}

### Indeterminate progress

{% render "example.liquid" example: "examples/progress-indeterminate.liquid", tabs: examples.progressIndetermnate, collapse: false %}
