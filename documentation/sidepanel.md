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
    sidepanelModal: [
        {
            label: "Template",
            file: "examples/sidepanel-modal.liquid",
            language: "html",
        },
    ],
}
props: [
    {
        name: "data-modal",
        type: ["Boolean"],
        default: "false",
        description: "Adds backdrop after opening sidepanel. Clicking backdrop closes sidepanel.",
    },
]
---
## Sidepanel

{% render "github-link.liquid" component: "sidepanel" %}

{% render "example.liquid" example: "examples/sidepanel-simple.liquid", tabs: examples.sidepanelSimple %}

### Usage

The data for the component is provided by the `sidepanel` function in the `x-data` directive and the props in the `data-*` attributes.

#### Props

{% render "reference.liquid" props: props %}

### Opening sidepanel

To open sidepanel simply dispatch `open-sidepanel` event anywhere in your application. The data in the event is the `id` of the sidepanel to open.

### Sidepanel position

By default sidepanel opens on the right. To swap it to the left side:
- change the `right-0` to the `left-0` class on the main element
- change the `translate` to the negative `-translate` class on the transition directive

### Modal sidepanel

To make sidepanel with a backdrop add the `data-modal` prop. Backdrop can be clicked to close the sidepanel.

{% render "example.liquid" example: "examples/sidepanel-modal.liquid", tabs: examples.sidepanelModal %}
