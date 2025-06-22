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
    carouselTransition: [
        {
            label: "Template",
            file: "examples/carousel-transition.html",
            language: "html",
        },
    ],
    carouselHideControls: [
        {
            label: "Template",
            file: "examples/carousel-hide-controls.html",
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
    {
        name: "data-no-first-and-last-button",
        type: ["Boolean"],
        default: "[]",
        description: "Hides the previous button on the first slide and the next button on the last slide.",
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

Add the `data-auto-play` prop to automatically transition to the next slide after 5 seconds. You can set the props's value to change the default time interval.

{% render "example.liquid" example: "examples/carousel-auto-play.html", tabs: examples.carouselAutoPlay, centerFlexRow: true %}

### Transition

{% render "example.liquid" example: "examples/carousel-transition.html", tabs: examples.carouselTransition, centerFlexRow: true %}

### Hide controls

{% render "example.liquid" example: "examples/carousel-hide-controls.html", tabs: examples.carouselHideControls, centerFlexRow: true %}
