---
layout: "layouts/container.liquid"
tags: component
name: Modal
requires: [
    {
        name: "Alpine",
        optional: false,
    },
    {
        name: "Focus Plugin",
        optional: false,
    },
]
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
    modalImage: [
        {
            label: "Template",
            file: "examples/modal-image.liquid",
            language: "html",
        },
    ],
    modalDialog: [
        {
            label: "Template",
            file: "examples/modal-dialog.liquid",
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

To show modal simply dispatch `open-modal` event anywhere in your application. The data in the dispatched event can be a `string` with the `id` of the modal or an `object` with following properties:

- `id` - id of the modal,
- `options` - additional custom options that can be referenced in the template. This can be useful for example to create reusable modal dialogs with customizable content, buttons etc.

### Modal placement and size

By default modal is centered and 50% wide. The placement and size of the modal can be changed by modifying tailwind classes on the `positioner` element. Here is an example of few possible placement and size options:

{% render "example.liquid" example: "examples/modal-position.liquid", tabs: examples.modalPosition %}

### Trap focus

The modal uses focus plugin (`x-trap` directive) to trap focus inside modal window. This plugin is optional. To use it add the following `script` tag:

```html
<script defer src="https://cdn.jsdelivr.net/npm/@alpinejs/focus@3.x.x/dist/cdn.min.js"></script>
```

Check the offical plugin [documentation](https://alpinejs.dev/plugins/focus) for additional install options and features.

### Modal dialogs

The modals can be used for the dialogs. Here is an example of reusable dialog component. In the second example `Promise` is used to pause code execution and await user confirmation.

{% render "example.liquid" example: "examples/modal-dialog.liquid", tabs: examples.modalDialog %}

### Modal image viewer

Modals can be used to view fullscreen images. Here is an example.

{% render "example.liquid" example: "examples/modal-image.liquid", tabs: examples.modalImage %}
