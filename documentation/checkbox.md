---
layout: "layouts/container.liquid"
tags: form
name: Checkbox
examples: {
    checkboxSimple: [
        {
            label: "Template",
            file: "examples/checkbox-simple.liquid",
            language: "html",
        },
    ],
}
---
## Checkbox

{% render "github-link.liquid" component: "checkbox" %}

{% render "example.liquid" example: "examples/checkbox-simple.liquid", tabs: examples.checkboxSimple, collapse: false %}
