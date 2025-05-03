---
layout: "layouts/container.liquid"
tags: form
name: Input
examples: {
    inputSimple: [
        {
            label: "Template",
            file: "examples/input-simple.html",
            language: "html",
        },
    ],
    inputProps: [
        {
            label: "Template",
            file: "examples/input-props.html",
            language: "html",
        },
    ],
    inputStyle: [
        {
            label: "Template",
            file: "examples/input-style.html",
            language: "html",
        },
    ],
}
props: [
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
---
## Input

{% render "github-link.liquid" component: "input" %}

{% render "example.liquid" example: "examples/input-simple.html", tabs: examples.inputSimple %}

### Usage

```html
<script defer src="https://cdn.jsdelivr.net/npm/litewind-alpine@0.x.x/components/input/dist/cdn.min.js"></script>
```

The data for the component is provided by the `input` function in the `x-data` directive and the props in the `data-*` attributes.

#### Props

{% render "reference.liquid" props: props %}

### Additional elements

The input includes several additional elements and props for common features like icons and clear buttons. Below is a complete example with all options enabled. Elements for icons, prepended and appended content are marked using the appropriate `data-*` attributes.

If you want to hide these elements initially and then show them based on the state of the input element add the `group` class to the main element, and use `group-*` variants to style target element. See the Tailwind [documentation](https://tailwindcss.com/docs/hover-focus-and-other-states#styling-based-on-parent-state) for details.

{% render "example.liquid" example: "examples/input-props.html", tabs: examples.inputProps %}

### Input style

{% render "example.liquid" example: "examples/input-style.html", tabs: examples.inputStyle %}
