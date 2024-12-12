---
layout: "layouts/container.liquid"
tags: component
name: Modal
examples: {
    modalSimple: [
        {
            label: "Template",
            file: "examples/modal-simple.liquid",
            language: "html",
        },
    ],
    modalPosition: [
        {
            label: "Template",
            file: "examples/modal-position.liquid",
            language: "html",
        },
    ],
}
props: [
    {
        name: "static",
        type: ["Boolean"],
        default: "false",
        description: "Static modal cannot be closed by clicking outside of it.",
    },
    {
        name: "closable",
        type: ["Boolean"],
        default: "true",
        description: "Set to `false` to remove close button.",
    },
]
---
## Modal

{% render "example.liquid" example: "examples/modal-simple.liquid", tabs: examples.modalSimple %}

### Usage

The data for the component is provided by the `modal` function in the `x-data` directive.

```javascript
modal({
    static: Boolean,
    closable: Boolean,
})
```
Props:

{% render "reference.liquid" props: props %}

### Opening modal

To show modal simply dispatch `open-modal` event anywhere in your application. The data in the dispatched event is a `string` with the `id` of the modal. The data can also be an `object` with following properties:
- `id` - id of the modal,
- `options` - additional custom options that can be referenced in the template.

### Modal placement and size

By default modal is centered and 50% wide. You can change position and size by modifying few classes.

{% render "example.liquid" example: "examples/modal-position.liquid", tabs: examples.modalPosition %}
