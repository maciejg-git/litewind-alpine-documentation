---
layout: "layouts/container.liquid"
tags: form
name: Textarea
examples: {
    textareaSimple: [
        {
            label: "Template",
            file: "examples/textarea-simple.html",
            language: "html",
        },
    ],
}
props: [
    {
        name: "data-placeholder",
        type: ["String"],
        default: "empty string",
        description: "Sets the placeholder of the textarea element.",
    },
]
---
## Textarea

{% render "github-link.liquid" component: "textarea" %}

{% render "example.liquid" example: "examples/textarea-simple.html", tabs: examples.textareaSimple, collapse: false %}

### Usage

```html
<script defer src="https://cdn.jsdelivr.net/npm/litewind-alpine@0.x.x/components/textarea/dist/cdn.min.js"></script>
```

The data for the component is provided by the `textarea` function in the `x-data` directive and the props in the `data-*` attributes.

#### Props

{% render "reference.liquid" props: props %}
