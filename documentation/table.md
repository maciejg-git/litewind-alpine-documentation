---
layout: "layouts/container.liquid"
tags: component
name: Table
examples: {
    tableSimple: [
        {
            label: "Template",
            file: "examples/table-simple.liquid",
            language: "html",
            name: "tableSimple",
        },
        {
            label: "Store",
            file: "../examples/table/table-store.js",
            language: "javascript",
            name: "tableSimple",
        },
    ],
    tableDefinition: [
        {
            label: "Template",
            file: "examples/table-definition.liquid",
            language: "html",
            name: "tableDefinition",
        },
        {
            label: "Store",
            file: "../examples/table/table-definition-store.js",
            language: "javascript",
            name: "tableDefinition",
        },
    ],
    tableFilterPagination: [
        {
            label: "Template",
            file: "examples/table-filter-pagination.liquid",
            language: "html",
            name: "tableDefinition",
        },
        {
            label: "Store",
            file: "../examples/table/table-filter-pagination-store.js",
            language: "javascript",
            name: "tableDefinition",
        },
    ],
}
props: [
    {
        name: "data-items",
        type: ["Array"],
        default: "[]",
        description: "Data to display in the table.",
    },
    {
        name: "data-primary-key",
        type: ["String"],
        default: "empty string",
        description: "This prop should be the name of the property that is unique for every record.",
    },
    {
        name: "data-definition",
        type: ["Array"],
        default: "[]",
        description: "Table definition is an optional `array` of `objects` that defines columns of the table. See the detailed explanation below.",
    },
    {
        name: "data-filter",
        type: ["String"],
        default: "empty string",
        description: "String used to filter items.",
    },
    {
        name: "data-page",
        type: ["Number"],
        default: "1",
        description: "Current page number.",
    },
    {
        name: "data-items-per-page",
        type: ["Number"],
        default: "0",
        description: "Number of records (rows) on the single page. Setting it to the `0` disables pagination.",
    },
]
definition: [
    {
        name: "key",
        type: ["String"],
        default: "empty string",
        description: "The `key` defines which property of the record object will be rendered in the column.",
    },
    {
        name: "sortable",
        type: ["Boolean"],
        default: "false",
        description: "Enables sorting of the column.",
    },
    {
        name: "filterable",
        type: ["Boolean"],
        default: "true",
        description: "Enables filtering of the column.",
    },
    {
        name: "label",
        type: ["String"],
        default: "undefined",
        description: "Sets header for this column. If not provided header is the same as key converted to Header Case.",
    },
]
events: [
    {
        name: "update:items-filtered",
        type: ["Array"],
        description: "Event dispatched after each filtering of the items. This can be useful, for example to update pagination component.",
    },
]
---
## Table

{% render "github-link.liquid" component: "table" %}

The table component is used to generate tables from arrays. Tables can be static or include features like filtering, sorting, pagination, reordering and others.

{% render "example.liquid" example: "examples/table-simple.liquid", tabs: examples.tableSimple %}

### Usage

```html
<script defer src="https://cdn.jsdelivr.net/npm/litewind-alpine@0.x.x/components/table/dist/cdn.min.js"></script>
```

The data for the component is provided by the `table` function in the `x-data` directive and the props in the `data-*` attributes. Because of a lot of shared state (filter, pagination etc) it is recommended to set up data as a separate store and then use `$store` magic to set table props.

#### Props

{% render "reference.liquid" props: props %}

#### Events

{% render "reference.liquid" props: events %}

### Definition

Table definition is an optional `array` of `objects` that defines columns of the table. Each object has one required, unique `key` property and number of optional properties. The `key` defines which property of the record object will be rendered in the column. If key is not found empty column is added.

If definition is not provided component makes one using the first record of the data. All additional properties are set to default values. This may be enough for simple tables however to use features like sorting, filtering etc you need to provide definition array.

{% render "reference.liquid" props: definition %}

{% render "example.liquid" example: "examples/table-definition.liquid", tabs: examples.tableDefinition %}

### Pagination and filtering

To enable pagination set `data-items-per-page` to any number greater than `0`. Current page can be changed with the `page` prop. In the following example current page of the table is controlled by the pagination component.

Filtering is enabled by default for all columns. Data is filtered depending on the `string` in the `data-filter` prop. The `update:items-filtered` event is used to update number of items for the pagination component.

{% render "example.liquid" example: "examples/table-filter-pagination.liquid", tabs: examples.tableFilterPagination %}
