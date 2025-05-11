---
layout: "layouts/container.liquid"
tags: alpineComponent
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
            file: "examples/modal-simple.html",
            language: "html",
        },
    ],
    modalPosition: [
        {
            label: "Template",
            file: "examples/modal-position.html",
            language: "html",
        },
    ],
    modalImage: [
        {
            label: "Template",
            file: "examples/modal-image.html",
            language: "html",
        },
    ],
    modalDialog: [
        {
            label: "Template",
            file: "examples/modal-dialog.html",
            language: "html",
        },
    ],
}
props: [
    {
        name: "data-static",
        type: ["Boolean"],
        default: "false",
        description: "Static modal cannot be closed by clicking outside of it.",
    },
    {
        name: "data-closable",
        type: ["Boolean"],
        default: "true",
        description: "Set to `false` to remove close button.",
    },
]
---
## Modal

{% render "github-link.liquid" component: "modal" %}

{% render "example.liquid" example: "examples/modal-simple.html", tabs: examples.modalSimple %}

### Usage

```html
<script defer src="https://cdn.jsdelivr.net/npm/litewind-alpine@0.x.x/components/modal/dist/cdn.min.js"></script>
```

The data for the component is provided by the `modal` function in the `x-data` directive and the props in the `data-*` attributes.

#### Props

{% render "reference.liquid" props: props %}

### Trap focus

The modal uses focus plugin (`x-trap` directive) to trap focus inside modal window. While this plugin is optional, it is recommended for better accessibility and better overall usability. Add it with the following `script` tag:

```html
<script defer src="https://cdn.jsdelivr.net/npm/@alpinejs/focus@3.x.x/dist/cdn.min.js"></script>
```

Check the offical plugin [documentation](https://alpinejs.dev/plugins/focus) for additional install options and features.

### Opening modal

To show a modal, simply dispatch `open-modal` event anywhere in your application. The event data should be either a string representing the ID of the modal, or an `object` with the following properties:

- `id` - the id of the modal,
- `options` - additional custom options that can be referenced in the template. This is useful, for example, for creating reusable modal dialogs with customizable content, buttons etc.

### Modal placement and size

By default, the modal is centered and 50% wide. You can change its placement and size using Tailwind classes on the `positioner` element. Below is an example showing several possible placement and size options:

{% render "example.liquid" example: "examples/modal-position.html", tabs: examples.modalPosition %}

### Modal dialogs

Modals are often used for dialogs. Below is an example of a reusable dialog component. The event data is used to set the dialog's content and define callbacks for the user's actions. In the second example, dispatching the event inside a `promise` allows you to pause code execution and await for user confirmation.

{% render "example.liquid" example: "examples/modal-dialog.html", tabs: examples.modalDialog %}

### Modal image viewer

Modals can also be used to make image viewers. Here is an example.

{% render "example.liquid" example: "examples/modal-image.html", tabs: examples.modalImage %}
