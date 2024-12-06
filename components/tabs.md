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
}
---
## Tabs

{% render "example.liquid" example: "examples/tabs-simple.liquid", tabs: examples.tabsSimple %}

### Usage

The data for the component is provided by the `tabs` function in the `x-data` directive.

```javascript
tabs(activeTab: String, mixin: Object)
