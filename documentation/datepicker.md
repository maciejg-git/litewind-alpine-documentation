---
layout: "layouts/container.liquid"
tags: component
name: Datepicker
examples: {
    datepickerSimple: [
        {
            label: "Template",
            file: "examples/datepicker-simple.html",
            language: "html",
        }
    ],
    datepickerRange: [
        {
            label: "Template",
            file: "examples/datepicker-range.html",
            language: "html",
        }
    ],
    datepickerDropdown: [
        {
            label: "Template",
            file: "examples/datepicker-dropdown.html",
            language: "html",
        }
    ],
}
props: [
    {
        name: "data-range",
        type: ["Boolean"],
        default: "false",
        description: "Allows selection of date ranges. Changing this prop resets component.",
    },
    {
        name: "data-monday-first-weekday",
        type: ["Boolean"],
        default: "true",
        description: "Week starts on Monday",
    },
    {
        name: "data-adjacent-months",
        type: ["Boolean"],
        default: "true",
        description: "If true days from previous and next month are displayed. Classes for these days can be modified in the `class-adjacent` attribute in the template. Adjacent days are selectable.",
    },
    {
        name: "data-locale",
        type: ["String"],
        default: "en-GB",
        description: "This prop is only used to set the names of the months and weekdays and to format date in the components footer. It does not modify format of the `x-model` date which is always `YYYY-MM-DD`.",
    },
]
xModel: [
    {
        name: "x-model",
        type: ["String", "Array"],
        description: "The type of the x-model is a string in single mode and an array of two strings in range mode. Strings are always in th YYYY-MM-DD format.",
    },
]
events: [
    {
        name: "datepicker-selection-complete",
        type: [],
        description: "Event dispatched after selection is completed. This can be useful, for example, for closing expandable datepicker in the dropdown.",
    },
]
---
## Datepicker

{% render "github-link.liquid" component: "datepicker" %}

{% render "example.liquid" example: "examples/datepicker-simple.html", tabs: examples.datepickerSimple %}

### Usage

```html
<script defer src="https://cdn.jsdelivr.net/npm/litewind-alpine@0.x.x/components/datepicker/dist/cdn.min.js"></script>
```

The data for the component is provided by the `datepicker` function in the `x-data` directive and the props in the `data-*` attributes. 

#### Props

{% render "reference.liquid" props: props %}

#### x-model

{% render "reference.liquid" props: xModel %}

#### Events

{% render "reference.liquid" props: events %}

### Range mode

Datepicker allows selection of date ranges when `data-range` prop is enabled. In range mode instead of single date `string` component emits `array` of two `strings`.

{% render "example.liquid" example: "examples/datepicker-range.html", tabs: examples.datepickerRange %}

### Datepicker in dropdown

By default datepicker is a standalone component. You can easy turn it into standard expandable picker for inputs by putting it inside dropdown component menu. The dropdown should have `data-auto-close` prop disabled. To close menu after selection `@datepicker-selection-complete` event can be used.

{% render "example.liquid" example: "examples/datepicker-dropdown.html", tabs: examples.datepickerDropdown %}
