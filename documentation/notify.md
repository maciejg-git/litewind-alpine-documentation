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
        name: "data-order",
        type: ["String"],
        default: "default",
        description: "Order of the notifications. Valid values are: `default` or `reversed`. This prop can be useful when setting container position with the `top-*` or `bottom-*` classes.",
    },
    {
        name: "data-sticky-at",
        type: ["String"],
        default: "end",
        description: "Where to put sticky notifications. Valid values are: `start` for the start of the notification array or `end` for the end for the notification array. This props can be useful when setting container position with the `top-*` or `bottom-*` classes.",
    },
    {
        name: "data-max-notifications",
        type: ["Number"],
        default: "0",
        description: "Maximum number of displayed notifications. Notification above this number will be buffered.",
    },
    {
        name: "data-delay",
        type: ["Number"],
        default: "10000",
        description: "Default delay for auto closing notifications.",
    },
    {
        name: "data-dismissable",
        type: ["Boolean"],
        default: "true",
        description: "Makes all notifications in this container dismissable by default. Dismissable notifications display close button and allows users to close them.",
    },
    {
        name: "data-static",
        type: ["Boolean"],
        default: "false",
        description: "Makes all notifications in this container static by default. Static notifications must be dismissed manually by the user.",
    },
    {
        name: "data-variant",
        type: ["String"],
        default: "info",
        description: "Default variant for all notifications in this container.",
    },
    {
        name: "data-options",
        type: ["Object"],
        default: "null",
        description: "Default options for all notifications in this container.",
    },
]
---
## Notify

{% render "github-link.liquid" component: "notify" %}

{% render "example.liquid" example: "examples/notify-simple.liquid", tabs: examples.notifySimple %}

### Usage

```html
<script defer src="https://cdn.jsdelivr.net/npm/litewind-alpine@0.x.x/components/notify/dist/cdn.min.js"></script>
```

This component is simply a container for the notifications. With the container on the page you can display new notifications with the `show-notify` event.

The data for the component is provided by the `notify` function in the `x-data` directive and the props in the `data-*` attributes.

#### Props

{% render "reference.liquid" props: props %}

### Notify container position

In order to set up notify container you should add few basic Tailwind classes to the main element:

- `top-*` , `bottom-*`, `left-*` or `right-*` to place it in desired position,
- `w-*` class to set width of notifications,
- `space-y-*` to optionally add some gaps between notifications,
- `px-*` or `py-*` classes to optionally add padding to the container
- `translate-x-*`, `translate-y-*` classes to optionally center container

For example `bottom-4 md:right-10 w-full md:w-[350px] space-y-4` classes will make notifications appear in the bottom right corner of the screen (centered on small screens), notifications will be 350px wide (full width on small screens) and seperated with 1rem of space. 

### Showing new notifications

To show new notification simply dispatch `show-notify` event anywhere in your application. The text and all additional options of the notification are set in the data of the dispatched event. `delay`, `dismissable`, `static`, `variant` and `options` properties will override defaults of the container for that notification.

```javascript
$dispatch(
    "add-notify",
    {
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

- `header` and `text` - set content of the notification,
- `delay`, `dismissable` and `static` - override respective props of the container for this notification,
- `sticky` - sticky notifications are always displayed below or above normal notifications and ignore number set in `data-max-notifications` prop. Position depends on `data-order` and `data-sticky-at` props.
- `variant` - sets the variant of the notification,
- `options` - additional custom options that can be referenced in the template. This is useful for creating customized notifications.

{% render "example.liquid" example: "examples/notify-new-notification.liquid", tabs: examples.notifyNewNotification %}

### Pause timers on hover

By default hovering over container pauses all timers and restarts them after pointer leaves element.

### Stacked notifications

You can turn notification list into stacked notifications by adding `absolute` class to `li` element. To add a stacking effect `style` binding is used with a `transform` property.

{% render "example.liquid" example: "examples/notify-stacked.liquid", tabs: examples.notifyStacked %}
