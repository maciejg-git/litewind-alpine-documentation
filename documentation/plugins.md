---
layout: "layouts/container.liquid"
tags: introduction
name: Plugins
---

## Plugins

### Transition plugin

The transition plugin adds two directives `x-alt-transition` and `x-vue-transition`. Both directives add another way to define transitions. The new definition is simply transformed to a set of native Alpine transition directives.

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
  <div>This plugin is optional however most of examples on this page use it to define transitions.</div>
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

Add transition plugin to your page with the CDN or as a npm package.

#### x-alt-transition

This directive adds more timeline like way of defining transitions. To allow CSP builds it is parsed as JSON.

```html
<div x-alt-transition='{
  "enter": ["opacity-0 scale-y-50", "transition ease-out duration-100 origin-top", "opacity-100"],
  "leave": ["opacity-100", "transition ease-in duration-100 origin-top", "opacity-0 scale-y-50"]
}'
></div>
```

#### x-vue-transition

This directive allows defining Vue like transitions:

```html
<div x-vue-transition="fade"></div>
```

### x-class plugin

The `x-class` directive allows adding classes to the element depending on the state of the component. It can be used as an alternative to the native `x-bind:class` directive.

Here is basic example with simple condition.

```html
<div x-class:is-selected="text-lg border"></div>
```

The `is-selected` is a property or getter of the x-data.

#### Modifiers

The `not` modifier applies classes if the condition is false.

```html
<div x-class:is-selected.not="text-lg border"></div>
```
