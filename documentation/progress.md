---
layout: "layouts/container.liquid"
tags: alpineComponent
name: Progress
examples: {
    progressSimple: [
        {
            label: "Template",
            file: "examples/progress-simple.html",
            language: "html",
        },
    ],
    progressIndetermnate: [
        {
            label: "Template",
            file: "examples/progress-indeterminate.html",
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

{% render "github-link.liquid" component: "progress" %}

{% render "example.liquid" example: "examples/progress-simple.html", tabs: examples.progressSimple, collapse: false %}

### Usage

```html
<script defer src="https://cdn.jsdelivr.net/npm/litewind-alpine@0.x.x/components/progress/dist/cdn.min.js"></script>
```

The data for the component is provided by the `progress` function in the `x-data` directive and the props in the `data-*` attributes.

#### x-model

{% render "reference.liquid" props: xModel %}

### Indeterminate progress

{% render "example.liquid" example: "examples/progress-indeterminate.html", tabs: examples.progressIndetermnate, collapse: false %}
