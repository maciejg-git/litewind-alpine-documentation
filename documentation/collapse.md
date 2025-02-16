---
layout: "layouts/container.liquid"
tags: component
name: Collapse
examples: {
    collapseSimple: [
        {
            label: "Template",
            file: "examples/collapse-simple.liquid",
            language: "html",
        },
    ],
    collapseAccordion: [
        {
            label: "Template",
            file: "examples/collapse-accordion.liquid",
            language: "html",
        },
    ],
}
---
## Collapse

{% render "github-link.liquid" component: "collapse" %}

{% render "example.liquid" example: "examples/collapse-simple.liquid", tabs: examples.collapseSimple %}

### Usage

```html
<script defer src="https://cdn.jsdelivr.net/npm/litewind-alpine@0.x.x/components/collapse/dist/cdn.min.js"></script>
```

The data for the component is provided by the `collapse` function in the `x-data` directive and the props in the `data-*` attributes.

### Collapse plugin

The collapse uses collapse plugin (`x-collapse` directive). To use it add the following `script` tag:

```html
<script defer src="https://cdn.jsdelivr.net/npm/@alpinejs/collapse@3.x.x/dist/cdn.min.js"></script>
```

Check the official plugin [documentation](https://alpinejs.dev/plugins/collapse) for additional install options and features.

### Accordion

To make an accordion wrap multiple collapse components with the accordion component. In accordion mode only one collapse component can be open.

{% render "example.liquid" example: "examples/collapse-accordion.liquid", tabs: examples.collapseAccordion %}
