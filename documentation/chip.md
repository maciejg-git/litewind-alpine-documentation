---
layout: "layouts/container.liquid"
tags: component
name: Chip
examples: {
    chipSimple: [
        {
            label: "Template",
            file: "examples/chip-simple.html",
            language: "html",
        },
    ],
}
---
## Chip

{% render "github-link.liquid" component: "chip" %}

{% render "example.liquid" example: "examples/chip-simple.html", tabs: examples.chipSimple, collapse: false, centerFlexRow: true %}
