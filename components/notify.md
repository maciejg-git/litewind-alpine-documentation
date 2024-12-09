---
layout: "layouts/container.liquid"
tags: component
name: Notify
examples: {
    notifySimple: [
        {
            label: "Template",
            file: "examples/notify-simple.liquid",
            language: "html",
        },
    ],
}
props: [
    {
        name: "order",
        type: ["String"],
        default: "new-on-bottom",
        description: "Order of the notifications. Valid values are: `new-on-bottom` or `new-on-top`.",
    },
    {
        name: "delay",
        type: ["Number"],
        default: "10000",
        description: "Default delay for auto closing notifications.",
    },
    {
        name: "dismissable",
        type: ["Boolean"],
        default: "true",
        description: "Displays close button and allows users to close notifications.",
    },
    {
        name: "static",
        type: ["Boolean"],
        default: "false",
        description: "Static notifications must be dismissed manually by the user.",
    },
    {
        name: "variant",
        type: ["String"],
        default: "info",
        description: "Default variant for all notifications in this container.",
    },
    {
        name: "options",
        type: ["Object"],
        default: "null",
        description: "Default options for all notifications in this container.",
    },
]
---
## Notify

{% render "example.liquid" example: "examples/notify-simple.liquid", tabs: examples.notifySimple %}

### Usage

The data for the component is provided by the `notify` function in the `x-data` directive.

```javascript
notify({
    order: String,
    delay: Number,
    dismissable: Boolean,
    static: Boolean,
    variant: String,
    options: Object,
})
```
Props:

{% render "reference.liquid" props: props %}

### Notify container position

Notify container does not have any classes by default apart from `fixed` position. You should add few basic tailwind classes in order to set it up:

- `top-*` , `bottom-*`, `left-*` or `right-*` to place it in desired position,
- `w-*` class to set width of notifications,
- `space-y-*` to optionally add some gaps between notifications,
- `px-*` or `py-*` classes to optionally add padding to the container

For example `bottom-4 md:right-10 w-full md:w-[350px] space-y-4` classes will make notifications appear in the bottom right corner of the screen (centered on small screens), notifications will be 350px wide (full width on small screens) and seperated with 1rem of space. 

### Adding new notifications

To add new notification simply dispatch `add-notify` anywhere in your application. The text and all additional options of the notification is set in the data of the dispatched event.

```javascript
$dispatch(
    "add-notify",
    {
        id: String,
        header: String,
        text: String,
        delay: Number,
        dismissable: Boolean,
        static: Boolean,
        variant: String,
        options: Object,
    }
)
```
Notification properties:

- `id` - defines container to display notification. `id` is optional when there is only one container in the page,
- `header` and `text` - set content of the notification,
- `delay`, `dismissable` and `static` - override respective props of the container for this notification,
- `variant` - sets the variant of the notification,
- `options` - additional custom options that can be referenced in the template.
