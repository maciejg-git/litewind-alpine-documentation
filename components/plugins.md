---
layout: "layouts/container.liquid"
tags: introduction
name: Plugins
---

## Plugins

### Transition directives

The transition plugin add two directives `x-alt-transition` and `x-vue-transition`. Both directives add another way to define transitions. The new definition is simply transformed to a set of native Alpine transition directives.

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

### x-class directive
