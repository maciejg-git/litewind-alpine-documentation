---
layout: "layouts/container.liquid"
tags: form
name: Range
examples: {
    rangeSimple: [
        {
            label: "Template",
            file: "examples/range-simple.html",
            language: "html",
        },
    ],
    rangeFixedMin: [
        {
            label: "Template",
            file: "examples/range-fixed-min.html",
            language: "html",
        },
    ],
    rangeMinMaxStep: [
        {
            label: "Template",
            file: "examples/range-min-max-step.html",
            language: "html",
        },
    ],
    rangeShowSteps: [
        {
            label: "Template",
            file: "examples/range-show-steps.html",
            language: "html",
        },
    ],
    rangeShowLabels: [
        {
            label: "Template",
            file: "examples/range-show-labels.html",
            language: "html",
        },
    ],
    rangeShowStepsStyle: [
        {
            label: "Template",
            file: "examples/range-show-steps-style.html",
            language: "html",
        },
    ],
}
props: [
    {
        name: "data-min",
        type: ["Number"],
        default: "0",
        description: "Minimal slider value",
    },
    {
        name: "data-max",
        type: ["Number"],
        default: "100",
        description: "Maximal slider value",
    },
    {
        name: "data-step",
        type: ["Number"],
        default: "1",
        description: "Sets the interval of the slider value",
    },
    {
        name: "data-fixed-min",
        type: ["Boolean"],
        default: "false",
        description: "The minimal value is fixed. If true, only one slider for max value is used",
    },
    {
        name: "data-show-steps",
        type: ["Boolean"],
        default: "false",
        description: "If true, displays ticks in the slider",
    },
    {
        name: "show-labels",
        type: ["Boolean"],
        default: "false",
        description: "If true, displays value labels above the sliders",
    },
]
---
## Range

{% render "github-link.liquid" component: "range" %}

{% render "example.liquid" example: "examples/range-simple.html", tabs: examples.rangeSimple  %}

### Usage

```html
<script defer src="https://cdn.jsdelivr.net/npm/litewind-alpine@0.x.x/components/range/dist/cdn.min.js"></script>
```

The data for the component is provided by the `range` function in the `x-data` directive and the props in the `data-*` attributes.

#### Props

{% render "reference.liquid" props: props %}

### Fixed minimal value

The `data-fixed-min` makes the minimal value fixed.

{% render "example.liquid" example: "examples/range-fixed-min.html", tabs: examples.rangeFixedMin  %}

### Min, max and step

The `data-min`, `data-max` and `data-step` define minimal, maximal, and step values of the slider.

{% render "example.liquid" example: "examples/range-min-max-step.html", tabs: examples.rangeMinMaxStep  %}

### Step ticks

The `data-show-steps` shows ticks for each step. Below are examples of ticks with different styles.

{% render "example.liquid" example: "examples/range-show-steps.html", tabs: examples.rangeShowSteps  %}

{% render "example.liquid" example: "examples/range-show-steps-style.html", tabs: examples.rangeShowStepsStyle  %}

### Slider labels

The `data-show-labels` displays value labels for each slider.

{% render "example.liquid" example: "examples/range-show-labels.html", tabs: examples.rangeShowLabels  %}
