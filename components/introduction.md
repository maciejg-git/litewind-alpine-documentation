---
layout: "layouts/container.liquid"
tags: introduction
name: Introduction
---
## Introduction

Litewind is a component framework for Alpine and Tailwind.

Here is a short description from the Alpine homepage.

> "Alpine is a rugged, minimal tool for composing behavior directly in your markup. Think of it like jQuery for the modern web. Plop in a script tag and get going."

Tailwind follows similar approach but for CSS.

> "A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup."

### Installation

To install Alpine and Tailwind follow the instructions in their offical documentation. Here are the simplest and fastest install options to get started.

#### Alpine

For the Alpine you can just include CDN link in the `script` tag:

```html
<script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
```

Alpine can also be installed as a npm package, check the details in the documentation.

#### Tailwind

For the Tailwind the simplest install option is the Tailwind CLI tool.

```powershell
npm install tailwindcss @tailwindcss/cli
```

Running Tailwind CLI requires importing Tailwind to the main CSS file and adding compiled CSS file to the HTML. Check the full description here.

With Tailwind set up add the following to the main CSS file.

- import CSS files for parts of the framework that cannot be styled in the template. These include, for example, tooltips, animations for the spinner etc
- extend colors definition. Litewind uses these colors to mantain consistent look of the components.
- add the style for the `x-cloak` directive of Alpine. Check details for the `x-cloak` in the documentation.
- optionally enable manual switching for a dark mode

### How to use

To use component in your application simply copy any example that is closest to your use case. For components that has `x-data` directive you need to include js file for that component. Some of the components may also require offical Alpine plugins.

### Components basics

Below is a basic overview of the features and structure of the component.

- there is only one x-data for each component
- the value of the x-data is always a function defined in the components js file
- the props of the component are provided in the data-* attributes on the main element
- the directives and attributes for other elements are bound with the x-bind directive
- some directives are bound directly in the template to allow cutomization. These inlude, for example, x-text, x-for, x-transition etc.
- some elements have class-* attributes to add styles depending on the variant of the element
