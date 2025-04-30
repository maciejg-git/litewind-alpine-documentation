---
layout: "layouts/container.liquid"
tags: form
name: Form text
examples: {
    selectSimple: [
        {
            label: "Template",
            file: "examples/select-simple.liquid",
            language: "html",
        },
    ],
}
props: [
    {
        name: "data-input",
        type: ["String"],
        default: "empty string",
        description: "Validation messages will be displayed for that input.",
    },
]
---
## Form text

{% render "github-link.liquid" component: "form-text" %}

Form text is used along with form components to display validation messages. Check the [validation](/documentation/validation) page for the examples.

### Usage

```html
<script defer src="https://cdn.jsdelivr.net/npm/litewind-alpine@0.x.x/components/form-text/dist/cdn.min.js"></script>
```

The data for the component is provided by the `formText` function in the `x-data` directive and the props in the `data-*` attributes.

#### Props

{% render "reference.liquid" props: props %}
