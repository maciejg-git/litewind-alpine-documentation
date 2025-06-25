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
        description: "If true, the minimal value will be fixed and only the slider for maximal value will be used",
    },
    {
        name: "data-show-steps",
        type: ["Boolean"],
        default: "false",
        description: "If true, step ticks are displayed",
    },
    {
        name: "data-show-labels",
        type: ["Boolean", "String"],
        default: "false",
        description: "If set to true or `'always'` the value labels are displayed above the sliders. You can also set this prop to `'focus'` to display the labels when the slider is focused.",
    },
]
xModel: [
    {
        name: "x-model",
        type: ["Array"],
        default: "[]",
        description: "The x-model is an array containing minimal and maximal slider values.",
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

#### x-model

{% render "reference.liquid" props: xModel %}

### Fixed minimal value

The `data-fixed-min` makes the minimal value fixed.

{% render "example.liquid" example: "examples/range-fixed-min.html", tabs: examples.rangeFixedMin  %}

### Min, max and step

The `data-min`, `data-max` and `data-step` define minimal, maximal, and step values of the slider.

{% render "example.liquid" example: "examples/range-min-max-step.html", tabs: examples.rangeMinMaxStep  %}

### Step ticks

The `data-show-steps` displays a tick for each step. Below are examples showing different tick styles.

{% render "example.liquid" example: "examples/range-show-steps.html", tabs: examples.rangeShowSteps  %}

{% render "example.liquid" example: "examples/range-show-steps-style.html", tabs: examples.rangeShowStepsStyle  %}

### Slider labels

The `data-show-labels` displays value labels for each slider. To show labels when the component is focused, set `data-show-labels` to `"focus"`.

{% render "example.liquid" example: "examples/range-show-labels.html", tabs: examples.rangeShowLabels  %}
