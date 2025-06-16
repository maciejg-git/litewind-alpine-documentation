---
layout: "layouts/container.liquid"
tags: alpineComponent
name: Carousel
examples: {
    carouselSimple: [
        {
            label: "Template",
            file: "examples/carousel-simple.html",
            language: "html",
        },
    ],
    carouselAutoPlay: [
        {
            label: "Template",
            file: "examples/carousel-auto-play.html",
            language: "html",
        },
    ],
}
props: [
    {
        name: "data-items",
        type: ["Array"],
        default: "[]",
        description: "Array of items to display in the carousel",
    },
    {
        name: "data-auto-play",
        type: ["Boolean", "Number"],
        default: "false",
        description: "If true, automatically plays items every 5 seconds. This prop also accepts a number (milliseconds) to change the default time interval.",
    },
]
---
## Carousel

{% render "github-link.liquid" component: "carousel" %}

{% render "example.liquid" example: "examples/carousel-simple.html", tabs: examples.carouselSimple, centerFlexRow: true %}

### Usage

```html
<script defer src="https://cdn.jsdelivr.net/npm/litewind-alpine@0.x.x/carousel/dropdown/dist/cdn.min.js"></script>
```

The data for the component is provided by the `carousel` function in the `x-data` directive and the props in the `data-*` attributes.

#### Props

{% render "reference.liquid" props: props %}

### Auto play

{% render "example.liquid" example: "examples/carousel-auto-play.html", tabs: examples.carouselAutoPlay, centerFlexRow: true %}
