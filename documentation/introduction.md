---
layout: "layouts/container.liquid"
tags: introduction
name: Introduction
---
## Introduction

Litewind is a component framework for Alpine and TailwindCSS.

Here's a short description from the Alpine homepage.

> "Alpine is a rugged, minimal tool for composing behavior directly in your markup. Think of it like jQuery for the modern web. Plop in a script tag and get going."

Tailwind takes a similar approach, but for CSS.

> "A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup."

### Installation

To install Alpine and Tailwind follow the instructions in their offical documentation ([Alpine](https://alpinejs.dev/essentials/installation), [Tailwind CSS](https://tailwindcss.com/docs/installation/using-vite)). Here are the simplest and fastest install options to get started.

#### Alpine

For the Alpine you can just include CDN link in the `script` tag:

```html
<script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
```

Alpine can also be installed as a npm package, check the details in the [documentation](https://alpinejs.dev/essentials/installation#as-a-module).

#### Tailwind

For the Tailwind the simplest install option is the Tailwind CLI tool.

```powershell
npm install tailwindcss @tailwindcss/cli
```

Running Tailwind CLI requires importing Tailwind into your main CSS file and including the compiled CSS in your HTML. Check the full setup instructions [here](https://tailwindcss.com/docs/installation/tailwind-cli).

Once Tailwind is set up, add the following to your main CSS file.

- styles for framework elements that can't be styled directly in the templates, such as tooltips, spinner animations, etc.
- extended color definitions. Litewind uses colors like primary, secondary, etc., to mantain a consistent appearance across components.
- a style for the `x-cloak` directive used by Alpine. See the Alpine documentation for details on how `x-cloak` works.
- a dark mode variant (optional)
- include "Inter" in the default font list (optional)

```css
@import 'tailwindcss';

@custom-variant dark (&:is(.dark *));

@theme inline {
  --color-primary-50: var(--color-violet-50);
  --color-primary-100: var(--color-violet-100);
  --color-primary-200: var(--color-violet-200);
  --color-primary-300: var(--color-violet-300);
  --color-primary-400: var(--color-violet-400);
  --color-primary-500: var(--color-violet-500);
  --color-primary-600: var(--color-violet-600);
  --color-primary-700: var(--color-violet-700);
  --color-primary-800: var(--color-violet-800);
  --color-primary-900: var(--color-violet-900);
  --color-primary-950: var(--color-violet-950);

  --color-secondary-50: var(--color-gray-50);
  --color-secondary-100: var(--color-gray-100);
  --color-secondary-200: var(--color-gray-200);
  --color-secondary-300: var(--color-gray-300);
  --color-secondary-400: var(--color-gray-400);
  --color-secondary-500: var(--color-gray-500);
  --color-secondary-600: var(--color-gray-600);
  --color-secondary-700: var(--color-gray-700);
  --color-secondary-800: var(--color-gray-800);
  --color-secondary-900: var(--color-gray-900);
  --color-secondary-950: var(--color-gray-950);

  --color-info-50: var(--color-blue-50);
  --color-info-100: var(--color-blue-100);
  --color-info-200: var(--color-blue-200);
  --color-info-300: var(--color-blue-300);
  --color-info-400: var(--color-blue-400);
  --color-info-500: var(--color-blue-500);
  --color-info-600: var(--color-blue-600);
  --color-info-700: var(--color-blue-700);
  --color-info-800: var(--color-blue-800);
  --color-info-900: var(--color-blue-900);
  --color-info-950: var(--color-blue-950);

  --color-warn-50: var(--color-yellow-50);
  --color-warn-100: var(--color-yellow-100);
  --color-warn-200: var(--color-yellow-200);
  --color-warn-300: var(--color-yellow-300);
  --color-warn-400: var(--color-yellow-400);
  --color-warn-500: var(--color-yellow-500);
  --color-warn-600: var(--color-yellow-600);
  --color-warn-700: var(--color-yellow-700);
  --color-warn-800: var(--color-yellow-800);
  --color-warn-900: var(--color-yellow-900);
  --color-warn-950: var(--color-yellow-950);

  --color-success-50: var(--color-green-50);
  --color-success-100: var(--color-green-100);
  --color-success-200: var(--color-green-200);
  --color-success-300: var(--color-green-300);
  --color-success-400: var(--color-green-400);
  --color-success-500: var(--color-green-500);
  --color-success-600: var(--color-green-600);
  --color-success-700: var(--color-green-700);
  --color-success-800: var(--color-green-800);
  --color-success-900: var(--color-green-900);
  --color-success-950: var(--color-green-950);

  --color-danger-50: var(--color-red-50);
  --color-danger-100: var(--color-red-100);
  --color-danger-200: var(--color-red-200);
  --color-danger-300: var(--color-red-300);
  --color-danger-400: var(--color-red-400);
  --color-danger-500: var(--color-red-500);
  --color-danger-600: var(--color-red-600);
  --color-danger-700: var(--color-red-700);
  --color-danger-800: var(--color-red-800);
  --color-danger-900: var(--color-red-900);
  --color-danger-950: var(--color-red-950);

  --color-dark-50: var(--color-neutral-50);
  --color-dark-100: var(--color-neutral-100);
  --color-dark-200: var(--color-neutral-200);
  --color-dark-300: var(--color-neutral-300);
  --color-dark-400: var(--color-neutral-400);
  --color-dark-500: var(--color-neutral-500);
  --color-dark-600: var(--color-neutral-600);
  --color-dark-700: var(--color-neutral-700);
  --color-dark-800: var(--color-neutral-800);
  --color-dark-900: var(--color-neutral-900);
  --color-dark-950: var(--color-neutral-950);

  --color-light: #fff;

  --color-text-50: var(--color-gray-50);
  --color-text-100: var(--color-gray-100);
  --color-text-200: var(--color-gray-200);
  --color-text-300: var(--color-gray-300);
  --color-text-400: var(--color-gray-400);
  --color-text-500: var(--color-gray-500);
  --color-text-600: var(--color-gray-600);
  --color-text-700: var(--color-gray-700);
  --color-text-800: var(--color-gray-800);
  --color-text-900: var(--color-gray-900);
  --color-text-950: var(--color-gray-950);
}

@theme {
  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    
  --animate-spinner-rotate: spinner-rotate 1s linear infinite;
  --animate-spinner-dash: spinner-dash 1s ease-in-out infinite;

  @keyframes spinner-rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes spinner-dash {
    0% {
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -35px;
    }

    100% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -124px;
    }
  }

  --animate-progress: progress-slide 1.5s linear infinite;

  @keyframes progress-slide {
    from, 15% {
      left: 0%;
      transform: translateX(-100%);
    }

    to {
      left: 100%;
      transform: scaleX(1)
    }
  }
}

@layer components {
  [x-cloak] {
    display: none !important;
  }
  .tooltip {
    @apply rounded-md z-50 max-w-sm text-gray-100 bg-neutral-700 font-semibold p-1 px-3;
  }
  .match {
    @apply bg-gray-200 dark:bg-gray-600
  }
}
```

### How to use

The first step to using a component is adding the required JavaScript files. Components are simply Alpine plugins that define the object used in the `x-data` directive. You can include a plugin file directly from a CDN using a `script` tag placed before the main Alpine script.

```html
<script defer src="https://cdn.jsdelivr.net/npm/litewind-alpine@0.x.x/components/dropdown/dist/cdn.min.js"></script>
```

You can also install npm package and include files locally.

```powershell
npm install litewind-alpine
```

<div class="mt-6">

```javascript
import Alpine from "alpinejs" 
import dropdown from "litewind-alpine/dropdown.js"

Alpine.plugin(dropdown)
```

</div>

Some components may also require additional Alpine plugins. Refer to the component's documentation for any additional requirements.

To use a component in your application, simply copy any example that is closest to your use case. 

### Components basics

Below is a basic overview of the features and structure of the component.

- each component has only one `x-data` directive
- the value of the `x-data` is always a function defined using `Alpine.data`
- component props are passed via `data-*` attributes on the main element
- directives and attributes for internal elements are bound using the `x-bind` directive
- some directives (e.g., `x-text`, `x-for`, `x-transition`) are bound directly in the template to allow customization
- some elements use `class-*` attributes to add styles based on their variant. These classes are conditionally added or removed using Alpine `x-bind:class` directive
- classes for transitions are defined using the `x-alt-transition` directive, which is part of the transition plugin. You can read more about it here.
