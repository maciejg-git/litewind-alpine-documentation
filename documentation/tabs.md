---
layout: "layouts/container.liquid"
tags: alpineComponent
name: Tabs
examples: {
    tabsSimple: [
        {
            label: "Template",
            file: "examples/tabs-simple.html",
            language: "html",
        },
    ],
    tabsStyle: [
        {
            label: "Template",
            file: "examples/tabs-style.html",
            language: "html",
        },
    ],
    tabsAlign: [
        {
            label: "Template",
            file: "examples/tabs-align.html",
            language: "html",
        },
    ],
    tabsTransition: [
        {
            label: "Template",
            file: "examples/tabs-transition.html",
            language: "html",
        },
    ],
}
props: [
    {
        name: "data-selected-tab",
        type: ["String"],
        default: "empty string",
        description: "The name of the selected tab.",
    },
    {
        name: "data-transition",
        type: ["String"],
        default: "empty string",
        description: "The transition that will be applied to each tab.",
    },
]
---
## Tabs

{% render "github-link.liquid" component: "tabs" %}

{% render "example.liquid" example: "examples/tabs-simple.html", tabs: examples.tabsSimple %}

### Usage

```html
<script defer src="https://cdn.jsdelivr.net/npm/litewind-alpine@0.x.x/components/tabs/dist/cdn.min.js"></script>
```

The data for the component is provided by the `tabs` function in the `x-data` directive and the props in the `data-*` attributes.

#### Props

{% render "reference.liquid" props: props %}

### Tabs align

Tabs can be aligned by replacing `justify-start` class on the `tabBar` element with a different `justify-*` class. Using `justify-stretch` will make the tabs take up all available space on the tab bar.

{% render "example.liquid" example: "examples/tabs-align.html", tabs: examples.tabsAlign %}

### Alternative tabs style

{% render "example.liquid" example: "examples/tabs-style.html", tabs: examples.tabsStyle %}

### Tabs transition

To apply the same transition to every tab use the `data-transition` prop.

<div
  x-data="alert"
  class="flex items-center rounded-md border p-5"
  class-info="text-text-700 dark:text-info-200 bg-info-200/20 dark:bg-info-500/50 border-info-400 dark:border-info-500"
  class-warn="text-text-700 dark:text-warn-200 bg-warn-400/20 dark:bg-warn-500/50 border-warn-400 dark:border-warn-500"
  class-danger="text-text-700 dark:text-danger-200 bg-danger-300/20 dark:bg-danger-500/50 border-danger-400 dark:border-danger-500"
  class-success="text-text-700 dark:text-success-200 bg-success-300/20 dark:bg-success-500/50 border-success-400 dark:border-success-500"
>
  <div class="mr-3 empty:hidden">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      class="h-6 w-6"
      viewBox="0 0 16 16"
    >
      <path
        d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"
      />
      <path
        d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
      />
    </svg>
  </div>
  <div>
  Note that tab transitions use <span class="code-word">absolute top-0</span> classes on the leaving element to position both tabs in the same place during the transition. Additionally, a <span class="code-word">delay-*</span> class is added to prevent blending of the transitioning elements.
  </div>
  <button x-bind="closeButton" class="ml-auto">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 384 512"
      class="h-6 w-6 text-text-600 dark:text-text-300"
    >
      <path
        d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
      />
    </svg>
  </button>
</div>

{% render "example.liquid" example: "examples/tabs-transition.html", tabs: examples.tabsTransition %}
