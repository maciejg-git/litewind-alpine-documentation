---
layout: "layouts/container.liquid"
tags: introduction
name: Introduction
---
## Introduction

### Installation

Litewind is a component framework for Alpine and Tailwind. To install them follow the instructions in their offical documentation. Here are the simplest and fastest install options to get started.

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

With Tailwind set up add the following to the Tailwind config file.

- import CSS files for parts of the framework that cannot be styled in the template. These include, for example, tooltips, animations for the spinner etc
- extend colors definition. Litewind uses these colors to mantain consistent look of the components.
- add the style for the x-cloak directive of Alpine
- optionally enable manual switching for a dark mode

### How to use

To use component in your application simply copy any example that is closest to your use case. For components that has x-data directive you need to include js file for that component. Some of the components may also require Alpine plugins.

### Customization
