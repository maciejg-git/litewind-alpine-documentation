---
layout: "layouts/container.liquid"
tags: alpineComponent
name: Accordion
examples: {
    collapseAccordion: [
        {
            label: "Template",
            file: "examples/collapse-accordion.html",
            language: "html",
        },
    ],
}
---
## Accordion

{% render "github-link.liquid" component: "accordion" %}

To make an accordion wrap multiple [collapse components](/documentation/collapse) with the accordion component. In accordion mode only one collapse component can be open.

{% render "example.liquid" example: "examples/collapse-accordion.html", tabs: examples.collapseAccordion %}

