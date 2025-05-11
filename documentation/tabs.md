---
layout: "layouts/container.liquid"
tags: alpineComponent
name: Tabs
examples: {
    tabsSimple: [
        {
            label: "Template",
            file: "examples/tabs-simple.html",
            language: "html",
        },
    ],
    tabsStyle: [
        {
            label: "Template",
            file: "examples/tabs-style.html",
            language: "html",
        },
    ],
    tabsAlign: [
        {
            label: "Template",
            file: "examples/tabs-align.html",
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

{% render "example.liquid" example: "examples/tabs-simple.html", tabs: examples.tabsSimple %}

### Usage

```html
<script defer src="https://cdn.jsdelivr.net/npm/litewind-alpine@0.x.x/components/tabs/dist/cdn.min.js"></script>
```

The data for the component is provided by the `tabs` function in the `x-data` directive and the props in the `data-*` attributes.

#### Props

{% render "reference.liquid" props: props %}

### Tabs align

Tabs can be aligned by replacing `justify-start` class on the `tabBar` element with a different `justify-*` class. Using `justify-stretch` will make the tabs take up all available space on the tab bar.

{% render "example.liquid" example: "examples/tabs-align.html", tabs: examples.tabsAlign %}

### Alternative tabs style

{% render "example.liquid" example: "examples/tabs-style.html", tabs: examples.tabsStyle %}
