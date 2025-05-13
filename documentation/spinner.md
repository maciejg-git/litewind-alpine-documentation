---
layout: "layouts/container.liquid"
tags: component
name: Spinner
examples: {
    spinnerSimple: [
        {
            label: "Template",
            file: "examples/spinner-simple.html",
            language: "html",
        },
    ],
}
---
## Spinner

{% render "github-link.liquid" component: "spinner" %}

{% render "example.liquid" example: "examples/spinner-simple.html", tabs: examples.spinnerSimple, collapse: false, centerFlexRow: true %}
