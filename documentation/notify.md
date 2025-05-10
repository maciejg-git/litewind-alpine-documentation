---
layout: "layouts/container.liquid"
tags: component
name: Notify
examples: {
    notifySimple: [
        {
            label: "Template",
            file: "examples/notify-simple.html",
            language: "html",
        },
    ],
    notifyNewNotification: [
        {
            label: "Template",
            file: "examples/notify-new-notification.html",
            language: "html",
        },
    ],
    notifyStacked: [
        {
            label: "Template",
            file: "examples/notify-stacked.html",
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

{% render "example.liquid" example: "examples/notify-simple.html", tabs: examples.notifySimple %}

### Usage

```html
<script defer src="https://cdn.jsdelivr.net/npm/litewind-alpine@0.x.x/components/notify/dist/cdn.min.js"></script>
```

This component is simply a container for notifications. With the container on the page, you can display new notifications by dispatching the `show-notify` event.

The data for the component is provided by the `notify` function in the `x-data` directive and the props in the `data-*` attributes.

#### Props

{% render "reference.liquid" props: props %}

### Notify container position

To set up the notify container, add a few basic Tailwind classes to the main element:

- `top-*` , `bottom-*`, `left-*` or `right-*` to set the container position
- `w-*` to set notification width
- `space-y-*` to optionally add spacing between notifications
- `px-*` or `py-*` to optionally add padding to the container
- `translate-x-*`, `translate-y-*` to optionally center container

For example, the classes `bottom-4 md:right-4 w-full md:w-[350px] space-y-4` will position notifications in the bottom-right corner of the screen (centered on small screens). Notifications will be 350px wide on medium screens and up (full width on small screens), and spaced 1rem apart. 

### Showing new notifications

To show a new notification, simply dispatch the `show-notify` event anywhere in your application. The notification text and additional options are provided in the event's data. The `delay`, `dismissable`, `static`, `variant` and `options` properties will override the container defaults for that specific notification.

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
- `sticky` - sticky notifications are always displayed below or above normal notifications and ignore number set in `data-max-notifications` prop. Position depends on the `data-order` prop.
- `variant` - sets the variant of the notification,
- `options` - additional custom options that can be referenced in the template. This is useful for creating customized notifications.

{% render "example.liquid" example: "examples/notify-new-notification.html", tabs: examples.notifyNewNotification %}

### Pause timers on hover

By default, hovering over the container pauses all timers and restarts them when the pointer leaves the element.

### Stacked notifications

You can turn notification list into stacked notifications by adding `absolute` class to the `li` element. To add a stacking effect `style` binding with a `transform` property is used.

{% render "example.liquid" example: "examples/notify-stacked.html", tabs: examples.notifyStacked %}
