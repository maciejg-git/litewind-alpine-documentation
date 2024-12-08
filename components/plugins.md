---
layout: "layouts/container.liquid"
tags: introduction
name: Plugins
---

## Plugins

#### Transition plugin

The transition plugin add two directives x-alt-transition and x-vue-transition. Both directives add another way to define transitions.

```html
<div x-alt-transition="{
  enter: ['opacity-0 scale-y-50', 'transition ease-out duration-100 origin-top', 'opacity-100'],
  leave: ['opacity-100', 'transition ease-in duration-100 origin-top', 'opacity-0 scale-y-50'],
}"
></div>
```
