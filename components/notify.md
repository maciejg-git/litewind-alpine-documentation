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
    notifyNewNotification: [
        {
            label: "Template",
            file: "examples/notify-new-notification.liquid",
            language: "html",
        },
    ],
    notifyStacked: [
        {
            label: "Template",
            file: "examples/notify-stacked.liquid",
            language: "html",
        },
    ],
}
props: [
    {
        name: "order",
        type: ["String"],
        default: "default",
        description: "Order of the notifications. Valid values are: `default` or `reversed`. This prop can be useful when setting container position with the `top-*` or `bottom-*` classes.",
    },
    {
        name: "stickyAt",
        type: ["String"],
        default: "end",
        description: "Where to put sticky notifications. Valid values are: `start` for the start of the notification array or `end` for the end for the notification array. This props can be useful when setting container position with the `top-*` or `bottom-*` classes.",
    },
    {
        name: "maxNotifications",
        type: ["Number"],
        default: "0",
        description: "Maximum number of displayed notifications. Notification above this number will be buffered.",
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
        description: "Makes all notifications in this container dismissable by default. Dismissable notifications display close button and allows users to close them.",
    },
    {
        name: "static",
        type: ["Boolean"],
        default: "false",
        description: "Makes all notifications in this container static by default. Static notifications must be dismissed manually by the user.",
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
    stickyAt: String,
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
- `translate-x-*`, `translate-y-*` classes to optionally center container

For example `bottom-4 md:right-10 w-full md:w-[350px] space-y-4` classes will make notifications appear in the bottom right corner of the screen (centered on small screens), notifications will be 350px wide (full width on small screens) and seperated with 1rem of space. 

### Showing new notifications

To show new notification simply dispatch `show-notify` event anywhere in your application. The text and all additional options of the notification is set in the data of the dispatched event. For the properties that are not included in the event data the defaults of the container are used.

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
        sticky: Boolean,
        variant: String,
        options: Object,
    }
)
```
Notification properties:

- `id` - defines container to display notification. `id` is optional when there is only one container in the page,
- `header` and `text` - set content of the notification,
- `delay`, `dismissable` and `static` - override respective props of the container for this notification,
- `sticky` - sticky notifications are always displayed below or above normal notifications and ignore number set in `maxNotifications` prop. Position depends on `order` and `stickyAt` props.
- `variant` - sets the variant of the notification,
- `options` - additional custom options that can be referenced in the template. This is useful for creating customized notifications.

{% render "example.liquid" example: "examples/notify-new-notification.liquid", tabs: examples.notifyNewNotification %}

### Pause timers on hover

By default hovering over container pauses all timers and restarts them after pointer leaves element.

### Stacked notifications

You can turn notification list into stacked notifications by adding `absolute` class to `li` element. The `transform` property can be used to add stacking effect.

{% render "example.liquid" example: "examples/notify-stacked.liquid", tabs: examples.notifyStacked %}
