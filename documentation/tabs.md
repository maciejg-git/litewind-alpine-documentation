---
layout: "layouts/container.liquid"
tags: component
name: Tabs
examples: {
    tabsSimple: [
        {
            label: "Template",
            file: "examples/tabs-simple.liquid",
            language: "html",
        },
    ],
    tabsStyle: [
        {
            label: "Template",
            file: "examples/tabs-style.liquid",
            language: "html",
        },
    ],
}
props: [
    {
        name: "data-selected-tab",
        type: ["String"],
        default: "empty string",
        description: "The name of the selected tab.",
    },
]
---
## Tabs

{% render "github-link.liquid" component: "tabs" %}

{% render "example.liquid" example: "examples/tabs-simple.liquid", tabs: examples.tabsSimple %}

### Usage

The data for the component is provided by the `tabs` function in the `x-data` directive and the props in the `data-*` attributes.

#### Props

{% render "reference.liquid" props: props %}

### Tabs align

Tabs can be aligned by modifying `justify-start` class on the `tabBar` element with the different `justify-*` class. The `justify-stretch` will make the tabs take up all available space on the tab bar.

### Tabs style

{% render "example.liquid" example: "examples/tabs-style.liquid", tabs: examples.tabsStyle %}
