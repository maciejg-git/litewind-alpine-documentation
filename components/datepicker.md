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
    ]
}
props: [
    {
        name: "range",
        type: "Boolean",
        default: "false",
        description: "Allows selection of date ranges. Changing this prop resets component.",
    },
    {
        name: "mondayFirstWeekday",
        type: "Boolean",
        default: "true",
        description: "Week starts on Monday",
    },
    {
        name: "adjacentMonths",
        type: "Boolean",
        default: "true",
        description: "If true days from previous and next month are displayed. Classes for these days can be modified in the `class:adjacent` attribute in the template.",
    },
    {
        name: "locale",
        type: "String",
        default: "en-GB",
        description: "This prop is only used to display names of the months and weekdays and to format date in the components footer. It does not modify format of the `x-model` date which is always `YYYY-MM-DD`.",
    },
]
---
## Datepicker

{% render "example.liquid" example: "examples/datepicker-simple.liquid", tabs: examples.datepickerSimple %}

### Usage

To use this component simply copy and paste minimal template or any template from the examples below.

The props for the component are provided by the `datepicker` function in the `x-data` directive. This function takes single `object` as argument.

```javascript
datepicker({
    range: Boolean,
    mondayFirstWeekday: Boolean,
    adjacentMonths: Boolean,
    locale: String,
})
```

{% render "reference.liquid" props: props %}
