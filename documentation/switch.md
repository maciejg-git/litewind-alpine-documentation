---
layout: "layouts/container.liquid"
tags: form
name: Switch
examples: {
    switchSimple: [
        {
            label: "Template",
            file: "examples/switch-simple.html",
            language: "html",
        },
    ],
    switchLabel: [
        {
            label: "Template",
            file: "examples/switch-label.html",
            language: "html",
        },
    ],
}
---
## Switch

{% render "github-link.liquid" component: "swtich" %}

{% render "example.liquid" example: "examples/switch-simple.html", tabs: examples.switchSimple, collapse: false, centerFlexRow: true %}

### Labels inside switch

You can add labels or icons inside switch using two additional span elements. For longer labels, you may need to adjust the switch width using `w-*` classes.

{% render "example.liquid" example: "examples/switch-label.html", tabs: examples.switchLabel, centerFlexCol: true %}
