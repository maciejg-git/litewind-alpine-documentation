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
}
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

#### x-model

{% render "reference.liquid" props: xModel %}
