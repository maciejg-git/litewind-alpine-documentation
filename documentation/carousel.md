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
    carouselHideControlsProp: [
        {
            label: "Template",
            file: "examples/carousel-hide-controls-prop.html",
            language: "html",
        },
    ],
    carouselHideControlsGroup: [
        {
            label: "Template",
            file: "examples/carousel-hide-controls-group.html",
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
        type: ["Number"],
        default: "0",
        description: "This prop enables automatic playing of slides. The value is a time interval in miliseconds.",
    },
    {
        name: "data-no-first-and-last-button",
        type: ["Boolean"],
        default: "false",
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

If you need to permanently hide navigation controls, simply delete them from the template.

To hide them selectively or based on user actions, check the following two examples.

You can use `data-no-first-and-last-button` prop to hide the "previous" button of the first slide and the "next" button of the last slide.

{% render "example.liquid" example: "examples/carousel-hide-controls-prop.html", tabs: examples.carouselHideControlsProp, centerFlexRow: true %}

To hide navigation controls based on the user actions, you can use Tailwind's `group` class. In the next example, the buttons are displayed when the pointer hovers over the carousel.

{% render "example.liquid" example: "examples/carousel-hide-controls-group.html", tabs: examples.carouselHideControlsGroup, centerFlexRow: true %}
