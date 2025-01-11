---
layout: "layouts/container.liquid"
tags: component
name: Sidepanel
examples: {
    sidepanelSimple: [
        {
            label: "Template",
            file: "examples/sidepanel-simple.liquid",
            language: "html",
        },
    ],
}
---
## Sidepanel

{% render "example.liquid" example: "examples/sidepanel-simple.liquid", tabs: examples.sidepanelSimple %}

### Usage

The data for the component is provided by the `sidepanel` function in the `x-data` directive and the props in the `data-*` attributes.

### Opening sidepanel

To open sidepanel simply dispatch `open-sidepanel` event anywhere in your application. The data in the event is the `id` of the sidepanel to open.

### Sidepanel position

By default sidepanel opens on the right. To swap it to the left side:
- change the `right-0` to the `left-0` class on the main element
- change the `translate` to the negative `-translate` class on the transition directive
