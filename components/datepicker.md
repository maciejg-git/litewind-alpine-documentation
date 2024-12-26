---
layout: "layouts/container.liquid"
tags: component
name: Datepicker
examples: {
    datepickerSimple: [
        {
            label: "Template",
            file: "examples/datepicker-simple.liquid",
            language: "html",
        }
    ],
    datepickerRange: [
        {
            label: "Template",
            file: "examples/datepicker-range.liquid",
            language: "html",
        }
    ],
    datepickerDropdown: [
        {
            label: "Template",
            file: "examples/datepicker-dropdown.liquid",
            language: "html",
        }
    ],
}
props: [
    {
        name: "range",
        type: ["Boolean"],
        default: "false",
        description: "Allows selection of date ranges. Changing this prop resets component.",
    },
    {
        name: "mondayFirstWeekday",
        type: ["Boolean"],
        default: "true",
        description: "Week starts on Monday",
    },
    {
        name: "adjacentMonths",
        type: ["Boolean"],
        default: "true",
        description: "If true days from previous and next month are displayed. Classes for these days can be modified in the `class-adjacent` attribute in the template. Adjacent days are selectable.",
    },
    {
        name: "locale",
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
        description: "Event dispatched after selection has been completed.",
    },
]
---
## Datepicker

{% render "example.liquid" example: "examples/datepicker-simple.liquid", tabs: examples.datepickerSimple %}

### Usage

The data for the component is provided by the `datepicker` function in the `x-data` directive.

```javascript
datepicker({
    range: Boolean,
    mondayFirstWeekday: Boolean,
    adjacentMonths: Boolean,
    locale: String,
})
```
Props:

{% render "reference.liquid" props: props %}

#### x-model

{% render "reference.liquid" props: xModel %}

#### Events

{% render "reference.liquid" props: events %}

### Range mode

Datepicker allows selection of date ranges when `range` prop is enabled. In range mode instead of single date `string` component emits `array` of two `strings`.

{% render "example.liquid" example: "examples/datepicker-range.liquid", tabs: examples.datepickerRange %}

### Datepicker in dropdown

By default datepicker is a standalone component. You can easy turn it into standard expandable picker for inputs by putting it inside dropdown component menu. The dropdown should have `autoClose` prop disabled. To close menu after selection `@datepicker-selection-complete` event can be used.

{% render "example.liquid" example: "examples/datepicker-dropdown.liquid", tabs: examples.datepickerDropdown %}
